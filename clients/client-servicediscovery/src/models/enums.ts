// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const RecordType = {
  A: "A",
  AAAA: "AAAA",
  CNAME: "CNAME",
  SRV: "SRV",
} as const;
/**
 * @public
 */
export type RecordType = (typeof RecordType)[keyof typeof RecordType];

/**
 * @public
 * @enum
 */
export const RoutingPolicy = {
  MULTIVALUE: "MULTIVALUE",
  WEIGHTED: "WEIGHTED",
} as const;
/**
 * @public
 */
export type RoutingPolicy = (typeof RoutingPolicy)[keyof typeof RoutingPolicy];

/**
 * @public
 * @enum
 */
export const HealthCheckType = {
  HTTP: "HTTP",
  HTTPS: "HTTPS",
  TCP: "TCP",
} as const;
/**
 * @public
 */
export type HealthCheckType = (typeof HealthCheckType)[keyof typeof HealthCheckType];

/**
 * @public
 * @enum
 */
export const ServiceTypeOption = {
  HTTP: "HTTP",
} as const;
/**
 * @public
 */
export type ServiceTypeOption = (typeof ServiceTypeOption)[keyof typeof ServiceTypeOption];

/**
 * @public
 * @enum
 */
export const ServiceType = {
  DNS: "DNS",
  DNS_HTTP: "DNS_HTTP",
  HTTP: "HTTP",
} as const;
/**
 * @public
 */
export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType];

/**
 * @public
 * @enum
 */
export const CustomHealthStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type CustomHealthStatus = (typeof CustomHealthStatus)[keyof typeof CustomHealthStatus];

/**
 * @public
 * @enum
 */
export const HealthStatusFilter = {
  ALL: "ALL",
  HEALTHY: "HEALTHY",
  HEALTHY_OR_ELSE_ALL: "HEALTHY_OR_ELSE_ALL",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type HealthStatusFilter = (typeof HealthStatusFilter)[keyof typeof HealthStatusFilter];

/**
 * @public
 * @enum
 */
export const HealthStatus = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
  UNKNOWN: "UNKNOWN",
} as const;
/**
 * @public
 */
export type HealthStatus = (typeof HealthStatus)[keyof typeof HealthStatus];

/**
 * @public
 * @enum
 */
export const FilterCondition = {
  BEGINS_WITH: "BEGINS_WITH",
  BETWEEN: "BETWEEN",
  EQ: "EQ",
  IN: "IN",
} as const;
/**
 * @public
 */
export type FilterCondition = (typeof FilterCondition)[keyof typeof FilterCondition];

/**
 * @public
 * @enum
 */
export const NamespaceType = {
  DNS_PRIVATE: "DNS_PRIVATE",
  DNS_PUBLIC: "DNS_PUBLIC",
  HTTP: "HTTP",
} as const;
/**
 * @public
 */
export type NamespaceType = (typeof NamespaceType)[keyof typeof NamespaceType];

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  FAIL: "FAIL",
  PENDING: "PENDING",
  SUBMITTED: "SUBMITTED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * @public
 * @enum
 */
export const OperationTargetType = {
  INSTANCE: "INSTANCE",
  NAMESPACE: "NAMESPACE",
  SERVICE: "SERVICE",
} as const;
/**
 * @public
 */
export type OperationTargetType = (typeof OperationTargetType)[keyof typeof OperationTargetType];

/**
 * @public
 * @enum
 */
export const OperationType = {
  CREATE_NAMESPACE: "CREATE_NAMESPACE",
  DELETE_NAMESPACE: "DELETE_NAMESPACE",
  DEREGISTER_INSTANCE: "DEREGISTER_INSTANCE",
  REGISTER_INSTANCE: "REGISTER_INSTANCE",
  UPDATE_NAMESPACE: "UPDATE_NAMESPACE",
  UPDATE_SERVICE: "UPDATE_SERVICE",
} as const;
/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 * @enum
 */
export const NamespaceFilterName = {
  HTTP_NAME: "HTTP_NAME",
  NAME: "NAME",
  RESOURCE_OWNER: "RESOURCE_OWNER",
  TYPE: "TYPE",
} as const;
/**
 * @public
 */
export type NamespaceFilterName = (typeof NamespaceFilterName)[keyof typeof NamespaceFilterName];

/**
 * @public
 * @enum
 */
export const OperationFilterName = {
  NAMESPACE_ID: "NAMESPACE_ID",
  SERVICE_ID: "SERVICE_ID",
  STATUS: "STATUS",
  TYPE: "TYPE",
  UPDATE_DATE: "UPDATE_DATE",
} as const;
/**
 * @public
 */
export type OperationFilterName = (typeof OperationFilterName)[keyof typeof OperationFilterName];

/**
 * @public
 * @enum
 */
export const ServiceFilterName = {
  NAMESPACE_ID: "NAMESPACE_ID",
  RESOURCE_OWNER: "RESOURCE_OWNER",
} as const;
/**
 * @public
 */
export type ServiceFilterName = (typeof ServiceFilterName)[keyof typeof ServiceFilterName];
