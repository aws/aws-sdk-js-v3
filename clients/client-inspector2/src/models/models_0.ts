// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { Inspector2ServiceException as __BaseException } from "./Inspector2ServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

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
  lambda?: Status;

  /**
   * <p>The status of Amazon Inspector scanning for custom application code for Amazon Web Services Lambda functions.
   *       </p>
   * @public
   */
  lambdaCode?: Status;
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
  findingType?: AggregationFindingType;

  /**
   * <p>The type of resource.</p>
   * @public
   */
  resourceType?: AggregationResourceType;

  /**
   * <p>The sort order (ascending or descending).</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The value to sort by.</p>
   * @public
   */
  sortBy?: AccountSortBy;
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
  all?: number;

  /**
   * <p>The total count of medium severity findings.</p>
   * @public
   */
  medium?: number;

  /**
   * <p>The total count of high severity findings.</p>
   * @public
   */
  high?: number;

  /**
   * <p>The total count of critical severity findings.</p>
   * @public
   */
  critical?: number;
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
  accountId?: string;

  /**
   * <p>The number of findings by severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts;

  /**
   * <p>
   *          The number of findings that have an exploit available.
   *       </p>
   * @public
   */
  exploitAvailableCount?: number;

  /**
   * <p>
   *          Details about the number of fixes.
   *       </p>
   * @public
   */
  fixAvailableCount?: number;
}

/**
 * @public
 * @enum
 */
export const CisStringComparison = {
  EQUALS: "EQUALS",
  NOT_EQUALS: "NOT_EQUALS",
  PREFIX: "PREFIX",
} as const;

/**
 * @public
 */
export type CisStringComparison = (typeof CisStringComparison)[keyof typeof CisStringComparison];

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
  lambda?: State;

  /**
   * <p>An object that described the state of Amazon Inspector scans for an account.</p>
   * @public
   */
  lambdaCode?: State;
}

/**
 * <p>An object with details the status of an Amazon Web Services account within your Amazon Inspector environment.</p>
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
  amis?: StringFilter[];

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: AmiSortBy;
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
  resourceIds?: StringFilter[];

  /**
   * <p>The image SHA values.</p>
   * @public
   */
  imageShas?: StringFilter[];

  /**
   * <p>The container repositories.</p>
   * @public
   */
  repositories?: StringFilter[];

  /**
   * <p>The architecture of the containers.</p>
   * @public
   */
  architectures?: StringFilter[];

  /**
   * <p>The image tags.</p>
   * @public
   */
  imageTags?: StringFilter[];

  /**
   * <p>The sort order (ascending or descending).</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The value to sort by.</p>
   * @public
   */
  sortBy?: AwsEcrContainerSortBy;
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
  value?: string;
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
  amis?: StringFilter[];

  /**
   * <p>The operating system types to aggregate findings for. Valid values must be uppercase and
   *          underscore separated, examples are <code>ORACLE_LINUX_7</code> and
   *          <code>ALPINE_LINUX_3_8</code>.</p>
   * @public
   */
  operatingSystems?: StringFilter[];

  /**
   * <p>The Amazon EC2 instance IDs to aggregate findings for.</p>
   * @public
   */
  instanceIds?: StringFilter[];

  /**
   * <p>The Amazon EC2 instance tags to aggregate findings for.</p>
   * @public
   */
  instanceTags?: MapFilter[];

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: Ec2InstanceSortBy;
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
  findingType?: AggregationFindingType;

  /**
   * <p>The resource type to aggregate.</p>
   * @public
   */
  resourceType?: AggregationResourceType;

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: FindingTypeSortBy;
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
  repositories?: StringFilter[];

  /**
   * <p>The ID of the container image layer.</p>
   * @public
   */
  resourceIds?: StringFilter[];

  /**
   * <p>The hashes associated with the layers.</p>
   * @public
   */
  layerHashes?: StringFilter[];

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: ImageLayerSortBy;
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
 * <p>The details that define a findings aggregation based on Amazon Web Services Lambda functions.</p>
 * @public
 */
export interface LambdaFunctionAggregation {
  /**
   * <p>The resource IDs to include in the aggregation results.</p>
   * @public
   */
  resourceIds?: StringFilter[];

  /**
   * <p>The Amazon Web Services Lambda function names to include in the aggregation results.</p>
   * @public
   */
  functionNames?: StringFilter[];

  /**
   * <p>Returns findings aggregated by Amazon Web Services Lambda function runtime environments.</p>
   * @public
   */
  runtimes?: StringFilter[];

  /**
   * <p>The tags to include in the aggregation results.</p>
   * @public
   */
  functionTags?: MapFilter[];

  /**
   * <p>The order to use for sorting the results.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The finding severity to use for sorting the results.</p>
   * @public
   */
  sortBy?: LambdaFunctionSortBy;
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
 * <p>The details that define a findings aggregation based on an Amazon Web Services Lambda function's layers.</p>
 * @public
 */
export interface LambdaLayerAggregation {
  /**
   * <p>The names of the Amazon Web Services Lambda functions associated with the layers.</p>
   * @public
   */
  functionNames?: StringFilter[];

  /**
   * <p>The resource IDs for the Amazon Web Services Lambda function layers.</p>
   * @public
   */
  resourceIds?: StringFilter[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Web Services Lambda function layer.
   *       </p>
   * @public
   */
  layerArns?: StringFilter[];

  /**
   * <p>The order to use for sorting the results.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The finding severity to use for sorting the results.</p>
   * @public
   */
  sortBy?: LambdaLayerSortBy;
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
  packageNames?: StringFilter[];

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: PackageSortBy;
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
  repositories?: StringFilter[];

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: RepositorySortBy;
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
  titles?: StringFilter[];

  /**
   * <p>The vulnerability IDs of the findings.</p>
   * @public
   */
  vulnerabilityIds?: StringFilter[];

  /**
   * <p>The resource type to aggregate on.</p>
   * @public
   */
  resourceType?: AggregationResourceType;

  /**
   * <p>The order to sort results by.</p>
   * @public
   */
  sortOrder?: SortOrder;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  sortBy?: TitleSortBy;

  /**
   * <p>The type of finding to aggregate on.</p>
   * @public
   */
  findingType?: AggregationFindingType;
}

/**
 * <p>Contains details about an aggregation request.</p>
 * @public
 */
export type AggregationRequest =
  | AggregationRequest.AccountAggregationMember
  | AggregationRequest.AmiAggregationMember
  | AggregationRequest.AwsEcrContainerAggregationMember
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
    $unknown?: never;
  }

  /**
   * <p>An object that contains details about an aggregation request based on finding types.</p>
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
    $unknown?: never;
  }

  /**
   * <p>An object that contains details about an aggregation request based on Amazon ECR repositories.</p>
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
    $unknown?: never;
  }

  /**
   * <p>An object that contains details about an aggregation request based on finding title.</p>
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
    $unknown: [string, any];
  }

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
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AggregationRequest, visitor: Visitor<T>): T => {
    if (value.accountAggregation !== undefined) return visitor.accountAggregation(value.accountAggregation);
    if (value.amiAggregation !== undefined) return visitor.amiAggregation(value.amiAggregation);
    if (value.awsEcrContainerAggregation !== undefined)
      return visitor.awsEcrContainerAggregation(value.awsEcrContainerAggregation);
    if (value.ec2InstanceAggregation !== undefined) return visitor.ec2InstanceAggregation(value.ec2InstanceAggregation);
    if (value.findingTypeAggregation !== undefined) return visitor.findingTypeAggregation(value.findingTypeAggregation);
    if (value.imageLayerAggregation !== undefined) return visitor.imageLayerAggregation(value.imageLayerAggregation);
    if (value.packageAggregation !== undefined) return visitor.packageAggregation(value.packageAggregation);
    if (value.repositoryAggregation !== undefined) return visitor.repositoryAggregation(value.repositoryAggregation);
    if (value.titleAggregation !== undefined) return visitor.titleAggregation(value.titleAggregation);
    if (value.lambdaLayerAggregation !== undefined) return visitor.lambdaLayerAggregation(value.lambdaLayerAggregation);
    if (value.lambdaFunctionAggregation !== undefined)
      return visitor.lambdaFunctionAggregation(value.lambdaFunctionAggregation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
  accountId?: string;

  /**
   * <p>An object that contains the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts;

  /**
   * <p>The IDs of Amazon EC2 instances using this AMI.</p>
   * @public
   */
  affectedInstances?: number;
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
  imageSha?: string;

  /**
   * <p>The container repository.</p>
   * @public
   */
  repository?: string;

  /**
   * <p>The architecture of the container.</p>
   * @public
   */
  architecture?: string;

  /**
   * <p>The container image stags.</p>
   * @public
   */
  imageTags?: string[];

  /**
   * <p>The Amazon Web Services account ID of the account that owns the container.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The number of finding by severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts;
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
  ami?: string;

  /**
   * <p>The operating system of the Amazon EC2 instance.</p>
   * @public
   */
  operatingSystem?: string;

  /**
   * <p>The tags attached to the instance.</p>
   * @public
   */
  instanceTags?: Record<string, string>;

  /**
   * <p>The Amazon Web Services account for the Amazon EC2 instance.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>An object that contains the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts;

  /**
   * <p>The number of network findings for the Amazon EC2 instance.</p>
   * @public
   */
  networkFindings?: number;
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
  accountId?: string;

  /**
   * <p>The value to sort results by.</p>
   * @public
   */
  severityCounts?: SeverityCounts;

  /**
   * <p>The number of findings that have an exploit available.</p>
   * @public
   */
  exploitAvailableCount?: number;

  /**
   * <p>
   *          Details about the number of fixes.
   *       </p>
   * @public
   */
  fixAvailableCount?: number;
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
   * <p>The ID of the Amazon Web Services account that owns the container image hosting the layer image.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>An object that represents the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts;
}

/**
 * <p>A response that contains the results of an Amazon Web Services Lambda function finding aggregation.</p>
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
  functionName?: string;

  /**
   * <p>The runtimes included in the aggregation results.</p>
   * @public
   */
  runtime?: string;

  /**
   * <p>The tags included in the aggregation results.</p>
   * @public
   */
  lambdaTags?: Record<string, string>;

  /**
   * <p>The ID of the Amazon Web Services account that owns the Amazon Web Services Lambda function.
   *       </p>
   * @public
   */
  accountId?: string;

  /**
   * <p>An object that contains the counts of aggregated finding per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts;

  /**
   * <p>The date that the Amazon Web Services Lambda function included in the aggregation results was last changed.</p>
   * @public
   */
  lastModifiedAt?: Date;
}

