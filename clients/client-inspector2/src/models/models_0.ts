// smithy-typescript generated code
import {
  AssociationResultStatusCode,
  CisFindingStatus,
  CisFindingStatusComparison,
  CisReportFormat,
  CisReportStatus,
  CisResultStatus,
  CisResultStatusComparison,
  CisRuleStatus,
  CisScanResultDetailsSortBy,
  CisScanStatus,
  CisScanStatusComparison,
  CisSecurityLevel,
  CisSecurityLevelComparison,
  CisSortOrder,
  CisStringComparison,
  CisTargetStatus,
  CisTargetStatusComparison,
  CisTargetStatusReason,
  CodeScanStatus,
  ConfigurationLevel,
  ContinuousIntegrationScanEvent,
  Day,
  IntegrationStatus,
  IntegrationType,
  PeriodicScanFrequency,
  ProjectSelectionScope,
  RuleSetCategory,
  TagComparison,
} from "./enums";

/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
  SUSPENDED: "SUSPENDED",
  SUSPENDING: "SUSPENDING",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

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
 * @public
 * @enum
 */
export const AggregationFindingType = {
  CODE_VULNERABILITY: "CODE_VULNERABILITY",
  NETWORK_REACHABILITY: "NETWORK_REACHABILITY",
  PACKAGE_VULNERABILITY: "PACKAGE_VULNERABILITY",
} as const;

/**
 * @public
 */
export type AggregationFindingType = (typeof AggregationFindingType)[keyof typeof AggregationFindingType];

/**
 * @public
 * @enum
 */
export const AggregationResourceType = {
  AWS_EC2_INSTANCE: "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER_IMAGE: "AWS_ECR_CONTAINER_IMAGE",
  AWS_LAMBDA_FUNCTION: "AWS_LAMBDA_FUNCTION",
  CODE_REPOSITORY: "CODE_REPOSITORY",
} as const;

/**
 * @public
 */
export type AggregationResourceType = (typeof AggregationResourceType)[keyof typeof AggregationResourceType];

/**
 * @public
 * @enum
 */
export const AccountSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;

/**
 * @public
 */
export type AccountSortBy = (typeof AccountSortBy)[keyof typeof AccountSortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

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
 * @public
 * @enum
 */
export const ErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  ACCOUNT_IS_ISOLATED: "ACCOUNT_IS_ISOLATED",
  ALREADY_ENABLED: "ALREADY_ENABLED",
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  DISASSOCIATE_ALL_MEMBERS: "DISASSOCIATE_ALL_MEMBERS",
  EC2_SSM_ASSOCIATION_VERSION_LIMIT_EXCEEDED: "EC2_SSM_ASSOCIATION_VERSION_LIMIT_EXCEEDED",
  EC2_SSM_RESOURCE_DATA_SYNC_LIMIT_EXCEEDED: "EC2_SSM_RESOURCE_DATA_SYNC_LIMIT_EXCEEDED",
  ENABLE_IN_PROGRESS: "ENABLE_IN_PROGRESS",
  EVENTBRIDGE_THROTTLED: "EVENTBRIDGE_THROTTLED",
  EVENTBRIDGE_UNAVAILABLE: "EVENTBRIDGE_UNAVAILABLE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  RESOURCE_SCAN_NOT_DISABLED: "RESOURCE_SCAN_NOT_DISABLED",
  SSM_THROTTLED: "SSM_THROTTLED",
  SSM_UNAVAILABLE: "SSM_UNAVAILABLE",
  SUSPEND_IN_PROGRESS: "SUSPEND_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

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
 * @public
 * @enum
 */
export const StringComparison = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
  PREFIX: "PREFIX",
} as const;

/**
 * @public
 */
export type StringComparison = (typeof StringComparison)[keyof typeof StringComparison];

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
 * @public
 * @enum
 */
