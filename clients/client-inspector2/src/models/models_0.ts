// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

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
   * <p>The status of Amazon Inspector scanning for Amazon EC2 resources.</p>
   */
  ec2: Status | string | undefined;

  /**
   * <p>The status of Amazon Inspector scanning for Amazon ECR resources.</p>
   */
  ecr: Status | string | undefined;

  /**
   * <p>The status of Amazon Inspector scanning for AWS Lambda function.</p>
   */
  lambda?: Status | string;
}

/**
 * @public
 * <p>An Amazon Web Services account within your environment that Amazon Inspector has been enabled for.</p>
 */
export interface Account {
  /**
   * <p>The ID of the Amazon Web Services account.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The status of Amazon Inspector for the account.</p>
   */
  status: Status | string | undefined;

  /**
   * <p>Details of the status of Amazon Inspector scans by resource type.</p>
   */
  resourceStatus: ResourceStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const AggregationFindingType = {
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
   * <p>The type of finding.</p>
   */
  findingType?: AggregationFindingType | string;

  /**
   * <p>The type of resource.</p>
   */
  resourceType?: AggregationResourceType | string;

  /**
   * <p>The sort order (ascending or descending).</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The value to sort by.</p>
   */
  sortBy?: AccountSortBy | string;
}

/**
 * @public
 * <p>An object that contains the counts of aggregated finding per severity.</p>
 */
export interface SeverityCounts {
  /**
   * <p>The total count of findings from all severities.</p>
   */
  all?: number;

  /**
   * <p>The total count of medium severity findings.</p>
   */
  medium?: number;

  /**
   * <p>The total count of high severity findings.</p>
   */
  high?: number;

  /**
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
   * <p>The Amazon Web Services account ID.</p>
   */
  accountId?: string;

  /**
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
   * <p>The status of Amazon Inspector for the account.</p>
   */
  status: Status | string | undefined;

  /**
   * <p>The error code explaining why the account failed to enable Amazon Inspector.</p>
   */
  errorCode: ErrorCode | string | undefined;

  /**
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
   * <p>An object detailing the state of Amazon Inspector scanning for Amazon EC2 resources.</p>
   */
  ec2: State | undefined;

  /**
   * <p>An object detailing the state of Amazon Inspector scanning for Amazon ECR resources.</p>
   */
  ecr: State | undefined;

  /**
   * <p>An object that described the state of Amazon Inspector scans for an account.</p>
   */
  lambda?: State;
}

/**
 * @public
 * <p>An object with details the status of an Amazon Web Services account within your Amazon Inspector environment.</p>
 */
export interface AccountState {
  /**
   * <p>The Amazon Web Services account ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>An object detailing the status of Amazon Inspector for the account.</p>
   */
  state: State | undefined;

  /**
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
   * <p>The operator to use when comparing values in the filter.</p>
   */
  comparison: StringComparison | string | undefined;

  /**
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
   * <p>The IDs of AMIs to aggregate findings for.</p>
   */
  amis?: StringFilter[];

  /**
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The value to sort results by.</p>
   */
  sortBy?: AmiSortBy | string;
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
   * <p>The container resource IDs.</p>
   */
  resourceIds?: StringFilter[];

  /**
   * <p>The image SHA values.</p>
   */
  imageShas?: StringFilter[];

  /**
   * <p>The container repositories.</p>
   */
  repositories?: StringFilter[];

  /**
   * <p>The architecture of the containers.</p>
   */
  architectures?: StringFilter[];

  /**
   * <p>The image tags.</p>
   */
  imageTags?: StringFilter[];

  /**
   * <p>The sort order (ascending or descending).</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The value to sort by.</p>
   */
  sortBy?: AwsEcrContainerSortBy | string;
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
   * <p>The operator to use when comparing values in the filter.</p>
   */
  comparison: MapComparison | string | undefined;

  /**
   * <p>The tag key used in the filter.</p>
   */
  key: string | undefined;

  /**
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
   * <p>The AMI IDs associated with the Amazon EC2 instances to aggregate findings for.</p>
   */
  amis?: StringFilter[];

  /**
   * <p>The operating system types to aggregate findings for. Valid values must be uppercase and
   *          underscore separated, examples are <code>ORACLE_LINUX_7</code> and
   *          <code>ALPINE_LINUX_3_8</code>.</p>
   */
  operatingSystems?: StringFilter[];

  /**
   * <p>The Amazon EC2 instance IDs to aggregate findings for.</p>
   */
  instanceIds?: StringFilter[];

  /**
   * <p>The Amazon EC2 instance tags to aggregate findings for.</p>
   */
  instanceTags?: MapFilter[];

  /**
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The value to sort results by.</p>
   */
  sortBy?: Ec2InstanceSortBy | string;
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
   * <p>The finding type to aggregate.</p>
   */
  findingType?: AggregationFindingType | string;

  /**
   * <p>The resource type to aggregate.</p>
   */
  resourceType?: AggregationResourceType | string;

  /**
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The value to sort results by.</p>
   */
  sortBy?: FindingTypeSortBy | string;
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
   * <p>The repository associated with the container image hosting the layers.</p>
   */
  repositories?: StringFilter[];

  /**
   * <p>The ID of the container image layer.</p>
   */
  resourceIds?: StringFilter[];

  /**
   * <p>The hashes associated with the layers.</p>
   */
  layerHashes?: StringFilter[];

  /**
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The value to sort results by.</p>
   */
  sortBy?: ImageLayerSortBy | string;
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
   * <p>The resource IDs to include in the aggregation results.</p>
   */
  resourceIds?: StringFilter[];

  /**
   * <p>The AWS Lambda function names to include in the aggregation results.</p>
   */
  functionNames?: StringFilter[];

  /**
   * <p>Returns findings aggregated by AWS Lambda function runtime environments.</p>
   */
  runtimes?: StringFilter[];

  /**
   * <p>The tags to include in the aggregation results.</p>
   */
  functionTags?: MapFilter[];

  /**
   * <p>The order to use for sorting the results.</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The finding severity to use for sorting the results.</p>
   */
  sortBy?: LambdaFunctionSortBy | string;
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
   * <p>The names of the AWS Lambda functions associated with the layers.</p>
   */
  functionNames?: StringFilter[];

  /**
   * <p>The resource IDs for the AWS Lambda function layers.</p>
   */
  resourceIds?: StringFilter[];

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Lambda function layer.
   *       </p>
   */
  layerArns?: StringFilter[];

  /**
   * <p>The order to use for sorting the results.</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The finding severity to use for sorting the results.</p>
   */
  sortBy?: LambdaLayerSortBy | string;
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
   * <p>The names of packages to aggregate findings on.</p>
   */
  packageNames?: StringFilter[];

  /**
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The value to sort results by.</p>
   */
  sortBy?: PackageSortBy | string;
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
   * <p>The names of repositories to aggregate findings on.</p>
   */
  repositories?: StringFilter[];

  /**
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The value to sort results by.</p>
   */
  sortBy?: RepositorySortBy | string;
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
   * <p>The finding titles to aggregate on.</p>
   */
  titles?: StringFilter[];