/**
 * <p>A response that contains the results of an Amazon Web Services Lambda function layer finding aggregation.</p>
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
  severityCounts?: SeverityCounts;
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
  accountId?: string;

  /**
   * <p>An object that contains the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts;
}

/**
 * <p>A response that contains details on the results of a finding aggregation by repository.</p>
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
  accountId?: string;

  /**
   * <p>An object that represent the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts;

  /**
   * <p>The number of container images impacted by the findings.</p>
   * @public
   */
  affectedImages?: number;
}

/**
 * <p>A response that contains details on the results of a finding aggregation by title.</p>
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
  vulnerabilityId?: string;

  /**
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>An object that represent the count of matched findings per severity.</p>
   * @public
   */
  severityCounts?: SeverityCounts;
}

/**
 * <p>A structure that contains details about the results of an aggregation type.</p>
 * @public
 */
export type AggregationResponse =
  | AggregationResponse.AccountAggregationMember
  | AggregationResponse.AmiAggregationMember
  | AggregationResponse.AwsEcrContainerAggregationMember
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
    $unknown?: never;
  }

  /**
   * <p>An object that contains details about an aggregation response based on finding types.</p>
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
    $unknown?: never;
  }

  /**
   * <p>An object that contains details about an aggregation response based on finding title.</p>
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
    $unknown: [string, any];
  }

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
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AggregationResponse, visitor: Visitor<T>): T => {
    if (value.accountAggregation !== undefined) return visitor.accountAggregation(value.accountAggregation);
    if (value.amiAggregation !== undefined) return visitor.amiAggregation(value.amiAggregation);
    if (value.awsEcrContainerAggregation !== undefined)
      return visitor.awsEcrContainerAggregation(value.awsEcrContainerAggregation);
    if (value.ec2InstanceAggregation !== undefined) return visitor.ec2InstanceAggregation(value.ec2InstanceAggregation);
    if (value.findingTypeAggregation !== undefined) return visitor.findingTypeAggregation(value.findingTypeAggregation);
    if (value.imageLayerAggregation !== undefined) return visitor.imageLayerAggregation(value.imageLayerAggregation);
    if (value.packageAggregation !== undefined) return visitor.packageAggregation(value.packageAggregation);
    if (value.repositoryAggregation !== undefined) return visitor.repositoryAggregation(value.repositoryAggregation);
    if (value.titleAggregation !== undefined) return visitor.titleAggregation(value.titleAggregation);
    if (value.lambdaLayerAggregation !== undefined) return visitor.lambdaLayerAggregation(value.lambdaLayerAggregation);
    if (value.lambdaFunctionAggregation !== undefined)
      return visitor.lambdaFunctionAggregation(value.lambdaFunctionAggregation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * <p>The number of seconds to wait before retrying the request.</p>
   * @public
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The limit on the number of requests per second was exceeded.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * <p>The number of seconds to wait before retrying the request.</p>
   * @public
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
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
 * <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason for the validation failure.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * <p>The fields that failed validation.</p>
   * @public
   */
  fields?: ValidationExceptionField[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fields = opts.fields;
  }
}

/**
 * <p>The Amazon Web Services Threat Intel Group (ATIG) details for a specific vulnerability.</p>
 * @public
 */
export interface AtigData {
  /**
   * <p>The date and time this vulnerability was first observed.</p>
   * @public
   */
  firstSeen?: Date;

  /**
   * <p>The date and time this vulnerability was last observed.</p>
   * @public
   */
  lastSeen?: Date;

  /**
   * <p>The commercial sectors this vulnerability targets.</p>
   * @public
   */
  targets?: string[];

  /**
   * <p>The <a href="https://attack.mitre.org/">MITRE ATT&amp;CK</a> tactics, techniques, and procedures (TTPs) associated with vulnerability.</p>
   * @public
   */
  ttps?: string[];
}

/**
 * <p>Represents which scan types are automatically enabled for new members of your Amazon Inspector organization.</p>
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
   * <p>Represents whether Amazon Web Services Lambda standard scans are automatically enabled for new members of your Amazon Inspector organization.
   *       </p>
   * @public
   */
  lambda?: boolean;

  /**
   * <p>Represents whether Lambda code scans are automatically enabled for new members of your Amazon Inspector organization.
   *
   *       </p>
   * @public
   */
  lambdaCode?: boolean;
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
  type?: string;

  /**
   * <p>The image ID of the Amazon EC2 instance.</p>
   * @public
   */
  imageId?: string;

  /**
   * <p>The IPv4 addresses of the Amazon EC2 instance.</p>
   * @public
   */
  ipV4Addresses?: string[];

  /**
   * <p>The IPv6 addresses of the Amazon EC2 instance.</p>
   * @public
   */
  ipV6Addresses?: string[];

  /**
   * <p>The name of the key pair used to launch the Amazon EC2 instance.</p>
   * @public
   */
  keyName?: string;

  /**
   * <p>The IAM instance profile ARN of the Amazon EC2 instance.</p>
   * @public
   */
  iamInstanceProfileArn?: string;

  /**
   * <p>The VPC ID of the Amazon EC2 instance.</p>
   * @public
   */
  vpcId?: string;

  /**
   * <p>The subnet ID of the Amazon EC2 instance.</p>
   * @public
   */
  subnetId?: string;

  /**
   * <p>The date and time the Amazon EC2 instance was launched at.</p>
   * @public
   */
  launchedAt?: Date;

  /**
   * <p>The platform of the Amazon EC2 instance.</p>
   * @public
   */
  platform?: string;
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
  imageTags?: string[];

  /**
   * <p>The date and time the Amazon ECR container image was pushed.</p>
   * @public
   */
  pushedAt?: Date;

  /**
   * <p>The image author of the Amazon ECR container image.</p>
   * @public
   */
  author?: string;

  /**
   * <p>The architecture of the Amazon ECR container image.</p>
   * @public
   */
  architecture?: string;

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
  platform?: string;
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
 * <p>The VPC security groups and subnets that are attached to an Amazon Web Services Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
 * @public
 */
export interface LambdaVpcConfig {
  /**
   * <p>A list of VPC subnet IDs.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>The VPC security groups and subnets that are attached to an Amazon Web Services Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
   * @public
   */
  securityGroupIds?: string[];

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  vpcId?: string;
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
   * <p>The Amazon Web Services Lambda function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">
   *          layers</a>. A Lambda function can have up to five layers.</p>
   * @public
   */
  layers?: string[];

  /**
   * <p>The Amazon Web Services Lambda function's networking configuration.</p>
   * @public
   */
  vpcConfig?: LambdaVpcConfig;

  /**
   * <p>The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for .zip file archive.</p>
   * @public
   */
  packageType?: PackageType;

  /**
   * <p>The instruction set architecture that the Amazon Web Services Lambda function supports. Architecture is a string array with one of the
   *          valid values. The default architecture value is <code>x86_64</code>.</p>
   * @public
   */
  architectures?: Architecture[];

  /**
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>
   *          </p>
   * @public
   */
  lastModifiedAt?: Date;
}

/**
 * <p>One or more tags submitted as part of the request is not valid.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * @public
 */
export interface BatchGetAccountStatusRequest {
  /**
   * <p>The 12-digit Amazon Web Services account IDs of the accounts to retrieve Amazon Inspector status for.</p>
   * @public
   */
  accountIds?: string[];
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
  status?: Status;

  /**
   * <p>An object detailing which resources Amazon Inspector is enabled to scan for the account.</p>
   * @public
   */
  resourceStatus?: ResourceStatus;

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
   * <p>An array of objects that provide details on the status of Amazon Inspector for each of the requested accounts.</p>
   * @public
   */
  accounts: AccountState[] | undefined;

  /**
   * <p>An array of objects detailing any accounts that failed to enable Amazon Inspector and why.</p>
   * @public
   */
  failedAccounts?: FailedAccount[];
}

/**
 * <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface BatchGetCodeSnippetRequest {
  /**
   * <p>An array of finding ARNs for the findings you want to retrieve code snippets from.</p>
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
  description?: string;

  /**
   * <p>The fix's code.</p>
   * @public
   */
  code?: string;
}

/**
 * <p>Contains information on a code snippet retrieved by Amazon Inspector from a code vulnerability finding.</p>
 * @public
 */
export interface CodeSnippetResult {
  /**
   * <p>The ARN of a finding that the code snippet is associated with.</p>
   * @public
   */
  findingArn?: string;

  /**
   * <p>The line number of the first line of a code snippet.</p>
   * @public
   */
  startLine?: number;

  /**
   * <p>The line number of the last line of a code snippet.</p>
   * @public
   */
  endLine?: number;

  /**
   * <p>Contains information on the retrieved code snippet.</p>
   * @public
   */
  codeSnippet?: CodeLine[];

  /**
   * <p>Details of a suggested code fix.</p>
   * @public
   */
  suggestedFixes?: SuggestedFix[];
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
 * <p>Contains information about any errors encountered while trying to retrieve a code snippet.</p>
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
  codeSnippetResults?: CodeSnippetResult[];

  /**
   * <p>Any errors Amazon Inspector encountered while trying to retrieve the requested code snippets.</p>
   * @public
   */
  errors?: CodeSnippetError[];
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
 * <p>Details about an error encountered when trying to return vulnerability data for a finding.</p>
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
 * <p>The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific vulnerability.</p>
 * @public
 */
export interface CisaData {
  /**
   * <p>The date and time CISA added this vulnerability to their catalogue.</p>
   * @public
   */
  dateAdded?: Date;

  /**
   * <p>The date and time CISA expects a fix to have been provided vulnerability.</p>
   * @public
   */
  dateDue?: Date;

  /**
   * <p>The remediation action recommended by CISA for this vulnerability.</p>
   * @public
   */
  action?: string;
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
  evidenceRule?: string;

  /**
   * <p>The evidence details.</p>
   * @public
   */
  evidenceDetail?: string;

  /**
   * <p>The evidence severity.</p>
   * @public
   */
  severity?: string;
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
  lastSeen?: Date;

  /**
   * <p>The date an time when the exploit was first seen.</p>
   * @public
   */
  firstSeen?: Date;
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
  findingArn?: string;

  /**
   * <p>The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific vulnerability.</p>
   * @public
   */
  cisaData?: CisaData;

  /**
   * <p>The risk score of the vulnerability.</p>
   * @public
   */
  riskScore?: number;

