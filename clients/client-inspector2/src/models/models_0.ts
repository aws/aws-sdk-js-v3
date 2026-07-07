// smithy-typescript generated code
import type {
  AccountSortBy,
  AggregationFindingType,
  AggregationResourceType,
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
  CisScanResultsAggregatedByTargetResourceSortBy,
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
  ListCisScansDetailLevel,
  ListCisScansSortBy,
  MapComparison,
  NetworkProtocol,
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
 * <p>Details the status of Amazon Inspector for each resource type Amazon Inspector scans.</p>
 * @public
 */
export interface ResourceStatus {
  /**
   * <p>The status of Amazon Inspector scanning for Amazon EC2 resources.</p>
   * @public
   */
  ec2: Status | undefined;

  /**
   * <p>The status of Amazon Inspector scanning for Amazon ECR resources.</p>
   * @public
   */
  ecr: Status | undefined;

  /**
   * <p>The status of Amazon Inspector scanning for Amazon Web Services Lambda function.</p>
   * @public
   */
  lambda?: Status | undefined;

  /**
   * <p>The status of Amazon Inspector scanning for custom application code for Amazon Web Services Lambda
   *          functions. </p>
   * @public
   */
  lambdaCode?: Status | undefined;

  /**
   * <p>The status of Amazon Inspector scanning for code repositories.</p>
   * @public
   */
  codeRepository?: Status | undefined;
}

/**
 * <p>An Amazon Web Services account within your environment that Amazon Inspector has been enabled for.</p>
 * @public
 */
export interface Account {
  /**
   * <p>The ID of the Amazon Web Services account.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The status of Amazon Inspector for the account.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>Details of the status of Amazon Inspector scans by resource type.</p>
   * @public
   */
  resourceStatus: ResourceStatus | undefined;
}

/**
 * <p>An object that contains details about an aggregation response based on
 *          Amazon Web Services accounts.</p>
 * @public
 */
export interface AccountAggregation {
  /**
   * <p>The type of finding.</p>
   * @public
   */
  findingType?: AggregationFindingType | undefined;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  resourceType?: AggregationResourceType | undefined;

  /**
   * <p>The sort order (ascending or descending).</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort by.</p>
   * @public
   */
  sortBy?: AccountSortBy | undefined;
}

/**
 * <p>An object that contains the counts of aggregated finding per severity.</p>
 * @public
 */
export interface SeverityCounts {
  /**
   * <p>The total count of findings from all severities.</p>
   * @public
   */
  all?: number | undefined;

  /**
   * <p>The total count of medium severity findings.</p>
   * @public
   */
  medium?: number | undefined;

  /**
   * <p>The total count of high severity findings.</p>
   * @public
   */
  high?: number | undefined;

  /**
   * <p>The total count of critical severity findings.</p>
   * @public
   */
  critical?: number | undefined;
}

/**
 * <p>An aggregation of findings by Amazon Web Services account ID.</p>
 * @public
 */
export interface AccountAggregationResponse {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The number of findings by severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * <p> The number of findings that have an exploit available. </p>
   * @public
   */
  exploitAvailableCount?: number | undefined;

  /**
   * <p> Details about the number of fixes. </p>
   * @public
   */
  fixAvailableCount?: number | undefined;
}

/**
 * <p>The CIS string filter.</p>
 * @public
 */
export interface CisStringFilter {
  /**
   * <p>The comparison value of the CIS string filter.</p>
   * @public
   */
  comparison: CisStringComparison | undefined;

  /**
   * <p>The value of the CIS string filter.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>An object that described the state of Amazon Inspector scans for an account.</p>
 * @public
 */
export interface State {
  /**
   * <p>The status of Amazon Inspector for the account.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>The error code explaining why the account failed to enable Amazon Inspector.</p>
   * @public
   */
  errorCode: ErrorCode | undefined;

  /**
   * <p>The error message received when the account failed to enable Amazon Inspector.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * <p>Details the state of Amazon Inspector for each resource type Amazon Inspector scans.</p>
 * @public
 */
export interface ResourceState {
  /**
   * <p>An object detailing the state of Amazon Inspector scanning for Amazon EC2 resources.</p>
   * @public
   */
  ec2: State | undefined;

  /**
   * <p>An object detailing the state of Amazon Inspector scanning for Amazon ECR resources.</p>
   * @public
   */
  ecr: State | undefined;

  /**
   * <p>An object that described the state of Amazon Inspector scans for an account.</p>
   * @public
   */
  lambda?: State | undefined;

  /**
   * <p>An object that described the state of Amazon Inspector scans for an account.</p>
   * @public
   */
  lambdaCode?: State | undefined;

  /**
   * <p>An object that described the state of Amazon Inspector scans for an account.</p>
   * @public
   */
  codeRepository?: State | undefined;
}

/**
 * <p>An object with details the status of an Amazon Web Services account within your Amazon Inspector
 *          environment.</p>
 * @public
 */
export interface AccountState {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>An object detailing the status of Amazon Inspector for the account.</p>
   * @public
   */
  state: State | undefined;

  /**
   * <p>An object detailing which resources Amazon Inspector is enabled to scan for the account.</p>
   * @public
   */
  resourceState: ResourceState | undefined;
}

/**
 * <p>An object that describes the details of a string filter.</p>
 * @public
 */
export interface StringFilter {
  /**
   * <p>The operator to use when comparing values in the filter.</p>
   * @public
   */
  comparison: StringComparison | undefined;

  /**
   * <p>The value to filter on.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The details that define an aggregation based on Amazon machine images (AMIs).</p>
 * @public
 */
export interface AmiAggregation {
  /**
   * <p>The IDs of AMIs to aggregate findings for.</p>
   * @public
   */
  amis?: StringFilter[] | undefined;

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: AmiSortBy | undefined;
}

/**
 * <p>An object that describes the details of a number filter.</p>
 * @public
 */
export interface NumberFilter {
  /**
   * <p>The highest number to be included in the filter.</p>
   * @public
   */
  upperInclusive?: number | undefined;

  /**
   * <p>The lowest number to be included in the filter.</p>
   * @public
   */
  lowerInclusive?: number | undefined;
}

/**
 * <p>Contains details on the time range used to filter findings.</p>
 * @public
 */
export interface DateFilter {
  /**
   * <p>A timestamp representing the start of the time period filtered on.</p>
   * @public
   */
  startInclusive?: Date | undefined;

  /**
   * <p>A timestamp representing the end of the time period filtered on.</p>
   * @public
   */
  endInclusive?: Date | undefined;
}

/**
 * <p>An aggregation of information about Amazon ECR containers.</p>
 * @public
 */
export interface AwsEcrContainerAggregation {
  /**
   * <p>The container resource IDs.</p>
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * <p>The image SHA values.</p>
   * @public
   */
  imageShas?: StringFilter[] | undefined;

  /**
   * <p>The container repositories.</p>
   * @public
   */
  repositories?: StringFilter[] | undefined;

  /**
   * <p>The architecture of the containers.</p>
   * @public
   */
  architectures?: StringFilter[] | undefined;

  /**
   * <p>The image tags.</p>
   * @public
   */
  imageTags?: StringFilter[] | undefined;

  /**
   * <p>The sort order (ascending or descending).</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort by.</p>
   * @public
   */
  sortBy?: AwsEcrContainerSortBy | undefined;

  /**
   * <p>The last time an Amazon ECR image was used in an Amazon ECS task or
   *             Amazon EKS pod.</p>
   * @public
   */
  lastInUseAt?: DateFilter[] | undefined;

  /**
   * <p>The number of Amazon ECS tasks or Amazon EKS pods where the Amazon ECR container image is in use.</p>
   * @public
   */
  inUseCount?: NumberFilter[] | undefined;
}

/**
 * <p>The details that define an aggregation based on code repositories.</p>
 * @public
 */
export interface CodeRepositoryAggregation {
  /**
   * <p>The project names to include in the aggregation results.</p>
   * @public
   */
  projectNames?: StringFilter[] | undefined;

  /**
   * <p>The repository provider types to include in the aggregation results.</p>
   * @public
   */
  providerTypes?: StringFilter[] | undefined;

  /**
   * <p>The order to sort results by (ascending or descending) in the code repository
   *          aggregation.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by in the code repository aggregation.</p>
   * @public
   */
  sortBy?: CodeRepositorySortBy | undefined;

  /**
   * <p>The resource IDs to include in the aggregation results.</p>
   * @public
   */
  resourceIds?: StringFilter[] | undefined;
}

/**
 * <p>An aggregation of information about container images.</p>
 * @public
 */
export interface ContainerImageAggregation {
  /**
   * <p>The resource IDs to aggregate findings for.</p>
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * <p>The image digests to aggregate findings for.</p>
   * @public
   */
  imageDigests?: StringFilter[] | undefined;

  /**
   * <p>The image repositories to aggregate findings for.</p>
   * @public
   */
  repositories?: StringFilter[] | undefined;

  /**
   * <p>The image registries to aggregate findings for.</p>
   * @public
   */
  registries?: StringFilter[] | undefined;

  /**
   * <p>The image architectures to aggregate findings for.</p>
   * @public
   */
  architectures?: StringFilter[] | undefined;

  /**
   * <p>The image tags to aggregate findings for.</p>
   * @public
   */
  imageTags?: StringFilter[] | undefined;

  /**
   * <p>The cloud providers to aggregate findings for. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – Findings from Amazon Web Services resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZURE</code> – Findings from Microsoft Azure resources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudProviders?: StringFilter[] | undefined;

  /**
   * <p>The cloud partitions to aggregate findings for. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aws</code> – Amazon Web Services commercial Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-cn</code> – Amazon Web Services China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-us-gov</code> – Amazon Web Services GovCloud (US) Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AzureCloud</code> – Azure commercial Regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudPartitions?: StringFilter[] | undefined;

  /**
   * <p>The cloud regions to aggregate findings for. The value format depends on the cloud provider:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region, such as <code>us-east-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>An Azure region, such as <code>eastus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudRegions?: StringFilter[] | undefined;

  /**
   * <p>The cloud organization IDs to aggregate findings for.</p>
   * @public
   */
  cloudOrgIds?: StringFilter[] | undefined;

  /**
   * <p>The cloud account IDs to aggregate findings for.</p>
   * @public
   */
  cloudAccountIds?: StringFilter[] | undefined;

  /**
   * <p>The last in-use timestamps to aggregate findings for.</p>
   * @public
   */
  lastInUseAt?: DateFilter[] | undefined;

  /**
   * <p>The in-use counts to aggregate findings for.</p>
   * @public
   */
  inUseCount?: NumberFilter[] | undefined;

  /**
   * <p>The order to sort results by. Valid values are <code>ASC</code> and <code>DESC</code>.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by. Specify a field name from the aggregation response, such as <code>CRITICAL</code>, <code>HIGH</code>, or <code>ALL</code>.</p>
   * @public
   */
  sortBy?: ContainerImageSortBy | undefined;
}

/**
 * <p>An object that describes details of a map filter.</p>
 * @public
 */
export interface MapFilter {
  /**
   * <p>The operator to use when comparing values in the filter.</p>
   * @public
   */
  comparison: MapComparison | undefined;

  /**
   * <p>The tag key used in the filter.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag value used in the filter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The details that define an aggregation based on Amazon EC2 instances.</p>
 * @public
 */
export interface Ec2InstanceAggregation {
  /**
   * <p>The AMI IDs associated with the Amazon EC2 instances to aggregate findings for.</p>
   * @public
   */
  amis?: StringFilter[] | undefined;

  /**
   * <p>The operating system types to aggregate findings for. Valid values must be uppercase and
   *          underscore separated, examples are <code>ORACLE_LINUX_7</code> and
   *             <code>ALPINE_LINUX_3_8</code>.</p>
   * @public
   */
  operatingSystems?: StringFilter[] | undefined;

  /**
   * <p>The Amazon EC2 instance IDs to aggregate findings for.</p>
   * @public
   */
  instanceIds?: StringFilter[] | undefined;

  /**
   * <p>The Amazon EC2 instance tags to aggregate findings for.</p>
   * @public
   */
  instanceTags?: MapFilter[] | undefined;

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: Ec2InstanceSortBy | undefined;
}

/**
 * <p>The details that define an aggregation based on finding type.</p>
 * @public
 */
export interface FindingTypeAggregation {
  /**
   * <p>The finding type to aggregate.</p>
   * @public
   */
  findingType?: AggregationFindingType | undefined;

  /**
   * <p>The resource type to aggregate.</p>
   * @public
   */
  resourceType?: AggregationResourceType | undefined;

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: FindingTypeSortBy | undefined;
}

/**
 * <p>The details that define an aggregation based on container image layers.</p>
 * @public
 */
export interface ImageLayerAggregation {
  /**
   * <p>The repository associated with the container image hosting the layers.</p>
   * @public
   */
  repositories?: StringFilter[] | undefined;

  /**
   * <p>The ID of the container image layer.</p>
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * <p>The hashes associated with the layers.</p>
   * @public
   */
  layerHashes?: StringFilter[] | undefined;

  /**
   * <p>The cloud providers to aggregate findings for. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – Findings from Amazon Web Services resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZURE</code> – Findings from Microsoft Azure resources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudProviders?: StringFilter[] | undefined;

  /**
   * <p>The cloud account IDs to aggregate findings for.</p>
   * @public
   */
  cloudAccountIds?: StringFilter[] | undefined;

  /**
   * <p>The cloud organization IDs to aggregate findings for.</p>
   * @public
   */
  cloudOrgIds?: StringFilter[] | undefined;

  /**
   * <p>The cloud regions to aggregate findings for. The value format depends on the cloud provider:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region, such as <code>us-east-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>An Azure region, such as <code>eastus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudRegions?: StringFilter[] | undefined;

  /**
   * <p>The cloud partitions to aggregate findings for. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aws</code> – Amazon Web Services commercial Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-cn</code> – Amazon Web Services China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-us-gov</code> – Amazon Web Services GovCloud (US) Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AzureCloud</code> – Azure commercial Regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudPartitions?: StringFilter[] | undefined;

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: ImageLayerSortBy | undefined;
}

/**
 * <p>The details that define a findings aggregation based on Amazon Web Services Lambda
 *          functions.</p>
 * @public
 */
export interface LambdaFunctionAggregation {
  /**
   * <p>The resource IDs to include in the aggregation results.</p>
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * <p>The Amazon Web Services Lambda function names to include in the aggregation
   *          results.</p>
   * @public
   */
  functionNames?: StringFilter[] | undefined;

  /**
   * <p>Returns findings aggregated by Amazon Web Services Lambda function runtime
   *          environments.</p>
   * @public
   */
  runtimes?: StringFilter[] | undefined;

  /**
   * <p>The tags to include in the aggregation results.</p>
   * @public
   */
  functionTags?: MapFilter[] | undefined;

  /**
   * <p>The order to use for sorting the results.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The finding severity to use for sorting the results.</p>
   * @public
   */
  sortBy?: LambdaFunctionSortBy | undefined;
}

/**
 * <p>The details that define a findings aggregation based on an Amazon Web Services Lambda
 *          function's layers.</p>
 * @public
 */
export interface LambdaLayerAggregation {
  /**
   * <p>The names of the Amazon Web Services Lambda functions associated with the layers.</p>
   * @public
   */
  functionNames?: StringFilter[] | undefined;

  /**
   * <p>The resource IDs for the Amazon Web Services Lambda function layers.</p>
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Lambda function layer. </p>
   * @public
   */
  layerArns?: StringFilter[] | undefined;

  /**
   * <p>The order to use for sorting the results.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The finding severity to use for sorting the results.</p>
   * @public
   */
  sortBy?: LambdaLayerSortBy | undefined;
}

/**
 * <p>The details that define an aggregation based on operating system package type.</p>
 * @public
 */
export interface PackageAggregation {
  /**
   * <p>The names of packages to aggregate findings on.</p>
   * @public
   */
  packageNames?: StringFilter[] | undefined;

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: PackageSortBy | undefined;
}

/**
 * <p>The details that define an aggregation based on repository.</p>
 * @public
 */
export interface RepositoryAggregation {
  /**
   * <p>The names of repositories to aggregate findings on.</p>
   * @public
   */
  repositories?: StringFilter[] | undefined;

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: RepositorySortBy | undefined;
}

/**
 * <p>An aggregation of information about serverless functions.</p>
 * @public
 */
export interface ServerlessFunctionAggregation {
  /**
   * <p>The resource IDs to aggregate findings for.</p>
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * <p>The function names to aggregate findings for.</p>
   * @public
   */
  functionNames?: StringFilter[] | undefined;

  /**
   * <p>The runtimes to aggregate findings for.</p>
   * @public
   */
  runtimes?: StringFilter[] | undefined;

  /**
   * <p>The function tags to aggregate findings for.</p>
   * @public
   */
  functionTags?: MapFilter[] | undefined;

  /**
   * <p>The cloud providers to aggregate findings for. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – Findings from Amazon Web Services resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZURE</code> – Findings from Microsoft Azure resources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudProviders?: StringFilter[] | undefined;

  /**
   * <p>The cloud partitions to aggregate findings for. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aws</code> – Amazon Web Services commercial Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-cn</code> – Amazon Web Services China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-us-gov</code> – Amazon Web Services GovCloud (US) Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AzureCloud</code> – Azure commercial Regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudPartitions?: StringFilter[] | undefined;

  /**
   * <p>The cloud regions to aggregate findings for. The value format depends on the cloud provider:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region, such as <code>us-east-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>An Azure region, such as <code>eastus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudRegions?: StringFilter[] | undefined;

  /**
   * <p>The cloud organization IDs to aggregate findings for.</p>
   * @public
   */
  cloudOrgIds?: StringFilter[] | undefined;

  /**
   * <p>The cloud account IDs to aggregate findings for.</p>
   * @public
   */
  cloudAccountIds?: StringFilter[] | undefined;

  /**
   * <p>The order to sort results by. Valid values are <code>ASC</code> and <code>DESC</code>.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by. Specify a field name from the aggregation response, such as <code>CRITICAL</code>, <code>HIGH</code>, or <code>ALL</code>.</p>
   * @public
   */
  sortBy?: ServerlessFunctionSortBy | undefined;
}

/**
 * <p>The details that define an aggregation based on finding title.</p>
 * @public
 */
export interface TitleAggregation {
  /**
   * <p>The finding titles to aggregate on.</p>
   * @public
   */
  titles?: StringFilter[] | undefined;

  /**
   * <p>The vulnerability IDs of the findings.</p>
   * @public
   */
  vulnerabilityIds?: StringFilter[] | undefined;

  /**
   * <p>The resource type to aggregate on.</p>
   * @public
   */
  resourceType?: AggregationResourceType | undefined;

  /**
   * <p>The type of finding to aggregate on.</p>
   * @public
   */
  findingType?: AggregationFindingType | undefined;

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: TitleSortBy | undefined;
}

/**
 * <p>An aggregation of information about VM instances.</p>
 * @public
 */
export interface VmInstanceAggregation {
  /**
   * <p>The resource IDs to aggregate findings for.</p>
   * @public
   */
  resourceIds?: StringFilter[] | undefined;

  /**
   * <p>The operating systems to aggregate findings for.</p>
   * @public
   */
  operatingSystems?: StringFilter[] | undefined;

  /**
   * <p>The instance tags to aggregate findings for.</p>
   * @public
   */
  instanceTags?: MapFilter[] | undefined;

  /**
   * <p>The VM image references to aggregate findings for.</p>
   * @public
   */
  vmImageReferences?: StringFilter[] | undefined;

  /**
   * <p>The cloud providers to aggregate findings for. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – Findings from Amazon Web Services resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZURE</code> – Findings from Microsoft Azure resources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudProviders?: StringFilter[] | undefined;

  /**
   * <p>The cloud partitions to aggregate findings for. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aws</code> – Amazon Web Services commercial Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-cn</code> – Amazon Web Services China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-us-gov</code> – Amazon Web Services GovCloud (US) Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AzureCloud</code> – Azure commercial Regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudPartitions?: StringFilter[] | undefined;

  /**
   * <p>The cloud regions to aggregate findings for. The value format depends on the cloud provider:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region, such as <code>us-east-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>An Azure region, such as <code>eastus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudRegions?: StringFilter[] | undefined;

  /**
   * <p>The cloud organization IDs to aggregate findings for.</p>
   * @public
   */
  cloudOrgIds?: StringFilter[] | undefined;

  /**
   * <p>The cloud account IDs to aggregate findings for.</p>
   * @public
   */
  cloudAccountIds?: StringFilter[] | undefined;

  /**
   * <p>The order to sort results by. Valid values are <code>ASC</code> and <code>DESC</code>.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by. Specify a field name from the aggregation response, such as <code>CRITICAL</code>, <code>HIGH</code>, <code>ALL</code>, or <code>NETWORK_FINDINGS</code>.</p>
   * @public
   */
  sortBy?: VmInstanceSortBy | undefined;
}

/**
 * <p>Contains details about an aggregation request.</p>
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
   * <p>An object that contains details about an aggregation request based on Amazon Web Services account
   *          IDs.</p>
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
   * <p>An object that contains details about an aggregation request based on Amazon Machine
   *          Images (AMIs).</p>
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
   * <p>An object that contains details about an aggregation request based on Amazon ECR container
   *          images.</p>
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
   * <p>An object that contains details about an aggregation request based on Amazon EC2
   *          instances.</p>
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
   * <p>An object that contains details about an aggregation request based on finding
   *          types.</p>
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
   * <p>An object that contains details about an aggregation request based on container image
   *          layers.</p>
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
   * <p>An object that contains details about an aggregation request based on operating system
   *          package type.</p>
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
   * <p>An object that contains details about an aggregation request based on Amazon ECR
   *          repositories.</p>
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
   * <p>An object that contains details about an aggregation request based on finding
   *          title.</p>
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
   * <p>Returns an object with findings aggregated by Amazon Web Services Lambda layer.</p>
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
   * <p>Returns an object with findings aggregated by Amazon Web Services Lambda function.</p>
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
   * <p>An object that contains details about an aggregation request based on code
   *          repositories.</p>
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
   * <p>An object that contains details about an aggregation request based on virtual machine (VM) instances.</p>
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
   * <p>An object that contains details about an aggregation request based on container images.</p>
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
   * <p>An object that contains details about an aggregation request based on serverless functions.</p>
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
 * <p>A response that contains the results of a finding aggregation by AMI.</p>
 * @public
 */
export interface AmiAggregationResponse {
  /**
   * <p>The ID of the AMI that findings were aggregated for.</p>
   * @public
   */
  ami: string | undefined;

  /**
   * <p>The Amazon Web Services account ID for the AMI.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The cloud service provider associated with this Amazon Machine Image (AMI) aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – Findings from Amazon Web Services resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZURE</code> – Findings from Microsoft Azure resources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudProvider?: Provider | undefined;

  /**
   * <p>The cloud infrastructure partition associated with this AMI aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aws</code> – Amazon Web Services commercial Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-cn</code> – Amazon Web Services China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-us-gov</code> – Amazon Web Services GovCloud (US) Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AzureCloud</code> – Azure commercial Regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * <p>The cloud Region associated with this AMI aggregation. The value format depends on the cloud provider:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region, such as <code>us-east-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>An Azure region, such as <code>eastus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * <p>The cloud organization ID for the AMI aggregation.</p>
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * <p>The cloud account ID for the AMI aggregation.</p>
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * <p>An object that contains the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * <p>The IDs of Amazon EC2 instances using this AMI.</p>
   * @public
   */
  affectedInstances?: number | undefined;
}

/**
 * <p>An aggregation of information about Amazon ECR containers.</p>
 * @public
 */
export interface AwsEcrContainerAggregationResponse {
  /**
   * <p>The resource ID of the container.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The SHA value of the container image.</p>
   * @public
   */
  imageSha?: string | undefined;

  /**
   * <p>The container repository.</p>
   * @public
   */
  repository?: string | undefined;

  /**
   * <p>The architecture of the container.</p>
   * @public
   */
  architecture?: string | undefined;

  /**
   * <p>The container image stags.</p>
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account that owns the container.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The number of finding by severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * <p>The last time an Amazon ECR image was used in an Amazon ECS task or
   *             Amazon EKS pod.</p>
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * <p>The number of Amazon ECS tasks or Amazon EKS pods where the Amazon ECR container image is in use.</p>
   * @public
   */
  inUseCount?: number | undefined;
}

/**
 * <p>A response that contains the results of a finding aggregation by code repository.</p>
 * @public
 */
export interface CodeRepositoryAggregationResponse {
  /**
   * <p>The names of the projects associated with the code repository.</p>
   * @public
   */
  projectNames: string | undefined;

  /**
   * <p>The type of repository provider for the code repository.</p>
   * @public
   */
  providerType?: string | undefined;

  /**
   * <p>An object that contains the counts of aggregated finding per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * <p>The number of active findings that have an exploit available for the code
   *          repository.</p>
   * @public
   */
  exploitAvailableActiveFindingsCount?: number | undefined;

  /**
   * <p>The number of active findings that have a fix available for the code repository.</p>
   * @public
   */
  fixAvailableActiveFindingsCount?: number | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the code repository.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The resource ID of the code repository.</p>
   * @public
   */
  resourceId?: string | undefined;
}

/**
 * <p>A response that contains the results of a container image aggregation.</p>
 * @public
 */
export interface ContainerImageAggregationResponse {
  /**
   * <p>The resource ID for the container image.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The cloud service provider associated with this container image aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – Findings from Amazon Web Services resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZURE</code> – Findings from Microsoft Azure resources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudProvider?: Provider | undefined;

  /**
   * <p>The cloud account ID for the container image aggregation.</p>
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * <p>The cloud infrastructure partition associated with this container image aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aws</code> – Amazon Web Services commercial Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-cn</code> – Amazon Web Services China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-us-gov</code> – Amazon Web Services GovCloud (US) Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AzureCloud</code> – Azure commercial Regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * <p>The cloud Region associated with this container image aggregation. The value format depends on the cloud provider:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region, such as <code>us-east-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>An Azure region, such as <code>eastus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * <p>The cloud organization ID for the container image aggregation.</p>
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * <p>The image digest for the container image.</p>
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * <p>The repository for the container image.</p>
   * @public
   */
  repository?: string | undefined;

  /**
   * <p>The registry for the container image.</p>
   * @public
   */
  registry?: string | undefined;

  /**
   * <p>The architecture of the container image.</p>
   * @public
   */
  architecture?: string | undefined;

  /**
   * <p>The image tags attached to the container image.</p>
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * <p>The account ID associated with the container image.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>An object that contains the counts of aggregated finding per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * <p>The last time the container image was in use.</p>
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * <p>The number of times the container image is in use.</p>
   * @public
   */
  inUseCount?: number | undefined;

  /**
   * <p>The number of active findings with an exploit available for the container image.</p>
   * @public
   */
  exploitAvailableActiveFindingsCount?: number | undefined;

  /**
   * <p>The number of active findings with a fix available for the container image.</p>
   * @public
   */
  fixAvailableActiveFindingsCount?: number | undefined;
}

/**
 * <p>A response that contains the results of a finding aggregation by Amazon EC2 instance.</p>
 * @public
 */
export interface Ec2InstanceAggregationResponse {
  /**
   * <p>The Amazon EC2 instance ID.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>The Amazon Machine Image (AMI) of the Amazon EC2 instance.</p>
   * @public
   */
  ami?: string | undefined;

  /**
   * <p>The operating system of the Amazon EC2 instance.</p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>The tags attached to the instance.</p>
   * @public
   */
  instanceTags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Web Services account for the Amazon EC2 instance.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>An object that contains the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * <p>The number of network findings for the Amazon EC2 instance.</p>
   * @public
   */
  networkFindings?: number | undefined;
}

/**
 * <p>A response that contains the results of a finding type aggregation.</p>
 * @public
 */
export interface FindingTypeAggregationResponse {
  /**
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * <p>The number of findings that have an exploit available.</p>
   * @public
   */
  exploitAvailableCount?: number | undefined;

  /**
   * <p> Details about the number of fixes. </p>
   * @public
   */
  fixAvailableCount?: number | undefined;

  /**
   * <p>The cloud service provider associated with this finding type aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – Findings from Amazon Web Services resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZURE</code> – Findings from Microsoft Azure resources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudProvider?: string | undefined;

  /**
   * <p>The cloud account ID for the finding type aggregation.</p>
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * <p>The cloud organization ID for the finding type aggregation.</p>
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * <p>The cloud Region associated with this finding type aggregation. The value format depends on the cloud provider:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region, such as <code>us-east-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>An Azure region, such as <code>eastus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * <p>The cloud infrastructure partition associated with this finding type aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aws</code> – Amazon Web Services commercial Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-cn</code> – Amazon Web Services China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-us-gov</code> – Amazon Web Services GovCloud (US) Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AzureCloud</code> – Azure commercial Regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudPartition?: string | undefined;
}

/**
 * <p>A response that contains the results of a finding aggregation by image layer.</p>
 * @public
 */
export interface ImageLayerAggregationResponse {
  /**
   * <p>The repository the layer resides in.</p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>The resource ID of the container image layer.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The layer hash.</p>
   * @public
   */
  layerHash: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the container image hosting the layer
   *          image.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The cloud service provider associated with this image layer aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – Findings from Amazon Web Services resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZURE</code> – Findings from Microsoft Azure resources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudProvider?: string | undefined;

  /**
   * <p>The cloud account ID for the image layer aggregation.</p>
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * <p>The cloud organization ID for the image layer aggregation.</p>
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * <p>The cloud Region associated with this image layer aggregation. The value format depends on the cloud provider:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region, such as <code>us-east-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>An Azure region, such as <code>eastus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * <p>The cloud infrastructure partition associated with this image layer aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aws</code> – Amazon Web Services commercial Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-cn</code> – Amazon Web Services China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-us-gov</code> – Amazon Web Services GovCloud (US) Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AzureCloud</code> – Azure commercial Regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * <p>An object that represents the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * <p>A response that contains the results of an Amazon Web Services Lambda function finding
 *          aggregation.</p>
 * @public
 */
export interface LambdaFunctionAggregationResponse {
  /**
   * <p>The resource IDs included in the aggregation results.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The Amazon Web Services Lambda function names included in the aggregation results.</p>
   * @public
   */
  functionName?: string | undefined;

  /**
   * <p>The runtimes included in the aggregation results.</p>
   * @public
   */
  runtime?: string | undefined;

  /**
   * <p>The tags included in the aggregation results.</p>
   * @public
   */
  lambdaTags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Amazon Web Services Lambda
   *          function. </p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>An object that contains the counts of aggregated finding per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * <p>The date that the Amazon Web Services Lambda function included in the aggregation results
   *          was last changed.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * <p>A response that contains the results of an Amazon Web Services Lambda function layer
 *          finding aggregation.</p>
 * @public
 */
export interface LambdaLayerAggregationResponse {
  /**
   * <p>The names of the Amazon Web Services Lambda functions associated with the layers.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The Resource ID of the Amazon Web Services Lambda function layer.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Lambda function layer.</p>
   * @public
   */
  layerArn: string | undefined;

  /**
   * <p>The account ID of the Amazon Web Services Lambda function layer.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>An object that contains the counts of aggregated finding per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * <p>A response that contains the results of a finding aggregation by image layer.</p>
 * @public
 */
export interface PackageAggregationResponse {
  /**
   * <p>The name of the operating system package.</p>
   * @public
   */
  packageName: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>An object that contains the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * <p>A response that contains details on the results of a finding aggregation by
 *          repository.</p>
 * @public
 */
export interface RepositoryAggregationResponse {
  /**
   * <p>The name of the repository associated with the findings.</p>
   * @public
   */
  repository: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The cloud service provider associated with this repository aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – Findings from Amazon Web Services resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZURE</code> – Findings from Microsoft Azure resources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudProvider?: Provider | undefined;

  /**
   * <p>The cloud infrastructure partition associated with this repository aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aws</code> – Amazon Web Services commercial Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-cn</code> – Amazon Web Services China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-us-gov</code> – Amazon Web Services GovCloud (US) Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AzureCloud</code> – Azure commercial Regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * <p>The cloud Region associated with this repository aggregation. The value format depends on the cloud provider:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region, such as <code>us-east-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>An Azure region, such as <code>eastus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * <p>The cloud organization ID for the repository aggregation.</p>
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * <p>The cloud account ID for the repository aggregation.</p>
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * <p>An object that represent the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * <p>The number of container images impacted by the findings.</p>
   * @public
   */
  affectedImages?: number | undefined;
}

/**
 * <p>A response that contains the results of a serverless function aggregation.</p>
 * @public
 */
export interface ServerlessFunctionAggregationResponse {
  /**
   * <p>The resource ID for the serverless function.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The cloud service provider associated with this serverless function aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – Findings from Amazon Web Services resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZURE</code> – Findings from Microsoft Azure resources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudProvider?: Provider | undefined;

  /**
   * <p>The cloud account ID for the serverless function aggregation.</p>
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * <p>The cloud infrastructure partition associated with this serverless function aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aws</code> – Amazon Web Services commercial Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-cn</code> – Amazon Web Services China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-us-gov</code> – Amazon Web Services GovCloud (US) Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AzureCloud</code> – Azure commercial Regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * <p>The cloud Region associated with this serverless function aggregation. The value format depends on the cloud provider:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region, such as <code>us-east-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>An Azure region, such as <code>eastus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * <p>The cloud organization ID for the serverless function aggregation.</p>
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * <p>The name of the serverless function.</p>
   * @public
   */
  functionName?: string | undefined;

  /**
   * <p>The runtime of the serverless function.</p>
   * @public
   */
  runtime?: string | undefined;

  /**
   * <p>The tags attached to the serverless function.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The account ID associated with the serverless function.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>An object that contains the counts of aggregated finding per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * <p>The date and time the serverless function was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>The number of active findings with an exploit available for the serverless function.</p>
   * @public
   */
  exploitAvailableActiveFindingsCount?: number | undefined;

  /**
   * <p>The number of active findings with a fix available for the serverless function.</p>
   * @public
   */
  fixAvailableActiveFindingsCount?: number | undefined;
}

/**
 * <p>A response that contains details on the results of a finding aggregation by
 *          title.</p>
 * @public
 */
export interface TitleAggregationResponse {
  /**
   * <p>The title that the findings were aggregated on.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The vulnerability ID of the finding.</p>
   * @public
   */
  vulnerabilityId?: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>An object that represent the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;
}

/**
 * <p>A response that contains the results of a VM instance aggregation.</p>
 * @public
 */
export interface VmInstanceAggregationResponse {
  /**
   * <p>The resource ID for the VM instance.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The cloud service provider associated with this VM instance aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AWS</code> – Findings from Amazon Web Services resources.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZURE</code> – Findings from Microsoft Azure resources.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudProvider?: Provider | undefined;

  /**
   * <p>The cloud account ID for the VM instance aggregation.</p>
   * @public
   */
  cloudAccountId?: string | undefined;

  /**
   * <p>The cloud infrastructure partition associated with this VM instance aggregation. Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aws</code> – Amazon Web Services commercial Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-cn</code> – Amazon Web Services China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aws-us-gov</code> – Amazon Web Services GovCloud (US) Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AzureCloud</code> – Azure commercial Regions.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudPartition?: string | undefined;

  /**
   * <p>The cloud Region associated with this VM instance aggregation. The value format depends on the cloud provider:</p>
   *          <ul>
   *             <li>
   *                <p>An Amazon Web Services Region, such as <code>us-east-1</code>.</p>
   *             </li>
   *             <li>
   *                <p>An Azure region, such as <code>eastus</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  cloudRegion?: string | undefined;

  /**
   * <p>The cloud organization ID for the VM instance aggregation.</p>
   * @public
   */
  cloudOrgId?: string | undefined;

  /**
   * <p>The VM image reference for the VM instance.</p>
   * @public
   */
  vmImageReference?: string | undefined;

  /**
   * <p>The operating system of the VM instance.</p>
   * @public
   */
  operatingSystem?: string | undefined;

  /**
   * <p>The tags attached to the VM instance.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The account ID associated with the VM instance.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>An object that contains the counts of aggregated finding per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts | undefined;

  /**
   * <p>The number of network findings for the VM instance. This field applies only to Amazon Web Services resources.</p>
   * @public
   */
  networkFindings?: number | undefined;

  /**
   * <p>The number of active findings with an exploit available for the VM instance.</p>
   * @public
   */
  exploitAvailableActiveFindingsCount?: number | undefined;

  /**
   * <p>The number of active findings with a fix available for the VM instance.</p>
   * @public
   */
  fixAvailableActiveFindingsCount?: number | undefined;
}

/**
 * <p>A structure that contains details about the results of an aggregation type.</p>
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
   * <p>An object that contains details about an aggregation response based on Amazon Web Services account
   *          IDs.</p>
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
   * <p>An object that contains details about an aggregation response based on Amazon Machine
   *          Images (AMIs).</p>
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
   * <p>An object that contains details about an aggregation response based on Amazon ECR container
   *          images.</p>
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
   * <p>An object that contains details about an aggregation response based on Amazon EC2
   *          instances.</p>
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
   * <p>An object that contains details about an aggregation response based on finding
   *          types.</p>
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
   * <p>An object that contains details about an aggregation response based on container image
   *          layers.</p>
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
   * <p>An object that contains details about an aggregation response based on operating system
   *          package type.</p>
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
   * <p>An object that contains details about an aggregation response based on Amazon ECR
   *          repositories.</p>
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
   * <p>An object that contains details about an aggregation response based on finding
   *          title.</p>
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
   * <p>An aggregation of findings by Amazon Web Services Lambda layer.</p>
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
   * <p>An aggregation of findings by Amazon Web Services Lambda function.</p>
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
   * <p>An object that contains details about an aggregation response based on code
   *          repositories.</p>
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
   * <p>An object that contains details about an aggregation response based on VM instances.</p>
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
   * <p>An object that contains details about an aggregation response based on container images.</p>
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
   * <p>An object that contains details about an aggregation response based on serverless functions.</p>
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
 * <p>Identifies a specific resource in a code repository that will be scanned.</p>
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
   * <p>The unique identifier of the project in the code repository.</p>
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
 * <p>Contains details about a request to associate a code repository with a scan
 *          configuration.</p>
 * @public
 */
export interface AssociateConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * <p>Identifies a specific resource in a code repository that will be scanned.</p>
   * @public
   */
  resource: CodeSecurityResource | undefined;
}

/**
 * @public
 */
export interface AssociateMemberRequest {
  /**
   * <p>The Amazon Web Services account ID of the member account to be associated.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberResponse {
  /**
   * <p>The Amazon Web Services account ID of the successfully associated member account.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p>An object that describes a validation exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the validation exception.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The validation exception message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The Amazon Web Services Threat Intel Group (ATIG) details for a specific
 *          vulnerability.</p>
 * @public
 */
export interface AtigData {
  /**
   * <p>The date and time this vulnerability was first observed.</p>
   * @public
   */
  firstSeen?: Date | undefined;

  /**
   * <p>The date and time this vulnerability was last observed.</p>
   * @public
   */
  lastSeen?: Date | undefined;

  /**
   * <p>The commercial sectors this vulnerability targets.</p>
   * @public
   */
  targets?: string[] | undefined;

  /**
   * <p>The <a href="https://attack.mitre.org/">MITRE ATT&amp;CK</a> tactics, techniques,
   *          and procedures (TTPs) associated with vulnerability.</p>
   * @public
   */
  ttps?: string[] | undefined;
}

/**
 * <p>Represents which scan types are automatically enabled for new members of your Amazon Inspector
 *          organization.</p>
 * @public
 */
export interface AutoEnable {
  /**
   * <p>Represents whether Amazon EC2 scans are automatically enabled for new members of your Amazon Inspector
   *          organization.</p>
   * @public
   */
  ec2: boolean | undefined;

  /**
   * <p>Represents whether Amazon ECR scans are automatically enabled for new members of your Amazon Inspector
   *          organization.</p>
   * @public
   */
  ecr: boolean | undefined;

  /**
   * <p>Represents whether Amazon Web Services Lambda standard scans are automatically enabled
   *          for new members of your Amazon Inspector organization. </p>
   * @public
   */
  lambda?: boolean | undefined;

  /**
   * <p>Represents whether Lambda code scans are automatically enabled for new members of your
   *          Amazon Inspector organization. </p>
   * @public
   */
  lambdaCode?: boolean | undefined;

  /**
   * <p>Represents whether code repository scans are automatically enabled for new members of
   *          your Amazon Inspector organization.</p>
   * @public
   */
  codeRepository?: boolean | undefined;
}

/**
 * <p>A filter that matches connectors by the ARN of the associated Amazon Web Services Config connector.</p>
 * @public
 */
export interface AwsConfigConnectorArnFilter {
  /**
   * <p>The comparison operator for the Amazon Web Services Config connector ARN filter.</p>
   * @public
   */
  comparison: AwsConfigConnectorArnComparison | undefined;

  /**
   * <p>The Amazon Web Services Config connector ARN value to filter by.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Details of the Amazon EC2 instance involved in a finding.</p>
 * @public
 */
export interface AwsEc2InstanceDetails {
  /**
   * <p>The type of the Amazon EC2 instance.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The image ID of the Amazon EC2 instance.</p>
   * @public
   */
  imageId?: string | undefined;

  /**
   * <p>The IPv4 addresses of the Amazon EC2 instance.</p>
   * @public
   */
  ipV4Addresses?: string[] | undefined;

  /**
   * <p>The IPv6 addresses of the Amazon EC2 instance.</p>
   * @public
   */
  ipV6Addresses?: string[] | undefined;

  /**
   * <p>The name of the key pair used to launch the Amazon EC2 instance.</p>
   * @public
   */
  keyName?: string | undefined;

  /**
   * <p>The IAM instance profile ARN of the Amazon EC2 instance.</p>
   * @public
   */
  iamInstanceProfileArn?: string | undefined;

  /**
   * <p>The VPC ID of the Amazon EC2 instance.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The subnet ID of the Amazon EC2 instance.</p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The date and time the Amazon EC2 instance was launched at.</p>
   * @public
   */
  launchedAt?: Date | undefined;

  /**
   * <p>The platform of the Amazon EC2 instance.</p>
   * @public
   */
  platform?: string | undefined;
}

/**
 * <p>The image details of the Amazon ECR container image.</p>
 * @public
 */
export interface AwsEcrContainerImageDetails {
  /**
   * <p>The name of the repository the Amazon ECR container image resides in.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The image tags attached to the Amazon ECR container image.</p>
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * <p>The date and time the Amazon ECR container image was pushed.</p>
   * @public
   */
  pushedAt?: Date | undefined;

  /**
   * <p>The image author of the Amazon ECR container image.</p>
   * @public
   */
  author?: string | undefined;

  /**
   * <p>The architecture of the Amazon ECR container image.</p>
   * @public
   */
  architecture?: string | undefined;

  /**
   * <p>The image hash of the Amazon ECR container image.</p>
   * @public
   */
  imageHash: string | undefined;

  /**
   * <p>The registry for the Amazon ECR container image.</p>
   * @public
   */
  registry: string | undefined;

  /**
   * <p>The platform of the Amazon ECR container image.</p>
   * @public
   */
  platform?: string | undefined;

  /**
   * <p>The last time an Amazon ECR image was used in an Amazon ECS task or
   *             Amazon EKS pod.</p>
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * <p>The number of Amazon ECS tasks or Amazon EKS pods where the Amazon ECR container image is in use.</p>
   * @public
   */
  inUseCount?: number | undefined;
}

/**
 * <p>Metadata about tasks where an image was in use.</p>
 * @public
 */
export interface AwsEcsMetadataDetails {
  /**
   * <p>The details group information for a task in a cluster.</p>
   * @public
   */
  detailsGroup: string | undefined;

  /**
   * <p>The task definition ARN.</p>
   * @public
   */
  taskDefinitionArn: string | undefined;
}

/**
 * <p>Information about the workload.</p>
 * @public
 */
export interface AwsEksWorkloadInfo {
  /**
   * <p>The name of the workload.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The workload type.</p>
   * @public
   */
  type: string | undefined;
}

/**
 * <p>The metadata for an Amazon EKS pod where an Amazon ECR image is in
 *          use.</p>
 * @public
 */
export interface AwsEksMetadataDetails {
  /**
   * <p>The namespace for an Amazon EKS cluster.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>The list of workloads.</p>
   * @public
   */
  workloadInfoList?: AwsEksWorkloadInfo[] | undefined;
}

/**
 * <p>The VPC security groups and subnets that are attached to an Amazon Web Services Lambda
 *          function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
 * @public
 */
export interface LambdaVpcConfig {
  /**
   * <p>A list of VPC subnet IDs.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The VPC security groups and subnets that are attached to an Amazon Web Services Lambda
   *          function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  vpcId?: string | undefined;
}

/**
 * <p> A summary of information about the Amazon Web Services Lambda function.</p>
 * @public
 */
export interface AwsLambdaFunctionDetails {
  /**
   * <p>The name of the Amazon Web Services Lambda function.</p>
   * @public
   */
  functionName: string | undefined;

  /**
   * <p>The runtime environment for the Amazon Web Services Lambda function.</p>
   * @public
   */
  runtime: Runtime | undefined;

  /**
   * <p>The SHA256 hash of the Amazon Web Services Lambda function's deployment package.</p>
   * @public
   */
  codeSha256: string | undefined;

  /**
   * <p>The version of the Amazon Web Services Lambda function.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The Amazon Web Services Lambda function's execution role.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The Amazon Web Services Lambda function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html"> layers</a>. A
   *          Lambda function can have up to five layers.</p>
   * @public
   */
  layers?: string[] | undefined;

  /**
   * <p>The Amazon Web Services Lambda function's networking configuration.</p>
   * @public
   */
  vpcConfig?: LambdaVpcConfig | undefined;

  /**
   * <p>The type of deployment package. Set to <code>Image</code> for container image and set
   *             <code>Zip</code> for .zip file archive.</p>
   * @public
   */
  packageType?: PackageType | undefined;

  /**
   * <p>The instruction set architecture that the Amazon Web Services Lambda function supports.
   *          Architecture is a string array with one of the valid values. The default architecture value
   *          is <code>x86_64</code>.</p>
   * @public
   */
  architectures?: Architecture[] | undefined;

  /**
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601
   *          format</a>
   *          </p>
   * @public
   */
  lastModifiedAt?: Date | undefined;
}

/**
 * <p>The scope of resources to scan for a single scanning type. Provide this as part of an <code>AzureScopeConfigurationInput</code> when you create or update a connector.</p>
 * @public
 */
export interface ScopeConfigurationInput {
  /**
   * <p>The type of scope. Valid values are <code>TENANT</code>, which scans all resources in the Azure tenant, and <code>SUBSCRIPTION</code>, which scans only the resources in the specified Azure subscriptions.</p>
   * @public
   */
  scopeType: ScopeType | undefined;

  /**
   * <p>The list of scope values. For subscription-level scope, these are Azure subscription IDs.</p>
   * @public
   */
  scopeValues?: string[] | undefined;
}

/**
 * <p>The scope of Azure resources to scan, defined separately for VM, container image, and serverless scanning. Provide this when you create or update an Azure connector.</p>
 * @public
 */
export interface AzureScopeConfigurationInput {
  /**
   * <p>The scope configuration input for VM scanning.</p>
   * @public
   */
  vmScanning?: ScopeConfigurationInput | undefined;

  /**
   * <p>The scope configuration input for container image scanning.</p>
   * @public
   */
  containerImageScanning?: ScopeConfigurationInput | undefined;

  /**
   * <p>The scope configuration input for serverless scanning.</p>
   * @public
   */
  serverlessScanning?: ScopeConfigurationInput | undefined;
}

/**
 * <p>The Azure-specific configuration details for creating a connector, including the Amazon Web Services Config connector association, scan scope, and regions to scan.</p>
 * @public
 */
export interface AzureProviderDetailCreate {
  /**
   * <p>The ARN of the Amazon Web Services Config connector to associate with this connector.</p>
   * @public
   */
  awsConfigConnectorArn: string | undefined;

  /**
   * <p>The scope configuration that defines which Azure resources to scan.</p>
   * @public
   */
  scopeConfiguration: AzureScopeConfigurationInput | undefined;

  /**
   * <p>The Azure regions to scan.</p>
   * @public
   */
  azureRegions: string[] | undefined;

  /**
   * <p>Specifies whether to automatically install the VM scanner on connected Azure resources. Defaults to <code>true</code>.</p>
   * @public
   */
  autoInstallVMScanner?: boolean | undefined;
}

/**
 * <p>The Azure-specific configuration details for updating a connector, including the scan scope and regions to scan.</p>
 * @public
 */
export interface AzureProviderDetailUpdate {
  /**
   * <p>The updated Azure regions to scan.</p>
   * @public
   */
  azureRegions?: string[] | undefined;

  /**
   * <p>The updated scope configuration that defines which Azure resources to scan.</p>
   * @public
   */
  scopeConfiguration?: AzureScopeConfigurationInput | undefined;

  /**
   * <p>Specifies whether to automatically install the VM scanner on connected Azure resources.</p>
   * @public
   */
  autoInstallVMScanner?: boolean | undefined;
}

/**
 * <p>The scope of resources that Amazon Inspector scans for a single scanning type, including the scope level, the targeted resources, and the current state.</p>
 * @public
 */
export interface ScopeConfiguration {
  /**
   * <p>The type of scope. Valid values are <code>TENANT</code>, which scans all resources in the Azure tenant, and <code>SUBSCRIPTION</code>, which scans only the resources in the specified Azure subscriptions.</p>
   * @public
   */
  scopeType: ScopeType | undefined;

  /**
   * <p>The list of scope values. For subscription-level scope, these are Azure subscription IDs.</p>
   * @public
   */
  scopeValues?: string[] | undefined;

  /**
   * <p>The current state of the scope configuration.</p>
   * @public
   */
  state?: ScopeState | undefined;

  /**
   * <p>The reason for the current state of the scope configuration.</p>
   * @public
   */
  stateReason?: string | undefined;
}

/**
 * <p>The scope of Azure resources that Amazon Inspector scans, defined separately for VM, container image, and serverless scanning. Returned as part of a connector's configuration.</p>
 * @public
 */
export interface AzureScopeConfiguration {
  /**
   * <p>The scope configuration for VM scanning.</p>
   * @public
   */
  vmScanning?: ScopeConfiguration | undefined;

  /**
   * <p>The scope configuration for container image scanning.</p>
   * @public
   */
  containerImageScanning?: ScopeConfiguration | undefined;

  /**
   * <p>The scope configuration for serverless scanning.</p>
   * @public
   */
  serverlessScanning?: ScopeConfiguration | undefined;
}

/**
 * @public
 */
export interface BatchAssociateCodeSecurityScanConfigurationRequest {
  /**
   * <p>A list of code repositories to associate with the specified scan configuration.</p>
   * @public
   */
  associateConfigurationRequests: AssociateConfigurationRequest[] | undefined;
}

/**
 * <p>Details about a failed attempt to associate or disassociate a code repository with a
 *          scan configuration.</p>
 * @public
 */
export interface FailedAssociationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration that failed to be associated or
   *          disassociated.</p>
   * @public
   */
  scanConfigurationArn?: string | undefined;

  /**
   * <p>Identifies a specific resource in a code repository that will be scanned.</p>
   * @public
   */
  resource?: CodeSecurityResource | undefined;

  /**
   * <p>The status code indicating why the association or disassociation failed.</p>
   * @public
   */
  statusCode?: AssociationResultStatusCode | undefined;

  /**
   * <p>A message explaining why the association or disassociation failed.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * <p>Details about a successful association or disassociation between a code repository and a
 *          scan configuration.</p>
 * @public
 */
export interface SuccessfulAssociationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration that was successfully
   *          associated or disassociated.</p>
   * @public
   */
  scanConfigurationArn?: string | undefined;

  /**
   * <p>Identifies a specific resource in a code repository that will be scanned.</p>
   * @public
   */
  resource?: CodeSecurityResource | undefined;
}

/**
 * @public
 */
export interface BatchAssociateCodeSecurityScanConfigurationResponse {
  /**
   * <p>Details of any code repositories that failed to be associated with the scan
   *          configuration.</p>
   * @public
   */
  failedAssociations?: FailedAssociationResult[] | undefined;

  /**
   * <p>Details of code repositories that were successfully associated with the scan
   *          configuration.</p>
   * @public
   */
  successfulAssociations?: SuccessfulAssociationResult[] | undefined;
}

/**
 * <p>Contains details about a request to disassociate a code repository from a scan
 *          configuration.</p>
 * @public
 */
export interface DisassociateConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration to disassociate from a code
   *          repository.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * <p>Identifies a specific resource in a code repository that will be scanned.</p>
   * @public
   */
  resource: CodeSecurityResource | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateCodeSecurityScanConfigurationRequest {
  /**
   * <p>A list of code repositories to disassociate from the specified scan
   *          configuration.</p>
   * @public
   */
  disassociateConfigurationRequests: DisassociateConfigurationRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateCodeSecurityScanConfigurationResponse {
  /**
   * <p>Details of any code repositories that failed to be disassociated from the scan
   *          configuration.</p>
   * @public
   */
  failedAssociations?: FailedAssociationResult[] | undefined;

  /**
   * <p>Details of code repositories that were successfully disassociated from the scan
   *          configuration.</p>
   * @public
   */
  successfulAssociations?: SuccessfulAssociationResult[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAccountStatusRequest {
  /**
   * <p>The 12-digit Amazon Web Services account IDs of the accounts to retrieve Amazon Inspector status for.</p>
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * <p>An object with details on why an account failed to enable Amazon Inspector.</p>
 * @public
 */
export interface FailedAccount {
  /**
   * <p>The Amazon Web Services account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The status of Amazon Inspector for the account.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>An object detailing which resources Amazon Inspector is enabled to scan for the account.</p>
   * @public
   */
  resourceStatus?: ResourceStatus | undefined;

  /**
   * <p>The error code explaining why the account failed to enable Amazon Inspector.</p>
   * @public
   */
  errorCode: ErrorCode | undefined;

  /**
   * <p>The error message received when the account failed to enable Amazon Inspector.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchGetAccountStatusResponse {
  /**
   * <p>An array of objects that provide details on the status of Amazon Inspector for each of the
   *          requested accounts.</p>
   * @public
   */
  accounts: AccountState[] | undefined;

  /**
   * <p>An array of objects detailing any accounts that failed to enable Amazon Inspector and why.</p>
   * @public
   */
  failedAccounts?: FailedAccount[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCodeSnippetRequest {
  /**
   * <p>An array of finding ARNs for the findings you want to retrieve code snippets
   *          from.</p>
   * @public
   */
  findingArns: string[] | undefined;
}

/**
 * <p>Contains information on the lines of code associated with a code snippet.</p>
 * @public
 */
export interface CodeLine {
  /**
   * <p>The content of a line of code</p>
   * @public
   */
  content: string | undefined;

  /**
   * <p>The line number that a section of code is located at.</p>
   * @public
   */
  lineNumber: number | undefined;
}

/**
 * <p>A suggested fix for a vulnerability in your Lambda function code.</p>
 * @public
 */
export interface SuggestedFix {
  /**
   * <p>The fix's description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The fix's code.</p>
   * @public
   */
  code?: string | undefined;
}

/**
 * <p>Contains information on a code snippet retrieved by Amazon Inspector from a code vulnerability
 *          finding.</p>
 * @public
 */
export interface CodeSnippetResult {
  /**
   * <p>The ARN of a finding that the code snippet is associated with.</p>
   * @public
   */
  findingArn?: string | undefined;

  /**
   * <p>The line number of the first line of a code snippet.</p>
   * @public
   */
  startLine?: number | undefined;

  /**
   * <p>The line number of the last line of a code snippet.</p>
   * @public
   */
  endLine?: number | undefined;

  /**
   * <p>Contains information on the retrieved code snippet.</p>
   * @public
   */
  codeSnippet?: CodeLine[] | undefined;

  /**
   * <p>Details of a suggested code fix.</p>
   * @public
   */
  suggestedFixes?: SuggestedFix[] | undefined;
}

/**
 * <p>Contains information about any errors encountered while trying to retrieve a code
 *          snippet.</p>
 * @public
 */
export interface CodeSnippetError {
  /**
   * <p>The ARN of the finding that a code snippet couldn't be retrieved for.</p>
   * @public
   */
  findingArn: string | undefined;

  /**
   * <p>The error code for the error that prevented a code snippet from being retrieved.</p>
   * @public
   */
  errorCode: CodeSnippetErrorCode | undefined;

  /**
   * <p>The error message received when Amazon Inspector failed to retrieve a code snippet.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCodeSnippetResponse {
  /**
   * <p>The retrieved code snippets associated with the provided finding ARNs.</p>
   * @public
   */
  codeSnippetResults?: CodeSnippetResult[] | undefined;

  /**
   * <p>Any errors Amazon Inspector encountered while trying to retrieve the requested code
   *          snippets.</p>
   * @public
   */
  errors?: CodeSnippetError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetFindingDetailsRequest {
  /**
   * <p>A list of finding ARNs.</p>
   * @public
   */
  findingArns: string[] | undefined;
}

/**
 * <p>Details about an error encountered when trying to return vulnerability data for a
 *          finding.</p>
 * @public
 */
export interface FindingDetailsError {
  /**
   * <p>The finding ARN that returned an error.</p>
   * @public
   */
  findingArn: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode: FindingDetailsErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * <p>The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific
 *          vulnerability.</p>
 * @public
 */
export interface CisaData {
  /**
   * <p>The date and time CISA added this vulnerability to their catalogue.</p>
   * @public
   */
  dateAdded?: Date | undefined;

  /**
   * <p>The date and time CISA expects a fix to have been provided vulnerability.</p>
   * @public
   */
  dateDue?: Date | undefined;

  /**
   * <p>The remediation action recommended by CISA for this vulnerability.</p>
   * @public
   */
  action?: string | undefined;
}

/**
 * <p>Details of the evidence for a vulnerability identified in a finding.</p>
 * @public
 */
export interface Evidence {
  /**
   * <p>The evidence rule.</p>
   * @public
   */
  evidenceRule?: string | undefined;

  /**
   * <p>The evidence details.</p>
   * @public
   */
  evidenceDetail?: string | undefined;

  /**
   * <p>The evidence severity.</p>
   * @public
   */
  severity?: string | undefined;
}

/**
 * <p>Contains information on when this exploit was observed.</p>
 * @public
 */
export interface ExploitObserved {
  /**
   * <p>The date an time when the exploit was last seen.</p>
   * @public
   */
  lastSeen?: Date | undefined;

  /**
   * <p>The date an time when the exploit was first seen.</p>
   * @public
   */
  firstSeen?: Date | undefined;
}

/**
 * <p>Details of the vulnerability identified in a finding.</p>
 * @public
 */
export interface FindingDetail {
  /**
   * <p>The finding ARN that the vulnerability details are associated with.</p>
   * @public
   */
  findingArn?: string | undefined;

  /**
   * <p>The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific
   *          vulnerability.</p>
   * @public
   */
  cisaData?: CisaData | undefined;

  /**
   * <p>The risk score of the vulnerability.</p>
   * @public
   */
  riskScore?: number | undefined;

  /**
   * <p>Information on the evidence of the vulnerability.</p>
   * @public
   */
  evidences?: Evidence[] | undefined;

  /**
   * <p>The MITRE adversary tactics, techniques, or procedures (TTPs) associated with the
   *          vulnerability.</p>
   * @public
   */
  ttps?: string[] | undefined;

  /**
   * <p>The known malware tools or kits that can exploit the vulnerability.</p>
   * @public
   */
  tools?: string[] | undefined;

  /**
   * <p>Contains information on when this exploit was observed.</p>
   * @public
   */
  exploitObserved?: ExploitObserved | undefined;

  /**
   * <p>The reference URLs for the vulnerability data.</p>
   * @public
   */
  referenceUrls?: string[] | undefined;

  /**
   * <p>The Common Weakness Enumerations (CWEs) associated with the vulnerability.</p>
   * @public
   */
  cwes?: string[] | undefined;

  /**
   * <p>The Exploit Prediction Scoring System (EPSS) score of the vulnerability.</p>
   * @public
   */
  epssScore?: number | undefined;
}

/**
 * @public
 */
export interface BatchGetFindingDetailsResponse {
  /**
   * <p>A finding's vulnerability details.</p>
   * @public
   */
  findingDetails?: FindingDetail[] | undefined;

  /**
   * <p>Error information for findings that details could not be returned for.</p>
   * @public
   */
  errors?: FindingDetailsError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetFreeTrialInfoRequest {
  /**
   * <p>The account IDs to get free trial status for.</p>
   * @public
   */
  accountIds: string[] | undefined;
}

/**
 * <p>An object that contains information about the Amazon Inspector free trial for an account.</p>
 * @public
 */
export interface FreeTrialInfo {
  /**
   * <p>The type of scan covered by the Amazon Inspector free trail.</p>
   * @public
   */
  type: FreeTrialType | undefined;

  /**
   * <p>The date and time that the Amazon Inspector free trail started for a given account.</p>
   * @public
   */
  start: Date | undefined;

  /**
   * <p>The date and time that the Amazon Inspector free trail ends for a given account.</p>
   * @public
   */
  end: Date | undefined;

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  status: FreeTrialStatus | undefined;

  /**
   * <p>The cloud provider associated with the free trial information.</p>
   * @public
   */
  cloudProvider?: CloudProvider | undefined;
}

/**
 * <p>Information about the Amazon Inspector free trial for an account.</p>
 * @public
 */
export interface FreeTrialAccountInfo {
  /**
   * <p>The account associated with the Amazon Inspector free trial information.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>Contains information about the Amazon Inspector free trial for an account.</p>
   * @public
   */
  freeTrialInfo: FreeTrialInfo[] | undefined;
}

/**
 * <p>Information about an error received while accessing free trail data for an
 *          account.</p>
 * @public
 */
export interface FreeTrialInfoError {
  /**
   * <p>The account associated with the Amazon Inspector free trial information.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: FreeTrialInfoErrorCode | undefined;

  /**
   * <p>The error message returned.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchGetFreeTrialInfoResponse {
  /**
   * <p>An array of objects that provide Amazon Inspector free trial details for each of the requested
   *          accounts. </p>
   * @public
   */
  accounts: FreeTrialAccountInfo[] | undefined;

  /**
   * <p>An array of objects detailing any accounts that free trial data could not be returned
   *          for.</p>
   * @public
   */
  failedAccounts: FreeTrialInfoError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetMemberEc2DeepInspectionStatusRequest {
  /**
   * <p>The unique identifiers for the Amazon Web Services accounts to retrieve Amazon Inspector deep inspection
   *          activation status for. </p>
   * @public
   */
  accountIds?: string[] | undefined;
}

/**
 * <p>An object that contains details about the state of Amazon Inspector deep inspection for a member
 *          account.</p>
 * @public
 */
export interface MemberAccountEc2DeepInspectionStatusState {
  /**
   * <p>The unique identifier for the Amazon Web Services account of the organization member</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The state of Amazon Inspector deep inspection in the member account.</p>
   * @public
   */
  status?: Ec2DeepInspectionStatus | undefined;

  /**
   * <p>The error message explaining why the account failed to activate Amazon Inspector deep
   *          inspection.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>An object that contains details about a member account in your organization that failed
 *          to activate Amazon Inspector deep inspection.</p>
 * @public
 */
export interface FailedMemberAccountEc2DeepInspectionStatusState {
  /**
   * <p>The unique identifier for the Amazon Web Services account of the organization member that failed to
   *          activate Amazon Inspector deep inspection.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The status of EC2 scanning in the account that failed to activate Amazon Inspector deep
   *          inspection.</p>
   * @public
   */
  ec2ScanStatus?: Status | undefined;

  /**
   * <p>The error message explaining why the account failed to activate Amazon Inspector deep
   *          inspection.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetMemberEc2DeepInspectionStatusResponse {
  /**
   * <p>An array of objects that provide details on the activation status of Amazon Inspector deep
   *          inspection for each of the requested accounts. </p>
   * @public
   */
  accountIds?: MemberAccountEc2DeepInspectionStatusState[] | undefined;

  /**
   * <p>An array of objects that provide details on any accounts that failed to activate Amazon Inspector
   *          deep inspection and why. </p>
   * @public
   */
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[] | undefined;
}

/**
 * <p>An object that contains details about the status of Amazon Inspector deep inspection for a member
 *          account in your organization.</p>
 * @public
 */
export interface MemberAccountEc2DeepInspectionStatus {
  /**
   * <p>The unique identifier for the Amazon Web Services account of the organization member.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>Whether Amazon Inspector deep inspection is active in the account. If <code>TRUE</code> Amazon Inspector deep
   *          inspection is active, if <code>FALSE</code> it is not active.</p>
   * @public
   */
  activateDeepInspection: boolean | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusRequest {
  /**
   * <p>The unique identifiers for the Amazon Web Services accounts to change Amazon Inspector deep inspection status
   *          for.</p>
   * @public
   */
  accountIds: MemberAccountEc2DeepInspectionStatus[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusResponse {
  /**
   * <p>An array of objects that provide details for each of the accounts that Amazon Inspector deep
   *          inspection status was successfully changed for. </p>
   * @public
   */
  accountIds?: MemberAccountEc2DeepInspectionStatusState[] | undefined;

  /**
   * <p>An array of objects that provide details for each of the accounts that Amazon Inspector deep
   *          inspection status could not be successfully changed for. </p>
   * @public
   */
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[] | undefined;
}

/**
 * @public
 */
export interface CancelFindingsReportRequest {
  /**
   * <p>The ID of the report to be canceled.</p>
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface CancelFindingsReportResponse {
  /**
   * <p>The ID of the canceled report.</p>
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface CancelSbomExportRequest {
  /**
   * <p>The report ID of the SBOM export to cancel.</p>
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface CancelSbomExportResponse {
  /**
   * <p>The report ID of the canceled SBOM export.</p>
   * @public
   */
  reportId?: string | undefined;
}

/**
 * <p>The status counts.</p>
 * @public
 */
export interface StatusCounts {
  /**
   * <p>The number of checks that failed.</p>
   * @public
   */
  failed?: number | undefined;

  /**
   * <p>The number of checks that were skipped.</p>
   * @public
   */
  skipped?: number | undefined;

  /**
   * <p>The number of checks that passed.</p>
   * @public
   */
  passed?: number | undefined;
}

/**
 * <p>A CIS check.</p>
 * @public
 */
export interface CisCheckAggregation {
  /**
   * <p>The scan ARN for the CIS check scan ARN.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The check ID for the CIS check.</p>
   * @public
   */
  checkId?: string | undefined;

  /**
   * <p>The CIS check title.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The description for the CIS check.</p>
   * @public
   */
  checkDescription?: string | undefined;

  /**
   * <p>The CIS check level.</p>
   * @public
   */
  level?: CisSecurityLevel | undefined;

  /**
   * <p>The account ID for the CIS check.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The CIS check status counts.</p>
   * @public
   */
  statusCounts?: StatusCounts | undefined;

  /**
   * <p>The CIS check platform.</p>
   * @public
   */
  platform?: string | undefined;
}

/**
 * <p>The CIS date filter.</p>
 * @public
 */
export interface CisDateFilter {
  /**
   * <p>The CIS date filter's earliest scan start time.</p>
   * @public
   */
  earliestScanStartTime?: Date | undefined;

  /**
   * <p>The CIS date filter's latest scan start time.</p>
   * @public
   */
  latestScanStartTime?: Date | undefined;
}

/**
 * <p>The CIS finding status filter.</p>
 * @public
 */
export interface CisFindingStatusFilter {
  /**
   * <p>The comparison value of the CIS finding status filter.</p>
   * @public
   */
  comparison: CisFindingStatusComparison | undefined;

  /**
   * <p>The value of the CIS finding status filter.</p>
   * @public
   */
  value: CisFindingStatus | undefined;
}

/**
 * <p>The CIS number filter.</p>
 * @public
 */
export interface CisNumberFilter {
  /**
   * <p>The CIS number filter's upper inclusive.</p>
   * @public
   */
  upperInclusive?: number | undefined;

  /**
   * <p>The CIS number filter's lower inclusive.</p>
   * @public
   */
  lowerInclusive?: number | undefined;
}

/**
 * <p>The CIS result status filter.</p>
 * @public
 */
export interface CisResultStatusFilter {
  /**
   * <p>The comparison value of the CIS result status filter.</p>
   * @public
   */
  comparison: CisResultStatusComparison | undefined;

  /**
   * <p>The value of the CIS result status filter.</p>
   * @public
   */
  value: CisResultStatus | undefined;
}

/**
 * <p>The CIS targets.</p>
 * @public
 */
export interface CisTargets {
  /**
   * <p>The CIS target account ids.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The CIS target resource tags.</p>
   * @public
   */
  targetResourceTags?: Record<string, string[]> | undefined;
}

/**
 * <p>The CIS scan.</p>
 * @public
 */
export interface CisScan {
  /**
   * <p>The CIS scan's ARN.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The CIS scan's configuration ARN.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * <p>The CIS scan's status.</p>
   * @public
   */
  status?: CisScanStatus | undefined;

  /**
   * <p>The the name of the scan configuration that's associated with this scan.</p>
   * @public
   */
  scanName?: string | undefined;

  /**
   * <p>The CIS scan's date.</p>
   * @public
   */
  scanDate?: Date | undefined;

  /**
   * <p>The CIS scan's failed checks.</p>
   * @public
   */
  failedChecks?: number | undefined;

  /**
   * <p>The CIS scan's total checks.</p>
   * @public
   */
  totalChecks?: number | undefined;

  /**
   * <p>The CIS scan's targets.</p>
   * @public
   */
  targets?: CisTargets | undefined;

  /**
   * <p>The account or organization that schedules the CIS scan.</p>
   * @public
   */
  scheduledBy?: string | undefined;

  /**
   * <p> The security level for the CIS scan. Security level refers to the Benchmark levels that
   *          CIS assigns to a profile. </p>
   * @public
   */
  securityLevel?: CisSecurityLevel | undefined;
}

/**
 * <p>The time.</p>
 * @public
 */
export interface Time {
  /**
   * <p>The time of day in 24-hour format (00:00).</p>
   * @public
   */
  timeOfDay: string | undefined;

  /**
   * <p>The timezone.</p>
   * @public
   */
  timezone: string | undefined;
}

/**
 * <p>A daily schedule.</p>
 * @public
 */
export interface DailySchedule {
  /**
   * <p>The schedule start time.</p>
   * @public
   */
  startTime: Time | undefined;
}

/**
 * <p>A monthly schedule.</p>
 * @public
 */
export interface MonthlySchedule {
  /**
   * <p>The monthly schedule's start time.</p>
   * @public
   */
  startTime: Time | undefined;

  /**
   * <p>The monthly schedule's day.</p>
   * @public
   */
  day: Day | undefined;
}

/**
 * <p>A one time schedule.</p>
 * @public
 */
export interface OneTimeSchedule {}

/**
 * <p>A weekly schedule.</p>
 * @public
 */
export interface WeeklySchedule {
  /**
   * <p>The weekly schedule's start time.</p>
   * @public
   */
  startTime: Time | undefined;

  /**
   * <p>The weekly schedule's days.</p>
   * @public
   */
  days: Day[] | undefined;
}

/**
 * <p>A schedule.</p>
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
   * <p>The schedule's one time.</p>
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
   * <p>The schedule's daily.</p>
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
   * <p>The schedule's weekly.</p>
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
   * <p>The schedule's monthly.</p>
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
 * <p>The CIS scan configuration.</p>
 * @public
 */
export interface CisScanConfiguration {
  /**
   * <p>The CIS scan configuration's scan configuration ARN.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * <p>The CIS scan configuration's owner ID.</p>
   * @public
   */
  ownerId?: string | undefined;

  /**
   * <p>The name of the CIS scan configuration.</p>
   * @public
   */
  scanName?: string | undefined;

  /**
   * <p>The CIS scan configuration's security level.</p>
   * @public
   */
  securityLevel?: CisSecurityLevel | undefined;

  /**
   * <p>The CIS scan configuration's schedule.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The CIS scan configuration's targets.</p>
   * @public
   */
  targets?: CisTargets | undefined;

  /**
   * <p>The CIS scan configuration's tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The CIS scan result details.</p>
 * @public
 */
export interface CisScanResultDetails {
  /**
   * <p>The CIS scan result details' scan ARN.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The CIS scan result details' account ID.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The CIS scan result details' target resource ID.</p>
   * @public
   */
  targetResourceId?: string | undefined;

  /**
   * <p>The CIS scan result details' platform.</p>
   * @public
   */
  platform?: string | undefined;

  /**
   * <p>The CIS scan result details' status.</p>
   * @public
   */
  status?: CisFindingStatus | undefined;

  /**
   * <p>The CIS scan result details' status reason.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The CIS scan result details' check ID.</p>
   * @public
   */
  checkId?: string | undefined;

  /**
   * <p>The CIS scan result details' title.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The account ID that's associated with the CIS scan result details.</p>
   * @public
   */
  checkDescription?: string | undefined;

  /**
   * <p>The CIS scan result details' remediation.</p>
   * @public
   */
  remediation?: string | undefined;

  /**
   * <p>The CIS scan result details' level.</p>
   * @public
   */
  level?: CisSecurityLevel | undefined;

  /**
   * <p>The CIS scan result details' finding ARN.</p>
   * @public
   */
  findingArn?: string | undefined;
}

/**
 * <p> The CIS security level filter. Security level refers to the Benchmark levels that CIS
 *          assigns to a profile. </p>
 * @public
 */
export interface CisSecurityLevelFilter {
  /**
   * <p>The CIS security filter comparison value.</p>
   * @public
   */
  comparison: CisSecurityLevelComparison | undefined;

  /**
   * <p>The CIS security filter value.</p>
   * @public
   */
  value: CisSecurityLevel | undefined;
}

/**
 * <p>The CIS scan result details filter criteria.</p>
 * @public
 */
export interface CisScanResultDetailsFilterCriteria {
  /**
   * <p>The criteria's finding status filters.</p>
   * @public
   */
  findingStatusFilters?: CisFindingStatusFilter[] | undefined;

  /**
   * <p>The criteria's check ID filters.</p>
   * @public
   */
  checkIdFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The criteria's title filters.</p>
   * @public
   */
  titleFilters?: CisStringFilter[] | undefined;

  /**
   * <p> The criteria's security level filters. . Security level refers to the Benchmark levels
   *          that CIS assigns to a profile. </p>
   * @public
   */
  securityLevelFilters?: CisSecurityLevelFilter[] | undefined;

  /**
   * <p>The criteria's finding ARN filters.</p>
   * @public
   */
  findingArnFilters?: CisStringFilter[] | undefined;
}

/**
 * <p>The scan results aggregated by checks filter criteria.</p>
 * @public
 */
export interface CisScanResultsAggregatedByChecksFilterCriteria {
  /**
   * <p>The criteria's account ID filters.</p>
   * @public
   */
  accountIdFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The criteria's check ID filters.</p>
   * @public
   */
  checkIdFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The criteria's title filters.</p>
   * @public
   */
  titleFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The criteria's platform filters.</p>
   * @public
   */
  platformFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The criteria's failed resources filters.</p>
   * @public
   */
  failedResourcesFilters?: CisNumberFilter[] | undefined;

  /**
   * <p>The criteria's security level filters.</p>
   * @public
   */
  securityLevelFilters?: CisSecurityLevelFilter[] | undefined;
}

/**
 * <p>The tag filter.</p>
 * @public
 */
export interface TagFilter {
  /**
   * <p>The tag filter comparison value.</p>
   * @public
   */
  comparison: TagComparison | undefined;

  /**
   * <p>The tag filter key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag filter value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The CIS target status filter.</p>
 * @public
 */
export interface CisTargetStatusFilter {
  /**
   * <p>The comparison value of the CIS target status filter.</p>
   * @public
   */
  comparison: CisTargetStatusComparison | undefined;

  /**
   * <p>The value of the CIS target status filter.</p>
   * @public
   */
  value: CisTargetStatus | undefined;
}

/**
 * <p>The CIS target status reason filter.</p>
 * @public
 */
export interface CisTargetStatusReasonFilter {
  /**
   * <p>The comparison value of the CIS target status reason filter.</p>
   * @public
   */
  comparison: CisTargetStatusComparison | undefined;

  /**
   * <p>The value of the CIS target status reason filter.</p>
   * @public
   */
  value: CisTargetStatusReason | undefined;
}

/**
 * <p>The scan results aggregated by target resource filter criteria.</p>
 * @public
 */
export interface CisScanResultsAggregatedByTargetResourceFilterCriteria {
  /**
   * <p>The criteria's account ID filters.</p>
   * @public
   */
  accountIdFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The criteria's status filter.</p>
   * @public
   */
  statusFilters?: CisResultStatusFilter[] | undefined;

  /**
   * <p>The criteria's check ID filters.</p>
   * @public
   */
  checkIdFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The criteria's target resource ID filters.</p>
   * @public
   */
  targetResourceIdFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The criteria's target resource tag filters.</p>
   * @public
   */
  targetResourceTagFilters?: TagFilter[] | undefined;

  /**
   * <p>The criteria's platform filters.</p>
   * @public
   */
  platformFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The criteria's target status filters.</p>
   * @public
   */
  targetStatusFilters?: CisTargetStatusFilter[] | undefined;

  /**
   * <p>The criteria's target status reason filters.</p>
   * @public
   */
  targetStatusReasonFilters?: CisTargetStatusReasonFilter[] | undefined;

  /**
   * <p>The criteria's failed checks filters.</p>
   * @public
   */
  failedChecksFilters?: CisNumberFilter[] | undefined;
}

/**
 * <p>The CIS scan status filter.</p>
 * @public
 */
export interface CisScanStatusFilter {
  /**
   * <p>The filter comparison value.</p>
   * @public
   */
  comparison: CisScanStatusComparison | undefined;

  /**
   * <p>The filter value.</p>
   * @public
   */
  value: CisScanStatus | undefined;
}

/**
 * <p>The CIS session message.</p>
 * @public
 */
export interface CisSessionMessage {
  /**
   * <p>The rule ID for the CIS session message.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The status of the CIS session message.</p>
   * @public
   */
  status: CisRuleStatus | undefined;

  /**
   * <p>The CIS rule details for the CIS session message.</p>
   * @public
   */
  cisRuleDetails: Uint8Array | undefined;
}

/**
 * <p>The CIS target resource aggregation.</p>
 * @public
 */
export interface CisTargetResourceAggregation {
  /**
   * <p>The scan ARN for the CIS target resource.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The ID of the target resource.</p>
   * @public
   */
  targetResourceId?: string | undefined;

  /**
   * <p>The account ID for the CIS target resource.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The tag for the target resource.</p>
   * @public
   */
  targetResourceTags?: Record<string, string[]> | undefined;

  /**
   * <p>The target resource status counts.</p>
   * @public
   */
  statusCounts?: StatusCounts | undefined;

  /**
   * <p>The platform for the CIS target resource.</p>
   * @public
   */
  platform?: string | undefined;

  /**
   * <p>The status of the target resource.</p>
   * @public
   */
  targetStatus?: CisTargetStatus | undefined;

  /**
   * <p>The reason for the target resource.</p>
   * @public
   */
  targetStatusReason?: CisTargetStatusReason | undefined;
}

/**
 * <p>The metadata for a cluster.</p>
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
   * <p>The details for an Amazon ECS cluster in the cluster metadata.</p>
   * @public
   */
  export interface AwsEcsMetadataDetailsMember {
    awsEcsMetadataDetails: AwsEcsMetadataDetails;
    awsEksMetadataDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>The details for an Amazon EKS cluster in the cluster metadata.</p>
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
 * <p>Details about the task or pod in the cluster.</p>
 * @public
 */
export interface ClusterDetails {
  /**
   * <p>The last timestamp when Amazon Inspector recorded the image in use in the task or pod
   *          in the cluster.</p>
   * @public
   */
  lastInUse: Date | undefined;

  /**
   * <p>The number of tasks or pods where an image was running on the cluster.</p>
   * @public
   */
  runningUnitCount?: number | undefined;

  /**
   * <p>The number of tasks or pods where an image was stopped on the cluster in the last 24
   *          hours.</p>
   * @public
   */
  stoppedUnitCount?: number | undefined;

  /**
   * <p>The metadata for a cluster.</p>
   * @public
   */
  clusterMetadata: ClusterMetadata | undefined;
}

/**
 * <p>The filter criteria to be used.</p>
 * @public
 */
export interface ClusterForImageFilterCriteria {
  /**
   * <p>The resource Id to be used in the filter criteria.</p>
   * @public
   */
  resourceId: string | undefined;
}

/**
 * <p>Information about the cluster.</p>
 * @public
 */
export interface ClusterInformation {
  /**
   * <p>The cluster ARN.</p>
   * @public
   */
  clusterArn: string | undefined;

  /**
   * <p>Details about the cluster.</p>
   * @public
   */
  clusterDetails?: ClusterDetails[] | undefined;
}

/**
 * <p>Contains information on where a code vulnerability is located in your Lambda
 *          function.</p>
 * @public
 */
export interface CodeFilePath {
  /**
   * <p>The name of the file the code vulnerability was found in.</p>
   * @public
   */
  fileName: string | undefined;

  /**
   * <p>The file path to the code that a vulnerability was found in.</p>
   * @public
   */
  filePath: string | undefined;

  /**
   * <p>The line number of the first line of code that a vulnerability was found in.</p>
   * @public
   */
  startLine: number | undefined;

  /**
   * <p>The line number of the last line of code that a vulnerability was found in.</p>
   * @public
   */
  endLine: number | undefined;
}

/**
 * <p>Contains details about a code repository associated with a finding.</p>
 * @public
 */
export interface CodeRepositoryDetails {
  /**
   * <p>The name of the project in the code repository.</p>
   * @public
   */
  projectName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the code security integration associated with the
   *          repository.</p>
   * @public
   */
  integrationArn?: string | undefined;

  /**
   * <p>The type of repository provider (such as GitHub, GitLab, etc.).</p>
   * @public
   */
  providerType?: CodeRepositoryProviderType | undefined;
}

/**
 * <p>The status of the scan.</p>
 * @public
 */
export interface ScanStatus {
  /**
   * <p>The status code of the scan.</p>
   * @public
   */
  statusCode: ScanStatusCode | undefined;

  /**
   * <p>The scan status. Possible return values and descriptions are: </p>
   *          <p>
   *             <code>ACCESS_DENIED</code> - Resource access policy restricting Amazon Inspector access. Please
   *          update the IAM policy.</p>
   *          <p>
   *             <code>ACCESS_DENIED_TO_ENCRYPTION_KEY</code> - The KMS key policy doesn't allow Amazon Inspector
   *          access. Update the key policy.</p>
   *          <p>
   *             <code>DEEP_INSPECTION_COLLECTION_TIME_LIMIT_EXCEEDED</code> - Amazon Inspector failed to extract
   *          the package inventory because the package collection time exceeding the maximum threshold
   *          of 15 minutes.</p>
   *          <p>
   *             <code>DEEP_INSPECTION_DAILY_SSM_INVENTORY_LIMIT_EXCEEDED</code> - The SSM agent couldn't
   *          send inventory to Amazon Inspector because the SSM quota for Inventory data collected per instance per
   *          day has already been reached for this instance.</p>
   *          <p>
   *             <code>DEEP_INSPECTION_NO_INVENTORY</code> - The Amazon Inspector plugin hasn't yet been able to
   *          collect an inventory of packages for this instance. This is usually the result of a pending
   *          scan, however, if this status persists after 6 hours, use SSM to ensure that
   *          the required Amazon Inspector associations exist and are running for the instance.</p>
   *          <p>
   *             <code>DEEP_INSPECTION_PACKAGE_COLLECTION_LIMIT_EXCEEDED</code> - The instance has
   *          exceeded the 5000 package limit for Amazon Inspector Deep inspection. To resume Deep inspection for
   *          this instance you can try to adjust the custom paths associated with the account.</p>
   *          <p>
   *             <code>EC2_INSTANCE_STOPPED</code> - This EC2 instance is in a stopped state, therefore,
   *          Amazon Inspector will pause scanning. The existing findings will continue to exist until the instance
   *          is terminated. Once the instance is re-started, Inspector will automatically start scanning
   *          the instance again. Please note that you will not be charged for this instance while it's
   *          in a stopped state.</p>
   *          <p>
   *             <code>EXCLUDED_BY_TAG</code> - This resource was not scanned because it has been
   *          excluded by a tag.</p>
   *          <p>
   *             <code>IMAGE_SIZE_EXCEEDED</code> - Reserved for future use.</p>
   *          <p>
   *             <code>INTEGRATION_CONNNECTION_LOST</code> - Amazon Inspector couldn't communicate with the source
   *          code management platform.</p>
   *          <p>
   *             <code>INTERNAL_ERROR</code> - Amazon Inspector has encountered an internal error for this resource.
   *          Amazon Inspector service will automatically resolve the issue and resume the scanning. No action
   *          required from the user.</p>
   *          <p>
   *             <code>NO_INVENTORY</code> - Amazon Inspector couldn't find software application inventory to scan
   *          for vulnerabilities. This might be caused due to required Amazon Inspector associations being deleted
   *          or failing to run on your resource. Please verify the status of
   *          <code>InspectorInventoryCollection-do-not-delete</code> association in the SSM console
   *          for the resource. Additionally, you can verify the instance's inventory in the SSM Fleet
   *          Manager console.</p>
   *          <p>
   *             <code>NO_RESOURCES_FOUND</code> - Reserved for future use.</p>
   *          <p>
   *             <code>NO_SCAN_CONFIGURATION_ASSOCIATED</code> - The code repository resource doesn't
   *          have an associated scan configuration.</p>
   *          <p>
   *             <code>PENDING_DISABLE</code> - This resource is pending cleanup during disablement. The
   *          customer will not be billed while a resource is in the pending disable status.</p>
   *          <p>
   *             <code>PENDING_INITIAL_SCAN</code> - This resource has been identified for scanning,
   *          results will be available soon.</p>
   *          <p>
   *             <code>RESOURCE_TERMINATED</code> - This resource has been terminated. The findings and
   *          coverage associated with this resource are in the process of being cleaned up.</p>
   *          <p>
   *             <code>SCAN_ELIGIBILITY_EXPIRED</code> - The configured scan duration has lapsed for this
   *          image.</p>
   *          <p>
   *             <code>SCAN_FREQUENCY_MANUAL</code> - This image will not be covered by Amazon Inspector due to the
   *          repository scan frequency configuration.</p>
   *          <p>
   *             <code>SCAN_FREQUENCY_SCAN_ON_PUSH</code> - This image will be scanned one time and will
   *          not new findings because of the scan frequency configuration.</p>
   *          <p>
   *             <code>SCAN_IN_PROGRESS</code> - The resource is currently being scanned.</p>
   *          <p>
   *             <code>STALE_INVENTORY</code> - Amazon Inspector wasn't able to collect an updated software
   *          application inventory in the last 7 days. Please confirm the required Amazon Inspector associations
   *          still exist and you can still see an updated inventory in the SSM console.</p>
   *          <p>
   *             <code>SUCCESSFUL</code> - The scan was successful.</p>
   *          <p>
   *             <code>UNMANAGED_EC2_INSTANCE</code> - The EC2 instance is not managed by SSM, please use
   *          the following SSM automation to remediate the issue: <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-awssupport-troubleshoot-managed-instance.html">https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-awssupport-troubleshoot-managed-instance.html</a>.
   *          Once the instance becomes managed by SSM, Inspector will automatically begin scanning this
   *          instance. </p>
   *          <p>
   *             <code>UNSUPPORTED_CODE_ARTIFACTS </code> - The function was not scanned because it has an unsupported code artifacts.</p>
   *          <p>
   *             <code>UNSUPPORTED_CONFIG_FILE</code> - Reserved for future use.</p>
   *          <p>
   *             <code>UNSUPPORTED_LANGUAGE</code> - The scan was unsuccessful because the repository
   *          contains files in an unsupported programming language.</p>
   *          <p>
   *             <code>UNSUPPORTED_MEDIA_TYPE </code>- The ECR image has an unsupported media
   *          type.</p>
   *          <p>
   *             <code>UNSUPPORTED_OS</code> - Amazon Inspector does not support this OS, architecture, or image
   *          manifest type at this time. To see a complete list of supported operating systems see:
   *          <a href=" https://docs.aws.amazon.com/inspector/latest/user/supported.html">https://docs.aws.amazon.com/inspector/latest/user/supported.html</a>.</p>
   *          <p>
   *             <code>UNSUPPORTED_RUNTIME</code> - The function was not scanned because it has an
   *          unsupported runtime. To see a complete list of supported runtimes see: <a href=" https://docs.aws.amazon.com/inspector/latest/user/supported.html">https://docs.aws.amazon.com/inspector/latest/user/supported.html</a>.</p>
   *          <p>
   *             <code>IMAGE_ARCHIVED</code> - This image has been archived in Amazon ECR and is no longer available for scanning in Amazon Inspector.
   *       </p>
   * @public
   */
  reason: ScanStatusReason | undefined;
}

/**
 * <p>Contains information about on-demand scans performed on a code repository.</p>
 * @public
 */
export interface CodeRepositoryOnDemandScan {
  /**
   * <p>The ID of the last commit that was scanned during an on-demand scan.</p>
   * @public
   */
  lastScannedCommitId?: string | undefined;

  /**
   * <p>The timestamp when the last on-demand scan was performed.</p>
   * @public
   */
  lastScanAt?: Date | undefined;

  /**
   * <p>The status of the scan.</p>
   * @public
   */
  scanStatus?: ScanStatus | undefined;
}

/**
 * <p>Contains the continuous integration scan configuration settings applied to a specific
 *          project.</p>
 * @public
 */
export interface ProjectContinuousIntegrationScanConfiguration {
  /**
   * <p>The repository event that triggers continuous integration scans for the project.</p>
   * @public
   */
  supportedEvent?: ContinuousIntegrationScanEvent | undefined;

  /**
   * <p>The categories of security rules applied during continuous integration scans for the
   *          project.</p>
   * @public
   */
  ruleSetCategories?: RuleSetCategory[] | undefined;
}

/**
 * <p>Contains the periodic scan configuration settings applied to a specific project.</p>
 * @public
 */
export interface ProjectPeriodicScanConfiguration {
  /**
   * <p>The schedule expression for periodic scans, in cron format, applied to the
   *          project.</p>
   * @public
   */
  frequencyExpression?: string | undefined;

  /**
   * <p>The categories of security rules applied during periodic scans for the project.</p>
   * @public
   */
  ruleSetCategories?: RuleSetCategory[] | undefined;
}

/**
 * <p>Contains the scan configuration settings applied to a specific project in a code
 *          repository.</p>
 * @public
 */
export interface ProjectCodeSecurityScanConfiguration {
  /**
   * <p>The periodic scan configurations applied to the project.</p>
   * @public
   */
  periodicScanConfigurations?: ProjectPeriodicScanConfiguration[] | undefined;

  /**
   * <p>The continuous integration scan configurations applied to the project.</p>
   * @public
   */
  continuousIntegrationScanConfigurations?: ProjectContinuousIntegrationScanConfiguration[] | undefined;
}

/**
 * <p>Contains metadata information about a code repository that is being scanned by Amazon
 *          Inspector.</p>
 * @public
 */
export interface CodeRepositoryMetadata {
  /**
   * <p>The name of the project in the code repository.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the code security integration associated with the
   *          repository.</p>
   * @public
   */
  integrationArn?: string | undefined;

  /**
   * <p>The type of repository provider (such as GitHub, GitLab, etc.).</p>
   * @public
   */
  providerType: string | undefined;

  /**
   * <p>The visibility setting of the repository (public or private).</p>
   * @public
   */
  providerTypeVisibility: string | undefined;

  /**
   * <p>The ID of the last commit that was scanned in the repository.</p>
   * @public
   */
  lastScannedCommitId?: string | undefined;

  /**
   * <p>The scan configuration settings applied to the code repository.</p>
   * @public
   */
  scanConfiguration?: ProjectCodeSecurityScanConfiguration | undefined;

  /**
   * <p>Information about on-demand scans performed on the repository.</p>
   * @public
   */
  onDemandScan?: CodeRepositoryOnDemandScan | undefined;
}

/**
 * <p>A summary of information about a code security integration.</p>
 * @public
 */
export interface CodeSecurityIntegrationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the code security integration.</p>
   * @public
   */
  integrationArn: string | undefined;

  /**
   * <p>The name of the code security integration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of repository provider for the integration.</p>
   * @public
   */
  type: IntegrationType | undefined;

  /**
   * <p>The current status of the code security integration.</p>
   * @public
   */
  status: IntegrationStatus | undefined;

  /**
   * <p>The reason for the current status of the code security integration.</p>
   * @public
   */
  statusReason: string | undefined;

  /**
   * <p>The timestamp when the code security integration was created.</p>
   * @public
   */
  createdOn: Date | undefined;

  /**
   * <p>The timestamp when the code security integration was last updated.</p>
   * @public
   */
  lastUpdateOn: Date | undefined;

  /**
   * <p>The tags associated with the code security integration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Configuration settings for continuous integration scans that run automatically when code
 *          changes are made.</p>
 * @public
 */
export interface ContinuousIntegrationScanConfiguration {
  /**
   * <p>The repository events that trigger continuous integration scans, such as pull requests
   *          or commits.</p>
   * @public
   */
  supportedEvents: ContinuousIntegrationScanEvent[] | undefined;
}

/**
 * <p>Configuration settings for periodic scans that run on a scheduled basis.</p>
 * @public
 */
export interface PeriodicScanConfiguration {
  /**
   * <p>The frequency at which periodic scans are performed (such as weekly or monthly).</p>
   *          <p>If you don't provide the <code>frequencyExpression</code> Amazon Inspector chooses day for the scan
   *          to run. If you provide the <code>frequencyExpression</code>, the schedule must match the
   *          specified <code>frequency</code>.</p>
   * @public
   */
  frequency?: PeriodicScanFrequency | undefined;

  /**
   * <p>The schedule expression for periodic scans, in cron format.</p>
   * @public
   */
  frequencyExpression?: string | undefined;
}

/**
 * <p>Contains the configuration settings for code security scans.</p>
 * @public
 */
export interface CodeSecurityScanConfiguration {
  /**
   * <p>Configuration settings for periodic scans that run on a scheduled basis.</p>
   * @public
   */
  periodicScanConfiguration?: PeriodicScanConfiguration | undefined;

  /**
   * <p>Configuration settings for continuous integration scans that run automatically when code
   *          changes are made.</p>
   * @public
   */
  continuousIntegrationScanConfiguration?: ContinuousIntegrationScanConfiguration | undefined;

  /**
   * <p>The categories of security rules to be applied during the scan.</p>
   * @public
   */
  ruleSetCategories: RuleSetCategory[] | undefined;
}

/**
 * <p>A summary of an association between a code repository and a scan configuration.</p>
 * @public
 */
export interface CodeSecurityScanConfigurationAssociationSummary {
  /**
   * <p>Identifies a specific resource in a code repository that will be scanned.</p>
   * @public
   */
  resource?: CodeSecurityResource | undefined;
}

/**
 * <p>Defines the scope of repositories to be included in code security scans.</p>
 * @public
 */
export interface ScopeSettings {
  /**
   * <p>The scope of projects to be selected for scanning within the integrated repositories.
   *          Setting the value to <code>ALL</code> applies the scope settings to all existing and future
   *          projects imported into Amazon Inspector.</p>
   * @public
   */
  projectSelectionScope?: ProjectSelectionScope | undefined;
}

/**
 * <p>A summary of information about a code security scan configuration.</p>
 * @public
 */
export interface CodeSecurityScanConfigurationSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * <p>The name of the scan configuration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that owns the scan configuration.</p>
   * @public
   */
  ownerAccountId: string | undefined;

  /**
   * <p>The frequency at which periodic scans are performed.</p>
   * @public
   */
  periodicScanFrequency?: PeriodicScanFrequency | undefined;

  /**
   * <p>The schedule expression for periodic scans, in cron format.</p>
   * @public
   */
  frequencyExpression?: string | undefined;

  /**
   * <p>The repository events that trigger continuous integration scans.</p>
   * @public
   */
  continuousIntegrationScanSupportedEvents?: ContinuousIntegrationScanEvent[] | undefined;

  /**
   * <p>The categories of security rules applied during the scan.</p>
   * @public
   */
  ruleSetCategories: RuleSetCategory[] | undefined;

  /**
   * <p>The scope settings that define which repositories will be scanned. If the
   *             <code>ScopeSetting</code> parameter is <code>ALL</code> the scan configuration applies
   *          to all existing and future projects imported into Amazon Inspector.</p>
   * @public
   */
  scopeSettings?: ScopeSettings | undefined;

  /**
   * <p>The tags associated with the scan configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains information on the code vulnerability identified in your Lambda
 *          function.</p>
 * @public
 */
export interface CodeVulnerabilityDetails {
  /**
   * <p>Contains information on where the code vulnerability is located in your code.</p>
   * @public
   */
  filePath: CodeFilePath | undefined;

  /**
   * <p>The detector tag associated with the vulnerability. Detector tags group related
   *          vulnerabilities by common themes or tactics. For a list of available tags by programming
   *          language, see <a href="https://docs.aws.amazon.com/codeguru/detector-library/java/tags/">Java
   *             tags</a>, or <a href="https://docs.aws.amazon.com/codeguru/detector-library/python/tags/">Python tags</a>. </p>
   * @public
   */
  detectorTags?: string[] | undefined;

  /**
   * <p>A URL containing supporting documentation about the code vulnerability detected.</p>
   * @public
   */
  referenceUrls?: string[] | undefined;

  /**
   * <p>The identifier for a rule that was used to detect the code vulnerability.</p>
   * @public
   */
  ruleId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda layer that the code vulnerability was
   *          detected in.</p>
   * @public
   */
  sourceLambdaLayerArn?: string | undefined;

  /**
   * <p>The ID for the Amazon CodeGuru detector associated with the finding. For more
   *          information on detectors see <a href="https://docs.aws.amazon.com/codeguru/detector-library">Amazon CodeGuru Detector Library</a>.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The name of the detector used to identify the code vulnerability. For more information
   *          on detectors see <a href="https://docs.aws.amazon.com/codeguru/detector-library">CodeGuru
   *             Detector Library</a>.</p>
   * @public
   */
  detectorName: string | undefined;

  /**
   * <p>The Common Weakness Enumeration (CWE) item associated with the detected
   *          vulnerability.</p>
   * @public
   */
  cwes: string[] | undefined;
}

/**
 * <p>A compute platform.</p>
 * @public
 */
export interface ComputePlatform {
  /**
   * <p>The compute platform vendor.</p>
   * @public
   */
  vendor?: string | undefined;

  /**
   * <p>The compute platform product.</p>
   * @public
   */
  product?: string | undefined;

  /**
   * <p>The compute platform version.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>The health and connectivity status of a connector, including the last time the status was checked and any diagnostic message. Returned as part of the <code>Connector</code> structure.</p>
 * @public
 */
export interface ConnectorHealth {
  /**
   * <p>The health status of the connector.</p>
   * @public
   */
  connectorStatus: ConnectorHealthStatus | undefined;

  /**
   * <p>The date and time when the connector health was last checked.</p>
   * @public
   */
  lastCheckedAt: Date | undefined;

  /**
   * <p>A message providing additional details about the connector health status.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Describes a connector that links an external cloud provider to Amazon Inspector for vulnerability scanning.</p>
 * @public
 */
export interface Connector {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector.</p>
   * @public
   */
  connectorArn: string | undefined;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The cloud provider for the connector.</p>
   * @public
   */
  provider: ConnectorCloudProvider | undefined;

  /**
   * <p>The enablement status of the connector, which indicates whether the connector is active and scanning resources.</p>
   * @public
   */
  enablementStatus?: EnablementStatus | undefined;

  /**
   * <p>Additional information about the current enablement status of the connector.</p>
   * @public
   */
  enablementStatusReason?: string | undefined;

  /**
   * <p>The health of the connector, which indicates whether Amazon Inspector can reach and scan the connected resources.</p>
   * @public
   */
  health?: ConnectorHealth | undefined;

  /**
   * <p>The date and time when the connector was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the connector was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Azure regions configured for the connector.</p>
   * @public
   */
  azureRegions?: string[] | undefined;

  /**
   * <p>The ARN of the Amazon Web Services Config connector associated with this connector.</p>
   * @public
   */
  awsConfigConnectorArn?: string | undefined;

  /**
   * <p>The Azure scope configuration for the connector.</p>
   * @public
   */
  scopeConfiguration?: AzureScopeConfiguration | undefined;

  /**
   * <p>The tags associated with the connector.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Specifies whether the VM scanner is automatically installed on connected resources.</p>
   * @public
   */
  autoInstallVMScanner?: boolean | undefined;
}

/**
 * <p>A filter that matches connectors by connector ARN.</p>
 * @public
 */
export interface ConnectorArnFilter {
  /**
   * <p>The comparison operator for the connector ARN filter.</p>
   * @public
   */
  comparison: ConnectorArnComparison | undefined;

  /**
   * <p>The connector ARN value to filter by.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The container image scanning settings for a connector, including how long pushed and pulled images continue to be rescanned for vulnerabilities.</p>
 * @public
 */
export interface ConnectorContainerImageScanConfiguration {
  /**
   * <p>The amount of time after a container image is pushed to a repository during which Amazon Inspector continues to rescan the image for vulnerabilities. Valid values are <code>LIFETIME</code>, <code>DAYS_3</code>, <code>DAYS_7</code>, <code>DAYS_14</code>, <code>DAYS_30</code>, <code>DAYS_60</code>, <code>DAYS_90</code>, and <code>DAYS_180</code>.</p>
   * @public
   */
  pushDuration?: ContainerImageRescanDuration | undefined;

  /**
   * <p>The amount of time after a container image is last pulled from a repository during which Amazon Inspector continues to rescan the image for vulnerabilities. Valid values are <code>DAYS_3</code>, <code>DAYS_7</code>, <code>DAYS_14</code>, <code>DAYS_30</code>, <code>DAYS_60</code>, <code>DAYS_90</code>, and <code>DAYS_180</code>.</p>
   * @public
   */
  pullDuration?: ContainerImagePullDateRescanDuration | undefined;
}

/**
 * <p>A filter that matches connectors by connector type.</p>
 * @public
 */
export interface ConnectorTypeFilter {
  /**
   * <p>The comparison operator for the connector type filter.</p>
   * @public
   */
  comparison: ConnectorTypeComparison | undefined;

  /**
   * <p>The connector type value to filter by.</p>
   * @public
   */
  value: ConnectorType | undefined;
}

/**
 * <p>A filter that matches connectors by cloud provider.</p>
 * @public
 */
export interface ProviderFilter {
  /**
   * <p>The comparison operator for the provider filter.</p>
   * @public
   */
  comparison: ProviderComparison | undefined;

  /**
   * <p>The cloud provider value to filter by.</p>
   * @public
   */
  value: ConnectorCloudProvider | undefined;
}

/**
 * <p>Contains the filter criteria for narrowing the results returned by a <code>ListConnectors</code> request. You can filter by connector ARN, Amazon Web Services account ID, Amazon Web Services Config connector ARN, connector type, or cloud provider.</p>
 * @public
 */
export interface ConnectorFilterCriteria {
  /**
   * <p>Filter by connector ARNs.</p>
   * @public
   */
  connectorArns?: ConnectorArnFilter[] | undefined;

  /**
   * <p>Filter by Amazon Web Services account IDs.</p>
   * @public
   */
  accounts?: StringFilter[] | undefined;

  /**
   * <p>Filter by Amazon Web Services Config connector ARNs.</p>
   * @public
   */
  awsConfigConnectorArns?: AwsConfigConnectorArnFilter[] | undefined;

  /**
   * <p>Filter by connector type.</p>
   * @public
   */
  connectorType?: ConnectorTypeFilter[] | undefined;

  /**
   * <p>Filter by cloud provider.</p>
   * @public
   */
  provider?: ProviderFilter[] | undefined;
}

/**
 * <p>The scan settings that Amazon Inspector applies to resources discovered through a connector.</p>
 * @public
 */
export interface ConnectorScanConfiguration {
  /**
   * <p>The container image scanning configuration, including push and pull duration settings.</p>
   * @public
   */
  containerImageScanning?: ConnectorContainerImageScanConfiguration | undefined;
}

/**
 * <p>Represents a scan configuration and the connectors it applies to. Returned in the results of a <code>ListConnectorScanConfigurations</code> request.</p>
 * @public
 */
export interface ConnectorScanConfigurationItem {
  /**
   * <p>The ARN of the Amazon Web Services Config connector.</p>
   * @public
   */
  awsConfigConnectorArn: string | undefined;

  /**
   * <p>The list of connector ARNs associated with this Amazon Web Services Config connector.</p>
   * @public
   */
  connectorArns: string[] | undefined;

  /**
   * <p>The scan configuration settings.</p>
   * @public
   */
  scanConfiguration: ConnectorScanConfiguration | undefined;
}

/**
 * <p>Contains metadata about a container image associated with a covered resource.</p>
 * @public
 */
export interface ContainerImageMetadata {
  /**
   * <p>The tags attached to the container image.</p>
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * <p>The date and time the container image was pulled.</p>
   * @public
   */
  imagePulledAt?: Date | undefined;

  /**
   * <p>The last time the container image was in use.</p>
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * <p>The number of times the container image is in use.</p>
   * @public
   */
  inUseCount?: number | undefined;
}

/**
 * <p>Contains metadata about a container registry associated with a covered resource.</p>
 * @public
 */
export interface ContainerRegistryMetadata {
  /**
   * <p>The name of the container registry.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Contains metadata about a container repository associated with a covered resource.</p>
 * @public
 */
export interface ContainerRepositoryMetadata {
  /**
   * <p>The name of the container repository.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The scan frequency for the container repository.</p>
   * @public
   */
  scanFrequency?: string | undefined;
}

/**
 * <p>a structure that contains information on the count of resources within a group.</p>
 * @public
 */
export interface Counts {
  /**
   * <p>The number of resources.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The key associated with this group</p>
   * @public
   */
  groupKey?: GroupKey | undefined;
}

/**
 * <p>Contains details of a coverage date filter.</p>
 * @public
 */
export interface CoverageDateFilter {
  /**
   * <p>A timestamp representing the start of the time period to filter results by.</p>
   * @public
   */
  startInclusive?: Date | undefined;

  /**
   * <p>A timestamp representing the end of the time period to filter results by.</p>
   * @public
   */
  endInclusive?: Date | undefined;
}

/**
 * <p>Contains details of a coverage string filter.</p>
 * @public
 */
export interface CoverageStringFilter {
  /**
   * <p>The operator to compare strings on.</p>
   * @public
   */
  comparison: CoverageStringComparison | undefined;

  /**
   * <p>The value to compare strings on.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Contains details of a coverage map filter.</p>
 * @public
 */
export interface CoverageMapFilter {
  /**
   * <p>The operator to compare coverage on.</p>
   * @public
   */
  comparison: CoverageMapComparison | undefined;

  /**
   * <p>The tag key associated with the coverage map filter.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag value associated with the coverage map filter.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The coverage number to be used in the filter.</p>
 * @public
 */
export interface CoverageNumberFilter {
  /**
   * <p>The upper inclusive for the coverage number.&gt;</p>
   * @public
   */
  upperInclusive?: number | undefined;

  /**
   * <p>The lower inclusive for the coverage number.</p>
   * @public
   */
  lowerInclusive?: number | undefined;
}

/**
 * <p>A structure that identifies filter criteria for
 *          <code>GetCoverageStatistics</code>.</p>
 * @public
 */
export interface CoverageFilterCriteria {
  /**
   * <p>The scan status code to filter on. Valid values are: <code>ValidationException</code>,
   *             <code>InternalServerException</code>, <code>ResourceNotFoundException</code>,
   *             <code>BadRequestException</code>, and <code>ThrottlingException</code>.</p>
   * @public
   */
  scanStatusCode?: CoverageStringFilter[] | undefined;

  /**
   * <p>The scan status reason to filter on.</p>
   * @public
   */
  scanStatusReason?: CoverageStringFilter[] | undefined;

  /**
   * <p>An array of Amazon Web Services account IDs to return coverage statistics for.</p>
   * @public
   */
  accountId?: CoverageStringFilter[] | undefined;

  /**
   * <p>An array of Amazon Web Services resource IDs to return coverage statistics for.</p>
   * @public
   */
  resourceId?: CoverageStringFilter[] | undefined;

  /**
   * <p>An array of Amazon Web Services resource types to return coverage statistics for. The values can be
   *             <code>AWS_EC2_INSTANCE</code>, <code>AWS_LAMBDA_FUNCTION</code>,
   *             <code>AWS_ECR_CONTAINER_IMAGE</code>, <code>AWS_ECR_REPOSITORY</code> or
   *             <code>AWS_ACCOUNT</code>.</p>
   * @public
   */
  resourceType?: CoverageStringFilter[] | undefined;

  /**
   * <p>An array of Amazon Inspector scan types to return coverage statistics for.</p>
   * @public
   */
  scanType?: CoverageStringFilter[] | undefined;

  /**
   * <p>The Amazon ECR repository name to filter on.</p>
   * @public
   */
  ecrRepositoryName?: CoverageStringFilter[] | undefined;

  /**
   * <p>The Amazon ECR image tags to filter on.</p>
   * @public
   */
  ecrImageTags?: CoverageStringFilter[] | undefined;

  /**
   * <p>The Amazon EC2 instance tags to filter on.</p>
   * @public
   */
  ec2InstanceTags?: CoverageMapFilter[] | undefined;

  /**
   * <p>Returns coverage statistics for Amazon Web Services Lambda functions filtered by function
   *          names.</p>
   * @public
   */
  lambdaFunctionName?: CoverageStringFilter[] | undefined;

  /**
   * <p>Returns coverage statistics for Amazon Web Services Lambda functions filtered by
   *          tag.</p>
   * @public
   */
  lambdaFunctionTags?: CoverageMapFilter[] | undefined;

  /**
   * <p>Returns coverage statistics for Amazon Web Services Lambda functions filtered by
   *          runtime.</p>
   * @public
   */
  lambdaFunctionRuntime?: CoverageStringFilter[] | undefined;

  /**
   * <p>Filters Amazon Web Services resources based on whether Amazon Inspector has checked them for vulnerabilities
   *          within the specified time range.</p>
   * @public
   */
  lastScannedAt?: CoverageDateFilter[] | undefined;

  /**
   * <p>The filter to search for Amazon EC2 instance coverage by scan mode. Valid values are
   *             <code>EC2_SSM_AGENT_BASED</code>, <code>EC2_AGENTLESS</code>, and <code>EC2_INSPECTOR_AGENT_BASED</code>.</p>
   * @public
   */
  scanMode?: CoverageStringFilter[] | undefined;

  /**
   * <p>The date an image was last pulled at.</p>
   * @public
   */
  imagePulledAt?: CoverageDateFilter[] | undefined;

  /**
   * <p>The Amazon ECR image that was last in use.</p>
   * @public
   */
  ecrImageLastInUseAt?: CoverageDateFilter[] | undefined;

  /**
   * <p>The number of Amazon ECR images in use.</p>
   * @public
   */
  ecrImageInUseCount?: CoverageNumberFilter[] | undefined;

  /**
   * <p>Filter criteria for code repositories based on project name.</p>
   * @public
   */
  codeRepositoryProjectName?: CoverageStringFilter[] | undefined;

  /**
   * <p>Filter criteria for code repositories based on provider type (such as GitHub, GitLab,
   *          etc.).</p>
   * @public
   */
  codeRepositoryProviderType?: CoverageStringFilter[] | undefined;

  /**
   * <p>Filter criteria for code repositories based on visibility setting (public or
   *          private).</p>
   * @public
   */
  codeRepositoryProviderTypeVisibility?: CoverageStringFilter[] | undefined;

  /**
   * <p>Filter criteria for code repositories based on the ID of the last scanned commit.</p>
   * @public
   */
  lastScannedCommitId?: CoverageStringFilter[] | undefined;

  /**
   * <p>The cloud provider to filter coverage results by.</p>
   * @public
   */
  cloudProvider?: CoverageStringFilter[] | undefined;

  /**
   * <p>The cloud provider account ID to filter coverage results by.</p>
   * @public
   */
  cloudProviderAccountId?: CoverageStringFilter[] | undefined;

  /**
   * <p>The cloud provider region to filter coverage results by.</p>
   * @public
   */
  cloudProviderRegion?: CoverageStringFilter[] | undefined;

  /**
   * <p>The cloud VM instance tags to filter coverage results by.</p>
   * @public
   */
  cloudVmInstanceTags?: CoverageMapFilter[] | undefined;

  /**
   * <p>The cloud container image tags to filter coverage results by.</p>
   * @public
   */
  cloudContainerImageTags?: CoverageStringFilter[] | undefined;

  /**
   * <p>The cloud container repository name to filter coverage results by.</p>
   * @public
   */
  cloudContainerRepositoryName?: CoverageStringFilter[] | undefined;

  /**
   * <p>The cloud container registry name to filter coverage results by.</p>
   * @public
   */
  cloudContainerRegistryName?: CoverageStringFilter[] | undefined;

  /**
   * <p>The cloud serverless function name to filter coverage results by.</p>
   * @public
   */
  cloudServerlessFunctionName?: CoverageStringFilter[] | undefined;

  /**
   * <p>The cloud serverless function runtime to filter coverage results by.</p>
   * @public
   */
  cloudServerlessFunctionRuntime?: CoverageStringFilter[] | undefined;

  /**
   * <p>The cloud serverless function tags to filter coverage results by.</p>
   * @public
   */
  cloudServerlessFunctionTags?: CoverageMapFilter[] | undefined;

  /**
   * <p>The cloud provider organization ID to filter coverage results by.</p>
   * @public
   */
  cloudProviderOrgId?: CoverageStringFilter[] | undefined;
}

/**
 * <p>Meta data details of an Amazon EC2 instance.</p>
 * @public
 */
export interface Ec2Metadata {
  /**
   * <p>The tags attached to the instance.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) used to launch the instance.</p>
   * @public
   */
  amiId?: string | undefined;

  /**
   * <p>The platform of the instance.</p>
   * @public
   */
  platform?: Ec2Platform | undefined;
}

/**
 * <p>Information on the Amazon ECR image metadata associated with a finding.</p>
 * @public
 */
export interface EcrContainerImageMetadata {
  /**
   * <p>Tags associated with the Amazon ECR image metadata.</p>
   * @public
   */
  tags?: string[] | undefined;

  /**
   * <p>The date an image was last pulled at.</p>
   * @public
   */
  imagePulledAt?: Date | undefined;

  /**
   * <p>The last time an Amazon ECR image was used in an Amazon ECS task or
   *             Amazon EKS pod.</p>
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * <p>The number of Amazon ECS tasks or Amazon EKS pods where the Amazon ECR container image is in use.</p>
   * @public
   */
  inUseCount?: number | undefined;
}

/**
 * <p>Information on the Amazon ECR repository metadata associated with a finding.</p>
 * @public
 */
export interface EcrRepositoryMetadata {
  /**
   * <p>The name of the Amazon ECR repository.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The frequency of scans.</p>
   * @public
   */
  scanFrequency?: EcrScanFrequency | undefined;
}

/**
 * <p>The Amazon Web Services Lambda function metadata.</p>
 * @public
 */
export interface LambdaFunctionMetadata {
  /**
   * <p>The resource tags on an Amazon Web Services Lambda function.</p>
   * @public
   */
  functionTags?: Record<string, string> | undefined;

  /**
   * <p>The layers for an Amazon Web Services Lambda function. A Lambda function can have up to
   *          five layers.</p>
   * @public
   */
  layers?: string[] | undefined;

  /**
   * <p>The name of a function.</p>
   * @public
   */
  functionName?: string | undefined;

  /**
   * <p>An Amazon Web Services Lambda function's runtime.</p>
   * @public
   */
  runtime?: Runtime | undefined;
}

/**
 * <p>Contains metadata about a serverless function associated with a covered resource.</p>
 * @public
 */
export interface ServerlessFunctionMetadata {
  /**
   * <p>The name of the serverless function.</p>
   * @public
   */
  serverlessFunctionName?: string | undefined;

  /**
   * <p>The runtime of the serverless function.</p>
   * @public
   */
  runtime?: string | undefined;

  /**
   * <p>The tags associated with the serverless function.</p>
   * @public
   */
  functionTags?: Record<string, string> | undefined;
}

/**
 * <p>Contains metadata about a virtual machine (VM) instance associated with a covered resource.</p>
 * @public
 */
export interface VmInstanceMetadata {
  /**
   * <p>The tags associated with the VM instance.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The platform of the VM instance.</p>
   * @public
   */
  platform?: VmPlatform | undefined;

  /**
   * <p>The inventory hash of the VM instance.</p>
   * @public
   */
  inventoryHash?: string | undefined;

  /**
   * <p>The image reference of the VM instance.</p>
   * @public
   */
  vmImageReference?: string | undefined;
}

/**
 * <p>An object that contains details about the metadata for an Amazon ECR resource.</p>
 * @public
 */
export interface ResourceScanMetadata {
  /**
   * <p>An object that contains details about the repository an Amazon ECR image resides in.</p>
   * @public
   */
  ecrRepository?: EcrRepositoryMetadata | undefined;

  /**
   * <p>An object that contains details about the container metadata for an Amazon ECR image.</p>
   * @public
   */
  ecrImage?: EcrContainerImageMetadata | undefined;

  /**
   * <p>An object that contains metadata details for an Amazon EC2 instance.</p>
   * @public
   */
  ec2?: Ec2Metadata | undefined;

  /**
   * <p>An object that contains metadata details for an Amazon Web Services Lambda
   *          function.</p>
   * @public
   */
  lambdaFunction?: LambdaFunctionMetadata | undefined;

  /**
   * <p>Contains metadata about scan coverage for a code repository resource.</p>
   * @public
   */
  codeRepository?: CodeRepositoryMetadata | undefined;

  /**
   * <p>The VM instance metadata associated with a covered resource.</p>
   * @public
   */
  vmInstance?: VmInstanceMetadata | undefined;

  /**
   * <p>The container image metadata associated with a covered resource.</p>
   * @public
   */
  containerImage?: ContainerImageMetadata | undefined;

  /**
   * <p>The container repository metadata associated with a covered resource.</p>
   * @public
   */
  containerRepository?: ContainerRepositoryMetadata | undefined;

  /**
   * <p>The container registry metadata associated with a covered resource.</p>
   * @public
   */
  containerRegistry?: ContainerRegistryMetadata | undefined;

  /**
   * <p>The serverless function metadata associated with a covered resource.</p>
   * @public
   */
  serverlessFunction?: ServerlessFunctionMetadata | undefined;
}

/**
 * <p>An object that contains details about a resource covered by Amazon Inspector.</p>
 * @public
 */
export interface CoveredResource {
  /**
   * <p>The type of the covered resource.</p>
   * @public
   */
  resourceType: CoverageResourceType | undefined;

  /**
   * <p>The ID of the covered resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the covered resource.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The Amazon Inspector scan type covering the resource.</p>
   * @public
   */
  scanType: ScanType | undefined;

  /**
   * <p>The status of the scan covering the resource.</p>
   * @public
   */
  scanStatus?: ScanStatus | undefined;

  /**
   * <p>An object that contains details about the metadata.</p>
   * @public
   */
  resourceMetadata?: ResourceScanMetadata | undefined;

  /**
   * <p>The date and time the resource was last checked for vulnerabilities.</p>
   * @public
   */
  lastScannedAt?: Date | undefined;

  /**
   * <p>The scan method that is applied to the instance.</p>
   * @public
   */
  scanMode?: ScanMode | undefined;

  /**
   * <p>The cloud provider of the covered resource.</p>
   * @public
   */
  provider?: Provider | undefined;

  /**
   * <p>The cloud provider account ID of the covered resource.</p>
   * @public
   */
  providerAccountId?: string | undefined;

  /**
   * <p>The cloud provider organization ID of the covered resource.</p>
   * @public
   */
  providerOrgId?: string | undefined;

  /**
   * <p>The cloud provider region of the covered resource.</p>
   * @public
   */
  providerRegion?: string | undefined;

  /**
   * <p>The cloud provider partition of the covered resource.</p>
   * @public
   */
  providerPartition?: string | undefined;
}

/**
 * <p>Creates CIS targets.</p>
 * @public
 */
export interface CreateCisTargets {
  /**
   * <p>The CIS target account ids.</p>
   * @public
   */
  accountIds: string[] | undefined;

  /**
   * <p>The CIS target resource tags.</p>
   * @public
   */
  targetResourceTags: Record<string, string[]> | undefined;
}

/**
 * @public
 */
export interface CreateCisScanConfigurationRequest {
  /**
   * <p>The scan name for the CIS scan configuration.</p>
   * @public
   */
  scanName: string | undefined;

  /**
   * <p> The security level for the CIS scan configuration. Security level refers to the
   *          Benchmark levels that CIS assigns to a profile. </p>
   * @public
   */
  securityLevel: CisSecurityLevel | undefined;

  /**
   * <p>The schedule for the CIS scan configuration.</p>
   * @public
   */
  schedule: Schedule | undefined;

  /**
   * <p>The targets for the CIS scan configuration.</p>
   * @public
   */
  targets: CreateCisTargets | undefined;

  /**
   * <p>The tags for the CIS scan configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCisScanConfigurationResponse {
  /**
   * <p>The scan configuration ARN for the CIS scan configuration.</p>
   * @public
   */
  scanConfigurationArn?: string | undefined;
}

/**
 * <p>Contains details required to create an integration with a self-managed GitLab
 *          instance.</p>
 * @public
 */
export interface CreateGitLabSelfManagedIntegrationDetail {
  /**
   * <p>The URL of the self-managed GitLab instance.</p>
   * @public
   */
  instanceUrl: string | undefined;

  /**
   * <p>The personal access token used to authenticate with the self-managed GitLab
   *          instance.</p>
   * @public
   */
  accessToken: string | undefined;
}

/**
 * <p>Contains details required to create a code security integration with a specific
 *          repository provider.</p>
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
   * <p>Details specific to creating an integration with a self-managed GitLab instance.</p>
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
   * <p>The name of the code security integration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of repository provider for the integration.</p>
   * @public
   */
  type: IntegrationType | undefined;

  /**
   * <p>The integration details specific to the repository provider type.</p>
   * @public
   */
  details?: CreateIntegrationDetail | undefined;

  /**
   * <p>The tags to apply to the code security integration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCodeSecurityIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created code security integration.</p>
   * @public
   */
  integrationArn: string | undefined;

  /**
   * <p>The current status of the code security integration.</p>
   * @public
   */
  status: IntegrationStatus | undefined;

  /**
   * <p>The URL used to authorize the integration with the repository provider.</p>
   * @public
   */
  authorizationUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreateCodeSecurityScanConfigurationRequest {
  /**
   * <p>The name of the scan configuration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The security level for the scan configuration.</p>
   * @public
   */
  level: ConfigurationLevel | undefined;

  /**
   * <p>The configuration settings for the code security scan.</p>
   * @public
   */
  configuration: CodeSecurityScanConfiguration | undefined;

  /**
   * <p>The scope settings that define which repositories will be scanned. Include this
   *          parameter to create a default scan configuration. Otherwise Amazon Inspector creates a general scan
   *          configuration. </p>
   *          <p>A default scan configuration automatically applies to all existing and future projects
   *          imported into Amazon Inspector. Use the <code>BatchAssociateCodeSecurityScanConfiguration</code>
   *          operation to associate a general scan configuration with projects.</p>
   * @public
   */
  scopeSettings?: ScopeSettings | undefined;

  /**
   * <p>The tags to apply to the scan configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCodeSecurityScanConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created scan configuration.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * <p>The provider-specific configuration details for creating a connector.</p>
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
   * <p>The Azure-specific details for creating a connector.</p>
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
   * <p>A unique, case-sensitive identifier that you provide to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the connector.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The cloud provider for the connector.</p>
   * @public
   */
  provider: ConnectorCloudProvider | undefined;

  /**
   * <p>A description of the connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The provider-specific configuration details for the connector.</p>
   * @public
   */
  providerDetail: ProviderDetailCreate | undefined;

  /**
   * <p>The tags to apply to the connector.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConnectorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created connector.</p>
   * @public
   */
  connectorArn: string | undefined;
}

/**
 * <p>An object that describes the details of a port range filter.</p>
 * @public
 */
export interface PortRangeFilter {
  /**
   * <p>The port number the port range begins at.</p>
   * @public
   */
  beginInclusive?: number | undefined;

  /**
   * <p>The port number the port range ends at.</p>
   * @public
   */
  endInclusive?: number | undefined;
}

/**
 * <p>Contains information on the details of a package filter.</p>
 * @public
 */
export interface PackageFilter {
  /**
   * <p>An object that contains details on the name of the package to filter on.</p>
   * @public
   */
  name?: StringFilter | undefined;

  /**
   * <p>The package version to filter on.</p>
   * @public
   */
  version?: StringFilter | undefined;

  /**
   * <p>An object that contains details on the package epoch to filter on.</p>
   * @public
   */
  epoch?: NumberFilter | undefined;

  /**
   * <p>An object that contains details on the package release to filter on.</p>
   * @public
   */
  release?: StringFilter | undefined;

  /**
   * <p>An object that contains details on the package architecture type to filter on.</p>
   * @public
   */
  architecture?: StringFilter | undefined;

  /**
   * <p>An object that contains details on the source layer hash to filter on.</p>
   * @public
   */
  sourceLayerHash?: StringFilter | undefined;

  /**
   * <p>An object that describes the details of a string filter.</p>
   * @public
   */
  sourceLambdaLayerArn?: StringFilter | undefined;

  /**
   * <p>An object that contains details on the package file path to filter on.</p>
   * @public
   */
  filePath?: StringFilter | undefined;
}

/**
 * <p>Details on the criteria used to define the filter.</p>
 * @public
 */
export interface FilterCriteria {
  /**
   * <p>Details on the finding ARNs used to filter findings.</p>
   * @public
   */
  findingArn?: StringFilter[] | undefined;

  /**
   * <p>Details of the Amazon Web Services account IDs used to filter findings.</p>
   * @public
   */
  awsAccountId?: StringFilter[] | undefined;

  /**
   * <p>Details on the finding types used to filter findings.</p>
   * @public
   */
  findingType?: StringFilter[] | undefined;

  /**
   * <p>Details on the severity used to filter findings.</p>
   * @public
   */
  severity?: StringFilter[] | undefined;

  /**
   * <p>Details on the date and time a finding was first seen used to filter findings.</p>
   * @public
   */
  firstObservedAt?: DateFilter[] | undefined;

  /**
   * <p>Details on the date and time a finding was last seen used to filter findings.</p>
   * @public
   */
  lastObservedAt?: DateFilter[] | undefined;

  /**
   * <p>Details on the date and time a finding was last updated at used to filter
   *          findings.</p>
   * @public
   */
  updatedAt?: DateFilter[] | undefined;

  /**
   * <p>Details on the finding status types used to filter findings.</p>
   * @public
   */
  findingStatus?: StringFilter[] | undefined;

  /**
   * <p>Details on the finding title used to filter findings.</p>
   * @public
   */
  title?: StringFilter[] | undefined;

  /**
   * <p>The Amazon Inspector score to filter on.</p>
   * @public
   */
  inspectorScore?: NumberFilter[] | undefined;

  /**
   * <p>Details on the resource types used to filter findings.</p>
   * @public
   */
  resourceType?: StringFilter[] | undefined;

  /**
   * <p>Details on the resource IDs used to filter findings.</p>
   * @public
   */
  resourceId?: StringFilter[] | undefined;

  /**
   * <p>Details on the resource tags used to filter findings.</p>
   * @public
   */
  resourceTags?: MapFilter[] | undefined;

  /**
   * <p>Details of the Amazon EC2 instance image IDs used to filter findings.</p>
   * @public
   */
  ec2InstanceImageId?: StringFilter[] | undefined;

  /**
   * <p>Details of the Amazon EC2 instance VPC IDs used to filter findings.</p>
   * @public
   */
  ec2InstanceVpcId?: StringFilter[] | undefined;

  /**
   * <p>Details of the Amazon EC2 instance subnet IDs used to filter findings.</p>
   * @public
   */
  ec2InstanceSubnetId?: StringFilter[] | undefined;

  /**
   * <p>Details on the Amazon ECR image push date and time used to filter findings.</p>
   * @public
   */
  ecrImagePushedAt?: DateFilter[] | undefined;

  /**
   * <p>Details of the Amazon ECR image architecture types used to filter findings.</p>
   * @public
   */
  ecrImageArchitecture?: StringFilter[] | undefined;

  /**
   * <p>Details on the Amazon ECR registry used to filter findings.</p>
   * @public
   */
  ecrImageRegistry?: StringFilter[] | undefined;

  /**
   * <p>Details on the name of the Amazon ECR repository used to filter findings.</p>
   * @public
   */
  ecrImageRepositoryName?: StringFilter[] | undefined;

  /**
   * <p>The tags attached to the Amazon ECR container image.</p>
   * @public
   */
  ecrImageTags?: StringFilter[] | undefined;

  /**
   * <p>Details of the Amazon ECR image hashes used to filter findings.</p>
   * @public
   */
  ecrImageHash?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria indicating when an Amazon ECR image was last used in an Amazon ECS cluster task or Amazon EKS cluster pod.</p>
   * @public
   */
  ecrImageLastInUseAt?: DateFilter[] | undefined;

  /**
   * <p>Filter criteria indicating when details for an Amazon ECR image include when an
   *             Amazon ECR image is in use.</p>
   * @public
   */
  ecrImageInUseCount?: NumberFilter[] | undefined;

  /**
   * <p>Details on the port ranges used to filter findings.</p>
   * @public
   */
  portRange?: PortRangeFilter[] | undefined;

  /**
   * <p>Details on network protocol used to filter findings.</p>
   * @public
   */
  networkProtocol?: StringFilter[] | undefined;

  /**
   * <p>Details of the component IDs used to filter findings.</p>
   * @public
   */
  componentId?: StringFilter[] | undefined;

  /**
   * <p>Details of the component types used to filter findings.</p>
   * @public
   */
  componentType?: StringFilter[] | undefined;

  /**
   * <p>Details on the vulnerability ID used to filter findings.</p>
   * @public
   */
  vulnerabilityId?: StringFilter[] | undefined;

  /**
   * <p>Details on the vulnerability type used to filter findings.</p>
   * @public
   */
  vulnerabilitySource?: StringFilter[] | undefined;

  /**
   * <p>Details on the vendor severity used to filter findings.</p>
   * @public
   */
  vendorSeverity?: StringFilter[] | undefined;

  /**
   * <p>Details on the vulnerable packages used to filter findings.</p>
   * @public
   */
  vulnerablePackages?: PackageFilter[] | undefined;

  /**
   * <p>Details on the related vulnerabilities used to filter findings.</p>
   * @public
   */
  relatedVulnerabilities?: StringFilter[] | undefined;

  /**
   * <p>Details on whether a fix is available through a version update. This value can be
   *             <code>YES</code>, <code>NO</code>, or <code>PARTIAL</code>. A <code>PARTIAL</code> fix
   *          means that some, but not all, of the packages identified in the finding have fixes
   *          available through updated versions.</p>
   * @public
   */
  fixAvailable?: StringFilter[] | undefined;

  /**
   * <p>Filters the list of Amazon Web Services Lambda functions by the name of the
   *          function.</p>
   * @public
   */
  lambdaFunctionName?: StringFilter[] | undefined;

  /**
   * <p>Filters the list of Amazon Web Services Lambda functions by the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html"> layers</a>. A
   *          Lambda function can have up to five layers.</p>
   * @public
   */
  lambdaFunctionLayers?: StringFilter[] | undefined;

  /**
   * <p>Filters the list of Amazon Web Services Lambda functions by the runtime environment for
   *          the Lambda function.</p>
   * @public
   */
  lambdaFunctionRuntime?: StringFilter[] | undefined;

  /**
   * <p>Filters the list of Amazon Web Services Lambda functions by the date and time that a user
   *          last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601
   *          format</a>
   *          </p>
   * @public
   */
  lambdaFunctionLastModifiedAt?: DateFilter[] | undefined;

  /**
   * <p>Filters the list of Amazon Web Services Lambda functions by execution role.</p>
   * @public
   */
  lambdaFunctionExecutionRoleArn?: StringFilter[] | undefined;

  /**
   * <p>Filters the list of Amazon Web Services Lambda findings by the availability of
   *          exploits.</p>
   * @public
   */
  exploitAvailable?: StringFilter[] | undefined;

  /**
   * <p>The name of the detector used to identify a code vulnerability in a Lambda function used
   *          to filter findings.</p>
   * @public
   */
  codeVulnerabilityDetectorName?: StringFilter[] | undefined;

  /**
   * <p>The detector type tag associated with the vulnerability used to filter findings.
   *          Detector tags group related vulnerabilities by common themes or tactics. For a list of
   *          available tags by programming language, see <a href="https://docs.aws.amazon.com/codeguru/detector-library/java/tags/">Java tags</a>, or <a href="https://docs.aws.amazon.com/codeguru/detector-library/python/tags/">Python tags</a>.
   *       </p>
   * @public
   */
  codeVulnerabilityDetectorTags?: StringFilter[] | undefined;

  /**
   * <p>The file path to the file in a Lambda function that contains a code vulnerability used
   *          to filter findings.</p>
   * @public
   */
  codeVulnerabilityFilePath?: StringFilter[] | undefined;

  /**
   * <p>The EPSS score used to filter findings.</p>
   * @public
   */
  epssScore?: NumberFilter[] | undefined;

  /**
   * <p>Filter criteria for findings based on the project name in a code repository.</p>
   * @public
   */
  codeRepositoryProjectName?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for findings based on the repository provider type (such as GitHub,
   *          GitLab, etc.).</p>
   * @public
   */
  codeRepositoryProviderType?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the cloud provider.</p>
   * @public
   */
  cloudProvider?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the cloud provider region.</p>
   * @public
   */
  cloudProviderRegion?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the cloud provider account ID.</p>
   * @public
   */
  cloudProviderAccountId?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the cloud provider organization ID.</p>
   * @public
   */
  cloudProviderOrgId?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the image reference of a VM instance.</p>
   * @public
   */
  cloudVmImageReference?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the network ID of a VM instance.</p>
   * @public
   */
  cloudVmNetworkId?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the subnet IDs of a VM instance.</p>
   * @public
   */
  cloudVmSubnetIds?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the repository name of a container image.</p>
   * @public
   */
  cloudImageRepositoryName?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the registry of a container image.</p>
   * @public
   */
  cloudImageRegistry?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the digest of a container image.</p>
   * @public
   */
  cloudImageDigest?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the tags of a container image.</p>
   * @public
   */
  cloudImageTags?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for when a container image was pushed.</p>
   * @public
   */
  cloudImagePushedAt?: DateFilter[] | undefined;

  /**
   * <p>Filter criteria for the architecture of a container image.</p>
   * @public
   */
  cloudImageArchitecture?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the last time a container image was in use.</p>
   * @public
   */
  cloudImageLastInUseAt?: DateFilter[] | undefined;

  /**
   * <p>Filter criteria for the in-use count of a container image.</p>
   * @public
   */
  cloudImageInUseCount?: NumberFilter[] | undefined;

  /**
   * <p>Filter criteria for the name of a serverless function.</p>
   * @public
   */
  cloudServerlessFunctionName?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for the runtime of a serverless function.</p>
   * @public
   */
  cloudServerlessFunctionRuntime?: StringFilter[] | undefined;

  /**
   * <p>Filter criteria for when a serverless function was last modified.</p>
   * @public
   */
  cloudServerlessFunctionLastModifiedAt?: DateFilter[] | undefined;

  /**
   * <p>Filter criteria for the execution role of a serverless function.</p>
   * @public
   */
  cloudServerlessFunctionExecutionRole?: StringFilter[] | undefined;
}

/**
 * @public
 */
export interface CreateFilterRequest {
  /**
   * <p>Defines the action that is to be applied to the findings that match the filter.</p>
   * @public
   */
  action: FilterAction | undefined;

  /**
   * <p>A description of the filter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Defines the criteria to be used in the filter for querying findings.</p>
   * @public
   */
  filterCriteria: FilterCriteria | undefined;

  /**
   * <p>The name of the filter. Minimum length of 3. Maximum length of 64. Valid characters
   *          include alphanumeric characters, dot (.), underscore (_), and dash (-). Spaces are not
   *          allowed.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A list of tags for the filter.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The reason for creating the filter.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface CreateFilterResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the successfully created filter.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Contains details of the Amazon S3 bucket and KMS key used to export findings.</p>
 * @public
 */
export interface Destination {
  /**
   * <p>The name of the Amazon S3 bucket to export findings to.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>The prefix that the findings will be written under.</p>
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * <p>The ARN of the KMS key used to encrypt data when exporting findings.</p>
   * @public
   */
  kmsKeyArn: string | undefined;
}

/**
 * @public
 */
export interface CreateFindingsReportRequest {
  /**
   * <p>The filter criteria to apply to the results of the finding report.</p>
   * @public
   */
  filterCriteria?: FilterCriteria | undefined;

  /**
   * <p>The format to generate the report in.</p>
   * @public
   */
  reportFormat: ReportFormat | undefined;

  /**
   * <p>The Amazon S3 export destination for the report.</p>
   * @public
   */
  s3Destination: Destination | undefined;
}

/**
 * @public
 */
export interface CreateFindingsReportResponse {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  reportId?: string | undefined;
}

/**
 * <p>A resource string filter for a software bill of materials report.</p>
 * @public
 */
export interface ResourceStringFilter {
  /**
   * <p>The filter's comparison.</p>
   * @public
   */
  comparison: ResourceStringComparison | undefined;

  /**
   * <p>The filter's value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>A resource map filter for a software bill of material report.</p>
 * @public
 */
export interface ResourceMapFilter {
  /**
   * <p>The filter's comparison.</p>
   * @public
   */
  comparison: ResourceMapComparison | undefined;

  /**
   * <p>The filter's key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The filter's value.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>The resource filter criteria for a Software bill of materials (SBOM) report.</p>
 * @public
 */
export interface ResourceFilterCriteria {
  /**
   * <p>The account IDs used as resource filter criteria.</p>
   * @public
   */
  accountId?: ResourceStringFilter[] | undefined;

  /**
   * <p>The resource IDs used as resource filter criteria.</p>
   * @public
   */
  resourceId?: ResourceStringFilter[] | undefined;

  /**
   * <p>The resource types used as resource filter criteria.</p>
   * @public
   */
  resourceType?: ResourceStringFilter[] | undefined;

  /**
   * <p>The ECR repository names used as resource filter criteria.</p>
   * @public
   */
  ecrRepositoryName?: ResourceStringFilter[] | undefined;

  /**
   * <p>The Amazon Web Services Lambda function name used as resource filter criteria.</p>
   * @public
   */
  lambdaFunctionName?: ResourceStringFilter[] | undefined;

  /**
   * <p>The ECR image tags used as resource filter criteria.</p>
   * @public
   */
  ecrImageTags?: ResourceStringFilter[] | undefined;

  /**
   * <p>The EC2 instance tags used as resource filter criteria.</p>
   * @public
   */
  ec2InstanceTags?: ResourceMapFilter[] | undefined;

  /**
   * <p>The Amazon Web Services Lambda function tags used as resource filter criteria.</p>
   * @public
   */
  lambdaFunctionTags?: ResourceMapFilter[] | undefined;
}

/**
 * @public
 */
export interface CreateSbomExportRequest {
  /**
   * <p>The resource filter criteria for the software bill of materials (SBOM) report.</p>
   * @public
   */
  resourceFilterCriteria?: ResourceFilterCriteria | undefined;

  /**
   * <p>The output format for the software bill of materials (SBOM) report.</p>
   * @public
   */
  reportFormat: SbomReportFormat | undefined;

  /**
   * <p>Contains details of the Amazon S3 bucket and KMS key used to export findings.</p>
   * @public
   */
  s3Destination: Destination | undefined;
}

/**
 * @public
 */
export interface CreateSbomExportResponse {
  /**
   * <p>The report ID for the software bill of materials (SBOM) report.</p>
   * @public
   */
  reportId?: string | undefined;
}

/**
 * <p>The Common Vulnerability Scoring System (CVSS) version 2 details for the
 *          vulnerability.</p>
 * @public
 */
export interface Cvss2 {
  /**
   * <p>The CVSS v2 base score for the vulnerability.</p>
   * @public
   */
  baseScore?: number | undefined;

  /**
   * <p>The scoring vector associated with the CVSS v2 score.</p>
   * @public
   */
  scoringVector?: string | undefined;
}

/**
 * <p>The Common Vulnerability Scoring System (CVSS) version 3 details for the
 *          vulnerability.</p>
 * @public
 */
export interface Cvss3 {
  /**
   * <p>The CVSS v3 base score for the vulnerability.</p>
   * @public
   */
  baseScore?: number | undefined;

  /**
   * <p>The scoring vector associated with the CVSS v3 score.</p>
   * @public
   */
  scoringVector?: string | undefined;
}

/**
 * <p>The Common Vulnerability Scoring System (CVSS) version 4 details for the vulnerability.</p>
 * @public
 */
export interface Cvss4 {
  /**
   * <p>The base CVSS v4 score for the vulnerability finding, which rates the severity of the vulnerability on a scale from 0 to 10.</p>
   * @public
   */
  baseScore?: number | undefined;

  /**
   * <p>The CVSS v4 scoring vector, which contains the metrics and measurements that were used to calculate the base score.</p>
   * @public
   */
  scoringVector?: string | undefined;
}

/**
 * <p>The CVSS score for a finding.</p>
 * @public
 */
export interface CvssScore {
  /**
   * <p>The base CVSS score used for the finding.</p>
   * @public
   */
  baseScore: number | undefined;

  /**
   * <p>The vector string of the CVSS score.</p>
   * @public
   */
  scoringVector: string | undefined;

  /**
   * <p>The version of CVSS used for the score.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The source of the CVSS score.</p>
   * @public
   */
  source: string | undefined;
}

/**
 * <p>Details on adjustments Amazon Inspector made to the CVSS score for a finding.</p>
 * @public
 */
export interface CvssScoreAdjustment {
  /**
   * <p>The metric used to adjust the CVSS score.</p>
   * @public
   */
  metric: string | undefined;

  /**
   * <p>The reason the CVSS score has been adjustment.</p>
   * @public
   */
  reason: string | undefined;
}

/**
 * <p>Information about the CVSS score.</p>
 * @public
 */
export interface CvssScoreDetails {
  /**
   * <p>The source for the CVSS score.</p>
   * @public
   */
  scoreSource: string | undefined;

  /**
   * <p>The source of the CVSS data.</p>
   * @public
   */
  cvssSource?: string | undefined;

  /**
   * <p>The CVSS version used in scoring.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The CVSS score.</p>
   * @public
   */
  score: number | undefined;

  /**
   * <p>The vector for the CVSS score.</p>
   * @public
   */
  scoringVector: string | undefined;

  /**
   * <p>An object that contains details about adjustment Amazon Inspector made to the CVSS score.</p>
   * @public
   */
  adjustments?: CvssScoreAdjustment[] | undefined;
}

/**
 * <p>Details of the Amazon Inspector delegated administrator for your organization.</p>
 * @public
 */
export interface DelegatedAdmin {
  /**
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for your organization.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The status of the Amazon Inspector delegated administrator.</p>
   * @public
   */
  relationshipStatus?: RelationshipStatus | undefined;
}

/**
 * <p>Details of the Amazon Inspector delegated administrator for your organization.</p>
 * @public
 */
export interface DelegatedAdminAccount {
  /**
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for your organization.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The status of the Amazon Inspector delegated administrator.</p>
   * @public
   */
  status?: DelegatedAdminStatus | undefined;
}

/**
 * @public
 */
export interface DeleteCisScanConfigurationRequest {
  /**
   * <p>The ARN of the CIS scan configuration.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCisScanConfigurationResponse {
  /**
   * <p>The ARN of the CIS scan configuration.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeSecurityIntegrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the code security integration to delete.</p>
   * @public
   */
  integrationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeSecurityIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted code security integration.</p>
   * @public
   */
  integrationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeSecurityScanConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration to delete.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeSecurityScanConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted scan configuration.</p>
   * @public
   */
  scanConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the connector to delete.</p>
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
   * <p>The Amazon Resource Number (ARN) of the filter to be deleted.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFilterResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the filter that has been deleted.</p>
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
   * <p>The scan types are automatically enabled for new members of your organization.</p>
   * @public
   */
  autoEnable?: AutoEnable | undefined;

  /**
   * <p>Represents whether your organization has reached the maximum Amazon Web Services account limit for
   *          Amazon Inspector.</p>
   * @public
   */
  maxAccountLimitReached?: boolean | undefined;
}

/**
 * @public
 */
export interface DisableRequest {
  /**
   * <p>An array of account IDs you want to disable Amazon Inspector scans for.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The resource scan types you want to disable.</p>
   * @public
   */
  resourceTypes?: ResourceScanType[] | undefined;
}

/**
 * @public
 */
export interface DisableResponse {
  /**
   * <p>Information on the accounts that have had Amazon Inspector scans successfully disabled. Details are
   *          provided for each account.</p>
   * @public
   */
  accounts: Account[] | undefined;

  /**
   * <p>Information on any accounts for which Amazon Inspector scans could not be disabled. Details are
   *          provided for each account.</p>
   * @public
   */
  failedAccounts?: FailedAccount[] | undefined;
}

/**
 * @public
 */
export interface DisableDelegatedAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID of the current Amazon Inspector delegated administrator.</p>
   * @public
   */
  delegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisableDelegatedAdminAccountResponse {
  /**
   * <p>The Amazon Web Services account ID of the successfully disabled delegated administrator.</p>
   * @public
   */
  delegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberRequest {
  /**
   * <p>The Amazon Web Services account ID of the member account to disassociate.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberResponse {
  /**
   * <p>The Amazon Web Services account ID of the successfully disassociated member.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p>Enables agent-based scanning, which scans instances that are not managed by SSM.</p>
 * @public
 */
export interface Ec2Configuration {
  /**
   * <p>The scan method that is applied to the instance.</p>
   * @public
   */
  scanMode: Ec2ScanMode | undefined;

  /**
   * <p>Whether to activate Amazon Inspector VM scanner for Amazon EC2 scanning.</p>
   * @public
   */
  activateVMScanner?: boolean | undefined;
}

/**
 * <p>The state of your Amazon EC2 scan mode configuration.</p>
 * @public
 */
export interface Ec2ScanModeState {
  /**
   * <p>The scan method that is applied to the instance.</p>
   * @public
   */
  scanMode?: Ec2ScanMode | undefined;

  /**
   * <p>The status of the Amazon EC2 scan mode setting.</p>
   * @public
   */
  scanModeStatus?: Ec2ScanModeStatus | undefined;
}

/**
 * <p>The state of the Amazon Inspector VM scanner.</p>
 * @public
 */
export interface VMScannerState {
  /**
   * <p>Whether the VM scanner is activated.</p>
   * @public
   */
  activated?: boolean | undefined;

  /**
   * <p>The date and time the VM scanner was activated.</p>
   * @public
   */
  activatedAt?: Date | undefined;

  /**
   * <p>The status of the VM scanner.</p>
   * @public
   */
  status?: VMScannerStatus | undefined;
}

/**
 * <p>Details about the state of the EC2 scan configuration for your environment.</p>
 * @public
 */
export interface Ec2ConfigurationState {
  /**
   * <p>An object that contains details about the state of the Amazon EC2 scan mode.</p>
   * @public
   */
  scanModeState?: Ec2ScanModeState | undefined;

  /**
   * <p>An object that contains details about the state of the Amazon Inspector VM scanner.</p>
   * @public
   */
  vmScannerState?: VMScannerState | undefined;
}

/**
 * <p>Details about the ECR automated re-scan duration setting for your environment.</p>
 * @public
 */
export interface EcrConfiguration {
  /**
   * <p>The rescan duration configured for image push date.</p>
   * @public
   */
  rescanDuration: EcrRescanDuration | undefined;

  /**
   * <p>The rescan duration configured for image pull date.</p>
   * @public
   */
  pullDateRescanDuration?: EcrPullDateRescanDuration | undefined;

  /**
   * <p>The pull date for the re-scan mode.</p>
   * @public
   */
  pullDateRescanMode?: EcrPullDateRescanMode | undefined;
}

/**
 * <p>Details about the state of your ECR re-scan duration settings. The ECR re-scan duration
 *          defines how long an ECR image will be actively scanned by Amazon Inspector. When the number of days
 *          since an image was last pushed exceeds the duration configured for image pull date, and the
 *          duration configured for image pull date, the monitoring state of that image becomes
 *             <code>inactive</code> and all associated findings are scheduled for closure.</p>
 * @public
 */
export interface EcrRescanDurationState {
  /**
   * <p>The rescan duration configured for image push date. </p>
   * @public
   */
  rescanDuration?: EcrRescanDuration | undefined;

  /**
   * <p>The status of changes to the ECR automated re-scan duration.</p>
   * @public
   */
  status?: EcrRescanDurationStatus | undefined;

  /**
   * <p>A timestamp representing when the last time the ECR scan duration setting was
   *          changed.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The rescan duration configured for image pull date.</p>
   * @public
   */
  pullDateRescanDuration?: EcrPullDateRescanDuration | undefined;

  /**
   * <p>The pull date for the re-scan mode.</p>
   * @public
   */
  pullDateRescanMode?: EcrPullDateRescanMode | undefined;
}

/**
 * <p>Details about the state of the ECR scans for your environment.</p>
 * @public
 */
export interface EcrConfigurationState {
  /**
   * <p>An object that contains details about the state of the ECR re-scan settings.</p>
   * @public
   */
  rescanDurationState?: EcrRescanDurationState | undefined;
}

/**
 * @public
 */
export interface EnableRequest {
  /**
   * <p>A list of account IDs you want to enable Amazon Inspector scans for.</p>
   * @public
   */
  accountIds?: string[] | undefined;

  /**
   * <p>The resource scan types you want to enable.</p>
   * @public
   */
  resourceTypes: ResourceScanType[] | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface EnableResponse {
  /**
   * <p>Information on the accounts that have had Amazon Inspector scans successfully enabled. Details are
   *          provided for each account.</p>
   * @public
   */
  accounts: Account[] | undefined;

  /**
   * <p>Information on any accounts for which Amazon Inspector scans could not be enabled. Details are
   *          provided for each account.</p>
   * @public
   */
  failedAccounts?: FailedAccount[] | undefined;
}

/**
 * @public
 */
export interface EnableDelegatedAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator.</p>
   * @public
   */
  delegatedAdminAccountId: string | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface EnableDelegatedAdminAccountResponse {
  /**
   * <p>The Amazon Web Services account ID of the successfully Amazon Inspector delegated administrator.</p>
   * @public
   */
  delegatedAdminAccountId: string | undefined;
}

/**
 * <p>Details about the Exploit Prediction Scoring System (EPSS) score.</p>
 * @public
 */
export interface Epss {
  /**
   * <p>The Exploit Prediction Scoring System (EPSS) score.</p>
   * @public
   */
  score?: number | undefined;
}

/**
 * <p>Details about the Exploit Prediction Scoring System (EPSS) score for a finding.</p>
 * @public
 */
export interface EpssDetails {
  /**
   * <p>The EPSS score.</p>
   * @public
   */
  score?: number | undefined;
}

/**
 * <p>The details of an exploit available for a finding discovered in your environment.</p>
 * @public
 */
export interface ExploitabilityDetails {
  /**
   * <p>The date and time of the last exploit associated with a finding discovered in your
   *          environment.</p>
   * @public
   */
  lastKnownExploitAt?: Date | undefined;
}

/**
 * <p>Details about a filter.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The Amazon Resource Number (ARN) associated with this filter.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account that created the filter.</p>
   * @public
   */
  ownerId: string | undefined;

  /**
   * <p>The name of the filter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Details on the filter criteria associated with this filter.</p>
   * @public
   */
  criteria: FilterCriteria | undefined;

  /**
   * <p>The action that is to be applied to the findings that match the filter.</p>
   * @public
   */
  action: FilterAction | undefined;

  /**
   * <p>The date and time this filter was created at.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the filter was last updated at.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>A description of the filter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The reason for the filter.</p>
   * @public
   */
  reason?: string | undefined;

  /**
   * <p>The tags attached to the filter.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Information about the Amazon Inspector score given to a finding.</p>
 * @public
 */
export interface InspectorScoreDetails {
  /**
   * <p>An object that contains details about the CVSS score given to a finding.</p>
   * @public
   */
  adjustedCvss?: CvssScoreDetails | undefined;
}

/**
 * <p>Details about the step associated with a finding.</p>
 * @public
 */
export interface Step {
  /**
   * <p>The component ID.</p>
   * @public
   */
  componentId: string | undefined;

  /**
   * <p>The component type.</p>
   * @public
   */
  componentType: string | undefined;

  /**
   * <p>The component ARN. The ARN can be null and is not displayed in the Amazon Web Services
   *          console.</p>
   * @public
   */
  componentArn?: string | undefined;
}

/**
 * <p>Information on the network path associated with a finding.</p>
 * @public
 */
export interface NetworkPath {
  /**
   * <p>The details on the steps in the network path.</p>
   * @public
   */
  steps?: Step[] | undefined;
}

/**
 * <p>Details about the port range associated with a finding.</p>
 * @public
 */
export interface PortRange {
  /**
   * <p>The beginning port in a port range.</p>
   * @public
   */
  begin: number | undefined;

  /**
   * <p>The ending port in a port range.</p>
   * @public
   */
  end: number | undefined;
}

/**
 * <p>Contains the details of a network reachability finding.</p>
 * @public
 */
export interface NetworkReachabilityDetails {
  /**
   * <p>An object that contains details about the open port range associated with a
   *          finding.</p>
   * @public
   */
  openPortRange: PortRange | undefined;

  /**
   * <p>The protocol associated with a finding.</p>
   * @public
   */
  protocol: NetworkProtocol | undefined;

  /**
   * <p>An object that contains details about a network path associated with a finding.</p>
   * @public
   */
  networkPath: NetworkPath | undefined;
}

/**
 * <p>Information on the vulnerable package identified by a finding.</p>
 * @public
 */
export interface VulnerablePackage {
  /**
   * <p>The name of the vulnerable package.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the vulnerable package.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The source layer hash of the vulnerable package.</p>
   * @public
   */
  sourceLayerHash?: string | undefined;

  /**
   * <p>The epoch of the vulnerable package.</p>
   * @public
   */
  epoch?: number | undefined;

  /**
   * <p>The release of the vulnerable package.</p>
   * @public
   */
  release?: string | undefined;

  /**
   * <p>The architecture of the vulnerable package.</p>
   * @public
   */
  arch?: string | undefined;

  /**
   * <p>The package manager of the vulnerable package.</p>
   * @public
   */
  packageManager?: PackageManager | undefined;

  /**
   * <p>The file path of the vulnerable package.</p>
   * @public
   */
  filePath?: string | undefined;

  /**
   * <p>The version of the package that contains the vulnerability fix.</p>
   * @public
   */
  fixedInVersion?: string | undefined;

  /**
   * <p>The code to run in your environment to update packages with a fix available.</p>
   * @public
   */
  remediation?: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the Amazon Web Services Lambda function affected by a
   *          finding.</p>
   * @public
   */
  sourceLambdaLayerArn?: string | undefined;
}

/**
 * <p>Information about a package vulnerability finding.</p>
 * @public
 */
export interface PackageVulnerabilityDetails {
  /**
   * <p>The ID given to this vulnerability.</p>
   * @public
   */
  vulnerabilityId: string | undefined;

  /**
   * <p>The packages impacted by this vulnerability.</p>
   * @public
   */
  vulnerablePackages?: VulnerablePackage[] | undefined;

  /**
   * <p>The source of the vulnerability information.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>An object that contains details about the CVSS score of a finding.</p>
   * @public
   */
  cvss?: CvssScore[] | undefined;

  /**
   * <p>One or more vulnerabilities related to the one identified in this finding.</p>
   * @public
   */
  relatedVulnerabilities?: string[] | undefined;

  /**
   * <p>A URL to the source of the vulnerability information.</p>
   * @public
   */
  sourceUrl?: string | undefined;

  /**
   * <p>The severity the vendor has given to this vulnerability type.</p>
   * @public
   */
  vendorSeverity?: string | undefined;

  /**
   * <p>The date and time that this vulnerability was first added to the vendor's
   *          database.</p>
   * @public
   */
  vendorCreatedAt?: Date | undefined;

  /**
   * <p>The date and time the vendor last updated this vulnerability in their database.</p>
   * @public
   */
  vendorUpdatedAt?: Date | undefined;

  /**
   * <p>One or more URLs that contain details about this vulnerability type.</p>
   * @public
   */
  referenceUrls?: string[] | undefined;
}

/**
 * <p>Details about the recommended course of action to remediate the finding.</p>
 * @public
 */
export interface Recommendation {
  /**
   * <p>The recommended course of action to remediate the finding.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>The URL address to the CVE remediation recommendations.</p>
   * @public
   */
  Url?: string | undefined;
}

/**
 * <p>Information on how to remediate a finding.</p>
 * @public
 */
export interface Remediation {
  /**
   * <p>An object that contains information about the recommended course of action to remediate
   *          the finding.</p>
   * @public
   */
  recommendation?: Recommendation | undefined;
}

/**
 * <p>Contains details about a container image involved in a finding.</p>
 * @public
 */
export interface Image {
  /**
   * <p>The name of the repository the container image resides in.</p>
   * @public
   */
  repositoryName?: string | undefined;

  /**
   * <p>The registry for the container image.</p>
   * @public
   */
  registry?: string | undefined;

  /**
   * <p>The image tags attached to the container image.</p>
   * @public
   */
  imageTags?: string[] | undefined;

  /**
   * <p>The image digest of the container image.</p>
   * @public
   */
  imageDigest?: string | undefined;

  /**
   * <p>The date and time the container image was pushed.</p>
   * @public
   */
  pushedAt?: Date | undefined;

  /**
   * <p>The architecture of the container image.</p>
   * @public
   */
  architecture?: string | undefined;

  /**
   * <p>The author of the container image.</p>
   * @public
   */
  author?: string | undefined;

  /**
   * <p>The number of times the container image is in use.</p>
   * @public
   */
  inUseCount?: number | undefined;

  /**
   * <p>The last time the container image was in use.</p>
   * @public
   */
  lastInUseAt?: Date | undefined;

  /**
   * <p>The platform of the container image.</p>
   * @public
   */
  platform?: string | undefined;
}

/**
 * <p>Contains details about a serverless function involved in a finding.</p>
 * @public
 */
export interface ServerlessFunction {
  /**
   * <p>The name of the serverless function.</p>
   * @public
   */
  serverlessFunctionName?: string | undefined;

  /**
   * <p>The runtime of the serverless function.</p>
   * @public
   */
  runtime?: string | undefined;

  /**
   * <p>The version of the serverless function.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The code digest of the serverless function.</p>
   * @public
   */
  codeDigest?: string | undefined;

  /**
   * <p>The date and time the serverless function was last modified.</p>
   * @public
   */
  lastModifiedAt?: Date | undefined;

  /**
   * <p>The network ID associated with the serverless function.</p>
   * @public
   */
  networkId?: string | undefined;

  /**
   * <p>The subnet IDs associated with the serverless function.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The security group IDs associated with the serverless function.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The execution role of the serverless function.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The package type of the serverless function.</p>
   * @public
   */
  packageType?: PackageType | undefined;

  /**
   * <p>The architectures of the serverless function.</p>
   * @public
   */
  architectures?: Architecture[] | undefined;

  /**
   * <p>The layers of the serverless function.</p>
   * @public
   */
  layers?: string[] | undefined;
}

/**
 * <p>Contains details about a VM instance involved in a finding.</p>
 * @public
 */
export interface Vm {
  /**
   * <p>The type of the VM instance.</p>
   * @public
   */
  type?: string | undefined;

  /**
   * <p>The name of the VM instance.</p>
   * @public
   */
  vmName?: string | undefined;

  /**
   * <p>The image reference of the VM instance.</p>
   * @public
   */
  vmImageReference?: string | undefined;

  /**
   * <p>The IPv4 addresses of the VM instance.</p>
   * @public
   */
  ipV4Addresses?: string[] | undefined;

  /**
   * <p>The IPv6 addresses of the VM instance.</p>
   * @public
   */
  ipV6Addresses?: string[] | undefined;

  /**
   * <p>The network ID associated with the VM instance.</p>
   * @public
   */
  networkId?: string | undefined;

  /**
   * <p>The subnet IDs of the VM instance.</p>
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * <p>The security group IDs associated with the VM instance.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>The date and time the VM instance was launched.</p>
   * @public
   */
  launchedAt?: Date | undefined;

  /**
   * <p>The platform of the VM instance.</p>
   * @public
   */
  platform?: string | undefined;

  /**
   * <p>The execution role of the VM instance.</p>
   * @public
   */
  executionRole?: string | undefined;

  /**
   * <p>The key name associated with the VM instance.</p>
   * @public
   */
  keyName?: string | undefined;
}

/**
 * <p>Contains details about the resource involved in the finding.</p>
 * @public
 */
export interface ResourceDetails {
  /**
   * <p>An object that contains details about the Amazon EC2 instance involved in the finding.</p>
   * @public
   */
  awsEc2Instance?: AwsEc2InstanceDetails | undefined;

  /**
   * <p>An object that contains details about the Amazon ECR container image involved in the
   *          finding.</p>
   * @public
   */
  awsEcrContainerImage?: AwsEcrContainerImageDetails | undefined;

  /**
   * <p>A summary of the information about an Amazon Web Services Lambda function affected by a
   *          finding.</p>
   * @public
   */
  awsLambdaFunction?: AwsLambdaFunctionDetails | undefined;

  /**
   * <p>Contains details about a code repository resource associated with a finding.</p>
   * @public
   */
  codeRepository?: CodeRepositoryDetails | undefined;

  /**
   * <p>An object that contains details about a VM instance involved in the finding.</p>
   * @public
   */
  vm?: Vm | undefined;

  /**
   * <p>An object that contains details about a container image involved in the finding.</p>
   * @public
   */
  image?: Image | undefined;

  /**
   * <p>An object that contains details about a serverless function involved in the finding.</p>
   * @public
   */
  serverlessFunction?: ServerlessFunction | undefined;
}

/**
 * <p>Details about the resource involved in a finding.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The type of resource.</p>
   * @public
   */
  type: ResourceType | undefined;

  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The partition of the resource.</p>
   * @public
   */
  partition?: string | undefined;

  /**
   * <p>The Amazon Web Services Region the impacted resource is located in.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The tags attached to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An object that contains details about the resource involved in a finding.</p>
   * @public
   */
  details?: ResourceDetails | undefined;

  /**
   * <p>The cloud provider of the resource.</p>
   * @public
   */
  provider?: Provider | undefined;

  /**
   * <p>The cloud provider account ID of the resource.</p>
   * @public
   */
  providerAccountId?: string | undefined;

  /**
   * <p>The cloud provider organization ID of the resource.</p>
   * @public
   */
  providerOrgId?: string | undefined;
}

/**
 * <p>Details about an Amazon Inspector finding.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The Amazon Resource Number (ARN) of the finding.</p>
   * @public
   */
  findingArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the finding.</p>
   * @public
   */
  awsAccountId: string | undefined;

  /**
   * <p>The type of the finding. The <code>type</code> value determines the valid values for
   *             <code>resource</code> in your request. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-types.html">Finding
   *             types</a> in the Amazon Inspector user guide.</p>
   * @public
   */
  type: FindingType | undefined;

  /**
   * <p>The description of the finding.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The title of the finding.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>An object that contains the details about how to remediate a finding.</p>
   * @public
   */
  remediation: Remediation | undefined;

  /**
   * <p>The severity of the finding. <code>UNTRIAGED</code> applies to
   *             <code>PACKAGE_VULNERABILITY</code> type findings that the vendor has not assigned a
   *          severity yet. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html">Severity levels for findings</a> in the Amazon Inspector user guide.</p>
   * @public
   */
  severity: Severity | undefined;

  /**
   * <p>The date and time that the finding was first observed.</p>
   * @public
   */
  firstObservedAt: Date | undefined;

  /**
   * <p> The date and time the finding was last observed. This timestamp for this field remains
   *          unchanged until a finding is updated. </p>
   * @public
   */
  lastObservedAt: Date | undefined;

  /**
   * <p>The date and time the finding was last updated at.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The status of the finding.</p>
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * <p>Contains information on the resources involved in a finding. The <code>resource</code>
   *          value determines the valid values for <code>type</code> in your request. For more
   *          information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-types.html">Finding
   *             types</a> in the Amazon Inspector user guide.</p>
   * @public
   */
  resources: Resource[] | undefined;

  /**
   * <p>The Amazon Inspector score given to the finding.</p>
   * @public
   */
  inspectorScore?: number | undefined;

  /**
   * <p>An object that contains details of the Amazon Inspector score.</p>
   * @public
   */
  inspectorScoreDetails?: InspectorScoreDetails | undefined;

  /**
   * <p>An object that contains the details of a network reachability finding.</p>
   * @public
   */
  networkReachabilityDetails?: NetworkReachabilityDetails | undefined;

  /**
   * <p>An object that contains the details of a package vulnerability finding.</p>
   * @public
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails | undefined;

  /**
   * <p>Details on whether a fix is available through a version update. This value can be
   *             <code>YES</code>, <code>NO</code>, or <code>PARTIAL</code>. A <code>PARTIAL</code> fix
   *          means that some, but not all, of the packages identified in the finding have fixes
   *          available through updated versions.</p>
   * @public
   */
  fixAvailable?: FixAvailable | undefined;

  /**
   * <p>If a finding discovered in your environment has an exploit available.</p>
   * @public
   */
  exploitAvailable?: ExploitAvailable | undefined;

  /**
   * <p>The details of an exploit available for a finding discovered in your environment.</p>
   * @public
   */
  exploitabilityDetails?: ExploitabilityDetails | undefined;

  /**
   * <p>Details about the code vulnerability identified in a Lambda function used to filter
   *          findings.</p>
   * @public
   */
  codeVulnerabilityDetails?: CodeVulnerabilityDetails | undefined;

  /**
   * <p>The finding's EPSS score.</p>
   * @public
   */
  epss?: EpssDetails | undefined;
}

/**
 * @public
 */
export interface GetCisScanReportRequest {
  /**
   * <p>The scan ARN.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The target accounts.</p>
   * @public
   */
  targetAccounts?: string[] | undefined;

  /**
   * <p> The format of the report. Valid values are <code>PDF</code> and <code>CSV</code>. If no
   *          value is specified, the report format defaults to <code>PDF</code>. </p>
   * @public
   */
  reportFormat?: CisReportFormat | undefined;
}

/**
 * @public
 */
export interface GetCisScanReportResponse {
  /**
   * <p> The URL where a PDF or CSV of the CIS scan report can be downloaded. </p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: CisReportStatus | undefined;
}

/**
 * @public
 */
export interface GetCisScanResultDetailsRequest {
  /**
   * <p>The scan ARN.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The target resource ID.</p>
   * @public
   */
  targetResourceId: string | undefined;

  /**
   * <p>The account ID.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The filter criteria.</p>
   * @public
   */
  filterCriteria?: CisScanResultDetailsFilterCriteria | undefined;

  /**
   * <p>The sort by order.</p>
   * @public
   */
  sortBy?: CisScanResultDetailsSortBy | undefined;

  /**
   * <p>The sort order.</p>
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of CIS scan result details to be returned in a single page of
   *          results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetCisScanResultDetailsResponse {
  /**
   * <p>The scan result details.</p>
   * @public
   */
  scanResultDetails?: CisScanResultDetails[] | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetClustersForImageRequest {
  /**
   * <p>The resource Id for the Amazon ECR image.</p>
   * @public
   */
  filter: ClusterForImageFilterCriteria | undefined;

  /**
   * <p>The maximum number of results to be returned in a single page of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous request used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetClustersForImageResponse {
  /**
   * <p>A unit of work inside of a cluster, which can include metadata about the cluster.</p>
   * @public
   */
  cluster: ClusterInformation[] | undefined;

  /**
   * <p>The pagination token from a previous request used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityIntegrationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the code security integration to retrieve.</p>
   * @public
   */
  integrationArn: string | undefined;

  /**
   * <p>The tags associated with the code security integration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityIntegrationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the code security integration.</p>
   * @public
   */
  integrationArn: string | undefined;

  /**
   * <p>The name of the code security integration.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of repository provider for the integration.</p>
   * @public
   */
  type: IntegrationType | undefined;

  /**
   * <p>The current status of the code security integration.</p>
   * @public
   */
  status: IntegrationStatus | undefined;

  /**
   * <p>The reason for the current status of the code security integration.</p>
   * @public
   */
  statusReason: string | undefined;

  /**
   * <p>The timestamp when the code security integration was created.</p>
   * @public
   */
  createdOn: Date | undefined;

  /**
   * <p>The timestamp when the code security integration was last updated.</p>
   * @public
   */
  lastUpdateOn: Date | undefined;

  /**
   * <p>The tags associated with the code security integration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The URL used to authorize the integration with the repository provider. This is only
   *          returned if reauthorization is required to fix a connection issue. Otherwise, it is
   *          null.</p>
   * @public
   */
  authorizationUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanRequest {
  /**
   * <p>The resource identifier for the code repository that was scanned.</p>
   * @public
   */
  resource: CodeSecurityResource | undefined;

  /**
   * <p>The unique identifier of the scan to retrieve.</p>
   * @public
   */
  scanId: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanResponse {
  /**
   * <p>The unique identifier of the scan.</p>
   * @public
   */
  scanId?: string | undefined;

  /**
   * <p>The resource identifier for the code repository that was scanned.</p>
   * @public
   */
  resource?: CodeSecurityResource | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the scan.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The current status of the scan.</p>
   * @public
   */
  status?: CodeScanStatus | undefined;

  /**
   * <p>The reason for the current status of the scan.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the scan was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the scan was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The identifier of the last commit that was scanned. This is only returned if the scan
   *          was successful or skipped.</p>
   * @public
   */
  lastCommitId?: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration to retrieve.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface GetCodeSecurityScanConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration.</p>
   * @public
   */
  scanConfigurationArn?: string | undefined;

  /**
   * <p>The name of the scan configuration.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The configuration settings for the code security scan.</p>
   * @public
   */
  configuration?: CodeSecurityScanConfiguration | undefined;

  /**
   * <p>The security level for the scan configuration.</p>
   * @public
   */
  level?: ConfigurationLevel | undefined;

  /**
   * <p>The scope settings that define which repositories will be scanned. If the
   *             <code>ScopeSetting</code> parameter is <code>ALL</code> the scan configuration applies
   *          to all existing and future projects imported into Amazon Inspector.</p>
   * @public
   */
  scopeSettings?: ScopeSettings | undefined;

  /**
   * <p>The timestamp when the scan configuration was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the scan configuration was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The tags associated with the scan configuration.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetConfigurationRequest {
  /**
   * <p>The 12-digit Amazon Web Services account ID of the member account whose scan configuration you want
   *          to retrieve. When specified, you must be the delegated administrator for this
   *          member account. If not specified, the operation returns your own
   *          configuration.</p>
   * @public
   */
  accountId?: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationResponse {
  /**
   * <p>Specifies how the ECR automated re-scan duration is currently configured for your
   *          environment.</p>
   * @public
   */
  ecrConfiguration?: EcrConfigurationState | undefined;

  /**
   * <p>Specifies how the Amazon EC2 automated scan mode is currently configured for your
   *          environment.</p>
   * @public
   */
  ec2Configuration?: Ec2ConfigurationState | undefined;
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
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator.</p>
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
   * <p>The Amazon Inspector deep inspection custom paths for your account.</p>
   * @public
   */
  packagePaths?: string[] | undefined;

  /**
   * <p>The Amazon Inspector deep inspection custom paths for your organization.</p>
   * @public
   */
  orgPackagePaths?: string[] | undefined;

  /**
   * <p>The activation status of Amazon Inspector deep inspection in your account.</p>
   * @public
   */
  status?: Ec2DeepInspectionStatus | undefined;

  /**
   * <p>An error message explaining why Amazon Inspector deep inspection configurations could not be
   *          retrieved for your account.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetEncryptionKeyRequest {
  /**
   * <p>The scan type the key encrypts.</p>
   * @public
   */
  scanType: ScanType | undefined;

  /**
   * <p>The resource type the key encrypts.</p>
   * @public
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 */
export interface GetEncryptionKeyResponse {
  /**
   * <p>A kms key ID.</p>
   * @public
   */
  kmsKeyId: string | undefined;
}

/**
 * @public
 */
export interface GetFindingsReportStatusRequest {
  /**
   * <p>The ID of the report to retrieve the status of.</p>
   * @public
   */
  reportId?: string | undefined;
}

/**
 * @public
 */
export interface GetFindingsReportStatusResponse {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  reportId?: string | undefined;

  /**
   * <p>The status of the report.</p>
   * @public
   */
  status?: ExternalReportStatus | undefined;

  /**
   * <p>The error code of the report.</p>
   * @public
   */
  errorCode?: ReportingErrorCode | undefined;

  /**
   * <p>The error message of the report.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>The destination of the report.</p>
   * @public
   */
  destination?: Destination | undefined;

  /**
   * <p>The filter criteria associated with the report.</p>
   * @public
   */
  filterCriteria?: FilterCriteria | undefined;
}

/**
 * @public
 */
export interface GetMemberRequest {
  /**
   * <p>The Amazon Web Services account ID of the member account to retrieve information on.</p>
   * @public
   */
  accountId: string | undefined;
}

/**
 * <p>Details on a member account in your organization.</p>
 * @public
 */
export interface Member {
  /**
   * <p>The Amazon Web Services account ID of the member account.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The status of the member account.</p>
   * @public
   */
  relationshipStatus?: RelationshipStatus | undefined;

  /**
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for this member
   *          account.</p>
   * @public
   */
  delegatedAdminAccountId?: string | undefined;

  /**
   * <p>A timestamp showing when the status of this member was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetMemberResponse {
  /**
   * <p>Details of the retrieved member account.</p>
   * @public
   */
  member?: Member | undefined;
}

/**
 * @public
 */
export interface GetSbomExportRequest {
  /**
   * <p>The report ID of the SBOM export to get details for.</p>
   * @public
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface GetSbomExportResponse {
  /**
   * <p>The report ID of the software bill of materials (SBOM) report.</p>
   * @public
   */
  reportId?: string | undefined;

  /**
   * <p>The format of the software bill of materials (SBOM) report.</p>
   * @public
   */
  format?: SbomReportFormat | undefined;

  /**
   * <p>The status of the software bill of materials (SBOM) report.</p>
   * @public
   */
  status?: ExternalReportStatus | undefined;

  /**
   * <p>An error code.</p>
   * @public
   */
  errorCode?: ReportingErrorCode | undefined;

  /**
   * <p>An error message.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>Contains details of the Amazon S3 bucket and KMS key used to export findings</p>
   * @public
   */
  s3Destination?: Destination | undefined;

  /**
   * <p>Contains details about the resource filter criteria used for the software bill of
   *          materials (SBOM) report.</p>
   * @public
   */
  filterCriteria?: ResourceFilterCriteria | undefined;
}

/**
 * @public
 */
export interface ListAccountPermissionsRequest {
  /**
   * <p>The service scan type to check permissions for.</p>
   * @public
   */
  service?: Service | undefined;

  /**
   * <p>The maximum number of results the response can return. If your request would return more
   *          than the maximum the response will return a <code>nextToken</code> value, use this value
   *          when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. If your response returns
   *          more than the <code>maxResults</code> maximum value it will also return a
   *             <code>nextToken</code> value. For subsequent calls, use the NextToken value returned
   *          from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information on the permissions an account has within Amazon Inspector.</p>
 * @public
 */
export interface Permission {
  /**
   * <p>The services that the permissions allow an account to perform the given operations
   *          for.</p>
   * @public
   */
  service: Service | undefined;

  /**
   * <p>The operations that can be performed with the given permissions.</p>
   * @public
   */
  operation: Operation | undefined;
}

/**
 * @public
 */
export interface ListAccountPermissionsResponse {
  /**
   * <p>Contains details on the permissions an account has to configure Amazon Inspector.</p>
   * @public
   */
  permissions: Permission[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A list of CIS scan configurations filter criteria.</p>
 * @public
 */
export interface ListCisScanConfigurationsFilterCriteria {
  /**
   * <p>The list of scan name filters.</p>
   * @public
   */
  scanNameFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The list of target resource tag filters.</p>
   * @public
   */
  targetResourceTagFilters?: TagFilter[] | undefined;

  /**
   * <p>The list of scan configuration ARN filters.</p>
   * @public
   */
  scanConfigurationArnFilters?: CisStringFilter[] | undefined;
}

/**
 * @public
 */
export interface ListCisScanConfigurationsRequest {
  /**
   * <p>The CIS scan configuration filter criteria.</p>
   * @public
   */
  filterCriteria?: ListCisScanConfigurationsFilterCriteria | undefined;

  /**
   * <p>The CIS scan configuration sort by order.</p>
   * @public
   */
  sortBy?: CisScanConfigurationsSortBy | undefined;

  /**
   * <p>The CIS scan configuration sort order order.</p>
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of CIS scan configurations to be returned in a single page of
   *          results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScanConfigurationsResponse {
  /**
   * <p>The CIS scan configuration scan configurations.</p>
   * @public
   */
  scanConfigurations?: CisScanConfiguration[] | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByChecksRequest {
  /**
   * <p>The scan ARN.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The filter criteria.</p>
   * @public
   */
  filterCriteria?: CisScanResultsAggregatedByChecksFilterCriteria | undefined;

  /**
   * <p>The sort by order.</p>
   * @public
   */
  sortBy?: CisScanResultsAggregatedByChecksSortBy | undefined;

  /**
   * <p>The sort order.</p>
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of scan results aggregated by checks to be returned in a single page
   *          of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByChecksResponse {
  /**
   * <p>The check aggregations.</p>
   * @public
   */
  checkAggregations?: CisCheckAggregation[] | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByTargetResourceRequest {
  /**
   * <p>The scan ARN.</p>
   * @public
   */
  scanArn: string | undefined;

  /**
   * <p>The filter criteria.</p>
   * @public
   */
  filterCriteria?: CisScanResultsAggregatedByTargetResourceFilterCriteria | undefined;

  /**
   * <p>The sort by order.</p>
   * @public
   */
  sortBy?: CisScanResultsAggregatedByTargetResourceSortBy | undefined;

  /**
   * <p>The sort order.</p>
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of scan results aggregated by a target resource to be returned in a
   *          single page of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByTargetResourceResponse {
  /**
   * <p>The resource aggregations.</p>
   * @public
   */
  targetResourceAggregations?: CisTargetResourceAggregation[] | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A list of CIS scans filter criteria.</p>
 * @public
 */
export interface ListCisScansFilterCriteria {
  /**
   * <p>The list of scan name filters.</p>
   * @public
   */
  scanNameFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The list of target resource tag filters.</p>
   * @public
   */
  targetResourceTagFilters?: TagFilter[] | undefined;

  /**
   * <p>The list of target resource ID filters.</p>
   * @public
   */
  targetResourceIdFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The list of scan status filters.</p>
   * @public
   */
  scanStatusFilters?: CisScanStatusFilter[] | undefined;

  /**
   * <p>The list of scan at filters.</p>
   * @public
   */
  scanAtFilters?: CisDateFilter[] | undefined;

  /**
   * <p>The list of scan configuration ARN filters.</p>
   * @public
   */
  scanConfigurationArnFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The list of scan ARN filters.</p>
   * @public
   */
  scanArnFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The list of scheduled by filters.</p>
   * @public
   */
  scheduledByFilters?: CisStringFilter[] | undefined;

  /**
   * <p>The list of failed checks filters.</p>
   * @public
   */
  failedChecksFilters?: CisNumberFilter[] | undefined;

  /**
   * <p>The list of target account ID filters.</p>
   * @public
   */
  targetAccountIdFilters?: CisStringFilter[] | undefined;
}

/**
 * @public
 */
export interface ListCisScansRequest {
  /**
   * <p>The CIS scan filter criteria.</p>
   * @public
   */
  filterCriteria?: ListCisScansFilterCriteria | undefined;

  /**
   * <p>The detail applied to the CIS scan.</p>
   * @public
   */
  detailLevel?: ListCisScansDetailLevel | undefined;

  /**
   * <p>The CIS scans sort by order.</p>
   * @public
   */
  sortBy?: ListCisScansSortBy | undefined;

  /**
   * <p>The CIS scans sort order.</p>
   * @public
   */
  sortOrder?: CisSortOrder | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to be returned.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCisScansResponse {
  /**
   * <p>The CIS scans.</p>
   * @public
   */
  scans?: CisScan[] | undefined;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of
   *          results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityIntegrationsRequest {
  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request. For subsequent calls, use the NextToken
   *          value returned from the previous request to continue listing results after the first
   *          page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityIntegrationsResponse {
  /**
   * <p>A list of code security integration summaries.</p>
   * @public
   */
  integrations?: CodeSecurityIntegrationSummary[] | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request. For subsequent calls, use the NextToken
   *          value returned from the previous request to continue listing results after the first
   *          page.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCodeSecurityScanConfigurationAssociationsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the scan configuration to list associations
   *          for.</p>
   * @public
   */
  scanConfigurationArn: string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If your request would return
   *          more than the maximum the response will return a <code>nextToken</code> value, use this
   *          value when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number | undefined;
}
