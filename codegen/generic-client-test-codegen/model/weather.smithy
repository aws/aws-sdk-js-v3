$version: "2.0"

namespace example.weather

use aws.auth#sigv4
use aws.api#service

@authDefinition
@trait
structure customAuth {}

@trait
@protocolDefinition
structure fakeProtocol {}

@service(sdkId: "weather")
@fakeProtocol
@httpApiKeyAuth(name: "X-Api-Key", in: "header")
@httpBearerAuth
@sigv4(name: "weather")
@customAuth
@auth([sigv4])
service Weather {
    version: "2006-03-01"
    operations: [
        // experimentalIdentityAndAuth
        OnlyHttpApiKeyAuth
        OnlyHttpApiKeyAuthOptional
        OnlyHttpBearerAuth
        OnlyHttpBearerAuthOptional
        OnlyHttpApiKeyAndBearerAuth
        OnlyHttpApiKeyAndBearerAuthReversed
        OnlySigv4Auth
        OnlySigv4AuthOptional
        OnlyCustomAuth
        OnlyCustomAuthOptional
        SameAsService
    ]
}

@http(method: "GET", uri: "/OnlyHttpApiKeyAuth")
@auth([httpApiKeyAuth])
operation OnlyHttpApiKeyAuth {}

@http(method: "GET", uri: "/OnlyHttpBearerAuth")
@auth([httpBearerAuth])
operation OnlyHttpBearerAuth {}

@http(method: "GET", uri: "/OnlySigv4Auth")
@auth([sigv4])
operation OnlySigv4Auth {}

@http(method: "GET", uri: "/OnlyHttpApiKeyAndBearerAuth")
@auth([httpApiKeyAuth, httpBearerAuth])
operation OnlyHttpApiKeyAndBearerAuth {}

@http(method: "GET", uri: "/OnlyHttpApiKeyAndBearerAuthReversed")
@auth([httpBearerAuth, httpApiKeyAuth])
operation OnlyHttpApiKeyAndBearerAuthReversed {}

@http(method: "GET", uri: "/OnlyHttpApiKeyAuthOptional")
@auth([httpApiKeyAuth])
@optionalAuth
operation OnlyHttpApiKeyAuthOptional {}

@http(method: "GET", uri: "/OnlyHttpBearerAuthOptional")
@auth([httpBearerAuth])
@optionalAuth
operation OnlyHttpBearerAuthOptional {}

@http(method: "GET", uri: "/OnlySigv4AuthOptional")
@auth([sigv4])
@optionalAuth
operation OnlySigv4AuthOptional {}

@http(method: "GET", uri: "/OnlyCustomAuth")
@auth([customAuth])
operation OnlyCustomAuth {}

@http(method: "GET", uri: "/OnlyCustomAuthOptional")
@auth([customAuth])
@optionalAuth
operation OnlyCustomAuthOptional {}

@http(method: "GET", uri: "/SameAsService")
operation SameAsService {
  output := {
    service: String
  }
}

apply Weather @smithy.rules#endpointRuleSet( {
    "version": "1.0",
    "parameters": {
    "Region": {
        "builtIn": "AWS::Region",
        "required": false,
        "documentation": "The AWS region used to dispatch the request.",
        "type": "String"
    },
    "UseDualStack": {
        "builtIn": "AWS::UseDualStack",
        "required": true,
        "default": false,
        "documentation": "When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",
        "type": "Boolean"
    },
    "UseFIPS": {
        "builtIn": "AWS::UseFIPS",
        "required": true,
        "default": false,
        "documentation": "When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",
        "type": "Boolean"
    },
    "Endpoint": {
        "builtIn": "SDK::Endpoint",
        "required": false,
        "documentation": "Override the endpoint used to send this request",
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
        "type": "tree",
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
        ]
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
        "type": "tree",
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
            "type": "tree",
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
                "type": "tree",
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
                    "type": "tree",
                    "rules": [
                    {
                        "conditions": [],
                        "endpoint": {
                        "url": "https://weather-fips.{Region}.{PartitionResult#dualStackDnsSuffix}",
                        "properties": {},
                        "headers": {}
                        },
                        "type": "endpoint"
                    }
                    ]
                },
                {
                    "conditions": [],
                    "error": "FIPS and DualStack are enabled, but this partition does not support one or both",
                    "type": "error"
                }
                ]
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
                "type": "tree",
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
                    }
                    ],
                    "type": "tree",
                    "rules": [
                    {
                        "conditions": [
                        {
                            "fn": "stringEquals",
                            "argv": [
                            "aws-us-gov",
                            {
                                "fn": "getAttr",
                                "argv": [
                                {
                                    "ref": "PartitionResult"
                                },
                                "name"
                                ]
                            }
                            ]
                        }
                        ],
                        "endpoint": {
                        "url": "https://weather.{Region}.amazonaws.com",
                        "properties": {},
                        "headers": {}
                        },
                        "type": "endpoint"
                    },
                    {
                        "conditions": [],
                        "endpoint": {
                        "url": "https://weather-fips.{Region}.{PartitionResult#dnsSuffix}",
                        "properties": {},
                        "headers": {}
                        },
                        "type": "endpoint"
                    }
                    ]
                },
                {
                    "conditions": [],
                    "error": "FIPS is enabled but this partition does not support FIPS",
                    "type": "error"
                }
                ]
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
                "type": "tree",
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
                    "type": "tree",
                    "rules": [
                    {
                        "conditions": [],
                        "endpoint": {
                        "url": "https://weather.{Region}.{PartitionResult#dualStackDnsSuffix}",
                        "properties": {},
                        "headers": {}
                        },
                        "type": "endpoint"
                    }
                    ]
                },
                {
                    "conditions": [],
                    "error": "DualStack is enabled but this partition does not support DualStack",
                    "type": "error"
                }
                ]
            },
            {
                "conditions": [],
                "endpoint": {
                "url": "https://weather.{Region}.{PartitionResult#dnsSuffix}",
                "properties": {},
                "headers": {}
                },
                "type": "endpoint"
            }
            ]
        }
        ]
    },
    {
        "conditions": [],
        "error": "Invalid Configuration: Missing Region",
        "type": "error"
    }
    ]
})
