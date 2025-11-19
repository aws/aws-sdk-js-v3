// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceptanceType = {
  ACCEPT: "ACCEPT",
  REJECT: "REJECT",
} as const;
/**
 * @public
 */
export type AcceptanceType = (typeof AcceptanceType)[keyof typeof AcceptanceType];

/**
 * @public
 * @enum
 */
export const RoutingStrategyType = {
  SIMPLE: "SIMPLE",
  TERMINAL: "TERMINAL",
} as const;
/**
 * @public
 */
export type RoutingStrategyType = (typeof RoutingStrategyType)[keyof typeof RoutingStrategyType];

/**
 * @public
 * @enum
 */
export const BackfillMode = {
  AUTOMATIC: "AUTOMATIC",
  MANUAL: "MANUAL",
} as const;
/**
 * @public
 */
export type BackfillMode = (typeof BackfillMode)[keyof typeof BackfillMode];

/**
 * @public
 * @enum
 */
export const BalancingStrategy = {
  ON_DEMAND_ONLY: "ON_DEMAND_ONLY",
  SPOT_ONLY: "SPOT_ONLY",
  SPOT_PREFERRED: "SPOT_PREFERRED",
} as const;
/**
 * @public
 */
export type BalancingStrategy = (typeof BalancingStrategy)[keyof typeof BalancingStrategy];

/**
 * @public
 * @enum
 */
export const OperatingSystem = {
  AMAZON_LINUX: "AMAZON_LINUX",
  AMAZON_LINUX_2: "AMAZON_LINUX_2",
  AMAZON_LINUX_2023: "AMAZON_LINUX_2023",
  WINDOWS_2012: "WINDOWS_2012",
  WINDOWS_2016: "WINDOWS_2016",
  WINDOWS_2022: "WINDOWS_2022",
} as const;
/**
 * @public
 */
export type OperatingSystem = (typeof OperatingSystem)[keyof typeof OperatingSystem];

/**
 * @public
 * @enum
 */
export const BuildStatus = {
  FAILED: "FAILED",
  INITIALIZED: "INITIALIZED",
  READY: "READY",
} as const;
/**
 * @public
 */
export type BuildStatus = (typeof BuildStatus)[keyof typeof BuildStatus];

/**
 * @public
 * @enum
 */
export const CertificateType = {
  Disabled: "DISABLED",
  Generated: "GENERATED",
} as const;
/**
 * @public
 */
export type CertificateType = (typeof CertificateType)[keyof typeof CertificateType];

/**
 * @public
 * @enum
 */
export const FilterInstanceStatus = {
  ACTIVE: "ACTIVE",
  DRAINING: "DRAINING",
} as const;
/**
 * @public
 */
export type FilterInstanceStatus = (typeof FilterInstanceStatus)[keyof typeof FilterInstanceStatus];

/**
 * @public
 * @enum
 */
export const GameServerClaimStatus = {
  CLAIMED: "CLAIMED",
} as const;
/**
 * @public
 */
export type GameServerClaimStatus = (typeof GameServerClaimStatus)[keyof typeof GameServerClaimStatus];

/**
 * @public
 * @enum
 */
export const GameServerUtilizationStatus = {
  AVAILABLE: "AVAILABLE",
  UTILIZED: "UTILIZED",
} as const;
/**
 * @public
 */
export type GameServerUtilizationStatus =
  (typeof GameServerUtilizationStatus)[keyof typeof GameServerUtilizationStatus];

/**
 * @public
 * @enum
 */
export const ComparisonOperatorType = {
  GreaterThanOrEqualToThreshold: "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold: "GreaterThanThreshold",
  LessThanOrEqualToThreshold: "LessThanOrEqualToThreshold",
  LessThanThreshold: "LessThanThreshold",
} as const;
/**
 * @public
 */
export type ComparisonOperatorType = (typeof ComparisonOperatorType)[keyof typeof ComparisonOperatorType];

/**
 * @public
 * @enum
 */