  /**
   * <p>Information on the evidence of the vulnerability.</p>
   * @public
   */
  evidences?: Evidence[];

  /**
   * <p>The MITRE adversary tactics, techniques, or procedures (TTPs) associated with the vulnerability.</p>
   * @public
   */
  ttps?: string[];

  /**
   * <p>The known malware tools or kits that can exploit the vulnerability.</p>
   * @public
   */
  tools?: string[];

  /**
   * <p>Contains information on when this exploit was observed.</p>
   * @public
   */
  exploitObserved?: ExploitObserved;

  /**
   * <p>The reference URLs for the vulnerability data.</p>
   * @public
   */
  referenceUrls?: string[];

  /**
   * <p>The Common Weakness Enumerations (CWEs) associated with the vulnerability.</p>
   * @public
   */
  cwes?: string[];

  /**
   * <p>The Exploit Prediction Scoring System (EPSS) score of the vulnerability.</p>
   * @public
   */
  epssScore?: number;
}

/**
 * @public
 */
export interface BatchGetFindingDetailsResponse {
  /**
   * <p>A finding's vulnerability details.</p>
   * @public
   */
  findingDetails?: FindingDetail[];

  /**
   * <p>Error information for findings that details could not be returned for.</p>
   * @public
   */
  errors?: FindingDetailsError[];
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
 * <p>Information about an error received while accessing free trail data for an account.</p>
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
   * <p>An array of objects that provide Amazon Inspector free trial details for each of the requested accounts.
   *       </p>
   * @public
   */
  accounts: FreeTrialAccountInfo[] | undefined;

  /**
   * <p>An array of objects detailing any accounts that free trial data could not be returned for.</p>
   * @public
   */
  failedAccounts: FreeTrialInfoError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetMemberEc2DeepInspectionStatusRequest {
  /**
   * <p>The unique identifiers for the Amazon Web Services accounts to retrieve Amazon Inspector deep inspection activation status for.
   *
   *       </p>
   * @public
   */
  accountIds?: string[];
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
 * <p>An object that contains details about the state of Amazon Inspector deep inspection for a member account.</p>
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
  status?: Ec2DeepInspectionStatus;

  /**
   * <p>The error message explaining why the account failed to activate Amazon Inspector deep inspection.</p>
   * @public
   */
  errorMessage?: string;
}

/**
 * <p>An object that contains details about a member account in your organization that failed to activate Amazon Inspector deep inspection.</p>
 * @public
 */
export interface FailedMemberAccountEc2DeepInspectionStatusState {
  /**
   * <p>The unique identifier for the Amazon Web Services account of the organization member that failed to activate Amazon Inspector deep inspection.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>The status of EC2 scanning in the account that failed to activate Amazon Inspector deep inspection.</p>
   * @public
   */
  ec2ScanStatus?: Status;

  /**
   * <p>The error message explaining why the account failed to activate Amazon Inspector deep inspection.</p>
   * @public
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface BatchGetMemberEc2DeepInspectionStatusResponse {
  /**
   * <p>An array of objects that provide details on the activation status of Amazon Inspector deep inspection for each of the requested accounts.
   *
   *          </p>
   * @public
   */
  accountIds?: MemberAccountEc2DeepInspectionStatusState[];

  /**
   * <p>An array of objects that provide details on any accounts that failed to activate Amazon Inspector deep inspection and why.
   *
   *       </p>
   * @public
   */
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[];
}

/**
 * <p>An object that contains details about the status of Amazon Inspector deep inspection for a member account in your organization.</p>
 * @public
 */
export interface MemberAccountEc2DeepInspectionStatus {
  /**
   * <p>The unique identifier for the Amazon Web Services account of the organization member.</p>
   * @public
   */
  accountId: string | undefined;

