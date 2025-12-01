// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AutoRefreshMode = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AutoRefreshMode = (typeof AutoRefreshMode)[keyof typeof AutoRefreshMode];

/**
 * @public
 * @enum
 */
export const AccessBudgetType = {
  CALENDAR_DAY: "CALENDAR_DAY",
  CALENDAR_MONTH: "CALENDAR_MONTH",
  CALENDAR_WEEK: "CALENDAR_WEEK",
  LIFETIME: "LIFETIME",
} as const;
/**
 * @public
 */
export type AccessBudgetType = (typeof AccessBudgetType)[keyof typeof AccessBudgetType];

/**
 * @public
 * @enum
 */
export const AudienceSizeType = {
  ABSOLUTE: "ABSOLUTE",
  PERCENTAGE: "PERCENTAGE",
} as const;
/**
 * @public
 */
export type AudienceSizeType = (typeof AudienceSizeType)[keyof typeof AudienceSizeType];

/**
 * @public
 * @enum
 */
export const AudienceExportJobStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
} as const;
/**
 * @public
 */
export type AudienceExportJobStatus = (typeof AudienceExportJobStatus)[keyof typeof AudienceExportJobStatus];

/**
 * @public
 * @enum
 */
export const WorkerComputeType = {
  CR1X: "CR.1X",
  CR4X: "CR.4X",
} as const;
/**
 * @public
 */
export type WorkerComputeType = (typeof WorkerComputeType)[keyof typeof WorkerComputeType];

/**
 * @public
 * @enum
 */
export const AudienceGenerationJobStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
} as const;
/**
 * @public
 */
export type AudienceGenerationJobStatus =
  (typeof AudienceGenerationJobStatus)[keyof typeof AudienceGenerationJobStatus];

/**
 * @public
 * @enum
 */
export const AudienceModelStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
} as const;
/**
 * @public
 */
export type AudienceModelStatus = (typeof AudienceModelStatus)[keyof typeof AudienceModelStatus];

/**
 * @public
 * @enum
 */
