// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ApiGatewayEndpointType = {
  PRIVATE: "PRIVATE",
  REGIONAL: "REGIONAL",
} as const;
/**
 * @public
 */
export type ApiGatewayEndpointType = (typeof ApiGatewayEndpointType)[keyof typeof ApiGatewayEndpointType];

/**
 * @public
 * @enum
 */
export const ApplicationState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ApplicationState = (typeof ApplicationState)[keyof typeof ApplicationState];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  INVALID_RESOURCE_STATE: "INVALID_RESOURCE_STATE",
  NOT_AUTHORIZED: "NOT_AUTHORIZED",
  REQUEST_LIMIT_EXCEEDED: "REQUEST_LIMIT_EXCEEDED",
  RESOURCE_CREATION_FAILURE: "RESOURCE_CREATION_FAILURE",
  RESOURCE_DELETION_FAILURE: "RESOURCE_DELETION_FAILURE",
  RESOURCE_IN_USE: "RESOURCE_IN_USE",
  RESOURCE_LIMIT_EXCEEDED: "RESOURCE_LIMIT_EXCEEDED",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  RESOURCE_RETRIEVAL_FAILURE: "RESOURCE_RETRIEVAL_FAILURE",
  RESOURCE_UPDATE_FAILURE: "RESOURCE_UPDATE_FAILURE",
  SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE: "SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE",
  STATE_TRANSITION_FAILURE: "STATE_TRANSITION_FAILURE",
} as const;
/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const ErrorResourceType = {
  API_GATEWAY: "API_GATEWAY",
  APPLICATION: "APPLICATION",
  ENVIRONMENT: "ENVIRONMENT",
  IAM_ROLE: "IAM_ROLE",
  LAMBDA: "LAMBDA",
  LOAD_BALANCER_LISTENER: "LOAD_BALANCER_LISTENER",
  NLB: "NLB",
  RESOURCE_SHARE: "RESOURCE_SHARE",
  ROUTE: "ROUTE",
  ROUTE_TABLE: "ROUTE_TABLE",
  SECURITY_GROUP: "SECURITY_GROUP",
  SERVICE: "SERVICE",
  SUBNET: "SUBNET",
  TARGET_GROUP: "TARGET_GROUP",
  TRANSIT_GATEWAY: "TRANSIT_GATEWAY",
  TRANSIT_GATEWAY_ATTACHMENT: "TRANSIT_GATEWAY_ATTACHMENT",
  VPC: "VPC",
  VPC_ENDPOINT_SERVICE_CONFIGURATION: "VPC_ENDPOINT_SERVICE_CONFIGURATION",
  VPC_LINK: "VPC_LINK",
} as const;
/**
 * @public
 */
export type ErrorResourceType = (typeof ErrorResourceType)[keyof typeof ErrorResourceType];

/**
 * @public
 * @enum
 */
export const ProxyType = {
  API_GATEWAY: "API_GATEWAY",
} as const;
/**
 * @public
 */
export type ProxyType = (typeof ProxyType)[keyof typeof ProxyType];

/**
 * @public
 * @enum
 */
export const NetworkFabricType = {
  NONE: "NONE",
  TRANSIT_GATEWAY: "TRANSIT_GATEWAY",
} as const;
/**
 * @public
 */
export type NetworkFabricType = (typeof NetworkFabricType)[keyof typeof NetworkFabricType];

/**
 * @public
 * @enum
 */
export const EnvironmentState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type EnvironmentState = (typeof EnvironmentState)[keyof typeof EnvironmentState];

/**
 * @public
 * @enum
 */
export const RouteActivationState = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type RouteActivationState = (typeof RouteActivationState)[keyof typeof RouteActivationState];

/**
 * @public
 * @enum
 */
export const RouteType = {
  DEFAULT: "DEFAULT",
  URI_PATH: "URI_PATH",
} as const;
/**
 * @public
 */
export type RouteType = (typeof RouteType)[keyof typeof RouteType];

/**
 * @public
 * @enum
 */
export const HttpMethod = {
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
export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

/**
 * @public
 * @enum
 */
export const RouteState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type RouteState = (typeof RouteState)[keyof typeof RouteState];

/**
 * @public
 * @enum
 */
export const ServiceEndpointType = {
  LAMBDA: "LAMBDA",
  URL: "URL",
} as const;
/**
 * @public
 */
export type ServiceEndpointType = (typeof ServiceEndpointType)[keyof typeof ServiceEndpointType];

/**
 * @public
 * @enum
 */
export const ServiceState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type ServiceState = (typeof ServiceState)[keyof typeof ServiceState];