  /**
   * <p>The vulnerability IDs of the findings.</p>
   */
  vulnerabilityIds?: StringFilter[];

  /**
   * <p>The resource type to aggregate on.</p>
   */
  resourceType?: AggregationResourceType | string;

  /**
   * <p>The order to sort results by.</p>
   */
  sortOrder?: SortOrder | string;

  /**
   * <p>The value to sort results by.</p>
   */
  sortBy?: TitleSortBy | string;
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
   * <p>The ID of the AMI that findings were aggregated for.</p>
   */
  ami: string | undefined;

  /**
   * <p>The Amazon Web Services account ID for the AMI.</p>
   */
  accountId?: string;

  /**
   * <p>An object that contains the count of matched findings per severity.</p>
   */
  severityCounts?: SeverityCounts;

  /**
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
   * <p>The resource ID of the container.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The SHA value of the container image.</p>
   */
  imageSha?: string;

  /**
   * <p>The container repository.</p>
   */
  repository?: string;

  /**
   * <p>The architecture of the container.</p>
   */
  architecture?: string;

  /**
   * <p>The container image stags.</p>
   */
  imageTags?: string[];

  /**
   * <p>The Amazon Web Services account ID of the account that owns the container.</p>
   */
  accountId?: string;

  /**
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
   * <p>The Amazon EC2 instance ID.</p>
   */
  instanceId: string | undefined;

  /**
   * <p>The Amazon Machine Image (AMI) of the Amazon EC2 instance.</p>
   */
  ami?: string;

  /**
   * <p>The operating system of the Amazon EC2 instance.</p>
   */
  operatingSystem?: string;

  /**
   * <p>The tags attached to the instance.</p>
   */
  instanceTags?: Record<string, string>;

  /**
   * <p>The Amazon Web Services account for the Amazon EC2 instance.</p>
   */
  accountId?: string;

  /**
   * <p>An object that contains the count of matched findings per severity.</p>
   */
  severityCounts?: SeverityCounts;

  /**
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
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   */
  accountId?: string;

  /**
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
   * <p>The repository the layer resides in.</p>
   */
  repository: string | undefined;

  /**
   * <p>The resource ID of the container image layer.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The layer hash.</p>
   */
  layerHash: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account that owns the container image hosting the layer image.</p>
   */
  accountId: string | undefined;

  /**
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
   * <p>The resource IDs included in the aggregation results.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The AWS Lambda function names included in the aggregation results.</p>
   */
  functionName?: string;

  /**
   * <p>The runtimes included in the aggregation results.</p>
   */
  runtime?: string;

  /**
   * <p>The tags included in the aggregation results.</p>
   */
  lambdaTags?: Record<string, string>;

  /**
   * <p>The ID of the AWS account that owns the AWS Lambda function.
   *       </p>
   */
  accountId?: string;

  /**
   * <p>An object that contains the counts of aggregated finding per severity.</p>
   */
  severityCounts?: SeverityCounts;

  /**
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
   * <p>The names of the AWS Lambda functions associated with the layers.</p>
   */
  functionName: string | undefined;

  /**
   * <p>The Resource ID of the AWS Lambda function layer.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Lambda function layer.</p>
   */
  layerArn: string | undefined;

  /**
   * <p>The account ID of the AWS Lambda function layer.</p>
   */
  accountId: string | undefined;

  /**
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
   * <p>The name of the operating system package.</p>
   */
  packageName: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   */
  accountId?: string;

  /**
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
   * <p>The name of the repository associated with the findings.</p>
   */
  repository: string | undefined;

  /**
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   */
  accountId?: string;

  /**
   * <p>An object that represent the count of matched findings per severity.</p>
   */
  severityCounts?: SeverityCounts;

  /**
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
   * <p>The title that the findings were aggregated on.</p>
   */
  title: string | undefined;

  /**
   * <p>The vulnerability ID of the finding.</p>
   */
  vulnerabilityId?: string;

  /**
   * <p>The ID of the Amazon Web Services account associated with the findings.</p>
   */
  accountId?: string;

  /**
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
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface AssociateMemberResponse {
  /**
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
   * <p>The name of the validation exception.</p>
   */
  name: string | undefined;

  /**
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
   * <p>The reason for the validation failure.</p>
   */
  reason: ValidationExceptionReason | string | undefined;

  /**
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
   * <p>The date and time this vulnerability was first observed.</p>
   */
  firstSeen?: Date;

  /**
   * <p>The date and time this vulnerability was last observed.</p>
   */
  lastSeen?: Date;

  /**
   * <p>The commercial sectors this vulnerability targets.</p>
   */
  targets?: string[];

  /**
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
   * <p>Represents whether Amazon EC2 scans are automatically enabled for new members of your Amazon Inspector
   *          organization.</p>
   */
  ec2: boolean | undefined;

  /**
   * <p>Represents whether Amazon ECR scans are automatically enabled for new members of your Amazon Inspector
   *          organization.</p>
   */
  ecr: boolean | undefined;

  /**
   * <p>Represents whether AWS Lambda standard scans are automatically enabled for new members of your Amazon Inspector organization.
   *       </p>
   */
  lambda?: boolean;
}

/**
 * @public
 * <p>Details of the Amazon EC2 instance involved in a finding.</p>
 */
export interface AwsEc2InstanceDetails {
  /**
   * <p>The type of the Amazon EC2 instance.</p>
   */
  type?: string;

  /**
   * <p>The image ID of the Amazon EC2 instance.</p>
   */
  imageId?: string;

  /**
   * <p>The IPv4 addresses of the Amazon EC2 instance.</p>
   */
  ipV4Addresses?: string[];

  /**
   * <p>The IPv6 addresses of the Amazon EC2 instance.</p>
   */
  ipV6Addresses?: string[];

  /**
   * <p>The name of the key pair used to launch the Amazon EC2 instance.</p>
   */
  keyName?: string;

  /**
   * <p>The IAM instance profile ARN of the Amazon EC2 instance.</p>
   */
  iamInstanceProfileArn?: string;

  /**
   * <p>The VPC ID of the Amazon EC2 instance.</p>
   */
  vpcId?: string;

  /**
   * <p>The subnet ID of the Amazon EC2 instance.</p>
   */
  subnetId?: string;

  /**
   * <p>The date and time the Amazon EC2 instance was launched at.</p>
   */
  launchedAt?: Date;

  /**
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
   * <p>The name of the repository the Amazon ECR container image resides in.</p>
   */
  repositoryName: string | undefined;

  /**
   * <p>The image tags attached to the Amazon ECR container image.</p>
   */
  imageTags?: string[];

  /**
   * <p>The date and time the Amazon ECR container image was pushed.</p>
   */
  pushedAt?: Date;

  /**
   * <p>The image author of the Amazon ECR container image.</p>
   */
  author?: string;

  /**
   * <p>The architecture of the Amazon ECR container image.</p>
   */
  architecture?: string;

  /**
   * <p>The image hash of the Amazon ECR container image.</p>
   */
  imageHash: string | undefined;

  /**
   * <p>The registry for the Amazon ECR container image.</p>
   */
  registry: string | undefined;

