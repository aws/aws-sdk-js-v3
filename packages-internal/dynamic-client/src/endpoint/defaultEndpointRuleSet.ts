import type { RuleSetObject } from "@smithy/types";

import type { AstShape } from "../ast/types";

/**
 * The basic (non-AWS) default endpoint rule-set.
 *
 * @internal
 */
export const DEFAULT_ENDPOINT_RULESET: RuleSetObject = {
  version: "1.0",
  parameters: {
    Endpoint: {
      type: "string",
      builtIn: "SDK::Endpoint",
      documentation: "Endpoint used for making requests. Should be formatted as a URI.",
    },
  } as RuleSetObject["parameters"],
  rules: [
    {
      conditions: [{ fn: "isSet", argv: [{ ref: "Endpoint" }] }],
      endpoint: { url: { ref: "Endpoint" } },
      type: "endpoint",
    },
    {
      conditions: [],
      error: "(default endpointRuleSet) endpoint is not set - you must configure an endpoint.",
      type: "error",
    },
  ] as RuleSetObject["rules"],
};

/**
 * Builds the default regional AWS endpoint rule-set for a service with the
 * given endpoint prefix.
 *
 * @param endpointPrefix - the service endpoint prefix (from the
 *   `aws.api#service` trait).
 *
 * @returns the default regional AWS rule-set.
 *
 * @internal
 */
