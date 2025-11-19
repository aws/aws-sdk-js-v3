// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessAssociationSourceType = {
  VPCE: "VPCE",
} as const;
/**
 * @public
 */
export type AccessAssociationSourceType =
  (typeof AccessAssociationSourceType)[keyof typeof AccessAssociationSourceType];

/**
 * @public
 * @enum
 */
export const ApiKeysFormat = {
  csv: "csv",
} as const;
/**
 * @public
 */
export type ApiKeysFormat = (typeof ApiKeysFormat)[keyof typeof ApiKeysFormat];

/**
 * @public
 * @enum
 */
export const ApiKeySourceType = {
  AUTHORIZER: "AUTHORIZER",
  HEADER: "HEADER",
} as const;
/**
 * @public
 */
export type ApiKeySourceType = (typeof ApiKeySourceType)[keyof typeof ApiKeySourceType];

/**
 * @public
 * @enum
 */
export const AuthorizerType = {
  COGNITO_USER_POOLS: "COGNITO_USER_POOLS",
  REQUEST: "REQUEST",
  TOKEN: "TOKEN",
} as const;
/**
 * @public
 */
export type AuthorizerType = (typeof AuthorizerType)[keyof typeof AuthorizerType];

/**
 * @public
 * @enum
 */
export const CacheClusterSize = {
  SIZE_0_POINT_5_GB: "0.5",
  SIZE_118_GB: "118",
  SIZE_13_POINT_5_GB: "13.5",
  SIZE_1_POINT_6_GB: "1.6",
  SIZE_237_GB: "237",
  SIZE_28_POINT_4_GB: "28.4",
  SIZE_58_POINT_2_GB: "58.2",
  SIZE_6_POINT_1_GB: "6.1",
} as const;
/**
 * @public
 */
export type CacheClusterSize = (typeof CacheClusterSize)[keyof typeof CacheClusterSize];

/**
 * @public
 * @enum
 */
export const DocumentationPartType = {
  API: "API",
  AUTHORIZER: "AUTHORIZER",
  METHOD: "METHOD",
  MODEL: "MODEL",
  PATH_PARAMETER: "PATH_PARAMETER",
  QUERY_PARAMETER: "QUERY_PARAMETER",
  REQUEST_BODY: "REQUEST_BODY",
  REQUEST_HEADER: "REQUEST_HEADER",
  RESOURCE: "RESOURCE",
  RESPONSE: "RESPONSE",
  RESPONSE_BODY: "RESPONSE_BODY",
  RESPONSE_HEADER: "RESPONSE_HEADER",
} as const;
/**
 * @public
 */
export type DocumentationPartType = (typeof DocumentationPartType)[keyof typeof DocumentationPartType];

/**
 * @public
 * @enum
 */
export const IpAddressType = {
  dualstack: "dualstack",
  ipv4: "ipv4",
} as const;
/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const EndpointType = {
  EDGE: "EDGE",
  PRIVATE: "PRIVATE",
  REGIONAL: "REGIONAL",
} as const;
/**
 * @public
 */
export type EndpointType = (typeof EndpointType)[keyof typeof EndpointType];

/**
 * @public
 * @enum
 */
export const RoutingMode = {
  BASE_PATH_MAPPING_ONLY: "BASE_PATH_MAPPING_ONLY",
  ROUTING_RULE_ONLY: "ROUTING_RULE_ONLY",
  ROUTING_RULE_THEN_BASE_PATH_MAPPING: "ROUTING_RULE_THEN_BASE_PATH_MAPPING",
} as const;
/**
 * @public
 */
export type RoutingMode = (typeof RoutingMode)[keyof typeof RoutingMode];

/**
 * @public
 * @enum
 */
export const SecurityPolicy = {
  TLS_1_0: "TLS_1_0",
  TLS_1_2: "TLS_1_2",
} as const;
/**
 * @public
 */
export type SecurityPolicy = (typeof SecurityPolicy)[keyof typeof SecurityPolicy];

/**
 * @public
 * @enum
 */
export const DomainNameStatus = {
  AVAILABLE: "AVAILABLE",
  PENDING: "PENDING",
  PENDING_CERTIFICATE_REIMPORT: "PENDING_CERTIFICATE_REIMPORT",
  PENDING_OWNERSHIP_VERIFICATION: "PENDING_OWNERSHIP_VERIFICATION",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type DomainNameStatus = (typeof DomainNameStatus)[keyof typeof DomainNameStatus];

/**
 * @public
 * @enum
 */
export const ConnectionType = {
  INTERNET: "INTERNET",
  VPC_LINK: "VPC_LINK",
} as const;
/**
 * @public
 */
export type ConnectionType = (typeof ConnectionType)[keyof typeof ConnectionType];

/**
 * @public
 * @enum
 */
export const ContentHandlingStrategy = {
  CONVERT_TO_BINARY: "CONVERT_TO_BINARY",
  CONVERT_TO_TEXT: "CONVERT_TO_TEXT",
} as const;
/**
 * @public
 */
export type ContentHandlingStrategy = (typeof ContentHandlingStrategy)[keyof typeof ContentHandlingStrategy];

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  AWS: "AWS",
  AWS_PROXY: "AWS_PROXY",
  HTTP: "HTTP",
  HTTP_PROXY: "HTTP_PROXY",
  MOCK: "MOCK",
} as const;
/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * @enum
 */
