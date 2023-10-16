// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { Inspector2ServiceException as __BaseException } from "./Inspector2ServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
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
 * @public
 * <p>Details the status of Amazon Inspector for each resource type Amazon Inspector scans.</p>
 */
export interface ResourceStatus {
  /**
   * @public
   * <p>The status of Amazon Inspector scanning for Amazon EC2 resources.</p>
   */
  ec2: Status | undefined;

  /**
   * @public
   * <p>The status of Amazon Inspector scanning for Amazon ECR resources.</p>
   */
  ecr: Status | undefined;

  /**
   * @public
   * <p>The status of Amazon Inspector scanning for AWS Lambda function.</p>
   */
  lambda?: Status;

  /**
   * @public
   * <p>The status of Amazon Inspector scanning for custom application code for Amazon Web Services Lambda functions.
   *       </p>
   */
  lambdaCode?: Status;
}

/**
 * @public
 * <p>An Amazon Web Services account within your environment that Amazon Inspector has been enabled for.</p>
 */
export interface Account {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The status of Amazon Inspector for the account.</p>
   */
  status: Status | undefined;

  /**
   * @public
   * <p>Details of the status of Amazon Inspector scans by resource type.</p>
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
 * @public
 * <p>An object that contains details about an aggregation response based on
 *          Amazon Web Services accounts.</p>
 */
export interface AccountAggregation {
  /**
   * @public
   * <p>The type of finding.</p>
   */
  findingType?: AggregationFindingType;

  /**
   * @public
   * <p>The type of resource.</p>
   */
  resourceType?: AggregationResourceType;

  /**
   * @public
   * <p>The sort order (ascending or descending).</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The value to sort by.</p>
   */
  sortBy?: AccountSortBy;
}

/**
 * @public
 * <p>An object that contains the counts of aggregated finding per severity.</p>
 */
export interface SeverityCounts {
  /**
   * @public
   * <p>The total count of findings from all severities.</p>
   */
  all?: number;

  /**
   * @public
   * <p>The total count of medium severity findings.</p>
   */
  medium?: number;

  /**
   * @public
   * <p>The total count of high severity findings.</p>
   */
  high?: number;

  /**
   * @public
   * <p>The total count of critical severity findings.</p>
   */
  critical?: number;
}

/**
 * @public
 * <p>An aggregation of findings by Amazon Web Services account ID.</p>
 */
export interface AccountAggregationResponse {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The number of findings by severity.</p>
   */
  severityCounts?: SeverityCounts;
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
 * @public
 * <p>An object that described the state of Amazon Inspector scans for an account.</p>
 */
export interface State {
  /**
   * @public
   * <p>The status of Amazon Inspector for the account.</p>
   */
  status: Status | undefined;

  /**
   * @public
   * <p>The error code explaining why the account failed to enable Amazon Inspector.</p>
   */
  errorCode: ErrorCode | undefined;

  /**
   * @public
   * <p>The error message received when the account failed to enable Amazon Inspector.</p>
   */
  errorMessage: string | undefined;
}

/**
 * @public
 * <p>Details the state of Amazon Inspector for each resource type Amazon Inspector scans.</p>
 */
export interface ResourceState {
  /**
   * @public
   * <p>An object detailing the state of Amazon Inspector scanning for Amazon EC2 resources.</p>
   */
  ec2: State | undefined;

  /**
   * @public
   * <p>An object detailing the state of Amazon Inspector scanning for Amazon ECR resources.</p>
   */
  ecr: State | undefined;

  /**
   * @public
   * <p>An object that described the state of Amazon Inspector scans for an account.</p>
   */
  lambda?: State;

  /**
   * @public
   * <p>An object that described the state of Amazon Inspector scans for an account.</p>
   */
  lambdaCode?: State;
}

/**
 * @public
 * <p>An object with details the status of an Amazon Web Services account within your Amazon Inspector environment.</p>
 */
export interface AccountState {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>An object detailing the status of Amazon Inspector for the account.</p>
   */
  state: State | undefined;

  /**
   * @public
   * <p>An object detailing which resources Amazon Inspector is enabled to scan for the account.</p>
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
 * @public
 * <p>An object that describes the details of a string filter.</p>
 */
export interface StringFilter {
  /**
   * @public
   * <p>The operator to use when comparing values in the filter.</p>
   */
  comparison: StringComparison | undefined;

  /**
   * @public
   * <p>The value to filter on.</p>
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
 * @public
 * <p>The details that define an aggregation based on Amazon machine images (AMIs).</p>
 */
export interface AmiAggregation {
  /**
   * @public
   * <p>The IDs of AMIs to aggregate findings for.</p>
   */
  amis?: StringFilter[];

  /**
   * @public
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The value to sort results by.</p>
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
 * @public
 * <p>An aggregation of information about Amazon ECR containers.</p>
 */
export interface AwsEcrContainerAggregation {
  /**
   * @public
   * <p>The container resource IDs.</p>
   */
  resourceIds?: StringFilter[];

  /**
   * @public
   * <p>The image SHA values.</p>
   */
  imageShas?: StringFilter[];

  /**
   * @public
   * <p>The container repositories.</p>
   */
  repositories?: StringFilter[];

  /**
   * @public
   * <p>The architecture of the containers.</p>
   */
  architectures?: StringFilter[];

  /**
   * @public
   * <p>The image tags.</p>
   */
  imageTags?: StringFilter[];

  /**
   * @public
   * <p>The sort order (ascending or descending).</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The value to sort by.</p>
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
 * @public
 * <p>An object that describes details of a map filter.</p>
 */
export interface MapFilter {
  /**
   * @public
   * <p>The operator to use when comparing values in the filter.</p>
   */
  comparison: MapComparison | undefined;

  /**
   * @public
   * <p>The tag key used in the filter.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The tag value used in the filter.</p>
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
 * @public
 * <p>The details that define an aggregation based on Amazon EC2 instances.</p>
 */
export interface Ec2InstanceAggregation {
  /**
   * @public
   * <p>The AMI IDs associated with the Amazon EC2 instances to aggregate findings for.</p>
   */
  amis?: StringFilter[];

  /**
   * @public
   * <p>The operating system types to aggregate findings for. Valid values must be uppercase and
   *          underscore separated, examples are <code>ORACLE_LINUX_7</code> and
   *          <code>ALPINE_LINUX_3_8</code>.</p>
   */
  operatingSystems?: StringFilter[];

  /**
   * @public
   * <p>The Amazon EC2 instance IDs to aggregate findings for.</p>
   */
  instanceIds?: StringFilter[];

  /**
   * @public
   * <p>The Amazon EC2 instance tags to aggregate findings for.</p>
   */
  instanceTags?: MapFilter[];

  /**
   * @public
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The value to sort results by.</p>
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
 * @public
 * <p>The details that define an aggregation based on finding type.</p>
 */
export interface FindingTypeAggregation {
  /**
   * @public
   * <p>The finding type to aggregate.</p>
   */
  findingType?: AggregationFindingType;

  /**
   * @public
   * <p>The resource type to aggregate.</p>
   */
  resourceType?: AggregationResourceType;

  /**
   * @public
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The value to sort results by.</p>
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
 * @public
 * <p>The details that define an aggregation based on container image layers.</p>
 */
export interface ImageLayerAggregation {
  /**
   * @public
   * <p>The repository associated with the container image hosting the layers.</p>
   */
  repositories?: StringFilter[];

  /**
   * @public
   * <p>The ID of the container image layer.</p>
   */
  resourceIds?: StringFilter[];

  /**
   * @public
   * <p>The hashes associated with the layers.</p>
   */
  layerHashes?: StringFilter[];

  /**
   * @public
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The value to sort results by.</p>
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
 * @public
 * <p>The details that define a findings aggregation based on AWS Lambda functions.</p>
 */
export interface LambdaFunctionAggregation {
  /**
   * @public
   * <p>The resource IDs to include in the aggregation results.</p>
   */
  resourceIds?: StringFilter[];

  /**
   * @public
   * <p>The AWS Lambda function names to include in the aggregation results.</p>
   */
  functionNames?: StringFilter[];

  /**
   * @public
   * <p>Returns findings aggregated by AWS Lambda function runtime environments.</p>
   */
  runtimes?: StringFilter[];

  /**
   * @public
   * <p>The tags to include in the aggregation results.</p>
   */
  functionTags?: MapFilter[];

  /**
   * @public
   * <p>The order to use for sorting the results.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The finding severity to use for sorting the results.</p>
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
 * @public
 * <p>The details that define a findings aggregation based on an AWS Lambda function's layers.</p>
 */
export interface LambdaLayerAggregation {
  /**
   * @public
   * <p>The names of the AWS Lambda functions associated with the layers.</p>
   */
  functionNames?: StringFilter[];