export const ComputeStatus = {
  ACTIVE: "ACTIVE",
  IMPAIRED: "IMPAIRED",
  PENDING: "PENDING",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type ComputeStatus = (typeof ComputeStatus)[keyof typeof ComputeStatus];

/**
 * @public
 * @enum
 */
export const EC2InstanceType = {
  c3_2xlarge: "c3.2xlarge",
  c3_4xlarge: "c3.4xlarge",
  c3_8xlarge: "c3.8xlarge",
  c3_large: "c3.large",
  c3_xlarge: "c3.xlarge",
  c4_2xlarge: "c4.2xlarge",
  c4_4xlarge: "c4.4xlarge",
  c4_8xlarge: "c4.8xlarge",
  c4_large: "c4.large",
  c4_xlarge: "c4.xlarge",
  c5_12xlarge: "c5.12xlarge",
  c5_18xlarge: "c5.18xlarge",
  c5_24xlarge: "c5.24xlarge",
  c5_2xlarge: "c5.2xlarge",
  c5_4xlarge: "c5.4xlarge",
  c5_9xlarge: "c5.9xlarge",
  c5_large: "c5.large",
  c5_xlarge: "c5.xlarge",
  c5a_12xlarge: "c5a.12xlarge",
  c5a_16xlarge: "c5a.16xlarge",
  c5a_24xlarge: "c5a.24xlarge",
  c5a_2xlarge: "c5a.2xlarge",
  c5a_4xlarge: "c5a.4xlarge",
  c5a_8xlarge: "c5a.8xlarge",
  c5a_large: "c5a.large",
  c5a_xlarge: "c5a.xlarge",
  c5ad_12xlarge: "c5ad.12xlarge",
  c5ad_16xlarge: "c5ad.16xlarge",
  c5ad_24xlarge: "c5ad.24xlarge",
  c5ad_2xlarge: "c5ad.2xlarge",
  c5ad_4xlarge: "c5ad.4xlarge",
  c5ad_8xlarge: "c5ad.8xlarge",
  c5ad_large: "c5ad.large",
  c5ad_xlarge: "c5ad.xlarge",
  c5d_12xlarge: "c5d.12xlarge",
  c5d_18xlarge: "c5d.18xlarge",
  c5d_24xlarge: "c5d.24xlarge",
  c5d_2xlarge: "c5d.2xlarge",
  c5d_4xlarge: "c5d.4xlarge",
  c5d_9xlarge: "c5d.9xlarge",
  c5d_large: "c5d.large",
  c5d_xlarge: "c5d.xlarge",
  c5n_18xlarge: "c5n.18xlarge",
  c5n_2xlarge: "c5n.2xlarge",
  c5n_4xlarge: "c5n.4xlarge",
  c5n_9xlarge: "c5n.9xlarge",
  c5n_large: "c5n.large",
  c5n_xlarge: "c5n.xlarge",
  c6a_12xlarge: "c6a.12xlarge",
  c6a_16xlarge: "c6a.16xlarge",
  c6a_24xlarge: "c6a.24xlarge",
  c6a_2xlarge: "c6a.2xlarge",
  c6a_32xlarge: "c6a.32xlarge",
  c6a_48xlarge: "c6a.48xlarge",
  c6a_4xlarge: "c6a.4xlarge",
  c6a_8xlarge: "c6a.8xlarge",
  c6a_large: "c6a.large",
  c6a_xlarge: "c6a.xlarge",
  c6g_12xlarge: "c6g.12xlarge",
  c6g_16xlarge: "c6g.16xlarge",
  c6g_2xlarge: "c6g.2xlarge",
  c6g_4xlarge: "c6g.4xlarge",
  c6g_8xlarge: "c6g.8xlarge",
  c6g_large: "c6g.large",
  c6g_medium: "c6g.medium",
  c6g_xlarge: "c6g.xlarge",
  c6gd_12xlarge: "c6gd.12xlarge",
  c6gd_16xlarge: "c6gd.16xlarge",
  c6gd_2xlarge: "c6gd.2xlarge",
  c6gd_4xlarge: "c6gd.4xlarge",
  c6gd_8xlarge: "c6gd.8xlarge",
  c6gd_large: "c6gd.large",
  c6gd_medium: "c6gd.medium",
  c6gd_xlarge: "c6gd.xlarge",
  c6gn_12xlarge: "c6gn.12xlarge",
  c6gn_16xlarge: "c6gn.16xlarge",
  c6gn_2xlarge: "c6gn.2xlarge",
  c6gn_4xlarge: "c6gn.4xlarge",
  c6gn_8xlarge: "c6gn.8xlarge",
  c6gn_large: "c6gn.large",
  c6gn_medium: "c6gn.medium",
  c6gn_xlarge: "c6gn.xlarge",
  c6i_12xlarge: "c6i.12xlarge",
  c6i_16xlarge: "c6i.16xlarge",
  c6i_24xlarge: "c6i.24xlarge",
  c6i_2xlarge: "c6i.2xlarge",
  c6i_32xlarge: "c6i.32xlarge",
  c6i_4xlarge: "c6i.4xlarge",
  c6i_8xlarge: "c6i.8xlarge",
  c6i_large: "c6i.large",
  c6i_xlarge: "c6i.xlarge",
  c6id_12xlarge: "c6id.12xlarge",
  c6id_16xlarge: "c6id.16xlarge",
  c6id_24xlarge: "c6id.24xlarge",
  c6id_2xlarge: "c6id.2xlarge",
  c6id_32xlarge: "c6id.32xlarge",
  c6id_4xlarge: "c6id.4xlarge",
  c6id_8xlarge: "c6id.8xlarge",
  c6id_large: "c6id.large",
  c6id_xlarge: "c6id.xlarge",
  c6in_12xlarge: "c6in.12xlarge",
  c6in_16xlarge: "c6in.16xlarge",
  c6in_24xlarge: "c6in.24xlarge",
  c6in_2xlarge: "c6in.2xlarge",
  c6in_32xlarge: "c6in.32xlarge",
  c6in_4xlarge: "c6in.4xlarge",
  c6in_8xlarge: "c6in.8xlarge",
  c6in_large: "c6in.large",
  c6in_xlarge: "c6in.xlarge",
  c7a_12xlarge: "c7a.12xlarge",
  c7a_16xlarge: "c7a.16xlarge",
  c7a_24xlarge: "c7a.24xlarge",
  c7a_2xlarge: "c7a.2xlarge",
  c7a_32xlarge: "c7a.32xlarge",
  c7a_48xlarge: "c7a.48xlarge",
  c7a_4xlarge: "c7a.4xlarge",
  c7a_8xlarge: "c7a.8xlarge",
  c7a_large: "c7a.large",
  c7a_medium: "c7a.medium",
  c7a_xlarge: "c7a.xlarge",
  c7g_12xlarge: "c7g.12xlarge",
  c7g_16xlarge: "c7g.16xlarge",
  c7g_2xlarge: "c7g.2xlarge",
  c7g_4xlarge: "c7g.4xlarge",
  c7g_8xlarge: "c7g.8xlarge",
  c7g_large: "c7g.large",
  c7g_medium: "c7g.medium",
  c7g_xlarge: "c7g.xlarge",
  c7gd_12xlarge: "c7gd.12xlarge",
  c7gd_16xlarge: "c7gd.16xlarge",
  c7gd_2xlarge: "c7gd.2xlarge",
  c7gd_4xlarge: "c7gd.4xlarge",
  c7gd_8xlarge: "c7gd.8xlarge",
  c7gd_large: "c7gd.large",
  c7gd_medium: "c7gd.medium",
  c7gd_xlarge: "c7gd.xlarge",
  c7gn_12xlarge: "c7gn.12xlarge",
  c7gn_16xlarge: "c7gn.16xlarge",
  c7gn_2xlarge: "c7gn.2xlarge",
  c7gn_4xlarge: "c7gn.4xlarge",
  c7gn_8xlarge: "c7gn.8xlarge",
  c7gn_large: "c7gn.large",
  c7gn_medium: "c7gn.medium",
  c7gn_xlarge: "c7gn.xlarge",
  c7i_12xlarge: "c7i.12xlarge",
  c7i_16xlarge: "c7i.16xlarge",
  c7i_24xlarge: "c7i.24xlarge",
  c7i_2xlarge: "c7i.2xlarge",
  c7i_48xlarge: "c7i.48xlarge",
  c7i_4xlarge: "c7i.4xlarge",
  c7i_8xlarge: "c7i.8xlarge",
  c7i_large: "c7i.large",
  c7i_xlarge: "c7i.xlarge",
  c8g_12xlarge: "c8g.12xlarge",
  c8g_16xlarge: "c8g.16xlarge",
  c8g_24xlarge: "c8g.24xlarge",
  c8g_2xlarge: "c8g.2xlarge",
  c8g_48xlarge: "c8g.48xlarge",
  c8g_4xlarge: "c8g.4xlarge",
  c8g_8xlarge: "c8g.8xlarge",
  c8g_large: "c8g.large",
  c8g_medium: "c8g.medium",
  c8g_xlarge: "c8g.xlarge",
  g5g_16xlarge: "g5g.16xlarge",
  g5g_2xlarge: "g5g.2xlarge",
  g5g_4xlarge: "g5g.4xlarge",
  g5g_8xlarge: "g5g.8xlarge",
  g5g_xlarge: "g5g.xlarge",
  m3_2xlarge: "m3.2xlarge",
  m3_large: "m3.large",
  m3_medium: "m3.medium",
  m3_xlarge: "m3.xlarge",
  m4_10xlarge: "m4.10xlarge",
  m4_16xlarge: "m4.16xlarge",
  m4_2xlarge: "m4.2xlarge",
  m4_4xlarge: "m4.4xlarge",
  m4_large: "m4.large",
  m4_xlarge: "m4.xlarge",
  m5_12xlarge: "m5.12xlarge",
  m5_16xlarge: "m5.16xlarge",
  m5_24xlarge: "m5.24xlarge",
  m5_2xlarge: "m5.2xlarge",
  m5_4xlarge: "m5.4xlarge",
  m5_8xlarge: "m5.8xlarge",
  m5_large: "m5.large",
  m5_xlarge: "m5.xlarge",
  m5a_12xlarge: "m5a.12xlarge",
  m5a_16xlarge: "m5a.16xlarge",
  m5a_24xlarge: "m5a.24xlarge",
  m5a_2xlarge: "m5a.2xlarge",
  m5a_4xlarge: "m5a.4xlarge",
  m5a_8xlarge: "m5a.8xlarge",
  m5a_large: "m5a.large",
  m5a_xlarge: "m5a.xlarge",
  m5ad_12xlarge: "m5ad.12xlarge",
  m5ad_16xlarge: "m5ad.16xlarge",
  m5ad_24xlarge: "m5ad.24xlarge",
  m5ad_2xlarge: "m5ad.2xlarge",
  m5ad_4xlarge: "m5ad.4xlarge",
  m5ad_8xlarge: "m5ad.8xlarge",
  m5ad_large: "m5ad.large",
  m5ad_xlarge: "m5ad.xlarge",
  m5d_12xlarge: "m5d.12xlarge",
  m5d_16xlarge: "m5d.16xlarge",
  m5d_24xlarge: "m5d.24xlarge",
  m5d_2xlarge: "m5d.2xlarge",
  m5d_4xlarge: "m5d.4xlarge",
  m5d_8xlarge: "m5d.8xlarge",
  m5d_large: "m5d.large",
  m5d_xlarge: "m5d.xlarge",
  m5dn_12xlarge: "m5dn.12xlarge",
  m5dn_16xlarge: "m5dn.16xlarge",
  m5dn_24xlarge: "m5dn.24xlarge",
  m5dn_2xlarge: "m5dn.2xlarge",
  m5dn_4xlarge: "m5dn.4xlarge",
  m5dn_8xlarge: "m5dn.8xlarge",
  m5dn_large: "m5dn.large",
  m5dn_xlarge: "m5dn.xlarge",
  m5n_12xlarge: "m5n.12xlarge",
  m5n_16xlarge: "m5n.16xlarge",
  m5n_24xlarge: "m5n.24xlarge",
  m5n_2xlarge: "m5n.2xlarge",
  m5n_4xlarge: "m5n.4xlarge",
  m5n_8xlarge: "m5n.8xlarge",
  m5n_large: "m5n.large",
  m5n_xlarge: "m5n.xlarge",
  m6a_12xlarge: "m6a.12xlarge",
  m6a_16xlarge: "m6a.16xlarge",
  m6a_24xlarge: "m6a.24xlarge",
  m6a_2xlarge: "m6a.2xlarge",
  m6a_32xlarge: "m6a.32xlarge",
  m6a_48xlarge: "m6a.48xlarge",
  m6a_4xlarge: "m6a.4xlarge",
  m6a_8xlarge: "m6a.8xlarge",
  m6a_large: "m6a.large",
  m6a_xlarge: "m6a.xlarge",
  m6g_12xlarge: "m6g.12xlarge",
  m6g_16xlarge: "m6g.16xlarge",
  m6g_2xlarge: "m6g.2xlarge",
  m6g_4xlarge: "m6g.4xlarge",
  m6g_8xlarge: "m6g.8xlarge",
  m6g_large: "m6g.large",
  m6g_medium: "m6g.medium",
  m6g_xlarge: "m6g.xlarge",
  m6gd_12xlarge: "m6gd.12xlarge",
  m6gd_16xlarge: "m6gd.16xlarge",
  m6gd_2xlarge: "m6gd.2xlarge",
  m6gd_4xlarge: "m6gd.4xlarge",
  m6gd_8xlarge: "m6gd.8xlarge",
  m6gd_large: "m6gd.large",
  m6gd_medium: "m6gd.medium",
  m6gd_xlarge: "m6gd.xlarge",
  m6i_12xlarge: "m6i.12xlarge",
  m6i_16xlarge: "m6i.16xlarge",
  m6i_24xlarge: "m6i.24xlarge",
  m6i_2xlarge: "m6i.2xlarge",
  m6i_32xlarge: "m6i.32xlarge",
  m6i_4xlarge: "m6i.4xlarge",
  m6i_8xlarge: "m6i.8xlarge",
  m6i_large: "m6i.large",
  m6i_xlarge: "m6i.xlarge",
  m6id_12xlarge: "m6id.12xlarge",
  m6id_16xlarge: "m6id.16xlarge",
  m6id_24xlarge: "m6id.24xlarge",
  m6id_2xlarge: "m6id.2xlarge",
  m6id_32xlarge: "m6id.32xlarge",
  m6id_4xlarge: "m6id.4xlarge",
  m6id_8xlarge: "m6id.8xlarge",
  m6id_large: "m6id.large",
  m6id_xlarge: "m6id.xlarge",
  m6idn_12xlarge: "m6idn.12xlarge",
  m6idn_16xlarge: "m6idn.16xlarge",
  m6idn_24xlarge: "m6idn.24xlarge",
  m6idn_2xlarge: "m6idn.2xlarge",
  m6idn_32xlarge: "m6idn.32xlarge",
  m6idn_4xlarge: "m6idn.4xlarge",
  m6idn_8xlarge: "m6idn.8xlarge",
  m6idn_large: "m6idn.large",
  m6idn_xlarge: "m6idn.xlarge",
  m6in_12xlarge: "m6in.12xlarge",
  m6in_16xlarge: "m6in.16xlarge",
  m6in_24xlarge: "m6in.24xlarge",
  m6in_2xlarge: "m6in.2xlarge",
  m6in_32xlarge: "m6in.32xlarge",
  m6in_4xlarge: "m6in.4xlarge",
  m6in_8xlarge: "m6in.8xlarge",
  m6in_large: "m6in.large",
  m6in_xlarge: "m6in.xlarge",
  m7a_12xlarge: "m7a.12xlarge",
  m7a_16xlarge: "m7a.16xlarge",
  m7a_24xlarge: "m7a.24xlarge",
  m7a_2xlarge: "m7a.2xlarge",
  m7a_32xlarge: "m7a.32xlarge",
  m7a_48xlarge: "m7a.48xlarge",
  m7a_4xlarge: "m7a.4xlarge",
  m7a_8xlarge: "m7a.8xlarge",
  m7a_large: "m7a.large",
  m7a_medium: "m7a.medium",
  m7a_xlarge: "m7a.xlarge",
  m7g_12xlarge: "m7g.12xlarge",
  m7g_16xlarge: "m7g.16xlarge",
  m7g_2xlarge: "m7g.2xlarge",
  m7g_4xlarge: "m7g.4xlarge",
  m7g_8xlarge: "m7g.8xlarge",
  m7g_large: "m7g.large",
  m7g_medium: "m7g.medium",
  m7g_xlarge: "m7g.xlarge",
  m7gd_12xlarge: "m7gd.12xlarge",
  m7gd_16xlarge: "m7gd.16xlarge",
  m7gd_2xlarge: "m7gd.2xlarge",
  m7gd_4xlarge: "m7gd.4xlarge",
  m7gd_8xlarge: "m7gd.8xlarge",
  m7gd_large: "m7gd.large",
  m7gd_medium: "m7gd.medium",
  m7gd_xlarge: "m7gd.xlarge",
  m7i_12xlarge: "m7i.12xlarge",
  m7i_16xlarge: "m7i.16xlarge",
  m7i_24xlarge: "m7i.24xlarge",
  m7i_2xlarge: "m7i.2xlarge",
  m7i_48xlarge: "m7i.48xlarge",
  m7i_4xlarge: "m7i.4xlarge",
  m7i_8xlarge: "m7i.8xlarge",
  m7i_large: "m7i.large",
  m7i_xlarge: "m7i.xlarge",
  m8g_12xlarge: "m8g.12xlarge",
  m8g_16xlarge: "m8g.16xlarge",
  m8g_24xlarge: "m8g.24xlarge",
  m8g_2xlarge: "m8g.2xlarge",
  m8g_48xlarge: "m8g.48xlarge",
  m8g_4xlarge: "m8g.4xlarge",
  m8g_8xlarge: "m8g.8xlarge",
  m8g_large: "m8g.large",
  m8g_medium: "m8g.medium",
  m8g_xlarge: "m8g.xlarge",
  r3_2xlarge: "r3.2xlarge",
  r3_4xlarge: "r3.4xlarge",
  r3_8xlarge: "r3.8xlarge",
  r3_large: "r3.large",
  r3_xlarge: "r3.xlarge",
  r4_16xlarge: "r4.16xlarge",
  r4_2xlarge: "r4.2xlarge",
  r4_4xlarge: "r4.4xlarge",
  r4_8xlarge: "r4.8xlarge",
  r4_large: "r4.large",
  r4_xlarge: "r4.xlarge",
  r5_12xlarge: "r5.12xlarge",
  r5_16xlarge: "r5.16xlarge",
  r5_24xlarge: "r5.24xlarge",
  r5_2xlarge: "r5.2xlarge",
  r5_4xlarge: "r5.4xlarge",
  r5_8xlarge: "r5.8xlarge",
  r5_large: "r5.large",
  r5_xlarge: "r5.xlarge",
  r5a_12xlarge: "r5a.12xlarge",
  r5a_16xlarge: "r5a.16xlarge",
  r5a_24xlarge: "r5a.24xlarge",
  r5a_2xlarge: "r5a.2xlarge",
  r5a_4xlarge: "r5a.4xlarge",
  r5a_8xlarge: "r5a.8xlarge",
  r5a_large: "r5a.large",
  r5a_xlarge: "r5a.xlarge",
  r5ad_12xlarge: "r5ad.12xlarge",
  r5ad_16xlarge: "r5ad.16xlarge",
  r5ad_24xlarge: "r5ad.24xlarge",
  r5ad_2xlarge: "r5ad.2xlarge",
  r5ad_4xlarge: "r5ad.4xlarge",
  r5ad_8xlarge: "r5ad.8xlarge",
  r5ad_large: "r5ad.large",
  r5ad_xlarge: "r5ad.xlarge",
  r5d_12xlarge: "r5d.12xlarge",
  r5d_16xlarge: "r5d.16xlarge",
  r5d_24xlarge: "r5d.24xlarge",
  r5d_2xlarge: "r5d.2xlarge",
  r5d_4xlarge: "r5d.4xlarge",
  r5d_8xlarge: "r5d.8xlarge",
  r5d_large: "r5d.large",
  r5d_xlarge: "r5d.xlarge",
  r5dn_12xlarge: "r5dn.12xlarge",
  r5dn_16xlarge: "r5dn.16xlarge",
  r5dn_24xlarge: "r5dn.24xlarge",
  r5dn_2xlarge: "r5dn.2xlarge",
  r5dn_4xlarge: "r5dn.4xlarge",
  r5dn_8xlarge: "r5dn.8xlarge",
  r5dn_large: "r5dn.large",
  r5dn_xlarge: "r5dn.xlarge",
  r5n_12xlarge: "r5n.12xlarge",
  r5n_16xlarge: "r5n.16xlarge",
  r5n_24xlarge: "r5n.24xlarge",
  r5n_2xlarge: "r5n.2xlarge",
  r5n_4xlarge: "r5n.4xlarge",
  r5n_8xlarge: "r5n.8xlarge",
  r5n_large: "r5n.large",
  r5n_xlarge: "r5n.xlarge",
  r6a_12xlarge: "r6a.12xlarge",
  r6a_16xlarge: "r6a.16xlarge",
  r6a_24xlarge: "r6a.24xlarge",
  r6a_2xlarge: "r6a.2xlarge",
  r6a_32xlarge: "r6a.32xlarge",
  r6a_48xlarge: "r6a.48xlarge",
  r6a_4xlarge: "r6a.4xlarge",
  r6a_8xlarge: "r6a.8xlarge",
  r6a_large: "r6a.large",
  r6a_xlarge: "r6a.xlarge",
  r6g_12xlarge: "r6g.12xlarge",
  r6g_16xlarge: "r6g.16xlarge",
  r6g_2xlarge: "r6g.2xlarge",
  r6g_4xlarge: "r6g.4xlarge",
  r6g_8xlarge: "r6g.8xlarge",
  r6g_large: "r6g.large",
  r6g_medium: "r6g.medium",
  r6g_xlarge: "r6g.xlarge",
  r6gd_12xlarge: "r6gd.12xlarge",
  r6gd_16xlarge: "r6gd.16xlarge",
  r6gd_2xlarge: "r6gd.2xlarge",
  r6gd_4xlarge: "r6gd.4xlarge",
  r6gd_8xlarge: "r6gd.8xlarge",
  r6gd_large: "r6gd.large",
  r6gd_medium: "r6gd.medium",
  r6gd_xlarge: "r6gd.xlarge",
  r6i_12xlarge: "r6i.12xlarge",
  r6i_16xlarge: "r6i.16xlarge",
  r6i_24xlarge: "r6i.24xlarge",
  r6i_2xlarge: "r6i.2xlarge",
  r6i_32xlarge: "r6i.32xlarge",
  r6i_4xlarge: "r6i.4xlarge",
  r6i_8xlarge: "r6i.8xlarge",
  r6i_large: "r6i.large",
  r6i_xlarge: "r6i.xlarge",
  r6id_12xlarge: "r6id.12xlarge",
  r6id_16xlarge: "r6id.16xlarge",
  r6id_24xlarge: "r6id.24xlarge",
  r6id_2xlarge: "r6id.2xlarge",
  r6id_32xlarge: "r6id.32xlarge",
  r6id_4xlarge: "r6id.4xlarge",
  r6id_8xlarge: "r6id.8xlarge",
  r6id_large: "r6id.large",
  r6id_xlarge: "r6id.xlarge",
  r6idn_12xlarge: "r6idn.12xlarge",
  r6idn_16xlarge: "r6idn.16xlarge",
  r6idn_24xlarge: "r6idn.24xlarge",
  r6idn_2xlarge: "r6idn.2xlarge",
  r6idn_32xlarge: "r6idn.32xlarge",
  r6idn_4xlarge: "r6idn.4xlarge",
  r6idn_8xlarge: "r6idn.8xlarge",
  r6idn_large: "r6idn.large",
  r6idn_xlarge: "r6idn.xlarge",
  r6in_12xlarge: "r6in.12xlarge",
  r6in_16xlarge: "r6in.16xlarge",
  r6in_24xlarge: "r6in.24xlarge",
  r6in_2xlarge: "r6in.2xlarge",
  r6in_32xlarge: "r6in.32xlarge",
  r6in_4xlarge: "r6in.4xlarge",
  r6in_8xlarge: "r6in.8xlarge",
  r6in_large: "r6in.large",
  r6in_xlarge: "r6in.xlarge",
  r7a_12xlarge: "r7a.12xlarge",
  r7a_16xlarge: "r7a.16xlarge",
  r7a_24xlarge: "r7a.24xlarge",
  r7a_2xlarge: "r7a.2xlarge",
  r7a_32xlarge: "r7a.32xlarge",
  r7a_48xlarge: "r7a.48xlarge",
  r7a_4xlarge: "r7a.4xlarge",
  r7a_8xlarge: "r7a.8xlarge",
  r7a_large: "r7a.large",
  r7a_medium: "r7a.medium",
  r7a_xlarge: "r7a.xlarge",
  r7g_12xlarge: "r7g.12xlarge",
  r7g_16xlarge: "r7g.16xlarge",
  r7g_2xlarge: "r7g.2xlarge",
  r7g_4xlarge: "r7g.4xlarge",
  r7g_8xlarge: "r7g.8xlarge",
  r7g_large: "r7g.large",
  r7g_medium: "r7g.medium",
  r7g_xlarge: "r7g.xlarge",
  r7gd_12xlarge: "r7gd.12xlarge",
  r7gd_16xlarge: "r7gd.16xlarge",
  r7gd_2xlarge: "r7gd.2xlarge",
  r7gd_4xlarge: "r7gd.4xlarge",
  r7gd_8xlarge: "r7gd.8xlarge",
  r7gd_large: "r7gd.large",
  r7gd_medium: "r7gd.medium",
  r7gd_xlarge: "r7gd.xlarge",
  r7i_12xlarge: "r7i.12xlarge",
  r7i_16xlarge: "r7i.16xlarge",
  r7i_24xlarge: "r7i.24xlarge",
  r7i_2xlarge: "r7i.2xlarge",
  r7i_48xlarge: "r7i.48xlarge",
  r7i_4xlarge: "r7i.4xlarge",
  r7i_8xlarge: "r7i.8xlarge",
  r7i_large: "r7i.large",
  r7i_xlarge: "r7i.xlarge",
  r8g_12xlarge: "r8g.12xlarge",
  r8g_16xlarge: "r8g.16xlarge",
  r8g_24xlarge: "r8g.24xlarge",
  r8g_2xlarge: "r8g.2xlarge",
  r8g_48xlarge: "r8g.48xlarge",
  r8g_4xlarge: "r8g.4xlarge",
  r8g_8xlarge: "r8g.8xlarge",
  r8g_large: "r8g.large",
  r8g_medium: "r8g.medium",
  r8g_xlarge: "r8g.xlarge",
  t2_large: "t2.large",
  t2_medium: "t2.medium",
  t2_micro: "t2.micro",
  t2_small: "t2.small",
} as const;
/**
 * @public
 */
export type EC2InstanceType = (typeof EC2InstanceType)[keyof typeof EC2InstanceType];

/**
 * @public
 * @enum
 */
export const ComputeType = {
  ANYWHERE: "ANYWHERE",
  EC2: "EC2",
} as const;
/**
 * @public
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

/**
 * @public
 * @enum
 */
export const ContainerDependencyCondition = {
  COMPLETE: "COMPLETE",
  HEALTHY: "HEALTHY",
  START: "START",
  SUCCESS: "SUCCESS",
} as const;
/**
 * @public
 */
export type ContainerDependencyCondition =
  (typeof ContainerDependencyCondition)[keyof typeof ContainerDependencyCondition];

/**
 * @public
 * @enum
 */
export const ContainerFleetBillingType = {
  ON_DEMAND: "ON_DEMAND",
  SPOT: "SPOT",
} as const;
/**
 * @public
 */
export type ContainerFleetBillingType = (typeof ContainerFleetBillingType)[keyof typeof ContainerFleetBillingType];

/**
 * @public
 * @enum
 */
export const IpProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;
/**
 * @public
 */
export type IpProtocol = (typeof IpProtocol)[keyof typeof IpProtocol];

/**
 * @public
 * @enum
 */
export const ContainerFleetLocationStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  PENDING: "PENDING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ContainerFleetLocationStatus =
  (typeof ContainerFleetLocationStatus)[keyof typeof ContainerFleetLocationStatus];

/**
 * @public
 * @enum
 */
export const LogDestination = {
  CLOUDWATCH: "CLOUDWATCH",
  NONE: "NONE",
  S3: "S3",
} as const;
/**
 * @public
 */
export type LogDestination = (typeof LogDestination)[keyof typeof LogDestination];

/**
 * @public
 * @enum
 */
export const ProtectionPolicy = {
  FullProtection: "FullProtection",
  NoProtection: "NoProtection",
} as const;
/**
 * @public
 */
export type ProtectionPolicy = (typeof ProtectionPolicy)[keyof typeof ProtectionPolicy];

/**
 * @public
 * @enum
 */
export const ContainerFleetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  CREATED: "CREATED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  PENDING: "PENDING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ContainerFleetStatus = (typeof ContainerFleetStatus)[keyof typeof ContainerFleetStatus];

/**
 * @public
 * @enum
 */
export const ContainerFleetRemoveAttribute = {
  PER_INSTANCE_CONTAINER_GROUP_DEFINITION: "PER_INSTANCE_CONTAINER_GROUP_DEFINITION",
} as const;
/**
 * @public
 */
export type ContainerFleetRemoveAttribute =
  (typeof ContainerFleetRemoveAttribute)[keyof typeof ContainerFleetRemoveAttribute];

/**
 * @public
 * @enum
 */
export const ContainerGroupType = {
  GAME_SERVER: "GAME_SERVER",
  PER_INSTANCE: "PER_INSTANCE",
} as const;
/**
 * @public
 */
export type ContainerGroupType = (typeof ContainerGroupType)[keyof typeof ContainerGroupType];

/**
 * @public
 * @enum
 */
export const ContainerMountPointAccessLevel = {
  READ_AND_WRITE: "READ_AND_WRITE",
  READ_ONLY: "READ_ONLY",
} as const;
/**
 * @public
 */
export type ContainerMountPointAccessLevel =
  (typeof ContainerMountPointAccessLevel)[keyof typeof ContainerMountPointAccessLevel];

/**
 * @public
 * @enum
 */
export const ContainerOperatingSystem = {
  AMAZON_LINUX_2023: "AMAZON_LINUX_2023",
} as const;
/**
 * @public
 */
export type ContainerOperatingSystem = (typeof ContainerOperatingSystem)[keyof typeof ContainerOperatingSystem];

/**
 * @public
 * @enum
 */
export const ContainerGroupDefinitionStatus = {
  COPYING: "COPYING",
  FAILED: "FAILED",
  READY: "READY",
} as const;
/**
 * @public
 */
export type ContainerGroupDefinitionStatus =
  (typeof ContainerGroupDefinitionStatus)[keyof typeof ContainerGroupDefinitionStatus];

/**
 * @public
 * @enum
 */
export const FleetType = {
  OnDemand: "ON_DEMAND",
  Spot: "SPOT",
} as const;
/**
 * @public
 */
export type FleetType = (typeof FleetType)[keyof typeof FleetType];

/**
 * @public
 * @enum
 */
export const InstanceRoleCredentialsProvider = {
  SHARED_CREDENTIAL_FILE: "SHARED_CREDENTIAL_FILE",
} as const;
/**
 * @public
 */
export type InstanceRoleCredentialsProvider =
  (typeof InstanceRoleCredentialsProvider)[keyof typeof InstanceRoleCredentialsProvider];

/**
 * @public
 * @enum
 */
export const FleetStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  BUILDING: "BUILDING",
  DELETING: "DELETING",
  DOWNLOADING: "DOWNLOADING",
  ERROR: "ERROR",
  NEW: "NEW",
  NOT_FOUND: "NOT_FOUND",
  TERMINATED: "TERMINATED",
  VALIDATING: "VALIDATING",
} as const;
/**
 * @public
 */
