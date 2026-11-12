// smithy-typescript generated code
import type {
  ActionPriority,
  AssociationMode,
  AutoEnableMembers,
  Confidence,
  CoverageStatisticsType,
  DataSource,
  DetectionRuleConfigurationStatus,
  DetectionRuleDataSource,
  DetectionRuleSeverity,
  DetectionSource,
  DetectorStatus,
  EbsSnapshotPreservation,
  FeatureStatus,
  Feedback,
  FetchType,
  FetchVerdict,
  FilterAction,
  FindingPublishingFrequency,
  FindingStatisticType,
  GroupByType,
  InvestigationFilterCriterionKey,
  InvestigationIndicatorType,
  InvestigationResourceType,
  InvestigationSortField,
  InvestigationStatus,
  InvestigationType,
  IpSetFormat,
  IpSetStatus,
  ListMalwareScansCriterionKey,
  MalwareProtectionPlanStatus,
  MalwareProtectionResourceType,
  MalwareProtectionScanStatus,
  MalwareProtectionScanType,
  ManagedBy,
  ObservationType,
  OrderBy,
  OrgFeature,
  OrgFeatureAdditionalConfiguration,
  OrgFeatureStatus,
  RecommendationCategory,
  RecordType,
  RiskLevel,
  RuleLanguage,
  RuleSchema,
  ScanCategory,
  ScanCriterionKey,
  ScanResultStatus,
  ScanStatusReason,
  SummaryFormat,
  ThreatEntitySetFormat,
  ThreatEntitySetStatus,
  ThreatIntelSetFormat,
  ThreatIntelSetStatus,
  TriggerType,
  TrustedEntitySetFormat,
  TrustedEntitySetStatus,
  UsageFeature,
  UsageStatisticType,
} from "./enums";
import type {
  AccessKeyDetails,
  AccountAnalysis,
  AccountFreeTrialInfo,
  AccountLevelPermissions,
  AccountOverview,
  AccountStatistics,
  AccountSummary,
  Action,
  ActivityWindow,
  AdditionalInfo,
  AdminAccount,
  Administrator,
  AnalysisRecord,
  AssociationDetail,
  AssociationSummary,
  AttackPhase,
  BedrockGuardrailDetails,
  BucketLevelPermissions,
  CloudDetails,
  Container,
  ContinuousScanDetails,
  CorrelatedFinding,
  Countermeasure,
  CoverageFilterCriteria,
  CoverageResource,
  CoverageSortCriteria,
  CoverageStatistics,
  CreateProtectedResource,
  DataSourceConfigurations,
  DataSourceConfigurationsResult,
  DateStatistics,
  DefaultServerSideEncryption,
  Destination,
  DestinationProperties,
  Detection,
  DetectionCoverage,
  DetectionRuleFilter,
  DetectionRuleOrgConfiguration,
  DetectionRuleOrgConfigurationSummary,
  DetectionRuleRuntimeMonitoringDetails,
  DetectorFeatureConfiguration,
  DetectorFeatureConfigurationResult,
  Distribution,
  DnsContext,
  EbsSnapshot,
  EbsSnapshotDetails,
  EbsVolumeDetails,
  EbsVolumeScanDetails,
  Ec2ImageDetails,
  EcsClusterDetails,
  EksClusterDetails,
  Enrichment,
  Evidence,
  FetchCriterion,
  FilterCondition,
  FindingCriteria,
  FindingTypeCount,
  IamInstanceProfile,
  InvestigationDetectorFeatureConfiguration,
  InvestigationIndicator,
  MalwareProtectionPlanActions,
  PrivateIpAddressDetails,
  ProductCode,
  SecurityGroup,
  SeverityBreakdown,
  SharedResource,
  SortCriteria,
  Tag,
  TimeWindowGroup,
  TriggerDetails,
  UnprocessedAccount,
  Volume,
  VolumeDetail,
} from "./models_0";

/**
 * <p>Contains the time range of the data that GuardDuty requested. The range is defined by a start time and a duration.</p>
 * @public
 */
export interface FetchTimeWindow {
  /**
   * <p>The timestamp at which the time range starts.</p>
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * <p>The length of the time range, in minutes. Valid values are 1 to 120.</p>
   * @public
   */
  DurationInMinutes?: number | undefined;
}

/**
 * <p>Contains the parameters of a request that GuardDuty made to retrieve data during an investigation. The members that are set depend on the <code>FetchType</code> of the record.</p>
 * @public
 */
export interface FetchQuery {
  /**
   * <p>The filter criteria that GuardDuty applied to the request.</p>
   * @public
   */
  Criteria?: FetchCriterion[] | undefined;

  /**
   * <p>The time range of the data that GuardDuty requested.</p>
   * @public
   */
  TimeWindow?: FetchTimeWindow | undefined;

  /**
   * <p>The maximum number of rows that GuardDuty requested. Valid values are 1 to 1,000.</p>
   * @public
   */
  RowLimit?: number | undefined;

  /**
   * <p>The Amazon Web Services account ID that the request was made for.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The threat indicator that GuardDuty looked up, such as an IP address, a domain, or a file hash.</p>
   * @public
   */
  Indicator?: string | undefined;

  /**
   * <p>The type of the threat indicator. Possible values are <code>IP</code>, <code>DOMAIN</code>, and <code>FILE</code>.</p>
   * @public
   */
  IndicatorType?: InvestigationIndicatorType | undefined;

  /**
   * <p>The finding type whose documentation GuardDuty retrieved.</p>
   * @public
   */
  FindingType?: string | undefined;

  /**
   * <p>The ID of the finding that GuardDuty retrieved.</p>
   * @public
   */
  FindingId?: string | undefined;
}

/**
 * <p>Contains information about a finding type from the GuardDuty documentation.</p>
 * @public
 */
export interface FindingTypeDocumentation {
  /**
   * <p>A short description of the finding type.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The severity of the finding type, as stated in the documentation.</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>The label that the documentation uses for the GuardDuty capability associated with the finding type. This value isn't a detector feature name.</p>
   * @public
   */
  Feature?: string | undefined;

  /**
   * <p>The full description of the finding type.</p>
   * @public
   */
  FullDescription?: string | undefined;

  /**
   * <p>The recommended steps to remediate the finding type.</p>
   * @public
   */
  Remediation?: string | undefined;

  /**
   * <p>Links to more information about the finding type.</p>
   * @public
   */
  LearnMoreLinks?: string[] | undefined;
}

/**
 * <p>Contains the data that GuardDuty received in response to a request during an investigation. The members that are set depend on the <code>FetchType</code> of the record.</p>
 * @public
 */
export interface FetchResult {
  /**
   * <p>The identifiers of the items that were returned, such as finding IDs, event IDs, signal IDs, or account IDs, depending on <code>FetchType</code>. The list contains at most 50 identifiers; <code>TotalCount</code> can be larger.</p>
   * @public
   */
  ItemIds?: string[] | undefined;

  /**
   * <p>The total number of items that were returned. This value can be greater than the number of identifiers in <code>ItemIds</code>.</p>
   * @public
   */
  TotalCount?: number | undefined;

  /**
   * <p>The configuration of the detector features that GuardDuty retrieved.</p>
   * @public
   */
  Features?: InvestigationDetectorFeatureConfiguration[] | undefined;

  /**
   * <p>The reputation verdict for the threat indicator. Possible values are <code>THREAT</code>, <code>BENIGN</code>, and <code>NEUTRAL</code>. If the lookup returned more than one result, the verdict describes the first result.</p>
   * @public
   */
  Verdict?: FetchVerdict | undefined;

  /**
   * <p>The documentation for the finding type that GuardDuty retrieved.</p>
   * @public
   */
  Documentation?: FindingTypeDocumentation | undefined;
}

/**
 * <p>Contains information about data that GuardDuty retrieved during an investigation, including what GuardDuty requested and what it received.</p>
 * @public
 */
export interface FetchRecord {
  /**
   * <p>The kind of data that GuardDuty retrieved. The value determines which members of <code>Query</code> and <code>Result</code> can be set. Possible values:</p> <ul> <li> <p> <code>FINDINGS</code> – GuardDuty findings.</p> </li> <li> <p> <code>DETECTOR</code> – The configuration of a GuardDuty detector.</p> </li> <li> <p> <code>REPUTATION</code> – Reputation information about a threat indicator, such as an IP address, a domain, or a file hash.</p> </li> <li> <p> <code>FINDING_TYPE_DOCUMENTATION</code> – The documentation for a finding type.</p> </li> <li> <p> <code>CLOUD_TRAIL_RAW_EVENTS</code> – Amazon Web Services CloudTrail events.</p> </li> <li> <p> <code>RUNTIME_SIGNALS</code> – Runtime signals.</p> </li> <li> <p> <code>MEMBER_ACCOUNTS</code> – A list of member accounts.</p> </li> </ul>
   * @public
   */
  FetchType: FetchType | undefined;

  /**
   * <p>The request that GuardDuty made. Not every record includes a query.</p>
   * @public
   */
  Query?: FetchQuery | undefined;

  /**
   * <p>The data that GuardDuty received in response to the request. Not every record includes a result.</p>
   * @public
   */
  Result?: FetchResult | undefined;
}

/**
 * <p>Contains information about the elastic network interface of the EC2 instance.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>A list of IPv6 addresses for the EC2 instance.</p>
   * @public
   */
  Ipv6Addresses?: string[] | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  NetworkInterfaceId?: string | undefined;

  /**
   * <p>The private DNS name of the EC2 instance.</p>
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * <p>The private IP address of the EC2 instance.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>Other private IP address information of the EC2 instance.</p>
   * @public
   */
  PrivateIpAddresses?: PrivateIpAddressDetails[] | undefined;

  /**
   * <p>The public DNS name of the EC2 instance.</p>
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * <p>The public IP address of the EC2 instance.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>The security groups associated with the EC2 instance.</p>
   * @public
   */
  SecurityGroups?: SecurityGroup[] | undefined;

  /**
   * <p>The subnet ID of the EC2 instance.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The VPC ID of the EC2 instance.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Contains information about the details of an instance.</p>
 * @public
 */
export interface InstanceDetails {
  /**
   * <p>The Availability Zone of the EC2 instance.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The profile information of the EC2 instance.</p>
   * @public
   */
  IamInstanceProfile?: IamInstanceProfile | undefined;

  /**
   * <p>The image description of the EC2 instance.</p>
   * @public
   */
  ImageDescription?: string | undefined;

  /**
   * <p>The image ID of the EC2 instance.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The ID of the EC2 instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The state of the EC2 instance.</p>
   * @public
   */
  InstanceState?: string | undefined;

  /**
   * <p>The type of the EC2 instance.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Outpost. Only applicable to Amazon Web Services Outposts instances.</p>
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * <p>The launch time of the EC2 instance.</p>
   * @public
   */
  LaunchTime?: string | undefined;

  /**
   * <p>The elastic network interface information of the EC2 instance.</p>
   * @public
   */
  NetworkInterfaces?: NetworkInterface[] | undefined;

  /**
   * <p>The platform of the EC2 instance.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The product code of the EC2 instance.</p>
   * @public
   */
  ProductCodes?: ProductCode[] | undefined;

  /**
   * <p>The tags of the EC2 instance.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains information about the impersonated user.</p>
 * @public
 */
export interface ImpersonatedUser {
  /**
   * <p>Information about the <code>username</code> that was being impersonated.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The <code>group</code> to which the user name belongs.</p>
   * @public
   */
  Groups?: string[] | undefined;
}

/**
 * <p>Details about the Kubernetes user involved in a Kubernetes finding.</p>
 * @public
 */
export interface KubernetesUserDetails {
  /**
   * <p>The username of the user who called the Kubernetes API.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The user ID of the user who called the Kubernetes API.</p>
   * @public
   */
  Uid?: string | undefined;

  /**
   * <p>The groups that include the user who called the Kubernetes API.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>Entity that assumes the IAM role when Kubernetes RBAC permissions are assigned to that role.</p>
   * @public
   */
  SessionName?: string[] | undefined;

  /**
   * <p>Information about the impersonated user.</p>
   * @public
   */
  ImpersonatedUser?: ImpersonatedUser | undefined;
}

/**
 * <p>Details about the Kubernetes workload involved in a Kubernetes finding.</p>
 * @public
 */
export interface KubernetesWorkloadDetails {
  /**
   * <p>Kubernetes workload name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Kubernetes workload type (e.g. Pod, Deployment, etc.).</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>Kubernetes workload ID.</p>
   * @public
   */
  Uid?: string | undefined;

  /**
   * <p>Kubernetes namespace that the workload is part of.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>Whether the hostNetwork flag is enabled for the pods included in the workload.</p>
   * @public
   */
  HostNetwork?: boolean | undefined;

  /**
   * <p>The service account name that is associated with a Kubernetes workload.</p>
   * @public
   */
  ServiceAccountName?: string | undefined;

  /**
   * <p>Containers running as part of the Kubernetes workload.</p>
   * @public
   */
  Containers?: Container[] | undefined;

  /**
   * <p>Volumes used by the Kubernetes workload.</p>
   * @public
   */
  Volumes?: Volume[] | undefined;

  /**
   * <p>Whether the host IPC flag is enabled for the pods in the workload.</p>
   * @public
   */
  HostIPC?: boolean | undefined;

  /**
   * <p>Whether the host PID flag is enabled for the pods in the workload. </p>
   * @public
   */
  HostPID?: boolean | undefined;
}

/**
 * <p>Details about Kubernetes resources such as a Kubernetes user or workload resource involved in a Kubernetes finding.</p>
 * @public
 */
export interface KubernetesDetails {
  /**
   * <p>Details about the Kubernetes user involved in a Kubernetes finding.</p>
   * @public
   */
  KubernetesUserDetails?: KubernetesUserDetails | undefined;

  /**
   * <p>Details about the Kubernetes workload involved in a Kubernetes finding.</p>
   * @public
   */
  KubernetesWorkloadDetails?: KubernetesWorkloadDetails | undefined;
}

/**
 * <p>Amazon Virtual Private Cloud configuration details associated with your Lambda function.</p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>The identifiers of the subnets that are associated with your Lambda function.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The identifier of the Amazon Virtual Private Cloud.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The identifier of the security group attached to the Lambda function.</p>
   * @public
   */
  SecurityGroups?: SecurityGroup[] | undefined;
}

/**
 * <p>Information about the Lambda function involved in the finding.</p>
 * @public
 */
export interface LambdaDetails {
  /**
   * <p>Amazon Resource Name (ARN) of the Lambda function.</p>
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * <p>Name of the Lambda function.</p>
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * <p>Description of the Lambda function.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp when the Lambda function was last modified. This field is in the UTC date string format <code>(2023-03-22T19:37:20.168Z)</code>.</p>
   * @public
   */
  LastModifiedAt?: Date | undefined;

  /**
   * <p>The revision ID of the Lambda function version.</p>
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * <p>The version of the Lambda function.</p>
   * @public
   */
  FunctionVersion?: string | undefined;

  /**
   * <p>The execution role of the Lambda function.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>Amazon Virtual Private Cloud configuration details associated with your Lambda function.</p>
   * @public
   */
  VpcConfig?: VpcConfig | undefined;

  /**
   * <p>A list of tags attached to this resource, listed in the format of <code>key</code>:<code>value</code> pair.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains information about the AI model involved in a finding.</p>
 * @public
 */
export interface ModelDetail {
  /**
   * <p>The identifier of the AI model.</p>
   * @public
   */
  ModelId?: string | undefined;
}

/**
 * <p>Contains information about the resource type <code>RDSDBInstance</code> involved in a GuardDuty finding.</p>
 * @public
 */
export interface RdsDbInstanceDetails {
  /**
   * <p>The identifier associated to the database instance that was involved in the finding.</p>
   * @public
   */
  DbInstanceIdentifier?: string | undefined;

  /**
   * <p>The database engine of the database instance involved in the finding.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version of the database engine that was involved in the finding.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The identifier of the database cluster that contains the database instance ID involved in the finding.</p>
   * @public
   */
  DbClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the database instance involved in the finding.</p>
   * @public
   */
  DbInstanceArn?: string | undefined;

  /**
   * <p>The unique ID of the database resource involved in the activity that prompted GuardDuty to generate the finding.</p>
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * <p>Information about the tag key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains information about the user and authentication details for a database instance involved in the finding.</p>
 * @public
 */
export interface RdsDbUserDetails {
  /**
   * <p>The user name used in the anomalous login attempt.</p>
   * @public
   */
  User?: string | undefined;

  /**
   * <p>The application name used in the anomalous login attempt.</p>
   * @public
   */
  Application?: string | undefined;

  /**
   * <p>The name of the database instance involved in the anomalous login attempt.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The version of the Secure Socket Layer (SSL) used for the network.</p>
   * @public
   */
  Ssl?: string | undefined;

  /**
   * <p>The authentication method used by the user involved in the finding.</p>
   * @public
   */
  AuthMethod?: string | undefined;
}

/**
 * <p>Contains information about the resource type <code>RDSLimitlessDB</code> that is involved in a GuardDuty finding.</p>
 * @public
 */
export interface RdsLimitlessDbDetails {
  /**
   * <p>The name associated with the Limitless DB shard group.</p>
   * @public
   */
  DbShardGroupIdentifier?: string | undefined;

  /**
   * <p>The resource identifier of the DB shard group within the Limitless Database.</p>
   * @public
   */
  DbShardGroupResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the DB shard group.</p>
   * @public
   */
  DbShardGroupArn?: string | undefined;

  /**
   * <p>The database engine of the database instance involved in the finding.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version of the database engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The name of the database cluster that is a part of the Limitless Database.</p>
   * @public
   */
  DbClusterIdentifier?: string | undefined;

  /**
   * <p>Information about the tag key-value pair.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>Contains information about the time range within the continuous backup in Amazon Web Services Backup that was scanned for a point-in-time recovery resource.</p>
 * @public
 */
export interface ScanConfigurationContinuousScanDetails {
  /**
   * <p>The timestamp representing the start of the time range that was scanned.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The timestamp representing the end of the time range that was scanned.</p>
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * <p>Contains details about the backup recovery point.</p>
 * @public
 */
export interface RecoveryPointDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the recovery point.</p>
   * @public
   */
  RecoveryPointArn?: string | undefined;

  /**
   * <p>The name of the backup vault containing the recovery point.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>Contains information about the time range within the continuous backup in Amazon Web Services Backup that was scanned for a point-in-time recovery resource.</p>
   * @public
   */
  ContinuousScanDetails?: ScanConfigurationContinuousScanDetails | undefined;
}

/**
 * <p>Contains information on the owner of the bucket.</p>
 * @public
 */
export interface Owner {
  /**
   * <p>The canonical user ID of the bucket owner. For information about locating your canonical user ID see <a href="https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId">Finding Your Account Canonical User ID.</a> </p>
   * @public
   */
  Id?: string | undefined;
}

/**
 * <p>Contains information about how permissions are configured for the S3 bucket.</p>
 * @public
 */
export interface PermissionConfiguration {
  /**
   * <p>Contains information about the bucket level permissions for the S3 bucket.</p>
   * @public
   */
  BucketLevelPermissions?: BucketLevelPermissions | undefined;

  /**
   * <p>Contains information about the account level permissions on the S3 bucket.</p>
   * @public
   */
  AccountLevelPermissions?: AccountLevelPermissions | undefined;
}

/**
 * <p>Describes the public access policies that apply to the S3 bucket.</p>
 * @public
 */
export interface PublicAccess {
  /**
   * <p>Contains information about how permissions are configured for the S3 bucket.</p>
   * @public
   */
  PermissionConfiguration?: PermissionConfiguration | undefined;

  /**
   * <p>Describes the effective permission on this bucket after factoring all attached policies.</p>
   * @public
   */
  EffectivePermission?: string | undefined;
}

/**
 * <p>Information about the S3 object that was scanned</p>
 * @public
 */
export interface S3ObjectDetail {
  /**
   * <p>Amazon Resource Name (ARN) of the S3 object.</p>
   * @public
   */
  ObjectArn?: string | undefined;

  /**
   * <p>Key of the S3 object.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The entity tag is a hash of the S3 object. The ETag reflects changes only to the contents of an object, and not its metadata.</p>
   * @public
   */
  ETag?: string | undefined;

  /**
   * <p>Hash of the threat detected in this finding.</p>
   * @public
   */
  Hash?: string | undefined;

  /**
   * <p>Version ID of the object.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * <p>Contains information on the S3 bucket.</p>
 * @public
 */
export interface S3BucketDetail {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the S3 bucket.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Describes whether the bucket is a source or destination bucket.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The date and time the bucket was created at.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The owner of the S3 bucket.</p>
   * @public
   */
  Owner?: Owner | undefined;

  /**
   * <p>All tags attached to the S3 bucket</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Describes the server side encryption method used in the S3 bucket.</p>
   * @public
   */
  DefaultServerSideEncryption?: DefaultServerSideEncryption | undefined;

  /**
   * <p>Describes the public access policies that apply to the S3 bucket.</p>
   * @public
   */
  PublicAccess?: PublicAccess | undefined;

  /**
   * <p>Information about the S3 object that was scanned.</p>
   * @public
   */
  S3ObjectDetails?: S3ObjectDetail[] | undefined;
}

/**
 * <p>Contains information about the Amazon Web Services resource associated with the activity that prompted GuardDuty to generate a finding.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The IAM access key details (user information) of a user that engaged in the activity that prompted GuardDuty to generate a finding.</p>
   * @public
   */
  AccessKeyDetails?: AccessKeyDetails | undefined;

  /**
   * <p>Contains information on the S3 bucket.</p>
   * @public
   */
  S3BucketDetails?: S3BucketDetail[] | undefined;

  /**
   * <p>The information about the EC2 instance associated with the activity that prompted GuardDuty to generate a finding.</p>
   * @public
   */
  InstanceDetails?: InstanceDetails | undefined;

  /**
   * <p>Details about the EKS cluster involved in a Kubernetes finding.</p>
   * @public
   */
  EksClusterDetails?: EksClusterDetails | undefined;

  /**
   * <p>Details about the Kubernetes user and workload involved in a Kubernetes finding.</p>
   * @public
   */
  KubernetesDetails?: KubernetesDetails | undefined;

  /**
   * <p>The type of Amazon Web Services resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>Contains list of scanned and skipped EBS volumes with details.</p>
   * @public
   */
  EbsVolumeDetails?: EbsVolumeDetails | undefined;

  /**
   * <p>Contains information about the details of the ECS Cluster.</p>
   * @public
   */
  EcsClusterDetails?: EcsClusterDetails | undefined;

  /**
   * <p>Details of a container.</p>
   * @public
   */
  ContainerDetails?: Container | undefined;

  /**
   * <p>Contains information about the Lambda function that was involved in a finding.</p>
   * @public
   */
  LambdaDetails?: LambdaDetails | undefined;

  /**
   * <p>Contains information about the database instance to which an anomalous login attempt was made.</p>
   * @public
   */
  RdsDbInstanceDetails?: RdsDbInstanceDetails | undefined;

  /**
   * <p>Contains information about the RDS Limitless database that was involved in a GuardDuty finding.</p>
   * @public
   */
  RdsLimitlessDbDetails?: RdsLimitlessDbDetails | undefined;

  /**
   * <p>Contains information about the user details through which anomalous login attempt was made.</p>
   * @public
   */
  RdsDbUserDetails?: RdsDbUserDetails | undefined;

  /**
   * <p>Contains details about the EBS snapshot that was scanned.</p>
   * @public
   */
  EbsSnapshotDetails?: EbsSnapshotDetails | undefined;

  /**
   * <p>Contains details about the EC2 image that was scanned.</p>
   * @public
   */
  Ec2ImageDetails?: Ec2ImageDetails | undefined;

  /**
   * <p>Contains details about the backup recovery point that was scanned.</p>
   * @public
   */
  RecoveryPointDetails?: RecoveryPointDetails | undefined;

  /**
   * <p>Contains information about the Bedrock guardrail that was involved in a finding.</p>
   * @public
   */
  BedrockGuardrailDetails?: BedrockGuardrailDetails | undefined;

  /**
   * <p>Contains information about the AI models involved in a finding.</p>
   * @public
   */
  ModelDetails?: ModelDetail[] | undefined;
}

/**
 * <p>Additional information about the generated finding.</p>
 * @public
 */
export interface ServiceAdditionalInfo {
  /**
   * <p>This field specifies the value of the additional information.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Describes the type of the additional information.</p>
   * @public
   */
  Type?: string | undefined;
}

/**
 * <p>Contains information about the incremental scan configuration.</p>
 * @public
 */
export interface IncrementalScanDetails {
  /**
   * <p>Amazon Resource Name (ARN) of the baseline resource used for incremental scanning. The scan will only process changes since this baseline resource was created.</p>
   * @public
   */
  BaselineResourceArn: string | undefined;
}

/**
 * <p>Contains finding configuration details about the malware scan.</p>
 * @public
 */
export interface MalwareProtectionFindingsScanConfiguration {
  /**
   * <p>The event that triggered the malware scan.</p>
   * @public
   */
  TriggerType?: TriggerType | undefined;