export const AmiSortBy = {
  AFFECTED_INSTANCES: "AFFECTED_INSTANCES",
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;

/**
 * @public
 */
export type AmiSortBy = (typeof AmiSortBy)[keyof typeof AmiSortBy];

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
 * @public
 * @enum
 */
export const AwsEcrContainerSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;

/**
 * @public
 */
export type AwsEcrContainerSortBy = (typeof AwsEcrContainerSortBy)[keyof typeof AwsEcrContainerSortBy];

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
 * @public
 * @enum
 */
export const CodeRepositorySortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;

/**
 * @public
 */
export type CodeRepositorySortBy = (typeof CodeRepositorySortBy)[keyof typeof CodeRepositorySortBy];

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
 * @public
 * @enum
 */
export const MapComparison = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type MapComparison = (typeof MapComparison)[keyof typeof MapComparison];

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
 * @public
 * @enum
 */
export const Ec2InstanceSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  NETWORK_FINDINGS: "NETWORK_FINDINGS",
} as const;

/**
 * @public
 */
export type Ec2InstanceSortBy = (typeof Ec2InstanceSortBy)[keyof typeof Ec2InstanceSortBy];

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
 * @public
 * @enum
 */
export const FindingTypeSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;

/**
 * @public
 */
export type FindingTypeSortBy = (typeof FindingTypeSortBy)[keyof typeof FindingTypeSortBy];

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
 * @public
 * @enum
 */
export const ImageLayerSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;

/**
 * @public
 */
export type ImageLayerSortBy = (typeof ImageLayerSortBy)[keyof typeof ImageLayerSortBy];

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
 * @public
 * @enum
 */
export const LambdaFunctionSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;

/**
 * @public
 */
export type LambdaFunctionSortBy = (typeof LambdaFunctionSortBy)[keyof typeof LambdaFunctionSortBy];

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
 * @public
 * @enum
 */
export const LambdaLayerSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;

/**
 * @public
 */
export type LambdaLayerSortBy = (typeof LambdaLayerSortBy)[keyof typeof LambdaLayerSortBy];

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
 * @public
 * @enum
 */
export const PackageSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;

/**
 * @public
 */
export type PackageSortBy = (typeof PackageSortBy)[keyof typeof PackageSortBy];

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
 * @public
 * @enum
 */