  /**
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
  JAVA_8: "JAVA_8",
  JAVA_8_AL2: "JAVA_8_AL2",
  NODEJS: "NODEJS",
  NODEJS_12_X: "NODEJS_12_X",
  NODEJS_14_X: "NODEJS_14_X",
  NODEJS_16_X: "NODEJS_16_X",
  NODEJS_18_X: "NODEJS_18_X",
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
   * <p>A list of VPC subnet IDs.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The VPC security groups and subnets that are attached to an AWS Lambda function. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html">VPC Settings</a>.</p>
   */
  securityGroupIds?: string[];

  /**
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
   * <p>The name of the AWS Lambda function.</p>
   */
  functionName: string | undefined;

  /**
   * <p>The runtime environment for the AWS Lambda function.</p>
   */
  runtime: Runtime | string | undefined;

  /**
   * <p>The SHA256 hash of the AWS Lambda function's deployment package.</p>
   */
  codeSha256: string | undefined;

  /**
   * <p>The version of the AWS Lambda function.</p>
   */
  version: string | undefined;

  /**
   * <p>The AWS Lambda function's execution role.</p>
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The AWS Lambda function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">
   *          layers</a>. A Lambda function can have up to five layers.</p>
   */
  layers?: string[];

  /**
   * <p>The AWS Lambda function's networking configuration.</p>
   */
  vpcConfig?: LambdaVpcConfig;

  /**
   * <p>The type of deployment package. Set to <code>Image</code> for container image and set <code>Zip</code> for .zip file archive.</p>
   */
  packageType?: PackageType | string;

  /**
   * <p>The instruction set architecture that the AWS Lambda function supports. Architecture is a string array with one of the
   *          valid values. The default architecture value is <code>x86_64</code>.</p>
   */
  architectures?: (Architecture | string)[];

  /**
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
   * <p>The Amazon Web Services account ID.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The status of Amazon Inspector for the account.</p>
   */
  status?: Status | string;

  /**
   * <p>An object detailing which resources Amazon Inspector is enabled to scan for the account.</p>
   */
  resourceStatus?: ResourceStatus;

  /**
   * <p>The error code explaining why the account failed to enable Amazon Inspector.</p>
   */
  errorCode: ErrorCode | string | undefined;

  /**
   * <p>The error message received when the account failed to enable Amazon Inspector.</p>
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchGetAccountStatusResponse {
  /**
   * <p>An array of objects that provide details on the status of Amazon Inspector for each of the requested accounts.</p>
   */
  accounts: AccountState[] | undefined;

  /**
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
export interface BatchGetFreeTrialInfoRequest {
  /**
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
   * <p>The type of scan covered by the Amazon Inspector free trail.</p>
   */
  type: FreeTrialType | string | undefined;

  /**
   * <p>The date and time that the Amazon Inspector free trail started for a given account.</p>
   */
  start: Date | undefined;

  /**
   * <p>The date and time that the Amazon Inspector free trail ends for a given account.</p>
   */
  end: Date | undefined;

  /**
   * <p>The order to sort results by.</p>
   */
  status: FreeTrialStatus | string | undefined;
}

/**
 * @public
 * <p>Information about the Amazon Inspector free trial for an account.</p>
 */
export interface FreeTrialAccountInfo {
  /**
   * <p>The account associated with the Amazon Inspector free trial information.</p>
   */
  accountId: string | undefined;

  /**
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
   * <p>The account associated with the Amazon Inspector free trial information.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The error code.</p>
   */
  code: FreeTrialInfoErrorCode | string | undefined;

  /**
   * <p>The error message returned.</p>
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
   */
  accounts: FreeTrialAccountInfo[] | undefined;

  /**
   * <p>An array of objects detailing any accounts that free trial data could not be returned for.</p>
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
   * <p>The unique identifier for the Amazon Web Services account of the organization member</p>
   */
  accountId: string | undefined;

  /**
   * <p>The state of Amazon Inspector deep inspection in the member account.</p>
   */
  status?: Ec2DeepInspectionStatus | string;

  /**
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
   * <p>The unique identifier for the Amazon Web Services account of the organization member that failed to activate Amazon Inspector deep inspection.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The status of EC2 scanning in the account that failed to activate Amazon Inspector deep inspection.</p>
   */
  ec2ScanStatus?: Status | string;

  /**
   * <p>The error message explaining why the account failed to activate Amazon Inspector deep inspection.</p>
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
   */
  accountIds?: MemberAccountEc2DeepInspectionStatusState[];

  /**
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
   * <p>The unique identifier for the Amazon Web Services account of the organization member.</p>
   */
  accountId: string | undefined;

  /**
   * <p>Whether Amazon Inspector deep inspection is active in the account.  If <code>TRUE</code> Amazon Inspector deep inspection is active, if <code>FALSE</code> it is not active.</p>
   */
  activateDeepInspection: boolean | undefined;
}

/**
 * @public
 */
export interface BatchUpdateMemberEc2DeepInspectionStatusRequest {
  /**
   * <p>The unique identifiers for the Amazon Web Services accounts to change Amazon Inspector deep inspection status for.</p>
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
   */
  accountIds?: MemberAccountEc2DeepInspectionStatusState[];

  /**
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
   * <p>The ID of the report to be canceled.</p>
   */
  reportId: string | undefined;
}

/**
 * @public
 */
export interface CancelFindingsReportResponse {
  /**
   * <p>The ID of the canceled report.</p>
   */
  reportId: string | undefined;
}

/**
 * @public
 * <p>The Cybersecurity and Infrastructure Security Agency (CISA) details for a specific vulnerability.</p>
 */
export interface CisaData {
  /**
   * <p>The date and time CISA added this vulnerability to their catalogue.</p>
   */
  dateAdded?: Date;

  /**
   * <p>The date and time CISA expects a fix to have been provided vulnerability.</p>
   */
  dateDue?: Date;

  /**
   * <p>The remediation action recommended by CISA for this vulnerability.</p>
   */
  action?: string;
}

/**
 * @public
 * <p>A conflict occurred.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the conflicting resource.</p>
   */
  resourceId: string | undefined;

  /**
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
   * <p>The number of resources.</p>
   */
  count?: number;

  /**
   * <p>The key associated with this group</p>
   */
  groupKey?: GroupKey | string;
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
   * <p>The operator to compare strings on.</p>
   */
  comparison: CoverageStringComparison | string | undefined;

  /**
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
   * <p>The operator to compare coverage on.</p>
   */
  comparison: CoverageMapComparison | string | undefined;

  /**
   * <p>The tag key associated with the coverage map filter.</p>
   */
  key: string | undefined;

  /**
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
   * <p>The scan status code to filter on.</p>
   */
  scanStatusCode?: CoverageStringFilter[];

  /**
   * <p>The scan status reason to filter on.</p>
   */
  scanStatusReason?: CoverageStringFilter[];

  /**
   * <p>An array of Amazon Web Services account IDs to return coverage statistics for.</p>
   */
  accountId?: CoverageStringFilter[];

  /**
   * <p>An array of Amazon Web Services resource IDs to return coverage statistics for.</p>
   */
  resourceId?: CoverageStringFilter[];

