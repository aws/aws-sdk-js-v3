// smithy-typescript generated code
import type {
  AccountSortBy,
  AggregationFindingType,
  AggregationResourceType,
  AmiConfigurationStatus,
  AmiScanDuration,
  AmiScanMode,
  AmiSortBy,
  Architecture,
  AssociationResultStatusCode,
  AwsConfigConnectorArnComparison,
  AwsEcrContainerSortBy,
  CisFindingStatus,
  CisFindingStatusComparison,
  CisReportFormat,
  CisReportStatus,
  CisResultStatus,
  CisResultStatusComparison,
  CisRuleStatus,
  CisScanConfigurationsSortBy,
  CisScanResultDetailsSortBy,
  CisScanResultsAggregatedByChecksSortBy,
  CisScanStatus,
  CisScanStatusComparison,
  CisSecurityLevel,
  CisSecurityLevelComparison,
  CisSortOrder,
  CisStringComparison,
  CisTargetStatus,
  CisTargetStatusComparison,
  CisTargetStatusReason,
  CloudProvider,
  CodeRepositoryProviderType,
  CodeRepositorySortBy,
  CodeScanStatus,
  CodeSnippetErrorCode,
  ConfigurationLevel,
  ConnectorArnComparison,
  ConnectorCloudProvider,
  ConnectorHealthStatus,
  ConnectorType,
  ConnectorTypeComparison,
  ContainerImagePullDateRescanDuration,
  ContainerImageRescanDuration,
  ContainerImageSortBy,
  ContinuousIntegrationScanEvent,
  CoverageMapComparison,
  CoverageResourceType,
  CoverageStringComparison,
  Day,
  DelegatedAdminStatus,
  Ec2DeepInspectionStatus,
  Ec2InstanceSortBy,
  Ec2Platform,
  Ec2ScanMode,
  Ec2ScanModeStatus,
  EcrPullDateRescanDuration,
  EcrPullDateRescanMode,
  EcrRescanDuration,
  EcrRescanDurationStatus,
  EcrScanFrequency,
  EnablementStatus,
  ErrorCode,
  ExploitAvailable,
  ExternalReportStatus,
  FilterAction,
  FindingDetailsErrorCode,
  FindingStatus,
  FindingType,
  FindingTypeSortBy,
  FixAvailable,
  FreeTrialInfoErrorCode,
  FreeTrialStatus,
  FreeTrialType,
  GroupKey,
  ImageLayerSortBy,
  IntegrationStatus,
  IntegrationType,
  LambdaFunctionSortBy,
  LambdaLayerSortBy,
  MachineImagePlatform,
  MapComparison,
  NetworkProtocol,
  OnDemandResourceType,
  OnDemandScanStatus,
  OnDemandScanStatusReason,
  Operation,
  PackageManager,
  PackageSortBy,
  PackageType,
  PeriodicScanFrequency,
  ProjectSelectionScope,
  Provider,
  ProviderComparison,
  RelationshipStatus,
  ReportFormat,
  ReportingErrorCode,
  RepositorySortBy,
  ResourceMapComparison,
  ResourceScanType,
  ResourceStringComparison,
  ResourceType,
  RuleSetCategory,
  Runtime,
  SbomReportFormat,
  ScanMode,
  ScanSource,
  ScanStatusCode,
  ScanStatusReason,
  ScanType,
  ScopeState,
  ScopeType,
  ServerlessFunctionSortBy,
  Service,
  Severity,
  SortOrder,
  Status,
  StringComparison,
  TagComparison,
  TitleSortBy,
  VmInstanceSortBy,
  VmPlatform,
  VMScannerStatus,
} from "./enums";

/**
 * Details the status of Amazon Inspector for each resource type Amazon Inspector scans.
 *
 * @public
 */
export interface ResourceStatus {
  /**
   * The status of Amazon Inspector scanning for Amazon EC2 resources.
   *
   * @public
   */
  ec2: Status | undefined;

  /**
   * The status of Amazon Inspector scanning for Amazon ECR resources.
   *
   * @public
   */
  ecr: Status | undefined;

  /**
   * The status of Amazon Inspector scanning for Amazon Web Services Lambda function.
   *
   * @public
   */
  lambda?: Status | undefined;

  /**
   * The status of Amazon Inspector scanning for custom application code for Amazon Web Services Lambda functions.
   *
   * @public
   */
  lambdaCode?: Status | undefined;

  /**
   * The status of Amazon Inspector scanning for code repositories.
   *
   * @public
   */
  codeRepository?: Status | undefined;

  /**
   * The status of Amazon Machine Image (AMI) scanning for the account.
   *
   * @public
   */
  ami?: Status | undefined;
}

/**
 * An Amazon Web Services account within your environment that Amazon Inspector has been enabled for.
 *
 * @public
 */
export interface Account {
  /**
   * The ID of the Amazon Web Services account.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The status of Amazon Inspector for the account.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * Details of the status of Amazon Inspector scans by resource type.
   *
   * @public
   */
  resourceStatus: ResourceStatus | undefined;
}

/**
 * An object that contains details about an aggregation response based on Amazon Web Services accounts.
 *
 * @public
 */
export interface AccountAggregation {
  /**
   * The type of finding.
   *
   * @public
   */
  findingType?: AggregationFindingType | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  resourceType?: AggregationResourceType | undefined;

  /**
   * The sort order (ascending or descending).
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort by.
   *
   * @public
   */
  sortBy?: AccountSortBy | undefined;
}

/**
 * An object that contains the counts of aggregated finding per severity.
 *
 * @public
 */
export interface SeverityCounts {
  /**
   * The total count of findings from all severities.
   *
   * @public
   */
  all?: number | undefined;

  /**
   * The total count of medium severity findings.
   *
   * @public
   */
  medium?: number | undefined;

  /**
   * The total count of high severity findings.
   *
   * @public
   */
  high?: number | undefined;

  /**
   * The total count of critical severity findings.
   *
   * @public
   */
  critical?: number | undefined;

  /**
   * The total count of low severity findings.
   *
   * @public
   */
  low?: number | undefined;

  /**
   * The total count of informational severity findings.
   *
   * @public
   */
  informational?: number | undefined;

  /**
   * The total count of untriaged findings.
   *
   * @public
   */
  untriaged?: number | undefined;
}

/**
 * An aggregation of findings by Amazon Web Services account ID.
 *
 * @public
 */
export interface AccountAggregationResponse {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The number of findings by severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * The number of findings that have an exploit available.
   *
   * @public
   */
  exploitAvailableCount?: number | undefined;

  /**
   * Details about the number of fixes.
   *
   * @public
   */
  fixAvailableCount?: number | undefined;
}

/**
 * The CIS string filter.
 *
 * @public
 */
export interface CisStringFilter {
  /**
   * The comparison value of the CIS string filter.
   *
   * @public
   */
  comparison: CisStringComparison | undefined;

  /**
   * The value of the CIS string filter.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * An object that described the state of Amazon Inspector scans for an account.
 *
 * @public
 */
export interface State {
  /**
   * The status of Amazon Inspector for the account.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * The error code explaining why the account failed to enable Amazon Inspector.
   *
   * @public
   */
  errorCode: ErrorCode | undefined;

  /**
   * The error message received when the account failed to enable Amazon Inspector.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * Details the state of Amazon Inspector for each resource type Amazon Inspector scans.
 *
 * @public
 */
export interface ResourceState {
  /**
   * An object detailing the state of Amazon Inspector scanning for Amazon EC2 resources.
   *
   * @public
   */
  ec2: State | undefined;

  /**
   * An object detailing the state of Amazon Inspector scanning for Amazon ECR resources.
   *
   * @public
   */
  ecr: State | undefined;

  /**
   * An object that described the state of Amazon Inspector scans for an account.
   *
   * @public
   */
  lambda?: State | undefined;

  /**
   * An object that described the state of Amazon Inspector scans for an account.
   *
   * @public
   */
  lambdaCode?: State | undefined;

  /**
   * An object that described the state of Amazon Inspector scans for an account.
   *
   * @public
   */
  codeRepository?: State | undefined;

  /**
   * An object that described the state of Amazon Inspector scans for an account.
   *
   * @public
   */
  ami?: State | undefined;
}

/**
 * An object with details the status of an Amazon Web Services account within your Amazon Inspector environment.
 *
 * @public
 */
export interface AccountState {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * An object detailing the status of Amazon Inspector for the account.
   *
   * @public
   */
  state: State | undefined;

  /**
   * An object detailing which resources Amazon Inspector is enabled to scan for the account.
   *
   * @public
   */
  resourceState: ResourceState | undefined;
}

/**
 * An object that describes the details of a string filter.
 *
 * @public
 */
export interface StringFilter {
  /**
   * The operator to use when comparing values in the filter.
   *
   * @public
   */
  comparison: StringComparison | undefined;

  /**
   * The value to filter on.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The details that define an aggregation based on Amazon machine images (AMIs).
 *
 * @public
 */
export interface AmiAggregation {
  /**
   * The IDs of AMIs to aggregate findings for.
   *
   * @public
   */
  amis?: StringFilter[] | undefined;

  /**
   * The order to sort results by.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort results by.
   *
   * @public
   */
  sortBy?: AmiSortBy | undefined;

  /**
   * The scan sources to filter the aggregation results by.
   *
   * @public
   */
  scanSources?: ScanSource[] | undefined;
}

/**
 * An object that describes the details of a number filter.
 *
 * @public
 */
export interface NumberFilter {
  /**
   * The highest number to be included in the filter.
   *
   * @public
   */
  upperInclusive?: number | undefined;

  /**
   * The lowest number to be included in the filter.
   *
   * @public
   */
  lowerInclusive?: number | undefined;
}

/**
 * Contains details on the time range used to filter findings.
 *
 * @public
 */
export interface DateFilter {
  /**
   * A timestamp representing the start of the time period filtered on.
   *
   * @public
   */
  startInclusive?: Date | undefined;

  /**
   * A timestamp representing the end of the time period filtered on.
   *
   * @public
   */
  endInclusive?: Date | undefined;
}

/**
 * An aggregation of information about Amazon ECR containers.
 *
 * @public
 */
export interface AwsEcrContainerAggregation {
  /**
   * The container resource IDs.
   *
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * The image SHA values.
   *
   * @public
   */
  imageShas?: StringFilter[] | undefined;

  /**
   * The container repositories.
   *
   * @public
   */
  repositories?: StringFilter[] | undefined;

  /**
   * The architecture of the containers.
   *
   * @public
   */
  architectures?: StringFilter[] | undefined;

  /**
   * The image tags.
   *
   * @public
   */
  imageTags?: StringFilter[] | undefined;

  /**
   * The sort order (ascending or descending).
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort by.
   *
   * @public
   */
  sortBy?: AwsEcrContainerSortBy | undefined;

  /**
   * The last time an Amazon ECR image was used in an Amazon ECS task or Amazon EKS pod.
   *
   * @public
   */
  lastInUseAt?: DateFilter[] | undefined;

  /**
   * The number of Amazon ECS tasks or Amazon EKS pods where the Amazon ECR container image is in use.
   *
   * @public
   */
  inUseCount?: NumberFilter[] | undefined;
}

/**
 * The details that define an aggregation based on code repositories.
 *
 * @public
 */
export interface CodeRepositoryAggregation {
  /**
   * The project names to include in the aggregation results.
   *
   * @public
   */
  projectNames?: StringFilter[] | undefined;

  /**
   * The repository provider types to include in the aggregation results.
   *
   * @public
   */
  providerTypes?: StringFilter[] | undefined;

  /**
   * The order to sort results by (ascending or descending) in the code repository aggregation.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort results by in the code repository aggregation.
   *
   * @public
   */
  sortBy?: CodeRepositorySortBy | undefined;

  /**
   * The resource IDs to include in the aggregation results.
   *
   * @public
   */
  resourceIds?: StringFilter[] | undefined;
}

/**
 * An aggregation of information about container images.
 *
 * @public
 */
export interface ContainerImageAggregation {
  /**
   * The resource IDs to aggregate findings for.
   *
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * The image digests to aggregate findings for.
   *
   * @public
   */
  imageDigests?: StringFilter[] | undefined;

  /**
   * The image repositories to aggregate findings for.
   *
   * @public
   */
  repositories?: StringFilter[] | undefined;

  /**
   * The image registries to aggregate findings for.
   *
   * @public
   */
  registries?: StringFilter[] | undefined;

  /**
   * The image architectures to aggregate findings for.
   *
   * @public
   */
  architectures?: StringFilter[] | undefined;

  /**
   * The image tags to aggregate findings for.
   *
   * @public
   */
  imageTags?: StringFilter[] | undefined;

  /**
   * The cloud providers to aggregate findings for. Valid values:
   *
   * - `AWS` – Findings from Amazon Web Services resources.
   * - `AZURE` – Findings from Microsoft Azure resources.
   *
   * @public
   */
  cloudProviders?: StringFilter[] | undefined;

  /**
   * The cloud partitions to aggregate findings for. Valid values:
   *
   * - `aws` – Amazon Web Services commercial Regions.
   * - `aws-cn` – Amazon Web Services China Regions.
   * - `aws-us-gov` – Amazon Web Services GovCloud (US) Regions.
   * - `AzureCloud` – Azure commercial Regions.
   *
   * @public
   */
  cloudPartitions?: StringFilter[] | undefined;

  /**
   * The cloud regions to aggregate findings for. The value format depends on the cloud provider:
   *
   * - An Amazon Web Services Region, such as `us-east-1`.
   * - An Azure region, such as `eastus`.
   *
   * @public
   */
  cloudRegions?: StringFilter[] | undefined;

  /**
   * The cloud organization IDs to aggregate findings for.
   *
   * @public
   */
  cloudOrgIds?: StringFilter[] | undefined;

  /**
   * The cloud account IDs to aggregate findings for.
   *
   * @public
   */
  cloudAccountIds?: StringFilter[] | undefined;

  /**
   * The last in-use timestamps to aggregate findings for.
   *
   * @public
   */
  lastInUseAt?: DateFilter[] | undefined;

  /**
   * The in-use counts to aggregate findings for.
   *
   * @public
   */
  inUseCount?: NumberFilter[] | undefined;

  /**
   * The order to sort results by. Valid values are `ASC` and `DESC`.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort results by. Specify a field name from the aggregation response, such as `CRITICAL`, `HIGH`, or `ALL`.
   *
   * @public
   */
  sortBy?: ContainerImageSortBy | undefined;
}

/**
 * An object that describes details of a map filter.
 *
 * @public
 */
export interface MapFilter {
  /**
   * The operator to use when comparing values in the filter.
   *
   * @public
   */
  comparison: MapComparison | undefined;

  /**
   * The tag key used in the filter.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag value used in the filter.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * The details that define an aggregation based on Amazon EC2 instances.
 *
 * @public
 */
export interface Ec2InstanceAggregation {
  /**
   * The AMI IDs associated with the Amazon EC2 instances to aggregate findings for.
   *
   * @public
   */
  amis?: StringFilter[] | undefined;

  /**
   * The operating system types to aggregate findings for. Valid values must be uppercase and underscore separated, examples are `ORACLE_LINUX_7` and `ALPINE_LINUX_3_8`.
   *
   * @public
   */
  operatingSystems?: StringFilter[] | undefined;

  /**
   * The Amazon EC2 instance IDs to aggregate findings for.
   *
   * @public
   */
  instanceIds?: StringFilter[] | undefined;

  /**
   * The Amazon EC2 instance tags to aggregate findings for.
   *
   * @public
   */
  instanceTags?: MapFilter[] | undefined;

  /**
   * The order to sort results by.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort results by.
   *
   * @public
   */
  sortBy?: Ec2InstanceSortBy | undefined;
}

/**
 * The details that define an aggregation based on finding type.
 *
 * @public
 */
export interface FindingTypeAggregation {
  /**
   * The finding type to aggregate.
   *
   * @public
   */
  findingType?: AggregationFindingType | undefined;

  /**
   * The resource type to aggregate.
   *
   * @public
   */
  resourceType?: AggregationResourceType | undefined;

  /**
   * The order to sort results by.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort results by.
   *
   * @public
   */
  sortBy?: FindingTypeSortBy | undefined;
}

/**
 * The details that define an aggregation based on container image layers.
 *
 * @public
 */
export interface ImageLayerAggregation {
  /**
   * The repository associated with the container image hosting the layers.
   *
   * @public
   */
  repositories?: StringFilter[] | undefined;

  /**
   * The ID of the container image layer.
   *
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * The hashes associated with the layers.
   *
   * @public
   */
  layerHashes?: StringFilter[] | undefined;

  /**
   * The cloud providers to aggregate findings for. Valid values:
   *
   * - `AWS` – Findings from Amazon Web Services resources.
   * - `AZURE` – Findings from Microsoft Azure resources.
   *
   * @public
   */
  cloudProviders?: StringFilter[] | undefined;

  /**
   * The cloud account IDs to aggregate findings for.
   *
   * @public
   */
  cloudAccountIds?: StringFilter[] | undefined;

  /**
   * The cloud organization IDs to aggregate findings for.
   *
   * @public
   */
  cloudOrgIds?: StringFilter[] | undefined;

  /**
   * The cloud regions to aggregate findings for. The value format depends on the cloud provider:
   *
   * - An Amazon Web Services Region, such as `us-east-1`.
   * - An Azure region, such as `eastus`.
   *
   * @public
   */
  cloudRegions?: StringFilter[] | undefined;

  /**
   * The cloud partitions to aggregate findings for. Valid values:
   *
   * - `aws` – Amazon Web Services commercial Regions.
   * - `aws-cn` – Amazon Web Services China Regions.
   * - `aws-us-gov` – Amazon Web Services GovCloud (US) Regions.
   * - `AzureCloud` – Azure commercial Regions.
   *
   * @public
   */
  cloudPartitions?: StringFilter[] | undefined;

  /**
   * The order to sort results by.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort results by.
   *
   * @public
   */
  sortBy?: ImageLayerSortBy | undefined;
}

/**
 * The details that define a findings aggregation based on Amazon Web Services Lambda functions.
 *
 * @public
 */
export interface LambdaFunctionAggregation {
  /**
   * The resource IDs to include in the aggregation results.
   *
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * The Amazon Web Services Lambda function names to include in the aggregation results.
   *
   * @public
   */
  functionNames?: StringFilter[] | undefined;

  /**
   * Returns findings aggregated by Amazon Web Services Lambda function runtime environments.
   *
   * @public
   */
  runtimes?: StringFilter[] | undefined;

  /**
   * The tags to include in the aggregation results.
   *
   * @public
   */
  functionTags?: MapFilter[] | undefined;

  /**
   * The order to use for sorting the results.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The finding severity to use for sorting the results.
   *
   * @public
   */
  sortBy?: LambdaFunctionSortBy | undefined;
}

/**
 * The details that define a findings aggregation based on an Amazon Web Services Lambda function's layers.
 *
 * @public
 */
export interface LambdaLayerAggregation {
  /**
   * The names of the Amazon Web Services Lambda functions associated with the layers.
   *
   * @public
   */
  functionNames?: StringFilter[] | undefined;

  /**
   * The resource IDs for the Amazon Web Services Lambda function layers.
   *
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Lambda function layer.
   *
   * @public
   */
  layerArns?: StringFilter[] | undefined;

  /**
   * The order to use for sorting the results.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The finding severity to use for sorting the results.
   *
   * @public
   */
  sortBy?: LambdaLayerSortBy | undefined;
}

/**
 * The details that define an aggregation based on operating system package type.
 *
 * @public
 */
export interface PackageAggregation {
  /**
   * The names of packages to aggregate findings on.
   *
   * @public
   */
  packageNames?: StringFilter[] | undefined;

  /**
   * The order to sort results by.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort results by.
   *
   * @public
   */
  sortBy?: PackageSortBy | undefined;
}

/**
 * The details that define an aggregation based on repository.
 *
 * @public
 */
export interface RepositoryAggregation {
  /**
   * The names of repositories to aggregate findings on.
   *
   * @public
   */
  repositories?: StringFilter[] | undefined;

  /**
   * The order to sort results by.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort results by.
   *
   * @public
   */
  sortBy?: RepositorySortBy | undefined;
}

/**
 * An aggregation of information about serverless functions.
 *
 * @public
 */
export interface ServerlessFunctionAggregation {
  /**
   * The resource IDs to aggregate findings for.
   *
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * The function names to aggregate findings for.
   *
   * @public
   */
  functionNames?: StringFilter[] | undefined;

  /**
   * The runtimes to aggregate findings for.
   *
   * @public
   */
  runtimes?: StringFilter[] | undefined;

  /**
   * The function tags to aggregate findings for.
   *
   * @public
   */
  functionTags?: MapFilter[] | undefined;

  /**
   * The cloud providers to aggregate findings for. Valid values:
   *
   * - `AWS` – Findings from Amazon Web Services resources.
   * - `AZURE` – Findings from Microsoft Azure resources.
   *
   * @public
   */
  cloudProviders?: StringFilter[] | undefined;

  /**
   * The cloud partitions to aggregate findings for. Valid values:
   *
   * - `aws` – Amazon Web Services commercial Regions.
   * - `aws-cn` – Amazon Web Services China Regions.
   * - `aws-us-gov` – Amazon Web Services GovCloud (US) Regions.
   * - `AzureCloud` – Azure commercial Regions.
   *
   * @public
   */
  cloudPartitions?: StringFilter[] | undefined;

  /**
   * The cloud regions to aggregate findings for. The value format depends on the cloud provider:
   *
   * - An Amazon Web Services Region, such as `us-east-1`.
   * - An Azure region, such as `eastus`.
   *
   * @public
   */
  cloudRegions?: StringFilter[] | undefined;

  /**
   * The cloud organization IDs to aggregate findings for.
   *
   * @public
   */
  cloudOrgIds?: StringFilter[] | undefined;

  /**
   * The cloud account IDs to aggregate findings for.
   *
   * @public
   */
  cloudAccountIds?: StringFilter[] | undefined;

  /**
   * The order to sort results by. Valid values are `ASC` and `DESC`.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort results by. Specify a field name from the aggregation response, such as `CRITICAL`, `HIGH`, or `ALL`.
   *
   * @public
   */
  sortBy?: ServerlessFunctionSortBy | undefined;
}

/**
 * The details that define an aggregation based on finding title.
 *
 * @public
 */
export interface TitleAggregation {
  /**
   * The finding titles to aggregate on.
   *
   * @public
   */
  titles?: StringFilter[] | undefined;

  /**
   * The vulnerability IDs of the findings.
   *
   * @public
   */
  vulnerabilityIds?: StringFilter[] | undefined;

  /**
   * The resource type to aggregate on.
   *
   * @public
   */
  resourceType?: AggregationResourceType | undefined;

  /**
   * The type of finding to aggregate on.
   *
   * @public
   */
  findingType?: AggregationFindingType | undefined;

  /**
   * The order to sort results by.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort results by.
   *
   * @public
   */
  sortBy?: TitleSortBy | undefined;
}

/**
 * An aggregation of information about VM instances.
 *
 * @public
 */
export interface VmInstanceAggregation {
  /**
   * The resource IDs to aggregate findings for.
   *
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * The operating systems to aggregate findings for.
   *
   * @public
   */
  operatingSystems?: StringFilter[] | undefined;

  /**
   * The instance tags to aggregate findings for.
   *
   * @public
   */
  instanceTags?: MapFilter[] | undefined;

  /**
   * The VM image references to aggregate findings for.
   *
   * @public
   */
  vmImageReferences?: StringFilter[] | undefined;

  /**
   * The cloud providers to aggregate findings for. Valid values:
   *
   * - `AWS` – Findings from Amazon Web Services resources.
   * - `AZURE` – Findings from Microsoft Azure resources.
   *
   * @public
   */
  cloudProviders?: StringFilter[] | undefined;

  /**
   * The cloud partitions to aggregate findings for. Valid values:
   *
   * - `aws` – Amazon Web Services commercial Regions.
   * - `aws-cn` – Amazon Web Services China Regions.
   * - `aws-us-gov` – Amazon Web Services GovCloud (US) Regions.
   * - `AzureCloud` – Azure commercial Regions.
   *
   * @public
   */
  cloudPartitions?: StringFilter[] | undefined;

  /**
   * The cloud regions to aggregate findings for. The value format depends on the cloud provider:
   *
   * - An Amazon Web Services Region, such as `us-east-1`.
   * - An Azure region, such as `eastus`.
   *
   * @public
   */
  cloudRegions?: StringFilter[] | undefined;

  /**
   * The cloud organization IDs to aggregate findings for.
   *
   * @public
   */
  cloudOrgIds?: StringFilter[] | undefined;

