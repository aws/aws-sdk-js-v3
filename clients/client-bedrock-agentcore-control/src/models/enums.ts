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
export const ClaimMatchOperatorType = {
  CONTAINS: "CONTAINS",
  CONTAINS_ANY: "CONTAINS_ANY",
  EQUALS: "EQUALS",
} as const;
/**
 * @public
 */
export type ClaimMatchOperatorType = (typeof ClaimMatchOperatorType)[keyof typeof ClaimMatchOperatorType];

/**
 * @public
 * @enum
 */
export const InboundTokenClaimValueType = {
  STRING: "STRING",
  STRING_ARRAY: "STRING_ARRAY",
} as const;
/**
 * @public
 */
export type InboundTokenClaimValueType = (typeof InboundTokenClaimValueType)[keyof typeof InboundTokenClaimValueType];

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
export const EvaluatorLevel = {
  SESSION: "SESSION",
  TOOL_CALL: "TOOL_CALL",
  TRACE: "TRACE",
} as const;
/**
 * @public
 */
export type EvaluatorLevel = (typeof EvaluatorLevel)[keyof typeof EvaluatorLevel];

/**
 * @public
 * @enum
 */
export const EvaluatorStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type EvaluatorStatus = (typeof EvaluatorStatus)[keyof typeof EvaluatorStatus];

/**
 * @public
 * @enum
 */
export const EvaluatorType = {
  BUILTIN: "Builtin",
  CUSTOM: "Custom",
} as const;
/**
 * @public
 */
export type EvaluatorType = (typeof EvaluatorType)[keyof typeof EvaluatorType];

/**
 * @public
 * @enum
 */
export const AuthorizerType = {
  AWS_IAM: "AWS_IAM",
  CUSTOM_JWT: "CUSTOM_JWT",
  NONE: "NONE",
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
export const GatewayInterceptionPoint = {
  REQUEST: "REQUEST",
  RESPONSE: "RESPONSE",
} as const;
/**
 * @public
 */
export type GatewayInterceptionPoint = (typeof GatewayInterceptionPoint)[keyof typeof GatewayInterceptionPoint];

/**
 * @public
 * @enum
 */
export const GatewayPolicyEngineMode = {
  ENFORCE: "ENFORCE",
  LOG_ONLY: "LOG_ONLY",
} as const;
/**
 * @public
 */
export type GatewayPolicyEngineMode = (typeof GatewayPolicyEngineMode)[keyof typeof GatewayPolicyEngineMode];

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
export const OAuthGrantType = {
  AUTHORIZATION_CODE: "AUTHORIZATION_CODE",
  CLIENT_CREDENTIALS: "CLIENT_CREDENTIALS",
} as const;
/**
 * @public
 */
export type OAuthGrantType = (typeof OAuthGrantType)[keyof typeof OAuthGrantType];

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
export const RestApiMethod = {
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type RestApiMethod = (typeof RestApiMethod)[keyof typeof RestApiMethod];

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
  EPISODIC_OVERRIDE: "EPISODIC_OVERRIDE",
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
  EPISODIC: "EPISODIC",
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

/**
 * @public
 * @enum
 */
export const FilterOperator = {
  CONTAINS: "Contains",
  EQUALS: "Equals",
  GREATER_THAN: "GreaterThan",
  GREATER_THAN_OR_EQUAL: "GreaterThanOrEqual",
  LESS_THAN: "LessThan",
  LESS_THAN_OR_EQUAL: "LessThanOrEqual",
  NOT_CONTAINS: "NotContains",
  NOT_EQUALS: "NotEquals",
} as const;
/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/**
 * @public
 * @enum
 */
export const OnlineEvaluationExecutionStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type OnlineEvaluationExecutionStatus =
  (typeof OnlineEvaluationExecutionStatus)[keyof typeof OnlineEvaluationExecutionStatus];

/**
 * @public
 * @enum
 */
export const OnlineEvaluationConfigStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type OnlineEvaluationConfigStatus =
  (typeof OnlineEvaluationConfigStatus)[keyof typeof OnlineEvaluationConfigStatus];

/**
 * @public
 * @enum
 */
export const PolicyEngineStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type PolicyEngineStatus = (typeof PolicyEngineStatus)[keyof typeof PolicyEngineStatus];

/**
 * @public
 * @enum
 */
export const PolicyGenerationStatus = {
  DELETE_FAILED: "DELETE_FAILED",
  GENERATED: "GENERATED",
  GENERATE_FAILED: "GENERATE_FAILED",
  GENERATING: "GENERATING",
} as const;
/**
 * @public
 */
export type PolicyGenerationStatus = (typeof PolicyGenerationStatus)[keyof typeof PolicyGenerationStatus];

/**
 * @public
 * @enum
 */
export const FindingType = {
  ALLOW_ALL: "ALLOW_ALL",
  ALLOW_NONE: "ALLOW_NONE",
  DENY_ALL: "DENY_ALL",
  DENY_NONE: "DENY_NONE",
  INVALID: "INVALID",
  NOT_TRANSLATABLE: "NOT_TRANSLATABLE",
  VALID: "VALID",
} as const;
/**
 * @public
 */
export type FindingType = (typeof FindingType)[keyof typeof FindingType];

/**
 * @public
 * @enum
 */
export const PolicyValidationMode = {
  FAIL_ON_ANY_FINDINGS: "FAIL_ON_ANY_FINDINGS",
  IGNORE_ALL_FINDINGS: "IGNORE_ALL_FINDINGS",
} as const;
/**
 * @public
 */
export type PolicyValidationMode = (typeof PolicyValidationMode)[keyof typeof PolicyValidationMode];

/**
 * @public
 * @enum
 */
export const PolicyStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus];
