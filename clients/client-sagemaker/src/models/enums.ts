// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const MIGProfileType = {
  MIG_1G_10GB: "mig-1g.10gb",
  MIG_1G_18GB: "mig-1g.18gb",
  MIG_1G_20GB: "mig-1g.20gb",
  MIG_1G_23GB: "mig-1g.23gb",
  MIG_1G_35GB: "mig-1g.35gb",
  MIG_1G_45GB: "mig-1g.45gb",
  MIG_1G_47GB: "mig-1g.47gb",
  MIG_1G_5GB: "mig-1g.5gb",
  MIG_2G_10GB: "mig-2g.10gb",
  MIG_2G_20GB: "mig-2g.20gb",
  MIG_2G_35GB: "mig-2g.35gb",
  MIG_2G_45GB: "mig-2g.45gb",
  MIG_2G_47GB: "mig-2g.47gb",
  MIG_3G_20GB: "mig-3g.20gb",
  MIG_3G_40GB: "mig-3g.40gb",
  MIG_3G_71GB: "mig-3g.71gb",
  MIG_3G_90GB: "mig-3g.90gb",
  MIG_3G_93GB: "mig-3g.93gb",
  MIG_4G_20GB: "mig-4g.20gb",
  MIG_4G_40GB: "mig-4g.40gb",
  MIG_4G_71GB: "mig-4g.71gb",
  MIG_4G_90GB: "mig-4g.90gb",
  MIG_4G_93GB: "mig-4g.93gb",
  MIG_7G_141GB: "mig-7g.141gb",
  MIG_7G_180GB: "mig-7g.180gb",
  MIG_7G_186GB: "mig-7g.186gb",
  MIG_7G_40GB: "mig-7g.40gb",
  MIG_7G_80GB: "mig-7g.80gb",
} as const;
/**
 * @public
 */
export type MIGProfileType = (typeof MIGProfileType)[keyof typeof MIGProfileType];

/**
 * @public
 * @enum
 */
export const AccountDefaultStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type AccountDefaultStatus = (typeof AccountDefaultStatus)[keyof typeof AccountDefaultStatus];

/**
 * @public
 * @enum
 */
export const ActionStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  UNKNOWN: "Unknown",
} as const;
/**
 * @public
 */
export type ActionStatus = (typeof ActionStatus)[keyof typeof ActionStatus];

/**
 * @public
 * @enum
 */
export const ActivationState = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type ActivationState = (typeof ActivationState)[keyof typeof ActivationState];

/**
 * @public
 * @enum
 */
export const ActiveClusterOperationName = {
  SCALING: "Scaling",
} as const;
/**
 * @public
 */
export type ActiveClusterOperationName = (typeof ActiveClusterOperationName)[keyof typeof ActiveClusterOperationName];

/**
 * @public
 * @enum
 */
export const AssociationEdgeType = {
  ASSOCIATED_WITH: "AssociatedWith",
  CONTRIBUTED_TO: "ContributedTo",
  DERIVED_FROM: "DerivedFrom",
  PRODUCED: "Produced",
  SAME_AS: "SameAs",
} as const;
/**
 * @public
 */
export type AssociationEdgeType = (typeof AssociationEdgeType)[keyof typeof AssociationEdgeType];

/**
 * @public
 * @enum
 */
export const CompressionType = {
  GZIP: "Gzip",
  NONE: "None",
} as const;
/**
 * @public
 */
export type CompressionType = (typeof CompressionType)[keyof typeof CompressionType];

/**
 * @public
 * @enum
 */
export const AdditionalS3DataSourceDataType = {
  S3OBJECT: "S3Object",
  S3PREFIX: "S3Prefix",
} as const;
/**
 * @public
 */
export type AdditionalS3DataSourceDataType =
  (typeof AdditionalS3DataSourceDataType)[keyof typeof AdditionalS3DataSourceDataType];

/**
 * @public
 * @enum
 */
export const ModelCompressionType = {
  Gzip: "Gzip",
  None: "None",
} as const;
/**
 * @public
 */
export type ModelCompressionType = (typeof ModelCompressionType)[keyof typeof ModelCompressionType];

/**
 * @public
 * @enum
 */
export const S3ModelDataType = {
  S3Object: "S3Object",
  S3Prefix: "S3Prefix",
} as const;
/**
 * @public
 */
export type S3ModelDataType = (typeof S3ModelDataType)[keyof typeof S3ModelDataType];

/**
 * @public
 * @enum
 */
export const ProductionVariantInstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_LARGE: "ml.c4.large",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5D_18XLARGE: "ml.c5d.18xlarge",
  ML_C5D_2XLARGE: "ml.c5d.2xlarge",
  ML_C5D_4XLARGE: "ml.c5d.4xlarge",
  ML_C5D_9XLARGE: "ml.c5d.9xlarge",
  ML_C5D_LARGE: "ml.c5d.large",
  ML_C5D_XLARGE: "ml.c5d.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_LARGE: "ml.c5.large",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_C6GD_12XLARGE: "ml.c6gd.12xlarge",
  ML_C6GD_16XLARGE: "ml.c6gd.16xlarge",
  ML_C6GD_2XLARGE: "ml.c6gd.2xlarge",
  ML_C6GD_4XLARGE: "ml.c6gd.4xlarge",
  ML_C6GD_8XLARGE: "ml.c6gd.8xlarge",
  ML_C6GD_LARGE: "ml.c6gd.large",
  ML_C6GD_XLARGE: "ml.c6gd.xlarge",
  ML_C6GN_12XLARGE: "ml.c6gn.12xlarge",
  ML_C6GN_16XLARGE: "ml.c6gn.16xlarge",
  ML_C6GN_2XLARGE: "ml.c6gn.2xlarge",
  ML_C6GN_4XLARGE: "ml.c6gn.4xlarge",
  ML_C6GN_8XLARGE: "ml.c6gn.8xlarge",
  ML_C6GN_LARGE: "ml.c6gn.large",
  ML_C6GN_XLARGE: "ml.c6gn.xlarge",
  ML_C6G_12XLARGE: "ml.c6g.12xlarge",
  ML_C6G_16XLARGE: "ml.c6g.16xlarge",
  ML_C6G_2XLARGE: "ml.c6g.2xlarge",
  ML_C6G_4XLARGE: "ml.c6g.4xlarge",
  ML_C6G_8XLARGE: "ml.c6g.8xlarge",
  ML_C6G_LARGE: "ml.c6g.large",
  ML_C6G_XLARGE: "ml.c6g.xlarge",
  ML_C6IN_12XLARGE: "ml.c6in.12xlarge",
  ML_C6IN_16XLARGE: "ml.c6in.16xlarge",
  ML_C6IN_24XLARGE: "ml.c6in.24xlarge",
  ML_C6IN_2XLARGE: "ml.c6in.2xlarge",
  ML_C6IN_32XLARGE: "ml.c6in.32xlarge",
  ML_C6IN_4XLARGE: "ml.c6in.4xlarge",
  ML_C6IN_8XLARGE: "ml.c6in.8xlarge",
  ML_C6IN_LARGE: "ml.c6in.large",
  ML_C6IN_XLARGE: "ml.c6in.xlarge",
  ML_C6I_12XLARGE: "ml.c6i.12xlarge",
  ML_C6I_16XLARGE: "ml.c6i.16xlarge",
  ML_C6I_24XLARGE: "ml.c6i.24xlarge",
  ML_C6I_2XLARGE: "ml.c6i.2xlarge",
  ML_C6I_32XLARGE: "ml.c6i.32xlarge",
  ML_C6I_4XLARGE: "ml.c6i.4xlarge",
  ML_C6I_8XLARGE: "ml.c6i.8xlarge",
  ML_C6I_LARGE: "ml.c6i.large",
  ML_C6I_XLARGE: "ml.c6i.xlarge",
  ML_C7G_12XLARGE: "ml.c7g.12xlarge",
  ML_C7G_16XLARGE: "ml.c7g.16xlarge",
  ML_C7G_2XLARGE: "ml.c7g.2xlarge",
  ML_C7G_4XLARGE: "ml.c7g.4xlarge",
  ML_C7G_8XLARGE: "ml.c7g.8xlarge",
  ML_C7G_LARGE: "ml.c7g.large",
  ML_C7G_XLARGE: "ml.c7g.xlarge",
  ML_C7I_12XLARGE: "ml.c7i.12xlarge",
  ML_C7I_16XLARGE: "ml.c7i.16xlarge",
  ML_C7I_24XLARGE: "ml.c7i.24xlarge",
  ML_C7I_2XLARGE: "ml.c7i.2xlarge",
  ML_C7I_48XLARGE: "ml.c7i.48xlarge",
  ML_C7I_4XLARGE: "ml.c7i.4xlarge",
  ML_C7I_8XLARGE: "ml.c7i.8xlarge",
  ML_C7I_LARGE: "ml.c7i.large",
  ML_C7I_XLARGE: "ml.c7i.xlarge",
  ML_C8G_12XLARGE: "ml.c8g.12xlarge",
  ML_C8G_16XLARGE: "ml.c8g.16xlarge",
  ML_C8G_24XLARGE: "ml.c8g.24xlarge",
  ML_C8G_2XLARGE: "ml.c8g.2xlarge",
  ML_C8G_48XLARGE: "ml.c8g.48xlarge",
  ML_C8G_4XLARGE: "ml.c8g.4xlarge",
  ML_C8G_8XLARGE: "ml.c8g.8xlarge",
  ML_C8G_LARGE: "ml.c8g.large",
  ML_C8G_MEDIUM: "ml.c8g.medium",
  ML_C8G_XLARGE: "ml.c8g.xlarge",
  ML_DL1_24XLARGE: "ml.dl1.24xlarge",
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
  ML_INF1_24XLARGE: "ml.inf1.24xlarge",
  ML_INF1_2XLARGE: "ml.inf1.2xlarge",
  ML_INF1_6XLARGE: "ml.inf1.6xlarge",
  ML_INF1_XLARGE: "ml.inf1.xlarge",
  ML_INF2_24XLARGE: "ml.inf2.24xlarge",
  ML_INF2_48XLARGE: "ml.inf2.48xlarge",
  ML_INF2_8XLARGE: "ml.inf2.8xlarge",
  ML_INF2_XLARGE: "ml.inf2.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5D_12XLARGE: "ml.m5d.12xlarge",
  ML_M5D_24XLARGE: "ml.m5d.24xlarge",
  ML_M5D_2XLARGE: "ml.m5d.2xlarge",
  ML_M5D_4XLARGE: "ml.m5d.4xlarge",
  ML_M5D_LARGE: "ml.m5d.large",
  ML_M5D_XLARGE: "ml.m5d.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_M6GD_12XLARGE: "ml.m6gd.12xlarge",
  ML_M6GD_16XLARGE: "ml.m6gd.16xlarge",
  ML_M6GD_2XLARGE: "ml.m6gd.2xlarge",
  ML_M6GD_4XLARGE: "ml.m6gd.4xlarge",
  ML_M6GD_8XLARGE: "ml.m6gd.8xlarge",
  ML_M6GD_LARGE: "ml.m6gd.large",
  ML_M6GD_XLARGE: "ml.m6gd.xlarge",
  ML_M6G_12XLARGE: "ml.m6g.12xlarge",
  ML_M6G_16XLARGE: "ml.m6g.16xlarge",
  ML_M6G_2XLARGE: "ml.m6g.2xlarge",
  ML_M6G_4XLARGE: "ml.m6g.4xlarge",
  ML_M6G_8XLARGE: "ml.m6g.8xlarge",
  ML_M6G_LARGE: "ml.m6g.large",
  ML_M6G_XLARGE: "ml.m6g.xlarge",
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
  ML_M8G_12XLARGE: "ml.m8g.12xlarge",
  ML_M8G_16XLARGE: "ml.m8g.16xlarge",
  ML_M8G_24XLARGE: "ml.m8g.24xlarge",
  ML_M8G_2XLARGE: "ml.m8g.2xlarge",
  ML_M8G_48XLARGE: "ml.m8g.48xlarge",
  ML_M8G_4XLARGE: "ml.m8g.4xlarge",
  ML_M8G_8XLARGE: "ml.m8g.8xlarge",
  ML_M8G_LARGE: "ml.m8g.large",
  ML_M8G_MEDIUM: "ml.m8g.medium",
  ML_M8G_XLARGE: "ml.m8g.xlarge",
  ML_P2_16XLARGE: "ml.p2.16xlarge",
  ML_P2_8XLARGE: "ml.p2.8xlarge",
  ML_P2_XLARGE: "ml.p2.xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_P5EN_48XLARGE: "ml.p5en.48xlarge",
  ML_P5E_48XLARGE: "ml.p5e.48xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_P5_4XLARGE: "ml.p5.4xlarge",
  ML_P6E_GB200_36XLARGE: "ml.p6e-gb200.36xlarge",
  ML_P6_B200_48XLARGE: "ml.p6-b200.48xlarge",
  ML_R5D_12XLARGE: "ml.r5d.12xlarge",
  ML_R5D_24XLARGE: "ml.r5d.24xlarge",
  ML_R5D_2XLARGE: "ml.r5d.2xlarge",
  ML_R5D_4XLARGE: "ml.r5d.4xlarge",
  ML_R5D_LARGE: "ml.r5d.large",
  ML_R5D_XLARGE: "ml.r5d.xlarge",
  ML_R5_12XLARGE: "ml.r5.12xlarge",
  ML_R5_24XLARGE: "ml.r5.24xlarge",
  ML_R5_2XLARGE: "ml.r5.2xlarge",
  ML_R5_4XLARGE: "ml.r5.4xlarge",
  ML_R5_LARGE: "ml.r5.large",
  ML_R5_XLARGE: "ml.r5.xlarge",
  ML_R6GD_12XLARGE: "ml.r6gd.12xlarge",
  ML_R6GD_16XLARGE: "ml.r6gd.16xlarge",
  ML_R6GD_2XLARGE: "ml.r6gd.2xlarge",
  ML_R6GD_4XLARGE: "ml.r6gd.4xlarge",
  ML_R6GD_8XLARGE: "ml.r6gd.8xlarge",
  ML_R6GD_LARGE: "ml.r6gd.large",
  ML_R6GD_XLARGE: "ml.r6gd.xlarge",
  ML_R6G_12XLARGE: "ml.r6g.12xlarge",
  ML_R6G_16XLARGE: "ml.r6g.16xlarge",
  ML_R6G_2XLARGE: "ml.r6g.2xlarge",
  ML_R6G_4XLARGE: "ml.r6g.4xlarge",
  ML_R6G_8XLARGE: "ml.r6g.8xlarge",
  ML_R6G_LARGE: "ml.r6g.large",
  ML_R6G_XLARGE: "ml.r6g.xlarge",
  ML_R6I_12XLARGE: "ml.r6i.12xlarge",
  ML_R6I_16XLARGE: "ml.r6i.16xlarge",
  ML_R6I_24XLARGE: "ml.r6i.24xlarge",
  ML_R6I_2XLARGE: "ml.r6i.2xlarge",
  ML_R6I_32XLARGE: "ml.r6i.32xlarge",
  ML_R6I_4XLARGE: "ml.r6i.4xlarge",
  ML_R6I_8XLARGE: "ml.r6i.8xlarge",
  ML_R6I_LARGE: "ml.r6i.large",
  ML_R6I_XLARGE: "ml.r6i.xlarge",
  ML_R7GD_12XLARGE: "ml.r7gd.12xlarge",
  ML_R7GD_16XLARGE: "ml.r7gd.16xlarge",
  ML_R7GD_2XLARGE: "ml.r7gd.2xlarge",
  ML_R7GD_4XLARGE: "ml.r7gd.4xlarge",
  ML_R7GD_8XLARGE: "ml.r7gd.8xlarge",
  ML_R7GD_LARGE: "ml.r7gd.large",
  ML_R7GD_MEDIUM: "ml.r7gd.medium",
  ML_R7GD_XLARGE: "ml.r7gd.xlarge",
  ML_R7I_12XLARGE: "ml.r7i.12xlarge",
  ML_R7I_16XLARGE: "ml.r7i.16xlarge",
  ML_R7I_24XLARGE: "ml.r7i.24xlarge",
  ML_R7I_2XLARGE: "ml.r7i.2xlarge",
  ML_R7I_48XLARGE: "ml.r7i.48xlarge",
  ML_R7I_4XLARGE: "ml.r7i.4xlarge",
  ML_R7I_8XLARGE: "ml.r7i.8xlarge",
  ML_R7I_LARGE: "ml.r7i.large",
  ML_R7I_XLARGE: "ml.r7i.xlarge",
  ML_R8G_12XLARGE: "ml.r8g.12xlarge",
  ML_R8G_16XLARGE: "ml.r8g.16xlarge",
  ML_R8G_24XLARGE: "ml.r8g.24xlarge",
  ML_R8G_2XLARGE: "ml.r8g.2xlarge",
  ML_R8G_48XLARGE: "ml.r8g.48xlarge",
  ML_R8G_4XLARGE: "ml.r8g.4xlarge",
  ML_R8G_8XLARGE: "ml.r8g.8xlarge",
  ML_R8G_LARGE: "ml.r8g.large",
  ML_R8G_MEDIUM: "ml.r8g.medium",
  ML_R8G_XLARGE: "ml.r8g.xlarge",
  ML_T2_2XLARGE: "ml.t2.2xlarge",
  ML_T2_LARGE: "ml.t2.large",
  ML_T2_MEDIUM: "ml.t2.medium",
  ML_T2_XLARGE: "ml.t2.xlarge",
  ML_TRN1N_32XLARGE: "ml.trn1n.32xlarge",
  ML_TRN1_2XLARGE: "ml.trn1.2xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
  ML_TRN2_48XLARGE: "ml.trn2.48xlarge",
} as const;
/**
 * @public
 */