  /**
   * @public
   * <p>The resource IDs for the AWS Lambda function layers.</p>
   */
  resourceIds?: StringFilter[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Lambda function layer.
   *       </p>
   */
  layerArns?: StringFilter[];

  /**
   * @public
   * <p>The order to use for sorting the results.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The finding severity to use for sorting the results.</p>
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
 * @public
 * <p>The details that define an aggregation based on operating system package type.</p>
 */
export interface PackageAggregation {
  /**
   * @public
   * <p>The names of packages to aggregate findings on.</p>
   */
  packageNames?: StringFilter[];

  /**
   * @public
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The value to sort results by.</p>
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
 * @public
 * <p>The details that define an aggregation based on repository.</p>
 */
export interface RepositoryAggregation {
  /**
   * @public
   * <p>The names of repositories to aggregate findings on.</p>
   */
  repositories?: StringFilter[];

  /**
   * @public
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The value to sort results by.</p>
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
 * @public
 * <p>The details that define an aggregation based on finding title.</p>
 */
export interface TitleAggregation {
  /**
   * @public
   * <p>The finding titles to aggregate on.</p>
   */
  titles?: StringFilter[];

  /**
   * @public
   * <p>The vulnerability IDs of the findings.</p>
   */
  vulnerabilityIds?: StringFilter[];

  /**
   * @public
   * <p>The resource type to aggregate on.</p>
   */
  resourceType?: AggregationResourceType;

  /**
   * @public
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder;

  /**
   * @public
   * <p>The value to sort results by.</p>
   */
  sortBy?: TitleSortBy;

  /**
   * @public
   * <p>The type of finding to aggregate on.</p>
   */
  findingType?: AggregationFindingType;
}

/**
 * @public
 * <p>Contains details about an aggregation request.</p>
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
   * @public
   * <p>An object that contains details about an aggregation request based on Amazon Web Services account
   *          IDs.</p>
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
   * @public
   * <p>An object that contains details about an aggregation request based on Amazon Machine
   *          Images (AMIs).</p>
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
   * @public
   * <p>An object that contains details about an aggregation request based on Amazon ECR container
   *          images.</p>
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
   * @public
   * <p>An object that contains details about an aggregation request based on Amazon EC2
   *          instances.</p>
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
   * @public
   * <p>An object that contains details about an aggregation request based on finding types.</p>
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
   * @public
   * <p>An object that contains details about an aggregation request based on container image
   *          layers.</p>
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
   * @public
   * <p>An object that contains details about an aggregation request based on operating system
   *          package type.</p>
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
   * @public
   * <p>An object that contains details about an aggregation request based on Amazon ECR repositories.</p>
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
   * @public
   * <p>An object that contains details about an aggregation request based on finding title.</p>
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
   * @public
   * <p>Returns an object with findings aggregated by AWS Lambda layer.</p>
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
   * @public
   * <p>Returns an object with findings aggregated by AWS Lambda function.</p>
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
 * @public
 * <p>A response that contains the results of a finding aggregation by AMI.</p>
 */
export interface AmiAggregationResponse {
  /**
   * @public
   * <p>The ID of the AMI that findings were aggregated for.</p>
   */
  ami: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID for the AMI.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>An object that contains the count of matched findings per severity.</p>
   */
  severityCounts?: SeverityCounts;

  /**
   * @public
   * <p>The IDs of Amazon EC2 instances using this AMI.</p>
   */
  affectedInstances?: number;
}

/**
 * @public
 * <p>An aggregation of information about Amazon ECR containers.</p>
 */
export interface AwsEcrContainerAggregationResponse {
  /**
   * @public
   * <p>The resource ID of the container.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The SHA value of the container image.</p>
   */
  imageSha?: string;

  /**
   * @public
   * <p>The container repository.</p>
   */
  repository?: string;

  /**
   * @public
   * <p>The architecture of the container.</p>
   */
  architecture?: string;

  /**
   * @public
   * <p>The container image stags.</p>
   */
  imageTags?: string[];

  /**
   * @public
   * <p>The Amazon Web Services account ID of the account that owns the container.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The number of finding by severity.</p>
   */
  severityCounts?: SeverityCounts;
}

/**
 * @public
 * <p>A response that contains the results of a finding aggregation by Amazon EC2 instance.</p>
 */
export interface Ec2InstanceAggregationResponse {
  /**
   * @public
   * <p>The Amazon EC2 instance ID.</p>
   */
  instanceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Machine Image (AMI) of the Amazon EC2 instance.</p>
   */
  ami?: string;

  /**
   * @public
   * <p>The operating system of the Amazon EC2 instance.</p>
   */
  operatingSystem?: string;

  /**
   * @public
   * <p>The tags attached to the instance.</p>
   */
  instanceTags?: Record<string, string>;

  /**
   * @public
   * <p>The Amazon Web Services account for the Amazon EC2 instance.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>An object that contains the count of matched findings per severity.</p>
   */
  severityCounts?: SeverityCounts;

  /**
   * @public
   * <p>The number of network findings for the Amazon EC2 instance.</p>
   */
  networkFindings?: number;
}

/**
 * @public
 * <p>A response that contains the results of a finding type aggregation.</p>
 */
export interface FindingTypeAggregationResponse {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The value to sort results by.</p>
   */
  severityCounts?: SeverityCounts;
}

/**
 * @public
 * <p>A response that contains the results of a finding aggregation by image layer.</p>
 */
export interface ImageLayerAggregationResponse {
  /**
   * @public
   * <p>The repository the layer resides in.</p>
   */
  repository: string | undefined;

  /**
   * @public
   * <p>The resource ID of the container image layer.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The layer hash.</p>
   */
  layerHash: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the container image hosting the layer image.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>An object that represents the count of matched findings per severity.</p>
   */
  severityCounts?: SeverityCounts;
}

/**
 * @public
 * <p>A response that contains the results of an AWS Lambda function finding aggregation.</p>
 */
export interface LambdaFunctionAggregationResponse {
  /**
   * @public
   * <p>The resource IDs included in the aggregation results.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The AWS Lambda function names included in the aggregation results.</p>
   */
  functionName?: string;

  /**
   * @public
   * <p>The runtimes included in the aggregation results.</p>
   */
  runtime?: string;

  /**
   * @public
   * <p>The tags included in the aggregation results.</p>
   */
  lambdaTags?: Record<string, string>;

  /**
   * @public
   * <p>The ID of the AWS account that owns the AWS Lambda function.
   *       </p>
   */
  accountId?: string;

  /**
   * @public
   * <p>An object that contains the counts of aggregated finding per severity.</p>
   */
  severityCounts?: SeverityCounts;

  /**
   * @public
   * <p>The date that the AWS Lambda function included in the aggregation results was last changed.</p>
   */
  lastModifiedAt?: Date;
}

/**
 * @public
 * <p>A response that contains the results of an AWS Lambda function layer finding aggregation.</p>
 */
export interface LambdaLayerAggregationResponse {
  /**
   * @public
   * <p>The names of the AWS Lambda functions associated with the layers.</p>
   */
  functionName: string | undefined;

  /**
   * @public
   * <p>The Resource ID of the AWS Lambda function layer.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Lambda function layer.</p>
   */
  layerArn: string | undefined;

  /**
   * @public
   * <p>The account ID of the AWS Lambda function layer.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>An object that contains the counts of aggregated finding per severity.</p>
   */
  severityCounts?: SeverityCounts;
}

/**
 * @public
 * <p>A response that contains the results of a finding aggregation by image layer.</p>
 */
export interface PackageAggregationResponse {
  /**
   * @public
   * <p>The name of the operating system package.</p>
   */
  packageName: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>An object that contains the count of matched findings per severity.</p>
   */
  severityCounts?: SeverityCounts;
}

/**
 * @public
 * <p>A response that contains details on the results of a finding aggregation by repository.</p>
 */
export interface RepositoryAggregationResponse {
  /**
   * @public
   * <p>The name of the repository associated with the findings.</p>
   */
  repository: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>An object that represent the count of matched findings per severity.</p>
   */
  severityCounts?: SeverityCounts;

  /**
   * @public
   * <p>The number of container images impacted by the findings.</p>
   */
  affectedImages?: number;
}

/**
 * @public
 * <p>A response that contains details on the results of a finding aggregation by title.</p>
 */
export interface TitleAggregationResponse {
  /**
   * @public
   * <p>The title that the findings were aggregated on.</p>
   */
  title: string | undefined;

  /**
   * @public
   * <p>The vulnerability ID of the finding.</p>
   */
  vulnerabilityId?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>An object that represent the count of matched findings per severity.</p>
   */
  severityCounts?: SeverityCounts;
}

/**
 * @public
 * <p>A structure that contains details about the results of an aggregation type.</p>
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
   * @public
   * <p>An object that contains details about an aggregation response based on Amazon Web Services account
   *          IDs.</p>
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
   * @public
   * <p>An object that contains details about an aggregation response based on Amazon Machine
   *          Images (AMIs).</p>
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
   * @public
   * <p>An object that contains details about an aggregation response based on Amazon ECR container
   *          images.</p>
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
   * @public
   * <p>An object that contains details about an aggregation response based on Amazon EC2
   *          instances.</p>
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
   * @public
   * <p>An object that contains details about an aggregation response based on finding types.</p>
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
   * @public
   * <p>An object that contains details about an aggregation response based on container image
   *          layers.</p>
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
   * @public
   * <p>An object that contains details about an aggregation response based on operating system
   *          package type.</p>
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
   * @public
   * <p>An object that contains details about an aggregation response based on Amazon ECR
   *          repositories.</p>
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
   * @public
   * <p>An object that contains details about an aggregation response based on finding title.</p>
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
   * @public
   * <p>An aggregation of findings by AWS Lambda layer.</p>
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
   * @public
   * <p>An aggregation of findings by AWS Lambda function.</p>
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
   * @public
   * <p>The Amazon Web Services account ID of the member account to be associated.</p>
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberResponse {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the successfully associated member account.</p>
   */
  accountId: string | undefined;
}

/**
 * @public
 * <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>The number of seconds to wait before retrying the request.</p>
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
 * @public
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The number of seconds to wait before retrying the request.</p>
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
 * @public
 * <p>An object that describes a validation exception.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the validation exception.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The validation exception message.</p>
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
 * @public
 * <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason for the validation failure.</p>
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
   * <p>The fields that failed validation.</p>
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
 * @public
 * <p>The Amazon Web Services Threat Intel Group (ATIG) details for a specific vulnerability.</p>
 */
export interface AtigData {
  /**
   * @public
   * <p>The date and time this vulnerability was first observed.</p>
   */
  firstSeen?: Date;

  /**
   * @public
   * <p>The date and time this vulnerability was last observed.</p>
   */
  lastSeen?: Date;

  /**
   * @public
   * <p>The commercial sectors this vulnerability targets.</p>
   */
  targets?: string[];

  /**
   * @public
   * <p>The <a href="https://attack.mitre.org/">MITRE ATT&amp;CK</a> tactics, techniques, and procedures (TTPs) associated with vulnerability.</p>
   */
  ttps?: string[];
}

/**
 * @public
 * <p>Represents which scan types are automatically enabled for new members of your Amazon Inspector organization.</p>
 */
export interface AutoEnable {
  /**
   * @public
   * <p>Represents whether Amazon EC2 scans are automatically enabled for new members of your Amazon Inspector
   *          organization.</p>
   */
  ec2: boolean | undefined;

  /**
   * @public
   * <p>Represents whether Amazon ECR scans are automatically enabled for new members of your Amazon Inspector
   *          organization.</p>
   */
  ecr: boolean | undefined;

  /**
   * @public
   * <p>Represents whether AWS Lambda standard scans are automatically enabled for new members of your Amazon Inspector organization.
   *       </p>
   */
  lambda?: boolean;

  /**
   * @public
   * <p>Represents whether AWS Lambda code scans are automatically enabled for new members of your Amazon Inspector organization.
   *
   *       </p>
   */
  lambdaCode?: boolean;
}

/**
 * @public
 * <p>Details of the Amazon EC2 instance involved in a finding.</p>
 */
export interface AwsEc2InstanceDetails {
  /**
   * @public
   * <p>The type of the Amazon EC2 instance.</p>
   */
  type?: string;

  /**
   * @public
   * <p>The image ID of the Amazon EC2 instance.</p>
   */
  imageId?: string;

  /**
   * @public
   * <p>The IPv4 addresses of the Amazon EC2 instance.</p>
   */
  ipV4Addresses?: string[];

  /**
   * @public
   * <p>The IPv6 addresses of the Amazon EC2 instance.</p>
   */
  ipV6Addresses?: string[];

  /**
   * @public
   * <p>The name of the key pair used to launch the Amazon EC2 instance.</p>
   */
  keyName?: string;

  /**
   * @public
   * <p>The IAM instance profile ARN of the Amazon EC2 instance.</p>
   */
  iamInstanceProfileArn?: string;

  /**
   * @public
   * <p>The VPC ID of the Amazon EC2 instance.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>The subnet ID of the Amazon EC2 instance.</p>
   */
  subnetId?: string;

  /**
   * @public
   * <p>The date and time the Amazon EC2 instance was launched at.</p>
   */
  launchedAt?: Date;

  /**
   * @public
   * <p>The platform of the Amazon EC2 instance.</p>
   */
  platform?: string;
}

/**
 * @public
 * <p>The image details of the Amazon ECR container image.</p>
 */
export interface AwsEcrContainerImageDetails {
  /**
   * @public
   * <p>The name of the repository the Amazon ECR container image resides in.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The image tags attached to the Amazon ECR container image.</p>
   */
  imageTags?: string[];

  /**
   * @public
   * <p>The date and time the Amazon ECR container image was pushed.</p>
   */
  pushedAt?: Date;

  /**
   * @public
   * <p>The image author of the Amazon ECR container image.</p>
   */
  author?: string;

  /**
   * @public
   * <p>The architecture of the Amazon ECR container image.</p>
   */
  architecture?: string;

  /**
   * @public
   * <p>The image hash of the Amazon ECR container image.</p>
   */
  imageHash: string | undefined;

  /**
   * @public
   * <p>The registry for the Amazon ECR container image.</p>
   */
  registry: string | undefined;

  /**
   * @public
   * <p>The platform of the Amazon ECR container image.</p>
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
  PYTHON_3_7: "PYTHON_3_7",
  PYTHON_3_8: "PYTHON_3_8",
  PYTHON_3_9: "PYTHON_3_9",
  UNSUPPORTED: "UNSUPPORTED",
} as const;

/**
 * @public
 */
export type Runtime = (typeof Runtime)[keyof typeof Runtime];

/**
 * @public
 * <p>The VPC security groups and subnets that are attached to an AWS Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
 */
export interface LambdaVpcConfig {
  /**
   * @public
   * <p>A list of VPC subnet IDs.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>The VPC security groups and subnets that are attached to an AWS Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>The ID of the VPC.</p>
   */
  vpcId?: string;
}

/**
 * @public
 * <p> A summary of information about the AWS Lambda function.</p>
 */
export interface AwsLambdaFunctionDetails {
  /**
   * @public
   * <p>The name of the AWS Lambda function.</p>
   */
  functionName: string | undefined;

  /**
   * @public
   * <p>The runtime environment for the AWS Lambda function.</p>
   */
  runtime: Runtime | undefined;

  /**
   * @public
   * <p>The SHA256 hash of the AWS Lambda function's deployment package.</p>
   */
  codeSha256: string | undefined;

  /**
   * @public
   * <p>The version of the AWS Lambda function.</p>
   */
  version: string | undefined;

  /**
   * @public
   * <p>The AWS Lambda function's execution role.</p>
   */
  executionRoleArn: string | undefined;

  /**
   * @public
   * <p>The AWS Lambda function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">
   *          layers</a>. A Lambda function can have up to five layers.</p>
   */
  layers?: string[];

  /**
   * @public
   * <p>The AWS Lambda function's networking configuration.</p>
   */
  vpcConfig?: LambdaVpcConfig;

  /**
   * @public
   * <p>The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for .zip file archive.</p>
   */
  packageType?: PackageType;

  /**
   * @public
   * <p>The instruction set architecture that the AWS Lambda function supports. Architecture is a string array with one of the
   *          valid values. The default architecture value is <code>x86_64</code>.</p>
   */
  architectures?: Architecture[];

  /**
   * @public
   * <p>The date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>
   *          </p>
   */
  lastModifiedAt?: Date;
}

/**
 * @public
 * <p>One or more tags submitted as part of the request is not valid.</p>
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
   * @public
   * <p>The 12-digit Amazon Web Services account IDs of the accounts to retrieve Amazon Inspector status for.</p>
   */
  accountIds?: string[];
}

/**
 * @public
 * <p>An object with details on why an account failed to enable Amazon Inspector.</p>
 */
export interface FailedAccount {
  /**
   * @public
   * <p>The Amazon Web Services account ID.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The status of Amazon Inspector for the account.</p>
   */
  status?: Status;

  /**
   * @public
   * <p>An object detailing which resources Amazon Inspector is enabled to scan for the account.</p>
   */
  resourceStatus?: ResourceStatus;

  /**
   * @public
   * <p>The error code explaining why the account failed to enable Amazon Inspector.</p>
   */
  errorCode: ErrorCode | undefined;

  /**
   * @public
   * <p>The error message received when the account failed to enable Amazon Inspector.</p>
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchGetAccountStatusResponse {
  /**
   * @public
   * <p>An array of objects that provide details on the status of Amazon Inspector for each of the requested accounts.</p>
   */
  accounts: AccountState[] | undefined;

  /**
   * @public
   * <p>An array of objects detailing any accounts that failed to enable Amazon Inspector and why.</p>
   */
  failedAccounts?: FailedAccount[];
}

/**
 * @public
 * <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
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
   * @public
   * <p>An array of finding ARNs for the findings you want to retrieve code snippets from.</p>
   */
  findingArns: string[] | undefined;
}

/**
 * @public
 * <p>Contains information on the lines of code associated with a code snippet.</p>
 */
export interface CodeLine {
  /**
   * @public
   * <p>The content of a line of code</p>
   */
  content: string | undefined;

  /**
   * @public
   * <p>The line number that a section of code is located at.</p>
   */
  lineNumber: number | undefined;
}

/**
 * @public
 * <p>A suggested fix for a vulnerability in your Lambda function code.</p>
 */
export interface SuggestedFix {
  /**
   * @public
   * <p>The fix's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The fix's code.</p>
   */
  code?: string;
}

/**
 * @public
 * <p>Contains information on a code snippet retrieved by Amazon Inspector from a code vulnerability finding.</p>
 */
export interface CodeSnippetResult {
  /**
   * @public
   * <p>The ARN of a finding that the code snippet is associated with.</p>
   */
  findingArn?: string;

  /**
   * @public
   * <p>The line number of the first line of a code snippet.</p>
   */
  startLine?: number;

  /**
   * @public
   * <p>The line number of the last line of a code snippet.</p>
   */
  endLine?: number;

  /**
   * @public
   * <p>Contains information on the retrieved code snippet.</p>
   */
  codeSnippet?: CodeLine[];

  /**
   * @public
   * <p>Details of a suggested code fix.</p>
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
 * @public
 * <p>Contains information about any errors encountered while trying to retrieve a code snippet.</p>
 */
export interface CodeSnippetError {
  /**
   * @public
   * <p>The ARN of the finding that a code snippet couldn't be retrieved for.</p>
   */
  findingArn: string | undefined;

  /**
   * @public
   * <p>The error code for the error that prevented a code snippet from being retrieved.</p>
   */
  errorCode: CodeSnippetErrorCode | undefined;

  /**
   * @public
   * <p>The error message received when Amazon Inspector failed to retrieve a code snippet.</p>
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCodeSnippetResponse {
  /**
   * @public
   * <p>The retrieved code snippets associated with the provided finding ARNs.</p>
   */
  codeSnippetResults?: CodeSnippetResult[];

  /**
   * @public
   * <p>Any errors Amazon Inspector encountered while trying to retrieve the requested code snippets.</p>
   */
  errors?: CodeSnippetError[];
}

/**
 * @public
 */
export interface BatchGetFindingDetailsRequest {
  /**
   * @public
   * <p>A list of finding ARNs.</p>
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
 * @public
 * <p>Details about an error encountered when trying to return vulnerability data for a finding.</p>
 */
export interface FindingDetailsError {
  /**
   * @public
   * <p>The finding ARN that returned an error.</p>
   */
  findingArn: string | undefined;

  /**
   * @public
   * <p>The error code.</p>
   */
  errorCode: FindingDetailsErrorCode | undefined;

  /**
   * @public
   * <p>The error message.</p>
   */
  errorMessage: string | undefined;
}

/**
 * @public
 * <p>The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific vulnerability.</p>
 */
export interface CisaData {
  /**
   * @public
   * <p>The date and time CISA added this vulnerability to their catalogue.</p>
   */
  dateAdded?: Date;

  /**
   * @public
   * <p>The date and time CISA expects a fix to have been provided vulnerability.</p>
   */
  dateDue?: Date;

  /**
   * @public
   * <p>The remediation action recommended by CISA for this vulnerability.</p>
   */
  action?: string;
}

/**
 * @public
 * <p>Details of the evidence for a vulnerability identified in a finding.</p>
 */
export interface Evidence {
  /**
   * @public
   * <p>The evidence rule.</p>
   */
  evidenceRule?: string;

  /**
   * @public
   * <p>The evidence details.</p>
   */
  evidenceDetail?: string;

  /**
   * @public
   * <p>The evidence severity.</p>
   */
  severity?: string;
}

/**
 * @public
 * <p>Contains information on when this exploit was observed.</p>
 */
export interface ExploitObserved {
  /**
   * @public
   * <p>The date an time when the exploit was last seen.</p>
   */
  lastSeen?: Date;

  /**
   * @public
   * <p>The date an time when the exploit was first seen.</p>
   */
  firstSeen?: Date;
}

/**
 * @public
 * <p>Details of the vulnerability identified in a finding.</p>
 */
export interface FindingDetail {
  /**
   * @public
   * <p>The finding ARN that the vulnerability details are associated with.</p>
   */
  findingArn?: string;

  /**
   * @public
   * <p>The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific vulnerability.</p>
   */
  cisaData?: CisaData;

  /**
   * @public
   * <p>The risk score of the vulnerability.</p>
   */
  riskScore?: number;

  /**
   * @public
   * <p>Information on the evidence of the vulnerability.</p>
   */
  evidences?: Evidence[];

  /**
   * @public
   * <p>The MITRE adversary tactics, techniques, or procedures (TTPs) associated with the vulnerability.</p>
   */
  ttps?: string[];

  /**
   * @public
   * <p>The known malware tools or kits that can exploit the vulnerability.</p>
   */
  tools?: string[];

  /**
   * @public
   * <p>Contains information on when this exploit was observed.</p>
   */
  exploitObserved?: ExploitObserved;

  /**
   * @public
   * <p>The reference URLs for the vulnerability data.</p>
   */
  referenceUrls?: string[];

  /**
   * @public
   * <p>The Common Weakness Enumerations (CWEs) associated with the vulnerability.</p>
   */
  cwes?: string[];

  /**
   * @public
   * <p>The Exploit Prediction Scoring System (EPSS) score of the vulnerability.</p>
   */
  epssScore?: number;
}

/**
 * @public
 */
export interface BatchGetFindingDetailsResponse {
  /**
   * @public
   * <p>A finding's vulnerability details.</p>
   */
  findingDetails?: FindingDetail[];

  /**
   * @public
   * <p>Error information for findings that details could not be returned for.</p>
   */
  errors?: FindingDetailsError[];
}

/**
 * @public
 */
export interface BatchGetFreeTrialInfoRequest {
  /**
   * @public
   * <p>The account IDs to get free trial status for.</p>
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
 * @public
 * <p>An object that contains information about the Amazon Inspector free trial for an account.</p>
 */
export interface FreeTrialInfo {
  /**
   * @public
   * <p>The type of scan covered by the Amazon Inspector free trail.</p>
   */
  type: FreeTrialType | undefined;

  /**
   * @public
   * <p>The date and time that the Amazon Inspector free trail started for a given account.</p>
   */
  start: Date | undefined;

  /**
   * @public
   * <p>The date and time that the Amazon Inspector free trail ends for a given account.</p>
   */
  end: Date | undefined;

  /**
   * @public
   * <p>The order to sort results by.</p>
   */
  status: FreeTrialStatus | undefined;
}

/**
 * @public
 * <p>Information about the Amazon Inspector free trial for an account.</p>
 */
export interface FreeTrialAccountInfo {
  /**
   * @public
   * <p>The account associated with the Amazon Inspector free trial information.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>Contains information about the Amazon Inspector free trial for an account.</p>
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
 * @public
 * <p>Information about an error received while accessing free trail data for an account.</p>
 */
export interface FreeTrialInfoError {
  /**
   * @public
   * <p>The account associated with the Amazon Inspector free trial information.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The error code.</p>
   */
  code: FreeTrialInfoErrorCode | undefined;

  /**
   * @public
   * <p>The error message returned.</p>
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface BatchGetFreeTrialInfoResponse {
  /**
   * @public
   * <p>An array of objects that provide Amazon Inspector free trial details for each of the requested accounts.
   *       </p>
   */
  accounts: FreeTrialAccountInfo[] | undefined;

  /**
   * @public
   * <p>An array of objects detailing any accounts that free trial data could not be returned for.</p>
   */
  failedAccounts: FreeTrialInfoError[] | undefined;
}

/**
 * @public
 */
export interface BatchGetMemberEc2DeepInspectionStatusRequest {
  /**
   * @public
   * <p>The unique identifiers for the Amazon Web Services accounts to retrieve Amazon Inspector deep inspection activation status for.
   *
   *       </p>
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
 * @public
 * <p>An object that contains details about the state of Amazon Inspector deep inspection for a member account.</p>
 */
export interface MemberAccountEc2DeepInspectionStatusState {
  /**
   * @public
   * <p>The unique identifier for the Amazon Web Services account of the organization member</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The state of Amazon Inspector deep inspection in the member account.</p>
   */
  status?: Ec2DeepInspectionStatus;

  /**
   * @public
   * <p>The error message explaining why the account failed to activate Amazon Inspector deep inspection.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 * <p>An object that contains details about a member account in your organization that failed to activate Amazon Inspector deep inspection.</p>
 */
export interface FailedMemberAccountEc2DeepInspectionStatusState {
  /**
   * @public
   * <p>The unique identifier for the Amazon Web Services account of the organization member that failed to activate Amazon Inspector deep inspection.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The status of EC2 scanning in the account that failed to activate Amazon Inspector deep inspection.</p>
   */
  ec2ScanStatus?: Status;

  /**
   * @public
   * <p>The error message explaining why the account failed to activate Amazon Inspector deep inspection.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface BatchGetMemberEc2DeepInspectionStatusResponse {
  /**
   * @public
   * <p>An array of objects that provide details on the activation status of Amazon Inspector deep inspection for each of the requested accounts.
   *
   *          </p>
   */
  accountIds?: MemberAccountEc2DeepInspectionStatusState[];

  /**
   * @public
   * <p>An array of objects that provide details on any accounts that failed to activate Amazon Inspector deep inspection and why.
   *
   *       </p>
   */
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[];
}

/**
 * @public
 * <p>An object that contains details about the status of Amazon Inspector deep inspection for a member account in your organization.</p>
 */
export interface MemberAccountEc2DeepInspectionStatus {
  /**
   * @public
   * <p>The unique identifier for the Amazon Web Services account of the organization member.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>Whether Amazon Inspector deep inspection is active in the account.  If <code>TRUE</code> Amazon Inspector deep inspection is active, if <code>FALSE</code> it is not active.</p>
   */
  activateDeepInspection: boolean | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusRequest {
  /**
   * @public
   * <p>The unique identifiers for the Amazon Web Services accounts to change Amazon Inspector deep inspection status for.</p>
   */
  accountIds: MemberAccountEc2DeepInspectionStatus[] | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusResponse {
  /**
   * @public
   * <p>An array of objects that provide details for each of the accounts that Amazon Inspector deep inspection status was successfully changed for.
   *       </p>
   */
  accountIds?: MemberAccountEc2DeepInspectionStatusState[];

  /**
   * @public
   * <p>An array of objects that provide details for each of the accounts that Amazon Inspector deep inspection status could not be successfully changed for.
   *       </p>
   */
  failedAccountIds?: FailedMemberAccountEc2DeepInspectionStatusState[];
}

/**
 * @public
 */
export interface CancelFindingsReportRequest {
  /**
   * @public
   * <p>The ID of the report to be canceled.</p>
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface CancelFindingsReportResponse {
  /**
   * @public
   * <p>The ID of the canceled report.</p>
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface CancelSbomExportRequest {
  /**
   * @public
   * <p>The report ID of the SBOM export to cancel.</p>
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface CancelSbomExportResponse {
  /**
   * @public
   * <p>The report ID of the canceled SBOM export.</p>
   */
  reportId?: string;
}

/**
 * @public
 * <p>Contains information on where a code vulnerability is located in your Lambda function.</p>
 */
export interface CodeFilePath {
  /**
   * @public
   * <p>The name of the file the code vulnerability was found in.</p>
   */
  fileName: string | undefined;

  /**
   * @public
   * <p>The file path to the code that a vulnerability was found in.</p>
   */
  filePath: string | undefined;

  /**
   * @public
   * <p>The line number of the first line of code that a vulnerability was found in.</p>
   */
  startLine: number | undefined;

  /**
   * @public
   * <p>The line number of the last line of code that a vulnerability was found in.</p>
   */
  endLine: number | undefined;
}

/**
 * @public
 * <p>Contains information on the code vulnerability identified in your Lambda function.</p>
 */
export interface CodeVulnerabilityDetails {
  /**
   * @public
   * <p>Contains information on where the code vulnerability is located in your code.</p>
   */
  filePath: CodeFilePath | undefined;

  /**
   * @public
   * <p>The detector tag associated with the vulnerability. Detector tags group related vulnerabilities by common themes or tactics. For a list of available tags by programming language, see <a href="https://docs.aws.amazon.com/codeguru/detector-library/java/tags/">Java tags</a>, or <a href="https://docs.aws.amazon.com/codeguru/detector-library/python/tags/">Python tags</a>. </p>
   */
  detectorTags?: string[];

  /**
   * @public
   * <p>A URL containing supporting documentation about the code vulnerability detected.</p>
   */
  referenceUrls?: string[];

  /**
   * @public
   * <p>The identifier for a rule that was used to detect the code vulnerability.</p>
   */
  ruleId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda layer that the code vulnerability was detected in.</p>
   */
  sourceLambdaLayerArn?: string;

  /**
   * @public
   * <p>The ID for the Amazon CodeGuru detector associated with the finding. For more information on detectors see <a href="https://docs.aws.amazon.com/codeguru/detector-library">Amazon CodeGuru
   *          Detector Library</a>.</p>
   */
  detectorId: string | undefined;

  /**
   * @public
   * <p>The name of the detector used to identify the code vulnerability. For more information on detectors see <a href="https://docs.aws.amazon.com/codeguru/detector-library">CodeGuru Detector Library</a>.</p>
   */
  detectorName: string | undefined;

  /**
   * @public
   * <p>The Common Weakness Enumeration (CWE) item associated with the detected vulnerability.</p>
   */
  cwes: string[] | undefined;
}

/**
 * @public
 * <p>A conflict occurred.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the conflicting resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of the conflicting resource.</p>
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
 * @public
 * <p>a structure that contains information on the count of resources within a group.</p>
 */
export interface Counts {
  /**
   * @public
   * <p>The number of resources.</p>
   */
  count?: number;

  /**
   * @public
   * <p>The key associated with this group</p>
   */
  groupKey?: GroupKey;
}

/**
 * @public
 * <p>Contains details of a coverage date filter.</p>
 */
export interface CoverageDateFilter {
  /**
   * @public
   * <p>A timestamp representing the start of the time period to filter results by.</p>
   */
  startInclusive?: Date;

  /**
   * @public
   * <p>A timestamp representing the end of the time period to filter results by.</p>
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
 * @public
 * <p>Contains details of a coverage string filter.</p>
 */
export interface CoverageStringFilter {
  /**
   * @public
   * <p>The operator to compare strings on.</p>
   */
  comparison: CoverageStringComparison | undefined;

  /**
   * @public
   * <p>The value to compare strings on.</p>
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
 * @public
 * <p>Contains details of a coverage map filter.</p>
 */
export interface CoverageMapFilter {
  /**
   * @public
   * <p>The operator to compare coverage on.</p>
   */
  comparison: CoverageMapComparison | undefined;

  /**
   * @public
   * <p>The tag key associated with the coverage map filter.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The tag value associated with the coverage map filter.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>A structure that identifies filter criteria for <code>GetCoverageStatistics</code>.</p>
 */
export interface CoverageFilterCriteria {
  /**
   * @public
   * <p>The scan status code to filter on. Valid values are: <code>ValidationException</code>, <code>InternalServerException</code>, <code>ResourceNotFoundException</code>, <code>BadRequestException</code>, and <code>ThrottlingException</code>.</p>
   */
  scanStatusCode?: CoverageStringFilter[];

  /**
   * @public
   * <p>The scan status reason to filter on.</p>
   */
  scanStatusReason?: CoverageStringFilter[];

  /**
   * @public
   * <p>An array of Amazon Web Services account IDs to return coverage statistics for.</p>
   */
  accountId?: CoverageStringFilter[];

  /**
   * @public
   * <p>An array of Amazon Web Services resource IDs to return coverage statistics for.</p>
   */
  resourceId?: CoverageStringFilter[];

  /**
   * @public
   * <p>An array of Amazon Web Services resource types to return coverage statistics for. The values can be <code>AWS_EC2_INSTANCE</code>, <code>AWS_LAMBDA_FUNCTION</code> or <code>AWS_ECR_REPOSITORY</code>.</p>
   */
  resourceType?: CoverageStringFilter[];

  /**
   * @public
   * <p>An array of Amazon Inspector scan types to return coverage statistics for.</p>
   */
  scanType?: CoverageStringFilter[];

  /**
   * @public
   * <p>The Amazon ECR repository name to filter on.</p>
   */
  ecrRepositoryName?: CoverageStringFilter[];

  /**
   * @public
   * <p>The Amazon ECR image tags to filter on.</p>
   */
  ecrImageTags?: CoverageStringFilter[];

  /**
   * @public
   * <p>The Amazon EC2 instance tags to filter on.</p>
   */
  ec2InstanceTags?: CoverageMapFilter[];

  /**
   * @public
   * <p>Returns coverage statistics for AWS Lambda functions filtered by function names.</p>
   */
  lambdaFunctionName?: CoverageStringFilter[];

  /**
   * @public
   * <p>Returns coverage statistics for AWS Lambda functions filtered by tag.</p>
   */
  lambdaFunctionTags?: CoverageMapFilter[];

  /**
   * @public
   * <p>Returns coverage statistics for AWS Lambda functions filtered by runtime.</p>
   */
  lambdaFunctionRuntime?: CoverageStringFilter[];

  /**
   * @public
   * <p>Filters Amazon Web Services resources based on whether Amazon Inspector has checked them for vulnerabilities within the specified time range.</p>
   */
  lastScannedAt?: CoverageDateFilter[];
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
 * @public
 * <p>Meta data details of an Amazon EC2 instance.</p>
 */
export interface Ec2Metadata {
  /**
   * @public
   * <p>The tags attached to the instance.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The ID of the Amazon Machine Image (AMI) used to launch the instance.</p>
   */
  amiId?: string;

  /**
   * @public
   * <p>The platform of the instance.</p>
   */
  platform?: Ec2Platform;
}

/**
 * @public
 * <p>Information on the Amazon ECR image metadata associated with a finding.</p>
 */
export interface EcrContainerImageMetadata {
  /**
   * @public
   * <p>Tags associated with the Amazon ECR image metadata.</p>
   */
  tags?: string[];
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
 * @public
 * <p>Information on the Amazon ECR repository metadata associated with a finding.</p>
 */
export interface EcrRepositoryMetadata {
  /**
   * @public
   * <p>The name of the Amazon ECR repository.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The frequency of scans.</p>
   */
  scanFrequency?: EcrScanFrequency;
}

/**
 * @public
 * <p>The AWS Lambda function metadata.</p>
 */
export interface LambdaFunctionMetadata {
  /**
   * @public
   * <p>The resource tags on an AWS Lambda function.</p>
   */
  functionTags?: Record<string, string>;

  /**
   * @public
   * <p>The layers for an AWS Lambda function. A Lambda function can have up to five layers.</p>
   */
  layers?: string[];

  /**
   * @public
   * <p>The name of a function.</p>
   */
  functionName?: string;

  /**
   * @public
   * <p>An AWS Lambda function's runtime.</p>
   */
  runtime?: Runtime;
}

/**
 * @public
 * <p>An object that contains details about the metadata for an Amazon ECR resource.</p>
 */
export interface ResourceScanMetadata {
  /**
   * @public
   * <p>An object that contains details about the repository an Amazon ECR image resides in.</p>
   */
  ecrRepository?: EcrRepositoryMetadata;

  /**
   * @public
   * <p>An object that contains details about the container metadata for an Amazon ECR image.</p>
   */
  ecrImage?: EcrContainerImageMetadata;

  /**
   * @public
   * <p>An object that contains metadata details for an Amazon EC2 instance.</p>
   */
  ec2?: Ec2Metadata;

  /**
   * @public
   * <p>An object that contains metadata details for an AWS Lambda function.</p>
   */
  lambdaFunction?: LambdaFunctionMetadata;
}

/**
 * @public
 * @enum
 */
export const ScanStatusReason = {
  ACCESS_DENIED: "ACCESS_DENIED",
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
 * @public
 * <p>The status of the scan.</p>
 */
export interface ScanStatus {
  /**
   * @public
   * <p>The status code of the scan.</p>
   */
  statusCode: ScanStatusCode | undefined;

  /**
   * @public
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
 * @public
 * <p>An object that contains details about a resource covered by Amazon Inspector.</p>
 */
export interface CoveredResource {
  /**
   * @public
   * <p>The type of the covered resource.</p>
   */
  resourceType: CoverageResourceType | undefined;

  /**
   * @public
   * <p>The ID of the covered resource.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the covered resource.</p>
   */
  accountId: string | undefined;

  /**
   * @public
   * <p>The Amazon Inspector scan type covering the resource.</p>
   */
  scanType: ScanType | undefined;

  /**
   * @public
   * <p>The status of the scan covering the resource.</p>
   */
  scanStatus?: ScanStatus;

  /**
   * @public
   * <p>An object that contains details about the metadata.</p>
   */
  resourceMetadata?: ResourceScanMetadata;

  /**
   * @public
   * <p>The date and time the resource was last checked for vulnerabilities.</p>
   */
  lastScannedAt?: Date;
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
 * @public
 * <p>Contains details on the time range used to filter findings.</p>
 */
export interface DateFilter {
  /**
   * @public
   * <p>A timestamp representing the start of the time period filtered on.</p>
   */
  startInclusive?: Date;

  /**
   * @public
   * <p>A timestamp representing the end of the time period filtered on.</p>
   */
  endInclusive?: Date;
}

/**
 * @public
 * <p>An object that describes the details of a number filter.</p>
 */
export interface NumberFilter {
  /**
   * @public
   * <p>The highest number to be included in the filter.</p>
   */
  upperInclusive?: number;

  /**
   * @public
   * <p>The lowest number to be included in the filter.</p>
   */
  lowerInclusive?: number;
}

/**
 * @public
 * <p>An object that describes the details of a port range filter.</p>
 */
export interface PortRangeFilter {
  /**
   * @public
   * <p>The port number the port range begins at.</p>
   */
  beginInclusive?: number;

  /**
   * @public
   * <p>The port number the port range ends at.</p>
   */
  endInclusive?: number;
}

/**
 * @public
 * <p>Contains information on the details of a package filter.</p>
 */
export interface PackageFilter {
  /**
   * @public
   * <p>An object that contains details on the name of the package to filter on.</p>
   */
  name?: StringFilter;

  /**
   * @public
   * <p>The package version to filter on.</p>
   */
  version?: StringFilter;

  /**
   * @public
   * <p>An object that contains details on the package epoch to filter on.</p>
   */
  epoch?: NumberFilter;

  /**
   * @public
   * <p>An object that contains details on the package release to filter on.</p>
   */
  release?: StringFilter;

  /**
   * @public
   * <p>An object that contains details on the package architecture type to filter on.</p>
   */
  architecture?: StringFilter;

  /**
   * @public
   * <p>An object that contains details on the source layer hash to filter on.</p>
   */
  sourceLayerHash?: StringFilter;

  /**
   * @public
   * <p>An object that describes the details of a string filter.</p>
   */
  sourceLambdaLayerArn?: StringFilter;
}

/**
 * @public
 * <p>Details on the criteria used to define the filter.</p>
 */
export interface FilterCriteria {
  /**
   * @public
   * <p>Details on the finding ARNs used to filter findings.</p>
   */
  findingArn?: StringFilter[];

  /**
   * @public
   * <p>Details of the Amazon Web Services account IDs used to filter findings.</p>
   */
  awsAccountId?: StringFilter[];

  /**
   * @public
   * <p>Details on the finding types used to filter findings.</p>
   */
  findingType?: StringFilter[];

  /**
   * @public
   * <p>Details on the severity used to filter findings.</p>
   */
  severity?: StringFilter[];

  /**
   * @public
   * <p>Details on the date and time a finding was first seen used to filter findings.</p>
   */
  firstObservedAt?: DateFilter[];

  /**
   * @public
   * <p>Details on the date and time a finding was last seen used to filter findings.</p>
   */
  lastObservedAt?: DateFilter[];

  /**
   * @public
   * <p>Details on the date and time a finding was last updated at used to filter findings.</p>
   */
  updatedAt?: DateFilter[];

  /**
   * @public
   * <p>Details on the finding status types used to filter findings.</p>
   */
  findingStatus?: StringFilter[];

  /**
   * @public
   * <p>Details on the finding title used to filter findings.</p>
   */
  title?: StringFilter[];

  /**
   * @public
   * <p>The Amazon Inspector score to filter on.</p>
   */
  inspectorScore?: NumberFilter[];

  /**
   * @public
   * <p>Details on the resource types used to filter findings.</p>
   */
  resourceType?: StringFilter[];

  /**
   * @public
   * <p>Details on the resource IDs used to filter findings.</p>
   */
  resourceId?: StringFilter[];

  /**
   * @public
   * <p>Details on the resource tags used to filter findings.</p>
   */
  resourceTags?: MapFilter[];

  /**
   * @public
   * <p>Details of the Amazon EC2 instance image IDs used to filter findings.</p>
   */
  ec2InstanceImageId?: StringFilter[];

  /**
   * @public
   * <p>Details of the Amazon EC2 instance VPC IDs used to filter findings.</p>
   */
  ec2InstanceVpcId?: StringFilter[];

  /**
   * @public
   * <p>Details of the Amazon EC2 instance subnet IDs used to filter findings.</p>
   */
  ec2InstanceSubnetId?: StringFilter[];

  /**
   * @public
   * <p>Details on the Amazon ECR image push date and time used to filter findings.</p>
   */
  ecrImagePushedAt?: DateFilter[];

  /**
   * @public
   * <p>Details of the Amazon ECR image architecture types used to filter findings.</p>
   */
  ecrImageArchitecture?: StringFilter[];

  /**
   * @public
   * <p>Details on the Amazon ECR registry used to filter findings.</p>
   */
  ecrImageRegistry?: StringFilter[];

  /**
   * @public
   * <p>Details on the name of the Amazon ECR repository used to filter findings.</p>
   */
  ecrImageRepositoryName?: StringFilter[];

  /**
   * @public
   * <p>The tags attached to the Amazon ECR container image.</p>
   */
  ecrImageTags?: StringFilter[];

  /**
   * @public
   * <p>Details of the Amazon ECR image hashes used to filter findings.</p>
   */
  ecrImageHash?: StringFilter[];

  /**
   * @public
   * <p>Details on the port ranges used to filter findings.</p>
   */
  portRange?: PortRangeFilter[];

  /**
   * @public
   * <p>Details on network protocol used to filter findings.</p>
   */
  networkProtocol?: StringFilter[];

  /**
   * @public
   * <p>Details of the component IDs used to filter findings.</p>
   */
  componentId?: StringFilter[];

  /**
   * @public
   * <p>Details of the component types used to filter findings.</p>
   */
  componentType?: StringFilter[];

  /**
   * @public
   * <p>Details on the vulnerability ID used to filter findings.</p>
   */
  vulnerabilityId?: StringFilter[];

  /**
   * @public
   * <p>Details on the vulnerability type used to filter findings.</p>
   */
  vulnerabilitySource?: StringFilter[];

  /**
   * @public
   * <p>Details on the vendor severity used to filter findings.</p>
   */
  vendorSeverity?: StringFilter[];

  /**
   * @public
   * <p>Details on the vulnerable packages used to filter findings.</p>
   */
  vulnerablePackages?: PackageFilter[];

  /**
   * @public
   * <p>Details on the related vulnerabilities used to filter findings.</p>
   */
  relatedVulnerabilities?: StringFilter[];

  /**
   * @public
   * <p>Details on whether a fix is available through a version update. This value can be <code>YES</code>, <code>NO</code>, or <code>PARTIAL</code>.  A <code>PARTIAL</code> fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions.</p>
   */
  fixAvailable?: StringFilter[];

  /**
   * @public
   * <p>Filters the list of AWS Lambda functions by the name of the function.</p>
   */
  lambdaFunctionName?: StringFilter[];

  /**
   * @public
   * <p>Filters the list of AWS Lambda functions by the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">
   *          layers</a>. A Lambda function can have up to five layers.</p>
   */
  lambdaFunctionLayers?: StringFilter[];

  /**
   * @public
   * <p>Filters the list of AWS Lambda functions by the runtime environment for the Lambda function.</p>
   */
  lambdaFunctionRuntime?: StringFilter[];

  /**
   * @public
   * <p>Filters the list of AWS Lambda functions by the date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>
   *          </p>
   */
  lambdaFunctionLastModifiedAt?: DateFilter[];

  /**
   * @public
   * <p>Filters the list of AWS Lambda functions by execution role.</p>
   */
  lambdaFunctionExecutionRoleArn?: StringFilter[];

  /**
   * @public
   * <p>Filters the list of AWS Lambda findings by the availability of exploits.</p>
   */
  exploitAvailable?: StringFilter[];

  /**
   * @public
   * <p>The name of the detector used to identify a code vulnerability in a Lambda function used to filter findings.</p>
   */
  codeVulnerabilityDetectorName?: StringFilter[];

  /**
   * @public
   * <p>The detector type tag associated with the vulnerability used to filter findings. Detector tags group related vulnerabilities by common themes or tactics. For a list of available tags by programming language, see <a href="https://docs.aws.amazon.com/codeguru/detector-library/java/tags/">Java tags</a>, or <a href="https://docs.aws.amazon.com/codeguru/detector-library/python/tags/">Python tags</a>. </p>
   */
  codeVulnerabilityDetectorTags?: StringFilter[];

  /**
   * @public
   * <p>The file path to the file in a Lambda function that contains a code vulnerability used to filter findings.</p>
   */
  codeVulnerabilityFilePath?: StringFilter[];

  /**
   * @public
   * <p>The EPSS score used to filter findings.</p>
   */
  epssScore?: NumberFilter[];
}

/**
 * @public
 */
export interface CreateFilterRequest {
  /**
   * @public
   * <p>Defines the action that is to be applied to the findings that match the filter.</p>
   */
  action: FilterAction | undefined;

  /**
   * @public
   * <p>A description of the filter.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Defines the criteria to be used in the filter for querying findings.</p>
   */
  filterCriteria: FilterCriteria | undefined;

  /**
   * @public
   * <p>The name of the filter. Minimum length of 3. Maximum length of 64. Valid characters
   *          include alphanumeric characters, dot (.), underscore (_), and dash (-). Spaces are not
   *          allowed.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A list of tags for the filter.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The reason for creating the filter.</p>
   */
  reason?: string;
}

/**
 * @public
 */
export interface CreateFilterResponse {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the successfully created filter.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>You have exceeded your service quota. To perform the requested action, remove some of
 *          the relevant resources, or use Service Quotas to request a service quota increase.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that exceeds a service quota.</p>
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
 * @public
 * <p>Contains details of the Amazon S3 bucket and KMS key used to export findings.</p>
 */
export interface Destination {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket to export findings to.</p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p>The prefix that the findings will be written under.</p>
   */
  keyPrefix?: string;

  /**
   * @public
   * <p>The ARN of the KMS key used to encrypt data when exporting findings.</p>
   */
  kmsKeyArn: string | undefined;
}

/**
 * @public
 */
export interface CreateFindingsReportRequest {
  /**
   * @public
   * <p>The filter criteria to apply to the results of the finding report.</p>
   */
  filterCriteria?: FilterCriteria;

  /**
   * @public
   * <p>The format to generate the report in.</p>
   */
  reportFormat: ReportFormat | undefined;

  /**
   * @public
   * <p>The Amazon S3 export destination for the report.</p>
   */
  s3Destination: Destination | undefined;
}

/**
 * @public
 */
export interface CreateFindingsReportResponse {
  /**
   * @public
   * <p>The ID of the report.</p>
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
 * @public
 * <p>A resource string filter for a software bill of materials report.</p>
 */
export interface ResourceStringFilter {
  /**
   * @public
   * <p>The filter's comparison.</p>
   */
  comparison: ResourceStringComparison | undefined;

  /**
   * @public
   * <p>The filter's value.</p>
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
 * @public
 * <p>A resource map filter for a software bill of material report.</p>
 */
export interface ResourceMapFilter {
  /**
   * @public
   * <p>The filter's comparison.</p>
   */
  comparison: ResourceMapComparison | undefined;

  /**
   * @public
   * <p>The filter's key.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The filter's value.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>The resource filter criteria for a Software bill of materials (SBOM) report.</p>
 */
export interface ResourceFilterCriteria {
  /**
   * @public
   * <p>The account IDs used as resource filter criteria.</p>
   */
  accountId?: ResourceStringFilter[];

  /**
   * @public
   * <p>The resource IDs used as resource filter criteria.</p>
   */
  resourceId?: ResourceStringFilter[];

  /**
   * @public
   * <p>The resource types used as resource filter criteria.</p>
   */
  resourceType?: ResourceStringFilter[];

  /**
   * @public
   * <p>The ECR repository names used as resource filter criteria.</p>
   */
  ecrRepositoryName?: ResourceStringFilter[];

  /**
   * @public
   * <p>The AWS Lambda function name used as resource filter criteria.</p>
   */
  lambdaFunctionName?: ResourceStringFilter[];

  /**
   * @public
   * <p>The ECR image tags used as resource filter criteria.</p>
   */
  ecrImageTags?: ResourceStringFilter[];

  /**
   * @public
   * <p>The EC2 instance tags used as resource filter criteria.</p>
   */
  ec2InstanceTags?: ResourceMapFilter[];

  /**
   * @public
   * <p>The AWS Lambda function tags used as resource filter criteria.</p>
   */
  lambdaFunctionTags?: ResourceMapFilter[];
}

/**
 * @public
 */
export interface CreateSbomExportRequest {
  /**
   * @public
   * <p>The resource filter criteria for the software bill of materials (SBOM) report.</p>
   */
  resourceFilterCriteria?: ResourceFilterCriteria;

  /**
   * @public
   * <p>The output format for the software bill of materials (SBOM) report.</p>
   */
  reportFormat: SbomReportFormat | undefined;

  /**
   * @public
   * <p>Contains details of the Amazon S3 bucket and KMS key used to export findings.</p>
   */
  s3Destination: Destination | undefined;
}

/**
 * @public
 */
export interface CreateSbomExportResponse {
  /**
   * @public
   * <p>The report ID for the software bill of materials (SBOM) report.</p>
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
 * @public
 * <p>The Common Vulnerability Scoring System (CVSS) version 2 details for the vulnerability.</p>
 */
export interface Cvss2 {
  /**
   * @public
   * <p>The CVSS v2 base score for the vulnerability.</p>
   */
  baseScore?: number;

  /**
   * @public
   * <p>The scoring vector associated with the CVSS v2 score.</p>
   */
  scoringVector?: string;
}

/**
 * @public
 * <p>The Common Vulnerability Scoring System (CVSS) version 3 details for the vulnerability.</p>
 */
export interface Cvss3 {
  /**
   * @public
   * <p>The CVSS v3 base score for the vulnerability.</p>
   */
  baseScore?: number;

  /**
   * @public
   * <p>The scoring vector associated with the CVSS v3 score.</p>
   */
  scoringVector?: string;
}

/**
 * @public
 * <p>The CVSS score for a finding.</p>
 */
export interface CvssScore {
  /**
   * @public
   * <p>The base CVSS score used for the finding.</p>
   */
  baseScore: number | undefined;

  /**
   * @public
   * <p>The vector string of the CVSS score.</p>
   */
  scoringVector: string | undefined;

  /**
   * @public
   * <p>The version of CVSS used for the score.</p>
   */
  version: string | undefined;

  /**
   * @public
   * <p>The source of the CVSS score.</p>
   */
  source: string | undefined;
}

/**
 * @public
 * <p>Details on adjustments Amazon Inspector made to the CVSS score for a finding.</p>
 */
export interface CvssScoreAdjustment {
  /**
   * @public
   * <p>The metric used to adjust the CVSS score.</p>
   */
  metric: string | undefined;

  /**
   * @public
   * <p>The reason the CVSS score has been adjustment.</p>
   */
  reason: string | undefined;
}

/**
 * @public
 * <p>Information about the CVSS score.</p>
 */
export interface CvssScoreDetails {
  /**
   * @public
   * <p>The source for the CVSS score.</p>
   */
  scoreSource: string | undefined;

  /**
   * @public
   * <p>The source of the CVSS data.</p>
   */
  cvssSource?: string;

  /**
   * @public
   * <p>The CVSS version used in scoring.</p>
   */
  version: string | undefined;

  /**
   * @public
   * <p>The CVSS score.</p>
   */
  score: number | undefined;

  /**
   * @public
   * <p>The vector for the CVSS score.</p>
   */
  scoringVector: string | undefined;

  /**
   * @public
   * <p>An object that contains details about adjustment Amazon Inspector made to the CVSS score.</p>
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
 * @public
 * <p>Details of the Amazon Inspector delegated administrator for your organization.</p>
 */
export interface DelegatedAdmin {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for your organization.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The status of the Amazon Inspector delegated administrator.</p>
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
 * @public
 * <p>Details of the Amazon Inspector delegated administrator for your organization.</p>
 */
export interface DelegatedAdminAccount {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for your organization.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The status of the Amazon Inspector delegated administrator.</p>
   */
  status?: DelegatedAdminStatus;
}

/**
 * @public
 */
export interface DeleteFilterRequest {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the filter to be deleted.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFilterResponse {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the filter that has been deleted.</p>
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
   * @public
   * <p>The scan types are automatically enabled for new members of your organization.</p>
   */
  autoEnable?: AutoEnable;

  /**
   * @public
   * <p>Represents whether your organization has reached the maximum Amazon Web Services account limit for Amazon Inspector.</p>
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
   * @public
   * <p>An array of account IDs you want to disable Amazon Inspector scans for.</p>
   */
  accountIds?: string[];

  /**
   * @public
   * <p>The resource scan types you want to disable.</p>
   */
  resourceTypes?: ResourceScanType[];
}

/**
 * @public
 */
export interface DisableResponse {
  /**
   * @public
   * <p>Information on the accounts that have had Amazon Inspector scans successfully disabled. Details are
   *          provided for each account.</p>
   */
  accounts: Account[] | undefined;

  /**
   * @public
   * <p>Information on any accounts for which Amazon Inspector scans could not be disabled. Details are
   *          provided for each account.</p>
   */
  failedAccounts?: FailedAccount[];
}

/**
 * @public
 */
export interface DisableDelegatedAdminAccountRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the current Amazon Inspector delegated administrator.</p>
   */
  delegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisableDelegatedAdminAccountResponse {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the successfully disabled delegated administrator.</p>
   */
  delegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the member account to disassociate.</p>
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberResponse {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the successfully disassociated member.</p>
   */
  accountId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EcrRescanDuration = {
  DAYS_180: "DAYS_180",
  DAYS_30: "DAYS_30",
  LIFETIME: "LIFETIME",
} as const;

/**
 * @public
 */
export type EcrRescanDuration = (typeof EcrRescanDuration)[keyof typeof EcrRescanDuration];

/**
 * @public
 * <p>Details about the ECR automated re-scan duration setting for your environment.</p>
 */
export interface EcrConfiguration {
  /**
   * @public
   * <p>The ECR automated re-scan duration defines how long an ECR image will be actively scanned by Amazon Inspector. When the number of days since an image was last pushed exceeds the automated re-scan duration the monitoring state of that image becomes <code>inactive</code> and all associated findings are scheduled for closure.</p>
   */
  rescanDuration: EcrRescanDuration | undefined;
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
 * @public
 * <p>Details about the state of any changes to the ECR automated re-scan duration setting.</p>
 */
export interface EcrRescanDurationState {
  /**
   * @public
   * <p>The ECR automated re-scan duration defines how long an ECR image will be actively scanned by Amazon Inspector. When the number of days since an image was last pushed exceeds the automated re-scan duration the monitoring state of that image becomes <code>inactive</code> and all associated findings are scheduled for closure.</p>
   */
  rescanDuration?: EcrRescanDuration;

  /**
   * @public
   * <p>The status of changes to the ECR automated re-scan duration.</p>
   */
  status?: EcrRescanDurationStatus;

  /**
   * @public
   * <p>A timestamp representing when the last time the ECR scan duration setting was changed.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 * <p>Details about the state of the ECR scans for your environment.</p>
 */
export interface EcrConfigurationState {
  /**
   * @public
   * <p>An object that contains details about the state of the ECR automated re-scan setting.</p>
   */
  rescanDurationState?: EcrRescanDurationState;
}

/**
 * @public
 */
export interface EnableRequest {
  /**
   * @public
   * <p>A list of account IDs you want to enable Amazon Inspector scans for.</p>
   */
  accountIds?: string[];

  /**
   * @public
   * <p>The resource scan types you want to enable.</p>
   */
  resourceTypes: ResourceScanType[] | undefined;

  /**
   * @public
   * <p>The idempotency token for the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface EnableResponse {
  /**
   * @public
   * <p>Information on the accounts that have had Amazon Inspector scans successfully enabled. Details are
   *          provided for each account.</p>
   */
  accounts: Account[] | undefined;

  /**
   * @public
   * <p>Information on any accounts for which Amazon Inspector scans could not be enabled. Details are
   *          provided for each account.</p>
   */
  failedAccounts?: FailedAccount[];
}

/**
 * @public
 */
export interface EnableDelegatedAdminAccountRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator.</p>
   */
  delegatedAdminAccountId: string | undefined;

  /**
   * @public
   * <p>The idempotency token for the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface EnableDelegatedAdminAccountResponse {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the successfully Amazon Inspector delegated administrator.</p>
   */
  delegatedAdminAccountId: string | undefined;
}

/**
 * @public
 * <p>Details about the Exploit Prediction Scoring System (EPSS) score.</p>
 */
export interface Epss {
  /**
   * @public
   * <p>The Exploit Prediction Scoring System (EPSS) score.</p>
   */
  score?: number;
}

/**
 * @public
 * <p>Details about the Exploit Prediction Scoring System (EPSS) score for a finding.</p>
 */
export interface EpssDetails {
  /**
   * @public
   * <p>The EPSS score.</p>
   */
  score?: number;
}

/**
 * @public
 * <p>The details of an exploit available for a finding discovered in your environment.</p>
 */
export interface ExploitabilityDetails {
  /**
   * @public
   * <p>The date and time of the last exploit associated with a finding discovered in your environment.</p>
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
 * @public
 * <p>Details about a filter.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) associated with this filter.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the account that created the filter.</p>
   */
  ownerId: string | undefined;

  /**
   * @public
   * <p>The name of the filter.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>Details on the filter criteria associated with this filter.</p>
   */
  criteria: FilterCriteria | undefined;

  /**
   * @public
   * <p>The action that is to be applied to the findings that match the filter.</p>
   */
  action: FilterAction | undefined;

  /**
   * @public
   * <p>The date and time this filter was created at.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The date and time the filter was last updated at.</p>
   */
  updatedAt: Date | undefined;

  /**
   * @public
   * <p>A description of the filter.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The reason for the filter.</p>
   */
  reason?: string;

  /**
   * @public
   * <p>The tags attached to the filter.</p>
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
 * @public
 * <p>Information about the Amazon Inspector score given to a finding.</p>
 */
export interface InspectorScoreDetails {
  /**
   * @public
   * <p>An object that contains details about the CVSS score given to a finding.</p>
   */
  adjustedCvss?: CvssScoreDetails;
}

/**
 * @public
 * <p>Details about the step associated with a finding.</p>
 */
export interface Step {
  /**
   * @public
   * <p>The component ID.</p>
   */
  componentId: string | undefined;

  /**
   * @public
   * <p>The component type.</p>
   */
  componentType: string | undefined;
}

/**
 * @public
 * <p>Information on the network path associated with a finding.</p>
 */
export interface NetworkPath {
  /**
   * @public
   * <p>The details on the steps in the network path.</p>
   */
  steps?: Step[];
}

/**
 * @public
 * <p>Details about the port range associated with a finding.</p>
 */
export interface PortRange {
  /**
   * @public
   * <p>The beginning port in a port range.</p>
   */
  begin: number | undefined;

  /**
   * @public
   * <p>The ending port in a port range.</p>
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
 * @public
 * <p>Contains the details of a network reachability finding.</p>
 */
export interface NetworkReachabilityDetails {
  /**
   * @public
   * <p>An object that contains details about the open port range associated with a finding.</p>
   */
  openPortRange: PortRange | undefined;

  /**
   * @public
   * <p>The protocol associated with a finding.</p>
   */
  protocol: NetworkProtocol | undefined;

  /**
   * @public
   * <p>An object that contains details about a network path associated with a finding.</p>
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
 * @public
 * <p>Information on the vulnerable package identified by a finding.</p>
 */
export interface VulnerablePackage {
  /**
   * @public
   * <p>The name of the vulnerable package.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The version of the vulnerable package.</p>
   */
  version: string | undefined;

  /**
   * @public
   * <p>The source layer hash of the vulnerable package.</p>
   */
  sourceLayerHash?: string;

  /**
   * @public
   * <p>The epoch of the vulnerable package.</p>
   */
  epoch?: number;

  /**
   * @public
   * <p>The release of the vulnerable package.</p>
   */
  release?: string;

  /**
   * @public
   * <p>The architecture of the vulnerable package.</p>
   */
  arch?: string;

  /**
   * @public
   * <p>The package manager of the vulnerable package.</p>
   */
  packageManager?: PackageManager;

  /**
   * @public
   * <p>The file path of the vulnerable package.</p>
   */
  filePath?: string;

  /**
   * @public
   * <p>The version of the package that contains the vulnerability fix.</p>
   */
  fixedInVersion?: string;

  /**
   * @public
   * <p>The code to run in your environment to update packages with a fix available.</p>
   */
  remediation?: string;

  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the AWS Lambda function affected by a finding.</p>
   */
  sourceLambdaLayerArn?: string;
}

/**
 * @public
 * <p>Information about a package vulnerability finding.</p>
 */
export interface PackageVulnerabilityDetails {
  /**
   * @public
   * <p>The ID given to this vulnerability.</p>
   */
  vulnerabilityId: string | undefined;

  /**
   * @public
   * <p>The packages impacted by this vulnerability.</p>
   */
  vulnerablePackages?: VulnerablePackage[];

  /**
   * @public
   * <p>The source of the vulnerability information.</p>
   */
  source: string | undefined;

  /**
   * @public
   * <p>An object that contains details about the CVSS score of a finding.</p>
   */
  cvss?: CvssScore[];

  /**
   * @public
   * <p>One or more vulnerabilities related to the one identified in this finding.</p>
   */
  relatedVulnerabilities?: string[];

  /**
   * @public
   * <p>A URL to the source of the vulnerability information.</p>
   */
  sourceUrl?: string;

  /**
   * @public
   * <p>The severity the vendor has given to this vulnerability type.</p>
   */
  vendorSeverity?: string;

  /**
   * @public
   * <p>The date and time that this vulnerability was first added to the vendor's database.</p>
   */
  vendorCreatedAt?: Date;

  /**
   * @public
   * <p>The date and time the vendor last updated this vulnerability in their database.</p>
   */
  vendorUpdatedAt?: Date;

  /**
   * @public
   * <p>One or more URLs that contain details about this vulnerability type.</p>
   */
  referenceUrls?: string[];
}

/**
 * @public
 * <p>Details about the recommended course of action to remediate the finding.</p>
 */
export interface Recommendation {
  /**
   * @public
   * <p>The recommended course of action to remediate the finding.</p>
   */
  text?: string;

  /**
   * @public
   * <p>The URL address to the CVE remediation recommendations.</p>
   */
  Url?: string;
}

/**
 * @public
 * <p>Information on how to remediate a finding.</p>
 */
export interface Remediation {
  /**
   * @public
   * <p>An object that contains information about the recommended course of action to remediate the finding.</p>
   */
  recommendation?: Recommendation;
}

/**
 * @public
 * <p>Contains details about the resource involved in the finding.</p>
 */
export interface ResourceDetails {
  /**
   * @public
   * <p>An object that contains details about the Amazon EC2 instance involved in the finding.</p>
   */
  awsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * @public
   * <p>An object that contains details about the Amazon ECR container image involved in the finding.</p>
   */
  awsEcrContainerImage?: AwsEcrContainerImageDetails;

  /**
   * @public
   * <p>A summary of the information about an AWS Lambda function affected by a finding.</p>
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
 * @public
 * <p>Details about the resource involved in a finding.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>The type of resource.</p>
   */
  type: ResourceType | undefined;

  /**
   * @public
   * <p>The ID of the resource.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The partition of the resource.</p>
   */
  partition?: string;

  /**
   * @public
   * <p>The Amazon Web Services Region the impacted resource is located in.</p>
   */
  region?: string;

  /**
   * @public
   * <p>The tags attached to the resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>An object that contains details about the resource involved in a finding.</p>
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
 * @public
 * <p>Details about an Amazon Inspector finding.</p>
 */
export interface Finding {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the finding.</p>
   */
  findingArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID associated with the finding.</p>
   */
  awsAccountId: string | undefined;

  /**
   * @public
   * <p>The type of the finding. The <code>type</code> value determines the valid values for <code>resource</code> in your request. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-types.html">Finding types</a> in the Amazon Inspector user guide.</p>
   */
  type: FindingType | undefined;

  /**
   * @public
   * <p>The description of the finding.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The title of the finding.</p>
   */
  title?: string;

  /**
   * @public
   * <p>An object that contains the details about how to remediate a finding.</p>
   */
  remediation: Remediation | undefined;

  /**
   * @public
   * <p>The severity of the finding. <code>UNTRIAGED</code> applies to <code>PACKAGE_VULNERABILITY</code> type findings that the vendor has not assigned a severity yet. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-understanding-severity.html">Severity levels for findings</a> in the Amazon Inspector user guide.</p>
   */
  severity: Severity | undefined;

  /**
   * @public
   * <p>The date and time that the finding was first observed.</p>
   */
  firstObservedAt: Date | undefined;

  /**
   * @public
   * <p>The date and time that the finding was last observed.</p>
   */
  lastObservedAt: Date | undefined;

  /**
   * @public
   * <p>The date and time the finding was last updated at.</p>
   */
  updatedAt?: Date;

  /**
   * @public
   * <p>The status of the finding.</p>
   */
  status: FindingStatus | undefined;

  /**
   * @public
   * <p>Contains information on the resources involved in a finding. The <code>resource</code> value determines the valid values for <code>type</code> in your request. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/user/findings-types.html">Finding types</a> in the Amazon Inspector user guide.</p>
   */
  resources: Resource[] | undefined;

  /**
   * @public
   * <p>The Amazon Inspector score given to the finding.</p>
   */
  inspectorScore?: number;

  /**
   * @public
   * <p>An object that contains details of the Amazon Inspector score.</p>
   */
  inspectorScoreDetails?: InspectorScoreDetails;

  /**
   * @public
   * <p>An object that contains the details of a network reachability finding.</p>
   */
  networkReachabilityDetails?: NetworkReachabilityDetails;

  /**
   * @public
   * <p>An object that contains the details of a package vulnerability finding.</p>
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;

  /**
   * @public
   * <p>Details on whether a fix is available through a version update. This value can be <code>YES</code>, <code>NO</code>, or <code>PARTIAL</code>.  A <code>PARTIAL</code> fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions.</p>
   */
  fixAvailable?: FixAvailable;

  /**
   * @public
   * <p>If a finding discovered in your environment has an exploit available.</p>
   */
  exploitAvailable?: ExploitAvailable;

  /**
   * @public
   * <p>The details of an exploit available for a finding discovered in your environment.</p>
   */
  exploitabilityDetails?: ExploitabilityDetails;

  /**
   * @public
   * <p>Details about the code vulnerability identified in a Lambda function used to filter findings.</p>
   */
  codeVulnerabilityDetails?: CodeVulnerabilityDetails;

  /**
   * @public
   * <p>The finding's EPSS score.</p>
   */
  epss?: EpssDetails;
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
   * @public
   * <p>Specifies how the ECR automated re-scan duration is currently configured for your environment.</p>
   */
  ecrConfiguration?: EcrConfigurationState;
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
   * @public
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator.</p>
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
   * @public
   * <p>The Amazon Inspector deep inspection custom paths for your account.</p>
   */
  packagePaths?: string[];

  /**
   * @public
   * <p>The Amazon Inspector deep inspection custom paths for your organization.</p>
   */
  orgPackagePaths?: string[];

  /**
   * @public
   * <p>The activation status of Amazon Inspector deep inspection in your account.</p>
   */
  status?: Ec2DeepInspectionStatus;

  /**
   * @public
   * <p>An error message explaining why Amazon Inspector deep inspection configurations could not be retrieved for your account.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface GetEncryptionKeyRequest {
  /**
   * @public
   * <p>The scan type the key encrypts.</p>
   */
  scanType: ScanType | undefined;

  /**
   * @public
   * <p>The resource type the key encrypts.</p>
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 */
export interface GetEncryptionKeyResponse {
  /**
   * @public
   * <p>A kms key ID.</p>
   */
  kmsKeyId: string | undefined;
}

/**
 * @public
 */
export interface GetFindingsReportStatusRequest {
  /**
   * @public
   * <p>The ID of the report to retrieve the status of.</p>
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
   * @public
   * <p>The ID of the report.</p>
   */
  reportId?: string;

  /**
   * @public
   * <p>The status of the report.</p>
   */
  status?: ExternalReportStatus;

  /**
   * @public
   * <p>The error code of the report.</p>
   */
  errorCode?: ReportingErrorCode;

  /**
   * @public
   * <p>The error message of the report.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>The destination of the report.</p>
   */
  destination?: Destination;

  /**
   * @public
   * <p>The filter criteria associated with the report.</p>
   */
  filterCriteria?: FilterCriteria;
}

/**
 * @public
 */
export interface GetMemberRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the member account to retrieve information on.</p>
   */
  accountId: string | undefined;
}

/**
 * @public
 * <p>Details on a member account in your organization.</p>
 */
export interface Member {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the member account.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>The status of the member account.</p>
   */
  relationshipStatus?: RelationshipStatus;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for this member account.</p>
   */
  delegatedAdminAccountId?: string;

  /**
   * @public
   * <p>A timestamp showing when the status of this member was last updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface GetMemberResponse {
  /**
   * @public
   * <p>Details of the retrieved member account.</p>
   */
  member?: Member;
}

/**
 * @public
 */
export interface GetSbomExportRequest {
  /**
   * @public
   * <p>The report ID of the SBOM export to get details for.</p>
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface GetSbomExportResponse {
  /**
   * @public
   * <p>The report ID of the software bill of materials (SBOM) report.</p>
   */
  reportId?: string;

  /**
   * @public
   * <p>The format of the software bill of materials (SBOM) report.</p>
   */
  format?: SbomReportFormat;

  /**
   * @public
   * <p>The status of the software bill of materials (SBOM) report.</p>
   */
  status?: ExternalReportStatus;

  /**
   * @public
   * <p>An error code.</p>
   */
  errorCode?: ReportingErrorCode;

  /**
   * @public
   * <p>An error message.</p>
   */
  errorMessage?: string;

  /**
   * @public
   * <p>Contains details of the Amazon S3 bucket and KMS key used to export findings.</p>
   */
  s3Destination?: Destination;

  /**
   * @public
   * <p>Contains details about the resource filter criteria used for the software bill of materials (SBOM) report.</p>
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
   * @public
   * <p>The service scan type to check permissions for.</p>
   */
  service?: Service;

  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.</p>
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
 * @public
 * <p>Contains information on the permissions an account has within Amazon Inspector.</p>
 */
export interface Permission {
  /**
   * @public
   * <p>The services that the permissions allow an account to perform the given operations for.</p>
   */
  service: Service | undefined;

  /**
   * @public
   * <p>The operations that can be performed with the given permissions.</p>
   */
  operation: Operation | undefined;
}

/**
 * @public
 */
export interface ListAccountPermissionsResponse {
  /**
   * @public
   * <p>Contains details on the permissions an account has to configure Amazon Inspector.</p>
   */
  permissions: Permission[] | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCoverageRequest {
  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An object that contains details on the filters to apply to the coverage data for your
   *          environment.</p>
   */
  filterCriteria?: CoverageFilterCriteria;
}

/**
 * @public
 */
export interface ListCoverageResponse {
  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An object that contains details on the covered resources in your environment.</p>
   */
  coveredResources?: CoveredResource[];
}

/**
 * @public
 */
export interface ListCoverageStatisticsRequest {
  /**
   * @public
   * <p>An object that contains details on the filters to apply to the coverage data for your
   *          environment.</p>
   */
  filterCriteria?: CoverageFilterCriteria;

  /**
   * @public
   * <p>The value to group the results by.</p>
   */
  groupBy?: GroupKey;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCoverageStatisticsResponse {
  /**
   * @public
   * <p>An array with the number for each group.</p>
   */
  countsByGroup?: Counts[];

  /**
   * @public
   * <p>The total number for all groups.</p>
   */
  totalCounts: number | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDelegatedAdminAccountsRequest {
  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDelegatedAdminAccountsResponse {
  /**
   * @public
   * <p>Details of the Amazon Inspector delegated administrator of your organization.</p>
   */
  delegatedAdminAccounts?: DelegatedAdminAccount[];

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListFiltersRequest {
  /**
   * @public
   * <p>The Amazon resource number (ARN) of the filter.</p>
   */
  arns?: string[];

  /**
   * @public
   * <p>The action the filter applies to matched findings.</p>
   */
  action?: FilterAction;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListFiltersResponse {
  /**
   * @public
   * <p>Contains details on the filters associated with your account.</p>
   */
  filters: Filter[] | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListFindingAggregationsRequest {
  /**
   * @public
   * <p>The type of the aggregation request.</p>
   */
  aggregationType: AggregationType | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The Amazon Web Services account IDs to retrieve finding aggregation data for.</p>
   */
  accountIds?: StringFilter[];

  /**
   * @public
   * <p>Details of the aggregation request that is used to filter your aggregation results.</p>
   */
  aggregationRequest?: AggregationRequest;
}

/**
 * @public
 */
export interface ListFindingAggregationsResponse {
  /**
   * @public
   * <p>The type of aggregation to perform.</p>
   */
  aggregationType: AggregationType | undefined;

  /**
   * @public
   * <p>Objects that contain the results of an aggregation operation.</p>
   */
  responses?: AggregationResponse[];

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SortField = {
  AWS_ACCOUNT_ID: "AWS_ACCOUNT_ID",
  COMPONENT_TYPE: "COMPONENT_TYPE",
  ECR_IMAGE_PUSHED_AT: "ECR_IMAGE_PUSHED_AT",
  ECR_IMAGE_REGISTRY: "ECR_IMAGE_REGISTRY",
  ECR_IMAGE_REPOSITORY_NAME: "ECR_IMAGE_REPOSITORY_NAME",
  EPSS_SCORE: "EPSS_SCORE",
  FINDING_STATUS: "FINDING_STATUS",
  FINDING_TYPE: "FINDING_TYPE",
  FIRST_OBSERVED_AT: "FIRST_OBSERVED_AT",
  INSPECTOR_SCORE: "INSPECTOR_SCORE",
  LAST_OBSERVED_AT: "LAST_OBSERVED_AT",
  NETWORK_PROTOCOL: "NETWORK_PROTOCOL",
  RESOURCE_TYPE: "RESOURCE_TYPE",
  SEVERITY: "SEVERITY",
  VENDOR_SEVERITY: "VENDOR_SEVERITY",
  VULNERABILITY_ID: "VULNERABILITY_ID",
  VULNERABILITY_SOURCE: "VULNERABILITY_SOURCE",
} as const;

/**
 * @public
 */
export type SortField = (typeof SortField)[keyof typeof SortField];

/**
 * @public
 * <p>Details about the criteria used to sort finding results.</p>
 */
export interface SortCriteria {
  /**
   * @public
   * <p>The finding detail field by which results are sorted.</p>
   */
  field: SortField | undefined;

  /**
   * @public
   * <p>The order by which findings are sorted.</p>
   */
  sortOrder: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Details on the filters to apply to your finding results.</p>
   */
  filterCriteria?: FilterCriteria;

  /**
   * @public
   * <p>Details on the sort criteria to apply to your finding results.</p>
   */
  sortCriteria?: SortCriteria;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Contains details on the findings in your environment.</p>
   */
  findings?: Finding[];
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * @public
   * <p>Specifies whether to list only currently associated members if <code>True</code> or to
   *          list all members within the organization if <code>False</code>.</p>
   */
  onlyAssociated?: boolean;

  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListMembersResponse {
  /**
   * @public
   * <p>An object that contains details for each member account.</p>
   */
  members?: Member[];

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more
   *          items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon resource number (ARN) of the resource to list tags of.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags associated with the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListUsageTotalsRequest {
  /**
   * @public
   * <p>The maximum number of results the response can return. If your request would return more than the maximum the response will return a <code>nextToken</code> value, use this value when you call the action again to get the remaining results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. If your response returns more than the <code>maxResults</code> maximum value it will also return a <code>nextToken</code> value. For subsequent calls, use the <code>nextToken</code> value returned from the previous request to continue listing results after the first page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The Amazon Web Services account IDs to retrieve usage totals for.</p>
   */
  accountIds?: string[];
}

/**
 * @public
 * @enum
 */
export const UsageType = {
  EC2_INSTANCE_HOURS: "EC2_INSTANCE_HOURS",
  ECR_INITIAL_SCAN: "ECR_INITIAL_SCAN",
  ECR_RESCAN: "ECR_RESCAN",
  LAMBDA_FUNCTION_CODE_HOURS: "LAMBDA_FUNCTION_CODE_HOURS",
  LAMBDA_FUNCTION_HOURS: "LAMBDA_FUNCTION_HOURS",
} as const;

/**
 * @public
 */
export type UsageType = (typeof UsageType)[keyof typeof UsageType];

/**
 * @public
 * <p>Contains usage information about the cost of Amazon Inspector operation.</p>
 */
export interface Usage {
  /**
   * @public
   * <p>The type scan.</p>
   */
  type?: UsageType;

  /**
   * @public
   * <p>The total of usage.</p>
   */
  total?: number;

  /**
   * @public
   * <p>The estimated monthly cost of Amazon Inspector.</p>
   */
  estimatedMonthlyCost?: number;

  /**
   * @public
   * <p>The currency type used when calculating usage data.</p>
   */
  currency?: Currency;
}

/**
 * @public
 * <p>The total of usage for an account ID.</p>
 */
export interface UsageTotal {
  /**
   * @public
   * <p>The account ID of the account that usage data was retrieved for.</p>
   */
  accountId?: string;

  /**
   * @public
   * <p>An object representing the total usage for an account.</p>
   */
  usage?: Usage[];
}

/**
 * @public
 */
export interface ListUsageTotalsResponse {
  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An object with details on the total usage for the requested account.</p>
   */
  totals?: UsageTotal[];
}

/**
 * @public
 */
export interface ResetEncryptionKeyRequest {
  /**
   * @public
   * <p>The scan type the key encrypts.</p>
   */
  scanType: ScanType | undefined;

  /**
   * @public
   * <p>The resource type the key encrypts.</p>
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 */
export interface ResetEncryptionKeyResponse {}

/**
 * @public
 * <p>Details on the criteria used to define the filter for a vulnerability search.
 *       </p>
 */
export interface SearchVulnerabilitiesFilterCriteria {
  /**
   * @public
   * <p>The IDs for specific vulnerabilities.</p>
   */
  vulnerabilityIds: string[] | undefined;
}

/**
 * @public
 */
export interface SearchVulnerabilitiesRequest {
  /**
   * @public
   * <p>The criteria used to filter the results of a vulnerability search.</p>
   */
  filterCriteria: SearchVulnerabilitiesFilterCriteria | undefined;

  /**
   * @public
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const VulnerabilitySource = {
  NVD: "NVD",
} as const;

/**
 * @public
 */
export type VulnerabilitySource = (typeof VulnerabilitySource)[keyof typeof VulnerabilitySource];

/**
 * @public
 * <p>Contains details about a specific vulnerability Amazon Inspector can detect.</p>
 */
export interface Vulnerability {
  /**
   * @public
   * <p>The ID for the specific vulnerability.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The Common Weakness Enumeration (CWE) associated with the vulnerability.</p>
   */
  cwes?: string[];

  /**
   * @public
   * <p>An object that contains the Cybersecurity and Infrastructure Security Agency (CISA) details for the vulnerability.</p>
   */
  cisaData?: CisaData;

  /**
   * @public
   * <p>The source of the vulnerability information.  Possible results are <code>RHEL</code>, <code>AMAZON_CVE</code>, <code>DEBIAN</code> or <code>NVD</code>.</p>
   */
  source?: VulnerabilitySource;

  /**
   * @public
   * <p>A description of the vulnerability.</p>
   */
  description?: string;

  /**
   * @public
   * <p>An object that contains information about the Amazon Web Services Threat Intel Group (ATIG) details for the vulnerability.</p>
   */
  atigData?: AtigData;

  /**
   * @public
   * <p>The severity assigned by the vendor.</p>
   */
  vendorSeverity?: string;

  /**
   * @public
   * <p>An object that contains the Common Vulnerability Scoring System (CVSS) Version 3 details for the vulnerability.</p>
   */
  cvss3?: Cvss3;

  /**
   * @public
   * <p>A list of related vulnerabilities.</p>
   */
  relatedVulnerabilities?: string[];

  /**
   * @public
   * <p>An object that contains the Common Vulnerability Scoring System (CVSS) Version 2 details for the vulnerability.</p>
   */
  cvss2?: Cvss2;

  /**
   * @public
   * <p>The date and time when the vendor created this vulnerability.</p>
   */
  vendorCreatedAt?: Date;

  /**
   * @public
   * <p>The date and time when the vendor last updated this vulnerability.</p>
   */
  vendorUpdatedAt?: Date;

  /**
   * @public
   * <p>A link to the official source material for this vulnerability.</p>
   */
  sourceUrl?: string;

  /**
   * @public
   * <p>Links to various resources with more information on this vulnerability. </p>
   */
  referenceUrls?: string[];

  /**
   * @public
   * <p>An object that contains details on when the exploit was observed.</p>
   */
  exploitObserved?: ExploitObserved;

  /**
   * @public
   * <p>Platforms that the vulnerability can be detected on.</p>
   */
  detectionPlatforms?: string[];

  /**
   * @public
   * <p>An object that contains the Exploit Prediction Scoring System (EPSS) score for a vulnerability.</p>
   */
  epss?: Epss;
}

/**
 * @public
 */
export interface SearchVulnerabilitiesResponse {
  /**
   * @public
   * <p>Details about the listed vulnerability.</p>
   */
  vulnerabilities: Vulnerability[] | undefined;

  /**
   * @public
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to apply a tag to.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags to be added to a resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the resource to remove tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateConfigurationRequest {
  /**
   * @public
   * <p>Specifies how the ECR automated re-scan will be updated for your environment.</p>
   */
  ecrConfiguration: EcrConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationResponse {}

/**
 * @public
 */
export interface UpdateEc2DeepInspectionConfigurationRequest {
  /**
   * @public
   * <p>Specify <code>TRUE</code> to activate Amazon Inspector deep inspection in your account, or <code>FALSE</code> to deactivate. Member accounts in an organization cannot deactivate deep inspection, instead the delegated administrator for the organization can deactivate a member account using <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchUpdateMemberEc2DeepInspectionStatus.html">BatchUpdateMemberEc2DeepInspectionStatus</a>.</p>
   */
  activateDeepInspection?: boolean;

  /**
   * @public
   * <p>The Amazon Inspector deep inspection custom paths you are adding for your account.</p>
   */
  packagePaths?: string[];
}

/**
 * @public
 */
export interface UpdateEc2DeepInspectionConfigurationResponse {
  /**
   * @public
   * <p>The current Amazon Inspector deep inspection custom paths for your account.</p>
   */
  packagePaths?: string[];

  /**
   * @public
   * <p>The current Amazon Inspector deep inspection custom paths for the organization.</p>
   */
  orgPackagePaths?: string[];

  /**
   * @public
   * <p>The status of Amazon Inspector deep inspection in your account.</p>
   */
  status?: Ec2DeepInspectionStatus;

  /**
   * @public
   * <p>An error message explaining why new Amazon Inspector deep inspection custom paths could not be added.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface UpdateEncryptionKeyRequest {
  /**
   * @public
   * <p>A KMS key ID for the encryption key.</p>
   */
  kmsKeyId: string | undefined;

  /**
   * @public
   * <p>The scan type for the encryption key.</p>
   */
  scanType: ScanType | undefined;

  /**
   * @public
   * <p>The resource type for the encryption key.</p>
   */
  resourceType: ResourceType | undefined;
}

/**
 * @public
 */
export interface UpdateEncryptionKeyResponse {}

/**
 * @public
 */
export interface UpdateFilterRequest {
  /**
   * @public
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  action?: FilterAction;

  /**
   * @public
   * <p>A description of the filter.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Defines the criteria to be update in the filter.</p>
   */
  filterCriteria?: FilterCriteria;

  /**
   * @public
   * <p>The name of the filter.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the filter to update.</p>
   */
  filterArn: string | undefined;

  /**
   * @public
   * <p>The reason the filter was updated.</p>
   */
  reason?: string;
}

/**
 * @public
 */
export interface UpdateFilterResponse {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of the successfully updated filter.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * @public
   * <p>Defines which scan types are enabled automatically for new members of your Amazon Inspector organization.</p>
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {
  /**
   * @public
   * <p>The updated status of scan types automatically enabled for new members of your Amazon Inspector organization.</p>
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationRequest {
  /**
   * @public
   * <p>The Amazon Inspector deep inspection custom paths you are adding for your organization.</p>
   */
  orgPackagePaths: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationResponse {}