export const RepositorySortBy = {
  AFFECTED_IMAGES: "AFFECTED_IMAGES",
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;

/**
 * @public
 */
export type RepositorySortBy = (typeof RepositorySortBy)[keyof typeof RepositorySortBy];

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
 * @public
 * @enum
 */
export const TitleSortBy = {
  ALL: "ALL",
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
} as const;

/**
 * @public
 */
export type TitleSortBy = (typeof TitleSortBy)[keyof typeof TitleSortBy];

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
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: TitleSortBy | undefined;

  /**
   * <p>The type of finding to aggregate on.</p>
   * @public
   */
  findingType?: AggregationFindingType | undefined;
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
  | AggregationRequest.Ec2InstanceAggregationMember
  | AggregationRequest.FindingTypeAggregationMember
  | AggregationRequest.ImageLayerAggregationMember
  | AggregationRequest.LambdaFunctionAggregationMember
  | AggregationRequest.LambdaLayerAggregationMember
  | AggregationRequest.PackageAggregationMember
  | AggregationRequest.RepositoryAggregationMember
  | AggregationRequest.TitleAggregationMember
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
 * <p>A structure that contains details about the results of an aggregation type.</p>
 * @public
 */
export type AggregationResponse =
  | AggregationResponse.AccountAggregationMember
  | AggregationResponse.AmiAggregationMember
  | AggregationResponse.AwsEcrContainerAggregationMember
  | AggregationResponse.CodeRepositoryAggregationMember
  | AggregationResponse.Ec2InstanceAggregationMember
  | AggregationResponse.FindingTypeAggregationMember
  | AggregationResponse.ImageLayerAggregationMember
  | AggregationResponse.LambdaFunctionAggregationMember
  | AggregationResponse.LambdaLayerAggregationMember
  | AggregationResponse.PackageAggregationMember
  | AggregationResponse.RepositoryAggregationMember
  | AggregationResponse.TitleAggregationMember
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
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 * @enum
 */
export const AggregationType = {
  ACCOUNT: "ACCOUNT",
  AMI: "AMI",
  AWS_EC2_INSTANCE: "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER: "AWS_ECR_CONTAINER",
  AWS_LAMBDA_FUNCTION: "AWS_LAMBDA_FUNCTION",
  CODE_REPOSITORY: "CODE_REPOSITORY",
  FINDING_TYPE: "FINDING_TYPE",
  IMAGE_LAYER: "IMAGE_LAYER",
  LAMBDA_LAYER: "LAMBDA_LAYER",
  PACKAGE: "PACKAGE",
  REPOSITORY: "REPOSITORY",
  TITLE: "TITLE",
} as const;

/**
 * @public
 */
export type AggregationType = (typeof AggregationType)[keyof typeof AggregationType];

/**
 * @public
 * @enum
 */
export const Architecture = {
  ARM64: "ARM64",
  X86_64: "X86_64",
} as const;

/**
 * @public
 */
export type Architecture = (typeof Architecture)[keyof typeof Architecture];

/**
 * <p>Identifies a specific resource in a code repository that will be scanned.</p>
 * @public
 */
export type CodeSecurityResource = CodeSecurityResource.ProjectIdMember | CodeSecurityResource.$UnknownMember;

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
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

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
 * @public
 * @enum
 */
export const PackageType = {
  IMAGE: "IMAGE",
  ZIP: "ZIP",
} as const;

/**
 * @public
 */
export type PackageType = (typeof PackageType)[keyof typeof PackageType];

/**
 * @public
 * @enum
 */
export const Runtime = {
  DOTNETCORE_3_1: "DOTNETCORE_3_1",
  DOTNET_6: "DOTNET_6",
  DOTNET_7: "DOTNET_7",
  GO_1_X: "GO_1_X",
  JAVA_11: "JAVA_11",
  JAVA_17: "JAVA_17",
  JAVA_8: "JAVA_8",
  JAVA_8_AL2: "JAVA_8_AL2",
  NODEJS: "NODEJS",
  NODEJS_12_X: "NODEJS_12_X",
  NODEJS_14_X: "NODEJS_14_X",
  NODEJS_16_X: "NODEJS_16_X",
  NODEJS_18_X: "NODEJS_18_X",
  PYTHON_3_10: "PYTHON_3_10",
  PYTHON_3_11: "PYTHON_3_11",
  PYTHON_3_7: "PYTHON_3_7",
  PYTHON_3_8: "PYTHON_3_8",
  PYTHON_3_9: "PYTHON_3_9",
  RUBY_2_7: "RUBY_2_7",
  RUBY_3_2: "RUBY_3_2",
  UNSUPPORTED: "UNSUPPORTED",
} as const;

/**
 * @public
 */
export type Runtime = (typeof Runtime)[keyof typeof Runtime];

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
 * @public
 * @enum
 */
export const CodeSnippetErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  CODE_SNIPPET_NOT_FOUND: "CODE_SNIPPET_NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_INPUT: "INVALID_INPUT",
} as const;

/**
 * @public
 */
export type CodeSnippetErrorCode = (typeof CodeSnippetErrorCode)[keyof typeof CodeSnippetErrorCode];

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
 * @public
 * @enum
 */
export const FindingDetailsErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  FINDING_DETAILS_NOT_FOUND: "FINDING_DETAILS_NOT_FOUND",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_INPUT: "INVALID_INPUT",
} as const;

/**
 * @public
 */
export type FindingDetailsErrorCode = (typeof FindingDetailsErrorCode)[keyof typeof FindingDetailsErrorCode];

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
 * @public
 * @enum
 */
export const FreeTrialStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type FreeTrialStatus = (typeof FreeTrialStatus)[keyof typeof FreeTrialStatus];

/**
 * @public
 * @enum
 */
export const FreeTrialType = {
  CODE_REPOSITORY: "CODE_REPOSITORY",
  EC2: "EC2",
  ECR: "ECR",
  LAMBDA: "LAMBDA",
  LAMBDA_CODE: "LAMBDA_CODE",
} as const;

/**
 * @public
 */
export type FreeTrialType = (typeof FreeTrialType)[keyof typeof FreeTrialType];

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
 * @public
 * @enum
 */
export const FreeTrialInfoErrorCode = {
  ACCESS_DENIED: "ACCESS_DENIED",
  INTERNAL_ERROR: "INTERNAL_ERROR",
} as const;

/**
 * @public
 */