  /**
   * <p>Contains information about the incremental scan configuration.</p>
   * @public
   */
  IncrementalScanDetails?: IncrementalScanDetails | undefined;
}

/**
 * <p>Contains detailed information about where a threat was detected.</p>
 * @public
 */
export interface ItemDetails {
  /**
   * <p>Amazon Resource Name (ARN) of the resource where the threat was detected.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The path where the threat was detected.</p>
   * @public
   */
  ItemPath?: string | undefined;

  /**
   * <p>The hash value of the infected item.</p>
   * @public
   */
  Hash?: string | undefined;

  /**
   * <p>Additional information about the detected threat item.</p>
   * @public
   */
  AdditionalInfo?: AdditionalInfo | undefined;
}

/**
 * <p>Information about the nested item path and hash of the protected resource.</p>
 * @public
 */
export interface ItemPath {
  /**
   * <p>The nested item path where the infected file was found.</p>
   * @public
   */
  NestedItemPath?: string | undefined;

  /**
   * <p>The hash value of the infected resource.</p>
   * @public
   */
  Hash?: string | undefined;
}

/**
 * <p>Information about the detected threats associated with the generated finding.</p>
 * @public
 */
export interface Threat {
  /**
   * <p>Name of the detected threat that caused GuardDuty to generate this finding.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Source of the threat that generated this finding.</p>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>Information about the nested item path and hash of the protected resource.</p>
   * @public
   */
  ItemPaths?: ItemPath[] | undefined;

  /**
   * <p>The number of occurrences of this specific threat detected during the scan.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The hash identifier of the detected malware threat.</p>
   * @public
   */
  Hash?: string | undefined;

  /**
   * <p>Detailed information about the detected malware threat.</p>
   * @public
   */
  ItemDetails?: ItemDetails[] | undefined;
}

/**
 * <p>Information about the malware scan that generated a GuardDuty finding.</p>
 * @public
 */
export interface MalwareScanDetails {
  /**
   * <p>Information about the detected threats associated with the generated GuardDuty finding.</p>
   * @public
   */
  Threats?: Threat[] | undefined;

  /**
   * <p>The unique identifier for the malware scan.</p>
   * @public
   */
  ScanId?: string | undefined;

  /**
   * <p>The type of malware scan performed.</p>
   * @public
   */
  ScanType?: MalwareProtectionScanType | undefined;

  /**
   * <p>The category of the malware scan.</p>
   * @public
   */
  ScanCategory?: ScanCategory | undefined;

  /**
   * <p>The configuration settings used for the malware scan.</p>
   * @public
   */
  ScanConfiguration?: MalwareProtectionFindingsScanConfiguration | undefined;

  /**
   * <p>The number of unique malware threats detected during the scan.</p>
   * @public
   */
  UniqueThreatCount?: number | undefined;
}

/**
 * <p>Information about the runtime process details.</p>
 * @public
 */
export interface LineageObject {
  /**
   * <p>The time when the process started. This is in UTC format.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The process ID of the child process.</p>
   * @public
   */
  NamespacePid?: number | undefined;

  /**
   * <p>The user ID of the user that executed the process.</p>
   * @public
   */
  UserId?: number | undefined;

  /**
   * <p>The name of the process.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ID of the process.</p>
   * @public
   */
  Pid?: number | undefined;

  /**
   * <p>The unique ID assigned to the process by GuardDuty.</p>
   * @public
   */
  Uuid?: string | undefined;

  /**
   * <p>The absolute path of the process executable file.</p>
   * @public
   */
  ExecutablePath?: string | undefined;

  /**
   * <p>The effective user ID that was used to execute the process.</p>
   * @public
   */
  Euid?: number | undefined;

  /**
   * <p>The unique ID of the parent process. This ID is assigned to the parent process by GuardDuty.</p>
   * @public
   */
  ParentUuid?: string | undefined;
}

/**
 * <p>Information about the observed process.</p>
 * @public
 */
export interface ProcessDetails {
  /**
   * <p>The name of the process.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The absolute path of the process executable file.</p>
   * @public
   */
  ExecutablePath?: string | undefined;

  /**
   * <p>The <code>SHA256</code> hash of the process executable.</p>
   * @public
   */
  ExecutableSha256?: string | undefined;

  /**
   * <p>The ID of the child process.</p>
   * @public
   */
  NamespacePid?: number | undefined;

  /**
   * <p>The present working directory of the process.</p>
   * @public
   */
  Pwd?: string | undefined;

  /**
   * <p>The ID of the process.</p>
   * @public
   */
  Pid?: number | undefined;

  /**
   * <p>The time when the process started. This is in UTC format.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The unique ID assigned to the process by GuardDuty.</p>
   * @public
   */
  Uuid?: string | undefined;

  /**
   * <p>The unique ID of the parent process. This ID is assigned to the parent process by GuardDuty.</p>
   * @public
   */
  ParentUuid?: string | undefined;

  /**
   * <p>The user that executed the process.</p>
   * @public
   */
  User?: string | undefined;

  /**
   * <p>The unique ID of the user that executed the process.</p>
   * @public
   */
  UserId?: number | undefined;

  /**
   * <p>The effective user ID of the user that executed the process.</p>
   * @public
   */
  Euid?: number | undefined;

  /**
   * <p>Information about the process's lineage.</p>
   * @public
   */
  Lineage?: LineageObject[] | undefined;
}

/**
 * <p>Additional information about the suspicious activity.</p>
 * @public
 */
export interface RuntimeContext {
  /**
   * <p>Information about the process that modified the current process. This is available for multiple finding types.</p>
   * @public
   */
  ModifyingProcess?: ProcessDetails | undefined;

  /**
   * <p>The timestamp at which the process modified the current process. The timestamp is in UTC date string format.</p>
   * @public
   */
  ModifiedAt?: Date | undefined;

  /**
   * <p>The path to the script that was executed.</p>
   * @public
   */
  ScriptPath?: string | undefined;

  /**
   * <p>The path to the new library that was loaded.</p>
   * @public
   */
  LibraryPath?: string | undefined;

  /**
   * <p>The value of the LD_PRELOAD environment variable.</p>
   * @public
   */
  LdPreloadValue?: string | undefined;

  /**
   * <p>The path to the docket socket that was accessed.</p>
   * @public
   */
  SocketPath?: string | undefined;

  /**
   * <p>The path to the leveraged <code>runc</code> implementation.</p>
   * @public
   */
  RuncBinaryPath?: string | undefined;

  /**
   * <p>The path in the container that modified the release agent file.</p>
   * @public
   */
  ReleaseAgentPath?: string | undefined;

  /**
   * <p>The path on the host that is mounted by the container.</p>
   * @public
   */
  MountSource?: string | undefined;

  /**
   * <p>The path in the container that is mapped to the host directory.</p>
   * @public
   */
  MountTarget?: string | undefined;

  /**
   * <p>Represents the type of mounted fileSystem.</p>
   * @public
   */
  FileSystemType?: string | undefined;

  /**
   * <p>Represents options that control the behavior of a runtime operation or action. For example, a filesystem mount operation may contain a read-only flag.</p>
   * @public
   */
  Flags?: string[] | undefined;

  /**
   * <p>The name of the module loaded into the kernel.</p>
   * @public
   */
  ModuleName?: string | undefined;

  /**
   * <p>The path to the module loaded into the kernel.</p>
   * @public
   */
  ModuleFilePath?: string | undefined;

  /**
   * <p>The <code>SHA256</code> hash of the module.</p>
   * @public
   */
  ModuleSha256?: string | undefined;

  /**
   * <p>The path to the modified shell history file.</p>
   * @public
   */
  ShellHistoryFilePath?: string | undefined;

  /**
   * <p>Information about the process that had its memory overwritten by the current process.</p>
   * @public
   */
  TargetProcess?: ProcessDetails | undefined;

  /**
   * <p>Represents the communication protocol associated with the address. For example, the address family <code>AF_INET</code> is used for IP version of 4 protocol.</p>
   * @public
   */
  AddressFamily?: string | undefined;

  /**
   * <p>Specifies a particular protocol within the address family. Usually there is a single protocol in address families. For example, the address family <code>AF_INET</code> only has the IP protocol.</p>
   * @public
   */
  IanaProtocolNumber?: number | undefined;

  /**
   * <p>Specifies the Region of a process's address space such as stack and heap.</p>
   * @public
   */
  MemoryRegions?: string[] | undefined;

  /**
   * <p>Name of the potentially suspicious tool.</p>
   * @public
   */
  ToolName?: string | undefined;

  /**
   * <p>Category that the tool belongs to. Some of the examples are Backdoor Tool, Pentest Tool, Network Scanner, and Network Sniffer.</p>
   * @public
   */
  ToolCategory?: string | undefined;

  /**
   * <p>Name of the security service that has been potentially disabled.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>Example of the command line involved in the suspicious activity.</p>
   * @public
   */
  CommandLineExample?: string | undefined;

  /**
   * <p>The suspicious file path for which the threat intelligence details were found.</p>
   * @public
   */
  ThreatFilePath?: string | undefined;

  /**
   * <p>Represents the type of file operation that triggered the finding, such as Write, Delete, Rename, Link, or Symlink.</p>
   * @public
   */
  FileOperation?: string | undefined;

  /**
   * <p>The path of the sensitive file that was modified. Modification includes write, delete, rename, link, or symlink operations. This field is indexed for filtering.</p>
   * @public
   */
  FilePath?: string | undefined;

  /**
   * <p>All file paths modified by the same process that triggered the finding, up to a maximum of 25 paths.</p>
   * @public
   */
  RelatedFilePaths?: string[] | undefined;
}

/**
 * <p>Information about the process and any required context values for a specific finding.</p>
 * @public
 */
export interface RuntimeDetails {
  /**
   * <p>Information about the observed process.</p>
   * @public
   */
  Process?: ProcessDetails | undefined;

  /**
   * <p>Additional information about the suspicious activity.</p>
   * @public
   */
  Context?: RuntimeContext | undefined;
}

/**
 * <p>Contains additional information about the generated finding.</p>
 * @public
 */
export interface Service {
  /**
   * <p>Information about the activity that is described in a finding.</p>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>An evidence object associated with the service.</p>
   * @public
   */
  Evidence?: Evidence | undefined;

  /**
   * <p>Indicates whether this finding is archived.</p>
   * @public
   */
  Archived?: boolean | undefined;

  /**
   * <p>The total count of the occurrences of this finding type.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The detector ID for the GuardDuty service.</p>
   * @public
   */
  DetectorId?: string | undefined;

  /**
   * <p>The first-seen timestamp of the activity that prompted GuardDuty to generate this finding.</p>
   * @public
   */
  EventFirstSeen?: string | undefined;

  /**
   * <p>The last-seen timestamp of the activity that prompted GuardDuty to generate this finding.</p>
   * @public
   */
  EventLastSeen?: string | undefined;

  /**
   * <p>The resource role information for this finding.</p>
   * @public
   */
  ResourceRole?: string | undefined;

  /**
   * <p>The name of the Amazon Web Services service (GuardDuty) that generated a finding.</p>
   * @public
   */
  ServiceName?: string | undefined;

  /**
   * <p>Feedback that was submitted about the finding.</p>
   * @public
   */
  UserFeedback?: string | undefined;

  /**
   * <p>Contains additional information about the generated finding.</p>
   * @public
   */
  AdditionalInfo?: ServiceAdditionalInfo | undefined;

  /**
   * <p>The name of the feature that generated a finding.</p>
   * @public
   */
  FeatureName?: string | undefined;

  /**
   * <p>Returns details from the malware scan that created a finding.</p>
   * @public
   */
  EbsVolumeScanDetails?: EbsVolumeScanDetails | undefined;

  /**
   * <p>Information about the process and any required context values for a specific finding</p>
   * @public
   */
  RuntimeDetails?: RuntimeDetails | undefined;

  /**
   * <p>Contains information about the detected unusual behavior.</p>
   * @public
   */
  Detection?: Detection | undefined;

  /**
   * <p>Returns details from the malware scan that generated a GuardDuty finding.</p>
   * @public
   */
  MalwareScanDetails?: MalwareScanDetails | undefined;
}

/**
 * <p>Contains information about the finding that is generated when abnormal or suspicious activity is detected.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The ID of the account in which the finding was generated.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The ARN of the finding.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The confidence score for the finding.</p>
   * @public
   */
  Confidence?: number | undefined;

  /**
   * <p>The time and date when the finding was created.</p>
   * @public
   */
  CreatedAt: string | undefined;

  /**
   * <p>The description of the finding.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the finding.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The partition associated with the finding.</p>
   * @public
   */
  Partition?: string | undefined;

  /**
   * <p>The Region where the finding was generated. For findings generated from <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-global-service-events">Global Service Events</a>, the Region value in the finding might differ from the Region where GuardDuty identifies the potential threat. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_data-sources.html#cloudtrail_global">How GuardDuty handles Amazon Web Services CloudTrail global events</a> in the <i>Amazon GuardDuty User Guide</i>.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>Contains information about the Amazon Web Services resource associated with the activity that prompted GuardDuty to generate a finding.</p>
   * @public
   */
  Resource: Resource | undefined;

  /**
   * <p>The version of the schema used for the finding.</p>
   * @public
   */
  SchemaVersion: string | undefined;

  /**
   * <p>Contains additional information about the generated finding.</p>
   * @public
   */
  Service?: Service | undefined;

  /**
   * <p>The severity of the finding.</p>
   * @public
   */
  Severity: number | undefined;

  /**
   * <p>The title of the finding.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The type of finding.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>The time and date when the finding was last updated.</p>
   * @public
   */
  UpdatedAt: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) associated with the attack sequence finding.</p>
   * @public
   */
  AssociatedAttackSequenceArn?: string | undefined;

  /**
   * <p>The name of the custom detection rule that generated this finding.</p>
   * @public
   */
  CustomDetectionRuleName?: string | undefined;
}

/**
 * <p>Contains details about a GuardDuty finding.</p>
 * @public
 */
export interface FindingDetail {
  /**
   * <p>The ID of the finding.</p>
   * @public
   */
  FindingId?: string | undefined;

  /**
   * <p>The type of the finding.</p>
   * @public
   */
  FindingType?: string | undefined;

  /**
   * <p>The severity of the finding.</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account in which the finding was generated.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the finding was generated.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The time range of the activity that the finding describes.</p>
   * @public
   */
  ActivityWindow?: ActivityWindow | undefined;
}

/**
 * <p>Information about each finding type associated with the <code>groupedByFindingType</code> statistics.</p>
 * @public
 */
export interface FindingTypeStatistics {
  /**
   * <p>Name of the finding type.</p>
   * @public
   */
  FindingType?: string | undefined;

  /**
   * <p>The timestamp at which this finding type was last generated in your environment.</p>
   * @public
   */
  LastGeneratedAt?: Date | undefined;

  /**
   * <p>The total number of findings associated with generated for each distinct finding type.</p>
   * @public
   */
  TotalFindings?: number | undefined;
}

/**
 * <p>Information about each resource type associated with the <code>groupedByResource</code> statistics.</p>
 * @public
 */
export interface ResourceStatistics {
  /**
   * <p>The ID of the Amazon Web Services account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The timestamp at which the statistics for this resource was last generated.</p>
   * @public
   */
  LastGeneratedAt?: Date | undefined;

  /**
   * <p>ID associated with each resource. The following list provides the mapping of the resource type and resource ID.</p> <p class="title"> <b>Mapping of resource and resource ID</b> </p> <ul> <li> <p>AccessKey - <code>resource.accessKeyDetails.accessKeyId</code> </p> </li> <li> <p>Container - <code>resource.containerDetails.id</code> </p> </li> <li> <p>ECSCluster - <code>resource.ecsClusterDetails.name</code> </p> </li> <li> <p>EKSCluster - <code>resource.eksClusterDetails.name</code> </p> </li> <li> <p>Instance - <code>resource.instanceDetails.instanceId</code> </p> </li> <li> <p>KubernetesCluster - <code>resource.kubernetesDetails.kubernetesWorkloadDetails.name</code> </p> </li> <li> <p>Lambda - <code>resource.lambdaDetails.functionName</code> </p> </li> <li> <p>RDSDBInstance - <code>resource.rdsDbInstanceDetails.dbInstanceIdentifier</code> </p> </li> <li> <p>S3Bucket - <code>resource.s3BucketDetails.name</code> </p> </li> <li> <p>S3Object - <code>resource.s3BucketDetails.name</code> </p> </li> </ul>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The total number of findings associated with this resource.</p>
   * @public
   */
  TotalFindings?: number | undefined;
}

/**
 * <p>Information about severity level for each finding type.</p>
 * @public
 */
export interface SeverityStatistics {
  /**
   * <p>The timestamp at which a finding type for a specific severity was last generated.</p>
   * @public
   */
  LastGeneratedAt?: Date | undefined;

  /**
   * <p>The severity level associated with each finding type.</p>
   * @public
   */
  Severity?: number | undefined;

  /**
   * <p>The total number of findings associated with this severity.</p>
   * @public
   */
  TotalFindings?: number | undefined;
}

/**
 * <p>Contains information about finding statistics.</p>
 * @public
 */
export interface FindingStatistics {
  /**
   * <p>Represents a list of map of severity to count statistics for a set of findings.</p>
   *
   * @deprecated This parameter is deprecated. Please set GroupBy to 'SEVERITY' to return GroupedBySeverity instead.
   * @public
   */
  CountBySeverity?: Record<string, number> | undefined;

  /**
   * <p>Represents a list of map of accounts with a findings count associated with each account.</p>
   * @public
   */
  GroupedByAccount?: AccountStatistics[] | undefined;

  /**
   * <p>Represents a list of map of dates with a count of total findings generated on each date per severity level.</p>
   * @public
   */
  GroupedByDate?: DateStatistics[] | undefined;

  /**
   * <p>Represents a list of map of finding types with a count of total findings generated for each type. </p> <p>Based on the <code>orderBy</code> parameter, this request returns either the most occurring finding types or the least occurring finding types. If the <code>orderBy</code> parameter is <code>ASC</code>, this will represent the least occurring finding types in your account; otherwise, this will represent the most occurring finding types. The default value of <code>orderBy</code> is <code>DESC</code>.</p>
   * @public
   */
  GroupedByFindingType?: FindingTypeStatistics[] | undefined;

  /**
   * <p>Represents a list of map of top resources with a count of total findings.</p>
   * @public
   */
  GroupedByResource?: ResourceStatistics[] | undefined;

  /**
   * <p>Represents a list of map of total findings for each severity level.</p>
   * @public
   */
  GroupedBySeverity?: SeverityStatistics[] | undefined;
}

/**
 * @public
 */
export interface GetAdministratorAccountRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface GetAdministratorAccountResponse {
  /**
   * <p>The administrator account details.</p>
   * @public
   */
  Administrator: Administrator | undefined;
}

/**
 * @public
 */
export interface GetCoverageStatisticsRequest {
  /**
   * <p>The unique ID of the GuardDuty detector.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents the criteria used to filter the coverage statistics.</p>
   * @public
   */
  FilterCriteria?: CoverageFilterCriteria | undefined;

  /**
   * <p>Represents the statistics type used to aggregate the coverage details.</p>
   * @public
   */
  StatisticsType: CoverageStatisticsType[] | undefined;
}

/**
 * @public
 */
export interface GetCoverageStatisticsResponse {
  /**
   * <p>Represents the count aggregated by the <code>statusCode</code> and <code>resourceType</code>.</p>
   * @public
   */
  CoverageStatistics?: CoverageStatistics | undefined;
}

/**
 * @public
 */
export interface GetCustomDetectionRuleRequest {
  /**
   * <p>The unique identifier for the custom detection rule.</p>
   * @public
   */
  RuleId: string | undefined;
}

/**
 * <p>Contains the detection logic for a custom detection rule.</p>
 * @public
 */
export interface RuleDefinition {
  /**
   * <p>The detection logic expression for the rule.</p>
   * @public
   */
  Expression: string | undefined;
}

/**
 * <p>Contains the full details of a custom detection rule, including its detection logic.</p>
 * @public
 */
export interface RuleDetail {
  /**
   * <p>The unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The display name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of what the rule detects.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The severity level assigned to findings generated by this rule.</p>
   * @public
   */
  Severity: DetectionRuleSeverity | undefined;

  /**
   * <p>The data source that the rule analyzes.</p>
   * @public
   */
  DataSource: DetectionRuleDataSource | undefined;

  /**
   * <p>The MITRE ATT&amp;CK tactic associated with the rule.</p>
   * @public
   */
  Tactic: string | undefined;

  /**
   * <p>The MITRE ATT&amp;CK technique associated with the rule.</p>
   * @public
   */
  Technique: string | undefined;

  /**
   * <p>The Amazon Web Services service associated with the rule.</p>
   * @public
   */
  Service: string | undefined;

  /**
   * <p>The detection logic definition for the rule.</p>
   * @public
   */
  Definition: RuleDefinition | undefined;

  /**
   * <p>The language used for the detection logic expression.</p>
   * @public
   */
  Language?: RuleLanguage | undefined;

  /**
   * <p>The schema version used by the rule definition.</p>
   * @public
   */
  Schema?: RuleSchema | undefined;

  /**
   * <p>Runtime Monitoring-specific details for the rule, including the platforms on which the rule can run and the minimum GuardDuty agent version required on each.</p>
   * @public
   */
  RuntimeMonitoringDetails?: DetectionRuleRuntimeMonitoringDetails | undefined;

  /**
   * <p>The timestamp when the rule was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the rule was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetCustomDetectionRuleResponse {
  /**
   * <p>The details of the custom detection rule.</p>
   * @public
   */
  Rule: RuleDetail | undefined;
}

/**
 * @public
 */
export interface GetCustomDetectionRuleAssociationRequest {
  /**
   * <p>The unique identifier for the custom detection rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The unique identifier for the association.</p>
   * @public
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface GetCustomDetectionRuleAssociationResponse {
  /**
   * <p>The details of the custom detection rule association.</p>
   * @public
   */
  RuleAssociation: AssociationDetail | undefined;

  /**
   * <p>The tags associated with the custom detection rule association resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetCustomDetectionRuleOrgConfigurationRequest {
  /**
   * <p>The unique identifier for the custom detection rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The execution mode of the organization configuration to retrieve. Valid values: <code>LIVE</code> | <code>DRY_RUN</code>.</p>
   * @public
   */
  Mode: AssociationMode | undefined;
}

/**
 * @public
 */
export interface GetCustomDetectionRuleOrgConfigurationResponse {
  /**
   * <p>The details of the organization configuration.</p>
   * @public
   */
  Configuration: DetectionRuleOrgConfiguration | undefined;
}

/**
 * @public
 */
export interface GetDetectorRequest {
  /**
   * <p>The unique ID of the detector that you want to get.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * @public
 */
export interface GetDetectorResponse {
  /**
   * <p>The timestamp of when the detector was created.</p>
   * @public
   */
  CreatedAt?: string | undefined;

  /**
   * <p>The publishing frequency of the finding.</p>
   * @public
   */
  FindingPublishingFrequency?: FindingPublishingFrequency | undefined;

  /**
   * <p>The GuardDuty service role.</p>
   * @public
   */
  ServiceRole: string | undefined;

  /**
   * <p>The detector status.</p>
   * @public
   */
  Status: DetectorStatus | undefined;

  /**
   * <p>The last-updated timestamp for the detector.</p>
   * @public
   */
  UpdatedAt?: string | undefined;

  /**
   * <p>Describes which data sources are enabled for the detector.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead.
   * @public
   */
  DataSources?: DataSourceConfigurationsResult | undefined;

  /**
   * <p>The tags of the detector resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Describes the features that have been enabled for the detector.</p>
   * @public
   */
  Features?: DetectorFeatureConfigurationResult[] | undefined;
}

/**
 * @public
 */
export interface GetFilterRequest {
  /**
   * <p>The unique ID of the detector that is associated with this filter.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter you want to get.</p>
   * @public
   */
  FilterName: string | undefined;
}

/**
 * @public
 */
export interface GetFilterResponse {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the filter.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   * @public
   */
  Action: FilterAction | undefined;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.</p>
   * @public
   */
  Rank?: number | undefined;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings.</p>
   * @public
   */
  FindingCriteria: FindingCriteria | undefined;

  /**
   * <p>The tags of the filter resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the filter was created. This field is not available for filters that were created before the lifecycle metadata feature was enabled (legacy filters).</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the filter was last updated. For legacy filters, this field is present only after the filter has been updated at least once since the lifecycle metadata feature was enabled.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The version of the filter. Every time the filter is updated, the version increments by 1. This field is not available for legacy filters that were created before the lifecycle metadata feature was enabled.</p>
   * @public
   */
  Version?: number | undefined;
}

/**
 * @public
 */
export interface GetFindingsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to retrieve.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings that you want to retrieve.</p>
   * @public
   */
  FindingIds: string[] | undefined;

