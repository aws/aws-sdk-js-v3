// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const FailoverStatus = {
  CANCELLING: "cancelling",
  FAILING_OVER: "failing-over",
  PENDING: "pending",
} as const;
/**
 * @public
 */
export type FailoverStatus = (typeof FailoverStatus)[keyof typeof FailoverStatus];

/**
 * @public
 * @enum
 */
export const ApplyMethod = {
  immediate: "immediate",
  pending_reboot: "pending-reboot",
} as const;
/**
 * @public
 */
export type ApplyMethod = (typeof ApplyMethod)[keyof typeof ApplyMethod];

/**
 * @public
 * @enum
 */
export const SourceType = {
  db_cluster: "db-cluster",
  db_cluster_snapshot: "db-cluster-snapshot",
  db_instance: "db-instance",
  db_parameter_group: "db-parameter-group",
  db_security_group: "db-security-group",
  db_snapshot: "db-snapshot",
} as const;
/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];