export function getDefaultAwsEndpointRuleSet(endpointPrefix: string): RuleSetObject {
  return {
    version: "1.0",
    parameters: {
      Region: {
        builtIn: "AWS::Region",
        required: false,
        documentation: "The AWS Region. This is a default regional AWS endpointRuleSet.",
        type: "String",
      },
      UseDualStack: {
        builtIn: "AWS::UseDualStack",
        required: true,
        default: false,
        documentation: "Whether to use dual-stack.",
        type: "Boolean",
      },
      UseFIPS: {
        builtIn: "AWS::UseFIPS",
        required: true,
        default: false,
        documentation: "Whether to use FIPS-compliant regional endpoint.",
        type: "Boolean",
      },
      Endpoint: {
        builtIn: "SDK::Endpoint",
        required: false,
        documentation: "Override the endpoint.",
        type: "String",
      },
    } as RuleSetObject["parameters"],
    rules: [
      {
        conditions: [{ fn: "isSet", argv: [{ ref: "Endpoint" }] }],
        rules: [
          {
            conditions: [{ fn: "booleanEquals", argv: [{ ref: "UseFIPS" }, true] }],
            error: "Invalid Configuration: FIPS and custom endpoint are not supported",
            type: "error",
          },
          {
            conditions: [{ fn: "booleanEquals", argv: [{ ref: "UseDualStack" }, true] }],
            error: "Invalid Configuration: Dualstack and custom endpoint are not supported",
            type: "error",
          },
          {
            conditions: [],
            endpoint: { url: { ref: "Endpoint" }, properties: {}, headers: {} },
            type: "endpoint",
          },
        ],
        type: "tree",
      },
      {
        conditions: [{ fn: "isSet", argv: [{ ref: "Region" }] }],
        rules: [
          {
            conditions: [{ fn: "aws.partition", argv: [{ ref: "Region" }], assign: "PartitionResult" }],
            rules: [
              {
                conditions: [
                  { fn: "booleanEquals", argv: [{ ref: "UseFIPS" }, true] },
                  { fn: "booleanEquals", argv: [{ ref: "UseDualStack" }, true] },
                ],
                rules: [
                  {
                    conditions: [
                      {
                        fn: "booleanEquals",
                        argv: [true, { fn: "getAttr", argv: [{ ref: "PartitionResult" }, "supportsFIPS"] }],
                      },
                      {
                        fn: "booleanEquals",
                        argv: [true, { fn: "getAttr", argv: [{ ref: "PartitionResult" }, "supportsDualStack"] }],
                      },
                    ],
                    rules: [
                      {
                        conditions: [],
                        endpoint: {
                          url: `https://${endpointPrefix}-fips.{Region}.{PartitionResult#dualStackDnsSuffix}`,
                          properties: {},
                          headers: {},
                        },
                        type: "endpoint",
                      },
                    ],
                    type: "tree",
                  },
                  {
                    conditions: [],
                    error: "FIPS and DualStack are enabled, but this partition does not support one or both",
                    type: "error",
                  },
                ],
                type: "tree",
              },
              {
                conditions: [{ fn: "booleanEquals", argv: [{ ref: "UseFIPS" }, true] }],
                rules: [
                  {
                    conditions: [
                      {
                        fn: "booleanEquals",
                        argv: [{ fn: "getAttr", argv: [{ ref: "PartitionResult" }, "supportsFIPS"] }, true],
                      },
                    ],
                    rules: [
                      {
                        conditions: [
                          {
                            fn: "stringEquals",
                            argv: [{ fn: "getAttr", argv: [{ ref: "PartitionResult" }, "name"] }, "aws-us-gov"],
                          },
                        ],
                        endpoint: {
                          url: `https://${endpointPrefix}.{Region}.amazonaws.com`,
                          properties: {},
                          headers: {},
                        },
                        type: "endpoint",
                      },
                      {
                        conditions: [],
                        endpoint: {
                          url: `https://${endpointPrefix}-fips.{Region}.{PartitionResult#dnsSuffix}`,
                          properties: {},
                          headers: {},
                        },
                        type: "endpoint",
                      },
                    ],
                    type: "tree",
                  },
                  {
                    conditions: [],
                    error: "FIPS is enabled but this partition does not support FIPS",
                    type: "error",
                  },
                ],
                type: "tree",
              },
              {
                conditions: [{ fn: "booleanEquals", argv: [{ ref: "UseDualStack" }, true] }],
                rules: [
                  {
                    conditions: [
                      {
                        fn: "booleanEquals",
                        argv: [true, { fn: "getAttr", argv: [{ ref: "PartitionResult" }, "supportsDualStack"] }],
                      },
                    ],
                    rules: [
                      {
                        conditions: [],
                        endpoint: {
                          url: `https://${endpointPrefix}.{Region}.{PartitionResult#dualStackDnsSuffix}`,
                          properties: {},
                          headers: {},
                        },
                        type: "endpoint",
                      },
                    ],
                    type: "tree",
                  },
                  {
                    conditions: [],
                    error: "DualStack is enabled but this partition does not support DualStack",
                    type: "error",
                  },
                ],
                type: "tree",
              },
              {
                conditions: [],
                endpoint: {
                  url: `https://${endpointPrefix}.{Region}.{PartitionResult#dnsSuffix}`,
                  properties: {},
                  headers: {},
                },
                type: "endpoint",
              },
            ],
            type: "tree",
          },
        ],
        type: "tree",
      },
      {
        conditions: [],
        error: "Invalid Configuration: Missing Region",
        type: "error",
      },
    ] as RuleSetObject["rules"],
  };
}

/**
 * Selects the default endpoint rule-set for a service that ships neither a
 * `smithy.rules#endpointRuleSet` nor a `smithy.rules#endpointBdd` trait.
 *
 * @param service - the service shape.
 *
 * @returns the default rule-set to emplace.
 *
 * @internal
 */
export function getDefaultEndpointRuleSet(service: AstShape): RuleSetObject {
  const awsService = service.traits?.["aws.api#service"] as
    | { endpointPrefix?: string; arnNamespace?: string }
    | undefined;
  if (awsService) {
    // ServiceTrait.getEndpointPrefix() falls back to arnNamespace when
    // endpointPrefix is omitted.
    const endpointPrefix = awsService.endpointPrefix ?? awsService.arnNamespace;
    if (endpointPrefix) {
      return getDefaultAwsEndpointRuleSet(endpointPrefix);
    }
  }
  return DEFAULT_ENDPOINT_RULESET;
}
