// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ClusterEndpointEncryptionType = {
  NONE: "NONE",
  TLS: "TLS",
} as const;
/**
 * @public
 */
export type ClusterEndpointEncryptionType =
  (typeof ClusterEndpointEncryptionType)[keyof typeof ClusterEndpointEncryptionType];

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
export const SSEStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;
/**
 * @public
 */
export type SSEStatus = (typeof SSEStatus)[keyof typeof SSEStatus];

/**
 * @public
 * @enum
 */
export const ChangeType = {
  IMMEDIATE: "IMMEDIATE",
  REQUIRES_REBOOT: "REQUIRES_REBOOT",
} as const;
/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * @enum
 */
export const IsModifiable = {
  CONDITIONAL: "CONDITIONAL",
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;
/**
 * @public
 */
export type IsModifiable = (typeof IsModifiable)[keyof typeof IsModifiable];

/**
 * @public
 * @enum
 */
export const ParameterType = {
  DEFAULT: "DEFAULT",
  NODE_TYPE_SPECIFIC: "NODE_TYPE_SPECIFIC",
} as const;
/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * @public
 * @enum
 */
export const SourceType = {
  CLUSTER: "CLUSTER",
  PARAMETER_GROUP: "PARAMETER_GROUP",
  SUBNET_GROUP: "SUBNET_GROUP",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];
