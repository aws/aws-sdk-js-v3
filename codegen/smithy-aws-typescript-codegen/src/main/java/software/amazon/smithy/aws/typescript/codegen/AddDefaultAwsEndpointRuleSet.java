/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.util.List;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.node.Node;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.rulesengine.traits.EndpointRuleSetTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.endpointsV2.AddDefaultEndpointRuleSet;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;


/**
 * This replaces behavior from {@link EndpointGenerator}.
 */
public class AddDefaultAwsEndpointRuleSet implements TypeScriptIntegration {
    private boolean usesDefaultAwsRegionalEndpoints = false;

    /**
     * Running before the smithy-typescript default endpoint integration
     * will prevent it from applying its non-AWS default ruleset and
     * the endpointRequired plugin, both of which are not applicable
     * for default regional AWS endpoints.
     */
    @Override
    public List<String> runBefore() {
        return List.of(AddDefaultEndpointRuleSet.class.getCanonicalName());
    }

    /**
     * Inserts this resolver after the `resolveEndpointConfig` function.
     */
    @Override
    public void mutateClientPlugins(List<RuntimeClientPlugin> plugins) {
        if (!usesDefaultAwsRegionalEndpoints) {
            return;
        }

        /*
        This resolver supports the behavior of endpoints.json-based endpoint provider
        for default regional services: it makes client.config.endpoint optional on the input side,
        but guaranteed on the resolved side.
        */
        RuntimeClientPlugin defaultAwsRegionalEndpoints = RuntimeClientPlugin.builder()
            .withConventions(
                AwsDependency.UTIL_ENDPOINTS.dependency,
                "DefaultAwsRegionalEndpoints",
                RuntimeClientPlugin.Convention.HAS_CONFIG
            )
            .build();

        RuntimeClientPlugin endpointPlugin = plugins.stream()
            .filter(p -> p.getResolveFunction()
                .map(r -> r.getAlias().equals("resolveEndpointConfig"))
                .orElse(false))
            .findAny()
            .orElseThrow(() -> new IllegalStateException("Expected resolveEndpointConfig function in plugins."));

        int index = plugins.indexOf(endpointPlugin);
        plugins.add(index + 1, defaultAwsRegionalEndpoints);
    }

    @Override
    public Model preprocessModel(Model model, TypeScriptSettings settings) {
        Model.Builder modelBuilder = model.toBuilder();

        ServiceShape serviceShape = settings.getService(model);
        if (!serviceShape.hasTrait(EndpointRuleSetTrait.class)
            && AwsTraitsUtils.isAwsService(serviceShape)) {
            // this branch is for models that identify as AWS services
            // but do not include an endpoint ruleset.
            usesDefaultAwsRegionalEndpoints = true;
            modelBuilder.removeShape(serviceShape.toShapeId());
            modelBuilder.addShape(
                serviceShape.toBuilder()
                    .addTrait(getDefaultRegionalEndpointRuleSet(
                        serviceShape.expectTrait(ServiceTrait.class).getEndpointPrefix()
                    ))
                    .build()
            );
        } else {
            usesDefaultAwsRegionalEndpoints = false;
        }

        return modelBuilder.build();
    }