export type ProductionVariantInstanceType =
  (typeof ProductionVariantInstanceType)[keyof typeof ProductionVariantInstanceType];

/**
 * @public
 * @enum
 */
export const TransformInstanceType = {
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
  ML_G6_12XLARGE: "ml.g6.12xlarge",
  ML_G6_16XLARGE: "ml.g6.16xlarge",
  ML_G6_24XLARGE: "ml.g6.24xlarge",
  ML_G6_2XLARGE: "ml.g6.2xlarge",
  ML_G6_48XLARGE: "ml.g6.48xlarge",
  ML_G6_4XLARGE: "ml.g6.4xlarge",
  ML_G6_8XLARGE: "ml.g6.8xlarge",
  ML_G6_XLARGE: "ml.g6.xlarge",
  ML_INF2_24XLARGE: "ml.inf2.24xlarge",
  ML_INF2_48XLARGE: "ml.inf2.48xlarge",
  ML_INF2_8XLARGE: "ml.inf2.8xlarge",
  ML_INF2_XLARGE: "ml.inf2.xlarge",
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
  ML_TRN1_2XLARGE: "ml.trn1.2xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
} as const;
/**
 * @public
 */
export type TransformInstanceType = (typeof TransformInstanceType)[keyof typeof TransformInstanceType];

/**
 * @public
 * @enum
 */
export const AggregationTransformationValue = {
  Avg: "avg",
  First: "first",
  Max: "max",
  Min: "min",
  Sum: "sum",
} as const;
/**
 * @public
 */
export type AggregationTransformationValue =
  (typeof AggregationTransformationValue)[keyof typeof AggregationTransformationValue];

/**
 * @public
 * @enum
 */
export const AlgorithmSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type AlgorithmSortBy = (typeof AlgorithmSortBy)[keyof typeof AlgorithmSortBy];

/**
 * @public
 * @enum
 */
export const TrainingRepositoryAccessMode = {
  PLATFORM: "Platform",
  VPC: "Vpc",
} as const;
/**
 * @public
 */
export type TrainingRepositoryAccessMode =
  (typeof TrainingRepositoryAccessMode)[keyof typeof TrainingRepositoryAccessMode];

/**
 * @public
 * @enum
 */
export const TrainingInputMode = {
  FASTFILE: "FastFile",
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
export const AlgorithmStatus = {
  COMPLETED: "Completed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
} as const;
/**
 * @public
 */
export type AlgorithmStatus = (typeof AlgorithmStatus)[keyof typeof AlgorithmStatus];

/**
 * @public
 * @enum
 */
export const DetailedAlgorithmStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  NOT_STARTED: "NotStarted",
} as const;
/**
 * @public
 */
export type DetailedAlgorithmStatus = (typeof DetailedAlgorithmStatus)[keyof typeof DetailedAlgorithmStatus];

/**
 * @public
 * @enum
 */
export const FileSystemAccessMode = {
  RO: "ro",
  RW: "rw",
} as const;
/**
 * @public
 */
export type FileSystemAccessMode = (typeof FileSystemAccessMode)[keyof typeof FileSystemAccessMode];

/**
 * @public
 * @enum
 */
export const FileSystemType = {
  EFS: "EFS",
  FSXLUSTRE: "FSxLustre",
} as const;
/**
 * @public
 */
export type FileSystemType = (typeof FileSystemType)[keyof typeof FileSystemType];

/**
 * @public
 * @enum
 */
export const S3DataDistribution = {
  FULLY_REPLICATED: "FullyReplicated",
  SHARDED_BY_S3_KEY: "ShardedByS3Key",
} as const;
/**
 * @public
 */
export type S3DataDistribution = (typeof S3DataDistribution)[keyof typeof S3DataDistribution];

/**
 * @public
 * @enum
 */
export const S3DataType = {
  AUGMENTED_MANIFEST_FILE: "AugmentedManifestFile",
  CONVERSE: "Converse",
  MANIFEST_FILE: "ManifestFile",
  S3_PREFIX: "S3Prefix",
} as const;
/**
 * @public
 */
export type S3DataType = (typeof S3DataType)[keyof typeof S3DataType];

/**
 * @public
 * @enum
 */
export const RecordWrapper = {
  NONE: "None",
  RECORDIO: "RecordIO",
} as const;
/**
 * @public
 */
export type RecordWrapper = (typeof RecordWrapper)[keyof typeof RecordWrapper];

/**
 * @public
 * @enum
 */