export type FreeTrialInfoErrorCode = (typeof FreeTrialInfoErrorCode)[keyof typeof FreeTrialInfoErrorCode];

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
 * @public
 * @enum
 */
export const Ec2DeepInspectionStatus = {
  ACTIVATED: "ACTIVATED",
  DEACTIVATED: "DEACTIVATED",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type Ec2DeepInspectionStatus = (typeof Ec2DeepInspectionStatus)[keyof typeof Ec2DeepInspectionStatus];

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
 * @public
 * @enum
 */
export const CodeRepositoryProviderType = {
  GITHUB: "GITHUB",
  GITLAB_SELF_MANAGED: "GITLAB_SELF_MANAGED",
} as const;

/**
 * @public
 */
export type CodeRepositoryProviderType = (typeof CodeRepositoryProviderType)[keyof typeof CodeRepositoryProviderType];

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
 * @public
 * @enum
 */
export const ScanStatusReason = {
  ACCESS_DENIED: "ACCESS_DENIED",
  ACCESS_DENIED_TO_ENCRYPTION_KEY: "ACCESS_DENIED_TO_ENCRYPTION_KEY",
  AGENTLESS_INSTANCE_COLLECTION_TIME_LIMIT_EXCEEDED: "AGENTLESS_INSTANCE_COLLECTION_TIME_LIMIT_EXCEEDED",
  AGENTLESS_INSTANCE_STORAGE_LIMIT_EXCEEDED: "AGENTLESS_INSTANCE_STORAGE_LIMIT_EXCEEDED",
  DEEP_INSPECTION_COLLECTION_TIME_LIMIT_EXCEEDED: "DEEP_INSPECTION_COLLECTION_TIME_LIMIT_EXCEEDED",
  DEEP_INSPECTION_DAILY_SSM_INVENTORY_LIMIT_EXCEEDED: "DEEP_INSPECTION_DAILY_SSM_INVENTORY_LIMIT_EXCEEDED",
  DEEP_INSPECTION_NO_INVENTORY: "DEEP_INSPECTION_NO_INVENTORY",
  DEEP_INSPECTION_PACKAGE_COLLECTION_LIMIT_EXCEEDED: "DEEP_INSPECTION_PACKAGE_COLLECTION_LIMIT_EXCEEDED",
  EC2_INSTANCE_STOPPED: "EC2_INSTANCE_STOPPED",
  EXCLUDED_BY_TAG: "EXCLUDED_BY_TAG",
  IMAGE_SIZE_EXCEEDED: "IMAGE_SIZE_EXCEEDED",
  INTEGRATION_CONNECTION_LOST: "INTEGRATION_CONNECTION_LOST",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  NO_INVENTORY: "NO_INVENTORY",
  NO_RESOURCES_FOUND: "NO_RESOURCES_FOUND",
  NO_SCAN_CONFIGURATION_ASSOCIATED: "NO_SCAN_CONFIGURATION_ASSOCIATED",
  PENDING_DISABLE: "PENDING_DISABLE",
  PENDING_INITIAL_SCAN: "PENDING_INITIAL_SCAN",
  PENDING_REVIVAL_SCAN: "PENDING_REVIVAL_SCAN",
  RESOURCE_TERMINATED: "RESOURCE_TERMINATED",
  SCAN_ELIGIBILITY_EXPIRED: "SCAN_ELIGIBILITY_EXPIRED",
  SCAN_FREQUENCY_MANUAL: "SCAN_FREQUENCY_MANUAL",
  SCAN_FREQUENCY_SCAN_ON_PUSH: "SCAN_FREQUENCY_SCAN_ON_PUSH",
  SCAN_IN_PROGRESS: "SCAN_IN_PROGRESS",
  STALE_INVENTORY: "STALE_INVENTORY",
  SUCCESSFUL: "SUCCESSFUL",
  UNMANAGED_EC2_INSTANCE: "UNMANAGED_EC2_INSTANCE",
  UNSUPPORTED_CONFIG_FILE: "UNSUPPORTED_CONFIG_FILE",
  UNSUPPORTED_LANGUAGE: "UNSUPPORTED_LANGUAGE",
  UNSUPPORTED_MEDIA_TYPE: "UNSUPPORTED_MEDIA_TYPE",
  UNSUPPORTED_OS: "UNSUPPORTED_OS",
  UNSUPPORTED_RUNTIME: "UNSUPPORTED_RUNTIME",
} as const;

/**
 * @public
 */
export type ScanStatusReason = (typeof ScanStatusReason)[keyof typeof ScanStatusReason];

/**
 * @public
 * @enum
 */
export const ScanStatusCode = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type ScanStatusCode = (typeof ScanStatusCode)[keyof typeof ScanStatusCode];

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
 * @public
 * @enum
 */
export const GroupKey = {
  ACCOUNT_ID: "ACCOUNT_ID",
  ECR_REPOSITORY_NAME: "ECR_REPOSITORY_NAME",
  RESOURCE_TYPE: "RESOURCE_TYPE",
  SCAN_STATUS_CODE: "SCAN_STATUS_CODE",
  SCAN_STATUS_REASON: "SCAN_STATUS_REASON",
} as const;

/**
 * @public
 */
export type GroupKey = (typeof GroupKey)[keyof typeof GroupKey];

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
 * @public
 * @enum
 */
export const CoverageStringComparison = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;

/**
 * @public
 */
export type CoverageStringComparison = (typeof CoverageStringComparison)[keyof typeof CoverageStringComparison];

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
 * @public
 * @enum
 */
export const CoverageMapComparison = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type CoverageMapComparison = (typeof CoverageMapComparison)[keyof typeof CoverageMapComparison];

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
   *             <code>EC2_SSM_AGENT_BASED</code> and <code>EC2_AGENTLESS</code>.</p>
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
}