export type FleetStatus = (typeof FleetStatus)[keyof typeof FleetStatus];

/**
 * @public
 * @enum
 */
export const FleetAction = {
  AutoScaling: "AUTO_SCALING",
} as const;
/**
 * @public
 */
export type FleetAction = (typeof FleetAction)[keyof typeof FleetAction];

/**
 * @public
 * @enum
 */
export const GameServerProtectionPolicy = {
  FULL_PROTECTION: "FULL_PROTECTION",
  NO_PROTECTION: "NO_PROTECTION",
} as const;
/**
 * @public
 */
export type GameServerProtectionPolicy = (typeof GameServerProtectionPolicy)[keyof typeof GameServerProtectionPolicy];

/**
 * @public
 * @enum
 */
export const GameServerGroupInstanceType = {
  c4_2xlarge: "c4.2xlarge",
  c4_4xlarge: "c4.4xlarge",
  c4_8xlarge: "c4.8xlarge",
  c4_large: "c4.large",
  c4_xlarge: "c4.xlarge",
  c5_12xlarge: "c5.12xlarge",
  c5_18xlarge: "c5.18xlarge",
  c5_24xlarge: "c5.24xlarge",
  c5_2xlarge: "c5.2xlarge",
  c5_4xlarge: "c5.4xlarge",
  c5_9xlarge: "c5.9xlarge",
  c5_large: "c5.large",
  c5_xlarge: "c5.xlarge",
  c5a_12xlarge: "c5a.12xlarge",
  c5a_16xlarge: "c5a.16xlarge",
  c5a_24xlarge: "c5a.24xlarge",
  c5a_2xlarge: "c5a.2xlarge",
  c5a_4xlarge: "c5a.4xlarge",
  c5a_8xlarge: "c5a.8xlarge",
  c5a_large: "c5a.large",
  c5a_xlarge: "c5a.xlarge",
  c6g_12xlarge: "c6g.12xlarge",
  c6g_16xlarge: "c6g.16xlarge",
  c6g_2xlarge: "c6g.2xlarge",
  c6g_4xlarge: "c6g.4xlarge",
  c6g_8xlarge: "c6g.8xlarge",
  c6g_large: "c6g.large",
  c6g_medium: "c6g.medium",
  c6g_xlarge: "c6g.xlarge",
  m4_10xlarge: "m4.10xlarge",
  m4_2xlarge: "m4.2xlarge",
  m4_4xlarge: "m4.4xlarge",
  m4_large: "m4.large",
  m4_xlarge: "m4.xlarge",
  m5_12xlarge: "m5.12xlarge",
  m5_16xlarge: "m5.16xlarge",
  m5_24xlarge: "m5.24xlarge",
  m5_2xlarge: "m5.2xlarge",
  m5_4xlarge: "m5.4xlarge",
  m5_8xlarge: "m5.8xlarge",
  m5_large: "m5.large",
  m5_xlarge: "m5.xlarge",
  m5a_12xlarge: "m5a.12xlarge",
  m5a_16xlarge: "m5a.16xlarge",
  m5a_24xlarge: "m5a.24xlarge",
  m5a_2xlarge: "m5a.2xlarge",
  m5a_4xlarge: "m5a.4xlarge",
  m5a_8xlarge: "m5a.8xlarge",
  m5a_large: "m5a.large",
  m5a_xlarge: "m5a.xlarge",
  m6g_12xlarge: "m6g.12xlarge",
  m6g_16xlarge: "m6g.16xlarge",
  m6g_2xlarge: "m6g.2xlarge",
  m6g_4xlarge: "m6g.4xlarge",
  m6g_8xlarge: "m6g.8xlarge",
  m6g_large: "m6g.large",
  m6g_medium: "m6g.medium",
  m6g_xlarge: "m6g.xlarge",
  r4_16xlarge: "r4.16xlarge",
  r4_2xlarge: "r4.2xlarge",
  r4_4xlarge: "r4.4xlarge",
  r4_8xlarge: "r4.8xlarge",
  r4_large: "r4.large",
  r4_xlarge: "r4.xlarge",
  r5_12xlarge: "r5.12xlarge",
  r5_16xlarge: "r5.16xlarge",
  r5_24xlarge: "r5.24xlarge",
  r5_2xlarge: "r5.2xlarge",
  r5_4xlarge: "r5.4xlarge",
  r5_8xlarge: "r5.8xlarge",
  r5_large: "r5.large",
  r5_xlarge: "r5.xlarge",
  r5a_12xlarge: "r5a.12xlarge",
  r5a_16xlarge: "r5a.16xlarge",
  r5a_24xlarge: "r5a.24xlarge",
  r5a_2xlarge: "r5a.2xlarge",
  r5a_4xlarge: "r5a.4xlarge",
  r5a_8xlarge: "r5a.8xlarge",
  r5a_large: "r5a.large",
  r5a_xlarge: "r5a.xlarge",
  r6g_12xlarge: "r6g.12xlarge",
  r6g_16xlarge: "r6g.16xlarge",
  r6g_2xlarge: "r6g.2xlarge",
  r6g_4xlarge: "r6g.4xlarge",
  r6g_8xlarge: "r6g.8xlarge",
  r6g_large: "r6g.large",
  r6g_medium: "r6g.medium",
  r6g_xlarge: "r6g.xlarge",
} as const;
/**
 * @public
 */
