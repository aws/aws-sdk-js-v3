// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const VpcEndpointManagement = {
  CUSTOMER: "CUSTOMER",
  SERVICE: "SERVICE",
} as const;
/**
 * @public
 */
export type VpcEndpointManagement = (typeof VpcEndpointManagement)[keyof typeof VpcEndpointManagement];

/**
 * @public
 * @enum
 */
export const VpcEndpointServiceName = {
  OPENSEARCH_SERVERLESS: "OPENSEARCH_SERVERLESS",
} as const;
/**
 * @public
 */
export type VpcEndpointServiceName = (typeof VpcEndpointServiceName)[keyof typeof VpcEndpointServiceName];

/**
 * @public
 * @enum
 */
export const PipelineStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  STARTING: "STARTING",
  START_FAILED: "START_FAILED",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type PipelineStatus = (typeof PipelineStatus)[keyof typeof PipelineStatus];

/**
 * @public
 * @enum
 */
export const PipelineEndpointStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  REVOKED: "REVOKED",
  REVOKING: "REVOKING",
} as const;
/**
 * @public
 */
export type PipelineEndpointStatus = (typeof PipelineEndpointStatus)[keyof typeof PipelineEndpointStatus];

/**
 * @public
 * @enum
 */
export const ChangeProgressStageStatuses = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ChangeProgressStageStatuses =
  (typeof ChangeProgressStageStatuses)[keyof typeof ChangeProgressStageStatuses];

/**
 * @public
 * @enum
 */
export const ChangeProgressStatuses = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ChangeProgressStatuses = (typeof ChangeProgressStatuses)[keyof typeof ChangeProgressStatuses];