  /**
   * <p>Whether Amazon Inspector deep inspection is active in the account.  If <code>TRUE</code> Amazon Inspector deep inspection is active, if <code>FALSE</code> it is not active.</p>
   * @public
   */
  activateDeepInspection: boolean | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusRequest {
  /**
   * <p>The unique identifiers for the Amazon Web Services accounts to change Amazon Inspector deep inspection status for.</p>
   * @public
   */
  accountIds: MemberAccountEc2DeepInspectionStatus[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusResponse {
  /**
   * <p>An array of objects that provide details for each of the accounts that Amazon Inspector deep inspection status was successfully changed for.
   *       </p>
   * @public
   */
  accountIds?: MemberAccountEc2DeepInspectionStatusState[];

  /**
   * <p>An array of objects that provide details for each of the accounts that Amazon Inspector deep inspection status could not be successfully changed for.
   *       </p>
   * @public
   */
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[];
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
  reportId?: string;
}

/**
 * @public
 * @enum
 */
export const CisSecurityLevel = {
  LEVEL_1: "LEVEL_1",
  LEVEL_2: "LEVEL_2",
} as const;

/**
 * @public
 */
export type CisSecurityLevel = (typeof CisSecurityLevel)[keyof typeof CisSecurityLevel];

/**
 * <p>The status counts.</p>
 * @public
 */
export interface StatusCounts {
  /**
   * <p>The number of checks that failed.</p>
   * @public
   */
  failed?: number;

  /**
   * <p>The number of checks that were skipped.</p>
   * @public
   */
  skipped?: number;

  /**
   * <p>The number of checks that passed.</p>
   * @public
   */
  passed?: number;
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
  checkId?: string;

  /**
   * <p>The CIS check title.</p>
   * @public
   */
  title?: string;

  /**
   * <p>The description for the CIS check.</p>
   * @public
   */
  checkDescription?: string;

  /**
   * <p>The CIS check level.</p>
   * @public
   */
  level?: CisSecurityLevel;

  /**
   * <p>The account ID for the CIS check.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The CIS check status counts.</p>
   * @public
   */
  statusCounts?: StatusCounts;

  /**
   * <p>The CIS check platform.</p>
   * @public
   */
  platform?: string;
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
  earliestScanStartTime?: Date;

  /**
   * <p>The CIS date filter's latest scan start time.</p>
   * @public
   */
  latestScanStartTime?: Date;
}

/**
 * @public
 * @enum
 */
export const CisFindingStatus = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  SKIPPED: "SKIPPED",
} as const;

/**
 * @public
 */
export type CisFindingStatus = (typeof CisFindingStatus)[keyof typeof CisFindingStatus];

/**
 * @public
 * @enum
 */
export const CisFindingStatusComparison = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type CisFindingStatusComparison = (typeof CisFindingStatusComparison)[keyof typeof CisFindingStatusComparison];

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
  upperInclusive?: number;

  /**
   * <p>The CIS number filter's lower inclusive.</p>
   * @public
   */
  lowerInclusive?: number;
}

/**
 * @public
 * @enum
 */
export const CisReportFormat = {
  CSV: "CSV",
  PDF: "PDF",
} as const;

/**
 * @public
 */
export type CisReportFormat = (typeof CisReportFormat)[keyof typeof CisReportFormat];

/**
 * @public
 * @enum
 */
export const CisReportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type CisReportStatus = (typeof CisReportStatus)[keyof typeof CisReportStatus];

/**
 * @public
 * @enum
 */
export const CisResultStatus = {
  FAILED: "FAILED",
  PASSED: "PASSED",
  SKIPPED: "SKIPPED",
} as const;

/**
 * @public
 */
export type CisResultStatus = (typeof CisResultStatus)[keyof typeof CisResultStatus];

/**
 * @public
 * @enum
 */
export const CisResultStatusComparison = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type CisResultStatusComparison = (typeof CisResultStatusComparison)[keyof typeof CisResultStatusComparison];

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
 * @public
 * @enum
 */
export const CisRuleStatus = {
  ERROR: "ERROR",
  FAILED: "FAILED",
  INFORMATIONAL: "INFORMATIONAL",
  NOT_APPLICABLE: "NOT_APPLICABLE",
  NOT_EVALUATED: "NOT_EVALUATED",
  PASSED: "PASSED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type CisRuleStatus = (typeof CisRuleStatus)[keyof typeof CisRuleStatus];

/**
 * @public
 * @enum
 */
export const CisScanStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type CisScanStatus = (typeof CisScanStatus)[keyof typeof CisScanStatus];

/**
 * <p>The CIS targets.</p>
 * @public
 */
export interface CisTargets {
  /**
   * <p>The CIS target account ids.</p>
   * @public
   */
  accountIds?: string[];

  /**
   * <p>The CIS target resource tags.</p>
   * @public
   */
  targetResourceTags?: Record<string, string[]>;
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
  status?: CisScanStatus;

  /**
   * <p>The the name of the scan configuration that's associated with this scan.</p>
   * @public
   */
  scanName?: string;

  /**
   * <p>The CIS scan's date.</p>
   * @public
   */
  scanDate?: Date;

  /**
   * <p>The CIS scan's failed checks.</p>
   * @public
   */
  failedChecks?: number;

  /**
   * <p>The CIS scan's total checks.</p>
   * @public
   */
  totalChecks?: number;

  /**
   * <p>The CIS scan's targets.</p>
   * @public
   */
  targets?: CisTargets;

  /**
   * <p>The account or organization that schedules the CIS scan.</p>
   * @public
   */
  scheduledBy?: string;

  /**
   * <p>
   *          The security level for the CIS scan.
   *          Security level refers to the Benchmark levels that CIS assigns to a profile.
   *       </p>
   * @public
   */
  securityLevel?: CisSecurityLevel;
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
 * @public
 * @enum
 */
export const Day = {
  FRI: "FRI",
  MON: "MON",
  SAT: "SAT",
  SUN: "SUN",
  THU: "THU",
  TUE: "TUE",
  WED: "WED",
} as const;

/**
 * @public
 */
export type Day = (typeof Day)[keyof typeof Day];

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

  export interface Visitor<T> {
    oneTime: (value: OneTimeSchedule) => T;
    daily: (value: DailySchedule) => T;
    weekly: (value: WeeklySchedule) => T;
    monthly: (value: MonthlySchedule) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Schedule, visitor: Visitor<T>): T => {
    if (value.oneTime !== undefined) return visitor.oneTime(value.oneTime);
    if (value.daily !== undefined) return visitor.daily(value.daily);
    if (value.weekly !== undefined) return visitor.weekly(value.weekly);
    if (value.monthly !== undefined) return visitor.monthly(value.monthly);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
  ownerId?: string;

  /**
   * <p>The name of the CIS scan configuration.</p>
   * @public
   */
  scanName?: string;

  /**
   * <p>The CIS scan configuration's security level.</p>
   * @public
   */
  securityLevel?: CisSecurityLevel;

  /**
   * <p>The CIS scan configuration's schedule.</p>
   * @public
   */
  schedule?: Schedule;

  /**
   * <p>The CIS scan configuration's targets.</p>
   * @public
   */
  targets?: CisTargets;

  /**
   * <p>The CIS scan configuration's tags.</p>
   * @public
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const CisScanConfigurationsSortBy = {
  SCAN_CONFIGURATION_ARN: "SCAN_CONFIGURATION_ARN",
  SCAN_NAME: "SCAN_NAME",
} as const;

/**
 * @public
 */
export type CisScanConfigurationsSortBy =
  (typeof CisScanConfigurationsSortBy)[keyof typeof CisScanConfigurationsSortBy];

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
  accountId?: string;

  /**
   * <p>The CIS scan result details' target resource ID.</p>
   * @public
   */
  targetResourceId?: string;

  /**
   * <p>The CIS scan result details' platform.</p>
   * @public
   */
  platform?: string;

  /**
   * <p>The CIS scan result details' status.</p>
   * @public
   */
  status?: CisFindingStatus;

  /**
   * <p>The CIS scan result details' status reason.</p>
   * @public
   */
  statusReason?: string;

  /**
   * <p>The CIS scan result details' check ID.</p>
   * @public
   */
  checkId?: string;

  /**
   * <p>The CIS scan result details' title.</p>
   * @public
   */
  title?: string;

  /**
   * <p>The account ID that's associated with the CIS scan result details.</p>
   * @public
   */
  checkDescription?: string;

  /**
   * <p>The CIS scan result details' remediation.</p>
   * @public
   */
  remediation?: string;

  /**
   * <p>The CIS scan result details' level.</p>
   * @public
   */
  level?: CisSecurityLevel;

  /**
   * <p>The CIS scan result details' finding ARN.</p>
   * @public
   */
  findingArn?: string;
}

/**
 * @public
 * @enum
 */
export const CisSecurityLevelComparison = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type CisSecurityLevelComparison = (typeof CisSecurityLevelComparison)[keyof typeof CisSecurityLevelComparison];

/**
 * <p>
 *          The CIS security level filter.
 *          Security level refers to the Benchmark levels that CIS assigns to a profile.
 *       </p>
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
  findingStatusFilters?: CisFindingStatusFilter[];

  /**
   * <p>The criteria's check ID filters.</p>
   * @public
   */
  checkIdFilters?: CisStringFilter[];

  /**
   * <p>The criteria's title filters.</p>
   * @public
   */
  titleFilters?: CisStringFilter[];

  /**
   * <p>
   *          The criteria's security level filters. .
   *          Security level refers to the Benchmark levels that CIS assigns to a profile.
   *       </p>
   * @public
   */
  securityLevelFilters?: CisSecurityLevelFilter[];

  /**
   * <p>The criteria's finding ARN filters.</p>
   * @public
   */
  findingArnFilters?: CisStringFilter[];
}

/**
 * @public
 * @enum
 */
export const CisScanResultDetailsSortBy = {
  CHECK_ID: "CHECK_ID",
  STATUS: "STATUS",
} as const;

/**
 * @public
 */
export type CisScanResultDetailsSortBy = (typeof CisScanResultDetailsSortBy)[keyof typeof CisScanResultDetailsSortBy];

/**
 * <p>The scan results aggregated by checks filter criteria.</p>
 * @public
 */
export interface CisScanResultsAggregatedByChecksFilterCriteria {
  /**
   * <p>The criteria's account ID filters.</p>
   * @public
   */
  accountIdFilters?: CisStringFilter[];

  /**
   * <p>The criteria's check ID filters.</p>
   * @public
   */
  checkIdFilters?: CisStringFilter[];

  /**
   * <p>The criteria's title filters.</p>
   * @public
   */
  titleFilters?: CisStringFilter[];

  /**
   * <p>The criteria's platform filters.</p>
   * @public
   */
  platformFilters?: CisStringFilter[];

  /**
   * <p>The criteria's failed resources filters.</p>
   * @public
   */
  failedResourcesFilters?: CisNumberFilter[];

  /**
   * <p>The criteria's security level filters.</p>
   * @public
   */
  securityLevelFilters?: CisSecurityLevelFilter[];
}

/**
 * @public
 * @enum
 */
export const CisScanResultsAggregatedByChecksSortBy = {
  CHECK_ID: "CHECK_ID",
  FAILED_COUNTS: "FAILED_COUNTS",
  PLATFORM: "PLATFORM",
  SECURITY_LEVEL: "SECURITY_LEVEL",
  TITLE: "TITLE",
} as const;

/**
 * @public
 */
export type CisScanResultsAggregatedByChecksSortBy =
  (typeof CisScanResultsAggregatedByChecksSortBy)[keyof typeof CisScanResultsAggregatedByChecksSortBy];

/**
 * @public
 * @enum
 */
export const TagComparison = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type TagComparison = (typeof TagComparison)[keyof typeof TagComparison];

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
 * @public
 * @enum
 */
export const CisTargetStatusComparison = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type CisTargetStatusComparison = (typeof CisTargetStatusComparison)[keyof typeof CisTargetStatusComparison];

/**
 * @public
 * @enum
 */
export const CisTargetStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type CisTargetStatus = (typeof CisTargetStatus)[keyof typeof CisTargetStatus];

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
 * @public
 * @enum
 */
export const CisTargetStatusReason = {
  SCAN_IN_PROGRESS: "SCAN_IN_PROGRESS",
  SSM_UNMANAGED: "SSM_UNMANAGED",
  UNSUPPORTED_OS: "UNSUPPORTED_OS",
} as const;

/**
 * @public
 */
export type CisTargetStatusReason = (typeof CisTargetStatusReason)[keyof typeof CisTargetStatusReason];

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
  accountIdFilters?: CisStringFilter[];

  /**
   * <p>The criteria's status filter.</p>
   * @public
   */
  statusFilters?: CisResultStatusFilter[];

  /**
   * <p>The criteria's check ID filters.</p>
   * @public
   */
  checkIdFilters?: CisStringFilter[];

  /**
   * <p>The criteria's target resource ID filters.</p>
   * @public
   */
  targetResourceIdFilters?: CisStringFilter[];

  /**
   * <p>The criteria's target resource tag filters.</p>
   * @public
   */
  targetResourceTagFilters?: TagFilter[];

  /**
   * <p>The criteria's platform filters.</p>
   * @public
   */
  platformFilters?: CisStringFilter[];

  /**
   * <p>The criteria's target status filters.</p>
   * @public
   */
  targetStatusFilters?: CisTargetStatusFilter[];

  /**
   * <p>The criteria's target status reason filters.</p>
   * @public
   */
  targetStatusReasonFilters?: CisTargetStatusReasonFilter[];

  /**
   * <p>The criteria's failed checks filters.</p>
   * @public
   */
  failedChecksFilters?: CisNumberFilter[];
}

/**
 * @public
 * @enum
 */
export const CisScanResultsAggregatedByTargetResourceSortBy = {
  ACCOUNT_ID: "ACCOUNT_ID",
  FAILED_COUNTS: "FAILED_COUNTS",
  PLATFORM: "PLATFORM",
  RESOURCE_ID: "RESOURCE_ID",
  TARGET_STATUS: "TARGET_STATUS",
  TARGET_STATUS_REASON: "TARGET_STATUS_REASON",
} as const;

/**
 * @public
 */
export type CisScanResultsAggregatedByTargetResourceSortBy =
  (typeof CisScanResultsAggregatedByTargetResourceSortBy)[keyof typeof CisScanResultsAggregatedByTargetResourceSortBy];

/**
 * @public
 * @enum
 */
export const CisScanStatusComparison = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type CisScanStatusComparison = (typeof CisScanStatusComparison)[keyof typeof CisScanStatusComparison];

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
 * @public
 * @enum
 */
export const CisSortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type CisSortOrder = (typeof CisSortOrder)[keyof typeof CisSortOrder];

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
  targetResourceId?: string;

  /**
   * <p>The account ID for the CIS target resource.</p>
   * @public
   */
  accountId?: string;

  /**
   * <p>The tag for the target resource.</p>
   * @public
   */
  targetResourceTags?: Record<string, string[]>;

  /**
   * <p>The target resource status counts.</p>
   * @public
   */
  statusCounts?: StatusCounts;

  /**
   * <p>The platform for the CIS target resource.</p>
   * @public
   */
  platform?: string;

  /**
   * <p>The status of the target resource.</p>
   * @public
   */
  targetStatus?: CisTargetStatus;

  /**
   * <p>The reason for the target resource.</p>
   * @public
   */
  targetStatusReason?: CisTargetStatusReason;
}

/**
 * <p>Contains information on where a code vulnerability is located in your Lambda function.</p>
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
 * <p>Contains information on the code vulnerability identified in your Lambda function.</p>
 * @public
 */
export interface CodeVulnerabilityDetails {
  /**
   * <p>Contains information on where the code vulnerability is located in your code.</p>
   * @public
   */
  filePath: CodeFilePath | undefined;

  /**
   * <p>The detector tag associated with the vulnerability. Detector tags group related vulnerabilities by common themes or tactics. For a list of available tags by programming language, see <a href="https://docs.aws.amazon.com/codeguru/detector-library/java/tags/">Java tags</a>, or <a href="https://docs.aws.amazon.com/codeguru/detector-library/python/tags/">Python tags</a>. </p>
   * @public
   */
  detectorTags?: string[];

  /**
   * <p>A URL containing supporting documentation about the code vulnerability detected.</p>
   * @public
   */
  referenceUrls?: string[];

  /**
   * <p>The identifier for a rule that was used to detect the code vulnerability.</p>
   * @public
   */
  ruleId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda layer that the code vulnerability was detected in.</p>
   * @public
   */
  sourceLambdaLayerArn?: string;

  /**
   * <p>The ID for the Amazon CodeGuru detector associated with the finding. For more information on detectors see <a href="https://docs.aws.amazon.com/codeguru/detector-library">Amazon CodeGuru
   *          Detector Library</a>.</p>
   * @public
   */
  detectorId: string | undefined;

  /**
   * <p>The name of the detector used to identify the code vulnerability. For more information on detectors see <a href="https://docs.aws.amazon.com/codeguru/detector-library">CodeGuru Detector Library</a>.</p>
   * @public
   */
  detectorName: string | undefined;