  /**
   * <p>Represents the criteria used for sorting findings.</p>
   * @public
   */
  SortCriteria?: SortCriteria | undefined;
}

/**
 * @public
 */
export interface GetFindingsResponse {
  /**
   * <p>A list of findings.</p>
   * @public
   */
  Findings: Finding[] | undefined;
}

/**
 * @public
 */
export interface GetFindingsStatisticsRequest {
  /**
   * <p>The ID of the detector whose findings statistics you want to retrieve.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The types of finding statistics to retrieve.</p>
   *
   * @deprecated This parameter is deprecated, please use GroupBy instead.
   * @public
   */
  FindingStatisticTypes?: FindingStatisticType[] | undefined;

  /**
   * <p>Represents the criteria that is used for querying findings.</p>
   * @public
   */
  FindingCriteria?: FindingCriteria | undefined;

  /**
   * <p>Displays the findings statistics grouped by one of the listed valid values.</p>
   * @public
   */
  GroupBy?: GroupByType | undefined;

  /**
   * <p>Displays the sorted findings in the requested order. The default value of <code>orderBy</code> is <code>DESC</code>.</p> <p>You can use this parameter only with the <code>groupBy</code> parameter.</p>
   * @public
   */
  OrderBy?: OrderBy | undefined;

  /**
   * <p>The maximum number of results to be returned in the response. The default value is 25.</p> <p>You can use this parameter only with the <code>groupBy</code> parameter.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetFindingsStatisticsResponse {
  /**
   * <p>The finding statistics object.</p>
   * @public
   */
  FindingStatistics: FindingStatistics | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p> <p>This parameter is currently not supported.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationRequest {
  /**
   * <p>The unique ID of the GuardDuty detector associated with the investigation.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique identifier of the investigation to retrieve.</p>
   * @public
   */
  InvestigationId: string | undefined;

  /**
   * <p>The format in which to return the investigation summary. Possible values:</p> <ul> <li> <p> <code>STRING</code> – (Default) Returns the summary as text in <code>Summary</code>.</p> </li> <li> <p> <code>STRUCTURED</code> – Returns a typed summary in <code>SummaryData</code>.</p> </li> </ul> <p>GuardDuty returns a summary only when the investigation status is <code>COMPLETED</code>.</p>
   * @public
   */
  SummaryFormat?: SummaryFormat | undefined;
}

/**
 * <p>Contains information about the product that produced an investigation.</p>
 * @public
 */
export interface Product {
  /**
   * <p>The name of the product.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The specific feature within the product that produced the investigation.</p>
   * @public
   */
  Feature?: string | undefined;
}

/**
 * <p>Contains metadata about the product and version that produced an investigation.</p>
 * @public
 */
export interface InvestigationMetadata {
  /**
   * <p>The version of the investigation engine that produced the results.</p>
   * @public
   */
  Version: string | undefined;

  /**
   * <p>Information about the product that produced the investigation.</p>
   * @public
   */
  Product: Product | undefined;
}

/**
 * <p>Contains the start and end of a time window.</p>
 * @public
 */
export interface QueryTimeWindow {
  /**
   * <p>The timestamp at which the time window starts.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The timestamp at which the time window ends.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * <p>Contains information about what an investigation analyzed. Only the identifier that matches <code>InvestigationType</code> is set.</p>
 * @public
 */
export interface InvestigationScope {
  /**
   * <p>The type of investigation. Possible values:</p> <ul> <li> <p> <code>FINDING</code> – An investigation of a specific GuardDuty finding.</p> </li> <li> <p> <code>ACCOUNT</code> – An investigation of the threat posture of an Amazon Web Services account.</p> </li> <li> <p> <code>ORGANIZATION</code> – An investigation of your organization's threat posture.</p> </li> </ul>
   * @public
   */
  InvestigationType?: InvestigationType | undefined;

  /**
   * <p>The ID of the finding that the investigation analyzed. Set only when <code>InvestigationType</code> is <code>FINDING</code>.</p>
   * @public
   */
  FindingId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that the investigation analyzed. Set only when <code>InvestigationType</code> is <code>ACCOUNT</code>.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the administrator account of the organization that the investigation analyzed. Set only when <code>InvestigationType</code> is <code>ORGANIZATION</code>.</p>
   * @public
   */
  AdminAccountId?: string | undefined;

  /**
   * <p>The time window over which the investigation queried data, set only when <code>InvestigationType</code> is <code>ACCOUNT</code> or <code>ORGANIZATION</code>.</p>
   * @public
   */
  QueryTimeWindow?: QueryTimeWindow | undefined;
}

/**
 * <p>Contains the key observations of an investigation.</p>
 * @public
 */
export interface KeyObservations {
  /**
   * <p>A short title for the key observations.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>A narrative explanation of the key observations.</p>
   * @public
   */
  Narrative?: string | undefined;

  /**
   * <p>The individual key observations.</p>
   * @public
   */
  Observations?: string[] | undefined;
}

/**
 * <p>Contains a summary of findings across an organization.</p>
 * @public
 */
export interface OrganizationFindingsSummary {
  /**
   * <p>The total number of findings across the organization.</p>
   * @public
   */
  TotalFindings?: number | undefined;

  /**
   * <p>The number of findings at each severity level across the organization.</p>
   * @public
   */
  SeverityBreakdown?: SeverityBreakdown | undefined;

  /**
   * <p>The finding types that have the most findings, with counts.</p>
   * @public
   */
  TopFindingTypes?: FindingTypeCount[] | undefined;

  /**
   * <p>The number of findings in each time window.</p>
   * @public
   */
  ByTimeWindow?: TimeWindowGroup[] | undefined;

  /**
   * <p>The total number of accounts in the organization.</p>
   * @public
   */
  TotalAccountCount?: number | undefined;

  /**
   * <p>The number of accounts that have findings.</p>
   * @public
   */
  AffectedAccountCount?: number | undefined;
}

/**
 * <p>Contains an analysis of the findings across an organization.</p>
 * @public
 */
export interface OrganizationAnalysis {
  /**
   * <p>A summary of the findings across the organization.</p>
   * @public
   */
  FindingsSummary?: OrganizationFindingsSummary | undefined;

  /**
   * <p>The accounts in the organization that have findings, with the number of findings in each.</p>
   * @public
   */
  AccountBreakdown?: AccountSummary[] | undefined;
}

/**
 * <p>Contains a recommended action.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>A short title for the recommendation.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The reason for the recommendation.</p>
   * @public
   */
  Rationale?: string | undefined;

  /**
   * <p>The category of the recommendation. Possible values are <code>ENABLE_PROTECTION</code>, <code>FURTHER_INVESTIGATION</code>, <code>SUPPRESSION_RULE</code>, <code>HARDENING</code>, and <code>MONITORING</code>.</p>
   * @public
   */
  Category?: RecommendationCategory | undefined;

  /**
   * <p>The priority of the recommendation. Possible values are <code>IMMEDIATE</code>, <code>SHORT_TERM</code>, and <code>STRATEGIC</code>.</p>
   * @public
   */
  Priority?: ActionPriority | undefined;

  /**
   * <p>CLI commands that you can run to carry out the recommendation.</p>
   * @public
   */
  CliCommands?: string[] | undefined;
}

/**
 * <p>Contains an assessment of the threat that a <code>FINDING</code> investigation identified.</p>
 * @public
 */
export interface ThreatAssessment {
  /**
   * <p>The phases of the attack, in terms of MITRE ATT&amp;CK tactics.</p>
   * @public
   */
  AttackProgression?: AttackPhase[] | undefined;

  /**
   * <p>A description of the likely threat actor.</p>
   * @public
   */
  ThreatActorProfile?: string | undefined;
}

/**
 * <p>Contains the structured summary of a GuardDuty investigation. The fields that are present depend on the investigation type.</p>
 * @public
 */
export interface InvestigationSummaryData {
  /**
   * <p>For a <code>FINDING</code> investigation, the type of the finding that the investigation analyzed.</p>
   * @public
   */
  FindingType?: string | undefined;

  /**
   * <p>For a <code>FINDING</code> investigation, an assessment of the threat, including how the attack progressed.</p>
   * @public
   */
  ThreatAssessment?: ThreatAssessment | undefined;

  /**
   * <p>For a <code>FINDING</code> investigation, actions that you can take to respond to the threat, grouped by defensive tactic.</p>
   * @public
   */
  Countermeasures?: Countermeasure[] | undefined;

  /**
   * <p>For an <code>ACCOUNT</code> investigation, an analysis of the findings in the investigated account.</p>
   * @public
   */
  AccountAnalysis?: AccountAnalysis | undefined;

  /**
   * <p>For an <code>ORGANIZATION</code> investigation, an analysis of the findings across the organization.</p>
   * @public
   */
  OrganizationAnalysis?: OrganizationAnalysis | undefined;

  /**
   * <p>The key observations of the investigation.</p>
   * @public
   */
  KeyObservations?: KeyObservations | undefined;

  /**
   * <p>For an <code>ACCOUNT</code> or <code>ORGANIZATION</code> investigation, the recommended actions.</p>
   * @public
   */
  Recommendations?: Recommendation[] | undefined;
}

/**
 * <p>Contains the details and results of a GuardDuty investigation.</p>
 * @public
 */
export interface Investigation {
  /**
   * <p>The unique identifier of the investigation.</p>
   * @public
   */
  InvestigationId: string | undefined;

  /**
   * <p>The current status of the investigation. Possible values are <code>RUNNING</code>, <code>COMPLETED</code>, and <code>FAILED</code>.</p>
   * @public
   */
  Status: InvestigationStatus | undefined;

  /**
   * <p>The natural-language prompt that initiated this investigation.</p>
   * @public
   */
  TriggerPrompt: string | undefined;

  /**
   * <p>The account that initiated the investigation.</p>
   * @public
   */
  TriggeredBy: string | undefined;

  /**
   * <p>Metadata about the product and version that produced the investigation.</p>
   * @public
   */
  Metadata?: InvestigationMetadata | undefined;

  /**
   * <p>Details about the cloud environment in which the investigation was performed, including the provider, region, and account.</p>
   * @public
   */
  Cloud?: CloudDetails | undefined;

  /**
   * <p>The assessed risk level of the investigated threat. Possible values are <code>Info</code>, <code>Low</code>, <code>Medium</code>, <code>High</code>, and <code>Critical</code>.</p>
   * @public
   */
  RiskLevel?: RiskLevel | undefined;

  /**
   * <p>A human-readable description of the assessed risk.</p>
   * @public
   */
  Risk?: string | undefined;

  /**
   * <p>The confidence level of the investigation's assessment. Possible values are <code>Unknown</code>, <code>Low</code>, <code>Medium</code>, and <code>High</code>.</p>
   * @public
   */
  Confidence?: Confidence | undefined;

  /**
   * <p>A summary of the investigation results as text, up to 262,144 characters. Returned only when the investigation status is <code>COMPLETED</code>. When you set <code>SummaryFormat</code> to <code>STRUCTURED</code>, the summary is returned in <code>SummaryData</code> instead, unless it isn't available in a structured form, in which case it's returned in this field.</p>
   * @public
   */
  Summary?: string | undefined;

  /**
   * <p>A structured summary of the investigation results. GuardDuty returns this field only when you set <code>SummaryFormat</code> to <code>STRUCTURED</code>, the investigation status is <code>COMPLETED</code>, and the summary is available in a structured form. When this field is returned, <code>Summary</code> isn't returned.</p>
   * @public
   */
  SummaryData?: InvestigationSummaryData | undefined;

  /**
   * <p>Information about what the investigation analyzed, including the investigation type, the finding, account, or organization that was analyzed, and, for <code>ACCOUNT</code> and <code>ORGANIZATION</code> investigations, the time window over which the investigation queried data. Returned only when the investigation status is <code>COMPLETED</code>.</p>
   * @public
   */
  Scope?: InvestigationScope | undefined;

  /**
   * <p>The timestamp at which the investigation started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The timestamp at which the investigation completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>Details about the error if the investigation status is <code>FAILED</code>.</p>
   * @public
   */
  Error?: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationResponse {
  /**
   * <p>The details and results of the requested investigation.</p>
   * @public
   */
  Investigation: Investigation | undefined;
}

/**
 * @public
 */
export interface GetInvitationsCountRequest {}

/**
 * @public
 */
export interface GetInvitationsCountResponse {
  /**
   * <p>The number of received invitations.</p>
   * @public
   */
  InvitationsCount?: number | undefined;
}

/**
 * @public
 */
export interface GetIPSetRequest {
  /**
   * <p>The unique ID of the detector that is associated with the IPSet.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the IPSet to retrieve.</p>
   * @public
   */
  IpSetId: string | undefined;
}

/**
 * @public
 */
export interface GetIPSetResponse {
  /**
   * <p>The user-friendly name for the IPSet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the IPSet.</p>
   * @public
   */
  Format: IpSetFormat | undefined;

  /**
   * <p>The URI of the file that contains the IPSet.</p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>The status of IPSet file that was uploaded.</p>
   * @public
   */
  Status: IpSetStatus | undefined;

  /**
   * <p>The tags of the IPSet resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter. This field appears in the response only if it was provided during IPSet creation or update.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetMalwareProtectionPlanRequest {
  /**
   * <p>A unique identifier associated with Malware Protection plan resource.</p>
   * @public
   */
  MalwareProtectionPlanId: string | undefined;
}

/**
 * <p>Information about the issue code and message associated to the status of your Malware Protection plan.</p>
 * @public
 */
export interface MalwareProtectionPlanStatusReason {
  /**
   * <p>Issue code.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>Issue message that specifies the reason. For information about potential troubleshooting steps, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/troubleshoot-s3-malware-protection-status-errors.html">Troubleshooting Malware Protection for S3 status issues</a> in the <i>Amazon GuardDuty User Guide</i>.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface GetMalwareProtectionPlanResponse {
  /**
   * <p>Amazon Resource Name (ARN) of the protected resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role that includes the permissions to scan and add tags to the associated protected resource.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>Information about the protected resource that is associated with the created Malware Protection plan. Presently, <code>S3Bucket</code> is the only supported protected resource.</p>
   * @public
   */
  ProtectedResource?: CreateProtectedResource | undefined;

  /**
   * <p>Information about whether the tags will be added to the S3 object after scanning.</p>
   * @public
   */
  Actions?: MalwareProtectionPlanActions | undefined;

  /**
   * <p>The timestamp when the Malware Protection plan resource was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>Malware Protection plan status.</p>
   * @public
   */
  Status?: MalwareProtectionPlanStatus | undefined;

  /**
   * <p>Information about the issue code and message associated to the status of your Malware Protection plan.</p>
   * @public
   */
  StatusReasons?: MalwareProtectionPlanStatusReason[] | undefined;

  /**
   * <p>Tags added to the Malware Protection plan resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMalwareScanRequest {
  /**
   * <p>A unique identifier that gets generated when you invoke the API without any error. Each malware scan has a corresponding scan ID. Using this scan ID, you can monitor the status of your malware scan.</p>
   * @public
   */
  ScanId: string | undefined;
}

/**
 * <p>Contains information about the recovery point configuration used in the scan.</p>
 * @public
 */
export interface ScanConfigurationRecoveryPoint {
  /**
   * <p>The name of the Amazon Web Services Backup vault that contains the recovery point for the scanned.</p>
   * @public
   */
  BackupVaultName?: string | undefined;

  /**
   * <p>The time range within the continuous backup in Amazon Web Services Backup that was scanned for a point-in-time recovery resource.</p>
   * @public
   */
  ContinuousScanDetails?: ScanConfigurationContinuousScanDetails | undefined;
}

/**
 * <p>Contains information about the configuration used for the malware scan.</p>
 * @public
 */
export interface ScanConfiguration {
  /**
   * <p>Amazon Resource Name (ARN) of the IAM role that should contain the required permissions for the scan.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>Information about the entity that triggered the malware scan.</p>
   * @public
   */
  TriggerDetails?: TriggerDetails | undefined;

  /**
   * <p>Information about the incremental scan configuration, if applicable.</p>
   * @public
   */
  IncrementalScanDetails?: IncrementalScanDetails | undefined;

  /**
   * <p>Information about the recovery point configuration used for the scan, if applicable.</p>
   * @public
   */
  RecoveryPoint?: ScanConfigurationRecoveryPoint | undefined;
}

/**
 * <p>Contains additional information about a resource that was scanned.</p>
 * @public
 */
export interface ScannedResourceDetails {
  /**
   * <p>Contains information about the EBS volume that was scanned.</p>
   * @public
   */
  EbsVolume?: VolumeDetail | undefined;

  /**
   * <p>Contains information about the EBS snapshot that was scanned.</p>
   * @public
   */
  EbsSnapshot?: EbsSnapshot | undefined;
}

/**
 * <p>Contains information about a resource that was scanned as part of the malware scan operation.</p>
 * @public
 */
export interface ScannedResource {
  /**
   * <p>Amazon Resource Name (ARN) of the scanned resource.</p>
   * @public
   */
  ScannedResourceArn?: string | undefined;

  /**
   * <p>The resource type of the scanned resource.</p>
   * @public
   */
  ScannedResourceType?: MalwareProtectionResourceType | undefined;

  /**
   * <p>The status of the scanned resource.</p>
   * @public
   */
  ScannedResourceStatus?: MalwareProtectionScanStatus | undefined;

  /**
   * <p>The reason for the scan status of this particular resource, if applicable.</p>
   * @public
   */
  ScanStatusReason?: ScanStatusReason | undefined;

  /**
   * <p>Information about the scanned resource.</p>
   * @public
   */
  ResourceDetails?: ScannedResourceDetails | undefined;
}

/**
 * <p>Contains information about a specific threat that was detected during the malware scan.</p>
 * @public
 */
export interface ScanResultThreat {
  /**
   * <p>The name of the detected threat.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The source that detected this threat.</p>
   * @public
   */
  Source?: DetectionSource | undefined;

  /**
   * <p>The number of instances of this threat that were detected.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The hash value associated with the detected threat.</p>
   * @public
   */
  Hash?: string | undefined;

  /**
   * <p>Additional information about where this threat was detected.</p>
   * @public
   */
  ItemDetails?: ItemDetails[] | undefined;
}

/**
 * <p>Contains information about the results of the malware scan.</p>
 * @public
 */
export interface GetMalwareScanResultDetails {
  /**
   * <p>Status indicating whether threats were found for a completed scan.</p>
   * @public
   */
  ScanResultStatus?: ScanResultStatus | undefined;

  /**
   * <p>The total number of files that were skipped during the scan.</p>
   * @public
   */
  SkippedFileCount?: number | undefined;

  /**
   * <p>The total number of files that failed to be scanned.</p>
   * @public
   */
  FailedFileCount?: number | undefined;

  /**
   * <p>The total number of files in which threats were detected.</p>
   * @public
   */
  ThreatFoundFileCount?: number | undefined;

  /**
   * <p>The total number of files that were processed during the scan.</p>
   * @public
   */
  TotalFileCount?: number | undefined;

  /**
   * <p>The total number of bytes that were scanned.</p>
   * @public
   */
  TotalBytes?: number | undefined;

  /**
   * <p>The total number of unique threats that were detected during the scan.</p>
   * @public
   */
  UniqueThreatCount?: number | undefined;

  /**
   * <p>The threats that were detected during the malware scan.</p>
   * @public
   */
  Threats?: ScanResultThreat[] | undefined;
}

/**
 * @public
 */
export interface GetMalwareScanResponse {
  /**
   * <p>A unique identifier associated with the malware scan. Each malware scan has a corresponding scan ID. Using this scan ID, you can monitor the status of your malware scan.</p>
   * @public
   */
  ScanId?: string | undefined;

  /**
   * <p>The unique ID of the detector that is associated with the request, if it belongs to an account which is a GuardDuty customer.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId?: string | undefined;

  /**
   * <p>The unique detector ID of the administrator account that the request is associated with. If the account is an administrator, the <code>AdminDetectorId</code> will be the same as the one used for <code>DetectorId. If the customer is not a GuardDuty customer, this field will not be present.</code>.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  AdminDetectorId?: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the resource on which a malware scan was invoked.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The type of resource that was scanned for malware.</p>
   * @public
   */
  ResourceType?: MalwareProtectionResourceType | undefined;

  /**
   * <p>The total number of resources that were successfully scanned. This is dependent on the resource type.</p>
   * @public
   */
  ScannedResourcesCount?: number | undefined;

  /**
   * <p>The total number of resources that were skipped during the scan.</p>
   * @public
   */
  SkippedResourcesCount?: number | undefined;

  /**
   * <p>The total number of resources that failed to be scanned.</p>
   * @public
   */
  FailedResourcesCount?: number | undefined;

  /**
   * <p>A list of resources along with their metadata that were scanned as part of the malware scan operation.</p>
   * @public
   */
  ScannedResources?: ScannedResource[] | undefined;

  /**
   * <p>Information about the scan configuration used for the malware scan.</p>
   * @public
   */
  ScanConfiguration?: ScanConfiguration | undefined;

  /**
   * <p>The category of the malware scan, indicating the type of scan performed.</p>
   * @public
   */
  ScanCategory?: ScanCategory | undefined;

  /**
   * <p>A value representing the current status of the malware scan.</p>
   * @public
   */
  ScanStatus?: MalwareProtectionScanStatus | undefined;

  /**
   * <p>Represents the reason for the current scan status, if applicable.</p>
   * @public
   */
  ScanStatusReason?: ScanStatusReason | undefined;

  /**
   * <p>A value representing the initiator of the scan.</p>
   * @public
   */
  ScanType?: MalwareProtectionScanType | undefined;

  /**
   * <p>The timestamp representing when the malware scan was started.</p>
   * @public
   */
  ScanStartedAt?: Date | undefined;

  /**
   * <p>The timestamp representing when the malware scan was completed.</p>
   * @public
   */
  ScanCompletedAt?: Date | undefined;

  /**
   * <p>Detailed information about the results of the malware scan, if the scan completed.</p>
   * @public
   */
  ScanResultDetails?: GetMalwareScanResultDetails | undefined;
}

/**
 * @public
 */
export interface GetMalwareScanSettingsRequest {
  /**
   * <p>The unique ID of the detector that is associated with this scan.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * <p>Represents the <code>key:value</code> pair to be matched against given resource property.</p>
 * @public
 */
export interface ScanConditionPair {
  /**
   * <p>Represents the <b>key</b> in the map condition.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Represents optional <b>value</b> in the map condition. If not specified, only the <b>key</b> will be matched.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Contains information about the condition.</p>
 * @public
 */
export interface ScanCondition {
  /**
   * <p>Represents an <i>mapEqual</i> <b/> condition to be applied to a single field when triggering for malware scan.</p>
   * @public
   */
  MapEquals: ScanConditionPair[] | undefined;
}

/**
 * <p>Contains information about criteria used to filter resources before triggering malware scan.</p>
 * @public
 */
export interface ScanResourceCriteria {
  /**
   * <p>Represents condition that when matched will allow a malware scan for a certain resource.</p>
   * @public
   */
  Include?: Partial<Record<ScanCriterionKey, ScanCondition>> | undefined;

  /**
   * <p>Represents condition that when matched will prevent a malware scan for a certain resource.</p>
   * @public
   */
  Exclude?: Partial<Record<ScanCriterionKey, ScanCondition>> | undefined;
}

/**
 * @public
 */
export interface GetMalwareScanSettingsResponse {
  /**
   * <p>Represents the criteria to be used in the filter for scanning resources.</p>
   * @public
   */
  ScanResourceCriteria?: ScanResourceCriteria | undefined;

  /**
   * <p>An enum value representing possible snapshot preservation settings.</p>
   * @public
   */
  EbsSnapshotPreservation?: EbsSnapshotPreservation | undefined;
}

/**
 * @deprecated This input is deprecated, use GetAdministratorAccountRequest instead.
 * @public
 */
export interface GetMasterAccountRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;
}

/**
 * <p>Contains information about the administrator account and invitation.</p>
 * @public
 */
export interface Master {
  /**
   * <p>The ID of the account used as the administrator account.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The value used to validate the administrator account to the member account.</p>
   * @public
   */
  InvitationId?: string | undefined;

  /**
   * <p>The status of the relationship between the administrator and member accounts.</p>
   * @public
   */
  RelationshipStatus?: string | undefined;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   * @public
   */
  InvitedAt?: string | undefined;
}

/**
 * @deprecated This output is deprecated, use GetAdministratorAccountResponse instead.
 * @public
 */
export interface GetMasterAccountResponse {
  /**
   * <p>The administrator account details.</p>
   * @public
   */
  Master: Master | undefined;
}

/**
 * @public
 */
export interface GetMemberDetectorsRequest {
  /**
   * <p>The detector ID for the administrator account.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of member account IDs.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>Information about the additional configuration for the member account.</p>
 * @public
 */
export interface MemberAdditionalConfigurationResult {
  /**
   * <p>Indicates the name of the additional configuration that is set for the member account.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration | undefined;

  /**
   * <p>Indicates the status of the additional configuration that is set for the member account.</p>
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * <p>The timestamp at which the additional configuration was set for the member account. This is in UTC format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>Indicates what manages the additional configuration. A value of <code>GUARDDUTY_POLICY</code> means a GuardDuty policy manages the additional configuration.</p>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * <p>Contains information about the features for the member account.</p>
 * @public
 */
export interface MemberFeaturesConfigurationResult {
  /**
   * <p>Indicates the name of the feature that is enabled for the detector.</p>
   * @public
   */
  Name?: OrgFeature | undefined;

