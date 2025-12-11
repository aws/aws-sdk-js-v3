// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AcceleratedRecoveryStatus = {
  DISABLED: "DISABLED",
  DISABLE_FAILED: "DISABLE_FAILED",
  DISABLING: "DISABLING",
  DISABLING_HOSTED_ZONE_LOCKED: "DISABLING_HOSTED_ZONE_LOCKED",
  ENABLED: "ENABLED",
  ENABLE_FAILED: "ENABLE_FAILED",
  ENABLING: "ENABLING",
  ENABLING_HOSTED_ZONE_LOCKED: "ENABLING_HOSTED_ZONE_LOCKED",
} as const;
/**
 * @public
 */
export type AcceleratedRecoveryStatus = (typeof AcceleratedRecoveryStatus)[keyof typeof AcceleratedRecoveryStatus];

/**
 * @public
 * @enum
 */
export const AccountLimitType = {
  MAX_HEALTH_CHECKS_BY_OWNER: "MAX_HEALTH_CHECKS_BY_OWNER",
  MAX_HOSTED_ZONES_BY_OWNER: "MAX_HOSTED_ZONES_BY_OWNER",
  MAX_REUSABLE_DELEGATION_SETS_BY_OWNER: "MAX_REUSABLE_DELEGATION_SETS_BY_OWNER",
  MAX_TRAFFIC_POLICIES_BY_OWNER: "MAX_TRAFFIC_POLICIES_BY_OWNER",
  MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER: "MAX_TRAFFIC_POLICY_INSTANCES_BY_OWNER",
} as const;
/**
 * @public
 */
export type AccountLimitType = (typeof AccountLimitType)[keyof typeof AccountLimitType];

/**
 * @public
 * @enum
 */
export const ChangeStatus = {
  INSYNC: "INSYNC",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ChangeStatus = (typeof ChangeStatus)[keyof typeof ChangeStatus];

/**
 * @public
 * @enum
 */
export const CloudWatchRegion = {
  af_south_1: "af-south-1",
  ap_east_1: "ap-east-1",
  ap_east_2: "ap-east-2",
  ap_northeast_1: "ap-northeast-1",
  ap_northeast_2: "ap-northeast-2",
  ap_northeast_3: "ap-northeast-3",
  ap_south_1: "ap-south-1",
  ap_south_2: "ap-south-2",
  ap_southeast_1: "ap-southeast-1",
  ap_southeast_2: "ap-southeast-2",
  ap_southeast_3: "ap-southeast-3",
  ap_southeast_4: "ap-southeast-4",
  ap_southeast_5: "ap-southeast-5",
  ap_southeast_6: "ap-southeast-6",
  ap_southeast_7: "ap-southeast-7",
  ca_central_1: "ca-central-1",
  ca_west_1: "ca-west-1",
  cn_north_1: "cn-north-1",
  cn_northwest_1: "cn-northwest-1",
  eu_central_1: "eu-central-1",
  eu_central_2: "eu-central-2",
  eu_isoe_west_1: "eu-isoe-west-1",
  eu_north_1: "eu-north-1",
  eu_south_1: "eu-south-1",
  eu_south_2: "eu-south-2",
  eu_west_1: "eu-west-1",
  eu_west_2: "eu-west-2",
  eu_west_3: "eu-west-3",
  eusc_de_east_1: "eusc-de-east-1",
  il_central_1: "il-central-1",
  me_central_1: "me-central-1",
  me_south_1: "me-south-1",
  mx_central_1: "mx-central-1",
  sa_east_1: "sa-east-1",
  us_east_1: "us-east-1",
  us_east_2: "us-east-2",
  us_gov_east_1: "us-gov-east-1",
  us_gov_west_1: "us-gov-west-1",
  us_iso_east_1: "us-iso-east-1",
  us_iso_west_1: "us-iso-west-1",
  us_isob_east_1: "us-isob-east-1",
  us_isob_west_1: "us-isob-west-1",
  us_isof_east_1: "us-isof-east-1",
  us_isof_south_1: "us-isof-south-1",
  us_west_1: "us-west-1",
  us_west_2: "us-west-2",
} as const;
/**
 * @public
 */
export type CloudWatchRegion = (typeof CloudWatchRegion)[keyof typeof CloudWatchRegion];

/**
 * @public
 * @enum
 */
export const VPCRegion = {
  af_south_1: "af-south-1",
  ap_east_1: "ap-east-1",
  ap_east_2: "ap-east-2",
  ap_northeast_1: "ap-northeast-1",
  ap_northeast_2: "ap-northeast-2",
  ap_northeast_3: "ap-northeast-3",
  ap_south_1: "ap-south-1",
  ap_south_2: "ap-south-2",
  ap_southeast_1: "ap-southeast-1",
  ap_southeast_2: "ap-southeast-2",
  ap_southeast_3: "ap-southeast-3",
  ap_southeast_4: "ap-southeast-4",
  ap_southeast_5: "ap-southeast-5",
  ap_southeast_6: "ap-southeast-6",
  ap_southeast_7: "ap-southeast-7",
  ca_central_1: "ca-central-1",
  ca_west_1: "ca-west-1",
  cn_north_1: "cn-north-1",
  cn_northwest_1: "cn-northwest-1",
  eu_central_1: "eu-central-1",
  eu_central_2: "eu-central-2",
  eu_isoe_west_1: "eu-isoe-west-1",
  eu_north_1: "eu-north-1",
  eu_south_1: "eu-south-1",
  eu_south_2: "eu-south-2",
  eu_west_1: "eu-west-1",
  eu_west_2: "eu-west-2",
  eu_west_3: "eu-west-3",
  eusc_de_east_1: "eusc-de-east-1",
  il_central_1: "il-central-1",
  me_central_1: "me-central-1",
  me_south_1: "me-south-1",
  mx_central_1: "mx-central-1",
  sa_east_1: "sa-east-1",
  us_east_1: "us-east-1",
  us_east_2: "us-east-2",
  us_gov_east_1: "us-gov-east-1",
  us_gov_west_1: "us-gov-west-1",
  us_iso_east_1: "us-iso-east-1",
  us_iso_west_1: "us-iso-west-1",
  us_isob_east_1: "us-isob-east-1",
  us_isob_west_1: "us-isob-west-1",
  us_isof_east_1: "us-isof-east-1",
  us_isof_south_1: "us-isof-south-1",
  us_west_1: "us-west-1",
  us_west_2: "us-west-2",
} as const;
/**
 * @public
 */
export type VPCRegion = (typeof VPCRegion)[keyof typeof VPCRegion];

/**
 * @public
 * @enum
 */
export const CidrCollectionChangeAction = {
  DELETE_IF_EXISTS: "DELETE_IF_EXISTS",
  PUT: "PUT",
} as const;
/**
 * @public
 */
export type CidrCollectionChangeAction = (typeof CidrCollectionChangeAction)[keyof typeof CidrCollectionChangeAction];

/**
 * @public
 * @enum
 */
export const ChangeAction = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPSERT: "UPSERT",
} as const;
/**
 * @public
 */