export type GameServerGroupInstanceType =
  (typeof GameServerGroupInstanceType)[keyof typeof GameServerGroupInstanceType];

/**
 * @public
 * @enum
 */
export const GameServerGroupStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETE_SCHEDULED: "DELETE_SCHEDULED",
  DELETING: "DELETING",
  ERROR: "ERROR",
  NEW: "NEW",
} as const;
/**
 * @public
 */
export type GameServerGroupStatus = (typeof GameServerGroupStatus)[keyof typeof GameServerGroupStatus];

/**
 * @public
 * @enum
 */
export const GameServerGroupAction = {
  REPLACE_INSTANCE_TYPES: "REPLACE_INSTANCE_TYPES",
} as const;
/**
 * @public
 */
export type GameServerGroupAction = (typeof GameServerGroupAction)[keyof typeof GameServerGroupAction];

/**
 * @public
 * @enum
 */
export const PlayerSessionCreationPolicy = {
  ACCEPT_ALL: "ACCEPT_ALL",
  DENY_ALL: "DENY_ALL",
} as const;
/**
 * @public
 */
export type PlayerSessionCreationPolicy =
  (typeof PlayerSessionCreationPolicy)[keyof typeof PlayerSessionCreationPolicy];

/**
 * @public
 * @enum
 */
