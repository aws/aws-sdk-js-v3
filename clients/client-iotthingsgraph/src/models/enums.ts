// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const DefinitionLanguage = {
  GRAPHQL: "GRAPHQL",
} as const;
/**
 * @public
 */
export type DefinitionLanguage = (typeof DefinitionLanguage)[keyof typeof DefinitionLanguage];

/**
 * @public
 * @enum
 */
export const DeploymentTarget = {
  CLOUD: "CLOUD",
  GREENGRASS: "GREENGRASS",
} as const;
/**
 * @public
 */
export type DeploymentTarget = (typeof DeploymentTarget)[keyof typeof DeploymentTarget];

/**
 * @public
 * @enum
 */
export const SystemInstanceDeploymentStatus = {
  BOOTSTRAP: "BOOTSTRAP",
  DELETED_IN_TARGET: "DELETED_IN_TARGET",
  DEPLOYED_IN_TARGET: "DEPLOYED_IN_TARGET",
  DEPLOY_IN_PROGRESS: "DEPLOY_IN_PROGRESS",
  FAILED: "FAILED",
  NOT_DEPLOYED: "NOT_DEPLOYED",
  PENDING_DELETE: "PENDING_DELETE",
  UNDEPLOY_IN_PROGRESS: "UNDEPLOY_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type SystemInstanceDeploymentStatus =
  (typeof SystemInstanceDeploymentStatus)[keyof typeof SystemInstanceDeploymentStatus];

/**
 * @public
 * @enum
 */
export const EntityType = {
  ACTION: "ACTION",
  CAPABILITY: "CAPABILITY",
  DEVICE: "DEVICE",
  DEVICE_MODEL: "DEVICE_MODEL",
  ENUM: "ENUM",
  EVENT: "EVENT",
  MAPPING: "MAPPING",
  PROPERTY: "PROPERTY",
  SERVICE: "SERVICE",
  STATE: "STATE",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const EntityFilterName = {
  NAME: "NAME",
  NAMESPACE: "NAMESPACE",
  REFERENCED_ENTITY_ID: "REFERENCED_ENTITY_ID",
  SEMANTIC_TYPE_PATH: "SEMANTIC_TYPE_PATH",
} as const;
/**
 * @public
 */
export type EntityFilterName = (typeof EntityFilterName)[keyof typeof EntityFilterName];

/**
 * @public
 * @enum
 */
export const FlowExecutionEventType = {
  ACKNOWLEDGE_TASK_MESSAGE: "ACKNOWLEDGE_TASK_MESSAGE",
  ACTIVITY_FAILED: "ACTIVITY_FAILED",
  ACTIVITY_SCHEDULED: "ACTIVITY_SCHEDULED",
  ACTIVITY_STARTED: "ACTIVITY_STARTED",
  ACTIVITY_SUCCEEDED: "ACTIVITY_SUCCEEDED",
  EXECUTION_ABORTED: "EXECUTION_ABORTED",
  EXECUTION_FAILED: "EXECUTION_FAILED",
  EXECUTION_STARTED: "EXECUTION_STARTED",
  EXECUTION_SUCCEEDED: "EXECUTION_SUCCEEDED",
  SCHEDULE_NEXT_READY_STEPS_TASK: "SCHEDULE_NEXT_READY_STEPS_TASK",
  START_FLOW_EXECUTION_TASK: "START_FLOW_EXECUTION_TASK",
  STEP_FAILED: "STEP_FAILED",
  STEP_STARTED: "STEP_STARTED",
  STEP_SUCCEEDED: "STEP_SUCCEEDED",
  THING_ACTION_TASK: "THING_ACTION_TASK",
  THING_ACTION_TASK_FAILED: "THING_ACTION_TASK_FAILED",
  THING_ACTION_TASK_SUCCEEDED: "THING_ACTION_TASK_SUCCEEDED",
} as const;
/**
 * @public
 */
export type FlowExecutionEventType = (typeof FlowExecutionEventType)[keyof typeof FlowExecutionEventType];

/**
 * @public
 * @enum
 */
export const FlowExecutionStatus = {
  ABORTED: "ABORTED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type FlowExecutionStatus = (typeof FlowExecutionStatus)[keyof typeof FlowExecutionStatus];

/**
 * @public
 * @enum
 */
export const FlowTemplateFilterName = {
  DEVICE_MODEL_ID: "DEVICE_MODEL_ID",
} as const;
/**
 * @public
 */
export type FlowTemplateFilterName = (typeof FlowTemplateFilterName)[keyof typeof FlowTemplateFilterName];

/**
 * @public
 * @enum
 */
export const NamespaceDeletionStatusErrorCodes = {
  VALIDATION_FAILED: "VALIDATION_FAILED",
} as const;
/**
 * @public
 */
export type NamespaceDeletionStatusErrorCodes =
  (typeof NamespaceDeletionStatusErrorCodes)[keyof typeof NamespaceDeletionStatusErrorCodes];

/**
 * @public
 * @enum
 */
export const NamespaceDeletionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type NamespaceDeletionStatus = (typeof NamespaceDeletionStatus)[keyof typeof NamespaceDeletionStatus];

/**
 * @public
 * @enum
 */
export const UploadStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type UploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus];

/**
 * @public
 * @enum
 */
export const SystemInstanceFilterName = {
  GREENGRASS_GROUP_NAME: "GREENGRASS_GROUP_NAME",
  STATUS: "STATUS",
  SYSTEM_TEMPLATE_ID: "SYSTEM_TEMPLATE_ID",
} as const;
/**
 * @public
 */
export type SystemInstanceFilterName = (typeof SystemInstanceFilterName)[keyof typeof SystemInstanceFilterName];

/**
 * @public
 * @enum
 */
export const SystemTemplateFilterName = {
  FLOW_TEMPLATE_ID: "FLOW_TEMPLATE_ID",
} as const;
/**
 * @public
 */
export type SystemTemplateFilterName = (typeof SystemTemplateFilterName)[keyof typeof SystemTemplateFilterName];