  /**
   * <p>The Common Weakness Enumeration (CWE) item associated with the detected vulnerability.</p>
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
  vendor?: string;

  /**
   * <p>The compute platform product.</p>
   * @public
   */
  product?: string;

  /**
   * <p>The compute platform version.</p>
   * @public
   */
  version?: string;
}

/**
 * <p>A conflict occurred.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the conflicting resource.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of the conflicting resource.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
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
  count?: number;

  /**
   * <p>The key associated with this group</p>
   * @public
   */
  groupKey?: GroupKey;
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
  startInclusive?: Date;

  /**
   * <p>A timestamp representing the end of the time period to filter results by.</p>
   * @public
   */
  endInclusive?: Date;
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
  value?: string;
}

/**
 * <p>A structure that identifies filter criteria for <code>GetCoverageStatistics</code>.</p>
 * @public
 */
export interface CoverageFilterCriteria {
  /**
   * <p>The scan status code to filter on. Valid values are: <code>ValidationException</code>, <code>InternalServerException</code>, <code>ResourceNotFoundException</code>, <code>BadRequestException</code>, and <code>ThrottlingException</code>.</p>
   * @public
   */
  scanStatusCode?: CoverageStringFilter[];

  /**
   * <p>The scan status reason to filter on.</p>
   * @public
   */
  scanStatusReason?: CoverageStringFilter[];

  /**
   * <p>An array of Amazon Web Services account IDs to return coverage statistics for.</p>
   * @public
   */
  accountId?: CoverageStringFilter[];

  /**
   * <p>An array of Amazon Web Services resource IDs to return coverage statistics for.</p>
   * @public
   */
  resourceId?: CoverageStringFilter[];

  /**
   * <p>An array of Amazon Web Services resource types to return coverage statistics for. The values can be <code>AWS_EC2_INSTANCE</code>, <code>AWS_LAMBDA_FUNCTION</code>, <code>AWS_ECR_CONTAINER_IMAGE</code>,  <code>AWS_ECR_REPOSITORY</code> or <code>AWS_ACCOUNT</code>.</p>
   * @public
   */
  resourceType?: CoverageStringFilter[];

  /**
   * <p>An array of Amazon Inspector scan types to return coverage statistics for.</p>
   * @public
   */
  scanType?: CoverageStringFilter[];

  /**
   * <p>The Amazon ECR repository name to filter on.</p>
   * @public
   */
  ecrRepositoryName?: CoverageStringFilter[];

  /**
   * <p>The Amazon ECR image tags to filter on.</p>
   * @public
   */
  ecrImageTags?: CoverageStringFilter[];

  /**
   * <p>The Amazon EC2 instance tags to filter on.</p>
   * @public
   */
  ec2InstanceTags?: CoverageMapFilter[];

  /**
   * <p>Returns coverage statistics for Amazon Web Services Lambda functions filtered by function names.</p>
   * @public
   */
  lambdaFunctionName?: CoverageStringFilter[];

  /**
   * <p>Returns coverage statistics for Amazon Web Services Lambda functions filtered by tag.</p>
   * @public
   */
  lambdaFunctionTags?: CoverageMapFilter[];

  /**
   * <p>Returns coverage statistics for Amazon Web Services Lambda functions filtered by runtime.</p>
   * @public
   */
  lambdaFunctionRuntime?: CoverageStringFilter[];

  /**
   * <p>Filters Amazon Web Services resources based on whether Amazon Inspector has checked them for vulnerabilities within the specified time range.</p>
   * @public
   */
  lastScannedAt?: CoverageDateFilter[];

  /**
   * <p>The filter to search for Amazon EC2 instance coverage by scan mode. Valid values are <code>EC2_SSM_AGENT_BASED</code> and <code>EC2_AGENTLESS</code>.</p>
   * @public
   */
  scanMode?: CoverageStringFilter[];

  /**
   * <p>The date an image was last pulled at.</p>
   * @public
   */
  imagePulledAt?: CoverageDateFilter[];
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
  tags?: Record<string, string>;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) used to launch the instance.</p>
   * @public
   */
  amiId?: string;

  /**
   * <p>The platform of the instance.</p>
   * @public
   */
  platform?: Ec2Platform;
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
  tags?: string[];

  /**
   * <p>The date an image was last pulled at.</p>
   * @public
   */
  imagePulledAt?: Date;
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
  name?: string;

  /**
   * <p>The frequency of scans.</p>
   * @public
   */
  scanFrequency?: EcrScanFrequency;
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
  functionTags?: Record<string, string>;

  /**
   * <p>The layers for an Amazon Web Services Lambda function. A Lambda function can have up to five layers.</p>
   * @public
   */
  layers?: string[];

  /**
   * <p>The name of a function.</p>
   * @public
   */
  functionName?: string;

  /**
   * <p>An Amazon Web Services Lambda function's runtime.</p>
   * @public
   */
  runtime?: Runtime;
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
  ecrRepository?: EcrRepositoryMetadata;

  /**
   * <p>An object that contains details about the container metadata for an Amazon ECR image.</p>
   * @public
   */
  ecrImage?: EcrContainerImageMetadata;

  /**
   * <p>An object that contains metadata details for an Amazon EC2 instance.</p>
   * @public
   */
  ec2?: Ec2Metadata;

  /**
   * <p>An object that contains metadata details for an Amazon Web Services Lambda function.</p>
   * @public
   */
  lambdaFunction?: LambdaFunctionMetadata;
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
export const ScanStatusReason = {
  ACCESS_DENIED: "ACCESS_DENIED",
  AGENTLESS_INSTANCE_COLLECTION_TIME_LIMIT_EXCEEDED: "AGENTLESS_INSTANCE_COLLECTION_TIME_LIMIT_EXCEEDED",
  AGENTLESS_INSTANCE_STORAGE_LIMIT_EXCEEDED: "AGENTLESS_INSTANCE_STORAGE_LIMIT_EXCEEDED",
  DEEP_INSPECTION_COLLECTION_TIME_LIMIT_EXCEEDED: "DEEP_INSPECTION_COLLECTION_TIME_LIMIT_EXCEEDED",
  DEEP_INSPECTION_DAILY_SSM_INVENTORY_LIMIT_EXCEEDED: "DEEP_INSPECTION_DAILY_SSM_INVENTORY_LIMIT_EXCEEDED",
  DEEP_INSPECTION_NO_INVENTORY: "DEEP_INSPECTION_NO_INVENTORY",
  DEEP_INSPECTION_PACKAGE_COLLECTION_LIMIT_EXCEEDED: "DEEP_INSPECTION_PACKAGE_COLLECTION_LIMIT_EXCEEDED",
  EC2_INSTANCE_STOPPED: "EC2_INSTANCE_STOPPED",
  EXCLUDED_BY_TAG: "EXCLUDED_BY_TAG",
  IMAGE_SIZE_EXCEEDED: "IMAGE_SIZE_EXCEEDED",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  NO_INVENTORY: "NO_INVENTORY",
  NO_RESOURCES_FOUND: "NO_RESOURCES_FOUND",
  PENDING_DISABLE: "PENDING_DISABLE",
  PENDING_INITIAL_SCAN: "PENDING_INITIAL_SCAN",
  RESOURCE_TERMINATED: "RESOURCE_TERMINATED",
  SCAN_ELIGIBILITY_EXPIRED: "SCAN_ELIGIBILITY_EXPIRED",
  SCAN_FREQUENCY_MANUAL: "SCAN_FREQUENCY_MANUAL",
  SCAN_FREQUENCY_SCAN_ON_PUSH: "SCAN_FREQUENCY_SCAN_ON_PUSH",
  STALE_INVENTORY: "STALE_INVENTORY",
  SUCCESSFUL: "SUCCESSFUL",
  UNMANAGED_EC2_INSTANCE: "UNMANAGED_EC2_INSTANCE",
  UNSUPPORTED_CONFIG_FILE: "UNSUPPORTED_CONFIG_FILE",
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
   *             <code>PENDING_INITIAL_SCAN</code> - This resource has been identified for scanning, results will be available soon.</p>
   *          <p>
   *             <code>ACCESS_DENIED</code> - Resource access policy restricting Amazon Inspector access. Please update the IAM policy.</p>
   *          <p>
   *             <code>INTERNAL_ERROR</code> - Amazon Inspector has encountered an internal error for this resource. Amazon Inspector service will automatically resolve the issue and resume the scanning. No action required from the user.</p>
   *          <p>
   *             <code>UNMANAGED_EC2_INSTANCE</code> - The EC2 instance is not managed by SSM, please use the following SSM automation to remediate the issue: <a href="https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-awssupport-troubleshoot-managed-instance.html">https://docs.aws.amazon.com/systems-manager-automation-runbooks/latest/userguide/automation-awssupport-troubleshoot-managed-instance.html</a>. Once the instance becomes managed by SSM, Inspector will automatically begin scanning this instance. </p>
   *          <p>
   *             <code>UNSUPPORTED_OS</code> - Amazon Inspector does not support this OS, architecture, or image manifest type at this time. To see a complete list of supported operating systems see: <a href=" https://docs.aws.amazon.com/inspector/latest/user/supported.html">https://docs.aws.amazon.com/inspector/latest/user/supported.html</a>.</p>
   *          <p>
   *             <code>SCAN_ELIGIBILITY_EXPIRED</code> - The configured scan duration has lapsed for this image.</p>
   *          <p>
   *             <code>RESOURCE_TERMINATED</code> - This resource has been terminated. The findings and coverage associated with this resource are in the process of being cleaned up.</p>
   *          <p>
   *             <code>SUCCESSFUL</code> - The scan was successful.</p>
   *          <p>
   *             <code>NO_RESOURCES_FOUND</code> - Reserved for future use.</p>
   *          <p>
   *             <code>IMAGE_SIZE_EXCEEDED</code> - Reserved for future use.</p>
   *          <p>
   *             <code>SCAN_FREQUENCY_MANUAL</code> - This image will not be covered by Amazon Inspector due to the repository scan frequency configuration.</p>
   *          <p>
   *             <code>SCAN_FREQUENCY_SCAN_ON_PUSH </code>- This image will be scanned one time and will not new findings because of the scan frequency configuration.</p>
   *          <p>
   *             <code>EC2_INSTANCE_STOPPED</code> - This EC2 instance is in a stopped state, therefore, Amazon Inspector will pause scanning. The existing findings will continue to exist until the instance is terminated. Once the instance is re-started, Inspector will automatically start scanning the instance again. Please note that you will not be charged for this instance while it’s in a stopped state.</p>
   *          <p>
   *             <code>PENDING_DISABLE</code> - This resource is pending cleanup during disablement. The customer will not be billed while a resource is in the pending disable status.</p>
   *          <p>
   *             <code>NO INVENTORY</code> - Amazon Inspector couldn’t find software application inventory to scan for vulnerabilities. This might be caused due to required Amazon Inspector associations being deleted or failing to run on your resource. Please verify the status of <code>InspectorInventoryCollection-do-not-delete</code>  association in the SSM console for the resource. Additionally, you can verify the instance’s inventory in the SSM Fleet Manager console.</p>
   *          <p>
   *             <code>STALE_INVENTORY</code> - Amazon Inspector wasn’t able to collect an updated software application inventory in the last 7 days. Please confirm the required Amazon Inspector associations still exist and you can still see an updated inventory in the SSM console.</p>
   *          <p>
   *             <code>EXCLUDED_BY_TAG</code> - This resource was not scanned because it has been excluded by a tag.</p>
   *          <p>
   *             <code>UNSUPPORTED_RUNTIME</code> - The function was not scanned because it has an unsupported runtime. To see a complete list of supported runtimes see: <a href=" https://docs.aws.amazon.com/inspector/latest/user/supported.html">https://docs.aws.amazon.com/inspector/latest/user/supported.html</a>.</p>
   *          <p>
   *             <code>UNSUPPORTED_MEDIA_TYPE </code>- The ECR image has an unsupported media type.</p>
   *          <p>
   *             <code>UNSUPPORTED_CONFIG_FILE</code> - Reserved for future use.</p>
   *          <p>
   *             <code>DEEP_INSPECTION_PACKAGE_COLLECTION_LIMIT_EXCEEDED</code> - The instance has exceeded the 5000 package limit for Amazon Inspector Deep inspection. To resume Deep inspection for this instance you can try to adjust the custom paths associated with the account.</p>
   *          <p>
   *             <code>DEEP_INSPECTION_DAILY_SSM_INVENTORY_LIMIT_EXCEEDED</code> - The SSM agent couldn't send inventory to Amazon Inspector because the SSM quota for Inventory data collected per instance per day has already been reached for this instance.</p>
   *          <p>
   *             <code>DEEP_INSPECTION_COLLECTION_TIME_LIMIT_EXCEEDED</code> - Amazon Inspector failed to extract the package inventory because the package collection time exceeding the maximum threshold of 15 minutes.</p>
   *          <p>
   *             <code>DEEP_INSPECTION_NO_INVENTORY</code>  The Amazon Inspector plugin hasn't yet been able to collect an inventory of packages for this instance. This is usually the result of a pending scan, however, if this status persists after 6 hours, use SSM to ensure that the required Amazon Inspector associations exist and are running for the instance.</p>
   *          <p/>
   * @public
   */
  reason: ScanStatusReason | undefined;
}

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
  scanStatus?: ScanStatus;