export const GameSessionStatus = {
  ACTIVATING: "ACTIVATING",
  ACTIVE: "ACTIVE",
  ERROR: "ERROR",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type GameSessionStatus = (typeof GameSessionStatus)[keyof typeof GameSessionStatus];

/**
 * @public
 * @enum
 */
export const GameSessionStatusReason = {
  FORCE_TERMINATED: "FORCE_TERMINATED",
  INTERRUPTED: "INTERRUPTED",
  TRIGGERED_ON_PROCESS_TERMINATE: "TRIGGERED_ON_PROCESS_TERMINATE",
} as const;
/**
 * @public
 */
export type GameSessionStatusReason = (typeof GameSessionStatusReason)[keyof typeof GameSessionStatusReason];

/**
 * @public
 * @enum
 */
export const PriorityType = {
  COST: "COST",
  DESTINATION: "DESTINATION",
  LATENCY: "LATENCY",
  LOCATION: "LOCATION",
} as const;
/**
 * @public
 */
export type PriorityType = (typeof PriorityType)[keyof typeof PriorityType];

/**
 * @public
 * @enum
 */
export const FlexMatchMode = {
  STANDALONE: "STANDALONE",
  WITH_QUEUE: "WITH_QUEUE",
} as const;
/**
 * @public
 */
export type FlexMatchMode = (typeof FlexMatchMode)[keyof typeof FlexMatchMode];

/**
 * @public
 * @enum
 */
export const PlayerSessionStatus = {
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
  RESERVED: "RESERVED",
  TIMEDOUT: "TIMEDOUT",
} as const;
/**
 * @public
 */
export type PlayerSessionStatus = (typeof PlayerSessionStatus)[keyof typeof PlayerSessionStatus];

/**
 * @public
 * @enum
 */
export const GameServerGroupDeleteOption = {
  FORCE_DELETE: "FORCE_DELETE",
  RETAIN: "RETAIN",
  SAFE_DELETE: "SAFE_DELETE",
} as const;
/**
 * @public
 */
export type GameServerGroupDeleteOption =
  (typeof GameServerGroupDeleteOption)[keyof typeof GameServerGroupDeleteOption];

/**
 * @public
 * @enum
 */
export const DeploymentImpairmentStrategy = {
  MAINTAIN: "MAINTAIN",
  ROLLBACK: "ROLLBACK",
} as const;
/**
 * @public
 */
export type DeploymentImpairmentStrategy =
  (typeof DeploymentImpairmentStrategy)[keyof typeof DeploymentImpairmentStrategy];

/**
 * @public
 * @enum
 */
export const DeploymentProtectionStrategy = {
  IGNORE_PROTECTION: "IGNORE_PROTECTION",
  WITH_PROTECTION: "WITH_PROTECTION",
} as const;
/**
 * @public
 */
export type DeploymentProtectionStrategy =
  (typeof DeploymentProtectionStrategy)[keyof typeof DeploymentProtectionStrategy];

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  CANCELLED: "CANCELLED",
  COMPLETE: "COMPLETE",
  IMPAIRED: "IMPAIRED",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  ROLLBACK_COMPLETE: "ROLLBACK_COMPLETE",
  ROLLBACK_IN_PROGRESS: "ROLLBACK_IN_PROGRESS",
} as const;
/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * @enum
 */