/**
 * @public
 * @enum
 */
export const CoverageResourceType = {
  AWS_EC2_INSTANCE: "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER_IMAGE: "AWS_ECR_CONTAINER_IMAGE",
  AWS_ECR_REPOSITORY: "AWS_ECR_REPOSITORY",
  AWS_LAMBDA_FUNCTION: "AWS_LAMBDA_FUNCTION",
  CODE_REPOSITORY: "CODE_REPOSITORY",
} as const;

/**
 * @public
 */
export type CoverageResourceType = (typeof CoverageResourceType)[keyof typeof CoverageResourceType];

/**
 * @public
 * @enum
 */
export const Ec2Platform = {
  LINUX: "LINUX",
  MACOS: "MACOS",
  UNKNOWN: "UNKNOWN",
  WINDOWS: "WINDOWS",
} as const;

/**
 * @public
 */
export type Ec2Platform = (typeof Ec2Platform)[keyof typeof Ec2Platform];

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
 * @public
 * @enum
 */
export const EcrScanFrequency = {
  CONTINUOUS_SCAN: "CONTINUOUS_SCAN",
  MANUAL: "MANUAL",
  SCAN_ON_PUSH: "SCAN_ON_PUSH",
} as const;

/**
 * @public
 */
export type EcrScanFrequency = (typeof EcrScanFrequency)[keyof typeof EcrScanFrequency];

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
}

/**
 * @public
 * @enum
 */
export const ScanMode = {
  EC2_AGENTLESS: "EC2_AGENTLESS",
  EC2_SSM_AGENT_BASED: "EC2_SSM_AGENT_BASED",
} as const;

/**
 * @public
 */
export type ScanMode = (typeof ScanMode)[keyof typeof ScanMode];

/**
 * @public
 * @enum
 */
export const ScanType = {
  CODE: "CODE",
  NETWORK: "NETWORK",
  PACKAGE: "PACKAGE",
} as const;

/**
 * @public
 */
export type ScanType = (typeof ScanType)[keyof typeof ScanType];

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
 * @public
 * @enum
 */
export const FilterAction = {
  NONE: "NONE",
  SUPPRESS: "SUPPRESS",
} as const;

/**
 * @public
 */
export type FilterAction = (typeof FilterAction)[keyof typeof FilterAction];

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
 * @public
 * @enum
 */
export const ReportFormat = {
  CSV: "CSV",
  JSON: "JSON",
} as const;

/**
 * @public
 */
export type ReportFormat = (typeof ReportFormat)[keyof typeof ReportFormat];

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
 * @public
 * @enum
 */
