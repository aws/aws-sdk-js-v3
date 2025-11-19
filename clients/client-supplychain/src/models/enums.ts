// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ConfigurationJobStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NEW: "NEW",
  QUEUED: "QUEUED",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ConfigurationJobStatus = (typeof ConfigurationJobStatus)[keyof typeof ConfigurationJobStatus];

/**
 * @public
 * @enum
 */
export const DataIntegrationFlowFieldPriorityDedupeSortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type DataIntegrationFlowFieldPriorityDedupeSortOrder =
  (typeof DataIntegrationFlowFieldPriorityDedupeSortOrder)[keyof typeof DataIntegrationFlowFieldPriorityDedupeSortOrder];

/**
 * @public
 * @enum
 */
export const DataIntegrationFlowDedupeStrategyType = {
  FIELD_PRIORITY: "FIELD_PRIORITY",
} as const;
/**
 * @public
 */
export type DataIntegrationFlowDedupeStrategyType =
  (typeof DataIntegrationFlowDedupeStrategyType)[keyof typeof DataIntegrationFlowDedupeStrategyType];

/**
 * @public
 * @enum
 */
export const DataIntegrationFlowLoadType = {
  INCREMENTAL: "INCREMENTAL",
  REPLACE: "REPLACE",
} as const;
/**
 * @public
 */
export type DataIntegrationFlowLoadType =
  (typeof DataIntegrationFlowLoadType)[keyof typeof DataIntegrationFlowLoadType];

/**
 * @public
 * @enum
 */
export const DataIntegrationFlowFileType = {
  CSV: "CSV",
  JSON: "JSON",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type DataIntegrationFlowFileType =
  (typeof DataIntegrationFlowFileType)[keyof typeof DataIntegrationFlowFileType];

/**
 * @public
 * @enum
 */
export const DataIntegrationFlowSourceType = {
  DATASET: "DATASET",
  S3: "S3",
} as const;
/**
 * @public
 */
export type DataIntegrationFlowSourceType =
  (typeof DataIntegrationFlowSourceType)[keyof typeof DataIntegrationFlowSourceType];

/**
 * @public
 * @enum
 */
export const DataIntegrationFlowTargetType = {
  DATASET: "DATASET",
  S3: "S3",
} as const;
/**
 * @public
 */
export type DataIntegrationFlowTargetType =
  (typeof DataIntegrationFlowTargetType)[keyof typeof DataIntegrationFlowTargetType];

/**
 * @public
 * @enum
 */
export const DataIntegrationFlowTransformationType = {
  NONE: "NONE",
  SQL: "SQL",
} as const;
/**
 * @public
 */
export type DataIntegrationFlowTransformationType =
  (typeof DataIntegrationFlowTransformationType)[keyof typeof DataIntegrationFlowTransformationType];

/**
 * @public
 * @enum
 */
export const DataLakeDatasetPartitionTransformType = {
  DAY: "DAY",
  HOUR: "HOUR",
  IDENTITY: "IDENTITY",
  MONTH: "MONTH",
  YEAR: "YEAR",
} as const;
/**
 * @public
 */
export type DataLakeDatasetPartitionTransformType =
  (typeof DataLakeDatasetPartitionTransformType)[keyof typeof DataLakeDatasetPartitionTransformType];

/**
 * @public
 * @enum
 */
export const DataLakeDatasetSchemaFieldType = {
  DOUBLE: "DOUBLE",
  INT: "INT",
  LONG: "LONG",
  STRING: "STRING",
  TIMESTAMP: "TIMESTAMP",
} as const;
/**
 * @public
 */
export type DataLakeDatasetSchemaFieldType =
  (typeof DataLakeDatasetSchemaFieldType)[keyof typeof DataLakeDatasetSchemaFieldType];

/**
 * @public
 * @enum
 */
export const InstanceState = {
  ACTIVE: "Active",
  CREATE_FAILED: "CreateFailed",
  DELETED: "Deleted",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  INITIALIZING: "Initializing",
} as const;
/**
 * @public
 */
export type InstanceState = (typeof InstanceState)[keyof typeof InstanceState];

/**
 * @public
 * @enum
 */
export const DataIntegrationEventDatasetLoadStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type DataIntegrationEventDatasetLoadStatus =
  (typeof DataIntegrationEventDatasetLoadStatus)[keyof typeof DataIntegrationEventDatasetLoadStatus];

/**
 * @public
 * @enum
 */
export const DataIntegrationEventDatasetOperationType = {
  APPEND: "APPEND",
  DELETE: "DELETE",
  UPSERT: "UPSERT",
} as const;
/**
 * @public
 */
export type DataIntegrationEventDatasetOperationType =
  (typeof DataIntegrationEventDatasetOperationType)[keyof typeof DataIntegrationEventDatasetOperationType];

/**
 * @public
 * @enum
 */
export const DataIntegrationEventType = {
  DATASET: "scn.data.dataset",
  FORECAST: "scn.data.forecast",
  INBOUND_ORDER: "scn.data.inboundorder",
  INBOUND_ORDER_LINE: "scn.data.inboundorderline",
  INBOUND_ORDER_LINE_SCHEDULE: "scn.data.inboundorderlineschedule",
  INVENTORY_LEVEL: "scn.data.inventorylevel",
  OUTBOUND_ORDER_LINE: "scn.data.outboundorderline",
  OUTBOUND_SHIPMENT: "scn.data.outboundshipment",
  PROCESS_HEADER: "scn.data.processheader",
  PROCESS_OPERATION: "scn.data.processoperation",
  PROCESS_PRODUCT: "scn.data.processproduct",
  RESERVATION: "scn.data.reservation",
  SHIPMENT: "scn.data.shipment",
  SHIPMENT_STOP: "scn.data.shipmentstop",
  SHIPMENT_STOP_ORDER: "scn.data.shipmentstoporder",
  SUPPLY_PLAN: "scn.data.supplyplan",
} as const;
/**
 * @public
 */
export type DataIntegrationEventType = (typeof DataIntegrationEventType)[keyof typeof DataIntegrationEventType];

/**
 * @public
 * @enum
 */
export const DataIntegrationFlowExecutionStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type DataIntegrationFlowExecutionStatus =
  (typeof DataIntegrationFlowExecutionStatus)[keyof typeof DataIntegrationFlowExecutionStatus];