export const EventCode = {
  COMPUTE_LOG_UPLOAD_FAILED: "COMPUTE_LOG_UPLOAD_FAILED",
  FLEET_ACTIVATION_FAILED: "FLEET_ACTIVATION_FAILED",
  FLEET_ACTIVATION_FAILED_NO_INSTANCES: "FLEET_ACTIVATION_FAILED_NO_INSTANCES",
  FLEET_BINARY_DOWNLOAD_FAILED: "FLEET_BINARY_DOWNLOAD_FAILED",
  FLEET_CREATED: "FLEET_CREATED",
  FLEET_CREATION_COMPLETED_INSTALLER: "FLEET_CREATION_COMPLETED_INSTALLER",
  FLEET_CREATION_EXTRACTING_BUILD: "FLEET_CREATION_EXTRACTING_BUILD",
  FLEET_CREATION_FAILED_INSTALLER: "FLEET_CREATION_FAILED_INSTALLER",
  FLEET_CREATION_RUNNING_INSTALLER: "FLEET_CREATION_RUNNING_INSTALLER",
  FLEET_CREATION_VALIDATING_RUNTIME_CONFIG: "FLEET_CREATION_VALIDATING_RUNTIME_CONFIG",
  FLEET_DELETED: "FLEET_DELETED",
  FLEET_INITIALIZATION_FAILED: "FLEET_INITIALIZATION_FAILED",
  FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED: "FLEET_NEW_GAME_SESSION_PROTECTION_POLICY_UPDATED",
  FLEET_SCALING_EVENT: "FLEET_SCALING_EVENT",
  FLEET_STATE_ACTIVATING: "FLEET_STATE_ACTIVATING",
  FLEET_STATE_ACTIVE: "FLEET_STATE_ACTIVE",
  FLEET_STATE_BUILDING: "FLEET_STATE_BUILDING",
  FLEET_STATE_CREATED: "FLEET_STATE_CREATED",
  FLEET_STATE_CREATING: "FLEET_STATE_CREATING",
  FLEET_STATE_DOWNLOADING: "FLEET_STATE_DOWNLOADING",
  FLEET_STATE_ERROR: "FLEET_STATE_ERROR",
  FLEET_STATE_PENDING: "FLEET_STATE_PENDING",
  FLEET_STATE_UPDATING: "FLEET_STATE_UPDATING",
  FLEET_STATE_VALIDATING: "FLEET_STATE_VALIDATING",
  FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE: "FLEET_VALIDATION_EXECUTABLE_RUNTIME_FAILURE",
  FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND: "FLEET_VALIDATION_LAUNCH_PATH_NOT_FOUND",
  FLEET_VALIDATION_TIMED_OUT: "FLEET_VALIDATION_TIMED_OUT",
  FLEET_VPC_PEERING_DELETED: "FLEET_VPC_PEERING_DELETED",
  FLEET_VPC_PEERING_FAILED: "FLEET_VPC_PEERING_FAILED",
  FLEET_VPC_PEERING_SUCCEEDED: "FLEET_VPC_PEERING_SUCCEEDED",
  GAME_SERVER_CONTAINER_GROUP_CRASHED: "GAME_SERVER_CONTAINER_GROUP_CRASHED",
  GAME_SERVER_CONTAINER_GROUP_REPLACED_UNHEALTHY: "GAME_SERVER_CONTAINER_GROUP_REPLACED_UNHEALTHY",
  GAME_SESSION_ACTIVATION_TIMEOUT: "GAME_SESSION_ACTIVATION_TIMEOUT",
  GENERIC_EVENT: "GENERIC_EVENT",
  INSTANCE_INTERRUPTED: "INSTANCE_INTERRUPTED",
  INSTANCE_RECYCLED: "INSTANCE_RECYCLED",
  INSTANCE_REPLACED_UNHEALTHY: "INSTANCE_REPLACED_UNHEALTHY",
  LOCATION_STATE_ACTIVATING: "LOCATION_STATE_ACTIVATING",
  LOCATION_STATE_ACTIVE: "LOCATION_STATE_ACTIVE",
  LOCATION_STATE_CREATED: "LOCATION_STATE_CREATED",
  LOCATION_STATE_CREATING: "LOCATION_STATE_CREATING",
  LOCATION_STATE_DELETED: "LOCATION_STATE_DELETED",
  LOCATION_STATE_DELETING: "LOCATION_STATE_DELETING",
  LOCATION_STATE_ERROR: "LOCATION_STATE_ERROR",
  LOCATION_STATE_PENDING: "LOCATION_STATE_PENDING",
  LOCATION_STATE_UPDATING: "LOCATION_STATE_UPDATING",
  PER_INSTANCE_CONTAINER_GROUP_CRASHED: "PER_INSTANCE_CONTAINER_GROUP_CRASHED",
  SERVER_PROCESS_CRASHED: "SERVER_PROCESS_CRASHED",
  SERVER_PROCESS_FORCE_TERMINATED: "SERVER_PROCESS_FORCE_TERMINATED",
  SERVER_PROCESS_INVALID_PATH: "SERVER_PROCESS_INVALID_PATH",
  SERVER_PROCESS_MISCONFIGURED_CONTAINER_PORT: "SERVER_PROCESS_MISCONFIGURED_CONTAINER_PORT",
  SERVER_PROCESS_PROCESS_EXIT_TIMEOUT: "SERVER_PROCESS_PROCESS_EXIT_TIMEOUT",
  SERVER_PROCESS_PROCESS_READY_TIMEOUT: "SERVER_PROCESS_PROCESS_READY_TIMEOUT",
  SERVER_PROCESS_SDK_INITIALIZATION_FAILED: "SERVER_PROCESS_SDK_INITIALIZATION_FAILED",
  SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT: "SERVER_PROCESS_SDK_INITIALIZATION_TIMEOUT",
  SERVER_PROCESS_TERMINATED_UNHEALTHY: "SERVER_PROCESS_TERMINATED_UNHEALTHY",
} as const;
/**
 * @public
 */