  /**
   * <p>An array of Amazon Web Services resource types to return coverage statistics for. The values can be <code>AWS_EC2_INSTANCE</code> or <code>AWS_ECR_REPOSITORY</code>.</p>
   */
  resourceType?: CoverageStringFilter[];

  /**
   * <p>An array of Amazon Inspector scan types to return coverage statistics for.</p>
   */
  scanType?: CoverageStringFilter[];

  /**
   * <p>The Amazon ECR repository name to filter on.</p>
   */
  ecrRepositoryName?: CoverageStringFilter[];

  /**
   * <p>The Amazon ECR image tags to filter on.</p>
   */
  ecrImageTags?: CoverageStringFilter[];

  /**
   * <p>The Amazon EC2 instance tags to filter on.</p>
   */
  ec2InstanceTags?: CoverageMapFilter[];

  /**
   * <p>Returns coverage statistics for AWS Lambda functions filtered by function names.</p>
   */
  lambdaFunctionName?: CoverageStringFilter[];

  /**
   * <p>Returns coverage statistics for AWS Lambda functions filtered by tag.</p>
   */
  lambdaFunctionTags?: CoverageMapFilter[];

  /**
   * <p>Returns coverage statistics for AWS Lambda functions filtered by runtime.</p>
   */
  lambdaFunctionRuntime?: CoverageStringFilter[];
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
   * <p>The tags attached to the instance.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) used to launch the instance.</p>
   */
  amiId?: string;

  /**
   * <p>The platform of the instance.</p>
   */
  platform?: Ec2Platform | string;
}

/**
 * @public
 * <p>Information on the Amazon ECR image metadata associated with a finding.</p>
 */
export interface EcrContainerImageMetadata {
  /**
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
   * <p>The name of the Amazon ECR repository.</p>
   */
  name?: string;

  /**
   * <p>The frequency of scans.</p>
   */
  scanFrequency?: EcrScanFrequency | string;
}

/**
 * @public
 * <p>The AWS Lambda function metadata.</p>
 */
export interface LambdaFunctionMetadata {
  /**
   * <p>The resource tags on an AWS Lambda function.</p>
   */
  functionTags?: Record<string, string>;

  /**
   * <p>The layers for an AWS Lambda function. A Lambda function can have up to five layers.</p>
   */
  layers?: string[];

  /**
   * <p>The name of a function.</p>
   */
  functionName?: string;

  /**
   * <p>An AWS Lambda function's runtime.</p>
   */
  runtime?: Runtime | string;
}

/**
 * @public
 * <p>An object that contains details about the metadata for an Amazon ECR resource.</p>
 */
export interface ResourceScanMetadata {
  /**
   * <p>An object that contains details about the repository an Amazon ECR image resides in.</p>
   */
  ecrRepository?: EcrRepositoryMetadata;

  /**
   * <p>An object that contains details about the container metadata for an Amazon ECR image.</p>
   */
  ecrImage?: EcrContainerImageMetadata;

  /**
   * <p>An object that contains metadata details for an Amazon EC2 instance.</p>
   */
  ec2?: Ec2Metadata;

  /**
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
   * <p>The status code of the scan.</p>
   */
  statusCode: ScanStatusCode | string | undefined;

  /**
   * <p>The reason for the scan.</p>
   */
  reason: ScanStatusReason | string | undefined;
}

/**
 * @public
 * @enum
 */
export const ScanType = {
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
   * <p>The type of the covered resource.</p>
   */
  resourceType: CoverageResourceType | string | undefined;

  /**
   * <p>The ID of the covered resource.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the covered resource.</p>
   */
  accountId: string | undefined;

  /**
   * <p>The Amazon Inspector scan type covering the resource.</p>
   */
  scanType: ScanType | string | undefined;

  /**
   * <p>The status of the scan covering the resource.</p>
   */
  scanStatus?: ScanStatus;

  /**
   * <p>An object that contains details about the metadata.</p>
   */
  resourceMetadata?: ResourceScanMetadata;
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
   * <p>A timestamp representing the start of the time period filtered on.</p>
   */
  startInclusive?: Date;

  /**
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
   * <p>The highest number to be included in the filter.</p>
   */
  upperInclusive?: number;

  /**
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
   * <p>The port number the port range begins at.</p>
   */
  beginInclusive?: number;

  /**
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
   * <p>An object that contains details on the name of the package to filter on.</p>
   */
  name?: StringFilter;

  /**
   * <p>The package version to filter on.</p>
   */
  version?: StringFilter;

  /**
   * <p>An object that contains details on the package epoch to filter on.</p>
   */
  epoch?: NumberFilter;

  /**
   * <p>An object that contains details on the package release to filter on.</p>
   */
  release?: StringFilter;

  /**
   * <p>An object that contains details on the package architecture type to filter on.</p>
   */
  architecture?: StringFilter;

  /**
   * <p>An object that contains details on the source layer hash to filter on.</p>
   */
  sourceLayerHash?: StringFilter;

  /**
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
   * <p>Details on the finding ARNs used to filter findings.</p>
   */
  findingArn?: StringFilter[];

  /**
   * <p>Details of the Amazon Web Services account IDs used to filter findings.</p>
   */
  awsAccountId?: StringFilter[];

  /**
   * <p>Details on the finding types used to filter findings.</p>
   */
  findingType?: StringFilter[];

  /**
   * <p>Details on the severity used to filter findings.</p>
   */
  severity?: StringFilter[];

  /**
   * <p>Details on the date and time a finding was first seen used to filter findings.</p>
   */
  firstObservedAt?: DateFilter[];

  /**
   * <p>Details on the date and time a finding was last seen used to filter findings.</p>
   */
  lastObservedAt?: DateFilter[];

  /**
   * <p>Details on the date and time a finding was last updated at used to filter findings.</p>
   */
  updatedAt?: DateFilter[];

  /**
   * <p>Details on the finding status types used to filter findings.</p>
   */
  findingStatus?: StringFilter[];

  /**
   * <p>Details on the finding title used to filter findings.</p>
   */
  title?: StringFilter[];

  /**
   * <p>The Amazon Inspector score to filter on.</p>
   */
  inspectorScore?: NumberFilter[];

  /**
   * <p>Details on the resource types used to filter findings.</p>
   */
  resourceType?: StringFilter[];

  /**
   * <p>Details on the resource IDs used to filter findings.</p>
   */
  resourceId?: StringFilter[];

  /**
   * <p>Details on the resource tags used to filter findings.</p>
   */
  resourceTags?: MapFilter[];

  /**
   * <p>Details of the Amazon EC2 instance image IDs used to filter findings.</p>
   */
  ec2InstanceImageId?: StringFilter[];

  /**
   * <p>Details of the Amazon EC2 instance VPC IDs used to filter findings.</p>
   */
  ec2InstanceVpcId?: StringFilter[];

  /**
   * <p>Details of the Amazon EC2 instance subnet IDs used to filter findings.</p>
   */
  ec2InstanceSubnetId?: StringFilter[];

  /**
   * <p>Details on the Amazon ECR image push date and time used to filter findings.</p>
   */
  ecrImagePushedAt?: DateFilter[];

  /**
   * <p>Details of the Amazon ECR image architecture types used to filter findings.</p>
   */
  ecrImageArchitecture?: StringFilter[];

  /**
   * <p>Details on the Amazon ECR registry used to filter findings.</p>
   */
  ecrImageRegistry?: StringFilter[];

  /**
   * <p>Details on the name of the Amazon ECR repository used to filter findings.</p>
   */
  ecrImageRepositoryName?: StringFilter[];

  /**
   * <p>The tags attached to the Amazon ECR container image.</p>
   */
  ecrImageTags?: StringFilter[];

  /**
   * <p>Details of the Amazon ECR image hashes used to filter findings.</p>
   */
  ecrImageHash?: StringFilter[];

  /**
   * <p>Details on the port ranges used to filter findings.</p>
   */
  portRange?: PortRangeFilter[];

  /**
   * <p>Details on the ingress source addresses used to filter findings.</p>
   */
  networkProtocol?: StringFilter[];

  /**
   * <p>Details of the component IDs used to filter findings.</p>
   */
  componentId?: StringFilter[];

  /**
   * <p>Details of the component types used to filter findings.</p>
   */
  componentType?: StringFilter[];

  /**
   * <p>Details on the vulnerability ID used to filter findings.</p>
   */
  vulnerabilityId?: StringFilter[];

  /**
   * <p>Details on the vulnerability type used to filter findings.</p>
   */
  vulnerabilitySource?: StringFilter[];

  /**
   * <p>Details on the vendor severity used to filter findings.</p>
   */
  vendorSeverity?: StringFilter[];

  /**
   * <p>Details on the vulnerable packages used to filter findings.</p>
   */
  vulnerablePackages?: PackageFilter[];

  /**
   * <p>Details on the related vulnerabilities used to filter findings.</p>
   */
  relatedVulnerabilities?: StringFilter[];

  /**
   * <p>Details on whether a fix is available through a version update. This value can be <code>YES</code>, <code>NO</code>, or <code>PARTIAL</code>.  A <code>PARTIAL</code> fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions.</p>
   */
  fixAvailable?: StringFilter[];

  /**
   * <p>Filters the list of AWS Lambda functions by the name of the function.</p>
   */
  lambdaFunctionName?: StringFilter[];

  /**
   * <p>Filters the list of AWS Lambda functions by the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">
   *          layers</a>. A Lambda function can have up to five layers.</p>
   */
  lambdaFunctionLayers?: StringFilter[];

  /**
   * <p>Filters the list of AWS Lambda functions by the runtime environment for the Lambda function.</p>
   */
  lambdaFunctionRuntime?: StringFilter[];

  /**
   * <p>Filters the list of AWS Lambda functions by the date and time that a user last updated the configuration, in <a href="https://www.iso.org/iso-8601-date-and-time-format.html">ISO 8601 format</a>
   *          </p>
   */
  lambdaFunctionLastModifiedAt?: DateFilter[];

  /**
   * <p>Filters the list of AWS Lambda functions by execution role.</p>
   */
  lambdaFunctionExecutionRoleArn?: StringFilter[];

  /**
   * <p>Filters the list of AWS Lambda findings by the availability of exploits.</p>
   */
  exploitAvailable?: StringFilter[];
}