  /**
   * <p>An object that contains details about the metadata.</p>
   * @public
   */
  resourceMetadata?: ResourceScanMetadata;

  /**
   * <p>The date and time the resource was last checked for vulnerabilities.</p>
   * @public
   */
  lastScannedAt?: Date;

  /**
   * <p>The scan method that is applied to the instance.</p>
   * @public
   */
  scanMode?: ScanMode;
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
   * <p>
   *          The security level for the CIS scan configuration.
   *          Security level refers to the Benchmark levels that CIS assigns to a profile.
   *       </p>
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
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateCisScanConfigurationResponse {
  /**
   * <p>The scan configuration ARN for the CIS scan configuration.</p>
   * @public
   */
  scanConfigurationArn?: string;
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
 * <p>Contains details on the time range used to filter findings.</p>
 * @public
 */
export interface DateFilter {
  /**
   * <p>A timestamp representing the start of the time period filtered on.</p>
   * @public
   */
  startInclusive?: Date;

  /**
   * <p>A timestamp representing the end of the time period filtered on.</p>
   * @public
   */
  endInclusive?: Date;
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
  upperInclusive?: number;

  /**
   * <p>The lowest number to be included in the filter.</p>
   * @public
   */
  lowerInclusive?: number;
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
  beginInclusive?: number;

  /**
   * <p>The port number the port range ends at.</p>
   * @public
   */
  endInclusive?: number;
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
  name?: StringFilter;

  /**
   * <p>The package version to filter on.</p>
   * @public
   */
  version?: StringFilter;

  /**
   * <p>An object that contains details on the package epoch to filter on.</p>
   * @public
   */
  epoch?: NumberFilter;

  /**
   * <p>An object that contains details on the package release to filter on.</p>
   * @public
   */
  release?: StringFilter;

  /**
   * <p>An object that contains details on the package architecture type to filter on.</p>
   * @public
   */
  architecture?: StringFilter;

  /**
   * <p>An object that contains details on the source layer hash to filter on.</p>
   * @public
   */
  sourceLayerHash?: StringFilter;

  /**
   * <p>An object that describes the details of a string filter.</p>
   * @public
   */
  sourceLambdaLayerArn?: StringFilter;

  /**
   * <p>An object that contains details on the package file path to filter on.</p>
   * @public
   */
  filePath?: StringFilter;
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
  findingArn?: StringFilter[];

  /**
   * <p>Details of the Amazon Web Services account IDs used to filter findings.</p>
   * @public
   */
  awsAccountId?: StringFilter[];

  /**
   * <p>Details on the finding types used to filter findings.</p>
   * @public
   */
  findingType?: StringFilter[];

  /**
   * <p>Details on the severity used to filter findings.</p>
   * @public
   */
  severity?: StringFilter[];

  /**
   * <p>Details on the date and time a finding was first seen used to filter findings.</p>
   * @public
   */
  firstObservedAt?: DateFilter[];

  /**
   * <p>Details on the date and time a finding was last seen used to filter findings.</p>
   * @public
   */
  lastObservedAt?: DateFilter[];

  /**
   * <p>Details on the date and time a finding was last updated at used to filter findings.</p>
   * @public
   */
  updatedAt?: DateFilter[];

  /**
   * <p>Details on the finding status types used to filter findings.</p>
   * @public
   */
  findingStatus?: StringFilter[];

  /**
   * <p>Details on the finding title used to filter findings.</p>
   * @public
   */
  title?: StringFilter[];

  /**
   * <p>The Amazon Inspector score to filter on.</p>
   * @public
   */
  inspectorScore?: NumberFilter[];

  /**
   * <p>Details on the resource types used to filter findings.</p>
   * @public
   */
  resourceType?: StringFilter[];

  /**
   * <p>Details on the resource IDs used to filter findings.</p>
   * @public
   */
  resourceId?: StringFilter[];

  /**
   * <p>Details on the resource tags used to filter findings.</p>
   * @public
   */
  resourceTags?: MapFilter[];

  /**
   * <p>Details of the Amazon EC2 instance image IDs used to filter findings.</p>
   * @public
   */
  ec2InstanceImageId?: StringFilter[];

  /**
   * <p>Details of the Amazon EC2 instance VPC IDs used to filter findings.</p>
   * @public
   */
  ec2InstanceVpcId?: StringFilter[];

  /**
   * <p>Details of the Amazon EC2 instance subnet IDs used to filter findings.</p>
   * @public
   */
  ec2InstanceSubnetId?: StringFilter[];

  /**
   * <p>Details on the Amazon ECR image push date and time used to filter findings.</p>
   * @public
   */
  ecrImagePushedAt?: DateFilter[];

  /**
   * <p>Details of the Amazon ECR image architecture types used to filter findings.</p>
   * @public
   */
  ecrImageArchitecture?: StringFilter[];

  /**
   * <p>Details on the Amazon ECR registry used to filter findings.</p>
   * @public
   */
  ecrImageRegistry?: StringFilter[];

  /**
   * <p>Details on the name of the Amazon ECR repository used to filter findings.</p>
   * @public
   */
  ecrImageRepositoryName?: StringFilter[];

  /**
   * <p>The tags attached to the Amazon ECR container image.</p>
   * @public
   */
  ecrImageTags?: StringFilter[];

  /**
   * <p>Details of the Amazon ECR image hashes used to filter findings.</p>
   * @public
   */
  ecrImageHash?: StringFilter[];

  /**
   * <p>Details on the port ranges used to filter findings.</p>
   * @public
   */
  portRange?: PortRangeFilter[];

  /**
   * <p>Details on network protocol used to filter findings.</p>
   * @public
   */
  networkProtocol?: StringFilter[];

  /**
   * <p>Details of the component IDs used to filter findings.</p>
   * @public
   */
  componentId?: StringFilter[];

  /**
   * <p>Details of the component types used to filter findings.</p>
   * @public
   */
  componentType?: StringFilter[];

  /**
   * <p>Details on the vulnerability ID used to filter findings.</p>
   * @public
   */
  vulnerabilityId?: StringFilter[];

  /**
   * <p>Details on the vulnerability type used to filter findings.</p>
   * @public
   */
  vulnerabilitySource?: StringFilter[];

  /**
   * <p>Details on the vendor severity used to filter findings.</p>
   * @public
   */
  vendorSeverity?: StringFilter[];

  /**
   * <p>Details on the vulnerable packages used to filter findings.</p>
   * @public
   */
  vulnerablePackages?: PackageFilter[];

  /**
   * <p>Details on the related vulnerabilities used to filter findings.</p>
   * @public
   */
  relatedVulnerabilities?: StringFilter[];

  /**
   * <p>Details on whether a fix is available through a version update. This value can be <code>YES</code>, <code>NO</code>, or <code>PARTIAL</code>.  A <code>PARTIAL</code> fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions.</p>
   * @public
   */
  fixAvailable?: StringFilter[];

  /**
   * <p>Filters the list of Amazon Web Services Lambda functions by the name of the function.</p>
   * @public
   */
  lambdaFunctionName?: StringFilter[];

  /**
   * <p>Filters the list of Amazon Web Services Lambda functions by the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">
   *          layers</a>. A Lambda function can have up to five layers.</p>
   * @public
   */
  lambdaFunctionLayers?: StringFilter[];

  /**
   * <p>Filters the list of Amazon Web Services Lambda functions by the runtime environment for the Lambda function.</p>
   * @public
   */
  lambdaFunctionRuntime?: StringFilter[];

  /**
   * <p>Filters the list of Amazon Web Services Lambda functions by the date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>
   *          </p>
   * @public
   */
  lambdaFunctionLastModifiedAt?: DateFilter[];

  /**
   * <p>Filters the list of Amazon Web Services Lambda functions by execution role.</p>
   * @public
   */
  lambdaFunctionExecutionRoleArn?: StringFilter[];

  /**
   * <p>Filters the list of Amazon Web Services Lambda findings by the availability of exploits.</p>
   * @public
   */
  exploitAvailable?: StringFilter[];

  /**
   * <p>The name of the detector used to identify a code vulnerability in a Lambda function used to filter findings.</p>
   * @public
   */
  codeVulnerabilityDetectorName?: StringFilter[];

  /**
   * <p>The detector type tag associated with the vulnerability used to filter findings. Detector tags group related vulnerabilities by common themes or tactics. For a list of available tags by programming language, see <a href="https://docs.aws.amazon.com/codeguru/detector-library/java/tags/">Java tags</a>, or <a href="https://docs.aws.amazon.com/codeguru/detector-library/python/tags/">Python tags</a>. </p>
   * @public
   */
  codeVulnerabilityDetectorTags?: StringFilter[];

  /**
   * <p>The file path to the file in a Lambda function that contains a code vulnerability used to filter findings.</p>
   * @public
   */
  codeVulnerabilityFilePath?: StringFilter[];

  /**
   * <p>The EPSS score used to filter findings.</p>
   * @public
   */
  epssScore?: NumberFilter[];
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
  description?: string;

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
  tags?: Record<string, string>;

  /**
   * <p>The reason for creating the filter.</p>
   * @public
   */
  reason?: string;
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
 * <p>You have exceeded your service quota. To perform the requested action, remove some of
 *          the relevant resources, or use Service Quotas to request a service quota increase.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that exceeds a service quota.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
  }
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
  keyPrefix?: string;

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
  filterCriteria?: FilterCriteria;

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
  reportId?: string;
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
  value?: string;
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
  accountId?: ResourceStringFilter[];

  /**
   * <p>The resource IDs used as resource filter criteria.</p>
   * @public
   */
  resourceId?: ResourceStringFilter[];

  /**
   * <p>The resource types used as resource filter criteria.</p>
   * @public
   */
  resourceType?: ResourceStringFilter[];

  /**
   * <p>The ECR repository names used as resource filter criteria.</p>
   * @public
   */
  ecrRepositoryName?: ResourceStringFilter[];

  /**
   * <p>The Amazon Web Services Lambda function name used as resource filter criteria.</p>
   * @public
   */
  lambdaFunctionName?: ResourceStringFilter[];

  /**
   * <p>The ECR image tags used as resource filter criteria.</p>
   * @public
   */
  ecrImageTags?: ResourceStringFilter[];

  /**
   * <p>The EC2 instance tags used as resource filter criteria.</p>
   * @public
   */
  ec2InstanceTags?: ResourceMapFilter[];

  /**
   * <p>The Amazon Web Services Lambda function tags used as resource filter criteria.</p>
   * @public
   */
  lambdaFunctionTags?: ResourceMapFilter[];
}

/**
 * @public
 */
export interface CreateSbomExportRequest {
  /**
   * <p>The resource filter criteria for the software bill of materials (SBOM) report.</p>
   * @public
   */
  resourceFilterCriteria?: ResourceFilterCriteria;

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
  reportId?: string;
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
 * <p>The Common Vulnerability Scoring System (CVSS) version 2 details for the vulnerability.</p>
 * @public
 */
export interface Cvss2 {
  /**
   * <p>The CVSS v2 base score for the vulnerability.</p>
   * @public
   */
  baseScore?: number;