export type EventCode = (typeof EventCode)[keyof typeof EventCode];

/**
 * @public
 * @enum
 */
export const LocationUpdateStatus = {
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;
/**
 * @public
 */
export type LocationUpdateStatus = (typeof LocationUpdateStatus)[keyof typeof LocationUpdateStatus];

/**
 * @public
 * @enum
 */
export const GameServerInstanceStatus = {
  ACTIVE: "ACTIVE",
  DRAINING: "DRAINING",
  SPOT_TERMINATING: "SPOT_TERMINATING",
} as const;
/**
 * @public
 */
export type GameServerInstanceStatus = (typeof GameServerInstanceStatus)[keyof typeof GameServerInstanceStatus];

/**
 * @public
 * @enum
 */
export const PlacementFallbackStrategy = {
  DEFAULT_AFTER_SINGLE_PASS: "DEFAULT_AFTER_SINGLE_PASS",
  NONE: "NONE",
} as const;
/**
 * @public
 */
export type PlacementFallbackStrategy = (typeof PlacementFallbackStrategy)[keyof typeof PlacementFallbackStrategy];

/**
 * @public
 * @enum
 */
export const GameSessionPlacementState = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  FULFILLED: "FULFILLED",
  PENDING: "PENDING",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type GameSessionPlacementState = (typeof GameSessionPlacementState)[keyof typeof GameSessionPlacementState];

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  ACTIVE: "ACTIVE",
  PENDING: "PENDING",
  TERMINATING: "TERMINATING",
} as const;
/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * @public
 * @enum
 */