/**
 * @public
 */
export interface CreateFilterRequest {
  /**
   * <p>Defines the action that is to be applied to the findings that match the filter.</p>
   */
  action: FilterAction | string | undefined;

  /**
   * <p>A description of the filter.</p>
   */
  description?: string;

  /**
   * <p>Defines the criteria to be used in the filter for querying findings.</p>
   */
  filterCriteria: FilterCriteria | undefined;

  /**
   * <p>The name of the filter. Minimum length of 3. Maximum length of 64. Valid characters
   *          include alphanumeric characters, dot (.), underscore (_), and dash (-). Spaces are not
   *          allowed.</p>
   */
  name: string | undefined;

  /**
   * <p>A list of tags for the filter.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The reason for creating the filter.</p>
   */
  reason?: string;
}

/**
 * @public
 */
export interface CreateFilterResponse {
  /**
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
   * <p>The name of the Amazon S3 bucket to export findings to.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The prefix of the Amazon S3 bucket used to export findings.</p>
   */
  keyPrefix?: string;

  /**
   * <p>The ARN of the KMS key used to encrypt data when exporting findings.</p>
   */
  kmsKeyArn: string | undefined;
}

/**
 * @public
 */
export interface CreateFindingsReportRequest {
  /**
   * <p>The filter criteria to apply to the results of the finding report.</p>
   */
  filterCriteria?: FilterCriteria;

  /**
   * <p>The format to generate the report in.</p>
   */
  reportFormat: ReportFormat | string | undefined;

  /**
   * <p>The Amazon S3 export destination for the report.</p>
   */
  s3Destination: Destination | undefined;
}

/**
 * @public
 */
export interface CreateFindingsReportResponse {
  /**
   * <p>The ID of the report.</p>
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
   * <p>The CVSS v2 base score for the vulnerability.</p>
   */
  baseScore?: number;

  /**
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
   * <p>The CVSS v3 base score for the vulnerability.</p>
   */
  baseScore?: number;

  /**
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
   * <p>The base CVSS score used for the finding.</p>
   */
  baseScore: number | undefined;

  /**
   * <p>The vector string of the CVSS score.</p>
   */
  scoringVector: string | undefined;

  /**
   * <p>The version of CVSS used for the score.</p>
   */
  version: string | undefined;

  /**
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
   * <p>The metric used to adjust the CVSS score.</p>
   */
  metric: string | undefined;

  /**
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
   * <p>The source for the CVSS score.</p>
   */
  scoreSource: string | undefined;

  /**
   * <p>The source of the CVSS data.</p>
   */
  cvssSource?: string;

  /**
   * <p>The CVSS version used in scoring.</p>
   */
  version: string | undefined;

  /**
   * <p>The CVSS score.</p>
   */
  score: number | undefined;

  /**
   * <p>The vector for the CVSS score.</p>
   */
  scoringVector: string | undefined;

  /**
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
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for your organization.</p>
   */
  accountId?: string;

  /**
   * <p>The status of the Amazon Inspector delegated administrator.</p>
   */
  relationshipStatus?: RelationshipStatus | string;
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
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for your organization.</p>
   */
  accountId?: string;

  /**
   * <p>The status of the Amazon Inspector delegated administrator.</p>
   */
  status?: DelegatedAdminStatus | string;
}

/**
 * @public
 */
export interface DeleteFilterRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the filter to be deleted.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFilterResponse {
  /**
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
   * <p>The scan types are automatically enabled for new members of your organization.</p>
   */
  autoEnable?: AutoEnable;

  /**
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
   */
  accountIds?: string[];

  /**
   * <p>The resource scan types you want to disable.</p>
   */
  resourceTypes?: (ResourceScanType | string)[];
}

/**
 * @public
 */
export interface DisableResponse {
  /**
   * <p>Information on the accounts that have had Amazon Inspector scans successfully disabled. Details are
   *          provided for each account.</p>
   */
  accounts: Account[] | undefined;