export const OutputCompressionType = {
  GZIP: "GZIP",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type OutputCompressionType = (typeof OutputCompressionType)[keyof typeof OutputCompressionType];

/**
 * @public
 * @enum
 */
export const TrainingInstanceType = {
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
  ML_P5E_48XLARGE: "ml.p5e.48xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_P5_4XLARGE: "ml.p5.4xlarge",
  ML_P6E_GB200_36XLARGE: "ml.p6e-gb200.36xlarge",
  ML_P6_B200_48XLARGE: "ml.p6-b200.48xlarge",
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
  ML_TRN2_48XLARGE: "ml.trn2.48xlarge",
} as const;
/**
 * @public
 */
export type TrainingInstanceType = (typeof TrainingInstanceType)[keyof typeof TrainingInstanceType];

/**
 * @public
 * @enum
 */
export const BatchStrategy = {
  MULTI_RECORD: "MultiRecord",
  SINGLE_RECORD: "SingleRecord",
} as const;
/**
 * @public
 */
export type BatchStrategy = (typeof BatchStrategy)[keyof typeof BatchStrategy];

/**
 * @public
 * @enum
 */
export const SplitType = {
  LINE: "Line",
  NONE: "None",
  RECORDIO: "RecordIO",
  TFRECORD: "TFRecord",
} as const;
/**
 * @public
 */
export type SplitType = (typeof SplitType)[keyof typeof SplitType];

/**
 * @public
 * @enum
 */
export const AssemblyType = {
  LINE: "Line",
  NONE: "None",
} as const;
/**
 * @public
 */
export type AssemblyType = (typeof AssemblyType)[keyof typeof AssemblyType];

/**
 * @public
 * @enum
 */
export const FeatureStatus = {
  Disabled: "DISABLED",
  Enabled: "ENABLED",
} as const;
/**
 * @public
 */
export type FeatureStatus = (typeof FeatureStatus)[keyof typeof FeatureStatus];

/**
 * @public
 * @enum
 */
export const AppType = {
  Canvas: "Canvas",
  CodeEditor: "CodeEditor",
  DetailedProfiler: "DetailedProfiler",
  JupyterLab: "JupyterLab",
  JupyterServer: "JupyterServer",
  KernelGateway: "KernelGateway",
  RSessionGateway: "RSessionGateway",
  RStudioServerPro: "RStudioServerPro",
  TensorBoard: "TensorBoard",
} as const;
/**
 * @public
 */
export type AppType = (typeof AppType)[keyof typeof AppType];

/**
 * @public
 * @enum
 */
export const AppInstanceType = {
  ML_C5_12XLARGE: "ml.c5.12xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_24XLARGE: "ml.c5.24xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_LARGE: "ml.c5.large",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_C6ID_12XLARGE: "ml.c6id.12xlarge",
  ML_C6ID_16XLARGE: "ml.c6id.16xlarge",
  ML_C6ID_24XLARGE: "ml.c6id.24xlarge",
  ML_C6ID_2XLARGE: "ml.c6id.2xlarge",
  ML_C6ID_32XLARGE: "ml.c6id.32xlarge",
  ML_C6ID_4XLARGE: "ml.c6id.4xlarge",
  ML_C6ID_8XLARGE: "ml.c6id.8xlarge",
  ML_C6ID_LARGE: "ml.c6id.large",
  ML_C6ID_XLARGE: "ml.c6id.xlarge",
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
  ML_GEOSPATIAL_INTERACTIVE: "ml.geospatial.interactive",
  ML_M5D_12XLARGE: "ml.m5d.12xlarge",
  ML_M5D_16XLARGE: "ml.m5d.16xlarge",
  ML_M5D_24XLARGE: "ml.m5d.24xlarge",
  ML_M5D_2XLARGE: "ml.m5d.2xlarge",
  ML_M5D_4XLARGE: "ml.m5d.4xlarge",
  ML_M5D_8XLARGE: "ml.m5d.8xlarge",
  ML_M5D_LARGE: "ml.m5d.large",
  ML_M5D_XLARGE: "ml.m5d.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_16XLARGE: "ml.m5.16xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_8XLARGE: "ml.m5.8xlarge",
  ML_M5_LARGE: "ml.m5.large",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_M6ID_12XLARGE: "ml.m6id.12xlarge",
  ML_M6ID_16XLARGE: "ml.m6id.16xlarge",
  ML_M6ID_24XLARGE: "ml.m6id.24xlarge",
  ML_M6ID_2XLARGE: "ml.m6id.2xlarge",
  ML_M6ID_32XLARGE: "ml.m6id.32xlarge",
  ML_M6ID_4XLARGE: "ml.m6id.4xlarge",
  ML_M6ID_8XLARGE: "ml.m6id.8xlarge",
  ML_M6ID_LARGE: "ml.m6id.large",
  ML_M6ID_XLARGE: "ml.m6id.xlarge",
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
  ML_P3DN_24XLARGE: "ml.p3dn.24xlarge",
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_P5EN_48XLARGE: "ml.p5en.48xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_P6_B200_48XLARGE: "ml.p6-b200.48xlarge",
  ML_R5_12XLARGE: "ml.r5.12xlarge",
  ML_R5_16XLARGE: "ml.r5.16xlarge",
  ML_R5_24XLARGE: "ml.r5.24xlarge",
  ML_R5_2XLARGE: "ml.r5.2xlarge",
  ML_R5_4XLARGE: "ml.r5.4xlarge",
  ML_R5_8XLARGE: "ml.r5.8xlarge",
  ML_R5_LARGE: "ml.r5.large",
  ML_R5_XLARGE: "ml.r5.xlarge",
  ML_R6ID_12XLARGE: "ml.r6id.12xlarge",
  ML_R6ID_16XLARGE: "ml.r6id.16xlarge",
  ML_R6ID_24XLARGE: "ml.r6id.24xlarge",
  ML_R6ID_2XLARGE: "ml.r6id.2xlarge",
  ML_R6ID_32XLARGE: "ml.r6id.32xlarge",
  ML_R6ID_4XLARGE: "ml.r6id.4xlarge",
  ML_R6ID_8XLARGE: "ml.r6id.8xlarge",
  ML_R6ID_LARGE: "ml.r6id.large",
  ML_R6ID_XLARGE: "ml.r6id.xlarge",
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
  ML_T3_2XLARGE: "ml.t3.2xlarge",
  ML_T3_LARGE: "ml.t3.large",
  ML_T3_MEDIUM: "ml.t3.medium",
  ML_T3_MICRO: "ml.t3.micro",
  ML_T3_SMALL: "ml.t3.small",
  ML_T3_XLARGE: "ml.t3.xlarge",
  ML_TRN1N_32XLARGE: "ml.trn1n.32xlarge",
  ML_TRN1_2XLARGE: "ml.trn1.2xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
  SYSTEM: "system",
} as const;
/**
 * @public
 */
export type AppInstanceType = (typeof AppInstanceType)[keyof typeof AppInstanceType];

/**
 * @public
 * @enum
 */
export const AppStatus = {
  Deleted: "Deleted",
  Deleting: "Deleting",
  Failed: "Failed",
  InService: "InService",
  Pending: "Pending",
} as const;
/**
 * @public
 */
export type AppStatus = (typeof AppStatus)[keyof typeof AppStatus];

/**
 * @public
 * @enum
 */
export const AppImageConfigSortKey = {
  CreationTime: "CreationTime",
  LastModifiedTime: "LastModifiedTime",
  Name: "Name",
} as const;
/**
 * @public
 */
export type AppImageConfigSortKey = (typeof AppImageConfigSortKey)[keyof typeof AppImageConfigSortKey];

/**
 * @public
 * @enum
 */
export const LifecycleManagement = {
  Disabled: "DISABLED",
  Enabled: "ENABLED",
} as const;
/**
 * @public
 */
export type LifecycleManagement = (typeof LifecycleManagement)[keyof typeof LifecycleManagement];

/**
 * @public
 * @enum
 */
export const AppNetworkAccessType = {
  PublicInternetOnly: "PublicInternetOnly",
  VpcOnly: "VpcOnly",
} as const;
/**
 * @public
 */
export type AppNetworkAccessType = (typeof AppNetworkAccessType)[keyof typeof AppNetworkAccessType];

/**
 * @public
 * @enum
 */
export const AppSecurityGroupManagement = {
  Customer: "Customer",
  Service: "Service",
} as const;
/**
 * @public
 */
export type AppSecurityGroupManagement = (typeof AppSecurityGroupManagement)[keyof typeof AppSecurityGroupManagement];

/**
 * @public
 * @enum
 */
export const AppSortKey = {
  CreationTime: "CreationTime",
} as const;
/**
 * @public
 */
export type AppSortKey = (typeof AppSortKey)[keyof typeof AppSortKey];

/**
 * @public
 * @enum
 */
export const ArtifactSourceIdType = {
  CUSTOM: "Custom",
  MD5_HASH: "MD5Hash",
  S3_ETAG: "S3ETag",
  S3_VERSION: "S3Version",
} as const;
/**
 * @public
 */
export type ArtifactSourceIdType = (typeof ArtifactSourceIdType)[keyof typeof ArtifactSourceIdType];

/**
 * @public
 * @enum
 */
export const AsyncNotificationTopicTypes = {
  ERROR_NOTIFICATION_TOPIC: "ERROR_NOTIFICATION_TOPIC",
  SUCCESS_NOTIFICATION_TOPIC: "SUCCESS_NOTIFICATION_TOPIC",
} as const;
/**
 * @public
 */
export type AsyncNotificationTopicTypes =
  (typeof AsyncNotificationTopicTypes)[keyof typeof AsyncNotificationTopicTypes];

/**
 * @public
 * @enum
 */
export const AthenaResultCompressionType = {
  GZIP: "GZIP",
  SNAPPY: "SNAPPY",
  ZLIB: "ZLIB",
} as const;
/**
 * @public
 */
export type AthenaResultCompressionType =
  (typeof AthenaResultCompressionType)[keyof typeof AthenaResultCompressionType];

/**
 * @public
 * @enum
 */
export const AthenaResultFormat = {
  AVRO: "AVRO",
  JSON: "JSON",
  ORC: "ORC",
  PARQUET: "PARQUET",
  TEXTFILE: "TEXTFILE",
} as const;
/**
 * @public
 */
export type AthenaResultFormat = (typeof AthenaResultFormat)[keyof typeof AthenaResultFormat];

/**
 * @public
 * @enum
 */
export const VolumeAttachmentStatus = {
  ATTACHED: "attached",
  ATTACHING: "attaching",
  BUSY: "busy",
  DETACHED: "detached",
  DETACHING: "detaching",
} as const;
/**
 * @public
 */
export type VolumeAttachmentStatus = (typeof VolumeAttachmentStatus)[keyof typeof VolumeAttachmentStatus];

/**
 * @public
 * @enum
 */
export const AuthMode = {
  IAM: "IAM",
  SSO: "SSO",
} as const;
/**
 * @public
 */
export type AuthMode = (typeof AuthMode)[keyof typeof AuthMode];

/**
 * @public
 * @enum
 */
export const AutoMLAlgorithm = {
  ARIMA: "arima",
  CATBOOST: "catboost",
  CNN_QR: "cnn-qr",
  DEEPAR: "deepar",
  ETS: "ets",
  EXTRA_TREES: "extra-trees",
  FASTAI: "fastai",
  LIGHTGBM: "lightgbm",
  LINEAR_LEARNER: "linear-learner",
  MLP: "mlp",
  NN_TORCH: "nn-torch",
  NPTS: "npts",
  PROPHET: "prophet",
  RANDOMFOREST: "randomforest",
  XGBOOST: "xgboost",
} as const;
/**
 * @public
 */
export type AutoMLAlgorithm = (typeof AutoMLAlgorithm)[keyof typeof AutoMLAlgorithm];

/**
 * @public
 * @enum
 */
export const AutoMLMetricEnum = {
  ACCURACY: "Accuracy",
  AUC: "AUC",
  AVERAGE_WEIGHTED_QUANTILE_LOSS: "AverageWeightedQuantileLoss",
  BALANCED_ACCURACY: "BalancedAccuracy",
  F1: "F1",
  F1_MACRO: "F1macro",
  MAE: "MAE",
  MAPE: "MAPE",
  MASE: "MASE",
  MSE: "MSE",
  PRECISION: "Precision",
  PRECISION_MACRO: "PrecisionMacro",
  R2: "R2",
  RECALL: "Recall",
  RECALL_MACRO: "RecallMacro",
  RMSE: "RMSE",
  WAPE: "WAPE",
} as const;
/**
 * @public
 */
export type AutoMLMetricEnum = (typeof AutoMLMetricEnum)[keyof typeof AutoMLMetricEnum];

/**
 * @public
 * @enum
 */
export const MetricSetSource = {
  TEST: "Test",
  TRAIN: "Train",
  VALIDATION: "Validation",
} as const;
/**
 * @public
 */
export type MetricSetSource = (typeof MetricSetSource)[keyof typeof MetricSetSource];

/**
 * @public
 * @enum
 */
export const AutoMLMetricExtendedEnum = {
  ACCURACY: "Accuracy",
  AUC: "AUC",
  AVERAGE_WEIGHTED_QUANTILE_LOSS: "AverageWeightedQuantileLoss",
  BALANCED_ACCURACY: "BalancedAccuracy",
  F1: "F1",
  F1_MACRO: "F1macro",
  INFERENCE_LATENCY: "InferenceLatency",
  LogLoss: "LogLoss",
  MAE: "MAE",
  MAPE: "MAPE",
  MASE: "MASE",
  MSE: "MSE",
  PERPLEXITY: "Perplexity",
  PRECISION: "Precision",
  PRECISION_MACRO: "PrecisionMacro",
  R2: "R2",
  RECALL: "Recall",
  RECALL_MACRO: "RecallMacro",
  RMSE: "RMSE",
  ROUGE1: "Rouge1",
  ROUGE2: "Rouge2",
  ROUGEL: "RougeL",
  ROUGEL_SUM: "RougeLSum",
  TRAINING_LOSS: "TrainingLoss",
  VALIDATION_LOSS: "ValidationLoss",
  WAPE: "WAPE",
} as const;
/**
 * @public
 */
export type AutoMLMetricExtendedEnum = (typeof AutoMLMetricExtendedEnum)[keyof typeof AutoMLMetricExtendedEnum];

/**
 * @public
 * @enum
 */
export const CandidateStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type CandidateStatus = (typeof CandidateStatus)[keyof typeof CandidateStatus];

/**
 * @public
 * @enum
 */
export const CandidateStepType = {
  PROCESSING: "AWS::SageMaker::ProcessingJob",
  TRAINING: "AWS::SageMaker::TrainingJob",
  TRANSFORM: "AWS::SageMaker::TransformJob",
} as const;
/**
 * @public
 */
export type CandidateStepType = (typeof CandidateStepType)[keyof typeof CandidateStepType];

/**
 * @public
 * @enum
 */
export const AutoMLJobObjectiveType = {
  MAXIMIZE: "Maximize",
  MINIMIZE: "Minimize",
} as const;
/**
 * @public
 */
export type AutoMLJobObjectiveType = (typeof AutoMLJobObjectiveType)[keyof typeof AutoMLJobObjectiveType];

/**
 * @public
 * @enum
 */
export const AutoMLProcessingUnit = {
  CPU: "CPU",
  GPU: "GPU",
} as const;
/**
 * @public
 */
export type AutoMLProcessingUnit = (typeof AutoMLProcessingUnit)[keyof typeof AutoMLProcessingUnit];

/**
 * @public
 * @enum
 */
export const ObjectiveStatus = {
  Failed: "Failed",
  Pending: "Pending",
  Succeeded: "Succeeded",
} as const;
/**
 * @public
 */
export type ObjectiveStatus = (typeof ObjectiveStatus)[keyof typeof ObjectiveStatus];

/**
 * @public
 * @enum
 */
export const AutoMLChannelType = {
  TRAINING: "training",
  VALIDATION: "validation",
} as const;
/**
 * @public
 */
export type AutoMLChannelType = (typeof AutoMLChannelType)[keyof typeof AutoMLChannelType];

/**
 * @public
 * @enum
 */
export const AutoMLS3DataType = {
  AUGMENTED_MANIFEST_FILE: "AugmentedManifestFile",
  MANIFEST_FILE: "ManifestFile",
  S3_PREFIX: "S3Prefix",
} as const;
/**
 * @public
 */
export type AutoMLS3DataType = (typeof AutoMLS3DataType)[keyof typeof AutoMLS3DataType];

/**
 * @public
 * @enum
 */
export const AutoMLMode = {
  AUTO: "AUTO",
  ENSEMBLING: "ENSEMBLING",
  HYPERPARAMETER_TUNING: "HYPERPARAMETER_TUNING",
} as const;
/**
 * @public
 */
export type AutoMLMode = (typeof AutoMLMode)[keyof typeof AutoMLMode];

/**
 * @public
 * @enum
 */
export const AutoMLJobSecondaryStatus = {
  ANALYZING_DATA: "AnalyzingData",
  CANDIDATE_DEFINITIONS_GENERATED: "CandidateDefinitionsGenerated",
  COMPLETED: "Completed",
  DEPLOYING_MODEL: "DeployingModel",
  EXPLAINABILITY_ERROR: "ExplainabilityError",
  FAILED: "Failed",
  FEATURE_ENGINEERING: "FeatureEngineering",
  GENERATING_EXPLAINABILITY_REPORT: "GeneratingExplainabilityReport",
  GENERATING_MODEL_INSIGHTS_REPORT: "GeneratingModelInsightsReport",
  MAX_AUTO_ML_JOB_RUNTIME_REACHED: "MaxAutoMLJobRuntimeReached",
  MAX_CANDIDATES_REACHED: "MaxCandidatesReached",
  MODEL_DEPLOYMENT_ERROR: "ModelDeploymentError",
  MODEL_INSIGHTS_ERROR: "ModelInsightsError",
  MODEL_TUNING: "ModelTuning",
  PRE_TRAINING: "PreTraining",
  STARTING: "Starting",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  TRAINING_MODELS: "TrainingModels",
} as const;
/**
 * @public
 */
export type AutoMLJobSecondaryStatus = (typeof AutoMLJobSecondaryStatus)[keyof typeof AutoMLJobSecondaryStatus];

/**
 * @public
 * @enum
 */
export const AutoMLJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type AutoMLJobStatus = (typeof AutoMLJobStatus)[keyof typeof AutoMLJobStatus];

/**
 * @public
 * @enum
 */
export const ProblemType = {
  BINARY_CLASSIFICATION: "BinaryClassification",
  MULTICLASS_CLASSIFICATION: "MulticlassClassification",
  REGRESSION: "Regression",
} as const;
/**
 * @public
 */
export type ProblemType = (typeof ProblemType)[keyof typeof ProblemType];

/**
 * @public
 * @enum
 */
export const FillingType = {
  Backfill: "backfill",
  BackfillValue: "backfill_value",
  Frontfill: "frontfill",
  FrontfillValue: "frontfill_value",
  Futurefill: "futurefill",
  FuturefillValue: "futurefill_value",
  Middlefill: "middlefill",
  MiddlefillValue: "middlefill_value",
} as const;
/**
 * @public
 */
export type FillingType = (typeof FillingType)[keyof typeof FillingType];

/**
 * @public
 * @enum
 */
export const AutoMLProblemTypeConfigName = {
  IMAGE_CLASSIFICATION: "ImageClassification",
  TABULAR: "Tabular",
  TEXT_CLASSIFICATION: "TextClassification",
  TEXT_GENERATION: "TextGeneration",
  TIMESERIES_FORECASTING: "TimeSeriesForecasting",
} as const;
/**
 * @public
 */
export type AutoMLProblemTypeConfigName =
  (typeof AutoMLProblemTypeConfigName)[keyof typeof AutoMLProblemTypeConfigName];

/**
 * @public
 * @enum
 */
export const AutoMLSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type AutoMLSortBy = (typeof AutoMLSortBy)[keyof typeof AutoMLSortBy];

/**
 * @public
 * @enum
 */
export const AutoMLSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type AutoMLSortOrder = (typeof AutoMLSortOrder)[keyof typeof AutoMLSortOrder];

/**
 * @public
 * @enum
 */
export const AutoMountHomeEFS = {
  DEFAULT_AS_DOMAIN: "DefaultAsDomain",
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type AutoMountHomeEFS = (typeof AutoMountHomeEFS)[keyof typeof AutoMountHomeEFS];

/**
 * @public
 * @enum
 */
export const AutotuneMode = {
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type AutotuneMode = (typeof AutotuneMode)[keyof typeof AutotuneMode];

/**
 * @public
 * @enum
 */
export const AwsManagedHumanLoopRequestSource = {
  REKOGNITION_DETECT_MODERATION_LABELS_IMAGE_V3: "AWS/Rekognition/DetectModerationLabels/Image/V3",
  TEXTRACT_ANALYZE_DOCUMENT_FORMS_V1: "AWS/Textract/AnalyzeDocument/Forms/V1",
} as const;
/**
 * @public
 */
export type AwsManagedHumanLoopRequestSource =
  (typeof AwsManagedHumanLoopRequestSource)[keyof typeof AwsManagedHumanLoopRequestSource];

/**
 * @public
 * @enum
 */
export const BatchAddClusterNodesErrorCode = {
  INSTANCE_GROUP_NOT_FOUND: "InstanceGroupNotFound",
  INVALID_INSTANCE_GROUP_STATUS: "InvalidInstanceGroupStatus",
} as const;
/**
 * @public
 */
export type BatchAddClusterNodesErrorCode =
  (typeof BatchAddClusterNodesErrorCode)[keyof typeof BatchAddClusterNodesErrorCode];

/**
 * @public
 * @enum
 */
export const ClusterInstanceStatus = {
  DEEP_HEALTH_CHECK_IN_PROGRESS: "DeepHealthCheckInProgress",
  FAILURE: "Failure",
  NOT_FOUND: "NotFound",
  PENDING: "Pending",
  RUNNING: "Running",
  SHUTTING_DOWN: "ShuttingDown",
  SYSTEM_UPDATING: "SystemUpdating",
} as const;
/**
 * @public
 */
export type ClusterInstanceStatus = (typeof ClusterInstanceStatus)[keyof typeof ClusterInstanceStatus];

/**
 * @public
 * @enum
 */
export const BatchDeleteClusterNodesErrorCode = {
  INVALID_NODE_STATUS: "InvalidNodeStatus",
  NODE_ID_IN_USE: "NodeIdInUse",
  NODE_ID_NOT_FOUND: "NodeIdNotFound",
} as const;
/**
 * @public
 */
export type BatchDeleteClusterNodesErrorCode =
  (typeof BatchDeleteClusterNodesErrorCode)[keyof typeof BatchDeleteClusterNodesErrorCode];

/**
 * @public
 * @enum
 */
export const ModelApprovalStatus = {
  APPROVED: "Approved",
  PENDING_MANUAL_APPROVAL: "PendingManualApproval",
  REJECTED: "Rejected",
} as const;
/**
 * @public
 */
export type ModelApprovalStatus = (typeof ModelApprovalStatus)[keyof typeof ModelApprovalStatus];

/**
 * @public
 * @enum
 */
export const ModelPackageStatus = {
  COMPLETED: "Completed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
} as const;
/**
 * @public
 */
export type ModelPackageStatus = (typeof ModelPackageStatus)[keyof typeof ModelPackageStatus];

/**
 * @public
 * @enum
 */
export const BatchRebootClusterNodesErrorCode = {
  INSTANCE_ID_IN_USE: "InstanceIdInUse",
  INSTANCE_ID_NOT_FOUND: "InstanceIdNotFound",
  INTERNAL_SERVER_ERROR: "InternalServerError",
  INVALID_INSTANCE_STATUS: "InvalidInstanceStatus",
} as const;
/**
 * @public
 */
export type BatchRebootClusterNodesErrorCode =
  (typeof BatchRebootClusterNodesErrorCode)[keyof typeof BatchRebootClusterNodesErrorCode];

/**
 * @public
 * @enum
 */
export const BatchReplaceClusterNodesErrorCode = {
  INSTANCE_ID_IN_USE: "InstanceIdInUse",
  INSTANCE_ID_NOT_FOUND: "InstanceIdNotFound",
  INTERNAL_SERVER_ERROR: "InternalServerError",
  INVALID_INSTANCE_STATUS: "InvalidInstanceStatus",
} as const;
/**
 * @public
 */
export type BatchReplaceClusterNodesErrorCode =
  (typeof BatchReplaceClusterNodesErrorCode)[keyof typeof BatchReplaceClusterNodesErrorCode];

/**
 * @public
 * @enum
 */
export const ProcessingS3DataDistributionType = {
  FULLYREPLICATED: "FullyReplicated",
  SHARDEDBYS3KEY: "ShardedByS3Key",
} as const;
/**
 * @public
 */
export type ProcessingS3DataDistributionType =
  (typeof ProcessingS3DataDistributionType)[keyof typeof ProcessingS3DataDistributionType];

/**
 * @public
 * @enum
 */
export const ProcessingS3InputMode = {
  FILE: "File",
  PIPE: "Pipe",
} as const;
/**
 * @public
 */
export type ProcessingS3InputMode = (typeof ProcessingS3InputMode)[keyof typeof ProcessingS3InputMode];

/**
 * @public
 * @enum
 */
export const CapacitySizeType = {
  CAPACITY_PERCENT: "CAPACITY_PERCENT",
  INSTANCE_COUNT: "INSTANCE_COUNT",
} as const;
/**
 * @public
 */
export type CapacitySizeType = (typeof CapacitySizeType)[keyof typeof CapacitySizeType];

/**
 * @public
 * @enum
 */
export const TrafficRoutingConfigType = {
  ALL_AT_ONCE: "ALL_AT_ONCE",
  CANARY: "CANARY",
  LINEAR: "LINEAR",
} as const;
/**
 * @public
 */
export type TrafficRoutingConfigType = (typeof TrafficRoutingConfigType)[keyof typeof TrafficRoutingConfigType];

/**
 * @public
 * @enum
 */
export const BooleanOperator = {
  AND: "And",
  OR: "Or",
} as const;
/**
 * @public
 */
export type BooleanOperator = (typeof BooleanOperator)[keyof typeof BooleanOperator];

/**
 * @public
 * @enum
 */
export const CandidateSortBy = {
  CreationTime: "CreationTime",
  FinalObjectiveMetricValue: "FinalObjectiveMetricValue",
  Status: "Status",
} as const;
/**
 * @public
 */
export type CandidateSortBy = (typeof CandidateSortBy)[keyof typeof CandidateSortBy];

/**
 * @public
 * @enum
 */
export const DataSourceName = {
  SalesforceGenie: "SalesforceGenie",
  Snowflake: "Snowflake",
} as const;
/**
 * @public
 */
export type DataSourceName = (typeof DataSourceName)[keyof typeof DataSourceName];

/**
 * @public
 * @enum
 */
export const CapacityReservationType = {
  CRG: "CRG",
  ODCR: "ODCR",
} as const;
/**
 * @public
 */
export type CapacityReservationType = (typeof CapacityReservationType)[keyof typeof CapacityReservationType];

/**
 * @public
 * @enum
 */
export const CapacityReservationPreference = {
  CAPACITY_RESERVATIONS_ONLY: "capacity-reservations-only",
} as const;
/**
 * @public
 */
export type CapacityReservationPreference =
  (typeof CapacityReservationPreference)[keyof typeof CapacityReservationPreference];

/**
 * @public
 * @enum
 */
export const NodeUnavailabilityType = {
  CAPACITY_PERCENTAGE: "CAPACITY_PERCENTAGE",
  INSTANCE_COUNT: "INSTANCE_COUNT",
} as const;
/**
 * @public
 */
export type NodeUnavailabilityType = (typeof NodeUnavailabilityType)[keyof typeof NodeUnavailabilityType];

/**
 * @public
 * @enum
 */
export const CaptureMode = {
  INPUT: "Input",
  INPUT_AND_OUTPUT: "InputAndOutput",
  OUTPUT: "Output",
} as const;
/**
 * @public
 */
export type CaptureMode = (typeof CaptureMode)[keyof typeof CaptureMode];

/**
 * @public
 * @enum
 */
export const CaptureStatus = {
  STARTED: "Started",
  STOPPED: "Stopped",
} as const;
/**
 * @public
 */
export type CaptureStatus = (typeof CaptureStatus)[keyof typeof CaptureStatus];

/**
 * @public
 * @enum
 */
export const ClarifyFeatureType = {
  CATEGORICAL: "categorical",
  NUMERICAL: "numerical",
  TEXT: "text",
} as const;
/**
 * @public
 */
export type ClarifyFeatureType = (typeof ClarifyFeatureType)[keyof typeof ClarifyFeatureType];

/**
 * @public
 * @enum
 */
export const ClarifyTextGranularity = {
  PARAGRAPH: "paragraph",
  SENTENCE: "sentence",
  TOKEN: "token",
} as const;
/**
 * @public
 */
export type ClarifyTextGranularity = (typeof ClarifyTextGranularity)[keyof typeof ClarifyTextGranularity];

/**
 * @public
 * @enum
 */
export const ClarifyTextLanguage = {
  AFRIKAANS: "af",
  ALBANIAN: "sq",
  ARABIC: "ar",
  ARMENIAN: "hy",
  BASQUE: "eu",
  BENGALI: "bn",
  BULGARIAN: "bg",
  CATALAN: "ca",
  CHINESE: "zh",
  CROATIAN: "hr",
  CZECH: "cs",
  DANISH: "da",
  DUTCH: "nl",
  ENGLISH: "en",
  ESTONIAN: "et",
  FINNISH: "fi",
  FRENCH: "fr",
  GERMAN: "de",
  GREEK: "el",
  GUJARATI: "gu",
  HEBREW: "he",
  HINDI: "hi",
  HUNGARIAN: "hu",
  ICELANDIC: "is",
  INDONESIAN: "id",
  IRISH: "ga",
  ITALIAN: "it",
  KANNADA: "kn",
  KYRGYZ: "ky",
  LATVIAN: "lv",
  LIGURIAN: "lij",
  LITHUANIAN: "lt",
  LUXEMBOURGISH: "lb",
  MACEDONIAN: "mk",
  MALAYALAM: "ml",
  MARATHI: "mr",
  MULTI_LANGUAGE: "xx",
  NEPALI: "ne",
  NORWEGIAN_BOKMAL: "nb",
  PERSIAN: "fa",
  POLISH: "pl",
  PORTUGUESE: "pt",
  ROMANIAN: "ro",
  RUSSIAN: "ru",
  SANSKRIT: "sa",
  SERBIAN: "sr",
  SETSWANA: "tn",
  SINHALA: "si",
  SLOVAK: "sk",
  SLOVENIAN: "sl",
  SPANISH: "es",
  SWEDISH: "sv",
  TAGALOG: "tl",
  TAMIL: "ta",
  TATAR: "tt",
  TELUGU: "te",
  TURKISH: "tr",
  UKRAINIAN: "uk",
  URDU: "ur",
  YORUBA: "yo",
} as const;
/**
 * @public
 */
export type ClarifyTextLanguage = (typeof ClarifyTextLanguage)[keyof typeof ClarifyTextLanguage];

/**
 * @public
 * @enum
 */
export const ClusterAutoScalerType = {
  KARPENTER: "Karpenter",
} as const;
/**
 * @public
 */
export type ClusterAutoScalerType = (typeof ClusterAutoScalerType)[keyof typeof ClusterAutoScalerType];

/**
 * @public
 * @enum
 */
export const ClusterAutoScalingMode = {
  DISABLE: "Disable",
  ENABLE: "Enable",
} as const;
/**
 * @public
 */
export type ClusterAutoScalingMode = (typeof ClusterAutoScalingMode)[keyof typeof ClusterAutoScalingMode];

/**
 * @public
 * @enum
 */
export const ClusterAutoScalingStatus = {
  CREATING: "Creating",
  DELETING: "Deleting",
  FAILED: "Failed",
  INSERVICE: "InService",
} as const;
/**
 * @public
 */
export type ClusterAutoScalingStatus = (typeof ClusterAutoScalingStatus)[keyof typeof ClusterAutoScalingStatus];

/**
 * @public
 * @enum
 */
export const ClusterCapacityType = {
  ON_DEMAND: "OnDemand",
  SPOT: "Spot",
} as const;
/**
 * @public
 */
export type ClusterCapacityType = (typeof ClusterCapacityType)[keyof typeof ClusterCapacityType];

/**
 * @public
 * @enum
 */
export const ClusterConfigMode = {
  DISABLE: "Disable",
  ENABLE: "Enable",
} as const;
/**
 * @public
 */
export type ClusterConfigMode = (typeof ClusterConfigMode)[keyof typeof ClusterConfigMode];

/**
 * @public
 * @enum
 */
export const ClusterEventResourceType = {
  CLUSTER: "Cluster",
  INSTANCE: "Instance",
  INSTANCE_GROUP: "InstanceGroup",
} as const;
/**
 * @public
 */
export type ClusterEventResourceType = (typeof ClusterEventResourceType)[keyof typeof ClusterEventResourceType];

/**
 * @public
 * @enum
 */
export const ClusterInstanceType = {
  ML_C5N_18XLARGE: "ml.c5n.18xlarge",
  ML_C5N_2XLARGE: "ml.c5n.2xlarge",
  ML_C5N_4XLARGE: "ml.c5n.4xlarge",
  ML_C5N_9XLARGE: "ml.c5n.9xlarge",
  ML_C5N_LARGE: "ml.c5n.large",
  ML_C5_12XLARGE: "ml.c5.12xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_24XLARGE: "ml.c5.24xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_LARGE: "ml.c5.large",
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
  ML_GR6_4XLARGE: "ml.gr6.4xlarge",
  ML_GR6_8XLARGE: "ml.gr6.8xlarge",
  ML_I3EN_12XLARGE: "ml.i3en.12xlarge",
  ML_I3EN_24XLARGE: "ml.i3en.24xlarge",
  ML_I3EN_2XLARGE: "ml.i3en.2xlarge",
  ML_I3EN_3XLARGE: "ml.i3en.3xlarge",
  ML_I3EN_6XLARGE: "ml.i3en.6xlarge",
  ML_I3EN_LARGE: "ml.i3en.large",
  ML_I3EN_XLARGE: "ml.i3en.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_16XLARGE: "ml.m5.16xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_8XLARGE: "ml.m5.8xlarge",
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
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_P5EN_48XLARGE: "ml.p5en.48xlarge",
  ML_P5E_48XLARGE: "ml.p5e.48xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_P5_4XLARGE: "ml.p5.4xlarge",
  ML_P6E_GB200_36XLARGE: "ml.p6e-gb200.36xlarge",
  ML_P6_B200_48XLARGE: "ml.p6-b200.48xlarge",
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
  ML_T3_2XLARGE: "ml.t3.2xlarge",
  ML_T3_LARGE: "ml.t3.large",
  ML_T3_MEDIUM: "ml.t3.medium",
  ML_T3_XLARGE: "ml.t3.xlarge",
  ML_TRN1N_32XLARGE: "ml.trn1n.32xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
  ML_TRN2_3XLARGE: "ml.trn2.3xlarge",
  ML_TRN2_48XLARGE: "ml.trn2.48xlarge",
} as const;
/**
 * @public
 */
export type ClusterInstanceType = (typeof ClusterInstanceType)[keyof typeof ClusterInstanceType];

/**
 * @public
 * @enum
 */
export const ClusterKubernetesTaintEffect = {
  NO_EXECUTE: "NoExecute",
  NO_SCHEDULE: "NoSchedule",
  PREFER_NO_SCHEDULE: "PreferNoSchedule",
} as const;
/**
 * @public
 */
export type ClusterKubernetesTaintEffect =
  (typeof ClusterKubernetesTaintEffect)[keyof typeof ClusterKubernetesTaintEffect];

/**
 * @public
 * @enum
 */
export const DeepHealthCheckType = {
  INSTANCE_CONNECTIVITY: "InstanceConnectivity",
  INSTANCE_STRESS: "InstanceStress",
} as const;
/**
 * @public
 */
export type DeepHealthCheckType = (typeof DeepHealthCheckType)[keyof typeof DeepHealthCheckType];

/**
 * @public
 * @enum
 */
export const SoftwareUpdateStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  ROLLBACK_COMPLETE: "RollbackComplete",
  ROLLBACK_IN_PROGRESS: "RollbackInProgress",
  SUCCEEDED: "Succeeded",
} as const;
/**
 * @public
 */
export type SoftwareUpdateStatus = (typeof SoftwareUpdateStatus)[keyof typeof SoftwareUpdateStatus];

/**
 * @public
 * @enum
 */
export const InstanceGroupStatus = {
  CREATING: "Creating",
  DEGRADED: "Degraded",
  DELETING: "Deleting",
  FAILED: "Failed",
  INSERVICE: "InService",
  SYSTEMUPDATING: "SystemUpdating",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type InstanceGroupStatus = (typeof InstanceGroupStatus)[keyof typeof InstanceGroupStatus];

/**
 * @public
 * @enum
 */
export const ClusterNodeProvisioningMode = {
  CONTINUOUS: "Continuous",
} as const;
/**
 * @public
 */
export type ClusterNodeProvisioningMode =
  (typeof ClusterNodeProvisioningMode)[keyof typeof ClusterNodeProvisioningMode];

/**
 * @public
 * @enum
 */
export const ClusterNodeRecovery = {
  AUTOMATIC: "Automatic",
  NONE: "None",
} as const;
/**
 * @public
 */
export type ClusterNodeRecovery = (typeof ClusterNodeRecovery)[keyof typeof ClusterNodeRecovery];

/**
 * @public
 * @enum
 */
export const SchedulerResourceStatus = {
  CREATED: "Created",
  CREATE_FAILED: "CreateFailed",
  CREATE_ROLLBACK_FAILED: "CreateRollbackFailed",
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETE_FAILED: "DeleteFailed",
  DELETE_ROLLBACK_FAILED: "DeleteRollbackFailed",
  DELETING: "Deleting",
  UPDATED: "Updated",
  UPDATE_FAILED: "UpdateFailed",
  UPDATE_ROLLBACK_FAILED: "UpdateRollbackFailed",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type SchedulerResourceStatus = (typeof SchedulerResourceStatus)[keyof typeof SchedulerResourceStatus];

/**
 * @public
 * @enum
 */
export const ClusterSortBy = {
  CREATION_TIME: "CREATION_TIME",
  NAME: "NAME",
} as const;
/**
 * @public
 */
export type ClusterSortBy = (typeof ClusterSortBy)[keyof typeof ClusterSortBy];

/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  CREATING: "Creating",
  DELETING: "Deleting",
  FAILED: "Failed",
  INSERVICE: "InService",
  ROLLINGBACK: "RollingBack",
  SYSTEMUPDATING: "SystemUpdating",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * @public
 * @enum
 */
export const CodeRepositorySortBy = {
  CREATION_TIME: "CreationTime",
  LAST_MODIFIED_TIME: "LastModifiedTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type CodeRepositorySortBy = (typeof CodeRepositorySortBy)[keyof typeof CodeRepositorySortBy];

/**
 * @public
 * @enum
 */
export const CodeRepositorySortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type CodeRepositorySortOrder = (typeof CodeRepositorySortOrder)[keyof typeof CodeRepositorySortOrder];

/**
 * @public
 * @enum
 */
export const CollectionType = {
  LIST: "List",
  SET: "Set",
  VECTOR: "Vector",
} as const;
/**
 * @public
 */
export type CollectionType = (typeof CollectionType)[keyof typeof CollectionType];

/**
 * @public
 * @enum
 */
export const CompilationJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INPROGRESS: "INPROGRESS",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type CompilationJobStatus = (typeof CompilationJobStatus)[keyof typeof CompilationJobStatus];

/**
 * @public
 * @enum
 */
export const TargetDevice = {
  AISAGE: "aisage",
  AMBA_CV2: "amba_cv2",
  AMBA_CV22: "amba_cv22",
  AMBA_CV25: "amba_cv25",
  COREML: "coreml",
  DEEPLENS: "deeplens",
  IMX8MPLUS: "imx8mplus",
  IMX8QM: "imx8qm",
  JACINTO_TDA4VM: "jacinto_tda4vm",
  JETSON_NANO: "jetson_nano",
  JETSON_TX1: "jetson_tx1",
  JETSON_TX2: "jetson_tx2",
  JETSON_XAVIER: "jetson_xavier",
  LAMBDA: "lambda",
  ML_C4: "ml_c4",
  ML_C5: "ml_c5",
  ML_C6G: "ml_c6g",
  ML_EIA2: "ml_eia2",
  ML_G4DN: "ml_g4dn",
  ML_INF1: "ml_inf1",
  ML_INF2: "ml_inf2",
  ML_M4: "ml_m4",
  ML_M5: "ml_m5",
  ML_M6G: "ml_m6g",
  ML_P2: "ml_p2",
  ML_P3: "ml_p3",
  ML_TRN1: "ml_trn1",
  QCS603: "qcs603",
  QCS605: "qcs605",
  RASP3B: "rasp3b",
  RASP4B: "rasp4b",
  RK3288: "rk3288",
  RK3399: "rk3399",
  SBE_C: "sbe_c",
  SITARA_AM57X: "sitara_am57x",
  X86_WIN32: "x86_win32",
  X86_WIN64: "x86_win64",
} as const;
/**
 * @public
 */
export type TargetDevice = (typeof TargetDevice)[keyof typeof TargetDevice];

/**
 * @public
 * @enum
 */
export const TargetPlatformAccelerator = {
  INTEL_GRAPHICS: "INTEL_GRAPHICS",
  MALI: "MALI",
  NNA: "NNA",
  NVIDIA: "NVIDIA",
} as const;
/**
 * @public
 */
export type TargetPlatformAccelerator = (typeof TargetPlatformAccelerator)[keyof typeof TargetPlatformAccelerator];

/**
 * @public
 * @enum
 */
export const TargetPlatformArch = {
  ARM64: "ARM64",
  ARM_EABI: "ARM_EABI",
  ARM_EABIHF: "ARM_EABIHF",
  X86: "X86",
  X86_64: "X86_64",
} as const;
/**
 * @public
 */
export type TargetPlatformArch = (typeof TargetPlatformArch)[keyof typeof TargetPlatformArch];

/**
 * @public
 * @enum
 */
export const TargetPlatformOs = {
  ANDROID: "ANDROID",
  LINUX: "LINUX",
} as const;
/**
 * @public
 */
export type TargetPlatformOs = (typeof TargetPlatformOs)[keyof typeof TargetPlatformOs];

/**
 * @public
 * @enum
 */
export const CompleteOnConvergence = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type CompleteOnConvergence = (typeof CompleteOnConvergence)[keyof typeof CompleteOnConvergence];

/**
 * @public
 * @enum
 */
export const PreemptTeamTasks = {
  LOWERPRIORITY: "LowerPriority",
  NEVER: "Never",
} as const;
/**
 * @public
 */
export type PreemptTeamTasks = (typeof PreemptTeamTasks)[keyof typeof PreemptTeamTasks];

/**
 * @public
 * @enum
 */
export const ResourceSharingStrategy = {
  DONTLEND: "DontLend",
  LEND: "Lend",
  LENDANDBORROW: "LendAndBorrow",
} as const;
/**
 * @public
 */
export type ResourceSharingStrategy = (typeof ResourceSharingStrategy)[keyof typeof ResourceSharingStrategy];

/**
 * @public
 * @enum
 */
export const ConditionOutcome = {
  FALSE: "False",
  TRUE: "True",
} as const;
/**
 * @public
 */
export type ConditionOutcome = (typeof ConditionOutcome)[keyof typeof ConditionOutcome];

/**
 * @public
 * @enum
 */
export const RepositoryAccessMode = {
  PLATFORM: "Platform",
  VPC: "Vpc",
} as const;
/**
 * @public
 */
export type RepositoryAccessMode = (typeof RepositoryAccessMode)[keyof typeof RepositoryAccessMode];

/**
 * @public
 * @enum
 */
export const ContainerMode = {
  MULTI_MODEL: "MultiModel",
  SINGLE_MODEL: "SingleModel",
} as const;
/**
 * @public
 */
export type ContainerMode = (typeof ContainerMode)[keyof typeof ContainerMode];

/**
 * @public
 * @enum
 */
export const ModelCacheSetting = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type ModelCacheSetting = (typeof ModelCacheSetting)[keyof typeof ModelCacheSetting];

/**
 * @public
 * @enum
 */
export const ContentClassifier = {
  FREE_OF_ADULT_CONTENT: "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION: "FreeOfPersonallyIdentifiableInformation",
} as const;
/**
 * @public
 */
export type ContentClassifier = (typeof ContentClassifier)[keyof typeof ContentClassifier];

/**
 * @public
 * @enum
 */
export const HyperParameterScalingType = {
  AUTO: "Auto",
  LINEAR: "Linear",
  LOGARITHMIC: "Logarithmic",
  REVERSE_LOGARITHMIC: "ReverseLogarithmic",
} as const;
/**
 * @public
 */
export type HyperParameterScalingType = (typeof HyperParameterScalingType)[keyof typeof HyperParameterScalingType];

/**
 * @public
 * @enum
 */
export const ParameterType = {
  CATEGORICAL: "Categorical",
  CONTINUOUS: "Continuous",
  FREE_TEXT: "FreeText",
  INTEGER: "Integer",
} as const;
/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobObjectiveType = {
  MAXIMIZE: "Maximize",
  MINIMIZE: "Minimize",
} as const;
/**
 * @public
 */
export type HyperParameterTuningJobObjectiveType =
  (typeof HyperParameterTuningJobObjectiveType)[keyof typeof HyperParameterTuningJobObjectiveType];

/**
 * @public
 * @enum
 */
export const FairShare = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type FairShare = (typeof FairShare)[keyof typeof FairShare];

/**
 * @public
 * @enum
 */
export const Framework = {
  DARKNET: "DARKNET",
  KERAS: "KERAS",
  MXNET: "MXNET",
  ONNX: "ONNX",
  PYTORCH: "PYTORCH",
  SKLEARN: "SKLEARN",
  TENSORFLOW: "TENSORFLOW",
  TFLITE: "TFLITE",
  XGBOOST: "XGBOOST",
} as const;
/**
 * @public
 */
export type Framework = (typeof Framework)[keyof typeof Framework];

/**
 * @public
 * @enum
 */
export const ProcessingS3UploadMode = {
  CONTINUOUS: "Continuous",
  END_OF_JOB: "EndOfJob",
} as const;
/**
 * @public
 */
export type ProcessingS3UploadMode = (typeof ProcessingS3UploadMode)[keyof typeof ProcessingS3UploadMode];

/**
 * @public
 * @enum
 */
export const ProcessingInstanceType = {
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
  ML_P3_16XLARGE: "ml.p3.16xlarge",
  ML_P3_2XLARGE: "ml.p3.2xlarge",
  ML_P3_8XLARGE: "ml.p3.8xlarge",
  ML_P5_4XLARGE: "ml.p5.4xlarge",
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
} as const;
/**
 * @public
 */
export type ProcessingInstanceType = (typeof ProcessingInstanceType)[keyof typeof ProcessingInstanceType];

/**
 * @public
 * @enum
 */
export const EdgePresetDeploymentType = {
  GreengrassV2Component: "GreengrassV2Component",
} as const;
/**
 * @public
 */
export type EdgePresetDeploymentType = (typeof EdgePresetDeploymentType)[keyof typeof EdgePresetDeploymentType];

/**
 * @public
 * @enum
 */
export const RStudioServerProAccessStatus = {
  Disabled: "DISABLED",
  Enabled: "ENABLED",
} as const;
/**
 * @public
 */
export type RStudioServerProAccessStatus =
  (typeof RStudioServerProAccessStatus)[keyof typeof RStudioServerProAccessStatus];

/**
 * @public
 * @enum
 */
export const RStudioServerProUserGroup = {
  Admin: "R_STUDIO_ADMIN",
  User: "R_STUDIO_USER",
} as const;
/**
 * @public
 */
export type RStudioServerProUserGroup = (typeof RStudioServerProUserGroup)[keyof typeof RStudioServerProUserGroup];

/**
 * @public
 * @enum
 */
export const NotebookOutputOption = {
  Allowed: "Allowed",
  Disabled: "Disabled",
} as const;
/**
 * @public
 */
export type NotebookOutputOption = (typeof NotebookOutputOption)[keyof typeof NotebookOutputOption];

/**
 * @public
 * @enum
 */
export const StudioWebPortal = {
  Disabled: "DISABLED",
  Enabled: "ENABLED",
} as const;
/**
 * @public
 */
export type StudioWebPortal = (typeof StudioWebPortal)[keyof typeof StudioWebPortal];

/**
 * @public
 * @enum
 */
export const MlTools = {
  AUTO_ML: "AutoMl",
  COMET: "Comet",
  DATASETS: "Datasets",
  DATA_WRANGLER: "DataWrangler",
  DEEPCHECKS_LLM_EVALUATION: "DeepchecksLLMEvaluation",
  EMR_CLUSTERS: "EmrClusters",
  ENDPOINTS: "Endpoints",
  EVALUATORS: "Evaluators",
  EXPERIMENTS: "Experiments",
  FEATURE_STORE: "FeatureStore",
  FIDDLER: "Fiddler",
  HYPER_POD_CLUSTERS: "HyperPodClusters",
  INFERENCE_OPTIMIZATION: "InferenceOptimization",
  INFERENCE_RECOMMENDER: "InferenceRecommender",
  JUMP_START: "JumpStart",
  LAKERA_GUARD: "LakeraGuard",
  MODELS: "Models",
  MODEL_EVALUATION: "ModelEvaluation",
  PERFORMANCE_EVALUATION: "PerformanceEvaluation",
  PIPELINES: "Pipelines",
  PROJECTS: "Projects",
  RUNNING_INSTANCES: "RunningInstances",
  TRAINING: "Training",
} as const;
/**
 * @public
 */
export type MlTools = (typeof MlTools)[keyof typeof MlTools];

/**
 * @public
 * @enum
 */
export const SageMakerImageName = {
  sagemaker_distribution: "sagemaker_distribution",
} as const;
/**
 * @public
 */
export type SageMakerImageName = (typeof SageMakerImageName)[keyof typeof SageMakerImageName];

/**
 * @public
 * @enum
 */
export const ExecutionRoleIdentityConfig = {
  DISABLED: "DISABLED",
  USER_PROFILE_NAME: "USER_PROFILE_NAME",
} as const;
/**
 * @public
 */
export type ExecutionRoleIdentityConfig =
  (typeof ExecutionRoleIdentityConfig)[keyof typeof ExecutionRoleIdentityConfig];

/**
 * @public
 * @enum
 */
export const IPAddressType = {
  DUALSTACK: "dualstack",
  IPV4: "ipv4",
} as const;
/**
 * @public
 */
export type IPAddressType = (typeof IPAddressType)[keyof typeof IPAddressType];

/**
 * @public
 * @enum
 */
export const TagPropagation = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type TagPropagation = (typeof TagPropagation)[keyof typeof TagPropagation];

/**
 * @public
 * @enum
 */
export const FailureHandlingPolicy = {
  DoNothing: "DO_NOTHING",
  RollbackOnFailure: "ROLLBACK_ON_FAILURE",
} as const;
/**
 * @public
 */
export type FailureHandlingPolicy = (typeof FailureHandlingPolicy)[keyof typeof FailureHandlingPolicy];

/**
 * @public
 * @enum
 */
export const DeviceSubsetType = {
  NameContains: "NAMECONTAINS",
  Percentage: "PERCENTAGE",
  Selection: "SELECTION",
} as const;
/**
 * @public
 */
export type DeviceSubsetType = (typeof DeviceSubsetType)[keyof typeof DeviceSubsetType];

export enum MetricPublishFrequencyInSeconds {
  FREQ_10_S = 10,
  FREQ_30_S = 30,
  FREQ_60_S = 60,
  FREQ_120_S = 120,
  FREQ_180_S = 180,
  FREQ_240_S = 240,
  FREQ_300_S = 300,
}

/**
 * @public
 * @enum
 */
export const ProductionVariantAcceleratorType = {
  ML_EIA1_LARGE: "ml.eia1.large",
  ML_EIA1_MEDIUM: "ml.eia1.medium",
  ML_EIA1_XLARGE: "ml.eia1.xlarge",
  ML_EIA2_LARGE: "ml.eia2.large",
  ML_EIA2_MEDIUM: "ml.eia2.medium",
  ML_EIA2_XLARGE: "ml.eia2.xlarge",
} as const;
/**
 * @public
 */
export type ProductionVariantAcceleratorType =
  (typeof ProductionVariantAcceleratorType)[keyof typeof ProductionVariantAcceleratorType];

/**
 * @public
 * @enum
 */
export const ProductionVariantInferenceAmiVersion = {
  AL2_GPU_2: "al2-ami-sagemaker-inference-gpu-2",
  AL2_GPU_2_1: "al2-ami-sagemaker-inference-gpu-2-1",
  AL2_GPU_3_1: "al2-ami-sagemaker-inference-gpu-3-1",
  AL2_NEURON_2: "al2-ami-sagemaker-inference-neuron-2",
} as const;
/**
 * @public
 */
export type ProductionVariantInferenceAmiVersion =
  (typeof ProductionVariantInferenceAmiVersion)[keyof typeof ProductionVariantInferenceAmiVersion];

/**
 * @public
 * @enum
 */
export const ManagedInstanceScalingStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ManagedInstanceScalingStatus =
  (typeof ManagedInstanceScalingStatus)[keyof typeof ManagedInstanceScalingStatus];

/**
 * @public
 * @enum
 */
export const RoutingStrategy = {
  LEAST_OUTSTANDING_REQUESTS: "LEAST_OUTSTANDING_REQUESTS",
  RANDOM: "RANDOM",
} as const;
/**
 * @public
 */
export type RoutingStrategy = (typeof RoutingStrategy)[keyof typeof RoutingStrategy];

/**
 * @public
 * @enum
 */
export const FeatureType = {
  FRACTIONAL: "Fractional",
  INTEGRAL: "Integral",
  STRING: "String",
} as const;
/**
 * @public
 */
export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType];

/**
 * @public
 * @enum
 */
export const TableFormat = {
  DEFAULT: "Default",
  GLUE: "Glue",
  ICEBERG: "Iceberg",
} as const;
/**
 * @public
 */
export type TableFormat = (typeof TableFormat)[keyof typeof TableFormat];

/**
 * @public
 * @enum
 */
export const StorageType = {
  IN_MEMORY: "InMemory",
  STANDARD: "Standard",
} as const;
/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

/**
 * @public
 * @enum
 */
export const TtlDurationUnit = {
  DAYS: "Days",
  HOURS: "Hours",
  MINUTES: "Minutes",
  SECONDS: "Seconds",
  WEEKS: "Weeks",
} as const;
/**
 * @public
 */
export type TtlDurationUnit = (typeof TtlDurationUnit)[keyof typeof TtlDurationUnit];

/**
 * @public
 * @enum
 */
export const ThroughputMode = {
  ON_DEMAND: "OnDemand",
  PROVISIONED: "Provisioned",
} as const;
/**
 * @public
 */
export type ThroughputMode = (typeof ThroughputMode)[keyof typeof ThroughputMode];

/**
 * @public
 * @enum
 */
export const HubContentType = {
  DATA_SET: "DataSet",
  JSON_DOC: "JsonDoc",
  MODEL: "Model",
  MODEL_REFERENCE: "ModelReference",
  NOTEBOOK: "Notebook",
} as const;
/**
 * @public
 */
export type HubContentType = (typeof HubContentType)[keyof typeof HubContentType];

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobStrategyType = {
  BAYESIAN: "Bayesian",
  GRID: "Grid",
  HYPERBAND: "Hyperband",
  RANDOM: "Random",
} as const;
/**
 * @public
 */
export type HyperParameterTuningJobStrategyType =
  (typeof HyperParameterTuningJobStrategyType)[keyof typeof HyperParameterTuningJobStrategyType];

/**
 * @public
 * @enum
 */
export const TrainingJobEarlyStoppingType = {
  AUTO: "Auto",
  OFF: "Off",
} as const;
/**
 * @public
 */
export type TrainingJobEarlyStoppingType =
  (typeof TrainingJobEarlyStoppingType)[keyof typeof TrainingJobEarlyStoppingType];

/**
 * @public
 * @enum
 */
export const HyperParameterTuningAllocationStrategy = {
  PRIORITIZED: "Prioritized",
} as const;
/**
 * @public
 */
export type HyperParameterTuningAllocationStrategy =
  (typeof HyperParameterTuningAllocationStrategy)[keyof typeof HyperParameterTuningAllocationStrategy];

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobWarmStartType = {
  IDENTICAL_DATA_AND_ALGORITHM: "IdenticalDataAndAlgorithm",
  TRANSFER_LEARNING: "TransferLearning",
} as const;
/**
 * @public
 */
export type HyperParameterTuningJobWarmStartType =
  (typeof HyperParameterTuningJobWarmStartType)[keyof typeof HyperParameterTuningJobWarmStartType];

/**
 * @public
 * @enum
 */
export const JobType = {
  INFERENCE: "INFERENCE",
  NOTEBOOK_KERNEL: "NOTEBOOK_KERNEL",
  TRAINING: "TRAINING",
} as const;
/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const Processor = {
  CPU: "CPU",
  GPU: "GPU",
} as const;
/**
 * @public
 */
export type Processor = (typeof Processor)[keyof typeof Processor];

/**
 * @public
 * @enum
 */
export const VendorGuidance = {
  ARCHIVED: "ARCHIVED",
  NOT_PROVIDED: "NOT_PROVIDED",
  STABLE: "STABLE",
  TO_BE_ARCHIVED: "TO_BE_ARCHIVED",
} as const;
/**
 * @public
 */
export type VendorGuidance = (typeof VendorGuidance)[keyof typeof VendorGuidance];

/**
 * @public
 * @enum
 */
export const ModelInfrastructureType = {
  REAL_TIME_INFERENCE: "RealTimeInference",
} as const;
/**
 * @public
 */
export type ModelInfrastructureType = (typeof ModelInfrastructureType)[keyof typeof ModelInfrastructureType];

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  ML_C4_2XLARGE: "ml.c4.2xlarge",
  ML_C4_4XLARGE: "ml.c4.4xlarge",
  ML_C4_8XLARGE: "ml.c4.8xlarge",
  ML_C4_XLARGE: "ml.c4.xlarge",
  ML_C5D_18XLARGE: "ml.c5d.18xlarge",
  ML_C5D_2XLARGE: "ml.c5d.2xlarge",
  ML_C5D_4XLARGE: "ml.c5d.4xlarge",
  ML_C5D_9XLARGE: "ml.c5d.9xlarge",
  ML_C5D_XLARGE: "ml.c5d.xlarge",
  ML_C5_18XLARGE: "ml.c5.18xlarge",
  ML_C5_2XLARGE: "ml.c5.2xlarge",
  ML_C5_4XLARGE: "ml.c5.4xlarge",
  ML_C5_9XLARGE: "ml.c5.9xlarge",
  ML_C5_XLARGE: "ml.c5.xlarge",
  ML_C6ID_12XLARGE: "ml.c6id.12xlarge",
  ML_C6ID_16XLARGE: "ml.c6id.16xlarge",
  ML_C6ID_24XLARGE: "ml.c6id.24xlarge",
  ML_C6ID_2XLARGE: "ml.c6id.2xlarge",
  ML_C6ID_32XLARGE: "ml.c6id.32xlarge",
  ML_C6ID_4XLARGE: "ml.c6id.4xlarge",
  ML_C6ID_8XLARGE: "ml.c6id.8xlarge",
  ML_C6ID_LARGE: "ml.c6id.large",
  ML_C6ID_XLARGE: "ml.c6id.xlarge",
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
  ML_G6_12XLARGE: "ml.g6.12xlarge",
  ML_G6_16XLARGE: "ml.g6.16xlarge",
  ML_G6_24XLARGE: "ml.g6.24xlarge",
  ML_G6_2XLARGE: "ml.g6.2xlarge",
  ML_G6_48XLARGE: "ml.g6.48xlarge",
  ML_G6_4XLARGE: "ml.g6.4xlarge",
  ML_G6_8XLARGE: "ml.g6.8xlarge",
  ML_G6_XLARGE: "ml.g6.xlarge",
  ML_INF1_24XLARGE: "ml.inf1.24xlarge",
  ML_INF1_2XLARGE: "ml.inf1.2xlarge",
  ML_INF1_6XLARGE: "ml.inf1.6xlarge",
  ML_INF1_XLARGE: "ml.inf1.xlarge",
  ML_INF2_24XLARGE: "ml.inf2.24xlarge",
  ML_INF2_48XLARGE: "ml.inf2.48xlarge",
  ML_INF2_8XLARGE: "ml.inf2.8xlarge",
  ML_INF2_XLARGE: "ml.inf2.xlarge",
  ML_M4_10XLARGE: "ml.m4.10xlarge",
  ML_M4_16XLARGE: "ml.m4.16xlarge",
  ML_M4_2XLARGE: "ml.m4.2xlarge",
  ML_M4_4XLARGE: "ml.m4.4xlarge",
  ML_M4_XLARGE: "ml.m4.xlarge",
  ML_M5D_12XLARGE: "ml.m5d.12xlarge",
  ML_M5D_16XLARGE: "ml.m5d.16xlarge",
  ML_M5D_24XLARGE: "ml.m5d.24xlarge",
  ML_M5D_2XLARGE: "ml.m5d.2xlarge",
  ML_M5D_4XLARGE: "ml.m5d.4xlarge",
  ML_M5D_8XLARGE: "ml.m5d.8xlarge",
  ML_M5D_LARGE: "ml.m5d.large",
  ML_M5D_XLARGE: "ml.m5d.xlarge",
  ML_M5_12XLARGE: "ml.m5.12xlarge",
  ML_M5_24XLARGE: "ml.m5.24xlarge",
  ML_M5_2XLARGE: "ml.m5.2xlarge",
  ML_M5_4XLARGE: "ml.m5.4xlarge",
  ML_M5_XLARGE: "ml.m5.xlarge",
  ML_M6ID_12XLARGE: "ml.m6id.12xlarge",
  ML_M6ID_16XLARGE: "ml.m6id.16xlarge",
  ML_M6ID_24XLARGE: "ml.m6id.24xlarge",
  ML_M6ID_2XLARGE: "ml.m6id.2xlarge",
  ML_M6ID_32XLARGE: "ml.m6id.32xlarge",
  ML_M6ID_4XLARGE: "ml.m6id.4xlarge",
  ML_M6ID_8XLARGE: "ml.m6id.8xlarge",
  ML_M6ID_LARGE: "ml.m6id.large",
  ML_M6ID_XLARGE: "ml.m6id.xlarge",
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
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_P6_B200_48XLARGE: "ml.p6-b200.48xlarge",
  ML_R5_12XLARGE: "ml.r5.12xlarge",
  ML_R5_16XLARGE: "ml.r5.16xlarge",
  ML_R5_24XLARGE: "ml.r5.24xlarge",
  ML_R5_2XLARGE: "ml.r5.2xlarge",
  ML_R5_4XLARGE: "ml.r5.4xlarge",
  ML_R5_8XLARGE: "ml.r5.8xlarge",
  ML_R5_LARGE: "ml.r5.large",
  ML_R5_XLARGE: "ml.r5.xlarge",
  ML_R6ID_12XLARGE: "ml.r6id.12xlarge",
  ML_R6ID_16XLARGE: "ml.r6id.16xlarge",
  ML_R6ID_24XLARGE: "ml.r6id.24xlarge",
  ML_R6ID_2XLARGE: "ml.r6id.2xlarge",
  ML_R6ID_32XLARGE: "ml.r6id.32xlarge",
  ML_R6ID_4XLARGE: "ml.r6id.4xlarge",
  ML_R6ID_8XLARGE: "ml.r6id.8xlarge",
  ML_R6ID_LARGE: "ml.r6id.large",
  ML_R6ID_XLARGE: "ml.r6id.xlarge",
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
  ML_T2_2XLARGE: "ml.t2.2xlarge",
  ML_T2_LARGE: "ml.t2.large",
  ML_T2_MEDIUM: "ml.t2.medium",
  ML_T2_XLARGE: "ml.t2.xlarge",
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
export const InferenceExperimentType = {
  SHADOW_MODE: "ShadowMode",
} as const;
/**
 * @public
 */
export type InferenceExperimentType = (typeof InferenceExperimentType)[keyof typeof InferenceExperimentType];

/**
 * @public
 * @enum
 */
export const RecommendationJobSupportedEndpointType = {
  REALTIME: "RealTime",
  SERVERLESS: "Serverless",
} as const;
/**
 * @public
 */
export type RecommendationJobSupportedEndpointType =
  (typeof RecommendationJobSupportedEndpointType)[keyof typeof RecommendationJobSupportedEndpointType];

/**
 * @public
 * @enum
 */
export const TrafficType = {
  PHASES: "PHASES",
  STAIRS: "STAIRS",
} as const;
/**
 * @public
 */
export type TrafficType = (typeof TrafficType)[keyof typeof TrafficType];

/**
 * @public
 * @enum
 */
export const RecommendationJobType = {
  ADVANCED: "Advanced",
  DEFAULT: "Default",
} as const;
/**
 * @public
 */
export type RecommendationJobType = (typeof RecommendationJobType)[keyof typeof RecommendationJobType];

/**
 * @public
 * @enum
 */
export const FlatInvocations = {
  CONTINUE: "Continue",
  STOP: "Stop",
} as const;
/**
 * @public
 */
export type FlatInvocations = (typeof FlatInvocations)[keyof typeof FlatInvocations];

/**
 * @public
 * @enum
 */
export const ModelRegistrationMode = {
  AUTO_MODEL_REGISTRATION_DISABLED: "AutoModelRegistrationDisabled",
  AUTO_MODEL_REGISTRATION_ENABLED: "AutoModelRegistrationEnabled",
} as const;
/**
 * @public
 */
export type ModelRegistrationMode = (typeof ModelRegistrationMode)[keyof typeof ModelRegistrationMode];

/**
 * @public
 * @enum
 */
export const TrackingServerSize = {
  L: "Large",
  M: "Medium",
  S: "Small",
} as const;
/**
 * @public
 */
export type TrackingServerSize = (typeof TrackingServerSize)[keyof typeof TrackingServerSize];

/**
 * @public
 * @enum
 */
export const InferenceExecutionMode = {
  DIRECT: "Direct",
  SERIAL: "Serial",
} as const;
/**
 * @public
 */
export type InferenceExecutionMode = (typeof InferenceExecutionMode)[keyof typeof InferenceExecutionMode];

/**
 * @public
 * @enum
 */
export const ModelCardStatus = {
  APPROVED: "Approved",
  ARCHIVED: "Archived",
  DRAFT: "Draft",
  PENDINGREVIEW: "PendingReview",
} as const;
/**
 * @public
 */
export type ModelCardStatus = (typeof ModelCardStatus)[keyof typeof ModelCardStatus];

/**
 * @public
 * @enum
 */
export const SkipModelValidation = {
  ALL: "All",
  NONE: "None",
} as const;
/**
 * @public
 */
export type SkipModelValidation = (typeof SkipModelValidation)[keyof typeof SkipModelValidation];

/**
 * @public
 * @enum
 */
export const MonitoringProblemType = {
  BINARY_CLASSIFICATION: "BinaryClassification",
  MULTICLASS_CLASSIFICATION: "MulticlassClassification",
  REGRESSION: "Regression",
} as const;
/**
 * @public
 */
export type MonitoringProblemType = (typeof MonitoringProblemType)[keyof typeof MonitoringProblemType];

/**
 * @public
 * @enum
 */
export const MonitoringType = {
  DATA_QUALITY: "DataQuality",
  MODEL_BIAS: "ModelBias",
  MODEL_EXPLAINABILITY: "ModelExplainability",
  MODEL_QUALITY: "ModelQuality",
} as const;
/**
 * @public
 */
export type MonitoringType = (typeof MonitoringType)[keyof typeof MonitoringType];

/**
 * @public
 * @enum
 */
export const NotebookInstanceAcceleratorType = {
  ML_EIA1_LARGE: "ml.eia1.large",
  ML_EIA1_MEDIUM: "ml.eia1.medium",
  ML_EIA1_XLARGE: "ml.eia1.xlarge",
  ML_EIA2_LARGE: "ml.eia2.large",
  ML_EIA2_MEDIUM: "ml.eia2.medium",
  ML_EIA2_XLARGE: "ml.eia2.xlarge",
} as const;
/**
 * @public
 */
export type NotebookInstanceAcceleratorType =
  (typeof NotebookInstanceAcceleratorType)[keyof typeof NotebookInstanceAcceleratorType];

/**
 * @public
 * @enum
 */
export const DirectInternetAccess = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type DirectInternetAccess = (typeof DirectInternetAccess)[keyof typeof DirectInternetAccess];

/**
 * @public
 * @enum
 */
export const RootAccess = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type RootAccess = (typeof RootAccess)[keyof typeof RootAccess];

/**
 * @public
 * @enum
 */
export const OptimizationJobDeploymentInstanceType = {
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
  ML_INF2_24XLARGE: "ml.inf2.24xlarge",
  ML_INF2_48XLARGE: "ml.inf2.48xlarge",
  ML_INF2_8XLARGE: "ml.inf2.8xlarge",
  ML_INF2_XLARGE: "ml.inf2.xlarge",
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_P5EN_48XLARGE: "ml.p5en.48xlarge",
  ML_P5E_48XLARGE: "ml.p5e.48xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_TRN1N_32XLARGE: "ml.trn1n.32xlarge",
  ML_TRN1_2XLARGE: "ml.trn1.2xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
} as const;
/**
 * @public
 */
export type OptimizationJobDeploymentInstanceType =
  (typeof OptimizationJobDeploymentInstanceType)[keyof typeof OptimizationJobDeploymentInstanceType];

/**
 * @public
 * @enum
 */
export const ModelSpeculativeDecodingTechnique = {
  EAGLE: "EAGLE",
} as const;
/**
 * @public
 */
export type ModelSpeculativeDecodingTechnique =
  (typeof ModelSpeculativeDecodingTechnique)[keyof typeof ModelSpeculativeDecodingTechnique];

/**
 * @public
 * @enum
 */
export const ModelSpeculativeDecodingS3DataType = {
  ManifestFile: "ManifestFile",
  S3Prefix: "S3Prefix",
} as const;
/**
 * @public
 */
export type ModelSpeculativeDecodingS3DataType =
  (typeof ModelSpeculativeDecodingS3DataType)[keyof typeof ModelSpeculativeDecodingS3DataType];

/**
 * @public
 * @enum
 */
export const PartnerAppAuthType = {
  IAM: "IAM",
} as const;
/**
 * @public
 */
export type PartnerAppAuthType = (typeof PartnerAppAuthType)[keyof typeof PartnerAppAuthType];

/**
 * @public
 * @enum
 */
export const PartnerAppType = {
  COMET: "comet",
  DEEPCHECKS_LLM_EVALUATION: "deepchecks-llm-evaluation",
  FIDDLER: "fiddler",
  LAKERA_GUARD: "lakera-guard",
} as const;
/**
 * @public
 */
export type PartnerAppType = (typeof PartnerAppType)[keyof typeof PartnerAppType];

/**
 * @public
 * @enum
 */
export const DataDistributionType = {
  FULLYREPLICATED: "FullyReplicated",
  SHARDEDBYS3KEY: "ShardedByS3Key",
} as const;
/**
 * @public
 */
export type DataDistributionType = (typeof DataDistributionType)[keyof typeof DataDistributionType];

/**
 * @public
 * @enum
 */
export const InputMode = {
  FILE: "File",
  PIPE: "Pipe",
} as const;
/**
 * @public
 */
export type InputMode = (typeof InputMode)[keyof typeof InputMode];

/**
 * @public
 * @enum
 */
export const RedshiftResultCompressionType = {
  BZIP2: "BZIP2",
  GZIP: "GZIP",
  NONE: "None",
  SNAPPY: "SNAPPY",
  ZSTD: "ZSTD",
} as const;
/**
 * @public
 */
export type RedshiftResultCompressionType =
  (typeof RedshiftResultCompressionType)[keyof typeof RedshiftResultCompressionType];

/**
 * @public
 * @enum
 */
export const RedshiftResultFormat = {
  CSV: "CSV",
  PARQUET: "PARQUET",
} as const;
/**
 * @public
 */
export type RedshiftResultFormat = (typeof RedshiftResultFormat)[keyof typeof RedshiftResultFormat];

/**
 * @public
 * @enum
 */
export const ProcessingS3CompressionType = {
  GZIP: "Gzip",
  NONE: "None",
} as const;
/**
 * @public
 */
export type ProcessingS3CompressionType =
  (typeof ProcessingS3CompressionType)[keyof typeof ProcessingS3CompressionType];

/**
 * @public
 * @enum
 */
export const ProcessingS3DataType = {
  MANIFEST_FILE: "ManifestFile",
  S3_PREFIX: "S3Prefix",
} as const;
/**
 * @public
 */
export type ProcessingS3DataType = (typeof ProcessingS3DataType)[keyof typeof ProcessingS3DataType];

/**
 * @public
 * @enum
 */
export const SharingType = {
  Private: "Private",
  Shared: "Shared",
} as const;
/**
 * @public
 */
export type SharingType = (typeof SharingType)[keyof typeof SharingType];

/**
 * @public
 * @enum
 */
export const StudioLifecycleConfigAppType = {
  CodeEditor: "CodeEditor",
  JupyterLab: "JupyterLab",
  JupyterServer: "JupyterServer",
  KernelGateway: "KernelGateway",
} as const;
/**
 * @public
 */
export type StudioLifecycleConfigAppType =
  (typeof StudioLifecycleConfigAppType)[keyof typeof StudioLifecycleConfigAppType];

/**
 * @public
 * @enum
 */
export const JoinSource = {
  INPUT: "Input",
  NONE: "None",
} as const;
/**
 * @public
 */
export type JoinSource = (typeof JoinSource)[keyof typeof JoinSource];

/**
 * @public
 * @enum
 */
export const TrialComponentPrimaryStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type TrialComponentPrimaryStatus =
  (typeof TrialComponentPrimaryStatus)[keyof typeof TrialComponentPrimaryStatus];

/**
 * @public
 * @enum
 */
export const WorkforceIpAddressType = {
  dualstack: "dualstack",
  ipv4: "ipv4",
} as const;
/**
 * @public
 */
export type WorkforceIpAddressType = (typeof WorkforceIpAddressType)[keyof typeof WorkforceIpAddressType];

/**
 * @public
 * @enum
 */
export const EnabledOrDisabled = {
  Disabled: "Disabled",
  Enabled: "Enabled",
} as const;
/**
 * @public
 */
export type EnabledOrDisabled = (typeof EnabledOrDisabled)[keyof typeof EnabledOrDisabled];

/**
 * @public
 * @enum
 */
export const CrossAccountFilterOption = {
  CROSS_ACCOUNT: "CrossAccount",
  SAME_ACCOUNT: "SameAccount",
} as const;
/**
 * @public
 */
export type CrossAccountFilterOption = (typeof CrossAccountFilterOption)[keyof typeof CrossAccountFilterOption];

/**
 * @public
 * @enum
 */
export const Statistic = {
  AVERAGE: "Average",
  MAXIMUM: "Maximum",
  MINIMUM: "Minimum",
  SAMPLE_COUNT: "SampleCount",
  SUM: "Sum",
} as const;
/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 * @enum
 */
export const RuleEvaluationStatus = {
  ERROR: "Error",
  IN_PROGRESS: "InProgress",
  ISSUES_FOUND: "IssuesFound",
  NO_ISSUES_FOUND: "NoIssuesFound",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type RuleEvaluationStatus = (typeof RuleEvaluationStatus)[keyof typeof RuleEvaluationStatus];

/**
 * @public
 * @enum
 */
export const RetentionType = {
  Delete: "Delete",
  Retain: "Retain",
} as const;
/**
 * @public
 */
export type RetentionType = (typeof RetentionType)[keyof typeof RetentionType];

/**
 * @public
 * @enum
 */
export const RecommendationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_APPLICABLE: "NOT_APPLICABLE",
} as const;
/**
 * @public
 */
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];

/**
 * @public
 * @enum
 */
export const StageStatus = {
  Creating: "CREATING",
  Deployed: "DEPLOYED",
  Failed: "FAILED",
  InProgress: "INPROGRESS",
  ReadyToDeploy: "READYTODEPLOY",
  Starting: "STARTING",
  Stopped: "STOPPED",
  Stopping: "STOPPING",
} as const;
/**
 * @public
 */
export type StageStatus = (typeof StageStatus)[keyof typeof StageStatus];

/**
 * @public
 * @enum
 */
export const DomainStatus = {
  Delete_Failed: "Delete_Failed",
  Deleting: "Deleting",
  Failed: "Failed",
  InService: "InService",
  Pending: "Pending",
  Update_Failed: "Update_Failed",
  Updating: "Updating",
} as const;
/**
 * @public
 */
export type DomainStatus = (typeof DomainStatus)[keyof typeof DomainStatus];

/**
 * @public
 * @enum
 */
export const EdgePackagingJobStatus = {
  Completed: "COMPLETED",
  Failed: "FAILED",
  InProgress: "INPROGRESS",
  Starting: "STARTING",
  Stopped: "STOPPED",
  Stopping: "STOPPING",
} as const;
/**
 * @public
 */
export type EdgePackagingJobStatus = (typeof EdgePackagingJobStatus)[keyof typeof EdgePackagingJobStatus];

/**
 * @public
 * @enum
 */
export const EdgePresetDeploymentStatus = {
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
/**
 * @public
 */
export type EdgePresetDeploymentStatus = (typeof EdgePresetDeploymentStatus)[keyof typeof EdgePresetDeploymentStatus];

/**
 * @public
 * @enum
 */
export const EndpointStatus = {
  CREATING: "Creating",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_SERVICE: "InService",
  OUT_OF_SERVICE: "OutOfService",
  ROLLING_BACK: "RollingBack",
  SYSTEM_UPDATING: "SystemUpdating",
  UPDATE_ROLLBACK_FAILED: "UpdateRollbackFailed",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

/**
 * @public
 * @enum
 */
export const VariantStatus = {
  ACTIVATING_TRAFFIC: "ActivatingTraffic",
  BAKING: "Baking",
  CREATING: "Creating",
  DELETING: "Deleting",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type VariantStatus = (typeof VariantStatus)[keyof typeof VariantStatus];

/**
 * @public
 * @enum
 */
export const FeatureGroupStatus = {
  CREATED: "Created",
  CREATE_FAILED: "CreateFailed",
  CREATING: "Creating",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
} as const;
/**
 * @public
 */
export type FeatureGroupStatus = (typeof FeatureGroupStatus)[keyof typeof FeatureGroupStatus];

/**
 * @public
 * @enum
 */
export const LastUpdateStatusValue = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCESSFUL: "Successful",
} as const;
/**
 * @public
 */
export type LastUpdateStatusValue = (typeof LastUpdateStatusValue)[keyof typeof LastUpdateStatusValue];

/**
 * @public
 * @enum
 */
export const OfflineStoreStatusValue = {
  ACTIVE: "Active",
  BLOCKED: "Blocked",
  DISABLED: "Disabled",
} as const;
/**
 * @public
 */
export type OfflineStoreStatusValue = (typeof OfflineStoreStatusValue)[keyof typeof OfflineStoreStatusValue];

/**
 * @public
 * @enum
 */
export const FlowDefinitionStatus = {
  ACTIVE: "Active",
  DELETING: "Deleting",
  FAILED: "Failed",
  INITIALIZING: "Initializing",
} as const;
/**
 * @public
 */
export type FlowDefinitionStatus = (typeof FlowDefinitionStatus)[keyof typeof FlowDefinitionStatus];

/**
 * @public
 * @enum
 */
export const HubStatus = {
  CREATE_FAILED: "CreateFailed",
  CREATING: "Creating",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  IN_SERVICE: "InService",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type HubStatus = (typeof HubStatus)[keyof typeof HubStatus];

/**
 * @public
 * @enum
 */
export const HubContentStatus = {
  AVAILABLE: "Available",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  IMPORTING: "Importing",
  IMPORT_FAILED: "ImportFailed",
  PENDING_DELETE: "PendingDelete",
  PENDING_IMPORT: "PendingImport",
} as const;
/**
 * @public
 */
export type HubContentStatus = (typeof HubContentStatus)[keyof typeof HubContentStatus];

/**
 * @public
 * @enum
 */
export const HubContentSupportStatus = {
  DEPRECATED: "Deprecated",
  RESTRICTED: "Restricted",
  SUPPORTED: "Supported",
} as const;
/**
 * @public
 */
export type HubContentSupportStatus = (typeof HubContentSupportStatus)[keyof typeof HubContentSupportStatus];

/**
 * @public
 * @enum
 */
export const HumanTaskUiStatus = {
  ACTIVE: "Active",
  DELETING: "Deleting",
} as const;
/**
 * @public
 */
export type HumanTaskUiStatus = (typeof HumanTaskUiStatus)[keyof typeof HumanTaskUiStatus];

/**
 * @public
 * @enum
 */
export const TrainingJobStatus = {
  COMPLETED: "Completed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type TrainingJobStatus = (typeof TrainingJobStatus)[keyof typeof TrainingJobStatus];

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobStatus = {
  COMPLETED: "Completed",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type HyperParameterTuningJobStatus =
  (typeof HyperParameterTuningJobStatus)[keyof typeof HyperParameterTuningJobStatus];

/**
 * @public
 * @enum
 */
export const ImageStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ImageStatus = (typeof ImageStatus)[keyof typeof ImageStatus];

/**
 * @public
 * @enum
 */
export const ImageVersionStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type ImageVersionStatus = (typeof ImageVersionStatus)[keyof typeof ImageVersionStatus];

/**
 * @public
 * @enum
 */
export const InferenceComponentStatus = {
  CREATING: "Creating",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_SERVICE: "InService",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type InferenceComponentStatus = (typeof InferenceComponentStatus)[keyof typeof InferenceComponentStatus];

/**
 * @public
 * @enum
 */
export const InferenceComponentCapacitySizeType = {
  CAPACITY_PERCENT: "CAPACITY_PERCENT",
  COPY_COUNT: "COPY_COUNT",
} as const;
/**
 * @public
 */
export type InferenceComponentCapacitySizeType =
  (typeof InferenceComponentCapacitySizeType)[keyof typeof InferenceComponentCapacitySizeType];

/**
 * @public
 * @enum
 */
export const ModelVariantStatus = {
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETING: "Deleting",
  IN_SERVICE: "InService",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type ModelVariantStatus = (typeof ModelVariantStatus)[keyof typeof ModelVariantStatus];

/**
 * @public
 * @enum
 */
export const InferenceExperimentStatus = {
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
  CREATED: "Created",
  CREATING: "Creating",
  RUNNING: "Running",
  STARTING: "Starting",
  STOPPING: "Stopping",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type InferenceExperimentStatus = (typeof InferenceExperimentStatus)[keyof typeof InferenceExperimentStatus];

/**
 * @public
 * @enum
 */
export const RecommendationJobStatus = {
  COMPLETED: "COMPLETED",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type RecommendationJobStatus = (typeof RecommendationJobStatus)[keyof typeof RecommendationJobStatus];

/**
 * @public
 * @enum
 */
export const LabelingJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  INITIALIZING: "Initializing",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type LabelingJobStatus = (typeof LabelingJobStatus)[keyof typeof LabelingJobStatus];

/**
 * @public
 * @enum
 */
export const MaintenanceStatus = {
  MAINTENANCE_COMPLETE: "MaintenanceComplete",
  MAINTENANCE_FAILED: "MaintenanceFailed",
  MAINTENANCE_IN_PROGRESS: "MaintenanceInProgress",
} as const;
/**
 * @public
 */
export type MaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus];

/**
 * @public
 * @enum
 */
export const MlflowAppStatus = {
  CREATED: "Created",
  CREATE_FAILED: "CreateFailed",
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  UPDATED: "Updated",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type MlflowAppStatus = (typeof MlflowAppStatus)[keyof typeof MlflowAppStatus];

/**
 * @public
 * @enum
 */
export const IsTrackingServerActive = {
  ACTIVE: "Active",
  INACTIVE: "Inactive",
} as const;
/**
 * @public
 */
export type IsTrackingServerActive = (typeof IsTrackingServerActive)[keyof typeof IsTrackingServerActive];

/**
 * @public
 * @enum
 */
export const TrackingServerMaintenanceStatus = {
  MAINTENANCE_COMPLETE: "MaintenanceComplete",
  MAINTENANCE_FAILED: "MaintenanceFailed",
  MAINTENANCE_IN_PROGRESS: "MaintenanceInProgress",
} as const;
/**
 * @public
 */
export type TrackingServerMaintenanceStatus =
  (typeof TrackingServerMaintenanceStatus)[keyof typeof TrackingServerMaintenanceStatus];

/**
 * @public
 * @enum
 */
export const TrackingServerStatus = {
  CREATED: "Created",
  CREATE_FAILED: "CreateFailed",
  CREATING: "Creating",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  MAINTENANCE_COMPLETE: "MaintenanceComplete",
  MAINTENANCE_FAILED: "MaintenanceFailed",
  MAINTENANCE_IN_PROGRESS: "MaintenanceInProgress",
  STARTED: "Started",
  STARTING: "Starting",
  START_FAILED: "StartFailed",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  STOP_FAILED: "StopFailed",
  UPDATED: "Updated",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type TrackingServerStatus = (typeof TrackingServerStatus)[keyof typeof TrackingServerStatus];

/**
 * @public
 * @enum
 */
export const ModelCardProcessingStatus = {
  CONTENT_DELETED: "ContentDeleted",
  DELETE_COMPLETED: "DeleteCompleted",
  DELETE_FAILED: "DeleteFailed",
  DELETE_INPROGRESS: "DeleteInProgress",
  DELETE_PENDING: "DeletePending",
  EXPORTJOBS_DELETED: "ExportJobsDeleted",
} as const;
/**
 * @public
 */
export type ModelCardProcessingStatus = (typeof ModelCardProcessingStatus)[keyof typeof ModelCardProcessingStatus];

/**
 * @public
 * @enum
 */
export const ModelCardExportJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
} as const;
/**
 * @public
 */
export type ModelCardExportJobStatus = (typeof ModelCardExportJobStatus)[keyof typeof ModelCardExportJobStatus];

/**
 * @public
 * @enum
 */
export const DetailedModelPackageStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  NOT_STARTED: "NotStarted",
} as const;
/**
 * @public
 */
export type DetailedModelPackageStatus = (typeof DetailedModelPackageStatus)[keyof typeof DetailedModelPackageStatus];

/**
 * @public
 * @enum
 */
export const ModelPackageGroupStatus = {
  COMPLETED: "Completed",
  DELETE_FAILED: "DeleteFailed",
  DELETING: "Deleting",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
} as const;
/**
 * @public
 */
export type ModelPackageGroupStatus = (typeof ModelPackageGroupStatus)[keyof typeof ModelPackageGroupStatus];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  COMPLETED: "Completed",
  COMPLETED_WITH_VIOLATIONS: "CompletedWithViolations",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  PENDING: "Pending",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const ScheduleStatus = {
  FAILED: "Failed",
  PENDING: "Pending",
  SCHEDULED: "Scheduled",
  STOPPED: "Stopped",
} as const;
/**
 * @public
 */
export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus];

/**
 * @public
 * @enum
 */
export const NotebookInstanceStatus = {
  Deleting: "Deleting",
  Failed: "Failed",
  InService: "InService",
  Pending: "Pending",
  Stopped: "Stopped",
  Stopping: "Stopping",
  Updating: "Updating",
} as const;
/**
 * @public
 */
export type NotebookInstanceStatus = (typeof NotebookInstanceStatus)[keyof typeof NotebookInstanceStatus];

/**
 * @public
 * @enum
 */
export const OptimizationJobStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INPROGRESS: "INPROGRESS",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;
/**
 * @public
 */
export type OptimizationJobStatus = (typeof OptimizationJobStatus)[keyof typeof OptimizationJobStatus];

/**
 * @public
 * @enum
 */
export const PartnerAppStatus = {
  AVAILABLE: "Available",
  CREATING: "Creating",
  DELETED: "Deleted",
  DELETING: "Deleting",
  FAILED: "Failed",
  UPDATE_FAILED: "UpdateFailed",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type PartnerAppStatus = (typeof PartnerAppStatus)[keyof typeof PartnerAppStatus];

/**
 * @public
 * @enum
 */
export const PipelineStatus = {
  ACTIVE: "Active",
  DELETING: "Deleting",
} as const;
/**
 * @public
 */
export type PipelineStatus = (typeof PipelineStatus)[keyof typeof PipelineStatus];

/**
 * @public
 * @enum
 */
export const PipelineExecutionStatus = {
  EXECUTING: "Executing",
  FAILED: "Failed",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  SUCCEEDED: "Succeeded",
} as const;
/**
 * @public
 */
export type PipelineExecutionStatus = (typeof PipelineExecutionStatus)[keyof typeof PipelineExecutionStatus];

/**
 * @public
 * @enum
 */
export const ProcessingJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type ProcessingJobStatus = (typeof ProcessingJobStatus)[keyof typeof ProcessingJobStatus];

/**
 * @public
 * @enum
 */
export const ProjectStatus = {
  CREATE_COMPLETED: "CreateCompleted",
  CREATE_FAILED: "CreateFailed",
  CREATE_IN_PROGRESS: "CreateInProgress",
  DELETE_COMPLETED: "DeleteCompleted",
  DELETE_FAILED: "DeleteFailed",
  DELETE_IN_PROGRESS: "DeleteInProgress",
  PENDING: "Pending",
  UPDATE_COMPLETED: "UpdateCompleted",
  UPDATE_FAILED: "UpdateFailed",
  UPDATE_IN_PROGRESS: "UpdateInProgress",
} as const;
/**
 * @public
 */
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

/**
 * @public
 * @enum
 */
export const ReservedCapacityInstanceType = {
  ML_P4DE_24XLARGE: "ml.p4de.24xlarge",
  ML_P4D_24XLARGE: "ml.p4d.24xlarge",
  ML_P5EN_48XLARGE: "ml.p5en.48xlarge",
  ML_P5E_48XLARGE: "ml.p5e.48xlarge",
  ML_P5_48XLARGE: "ml.p5.48xlarge",
  ML_P5_4XLARGE: "ml.p5.4xlarge",
  ML_P6E_GB200_36XLARGE: "ml.p6e-gb200.36xlarge",
  ML_P6_B200_48XLARGE: "ml.p6-b200.48xlarge",
  ML_TRN1_32XLARGE: "ml.trn1.32xlarge",
  ML_TRN2_48XLARGE: "ml.trn2.48xlarge",
} as const;
/**
 * @public
 */
export type ReservedCapacityInstanceType =
  (typeof ReservedCapacityInstanceType)[keyof typeof ReservedCapacityInstanceType];

/**
 * @public
 * @enum
 */
export const ReservedCapacityType = {
  INSTANCE: "Instance",
  ULTRASERVER: "UltraServer",
} as const;
/**
 * @public
 */
export type ReservedCapacityType = (typeof ReservedCapacityType)[keyof typeof ReservedCapacityType];

/**
 * @public
 * @enum
 */
export const ReservedCapacityStatus = {
  ACTIVE: "Active",
  EXPIRED: "Expired",
  FAILED: "Failed",
  PENDING: "Pending",
  SCHEDULED: "Scheduled",
} as const;
/**
 * @public
 */
export type ReservedCapacityStatus = (typeof ReservedCapacityStatus)[keyof typeof ReservedCapacityStatus];

/**
 * @public
 * @enum
 */
export const SpaceStatus = {
  Delete_Failed: "Delete_Failed",
  Deleting: "Deleting",
  Failed: "Failed",
  InService: "InService",
  Pending: "Pending",
  Update_Failed: "Update_Failed",
  Updating: "Updating",
} as const;
/**
 * @public
 */
export type SpaceStatus = (typeof SpaceStatus)[keyof typeof SpaceStatus];

/**
 * @public
 * @enum
 */
export const ProfilingStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type ProfilingStatus = (typeof ProfilingStatus)[keyof typeof ProfilingStatus];

/**
 * @public
 * @enum
 */
export const SecondaryStatus = {
  COMPLETED: "Completed",
  DOWNLOADING: "Downloading",
  DOWNLOADING_TRAINING_IMAGE: "DownloadingTrainingImage",
  FAILED: "Failed",
  INTERRUPTED: "Interrupted",
  LAUNCHING_ML_INSTANCES: "LaunchingMLInstances",
  MAX_RUNTIME_EXCEEDED: "MaxRuntimeExceeded",
  MAX_WAIT_TIME_EXCEEDED: "MaxWaitTimeExceeded",
  PENDING: "Pending",
  PREPARING_TRAINING_STACK: "PreparingTrainingStack",
  RESTARTING: "Restarting",
  STARTING: "Starting",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  TRAINING: "Training",
  UPDATING: "Updating",
  UPLOADING: "Uploading",
} as const;
/**
 * @public
 */
export type SecondaryStatus = (typeof SecondaryStatus)[keyof typeof SecondaryStatus];

/**
 * @public
 * @enum
 */
export const WarmPoolResourceStatus = {
  AVAILABLE: "Available",
  INUSE: "InUse",
  REUSED: "Reused",
  TERMINATED: "Terminated",
} as const;
/**
 * @public
 */
export type WarmPoolResourceStatus = (typeof WarmPoolResourceStatus)[keyof typeof WarmPoolResourceStatus];

/**
 * @public
 * @enum
 */
export const TrainingPlanStatus = {
  ACTIVE: "Active",
  EXPIRED: "Expired",
  FAILED: "Failed",
  PENDING: "Pending",
  SCHEDULED: "Scheduled",
} as const;
/**
 * @public
 */
export type TrainingPlanStatus = (typeof TrainingPlanStatus)[keyof typeof TrainingPlanStatus];

/**
 * @public
 * @enum
 */
export const SageMakerResourceName = {
  ENDPOINT: "endpoint",
  HYPERPOD_CLUSTER: "hyperpod-cluster",
  TRAINING_JOB: "training-job",
} as const;
/**
 * @public
 */
export type SageMakerResourceName = (typeof SageMakerResourceName)[keyof typeof SageMakerResourceName];

/**
 * @public
 * @enum
 */
export const TransformJobStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;
/**
 * @public
 */
export type TransformJobStatus = (typeof TransformJobStatus)[keyof typeof TransformJobStatus];

/**
 * @public
 * @enum
 */
export const UserProfileStatus = {
  Delete_Failed: "Delete_Failed",
  Deleting: "Deleting",
  Failed: "Failed",
  InService: "InService",
  Pending: "Pending",
  Update_Failed: "Update_Failed",
  Updating: "Updating",
} as const;
/**
 * @public
 */
export type UserProfileStatus = (typeof UserProfileStatus)[keyof typeof UserProfileStatus];

/**
 * @public
 * @enum
 */
export const WorkforceStatus = {
  ACTIVE: "Active",
  DELETING: "Deleting",
  FAILED: "Failed",
  INITIALIZING: "Initializing",
  UPDATING: "Updating",
} as const;
/**
 * @public
 */
export type WorkforceStatus = (typeof WorkforceStatus)[keyof typeof WorkforceStatus];

/**
 * @public
 * @enum
 */
export const DeviceDeploymentStatus = {
  Deployed: "DEPLOYED",
  Failed: "FAILED",
  InProgress: "INPROGRESS",
  ReadyToDeploy: "READYTODEPLOY",
  Stopped: "STOPPED",
  Stopping: "STOPPING",
} as const;
/**
 * @public
 */
export type DeviceDeploymentStatus = (typeof DeviceDeploymentStatus)[keyof typeof DeviceDeploymentStatus];

/**
 * @public
 * @enum
 */
export const Direction = {
  ASCENDANTS: "Ascendants",
  BOTH: "Both",
  DESCENDANTS: "Descendants",
} as const;
/**
 * @public
 */
export type Direction = (typeof Direction)[keyof typeof Direction];

/**
 * @public
 * @enum
 */
export const EndpointConfigSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
} as const;
/**
 * @public
 */
export type EndpointConfigSortKey = (typeof EndpointConfigSortKey)[keyof typeof EndpointConfigSortKey];

/**
 * @public
 * @enum
 */
export const EndpointSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
  Status: "Status",
} as const;
/**
 * @public
 */
export type EndpointSortKey = (typeof EndpointSortKey)[keyof typeof EndpointSortKey];

/**
 * @public
 * @enum
 */
export const EventSortBy = {
  EVENT_TIME: "EventTime",
} as const;
/**
 * @public
 */
export type EventSortBy = (typeof EventSortBy)[keyof typeof EventSortBy];

/**
 * @public
 * @enum
 */
export const FeatureGroupSortBy = {
  CREATION_TIME: "CreationTime",
  FEATURE_GROUP_STATUS: "FeatureGroupStatus",
  NAME: "Name",
  OFFLINE_STORE_STATUS: "OfflineStoreStatus",
} as const;
/**
 * @public
 */
export type FeatureGroupSortBy = (typeof FeatureGroupSortBy)[keyof typeof FeatureGroupSortBy];

/**
 * @public
 * @enum
 */
export const FeatureGroupSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type FeatureGroupSortOrder = (typeof FeatureGroupSortOrder)[keyof typeof FeatureGroupSortOrder];

/**
 * @public
 * @enum
 */
export const Operator = {
  CONTAINS: "Contains",
  EQUALS: "Equals",
  EXISTS: "Exists",
  GREATER_THAN: "GreaterThan",
  GREATER_THAN_OR_EQUAL_TO: "GreaterThanOrEqualTo",
  IN: "In",
  LESS_THAN: "LessThan",
  LESS_THAN_OR_EQUAL_TO: "LessThanOrEqualTo",
  NOT_EQUALS: "NotEquals",
  NOT_EXISTS: "NotExists",
} as const;
/**
 * @public
 */
export type Operator = (typeof Operator)[keyof typeof Operator];

/**
 * @public
 * @enum
 */
export const SagemakerServicecatalogStatus = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
} as const;
/**
 * @public
 */
export type SagemakerServicecatalogStatus =
  (typeof SagemakerServicecatalogStatus)[keyof typeof SagemakerServicecatalogStatus];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ENDPOINT: "Endpoint",
  EXPERIMENT: "Experiment",
  EXPERIMENT_TRIAL: "ExperimentTrial",
  EXPERIMENT_TRIAL_COMPONENT: "ExperimentTrialComponent",
  FEATURE_GROUP: "FeatureGroup",
  FEATURE_METADATA: "FeatureMetadata",
  HYPER_PARAMETER_TUNING_JOB: "HyperParameterTuningJob",
  IMAGE: "Image",
  IMAGE_VERSION: "ImageVersion",
  MODEL: "Model",
  MODEL_CARD: "ModelCard",
  MODEL_PACKAGE: "ModelPackage",
  MODEL_PACKAGE_GROUP: "ModelPackageGroup",
  PIPELINE: "Pipeline",
  PIPELINE_EXECUTION: "PipelineExecution",
  PIPELINE_VERSION: "PipelineVersion",
  PROJECT: "Project",
  TRAINING_JOB: "TrainingJob",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const HubContentSortBy = {
  CREATION_TIME: "CreationTime",
  HUB_CONTENT_NAME: "HubContentName",
  HUB_CONTENT_STATUS: "HubContentStatus",
} as const;
/**
 * @public
 */
export type HubContentSortBy = (typeof HubContentSortBy)[keyof typeof HubContentSortBy];

/**
 * @public
 * @enum
 */
export const HubSortBy = {
  ACCOUNT_ID_OWNER: "AccountIdOwner",
  CREATION_TIME: "CreationTime",
  HUB_NAME: "HubName",
  HUB_STATUS: "HubStatus",
} as const;
/**
 * @public
 */
export type HubSortBy = (typeof HubSortBy)[keyof typeof HubSortBy];

/**
 * @public
 * @enum
 */
export const HyperParameterTuningJobSortByOptions = {
  CreationTime: "CreationTime",
  Name: "Name",
  Status: "Status",
} as const;
/**
 * @public
 */
export type HyperParameterTuningJobSortByOptions =
  (typeof HyperParameterTuningJobSortByOptions)[keyof typeof HyperParameterTuningJobSortByOptions];

/**
 * @public
 * @enum
 */
export const ImageSortBy = {
  CREATION_TIME: "CREATION_TIME",
  IMAGE_NAME: "IMAGE_NAME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
} as const;
/**
 * @public
 */
export type ImageSortBy = (typeof ImageSortBy)[keyof typeof ImageSortBy];

/**
 * @public
 * @enum
 */
export const ImageSortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type ImageSortOrder = (typeof ImageSortOrder)[keyof typeof ImageSortOrder];

/**
 * @public
 * @enum
 */
export const ImageVersionSortBy = {
  CREATION_TIME: "CREATION_TIME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
  VERSION: "VERSION",
} as const;
/**
 * @public
 */
export type ImageVersionSortBy = (typeof ImageVersionSortBy)[keyof typeof ImageVersionSortBy];

/**
 * @public
 * @enum
 */
export const ImageVersionSortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type ImageVersionSortOrder = (typeof ImageVersionSortOrder)[keyof typeof ImageVersionSortOrder];

/**
 * @public
 * @enum
 */
export const InferenceComponentSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
  Status: "Status",
} as const;
/**
 * @public
 */
export type InferenceComponentSortKey = (typeof InferenceComponentSortKey)[keyof typeof InferenceComponentSortKey];

/**
 * @public
 * @enum
 */
export const InferenceExperimentStopDesiredState = {
  CANCELLED: "Cancelled",
  COMPLETED: "Completed",
} as const;
/**
 * @public
 */
export type InferenceExperimentStopDesiredState =
  (typeof InferenceExperimentStopDesiredState)[keyof typeof InferenceExperimentStopDesiredState];

/**
 * @public
 * @enum
 */
export const RecommendationStepType = {
  BENCHMARK: "BENCHMARK",
} as const;
/**
 * @public
 */
export type RecommendationStepType = (typeof RecommendationStepType)[keyof typeof RecommendationStepType];

/**
 * @public
 * @enum
 */
export const LineageType = {
  ACTION: "Action",
  ARTIFACT: "Artifact",
  CONTEXT: "Context",
  TRIAL_COMPONENT: "TrialComponent",
} as const;
/**
 * @public
 */
export type LineageType = (typeof LineageType)[keyof typeof LineageType];

/**
 * @public
 * @enum
 */
export const SortActionsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type SortActionsBy = (typeof SortActionsBy)[keyof typeof SortActionsBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const SortArtifactsBy = {
  CREATION_TIME: "CreationTime",
} as const;
/**
 * @public
 */
export type SortArtifactsBy = (typeof SortArtifactsBy)[keyof typeof SortArtifactsBy];

/**
 * @public
 * @enum
 */
export const SortAssociationsBy = {
  CREATION_TIME: "CreationTime",
  DESTINATION_ARN: "DestinationArn",
  DESTINATION_TYPE: "DestinationType",
  SOURCE_ARN: "SourceArn",
  SOURCE_TYPE: "SourceType",
} as const;
/**
 * @public
 */
export type SortAssociationsBy = (typeof SortAssociationsBy)[keyof typeof SortAssociationsBy];

/**
 * @public
 * @enum
 */
export const SortClusterSchedulerConfigBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type SortClusterSchedulerConfigBy =
  (typeof SortClusterSchedulerConfigBy)[keyof typeof SortClusterSchedulerConfigBy];

/**
 * @public
 * @enum
 */
export const ListCompilationJobsSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type ListCompilationJobsSortBy = (typeof ListCompilationJobsSortBy)[keyof typeof ListCompilationJobsSortBy];

/**
 * @public
 * @enum
 */
export const SortQuotaBy = {
  CLUSTER_ARN: "ClusterArn",
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type SortQuotaBy = (typeof SortQuotaBy)[keyof typeof SortQuotaBy];

/**
 * @public
 * @enum
 */
export const SortContextsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type SortContextsBy = (typeof SortContextsBy)[keyof typeof SortContextsBy];

/**
 * @public
 * @enum
 */
export const MonitoringJobDefinitionSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type MonitoringJobDefinitionSortKey =
  (typeof MonitoringJobDefinitionSortKey)[keyof typeof MonitoringJobDefinitionSortKey];

/**
 * @public
 * @enum
 */
export const ListDeviceFleetsSortBy = {
  CreationTime: "CREATION_TIME",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  Name: "NAME",
} as const;
/**
 * @public
 */
export type ListDeviceFleetsSortBy = (typeof ListDeviceFleetsSortBy)[keyof typeof ListDeviceFleetsSortBy];

/**
 * @public
 * @enum
 */
export const ListEdgeDeploymentPlansSortBy = {
  CreationTime: "CREATION_TIME",
  DeviceFleetName: "DEVICE_FLEET_NAME",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  Name: "NAME",
} as const;
/**
 * @public
 */
export type ListEdgeDeploymentPlansSortBy =
  (typeof ListEdgeDeploymentPlansSortBy)[keyof typeof ListEdgeDeploymentPlansSortBy];

/**
 * @public
 * @enum
 */
export const ListEdgePackagingJobsSortBy = {
  CreationTime: "CREATION_TIME",
  EdgePackagingJobStatus: "STATUS",
  LastModifiedTime: "LAST_MODIFIED_TIME",
  ModelName: "MODEL_NAME",
  Name: "NAME",
} as const;
/**
 * @public
 */
export type ListEdgePackagingJobsSortBy =
  (typeof ListEdgePackagingJobsSortBy)[keyof typeof ListEdgePackagingJobsSortBy];

/**
 * @public
 * @enum
 */
export const OrderKey = {
  Ascending: "Ascending",
  Descending: "Descending",
} as const;
/**
 * @public
 */
export type OrderKey = (typeof OrderKey)[keyof typeof OrderKey];

/**
 * @public
 * @enum
 */
export const SortExperimentsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type SortExperimentsBy = (typeof SortExperimentsBy)[keyof typeof SortExperimentsBy];

/**
 * @public
 * @enum
 */
export const SortInferenceExperimentsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type SortInferenceExperimentsBy = (typeof SortInferenceExperimentsBy)[keyof typeof SortInferenceExperimentsBy];

/**
 * @public
 * @enum
 */
export const ListInferenceRecommendationsJobsSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type ListInferenceRecommendationsJobsSortBy =
  (typeof ListInferenceRecommendationsJobsSortBy)[keyof typeof ListInferenceRecommendationsJobsSortBy];

/**
 * @public
 * @enum
 */
export const SortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type SortBy = (typeof SortBy)[keyof typeof SortBy];

/**
 * @public
 * @enum
 */
export const ListLabelingJobsForWorkteamSortByOptions = {
  CREATION_TIME: "CreationTime",
} as const;
/**
 * @public
 */
export type ListLabelingJobsForWorkteamSortByOptions =
  (typeof ListLabelingJobsForWorkteamSortByOptions)[keyof typeof ListLabelingJobsForWorkteamSortByOptions];

/**
 * @public
 * @enum
 */
export const SortLineageGroupsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type SortLineageGroupsBy = (typeof SortLineageGroupsBy)[keyof typeof SortLineageGroupsBy];

/**
 * @public
 * @enum
 */
export const SortMlflowAppBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type SortMlflowAppBy = (typeof SortMlflowAppBy)[keyof typeof SortMlflowAppBy];

/**
 * @public
 * @enum
 */
export const SortTrackingServerBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type SortTrackingServerBy = (typeof SortTrackingServerBy)[keyof typeof SortTrackingServerBy];

/**
 * @public
 * @enum
 */
export const ModelCardExportJobSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type ModelCardExportJobSortBy = (typeof ModelCardExportJobSortBy)[keyof typeof ModelCardExportJobSortBy];

/**
 * @public
 * @enum
 */
export const ModelCardExportJobSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type ModelCardExportJobSortOrder =
  (typeof ModelCardExportJobSortOrder)[keyof typeof ModelCardExportJobSortOrder];

/**
 * @public
 * @enum
 */
export const ModelCardSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type ModelCardSortBy = (typeof ModelCardSortBy)[keyof typeof ModelCardSortBy];

/**
 * @public
 * @enum
 */
export const ModelCardSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type ModelCardSortOrder = (typeof ModelCardSortOrder)[keyof typeof ModelCardSortOrder];

/**
 * @public
 * @enum
 */
export const ModelCardVersionSortBy = {
  VERSION: "Version",
} as const;
/**
 * @public
 */
export type ModelCardVersionSortBy = (typeof ModelCardVersionSortBy)[keyof typeof ModelCardVersionSortBy];

/**
 * @public
 * @enum
 */
export const ModelMetadataFilterType = {
  DOMAIN: "Domain",
  FRAMEWORK: "Framework",
  FRAMEWORKVERSION: "FrameworkVersion",
  TASK: "Task",
} as const;
/**
 * @public
 */
export type ModelMetadataFilterType = (typeof ModelMetadataFilterType)[keyof typeof ModelMetadataFilterType];

/**
 * @public
 * @enum
 */
export const ModelPackageGroupSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type ModelPackageGroupSortBy = (typeof ModelPackageGroupSortBy)[keyof typeof ModelPackageGroupSortBy];

/**
 * @public
 * @enum
 */
export const ModelPackageType = {
  BOTH: "Both",
  UNVERSIONED: "Unversioned",
  VERSIONED: "Versioned",
} as const;
/**
 * @public
 */
export type ModelPackageType = (typeof ModelPackageType)[keyof typeof ModelPackageType];

/**
 * @public
 * @enum
 */
export const ModelPackageSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type ModelPackageSortBy = (typeof ModelPackageSortBy)[keyof typeof ModelPackageSortBy];

/**
 * @public
 * @enum
 */
export const ModelSortKey = {
  CreationTime: "CreationTime",
  Name: "Name",
} as const;
/**
 * @public
 */
export type ModelSortKey = (typeof ModelSortKey)[keyof typeof ModelSortKey];

/**
 * @public
 * @enum
 */
export const MonitoringAlertHistorySortKey = {
  CreationTime: "CreationTime",
  Status: "Status",
} as const;
/**
 * @public
 */
export type MonitoringAlertHistorySortKey =
  (typeof MonitoringAlertHistorySortKey)[keyof typeof MonitoringAlertHistorySortKey];

/**
 * @public
 * @enum
 */
export const MonitoringAlertStatus = {
  IN_ALERT: "InAlert",
  OK: "OK",
} as const;
/**
 * @public
 */
export type MonitoringAlertStatus = (typeof MonitoringAlertStatus)[keyof typeof MonitoringAlertStatus];

/**
 * @public
 * @enum
 */
export const MonitoringExecutionSortKey = {
  CREATION_TIME: "CreationTime",
  SCHEDULED_TIME: "ScheduledTime",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type MonitoringExecutionSortKey = (typeof MonitoringExecutionSortKey)[keyof typeof MonitoringExecutionSortKey];

/**
 * @public
 * @enum
 */
export const MonitoringScheduleSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type MonitoringScheduleSortKey = (typeof MonitoringScheduleSortKey)[keyof typeof MonitoringScheduleSortKey];

/**
 * @public
 * @enum
 */
export const NotebookInstanceLifecycleConfigSortKey = {
  CREATION_TIME: "CreationTime",
  LAST_MODIFIED_TIME: "LastModifiedTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type NotebookInstanceLifecycleConfigSortKey =
  (typeof NotebookInstanceLifecycleConfigSortKey)[keyof typeof NotebookInstanceLifecycleConfigSortKey];

/**
 * @public
 * @enum
 */
export const NotebookInstanceLifecycleConfigSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type NotebookInstanceLifecycleConfigSortOrder =
  (typeof NotebookInstanceLifecycleConfigSortOrder)[keyof typeof NotebookInstanceLifecycleConfigSortOrder];

/**
 * @public
 * @enum
 */
export const NotebookInstanceSortKey = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type NotebookInstanceSortKey = (typeof NotebookInstanceSortKey)[keyof typeof NotebookInstanceSortKey];

/**
 * @public
 * @enum
 */
export const NotebookInstanceSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type NotebookInstanceSortOrder = (typeof NotebookInstanceSortOrder)[keyof typeof NotebookInstanceSortOrder];

/**
 * @public
 * @enum
 */
export const ListOptimizationJobsSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type ListOptimizationJobsSortBy = (typeof ListOptimizationJobsSortBy)[keyof typeof ListOptimizationJobsSortBy];

/**
 * @public
 * @enum
 */
export const SortPipelineExecutionsBy = {
  CREATION_TIME: "CreationTime",
  PIPELINE_EXECUTION_ARN: "PipelineExecutionArn",
} as const;
/**
 * @public
 */
export type SortPipelineExecutionsBy = (typeof SortPipelineExecutionsBy)[keyof typeof SortPipelineExecutionsBy];

/**
 * @public
 * @enum
 */
export const StepStatus = {
  EXECUTING: "Executing",
  FAILED: "Failed",
  STARTING: "Starting",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
  SUCCEEDED: "Succeeded",
} as const;
/**
 * @public
 */
export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus];

/**
 * @public
 * @enum
 */
export const SortPipelinesBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type SortPipelinesBy = (typeof SortPipelinesBy)[keyof typeof SortPipelinesBy];

/**
 * @public
 * @enum
 */
export const ProjectSortBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type ProjectSortBy = (typeof ProjectSortBy)[keyof typeof ProjectSortBy];

/**
 * @public
 * @enum
 */
export const ProjectSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type ProjectSortOrder = (typeof ProjectSortOrder)[keyof typeof ProjectSortOrder];

/**
 * @public
 * @enum
 */
export const ResourceCatalogSortBy = {
  CREATION_TIME: "CreationTime",
} as const;
/**
 * @public
 */
export type ResourceCatalogSortBy = (typeof ResourceCatalogSortBy)[keyof typeof ResourceCatalogSortBy];

/**
 * @public
 * @enum
 */
export const ResourceCatalogSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type ResourceCatalogSortOrder = (typeof ResourceCatalogSortOrder)[keyof typeof ResourceCatalogSortOrder];

/**
 * @public
 * @enum
 */
export const SpaceSortKey = {
  CreationTime: "CreationTime",
  LastModifiedTime: "LastModifiedTime",
} as const;
/**
 * @public
 */
export type SpaceSortKey = (typeof SpaceSortKey)[keyof typeof SpaceSortKey];

/**
 * @public
 * @enum
 */
export const StudioLifecycleConfigSortKey = {
  CreationTime: "CreationTime",
  LastModifiedTime: "LastModifiedTime",
  Name: "Name",
} as const;
/**
 * @public
 */
export type StudioLifecycleConfigSortKey =
  (typeof StudioLifecycleConfigSortKey)[keyof typeof StudioLifecycleConfigSortKey];

/**
 * @public
 * @enum
 */
export const TrainingJobSortByOptions = {
  CreationTime: "CreationTime",
  FinalObjectiveMetricValue: "FinalObjectiveMetricValue",
  Name: "Name",
  Status: "Status",
} as const;
/**
 * @public
 */
export type TrainingJobSortByOptions = (typeof TrainingJobSortByOptions)[keyof typeof TrainingJobSortByOptions];

/**
 * @public
 * @enum
 */
export const TrainingPlanFilterName = {
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type TrainingPlanFilterName = (typeof TrainingPlanFilterName)[keyof typeof TrainingPlanFilterName];

/**
 * @public
 * @enum
 */
export const TrainingPlanSortBy = {
  NAME: "TrainingPlanName",
  START_TIME: "StartTime",
  STATUS: "Status",
} as const;
/**
 * @public
 */
export type TrainingPlanSortBy = (typeof TrainingPlanSortBy)[keyof typeof TrainingPlanSortBy];

/**
 * @public
 * @enum
 */
export const TrainingPlanSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type TrainingPlanSortOrder = (typeof TrainingPlanSortOrder)[keyof typeof TrainingPlanSortOrder];

/**
 * @public
 * @enum
 */
export const SortTrialComponentsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type SortTrialComponentsBy = (typeof SortTrialComponentsBy)[keyof typeof SortTrialComponentsBy];

/**
 * @public
 * @enum
 */
export const SortTrialsBy = {
  CREATION_TIME: "CreationTime",
  NAME: "Name",
} as const;
/**
 * @public
 */
export type SortTrialsBy = (typeof SortTrialsBy)[keyof typeof SortTrialsBy];

/**
 * @public
 * @enum
 */
export const UltraServerHealthStatus = {
  IMPAIRED: "Impaired",
  INSUFFICIENT_DATA: "Insufficient-Data",
  OK: "OK",
} as const;
/**
 * @public
 */
export type UltraServerHealthStatus = (typeof UltraServerHealthStatus)[keyof typeof UltraServerHealthStatus];

/**
 * @public
 * @enum
 */
export const UserProfileSortKey = {
  CreationTime: "CreationTime",
  LastModifiedTime: "LastModifiedTime",
} as const;
/**
 * @public
 */
export type UserProfileSortKey = (typeof UserProfileSortKey)[keyof typeof UserProfileSortKey];

/**
 * @public
 * @enum
 */
export const ListWorkforcesSortByOptions = {
  CreateDate: "CreateDate",
  Name: "Name",
} as const;
/**
 * @public
 */
export type ListWorkforcesSortByOptions =
  (typeof ListWorkforcesSortByOptions)[keyof typeof ListWorkforcesSortByOptions];

/**
 * @public
 * @enum
 */
export const ListWorkteamsSortByOptions = {
  CreateDate: "CreateDate",
  Name: "Name",
} as const;
/**
 * @public
 */
export type ListWorkteamsSortByOptions = (typeof ListWorkteamsSortByOptions)[keyof typeof ListWorkteamsSortByOptions];

/**
 * @public
 * @enum
 */
export const ModelVariantAction = {
  PROMOTE: "Promote",
  REMOVE: "Remove",
  RETAIN: "Retain",
} as const;
/**
 * @public
 */
export type ModelVariantAction = (typeof ModelVariantAction)[keyof typeof ModelVariantAction];

/**
 * @public
 * @enum
 */
export const Relation = {
  EQUAL_TO: "EqualTo",
  GREATER_THAN_OR_EQUAL_TO: "GreaterThanOrEqualTo",
} as const;
/**
 * @public
 */
export type Relation = (typeof Relation)[keyof typeof Relation];

/**
 * @public
 * @enum
 */
export const SearchSortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;
/**
 * @public
 */
export type SearchSortOrder = (typeof SearchSortOrder)[keyof typeof SearchSortOrder];

/**
 * @public
 * @enum
 */
export const VariantPropertyType = {
  DataCaptureConfig: "DataCaptureConfig",
  DesiredInstanceCount: "DesiredInstanceCount",
  DesiredWeight: "DesiredWeight",
} as const;
/**
 * @public
 */
export type VariantPropertyType = (typeof VariantPropertyType)[keyof typeof VariantPropertyType];
