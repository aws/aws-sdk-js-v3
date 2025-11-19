// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AgentRuntimeEndpointStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AgentRuntimeEndpointStatus = (typeof AgentRuntimeEndpointStatus)[keyof typeof AgentRuntimeEndpointStatus];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CannotParse",
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  IDEMPOTENT_PARAMETER_MISMATCH_EXCEPTION: "IdempotentParameterMismatchException",
  RESOURCE_CONFLICT: "ResourceConflict",
  ROOT_EVENT_IN_OTHER_SESSION: "EventInOtherSession",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const AgentManagedRuntimeType = {
  PYTHON_3_10: "PYTHON_3_10",
  PYTHON_3_11: "PYTHON_3_11",
  PYTHON_3_12: "PYTHON_3_12",
  PYTHON_3_13: "PYTHON_3_13",
} as const;
/**
 * @public
 */
export type AgentManagedRuntimeType = (typeof AgentManagedRuntimeType)[keyof typeof AgentManagedRuntimeType];

/**
 * @public
 * @enum
 */
export const NetworkMode = {
  PUBLIC: "PUBLIC",
  VPC: "VPC",
} as const;
/**
 * @public
 */
export type NetworkMode = (typeof NetworkMode)[keyof typeof NetworkMode];

/**
 * @public
 * @enum
 */
export const ServerProtocol = {
  A2A: "A2A",
  HTTP: "HTTP",
  MCP: "MCP",
} as const;
/**
 * @public
 */
export type ServerProtocol = (typeof ServerProtocol)[keyof typeof ServerProtocol];

/**
 * @public
 * @enum
 */
export const AgentRuntimeStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type AgentRuntimeStatus = (typeof AgentRuntimeStatus)[keyof typeof AgentRuntimeStatus];

/**
 * @public
 * @enum
 */
export const BrowserNetworkMode = {
  PUBLIC: "PUBLIC",
  VPC: "VPC",
} as const;
/**
 * @public
 */
export type BrowserNetworkMode = (typeof BrowserNetworkMode)[keyof typeof BrowserNetworkMode];

/**
 * @public
 * @enum
 */
export const BrowserStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  READY: "READY",
} as const;
/**
 * @public
 */
export type BrowserStatus = (typeof BrowserStatus)[keyof typeof BrowserStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  CUSTOM: "CUSTOM",
  SYSTEM: "SYSTEM",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const CodeInterpreterNetworkMode = {
  PUBLIC: "PUBLIC",
  SANDBOX: "SANDBOX",
  VPC: "VPC",
} as const;
/**
 * @public
 */
export type CodeInterpreterNetworkMode = (typeof CodeInterpreterNetworkMode)[keyof typeof CodeInterpreterNetworkMode];

/**
 * @public
 * @enum
 */
export const CodeInterpreterStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  READY: "READY",
} as const;
/**
 * @public
 */
export type CodeInterpreterStatus = (typeof CodeInterpreterStatus)[keyof typeof CodeInterpreterStatus];

/**
 * @public
 * @enum
 */
export const AuthorizerType = {
  AWS_IAM: "AWS_IAM",
  CUSTOM_JWT: "CUSTOM_JWT",
} as const;
/**
 * @public
 */
export type AuthorizerType = (typeof AuthorizerType)[keyof typeof AuthorizerType];

/**
 * @public
 * @enum
 */
export const ExceptionLevel = {
  DEBUG: "DEBUG",
} as const;
/**
 * @public
 */
export type ExceptionLevel = (typeof ExceptionLevel)[keyof typeof ExceptionLevel];

/**
 * @public
 * @enum
 */
export const SearchType = {
  SEMANTIC: "SEMANTIC",
} as const;
/**
 * @public
 */
export type SearchType = (typeof SearchType)[keyof typeof SearchType];

/**
 * @public
 * @enum
 */
export const GatewayProtocolType = {
  MCP: "MCP",
} as const;
/**
 * @public
 */
export type GatewayProtocolType = (typeof GatewayProtocolType)[keyof typeof GatewayProtocolType];

/**
 * @public
 * @enum
 */
export const GatewayStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  READY: "READY",
  UPDATE_UNSUCCESSFUL: "UPDATE_UNSUCCESSFUL",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type GatewayStatus = (typeof GatewayStatus)[keyof typeof GatewayStatus];

/**
 * @public
 * @enum
 */