export type ChangeAction = (typeof ChangeAction)[keyof typeof ChangeAction];

/**
 * @public
 * @enum
 */
export const ResourceRecordSetFailover = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
} as const;
/**
 * @public
 */
export type ResourceRecordSetFailover = (typeof ResourceRecordSetFailover)[keyof typeof ResourceRecordSetFailover];

/**
 * @public
 * @enum
 */
export const ResourceRecordSetRegion = {
  af_south_1: "af-south-1",
  ap_east_1: "ap-east-1",
  ap_east_2: "ap-east-2",
  ap_northeast_1: "ap-northeast-1",
  ap_northeast_2: "ap-northeast-2",
  ap_northeast_3: "ap-northeast-3",
  ap_south_1: "ap-south-1",
  ap_south_2: "ap-south-2",
  ap_southeast_1: "ap-southeast-1",
  ap_southeast_2: "ap-southeast-2",
  ap_southeast_3: "ap-southeast-3",
  ap_southeast_4: "ap-southeast-4",
  ap_southeast_5: "ap-southeast-5",
  ap_southeast_6: "ap-southeast-6",
  ap_southeast_7: "ap-southeast-7",
  ca_central_1: "ca-central-1",
  ca_west_1: "ca-west-1",
  cn_north_1: "cn-north-1",
  cn_northwest_1: "cn-northwest-1",
  eu_central_1: "eu-central-1",
  eu_central_2: "eu-central-2",
  eu_north_1: "eu-north-1",
  eu_south_1: "eu-south-1",
  eu_south_2: "eu-south-2",
  eu_west_1: "eu-west-1",
  eu_west_2: "eu-west-2",
  eu_west_3: "eu-west-3",
  eusc_de_east_1: "eusc-de-east-1",
  il_central_1: "il-central-1",
  me_central_1: "me-central-1",
  me_south_1: "me-south-1",
  mx_central_1: "mx-central-1",
  sa_east_1: "sa-east-1",
  us_east_1: "us-east-1",
  us_east_2: "us-east-2",
  us_gov_east_1: "us-gov-east-1",
  us_gov_west_1: "us-gov-west-1",
  us_west_1: "us-west-1",
  us_west_2: "us-west-2",
} as const;
/**
 * @public
 */
export type ResourceRecordSetRegion = (typeof ResourceRecordSetRegion)[keyof typeof ResourceRecordSetRegion];

/**
 * @public
 * @enum
 */
export const RRType = {
  A: "A",
  AAAA: "AAAA",
  CAA: "CAA",
  CNAME: "CNAME",
  DS: "DS",
  HTTPS: "HTTPS",
  MX: "MX",
  NAPTR: "NAPTR",
  NS: "NS",
  PTR: "PTR",
  SOA: "SOA",
  SPF: "SPF",
  SRV: "SRV",
  SSHFP: "SSHFP",
  SVCB: "SVCB",
  TLSA: "TLSA",
  TXT: "TXT",
} as const;
/**
 * @public
 */
export type RRType = (typeof RRType)[keyof typeof RRType];

/**
 * @public
 * @enum
 */
export const TagResourceType = {
  healthcheck: "healthcheck",
  hostedzone: "hostedzone",
} as const;
/**
 * @public
 */
export type TagResourceType = (typeof TagResourceType)[keyof typeof TagResourceType];

/**
 * @public
 * @enum
 */
export const InsufficientDataHealthStatus = {
  Healthy: "Healthy",
  LastKnownStatus: "LastKnownStatus",
  Unhealthy: "Unhealthy",
} as const;
/**
 * @public
 */
export type InsufficientDataHealthStatus =
  (typeof InsufficientDataHealthStatus)[keyof typeof InsufficientDataHealthStatus];

/**
 * @public
 * @enum
 */
export const HealthCheckRegion = {
  ap_northeast_1: "ap-northeast-1",
  ap_southeast_1: "ap-southeast-1",
  ap_southeast_2: "ap-southeast-2",
  eu_west_1: "eu-west-1",
  sa_east_1: "sa-east-1",
  us_east_1: "us-east-1",
  us_west_1: "us-west-1",
  us_west_2: "us-west-2",
} as const;
/**
 * @public
 */
export type HealthCheckRegion = (typeof HealthCheckRegion)[keyof typeof HealthCheckRegion];

/**
 * @public
 * @enum
 */
export const HealthCheckType = {
  CALCULATED: "CALCULATED",
  CLOUDWATCH_METRIC: "CLOUDWATCH_METRIC",
  HTTP: "HTTP",
  HTTPS: "HTTPS",
  HTTPS_STR_MATCH: "HTTPS_STR_MATCH",
  HTTP_STR_MATCH: "HTTP_STR_MATCH",
  RECOVERY_CONTROL: "RECOVERY_CONTROL",
  TCP: "TCP",
} as const;
/**
 * @public
 */
export type HealthCheckType = (typeof HealthCheckType)[keyof typeof HealthCheckType];

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  GreaterThanOrEqualToThreshold: "GreaterThanOrEqualToThreshold",
  GreaterThanThreshold: "GreaterThanThreshold",
  LessThanOrEqualToThreshold: "LessThanOrEqualToThreshold",
  LessThanThreshold: "LessThanThreshold",
} as const;
/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const Statistic = {
  Average: "Average",
  Maximum: "Maximum",
  Minimum: "Minimum",
  SampleCount: "SampleCount",
  Sum: "Sum",
} as const;
/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 * @enum
 */
export const HostedZoneLimitType = {
  MAX_RRSETS_BY_ZONE: "MAX_RRSETS_BY_ZONE",
  MAX_VPCS_ASSOCIATED_BY_ZONE: "MAX_VPCS_ASSOCIATED_BY_ZONE",
} as const;
/**
 * @public
 */
export type HostedZoneLimitType = (typeof HostedZoneLimitType)[keyof typeof HostedZoneLimitType];

/**
 * @public
 * @enum
 */
export const ReusableDelegationSetLimitType = {
  MAX_ZONES_BY_REUSABLE_DELEGATION_SET: "MAX_ZONES_BY_REUSABLE_DELEGATION_SET",
} as const;
/**
 * @public
 */
export type ReusableDelegationSetLimitType =
  (typeof ReusableDelegationSetLimitType)[keyof typeof ReusableDelegationSetLimitType];

/**
 * @public
 * @enum
 */
export const HostedZoneType = {
  PRIVATE_HOSTED_ZONE: "PrivateHostedZone",
} as const;
/**
 * @public
 */
export type HostedZoneType = (typeof HostedZoneType)[keyof typeof HostedZoneType];

/**
 * @public
 * @enum
 */
export const ResettableElementName = {
  ChildHealthChecks: "ChildHealthChecks",
  FullyQualifiedDomainName: "FullyQualifiedDomainName",
  Regions: "Regions",
  ResourcePath: "ResourcePath",
} as const;
/**
 * @public
 */
export type ResettableElementName = (typeof ResettableElementName)[keyof typeof ResettableElementName];