export const CacheClusterStatus = {
  AVAILABLE: "AVAILABLE",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FLUSH_IN_PROGRESS: "FLUSH_IN_PROGRESS",
  NOT_AVAILABLE: "NOT_AVAILABLE",
} as const;
/**
 * @public
 */
export type CacheClusterStatus = (typeof CacheClusterStatus)[keyof typeof CacheClusterStatus];

/**
 * @public
 * @enum
 */
export const UnauthorizedCacheControlHeaderStrategy = {
  FAIL_WITH_403: "FAIL_WITH_403",
  SUCCEED_WITHOUT_RESPONSE_HEADER: "SUCCEED_WITHOUT_RESPONSE_HEADER",
  SUCCEED_WITH_RESPONSE_HEADER: "SUCCEED_WITH_RESPONSE_HEADER",
} as const;
/**
 * @public
 */
export type UnauthorizedCacheControlHeaderStrategy =
  (typeof UnauthorizedCacheControlHeaderStrategy)[keyof typeof UnauthorizedCacheControlHeaderStrategy];

/**
 * @public
 * @enum
 */
export const QuotaPeriodType = {
  DAY: "DAY",
  MONTH: "MONTH",
  WEEK: "WEEK",
} as const;
/**
 * @public
 */
export type QuotaPeriodType = (typeof QuotaPeriodType)[keyof typeof QuotaPeriodType];

/**
 * @public
 * @enum
 */
export const VpcLinkStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type VpcLinkStatus = (typeof VpcLinkStatus)[keyof typeof VpcLinkStatus];

/**
 * @public
 * @enum
 */
export const GatewayResponseType = {
  ACCESS_DENIED: "ACCESS_DENIED",
  API_CONFIGURATION_ERROR: "API_CONFIGURATION_ERROR",
  AUTHORIZER_CONFIGURATION_ERROR: "AUTHORIZER_CONFIGURATION_ERROR",
  AUTHORIZER_FAILURE: "AUTHORIZER_FAILURE",
  BAD_REQUEST_BODY: "BAD_REQUEST_BODY",
  BAD_REQUEST_PARAMETERS: "BAD_REQUEST_PARAMETERS",
  DEFAULT_4XX: "DEFAULT_4XX",
  DEFAULT_5XX: "DEFAULT_5XX",
  EXPIRED_TOKEN: "EXPIRED_TOKEN",
  INTEGRATION_FAILURE: "INTEGRATION_FAILURE",
  INTEGRATION_TIMEOUT: "INTEGRATION_TIMEOUT",
  INVALID_API_KEY: "INVALID_API_KEY",
  INVALID_SIGNATURE: "INVALID_SIGNATURE",
  MISSING_AUTHENTICATION_TOKEN: "MISSING_AUTHENTICATION_TOKEN",
  QUOTA_EXCEEDED: "QUOTA_EXCEEDED",
  REQUEST_TOO_LARGE: "REQUEST_TOO_LARGE",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  THROTTLED: "THROTTLED",
  UNAUTHORIZED: "UNAUTHORIZED",
  UNSUPPORTED_MEDIA_TYPE: "UNSUPPORTED_MEDIA_TYPE",
  WAF_FILTERED: "WAF_FILTERED",
} as const;
/**
 * @public
 */
export type GatewayResponseType = (typeof GatewayResponseType)[keyof typeof GatewayResponseType];

/**
 * @public
 * @enum
 */
export const LocationStatusType = {
  DOCUMENTED: "DOCUMENTED",
  UNDOCUMENTED: "UNDOCUMENTED",
} as const;
/**
 * @public
 */
export type LocationStatusType = (typeof LocationStatusType)[keyof typeof LocationStatusType];

/**
 * @public
 * @enum
 */
export const ResourceOwner = {
  OTHER_ACCOUNTS: "OTHER_ACCOUNTS",
  SELF: "SELF",
} as const;
/**
 * @public
 */
export type ResourceOwner = (typeof ResourceOwner)[keyof typeof ResourceOwner];

/**
 * @public
 * @enum
 */
export const PutMode = {
  Merge: "merge",
  Overwrite: "overwrite",
} as const;
/**
 * @public
 */
export type PutMode = (typeof PutMode)[keyof typeof PutMode];

/**
 * @public
 * @enum
 */
export const Op = {
  add: "add",
  copy: "copy",
  move: "move",
  remove: "remove",
  replace: "replace",
  test: "test",
} as const;
/**
 * @public
 */
export type Op = (typeof Op)[keyof typeof Op];