export const MatchmakingConfigurationStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  PLACING: "PLACING",
  QUEUED: "QUEUED",
  REQUIRES_ACCEPTANCE: "REQUIRES_ACCEPTANCE",
  SEARCHING: "SEARCHING",
  TIMED_OUT: "TIMED_OUT",
} as const;
/**
 * @public
 */
export type MatchmakingConfigurationStatus =
  (typeof MatchmakingConfigurationStatus)[keyof typeof MatchmakingConfigurationStatus];

/**
 * @public
 * @enum
 */
export const ScalingStatusType = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETE_REQUESTED: "DELETE_REQUESTED",
  DELETING: "DELETING",
  ERROR: "ERROR",
  UPDATE_REQUESTED: "UPDATE_REQUESTED",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type ScalingStatusType = (typeof ScalingStatusType)[keyof typeof ScalingStatusType];

/**
 * @public
 * @enum
 */
export const MetricName = {
  ActivatingGameSessions: "ActivatingGameSessions",
  ActiveGameSessions: "ActiveGameSessions",
  ActiveInstances: "ActiveInstances",
  AvailableGameSessions: "AvailableGameSessions",
  AvailablePlayerSessions: "AvailablePlayerSessions",
  ConcurrentActivatableGameSessions: "ConcurrentActivatableGameSessions",
  CurrentPlayerSessions: "CurrentPlayerSessions",
  IdleInstances: "IdleInstances",
  PercentAvailableGameSessions: "PercentAvailableGameSessions",
  PercentIdleInstances: "PercentIdleInstances",
  QueueDepth: "QueueDepth",
  WaitTime: "WaitTime",
} as const;
/**
 * @public
 */
export type MetricName = (typeof MetricName)[keyof typeof MetricName];

/**
 * @public
 * @enum
 */
export const PolicyType = {
  RuleBased: "RuleBased",
  TargetBased: "TargetBased",
} as const;
/**
 * @public
 */
export type PolicyType = (typeof PolicyType)[keyof typeof PolicyType];

/**
 * @public
 * @enum
 */
export const ScalingAdjustmentType = {
  ChangeInCapacity: "ChangeInCapacity",
  ExactCapacity: "ExactCapacity",
  PercentChangeInCapacity: "PercentChangeInCapacity",
} as const;
/**
 * @public
 */
export type ScalingAdjustmentType = (typeof ScalingAdjustmentType)[keyof typeof ScalingAdjustmentType];

/**
 * @public
 * @enum
 */
export const ListComputeInputStatus = {
  ACTIVE: "ACTIVE",
  IMPAIRED: "IMPAIRED",
} as const;
/**
 * @public
 */
export type ListComputeInputStatus = (typeof ListComputeInputStatus)[keyof typeof ListComputeInputStatus];

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

/**
 * @public
 * @enum
 */
export const LocationFilter = {
  AWS: "AWS",
  CUSTOM: "CUSTOM",
} as const;
/**
 * @public
 */
export type LocationFilter = (typeof LocationFilter)[keyof typeof LocationFilter];

/**
 * @public
 * @enum
 */
export const TerminationMode = {
  FORCE_TERMINATE: "FORCE_TERMINATE",
  TRIGGER_ON_PROCESS_TERMINATE: "TRIGGER_ON_PROCESS_TERMINATE",
} as const;
/**
 * @public
 */
export type TerminationMode = (typeof TerminationMode)[keyof typeof TerminationMode];

/**
 * @public
 * @enum
 */
export const GameServerHealthCheck = {
  HEALTHY: "HEALTHY",
} as const;
/**
 * @public
 */
export type GameServerHealthCheck = (typeof GameServerHealthCheck)[keyof typeof GameServerHealthCheck];