  /**
   * <p>Indicates the status of the feature that is enabled for the detector.</p>
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * <p>The timestamp at which the feature object was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>Indicates the additional configuration of the feature that is configured for the member account.</p>
   * @public
   */
  AdditionalConfiguration?: MemberAdditionalConfigurationResult[] | undefined;

  /**
   * <p>Indicates what manages the feature. A value of <code>GUARDDUTY_POLICY</code> means a GuardDuty policy manages the feature.</p>
   * @public
   */
  ManagedBy?: ManagedBy | undefined;
}

/**
 * <p>Contains information on which data sources are enabled for a member account.</p>
 * @public
 */
export interface MemberDataSourceConfiguration {
  /**
   * <p>The account ID for the member account.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>Contains information on the status of data sources for the account.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead.
   * @public
   */
  DataSources: DataSourceConfigurationsResult | undefined;

  /**
   * <p>Contains information about the status of the features for the member account.</p>
   * @public
   */
  Features?: MemberFeaturesConfigurationResult[] | undefined;
}

/**
 * @public
 */
export interface GetMemberDetectorsResponse {
  /**
   * <p>An object that describes which data sources are enabled for a member account.</p>
   * @public
   */
  MemberDataSourceConfigurations: MemberDataSourceConfiguration[] | undefined;

  /**
   * <p>A list of member account IDs that were unable to be processed along with an explanation for why they were not processed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface GetMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account whose members you want to retrieve.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts that you want to describe.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * <p>Contains information about the member account. </p>
 * @public
 */
export interface Member {
  /**
   * <p>The ID of the member account.</p>
   * @public
   */
  AccountId: string | undefined;

  /**
   * <p>The detector ID of the member account.</p>
   * @public
   */
  DetectorId?: string | undefined;

  /**
   * <p>The administrator account ID.</p>
   * @public
   */
  MasterId: string | undefined;

  /**
   * <p>The email address of the member account.</p>
   * @public
   */
  Email: string | undefined;

  /**
   * <p>The status of the relationship between the member and the administrator.</p>
   * @public
   */
  RelationshipStatus: string | undefined;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   * @public
   */
  InvitedAt?: string | undefined;

  /**
   * <p>The last-updated timestamp of the member.</p>
   * @public
   */
  UpdatedAt: string | undefined;

  /**
   * <p>The administrator account ID.</p>
   * @public
   */
  AdministratorId?: string | undefined;
}

/**
 * @public
 */
export interface GetMembersResponse {
  /**
   * <p>A list of members.</p>
   * @public
   */
  Members: Member[] | undefined;

  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * <p>Information about the coverage statistic for the additional configuration of the feature.</p>
 * @public
 */
export interface OrganizationFeatureStatisticsAdditionalConfiguration {
  /**
   * <p>Name of the additional configuration within a feature.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration | undefined;

  /**
   * <p>Total number of accounts that have enabled the additional configuration.</p>
   * @public
   */
  EnabledAccountsCount?: number | undefined;
}

/**
 * <p>Information about the number of accounts that have enabled a specific feature.</p>
 * @public
 */
export interface OrganizationFeatureStatistics {
  /**
   * <p>Name of the feature.</p>
   * @public
   */
  Name?: OrgFeature | undefined;

  /**
   * <p>Total number of accounts that have enabled a specific feature.</p>
   * @public
   */
  EnabledAccountsCount?: number | undefined;

  /**
   * <p>Name of the additional configuration.</p>
   * @public
   */
  AdditionalConfiguration?: OrganizationFeatureStatisticsAdditionalConfiguration[] | undefined;
}

/**
 * <p>Information about the coverage statistics of the features for the entire Amazon Web Services organization.</p> <p>When you create a new Amazon Web Services organization, it might take up to 24 hours to generate the statistics summary for this organization.</p>
 * @public
 */
export interface OrganizationStatistics {
  /**
   * <p>Total number of accounts in your Amazon Web Services organization.</p>
   * @public
   */
  TotalAccountsCount?: number | undefined;

  /**
   * <p>Total number of accounts in your Amazon Web Services organization that are associated with GuardDuty.</p>
   * @public
   */
  MemberAccountsCount?: number | undefined;

  /**
   * <p>Total number of active accounts in your Amazon Web Services organization that are associated with GuardDuty.</p>
   * @public
   */
  ActiveAccountsCount?: number | undefined;

  /**
   * <p>Total number of accounts that have enabled GuardDuty.</p>
   * @public
   */
  EnabledAccountsCount?: number | undefined;

  /**
   * <p>Retrieves the coverage statistics for each feature.</p>
   * @public
   */
  CountByFeature?: OrganizationFeatureStatistics[] | undefined;
}

/**
 * <p>Information about GuardDuty coverage statistics for members in your Amazon Web Services organization.</p>
 * @public
 */
export interface OrganizationDetails {
  /**
   * <p>The timestamp at which the organization statistics was last updated. This is in UTC format.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>Information about the GuardDuty coverage statistics for members in your Amazon Web Services organization.</p>
   * @public
   */
  OrganizationStatistics?: OrganizationStatistics | undefined;
}

/**
 * @public
 */
export interface GetOrganizationStatisticsResponse {
  /**
   * <p>Information about the statistics report for your organization.</p>
   * @public
   */
  OrganizationDetails?: OrganizationDetails | undefined;
}

/**
 * @public
 */
export interface GetRemainingFreeTrialDaysRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty member account.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account identifiers of the GuardDuty member account.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface GetRemainingFreeTrialDaysResponse {
  /**
   * <p>The member accounts which were included in a request and were processed successfully.</p>
   * @public
   */
  Accounts?: AccountFreeTrialInfo[] | undefined;

  /**
   * <p>The member account that was included in a request but for which the request could not be processed.</p>
   * @public
   */
  UnprocessedAccounts?: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface GetThreatEntitySetRequest {
  /**
   * <p>The unique ID of the detector associated with the threat entity set resource.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that helps GuardDuty identify the threat entity set.</p>
   * @public
   */
  ThreatEntitySetId: string | undefined;
}

/**
 * @public
 */
export interface GetThreatEntitySetResponse {
  /**
   * <p>The name of the threat entity set associated with the specified <code>threatEntitySetId</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the threat entity set.</p>
   * @public
   */
  Format: ThreatEntitySetFormat | undefined;

  /**
   * <p>The URI of the file that contains the threat entity set.</p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>The status of the associated threat entity set.</p>
   * @public
   */
  Status: ThreatEntitySetStatus | undefined;

  /**
   * <p>The tags associated with the threat entity set resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the associated threat entity set was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the associated threat entity set was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The error details when the status is shown as <code>ERROR</code>.</p>
   * @public
   */
  ErrorDetails?: string | undefined;
}

/**
 * @public
 */
export interface GetThreatIntelSetRequest {
  /**
   * <p>The unique ID of the detector that is associated with the threatIntelSet.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID of the threatIntelSet that you want to get.</p>
   * @public
   */
  ThreatIntelSetId: string | undefined;
}

/**
 * @public
 */
export interface GetThreatIntelSetResponse {
  /**
   * <p>A user-friendly ThreatIntelSet name displayed in all findings that are generated by activity that involves IP addresses included in this ThreatIntelSet.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The format of the threatIntelSet.</p>
   * @public
   */
  Format: ThreatIntelSetFormat | undefined;

  /**
   * <p>The URI of the file that contains the ThreatIntelSet. </p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>The status of threatIntelSet file uploaded.</p>
   * @public
   */
  Status: ThreatIntelSetStatus | undefined;

  /**
   * <p>The tags of the threat list resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter. This field appears in the response only if it was provided during ThreatIntelSet creation or update.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface GetTrustedEntitySetRequest {
  /**
   * <p>The unique ID of the GuardDuty detector associated with this trusted entity set.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that helps GuardDuty identify the trusted entity set.</p>
   * @public
   */
  TrustedEntitySetId: string | undefined;
}

/**
 * @public
 */
export interface GetTrustedEntitySetResponse {
  /**
   * <p>The name of the threat entity set associated with the specified <code>trustedEntitySetId</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The format of the file that contains the trusted entity set.</p>
   * @public
   */
  Format: TrustedEntitySetFormat | undefined;

  /**
   * <p>The URI of the file that contains the trusted entity set.</p>
   * @public
   */
  Location: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>The status of the associated trusted entity set.</p>
   * @public
   */
  Status: TrustedEntitySetStatus | undefined;

  /**
   * <p>The tags associated with trusted entity set resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when the associated trusted entity set was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp when the associated trusted entity set was updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>The error details when the status is shown as <code>ERROR</code>.</p>
   * @public
   */
  ErrorDetails?: string | undefined;
}

/**
 * <p>Contains information about the criteria used to query usage statistics.</p>
 * @public
 */
export interface UsageCriteria {
  /**
   * <p>The account IDs to aggregate usage statistics from.</p>
   * @public
   */
  AccountIds?: string[] | undefined;

  /**
   * <p>The data sources to aggregate usage statistics from.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead.
   * @public
   */
  DataSources?: DataSource[] | undefined;

  /**
   * <p>The resources to aggregate usage statistics from. Only accepts exact resource names.</p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>The features to aggregate usage statistics from.</p>
   * @public
   */
  Features?: UsageFeature[] | undefined;
}

/**
 * @public
 */
export interface GetUsageStatisticsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose usage statistics you want to retrieve.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The type of usage statistics to retrieve.</p>
   * @public
   */
  UsageStatisticType: UsageStatisticType | undefined;

  /**
   * <p>Represents the criteria used for querying usage.</p>
   * @public
   */
  UsageCriteria: UsageCriteria | undefined;

  /**
   * <p>The currency unit you would like to view your usage statistics in. Current valid values are USD.</p>
   * @public
   */
  Unit?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the total usage with the corresponding currency unit for that value.</p>
 * @public
 */
export interface Total {
  /**
   * <p>The total usage.</p>
   * @public
   */
  Amount?: string | undefined;

  /**
   * <p>The currency unit that the amount is given in.</p>
   * @public
   */
  Unit?: string | undefined;
}

/**
 * <p>Contains information on the total of usage based on account IDs.</p>
 * @public
 */
export interface UsageAccountResult {
  /**
   * <p>The Account ID that generated usage.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Represents the total of usage for the Account ID.</p>
   * @public
   */
  Total?: Total | undefined;
}

/**
 * <p>Contains information on the result of usage based on data source type.</p>
 * @public
 */
export interface UsageDataSourceResult {
  /**
   * <p>The data source type that generated usage.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>Represents the total of usage for the specified data source.</p>
   * @public
   */
  Total?: Total | undefined;
}

/**
 * <p>Contains information about the result of the total usage based on the feature.</p>
 * @public
 */
export interface UsageFeatureResult {
  /**
   * <p>The feature that generated the usage cost.</p>
   * @public
   */
  Feature?: UsageFeature | undefined;

  /**
   * <p>Contains the total usage with the corresponding currency unit for that value.</p>
   * @public
   */
  Total?: Total | undefined;
}

/**
 * <p>Contains information on the sum of usage based on an Amazon Web Services resource.</p>
 * @public
 */
export interface UsageResourceResult {
  /**
   * <p>The Amazon Web Services resource that generated usage.</p>
   * @public
   */
  Resource?: string | undefined;

  /**
   * <p>Represents the sum total of usage for the specified resource type.</p>
   * @public
   */
  Total?: Total | undefined;
}

/**
 * <p>Contains information on the total of usage based on the topmost 50 account IDs.</p>
 * @public
 */
export interface UsageTopAccountResult {
  /**
   * <p>The unique account ID.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>Contains the total usage with the corresponding currency unit for that value.</p>
   * @public
   */
  Total?: Total | undefined;
}

/**
 * <p>Information about the usage statistics, calculated by top accounts by feature.</p>
 * @public
 */
export interface UsageTopAccountsResult {
  /**
   * <p>Features by which you can generate the usage statistics.</p> <p> <code>RDS_LOGIN_EVENTS</code> is currently not supported with <code>topAccountsByFeature</code>.</p>
   * @public
   */
  Feature?: UsageFeature | undefined;

  /**
   * <p>The accounts that contributed to the total usage cost.</p>
   * @public
   */
  Accounts?: UsageTopAccountResult[] | undefined;
}

/**
 * <p>Contains the result of GuardDuty usage. If a UsageStatisticType is provided the result for other types will be null. </p>
 * @public
 */
export interface UsageStatistics {
  /**
   * <p>The usage statistic sum organized by account ID.</p>
   * @public
   */
  SumByAccount?: UsageAccountResult[] | undefined;

  /**
   * <p>Lists the top 50 accounts by feature that have generated the most GuardDuty usage, in the order from most to least expensive.</p> <p>Currently, this doesn't support <code>RDS_LOGIN_EVENTS</code>.</p>
   * @public
   */
  TopAccountsByFeature?: UsageTopAccountsResult[] | undefined;

  /**
   * <p>The usage statistic sum organized by on data source.</p>
   * @public
   */
  SumByDataSource?: UsageDataSourceResult[] | undefined;

  /**
   * <p>The usage statistic sum organized by resource.</p>
   * @public
   */
  SumByResource?: UsageResourceResult[] | undefined;

  /**
   * <p>Lists the top 50 resources that have generated the most GuardDuty usage, in order from most to least expensive.</p>
   * @public
   */
  TopResources?: UsageResourceResult[] | undefined;

  /**
   * <p>The usage statistic sum organized by feature.</p>
   * @public
   */
  SumByFeature?: UsageFeatureResult[] | undefined;
}

/**
 * @public
 */
export interface GetUsageStatisticsResponse {
  /**
   * <p>The usage statistics object. If a UsageStatisticType was provided, the objects representing other types will be null.</p>
   * @public
   */
  UsageStatistics?: UsageStatistics | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface InviteMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty account with which you want to invite members.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the accounts that you want to invite to GuardDuty as members.</p>
   * @public
   */
  AccountIds: string[] | undefined;

  /**
   * <p>A Boolean value that specifies whether you want to disable email notification to the accounts that you are inviting to GuardDuty as members.</p>
   * @public
   */
  DisableEmailNotification?: boolean | undefined;

  /**
   * <p>The invitation message that you want to send to the accounts that you're inviting to GuardDuty as members.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface InviteMembersResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface ListCoverageRequest {
  /**
   * <p>The unique ID of the detector whose coverage details you want to retrieve.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Represents the criteria used to filter the coverage details.</p>
   * @public
   */
  FilterCriteria?: CoverageFilterCriteria | undefined;