export const TagOnCreatePolicy = {
  FROM_PARENT_RESOURCE: "FROM_PARENT_RESOURCE",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type TagOnCreatePolicy = (typeof TagOnCreatePolicy)[keyof typeof TagOnCreatePolicy];

/**
 * @public
 * @enum
 */
export const SharedAudienceMetrics = {
  ALL: "ALL",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type SharedAudienceMetrics = (typeof SharedAudienceMetrics)[keyof typeof SharedAudienceMetrics];

/**
 * @public
 * @enum
 */
export const ConfiguredAudienceModelStatus = {
  ACTIVE: "ACTIVE",
} as const;
/**
 * @public
 */
export type ConfiguredAudienceModelStatus =
  (typeof ConfiguredAudienceModelStatus)[keyof typeof ConfiguredAudienceModelStatus];

/**
 * @public
 * @enum
 */
export const PolicyExistenceCondition = {
  POLICY_MUST_EXIST: "POLICY_MUST_EXIST",
  POLICY_MUST_NOT_EXIST: "POLICY_MUST_NOT_EXIST",
} as const;
/**
 * @public
 */
export type PolicyExistenceCondition = (typeof PolicyExistenceCondition)[keyof typeof PolicyExistenceCondition];

/**
 * @public
 * @enum
 */
export const TrainedModelExportFileType = {
  MODEL: "MODEL",
  OUTPUT: "OUTPUT",
} as const;
/**
 * @public
 */
export type TrainedModelExportFileType = (typeof TrainedModelExportFileType)[keyof typeof TrainedModelExportFileType];

/**
 * @public
 * @enum
 */
export const TrainedModelExportsMaxSizeUnitType = {
  GB: "GB",
} as const;
/**
 * @public
 */
export type TrainedModelExportsMaxSizeUnitType =
  (typeof TrainedModelExportsMaxSizeUnitType)[keyof typeof TrainedModelExportsMaxSizeUnitType];

/**
 * @public
 * @enum
 */
export const EntityType = {
  ALL_PERSONALLY_IDENTIFIABLE_INFORMATION: "ALL_PERSONALLY_IDENTIFIABLE_INFORMATION",
  CUSTOM: "CUSTOM",
  NUMBERS: "NUMBERS",
} as const;
/**
 * @public
 */
export type EntityType = (typeof EntityType)[keyof typeof EntityType];

/**
 * @public
 * @enum
 */
export const LogType = {
  ALL: "ALL",
  ERROR_SUMMARY: "ERROR_SUMMARY",
} as const;
/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * @public
 * @enum
 */
export const TrainedModelInferenceMaxOutputSizeUnitType = {
  GB: "GB",
} as const;
/**
 * @public
 */
export type TrainedModelInferenceMaxOutputSizeUnitType =
  (typeof TrainedModelInferenceMaxOutputSizeUnitType)[keyof typeof TrainedModelInferenceMaxOutputSizeUnitType];

/**
 * @public
 * @enum
 */
export const NoiseLevelType = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type NoiseLevelType = (typeof NoiseLevelType)[keyof typeof NoiseLevelType];

/**
 * @public
 * @enum
 */
export const TrainedModelArtifactMaxSizeUnitType = {
  GB: "GB",
} as const;
/**
 * @public
 */
export type TrainedModelArtifactMaxSizeUnitType =
  (typeof TrainedModelArtifactMaxSizeUnitType)[keyof typeof TrainedModelArtifactMaxSizeUnitType];

/**
 * @public
 * @enum
 */
export const MLInputChannelStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type MLInputChannelStatus = (typeof MLInputChannelStatus)[keyof typeof MLInputChannelStatus];

/**
 * @public
 * @enum
 */
export const TrainedModelExportJobStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
} as const;
/**
 * @public
 */
export type TrainedModelExportJobStatus =
  (typeof TrainedModelExportJobStatus)[keyof typeof TrainedModelExportJobStatus];

/**
 * @public
 * @enum
 */
export const LogsStatus = {
  PUBLISH_FAILED: "PUBLISH_FAILED",
  PUBLISH_SUCCEEDED: "PUBLISH_SUCCEEDED",
} as const;
/**
 * @public
 */
export type LogsStatus = (typeof LogsStatus)[keyof typeof LogsStatus];

/**
 * @public
 * @enum
 */
export const MetricsStatus = {
  PUBLISH_FAILED: "PUBLISH_FAILED",
  PUBLISH_SUCCEEDED: "PUBLISH_SUCCEEDED",
} as const;
/**
 * @public
 */
export type MetricsStatus = (typeof MetricsStatus)[keyof typeof MetricsStatus];

/**
 * @public
 * @enum
 */
export const TrainedModelInferenceJobStatus = {
  ACTIVE: "ACTIVE",
  CANCEL_FAILED: "CANCEL_FAILED",
  CANCEL_IN_PROGRESS: "CANCEL_IN_PROGRESS",
  CANCEL_PENDING: "CANCEL_PENDING",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type TrainedModelInferenceJobStatus =
  (typeof TrainedModelInferenceJobStatus)[keyof typeof TrainedModelInferenceJobStatus];

/**
 * @public
 * @enum
 */
export const TrainedModelStatus = {
  ACTIVE: "ACTIVE",
  CANCEL_FAILED: "CANCEL_FAILED",
  CANCEL_IN_PROGRESS: "CANCEL_IN_PROGRESS",
  CANCEL_PENDING: "CANCEL_PENDING",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  CREATE_PENDING: "CREATE_PENDING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  DELETE_PENDING: "DELETE_PENDING",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type TrainedModelStatus = (typeof TrainedModelStatus)[keyof typeof TrainedModelStatus];

/**
 * @public
 * @enum
 */
export const ResultFormat = {
  CSV: "CSV",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type ResultFormat = (typeof ResultFormat)[keyof typeof ResultFormat];

/**
 * @public
 * @enum
 */
export const MembershipInferenceAttackVersion = {
  DISTANCE_TO_CLOSEST_RECORD_V1: "DISTANCE_TO_CLOSEST_RECORD_V1",
} as const;
/**
 * @public
 */
export type MembershipInferenceAttackVersion =
  (typeof MembershipInferenceAttackVersion)[keyof typeof MembershipInferenceAttackVersion];

/**
 * @public
 * @enum
 */
export const SyntheticDataColumnType = {
  CATEGORICAL: "CATEGORICAL",
  NUMERICAL: "NUMERICAL",
} as const;
/**
 * @public
 */
export type SyntheticDataColumnType = (typeof SyntheticDataColumnType)[keyof typeof SyntheticDataColumnType];

/**
 * @public
 * @enum
 */
export const S3DataDistributionType = {
  FULLY_REPLICATED: "FullyReplicated",
  SHARDED_BY_S3_KEY: "ShardedByS3Key",
} as const;
/**
 * @public
 */
export type S3DataDistributionType = (typeof S3DataDistributionType)[keyof typeof S3DataDistributionType];

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5N_18XLARGE: "ml.c5n.18xlarge",
  ML_C5N_2XLARGE: "ml.c5n.2xlarge",
  ML_C5N_4XLARGE: "ml.c5n.4xlarge",
  ML_C5N_9XLARGE: "ml.c5n.9xlarge",
  ML_C5N_XLARGE: "ml.c5n.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_C6I_12XLARGE: "ml.c6i.12xlarge",
  ML_C6I_16XLARGE: "ml.c6i.16xlarge",
  ML_C6I_24XLARGE: "ml.c6i.24xlarge",
  ML_C6I_2XLARGE: "ml.c6i.2xlarge",
  ML_C6I_32XLARGE: "ml.c6i.32xlarge",
  ML_C6I_4XLARGE: "ml.c6i.4xlarge",
  ML_C6I_8XLARGE: "ml.c6i.8xlarge",
  ML_C6I_XLARGE: "ml.c6i.xlarge",
  ML_C7I_12XLARGE: "ml.c7i.12xlarge",
  ML_C7I_16XLARGE: "ml.c7i.16xlarge",
  ML_C7I_24XLARGE: "ml.c7i.24xlarge",
  ML_C7I_2XLARGE: "ml.c7i.2xlarge",
  ML_C7I_48XLARGE: "ml.c7i.48xlarge",
  ML_C7I_4XLARGE: "ml.c7i.4xlarge",
  ML_C7I_8XLARGE: "ml.c7i.8xlarge",
  ML_C7I_LARGE: "ml.c7i.large",
  ML_C7I_XLARGE: "ml.c7i.xlarge",
  ML_G4DN_12XLARGE: "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE: "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE: "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE: "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE: "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE: "ml.g4dn.xlarge",
  ML_G5_12XLARGE: "ml.g5.12xlarge",
  ML_G5_16XLARGE: "ml.g5.16xlarge",
  ML_G5_24XLARGE: "ml.g5.24xlarge",
  ML_G5_2XLARGE: "ml.g5.2xlarge",
  ML_G5_48XLARGE: "ml.g5.48xlarge",
  ML_G5_4XLARGE: "ml.g5.4xlarge",
  ML_G5_8XLARGE: "ml.g5.8xlarge",
  ML_G5_XLARGE: "ml.g5.xlarge",
  ML_G6E_12XLARGE: "ml.g6e.12xlarge",
  ML_G6E_16XLARGE: "ml.g6e.16xlarge",
  ML_G6E_24XLARGE: "ml.g6e.24xlarge",
  ML_G6E_2XLARGE: "ml.g6e.2xlarge",
  ML_G6E_48XLARGE: "ml.g6e.48xlarge",
  ML_G6E_4XLARGE: "ml.g6e.4xlarge",
  ML_G6E_8XLARGE: "ml.g6e.8xlarge",
  ML_G6E_XLARGE: "ml.g6e.xlarge",
  ML_G6_12XLARGE: "ml.g6.12xlarge",
  ML_G6_16XLARGE: "ml.g6.16xlarge",
  ML_G6_24XLARGE: "ml.g6.24xlarge",
  ML_G6_2XLARGE: "ml.g6.2xlarge",
  ML_G6_48XLARGE: "ml.g6.48xlarge",
  ML_G6_4XLARGE: "ml.g6.4xlarge",
  ML_G6_8XLARGE: "ml.g6.8xlarge",
  ML_G6_XLARGE: "ml.g6.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_M6I_12XLARGE: "ml.m6i.12xlarge",
  ML_M6I_16XLARGE: "ml.m6i.16xlarge",
  ML_M6I_24XLARGE: "ml.m6i.24xlarge",
  ML_M6I_2XLARGE: "ml.m6i.2xlarge",
  ML_M6I_32XLARGE: "ml.m6i.32xlarge",
  ML_M6I_4XLARGE: "ml.m6i.4xlarge",
  ML_M6I_8XLARGE: "ml.m6i.8xlarge",
  ML_M6I_LARGE: "ml.m6i.large",
  ML_M6I_XLARGE: "ml.m6i.xlarge",
  ML_M7I_12XLARGE: "ml.m7i.12xlarge",
  ML_M7I_16XLARGE: "ml.m7i.16xlarge",
  ML_M7I_24XLARGE: "ml.m7i.24xlarge",
  ML_M7I_2XLARGE: "ml.m7i.2xlarge",
  ML_M7I_48XLARGE: "ml.m7i.48xlarge",
  ML_M7I_4XLARGE: "ml.m7i.4xlarge",
  ML_M7I_8XLARGE: "ml.m7i.8xlarge",
  ML_M7I_LARGE: "ml.m7i.large",
  ML_M7I_XLARGE: "ml.m7i.xlarge",
  ML_P2_16XLARGE: "ml.p2.16xlarge",
  ML_P2_8XLARGE: "ml.p2.8xlarge",
  ML_P2_XLARGE: "ml.p2.xlarge",
  ML_P3DN_24XLARGE: "ml.p3dn.24xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_P5EN_48XLARGE: "ml.p5en.48xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_R5D_12XLARGE: "ml.r5d.12xlarge",
  ML_R5D_16XLARGE: "ml.r5d.16xlarge",
  ML_R5D_24XLARGE: "ml.r5d.24xlarge",
  ML_R5D_2XLARGE: "ml.r5d.2xlarge",
  ML_R5D_4XLARGE: "ml.r5d.4xlarge",
  ML_R5D_8XLARGE: "ml.r5d.8xlarge",
  ML_R5D_LARGE: "ml.r5d.large",
  ML_R5D_XLARGE: "ml.r5d.xlarge",
  ML_R5_12XLARGE: "ml.r5.12xlarge",
  ML_R5_16XLARGE: "ml.r5.16xlarge",
  ML_R5_24XLARGE: "ml.r5.24xlarge",
  ML_R5_2XLARGE: "ml.r5.2xlarge",
  ML_R5_4XLARGE: "ml.r5.4xlarge",
  ML_R5_8XLARGE: "ml.r5.8xlarge",
  ML_R5_LARGE: "ml.r5.large",
  ML_R5_XLARGE: "ml.r5.xlarge",
  ML_R7I_12XLARGE: "ml.r7i.12xlarge",
  ML_R7I_16XLARGE: "ml.r7i.16xlarge",
  ML_R7I_24XLARGE: "ml.r7i.24xlarge",
  ML_R7I_2XLARGE: "ml.r7i.2xlarge",
  ML_R7I_48XLARGE: "ml.r7i.48xlarge",
  ML_R7I_4XLARGE: "ml.r7i.4xlarge",
  ML_R7I_8XLARGE: "ml.r7i.8xlarge",
  ML_R7I_LARGE: "ml.r7i.large",
  ML_R7I_XLARGE: "ml.r7i.xlarge",
  ML_T3_2XLARGE: "ml.t3.2xlarge",
  ML_T3_LARGE: "ml.t3.large",
  ML_T3_MEDIUM: "ml.t3.medium",
  ML_T3_XLARGE: "ml.t3.xlarge",
  ML_TRN1N_32XLARGE: "ml.trn1n.32xlarge",
  ML_TRN1_2XLARGE: "ml.trn1.2xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
} as const;
/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * @public
 * @enum
 */
export const TrainingInputMode = {
  FAST_FILE: "FastFile",
  FILE: "File",
  PIPE: "Pipe",
} as const;
/**
 * @public
 */
export type TrainingInputMode = (typeof TrainingInputMode)[keyof typeof TrainingInputMode];

/**
 * @public
 * @enum
 */
export const InferenceInstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_C6I_12XLARGE: "ml.c6i.12xlarge",
  ML_C6I_16XLARGE: "ml.c6i.16xlarge",
  ML_C6I_24XLARGE: "ml.c6i.24xlarge",
  ML_C6I_2XLARGE: "ml.c6i.2xlarge",
  ML_C6I_32XLARGE: "ml.c6i.32xlarge",
  ML_C6I_4XLARGE: "ml.c6i.4xlarge",
  ML_C6I_8XLARGE: "ml.c6i.8xlarge",
  ML_C6I_LARGE: "ml.c6i.large",
  ML_C6I_XLARGE: "ml.c6i.xlarge",
  ML_C7I_12XLARGE: "ml.c7i.12xlarge",
  ML_C7I_16XLARGE: "ml.c7i.16xlarge",
  ML_C7I_24XLARGE: "ml.c7i.24xlarge",
  ML_C7I_2XLARGE: "ml.c7i.2xlarge",
  ML_C7I_48XLARGE: "ml.c7i.48xlarge",
  ML_C7I_4XLARGE: "ml.c7i.4xlarge",
  ML_C7I_8XLARGE: "ml.c7i.8xlarge",
  ML_C7I_LARGE: "ml.c7i.large",
  ML_C7I_XLARGE: "ml.c7i.xlarge",
  ML_G4DN_12XLARGE: "ml.g4dn.12xlarge",
  ML_G4DN_16XLARGE: "ml.g4dn.16xlarge",
  ML_G4DN_2XLARGE: "ml.g4dn.2xlarge",
  ML_G4DN_4XLARGE: "ml.g4dn.4xlarge",
  ML_G4DN_8XLARGE: "ml.g4dn.8xlarge",
  ML_G4DN_XLARGE: "ml.g4dn.xlarge",
  ML_G5_12XLARGE: "ml.g5.12xlarge",
  ML_G5_16XLARGE: "ml.g5.16xlarge",
  ML_G5_24XLARGE: "ml.g5.24xlarge",
  ML_G5_2XLARGE: "ml.g5.2xlarge",
  ML_G5_48XLARGE: "ml.g5.48xlarge",
  ML_G5_4XLARGE: "ml.g5.4xlarge",
  ML_G5_8XLARGE: "ml.g5.8xlarge",
  ML_G5_XLARGE: "ml.g5.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_M6I_12XLARGE: "ml.m6i.12xlarge",
  ML_M6I_16XLARGE: "ml.m6i.16xlarge",
  ML_M6I_24XLARGE: "ml.m6i.24xlarge",
  ML_M6I_2XLARGE: "ml.m6i.2xlarge",
  ML_M6I_32XLARGE: "ml.m6i.32xlarge",
  ML_M6I_4XLARGE: "ml.m6i.4xlarge",
  ML_M6I_8XLARGE: "ml.m6i.8xlarge",
  ML_M6I_LARGE: "ml.m6i.large",
  ML_M6I_XLARGE: "ml.m6i.xlarge",
  ML_M7I_12XLARGE: "ml.m7i.12xlarge",
  ML_M7I_16XLARGE: "ml.m7i.16xlarge",
  ML_M7I_24XLARGE: "ml.m7i.24xlarge",
  ML_M7I_2XLARGE: "ml.m7i.2xlarge",
  ML_M7I_48XLARGE: "ml.m7i.48xlarge",
  ML_M7I_4XLARGE: "ml.m7i.4xlarge",
  ML_M7I_8XLARGE: "ml.m7i.8xlarge",
  ML_M7I_LARGE: "ml.m7i.large",
  ML_M7I_XLARGE: "ml.m7i.xlarge",
  ML_P2_16XLARGE: "ml.p2.16xlarge",
  ML_P2_8XLARGE: "ml.p2.8xlarge",
  ML_P2_XLARGE: "ml.p2.xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_R6I_12XLARGE: "ml.r6i.12xlarge",
  ML_R6I_16XLARGE: "ml.r6i.16xlarge",
  ML_R6I_24XLARGE: "ml.r6i.24xlarge",
  ML_R6I_2XLARGE: "ml.r6i.2xlarge",
  ML_R6I_32XLARGE: "ml.r6i.32xlarge",
  ML_R6I_4XLARGE: "ml.r6i.4xlarge",
  ML_R6I_8XLARGE: "ml.r6i.8xlarge",
  ML_R6I_LARGE: "ml.r6i.large",
  ML_R6I_XLARGE: "ml.r6i.xlarge",
  ML_R7I_12XLARGE: "ml.r7i.12xlarge",
  ML_R7I_16XLARGE: "ml.r7i.16xlarge",
  ML_R7I_24XLARGE: "ml.r7i.24xlarge",
  ML_R7I_2XLARGE: "ml.r7i.2xlarge",
  ML_R7I_48XLARGE: "ml.r7i.48xlarge",
  ML_R7I_4XLARGE: "ml.r7i.4xlarge",
  ML_R7I_8XLARGE: "ml.r7i.8xlarge",
  ML_R7I_LARGE: "ml.r7i.large",
  ML_R7I_XLARGE: "ml.r7i.xlarge",
} as const;
/**
 * @public
 */
export type InferenceInstanceType = (typeof InferenceInstanceType)[keyof typeof InferenceInstanceType];

/**
 * @public
 * @enum
 */
export const ColumnType = {
  CATEGORICAL_FEATURE: "CATEGORICAL_FEATURE",
  ITEM_ID: "ITEM_ID",
  NUMERICAL_FEATURE: "NUMERICAL_FEATURE",
  TIMESTAMP: "TIMESTAMP",
  USER_ID: "USER_ID",
} as const;
/**
 * @public
 */
export type ColumnType = (typeof ColumnType)[keyof typeof ColumnType];

/**
 * @public
 * @enum
 */
export const DatasetType = {
  INTERACTIONS: "INTERACTIONS",
} as const;
/**
 * @public
 */
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

/**
 * @public
 * @enum
 */
export const TrainingDatasetStatus = {
  ACTIVE: "ACTIVE",
} as const;
/**
 * @public
 */
export type TrainingDatasetStatus = (typeof TrainingDatasetStatus)[keyof typeof TrainingDatasetStatus];