    private EndpointRuleSetTrait getDefaultRegionalEndpointRuleSet(String endpointPrefix) {
        return EndpointRuleSetTrait.builder()
            .ruleSet(Node.parse("""
{
  "version": "1.0",
  "parameters": {
    "Region": {
      "builtIn": "AWS::Region",
      "required": false,
      "documentation": "The AWS Region. This is a default regional AWS endpointRuleSet.",
      "type": "String"
    },
    "UseDualStack": {
      "builtIn": "AWS::UseDualStack",
      "required": true,
      "default": false,
      "documentation": "Whether to use dual-stack.",
      "type": "Boolean"
    },
    "UseFIPS": {
      "builtIn": "AWS::UseFIPS",
      "required": true,
      "default": false,
      "documentation": "Whether to use FIPS-compliant regional endpoint.",
      "type": "Boolean"
    },
    "Endpoint": {
      "builtIn": "SDK::Endpoint",
      "required": false,
      "documentation": "Override the endpoint.",
      "type": "String"
    }
  },
  "rules": [
    {
      "conditions": [
        {
          "fn": "isSet",
          "argv": [
            {
              "ref": "Endpoint"
            }
          ]
        }
      ],
      "rules": [
        {
          "conditions": [
            {
              "fn": "booleanEquals",
              "argv": [
                {
                  "ref": "UseFIPS"
                },
                true
              ]
            }
          ],
          "error": "Invalid Configuration: FIPS and custom endpoint are not supported",
          "type": "error"
        },
        {
          "conditions": [
            {
              "fn": "booleanEquals",
              "argv": [
                {
                  "ref": "UseDualStack"
                },
                true
              ]
            }
          ],
          "error": "Invalid Configuration: Dualstack and custom endpoint are not supported",
          "type": "error"
        },
        {
          "conditions": [],
          "endpoint": {
            "url": {
              "ref": "Endpoint"
            },
            "properties": {},
            "headers": {}
          },
          "type": "endpoint"
        }
      ],
      "type": "tree"
    },
    {
      "conditions": [
        {
          "fn": "isSet",
          "argv": [
            {
              "ref": "Region"
            }
          ]
        }
      ],
      "rules": [
        {
          "conditions": [
            {
              "fn": "aws.partition",
              "argv": [
                {
                  "ref": "Region"
                }
              ],
              "assign": "PartitionResult"
            }
          ],
          "rules": [
            {
              "conditions": [
                {
                  "fn": "booleanEquals",
                  "argv": [
                    {
                      "ref": "UseFIPS"
                    },
                    true
                  ]
                },
                {
                  "fn": "booleanEquals",
                  "argv": [
                    {
                      "ref": "UseDualStack"
                    },
                    true
                  ]
                }
              ],
              "rules": [
                {
                  "conditions": [
                    {
                      "fn": "booleanEquals",
                      "argv": [
                        true,
                        {
                          "fn": "getAttr",
                          "argv": [
                            {
                              "ref": "PartitionResult"
                            },
                            "supportsFIPS"
                          ]
                        }
                      ]
                    },
                    {
                      "fn": "booleanEquals",
                      "argv": [
                        true,
                        {
                          "fn": "getAttr",
                          "argv": [
                            {
                              "ref": "PartitionResult"
                            },
                            "supportsDualStack"
                          ]
                        }
                      ]
                    }
                  ],
                  "rules": [
                    {
                      "conditions": [],
                      "endpoint": {
                        "url": "https://%1$s-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                        "properties": {},
                        "headers": {}
                      },
                      "type": "endpoint"
                    }
                  ],
                  "type": "tree"
                },
                {
                  "conditions": [],
                  "error": "FIPS and DualStack are enabled, but this partition does not support one or both",
                  "type": "error"
                }
              ],
              "type": "tree"
            },
            {
              "conditions": [
                {
                  "fn": "booleanEquals",
                  "argv": [
                    {
                      "ref": "UseFIPS"
                    },
                    true
                  ]
                }
              ],
              "rules": [
                {
                  "conditions": [
                    {
                      "fn": "booleanEquals",
                      "argv": [
                        {
                          "fn": "getAttr",
                          "argv": [
                            {
                              "ref": "PartitionResult"
                            },
                            "supportsFIPS"
                          ]
                        },
                        true
                      ]
                    }
                  ],
                  "rules": [
                    {
                      "conditions": [
                        {
                          "fn": "stringEquals",
                          "argv": [
                            {
                              "fn": "getAttr",
                              "argv": [
                                {
                                  "ref": "PartitionResult"
                                },
                                "name"
                              ]
                            },
                            "aws-us-gov"
                          ]
                        }
                      ],
                      "endpoint": {
                        "url": "https://%1$s.{Region}.amazonaws.com",
                        "properties": {},
                        "headers": {}
                      },
                      "type": "endpoint"
                    },
                    {
                      "conditions": [],
                      "endpoint": {
                        "url": "https://%1$s-fips.{Region}.{PartitionResult#dnsSuffix}",
                        "properties": {},
                        "headers": {}
                      },
                      "type": "endpoint"
                    }
                  ],
                  "type": "tree"
                },
                {
                  "conditions": [],
                  "error": "FIPS is enabled but this partition does not support FIPS",
                  "type": "error"
                }
              ],
              "type": "tree"
            },
            {
              "conditions": [
                {
                  "fn": "booleanEquals",
                  "argv": [
                    {
                      "ref": "UseDualStack"
                    },
                    true
                  ]
                }
              ],
              "rules": [
                {
                  "conditions": [
                    {
                      "fn": "booleanEquals",
                      "argv": [
                        true,
                        {
                          "fn": "getAttr",
                          "argv": [
                            {
                              "ref": "PartitionResult"
                            },
                            "supportsDualStack"
                          ]
                        }
                      ]
                    }
                  ],
                  "rules": [
                    {
                      "conditions": [],
                      "endpoint": {
                        "url": "https://%1$s.{Region}.{PartitionResult#dualStackDnsSuffix}",
                        "properties": {},
                        "headers": {}
                      },
                      "type": "endpoint"
                    }
                  ],
                  "type": "tree"
                },
                {
                  "conditions": [],
                  "error": "DualStack is enabled but this partition does not support DualStack",
                  "type": "error"
                }
              ],
              "type": "tree"
            },
            {
              "conditions": [],
              "endpoint": {
                "url": "https://%1$s.{Region}.{PartitionResult#dnsSuffix}",
                "properties": {},
                "headers": {}
              },
              "type": "endpoint"
            }
          ],
          "type": "tree"
        }
      ],
      "type": "tree"
    },
    {
      "conditions": [],
      "error": "Invalid Configuration: Missing Region",
      "type": "error"
    }
  ]
}
""".formatted(endpointPrefix)))
            .build();
    }
}