export const SbomReportFormat = {
  CYCLONEDX_1_4: "CYCLONEDX_1_4",
  SPDX_2_3: "SPDX_2_3",
} as const;

/**
 * @public
 */
export type SbomReportFormat = (typeof SbomReportFormat)[keyof typeof SbomReportFormat];

/**
 * @public
 * @enum
 */
export const ResourceStringComparison = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
} as const;

/**
 * @public
 */
export type ResourceStringComparison = (typeof ResourceStringComparison)[keyof typeof ResourceStringComparison];

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
 * @public
 * @enum
 */
export const ResourceMapComparison = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type ResourceMapComparison = (typeof ResourceMapComparison)[keyof typeof ResourceMapComparison];

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
 * @public
 * @enum
 */
export const Currency = {
  USD: "USD",
} as const;

/**
 * @public
 */
export type Currency = (typeof Currency)[keyof typeof Currency];

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
 * @public
 * @enum
 */
export const RelationshipStatus = {
  ACCOUNT_SUSPENDED: "ACCOUNT_SUSPENDED",
  CANNOT_CREATE_DETECTOR_IN_ORG_MASTER: "CANNOT_CREATE_DETECTOR_IN_ORG_MASTER",
  CREATED: "CREATED",
  DELETED: "DELETED",
  DISABLED: "DISABLED",
  EMAIL_VERIFICATION_FAILED: "EMAIL_VERIFICATION_FAILED",
  EMAIL_VERIFICATION_IN_PROGRESS: "EMAIL_VERIFICATION_IN_PROGRESS",
  ENABLED: "ENABLED",
  INVITED: "INVITED",
  REGION_DISABLED: "REGION_DISABLED",
  REMOVED: "REMOVED",
  RESIGNED: "RESIGNED",
} as const;

/**
 * @public
 */
export type RelationshipStatus = (typeof RelationshipStatus)[keyof typeof RelationshipStatus];

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
 * @public
 * @enum
 */
export const DelegatedAdminStatus = {
  DISABLE_IN_PROGRESS: "DISABLE_IN_PROGRESS",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DelegatedAdminStatus = (typeof DelegatedAdminStatus)[keyof typeof DelegatedAdminStatus];

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
 * @enum
 */
export const ResourceScanType = {
  CODE_REPOSITORY: "CODE_REPOSITORY",
  EC2: "EC2",
  ECR: "ECR",
  LAMBDA: "LAMBDA",
  LAMBDA_CODE: "LAMBDA_CODE",
} as const;

/**
 * @public
 */
export type ResourceScanType = (typeof ResourceScanType)[keyof typeof ResourceScanType];

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
 * @public
 * @enum
 */
export const Ec2ScanMode = {
  EC2_HYBRID: "EC2_HYBRID",
  EC2_SSM_AGENT_BASED: "EC2_SSM_AGENT_BASED",
} as const;

/**
 * @public
 */
export type Ec2ScanMode = (typeof Ec2ScanMode)[keyof typeof Ec2ScanMode];

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
}

/**
 * @public
 * @enum
 */
export const Ec2ScanModeStatus = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type Ec2ScanModeStatus = (typeof Ec2ScanModeStatus)[keyof typeof Ec2ScanModeStatus];

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
 * <p>Details about the state of the EC2 scan configuration for your environment.</p>
 * @public
 */
export interface Ec2ConfigurationState {
  /**
   * <p>An object that contains details about the state of the Amazon EC2 scan mode.</p>
   * @public
   */
  scanModeState?: Ec2ScanModeState | undefined;
}

/**
 * @public
 * @enum
 */
export const EcrPullDateRescanDuration = {
  DAYS_14: "DAYS_14",
  DAYS_180: "DAYS_180",
  DAYS_30: "DAYS_30",
  DAYS_60: "DAYS_60",
  DAYS_90: "DAYS_90",
} as const;

/**
 * @public
 */
export type EcrPullDateRescanDuration = (typeof EcrPullDateRescanDuration)[keyof typeof EcrPullDateRescanDuration];

/**
 * @public
 * @enum
 */
export const EcrPullDateRescanMode = {
  LAST_IN_USE_AT: "LAST_IN_USE_AT",
  LAST_PULL_DATE: "LAST_PULL_DATE",
} as const;