  /**
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
   * <p>The Amazon Web Services account ID of the current Amazon Inspector delegated administrator.</p>
   */
  delegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisableDelegatedAdminAccountResponse {
  /**
   * <p>The Amazon Web Services account ID of the successfully disabled delegated administrator.</p>
   */
  delegatedAdminAccountId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberRequest {
  /**
   * <p>The Amazon Web Services account ID of the member account to disassociate.</p>
   */
  accountId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateMemberResponse {
  /**
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
   * <p>The ECR automated re-scan duration defines how long an ECR image will be actively scanned by Amazon Inspector. When the number of days since an image was last pushed exceeds the automated re-scan duration the monitoring state of that image becomes <code>inactive</code> and all associated findings are scheduled for closure.</p>
   */
  rescanDuration: EcrRescanDuration | string | undefined;
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
   * <p>The ECR automated re-scan duration defines how long an ECR image will be actively scanned by Amazon Inspector. When the number of days since an image was last pushed exceeds the automated re-scan duration the monitoring state of that image becomes <code>inactive</code> and all associated findings are scheduled for closure.</p>
   */
  rescanDuration?: EcrRescanDuration | string;

  /**
   * <p>The status of changes to the ECR automated re-scan duration.</p>
   */
  status?: EcrRescanDurationStatus | string;

  /**
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
   * <p>An object that contains details about the state of the ECR automated re-scan setting.</p>
   */
  rescanDurationState?: EcrRescanDurationState;
}

/**
 * @public
 */
export interface EnableRequest {
  /**
   * <p>A list of account IDs you want to enable Amazon Inspector scans for.</p>
   */
  accountIds?: string[];

  /**
   * <p>The resource scan types you want to enable.</p>
   */
  resourceTypes: (ResourceScanType | string)[] | undefined;

  /**
   * <p>The idempotency token for the request.</p>
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
   */
  accounts: Account[] | undefined;

  /**
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
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator.</p>
   */
  delegatedAdminAccountId: string | undefined;

  /**
   * <p>The idempotency token for the request.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface EnableDelegatedAdminAccountResponse {
  /**
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
   * <p>The Exploit Prediction Scoring System (EPSS) score.</p>
   */
  score?: number;
}

/**
 * @public
 * <p>The details of an exploit available for a finding discovered in your environment.</p>
 */
export interface ExploitabilityDetails {
  /**
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
 * <p>Contains information on when this exploit was observed.</p>
 */
export interface ExploitObserved {
  /**
   * <p>The date an time when the exploit was last seen.</p>
   */
  lastSeen?: Date;

  /**
   * <p>The date an time when the exploit was first seen.</p>
   */
  firstSeen?: Date;
}

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
   * <p>The Amazon Resource Number (ARN) associated with this filter.</p>
   */
  arn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the account that created the filter.</p>
   */
  ownerId: string | undefined;

  /**
   * <p>The name of the filter.</p>
   */
  name: string | undefined;

  /**
   * <p>Details on the filter criteria associated with this filter.</p>
   */
  criteria: FilterCriteria | undefined;

  /**
   * <p>The action that is to be applied to the findings that match the filter.</p>
   */
  action: FilterAction | string | undefined;

  /**
   * <p>The date and time this filter was created at.</p>
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time the filter was last updated at.</p>
   */
  updatedAt: Date | undefined;

  /**
   * <p>A description of the filter.</p>
   */
  description?: string;

  /**
   * <p>The reason for the filter.</p>
   */
  reason?: string;

  /**
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
   * <p>The component ID.</p>
   */
  componentId: string | undefined;

  /**
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
   * <p>The beginning port in a port range.</p>
   */
  begin: number | undefined;

  /**
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
   * <p>An object that contains details about the open port range associated with a finding.</p>
   */
  openPortRange: PortRange | undefined;

  /**
   * <p>The protocol associated with a finding.</p>
   */
  protocol: NetworkProtocol | string | undefined;

  /**
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
   * <p>The name of the vulnerable package.</p>
   */
  name: string | undefined;

  /**
   * <p>The version of the vulnerable package.</p>
   */
  version: string | undefined;

  /**
   * <p>The source layer hash of the vulnerable package.</p>
   */
  sourceLayerHash?: string;

  /**
   * <p>The epoch of the vulnerable package.</p>
   */
  epoch?: number;

  /**
   * <p>The release of the vulnerable package.</p>
   */
  release?: string;

  /**
   * <p>The architecture of the vulnerable package.</p>
   */
  arch?: string;

  /**
   * <p>The package manager of the vulnerable package.</p>
   */
  packageManager?: PackageManager | string;

  /**
   * <p>The file path of the vulnerable package.</p>
   */
  filePath?: string;

  /**
   * <p>The version of the package that contains the vulnerability fix.</p>
   */
  fixedInVersion?: string;

  /**
   * <p>The code to run in your environment to update packages with a fix available.</p>
   */
  remediation?: string;

  /**
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
   * <p>The ID given to this vulnerability.</p>
   */
  vulnerabilityId: string | undefined;

  /**
   * <p>The packages impacted by this vulnerability.</p>
   */
  vulnerablePackages?: VulnerablePackage[];

  /**
   * <p>The source of the vulnerability information.</p>
   */
  source: string | undefined;

  /**
   * <p>An object that contains details about the CVSS score of a finding.</p>
   */
  cvss?: CvssScore[];

  /**
   * <p>One or more vulnerabilities related to the one identified in this finding.</p>
   */
  relatedVulnerabilities?: string[];

  /**
   * <p>A URL to the source of the vulnerability information.</p>
   */
  sourceUrl?: string;

  /**
   * <p>The severity the vendor has given to this vulnerability type.</p>
   */
  vendorSeverity?: string;

  /**
   * <p>The date and time that this vulnerability was first added to the vendor's database.</p>
   */
  vendorCreatedAt?: Date;

  /**
   * <p>The date and time the vendor last updated this vulnerability in their database.</p>
   */
  vendorUpdatedAt?: Date;

  /**
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
   * <p>The recommended course of action to remediate the finding.</p>
   */
  text?: string;

  /**
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
   * <p>An object that contains details about the Amazon EC2 instance involved in the finding.</p>
   */
  awsEc2Instance?: AwsEc2InstanceDetails;

  /**
   * <p>An object that contains details about the Amazon ECR container image involved in the finding.</p>
   */
  awsEcrContainerImage?: AwsEcrContainerImageDetails;

  /**
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
   * <p>The type of resource.</p>
   */
  type: ResourceType | string | undefined;

  /**
   * <p>The ID of the resource.</p>
   */
  id: string | undefined;

  /**
   * <p>The partition of the resource.</p>
   */
  partition?: string;

  /**
   * <p>The Amazon Web Services Region the impacted resource is located in.</p>
   */
  region?: string;

  /**
   * <p>The tags attached to the resource.</p>
   */
  tags?: Record<string, string>;

  /**
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
   * <p>The Amazon Resource Number (ARN) of the finding.</p>
   */
  findingArn: string | undefined;

  /**
   * <p>The Amazon Web Services account ID associated with the finding.</p>
   */
  awsAccountId: string | undefined;

  /**
   * <p>The type of the finding.</p>
   */
  type: FindingType | string | undefined;

  /**
   * <p>The description of the finding.</p>
   */
  description: string | undefined;

  /**
   * <p>The title of the finding.</p>
   */
  title?: string;

  /**
   * <p>An object that contains the details about how to remediate a finding.</p>
   */
  remediation: Remediation | undefined;

  /**
   * <p>The severity of the finding.</p>
   */
  severity: Severity | string | undefined;

  /**
   * <p>The date and time that the finding was first observed.</p>
   */
  firstObservedAt: Date | undefined;

  /**
   * <p>The date and time that the finding was last observed.</p>
   */
  lastObservedAt: Date | undefined;

  /**
   * <p>The date and time the finding was last updated at.</p>
   */
  updatedAt?: Date;

  /**
   * <p>The status of the finding.</p>
   */
  status: FindingStatus | string | undefined;

  /**
   * <p>Contains information on the resources involved in a finding.</p>
   */
  resources: Resource[] | undefined;

  /**
   * <p>The Amazon Inspector score given to the finding.</p>
   */
  inspectorScore?: number;

  /**
   * <p>An object that contains details of the Amazon Inspector score.</p>
   */
  inspectorScoreDetails?: InspectorScoreDetails;

  /**
   * <p>An object that contains the details of a network reachability finding.</p>
   */
  networkReachabilityDetails?: NetworkReachabilityDetails;

  /**
   * <p>An object that contains the details of a package vulnerability finding.</p>
   */
  packageVulnerabilityDetails?: PackageVulnerabilityDetails;

  /**
   * <p>Details on whether a fix is available through a version update. This value can be <code>YES</code>, <code>NO</code>, or <code>PARTIAL</code>.  A <code>PARTIAL</code> fix means that some, but not all, of the packages identified in the finding have fixes available through updated versions.</p>
   */
  fixAvailable?: FixAvailable | string;

  /**
   * <p>If a finding discovered in your environment has an exploit available.</p>
   */
  exploitAvailable?: ExploitAvailable | string;

  /**
   * <p>The details of an exploit available for a finding discovered in your environment.</p>
   */
  exploitabilityDetails?: ExploitabilityDetails;
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
   * <p>The Amazon Inspector deep inspection custom paths for your account.</p>
   */
  packagePaths?: string[];

  /**
   * <p>The Amazon Inspector deep inspection custom paths for your organization.</p>
   */
  orgPackagePaths?: string[];

  /**
   * <p>The activation status of Amazon Inspector deep inspection in your account.</p>
   */
  status?: Ec2DeepInspectionStatus | string;

  /**
   * <p>An error message explaining why Amazon Inspector deep inspection configurations could not be retrieved for your account.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface GetFindingsReportStatusRequest {
  /**
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
   * <p>The ID of the report.</p>
   */
  reportId?: string;

  /**
   * <p>The status of the report.</p>
   */
  status?: ExternalReportStatus | string;

  /**
   * <p>The error code of the report.</p>
   */
  errorCode?: ReportingErrorCode | string;

  /**
   * <p>The error message of the report.</p>
   */
  errorMessage?: string;

  /**
   * <p>The destination of the report.</p>
   */
  destination?: Destination;

  /**
   * <p>The filter criteria associated with the report.</p>
   */
  filterCriteria?: FilterCriteria;
}

/**
 * @public
 */
export interface GetMemberRequest {
  /**
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
   * <p>The Amazon Web Services account ID of the member account.</p>
   */
  accountId?: string;

  /**
   * <p>The status of the member account.</p>
   */
  relationshipStatus?: RelationshipStatus | string;

  /**
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator for this member account.</p>
   */
  delegatedAdminAccountId?: string;

  /**
   * <p>A timestamp showing when the status of this member was last updated.</p>
   */
  updatedAt?: Date;
}

/**
 * @public
 */
export interface GetMemberResponse {
  /**
   * <p>Details of the retrieved member account.</p>
   */
  member?: Member;
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
   */
  service?: Service | string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
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
   * <p>The services that the permissions allow an account to perform the given operations for.</p>
   */
  service: Service | string | undefined;

  /**
   * <p>The operations that can be performed with the given permissions.</p>
   */
  operation: Operation | string | undefined;
}

/**
 * @public
 */
export interface ListAccountPermissionsResponse {
  /**
   * <p>Contains details on the permissions an account has to configure Amazon Inspector.</p>
   */
  permissions: Permission[] | undefined;

  /**
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
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;

  /**
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
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;

  /**
   * <p>An object that contains details on the covered resources in your environment.</p>
   */
  coveredResources?: CoveredResource[];
}

/**
 * @public
 */
export interface ListCoverageStatisticsRequest {
  /**
   * <p>An object that contains details on the filters to apply to the coverage data for your
   *          environment.</p>
   */
  filterCriteria?: CoverageFilterCriteria;

  /**
   * <p>The value to group the results by.</p>
   */
  groupBy?: GroupKey | string;

  /**
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
   * <p>An array with the number for each group.</p>
   */
  countsByGroup?: Counts[];

  /**
   * <p>The total number for all groups.</p>
   */
  totalCounts: number | undefined;

  /**
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
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
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
export interface ListDelegatedAdminAccountsResponse {
  /**
   * <p>Details of the Amazon Inspector delegated administrator of your organization.</p>
   */
  delegatedAdminAccounts?: DelegatedAdminAccount[];

  /**
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
   * <p>The Amazon resource number (ARN) of the filter.</p>
   */
  arns?: string[];

  /**
   * <p>The action the filter applies to matched findings.</p>
   */
  action?: FilterAction | string;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListFiltersResponse {
  /**
   * <p>Contains details on the filters associated with your account.</p>
   */
  filters: Filter[] | undefined;

  /**
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
   * <p>The type of the aggregation request.</p>
   */
  aggregationType: AggregationType | string | undefined;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>The Amazon Web Services account IDs to retrieve finding aggregation data for.</p>
   */
  accountIds?: StringFilter[];

  /**
   * <p>Details of the aggregation request that is used to filter your aggregation results.</p>
   */
  aggregationRequest?: AggregationRequest;
}

/**
 * @public
 */
export interface ListFindingAggregationsResponse {
  /**
   * <p>The type of aggregation to perform.</p>
   */
  aggregationType: AggregationType | string | undefined;

  /**
   * <p>Objects that contain the results of an aggregation operation.</p>
   */
  responses?: AggregationResponse[];

  /**
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
   * <p>The finding detail field by which results are sorted.</p>
   */
  field: SortField | string | undefined;

  /**
   * <p>The order by which findings are sorted.</p>
   */
  sortOrder: SortOrder | string | undefined;
}

/**
 * @public
 */
export interface ListFindingsRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;

  /**
   * <p>Details on the filters to apply to your finding results.</p>
   */
  filterCriteria?: FilterCriteria;

  /**
   * <p>Details on the sort criteria to apply to your finding results.</p>
   */
  sortCriteria?: SortCriteria;
}

/**
 * @public
 */
export interface ListFindingsResponse {
  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;

  /**
   * <p>Contains details on the findings in your environment.</p>
   */
  findings?: Finding[];
}

/**
 * @public
 */
export interface ListMembersRequest {
  /**
   * <p>Specifies whether to list only currently associated members if <code>True</code> or to
   *          list all members within the organization if <code>False</code>.</p>
   */
  onlyAssociated?: boolean;

  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
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
export interface ListMembersResponse {
  /**
   * <p>An object that contains details for each member account.</p>
   */
  members?: Member[];

  /**
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
   * <p>The Amazon resource number (ARN) of the resource to list tags of.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListUsageTotalsRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   */
  maxResults?: number;

  /**
   * <p>A token to use for paginating results that are returned in the response. Set the value
   *          of this parameter to null for the first request to a list action. For subsequent calls, use
   *          the <code>NextToken</code> value returned from the previous request to continue listing
   *          results after the first page.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The type scan.</p>
   */
  type?: UsageType | string;

  /**
   * <p>The total of usage.</p>
   */
  total?: number;

  /**
   * <p>The estimated monthly cost of Amazon Inspector.</p>
   */
  estimatedMonthlyCost?: number;

  /**
   * <p>The currency type used when calculating usage data.</p>
   */
  currency?: Currency | string;
}

/**
 * @public
 * <p>The total of usage for an account ID.</p>
 */
export interface UsageTotal {
  /**
   * <p>The account ID of the account that usage data was retrieved for.</p>
   */
  accountId?: string;

  /**
   * <p>An object representing the total usage for an account.</p>
   */
  usage?: Usage[];
}

/**
 * @public
 */
export interface ListUsageTotalsResponse {
  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   */
  nextToken?: string;

  /**
   * <p>An object with details on the total usage for the requested account.</p>
   */
  totals?: UsageTotal[];
}

/**
 * @public
 * <p>Details on the criteria used to define the filter for a vulnerability search.
 *       </p>
 */
export interface SearchVulnerabilitiesFilterCriteria {
  /**
   * <p>The IDs for specific vulnerabilities.</p>
   */
  vulnerabilityIds: string[] | undefined;
}

/**
 * @public
 */
export interface SearchVulnerabilitiesRequest {
  /**
   * <p>The criteria used to filter the results of a vulnerability search.</p>
   */
  filterCriteria: SearchVulnerabilitiesFilterCriteria | undefined;

  /**
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
   * <p>The ID for the specific vulnerability.</p>
   */
  id: string | undefined;

  /**
   * <p>The Common Weakness Enumeration (CWE) associated with the vulnerability.</p>
   */
  cwes?: string[];

  /**
   * <p>An object that contains the Cybersecurity and Infrastructure Security Agency (CISA) details for the vulnerability.</p>
   */
  cisaData?: CisaData;

  /**
   * <p>The source of the vulnerability information.</p>
   */
  source?: VulnerabilitySource | string;

  /**
   * <p>A description of the vulnerability.</p>
   */
  description?: string;

  /**
   * <p>An object that contains information about the Amazon Web Services Threat Intel Group (ATIG) details for the vulnerability.</p>
   */
  atigData?: AtigData;

  /**
   * <p>The severity assigned by the vendor.</p>
   */
  vendorSeverity?: string;

  /**
   * <p>An object that contains the Common Vulnerability Scoring System (CVSS) Version 3 details for the vulnerability.</p>
   */
  cvss3?: Cvss3;

  /**
   * <p>A list of related vulnerabilities.</p>
   */
  relatedVulnerabilities?: string[];

  /**
   * <p>An object that contains the Common Vulnerability Scoring System (CVSS) Version 2 details for the vulnerability.</p>
   */
  cvss2?: Cvss2;

  /**
   * <p>The date and time when the vendor created this vulnerability.</p>
   */
  vendorCreatedAt?: Date;

  /**
   * <p>The date and time when the vendor last updated this vulnerability.</p>
   */
  vendorUpdatedAt?: Date;

  /**
   * <p>A link to the official source material for this vulnerability.</p>
   */
  sourceUrl?: string;

  /**
   * <p>Links to various resources with more information on this vulnerability. </p>
   */
  referenceUrls?: string[];

  /**
   * <p>An object that contains details on when the exploit was observed.</p>
   */
  exploitObserved?: ExploitObserved;

  /**
   * <p>Platforms that the vulnerability can be detected on.</p>
   */
  detectionPlatforms?: string[];

  /**
   * <p>An object that contains the Exploit Prediction Scoring System (EPSS) score.</p>
   */
  epss?: Epss;
}

/**
 * @public
 */
export interface SearchVulnerabilitiesResponse {
  /**
   * <p>Details about the listed vulnerability.</p>
   */
  vulnerabilities: Vulnerability[] | undefined;

  /**
   * <p>The pagination parameter to be used on the next list operation to retrieve more items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to apply a tag to.</p>
   */
  resourceArn: string | undefined;

  /**
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
   * <p>The Amazon Resource Name (ARN) for the resource to remove tags from.</p>
   */
  resourceArn: string | undefined;

  /**
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
   * <p>Specify <code>TRUE</code> to activate Amazon Inspector deep inspection in your account, or <code>FALSE</code> to deactivate. Member accounts in an organization cannot deactivate deep inspection, instead the delegated administrator for the organization can deactivate a member account using <a href="https://docs.aws.amazon.com/inspector/v2/APIReference/API_BatchUpdateMemberEc2DeepInspectionStatus.html">BatchUpdateMemberEc2DeepInspectionStatus</a>.</p>
   */
  activateDeepInspection?: boolean;

  /**
   * <p>The Amazon Inspector deep inspection custom paths you are adding for your account.</p>
   */
  packagePaths?: string[];
}

/**
 * @public
 */
export interface UpdateEc2DeepInspectionConfigurationResponse {
  /**
   * <p>The current Amazon Inspector deep inspection custom paths for your account.</p>
   */
  packagePaths?: string[];

  /**
   * <p>The current Amazon Inspector deep inspection custom paths for the organization.</p>
   */
  orgPackagePaths?: string[];

  /**
   * <p>The status of Amazon Inspector deep inspection in your account.</p>
   */
  status?: Ec2DeepInspectionStatus | string;

  /**
   * <p>An error message explaining why new Amazon Inspector deep inspection custom paths could not be added.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 */
export interface UpdateFilterRequest {
  /**
   * <p>Specifies the action that is to be applied to the findings that match the filter.</p>
   */
  action?: FilterAction | string;

  /**
   * <p>A description of the filter.</p>
   */
  description?: string;

  /**
   * <p>Defines the criteria to be update in the filter.</p>
   */
  filterCriteria?: FilterCriteria;

  /**
   * <p>The name of the filter.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Number (ARN) of the filter to update.</p>
   */
  filterArn: string | undefined;

  /**
   * <p>The reason the filter was updated.</p>
   */
  reason?: string;
}

/**
 * @public
 */
export interface UpdateFilterResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the successfully updated filter.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Defines which scan types are enabled automatically for new members of your Amazon Inspector organization.</p>
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrganizationConfigurationResponse {
  /**
   * <p>The updated status of scan types automatically enabled for new members of your Amazon Inspector organization.</p>
   */
  autoEnable: AutoEnable | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationRequest {
  /**
   * <p>The Amazon Inspector deep inspection custom paths you are adding for your organization.</p>
   */
  orgPackagePaths: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateOrgEc2DeepInspectionConfigurationResponse {}