  /**
   * <p>The scoring vector associated with the CVSS v2 score.</p>
   * @public
   */
  scoringVector?: string;
}

/**
 * <p>The Common Vulnerability Scoring System (CVSS) version 3 details for the vulnerability.</p>
 * @public
 */
export interface Cvss3 {
  /**
   * <p>The CVSS v3 base score for the vulnerability.</p>
   * @public
   */
  baseScore?: number;

  /**
   * <p>The scoring vector associated with the CVSS v3 score.</p>
   * @public
   */
  scoringVector?: string;
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
  cvssSource?: string;

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
  adjustments?: CvssScoreAdjustment[];
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
  accountId?: string;

  /**
   * <p>The status of the Amazon Inspector delegated administrator.</p>
   * @public
   */
  relationshipStatus?: RelationshipStatus;
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
  accountId?: string;

  /**
   * <p>The status of the Amazon Inspector delegated administrator.</p>
   * @public
   */
  status?: DelegatedAdminStatus;
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
  autoEnable?: AutoEnable;

  /**
   * <p>Represents whether your organization has reached the maximum Amazon Web Services account limit for Amazon Inspector.</p>
   * @public
   */
  maxAccountLimitReached?: boolean;
}

/**
 * @public
 * @enum
 */
export const ResourceScanType = {
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
  accountIds?: string[];

  /**
   * <p>The resource scan types you want to disable.</p>
   * @public
   */
  resourceTypes?: ResourceScanType[];
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
  failedAccounts?: FailedAccount[];
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
  scanMode?: Ec2ScanMode;

  /**
   * <p>The status of the Amazon EC2 scan mode setting.</p>
   * @public
   */
  scanModeStatus?: Ec2ScanModeStatus;
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
  scanModeState?: Ec2ScanModeState;
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
  pullDateRescanDuration?: EcrPullDateRescanDuration;
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
 * <p>Details about the state of your ECR re-scan duration settings. The ECR re-scan duration defines how long an ECR image will be actively scanned by Amazon Inspector. When the number of days since an image was last pushed exceeds the duration configured for image pull date, and the duration configured for image pull date, the monitoring state of that image becomes <code>inactive</code> and all associated findings are scheduled for closure.</p>
 * @public
 */
export interface EcrRescanDurationState {
  /**
   * <p>The rescan duration configured for image push date.
   *
   *          </p>
   * @public
   */
  rescanDuration?: EcrRescanDuration;

  /**
   * <p>The status of changes to the ECR automated re-scan duration.</p>
   * @public
   */
  status?: EcrRescanDurationStatus;

  /**
   * <p>A timestamp representing when the last time the ECR scan duration setting was changed.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The rescan duration configured for image pull date.</p>
   * @public
   */
  pullDateRescanDuration?: EcrPullDateRescanDuration;
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
  rescanDurationState?: EcrRescanDurationState;
}

/**
 * @public
 */
export interface EnableRequest {
  /**
   * <p>A list of account IDs you want to enable Amazon Inspector scans for.</p>
   * @public
   */
  accountIds?: string[];

  /**
   * <p>The resource scan types you want to enable.</p>
   * @public
   */
  resourceTypes: ResourceScanType[] | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   * @public
   */
  clientToken?: string;
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
  failedAccounts?: FailedAccount[];
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
  clientToken?: string;
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
  score?: number;
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
  score?: number;
}

/**
 * <p>The details of an exploit available for a finding discovered in your environment.</p>
 * @public
 */
export interface ExploitabilityDetails {
  /**
   * <p>The date and time of the last exploit associated with a finding discovered in your environment.</p>
   * @public
   */
  lastKnownExploitAt?: Date;
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
  description?: string;

  /**
   * <p>The reason for the filter.</p>
   * @public
   */
  reason?: string;

  /**
   * <p>The tags attached to the filter.</p>
   * @public
   */
  tags?: Record<string, string>;
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
  adjustedCvss?: CvssScoreDetails;
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
  steps?: Step[];
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
   * <p>An object that contains details about the open port range associated with a finding.</p>
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
  sourceLayerHash?: string;

  /**
   * <p>The epoch of the vulnerable package.</p>
   * @public
   */
  epoch?: number;

  /**
   * <p>The release of the vulnerable package.</p>
   * @public
   */
  release?: string;

  /**
   * <p>The architecture of the vulnerable package.</p>
   * @public
   */
  arch?: string;

  /**
   * <p>The package manager of the vulnerable package.</p>
   * @public
   */
  packageManager?: PackageManager;

  /**
   * <p>The file path of the vulnerable package.</p>
   * @public
   */
  filePath?: string;

  /**
   * <p>The version of the package that contains the vulnerability fix.</p>
   * @public
   */
  fixedInVersion?: string;

  /**
   * <p>The code to run in your environment to update packages with a fix available.</p>
   * @public
   */
  remediation?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the Amazon Web Services Lambda function affected by a finding.</p>
   * @public
   */
  sourceLambdaLayerArn?: string;
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
  vulnerablePackages?: VulnerablePackage[];

  /**
   * <p>The source of the vulnerability information.</p>
   * @public
   */
  source: string | undefined;

  /**
   * <p>An object that contains details about the CVSS score of a finding.</p>
   * @public
   */
  cvss?: CvssScore[];

  /**
   * <p>One or more vulnerabilities related to the one identified in this finding.</p>
   * @public
   */
  relatedVulnerabilities?: string[];

  /**
   * <p>A URL to the source of the vulnerability information.</p>
   * @public
   */
  sourceUrl?: string;

  /**
   * <p>The severity the vendor has given to this vulnerability type.</p>
   * @public
   */
  vendorSeverity?: string;

  /**
   * <p>The date and time that this vulnerability was first added to the vendor's database.</p>
   * @public
   */
  vendorCreatedAt?: Date;

  /**
   * <p>The date and time the vendor last updated this vulnerability in their database.</p>
   * @public
   */
  vendorUpdatedAt?: Date;

  /**
   * <p>One or more URLs that contain details about this vulnerability type.</p>
   * @public
   */
  referenceUrls?: string[];
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
  text?: string;

  /**
   * <p>The URL address to the CVE remediation recommendations.</p>
   * @public
   */
  Url?: string;
}

/**
 * <p>Information on how to remediate a finding.</p>
 * @public
 */
export interface Remediation {
  /**
   * <p>An object that contains information about the recommended course of action to remediate the finding.</p>
   * @public
   */
  recommendation?: Recommendation;
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
  awsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * <p>An object that contains details about the Amazon ECR container image involved in the finding.</p>
   * @public
   */
  awsEcrContainerImage?: AwsEcrContainerImageDetails;

  /**
   * <p>A summary of the information about an Amazon Web Services Lambda function affected by a finding.</p>
   * @public
   */
  awsLambdaFunction?: AwsLambdaFunctionDetails;
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
  partition?: string;

  /**
   * <p>The Amazon Web Services Region the impacted resource is located in.</p>
   * @public
   */
  region?: string;

  /**
   * <p>The tags attached to the resource.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>An object that contains details about the resource involved in a finding.</p>
   * @public
   */
  details?: ResourceDetails;
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
   * <p>The type of the finding. The <code>type</code> value determines the valid values for <code>resource</code> in your request. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-types.html">Finding types</a> in the Amazon Inspector user guide.</p>
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
  title?: string;

  /**
   * <p>An object that contains the details about how to remediate a finding.</p>
   * @public
   */
  remediation: Remediation | undefined;

  /**
   * <p>The severity of the finding. <code>UNTRIAGED</code> applies to <code>PACKAGE_VULNERABILITY</code> type findings that the vendor has not assigned a severity yet. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html">Severity levels for findings</a> in the Amazon Inspector user guide.</p>
   * @public
   */
  severity: Severity | undefined;

  /**
   * <p>The date and time that the finding was first observed.</p>
   * @public
   */
  firstObservedAt: Date | undefined;

  /**
   * <p>
   *          The date and time the finding was last observed.
   *          This timestamp for this field remains unchanged until a finding is updated.
   *       </p>
   * @public
   */
  lastObservedAt: Date | undefined;

  /**
   * <p>The date and time the finding was last updated at.</p>
   * @public
   */
  updatedAt?: Date;

  /**
   * <p>The status of the finding.</p>
   * @public
   */
  status: FindingStatus | undefined;

  /**
   * <p>Contains information on the resources involved in a finding. The <code>resource</code> value determines the valid values for <code>type</code> in your request. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-types.html">Finding types</a> in the Amazon Inspector user guide.</p>
   * @public
   */
  resources: Resource[] | undefined;

  /**
   * <p>The Amazon Inspector score given to the finding.</p>
   * @public
   */
  inspectorScore?: number;

  /**
   * <p>An object that contains details of the Amazon Inspector score.</p>
   * @public
   */
  inspectorScoreDetails?: InspectorScoreDetails;

  /**
   * <p>An object that contains the details of a network reachability finding.</p>
   * @public
   */
  networkReachabilityDetails?: NetworkReachabilityDetails;

  /**
   * <p>An object that contains the details of a package vulnerability finding.</p>
   * @public
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;

  /**
   * <p>Details on whether a fix is available through a version update. This value can be <code>YES</code>, <code>NO</code>, or <code>PARTIAL</code>.  A <code>PARTIAL</code> fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions.</p>
   * @public
   */
  fixAvailable?: FixAvailable;

  /**
   * <p>If a finding discovered in your environment has an exploit available.</p>
   * @public
   */
  exploitAvailable?: ExploitAvailable;

  /**
   * <p>The details of an exploit available for a finding discovered in your environment.</p>
   * @public
   */
  exploitabilityDetails?: ExploitabilityDetails;

  /**
   * <p>Details about the code vulnerability identified in a Lambda function used to filter findings.</p>
   * @public
   */
  codeVulnerabilityDetails?: CodeVulnerabilityDetails;

  /**
   * <p>The finding's EPSS score.</p>
   * @public
   */
  epss?: EpssDetails;
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
  targetAccounts?: string[];

  /**
   * <p>
   *          The format of the report.
   *          Valid values are <code>PDF</code> and <code>CSV</code>.
   *          If no value is specified, the report format defaults to <code>PDF</code>.
   *       </p>
   * @public
   */
  reportFormat?: CisReportFormat;
}

/**
 * @public
 */
export interface GetCisScanReportResponse {
  /**
   * <p>
   *          The URL where a PDF or CSV of the CIS scan report can be downloaded.
   *       </p>
   * @public
   */
  url?: string;

  /**
   * <p>The status.</p>
   * @public
   */
  status?: CisReportStatus;
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
  filterCriteria?: CisScanResultDetailsFilterCriteria;

  /**
   * <p>The sort by order.</p>
   * @public
   */
  sortBy?: CisScanResultDetailsSortBy;

  /**
   * <p>The sort order.</p>
   * @public
   */
  sortOrder?: CisSortOrder;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of CIS scan result details to be returned in a single page of results.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetCisScanResultDetailsResponse {
  /**
   * <p>The scan result details.</p>
   * @public
   */
  scanResultDetails?: CisScanResultDetails[];

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;
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
   * <p>Specifies how the ECR automated re-scan duration is currently configured for your environment.</p>
   * @public
   */
  ecrConfiguration?: EcrConfigurationState;

  /**
   * <p>Specifies how the Amazon EC2 automated scan mode is currently configured for your environment.</p>
   * @public
   */
  ec2Configuration?: Ec2ConfigurationState;
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
  delegatedAdmin?: DelegatedAdmin;
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
  packagePaths?: string[];

  /**
   * <p>The Amazon Inspector deep inspection custom paths for your organization.</p>
   * @public
   */
  orgPackagePaths?: string[];

  /**
   * <p>The activation status of Amazon Inspector deep inspection in your account.</p>
   * @public
   */
  status?: Ec2DeepInspectionStatus;

  /**
   * <p>An error message explaining why Amazon Inspector deep inspection configurations could not be retrieved for your account.</p>
   * @public
   */
  errorMessage?: string;
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
  reportId?: string;
}

/**
 * @public
 * @enum
 */
export const ReportingErrorCode = {
  BUCKET_NOT_FOUND: "BUCKET_NOT_FOUND",
  INCOMPATIBLE_BUCKET_REGION: "INCOMPATIBLE_BUCKET_REGION",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_PERMISSIONS: "INVALID_PERMISSIONS",
  MALFORMED_KMS_KEY: "MALFORMED_KMS_KEY",
  NO_FINDINGS_FOUND: "NO_FINDINGS_FOUND",
} as const;

/**
 * @public
 */
export type ReportingErrorCode = (typeof ReportingErrorCode)[keyof typeof ReportingErrorCode];

/**
 * @public
 */
export interface GetFindingsReportStatusResponse {
  /**
   * <p>The ID of the report.</p>
   * @public
   */
  reportId?: string;

  /**
   * <p>The status of the report.</p>
   * @public
   */
  status?: ExternalReportStatus;

  /**
   * <p>The error code of the report.</p>
   * @public
   */
  errorCode?: ReportingErrorCode;

  /**
   * <p>The error message of the report.</p>
   * @public
   */
  errorMessage?: string;

  /**
   * <p>The destination of the report.</p>
   * @public
   */
  destination?: Destination;

  /**
   * <p>The filter criteria associated with the report.</p>
   * @public
   */
  filterCriteria?: FilterCriteria;
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
  accountId?: string;

  /**
   * <p>The status of the member account.</p>
   * @public
   */
  relationshipStatus?: RelationshipStatus;

  /**
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for this member account.</p>
   * @public
   */
  delegatedAdminAccountId?: string;

  /**
   * <p>A timestamp showing when the status of this member was last updated.</p>
   * @public
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface GetMemberResponse {
  /**
   * <p>Details of the retrieved member account.</p>
   * @public
   */
  member?: Member;
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
  reportId?: string;

  /**
   * <p>The format of the software bill of materials (SBOM) report.</p>
   * @public
   */
  format?: SbomReportFormat;

  /**
   * <p>The status of the software bill of materials (SBOM) report.</p>
   * @public
   */
  status?: ExternalReportStatus;

  /**
   * <p>An error code.</p>
   * @public
   */
  errorCode?: ReportingErrorCode;

  /**
   * <p>An error message.</p>
   * @public
   */
  errorMessage?: string;

  /**
   * <p>Contains details of the Amazon S3 bucket and KMS key used to export findings</p>
   * @public
   */
  s3Destination?: Destination;

  /**
   * <p>Contains details about the resource filter criteria used for the software bill of materials (SBOM) report.</p>
   * @public
   */
  filterCriteria?: ResourceFilterCriteria;
}

/**
 * @public
 * @enum
 */
export const Service = {
  EC2: "EC2",
  ECR: "ECR",
  LAMBDA: "LAMBDA",
} as const;

/**
 * @public
 */
export type Service = (typeof Service)[keyof typeof Service];

/**
 * @public
 */
export interface ListAccountPermissionsRequest {
  /**
   * <p>The service scan type to check permissions for.</p>
   * @public
   */
  service?: Service;

  /**
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const Operation = {
  DISABLE_REPOSITORY: "DISABLE_REPOSITORY",
  DISABLE_SCANNING: "DISABLE_SCANNING",
  ENABLE_REPOSITORY: "ENABLE_REPOSITORY",
  ENABLE_SCANNING: "ENABLE_SCANNING",
} as const;

/**
 * @public
 */
export type Operation = (typeof Operation)[keyof typeof Operation];

/**
 * <p>Contains information on the permissions an account has within Amazon Inspector.</p>
 * @public
 */
export interface Permission {
  /**
   * <p>The services that the permissions allow an account to perform the given operations for.</p>
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
  nextToken?: string;
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
  scanNameFilters?: CisStringFilter[];

  /**
   * <p>The list of target resource tag filters.</p>
   * @public
   */
  targetResourceTagFilters?: TagFilter[];

  /**
   * <p>The list of scan configuration ARN filters.</p>
   * @public
   */
  scanConfigurationArnFilters?: CisStringFilter[];
}

/**
 * @public
 */
export interface ListCisScanConfigurationsRequest {
  /**
   * <p>The CIS scan configuration filter criteria.</p>
   * @public
   */
  filterCriteria?: ListCisScanConfigurationsFilterCriteria;

  /**
   * <p>The CIS scan configuration sort by order.</p>
   * @public
   */
  sortBy?: CisScanConfigurationsSortBy;

  /**
   * <p>The CIS scan configuration sort order order.</p>
   * @public
   */
  sortOrder?: CisSortOrder;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of CIS scan configurations to be returned in a single page of results.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListCisScanConfigurationsResponse {
  /**
   * <p>The CIS scan configuration scan configurations.</p>
   * @public
   */
  scanConfigurations?: CisScanConfiguration[];

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;
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
  filterCriteria?: CisScanResultsAggregatedByChecksFilterCriteria;

  /**
   * <p>The sort by order.</p>
   * @public
   */
  sortBy?: CisScanResultsAggregatedByChecksSortBy;

  /**
   * <p>The sort order.</p>
   * @public
   */
  sortOrder?: CisSortOrder;

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of scan results aggregated by checks to be returned in a single page of results.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListCisScanResultsAggregatedByChecksResponse {
  /**
   * <p>The check aggregations.</p>
   * @public
   */
  checkAggregations?: CisCheckAggregation[];

  /**
   * <p>The pagination token from a previous request that's used to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string;
}