  /**
   * The cloud account IDs to aggregate findings for.
   *
   * @public
   */
  cloudAccountIds?: StringFilter[] | undefined;

  /**
   * The order to sort results by. Valid values are `ASC` and `DESC`.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * The value to sort results by. Specify a field name from the aggregation response, such as `CRITICAL`, `HIGH`, `ALL`, or `NETWORK_FINDINGS`.
   *
   * @public
   */
  sortBy?: VmInstanceSortBy | undefined;
}

/**
 * Contains details about an aggregation request.
 *
 * @public
 */
export type AggregationRequest =
  | AggregationRequest.AccountAggregationMember
  | AggregationRequest.AmiAggregationMember
  | AggregationRequest.AwsEcrContainerAggregationMember
  | AggregationRequest.CodeRepositoryAggregationMember
  | AggregationRequest.ContainerImageAggregationMember
  | AggregationRequest.Ec2InstanceAggregationMember
  | AggregationRequest.FindingTypeAggregationMember
  | AggregationRequest.ImageLayerAggregationMember
  | AggregationRequest.LambdaFunctionAggregationMember
  | AggregationRequest.LambdaLayerAggregationMember
  | AggregationRequest.PackageAggregationMember
  | AggregationRequest.RepositoryAggregationMember
  | AggregationRequest.ServerlessFunctionAggregationMember
  | AggregationRequest.TitleAggregationMember
  | AggregationRequest.VmInstanceAggregationMember
  | AggregationRequest.$UnknownMember;

/**
 * @public
 */
export namespace AggregationRequest {
  /**
   * An object that contains details about an aggregation request based on Amazon Web Services account IDs.
   *
   * @public
   */
  export interface AccountAggregationMember {
    accountAggregation: AccountAggregation;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on Amazon Machine Images (AMIs).
   *
   * @public
   */
  export interface AmiAggregationMember {
    accountAggregation?: never;
    amiAggregation: AmiAggregation;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on Amazon ECR container images.
   *
   * @public
   */
  export interface AwsEcrContainerAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation: AwsEcrContainerAggregation;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on Amazon EC2 instances.
   *
   * @public
   */
  export interface Ec2InstanceAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation: Ec2InstanceAggregation;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on finding types.
   *
   * @public
   */
  export interface FindingTypeAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation: FindingTypeAggregation;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on container image layers.
   *
   * @public
   */
  export interface ImageLayerAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation: ImageLayerAggregation;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on operating system package type.
   *
   * @public
   */
  export interface PackageAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation: PackageAggregation;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on Amazon ECR repositories.
   *
   * @public
   */
  export interface RepositoryAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation: RepositoryAggregation;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on finding title.
   *
   * @public
   */
  export interface TitleAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation: TitleAggregation;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * Returns an object with findings aggregated by Amazon Web Services Lambda layer.
   *
   * @public
   */
  export interface LambdaLayerAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation: LambdaLayerAggregation;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * Returns an object with findings aggregated by Amazon Web Services Lambda function.
   *
   * @public
   */
  export interface LambdaFunctionAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation: LambdaFunctionAggregation;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on code repositories.
   *
   * @public
   */
  export interface CodeRepositoryAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation: CodeRepositoryAggregation;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on virtual machine (VM) instances.
   *
   * @public
   */
  export interface VmInstanceAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation: VmInstanceAggregation;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on container images.
   *
   * @public
   */
  export interface ContainerImageAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation: ContainerImageAggregation;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation request based on serverless functions.
   *
   * @public
   */
  export interface ServerlessFunctionAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation: ServerlessFunctionAggregation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    accountAggregation: (value: AccountAggregation) => T;
    amiAggregation: (value: AmiAggregation) => T;
    awsEcrContainerAggregation: (value: AwsEcrContainerAggregation) => T;
    ec2InstanceAggregation: (value: Ec2InstanceAggregation) => T;
    findingTypeAggregation: (value: FindingTypeAggregation) => T;
    imageLayerAggregation: (value: ImageLayerAggregation) => T;
    packageAggregation: (value: PackageAggregation) => T;
    repositoryAggregation: (value: RepositoryAggregation) => T;
    titleAggregation: (value: TitleAggregation) => T;
    lambdaLayerAggregation: (value: LambdaLayerAggregation) => T;
    lambdaFunctionAggregation: (value: LambdaFunctionAggregation) => T;
    codeRepositoryAggregation: (value: CodeRepositoryAggregation) => T;
    vmInstanceAggregation: (value: VmInstanceAggregation) => T;
    containerImageAggregation: (value: ContainerImageAggregation) => T;
    serverlessFunctionAggregation: (value: ServerlessFunctionAggregation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A response that contains the results of a finding aggregation by AMI.
 *
 * @public
 */
export interface AmiAggregationResponse {
  /**
   * The ID of the AMI that findings were aggregated for.
   *
   * @public
   */
  ami: string | undefined;

  /**
   * The Amazon Web Services account ID for the AMI.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The cloud service provider associated with this Amazon Machine Image (AMI) aggregation. Valid values:
   *
   * - `AWS` – Findings from Amazon Web Services resources.
   * - `AZURE` – Findings from Microsoft Azure resources.
   *
   * @public
   */
  cloudProvider?: Provider | undefined;

  /**
   * The cloud infrastructure partition associated with this AMI aggregation. Valid values:
   *
   * - `aws` – Amazon Web Services commercial Regions.
   * - `aws-cn` – Amazon Web Services China Regions.
   * - `aws-us-gov` – Amazon Web Services GovCloud (US) Regions.
   * - `AzureCloud` – Azure commercial Regions.
   *
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * The cloud Region associated with this AMI aggregation. The value format depends on the cloud provider:
   *
   * - An Amazon Web Services Region, such as `us-east-1`.
   * - An Azure region, such as `eastus`.
   *
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * The cloud organization ID for the AMI aggregation.
   *
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * The cloud account ID for the AMI aggregation.
   *
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * An object that contains the count of matched findings per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * The IDs of Amazon EC2 instances using this AMI.
   *
   * @public
   */
  affectedInstances?: number | undefined;

  /**
   * The source of the scan that generated the findings for the Amazon Machine Image (AMI).
   *
   * @public
   */
  scanSource?: ScanSource | undefined;
}

/**
 * An aggregation of information about Amazon ECR containers.
 *
 * @public
 */
export interface AwsEcrContainerAggregationResponse {
  /**
   * The resource ID of the container.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The SHA value of the container image.
   *
   * @public
   */
  imageSha?: string | undefined;

  /**
   * The container repository.
   *
   * @public
   */
  repository?: string | undefined;

  /**
   * The architecture of the container.
   *
   * @public
   */
  architecture?: string | undefined;

  /**
   * The container image stags.
   *
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * The Amazon Web Services account ID of the account that owns the container.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The number of finding by severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * The last time an Amazon ECR image was used in an Amazon ECS task or Amazon EKS pod.
   *
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * The number of Amazon ECS tasks or Amazon EKS pods where the Amazon ECR container image is in use.
   *
   * @public
   */
  inUseCount?: number | undefined;
}

/**
 * A response that contains the results of a finding aggregation by code repository.
 *
 * @public
 */
export interface CodeRepositoryAggregationResponse {
  /**
   * The names of the projects associated with the code repository.
   *
   * @public
   */
  projectNames: string | undefined;

  /**
   * The type of repository provider for the code repository.
   *
   * @public
   */
  providerType?: string | undefined;

  /**
   * An object that contains the counts of aggregated finding per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * The number of active findings that have an exploit available for the code repository.
   *
   * @public
   */
  exploitAvailableActiveFindingsCount?: number | undefined;

  /**
   * The number of active findings that have a fix available for the code repository.
   *
   * @public
   */
  fixAvailableActiveFindingsCount?: number | undefined;

  /**
   * The Amazon Web Services account ID associated with the code repository.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The resource ID of the code repository.
   *
   * @public
   */
  resourceId?: string | undefined;
}

/**
 * A response that contains the results of a container image aggregation.
 *
 * @public
 */
export interface ContainerImageAggregationResponse {
  /**
   * The resource ID for the container image.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The cloud service provider associated with this container image aggregation. Valid values:
   *
   * - `AWS` – Findings from Amazon Web Services resources.
   * - `AZURE` – Findings from Microsoft Azure resources.
   *
   * @public
   */
  cloudProvider?: Provider | undefined;

  /**
   * The cloud account ID for the container image aggregation.
   *
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * The cloud infrastructure partition associated with this container image aggregation. Valid values:
   *
   * - `aws` – Amazon Web Services commercial Regions.
   * - `aws-cn` – Amazon Web Services China Regions.
   * - `aws-us-gov` – Amazon Web Services GovCloud (US) Regions.
   * - `AzureCloud` – Azure commercial Regions.
   *
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * The cloud Region associated with this container image aggregation. The value format depends on the cloud provider:
   *
   * - An Amazon Web Services Region, such as `us-east-1`.
   * - An Azure region, such as `eastus`.
   *
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * The cloud organization ID for the container image aggregation.
   *
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * The image digest for the container image.
   *
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * The repository for the container image.
   *
   * @public
   */
  repository?: string | undefined;

  /**
   * The registry for the container image.
   *
   * @public
   */
  registry?: string | undefined;

  /**
   * The architecture of the container image.
   *
   * @public
   */
  architecture?: string | undefined;

  /**
   * The image tags attached to the container image.
   *
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * The account ID associated with the container image.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * An object that contains the counts of aggregated finding per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * The last time the container image was in use.
   *
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * The number of times the container image is in use.
   *
   * @public
   */
  inUseCount?: number | undefined;

  /**
   * The number of active findings with an exploit available for the container image.
   *
   * @public
   */
  exploitAvailableActiveFindingsCount?: number | undefined;

  /**
   * The number of active findings with a fix available for the container image.
   *
   * @public
   */
  fixAvailableActiveFindingsCount?: number | undefined;
}

/**
 * A response that contains the results of a finding aggregation by Amazon EC2 instance.
 *
 * @public
 */
export interface Ec2InstanceAggregationResponse {
  /**
   * The Amazon EC2 instance ID.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * The Amazon Machine Image (AMI) of the Amazon EC2 instance.
   *
   * @public
   */
  ami?: string | undefined;

  /**
   * The operating system of the Amazon EC2 instance.
   *
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * The tags attached to the instance.
   *
   * @public
   */
  instanceTags?: Record<string, string> | undefined;

  /**
   * The Amazon Web Services account for the Amazon EC2 instance.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * An object that contains the count of matched findings per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * The number of network findings for the Amazon EC2 instance.
   *
   * @public
   */
  networkFindings?: number | undefined;
}

/**
 * A response that contains the results of a finding type aggregation.
 *
 * @public
 */
export interface FindingTypeAggregationResponse {
  /**
   * The ID of the Amazon Web Services account associated with the findings.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The value to sort results by.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * The number of findings that have an exploit available.
   *
   * @public
   */
  exploitAvailableCount?: number | undefined;

  /**
   * Details about the number of fixes.
   *
   * @public
   */
  fixAvailableCount?: number | undefined;

  /**
   * The cloud service provider associated with this finding type aggregation. Valid values:
   *
   * - `AWS` – Findings from Amazon Web Services resources.
   * - `AZURE` – Findings from Microsoft Azure resources.
   *
   * @public
   */
  cloudProvider?: string | undefined;

  /**
   * The cloud account ID for the finding type aggregation.
   *
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * The cloud organization ID for the finding type aggregation.
   *
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * The cloud Region associated with this finding type aggregation. The value format depends on the cloud provider:
   *
   * - An Amazon Web Services Region, such as `us-east-1`.
   * - An Azure region, such as `eastus`.
   *
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * The cloud infrastructure partition associated with this finding type aggregation. Valid values:
   *
   * - `aws` – Amazon Web Services commercial Regions.
   * - `aws-cn` – Amazon Web Services China Regions.
   * - `aws-us-gov` – Amazon Web Services GovCloud (US) Regions.
   * - `AzureCloud` – Azure commercial Regions.
   *
   * @public
   */
  cloudPartition?: string | undefined;
}

/**
 * A response that contains the results of a finding aggregation by image layer.
 *
 * @public
 */
export interface ImageLayerAggregationResponse {
  /**
   * The repository the layer resides in.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The resource ID of the container image layer.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The layer hash.
   *
   * @public
   */
  layerHash: string | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the container image hosting the layer image.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The cloud service provider associated with this image layer aggregation. Valid values:
   *
   * - `AWS` – Findings from Amazon Web Services resources.
   * - `AZURE` – Findings from Microsoft Azure resources.
   *
   * @public
   */
  cloudProvider?: string | undefined;

  /**
   * The cloud account ID for the image layer aggregation.
   *
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * The cloud organization ID for the image layer aggregation.
   *
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * The cloud Region associated with this image layer aggregation. The value format depends on the cloud provider:
   *
   * - An Amazon Web Services Region, such as `us-east-1`.
   * - An Azure region, such as `eastus`.
   *
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * The cloud infrastructure partition associated with this image layer aggregation. Valid values:
   *
   * - `aws` – Amazon Web Services commercial Regions.
   * - `aws-cn` – Amazon Web Services China Regions.
   * - `aws-us-gov` – Amazon Web Services GovCloud (US) Regions.
   * - `AzureCloud` – Azure commercial Regions.
   *
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * An object that represents the count of matched findings per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * A response that contains the results of an Amazon Web Services Lambda function finding aggregation.
 *
 * @public
 */
export interface LambdaFunctionAggregationResponse {
  /**
   * The resource IDs included in the aggregation results.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The Amazon Web Services Lambda function names included in the aggregation results.
   *
   * @public
   */
  functionName?: string | undefined;

  /**
   * The runtimes included in the aggregation results.
   *
   * @public
   */
  runtime?: string | undefined;

  /**
   * The tags included in the aggregation results.
   *
   * @public
   */
  lambdaTags?: Record<string, string> | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the Amazon Web Services Lambda function.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * An object that contains the counts of aggregated finding per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * The date that the Amazon Web Services Lambda function included in the aggregation results was last changed.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * A response that contains the results of an Amazon Web Services Lambda function layer finding aggregation.
 *
 * @public
 */
export interface LambdaLayerAggregationResponse {
  /**
   * The names of the Amazon Web Services Lambda functions associated with the layers.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The Resource ID of the Amazon Web Services Lambda function layer.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Lambda function layer.
   *
   * @public
   */
  layerArn: string | undefined;

  /**
   * The account ID of the Amazon Web Services Lambda function layer.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * An object that contains the counts of aggregated finding per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * A response that contains the results of a finding aggregation by image layer.
 *
 * @public
 */
export interface PackageAggregationResponse {
  /**
   * The name of the operating system package.
   *
   * @public
   */
  packageName: string | undefined;

  /**
   * The ID of the Amazon Web Services account associated with the findings.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * An object that contains the count of matched findings per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * A response that contains details on the results of a finding aggregation by repository.
 *
 * @public
 */
export interface RepositoryAggregationResponse {
  /**
   * The name of the repository associated with the findings.
   *
   * @public
   */
  repository: string | undefined;

  /**
   * The ID of the Amazon Web Services account associated with the findings.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The cloud service provider associated with this repository aggregation. Valid values:
   *
   * - `AWS` – Findings from Amazon Web Services resources.
   * - `AZURE` – Findings from Microsoft Azure resources.
   *
   * @public
   */
  cloudProvider?: Provider | undefined;

  /**
   * The cloud infrastructure partition associated with this repository aggregation. Valid values:
   *
   * - `aws` – Amazon Web Services commercial Regions.
   * - `aws-cn` – Amazon Web Services China Regions.
   * - `aws-us-gov` – Amazon Web Services GovCloud (US) Regions.
   * - `AzureCloud` – Azure commercial Regions.
   *
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * The cloud Region associated with this repository aggregation. The value format depends on the cloud provider:
   *
   * - An Amazon Web Services Region, such as `us-east-1`.
   * - An Azure region, such as `eastus`.
   *
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * The cloud organization ID for the repository aggregation.
   *
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * The cloud account ID for the repository aggregation.
   *
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * An object that represent the count of matched findings per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * The number of container images impacted by the findings.
   *
   * @public
   */
  affectedImages?: number | undefined;
}

/**
 * A response that contains the results of a serverless function aggregation.
 *
 * @public
 */
export interface ServerlessFunctionAggregationResponse {
  /**
   * The resource ID for the serverless function.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The cloud service provider associated with this serverless function aggregation. Valid values:
   *
   * - `AWS` – Findings from Amazon Web Services resources.
   * - `AZURE` – Findings from Microsoft Azure resources.
   *
   * @public
   */
  cloudProvider?: Provider | undefined;

  /**
   * The cloud account ID for the serverless function aggregation.
   *
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * The cloud infrastructure partition associated with this serverless function aggregation. Valid values:
   *
   * - `aws` – Amazon Web Services commercial Regions.
   * - `aws-cn` – Amazon Web Services China Regions.
   * - `aws-us-gov` – Amazon Web Services GovCloud (US) Regions.
   * - `AzureCloud` – Azure commercial Regions.
   *
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * The cloud Region associated with this serverless function aggregation. The value format depends on the cloud provider:
   *
   * - An Amazon Web Services Region, such as `us-east-1`.
   * - An Azure region, such as `eastus`.
   *
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * The cloud organization ID for the serverless function aggregation.
   *
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * The name of the serverless function.
   *
   * @public
   */
  functionName?: string | undefined;

  /**
   * The runtime of the serverless function.
   *
   * @public
   */
  runtime?: string | undefined;

  /**
   * The tags attached to the serverless function.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The account ID associated with the serverless function.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * An object that contains the counts of aggregated finding per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * The date and time the serverless function was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * The number of active findings with an exploit available for the serverless function.
   *
   * @public
   */
  exploitAvailableActiveFindingsCount?: number | undefined;

  /**
   * The number of active findings with a fix available for the serverless function.
   *
   * @public
   */
  fixAvailableActiveFindingsCount?: number | undefined;
}

/**
 * A response that contains details on the results of a finding aggregation by title.
 *
 * @public
 */
export interface TitleAggregationResponse {
  /**
   * The title that the findings were aggregated on.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The vulnerability ID of the finding.
   *
   * @public
   */
  vulnerabilityId?: string | undefined;

  /**
   * The ID of the Amazon Web Services account associated with the findings.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * An object that represent the count of matched findings per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * A response that contains the results of a VM instance aggregation.
 *
 * @public
 */
export interface VmInstanceAggregationResponse {
  /**
   * The resource ID for the VM instance.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The cloud service provider associated with this VM instance aggregation. Valid values:
   *
   * - `AWS` – Findings from Amazon Web Services resources.
   * - `AZURE` – Findings from Microsoft Azure resources.
   *
   * @public
   */
  cloudProvider?: Provider | undefined;

  /**
   * The cloud account ID for the VM instance aggregation.
   *
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * The cloud infrastructure partition associated with this VM instance aggregation. Valid values:
   *
   * - `aws` – Amazon Web Services commercial Regions.
   * - `aws-cn` – Amazon Web Services China Regions.
   * - `aws-us-gov` – Amazon Web Services GovCloud (US) Regions.
   * - `AzureCloud` – Azure commercial Regions.
   *
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * The cloud Region associated with this VM instance aggregation. The value format depends on the cloud provider:
   *
   * - An Amazon Web Services Region, such as `us-east-1`.
   * - An Azure region, such as `eastus`.
   *
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * The cloud organization ID for the VM instance aggregation.
   *
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * The VM image reference for the VM instance.
   *
   * @public
   */
  vmImageReference?: string | undefined;

  /**
   * The operating system of the VM instance.
   *
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * The tags attached to the VM instance.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The account ID associated with the VM instance.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * An object that contains the counts of aggregated finding per severity.
   *
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * The number of network findings for the VM instance. This field applies only to Amazon Web Services resources.
   *
   * @public
   */
  networkFindings?: number | undefined;

  /**
   * The number of active findings with an exploit available for the VM instance.
   *
   * @public
   */
  exploitAvailableActiveFindingsCount?: number | undefined;

  /**
   * The number of active findings with a fix available for the VM instance.
   *
   * @public
   */
  fixAvailableActiveFindingsCount?: number | undefined;
}

/**
 * A structure that contains details about the results of an aggregation type.
 *
 * @public
 */
export type AggregationResponse =
  | AggregationResponse.AccountAggregationMember
  | AggregationResponse.AmiAggregationMember
  | AggregationResponse.AwsEcrContainerAggregationMember
  | AggregationResponse.CodeRepositoryAggregationMember
  | AggregationResponse.ContainerImageAggregationMember
  | AggregationResponse.Ec2InstanceAggregationMember
  | AggregationResponse.FindingTypeAggregationMember
  | AggregationResponse.ImageLayerAggregationMember
  | AggregationResponse.LambdaFunctionAggregationMember
  | AggregationResponse.LambdaLayerAggregationMember
  | AggregationResponse.PackageAggregationMember
  | AggregationResponse.RepositoryAggregationMember
  | AggregationResponse.ServerlessFunctionAggregationMember
  | AggregationResponse.TitleAggregationMember
  | AggregationResponse.VmInstanceAggregationMember
  | AggregationResponse.$UnknownMember;

/**
 * @public
 */
export namespace AggregationResponse {
  /**
   * An object that contains details about an aggregation response based on Amazon Web Services account IDs.
   *
   * @public
   */
  export interface AccountAggregationMember {
    accountAggregation: AccountAggregationResponse;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on Amazon Machine Images (AMIs).
   *
   * @public
   */
  export interface AmiAggregationMember {
    accountAggregation?: never;
    amiAggregation: AmiAggregationResponse;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on Amazon ECR container images.
   *
   * @public
   */
  export interface AwsEcrContainerAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation: AwsEcrContainerAggregationResponse;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on Amazon EC2 instances.
   *
   * @public
   */
  export interface Ec2InstanceAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation: Ec2InstanceAggregationResponse;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on finding types.
   *
   * @public
   */
  export interface FindingTypeAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation: FindingTypeAggregationResponse;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on container image layers.
   *
   * @public
   */
  export interface ImageLayerAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation: ImageLayerAggregationResponse;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on operating system package type.
   *
   * @public
   */
  export interface PackageAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation: PackageAggregationResponse;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on Amazon ECR repositories.
   *
   * @public
   */
  export interface RepositoryAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation: RepositoryAggregationResponse;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on finding title.
   *
   * @public
   */
  export interface TitleAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation: TitleAggregationResponse;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An aggregation of findings by Amazon Web Services Lambda layer.
   *
   * @public
   */
  export interface LambdaLayerAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation: LambdaLayerAggregationResponse;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An aggregation of findings by Amazon Web Services Lambda function.
   *
   * @public
   */
  export interface LambdaFunctionAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation: LambdaFunctionAggregationResponse;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on code repositories.
   *
   * @public
   */
  export interface CodeRepositoryAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation: CodeRepositoryAggregationResponse;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on VM instances.
   *
   * @public
   */
  export interface VmInstanceAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation: VmInstanceAggregationResponse;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on container images.
   *
   * @public
   */
  export interface ContainerImageAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation: ContainerImageAggregationResponse;
    serverlessFunctionAggregation?: never;
    $unknown?: never;
  }

  /**
   * An object that contains details about an aggregation response based on serverless functions.
   *
   * @public
   */
  export interface ServerlessFunctionAggregationMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation: ServerlessFunctionAggregationResponse;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    accountAggregation?: never;
    amiAggregation?: never;
    awsEcrContainerAggregation?: never;
    ec2InstanceAggregation?: never;
    findingTypeAggregation?: never;
    imageLayerAggregation?: never;
    packageAggregation?: never;
    repositoryAggregation?: never;
    titleAggregation?: never;
    lambdaLayerAggregation?: never;
    lambdaFunctionAggregation?: never;
    codeRepositoryAggregation?: never;
    vmInstanceAggregation?: never;
    containerImageAggregation?: never;
    serverlessFunctionAggregation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    accountAggregation: (value: AccountAggregationResponse) => T;
    amiAggregation: (value: AmiAggregationResponse) => T;
    awsEcrContainerAggregation: (value: AwsEcrContainerAggregationResponse) => T;
    ec2InstanceAggregation: (value: Ec2InstanceAggregationResponse) => T;
    findingTypeAggregation: (value: FindingTypeAggregationResponse) => T;
    imageLayerAggregation: (value: ImageLayerAggregationResponse) => T;
    packageAggregation: (value: PackageAggregationResponse) => T;
    repositoryAggregation: (value: RepositoryAggregationResponse) => T;
    titleAggregation: (value: TitleAggregationResponse) => T;
    lambdaLayerAggregation: (value: LambdaLayerAggregationResponse) => T;
    lambdaFunctionAggregation: (value: LambdaFunctionAggregationResponse) => T;
    codeRepositoryAggregation: (value: CodeRepositoryAggregationResponse) => T;
    vmInstanceAggregation: (value: VmInstanceAggregationResponse) => T;
    containerImageAggregation: (value: ContainerImageAggregationResponse) => T;
    serverlessFunctionAggregation: (value: ServerlessFunctionAggregationResponse) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A filter that matches Amazon Machine Images (AMIs) by tag key and, optionally, tag value.
 *
 * @public
 */
export interface AmiTagFilter {
  /**
   * The tag key to match against an AMI's tags.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag value to match against an AMI's tags. If omitted, the filter matches on the tag key alone.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * The scan mode configuration that determines which Amazon Machine Images (AMIs) are scanned.
 *
 * @public
 */
export interface AmiScanModeConfiguration {
  /**
   * The scan mode that determines whether all AMIs are scanned or only those matching the specified tags.
   *
   * @public
   */
  scanMode: AmiScanMode | undefined;

  /**
   * The tag filters used to select which AMIs are scanned when using targeted scanning.
   *
   * @public
   */
  tags?: AmiTagFilter[] | undefined;

  /**
   * Whether to exclude AMIs that are copies of other AMIs from scanning.
   *
   * @public
   */
  excludeCopiedAmis?: boolean | undefined;

  /**
   * Whether to exclude AMIs created by Amazon Data Lifecycle Manager (DLM) backups from scanning.
   *
   * @public
   */
  excludeBackupDlmAmis?: boolean | undefined;
}

/**
 * The configuration that controls how Amazon Machine Images (AMIs) are scanned for an account.
 *
 * @public
 */
export interface AmiConfiguration {
  /**
   * Restricts scanning to AMIs that were last launched within the specified duration.
   *
   * @public
   */
  lastLaunchedWithin?: AmiScanDuration | undefined;

  /**
   * Restricts scanning to AMIs that were created within the specified duration.
   *
   * @public
   */
  createdWithin?: AmiScanDuration | undefined;

  /**
   * The scan mode configuration that determines which AMIs are scanned.
   *
   * @public
   */
  scanModeConfiguration: AmiScanModeConfiguration | undefined;
}

/**
 * The current state of the Amazon Machine Image (AMI) scan configuration for an account.
 *
 * @public
 */
export interface AmiConfigurationState {
  /**
   * Restricts scanning to AMIs that were last launched within the specified duration.
   *
   * @public
   */
  lastLaunchedWithin?: AmiScanDuration | undefined;

  /**
   * Restricts scanning to AMIs that were created within the specified duration.
   *
   * @public
   */
  createdWithin?: AmiScanDuration | undefined;

  /**
   * The scan mode configuration that determines which AMIs are scanned.
   *
   * @public
   */
  scanModeConfiguration?: AmiScanModeConfiguration | undefined;

  /**
   * The status of the AMI scan configuration.
   *
   * @public
   */
  status?: AmiConfigurationStatus | undefined;

  /**
   * The date and time when the AMI scan configuration was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Identifies a specific resource in a code repository that will be scanned.
 *
 * @public
 */
export type CodeSecurityResource =
  | CodeSecurityResource.ProjectIdMember
  | CodeSecurityResource.$UnknownMember;

/**
 * @public
 */
export namespace CodeSecurityResource {
  /**
   * The unique identifier of the project in the code repository.
   *
   * @public
   */
  export interface ProjectIdMember {
    projectId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    projectId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    projectId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains details about a request to associate a code repository with a scan configuration.
 *
 * @public
 */
export interface AssociateConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the scan configuration.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * Identifies a specific resource in a code repository that will be scanned.
   *
   * @public
   */
  resource: CodeSecurityResource | undefined;
}

/**
 * @public
 */
export interface AssociateMemberRequest {
  /**
   * The Amazon Web Services account ID of the member account to be associated.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberResponse {
  /**
   * The Amazon Web Services account ID of the successfully associated member account.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * An object that describes a validation exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the validation exception.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The validation exception message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The Amazon Web Services Threat Intel Group (ATIG) details for a specific vulnerability.
 *
 * @public
 */
export interface AtigData {
  /**
   * The date and time this vulnerability was first observed.
   *
   * @public
   */
  firstSeen?: Date | undefined;

  /**
   * The date and time this vulnerability was last observed.
   *
   * @public
   */
  lastSeen?: Date | undefined;

  /**
   * The commercial sectors this vulnerability targets.
   *
   * @public
   */
  targets?: string[] | undefined;

  /**
   * The [MITRE ATT&amp;CK](https://attack.mitre.org/) tactics, techniques, and procedures (TTPs) associated with vulnerability.
   *
   * @public
   */
  ttps?: string[] | undefined;
}

/**
 * Represents which scan types are automatically enabled for new members of your Amazon Inspector organization.
 *
 * @public
 */
export interface AutoEnable {
  /**
   * Represents whether Amazon EC2 scans are automatically enabled for new members of your Amazon Inspector organization.
   *
   * @public
   */
  ec2: boolean | undefined;

  /**
   * Represents whether Amazon ECR scans are automatically enabled for new members of your Amazon Inspector organization.
   *
   * @public
   */
  ecr: boolean | undefined;

  /**
   * Represents whether Amazon Web Services Lambda standard scans are automatically enabled for new members of your Amazon Inspector organization.
   *
   * @public
   */
  lambda?: boolean | undefined;

  /**
   * Represents whether Lambda code scans are automatically enabled for new members of your Amazon Inspector organization.
   *
   * @public
   */
  lambdaCode?: boolean | undefined;

  /**
   * Represents whether code repository scans are automatically enabled for new members of your Amazon Inspector organization.
   *
   * @public
   */
  codeRepository?: boolean | undefined;

  /**
   * Represents whether Amazon Machine Image (AMI) scans are automatically enabled for new members of your Amazon Inspector organization.
   *
   * @public
   */
  ami?: boolean | undefined;
}

/**
 * A filter that matches connectors by the ARN of the associated Amazon Web Services Config connector.
 *
 * @public
 */
export interface AwsConfigConnectorArnFilter {
  /**
   * The comparison operator for the Amazon Web Services Config connector ARN filter.
   *
   * @public
   */
  comparison: AwsConfigConnectorArnComparison | undefined;

  /**
   * The Amazon Web Services Config connector ARN value to filter by.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Details of the Amazon EC2 instance involved in a finding.
 *
 * @public
 */
export interface AwsEc2InstanceDetails {
  /**
   * The type of the Amazon EC2 instance.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The image ID of the Amazon EC2 instance.
   *
   * @public
   */
  imageId?: string | undefined;

  /**
   * The IPv4 addresses of the Amazon EC2 instance.
   *
   * @public
   */
  ipV4Addresses?: string[] | undefined;

  /**
   * The IPv6 addresses of the Amazon EC2 instance.
   *
   * @public
   */
  ipV6Addresses?: string[] | undefined;

  /**
   * The name of the key pair used to launch the Amazon EC2 instance.
   *
   * @public
   */
  keyName?: string | undefined;

  /**
   * The IAM instance profile ARN of the Amazon EC2 instance.
   *
   * @public
   */
  iamInstanceProfileArn?: string | undefined;

  /**
   * The VPC ID of the Amazon EC2 instance.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The subnet ID of the Amazon EC2 instance.
   *
   * @public
   */
  subnetId?: string | undefined;

  /**
   * The date and time the Amazon EC2 instance was launched at.
   *
   * @public
   */
  launchedAt?: Date | undefined;

  /**
   * The platform of the Amazon EC2 instance.
   *
   * @public
   */
  platform?: string | undefined;
}

/**
 * The image details of the Amazon ECR container image.
 *
 * @public
 */
export interface AwsEcrContainerImageDetails {
  /**
   * The name of the repository the Amazon ECR container image resides in.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The image tags attached to the Amazon ECR container image.
   *
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * The date and time the Amazon ECR container image was pushed.
   *
   * @public
   */
  pushedAt?: Date | undefined;

  /**
   * The image author of the Amazon ECR container image.
   *
   * @public
   */
  author?: string | undefined;

  /**
   * The architecture of the Amazon ECR container image.
   *
   * @public
   */
  architecture?: string | undefined;

  /**
   * The image hash of the Amazon ECR container image.
   *
   * @public
   */
  imageHash: string | undefined;

  /**
   * The registry for the Amazon ECR container image.
   *
   * @public
   */
  registry: string | undefined;

  /**
   * The platform of the Amazon ECR container image.
   *
   * @public
   */
  platform?: string | undefined;

  /**
   * The last time an Amazon ECR image was used in an Amazon ECS task or Amazon EKS pod.
   *
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * The number of Amazon ECS tasks or Amazon EKS pods where the Amazon ECR container image is in use.
   *
   * @public
   */
  inUseCount?: number | undefined;
}

/**
 * Metadata about tasks where an image was in use.
 *
 * @public
 */
export interface AwsEcsMetadataDetails {
  /**
   * The details group information for a task in a cluster.
   *
   * @public
   */
  detailsGroup: string | undefined;

  /**
   * The task definition ARN.
   *
   * @public
   */
  taskDefinitionArn: string | undefined;
}

/**
 * Information about the workload.
 *
 * @public
 */
export interface AwsEksWorkloadInfo {
  /**
   * The name of the workload.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The workload type.
   *
   * @public
   */
  type: string | undefined;
}

/**
 * The metadata for an Amazon EKS pod where an Amazon ECR image is in use.
 *
 * @public
 */
export interface AwsEksMetadataDetails {
  /**
   * The namespace for an Amazon EKS cluster.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * The list of workloads.
   *
   * @public
   */
  workloadInfoList?: AwsEksWorkloadInfo[] | undefined;
}

/**
 * The VPC security groups and subnets that are attached to an Amazon Web Services Lambda function. For more information, see [VPC Settings](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
 *
 * @public
 */
export interface LambdaVpcConfig {
  /**
   * A list of VPC subnet IDs.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The VPC security groups and subnets that are attached to an Amazon Web Services Lambda function. For more information, see [VPC Settings](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  vpcId?: string | undefined;
}

/**
 * A summary of information about the Amazon Web Services Lambda function.
 *
 * @public
 */
export interface AwsLambdaFunctionDetails {
  /**
   * The name of the Amazon Web Services Lambda function.
   *
   * @public
   */
  functionName: string | undefined;

  /**
   * The runtime environment for the Amazon Web Services Lambda function.
   *
   * @public
   */
  runtime: Runtime | undefined;

  /**
   * The SHA256 hash of the Amazon Web Services Lambda function's deployment package.
   *
   * @public
   */
  codeSha256: string | undefined;

  /**
   * The version of the Amazon Web Services Lambda function.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The Amazon Web Services Lambda function's execution role.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The Amazon Web Services Lambda function's [layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html). A Lambda function can have up to five layers.
   *
   * @public
   */
  layers?: string[] | undefined;

  /**
   * The Amazon Web Services Lambda function's networking configuration.
   *
   * @public
   */
  vpcConfig?: LambdaVpcConfig | undefined;

  /**
   * The type of deployment package. Set to `Image` for container image and set `Zip` for .zip file archive.
   *
   * @public
   */
  packageType?: PackageType | undefined;

  /**
   * The instruction set architecture that the Amazon Web Services Lambda function supports. Architecture is a string array with one of the valid values. The default architecture value is `x86_64`.
   *
   * @public
   */
  architectures?: Architecture[] | undefined;

  /**
   * The date and time that a user last updated the configuration, in [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html)
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * The scope of resources to scan for a single scanning type. Provide this as part of an `AzureScopeConfigurationInput` when you create or update a connector.
 *
 * @public
 */
export interface ScopeConfigurationInput {
  /**
   * The type of scope. Valid values are `TENANT`, which scans all resources in the Azure tenant, and `SUBSCRIPTION`, which scans only the resources in the specified Azure subscriptions.
   *
   * @public
   */
  scopeType: ScopeType | undefined;

  /**
   * The list of scope values. For subscription-level scope, these are Azure subscription IDs.
   *
   * @public
   */
  scopeValues?: string[] | undefined;
}

/**
 * The scope of Azure resources to scan, defined separately for VM, container image, and serverless scanning. Provide this when you create or update an Azure connector.
 *
 * @public
 */
export interface AzureScopeConfigurationInput {
  /**
   * The scope configuration input for VM scanning.
   *
   * @public
   */
  vmScanning?: ScopeConfigurationInput | undefined;

  /**
   * The scope configuration input for container image scanning.
   *
   * @public
   */
  containerImageScanning?: ScopeConfigurationInput | undefined;

  /**
   * The scope configuration input for serverless scanning.
   *
   * @public
   */
  serverlessScanning?: ScopeConfigurationInput | undefined;
}

/**
 * The Azure-specific configuration details for creating a connector, including the Amazon Web Services Config connector association, scan scope, and regions to scan.
 *
 * @public
 */
export interface AzureProviderDetailCreate {
  /**
   * The ARN of the Amazon Web Services Config connector to associate with this connector.
   *
   * @public
   */
  awsConfigConnectorArn: string | undefined;

  /**
   * The scope configuration that defines which Azure resources to scan.
   *
   * @public
   */
  scopeConfiguration: AzureScopeConfigurationInput | undefined;

  /**
   * The Azure regions to scan.
   *
   * @public
   */
  azureRegions: string[] | undefined;

  /**
   * Specifies whether to automatically install the VM scanner on connected Azure resources. Defaults to `true`.
   *
   * @public
   */
  autoInstallVMScanner?: boolean | undefined;
}

/**
 * The Azure-specific configuration details for updating a connector, including the scan scope and regions to scan.
 *
 * @public
 */
export interface AzureProviderDetailUpdate {
  /**
   * The updated Azure regions to scan.
   *
   * @public
   */
  azureRegions?: string[] | undefined;

  /**
   * The updated scope configuration that defines which Azure resources to scan.
   *
   * @public
   */
  scopeConfiguration?: AzureScopeConfigurationInput | undefined;

  /**
   * Specifies whether to automatically install the VM scanner on connected Azure resources.
   *
   * @public
   */
  autoInstallVMScanner?: boolean | undefined;
}

/**
 * The scope of resources that Amazon Inspector scans for a single scanning type, including the scope level, the targeted resources, and the current state.
 *
 * @public
 */
export interface ScopeConfiguration {
  /**
   * The type of scope. Valid values are `TENANT`, which scans all resources in the Azure tenant, and `SUBSCRIPTION`, which scans only the resources in the specified Azure subscriptions.
   *
   * @public
   */
  scopeType: ScopeType | undefined;

  /**
   * The list of scope values. For subscription-level scope, these are Azure subscription IDs.
   *
   * @public
   */
  scopeValues?: string[] | undefined;

  /**
   * The current state of the scope configuration.
   *
   * @public
   */
  state?: ScopeState | undefined;

  /**
   * The reason for the current state of the scope configuration.
   *
   * @public
   */
  stateReason?: string | undefined;
}

/**
 * The scope of Azure resources that Amazon Inspector scans, defined separately for VM, container image, and serverless scanning. Returned as part of a connector's configuration.
 *
 * @public
 */
export interface AzureScopeConfiguration {
  /**
   * The scope configuration for VM scanning.
   *
   * @public
   */
  vmScanning?: ScopeConfiguration | undefined;

  /**
   * The scope configuration for container image scanning.
   *
   * @public
   */
  containerImageScanning?: ScopeConfiguration | undefined;

  /**
   * The scope configuration for serverless scanning.
   *
   * @public
   */
  serverlessScanning?: ScopeConfiguration | undefined;
}

/**
 * @public
 */
export interface BatchAssociateCodeSecurityScanConfigurationRequest {
  /**
   * A list of code repositories to associate with the specified scan configuration.
   *
   * @public
   */
  associateConfigurationRequests: AssociateConfigurationRequest[] | undefined;
}

/**
 * Details about a failed attempt to associate or disassociate a code repository with a scan configuration.
 *
 * @public
 */
export interface FailedAssociationResult {
  /**
   * The Amazon Resource Name (ARN) of the scan configuration that failed to be associated or disassociated.
   *
   * @public
   */
  scanConfigurationArn?: string | undefined;

  /**
   * Identifies a specific resource in a code repository that will be scanned.
   *
   * @public
   */
  resource?: CodeSecurityResource | undefined;

  /**
   * The status code indicating why the association or disassociation failed.
   *
   * @public
   */
  statusCode?: AssociationResultStatusCode | undefined;

  /**
   * A message explaining why the association or disassociation failed.
   *
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * Details about a successful association or disassociation between a code repository and a scan configuration.
 *
 * @public
 */
export interface SuccessfulAssociationResult {
  /**
   * The Amazon Resource Name (ARN) of the scan configuration that was successfully associated or disassociated.
   *
   * @public
   */
  scanConfigurationArn?: string | undefined;

  /**
   * Identifies a specific resource in a code repository that will be scanned.
   *
   * @public
   */
  resource?: CodeSecurityResource | undefined;
}

/**
 * @public
 */
export interface BatchAssociateCodeSecurityScanConfigurationResponse {
  /**
   * Details of any code repositories that failed to be associated with the scan configuration.
   *
   * @public
   */
  failedAssociations?: FailedAssociationResult[] | undefined;

  /**
   * Details of code repositories that were successfully associated with the scan configuration.
   *
   * @public
   */
  successfulAssociations?: SuccessfulAssociationResult[] | undefined;
}

/**
 * Contains details about a request to disassociate a code repository from a scan configuration.
 *
 * @public
 */
export interface DisassociateConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the scan configuration to disassociate from a code repository.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * Identifies a specific resource in a code repository that will be scanned.
   *
   * @public
   */
  resource: CodeSecurityResource | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateCodeSecurityScanConfigurationRequest {
  /**
   * A list of code repositories to disassociate from the specified scan configuration.
   *
   * @public
   */
  disassociateConfigurationRequests: DisassociateConfigurationRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateCodeSecurityScanConfigurationResponse {
  /**
   * Details of any code repositories that failed to be disassociated from the scan configuration.
   *
   * @public
   */
  failedAssociations?: FailedAssociationResult[] | undefined;

  /**
   * Details of code repositories that were successfully disassociated from the scan configuration.
   *
   * @public
   */
  successfulAssociations?: SuccessfulAssociationResult[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAccountStatusRequest {
  /**
   * The 12-digit Amazon Web Services account IDs of the accounts to retrieve Amazon Inspector status for.
   *
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * An object with details on why an account failed to enable Amazon Inspector.
 *
 * @public
 */
export interface FailedAccount {
  /**
   * The Amazon Web Services account ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The status of Amazon Inspector for the account.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * An object detailing which resources Amazon Inspector is enabled to scan for the account.
   *
   * @public
   */
  resourceStatus?: ResourceStatus | undefined;

  /**
   * The error code explaining why the account failed to enable Amazon Inspector.
   *
   * @public
   */
  errorCode: ErrorCode | undefined;

  /**
   * The error message received when the account failed to enable Amazon Inspector.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchGetAccountStatusResponse {
  /**
   * An array of objects that provide details on the status of Amazon Inspector for each of the requested accounts.
   *
   * @public
   */
  accounts: AccountState[] | undefined;

  /**
   * An array of objects detailing any accounts that failed to enable Amazon Inspector and why.
   *
   * @public
   */
  failedAccounts?: FailedAccount[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCodeSnippetRequest {
  /**
   * An array of finding ARNs for the findings you want to retrieve code snippets from.
   *
   * @public
   */
  findingArns: string[] | undefined;
}

/**
 * Contains information on the lines of code associated with a code snippet.
 *
 * @public
 */
export interface CodeLine {
  /**
   * The content of a line of code
   *
   * @public
   */
  content: string | undefined;

  /**
   * The line number that a section of code is located at.
   *
   * @public
   */
  lineNumber: number | undefined;
}

/**
 * A suggested fix for a vulnerability in your Lambda function code.
 *
 * @public
 */
export interface SuggestedFix {
  /**
   * The fix's description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The fix's code.
   *
   * @public
   */
  code?: string | undefined;
}

/**
 * Contains information on a code snippet retrieved by Amazon Inspector from a code vulnerability finding.
 *
 * @public
 */
export interface CodeSnippetResult {
  /**
   * The ARN of a finding that the code snippet is associated with.
   *
   * @public
   */
  findingArn?: string | undefined;

  /**
   * The line number of the first line of a code snippet.
   *
   * @public
   */
  startLine?: number | undefined;

  /**
   * The line number of the last line of a code snippet.
   *
   * @public
   */
  endLine?: number | undefined;

  /**
   * Contains information on the retrieved code snippet.
   *
   * @public
   */
  codeSnippet?: CodeLine[] | undefined;

  /**
   * Details of a suggested code fix.
   *
   * @public
   */
  suggestedFixes?: SuggestedFix[] | undefined;
}

/**
 * Contains information about any errors encountered while trying to retrieve a code snippet.
 *
 * @public
 */
export interface CodeSnippetError {
  /**
   * The ARN of the finding that a code snippet couldn't be retrieved for.
   *
   * @public
   */
  findingArn: string | undefined;

  /**
   * The error code for the error that prevented a code snippet from being retrieved.
   *
   * @public
   */
  errorCode: CodeSnippetErrorCode | undefined;

  /**
   * The error message received when Amazon Inspector failed to retrieve a code snippet.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCodeSnippetResponse {
  /**
   * The retrieved code snippets associated with the provided finding ARNs.
   *
   * @public
   */
  codeSnippetResults?: CodeSnippetResult[] | undefined;

  /**
   * Any errors Amazon Inspector encountered while trying to retrieve the requested code snippets.
   *
   * @public
   */
  errors?: CodeSnippetError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetFindingDetailsRequest {
  /**
   * A list of finding ARNs.
   *
   * @public
   */
  findingArns: string[] | undefined;
}

/**
 * Details about an error encountered when trying to return vulnerability data for a finding.
 *
 * @public
 */
export interface FindingDetailsError {
  /**
   * The finding ARN that returned an error.
   *
   * @public
   */
  findingArn: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  errorCode: FindingDetailsErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific vulnerability.
 *
 * @public
 */
export interface CisaData {
  /**
   * The date and time CISA added this vulnerability to their catalogue.
   *
   * @public
   */
  dateAdded?: Date | undefined;

  /**
   * The date and time CISA expects a fix to have been provided vulnerability.
   *
   * @public
   */
  dateDue?: Date | undefined;

  /**
   * The remediation action recommended by CISA for this vulnerability.
   *
   * @public
   */
  action?: string | undefined;
}

/**
 * Details of the evidence for a vulnerability identified in a finding.
 *
 * @public
 */
export interface Evidence {
  /**
   * The evidence rule.
   *
   * @public
   */
  evidenceRule?: string | undefined;

  /**
   * The evidence details.
   *
   * @public
   */
  evidenceDetail?: string | undefined;

  /**
   * The evidence severity.
   *
   * @public
   */
  severity?: string | undefined;
}

/**
 * Contains information on when this exploit was observed.
 *
 * @public
 */
export interface ExploitObserved {
  /**
   * The date an time when the exploit was last seen.
   *
   * @public
   */
  lastSeen?: Date | undefined;

  /**
   * The date an time when the exploit was first seen.
   *
   * @public
   */
  firstSeen?: Date | undefined;
}

/**
 * Details of the vulnerability identified in a finding.
 *
 * @public
 */
export interface FindingDetail {
  /**
   * The finding ARN that the vulnerability details are associated with.
   *
   * @public
   */
  findingArn?: string | undefined;

  /**
   * The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific vulnerability.
   *
   * @public
   */
  cisaData?: CisaData | undefined;

  /**
   * The risk score of the vulnerability.
   *
   * @public
   */
  riskScore?: number | undefined;

  /**
   * Information on the evidence of the vulnerability.
   *
   * @public
   */
  evidences?: Evidence[] | undefined;

  /**
   * The MITRE adversary tactics, techniques, or procedures (TTPs) associated with the vulnerability.
   *
   * @public
   */
  ttps?: string[] | undefined;

  /**
   * The known malware tools or kits that can exploit the vulnerability.
   *
   * @public
   */
  tools?: string[] | undefined;

  /**
   * Contains information on when this exploit was observed.
   *
   * @public
   */
  exploitObserved?: ExploitObserved | undefined;

  /**
   * The reference URLs for the vulnerability data.
   *
   * @public
   */
  referenceUrls?: string[] | undefined;

  /**
   * The Common Weakness Enumerations (CWEs) associated with the vulnerability.
   *
   * @public
   */
  cwes?: string[] | undefined;

  /**
   * The Exploit Prediction Scoring System (EPSS) score of the vulnerability.
   *
   * @public
   */
  epssScore?: number | undefined;
}

/**
 * @public
 */
export interface BatchGetFindingDetailsResponse {
  /**
   * A finding's vulnerability details.
   *
   * @public
   */
  findingDetails?: FindingDetail[] | undefined;

  /**
   * Error information for findings that details could not be returned for.
   *
   * @public
   */
  errors?: FindingDetailsError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetFreeTrialInfoRequest {
  /**
   * The account IDs to get free trial status for.
   *
   * @public
   */
  accountIds: string[] | undefined;
}

/**
 * An object that contains information about the Amazon Inspector free trial for an account.
 *
 * @public
 */
export interface FreeTrialInfo {
  /**
   * The type of scan covered by the Amazon Inspector free trail.
   *
   * @public
   */
  type: FreeTrialType | undefined;

  /**
   * The date and time that the Amazon Inspector free trail started for a given account.
   *
   * @public
   */
  start: Date | undefined;

  /**
   * The date and time that the Amazon Inspector free trail ends for a given account.
   *
   * @public
   */
  end: Date | undefined;

  /**
   * The order to sort results by.
   *
   * @public
   */
  status: FreeTrialStatus | undefined;

  /**
   * The cloud provider associated with the free trial information.
   *
   * @public
   */
  cloudProvider?: CloudProvider | undefined;
}

/**
 * Information about the Amazon Inspector free trial for an account.
 *
 * @public
 */
export interface FreeTrialAccountInfo {
  /**
   * The account associated with the Amazon Inspector free trial information.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * Contains information about the Amazon Inspector free trial for an account.
   *
   * @public
   */
  freeTrialInfo: FreeTrialInfo[] | undefined;
}

/**
 * Information about an error received while accessing free trail data for an account.
 *
 * @public
 */
export interface FreeTrialInfoError {
  /**
   * The account associated with the Amazon Inspector free trial information.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  code: FreeTrialInfoErrorCode | undefined;

  /**
   * The error message returned.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchGetFreeTrialInfoResponse {
  /**
   * An array of objects that provide Amazon Inspector free trial details for each of the requested accounts.
   *
   * @public
   */
  accounts: FreeTrialAccountInfo[] | undefined;

  /**
   * An array of objects detailing any accounts that free trial data could not be returned for.
   *
   * @public
   */
  failedAccounts: FreeTrialInfoError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetMemberEc2DeepInspectionStatusRequest {
  /**
   * The unique identifiers for the Amazon Web Services accounts to retrieve Amazon Inspector deep inspection activation status for.
   *
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * An object that contains details about the state of Amazon Inspector deep inspection for a member account.
 *
 * @public
 */
export interface MemberAccountEc2DeepInspectionStatusState {
  /**
   * The unique identifier for the Amazon Web Services account of the organization member
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The state of Amazon Inspector deep inspection in the member account.
   *
   * @public
   */
  status?: Ec2DeepInspectionStatus | undefined;

  /**
   * The error message explaining why the account failed to activate Amazon Inspector deep inspection.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * An object that contains details about a member account in your organization that failed to activate Amazon Inspector deep inspection.
 *
 * @public
 */
export interface FailedMemberAccountEc2DeepInspectionStatusState {
  /**
   * The unique identifier for the Amazon Web Services account of the organization member that failed to activate Amazon Inspector deep inspection.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The status of EC2 scanning in the account that failed to activate Amazon Inspector deep inspection.
   *
   * @public
   */
  ec2ScanStatus?: Status | undefined;

  /**
   * The error message explaining why the account failed to activate Amazon Inspector deep inspection.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetMemberEc2DeepInspectionStatusResponse {
  /**
   * An array of objects that provide details on the activation status of Amazon Inspector deep inspection for each of the requested accounts.
   *
   * @public
   */
  accountIds?: MemberAccountEc2DeepInspectionStatusState[] | undefined;

  /**
   * An array of objects that provide details on any accounts that failed to activate Amazon Inspector deep inspection and why.
   *
   * @public
   */
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[] | undefined;
}

/**
 * An object that contains details about the status of Amazon Inspector deep inspection for a member account in your organization.
 *
 * @public
 */
export interface MemberAccountEc2DeepInspectionStatus {
  /**
   * The unique identifier for the Amazon Web Services account of the organization member.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * Whether Amazon Inspector deep inspection is active in the account. If `TRUE` Amazon Inspector deep inspection is active, if `FALSE` it is not active.
   *
   * @public
   */
  activateDeepInspection: boolean | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusRequest {
  /**
   * The unique identifiers for the Amazon Web Services accounts to change Amazon Inspector deep inspection status for.
   *
   * @public
   */
  accountIds: MemberAccountEc2DeepInspectionStatus[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusResponse {
  /**
   * An array of objects that provide details for each of the accounts that Amazon Inspector deep inspection status was successfully changed for.
   *
   * @public
   */
  accountIds?: MemberAccountEc2DeepInspectionStatusState[] | undefined;

  /**
   * An array of objects that provide details for each of the accounts that Amazon Inspector deep inspection status could not be successfully changed for.
   *
   * @public
   */
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[] | undefined;
}

/**
 * @public
 */
export interface CancelFindingsReportRequest {
  /**
   * The ID of the report to be canceled.
   *
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface CancelFindingsReportResponse {
  /**
   * The ID of the canceled report.
   *
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface CancelSbomExportRequest {
  /**
   * The report ID of the SBOM export to cancel.
   *
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface CancelSbomExportResponse {
  /**
   * The report ID of the canceled SBOM export.
   *
   * @public
   */
  reportId?: string | undefined;
}

/**
 * The status counts.
 *
 * @public
 */
export interface StatusCounts {
  /**
   * The number of checks that failed.
   *
   * @public
   */
  failed?: number | undefined;

  /**
   * The number of checks that were skipped.
   *
   * @public
   */
  skipped?: number | undefined;

  /**
   * The number of checks that passed.
   *
   * @public
   */
  passed?: number | undefined;
}

/**
 * A CIS check.
 *
 * @public
 */
export interface CisCheckAggregation {
  /**
   * The scan ARN for the CIS check scan ARN.
   *
   * @public
   */
  scanArn: string | undefined;

  /**
   * The check ID for the CIS check.
   *
   * @public
   */
  checkId?: string | undefined;

  /**
   * The CIS check title.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The description for the CIS check.
   *
   * @public
   */
  checkDescription?: string | undefined;

  /**
   * The CIS check level.
   *
   * @public
   */
  level?: CisSecurityLevel | undefined;

  /**
   * The account ID for the CIS check.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The CIS check status counts.
   *
   * @public
   */
  statusCounts?: StatusCounts | undefined;

  /**
   * The CIS check platform.
   *
   * @public
   */
  platform?: string | undefined;
}

/**
 * The CIS date filter.
 *
 * @public
 */
export interface CisDateFilter {
  /**
   * The CIS date filter's earliest scan start time.
   *
   * @public
   */
  earliestScanStartTime?: Date | undefined;

  /**
   * The CIS date filter's latest scan start time.
   *
   * @public
   */
  latestScanStartTime?: Date | undefined;
}

/**
 * The CIS finding status filter.
 *
 * @public
 */
export interface CisFindingStatusFilter {
  /**
   * The comparison value of the CIS finding status filter.
   *
   * @public
   */
  comparison: CisFindingStatusComparison | undefined;

  /**
   * The value of the CIS finding status filter.
   *
   * @public
   */
  value: CisFindingStatus | undefined;
}

/**
 * The CIS number filter.
 *
 * @public
 */
export interface CisNumberFilter {
  /**
   * The CIS number filter's upper inclusive.
   *
   * @public
   */
  upperInclusive?: number | undefined;

  /**
   * The CIS number filter's lower inclusive.
   *
   * @public
   */
  lowerInclusive?: number | undefined;
}

/**
 * The CIS result status filter.
 *
 * @public
 */
export interface CisResultStatusFilter {
  /**
   * The comparison value of the CIS result status filter.
   *
   * @public
   */
  comparison: CisResultStatusComparison | undefined;

  /**
   * The value of the CIS result status filter.
   *
   * @public
   */
  value: CisResultStatus | undefined;
}

/**
 * The CIS targets.
 *
 * @public
 */
export interface CisTargets {
  /**
   * The CIS target account ids.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * The CIS target resource tags.
   *
   * @public
   */
  targetResourceTags?: Record<string, string[]> | undefined;
}

/**
 * The CIS scan.
 *
 * @public
 */
export interface CisScan {
  /**
   * The CIS scan's ARN.
   *
   * @public
   */
  scanArn: string | undefined;

  /**
   * The CIS scan's configuration ARN.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * The CIS scan's status.
   *
   * @public
   */
  status?: CisScanStatus | undefined;

  /**
   * The the name of the scan configuration that's associated with this scan.
   *
   * @public
   */
  scanName?: string | undefined;

  /**
   * The CIS scan's date.
   *
   * @public
   */
  scanDate?: Date | undefined;

  /**
   * The CIS scan's failed checks.
   *
   * @public
   */
  failedChecks?: number | undefined;

  /**
   * The CIS scan's total checks.
   *
   * @public
   */
  totalChecks?: number | undefined;

  /**
   * The CIS scan's targets.
   *
   * @public
   */
  targets?: CisTargets | undefined;

  /**
   * The account or organization that schedules the CIS scan.
   *
   * @public
   */
  scheduledBy?: string | undefined;

  /**
   * The security level for the CIS scan. Security level refers to the Benchmark levels that CIS assigns to a profile.
   *
   * @public
   */
  securityLevel?: CisSecurityLevel | undefined;
}

/**
 * The time.
 *
 * @public
 */
export interface Time {
  /**
   * The time of day in 24-hour format (00:00).
   *
   * @public
   */
  timeOfDay: string | undefined;

  /**
   * The timezone.
   *
   * @public
   */
  timezone: string | undefined;
}

/**
 * A daily schedule.
 *
 * @public
 */
export interface DailySchedule {
  /**
   * The schedule start time.
   *
   * @public
   */
  startTime: Time | undefined;
}

/**
 * A monthly schedule.
 *
 * @public
 */
export interface MonthlySchedule {
  /**
   * The monthly schedule's start time.
   *
   * @public
   */
  startTime: Time | undefined;

  /**
   * The monthly schedule's day.
   *
   * @public
   */
  day: Day | undefined;
}

/**
 * A one time schedule.
 *
 * @public
 */
export interface OneTimeSchedule {}

/**
 * A weekly schedule.
 *
 * @public
 */
export interface WeeklySchedule {
  /**
   * The weekly schedule's start time.
   *
   * @public
   */
  startTime: Time | undefined;

  /**
   * The weekly schedule's days.
   *
   * @public
   */
  days: Day[] | undefined;
}

/**
 * A schedule.
 *
 * @public
 */
export type Schedule =
  | Schedule.DailyMember
  | Schedule.MonthlyMember
  | Schedule.OneTimeMember
  | Schedule.WeeklyMember
  | Schedule.$UnknownMember;

/**
 * @public
 */
export namespace Schedule {
  /**
   * The schedule's one time.
   *
   * @public
   */
  export interface OneTimeMember {
    oneTime: OneTimeSchedule;
    daily?: never;
    weekly?: never;
    monthly?: never;
    $unknown?: never;
  }

  /**
   * The schedule's daily.
   *
   * @public
   */
  export interface DailyMember {
    oneTime?: never;
    daily: DailySchedule;
    weekly?: never;
    monthly?: never;
    $unknown?: never;
  }

  /**
   * The schedule's weekly.
   *
   * @public
   */
  export interface WeeklyMember {
    oneTime?: never;
    daily?: never;
    weekly: WeeklySchedule;
    monthly?: never;
    $unknown?: never;
  }

  /**
   * The schedule's monthly.
   *
   * @public
   */
  export interface MonthlyMember {
    oneTime?: never;
    daily?: never;
    weekly?: never;
    monthly: MonthlySchedule;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oneTime?: never;
    daily?: never;
    weekly?: never;
    monthly?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oneTime: (value: OneTimeSchedule) => T;
    daily: (value: DailySchedule) => T;
    weekly: (value: WeeklySchedule) => T;
    monthly: (value: MonthlySchedule) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The CIS scan configuration.
 *
 * @public
 */
export interface CisScanConfiguration {
  /**
   * The CIS scan configuration's scan configuration ARN.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * The CIS scan configuration's owner ID.
   *
   * @public
   */
  ownerId?: string | undefined;

  /**
   * The name of the CIS scan configuration.
   *
   * @public
   */
  scanName?: string | undefined;

  /**
   * The CIS scan configuration's security level.
   *
   * @public
   */
  securityLevel?: CisSecurityLevel | undefined;

  /**
   * The CIS scan configuration's schedule.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The CIS scan configuration's targets.
   *
   * @public
   */
  targets?: CisTargets | undefined;

  /**
   * The CIS scan configuration's tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The CIS scan result details.
 *
 * @public
 */
export interface CisScanResultDetails {
  /**
   * The CIS scan result details' scan ARN.
   *
   * @public
   */
  scanArn: string | undefined;

  /**
   * The CIS scan result details' account ID.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The CIS scan result details' target resource ID.
   *
   * @public
   */
  targetResourceId?: string | undefined;

  /**
   * The CIS scan result details' platform.
   *
   * @public
   */
  platform?: string | undefined;

  /**
   * The CIS scan result details' status.
   *
   * @public
   */
  status?: CisFindingStatus | undefined;

  /**
   * The CIS scan result details' status reason.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The CIS scan result details' check ID.
   *
   * @public
   */
  checkId?: string | undefined;

  /**
   * The CIS scan result details' title.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The account ID that's associated with the CIS scan result details.
   *
   * @public
   */
  checkDescription?: string | undefined;

  /**
   * The CIS scan result details' remediation.
   *
   * @public
   */
  remediation?: string | undefined;

  /**
   * The CIS scan result details' level.
   *
   * @public
   */
  level?: CisSecurityLevel | undefined;

  /**
   * The CIS scan result details' finding ARN.
   *
   * @public
   */
  findingArn?: string | undefined;
}

/**
 * The CIS security level filter. Security level refers to the Benchmark levels that CIS assigns to a profile.
 *
 * @public
 */
export interface CisSecurityLevelFilter {
  /**
   * The CIS security filter comparison value.
   *
   * @public
   */
  comparison: CisSecurityLevelComparison | undefined;

  /**
   * The CIS security filter value.
   *
   * @public
   */
  value: CisSecurityLevel | undefined;
}

/**
 * The CIS scan result details filter criteria.
 *
 * @public
 */
export interface CisScanResultDetailsFilterCriteria {
  /**
   * The criteria's finding status filters.
   *
   * @public
   */
  findingStatusFilters?: CisFindingStatusFilter[] | undefined;

  /**
   * The criteria's check ID filters.
   *
   * @public
   */
  checkIdFilters?: CisStringFilter[] | undefined;

  /**
   * The criteria's title filters.
   *
   * @public
   */
  titleFilters?: CisStringFilter[] | undefined;

  /**
   * The criteria's security level filters. . Security level refers to the Benchmark levels that CIS assigns to a profile.
   *
   * @public
   */
  securityLevelFilters?: CisSecurityLevelFilter[] | undefined;

  /**
   * The criteria's finding ARN filters.
   *
   * @public
   */
  findingArnFilters?: CisStringFilter[] | undefined;
}

/**
 * The scan results aggregated by checks filter criteria.
 *
 * @public
 */
export interface CisScanResultsAggregatedByChecksFilterCriteria {
  /**
   * The criteria's account ID filters.
   *
   * @public
   */
  accountIdFilters?: CisStringFilter[] | undefined;

  /**
   * The criteria's check ID filters.
   *
   * @public
   */
  checkIdFilters?: CisStringFilter[] | undefined;

  /**
   * The criteria's title filters.
   *
   * @public
   */
  titleFilters?: CisStringFilter[] | undefined;

  /**
   * The criteria's platform filters.
   *
   * @public
   */
  platformFilters?: CisStringFilter[] | undefined;

  /**
   * The criteria's failed resources filters.
   *
   * @public
   */
  failedResourcesFilters?: CisNumberFilter[] | undefined;

  /**
   * The criteria's security level filters.
   *
   * @public
   */
  securityLevelFilters?: CisSecurityLevelFilter[] | undefined;
}

/**
 * The tag filter.
 *
 * @public
 */
export interface TagFilter {
  /**
   * The tag filter comparison value.
   *
   * @public
   */
  comparison: TagComparison | undefined;

  /**
   * The tag filter key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag filter value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The CIS target status filter.
 *
 * @public
 */
export interface CisTargetStatusFilter {
  /**
   * The comparison value of the CIS target status filter.
   *
   * @public
   */
  comparison: CisTargetStatusComparison | undefined;

  /**
   * The value of the CIS target status filter.
   *
   * @public
   */
  value: CisTargetStatus | undefined;
}

/**
 * The CIS target status reason filter.
 *
 * @public
 */
export interface CisTargetStatusReasonFilter {
  /**
   * The comparison value of the CIS target status reason filter.
   *
   * @public
   */
  comparison: CisTargetStatusComparison | undefined;

  /**
   * The value of the CIS target status reason filter.
   *
   * @public
   */
  value: CisTargetStatusReason | undefined;
}

/**
 * The scan results aggregated by target resource filter criteria.
 *
 * @public
 */
export interface CisScanResultsAggregatedByTargetResourceFilterCriteria {
  /**
   * The criteria's account ID filters.
   *
   * @public
   */
  accountIdFilters?: CisStringFilter[] | undefined;

  /**
   * The criteria's status filter.
   *
   * @public
   */
  statusFilters?: CisResultStatusFilter[] | undefined;

  /**
   * The criteria's check ID filters.
   *
   * @public
   */
  checkIdFilters?: CisStringFilter[] | undefined;

  /**
   * The criteria's target resource ID filters.
   *
   * @public
   */
  targetResourceIdFilters?: CisStringFilter[] | undefined;

  /**
   * The criteria's target resource tag filters.
   *
   * @public
   */
  targetResourceTagFilters?: TagFilter[] | undefined;

  /**
   * The criteria's platform filters.
   *
   * @public
   */
  platformFilters?: CisStringFilter[] | undefined;

  /**
   * The criteria's target status filters.
   *
   * @public
   */
  targetStatusFilters?: CisTargetStatusFilter[] | undefined;

  /**
   * The criteria's target status reason filters.
   *
   * @public
   */
  targetStatusReasonFilters?: CisTargetStatusReasonFilter[] | undefined;

  /**
   * The criteria's failed checks filters.
   *
   * @public
   */
  failedChecksFilters?: CisNumberFilter[] | undefined;
}

/**
 * The CIS scan status filter.
 *
 * @public
 */
export interface CisScanStatusFilter {
  /**
   * The filter comparison value.
   *
   * @public
   */
  comparison: CisScanStatusComparison | undefined;

  /**
   * The filter value.
   *
   * @public
   */
  value: CisScanStatus | undefined;
}

/**
 * The CIS session message.
 *
 * @public
 */
export interface CisSessionMessage {
  /**
   * The rule ID for the CIS session message.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The status of the CIS session message.
   *
   * @public
   */
  status: CisRuleStatus | undefined;

  /**
   * The CIS rule details for the CIS session message.
   *
   * @public
   */
  cisRuleDetails: Uint8Array | undefined;
}

/**
 * The CIS target resource aggregation.
 *
 * @public
 */
export interface CisTargetResourceAggregation {
  /**
   * The scan ARN for the CIS target resource.
   *
   * @public
   */
  scanArn: string | undefined;

  /**
   * The ID of the target resource.
   *
   * @public
   */
  targetResourceId?: string | undefined;

  /**
   * The account ID for the CIS target resource.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The tag for the target resource.
   *
   * @public
   */
  targetResourceTags?: Record<string, string[]> | undefined;

  /**
   * The target resource status counts.
   *
   * @public
   */
  statusCounts?: StatusCounts | undefined;

  /**
   * The platform for the CIS target resource.
   *
   * @public
   */
  platform?: string | undefined;

  /**
   * The status of the target resource.
   *
   * @public
   */
  targetStatus?: CisTargetStatus | undefined;

  /**
   * The reason for the target resource.
   *
   * @public
   */
  targetStatusReason?: CisTargetStatusReason | undefined;
}

/**
 * The metadata for a cluster.
 *
 * @public
 */
export type ClusterMetadata =
  | ClusterMetadata.AwsEcsMetadataDetailsMember
  | ClusterMetadata.AwsEksMetadataDetailsMember
  | ClusterMetadata.$UnknownMember;

/**
 * @public
 */
export namespace ClusterMetadata {
  /**
   * The details for an Amazon ECS cluster in the cluster metadata.
   *
   * @public
   */
  export interface AwsEcsMetadataDetailsMember {
    awsEcsMetadataDetails: AwsEcsMetadataDetails;
    awsEksMetadataDetails?: never;
    $unknown?: never;
  }

  /**
   * The details for an Amazon EKS cluster in the cluster metadata.
   *
   * @public
   */
  export interface AwsEksMetadataDetailsMember {
    awsEcsMetadataDetails?: never;
    awsEksMetadataDetails: AwsEksMetadataDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    awsEcsMetadataDetails?: never;
    awsEksMetadataDetails?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    awsEcsMetadataDetails: (value: AwsEcsMetadataDetails) => T;
    awsEksMetadataDetails: (value: AwsEksMetadataDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details about the task or pod in the cluster.
 *
 * @public
 */
export interface ClusterDetails {
  /**
   * The last timestamp when Amazon Inspector recorded the image in use in the task or pod in the cluster.
   *
   * @public
   */
  lastInUse: Date | undefined;

  /**
   * The number of tasks or pods where an image was running on the cluster.
   *
   * @public
   */
  runningUnitCount?: number | undefined;

  /**
   * The number of tasks or pods where an image was stopped on the cluster in the last 24 hours.
   *
   * @public
   */
  stoppedUnitCount?: number | undefined;

  /**
   * The metadata for a cluster.
   *
   * @public
   */
  clusterMetadata: ClusterMetadata | undefined;
}

/**
 * The filter criteria to be used.
 *
 * @public
 */
export interface ClusterForImageFilterCriteria {
  /**
   * The resource Id to be used in the filter criteria.
   *
   * @public
   */
  resourceId: string | undefined;
}

/**
 * Information about the cluster.
 *
 * @public
 */
export interface ClusterInformation {
  /**
   * The cluster ARN.
   *
   * @public
   */
  clusterArn: string | undefined;

  /**
   * Details about the cluster.
   *
   * @public
   */
  clusterDetails?: ClusterDetails[] | undefined;
}

/**
 * Contains information on where a code vulnerability is located in your Lambda function.
 *
 * @public
 */
export interface CodeFilePath {
  /**
   * The name of the file the code vulnerability was found in.
   *
   * @public
   */
  fileName: string | undefined;

  /**
   * The file path to the code that a vulnerability was found in.
   *
   * @public
   */
  filePath: string | undefined;

  /**
   * The line number of the first line of code that a vulnerability was found in.
   *
   * @public
   */
  startLine: number | undefined;

  /**
   * The line number of the last line of code that a vulnerability was found in.
   *
   * @public
   */
  endLine: number | undefined;
}

/**
 * Contains details about a code repository associated with a finding.
 *
 * @public
 */
export interface CodeRepositoryDetails {
  /**
   * The name of the project in the code repository.
   *
   * @public
   */
  projectName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the code security integration associated with the repository.
   *
   * @public
   */
  integrationArn?: string | undefined;

  /**
   * The type of repository provider (such as GitHub, GitLab, etc.).
   *
   * @public
   */
  providerType?: CodeRepositoryProviderType | undefined;
}

/**
 * The status of the scan.
 *
 * @public
 */
export interface ScanStatus {
  /**
   * The status code of the scan.
   *
   * @public
   */
  statusCode: ScanStatusCode | undefined;

  /**
   * The scan status. Possible return values and descriptions are:
   *
   * `ACCESS_DENIED` - Resource access policy restricting Amazon Inspector access. Please update the IAM policy.
   *
   * `ACCESS_DENIED_TO_ENCRYPTION_KEY` - The KMS key policy doesn't allow Amazon Inspector access. Update the key policy.
   *
   * `DEEP_INSPECTION_COLLECTION_TIME_LIMIT_EXCEEDED` - Amazon Inspector failed to extract the package inventory because the package collection time exceeding the maximum threshold of 15 minutes.
   *
   * `DEEP_INSPECTION_DAILY_SSM_INVENTORY_LIMIT_EXCEEDED` - The SSM agent couldn't send inventory to Amazon Inspector because the SSM quota for Inventory data collected per instance per day has already been reached for this instance.
   *
   * `DEEP_INSPECTION_NO_INVENTORY` - The Amazon Inspector plugin hasn't yet been able to collect an inventory of packages for this instance. This is usually the result of a pending scan, however, if this status persists after 6 hours, use SSM to ensure that the required Amazon Inspector associations exist and are running for the instance.
   *
   * `DEEP_INSPECTION_PACKAGE_COLLECTION_LIMIT_EXCEEDED` - The instance has exceeded the 5000 package limit for Amazon Inspector Deep inspection. To resume Deep inspection for this instance you can try to adjust the custom paths associated with the account.
   *
   * `EC2_INSTANCE_STOPPED` - This EC2 instance is in a stopped state, therefore, Amazon Inspector will pause scanning. The existing findings will continue to exist until the instance is terminated. Once the instance is re-started, Inspector will automatically start scanning the instance again. Please note that you will not be charged for this instance while it's in a stopped state.
   *
   * `EXCLUDED_BY_TAG` - This resource was not scanned because it has been excluded by a tag.
   *
   * `IMAGE_SIZE_EXCEEDED` - Reserved for future use.
   *
   * `INTEGRATION_CONNNECTION_LOST` - Amazon Inspector couldn't communicate with the source code management platform.
   *
   * `INTERNAL_ERROR` - Amazon Inspector has encountered an internal error for this resource. Amazon Inspector service will automatically resolve the issue and resume the scanning. No action required from the user.
   *
   * `INVALID_ARTIFACT` - Amazon Inspector couldn't scan this resource because its artifact is malformed and couldn't be safely extracted.
   *
   * `NO_INVENTORY` - Amazon Inspector couldn't find software application inventory to scan for vulnerabilities. This might be caused due to required Amazon Inspector associations being deleted or failing to run on your resource. Please verify the status of `InspectorInventoryCollection-do-not-delete` association in the SSM console for the resource. Additionally, you can verify the instance's inventory in the SSM Fleet Manager console.
   *
   * `NO_RESOURCES_FOUND` - Reserved for future use.
   *
   * `NO_SCAN_CONFIGURATION_ASSOCIATED` - The code repository resource doesn't have an associated scan configuration.
   *
   * `PENDING_DISABLE` - This resource is pending cleanup during disablement. The customer will not be billed while a resource is in the pending disable status.
   *
   * `PENDING_INITIAL_SCAN` - This resource has been identified for scanning, results will be available soon.
   *
   * `RESOURCE_TERMINATED` - This resource has been terminated. The findings and coverage associated with this resource are in the process of being cleaned up.
   *
   * `SCAN_ELIGIBILITY_EXPIRED` - The configured scan duration has lapsed for this image.
   *
   * `SCAN_FREQUENCY_MANUAL` - This image will not be covered by Amazon Inspector due to the repository scan frequency configuration.
   *
   * `SCAN_FREQUENCY_SCAN_ON_PUSH` - This image will be scanned one time and will not new findings because of the scan frequency configuration.
   *
   * `SCAN_IN_PROGRESS` - The resource is currently being scanned.
   *
   * `STALE_INVENTORY` - Amazon Inspector wasn't able to collect an updated software application inventory in the last 7 days. Please confirm the required Amazon Inspector associations still exist and you can still see an updated inventory in the SSM console.
   *
   * `SUCCESSFUL` - The scan was successful.
   *
   * `UNMANAGED_EC2_INSTANCE` - The EC2 instance is not managed by SSM, please use the following SSM automation to remediate the issue: [https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-awssupport-troubleshoot-managed-instance.html](https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-awssupport-troubleshoot-managed-instance.html). Once the instance becomes managed by SSM, Inspector will automatically begin scanning this instance.
   *
   * `UNSUPPORTED_CODE_ARTIFACTS` - The function was not scanned because it has an unsupported code artifacts.
   *
   * `UNSUPPORTED_CONFIG_FILE` - Reserved for future use.
   *
   * `UNSUPPORTED_LANGUAGE` - The scan was unsuccessful because the repository contains files in an unsupported programming language.
   *
   * `UNSUPPORTED_MEDIA_TYPE`- The ECR image has an unsupported media type.
   *
   * `UNSUPPORTED_OS` - Amazon Inspector does not support this OS, architecture, or image manifest type at this time. To see a complete list of supported operating systems see: [https://docs.aws.amazon.com/inspector/latest/user/supported.html](https://docs.aws.amazon.com/inspector/latest/user/supported.html).
   *
   * `UNSUPPORTED_RUNTIME` - The function was not scanned because it has an unsupported runtime. To see a complete list of supported runtimes see: [https://docs.aws.amazon.com/inspector/latest/user/supported.html](https://docs.aws.amazon.com/inspector/latest/user/supported.html).
   *
   * `IMAGE_ARCHIVED` - This image has been archived in Amazon ECR and is no longer available for scanning in Amazon Inspector.
   *
   * @public
   */
  reason: ScanStatusReason | undefined;
}

/**
 * Contains information about on-demand scans performed on a code repository.
 *
 * @public
 */
export interface CodeRepositoryOnDemandScan {
  /**
   * The ID of the last commit that was scanned during an on-demand scan.
   *
   * @public
   */
  lastScannedCommitId?: string | undefined;

  /**
   * The timestamp when the last on-demand scan was performed.
   *
   * @public
   */
  lastScanAt?: Date | undefined;

  /**
   * The status of the scan.
   *
   * @public
   */
  scanStatus?: ScanStatus | undefined;
}

/**
 * Contains the continuous integration scan configuration settings applied to a specific project.
 *
 * @public
 */
export interface ProjectContinuousIntegrationScanConfiguration {
  /**
   * The repository event that triggers continuous integration scans for the project.
   *
   * @public
   */
  supportedEvent?: ContinuousIntegrationScanEvent | undefined;

  /**
   * The categories of security rules applied during continuous integration scans for the project.
   *
   * @public
   */
  ruleSetCategories?: RuleSetCategory[] | undefined;
}

/**
 * Contains the periodic scan configuration settings applied to a specific project.
 *
 * @public
 */
export interface ProjectPeriodicScanConfiguration {
  /**
   * The schedule expression for periodic scans, in cron format, applied to the project.
   *
   * @public
   */
  frequencyExpression?: string | undefined;

  /**
   * The categories of security rules applied during periodic scans for the project.
   *
   * @public
   */
  ruleSetCategories?: RuleSetCategory[] | undefined;
}

/**
 * Contains the scan configuration settings applied to a specific project in a code repository.
 *
 * @public
 */
export interface ProjectCodeSecurityScanConfiguration {
  /**
   * The periodic scan configurations applied to the project.
   *
   * @public
   */
  periodicScanConfigurations?: ProjectPeriodicScanConfiguration[] | undefined;

  /**
   * The continuous integration scan configurations applied to the project.
   *
   * @public
   */
  continuousIntegrationScanConfigurations?: ProjectContinuousIntegrationScanConfiguration[] | undefined;
}

/**
 * Contains metadata information about a code repository that is being scanned by Amazon Inspector.
 *
 * @public
 */
export interface CodeRepositoryMetadata {
  /**
   * The name of the project in the code repository.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the code security integration associated with the repository.
   *
   * @public
   */
  integrationArn?: string | undefined;

  /**
   * The type of repository provider (such as GitHub, GitLab, etc.).
   *
   * @public
   */
  providerType: string | undefined;

  /**
   * The visibility setting of the repository (public or private).
   *
   * @public
   */
  providerTypeVisibility: string | undefined;

  /**
   * The ID of the last commit that was scanned in the repository.
   *
   * @public
   */
  lastScannedCommitId?: string | undefined;

  /**
   * The scan configuration settings applied to the code repository.
   *
   * @public
   */
  scanConfiguration?: ProjectCodeSecurityScanConfiguration | undefined;

  /**
   * Information about on-demand scans performed on the repository.
   *
   * @public
   */
  onDemandScan?: CodeRepositoryOnDemandScan | undefined;
}

/**
 * A summary of information about a code security integration.
 *
 * @public
 */
export interface CodeSecurityIntegrationSummary {
  /**
   * The Amazon Resource Name (ARN) of the code security integration.
   *
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The name of the code security integration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of repository provider for the integration.
   *
   * @public
   */
  type: IntegrationType | undefined;

  /**
   * The current status of the code security integration.
   *
   * @public
   */
  status: IntegrationStatus | undefined;

  /**
   * The reason for the current status of the code security integration.
   *
   * @public
   */
  statusReason: string | undefined;

  /**
   * The timestamp when the code security integration was created.
   *
   * @public
   */
  createdOn: Date | undefined;

  /**
   * The timestamp when the code security integration was last updated.
   *
   * @public
   */
  lastUpdateOn: Date | undefined;
}

/**
 * Configuration settings for continuous integration scans that run automatically when code changes are made.
 *
 * @public
 */
export interface ContinuousIntegrationScanConfiguration {
  /**
   * The repository events that trigger continuous integration scans, such as pull requests or commits.
   *
   * @public
   */
  supportedEvents: ContinuousIntegrationScanEvent[] | undefined;
}

/**
 * Configuration settings for periodic scans that run on a scheduled basis.
 *
 * @public
 */
export interface PeriodicScanConfiguration {
  /**
   * The frequency at which periodic scans are performed (such as weekly or monthly).
   *
   * If you don't provide the `frequencyExpression` Amazon Inspector chooses day for the scan to run. If you provide the `frequencyExpression`, the schedule must match the specified `frequency`.
   *
   * @public
   */
  frequency?: PeriodicScanFrequency | undefined;

  /**
   * The schedule expression for periodic scans, in cron format.
   *
   * @public
   */
  frequencyExpression?: string | undefined;
}

/**
 * Contains the configuration settings for code security scans.
 *
 * @public
 */
export interface CodeSecurityScanConfiguration {
  /**
   * Configuration settings for periodic scans that run on a scheduled basis.
   *
   * @public
   */
  periodicScanConfiguration?: PeriodicScanConfiguration | undefined;

  /**
   * Configuration settings for continuous integration scans that run automatically when code changes are made.
   *
   * @public
   */
  continuousIntegrationScanConfiguration?: ContinuousIntegrationScanConfiguration | undefined;

  /**
   * The categories of security rules to be applied during the scan.
   *
   * @public
   */
  ruleSetCategories: RuleSetCategory[] | undefined;
}

/**
 * A summary of an association between a code repository and a scan configuration.
 *
 * @public
 */
export interface CodeSecurityScanConfigurationAssociationSummary {
  /**
   * Identifies a specific resource in a code repository that will be scanned.
   *
   * @public
   */
  resource?: CodeSecurityResource | undefined;
}

/**
 * Defines the scope of repositories to be included in code security scans.
 *
 * @public
 */
export interface ScopeSettings {
  /**
   * The scope of projects to be selected for scanning within the integrated repositories. Setting the value to `ALL` applies the scope settings to all existing and future projects imported into Amazon Inspector.
   *
   * @public
   */
  projectSelectionScope?: ProjectSelectionScope | undefined;
}

/**
 * A summary of information about a code security scan configuration.
 *
 * @public
 */
export interface CodeSecurityScanConfigurationSummary {
  /**
   * The Amazon Resource Name (ARN) of the scan configuration.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * The name of the scan configuration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the scan configuration.
   *
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * The frequency at which periodic scans are performed.
   *
   * @public
   */
  periodicScanFrequency?: PeriodicScanFrequency | undefined;

  /**
   * The schedule expression for periodic scans, in cron format.
   *
   * @public
   */
  frequencyExpression?: string | undefined;

  /**
   * The repository events that trigger continuous integration scans.
   *
   * @public
   */
  continuousIntegrationScanSupportedEvents?: ContinuousIntegrationScanEvent[] | undefined;

  /**
   * The categories of security rules applied during the scan.
   *
   * @public
   */
  ruleSetCategories: RuleSetCategory[] | undefined;

  /**
   * The scope settings that define which repositories will be scanned. If the `ScopeSetting` parameter is `ALL` the scan configuration applies to all existing and future projects imported into Amazon Inspector.
   *
   * @public
   */
  scopeSettings?: ScopeSettings | undefined;
}

/**
 * Contains information on the code vulnerability identified in your Lambda function.
 *
 * @public
 */
export interface CodeVulnerabilityDetails {
  /**
   * Contains information on where the code vulnerability is located in your code.
   *
   * @public
   */
  filePath: CodeFilePath | undefined;

  /**
   * The detector tag associated with the vulnerability. Detector tags group related vulnerabilities by common themes or tactics. For a list of available tags by programming language, see [Java tags](https://docs.aws.amazon.com/codeguru/detector-library/java/tags/), or [Python tags](https://docs.aws.amazon.com/codeguru/detector-library/python/tags/).
   *
   * @public
   */
  detectorTags?: string[] | undefined;

  /**
   * A URL containing supporting documentation about the code vulnerability detected.
   *
   * @public
   */
  referenceUrls?: string[] | undefined;

  /**
   * The identifier for a rule that was used to detect the code vulnerability.
   *
   * @public
   */
  ruleId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Lambda layer that the code vulnerability was detected in.
   *
   * @public
   */
  sourceLambdaLayerArn?: string | undefined;

  /**
   * The ID for the Amazon CodeGuru detector associated with the finding. For more information on detectors see [Amazon CodeGuru Detector Library](https://docs.aws.amazon.com/codeguru/detector-library).
   *
   * @public
   */
  detectorId: string | undefined;

  /**
   * The name of the detector used to identify the code vulnerability. For more information on detectors see [CodeGuru Detector Library](https://docs.aws.amazon.com/codeguru/detector-library).
   *
   * @public
   */
  detectorName: string | undefined;

  /**
   * The Common Weakness Enumeration (CWE) item associated with the detected vulnerability.
   *
   * @public
   */
  cwes: string[] | undefined;
}

/**
 * A compute platform.
 *
 * @public
 */
export interface ComputePlatform {
  /**
   * The compute platform vendor.
   *
   * @public
   */
  vendor?: string | undefined;

  /**
   * The compute platform product.
   *
   * @public
   */
  product?: string | undefined;

  /**
   * The compute platform version.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * The health and connectivity status of a connector, including the last time the status was checked and any diagnostic message. Returned as part of the `Connector` structure.
 *
 * @public
 */
export interface ConnectorHealth {
  /**
   * The health status of the connector.
   *
   * @public
   */
  connectorStatus: ConnectorHealthStatus | undefined;

  /**
   * The date and time when the connector health was last checked.
   *
   * @public
   */
  lastCheckedAt: Date | undefined;

  /**
   * A message providing additional details about the connector health status.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Describes a connector that links an external cloud provider to Amazon Inspector for vulnerability scanning.
 *
 * @public
 */
export interface Connector {
  /**
   * The Amazon Resource Name (ARN) of the connector.
   *
   * @public
   */
  connectorArn: string | undefined;

  /**
   * The name of the connector.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the connector.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The cloud provider for the connector.
   *
   * @public
   */
  provider: ConnectorCloudProvider | undefined;

  /**
   * The enablement status of the connector, which indicates whether the connector is active and scanning resources.
   *
   * @public
   */
  enablementStatus?: EnablementStatus | undefined;

  /**
   * Additional information about the current enablement status of the connector.
   *
   * @public
   */
  enablementStatusReason?: string | undefined;

  /**
   * The health of the connector, which indicates whether Amazon Inspector can reach and scan the connected resources.
   *
   * @public
   */
  health?: ConnectorHealth | undefined;

  /**
   * The date and time when the connector was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the connector was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The Azure regions configured for the connector.
   *
   * @public
   */
  azureRegions?: string[] | undefined;

  /**
   * The ARN of the Amazon Web Services Config connector associated with this connector.
   *
   * @public
   */
  awsConfigConnectorArn?: string | undefined;

  /**
   * The Azure scope configuration for the connector.
   *
   * @public
   */
  scopeConfiguration?: AzureScopeConfiguration | undefined;

  /**
   * The tags associated with the connector.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Specifies whether the VM scanner is automatically installed on connected resources.
   *
   * @public
   */
  autoInstallVMScanner?: boolean | undefined;
}

/**
 * A filter that matches connectors by connector ARN.
 *
 * @public
 */
export interface ConnectorArnFilter {
  /**
   * The comparison operator for the connector ARN filter.
   *
   * @public
   */
  comparison: ConnectorArnComparison | undefined;

  /**
   * The connector ARN value to filter by.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The container image scanning settings for a connector, including how long pushed and pulled images continue to be rescanned for vulnerabilities.
 *
 * @public
 */
export interface ConnectorContainerImageScanConfiguration {
  /**
   * The amount of time after a container image is pushed to a repository during which Amazon Inspector continues to rescan the image for vulnerabilities. Valid values are `LIFETIME`, `DAYS_3`, `DAYS_7`, `DAYS_14`, `DAYS_30`, `DAYS_60`, `DAYS_90`, and `DAYS_180`.
   *
   * @public
   */
  pushDuration?: ContainerImageRescanDuration | undefined;

  /**
   * The amount of time after a container image is last pulled from a repository during which Amazon Inspector continues to rescan the image for vulnerabilities. Valid values are `DAYS_3`, `DAYS_7`, `DAYS_14`, `DAYS_30`, `DAYS_60`, `DAYS_90`, and `DAYS_180`.
   *
   * @public
   */
  pullDuration?: ContainerImagePullDateRescanDuration | undefined;
}

/**
 * A filter that matches connectors by connector type.
 *
 * @public
 */
export interface ConnectorTypeFilter {
  /**
   * The comparison operator for the connector type filter.
   *
   * @public
   */
  comparison: ConnectorTypeComparison | undefined;

  /**
   * The connector type value to filter by.
   *
   * @public
   */
  value: ConnectorType | undefined;
}

/**
 * A filter that matches connectors by cloud provider.
 *
 * @public
 */
export interface ProviderFilter {
  /**
   * The comparison operator for the provider filter.
   *
   * @public
   */
  comparison: ProviderComparison | undefined;

  /**
   * The cloud provider value to filter by.
   *
   * @public
   */
  value: ConnectorCloudProvider | undefined;
}

/**
 * Contains the filter criteria for narrowing the results returned by a `ListConnectors` request. You can filter by connector ARN, Amazon Web Services account ID, Amazon Web Services Config connector ARN, connector type, or cloud provider.
 *
 * @public
 */
export interface ConnectorFilterCriteria {
  /**
   * Filter by connector ARNs.
   *
   * @public
   */
  connectorArns?: ConnectorArnFilter[] | undefined;

  /**
   * Filter by Amazon Web Services account IDs.
   *
   * @public
   */
  accounts?: StringFilter[] | undefined;

  /**
   * Filter by Amazon Web Services Config connector ARNs.
   *
   * @public
   */
  awsConfigConnectorArns?: AwsConfigConnectorArnFilter[] | undefined;

  /**
   * Filter by connector type.
   *
   * @public
   */
  connectorType?: ConnectorTypeFilter[] | undefined;

  /**
   * Filter by cloud provider.
   *
   * @public
   */
  provider?: ProviderFilter[] | undefined;
}

/**
 * The scan settings that Amazon Inspector applies to resources discovered through a connector.
 *
 * @public
 */
export interface ConnectorScanConfiguration {
  /**
   * The container image scanning configuration, including push and pull duration settings.
   *
   * @public
   */
  containerImageScanning?: ConnectorContainerImageScanConfiguration | undefined;
}

/**
 * Represents a scan configuration and the connectors it applies to. Returned in the results of a `ListConnectorScanConfigurations` request.
 *
 * @public
 */
export interface ConnectorScanConfigurationItem {
  /**
   * The ARN of the Amazon Web Services Config connector.
   *
   * @public
   */
  awsConfigConnectorArn: string | undefined;

  /**
   * The list of connector ARNs associated with this Amazon Web Services Config connector.
   *
   * @public
   */
  connectorArns: string[] | undefined;

  /**
   * The scan configuration settings.
   *
   * @public
   */
  scanConfiguration: ConnectorScanConfiguration | undefined;
}

/**
 * Contains metadata about a container image associated with a covered resource.
 *
 * @public
 */
export interface ContainerImageMetadata {
  /**
   * The tags attached to the container image.
   *
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * The date and time the container image was pulled.
   *
   * @public
   */
  imagePulledAt?: Date | undefined;

  /**
   * The last time the container image was in use.
   *
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * The number of times the container image is in use.
   *
   * @public
   */
  inUseCount?: number | undefined;
}

/**
 * Contains metadata about a container registry associated with a covered resource.
 *
 * @public
 */
export interface ContainerRegistryMetadata {
  /**
   * The name of the container registry.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Contains metadata about a container repository associated with a covered resource.
 *
 * @public
 */
export interface ContainerRepositoryMetadata {
  /**
   * The name of the container repository.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The scan frequency for the container repository.
   *
   * @public
   */
  scanFrequency?: string | undefined;
}

/**
 * a structure that contains information on the count of resources within a group.
 *
 * @public
 */
export interface Counts {
  /**
   * The number of resources.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The key associated with this group
   *
   * @public
   */
  groupKey?: GroupKey | undefined;
}

/**
 * Contains details of a coverage date filter.
 *
 * @public
 */
export interface CoverageDateFilter {
  /**
   * A timestamp representing the start of the time period to filter results by.
   *
   * @public
   */
  startInclusive?: Date | undefined;

  /**
   * A timestamp representing the end of the time period to filter results by.
   *
   * @public
   */
  endInclusive?: Date | undefined;
}

/**
 * Contains details of a coverage string filter.
 *
 * @public
 */
export interface CoverageStringFilter {
  /**
   * The operator to compare strings on.
   *
   * @public
   */
  comparison: CoverageStringComparison | undefined;

  /**
   * The value to compare strings on.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * Contains details of a coverage map filter.
 *
 * @public
 */
export interface CoverageMapFilter {
  /**
   * The operator to compare coverage on.
   *
   * @public
   */
  comparison: CoverageMapComparison | undefined;

  /**
   * The tag key associated with the coverage map filter.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The tag value associated with the coverage map filter.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * The coverage number to be used in the filter.
 *
 * @public
 */
export interface CoverageNumberFilter {
  /**
   * The upper inclusive for the coverage number.&gt;
   *
   * @public
   */
  upperInclusive?: number | undefined;

  /**
   * The lower inclusive for the coverage number.
   *
   * @public
   */
  lowerInclusive?: number | undefined;
}

/**
 * A structure that identifies filter criteria for `GetCoverageStatistics`.
 *
 * @public
 */
export interface CoverageFilterCriteria {
  /**
   * The scan status code to filter on. Valid values are: `ValidationException`, `InternalServerException`, `ResourceNotFoundException`, `BadRequestException`, and `ThrottlingException`.
   *
   * @public
   */
  scanStatusCode?: CoverageStringFilter[] | undefined;

  /**
   * The scan status reason to filter on.
   *
   * @public
   */
  scanStatusReason?: CoverageStringFilter[] | undefined;

  /**
   * An array of Amazon Web Services account IDs to return coverage statistics for.
   *
   * @public
   */
  accountId?: CoverageStringFilter[] | undefined;

  /**
   * An array of Amazon Web Services resource IDs to return coverage statistics for.
   *
   * @public
   */
  resourceId?: CoverageStringFilter[] | undefined;

  /**
   * An array of Amazon Web Services resource types to return coverage statistics for. The values can be `AWS_EC2_INSTANCE`, `AWS_LAMBDA_FUNCTION`, `AWS_ECR_CONTAINER_IMAGE`, `AWS_ECR_REPOSITORY` or `AWS_ACCOUNT`.
   *
   * @public
   */
  resourceType?: CoverageStringFilter[] | undefined;

  /**
   * An array of Amazon Inspector scan types to return coverage statistics for.
   *
   * @public
   */
  scanType?: CoverageStringFilter[] | undefined;

  /**
   * The Amazon ECR repository name to filter on.
   *
   * @public
   */
  ecrRepositoryName?: CoverageStringFilter[] | undefined;

  /**
   * The Amazon ECR image tags to filter on.
   *
   * @public
   */
  ecrImageTags?: CoverageStringFilter[] | undefined;

  /**
   * The Amazon EC2 instance tags to filter on.
   *
   * @public
   */
  ec2InstanceTags?: CoverageMapFilter[] | undefined;

  /**
   * Returns coverage statistics for Amazon Web Services Lambda functions filtered by function names.
   *
   * @public
   */
  lambdaFunctionName?: CoverageStringFilter[] | undefined;

  /**
   * Returns coverage statistics for Amazon Web Services Lambda functions filtered by tag.
   *
   * @public
   */
  lambdaFunctionTags?: CoverageMapFilter[] | undefined;

  /**
   * Returns coverage statistics for Amazon Web Services Lambda functions filtered by runtime.
   *
   * @public
   */
  lambdaFunctionRuntime?: CoverageStringFilter[] | undefined;

  /**
   * The machine image tags to filter coverage results by.
   *
   * @public
   */
  machineImageTags?: CoverageMapFilter[] | undefined;

  /**
   * Filters Amazon Web Services resources based on whether Amazon Inspector has checked them for vulnerabilities within the specified time range.
   *
   * @public
   */
  lastScannedAt?: CoverageDateFilter[] | undefined;

  /**
   * The filter to search for Amazon EC2 instance coverage by scan mode. Valid values are `EC2_SSM_AGENT_BASED`, `EC2_AGENTLESS`, and `EC2_INSPECTOR_AGENT_BASED`.
   *
   * @public
   */
  scanMode?: CoverageStringFilter[] | undefined;

  /**
   * The date an image was last pulled at.
   *
   * @public
   */
  imagePulledAt?: CoverageDateFilter[] | undefined;

  /**
   * The Amazon ECR image that was last in use.
   *
   * @public
   */
  ecrImageLastInUseAt?: CoverageDateFilter[] | undefined;

  /**
   * The number of Amazon ECR images in use.
   *
   * @public
   */
  ecrImageInUseCount?: CoverageNumberFilter[] | undefined;

  /**
   * Filter criteria for code repositories based on project name.
   *
   * @public
   */
  codeRepositoryProjectName?: CoverageStringFilter[] | undefined;

  /**
   * Filter criteria for code repositories based on provider type (such as GitHub, GitLab, etc.).
   *
   * @public
   */
  codeRepositoryProviderType?: CoverageStringFilter[] | undefined;

  /**
   * Filter criteria for code repositories based on visibility setting (public or private).
   *
   * @public
   */
  codeRepositoryProviderTypeVisibility?: CoverageStringFilter[] | undefined;

  /**
   * Filter criteria for code repositories based on the ID of the last scanned commit.
   *
   * @public
   */
  lastScannedCommitId?: CoverageStringFilter[] | undefined;

  /**
   * The cloud provider to filter coverage results by.
   *
   * @public
   */
  cloudProvider?: CoverageStringFilter[] | undefined;

  /**
   * The cloud provider account ID to filter coverage results by.
   *
   * @public
   */
  cloudProviderAccountId?: CoverageStringFilter[] | undefined;

  /**
   * The cloud provider region to filter coverage results by.
   *
   * @public
   */
  cloudProviderRegion?: CoverageStringFilter[] | undefined;

  /**
   * The cloud VM instance tags to filter coverage results by.
   *
   * @public
   */
  cloudVmInstanceTags?: CoverageMapFilter[] | undefined;

  /**
   * The cloud container image tags to filter coverage results by.
   *
   * @public
   */
  cloudContainerImageTags?: CoverageStringFilter[] | undefined;

  /**
   * The cloud container repository name to filter coverage results by.
   *
   * @public
   */
  cloudContainerRepositoryName?: CoverageStringFilter[] | undefined;

  /**
   * The cloud container registry name to filter coverage results by.
   *
   * @public
   */
  cloudContainerRegistryName?: CoverageStringFilter[] | undefined;

  /**
   * The cloud serverless function name to filter coverage results by.
   *
   * @public
   */
  cloudServerlessFunctionName?: CoverageStringFilter[] | undefined;

  /**
   * The cloud serverless function runtime to filter coverage results by.
   *
   * @public
   */
  cloudServerlessFunctionRuntime?: CoverageStringFilter[] | undefined;

  /**
   * The cloud serverless function tags to filter coverage results by.
   *
   * @public
   */
  cloudServerlessFunctionTags?: CoverageMapFilter[] | undefined;

  /**
   * The cloud provider organization ID to filter coverage results by.
   *
   * @public
   */
  cloudProviderOrgId?: CoverageStringFilter[] | undefined;
}

/**
 * Meta data details of an Amazon EC2 instance.
 *
 * @public
 */
export interface Ec2Metadata {
  /**
   * The tags attached to the instance.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) used to launch the instance.
   *
   * @public
   */
  amiId?: string | undefined;

  /**
   * The platform of the instance.
   *
   * @public
   */
  platform?: Ec2Platform | undefined;
}

/**
 * Information on the Amazon ECR image metadata associated with a finding.
 *
 * @public
 */
export interface EcrContainerImageMetadata {
  /**
   * Tags associated with the Amazon ECR image metadata.
   *
   * @public
   */
  tags?: string[] | undefined;

  /**
   * The date an image was last pulled at.
   *
   * @public
   */
  imagePulledAt?: Date | undefined;

  /**
   * The last time an Amazon ECR image was used in an Amazon ECS task or Amazon EKS pod.
   *
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * The number of Amazon ECS tasks or Amazon EKS pods where the Amazon ECR container image is in use.
   *
   * @public
   */
  inUseCount?: number | undefined;
}

/**
 * Information on the Amazon ECR repository metadata associated with a finding.
 *
 * @public
 */
export interface EcrRepositoryMetadata {
  /**
   * The name of the Amazon ECR repository.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The frequency of scans.
   *
   * @public
   */
  scanFrequency?: EcrScanFrequency | undefined;
}

/**
 * The Amazon Web Services Lambda function metadata.
 *
 * @public
 */
export interface LambdaFunctionMetadata {
  /**
   * The resource tags on an Amazon Web Services Lambda function.
   *
   * @public
   */
  functionTags?: Record<string, string> | undefined;

  /**
   * The layers for an Amazon Web Services Lambda function. A Lambda function can have up to five layers.
   *
   * @public
   */
  layers?: string[] | undefined;

  /**
   * The name of a function.
   *
   * @public
   */
  functionName?: string | undefined;

  /**
   * An Amazon Web Services Lambda function's runtime.
   *
   * @public
   */
  runtime?: Runtime | undefined;
}

/**
 * Contains metadata about a machine image associated with a covered resource.
 *
 * @public
 */
export interface MachineImageMetadata {
  /**
   * The tags associated with the machine image.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The platform of the machine image.
   *
   * @public
   */
  platform?: MachineImagePlatform | undefined;
}

/**
 * Contains metadata about a serverless function associated with a covered resource.
 *
 * @public
 */
export interface ServerlessFunctionMetadata {
  /**
   * The name of the serverless function.
   *
   * @public
   */
  serverlessFunctionName?: string | undefined;

  /**
   * The runtime of the serverless function.
   *
   * @public
   */
  runtime?: string | undefined;

  /**
   * The tags associated with the serverless function.
   *
   * @public
   */
  functionTags?: Record<string, string> | undefined;
}

/**
 * Contains metadata about a virtual machine (VM) instance associated with a covered resource.
 *
 * @public
 */
export interface VmInstanceMetadata {
  /**
   * The tags associated with the VM instance.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The platform of the VM instance.
   *
   * @public
   */
  platform?: VmPlatform | undefined;

  /**
   * The inventory hash of the VM instance.
   *
   * @public
   */
  inventoryHash?: string | undefined;

  /**
   * The image reference of the VM instance.
   *
   * @public
   */
  vmImageReference?: string | undefined;
}

/**
 * An object that contains details about the metadata for an Amazon ECR resource.
 *
 * @public
 */
export interface ResourceScanMetadata {
  /**
   * An object that contains details about the repository an Amazon ECR image resides in.
   *
   * @public
   */
  ecrRepository?: EcrRepositoryMetadata | undefined;

  /**
   * An object that contains details about the container metadata for an Amazon ECR image.
   *
   * @public
   */
  ecrImage?: EcrContainerImageMetadata | undefined;

  /**
   * An object that contains metadata details for an Amazon EC2 instance.
   *
   * @public
   */
  ec2?: Ec2Metadata | undefined;

  /**
   * An object that contains metadata details for an Amazon Web Services Lambda function.
   *
   * @public
   */
  lambdaFunction?: LambdaFunctionMetadata | undefined;

  /**
   * Contains metadata about scan coverage for a code repository resource.
   *
   * @public
   */
  codeRepository?: CodeRepositoryMetadata | undefined;

  /**
   * The VM instance metadata associated with a covered resource.
   *
   * @public
   */
  vmInstance?: VmInstanceMetadata | undefined;

  /**
   * The container image metadata associated with a covered resource.
   *
   * @public
   */
  containerImage?: ContainerImageMetadata | undefined;

  /**
   * The container repository metadata associated with a covered resource.
   *
   * @public
   */
  containerRepository?: ContainerRepositoryMetadata | undefined;

  /**
   * The container registry metadata associated with a covered resource.
   *
   * @public
   */
  containerRegistry?: ContainerRegistryMetadata | undefined;

  /**
   * The serverless function metadata associated with a covered resource.
   *
   * @public
   */
  serverlessFunction?: ServerlessFunctionMetadata | undefined;

  /**
   * The machine image metadata associated with a covered resource.
   *
   * @public
   */
  machineImage?: MachineImageMetadata | undefined;
}

/**
 * An object that contains details about a resource covered by Amazon Inspector.
 *
 * @public
 */
export interface CoveredResource {
  /**
   * The type of the covered resource.
   *
   * @public
   */
  resourceType: CoverageResourceType | undefined;

  /**
   * The ID of the covered resource.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The Amazon Web Services account ID of the covered resource.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The Amazon Inspector scan type covering the resource.
   *
   * @public
   */
  scanType: ScanType | undefined;

  /**
   * The status of the scan covering the resource.
   *
   * @public
   */
  scanStatus?: ScanStatus | undefined;

  /**
   * An object that contains details about the metadata.
   *
   * @public
   */
  resourceMetadata?: ResourceScanMetadata | undefined;

  /**
   * The date and time the resource was last checked for vulnerabilities.
   *
   * @public
   */
  lastScannedAt?: Date | undefined;

  /**
   * The scan method that is applied to the instance.
   *
   * @public
   */
  scanMode?: ScanMode | undefined;

  /**
   * The cloud provider of the covered resource.
   *
   * @public
   */
  provider?: Provider | undefined;

  /**
   * The cloud provider account ID of the covered resource.
   *
   * @public
   */
  providerAccountId?: string | undefined;

  /**
   * The cloud provider organization ID of the covered resource.
   *
   * @public
   */
  providerOrgId?: string | undefined;

  /**
   * The cloud provider region of the covered resource.
   *
   * @public
   */
  providerRegion?: string | undefined;

  /**
   * The cloud provider partition of the covered resource.
   *
   * @public
   */
  providerPartition?: string | undefined;
}

/**
 * Creates CIS targets.
 *
 * @public
 */
export interface CreateCisTargets {
  /**
   * The CIS target account ids.
   *
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * The CIS target resource tags.
   *
   * @public
   */
  targetResourceTags: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface CreateCisScanConfigurationRequest {
  /**
   * The scan name for the CIS scan configuration.
   *
   * @public
   */
  scanName: string | undefined;

  /**
   * The security level for the CIS scan configuration. Security level refers to the Benchmark levels that CIS assigns to a profile.
   *
   * @public
   */
  securityLevel: CisSecurityLevel | undefined;

  /**
   * The schedule for the CIS scan configuration.
   *
   * @public
   */
  schedule: Schedule | undefined;

  /**
   * The targets for the CIS scan configuration.
   *
   * @public
   */
  targets: CreateCisTargets | undefined;

  /**
   * The tags for the CIS scan configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCisScanConfigurationResponse {
  /**
   * The scan configuration ARN for the CIS scan configuration.
   *
   * @public
   */
  scanConfigurationArn?: string | undefined;
}

/**
 * Contains details required to create an integration with a self-managed GitLab instance.
 *
 * @public
 */
export interface CreateGitLabSelfManagedIntegrationDetail {
  /**
   * The URL of the self-managed GitLab instance.
   *
   * @public
   */
  instanceUrl: string | undefined;

  /**
   * The personal access token used to authenticate with the self-managed GitLab instance.
   *
   * @public
   */
  accessToken: string | undefined;
}

/**
 * Contains details required to create a code security integration with a specific repository provider.
 *
 * @public
 */
export type CreateIntegrationDetail =
  | CreateIntegrationDetail.GitlabSelfManagedMember
  | CreateIntegrationDetail.$UnknownMember;

/**
 * @public
 */
export namespace CreateIntegrationDetail {
  /**
   * Details specific to creating an integration with a self-managed GitLab instance.
   *
   * @public
   */
  export interface GitlabSelfManagedMember {
    gitlabSelfManaged: CreateGitLabSelfManagedIntegrationDetail;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    gitlabSelfManaged?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    gitlabSelfManaged: (value: CreateGitLabSelfManagedIntegrationDetail) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateCodeSecurityIntegrationRequest {
  /**
   * The name of the code security integration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of repository provider for the integration.
   *
   * @public
   */
  type: IntegrationType | undefined;

  /**
   * The integration details specific to the repository provider type.
   *
   * @public
   */
  details?: CreateIntegrationDetail | undefined;

  /**
   * The tags to apply to the code security integration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCodeSecurityIntegrationResponse {
  /**
   * The Amazon Resource Name (ARN) of the created code security integration.
   *
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The current status of the code security integration.
   *
   * @public
   */
  status: IntegrationStatus | undefined;

  /**
   * The URL used to authorize the integration with the repository provider.
   *
   * @public
   */
  authorizationUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreateCodeSecurityScanConfigurationRequest {
  /**
   * The name of the scan configuration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The security level for the scan configuration.
   *
   * @public
   */
  level: ConfigurationLevel | undefined;

  /**
   * The configuration settings for the code security scan.
   *
   * @public
   */
  configuration: CodeSecurityScanConfiguration | undefined;

  /**
   * The scope settings that define which repositories will be scanned. Include this parameter to create a default scan configuration. Otherwise Amazon Inspector creates a general scan configuration.
   *
   * A default scan configuration automatically applies to all existing and future projects imported into Amazon Inspector. Use the `BatchAssociateCodeSecurityScanConfiguration` operation to associate a general scan configuration with projects.
   *
   * @public
   */
  scopeSettings?: ScopeSettings | undefined;

  /**
   * The tags to apply to the scan configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCodeSecurityScanConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the created scan configuration.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * The provider-specific configuration details for creating a connector.
 *
 * @public
 */
export type ProviderDetailCreate =
  | ProviderDetailCreate.AzureMember
  | ProviderDetailCreate.$UnknownMember;

/**
 * @public
 */
export namespace ProviderDetailCreate {
  /**
   * The Azure-specific details for creating a connector.
   *
   * @public
   */
  export interface AzureMember {
    azure: AzureProviderDetailCreate;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    azure?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    azure: (value: AzureProviderDetailCreate) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateConnectorRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the connector.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The cloud provider for the connector.
   *
   * @public
   */
  provider: ConnectorCloudProvider | undefined;

  /**
   * A description of the connector.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The provider-specific configuration details for the connector.
   *
   * @public
   */
  providerDetail: ProviderDetailCreate | undefined;

  /**
   * The tags to apply to the connector.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * The Amazon Resource Name (ARN) of the created connector.
   *
   * @public
   */
  connectorArn: string | undefined;
}

/**
 * An object that describes the details of a port range filter.
 *
 * @public
 */
export interface PortRangeFilter {
  /**
   * The port number the port range begins at.
   *
   * @public
   */
  beginInclusive?: number | undefined;

  /**
   * The port number the port range ends at.
   *
   * @public
   */
  endInclusive?: number | undefined;
}

/**
 * Contains information on the details of a package filter.
 *
 * @public
 */
export interface PackageFilter {
  /**
   * An object that contains details on the name of the package to filter on.
   *
   * @public
   */
  name?: StringFilter | undefined;

  /**
   * The package version to filter on.
   *
   * @public
   */
  version?: StringFilter | undefined;

  /**
   * An object that contains details on the package epoch to filter on.
   *
   * @public
   */
  epoch?: NumberFilter | undefined;

  /**
   * An object that contains details on the package release to filter on.
   *
   * @public
   */
  release?: StringFilter | undefined;

  /**
   * An object that contains details on the package architecture type to filter on.
   *
   * @public
   */
  architecture?: StringFilter | undefined;

  /**
   * An object that contains details on the source layer hash to filter on.
   *
   * @public
   */
  sourceLayerHash?: StringFilter | undefined;

  /**
   * An object that describes the details of a string filter.
   *
   * @public
   */
  sourceLambdaLayerArn?: StringFilter | undefined;

  /**
   * An object that contains details on the package file path to filter on.
   *
   * @public
   */
  filePath?: StringFilter | undefined;
}

/**
 * Details on the criteria used to define the filter.
 *
 * @public
 */
export interface FilterCriteria {
  /**
   * Details on the finding ARNs used to filter findings.
   *
   * @public
   */
  findingArn?: StringFilter[] | undefined;

  /**
   * Details of the Amazon Web Services account IDs used to filter findings.
   *
   * @public
   */
  awsAccountId?: StringFilter[] | undefined;

  /**
   * Details on the finding types used to filter findings.
   *
   * @public
   */
  findingType?: StringFilter[] | undefined;

  /**
   * Details on the severity used to filter findings.
   *
   * @public
   */
  severity?: StringFilter[] | undefined;

  /**
   * Details on the date and time a finding was first seen used to filter findings.
   *
   * @public
   */
  firstObservedAt?: DateFilter[] | undefined;

  /**
   * Details on the date and time a finding was last seen used to filter findings.
   *
   * @public
   */
  lastObservedAt?: DateFilter[] | undefined;

  /**
   * Details on the date and time a finding was last updated at used to filter findings.
   *
   * @public
   */
  updatedAt?: DateFilter[] | undefined;

  /**
   * Details on the finding status types used to filter findings.
   *
   * @public
   */
  findingStatus?: StringFilter[] | undefined;

  /**
   * Details on the finding title used to filter findings.
   *
   * @public
   */
  title?: StringFilter[] | undefined;

  /**
   * The Amazon Inspector score to filter on.
   *
   * @public
   */
  inspectorScore?: NumberFilter[] | undefined;

  /**
   * Details on the resource types used to filter findings.
   *
   * @public
   */
  resourceType?: StringFilter[] | undefined;

  /**
   * Details on the resource IDs used to filter findings.
   *
   * @public
   */
  resourceId?: StringFilter[] | undefined;

  /**
   * Details on the resource tags used to filter findings.
   *
   * @public
   */
  resourceTags?: MapFilter[] | undefined;

  /**
   * Details of the Amazon EC2 instance image IDs used to filter findings.
   *
   * @public
   */
  ec2InstanceImageId?: StringFilter[] | undefined;

  /**
   * Details of the Amazon EC2 instance VPC IDs used to filter findings.
   *
   * @public
   */
  ec2InstanceVpcId?: StringFilter[] | undefined;

  /**
   * Details of the Amazon EC2 instance subnet IDs used to filter findings.
   *
   * @public
   */
  ec2InstanceSubnetId?: StringFilter[] | undefined;

  /**
   * Details on the Amazon ECR image push date and time used to filter findings.
   *
   * @public
   */
  ecrImagePushedAt?: DateFilter[] | undefined;

  /**
   * Details of the Amazon ECR image architecture types used to filter findings.
   *
   * @public
   */
  ecrImageArchitecture?: StringFilter[] | undefined;

  /**
   * Details on the Amazon ECR registry used to filter findings.
   *
   * @public
   */
  ecrImageRegistry?: StringFilter[] | undefined;

  /**
   * Details on the name of the Amazon ECR repository used to filter findings.
   *
   * @public
   */
  ecrImageRepositoryName?: StringFilter[] | undefined;

  /**
   * The tags attached to the Amazon ECR container image.
   *
   * @public
   */
  ecrImageTags?: StringFilter[] | undefined;

  /**
   * Details of the Amazon ECR image hashes used to filter findings.
   *
   * @public
   */
  ecrImageHash?: StringFilter[] | undefined;

  /**
   * Filter criteria indicating when an Amazon ECR image was last used in an Amazon ECS cluster task or Amazon EKS cluster pod.
   *
   * @public
   */
  ecrImageLastInUseAt?: DateFilter[] | undefined;

  /**
   * Filter criteria indicating when details for an Amazon ECR image include when an Amazon ECR image is in use.
   *
   * @public
   */
  ecrImageInUseCount?: NumberFilter[] | undefined;

  /**
   * Details on the port ranges used to filter findings.
   *
   * @public
   */
  portRange?: PortRangeFilter[] | undefined;

  /**
   * Details on network protocol used to filter findings.
   *
   * @public
   */
  networkProtocol?: StringFilter[] | undefined;

  /**
   * Details of the component IDs used to filter findings.
   *
   * @public
   */
  componentId?: StringFilter[] | undefined;

  /**
   * Details of the component types used to filter findings.
   *
   * @public
   */
  componentType?: StringFilter[] | undefined;

  /**
   * Details on the vulnerability ID used to filter findings.
   *
   * @public
   */
  vulnerabilityId?: StringFilter[] | undefined;

  /**
   * Details on the vulnerability type used to filter findings.
   *
   * @public
   */
  vulnerabilitySource?: StringFilter[] | undefined;

  /**
   * Details on the vendor severity used to filter findings.
   *
   * @public
   */
  vendorSeverity?: StringFilter[] | undefined;

  /**
   * Details on the vulnerable packages used to filter findings.
   *
   * @public
   */
  vulnerablePackages?: PackageFilter[] | undefined;

  /**
   * Details on the related vulnerabilities used to filter findings.
   *
   * @public
   */
  relatedVulnerabilities?: StringFilter[] | undefined;

  /**
   * Details on whether a fix is available through a version update. This value can be `YES`, `NO`, or `PARTIAL`. A `PARTIAL` fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions.
   *
   * @public
   */
  fixAvailable?: StringFilter[] | undefined;

  /**
   * Filters the list of Amazon Web Services Lambda functions by the name of the function.
   *
   * @public
   */
  lambdaFunctionName?: StringFilter[] | undefined;

  /**
   * Filters the list of Amazon Web Services Lambda functions by the function's [layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html). A Lambda function can have up to five layers.
   *
   * @public
   */
  lambdaFunctionLayers?: StringFilter[] | undefined;

  /**
   * Filters the list of Amazon Web Services Lambda functions by the runtime environment for the Lambda function.
   *
   * @public
   */
  lambdaFunctionRuntime?: StringFilter[] | undefined;

  /**
   * Filters the list of Amazon Web Services Lambda functions by the date and time that a user last updated the configuration, in [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html)
   *
   * @public
   */
  lambdaFunctionLastModifiedAt?: DateFilter[] | undefined;

  /**
   * Filters the list of Amazon Web Services Lambda functions by execution role.
   *
   * @public
   */
  lambdaFunctionExecutionRoleArn?: StringFilter[] | undefined;

  /**
   * Filters the list of Amazon Web Services Lambda findings by the availability of exploits.
   *
   * @public
   */
  exploitAvailable?: StringFilter[] | undefined;

  /**
   * The name of the detector used to identify a code vulnerability in a Lambda function used to filter findings.
   *
   * @public
   */
  codeVulnerabilityDetectorName?: StringFilter[] | undefined;

  /**
   * The detector type tag associated with the vulnerability used to filter findings. Detector tags group related vulnerabilities by common themes or tactics. For a list of available tags by programming language, see [Java tags](https://docs.aws.amazon.com/codeguru/detector-library/java/tags/), or [Python tags](https://docs.aws.amazon.com/codeguru/detector-library/python/tags/).
   *
   * @public
   */
  codeVulnerabilityDetectorTags?: StringFilter[] | undefined;

  /**
   * The file path to the file in a Lambda function that contains a code vulnerability used to filter findings.
   *
   * @public
   */
  codeVulnerabilityFilePath?: StringFilter[] | undefined;

  /**
   * The EPSS score used to filter findings.
   *
   * @public
   */
  epssScore?: NumberFilter[] | undefined;

  /**
   * Filter criteria for findings based on the project name in a code repository.
   *
   * @public
   */
  codeRepositoryProjectName?: StringFilter[] | undefined;

  /**
   * Filter criteria for findings based on the repository provider type (such as GitHub, GitLab, etc.).
   *
   * @public
   */
  codeRepositoryProviderType?: StringFilter[] | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) used to filter findings.
   *
   * @public
   */
  machineImageId?: StringFilter[] | undefined;

  /**
   * The name of the Amazon Machine Image (AMI) used to filter findings.
   *
   * @public
   */
  machineImageName?: StringFilter[] | undefined;

  /**
   * The ID of the Amazon Web Services account that owns the Amazon Machine Image (AMI) used to filter findings.
   *
   * @public
   */
  machineImageOwnerAccountId?: StringFilter[] | undefined;

  /**
   * The platform of the Amazon Machine Image (AMI) used to filter findings.
   *
   * @public
   */
  machineImagePlatform?: StringFilter[] | undefined;

  /**
   * Filter criteria for the cloud provider.
   *
   * @public
   */
  cloudProvider?: StringFilter[] | undefined;

  /**
   * Filter criteria for the cloud provider region.
   *
   * @public
   */
  cloudProviderRegion?: StringFilter[] | undefined;

  /**
   * Filter criteria for the cloud provider account ID.
   *
   * @public
   */
  cloudProviderAccountId?: StringFilter[] | undefined;

  /**
   * Filter criteria for the cloud provider organization ID.
   *
   * @public
   */
  cloudProviderOrgId?: StringFilter[] | undefined;

  /**
   * Filter criteria for the image reference of a VM instance.
   *
   * @public
   */
  cloudVmImageReference?: StringFilter[] | undefined;

  /**
   * Filter criteria for the network ID of a VM instance.
   *
   * @public
   */
  cloudVmNetworkId?: StringFilter[] | undefined;

  /**
   * Filter criteria for the subnet IDs of a VM instance.
   *
   * @public
   */
  cloudVmSubnetIds?: StringFilter[] | undefined;

  /**
   * Filter criteria for the repository name of a container image.
   *
   * @public
   */
  cloudImageRepositoryName?: StringFilter[] | undefined;

  /**
   * Filter criteria for the registry of a container image.
   *
   * @public
   */
  cloudImageRegistry?: StringFilter[] | undefined;

  /**
   * Filter criteria for the digest of a container image.
   *
   * @public
   */
  cloudImageDigest?: StringFilter[] | undefined;

  /**
   * Filter criteria for the tags of a container image.
   *
   * @public
   */
  cloudImageTags?: StringFilter[] | undefined;

  /**
   * Filter criteria for when a container image was pushed.
   *
   * @public
   */
  cloudImagePushedAt?: DateFilter[] | undefined;

  /**
   * Filter criteria for the architecture of a container image.
   *
   * @public
   */
  cloudImageArchitecture?: StringFilter[] | undefined;

  /**
   * Filter criteria for the last time a container image was in use.
   *
   * @public
   */
  cloudImageLastInUseAt?: DateFilter[] | undefined;

  /**
   * Filter criteria for the in-use count of a container image.
   *
   * @public
   */
  cloudImageInUseCount?: NumberFilter[] | undefined;

  /**
   * Filter criteria for the name of a serverless function.
   *
   * @public
   */
  cloudServerlessFunctionName?: StringFilter[] | undefined;

  /**
   * Filter criteria for the runtime of a serverless function.
   *
   * @public
   */
  cloudServerlessFunctionRuntime?: StringFilter[] | undefined;

  /**
   * Filter criteria for when a serverless function was last modified.
   *
   * @public
   */
  cloudServerlessFunctionLastModifiedAt?: DateFilter[] | undefined;

  /**
   * Filter criteria for the execution role of a serverless function.
   *
   * @public
   */
  cloudServerlessFunctionExecutionRole?: StringFilter[] | undefined;
}

/**
 * @public
 */
export interface CreateFilterRequest {
  /**
   * Defines the action that is to be applied to the findings that match the filter.
   *
   * @public
   */
  action: FilterAction | undefined;

  /**
   * A description of the filter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Defines the criteria to be used in the filter for querying findings.
   *
   * @public
   */
  filterCriteria: FilterCriteria | undefined;

  /**
   * The name of the filter. Minimum length of 3. Maximum length of 64. Valid characters include alphanumeric characters, dot (.), underscore (_), and dash (-). Spaces are not allowed.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A list of tags for the filter.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The reason for creating the filter.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface CreateFilterResponse {
  /**
   * The Amazon Resource Number (ARN) of the successfully created filter.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Contains details of the Amazon S3 bucket and KMS key used to export findings.
 *
 * @public
 */
export interface Destination {
  /**
   * The name of the Amazon S3 bucket to export findings to.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * The prefix that the findings will be written under.
   *
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * The ARN of the KMS key used to encrypt data when exporting findings.
   *
   * @public
   */
  kmsKeyArn: string | undefined;

  /**
   * The Amazon Web Services account ID of the expected owner of the Amazon S3 bucket. If the actual bucket owner does not match, the export request fails.
   *
   * @public
   */
  expectedBucketOwner?: string | undefined;
}

/**
 * @public
 */
export interface CreateFindingsReportRequest {
  /**
   * The filter criteria to apply to the results of the finding report.
   *
   * @public
   */
  filterCriteria?: FilterCriteria | undefined;

  /**
   * The format to generate the report in.
   *
   * @public
   */
  reportFormat: ReportFormat | undefined;

  /**
   * The Amazon S3 export destination for the report.
   *
   * @public
   */
  s3Destination: Destination | undefined;
}

/**
 * @public
 */
export interface CreateFindingsReportResponse {
  /**
   * The ID of the report.
   *
   * @public
   */
  reportId?: string | undefined;
}

/**
 * A resource string filter for a software bill of materials report.
 *
 * @public
 */
export interface ResourceStringFilter {
  /**
   * The filter's comparison.
   *
   * @public
   */
  comparison: ResourceStringComparison | undefined;

  /**
   * The filter's value.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * A resource map filter for a software bill of material report.
 *
 * @public
 */
export interface ResourceMapFilter {
  /**
   * The filter's comparison.
   *
   * @public
   */
  comparison: ResourceMapComparison | undefined;

  /**
   * The filter's key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The filter's value.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * The resource filter criteria for a Software bill of materials (SBOM) report.
 *
 * @public
 */
export interface ResourceFilterCriteria {
  /**
   * The account IDs used as resource filter criteria.
   *
   * @public
   */
  accountId?: ResourceStringFilter[] | undefined;

  /**
   * The resource IDs used as resource filter criteria.
   *
   * @public
   */
  resourceId?: ResourceStringFilter[] | undefined;

  /**
   * The resource types used as resource filter criteria.
   *
   * @public
   */
  resourceType?: ResourceStringFilter[] | undefined;

  /**
   * The ECR repository names used as resource filter criteria.
   *
   * @public
   */
  ecrRepositoryName?: ResourceStringFilter[] | undefined;

  /**
   * The Amazon Web Services Lambda function name used as resource filter criteria.
   *
   * @public
   */
  lambdaFunctionName?: ResourceStringFilter[] | undefined;

  /**
   * The ECR image tags used as resource filter criteria.
   *
   * @public
   */
  ecrImageTags?: ResourceStringFilter[] | undefined;

  /**
   * The EC2 instance tags used as resource filter criteria.
   *
   * @public
   */
  ec2InstanceTags?: ResourceMapFilter[] | undefined;

  /**
   * The Amazon Web Services Lambda function tags used as resource filter criteria.
   *
   * @public
   */
  lambdaFunctionTags?: ResourceMapFilter[] | undefined;

  /**
   * The cloud providers used as resource filter criteria.
   *
   * @public
   */
  cloudProvider?: ResourceStringFilter[] | undefined;

  /**
   * The cloud provider account IDs used as resource filter criteria.
   *
   * @public
   */
  cloudProviderAccountId?: ResourceStringFilter[] | undefined;

  /**
   * The cloud provider organization IDs used as resource filter criteria.
   *
   * @public
   */
  cloudProviderOrgId?: ResourceStringFilter[] | undefined;

  /**
   * The cloud provider regions used as resource filter criteria.
   *
   * @public
   */
  cloudProviderRegion?: ResourceStringFilter[] | undefined;

  /**
   * The cloud VM instance tags used as resource filter criteria.
   *
   * @public
   */
  cloudVmInstanceTags?: ResourceMapFilter[] | undefined;

  /**
   * The cloud container image tags used as resource filter criteria.
   *
   * @public
   */
  cloudContainerImageTags?: ResourceStringFilter[] | undefined;

  /**
   * The cloud container repository names used as resource filter criteria.
   *
   * @public
   */
  cloudContainerRepositoryName?: ResourceStringFilter[] | undefined;

  /**
   * The cloud container registry names used as resource filter criteria.
   *
   * @public
   */
  cloudContainerRegistryName?: ResourceStringFilter[] | undefined;

  /**
   * The cloud serverless function names used as resource filter criteria.
   *
   * @public
   */
  cloudServerlessFunctionName?: ResourceStringFilter[] | undefined;

  /**
   * The cloud serverless function runtimes used as resource filter criteria.
   *
   * @public
   */
  cloudServerlessFunctionRuntime?: ResourceStringFilter[] | undefined;

  /**
   * The cloud serverless function tags used as resource filter criteria.
   *
   * @public
   */
  cloudServerlessFunctionTags?: ResourceMapFilter[] | undefined;
}

/**
 * @public
 */
export interface CreateSbomExportRequest {
  /**
   * The resource filter criteria for the software bill of materials (SBOM) report.
   *
   * @public
   */
  resourceFilterCriteria?: ResourceFilterCriteria | undefined;

  /**
   * The output format for the software bill of materials (SBOM) report.
   *
   * @public
   */
  reportFormat: SbomReportFormat | undefined;

  /**
   * Contains details of the Amazon S3 bucket and KMS key used to export findings.
   *
   * @public
   */
  s3Destination: Destination | undefined;
}

/**
 * @public
 */
export interface CreateSbomExportResponse {
  /**
   * The report ID for the software bill of materials (SBOM) report.
   *
   * @public
   */
  reportId?: string | undefined;
}

/**
 * The Common Vulnerability Scoring System (CVSS) version 2 details for the vulnerability.
 *
 * @public
 */
export interface Cvss2 {
  /**
   * The CVSS v2 base score for the vulnerability.
   *
   * @public
   */
  baseScore?: number | undefined;

  /**
   * The scoring vector associated with the CVSS v2 score.
   *
   * @public
   */
  scoringVector?: string | undefined;
}

/**
 * The Common Vulnerability Scoring System (CVSS) version 3 details for the vulnerability.
 *
 * @public
 */
export interface Cvss3 {
  /**
   * The CVSS v3 base score for the vulnerability.
   *
   * @public
   */
  baseScore?: number | undefined;

  /**
   * The scoring vector associated with the CVSS v3 score.
   *
   * @public
   */
  scoringVector?: string | undefined;
}

/**
 * The Common Vulnerability Scoring System (CVSS) version 4 details for the vulnerability.
 *
 * @public
 */
export interface Cvss4 {
  /**
   * The base CVSS v4 score for the vulnerability finding, which rates the severity of the vulnerability on a scale from 0 to 10.
   *
   * @public
   */
  baseScore?: number | undefined;

  /**
   * The CVSS v4 scoring vector, which contains the metrics and measurements that were used to calculate the base score.
   *
   * @public
   */
  scoringVector?: string | undefined;
}

/**
 * The CVSS score for a finding.
 *
 * @public
 */
export interface CvssScore {
  /**
   * The base CVSS score used for the finding.
   *
   * @public
   */
  baseScore: number | undefined;

  /**
   * The vector string of the CVSS score.
   *
   * @public
   */
  scoringVector: string | undefined;

  /**
   * The version of CVSS used for the score.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The source of the CVSS score.
   *
   * @public
   */
  source: string | undefined;
}

/**
 * Details on adjustments Amazon Inspector made to the CVSS score for a finding.
 *
 * @public
 */
export interface CvssScoreAdjustment {
  /**
   * The metric used to adjust the CVSS score.
   *
   * @public
   */
  metric: string | undefined;

  /**
   * The reason the CVSS score has been adjustment.
   *
   * @public
   */
  reason: string | undefined;
}

/**
 * Information about the CVSS score.
 *
 * @public
 */
export interface CvssScoreDetails {
  /**
   * The source for the CVSS score.
   *
   * @public
   */
  scoreSource: string | undefined;

  /**
   * The source of the CVSS data.
   *
   * @public
   */
  cvssSource?: string | undefined;

  /**
   * The CVSS version used in scoring.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The CVSS score.
   *
   * @public
   */
  score: number | undefined;

  /**
   * The vector for the CVSS score.
   *
   * @public
   */
  scoringVector: string | undefined;

  /**
   * An object that contains details about adjustment Amazon Inspector made to the CVSS score.
   *
   * @public
   */
  adjustments?: CvssScoreAdjustment[] | undefined;
}

/**
 * Details of the Amazon Inspector delegated administrator for your organization.
 *
 * @public
 */
export interface DelegatedAdmin {
  /**
   * The Amazon Web Services account ID of the Amazon Inspector delegated administrator for your organization.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The status of the Amazon Inspector delegated administrator.
   *
   * @public
   */
  relationshipStatus?: RelationshipStatus | undefined;
}

/**
 * Details of the Amazon Inspector delegated administrator for your organization.
 *
 * @public
 */
export interface DelegatedAdminAccount {
  /**
   * The Amazon Web Services account ID of the Amazon Inspector delegated administrator for your organization.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The status of the Amazon Inspector delegated administrator.
   *
   * @public
   */
  status?: DelegatedAdminStatus | undefined;
}

/**
 * @public
 */
export interface DeleteCisScanConfigurationRequest {
  /**
   * The ARN of the CIS scan configuration.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCisScanConfigurationResponse {
  /**
   * The ARN of the CIS scan configuration.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeSecurityIntegrationRequest {
  /**
   * The Amazon Resource Name (ARN) of the code security integration to delete.
   *
   * @public
   */
  integrationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeSecurityIntegrationResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted code security integration.
   *
   * @public
   */
  integrationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeSecurityScanConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the scan configuration to delete.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeSecurityScanConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted scan configuration.
   *
   * @public
   */
  scanConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * The Amazon Resource Name (ARN) of the connector to delete.
   *
   * @public
   */
  connectorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorResponse {}

/**
 * @public
 */
export interface DeleteFilterRequest {
  /**
   * The Amazon Resource Number (ARN) of the filter to be deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFilterResponse {
  /**
   * The Amazon Resource Number (ARN) of the filter that has been deleted.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationRequest {}

/**
 * @public
 */
export interface DescribeOrganizationConfigurationResponse {
  /**
   * The scan types are automatically enabled for new members of your organization.
   *
   * @public
   */
  autoEnable?: AutoEnable | undefined;

  /**
   * Represents whether your organization has reached the maximum Amazon Web Services account limit for Amazon Inspector.
   *
   * @public
   */
  maxAccountLimitReached?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableRequest {
  /**
   * An array of account IDs you want to disable Amazon Inspector scans for.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * The resource scan types you want to disable.
   *
   * @public
   */
  resourceTypes?: ResourceScanType[] | undefined;
}

/**
 * @public
 */
export interface DisableResponse {
  /**
   * Information on the accounts that have had Amazon Inspector scans successfully disabled. Details are provided for each account.
   *
   * @public
   */
  accounts: Account[] | undefined;

  /**
   * Information on any accounts for which Amazon Inspector scans could not be disabled. Details are provided for each account.
   *
   * @public
   */
  failedAccounts?: FailedAccount[] | undefined;
}

/**
 * @public
 */
export interface DisableDelegatedAdminAccountRequest {
  /**
   * The Amazon Web Services account ID of the current Amazon Inspector delegated administrator.
   *
   * @public
   */
  delegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisableDelegatedAdminAccountResponse {
  /**
   * The Amazon Web Services account ID of the successfully disabled delegated administrator.
   *
   * @public
   */
  delegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberRequest {
  /**
   * The Amazon Web Services account ID of the member account to disassociate.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberResponse {
  /**
   * The Amazon Web Services account ID of the successfully disassociated member.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * Enables agent-based scanning, which scans instances that are not managed by SSM.
 *
 * @public
 */
export interface Ec2Configuration {
  /**
   * The scan method that is applied to the instance.
   *
   * @public
   */
  scanMode: Ec2ScanMode | undefined;

  /**
   * Whether to activate Amazon Inspector VM scanner for Amazon EC2 scanning.
   *
   * @public
   */
  activateVMScanner?: boolean | undefined;
}

/**
 * The state of your Amazon EC2 scan mode configuration.
 *
 * @public
 */
export interface Ec2ScanModeState {
  /**
   * The scan method that is applied to the instance.
   *
   * @public
   */
  scanMode?: Ec2ScanMode | undefined;

  /**
   * The status of the Amazon EC2 scan mode setting.
   *
   * @public
   */
  scanModeStatus?: Ec2ScanModeStatus | undefined;
}

/**
 * The state of the Amazon Inspector VM scanner.
 *
 * @public
 */
export interface VMScannerState {
  /**
   * Whether the VM scanner is activated.
   *
   * @public
   */
  activated?: boolean | undefined;

  /**
   * The date and time the VM scanner was activated.
   *
   * @public
   */
  activatedAt?: Date | undefined;

  /**
   * The status of the VM scanner.
   *
   * @public
   */
  status?: VMScannerStatus | undefined;
}

/**
 * Details about the state of the EC2 scan configuration for your environment.
 *
 * @public
 */
export interface Ec2ConfigurationState {
  /**
   * An object that contains details about the state of the Amazon EC2 scan mode.
   *
   * @public
   */
  scanModeState?: Ec2ScanModeState | undefined;

  /**
   * An object that contains details about the state of the Amazon Inspector VM scanner.
   *
   * @public
   */
  vmScannerState?: VMScannerState | undefined;
}

/**
 * Details about the ECR automated re-scan duration setting for your environment.
 *
 * @public
 */
export interface EcrConfiguration {
  /**
   * The rescan duration configured for image push date.
   *
   * @public
   */
  rescanDuration: EcrRescanDuration | undefined;

  /**
   * The rescan duration configured for image pull date.
   *
   * @public
   */
  pullDateRescanDuration?: EcrPullDateRescanDuration | undefined;

  /**
   * The pull date for the re-scan mode.
   *
   * @public
   */
  pullDateRescanMode?: EcrPullDateRescanMode | undefined;
}

/**
 * Details about the state of your ECR re-scan duration settings. The ECR re-scan duration defines how long an ECR image will be actively scanned by Amazon Inspector. When the number of days since an image was last pushed exceeds the duration configured for image pull date, and the duration configured for image pull date, the monitoring state of that image becomes `inactive` and all associated findings are scheduled for closure.
 *
 * @public
 */
export interface EcrRescanDurationState {
  /**
   * The rescan duration configured for image push date.
   *
   * @public
   */
  rescanDuration?: EcrRescanDuration | undefined;

  /**
   * The status of changes to the ECR automated re-scan duration.
   *
   * @public
   */
  status?: EcrRescanDurationStatus | undefined;

  /**
   * A timestamp representing when the last time the ECR scan duration setting was changed.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The rescan duration configured for image pull date.
   *
   * @public
   */
  pullDateRescanDuration?: EcrPullDateRescanDuration | undefined;

  /**
   * The pull date for the re-scan mode.
   *
   * @public
   */
  pullDateRescanMode?: EcrPullDateRescanMode | undefined;
}

/**
 * Details about the state of the ECR scans for your environment.
 *
 * @public
 */
export interface EcrConfigurationState {
  /**
   * An object that contains details about the state of the ECR re-scan settings.
   *
   * @public
   */
  rescanDurationState?: EcrRescanDurationState | undefined;
}

/**
 * @public
 */
export interface EnableRequest {
  /**
   * A list of account IDs you want to enable Amazon Inspector scans for.
   *
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * The resource scan types you want to enable.
   *
   * @public
   */
  resourceTypes: ResourceScanType[] | undefined;

  /**
   * The idempotency token for the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface EnableResponse {
  /**
   * Information on the accounts that have had Amazon Inspector scans successfully enabled. Details are provided for each account.
   *
   * @public
   */
  accounts: Account[] | undefined;

  /**
   * Information on any accounts for which Amazon Inspector scans could not be enabled. Details are provided for each account.
   *
   * @public
   */
  failedAccounts?: FailedAccount[] | undefined;
}

/**
 * @public
 */
export interface EnableDelegatedAdminAccountRequest {
  /**
   * The Amazon Web Services account ID of the Amazon Inspector delegated administrator.
   *
   * @public
   */
  delegatedAdminAccountId: string | undefined;

  /**
   * The idempotency token for the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface EnableDelegatedAdminAccountResponse {
  /**
   * The Amazon Web Services account ID of the successfully Amazon Inspector delegated administrator.
   *
   * @public
   */
  delegatedAdminAccountId: string | undefined;
}

/**
 * Details about the Exploit Prediction Scoring System (EPSS) score.
 *
 * @public
 */
export interface Epss {
  /**
   * The Exploit Prediction Scoring System (EPSS) score.
   *
   * @public
   */
  score?: number | undefined;
}

/**
 * Details about the Exploit Prediction Scoring System (EPSS) score for a finding.
 *
 * @public
 */
export interface EpssDetails {
  /**
   * The EPSS score.
   *
   * @public
   */
  score?: number | undefined;
}

/**
 * The details of an exploit available for a finding discovered in your environment.
 *
 * @public
 */
export interface ExploitabilityDetails {
  /**
   * The date and time of the last exploit associated with a finding discovered in your environment.
   *
   * @public
   */
  lastKnownExploitAt?: Date | undefined;
}

/**
 * Details about a filter.
 *
 * @public
 */
export interface Filter {
  /**
   * The Amazon Resource Number (ARN) associated with this filter.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The Amazon Web Services account ID of the account that created the filter.
   *
   * @public
   */
  ownerId: string | undefined;

  /**
   * The name of the filter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Details on the filter criteria associated with this filter.
   *
   * @public
   */
  criteria: FilterCriteria | undefined;

  /**
   * The action that is to be applied to the findings that match the filter.
   *
   * @public
   */
  action: FilterAction | undefined;

  /**
   * The date and time this filter was created at.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time the filter was last updated at.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * A description of the filter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The reason for the filter.
   *
   * @public
   */
  reason?: string | undefined;

  /**
   * The tags attached to the filter.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Information about the Amazon Inspector score given to a finding.
 *
 * @public
 */
export interface InspectorScoreDetails {
  /**
   * An object that contains details about the CVSS score given to a finding.
   *
   * @public
   */
  adjustedCvss?: CvssScoreDetails | undefined;
}

/**
 * Details about the step associated with a finding.
 *
 * @public
 */
export interface Step {
  /**
   * The component ID.
   *
   * @public
   */
  componentId: string | undefined;

  /**
   * The component type.
   *
   * @public
   */
  componentType: string | undefined;

  /**
   * The component ARN. The ARN can be null and is not displayed in the Amazon Web Services console.
   *
   * @public
   */
  componentArn?: string | undefined;
}

/**
 * Information on the network path associated with a finding.
 *
 * @public
 */
export interface NetworkPath {
  /**
   * The details on the steps in the network path.
   *
   * @public
   */
  steps?: Step[] | undefined;
}

/**
 * Details about the port range associated with a finding.
 *
 * @public
 */
export interface PortRange {
  /**
   * The beginning port in a port range.
   *
   * @public
   */
  begin: number | undefined;

  /**
   * The ending port in a port range.
   *
   * @public
   */
  end: number | undefined;
}

/**
 * Contains the details of a network reachability finding.
 *
 * @public
 */
export interface NetworkReachabilityDetails {
  /**
   * An object that contains details about the open port range associated with a finding.
   *
   * @public
   */
  openPortRange: PortRange | undefined;

  /**
   * The protocol associated with a finding.
   *
   * @public
   */
  protocol: NetworkProtocol | undefined;

  /**
   * An object that contains details about a network path associated with a finding.
   *
   * @public
   */
  networkPath: NetworkPath | undefined;
}

/**
 * Information on the vulnerable package identified by a finding.
 *
 * @public
 */
export interface VulnerablePackage {
  /**
   * The name of the vulnerable package.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the vulnerable package.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The source layer hash of the vulnerable package.
   *
   * @public
   */
  sourceLayerHash?: string | undefined;

  /**
   * The epoch of the vulnerable package.
   *
   * @public
   */
  epoch?: number | undefined;

  /**
   * The release of the vulnerable package.
   *
   * @public
   */
  release?: string | undefined;

  /**
   * The architecture of the vulnerable package.
   *
   * @public
   */
  arch?: string | undefined;

  /**
   * The package manager of the vulnerable package.
   *
   * @public
   */
  packageManager?: PackageManager | undefined;

  /**
   * The file path of the vulnerable package.
   *
   * @public
   */
  filePath?: string | undefined;

  /**
   * The version of the package that contains the vulnerability fix.
   *
   * @public
   */
  fixedInVersion?: string | undefined;

  /**
   * The code to run in your environment to update packages with a fix available.
   *
   * @public
   */
  remediation?: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the Amazon Web Services Lambda function affected by a finding.
   *
   * @public
   */
  sourceLambdaLayerArn?: string | undefined;
}

/**
 * Information about a package vulnerability finding.
 *
 * @public
 */
export interface PackageVulnerabilityDetails {
  /**
   * The ID given to this vulnerability.
   *
   * @public
   */
  vulnerabilityId: string | undefined;

  /**
   * The packages impacted by this vulnerability.
   *
   * @public
   */
  vulnerablePackages?: VulnerablePackage[] | undefined;

  /**
   * The source of the vulnerability information.
   *
   * @public
   */
  source: string | undefined;

  /**
   * An object that contains details about the CVSS score of a finding.
   *
   * @public
   */
  cvss?: CvssScore[] | undefined;

  /**
   * One or more vulnerabilities related to the one identified in this finding.
   *
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * A URL to the source of the vulnerability information.
   *
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * The severity the vendor has given to this vulnerability type.
   *
   * @public
   */
  vendorSeverity?: string | undefined;

  /**
   * The date and time that this vulnerability was first added to the vendor's database.
   *
   * @public
   */
  vendorCreatedAt?: Date | undefined;

  /**
   * The date and time the vendor last updated this vulnerability in their database.
   *
   * @public
   */
  vendorUpdatedAt?: Date | undefined;

  /**
   * One or more URLs that contain details about this vulnerability type.
   *
   * @public
   */
  referenceUrls?: string[] | undefined;
}

/**
 * Details about the recommended course of action to remediate the finding.
 *
 * @public
 */
export interface Recommendation {
  /**
   * The recommended course of action to remediate the finding.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * The URL address to the CVE remediation recommendations.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * Information on how to remediate a finding.
 *
 * @public
 */
export interface Remediation {
  /**
   * An object that contains information about the recommended course of action to remediate the finding.
   *
   * @public
   */
  recommendation?: Recommendation | undefined;
}

/**
 * Contains details about a container image involved in a finding.
 *
 * @public
 */
export interface Image {
  /**
   * The name of the repository the container image resides in.
   *
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * The registry for the container image.
   *
   * @public
   */
  registry?: string | undefined;

  /**
   * The image tags attached to the container image.
   *
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * The image digest of the container image.
   *
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * The date and time the container image was pushed.
   *
   * @public
   */
  pushedAt?: Date | undefined;

  /**
   * The architecture of the container image.
   *
   * @public
   */
  architecture?: string | undefined;

  /**
   * The author of the container image.
   *
   * @public
   */
  author?: string | undefined;

  /**
   * The number of times the container image is in use.
   *
   * @public
   */
  inUseCount?: number | undefined;

  /**
   * The last time the container image was in use.
   *
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * The platform of the container image.
   *
   * @public
   */
  platform?: string | undefined;
}

/**
 * Details about a machine image resource scanned directly by Inspector.
 * @public
 */
export interface MachineImageDetails {
  /**
   * The machine image ID (e.g., ami-0abcdef1234567890)
   * @public
   */
  machineImageId: string | undefined;

  /**
   * Human-readable image name
   * @public
   */
  name?: string | undefined;

  /**
   * Account ID that owns the image
   * @public
   */
  ownerAccountId?: string | undefined;

  /**
   * OS platform (Linux/Windows)
   * @public
   */
  platform?: string | undefined;

  /**
   * CPU architecture (x86_64/arm64)
   * @public
   */
  architecture?: Architecture | undefined;

  /**
   * When the image was created
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * Image state (available/pending/deregistered)
   * @public
   */
  state?: string | undefined;

  /**
   * Whether the image is publicly shared
   * @public
   */
  isPublic?: boolean | undefined;

  /**
   * Root device type (ebs/instance-store) — AWS-specific
   * @public
   */
  rootDeviceType?: string | undefined;

  /**
   * Virtualization type (hvm/paravirtual) — AWS-specific
   * @public
   */
  virtualizationType?: string | undefined;

  /**
   * Source resource the image was created from (nullable)
   * @public
   */
  sourceResourceId?: string | undefined;
}

/**
 * Contains details about a serverless function involved in a finding.
 *
 * @public
 */
export interface ServerlessFunction {
  /**
   * The name of the serverless function.
   *
   * @public
   */
  serverlessFunctionName?: string | undefined;

  /**
   * The runtime of the serverless function.
   *
   * @public
   */
  runtime?: string | undefined;

  /**
   * The version of the serverless function.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The code digest of the serverless function.
   *
   * @public
   */
  codeDigest?: string | undefined;

  /**
   * The date and time the serverless function was last modified.
   *
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * The network ID associated with the serverless function.
   *
   * @public
   */
  networkId?: string | undefined;

  /**
   * The subnet IDs associated with the serverless function.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The security group IDs associated with the serverless function.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The execution role of the serverless function.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * The package type of the serverless function.
   *
   * @public
   */
  packageType?: PackageType | undefined;

  /**
   * The architectures of the serverless function.
   *
   * @public
   */
  architectures?: Architecture[] | undefined;

  /**
   * The layers of the serverless function.
   *
   * @public
   */
  layers?: string[] | undefined;
}

/**
 * Contains details about a VM instance involved in a finding.
 *
 * @public
 */
export interface Vm {
  /**
   * The type of the VM instance.
   *
   * @public
   */
  type?: string | undefined;

  /**
   * The name of the VM instance.
   *
   * @public
   */
  vmName?: string | undefined;

  /**
   * The image reference of the VM instance.
   *
   * @public
   */
  vmImageReference?: string | undefined;

  /**
   * The IPv4 addresses of the VM instance.
   *
   * @public
   */
  ipV4Addresses?: string[] | undefined;

  /**
   * The IPv6 addresses of the VM instance.
   *
   * @public
   */
  ipV6Addresses?: string[] | undefined;

  /**
   * The network ID associated with the VM instance.
   *
   * @public
   */
  networkId?: string | undefined;

  /**
   * The subnet IDs of the VM instance.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The security group IDs associated with the VM instance.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The date and time the VM instance was launched.
   *
   * @public
   */
  launchedAt?: Date | undefined;

  /**
   * The platform of the VM instance.
   *
   * @public
   */
  platform?: string | undefined;

  /**
   * The execution role of the VM instance.
   *
   * @public
   */
  executionRole?: string | undefined;

  /**
   * The key name associated with the VM instance.
   *
   * @public
   */
  keyName?: string | undefined;
}

/**
 * Contains details about the resource involved in the finding.
 *
 * @public
 */
export interface ResourceDetails {
  /**
   * An object that contains details about the Amazon EC2 instance involved in the finding.
   *
   * @public
   */
  awsEc2Instance?: AwsEc2InstanceDetails | undefined;

  /**
   * An object that contains details about the Amazon ECR container image involved in the finding.
   *
   * @public
   */
  awsEcrContainerImage?: AwsEcrContainerImageDetails | undefined;

  /**
   * A summary of the information about an Amazon Web Services Lambda function affected by a finding.
   *
   * @public
   */
  awsLambdaFunction?: AwsLambdaFunctionDetails | undefined;

  /**
   * Contains details about a code repository resource associated with a finding.
   *
   * @public
   */
  codeRepository?: CodeRepositoryDetails | undefined;

  /**
   * Details about a machine image resource scanned directly by Inspector.
   * @public
   */
  machineImage?: MachineImageDetails | undefined;

  /**
   * An object that contains details about a VM instance involved in the finding.
   *
   * @public
   */
  vm?: Vm | undefined;

  /**
   * An object that contains details about a container image involved in the finding.
   *
   * @public
   */
  image?: Image | undefined;

  /**
   * An object that contains details about a serverless function involved in the finding.
   *
   * @public
   */
  serverlessFunction?: ServerlessFunction | undefined;
}

/**
 * Details about the resource involved in a finding.
 *
 * @public
 */
export interface Resource {
  /**
   * The type of resource.
   *
   * @public
   */
  type: ResourceType | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The partition of the resource.
   *
   * @public
   */
  partition?: string | undefined;

  /**
   * The Amazon Web Services Region the impacted resource is located in.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The tags attached to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * An object that contains details about the resource involved in a finding.
   *
   * @public
   */
  details?: ResourceDetails | undefined;

  /**
   * The cloud provider of the resource.
   *
   * @public
   */
  provider?: Provider | undefined;

  /**
   * The cloud provider account ID of the resource.
   *
   * @public
   */
  providerAccountId?: string | undefined;

  /**
   * The cloud provider organization ID of the resource.
   *
   * @public
   */
  providerOrgId?: string | undefined;
}

/**
 * Details about an Amazon Inspector finding.
 *
 * @public
 */
export interface Finding {
  /**
   * The Amazon Resource Number (ARN) of the finding.
   *
   * @public
   */
  findingArn: string | undefined;

  /**
   * The Amazon Web Services account ID associated with the finding.
   *
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * The type of the finding. The `type` value determines the valid values for `resource` in your request. For more information, see [Finding types](https://docs.aws.amazon.com/inspector/latest/user/findings-types.html) in the Amazon Inspector user guide.
   *
   * @public
   */
  type: FindingType | undefined;

  /**
   * The description of the finding.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The title of the finding.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * An object that contains the details about how to remediate a finding.
   *
   * @public
   */
  remediation: Remediation | undefined;

  /**
   * The severity of the finding. `UNTRIAGED` applies to `PACKAGE_VULNERABILITY` type findings that the vendor has not assigned a severity yet. For more information, see [Severity levels for findings](https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html) in the Amazon Inspector user guide.
   *
   * @public
   */
  severity: Severity | undefined;

  /**
   * The date and time that the finding was first observed.
   *
   * @public
   */
  firstObservedAt: Date | undefined;

  /**
   * The date and time the finding was last observed. This timestamp for this field remains unchanged until a finding is updated.
   *
   * @public
   */
  lastObservedAt: Date | undefined;

  /**
   * The date and time the finding was last updated at.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The status of the finding.
   *
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * Contains information on the resources involved in a finding. The `resource` value determines the valid values for `type` in your request. For more information, see [Finding types](https://docs.aws.amazon.com/inspector/latest/user/findings-types.html) in the Amazon Inspector user guide.
   *
   * @public
   */
  resources: Resource[] | undefined;

  /**
   * The Amazon Inspector score given to the finding.
   *
   * @public
   */
  inspectorScore?: number | undefined;

  /**
   * An object that contains details of the Amazon Inspector score.
   *
   * @public
   */
  inspectorScoreDetails?: InspectorScoreDetails | undefined;

  /**
   * An object that contains the details of a network reachability finding.
   *
   * @public
   */
  networkReachabilityDetails?: NetworkReachabilityDetails | undefined;

  /**
   * An object that contains the details of a package vulnerability finding.
   *
   * @public
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails | undefined;

  /**
   * Details on whether a fix is available through a version update. This value can be `YES`, `NO`, or `PARTIAL`. A `PARTIAL` fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions.
   *
   * @public
   */
  fixAvailable?: FixAvailable | undefined;

  /**
   * If a finding discovered in your environment has an exploit available.
   *
   * @public
   */
  exploitAvailable?: ExploitAvailable | undefined;

  /**
   * The details of an exploit available for a finding discovered in your environment.
   *
   * @public
   */
  exploitabilityDetails?: ExploitabilityDetails | undefined;

  /**
   * Details about the code vulnerability identified in a Lambda function used to filter findings.
   *
   * @public
   */
  codeVulnerabilityDetails?: CodeVulnerabilityDetails | undefined;

  /**
   * The finding's EPSS score.
   *
   * @public
   */
  epss?: EpssDetails | undefined;
}

/**
 * @public
 */
export interface GetCisScanReportRequest {
  /**
   * The scan ARN.
   *
   * @public
   */
  scanArn: string | undefined;

  /**
   * The target accounts.
   *
   * @public
   */
  targetAccounts?: string[] | undefined;

  /**
   * The format of the report. Valid values are `PDF` and `CSV`. If no value is specified, the report format defaults to `PDF`.
   *
   * @public
   */
  reportFormat?: CisReportFormat | undefined;
}

/**
 * @public
 */
export interface GetCisScanReportResponse {
  /**
   * The URL where a PDF or CSV of the CIS scan report can be downloaded.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * The status.
   *
   * @public
   */
  status?: CisReportStatus | undefined;
}

/**
 * @public
 */
export interface GetCisScanResultDetailsRequest {
  /**
   * The scan ARN.
   *
   * @public
   */
  scanArn: string | undefined;

  /**
   * The target resource ID.
   *
   * @public
   */
  targetResourceId: string | undefined;

  /**
   * The account ID.
   *
   * @public
   */
  accountId: string | undefined;

  /**
   * The filter criteria.
   *
   * @public
   */
  filterCriteria?: CisScanResultDetailsFilterCriteria | undefined;

  /**
   * The sort by order.
   *
   * @public
   */
  sortBy?: CisScanResultDetailsSortBy | undefined;

  /**
   * The sort order.
   *
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * The pagination token from a previous request that's used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of CIS scan result details to be returned in a single page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetCisScanResultDetailsResponse {
  /**
   * The scan result details.
   *
   * @public
   */
  scanResultDetails?: CisScanResultDetails[] | undefined;

  /**
   * The pagination token from a previous request that's used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetClustersForImageRequest {
  /**
   * The resource Id for the Amazon ECR image.
   *
   * @public
   */
  filter: ClusterForImageFilterCriteria | undefined;

  /**
   * The maximum number of results to be returned in a single page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token from a previous request used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetClustersForImageResponse {
  /**
   * A unit of work inside of a cluster, which can include metadata about the cluster.
   *
   * @public
   */
  cluster: ClusterInformation[] | undefined;

  /**
   * The pagination token from a previous request used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityIntegrationRequest {
  /**
   * The Amazon Resource Name (ARN) of the code security integration to retrieve.
   *
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The tags associated with the code security integration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityIntegrationResponse {
  /**
   * The Amazon Resource Name (ARN) of the code security integration.
   *
   * @public
   */
  integrationArn: string | undefined;

  /**
   * The name of the code security integration.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of repository provider for the integration.
   *
   * @public
   */
  type: IntegrationType | undefined;

  /**
   * The current status of the code security integration.
   *
   * @public
   */
  status: IntegrationStatus | undefined;

  /**
   * The reason for the current status of the code security integration.
   *
   * @public
   */
  statusReason: string | undefined;

  /**
   * The timestamp when the code security integration was created.
   *
   * @public
   */
  createdOn: Date | undefined;

  /**
   * The timestamp when the code security integration was last updated.
   *
   * @public
   */
  lastUpdateOn: Date | undefined;

  /**
   * The URL used to authorize the integration with the repository provider. This is only returned if reauthorization is required to fix a connection issue. Otherwise, it is null.
   *
   * @public
   */
  authorizationUrl?: string | undefined;

  /**
   * The tags associated with the code security integration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanRequest {
  /**
   * The resource identifier for the code repository that was scanned.
   *
   * @public
   */
  resource: CodeSecurityResource | undefined;

  /**
   * The unique identifier of the scan to retrieve.
   *
   * @public
   */
  scanId: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanResponse {
  /**
   * The unique identifier of the scan.
   *
   * @public
   */
  scanId?: string | undefined;

  /**
   * The resource identifier for the code repository that was scanned.
   *
   * @public
   */
  resource?: CodeSecurityResource | undefined;

  /**
   * The Amazon Web Services account ID associated with the scan.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The current status of the scan.
   *
   * @public
   */
  status?: CodeScanStatus | undefined;

  /**
   * The reason for the current status of the scan.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp when the scan was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the scan was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The identifier of the last commit that was scanned. This is only returned if the scan was successful or skipped.
   *
   * @public
   */
  lastCommitId?: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the scan configuration to retrieve.
   *
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the scan configuration.
   *
   * @public
   */
  scanConfigurationArn?: string | undefined;

  /**
   * The name of the scan configuration.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The configuration settings for the code security scan.
   *
   * @public
   */
  configuration?: CodeSecurityScanConfiguration | undefined;

  /**
   * The security level for the scan configuration.
   *
   * @public
   */
  level?: ConfigurationLevel | undefined;

  /**
   * The scope settings that define which repositories will be scanned. If the `ScopeSetting` parameter is `ALL` the scan configuration applies to all existing and future projects imported into Amazon Inspector.
   *
   * @public
   */
  scopeSettings?: ScopeSettings | undefined;

  /**
   * The timestamp when the scan configuration was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the scan configuration was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * The tags associated with the scan configuration.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetConfigurationRequest {
  /**
   * The 12-digit Amazon Web Services account ID of the member account whose scan configuration you want to retrieve. When specified, you must be the delegated administrator for this member account. If not specified, the operation returns your own configuration.
   *
   * @public
   */
  accountId?: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationResponse {
  /**
   * Specifies how the ECR automated re-scan duration is currently configured for your environment.
   *
   * @public
   */
  ecrConfiguration?: EcrConfigurationState | undefined;

  /**
   * Specifies how the Amazon EC2 automated scan mode is currently configured for your environment.
   *
   * @public
   */
  ec2Configuration?: Ec2ConfigurationState | undefined;

  /**
   * The current state of the Amazon Machine Image (AMI) scan configuration for the account.
   *
   * @public
   */
  amiConfiguration?: AmiConfigurationState | undefined;
}

/**
 * @public
 */
export interface GetDelegatedAdminAccountRequest {}

/**
 * @public
 */
export interface GetDelegatedAdminAccountResponse {
  /**
   * The Amazon Web Services account ID of the Amazon Inspector delegated administrator.
   *
   * @public
   */
  delegatedAdmin?: DelegatedAdmin | undefined;
}

/**
 * @public
 */
export interface GetEc2DeepInspectionConfigurationRequest {}

/**
 * @public
 */
export interface GetEc2DeepInspectionConfigurationResponse {
  /**
   * The Amazon Inspector deep inspection custom paths for your account.
   *
   * @public
   */
  packagePaths?: string[] | undefined;

  /**
   * The Amazon Inspector deep inspection custom paths for your organization.
   *
   * @public
   */
  orgPackagePaths?: string[] | undefined;

  /**
   * The activation status of Amazon Inspector deep inspection in your account.
   *
   * @public
   */
  status?: Ec2DeepInspectionStatus | undefined;

  /**
   * An error message explaining why Amazon Inspector deep inspection configurations could not be retrieved for your account.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetEncryptionKeyRequest {
  /**
   * The scan type the key encrypts.
   *
   * @public
   */
  scanType: ScanType | undefined;

  /**
   * The resource type the key encrypts.
   *
   * @public
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 */
export interface GetEncryptionKeyResponse {
  /**
   * A kms key ID.
   *
   * @public
   */
  kmsKeyId: string | undefined;
}

/**
 * @public
 */
export interface GetFindingsReportStatusRequest {
  /**
   * The ID of the report to retrieve the status of.
   *
   * @public
   */
  reportId?: string | undefined;
}

/**
 * @public
 */
export interface GetFindingsReportStatusResponse {
  /**
   * The ID of the report.
   *
   * @public
   */
  reportId?: string | undefined;

  /**
   * The status of the report.
   *
   * @public
   */
  status?: ExternalReportStatus | undefined;

  /**
   * The error code of the report.
   *
   * @public
   */
  errorCode?: ReportingErrorCode | undefined;

  /**
   * The error message of the report.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * The destination of the report.
   *
   * @public
   */
  destination?: Destination | undefined;

  /**
   * The filter criteria associated with the report.
   *
   * @public
   */
  filterCriteria?: FilterCriteria | undefined;
}

/**
 * @public
 */
export interface GetMemberRequest {
  /**
   * The Amazon Web Services account ID of the member account to retrieve information on.
   *
   * @public
   */
  accountId: string | undefined;
}

/**
 * Details on a member account in your organization.
 *
 * @public
 */
export interface Member {
  /**
   * The Amazon Web Services account ID of the member account.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The status of the member account.
   *
   * @public
   */
  relationshipStatus?: RelationshipStatus | undefined;

  /**
   * The Amazon Web Services account ID of the Amazon Inspector delegated administrator for this member account.
   *
   * @public
   */
  delegatedAdminAccountId?: string | undefined;

  /**
   * A timestamp showing when the status of this member was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetMemberResponse {
  /**
   * Details of the retrieved member account.
   *
   * @public
   */
  member?: Member | undefined;
}

/**
 * @public
 */
export interface GetOnDemandScanStatusRequest {
  /**
   * The ID of the resource whose on-demand scan status is being requested.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The unique identifier of the on-demand scan whose status is being requested.
   *
   * @public
   */
  scanId: string | undefined;

  /**
   * The type of the resource whose on-demand scan status is being requested.
   *
   * @public
   */
  resourceType: OnDemandResourceType | undefined;
}

/**
 * @public
 */
export interface GetOnDemandScanStatusResponse {
  /**
   * The unique identifier of the on-demand scan.
   *
   * @public
   */
  scanId: string | undefined;

  /**
   * The ID of the resource that was scanned.
   *
   * @public
   */
  resourceId: string | undefined;

  /**
   * The type of the resource that was scanned.
   *
   * @public
   */
  resourceType: OnDemandResourceType | undefined;

  /**
   * The current status of the on-demand scan.
   *
   * @public
   */
  scanStatus: OnDemandScanStatus | undefined;

  /**
   * The reason associated with the current on-demand scan status.
   *
   * @public
   */
  scanStatusReason?: OnDemandScanStatusReason | undefined;

  /**
   * The date and time, in ISO 8601 format, when the on-demand scan started.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The date and time, in ISO 8601 format, when the on-demand scan completed. This field is absent if the scan has not completed.
   *
   * @public
   */
  completedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetSbomExportRequest {
  /**
   * The report ID of the SBOM export to get details for.
   *
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface GetSbomExportResponse {
  /**
   * The report ID of the software bill of materials (SBOM) report.
   *
   * @public
   */
  reportId?: string | undefined;

  /**
   * The format of the software bill of materials (SBOM) report.
   *
   * @public
   */
  format?: SbomReportFormat | undefined;

  /**
   * The status of the software bill of materials (SBOM) report.
   *
   * @public
   */
  status?: ExternalReportStatus | undefined;

  /**
   * An error code.
   *
   * @public
   */
  errorCode?: ReportingErrorCode | undefined;

  /**
   * An error message.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Contains details of the Amazon S3 bucket and KMS key used to export findings
   *
   * @public
   */
  s3Destination?: Destination | undefined;

  /**
   * Contains details about the resource filter criteria used for the software bill of materials (SBOM) report.
   *
   * @public
   */
  filterCriteria?: ResourceFilterCriteria | undefined;
}

/**
 * @public
 */
export interface ListAccountPermissionsRequest {
  /**
   * The service scan type to check permissions for.
   *
   * @public
   */
  service?: Service | undefined;

  /**
   * The maximum number of results the response can return. If your request would return more than the maximum the response will return a `nextToken` value, use this value when you call the action again to get the remaining results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the `maxResults` maximum value it will also return a `nextToken` value. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information on the permissions an account has within Amazon Inspector.
 *
 * @public
 */
export interface Permission {
  /**
   * The services that the permissions allow an account to perform the given operations for.
   *
   * @public
   */
  service: Service | undefined;

  /**
   * The operations that can be performed with the given permissions.
   *
   * @public
   */
  operation: Operation | undefined;
}

/**
 * @public
 */
export interface ListAccountPermissionsResponse {
  /**
   * Contains details on the permissions an account has to configure Amazon Inspector.
   *
   * @public
   */
  permissions: Permission[] | undefined;

  /**
   * A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the `NextToken` value returned from the previous request to continue listing results after the first page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A list of CIS scan configurations filter criteria.
 *
 * @public
 */
export interface ListCisScanConfigurationsFilterCriteria {
  /**
   * The list of scan name filters.
   *
   * @public
   */
  scanNameFilters?: CisStringFilter[] | undefined;

  /**
   * The list of target resource tag filters.
   *
   * @public
   */
  targetResourceTagFilters?: TagFilter[] | undefined;

  /**
   * The list of scan configuration ARN filters.
   *
   * @public
   */
  scanConfigurationArnFilters?: CisStringFilter[] | undefined;
}

/**
 * @public
 */
export interface ListCisScanConfigurationsRequest {
  /**
   * The CIS scan configuration filter criteria.
   *
   * @public
   */
  filterCriteria?: ListCisScanConfigurationsFilterCriteria | undefined;

  /**
   * The CIS scan configuration sort by order.
   *
   * @public
   */
  sortBy?: CisScanConfigurationsSortBy | undefined;

  /**
   * The CIS scan configuration sort order order.
   *
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * The pagination token from a previous request that's used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of CIS scan configurations to be returned in a single page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScanConfigurationsResponse {
  /**
   * The CIS scan configuration scan configurations.
   *
   * @public
   */
  scanConfigurations?: CisScanConfiguration[] | undefined;

  /**
   * The pagination token from a previous request that's used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByChecksRequest {
  /**
   * The scan ARN.
   *
   * @public
   */
  scanArn: string | undefined;

  /**
   * The filter criteria.
   *
   * @public
   */
  filterCriteria?: CisScanResultsAggregatedByChecksFilterCriteria | undefined;

  /**
   * The sort by order.
   *
   * @public
   */
  sortBy?: CisScanResultsAggregatedByChecksSortBy | undefined;

  /**
   * The sort order.
   *
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * The pagination token from a previous request that's used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of scan results aggregated by checks to be returned in a single page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByChecksResponse {
  /**
   * The check aggregations.
   *
   * @public
   */
  checkAggregations?: CisCheckAggregation[] | undefined;

  /**
   * The pagination token from a previous request that's used to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}
