// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AZStatus = {
  MultiAZ: "multiaz",
  SingleAZ: "singleaz",
} as const;
/**
 * @public
 */
export type AZStatus = (typeof AZStatus)[keyof typeof AZStatus];

/**
 * @public
 * @enum
 */
export const DataTieringStatus = {
  FALSE: "false",
  TRUE: "true",
} as const;
/**
 * @public
 */
export type DataTieringStatus = (typeof DataTieringStatus)[keyof typeof DataTieringStatus];

/**
 * @public
 * @enum
 */
export const IpDiscovery = {
  IPV4: "ipv4",
  IPV6: "ipv6",
} as const;
/**
 * @public
 */
export type IpDiscovery = (typeof IpDiscovery)[keyof typeof IpDiscovery];

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUAL_STACK: "dual_stack",
  IPV4: "ipv4",
  IPV6: "ipv6",
} as const;
/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 * @enum
 */
export const ServiceUpdateStatus = {
  COMPLETE: "complete",
  IN_PROGRESS: "in-progress",
  NOT_APPLIED: "available",
  SCHEDULED: "scheduled",
} as const;
/**
 * @public
 */
export type ServiceUpdateStatus = (typeof ServiceUpdateStatus)[keyof typeof ServiceUpdateStatus];

/**
 * @public
 * @enum
 */
export const InputAuthenticationType = {
  IAM: "iam",
  PASSWORD: "password",
} as const;
/**
 * @public
 */
export type InputAuthenticationType = (typeof InputAuthenticationType)[keyof typeof InputAuthenticationType];

/**
 * @public
 * @enum
 */
export const AuthenticationType = {
  IAM: "iam",
  NO_PASSWORD: "no-password",
  PASSWORD: "password",
} as const;
/**
 * @public
 */
export type AuthenticationType = (typeof AuthenticationType)[keyof typeof AuthenticationType];

/**
 * @public
 * @enum
 */
export const SourceType = {
  acl: "acl",
  cluster: "cluster",
  node: "node",
  parameter_group: "parameter-group",
  subnet_group: "subnet-group",
  user: "user",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * @enum
 */
export const ServiceUpdateType = {
  SECURITY_UPDATE: "security-update",
} as const;
/**
 * @public
 */
export type ServiceUpdateType = (typeof ServiceUpdateType)[keyof typeof ServiceUpdateType];

/**
 * @public
 * @enum
 */
export const UpdateStrategy = {
  COORDINATED: "coordinated",
  UNCOORDINATED: "uncoordinated",
} as const;
/**
 * @public
 */
export type UpdateStrategy = (typeof UpdateStrategy)[keyof typeof UpdateStrategy];