export const ApiKeyCredentialLocation = {
  HEADER: "HEADER",
  QUERY_PARAMETER: "QUERY_PARAMETER",
} as const;
/**
 * @public
 */
export type ApiKeyCredentialLocation = (typeof ApiKeyCredentialLocation)[keyof typeof ApiKeyCredentialLocation];

/**
 * @public
 * @enum
 */
export const CredentialProviderType = {
  API_KEY: "API_KEY",
  GATEWAY_IAM_ROLE: "GATEWAY_IAM_ROLE",
  OAUTH: "OAUTH",
} as const;
/**
 * @public
 */
export type CredentialProviderType = (typeof CredentialProviderType)[keyof typeof CredentialProviderType];

/**
 * @public
 * @enum
 */
export const SchemaType = {
  ARRAY: "array",
  BOOLEAN: "boolean",
  INTEGER: "integer",
  NUMBER: "number",
  OBJECT: "object",
  STRING: "string",
} as const;
/**
 * @public
 */
export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];

/**
 * @public
 * @enum
 */
export const TargetStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  READY: "READY",
  SYNCHRONIZE_UNSUCCESSFUL: "SYNCHRONIZE_UNSUCCESSFUL",
  SYNCHRONIZING: "SYNCHRONIZING",
  UPDATE_UNSUCCESSFUL: "UPDATE_UNSUCCESSFUL",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type TargetStatus = (typeof TargetStatus)[keyof typeof TargetStatus];

/**
 * @public
 * @enum
 */
export const KeyType = {
  CustomerManagedKey: "CustomerManagedKey",
  ServiceManagedKey: "ServiceManagedKey",
} as const;
/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

/**
 * @public
 * @enum
 */
export const MemoryStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type MemoryStatus = (typeof MemoryStatus)[keyof typeof MemoryStatus];

/**
 * @public
 * @enum
 */
export const OverrideType = {
  SELF_MANAGED: "SELF_MANAGED",
  SEMANTIC_OVERRIDE: "SEMANTIC_OVERRIDE",
  SUMMARY_OVERRIDE: "SUMMARY_OVERRIDE",
  USER_PREFERENCE_OVERRIDE: "USER_PREFERENCE_OVERRIDE",
} as const;
/**
 * @public
 */
export type OverrideType = (typeof OverrideType)[keyof typeof OverrideType];

/**
 * @public
 * @enum
 */
export const MemoryStrategyStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type MemoryStrategyStatus = (typeof MemoryStrategyStatus)[keyof typeof MemoryStrategyStatus];

/**
 * @public
 * @enum
 */
export const MemoryStrategyType = {
  CUSTOM: "CUSTOM",
  SEMANTIC: "SEMANTIC",
  SUMMARIZATION: "SUMMARIZATION",
  USER_PREFERENCE: "USER_PREFERENCE",
} as const;
/**
 * @public
 */
export type MemoryStrategyType = (typeof MemoryStrategyType)[keyof typeof MemoryStrategyType];

/**
 * @public
 * @enum
 */
export const CredentialProviderVendorType = {
  AtlassianOauth2: "AtlassianOauth2",
  Auth0Oauth2: "Auth0Oauth2",
  CognitoOauth2: "CognitoOauth2",
  CustomOauth2: "CustomOauth2",
  CyberArkOauth2: "CyberArkOauth2",
  DropboxOauth2: "DropboxOauth2",
  FacebookOauth2: "FacebookOauth2",
  FusionAuthOauth2: "FusionAuthOauth2",
  GithubOauth2: "GithubOauth2",
  GoogleOauth2: "GoogleOauth2",
  HubspotOauth2: "HubspotOauth2",
  LinkedinOauth2: "LinkedinOauth2",
  MicrosoftOauth2: "MicrosoftOauth2",
  NotionOauth2: "NotionOauth2",
  OktaOauth2: "OktaOauth2",
  OneLoginOauth2: "OneLoginOauth2",
  PingOneOauth2: "PingOneOauth2",
  RedditOauth2: "RedditOauth2",
  SalesforceOauth2: "SalesforceOauth2",
  SlackOauth2: "SlackOauth2",
  SpotifyOauth2: "SpotifyOauth2",
  TwitchOauth2: "TwitchOauth2",
  XOauth2: "XOauth2",
  YandexOauth2: "YandexOauth2",
  ZoomOauth2: "ZoomOauth2",
} as const;
/**
 * @public
 */
export type CredentialProviderVendorType =
  (typeof CredentialProviderVendorType)[keyof typeof CredentialProviderVendorType];