  /**
   * <p>Represents the criteria used to sort the coverage details.</p>
   * @public
   */
  SortCriteria?: CoverageSortCriteria | undefined;
}

/**
 * @public
 */
export interface ListCoverageResponse {
  /**
   * <p>A list of resources and their attributes providing cluster details.</p>
   * @public
   */
  Resources: CoverageResource[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomDetectionRuleAssociationsRequest {
  /**
   * <p>The maximum number of results to return in a single page. Minimum value of 1, maximum value of 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token from a previous response. Use this token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The unique identifier for the custom detection rule to filter associations by.</p>
   * @public
   */
  RuleId?: string | undefined;

  /**
   * <p>The rule execution mode to filter associations by.</p>
   * @public
   */
  Mode?: AssociationMode | undefined;
}

/**
 * @public
 */
export interface ListCustomDetectionRuleAssociationsResponse {
  /**
   * <p>A list of custom detection rule association summaries.</p>
   * @public
   */
  RuleAssociations: AssociationSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next page of results. If this field is empty, there are no additional results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomDetectionRuleOrgConfigurationsRequest {
  /**
   * <p>The maximum number of results to return in a single page. Minimum value of 1, maximum value of 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token from a previous response. Use this token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The configuration status to filter by.</p>
   * @public
   */
  Status?: DetectionRuleConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface ListCustomDetectionRuleOrgConfigurationsResponse {
  /**
   * <p>A list of organization configurations for custom detection rules.</p>
   * @public
   */
  Configurations: DetectionRuleOrgConfigurationSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next page of results. If this field is empty, there are no additional results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomDetectionRulesRequest {
  /**
   * <p>The maximum number of results to return in a single page. Minimum value of 1, maximum value of 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A pagination token from a previous response. Use this token to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of filter criteria to apply when listing custom detection rules.</p>
   * @public
   */
  Filters?: DetectionRuleFilter[] | undefined;
}

/**
 * <p>Contains summary information about a custom detection rule.</p>
 * @public
 */
export interface RuleSummary {
  /**
   * <p>The unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The display name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of what the rule detects.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The severity level assigned to findings generated by this rule.</p>
   * @public
   */
  Severity: DetectionRuleSeverity | undefined;

  /**
   * <p>The data source that the rule analyzes.</p>
   * @public
   */
  DataSource: DetectionRuleDataSource | undefined;

  /**
   * <p>The MITRE ATT&amp;CK tactic associated with the rule.</p>
   * @public
   */
  Tactic: string | undefined;

  /**
   * <p>The MITRE ATT&amp;CK technique associated with the rule.</p>
   * @public
   */
  Technique: string | undefined;

  /**
   * <p>The Amazon Web Services service associated with the rule.</p>
   * @public
   */
  Service: string | undefined;

  /**
   * <p>The language used for the detection logic expression.</p>
   * @public
   */
  Language?: RuleLanguage | undefined;

  /**
   * <p>The schema version used by the rule definition.</p>
   * @public
   */
  Schema?: RuleSchema | undefined;

  /**
   * <p>The timestamp when the rule was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp when the rule was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCustomDetectionRulesResponse {
  /**
   * <p>A list of custom detection rule summaries.</p>
   * @public
   */
  Rules: RuleSummary[] | undefined;

  /**
   * <p>A pagination token to retrieve the next page of results. If this field is empty, there are no additional results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDetectorsRequest {
  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDetectorsResponse {
  /**
   * <p>A list of detector IDs.</p>
   * @public
   */
  DetectorIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFiltersRequest {
  /**
   * <p>The unique ID of the detector that is associated with the filter.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFiltersResponse {
  /**
   * <p>A list of filter names.</p>
   * @public
   */
  FilterNames: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * <p>The ID of the detector that specifies the GuardDuty service whose findings you want to list.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents the criteria used for querying findings. Valid values include:</p> <ul> <li> <p>JSON field name</p> </li> <li> <p>accountId</p> </li> <li> <p>region</p> </li> <li> <p>confidence</p> </li> <li> <p>id</p> </li> <li> <p>resource.accessKeyDetails.accessKeyId</p> </li> <li> <p>resource.accessKeyDetails.principalId</p> </li> <li> <p>resource.accessKeyDetails.userName</p> </li> <li> <p>resource.accessKeyDetails.userType</p> </li> <li> <p>resource.instanceDetails.iamInstanceProfile.id</p> </li> <li> <p>resource.instanceDetails.imageId</p> </li> <li> <p>resource.instanceDetails.instanceId</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.ipv6Addresses</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.publicDnsName</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.publicIp</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.securityGroups.groupId</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.securityGroups.groupName</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.subnetId</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.vpcId</p> </li> <li> <p>resource.instanceDetails.tags.key</p> </li> <li> <p>resource.instanceDetails.tags.value</p> </li> <li> <p>resource.resourceType</p> </li> <li> <p>service.action.actionType</p> </li> <li> <p>service.action.awsApiCallAction.api</p> </li> <li> <p>service.action.awsApiCallAction.callerType</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.city.cityName</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.country.countryName</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.ipAddressV4</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.organization.asn</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg</p> </li> <li> <p>service.action.awsApiCallAction.serviceName</p> </li> <li> <p>service.action.dnsRequestAction.domain</p> </li> <li> <p>service.action.dnsRequestAction.domainWithSuffix</p> </li> <li> <p>service.action.networkConnectionAction.blocked</p> </li> <li> <p>service.action.networkConnectionAction.connectionDirection</p> </li> <li> <p>service.action.networkConnectionAction.localPortDetails.port</p> </li> <li> <p>service.action.networkConnectionAction.protocol</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.country.countryName</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.ipAddressV4</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.organization.asn</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg</p> </li> <li> <p>service.action.networkConnectionAction.remotePortDetails.port</p> </li> <li> <p>service.additionalInfo.threatListName</p> </li> <li> <p>service.archived</p> <p>When this attribute is set to 'true', only archived findings are listed. When it's set to 'false', only unarchived findings are listed. When this attribute is not set, all existing findings are listed.</p> </li> <li> <p>service.ebsVolumeScanDetails.scanId</p> </li> <li> <p>service.resourceRole</p> </li> <li> <p>severity</p> </li> <li> <p>type</p> </li> <li> <p>updatedAt</p> <p>Type: Timestamp in Unix Epoch millisecond format: 1486685375000</p> </li> </ul>
   * @public
   */
  FindingCriteria?: FindingCriteria | undefined;

  /**
   * <p>Represents the criteria used for sorting findings.</p>
   * @public
   */
  SortCriteria?: SortCriteria | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * <p>The IDs of the findings that you're listing.</p>
   * @public
   */
  FindingIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvestigationRecordsRequest {
  /**
   * <p>The unique ID of the GuardDuty detector associated with the investigation.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique identifier of the investigation whose records you want to list.</p>
   * @public
   */
  InvestigationId: string | undefined;

  /**
   * <p>The types of records to return. Possible values are <code>UPDATE</code>, <code>FETCH</code>, <code>OBSERVATION</code>, <code>ANALYSIS</code>, and <code>METADATA</code>. If you don't specify this parameter, GuardDuty returns records of all types.</p>
   * @public
   */
  RecordTypes?: RecordType[] | undefined;

  /**
   * <p>The maximum number of records to return in a single response. Valid values are 1 to 50. The default value is 20. A response can contain fewer records than this value, or no records, and still include a <code>NextToken</code>.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data. Use the same <code>InvestigationId</code> and <code>RecordTypes</code> values that you used in the previous request.</p> <p>If you specify this parameter for an investigation whose status isn't <code>COMPLETED</code>, the operation returns a <code>BadRequestException</code>. A <code>NextToken</code> expires 24 hours after it's returned.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains operational details about an investigation, such as how long it took.</p>
 * @public
 */
export interface MetadataRecord {
  /**
   * <p>The total time that the investigation took, in milliseconds.</p>
   * @public
   */
  TotalTimeMilliseconds?: number | undefined;
}

/**
 * <p>Contains details about anomalous Kubernetes behavior.</p>
 * @public
 */
export interface KubernetesAnomaly {
  /**
   * <p>A description of the unusual behavior.</p>
   * @public
   */
  UnusualBehavior?: string | undefined;

  /**
   * <p>A description of the normal behavior that the activity was compared against.</p>
   * @public
   */
  BaselineContext?: string | undefined;

  /**
   * <p>The anomaly score of the behavior.</p>
   * @public
   */
  AnomalyScore?: string | undefined;

  /**
   * <p>The period over which the normal behavior was established.</p>
   * @public
   */
  TrainingPeriod?: string | undefined;
}

/**
 * <p>Contains details about a Kubernetes API call.</p>
 * @public
 */
export interface KubernetesApiCall {
  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  ClusterName?: string | undefined;

  /**
   * <p>The Kubernetes user name of the caller.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The Kubernetes groups of the caller.</p>
   * @public
   */
  UserGroups?: string | undefined;

  /**
   * <p>The ID of the caller.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The Kubernetes API verb, such as <code>get</code> or <code>create</code>.</p>
   * @public
   */
  Verb?: string | undefined;

  /**
   * <p>The type of the Kubernetes resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The name of the Kubernetes resource.</p>
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * <p>The Kubernetes namespace of the resource.</p>
   * @public
   */
  Namespace?: string | undefined;

  /**
   * <p>The URI of the request.</p>
   * @public
   */
  RequestUri?: string | undefined;

  /**
   * <p>The status code of the API call.</p>
   * @public
   */
  StatusCode?: number | undefined;

  /**
   * <p>The source IP addresses of the API call.</p>
   * @public
   */
  SourceIps?: string | undefined;

  /**
   * <p>The user agent of the caller.</p>
   * @public
   */
  UserAgent?: string | undefined;

  /**
   * <p>The number of matching API calls.</p>
   * @public
   */
  EventCount?: number | undefined;
}

/**
 * <p>Contains details about a Kubernetes workload.</p>
 * @public
 */
export interface InvestigationKubernetesWorkload {
  /**
   * <p>The type of the workload.</p>
   * @public
   */
  WorkloadType?: string | undefined;

  /**
   * <p>The name of the workload.</p>
   * @public
   */
  WorkloadName?: string | undefined;

  /**
   * <p>The containers in the workload.</p>
   * @public
   */
  Containers?: string | undefined;

  /**
   * <p>The volumes of the workload.</p>
   * @public
   */
  Volumes?: string | undefined;

  /**
   * <p>The security context of the workload.</p>
   * @public
   */
  SecurityContext?: string | undefined;
}

/**
 * <p>Contains details about Kubernetes activity. A record contains either <code>ApiCall</code> and <code>Enrichment</code>, or <code>Anomaly</code> and <code>Workload</code>.</p>
 * @public
 */
export interface KubernetesActivity {
  /**
   * <p>Details about a Kubernetes API call.</p>
   * @public
   */
  ApiCall?: KubernetesApiCall | undefined;

  /**
   * <p>Details about anomalous Kubernetes behavior.</p>
   * @public
   */
  Anomaly?: KubernetesAnomaly | undefined;

  /**
   * <p>The Kubernetes workload that is associated with the anomaly.</p>
   * @public
   */
  Workload?: InvestigationKubernetesWorkload | undefined;

  /**
   * <p>Additional context about the API call, such as geolocation information.</p>
   * @public
   */
  Enrichment?: Enrichment | undefined;
}

/**
 * <p>Contains information about a threat that a malware scan detected.</p>
 * @public
 */
export interface MalwareThreat {
  /**
   * <p>The name of the threat.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The severity of the threat.</p>
   * @public
   */
  Severity?: string | undefined;

  /**
   * <p>The number of files that the threat infected.</p>
   * @public
   */
  InfectedFileCount?: number | undefined;

  /**
   * <p>Examples of files that the threat infected.</p>
   * @public
   */
  SampleFiles?: string | undefined;
}

/**
 * <p>Contains details about a malware scan.</p>
 * @public
 */
export interface InvestigationMalwareScan {
  /**
   * <p>The ID of the scan.</p>
   * @public
   */
  ScanId?: string | undefined;

  /**
   * <p>The type of the scan. Possible values are <code>BACKUP_INITIATED</code>, <code>ON_DEMAND</code>, and <code>GUARDDUTY_INITIATED</code>.</p>
   * @public
   */
  ScanType?: MalwareProtectionScanType | undefined;

  /**
   * <p>The category of the scan. Possible values are <code>FULL_SCAN</code> and <code>INCREMENTAL_SCAN</code>.</p>
   * @public
   */
  ScanCategory?: ScanCategory | undefined;

  /**
   * <p>The ID of the finding that initiated the scan.</p>
   * @public
   */
  TriggerFindingId?: string | undefined;

  /**
   * <p>The scan engines that the scan used.</p>
   * @public
   */
  EngineSources?: string | undefined;

  /**
   * <p>The timestamp at which the scan started.</p>
   * @public
   */
  ScanStartedAt?: Date | undefined;

  /**
   * <p>The timestamp at which the scan completed.</p>
   * @public
   */
  ScanCompletedAt?: Date | undefined;

  /**
   * <p>The number of files that the scan scanned.</p>
   * @public
   */
  FilesScanned?: number | undefined;

  /**
   * <p>The amount of data that the scan scanned, in GB.</p>
   * @public
   */
  GigabytesScanned?: number | undefined;

  /**
   * <p>The number of volumes that the scan scanned.</p>
   * @public
   */
  VolumesScanned?: number | undefined;

  /**
   * <p>The number of infected files.</p>
   * @public
   */
  InfectedFileCount?: number | undefined;

  /**
   * <p>The type of the scanned resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The identifier of the scanned resource.</p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>The highest severity among the threats that the scan detected.</p>
   * @public
   */
  HighestSeverity?: string | undefined;

  /**
   * <p>The name of the threat that has the highest severity.</p>
   * @public
   */
  HighestSeverityThreatName?: string | undefined;

  /**
   * <p>The number of unique threats that the scan detected.</p>
   * @public
   */
  UniqueThreatCount?: number | undefined;

  /**
   * <p>The total number of infected items.</p>
   * @public
   */
  TotalInfectedItems?: number | undefined;

  /**
   * <p>The threats that the scan detected.</p>
   * @public
   */
  Threats?: MalwareThreat[] | undefined;
}

/**
 * <p>Contains information about how network activity deviates from normal behavior.</p>
 * @public
 */
export interface NetworkAnomaly {
  /**
   * <p>The amount of data that is typical for the normal behavior.</p>
   * @public
   */
  BaselineBytes?: string | undefined;

  /**
   * <p>How much the activity deviates from normal behavior.</p>
   * @public
   */
  Deviation?: string | undefined;

  /**
   * <p>The number of days of activity that the normal behavior is based on.</p>
   * @public
   */
  ProfileAgeDays?: number | undefined;

  /**
   * <p>The remote service that the activity involved.</p>
   * @public
   */
  RemoteService?: string | undefined;

  /**
   * <p>The Region of the remote endpoint.</p>
   * @public
   */
  RemoteRegion?: string | undefined;

  /**
   * <p>The duration of the activity.</p>
   * @public
   */
  Duration?: string | undefined;

  /**
   * <p>The ratio of connection attempts that were reset.</p>
   * @public
   */
  ResetRatio?: string | undefined;

  /**
   * <p>The number of target hosts.</p>
   * @public
   */
  TargetHostCount?: number | undefined;
}

/**
 * <p>Contains counts that describe network activity, such as the number of requests or connection attempts.</p>
 * @public
 */
export interface NetworkCounts {
  /**
   * <p>The number of requests.</p>
   * @public
   */
  RequestCount?: number | undefined;

  /**
   * <p>The total number of connection attempts.</p>
   * @public
   */
  TotalAttempts?: number | undefined;

  /**
   * <p>The number of connection attempts that were suspicious.</p>
   * @public
   */
  SuspiciousAttempts?: number | undefined;

  /**
   * <p>The number of connection attempts that were reset.</p>
   * @public
   */
  ResetAttempts?: number | undefined;
}

/**
 * <p>Contains information about the ports that network activity involved. A port value can be a single port, a range such as <code>51000-51010</code>, or a comma-separated list such as <code>443,8080</code>.</p>
 * @public
 */
export interface NetworkPorts {
  /**
   * <p>The port on the target of the activity.</p>
   * @public
   */
  TargetPort?: string | undefined;

  /**
   * <p>The port on the remote host.</p>
   * @public
   */
  RemotePort?: string | undefined;

  /**
   * <p>The port of the DNS resolver.</p>
   * @public
   */
  ResolverPort?: string | undefined;

  /**
   * <p>The ports that the activity involved.</p>
   * @public
   */
  Ports?: string | undefined;

  /**
   * <p>The ports that the activity used.</p>
   * @public
   */
  PortsUsed?: string | undefined;

  /**
   * <p>The number of ports that the activity involved.</p>
   * @public
   */
  PortCount?: number | undefined;
}

/**
 * <p>Contains the amount of data that network activity transferred.</p>
 * @public
 */
export interface NetworkTraffic {
  /**
   * <p>The number of bytes sent.</p>
   * @public
   */
  BytesSent?: number | undefined;

  /**
   * <p>The number of bytes received.</p>
   * @public
   */
  BytesReceived?: number | undefined;
}

/**
 * <p>Contains details about network activity.</p>
 * @public
 */
export interface NetworkActivity {
  /**
   * <p>The network protocol of the activity.</p>
   * @public
   */
  Protocol?: string | undefined;

  /**
   * <p>The direction of the network connection, such as inbound or outbound.</p>
   * @public
   */
  Direction?: string | undefined;

  /**
   * <p>The method that the network activity used.</p>
   * @public
   */
  Method?: string | undefined;

  /**
   * <p>Indicates whether the network connection was blocked.</p>
   * @public
   */
  Blocked?: string | undefined;

  /**
   * <p>The platform on which the network activity was observed.</p>
   * @public
   */
  Platform?: string | undefined;

  /**
   * <p>The ports that the network activity involved.</p>
   * @public
   */
  Ports?: NetworkPorts | undefined;

  /**
   * <p>The amount of data that the network activity transferred.</p>
   * @public
   */
  Traffic?: NetworkTraffic | undefined;

  /**
   * <p>Details about how the network activity deviates from normal behavior.</p>
   * @public
   */
  Anomaly?: NetworkAnomaly | undefined;

  /**
   * <p>DNS details about the network activity.</p>
   * @public
   */
  Dns?: DnsContext | undefined;

  /**
   * <p>Counts that describe the network activity, such as the number of requests or connection attempts.</p>
   * @public
   */
  Counts?: NetworkCounts | undefined;

  /**
   * <p>Additional context about the network activity, such as geolocation and threat intelligence information.</p>
   * @public
   */
  Enrichment?: Enrichment | undefined;
}

/**
 * <p>Contains details about login activity on an Amazon RDS database.</p>
 * @public
 */
export interface RdsLoginActivity {
  /**
   * <p>The outcome of the login attempts.</p>
   * @public
   */
  Outcome?: string | undefined;

  /**
   * <p>The rate of the login attempts.</p>
   * @public
   */
  Rate?: string | undefined;

  /**
   * <p>An explanation of how the login activity deviates from normal behavior.</p>
   * @public
   */
  AnomalyContext?: string | undefined;

  /**
   * <p>The number of login attempts.</p>
   * @public
   */
  LoginCount?: number | undefined;

  /**
   * <p>The time range of the login activity.</p>
   * @public
   */
  ActivityWindow?: ActivityWindow | undefined;

  /**
   * <p>Additional context about the login activity, such as geolocation information.</p>
   * @public
   */
  Enrichment?: Enrichment | undefined;
}

/**
 * <p>Contains information about a finding type that GuardDuty observed.</p>
 * @public
 */
export interface ObservedFindingType {
  /**
   * <p>The finding type.</p>
   * @public
   */
  FindingType?: string | undefined;

  /**
   * <p>The number of findings of this type.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The highest severity score among the findings of this type, from 0 to 10.</p>
   * @public
   */
  SeverityMax?: number | undefined;

  /**
   * <p>The resources that the findings of this type share with the investigated activity.</p>
   * @public
   */
  SharedResources?: SharedResource[] | undefined;
}

/**
 * <p>Contains information about findings that are related to the investigated activity.</p>
 * @public
 */
export interface RelatedFindings {
  /**
   * <p>The findings that GuardDuty correlated with the investigated activity, grouped by finding type.</p>
   * @public
   */
  Correlated?: CorrelatedFinding[] | undefined;

  /**
   * <p>Other finding types that GuardDuty observed, with counts. These entries don't include finding IDs.</p>
   * @public
   */
  Observed?: ObservedFindingType[] | undefined;
}

/**
 * <p>Contains a representative finding for an affected resource. GuardDuty selects one finding for each affected resource, based on severity.</p>
 * @public
 */
export interface RepresentativeFinding {
  /**
   * <p>The type of the affected resource.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The identifier of the affected resource.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>The ID of the representative finding.</p>
   * @public
   */
  FindingId?: string | undefined;

  /**
   * <p>The number of findings for the resource.</p>
   * @public
   */
  FindingCount?: number | undefined;

  /**
   * <p>The assessed risk level of the resource. Possible values are <code>Info</code>, <code>Low</code>, <code>Medium</code>, <code>High</code>, and <code>Critical</code>.</p>
   * @public
   */
  RiskLevel?: RiskLevel | undefined;

  /**
   * <p>The reason for the assessed risk level.</p>
   * @public
   */
  RiskRationale?: string | undefined;
}

/**
 * <p>Contains details about an Amazon EC2 instance.</p>
 * @public
 */
export interface InvestigationEc2Instance {
  /**
   * <p>The ID of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The instance type.</p>
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * <p>The state of the instance.</p>
   * @public
   */
  InstanceState?: string | undefined;

  /**
   * <p>The Availability Zone of the instance.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The private IP address of the instance.</p>
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * <p>The public IP address of the instance.</p>
   * @public
   */
  PublicIp?: string | undefined;

  /**
   * <p>The ID of the VPC in which the instance runs.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The ID of the subnet in which the instance runs.</p>
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) that was used to launch the instance.</p>
   * @public
   */
  ImageId?: string | undefined;

  /**
   * <p>The timestamp at which the instance was launched.</p>
   * @public
   */
  LaunchedAt?: Date | undefined;
}

/**
 * <p>Contains details about an Amazon ECS cluster.</p>
 * @public
 */
export interface InvestigationEcsCluster {
  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The status of the cluster.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Contains details about an Amazon EKS cluster.</p>
 * @public
 */
export interface InvestigationEksCluster {
  /**
   * <p>The name of the cluster.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The status of the cluster.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The ID of the VPC that is associated with the cluster.</p>
   * @public
   */
  VpcId?: string | undefined;
}

/**
 * <p>Contains details about an Lambda function.</p>
 * @public
 */
export interface LambdaFunction {
  /**
   * <p>The name of the function.</p>
   * @public
   */
  FunctionName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the function.</p>
   * @public
   */
  FunctionArn?: string | undefined;

  /**
   * <p>The version of the function.</p>
   * @public
   */
  FunctionVersion?: string | undefined;

  /**
   * <p>The execution role of the function.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>The description of the function.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The revision ID of the function version.</p>
   * @public
   */
  RevisionId?: string | undefined;

  /**
   * <p>The timestamp at which the function was last updated.</p>
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * <p>A summary of the VPC configuration of the function, as a single string.</p>
   * @public
   */
  VpcConfigurationSummary?: string | undefined;
}

/**
 * <p>Contains details about an Amazon RDS database instance.</p>
 * @public
 */
export interface RdsDbInstance {
  /**
   * <p>The identifier of the database instance.</p>
   * @public
   */
  DbInstanceIdentifier?: string | undefined;

  /**
   * <p>The identifier of the database cluster that contains the instance.</p>
   * @public
   */
  DbClusterIdentifier?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the database instance.</p>
   * @public
   */
  DbInstanceArn?: string | undefined;

  /**
   * <p>The unique resource ID of the database instance.</p>
   * @public
   */
  DbiResourceId?: string | undefined;

  /**
   * <p>The database engine of the instance.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
   * <p>The version of the database engine.</p>
   * @public
   */
  EngineVersion?: string | undefined;
}

/**
 * <p>Contains details about the user that logged in to an Amazon RDS database instance.</p>
 * @public
 */
export interface RdsDbUser {
  /**
   * <p>The user name that was used to log in.</p>
   * @public
   */
  User?: string | undefined;

  /**
   * <p>The name of the application that was used to log in.</p>
   * @public
   */
  Application?: string | undefined;

  /**
   * <p>The name of the database that the user logged in to.</p>
   * @public
   */
  Database?: string | undefined;

  /**
   * <p>The authentication method that the user used.</p>
   * @public
   */
  AuthMethod?: string | undefined;

  /**
   * <p>The version of Secure Sockets Layer (SSL) that the connection used.</p>
   * @public
   */
  Ssl?: string | undefined;
}

/**
 * <p>Contains details that are specific to the type of a resource. The member that is set matches the <code>ResourceType</code> of the resource, except that <code>RdsDbInstance</code> and <code>RdsDbUser</code> can be set together.</p>
 * @public
 */
export interface InvestigationResourceData {
  /**
   * <p>Details about an Amazon EC2 instance.</p>
   * @public
   */
  Ec2Instance?: InvestigationEc2Instance | undefined;

  /**
   * <p>Details about an Lambda function.</p>
   * @public
   */
  LambdaFunction?: LambdaFunction | undefined;

  /**
   * <p>Details about an Amazon RDS database instance.</p>
   * @public
   */
  RdsDbInstance?: RdsDbInstance | undefined;

  /**
   * <p>Details about the user that logged in to an Amazon RDS database instance.</p>
   * @public
   */
  RdsDbUser?: RdsDbUser | undefined;

  /**
   * <p>Details about an Amazon EKS cluster.</p>
   * @public
   */
  EksCluster?: InvestigationEksCluster | undefined;

  /**
   * <p>Details about an Amazon ECS cluster.</p>
   * @public
   */
  EcsCluster?: InvestigationEcsCluster | undefined;
}

/**
 * <p>Contains information about an Amazon Web Services resource that is relevant to an investigation.</p>
 * @public
 */
export interface InvestigationResource {
  /**
   * <p>The unique identifier of the resource. This is the Amazon Resource Name (ARN) of the resource when it's available. Otherwise, it's the name or ID of the resource.</p>
   * @public
   */
  Uid: string | undefined;

  /**
   * <p>The name of the resource.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the resource. Possible values are <code>EC2_INSTANCE</code>, <code>EBS_VOLUME</code>, <code>S3_BUCKET</code>, <code>IAM_ROLE</code>, <code>IAM_USER</code>, <code>IAM_ACCESS_KEY</code>, <code>LAMBDA_FUNCTION</code>, <code>EKS_CLUSTER</code>, <code>ECS_CLUSTER</code>, <code>KUBERNETES_WORKLOAD</code>, <code>RDS_INSTANCE</code>, <code>RDS_DB_USER</code>, and <code>EC2_SECURITY_GROUP</code>.</p>
   * @public
   */
  ResourceType: InvestigationResourceType | undefined;

  /**
   * <p>Details that are specific to the type of the resource.</p>
   * @public
   */
  Data?: InvestigationResourceData | undefined;
}

/**
 * <p>Contains information about a group of runtime signals that have the same finding type.</p>
 * @public
 */
export interface SignalGroup {
  /**
   * <p>The finding type of the group.</p>
   * @public
   */
  FindingType?: string | undefined;

  /**
   * <p>The severity score of the signals in the group, from 0 to 10.</p>
   * @public
   */
  Severity?: number | undefined;

  /**
   * <p>The number of signals in the group.</p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>Contains a summary of runtime signals.</p>
 * @public
 */
export interface RuntimeSignals {
  /**
   * <p>The runtime signals, grouped by finding type.</p>
   * @public
   */
  SignalGroups?: SignalGroup[] | undefined;

  /**
   * <p>A key observation about the runtime signals.</p>
   * @public
   */
  KeyObservation?: string | undefined;
}

/**
 * <p>Contains information about the identity that performed an activity.</p>
 * @public
 */
export interface InvestigationActor {
  /**
   * <p>The access key ID that the identity used.</p>
   * @public
   */
  AccessKeyId?: string | undefined;

  /**
   * <p>The ID of the principal.</p>
   * @public
   */
  PrincipalId?: string | undefined;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  UserName?: string | undefined;

  /**
   * <p>The type of the identity, such as <code>IAMUser</code>, <code>AssumedRole</code>, or <code>Root</code>.</p>
   * @public
   */
  UserType?: string | undefined;

  /**
   * <p>The user agent that the identity used.</p>
   * @public
   */
  UserAgent?: string | undefined;
}

/**
 * <p>Contains details about Amazon S3 activity.</p>
 * @public
 */
export interface S3Activity {
  /**
   * <p>The Amazon S3 API operation that was called.</p>
   * @public
   */
  Api?: string | undefined;

  /**
   * <p>The name of the affected bucket, or <code>account-wide</code> if the activity isn't limited to one bucket.</p>
   * @public
   */
  AffectedBucket?: string | undefined;

  /**
   * <p>Other Amazon S3 activity that is related to the observation.</p>
   * @public
   */
  OtherS3Activity?: string | undefined;

  /**
   * <p>Related activity on Amazon Web Services services other than Amazon S3.</p>
   * @public
   */
  NonS3Activity?: string | undefined;

  /**
   * <p>An assessment of the session in which the activity occurred.</p>
   * @public
   */
  SessionAssessment?: string | undefined;

  /**
   * <p>The number of events.</p>
   * @public
   */
  EventCount?: number | undefined;

  /**
   * <p>The identity that performed the activity.</p>
   * @public
   */
  Actor?: InvestigationActor | undefined;

  /**
   * <p>The source address of the activity, or a description of the source.</p>
   * @public
   */
  SourceIp?: string | undefined;

  /**
   * <p>Additional context about the activity, such as geolocation information.</p>
   * @public
   */
  Enrichment?: Enrichment | undefined;

  /**
   * <p>The time range of the activity.</p>
   * @public
   */
  ActivityWindow?: ActivityWindow | undefined;
}

/**
 * <p>Contains a fact that GuardDuty noted about your environment during an investigation, such as the affected resource, the activity on that resource, or your detection coverage. The record contains at most one of the payload members, the one that matches <code>ObservationType</code>. <code>Indicators</code> can accompany any observation type.</p>
 * @public
 */
export interface ObservationRecord {
  /**
   * <p>The kind of observation. The value identifies the payload member that can be set: <code>FINDING_DETAIL</code> (<code>FindingDetail</code>), <code>RESOURCE</code> (<code>Resource</code>), <code>NETWORK_ACTIVITY</code> (<code>NetworkActivity</code>), <code>RDS_LOGIN_ACTIVITY</code> (<code>RdsLoginActivity</code>), <code>S3_ACTIVITY</code> (<code>S3Activity</code>), <code>KUBERNETES_ACTIVITY</code> (<code>KubernetesActivity</code>), <code>MALWARE_SCAN</code> (<code>MalwareScan</code>), <code>RELATED_FINDINGS</code> (<code>RelatedFindings</code>), <code>DETECTION_COVERAGE</code> (<code>DetectionCoverage</code>), <code>ACCOUNT_OVERVIEW</code> (<code>AccountOverview</code>), <code>RECOMMENDATION</code> (<code>Recommendations</code>), <code>RUNTIME_SIGNALS</code> (<code>RuntimeSignals</code>), <code>DISTRIBUTION</code> (<code>Distribution</code>), and <code>REPRESENTATIVE_RESOURCE</code> (<code>RepresentativeResources</code>).</p>
   * @public
   */
  ObservationType: ObservationType | undefined;

  /**
   * <p>Details about a GuardDuty finding. Set when <code>ObservationType</code> is <code>FINDING_DETAIL</code>.</p>
   * @public
   */
  FindingDetail?: FindingDetail | undefined;

  /**
   * <p>Details about an affected resource. Set when <code>ObservationType</code> is <code>RESOURCE</code>.</p>
   * @public
   */
  Resource?: InvestigationResource | undefined;

  /**
   * <p>Details about network activity. Set when <code>ObservationType</code> is <code>NETWORK_ACTIVITY</code>.</p>
   * @public
   */
  NetworkActivity?: NetworkActivity | undefined;

  /**
   * <p>Details about login activity on an Amazon RDS database. Set when <code>ObservationType</code> is <code>RDS_LOGIN_ACTIVITY</code>.</p>
   * @public
   */
  RdsLoginActivity?: RdsLoginActivity | undefined;

  /**
   * <p>Details about Amazon S3 activity. Set when <code>ObservationType</code> is <code>S3_ACTIVITY</code>.</p>
   * @public
   */
  S3Activity?: S3Activity | undefined;

  /**
   * <p>Details about Kubernetes activity. Set when <code>ObservationType</code> is <code>KUBERNETES_ACTIVITY</code>.</p>
   * @public
   */
  KubernetesActivity?: KubernetesActivity | undefined;

  /**
   * <p>Details about a malware scan. Set when <code>ObservationType</code> is <code>MALWARE_SCAN</code>.</p>
   * @public
   */
  MalwareScan?: InvestigationMalwareScan | undefined;

  /**
   * <p>Details about findings that are related to the investigated activity. Set when <code>ObservationType</code> is <code>RELATED_FINDINGS</code>.</p>
   * @public
   */
  RelatedFindings?: RelatedFindings | undefined;

  /**
   * <p>Details about your detection coverage. Set when <code>ObservationType</code> is <code>DETECTION_COVERAGE</code>.</p>
   * @public
   */
  DetectionCoverage?: DetectionCoverage | undefined;

  /**
   * <p>Overview information about an account. Set when <code>ObservationType</code> is <code>ACCOUNT_OVERVIEW</code>.</p>
   * @public
   */
  AccountOverview?: AccountOverview | undefined;

  /**
   * <p>Recommended actions. Set when <code>ObservationType</code> is <code>RECOMMENDATION</code>.</p>
   * @public
   */
  Recommendations?: Recommendation[] | undefined;

  /**
   * <p>A summary of runtime signals. Set when <code>ObservationType</code> is <code>RUNTIME_SIGNALS</code>.</p>
   * @public
   */
  RuntimeSignals?: RuntimeSignals | undefined;

  /**
   * <p>A breakdown of findings along one dimension. Set when <code>ObservationType</code> is <code>DISTRIBUTION</code>.</p>
   * @public
   */
  Distribution?: Distribution | undefined;

  /**
   * <p>Representative findings for the affected resources, one finding for each resource. Set when <code>ObservationType</code> is <code>REPRESENTATIVE_RESOURCE</code>.</p>
   * @public
   */
  RepresentativeResources?: RepresentativeFinding[] | undefined;

  /**
   * <p>The threat indicators associated with the observation, such as an IP address, a domain, or a file hash.</p>
   * @public
   */
  Indicators?: InvestigationIndicator[] | undefined;
}

/**
 * <p>Contains the structured details for an investigation record. Only the member that matches the record type is set.</p>
 * @public
 */
export type SupportingData =
  | SupportingData.AnalysisMember
  | SupportingData.FetchMember
  | SupportingData.MetadataMember
  | SupportingData.ObservationMember
  | SupportingData.$UnknownMember;

/**
 * @public
 */
export namespace SupportingData {
  /**
   * <p>Details about data that GuardDuty retrieved. Set for <code>FETCH</code> records.</p>
   * @public
   */
  export interface FetchMember {
    Fetch: FetchRecord;
    Analysis?: never;
    Observation?: never;
    Metadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about an assessment that GuardDuty derived from the data. Set for <code>ANALYSIS</code> records.</p>
   * @public
   */
  export interface AnalysisMember {
    Fetch?: never;
    Analysis: AnalysisRecord;
    Observation?: never;
    Metadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Details about a fact that GuardDuty noted about your environment. Set for <code>OBSERVATION</code> records.</p>
   * @public
   */
  export interface ObservationMember {
    Fetch?: never;
    Analysis?: never;
    Observation: ObservationRecord;
    Metadata?: never;
    $unknown?: never;
  }

  /**
   * <p>Operational details about the investigation. Set for <code>METADATA</code> records.</p>
   * @public
   */
  export interface MetadataMember {
    Fetch?: never;
    Analysis?: never;
    Observation?: never;
    Metadata: MetadataRecord;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Fetch?: never;
    Analysis?: never;
    Observation?: never;
    Metadata?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    Fetch: (value: FetchRecord) => T;
    Analysis: (value: AnalysisRecord) => T;
    Observation: (value: ObservationRecord) => T;
    Metadata: (value: MetadataRecord) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains information about one step in the reasoning that GuardDuty followed during an investigation.</p>
 * @public
 */
export interface InvestigationRecord {
  /**
   * <p>The unique identifier of the record.</p>
   * @public
   */
  RecordId: string | undefined;

  /**
   * <p>The type of the record. Possible values:</p> <ul> <li> <p> <code>UPDATE</code> – A progress milestone, such as the request that started the investigation or a response from GuardDuty.</p> </li> <li> <p> <code>FETCH</code> – Data that GuardDuty retrieved for the investigation, such as a finding, a detector configuration, or a list of your member accounts. The record includes what GuardDuty requested and what it received.</p> </li> <li> <p> <code>OBSERVATION</code> – A fact that GuardDuty noted about your environment, such as the affected resource, the activity on that resource, or your detection coverage.</p> </li> <li> <p> <code>ANALYSIS</code> – An assessment that GuardDuty derived from the data, such as a threat assessment, a comparison against normal behavior, or a process lineage.</p> </li> <li> <p> <code>METADATA</code> – Operational details about the investigation itself, such as how long the investigation took.</p> </li> </ul>
   * @public
   */
  Type: RecordType | undefined;

  /**
   * <p>A short title that describes the step.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>A plain-text explanation of the step. A narrative can span several paragraphs. Not every record includes a narrative.</p>
   * @public
   */
  Narrative?: string | undefined;

  /**
   * <p>The timestamp at which GuardDuty created the record.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The structured details for the step. The member that is set matches the record type. <code>UPDATE</code> records never include supporting data, and records of other types don't always include it.</p>
   * @public
   */
  SupportingData?: SupportingData | undefined;
}

/**
 * @public
 */
export interface ListInvestigationRecordsResponse {
  /**
   * <p>The unique identifier of the investigation.</p>
   * @public
   */
  InvestigationId: string | undefined;

  /**
   * <p>The current status of the investigation. Possible values are <code>RUNNING</code>, <code>COMPLETED</code>, and <code>FAILED</code>. Records are returned only when the status is <code>COMPLETED</code>. If the status is <code>RUNNING</code> or <code>FAILED</code>, the response contains an empty list of records and no <code>NextToken</code>.</p>
   * @public
   */
  Status: InvestigationStatus | undefined;

  /**
   * <p>The records for the investigation, in the order that GuardDuty created them, oldest first. This list can contain fewer records than <code>MaxResults</code>, or no records, even when more records are available. To check for more records, use <code>NextToken</code>.</p>
   * @public
   */
  Records: InvestigationRecord[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items. If this value is absent, there are no more records to retrieve.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains the values that an investigation attribute must match. Specify <code>Equals</code>, <code>NotEquals</code>, or both, each with at least one value. If you specify both, an investigation must match both conditions.</p>
 * @public
 */
export interface InvestigationFilterCondition {
  /**
   * <p>The values to match. An investigation matches if its attribute value equals any of the specified values.</p>
   * @public
   */
  Equals?: string[] | undefined;

  /**
   * <p>The values to exclude. An investigation matches only if its attribute value doesn't equal any of the specified values. An investigation that has no value for the attribute also matches.</p>
   * @public
   */
  NotEquals?: string[] | undefined;
}

/**
 * <p>Contains the criteria used to filter investigations.</p>
 * @public
 */
export interface InvestigationFilterCriteria {
  /**
   * <p>A map of investigation attributes to the conditions that they must match. When you specify more than one attribute, an investigation must match the conditions for every attribute. Valid attributes and values:</p> <ul> <li> <p> <code>STATUS</code> – <code>RUNNING</code>, <code>COMPLETED</code>, and <code>FAILED</code>.</p> </li> <li> <p> <code>RISK_LEVEL</code> – <code>Info</code>, <code>Low</code>, <code>Medium</code>, <code>High</code>, and <code>Critical</code>.</p> </li> <li> <p> <code>CONFIDENCE</code> – <code>Unknown</code>, <code>Low</code>, <code>Medium</code>, and <code>High</code>.</p> </li> <li> <p> <code>FINDING_ID</code> – A finding ID, which is 32 lowercase hexadecimal characters.</p> </li> <li> <p> <code>INVESTIGATION_TYPE</code> – <code>FINDING</code>, <code>ACCOUNT</code>, and <code>ORGANIZATION</code>.</p> </li> </ul> <p>Values are case sensitive. GuardDuty sets the risk level, confidence, and investigation type of an investigation only when the investigation completes.</p>
   * @public
   */
  Criterion?: Partial<Record<InvestigationFilterCriterionKey, InvestigationFilterCondition>> | undefined;
}

/**
 * <p>Contains information about the criteria used for sorting investigations.</p>
 * @public
 */
export interface InvestigationSortCriteria {
  /**
   * <p>The attribute by which to sort investigations.</p>
   * @public
   */
  AttributeName?: InvestigationSortField | undefined;

  /**
   * <p>The order in which the sorted results are to be displayed.</p>
   * @public
   */
  OrderBy?: OrderBy | undefined;
}

/**
 * @public
 */
export interface ListInvestigationsRequest {
  /**
   * <p>The unique ID of the GuardDuty detector whose investigations you want to list.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The criteria used to filter investigations. GuardDuty returns only the investigations that match all of the specified criteria.</p>
   * @public
   */
  FilterCriteria?: InvestigationFilterCriteria | undefined;

  /**
   * <p>Represents the criteria used for sorting investigations.</p>
   * @public
   */
  SortCriteria?: InvestigationSortCriteria | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a GuardDuty investigation.</p>
 * @public
 */
export interface InvestigationSummary {
  /**
   * <p>The unique identifier of the investigation.</p>
   * @public
   */
  InvestigationId?: string | undefined;

  /**
   * <p>The current status of the investigation.</p>
   * @public
   */
  Status?: InvestigationStatus | undefined;

  /**
   * <p>The natural-language prompt that initiated this investigation.</p>
   * @public
   */
  TriggerPrompt?: string | undefined;

  /**
   * <p>The assessed risk level of the investigated threat.</p>
   * @public
   */
  RiskLevel?: RiskLevel | undefined;

  /**
   * <p>The confidence level of the investigation's assessment.</p>
   * @public
   */
  Confidence?: Confidence | undefined;

  /**
   * <p>A short title summarizing the investigation.</p>
   * @public
   */
  Title?: string | undefined;

  /**
   * <p>The type of investigation. Possible values are <code>FINDING</code>, <code>ACCOUNT</code>, and <code>ORGANIZATION</code>. GuardDuty sets this field when the investigation completes.</p>
   * @public
   */
  InvestigationType?: InvestigationType | undefined;

  /**
   * <p>For a <code>FINDING</code> investigation, the ID of the finding that the investigation analyzed. GuardDuty sets this field when the investigation completes.</p>
   * @public
   */
  FindingId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the investigation.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>For an <code>ORGANIZATION</code> investigation, the ID of the administrator account of the organization that the investigation analyzed. GuardDuty sets this field when the investigation completes.</p>
   * @public
   */
  AdminAccountId?: string | undefined;

  /**
   * <p>The timestamp at which the investigation started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The timestamp at which the investigation completed.</p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListInvestigationsResponse {
  /**
   * <p>A list of investigation summaries associated with the specified detector.</p>
   * @public
   */
  Investigations: InvestigationSummary[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsRequest {
  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains information about the invitation to become a member account.</p>
 * @public
 */
export interface Invitation {
  /**
   * <p>The ID of the account that the invitation was sent from.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the invitation. This value is used to validate the inviter account to the member account.</p>
   * @public
   */
  InvitationId?: string | undefined;

  /**
   * <p>The status of the relationship between the inviter and invitee accounts.</p>
   * @public
   */
  RelationshipStatus?: string | undefined;

  /**
   * <p>The timestamp when the invitation was sent.</p>
   * @public
   */
  InvitedAt?: string | undefined;
}

/**
 * @public
 */
export interface ListInvitationsResponse {
  /**
   * <p>A list of invitation descriptions.</p>
   * @public
   */
  Invitations?: Invitation[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIPSetsRequest {
  /**
   * <p>The unique ID of the detector that is associated with IPSet.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListIPSetsResponse {
  /**
   * <p>The IDs of the IPSet resources.</p>
   * @public
   */
  IpSetIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMalwareProtectionPlansRequest {
  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of <code>NextToken</code> from the previous response to continue listing data. The default page size is 100 plans.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Information about the Malware Protection plan resource.</p>
 * @public
 */
export interface MalwareProtectionPlanSummary {
  /**
   * <p>A unique identifier associated with Malware Protection plan.</p>
   * @public
   */
  MalwareProtectionPlanId?: string | undefined;
}

/**
 * @public
 */
export interface ListMalwareProtectionPlansResponse {
  /**
   * <p>A list of unique identifiers associated with each Malware Protection plan.</p>
   * @public
   */
  MalwareProtectionPlans?: MalwareProtectionPlanSummary[] | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of <code>NextToken</code> from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a condition that when matched will be added to the response of the operation. Irrespective of using any filter criteria, an administrator account can view the scan entries for all of its member accounts. However, each member account can view the scan entries only for their own account.</p>
 * @public
 */
export interface ListMalwareScansFilterCriterion {
  /**
   * <p>An enum value representing possible scan properties to match with given scan entries.</p>
   * @public
   */
  ListMalwareScansCriterionKey?: ListMalwareScansCriterionKey | undefined;

  /**
   * <p>Contains information about the condition.</p>
   * @public
   */
  FilterCondition?: FilterCondition | undefined;
}

/**
 * <p>Represents the criteria used to filter the malware scan entries.</p>
 * @public
 */
export interface ListMalwareScansFilterCriteria {
  /**
   * <p>Represents a condition that when matched will be added to the response of the operation.</p>
   * @public
   */
  ListMalwareScansFilterCriterion?: ListMalwareScansFilterCriterion[] | undefined;
}

/**
 * @public
 */
export interface ListMalwareScansRequest {
  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Represents the criteria used to filter the malware scan entries.</p>
   * @public
   */
  FilterCriteria?: ListMalwareScansFilterCriteria | undefined;

  /**
   * <p>Represents the criteria used for sorting malware scan entries.</p>
   * @public
   */
  SortCriteria?: SortCriteria | undefined;
}

/**
 * <p>Contains information about a particular malware scan.</p>
 * @public
 */
export interface MalwareScan {
  /**
   * <p>Amazon Resource Name (ARN) of the resource for the given malware scan.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The type of resource that was scanned for malware.</p>
   * @public
   */
  ResourceType?: MalwareProtectionResourceType | undefined;

  /**
   * <p>A unique identifier that gets generated when you invoke the API without any error. Each malware scan has a corresponding scan ID. Using this scan ID, you can monitor the status of your malware scan.</p>
   * @public
   */
  ScanId?: string | undefined;

  /**
   * <p>An enum value representing the current status of the malware scan.</p>
   * @public
   */
  ScanStatus?: MalwareProtectionScanStatus | undefined;

  /**
   * <p>An enum value representing the result of the malware scan.</p>
   * @public
   */
  ScanResultStatus?: ScanResultStatus | undefined;

  /**
   * <p>An enum value representing the type of scan that was initiated.</p>
   * @public
   */
  ScanType?: MalwareProtectionScanType | undefined;

  /**
   * <p>The timestamp representing when the malware scan was started.</p>
   * @public
   */
  ScanStartedAt?: Date | undefined;

  /**
   * <p>The timestamp representing when the malware scan was completed.</p>
   * @public
   */
  ScanCompletedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListMalwareScansResponse {
  /**
   * <p>The list of malware scans associated with the provided input parameters.</p>
   * @public
   */
  Scans: MalwareScan[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more scans.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * <p>The unique ID of the detector that is associated with the member.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifies whether to only return associated members or to return all members (including members who haven't been invited yet or have been disassociated). Member accounts must have been previously associated with the GuardDuty administrator account using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_CreateMembers.html"> <code>Create Members</code> </a>. </p>
   * @public
   */
  OnlyAssociated?: string | undefined;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * <p>A list of members.</p> <note> <p>The values for <code>email</code> and <code>invitedAt</code> are available only if the member accounts are added by invitation.</p> </note>
   * @public
   */
  Members?: Member[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>A list of accounts configured as GuardDuty delegated administrators.</p>
   * @public
   */
  AdminAccounts?: AdminAccount[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPublishingDestinationsRequest {
  /**
   * <p>The detector ID for which you want to retrieve the publishing destination.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPublishingDestinationsResponse {
  /**
   * <p>A <code>Destinations</code> object that includes information about each publishing destination returned.</p>
   * @public
   */
  Destinations: Destination[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the <code>NextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the given GuardDuty resource. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListThreatEntitySetsRequest {
  /**
   * <p>The unique ID of the GuardDuty detector that is associated with this threat entity set.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThreatEntitySetsResponse {
  /**
   * <p>The IDs of the threat entity set resources.</p>
   * @public
   */
  ThreatEntitySetIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThreatIntelSetsRequest {
  /**
   * <p>The unique ID of the detector that is associated with the threatIntelSet.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items that you want in the response. The default value is 50. The maximum value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter to paginate results in the response. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListThreatIntelSetsResponse {
  /**
   * <p>The IDs of the ThreatIntelSet resources.</p>
   * @public
   */
  ThreatIntelSetIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrustedEntitySetsRequest {
  /**
   * <p>The unique ID of the GuardDuty detector that is associated with this threat entity set.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>You can use this parameter to indicate the maximum number of items you want in the response. The default value is 50.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>You can use this parameter when paginating results. Set the value of this parameter to null on your first call to the list action. For subsequent calls to the action, fill nextToken in the request with the value of NextToken from the previous response to continue listing data.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTrustedEntitySetsResponse {
  /**
   * <p>The IDs of the trusted entity set resources.</p>
   * @public
   */
  TrustedEntitySetIds: string[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>The S3 object path to initiate a scan, including bucket name, object key, and optional version ID.</p>
 * @public
 */
export interface S3ObjectForSendObjectMalwareScan {
  /**
   * <p>The name of the S3 bucket containing the object to scan. The bucket must have GuardDuty Malware Protection enabled.</p>
   * @public
   */
  Bucket?: string | undefined;

  /**
   * <p>The key (name) of the S3 object to scan for malware. This must be the full key path of the object within the bucket.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The version ID of the S3 object to scan. If not specified, the latest version of the object is scanned.</p>
   * @public
   */
  VersionId?: string | undefined;
}

/**
 * @public
 */
export interface SendObjectMalwareScanRequest {
  /**
   * <p>The S3 object information for the object you want to scan. The bucket must have a Malware Protection plan configured to use this API.</p>
   * @public
   */
  S3Object?: S3ObjectForSendObjectMalwareScan | undefined;
}

/**
 * @public
 */
export interface SendObjectMalwareScanResponse {}

/**
 * <p>Contains information about the recovery point configuration for scanning backup data from Amazon Web Services Backup.</p>
 * @public
 */
export interface RecoveryPoint {
  /**
   * <p>The name of the Amazon Web Services Backup vault that contains the name of the recovery point to be scanned.</p>
   * @public
   */
  BackupVaultName: string | undefined;

  /**
   * <p>Contains information about the time range within the continuous backup in Amazon Web Services Backup to scan.</p>
   * @public
   */
  ContinuousScanDetails?: ContinuousScanDetails | undefined;
}

/**
 * <p>Contains information about the configuration to be used for the malware scan.</p>
 * @public
 */
export interface StartMalwareScanConfiguration {
  /**
   * <p>Amazon Resource Name (ARN) of the IAM role that is used for scanning the resource.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>Contains information about the incremental scan configuration. When specified, the scan will only process changes since the baseline resource.</p>
   * @public
   */
  IncrementalScanDetails?: IncrementalScanDetails | undefined;

  /**
   * <p>Contains information about the recovery point configuration for the requested scan.</p>
   * @public
   */
  RecoveryPoint?: RecoveryPoint | undefined;
}

/**
 * @public
 */
export interface StartMalwareScanRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource for which you invoked the API.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The idempotency token for the create request.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>Contains information about the configuration to be used for the malware scan.</p>
   * @public
   */
  ScanConfiguration?: StartMalwareScanConfiguration | undefined;
}

/**
 * @public
 */
export interface StartMalwareScanResponse {
  /**
   * <p>A unique identifier that gets generated when you invoke the API without any error. Each malware scan has a corresponding scan ID. Using this scan ID, you can monitor the status of your malware scan.</p>
   * @public
   */
  ScanId?: string | undefined;
}

/**
 * @public
 */
export interface StartMonitoringMembersRequest {
  /**
   * <p>The unique ID of the detector of the GuardDuty administrator account associated with the member accounts to monitor.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs of the GuardDuty member accounts to start monitoring.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface StartMonitoringMembersResponse {
  /**
   * <p>A list of objects that contain the unprocessed account and a result string that explains why it was unprocessed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface StopMonitoringMembersRequest {
  /**
   * <p>The unique ID of the detector associated with the GuardDuty administrator account that is monitoring member accounts.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of account IDs for the member accounts to stop monitoring.</p>
   * @public
   */
  AccountIds: string[] | undefined;
}

/**
 * @public
 */
export interface StopMonitoringMembersResponse {
  /**
   * <p>A list of objects that contain an accountId for each account that could not be processed, and a result string that indicates why the account was not processed. </p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the GuardDuty resource to apply a tag to.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to be added to a resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UnarchiveFindingsRequest {
  /**
   * <p>The ID of the detector associated with the findings to unarchive.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings to unarchive.</p>
   * @public
   */
  FindingIds: string[] | undefined;
}

/**
 * @public
 */
export interface UnarchiveFindingsResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for the resource to remove tags from.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys to remove from the resource.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateCustomDetectionRuleAssociationRequest {
  /**
   * <p>The unique identifier for the custom detection rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The unique identifier for the association to update.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>The rule execution mode. Valid values: <code>LIVE</code> | <code>DRY_RUN</code>.</p>
   * @public
   */
  Mode: AssociationMode | undefined;
}

/**
 * @public
 */
export interface UpdateCustomDetectionRuleAssociationResponse {}

/**
 * @public
 */
export interface UpdateCustomDetectionRuleOrgConfigurationRequest {
  /**
   * <p>The unique identifier for the custom detection rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The execution mode of the organization configuration. Valid values: <code>LIVE</code> | <code>DRY_RUN</code>.</p>
   * @public
   */
  Mode: AssociationMode | undefined;

  /**
   * <p>The account IDs to include in the organization configuration. Mutually exclusive with <code>ExcludeAccountIds</code>.</p>
   * @public
   */
  IncludeAccountIds?: string[] | undefined;

  /**
   * <p>The account IDs to exclude from the organization configuration. Mutually exclusive with <code>IncludeAccountIds</code>.</p>
   * @public
   */
  ExcludeAccountIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateCustomDetectionRuleOrgConfigurationResponse {}

/**
 * @public
 */
export interface UpdateDetectorRequest {
  /**
   * <p>The unique ID of the detector to update.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Specifies whether the detector is enabled or not enabled.</p>
   * @public
   */
  Enable?: boolean | undefined;

  /**
   * <p>An enum value that specifies how frequently findings are exported, such as to CloudWatch Events.</p>
   * @public
   */
  FindingPublishingFrequency?: FindingPublishingFrequency | undefined;

  /**
   * <p>Describes which data sources will be updated.</p> <p>There might be regional differences because some data sources might not be available in all the Amazon Web Services Regions where GuardDuty is presently supported. For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_regions.html">Regions and endpoints</a>.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead.
   * @public
   */
  DataSources?: DataSourceConfigurations | undefined;

  /**
   * <p>Provides the features that will be updated for the detector.</p>
   * @public
   */
  Features?: DetectorFeatureConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateDetectorResponse {}

/**
 * @public
 */
export interface UpdateFilterRequest {
  /**
   * <p>The unique ID of the detector that specifies the GuardDuty service where you want to update a filter.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The name of the filter.</p>
   * @public
   */
  FilterName: string | undefined;

  /**
   * <p>The description of the filter. Valid characters include alphanumeric characters, and special characters such as hyphen, period, colon, underscore, parentheses (<code>\{ \}</code>, <code>[ ]</code>, and <code>( )</code>), forward slash, horizontal tab, vertical tab, newline, form feed, return, and whitespace.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p> <p>Default: NOOP</p>
   * @public
   */
  Action?: FilterAction | undefined;

  /**
   * <p>Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings.</p>
   * @public
   */
  Rank?: number | undefined;

  /**
   * <p>Represents the criteria to be used in the filter for querying findings. The following fields are available for filtering:</p> <ul> <li> <p>accountId</p> </li> <li> <p>arn</p> </li> <li> <p>associatedAttackSequenceArn</p> </li> <li> <p>confidence</p> </li> <li> <p>createdAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>id</p> </li> <li> <p>partition</p> </li> <li> <p>region</p> </li> <li> <p>resource.accessKeyDetails.accessKeyId</p> </li> <li> <p>resource.accessKeyDetails.principalId</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.accessKeyId</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.accountId</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.arn</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.principalId</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.sessionContext.attributes.mfaAuthenticated</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.sessionContext.ec2RoleDelivery</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.sessionContext.invokedBy</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.accountId</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.arn</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.principalId</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.type</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.sessionContext.sessionIssuer.userName</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.sessionContext.sourceIdentity</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.sessionContext.webIdFederationData.attributes</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.sessionContext.webIdFederationData.federatedProvider</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.type</p> </li> <li> <p>resource.accessKeyDetails.userIdentity.userName</p> </li> <li> <p>resource.accessKeyDetails.userName</p> </li> <li> <p>resource.accessKeyDetails.userType</p> </li> <li> <p>resource.bedrockGuardrailDetails.guardrailArn</p> </li> <li> <p>resource.bedrockGuardrailDetails.guardrailVersion</p> </li> <li> <p>resource.containerDetails.containerRuntime</p> </li> <li> <p>resource.containerDetails.id</p> </li> <li> <p>resource.containerDetails.image</p> </li> <li> <p>resource.containerDetails.imagePrefix</p> </li> <li> <p>resource.containerDetails.name</p> </li> <li> <p>resource.containerDetails.securityContext.allowPrivilegeEscalation</p> </li> <li> <p>resource.containerDetails.securityContext.privileged</p> </li> <li> <p>resource.containerDetails.volumeMounts.mountPath</p> </li> <li> <p>resource.containerDetails.volumeMounts.name</p> </li> <li> <p>resource.ebsSnapshotDetails.snapshotArn</p> </li> <li> <p>resource.ebsVolumeDetails.scannedVolumeDetails.deviceName</p> </li> <li> <p>resource.ebsVolumeDetails.scannedVolumeDetails.encryptionType</p> </li> <li> <p>resource.ebsVolumeDetails.scannedVolumeDetails.kmsKeyArn</p> </li> <li> <p>resource.ebsVolumeDetails.scannedVolumeDetails.snapshotArn</p> </li> <li> <p>resource.ebsVolumeDetails.scannedVolumeDetails.volumeArn</p> </li> <li> <p>resource.ebsVolumeDetails.scannedVolumeDetails.volumeSizeInGB</p> </li> <li> <p>resource.ebsVolumeDetails.scannedVolumeDetails.volumeType</p> </li> <li> <p>resource.ebsVolumeDetails.skippedVolumeDetails.deviceName</p> </li> <li> <p>resource.ebsVolumeDetails.skippedVolumeDetails.encryptionType</p> </li> <li> <p>resource.ebsVolumeDetails.skippedVolumeDetails.kmsKeyArn</p> </li> <li> <p>resource.ebsVolumeDetails.skippedVolumeDetails.snapshotArn</p> </li> <li> <p>resource.ebsVolumeDetails.skippedVolumeDetails.volumeArn</p> </li> <li> <p>resource.ebsVolumeDetails.skippedVolumeDetails.volumeSizeInGB</p> </li> <li> <p>resource.ebsVolumeDetails.skippedVolumeDetails.volumeType</p> </li> <li> <p>resource.ec2ImageDetails.imageArn</p> </li> <li> <p>resource.ecsClusterDetails.activeServicesCount</p> </li> <li> <p>resource.ecsClusterDetails.arn</p> </li> <li> <p>resource.ecsClusterDetails.name</p> </li> <li> <p>resource.ecsClusterDetails.registeredContainerInstancesCount</p> </li> <li> <p>resource.ecsClusterDetails.runningTasksCount</p> </li> <li> <p>resource.ecsClusterDetails.status</p> </li> <li> <p>resource.ecsClusterDetails.tags.key</p> </li> <li> <p>resource.ecsClusterDetails.tags.value</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.arn</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.containers.containerRuntime</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.containers.id</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.containers.image</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.containers.imagePrefix</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.containers.name</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.containers.securityContext.allowPrivilegeEscalation</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.containers.securityContext.privileged</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.containers.volumeMounts.mountPath</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.containers.volumeMounts.name</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.createdAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.definitionArn</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.group</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.launchType</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.startedAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.startedBy</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.tags.key</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.tags.value</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.version</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.volumes.hostPath.path</p> </li> <li> <p>resource.ecsClusterDetails.taskDetails.volumes.name</p> </li> <li> <p>resource.eksClusterDetails.arn</p> </li> <li> <p>resource.eksClusterDetails.createdAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>resource.eksClusterDetails.name</p> </li> <li> <p>resource.eksClusterDetails.status</p> </li> <li> <p>resource.eksClusterDetails.tags.key</p> </li> <li> <p>resource.eksClusterDetails.tags.value</p> </li> <li> <p>resource.eksClusterDetails.vpcId</p> </li> <li> <p>resource.instanceDetails.availabilityZone</p> </li> <li> <p>resource.instanceDetails.iamInstanceProfile.arn</p> </li> <li> <p>resource.instanceDetails.iamInstanceProfile.id</p> </li> <li> <p>resource.instanceDetails.imageDescription</p> </li> <li> <p>resource.instanceDetails.imageId</p> </li> <li> <p>resource.instanceDetails.instanceId</p> </li> <li> <p>resource.instanceDetails.instanceState</p> </li> <li> <p>resource.instanceDetails.instanceType</p> </li> <li> <p>resource.instanceDetails.launchTime</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.ipv6Addresses</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.networkInterfaceId</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.privateDnsName</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.privateIpAddress</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.privateIpAddresses.privateDnsName</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.privateIpAddresses.privateIpAddress</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.publicDnsName</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.publicIp</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.securityGroups.groupId</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.securityGroups.groupName</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.subnetId</p> </li> <li> <p>resource.instanceDetails.networkInterfaces.vpcId</p> </li> <li> <p>resource.instanceDetails.outpostArn</p> </li> <li> <p>resource.instanceDetails.platform</p> </li> <li> <p>resource.instanceDetails.productCodes.productCodeId</p> </li> <li> <p>resource.instanceDetails.productCodes.productCodeType</p> </li> <li> <p>resource.instanceDetails.tags.key</p> </li> <li> <p>resource.instanceDetails.tags.value</p> </li> <li> <p>resource.kubernetesDetails.kubernetesUserDetails.groups</p> </li> <li> <p>resource.kubernetesDetails.kubernetesUserDetails.impersonatedUser.groups</p> </li> <li> <p>resource.kubernetesDetails.kubernetesUserDetails.impersonatedUser.username</p> </li> <li> <p>resource.kubernetesDetails.kubernetesUserDetails.sessionName</p> </li> <li> <p>resource.kubernetesDetails.kubernetesUserDetails.uid</p> </li> <li> <p>resource.kubernetesDetails.kubernetesUserDetails.username</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.containers.containerRuntime</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.containers.id</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.containers.image</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.containers.imagePrefix</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.containers.name</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.containers.securityContext.allowPrivilegeEscalation</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.containers.securityContext.privileged</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.containers.volumeMounts.mountPath</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.containers.volumeMounts.name</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.hostIpc</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.hostNetwork</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.hostPid</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.name</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.namespace</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.serviceAccountName</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.type</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.uid</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.volumes.hostPath.path</p> </li> <li> <p>resource.kubernetesDetails.kubernetesWorkloadDetails.volumes.name</p> </li> <li> <p>resource.lambdaDetails.description</p> </li> <li> <p>resource.lambdaDetails.functionArn</p> </li> <li> <p>resource.lambdaDetails.functionName</p> </li> <li> <p>resource.lambdaDetails.functionVersion</p> </li> <li> <p>resource.lambdaDetails.lastModifiedAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>resource.lambdaDetails.revisionId</p> </li> <li> <p>resource.lambdaDetails.role</p> </li> <li> <p>resource.lambdaDetails.tags.key</p> </li> <li> <p>resource.lambdaDetails.tags.value</p> </li> <li> <p>resource.lambdaDetails.vpcConfig.securityGroups.groupId</p> </li> <li> <p>resource.lambdaDetails.vpcConfig.securityGroups.groupName</p> </li> <li> <p>resource.lambdaDetails.vpcConfig.subnetIds</p> </li> <li> <p>resource.lambdaDetails.vpcConfig.vpcId</p> </li> <li> <p>resource.rdsDbInstanceDetails.dbClusterIdentifier</p> </li> <li> <p>resource.rdsDbInstanceDetails.dbInstanceArn</p> </li> <li> <p>resource.rdsDbInstanceDetails.dbInstanceIdentifier</p> </li> <li> <p>resource.rdsDbInstanceDetails.dbSecurityGroups.name</p> </li> <li> <p>resource.rdsDbInstanceDetails.dbSecurityGroups.status</p> </li> <li> <p>resource.rdsDbInstanceDetails.dbiResourceId</p> </li> <li> <p>resource.rdsDbInstanceDetails.engine</p> </li> <li> <p>resource.rdsDbInstanceDetails.engineVersion</p> </li> <li> <p>resource.rdsDbInstanceDetails.iamDatabaseAuthenticationEnabled</p> </li> <li> <p>resource.rdsDbInstanceDetails.publiclyAccessible</p> </li> <li> <p>resource.rdsDbInstanceDetails.vpcId</p> </li> <li> <p>resource.rdsDbInstanceDetails.vpcSecurityGroups.status</p> </li> <li> <p>resource.rdsDbInstanceDetails.vpcSecurityGroups.vpcSecurityGroupId</p> </li> <li> <p>resource.rdsDbUserDetails.application</p> </li> <li> <p>resource.rdsDbUserDetails.authMethod</p> </li> <li> <p>resource.rdsDbUserDetails.database</p> </li> <li> <p>resource.rdsDbUserDetails.ssl</p> </li> <li> <p>resource.rdsDbUserDetails.user</p> </li> <li> <p>resource.rdsLimitlessDbDetails.dbClusterIdentifier</p> </li> <li> <p>resource.rdsLimitlessDbDetails.dbShardGroupArn</p> </li> <li> <p>resource.rdsLimitlessDbDetails.dbShardGroupIdentifier</p> </li> <li> <p>resource.rdsLimitlessDbDetails.dbShardGroupResourceId</p> </li> <li> <p>resource.rdsLimitlessDbDetails.engine</p> </li> <li> <p>resource.rdsLimitlessDbDetails.engineVersion</p> </li> <li> <p>resource.rdsLimitlessDbDetails.tags.key</p> </li> <li> <p>resource.rdsLimitlessDbDetails.tags.value</p> </li> <li> <p>resource.recoveryPointDetails.backupVaultName</p> </li> <li> <p>resource.recoveryPointDetails.recoveryPointArn</p> </li> <li> <p>resource.resourceType</p> </li> <li> <p>resource.s3BucketDetails.arn</p> </li> <li> <p>resource.s3BucketDetails.createdAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>resource.s3BucketDetails.defaultServerSideEncryption.encryptionType</p> </li> <li> <p>resource.s3BucketDetails.defaultServerSideEncryption.kmsMasterKeyArn</p> </li> <li> <p>resource.s3BucketDetails.name</p> </li> <li> <p>resource.s3BucketDetails.owner.id</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.effectivePermission</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.blockPublicAcls</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.blockPublicPolicy</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.ignorePublicAcls</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.accountLevelPermissions.blockPublicAccess.restrictPublicBuckets</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.accessControlList.allowsPublicReadAccess</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.accessControlList.allowsPublicWriteAccess</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.blockPublicAcls</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.blockPublicPolicy</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.ignorePublicAcls</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.blockPublicAccess.restrictPublicBuckets</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.bucketPolicy.allowsPublicReadAccess</p> </li> <li> <p>resource.s3BucketDetails.publicAccess.permissionConfiguration.bucketLevelPermissions.bucketPolicy.allowsPublicWriteAccess</p> </li> <li> <p>resource.s3BucketDetails.s3ObjectDetails.eTag</p> </li> <li> <p>resource.s3BucketDetails.s3ObjectDetails.hash</p> </li> <li> <p>resource.s3BucketDetails.s3ObjectDetails.key</p> </li> <li> <p>resource.s3BucketDetails.s3ObjectDetails.objectArn</p> </li> <li> <p>resource.s3BucketDetails.s3ObjectDetails.versionId</p> </li> <li> <p>resource.s3BucketDetails.tags.key</p> </li> <li> <p>resource.s3BucketDetails.tags.value</p> </li> <li> <p>resource.s3BucketDetails.type</p> </li> <li> <p>schemaVersion</p> </li> <li> <p>service.action.actionType</p> </li> <li> <p>service.action.awsApiCallAction.api</p> </li> <li> <p>service.action.awsApiCallAction.callerType</p> </li> <li> <p>service.action.awsApiCallAction.domainDetails.domain</p> </li> <li> <p>service.action.awsApiCallAction.errorCode</p> </li> <li> <p>service.action.awsApiCallAction.remoteAccountDetails.accountId</p> </li> <li> <p>service.action.awsApiCallAction.remoteAccountDetails.affiliated</p> </li> <li> <p>service.action.awsApiCallAction.remoteAccountDetails.awsServiceName</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.city.cityName</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.country.countryCode</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.country.countryName</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.geoLocation.lat</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.geoLocation.lon</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.ipAddressV4</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.ipAddressV6</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.organization.asn</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.organization.asnOrg</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.organization.isp</p> </li> <li> <p>service.action.awsApiCallAction.remoteIpDetails.organization.org</p> </li> <li> <p>service.action.awsApiCallAction.serviceName</p> </li> <li> <p>service.action.awsApiCallAction.userAgent</p> </li> <li> <p>service.action.dnsRequestAction.blocked</p> </li> <li> <p>service.action.dnsRequestAction.domain</p> </li> <li> <p>service.action.dnsRequestAction.domainWithSuffix</p> </li> <li> <p>service.action.dnsRequestAction.protocol</p> </li> <li> <p>service.action.dnsRequestAction.vpcOwnerAccountId</p> </li> <li> <p>service.action.kubernetesApiCallAction.namespace</p> </li> <li> <p>service.action.kubernetesApiCallAction.parameters</p> </li> <li> <p>service.action.kubernetesApiCallAction.remoteIpDetails.city.cityName</p> </li> <li> <p>service.action.kubernetesApiCallAction.remoteIpDetails.country.countryCode</p> </li> <li> <p>service.action.kubernetesApiCallAction.remoteIpDetails.country.countryName</p> </li> <li> <p>service.action.kubernetesApiCallAction.remoteIpDetails.geoLocation.lat</p> </li> <li> <p>service.action.kubernetesApiCallAction.remoteIpDetails.geoLocation.lon</p> </li> <li> <p>service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV4</p> </li> <li> <p>service.action.kubernetesApiCallAction.remoteIpDetails.ipAddressV6</p> </li> <li> <p>service.action.kubernetesApiCallAction.remoteIpDetails.organization.asn</p> </li> <li> <p>service.action.kubernetesApiCallAction.remoteIpDetails.organization.asnOrg</p> </li> <li> <p>service.action.kubernetesApiCallAction.remoteIpDetails.organization.isp</p> </li> <li> <p>service.action.kubernetesApiCallAction.remoteIpDetails.organization.org</p> </li> <li> <p>service.action.kubernetesApiCallAction.requestUri</p> </li> <li> <p>service.action.kubernetesApiCallAction.resource</p> </li> <li> <p>service.action.kubernetesApiCallAction.resourceName</p> </li> <li> <p>service.action.kubernetesApiCallAction.sourceIPs</p> </li> <li> <p>service.action.kubernetesApiCallAction.statusCode</p> </li> <li> <p>service.action.kubernetesApiCallAction.subresource</p> </li> <li> <p>service.action.kubernetesApiCallAction.userAgent</p> </li> <li> <p>service.action.kubernetesApiCallAction.verb</p> </li> <li> <p>service.action.kubernetesPermissionCheckedDetails.allowed</p> </li> <li> <p>service.action.kubernetesPermissionCheckedDetails.namespace</p> </li> <li> <p>service.action.kubernetesPermissionCheckedDetails.resource</p> </li> <li> <p>service.action.kubernetesPermissionCheckedDetails.verb</p> </li> <li> <p>service.action.kubernetesRoleBindingDetails.kind</p> </li> <li> <p>service.action.kubernetesRoleBindingDetails.name</p> </li> <li> <p>service.action.kubernetesRoleBindingDetails.roleRefKind</p> </li> <li> <p>service.action.kubernetesRoleBindingDetails.roleRefName</p> </li> <li> <p>service.action.kubernetesRoleBindingDetails.uid</p> </li> <li> <p>service.action.kubernetesRoleDetails.kind</p> </li> <li> <p>service.action.kubernetesRoleDetails.name</p> </li> <li> <p>service.action.kubernetesRoleDetails.uid</p> </li> <li> <p>service.action.networkConnectionAction.blocked</p> </li> <li> <p>service.action.networkConnectionAction.connectionDirection</p> </li> <li> <p>service.action.networkConnectionAction.localIpDetails.ipAddressV4</p> </li> <li> <p>service.action.networkConnectionAction.localIpDetails.ipAddressV6</p> </li> <li> <p>service.action.networkConnectionAction.localNetworkInterface</p> </li> <li> <p>service.action.networkConnectionAction.localPortDetails.port</p> </li> <li> <p>service.action.networkConnectionAction.localPortDetails.portName</p> </li> <li> <p>service.action.networkConnectionAction.protocol</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.city.cityName</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.country.countryCode</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.country.countryName</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.geoLocation.lat</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.geoLocation.lon</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.ipAddressV4</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.ipAddressV6</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.organization.asn</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.organization.asnOrg</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.organization.isp</p> </li> <li> <p>service.action.networkConnectionAction.remoteIpDetails.organization.org</p> </li> <li> <p>service.action.networkConnectionAction.remotePortDetails.port</p> </li> <li> <p>service.action.networkConnectionAction.remotePortDetails.portName</p> </li> <li> <p>service.action.portProbeAction.blocked</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.localIpDetails.ipAddressV4</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.localIpDetails.ipAddressV6</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.localPortDetails.port</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.localPortDetails.portName</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.remoteIpDetails.city.cityName</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.remoteIpDetails.country.countryCode</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.remoteIpDetails.country.countryName</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.remoteIpDetails.geoLocation.lat</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.remoteIpDetails.geoLocation.lon</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.remoteIpDetails.ipAddressV4</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.remoteIpDetails.ipAddressV6</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.asn</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.asnOrg</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.isp</p> </li> <li> <p>service.action.portProbeAction.portProbeDetails.remoteIpDetails.organization.org</p> </li> <li> <p>service.action.rdsLoginAttemptAction.loginAttributes.application</p> </li> <li> <p>service.action.rdsLoginAttemptAction.loginAttributes.failedLoginAttempts</p> </li> <li> <p>service.action.rdsLoginAttemptAction.loginAttributes.successfulLoginAttempts</p> </li> <li> <p>service.action.rdsLoginAttemptAction.loginAttributes.user</p> </li> <li> <p>service.action.rdsLoginAttemptAction.remoteIpDetails.city.cityName</p> </li> <li> <p>service.action.rdsLoginAttemptAction.remoteIpDetails.country.countryCode</p> </li> <li> <p>service.action.rdsLoginAttemptAction.remoteIpDetails.country.countryName</p> </li> <li> <p>service.action.rdsLoginAttemptAction.remoteIpDetails.geoLocation.lat</p> </li> <li> <p>service.action.rdsLoginAttemptAction.remoteIpDetails.geoLocation.lon</p> </li> <li> <p>service.action.rdsLoginAttemptAction.remoteIpDetails.ipAddressV4</p> </li> <li> <p>service.action.rdsLoginAttemptAction.remoteIpDetails.ipAddressV6</p> </li> <li> <p>service.action.rdsLoginAttemptAction.remoteIpDetails.organization.asn</p> </li> <li> <p>service.action.rdsLoginAttemptAction.remoteIpDetails.organization.asnOrg</p> </li> <li> <p>service.action.rdsLoginAttemptAction.remoteIpDetails.organization.isp</p> </li> <li> <p>service.action.rdsLoginAttemptAction.remoteIpDetails.organization.org</p> </li> <li> <p>service.additionalInfo.agentDetails.agentId</p> </li> <li> <p>service.additionalInfo.agentDetails.agentVersion</p> </li> <li> <p>service.additionalInfo.anomalies.anomalousAPIs</p> </li> <li> <p>service.additionalInfo.authenticationMethod</p> </li> <li> <p>service.additionalInfo.averagePacketSizeIn</p> </li> <li> <p>service.additionalInfo.averagePacketSizeOut</p> </li> <li> <p>service.additionalInfo.context</p> </li> <li> <p>service.additionalInfo.domain</p> </li> <li> <p>service.additionalInfo.inBytes</p> </li> <li> <p>service.additionalInfo.localNetworkInterfaceOwner</p> </li> <li> <p>service.additionalInfo.localPort</p> </li> <li> <p>service.additionalInfo.outBytes</p> </li> <li> <p>service.additionalInfo.packetsIn</p> </li> <li> <p>service.additionalInfo.packetsOut</p> </li> <li> <p>service.additionalInfo.policyArn</p> </li> <li> <p>service.additionalInfo.policyName</p> </li> <li> <p>service.additionalInfo.remotePort</p> </li> <li> <p>service.additionalInfo.sample</p> </li> <li> <p>service.additionalInfo.scannedPort</p> </li> <li> <p>service.additionalInfo.threatFileSha256</p> </li> <li> <p>service.additionalInfo.threatListName</p> </li> <li> <p>service.additionalInfo.threatName</p> </li> <li> <p>service.additionalInfo.totalBytesIn</p> </li> <li> <p>service.additionalInfo.totalBytesOut</p> </li> <li> <p>service.additionalInfo.type</p> </li> <li> <p>service.additionalInfo.unusual.asnOrg</p> </li> <li> <p>service.additionalInfo.unusual.port</p> </li> <li> <p>service.additionalInfo.unusualProtocol</p> </li> <li> <p>service.additionalInfo.userAgent.fullUserAgent</p> </li> <li> <p>service.additionalInfo.userAgent.userAgentCategory</p> </li> <li> <p>service.additionalInfo.value</p> </li> <li> <p>service.additionalInfo.vpcOwnerAccountId</p> </li> <li> <p>service.archived</p> </li> <li> <p>service.count</p> </li> <li> <p>service.detection.sequence.actors.id</p> </li> <li> <p>service.detection.sequence.actors.process.name</p> </li> <li> <p>service.detection.sequence.actors.process.path</p> </li> <li> <p>service.detection.sequence.actors.process.sha256</p> </li> <li> <p>service.detection.sequence.actors.session.createdTime</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.detection.sequence.actors.session.issuer</p> </li> <li> <p>service.detection.sequence.actors.session.mfaStatus</p> </li> <li> <p>service.detection.sequence.actors.session.uid</p> </li> <li> <p>service.detection.sequence.actors.user.account.account</p> </li> <li> <p>service.detection.sequence.actors.user.account.uid</p> </li> <li> <p>service.detection.sequence.actors.user.credentialUid</p> </li> <li> <p>service.detection.sequence.actors.user.name</p> </li> <li> <p>service.detection.sequence.actors.user.type</p> </li> <li> <p>service.detection.sequence.actors.user.uid</p> </li> <li> <p>service.detection.sequence.additionalSequenceTypes</p> </li> <li> <p>service.detection.sequence.description</p> </li> <li> <p>service.detection.sequence.endpoints.autonomousSystem.name</p> </li> <li> <p>service.detection.sequence.endpoints.autonomousSystem.number</p> </li> <li> <p>service.detection.sequence.endpoints.connection.direction</p> </li> <li> <p>service.detection.sequence.endpoints.domain</p> </li> <li> <p>service.detection.sequence.endpoints.id</p> </li> <li> <p>service.detection.sequence.endpoints.ip</p> </li> <li> <p>service.detection.sequence.endpoints.location.city</p> </li> <li> <p>service.detection.sequence.endpoints.location.country</p> </li> <li> <p>service.detection.sequence.endpoints.location.lat</p> </li> <li> <p>service.detection.sequence.endpoints.location.lon</p> </li> <li> <p>service.detection.sequence.endpoints.port</p> </li> <li> <p>service.detection.sequence.resources.accountId</p> </li> <li> <p>service.detection.sequence.resources.cloudPartition</p> </li> <li> <p>service.detection.sequence.resources.data.accessKey.principalId</p> </li> <li> <p>service.detection.sequence.resources.data.accessKey.userName</p> </li> <li> <p>service.detection.sequence.resources.data.accessKey.userType</p> </li> <li> <p>service.detection.sequence.resources.data.autoscalingAutoScalingGroup.ec2InstanceUids</p> </li> <li> <p>service.detection.sequence.resources.data.cloudformationStack.ec2InstanceUids</p> </li> <li> <p>service.detection.sequence.resources.data.container.image</p> </li> <li> <p>service.detection.sequence.resources.data.container.imageUid</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Image.ec2InstanceUids</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Instance.availabilityZone</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Instance.ec2NetworkInterfaceUids</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Instance.iamInstanceProfile.arn</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Instance.iamInstanceProfile.id</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Instance.imageDescription</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Instance.instanceState</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Instance.instanceType</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Instance.outpostArn</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Instance.platform</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Instance.productCodes.productCodeId</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Instance.productCodes.productCodeType</p> </li> <li> <p>service.detection.sequence.resources.data.ec2LaunchTemplate.ec2InstanceUids</p> </li> <li> <p>service.detection.sequence.resources.data.ec2LaunchTemplate.version</p> </li> <li> <p>service.detection.sequence.resources.data.ec2NetworkInterface.ipv6Addresses</p> </li> <li> <p>service.detection.sequence.resources.data.ec2NetworkInterface.privateIpAddresses.privateDnsName</p> </li> <li> <p>service.detection.sequence.resources.data.ec2NetworkInterface.privateIpAddresses.privateIpAddress</p> </li> <li> <p>service.detection.sequence.resources.data.ec2NetworkInterface.publicIp</p> </li> <li> <p>service.detection.sequence.resources.data.ec2NetworkInterface.securityGroups.groupId</p> </li> <li> <p>service.detection.sequence.resources.data.ec2NetworkInterface.securityGroups.groupName</p> </li> <li> <p>service.detection.sequence.resources.data.ec2NetworkInterface.subNetId</p> </li> <li> <p>service.detection.sequence.resources.data.ec2NetworkInterface.vpcId</p> </li> <li> <p>service.detection.sequence.resources.data.ec2Vpc.ec2InstanceUids</p> </li> <li> <p>service.detection.sequence.resources.data.ecsCluster.ec2InstanceUids</p> </li> <li> <p>service.detection.sequence.resources.data.ecsCluster.status</p> </li> <li> <p>service.detection.sequence.resources.data.ecsTask.containerUids</p> </li> <li> <p>service.detection.sequence.resources.data.ecsTask.createdAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.detection.sequence.resources.data.ecsTask.launchType</p> </li> <li> <p>service.detection.sequence.resources.data.ecsTask.taskDefinitionArn</p> </li> <li> <p>service.detection.sequence.resources.data.eksCluster.arn</p> </li> <li> <p>service.detection.sequence.resources.data.eksCluster.createdAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.detection.sequence.resources.data.eksCluster.ec2InstanceUids</p> </li> <li> <p>service.detection.sequence.resources.data.eksCluster.status</p> </li> <li> <p>service.detection.sequence.resources.data.eksCluster.vpcId</p> </li> <li> <p>service.detection.sequence.resources.data.iamInstanceProfile.ec2InstanceUids</p> </li> <li> <p>service.detection.sequence.resources.data.iamInstanceProfile.id</p> </li> <li> <p>service.detection.sequence.resources.data.kubernetesWorkload.containerUids</p> </li> <li> <p>service.detection.sequence.resources.data.kubernetesWorkload.namespace</p> </li> <li> <p>service.detection.sequence.resources.data.kubernetesWorkload.type</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicAclAccess</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicAclIgnoreBehavior</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicBucketRestrictBehavior</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.accountPublicAccess.publicPolicyAccess</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicAclAccess</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicAclIgnoreBehavior</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicBucketRestrictBehavior</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.bucketPublicAccess.publicPolicyAccess</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.createdAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.effectivePermission</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.encryptionKeyArn</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.encryptionType</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.ownerId</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.publicReadAccess</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.publicWriteAccess</p> </li> <li> <p>service.detection.sequence.resources.data.s3Bucket.s3ObjectUids</p> </li> <li> <p>service.detection.sequence.resources.data.s3Object.eTag</p> </li> <li> <p>service.detection.sequence.resources.data.s3Object.key</p> </li> <li> <p>service.detection.sequence.resources.data.s3Object.versionId</p> </li> <li> <p>service.detection.sequence.resources.name</p> </li> <li> <p>service.detection.sequence.resources.region</p> </li> <li> <p>service.detection.sequence.resources.resourceType</p> </li> <li> <p>service.detection.sequence.resources.service</p> </li> <li> <p>service.detection.sequence.resources.tags.key</p> </li> <li> <p>service.detection.sequence.resources.tags.value</p> </li> <li> <p>service.detection.sequence.resources.uid</p> </li> <li> <p>service.detection.sequence.sequenceIndicators.key</p> </li> <li> <p>service.detection.sequence.sequenceIndicators.title</p> </li> <li> <p>service.detection.sequence.sequenceIndicators.values</p> </li> <li> <p>service.detection.sequence.signals.actorIds</p> </li> <li> <p>service.detection.sequence.signals.count</p> </li> <li> <p>service.detection.sequence.signals.createdAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.detection.sequence.signals.description</p> </li> <li> <p>service.detection.sequence.signals.endpointIds</p> </li> <li> <p>service.detection.sequence.signals.firstSeenAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.detection.sequence.signals.lastSeenAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.detection.sequence.signals.name</p> </li> <li> <p>service.detection.sequence.signals.resourceUids</p> </li> <li> <p>service.detection.sequence.signals.severity</p> </li> <li> <p>service.detection.sequence.signals.signalIndicators.key</p> </li> <li> <p>service.detection.sequence.signals.signalIndicators.title</p> </li> <li> <p>service.detection.sequence.signals.signalIndicators.values</p> </li> <li> <p>service.detection.sequence.signals.type</p> </li> <li> <p>service.detection.sequence.signals.uid</p> </li> <li> <p>service.detection.sequence.signals.updatedAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.detection.sequence.uid</p> </li> <li> <p>service.detectorId</p> </li> <li> <p>service.ebsVolumeScanDetails.scanCompletedAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.count</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.severity</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.highestSeverityThreatDetails.threatName</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.scannedItemCount.files</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.scannedItemCount.totalGb</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.scannedItemCount.volumes</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.itemCount</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.shortened</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.fileName</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.filePath</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.hash</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.filePaths.volumeArn</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.itemCount</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.name</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.threatNames.severity</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.threatDetectedByName.uniqueThreatNameCount</p> </li> <li> <p>service.ebsVolumeScanDetails.scanDetections.threatsDetectedItemCount.files</p> </li> <li> <p>service.ebsVolumeScanDetails.scanId</p> </li> <li> <p>service.ebsVolumeScanDetails.scanStartedAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.ebsVolumeScanDetails.scanType</p> </li> <li> <p>service.ebsVolumeScanDetails.sources</p> </li> <li> <p>service.ebsVolumeScanDetails.triggerFindingId</p> </li> <li> <p>service.eventFirstSeen</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.eventLastSeen</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.evidence.threatIntelligenceDetails.threatFileSha256</p> </li> <li> <p>service.evidence.threatIntelligenceDetails.threatListName</p> </li> <li> <p>service.evidence.threatIntelligenceDetails.threatNames</p> </li> <li> <p>service.featureName</p> </li> <li> <p>service.malwareScanDetails.scanCategory</p> </li> <li> <p>service.malwareScanDetails.scanConfiguration.incrementalScanDetails.baselineResourceArn</p> </li> <li> <p>service.malwareScanDetails.scanConfiguration.triggerType</p> </li> <li> <p>service.malwareScanDetails.scanId</p> </li> <li> <p>service.malwareScanDetails.scanType</p> </li> <li> <p>service.malwareScanDetails.threats.count</p> </li> <li> <p>service.malwareScanDetails.threats.hash</p> </li> <li> <p>service.malwareScanDetails.threats.itemDetails.additionalInfo.deviceName</p> </li> <li> <p>service.malwareScanDetails.threats.itemDetails.additionalInfo.versionId</p> </li> <li> <p>service.malwareScanDetails.threats.itemDetails.hash</p> </li> <li> <p>service.malwareScanDetails.threats.itemDetails.itemPath</p> </li> <li> <p>service.malwareScanDetails.threats.itemDetails.resourceArn</p> </li> <li> <p>service.malwareScanDetails.threats.itemPaths.hash</p> </li> <li> <p>service.malwareScanDetails.threats.itemPaths.nestedItemPath</p> </li> <li> <p>service.malwareScanDetails.threats.name</p> </li> <li> <p>service.malwareScanDetails.threats.source</p> </li> <li> <p>service.malwareScanDetails.uniqueThreatCount</p> </li> <li> <p>service.resourceRole</p> </li> <li> <p>service.runtimeDetails.context.addressFamily</p> </li> <li> <p>service.runtimeDetails.context.commandLineExample</p> </li> <li> <p>service.runtimeDetails.context.fileOperation</p> </li> <li> <p>service.runtimeDetails.context.filePath</p> </li> <li> <p>service.runtimeDetails.context.fileSystemType</p> </li> <li> <p>service.runtimeDetails.context.flags</p> </li> <li> <p>service.runtimeDetails.context.ianaProtocolNumber</p> </li> <li> <p>service.runtimeDetails.context.ldPreloadValue</p> </li> <li> <p>service.runtimeDetails.context.libraryPath</p> </li> <li> <p>service.runtimeDetails.context.memoryRegions</p> </li> <li> <p>service.runtimeDetails.context.modifiedAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.euid</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.executablePath</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.executableSha256</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.lineage.euid</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.lineage.executablePath</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.lineage.name</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.lineage.namespacePid</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.lineage.parentUuid</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.lineage.pid</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.lineage.startTime</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.lineage.userId</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.lineage.uuid</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.name</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.namespacePid</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.parentUuid</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.pid</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.pwd</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.startTime</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.user</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.userId</p> </li> <li> <p>service.runtimeDetails.context.modifyingProcess.uuid</p> </li> <li> <p>service.runtimeDetails.context.moduleFilePath</p> </li> <li> <p>service.runtimeDetails.context.moduleName</p> </li> <li> <p>service.runtimeDetails.context.moduleSha256</p> </li> <li> <p>service.runtimeDetails.context.mountSource</p> </li> <li> <p>service.runtimeDetails.context.mountTarget</p> </li> <li> <p>service.runtimeDetails.context.relatedFilePaths</p> </li> <li> <p>service.runtimeDetails.context.releaseAgentPath</p> </li> <li> <p>service.runtimeDetails.context.runcBinaryPath</p> </li> <li> <p>service.runtimeDetails.context.scriptPath</p> </li> <li> <p>service.runtimeDetails.context.serviceName</p> </li> <li> <p>service.runtimeDetails.context.shellHistoryFilePath</p> </li> <li> <p>service.runtimeDetails.context.socketPath</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.euid</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.executablePath</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.executableSha256</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.lineage.euid</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.lineage.executablePath</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.lineage.name</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.lineage.namespacePid</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.lineage.parentUuid</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.lineage.pid</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.lineage.startTime</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.lineage.userId</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.lineage.uuid</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.name</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.namespacePid</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.parentUuid</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.pid</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.pwd</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.startTime</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.user</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.userId</p> </li> <li> <p>service.runtimeDetails.context.targetProcess.uuid</p> </li> <li> <p>service.runtimeDetails.context.threatFilePath</p> </li> <li> <p>service.runtimeDetails.context.toolCategory</p> </li> <li> <p>service.runtimeDetails.context.toolName</p> </li> <li> <p>service.runtimeDetails.process.euid</p> </li> <li> <p>service.runtimeDetails.process.executablePath</p> </li> <li> <p>service.runtimeDetails.process.executableSha256</p> </li> <li> <p>service.runtimeDetails.process.lineage.euid</p> </li> <li> <p>service.runtimeDetails.process.lineage.executablePath</p> </li> <li> <p>service.runtimeDetails.process.lineage.name</p> </li> <li> <p>service.runtimeDetails.process.lineage.namespacePid</p> </li> <li> <p>service.runtimeDetails.process.lineage.parentUuid</p> </li> <li> <p>service.runtimeDetails.process.lineage.pid</p> </li> <li> <p>service.runtimeDetails.process.lineage.startTime</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.runtimeDetails.process.lineage.userId</p> </li> <li> <p>service.runtimeDetails.process.lineage.uuid</p> </li> <li> <p>service.runtimeDetails.process.name</p> </li> <li> <p>service.runtimeDetails.process.namespacePid</p> </li> <li> <p>service.runtimeDetails.process.parentUuid</p> </li> <li> <p>service.runtimeDetails.process.pid</p> </li> <li> <p>service.runtimeDetails.process.pwd</p> </li> <li> <p>service.runtimeDetails.process.startTime</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> <li> <p>service.runtimeDetails.process.user</p> </li> <li> <p>service.runtimeDetails.process.userId</p> </li> <li> <p>service.runtimeDetails.process.uuid</p> </li> <li> <p>service.serviceName</p> </li> <li> <p>service.userFeedback</p> </li> <li> <p>severity</p> <p>To configure severity based filters, use the following for the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_FindingCriteria.html">FindingCriteria</a> condition:</p> <ul> <li> <p> <b>Low</b>: <code>["1", "2", "3"]</code> </p> </li> <li> <p> <b>Medium</b>: <code>["4", "5", "6"]</code> </p> </li> <li> <p> <b>High</b>: <code>["7", "8"]</code> </p> </li> <li> <p> <b>Critical</b>: <code>["9", "10"]</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_findings-severity.html">Findings severity levels</a> in the <i>Amazon GuardDuty User Guide</i>.</p> </li> <li> <p>type</p> </li> <li> <p>updatedAt</p> <p>Type: Timestamp in Unix Epoch millisecond format. Ex: 1486685375000</p> </li> </ul>
   * @public
   */
  FindingCriteria?: FindingCriteria | undefined;
}

/**
 * @public
 */
export interface UpdateFilterResponse {
  /**
   * <p>The name of the filter.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsFeedbackRequest {
  /**
   * <p>The ID of the detector that is associated with the findings for which you want to update the feedback.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The IDs of the findings that you want to mark as useful or not useful.</p>
   * @public
   */
  FindingIds: string[] | undefined;

  /**
   * <p>The feedback for the finding.</p>
   * @public
   */
  Feedback: Feedback | undefined;

  /**
   * <p>Additional feedback about the GuardDuty findings.</p>
   * @public
   */
  Comments?: string | undefined;
}

/**
 * @public
 */
export interface UpdateFindingsFeedbackResponse {}

/**
 * @public
 */
export interface UpdateIPSetRequest {
  /**
   * <p>The detectorID that specifies the GuardDuty service whose IPSet you want to update.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   * @public
   */
  IpSetId: string | undefined;

  /**
   * <p>The unique ID that specifies the IPSet that you want to update.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated URI of the file that contains the IPSet. </p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The updated Boolean value that specifies whether the IPSet is active or not.</p>
   * @public
   */
  Activate?: boolean | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIPSetResponse {}

/**
 * <p>Information about the protected S3 bucket resource.</p>
 * @public
 */
export interface UpdateS3BucketResource {
  /**
   * <p>Information about the specified object prefixes. The S3 object will be scanned only if it belongs to any of the specified object prefixes.</p>
   * @public
   */
  ObjectPrefixes?: string[] | undefined;
}

/**
 * <p>Information about the protected resource that is associated with the created Malware Protection plan. Presently, <code>S3Bucket</code> is the only supported protected resource.</p>
 * @public
 */
export interface UpdateProtectedResource {
  /**
   * <p>Information about the protected S3 bucket resource.</p>
   * @public
   */
  S3Bucket?: UpdateS3BucketResource | undefined;
}

/**
 * @public
 */
export interface UpdateMalwareProtectionPlanRequest {
  /**
   * <p>A unique identifier associated with the Malware Protection plan.</p>
   * @public
   */
  MalwareProtectionPlanId: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the IAM role with permissions to scan and add tags to the associated protected resource.</p>
   * @public
   */
  Role?: string | undefined;

  /**
   * <p>Information about whether the tags will be added to the S3 object after scanning.</p>
   * @public
   */
  Actions?: MalwareProtectionPlanActions | undefined;

  /**
   * <p>Information about the protected resource that is associated with the created Malware Protection plan. Presently, <code>S3Bucket</code> is the only supported protected resource.</p>
   * @public
   */
  ProtectedResource?: UpdateProtectedResource | undefined;
}

/**
 * @public
 */
export interface UpdateMalwareScanSettingsRequest {
  /**
   * <p>The unique ID of the detector that specifies the GuardDuty service where you want to update scan settings.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents the criteria to be used in the filter for selecting resources to scan.</p>
   * @public
   */
  ScanResourceCriteria?: ScanResourceCriteria | undefined;

  /**
   * <p>An enum value representing possible snapshot preservation settings.</p>
   * @public
   */
  EbsSnapshotPreservation?: EbsSnapshotPreservation | undefined;
}

/**
 * @public
 */
export interface UpdateMalwareScanSettingsResponse {}

/**
 * <p>Information about the additional configuration for the member account.</p>
 * @public
 */
export interface MemberAdditionalConfiguration {
  /**
   * <p>Name of the additional configuration.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration | undefined;

  /**
   * <p>Status of the additional configuration.</p>
   * @public
   */
  Status?: FeatureStatus | undefined;
}

/**
 * <p>Contains information about the features for the member account.</p>
 * @public
 */
export interface MemberFeaturesConfiguration {
  /**
   * <p>The name of the feature.</p>
   * @public
   */
  Name?: OrgFeature | undefined;

  /**
   * <p>The status of the feature.</p>
   * @public
   */
  Status?: FeatureStatus | undefined;

  /**
   * <p>Additional configuration of the feature for the member account.</p>
   * @public
   */
  AdditionalConfiguration?: MemberAdditionalConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateMemberDetectorsRequest {
  /**
   * <p>The detector ID of the administrator account.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>A list of member account IDs to be updated.</p>
   * @public
   */
  AccountIds: string[] | undefined;

  /**
   * <p>Describes which data sources will be updated.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead.
   * @public
   */
  DataSources?: DataSourceConfigurations | undefined;

  /**
   * <p>A list of features that will be updated for the specified member accounts.</p>
   * @public
   */
  Features?: MemberFeaturesConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateMemberDetectorsResponse {
  /**
   * <p>A list of member account IDs that were unable to be processed along with an explanation for why they were not processed.</p>
   * @public
   */
  UnprocessedAccounts: UnprocessedAccount[] | undefined;
}

/**
 * <p>Organization-wide Kubernetes audit logs configuration.</p>
 * @public
 */
export interface OrganizationKubernetesAuditLogsConfiguration {
  /**
   * <p>A value that contains information on whether Kubernetes audit logs should be enabled automatically as a data source for the organization.</p>
   * @public
   */
  AutoEnable: boolean | undefined;
}

/**
 * <p>Organization-wide Kubernetes data sources configurations.</p>
 * @public
 */
export interface OrganizationKubernetesConfiguration {
  /**
   * <p>Whether Kubernetes audit logs data source should be auto-enabled for new members joining the organization.</p>
   * @public
   */
  AuditLogs: OrganizationKubernetesAuditLogsConfiguration | undefined;
}

/**
 * <p>Organization-wide EBS volumes scan configuration.</p>
 * @public
 */
export interface OrganizationEbsVolumes {
  /**
   * <p>Whether scanning EBS volumes should be auto-enabled for new members joining the organization.</p>
   * @public
   */
  AutoEnable?: boolean | undefined;
}

/**
 * <p>Organization-wide EC2 instances with findings scan configuration.</p>
 * @public
 */
export interface OrganizationScanEc2InstanceWithFindings {
  /**
   * <p>Whether scanning EBS volumes should be auto-enabled for new members joining the organization.</p>
   * @public
   */
  EbsVolumes?: OrganizationEbsVolumes | undefined;
}

/**
 * <p>Organization-wide Malware Protection configurations.</p>
 * @public
 */
export interface OrganizationMalwareProtectionConfiguration {
  /**
   * <p>Whether Malware Protection for EC2 instances with findings should be auto-enabled for new members joining the organization.</p>
   * @public
   */
  ScanEc2InstanceWithFindings?: OrganizationScanEc2InstanceWithFindings | undefined;
}

/**
 * <p>Describes whether S3 data event logs will be automatically enabled for new members of the organization.</p>
 * @public
 */
export interface OrganizationS3LogsConfiguration {
  /**
   * <p>A value that contains information on whether S3 data event logs will be enabled automatically as a data source for the organization.</p>
   * @public
   */
  AutoEnable: boolean | undefined;
}

/**
 * <p>An object that contains information on which data sources will be configured to be automatically enabled for new members within the organization.</p>
 * @public
 */
export interface OrganizationDataSourceConfigurations {
  /**
   * <p>Describes whether S3 data event logs are enabled for new members of the organization.</p>
   * @public
   */
  S3Logs?: OrganizationS3LogsConfiguration | undefined;

  /**
   * <p>Describes the configuration of Kubernetes data sources for new members of the organization.</p>
   * @public
   */
  Kubernetes?: OrganizationKubernetesConfiguration | undefined;

  /**
   * <p>Describes the configuration of Malware Protection for new members of the organization.</p>
   * @public
   */
  MalwareProtection?: OrganizationMalwareProtectionConfiguration | undefined;
}

/**
 * <p>A list of additional configurations which will be configured for the organization. </p> <p>Additional configuration applies to only GuardDuty Runtime Monitoring protection plan.</p>
 * @public
 */
export interface OrganizationAdditionalConfiguration {
  /**
   * <p>The name of the additional configuration that will be configured for the organization. These values are applicable to only Runtime Monitoring protection plan.</p>
   * @public
   */
  Name?: OrgFeatureAdditionalConfiguration | undefined;

  /**
   * <p>The status of the additional configuration that will be configured for the organization. Use one of the following values to configure the feature status for the entire organization:</p> <ul> <li> <p> <code>NEW</code>: Indicates that when a new account joins the organization, they will have the additional configuration enabled automatically. </p> </li> <li> <p> <code>ALL</code>: Indicates that all accounts in the organization have the additional configuration enabled automatically. This includes <code>NEW</code> accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.</p> <p>It may take up to 24 hours to update the configuration for all the member accounts.</p> </li> <li> <p> <code>NONE</code>: Indicates that the additional configuration will not be automatically enabled for any account in the organization. The administrator must manage the additional configuration for each account individually.</p> </li> </ul>
   * @public
   */
  AutoEnable?: OrgFeatureStatus | undefined;
}

/**
 * <p>A list of features which will be configured for the organization.</p>
 * @public
 */
export interface OrganizationFeatureConfiguration {
  /**
   * <p>The name of the feature that will be configured for the organization.</p>
   * @public
   */
  Name?: OrgFeature | undefined;

  /**
   * <p>Describes the status of the feature that is configured for the member accounts within the organization. One of the following values is the status for the entire organization:</p> <ul> <li> <p> <code>NEW</code>: Indicates that when a new account joins the organization, they will have the feature enabled automatically. </p> </li> <li> <p> <code>ALL</code>: Indicates that all accounts in the organization have the feature enabled automatically. This includes <code>NEW</code> accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.</p> <p>It may take up to 24 hours to update the configuration for all the member accounts.</p> </li> <li> <p> <code>NONE</code>: Indicates that the feature will not be automatically enabled for any account in the organization. The administrator must manage the feature for each account individually.</p> </li> </ul>
   * @public
   */
  AutoEnable?: OrgFeatureStatus | undefined;

  /**
   * <p>The additional information that will be configured for the organization.</p>
   * @public
   */
  AdditionalConfiguration?: OrganizationAdditionalConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>The ID of the detector that configures the delegated administrator.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>Represents whether to automatically enable member accounts in the organization. This applies to only new member accounts, not the existing member accounts. When a new account joins the organization, the chosen features will be enabled for them by default.</p> <p>Even though this is still supported, we recommend using <code>AutoEnableOrganizationMembers</code> to achieve the similar results. You must provide a value for either <code>autoEnableOrganizationMembers</code> or <code>autoEnable</code>.</p>
   *
   * @deprecated This field is deprecated, use AutoEnableOrganizationMembers instead.
   * @public
   */
  AutoEnable?: boolean | undefined;

  /**
   * <p>Describes which data sources will be updated.</p>
   *
   * @deprecated This parameter is deprecated, use Features instead.
   * @public
   */
  DataSources?: OrganizationDataSourceConfigurations | undefined;

  /**
   * <p>A list of features that will be configured for the organization.</p>
   * @public
   */
  Features?: OrganizationFeatureConfiguration[] | undefined;

  /**
   * <p>Indicates the auto-enablement configuration of GuardDuty for the member accounts in the organization. You must provide a value for either <code>autoEnableOrganizationMembers</code> or <code>autoEnable</code>. </p> <p>Use one of the following configuration values for <code>autoEnableOrganizationMembers</code>:</p> <ul> <li> <p> <code>NEW</code>: Indicates that when a new account joins the organization, they will have GuardDuty enabled automatically. </p> </li> <li> <p> <code>ALL</code>: Indicates that all accounts in the organization have GuardDuty enabled automatically. This includes <code>NEW</code> accounts that join the organization and accounts that may have been suspended or removed from the organization in GuardDuty.</p> <p>It may take up to 24 hours to update the configuration for all the member accounts.</p> </li> <li> <p> <code>NONE</code>: Indicates that GuardDuty will not be automatically enabled for any account in the organization. The administrator must manage GuardDuty for each account in the organization individually.</p> <p>When you update the auto-enable setting from <code>ALL</code> or <code>NEW</code> to <code>NONE</code>, this action doesn't disable the corresponding option for your existing accounts. This configuration will apply to the new accounts that join the organization. After you update the auto-enable settings, no new account will have the corresponding option as enabled.</p> </li> </ul>
   * @public
   */
  AutoEnableOrganizationMembers?: AutoEnableMembers | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {}

/**
 * @public
 */
export interface UpdatePublishingDestinationRequest {
  /**
   * <p>The ID of the detector associated with the publishing destinations to update.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID of the publishing destination to update.</p>
   * @public
   */
  DestinationId: string | undefined;

  /**
   * <p>A <code>DestinationProperties</code> object that includes the <code>DestinationArn</code> and <code>KmsKeyArn</code> of the publishing destination.</p>
   * @public
   */
  DestinationProperties?: DestinationProperties | undefined;
}

/**
 * @public
 */
export interface UpdatePublishingDestinationResponse {}

/**
 * @public
 */
export interface UpdateThreatEntitySetRequest {
  /**
   * <p>The unique ID of the GuardDuty detector associated with the threat entity set that you want to update.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID returned by GuardDuty after updating the threat entity set resource.</p>
   * @public
   */
  ThreatEntitySetId: string | undefined;

  /**
   * <p>A user-friendly name to identify the trusted entity set.</p> <p>The name of your list can include lowercase letters, uppercase letters, numbers, dash (-), and underscore (_).</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The URI of the file that contains the trusted entity set.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>A boolean value that indicates whether GuardDuty is to start using this updated threat entity set. After you update an entity set, you will need to activate it again. It might take up to 15 minutes for the updated entity set to be effective.</p>
   * @public
   */
  Activate?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateThreatEntitySetResponse {}

/**
 * @public
 */
export interface UpdateThreatIntelSetRequest {
  /**
   * <p>The detectorID that specifies the GuardDuty service whose ThreatIntelSet you want to update.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   * @public
   */
  ThreatIntelSetId: string | undefined;

  /**
   * <p>The unique ID that specifies the ThreatIntelSet that you want to update.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The updated URI of the file that contains the ThreateIntelSet.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The updated Boolean value that specifies whether the ThreateIntelSet is active or not.</p>
   * @public
   */
  Activate?: boolean | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface UpdateThreatIntelSetResponse {}

/**
 * @public
 */
export interface UpdateTrustedEntitySetRequest {
  /**
   * <p>The unique ID of the GuardDuty detector associated with the threat entity set that you want to update.</p> <p>To find the <code>detectorId</code> in the current Region, see the Settings page in the GuardDuty console, or run the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_ListDetectors.html">ListDetectors</a> API.</p>
   * @public
   */
  DetectorId: string | undefined;

  /**
   * <p>The ID returned by GuardDuty after updating the trusted entity set resource.</p>
   * @public
   */
  TrustedEntitySetId: string | undefined;

  /**
   * <p>A user-friendly name to identify the trusted entity set.</p> <p>The name of your list can include lowercase letters, uppercase letters, numbers, dash (-), and underscore (_).</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The URI of the file that contains the trusted entity set.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the Amazon S3 bucket specified in the <b>location</b> parameter.</p>
   * @public
   */
  ExpectedBucketOwner?: string | undefined;

  /**
   * <p>A boolean value that indicates whether GuardDuty is to start using this updated trusted entity set. After you update an entity set, you will need to activate it again. It might take up to 15 minutes for the updated entity set to be effective.</p>
   * @public
   */
  Activate?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateTrustedEntitySetResponse {}
