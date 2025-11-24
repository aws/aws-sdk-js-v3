// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const VariableType = {
  INCIDENT_RECORD_ARN: "INCIDENT_RECORD_ARN",
  INVOLVED_RESOURCES: "INVOLVED_RESOURCES",
} as const;
/**
 * @public
 */
export type VariableType = (typeof VariableType)[keyof typeof VariableType];

/**
 * @public
 * @enum
 */
export const SsmTargetAccount = {
  IMPACTED_ACCOUNT: "IMPACTED_ACCOUNT",
  RESPONSE_PLAN_OWNER_ACCOUNT: "RESPONSE_PLAN_OWNER_ACCOUNT",
} as const;
/**
 * @public
 */
export type SsmTargetAccount = (typeof SsmTargetAccount)[keyof typeof SsmTargetAccount];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  INCIDENT_RECORD: "INCIDENT_RECORD",
  REPLICATION_SET: "REPLICATION_SET",
  RESOURCE_POLICY: "RESOURCE_POLICY",
  RESPONSE_PLAN: "RESPONSE_PLAN",
  TIMELINE_EVENT: "TIMELINE_EVENT",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ServiceCode = {
  SSM_INCIDENTS: "ssm-incidents",
} as const;
/**
 * @public
 */
export type ServiceCode = (typeof ServiceCode)[keyof typeof ServiceCode];

/**
 * @public
 * @enum
 */
export const IncidentRecordStatus = {
  OPEN: "OPEN",
  RESOLVED: "RESOLVED",
} as const;
/**
 * @public
 */
export type IncidentRecordStatus = (typeof IncidentRecordStatus)[keyof typeof IncidentRecordStatus];

/**
 * @public
 * @enum
 */
export const RegionStatus = {
  /**
   * All operations have completed successfully and the region is ready to use
   */
  ACTIVE: "ACTIVE",
  /**
   * The region is in the process of being created.
   */
  CREATING: "CREATING",
  /**
   * The region is in the process of being deleted.
   */
  DELETING: "DELETING",
  /**
   * The region is not healthy and we cannot automatically fix it.
   */
  FAILED: "FAILED",
} as const;
/**
 * @public
 */
export type RegionStatus = (typeof RegionStatus)[keyof typeof RegionStatus];

/**
 * @public
 * @enum
 */
export const ReplicationSetStatus = {
  /**
   * All operations have completed successfully and the replication set is ready to use
   */
  ACTIVE: "ACTIVE",
  /**
   * Replication set is in the process of being created.
   */
  CREATING: "CREATING",
  /**
   * Replication set is in the process of being deleted.
   */
  DELETING: "DELETING",
  /**
   * Replication set is not healthy and we cannot fix it.
   */
  FAILED: "FAILED",
  /**
   * Replication set is in the process of being updated.
   */
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ReplicationSetStatus = (typeof ReplicationSetStatus)[keyof typeof ReplicationSetStatus];

/**
 * @public
 * @enum
 */
export const ItemType = {
  ANALYSIS: "ANALYSIS",
  ATTACHMENT: "ATTACHMENT",
  AUTOMATION: "AUTOMATION",
  INCIDENT: "INCIDENT",
  INVOLVED_RESOURCE: "INVOLVED_RESOURCE",
  METRIC: "METRIC",
  OTHER: "OTHER",
  PARENT: "PARENT",
  TASK: "TASK",
} as const;
/**
 * @public
 */
export type ItemType = (typeof ItemType)[keyof typeof ItemType];

/**
 * @public
 * @enum
 */
export const TimelineEventSort = {
  EVENT_TIME: "EVENT_TIME",
} as const;
/**
 * @public
 */
export type TimelineEventSort = (typeof TimelineEventSort)[keyof typeof TimelineEventSort];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