/**
 * @public
 */
export type EcrPullDateRescanMode = (typeof EcrPullDateRescanMode)[keyof typeof EcrPullDateRescanMode];

/**
 * @public
 * @enum
 */
export const EcrRescanDuration = {
  DAYS_14: "DAYS_14",
  DAYS_180: "DAYS_180",
  DAYS_30: "DAYS_30",
  DAYS_60: "DAYS_60",
  DAYS_90: "DAYS_90",
  LIFETIME: "LIFETIME",
} as const;

/**
 * @public
 */
export type EcrRescanDuration = (typeof EcrRescanDuration)[keyof typeof EcrRescanDuration];

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
 * @public
 * @enum
 */
export const EcrRescanDurationStatus = {
  FAILED: "FAILED",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type EcrRescanDurationStatus = (typeof EcrRescanDurationStatus)[keyof typeof EcrRescanDurationStatus];

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
 * @public
 * @enum
 */
export const ExploitAvailable = {
  NO: "NO",
  YES: "YES",
} as const;

/**
 * @public
 */
export type ExploitAvailable = (typeof ExploitAvailable)[keyof typeof ExploitAvailable];

/**
 * @public
 * @enum
 */
export const ExternalReportStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ExternalReportStatus = (typeof ExternalReportStatus)[keyof typeof ExternalReportStatus];

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
 * @public
 * @enum
 */
export const FixAvailable = {
  NO: "NO",
  PARTIAL: "PARTIAL",
  YES: "YES",
} as const;

/**
 * @public
 */
export type FixAvailable = (typeof FixAvailable)[keyof typeof FixAvailable];

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
 * @public
 * @enum
 */
export const NetworkProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;

/**
 * @public
 */
export type NetworkProtocol = (typeof NetworkProtocol)[keyof typeof NetworkProtocol];

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
 * @public
 * @enum
 */
export const PackageManager = {
  BUNDLER: "BUNDLER",
  CARGO: "CARGO",
  COMPOSER: "COMPOSER",
  DOTNET_CORE: "DOTNET_CORE",
  GEMSPEC: "GEMSPEC",
  GOBINARY: "GOBINARY",
  GOMOD: "GOMOD",
  JAR: "JAR",
  NODEPKG: "NODEPKG",
  NPM: "NPM",
  NUGET: "NUGET",
  OS: "OS",
  PIP: "PIP",
  PIPENV: "PIPENV",
  POETRY: "POETRY",
  POM: "POM",
  PYTHONPKG: "PYTHONPKG",
  YARN: "YARN",
} as const;

/**
 * @public
 */
export type PackageManager = (typeof PackageManager)[keyof typeof PackageManager];

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
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AWS_EC2_INSTANCE: "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER_IMAGE: "AWS_ECR_CONTAINER_IMAGE",
  AWS_ECR_REPOSITORY: "AWS_ECR_REPOSITORY",
  AWS_LAMBDA_FUNCTION: "AWS_LAMBDA_FUNCTION",
  CODE_REPOSITORY: "CODE_REPOSITORY",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

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
}

/**
 * @public
 * @enum
 */
export const Severity = {
  CRITICAL: "CRITICAL",
  HIGH: "HIGH",
  INFORMATIONAL: "INFORMATIONAL",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  UNTRIAGED: "UNTRIAGED",
} as const;

/**
 * @public
 */
export type Severity = (typeof Severity)[keyof typeof Severity];

/**
 * @public
 * @enum
 */
export const FindingStatus = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
  SUPPRESSED: "SUPPRESSED",
} as const;

/**
 * @public
 */
export type FindingStatus = (typeof FindingStatus)[keyof typeof FindingStatus];

/**
 * @public
 * @enum
 */
export const FindingType = {
  CODE_VULNERABILITY: "CODE_VULNERABILITY",
  NETWORK_REACHABILITY: "NETWORK_REACHABILITY",
  PACKAGE_VULNERABILITY: "PACKAGE_VULNERABILITY",
} as const;

/**
 * @public
 */
export type FindingType = (typeof FindingType)[keyof typeof FindingType];

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
export interface GetConfigurationRequest {}

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
