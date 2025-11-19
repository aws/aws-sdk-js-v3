// smithy-typescript generated code
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
export const ProtocolType = {
  HTTP: "HTTP",
  WEBSOCKET: "WEBSOCKET",
} as const;
/**
 * @public
 */
export type ProtocolType = (typeof ProtocolType)[keyof typeof ProtocolType];

/**
 * @public
 * @enum
 */
export const AuthorizerType = {
  JWT: "JWT",
  REQUEST: "REQUEST",
} as const;
/**
 * @public
 */
export type AuthorizerType = (typeof AuthorizerType)[keyof typeof AuthorizerType];

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  DEPLOYED: "DEPLOYED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * @enum
 */
export const DomainNameStatus = {
  AVAILABLE: "AVAILABLE",
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
export const EndpointType = {
  EDGE: "EDGE",
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
export const RoutingMode = {
  API_MAPPING_ONLY: "API_MAPPING_ONLY",
  ROUTING_RULE_ONLY: "ROUTING_RULE_ONLY",
  ROUTING_RULE_THEN_API_MAPPING: "ROUTING_RULE_THEN_API_MAPPING",
} as const;
/**
 * @public
 */
export type RoutingMode = (typeof RoutingMode)[keyof typeof RoutingMode];

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
export const PassthroughBehavior = {
  NEVER: "NEVER",
  WHEN_NO_MATCH: "WHEN_NO_MATCH",
  WHEN_NO_TEMPLATES: "WHEN_NO_TEMPLATES",
} as const;
/**
 * @public
 */
export type PassthroughBehavior = (typeof PassthroughBehavior)[keyof typeof PassthroughBehavior];

/**
 * @public
 * @enum
 */
export const PreviewStatus = {
  PREVIEW_FAILED: "PREVIEW_FAILED",
  PREVIEW_IN_PROGRESS: "PREVIEW_IN_PROGRESS",
  PREVIEW_READY: "PREVIEW_READY",
} as const;
/**
 * @public
 */
export type PreviewStatus = (typeof PreviewStatus)[keyof typeof PreviewStatus];

/**
 * @public
 * @enum
 */
export const PublishStatus = {
  DISABLED: "DISABLED",
  PUBLISHED: "PUBLISHED",
  PUBLISH_FAILED: "PUBLISH_FAILED",
  PUBLISH_IN_PROGRESS: "PUBLISH_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type PublishStatus = (typeof PublishStatus)[keyof typeof PublishStatus];

/**
 * @public
 * @enum
 */
export const Status = {
  AVAILABLE: "AVAILABLE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 * @enum
 */
export const TryItState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type TryItState = (typeof TryItState)[keyof typeof TryItState];

/**
 * @public
 * @enum
 */
export const AuthorizationType = {
  AWS_IAM: "AWS_IAM",
  CUSTOM: "CUSTOM",
  JWT: "JWT",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type AuthorizationType = (typeof AuthorizationType)[keyof typeof AuthorizationType];

/**
 * @public
 * @enum
 */
export const LoggingLevel = {
  ERROR: "ERROR",
  INFO: "INFO",
  OFF: "OFF",
} as const;
/**
 * @public
 */
export type LoggingLevel = (typeof LoggingLevel)[keyof typeof LoggingLevel];

/**
 * @public
 * @enum
 */
export const VpcLinkStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
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
export const VpcLinkVersion = {
  V2: "V2",
} as const;
/**
 * @public
 */
export type VpcLinkVersion = (typeof VpcLinkVersion)[keyof typeof VpcLinkVersion];
