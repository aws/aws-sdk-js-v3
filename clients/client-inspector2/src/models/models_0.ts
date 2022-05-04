// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { Inspector2ServiceException as __BaseException } from "./Inspector2ServiceException";

/**
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

export enum Status {
  DISABLED = "DISABLED",
  DISABLING = "DISABLING",
  ENABLED = "ENABLED",
  ENABLING = "ENABLING",
  SUSPENDED = "SUSPENDED",
  SUSPENDING = "SUSPENDING",
}

/**
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
}

export namespace ResourceStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceStatus): any => ({
    ...obj,
  });
}

/**
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

export namespace Account {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Account): any => ({
    ...obj,
  });
}

export enum AggregationFindingType {
  NETWORK_REACHABILITY = "NETWORK_REACHABILITY",
  PACKAGE_VULNERABILITY = "PACKAGE_VULNERABILITY",
}

export enum AggregationResourceType {
  AWS_EC2_INSTANCE = "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER_IMAGE = "AWS_ECR_CONTAINER_IMAGE",
}

export enum AccountSortBy {
  ALL = "ALL",
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
}

export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

/**
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

export namespace AccountAggregation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountAggregation): any => ({
    ...obj,
  });
}

/**
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

export namespace SeverityCounts {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SeverityCounts): any => ({
    ...obj,
  });
}

/**
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

export namespace AccountAggregationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountAggregationResponse): any => ({
    ...obj,
  });
}

export enum ErrorCode {
  ACCESS_DENIED = "ACCESS_DENIED",
  ALREADY_ENABLED = "ALREADY_ENABLED",
  DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS",
  DISASSOCIATE_ALL_MEMBERS = "DISASSOCIATE_ALL_MEMBERS",
  ENABLE_IN_PROGRESS = "ENABLE_IN_PROGRESS",
  EVENTBRIDGE_THROTTLED = "EVENTBRIDGE_THROTTLED",
  EVENTBRIDGE_UNAVAILABLE = "EVENTBRIDGE_UNAVAILABLE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",
  RESOURCE_SCAN_NOT_DISABLED = "RESOURCE_SCAN_NOT_DISABLED",
  SSM_THROTTLED = "SSM_THROTTLED",
  SSM_UNAVAILABLE = "SSM_UNAVAILABLE",
  SUSPEND_IN_PROGRESS = "SUSPEND_IN_PROGRESS",
}

/**
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

export namespace State {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: State): any => ({
    ...obj,
  });
}

/**
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
}

export namespace ResourceState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceState): any => ({
    ...obj,
  });
}

/**
 * <p>An object with details the status of an Amazon Web Services account within your Amazon Inspector environment</p>
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

export namespace AccountState {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccountState): any => ({
    ...obj,
  });
}

export enum StringComparison {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
  PREFIX = "PREFIX",
}

/**
 * <p>An object that describes the details of a string filter.</p>
 */
export interface StringFilter {
  /**
   * <p>The operator to use when comparing values in the filter</p>
   */
  comparison: StringComparison | string | undefined;

  /**
   * <p>The value to filter on.</p>
   */
  value: string | undefined;
}

export namespace StringFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringFilter): any => ({
    ...obj,
  });
}

export enum AmiSortBy {
  AFFECTED_INSTANCES = "AFFECTED_INSTANCES",
  ALL = "ALL",
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
}

/**
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

export namespace AmiAggregation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AmiAggregation): any => ({
    ...obj,
  });
}

export enum AwsEcrContainerSortBy {
  ALL = "ALL",
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
}

/**
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

export namespace AwsEcrContainerAggregation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcrContainerAggregation): any => ({
    ...obj,
  });
}

export enum MapComparison {
  EQUALS = "EQUALS",
}

/**
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

export namespace MapFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MapFilter): any => ({
    ...obj,
  });
}

export enum Ec2InstanceSortBy {
  ALL = "ALL",
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  NETWORK_FINDINGS = "NETWORK_FINDINGS",
}

/**
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

export namespace Ec2InstanceAggregation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ec2InstanceAggregation): any => ({
    ...obj,
  });
}

export enum FindingTypeSortBy {
  ALL = "ALL",
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
}

/**
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

export namespace FindingTypeAggregation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingTypeAggregation): any => ({
    ...obj,
  });
}

export enum ImageLayerSortBy {
  ALL = "ALL",
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
}

/**
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

export namespace ImageLayerAggregation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageLayerAggregation): any => ({
    ...obj,
  });
}

export enum PackageSortBy {
  ALL = "ALL",
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
}

/**
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

export namespace PackageAggregation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageAggregation): any => ({
    ...obj,
  });
}

export enum RepositorySortBy {
  AFFECTED_IMAGES = "AFFECTED_IMAGES",
  ALL = "ALL",
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
}

/**
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

export namespace RepositoryAggregation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryAggregation): any => ({
    ...obj,
  });
}

export enum TitleSortBy {
  ALL = "ALL",
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
}

/**
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

export namespace TitleAggregation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TitleAggregation): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about an aggregation request.</p>
 */
export type AggregationRequest =
  | AggregationRequest.AccountAggregationMember
  | AggregationRequest.AmiAggregationMember
  | AggregationRequest.AwsEcrContainerAggregationMember
  | AggregationRequest.Ec2InstanceAggregationMember
  | AggregationRequest.FindingTypeAggregationMember
  | AggregationRequest.ImageLayerAggregationMember
  | AggregationRequest.PackageAggregationMember
  | AggregationRequest.RepositoryAggregationMember
  | AggregationRequest.TitleAggregationMember
  | AggregationRequest.$UnknownMember;

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
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregationRequest): any => {
    if (obj.accountAggregation !== undefined)
      return { accountAggregation: AccountAggregation.filterSensitiveLog(obj.accountAggregation) };
    if (obj.amiAggregation !== undefined)
      return { amiAggregation: AmiAggregation.filterSensitiveLog(obj.amiAggregation) };
    if (obj.awsEcrContainerAggregation !== undefined)
      return {
        awsEcrContainerAggregation: AwsEcrContainerAggregation.filterSensitiveLog(obj.awsEcrContainerAggregation),
      };
    if (obj.ec2InstanceAggregation !== undefined)
      return { ec2InstanceAggregation: Ec2InstanceAggregation.filterSensitiveLog(obj.ec2InstanceAggregation) };
    if (obj.findingTypeAggregation !== undefined)
      return { findingTypeAggregation: FindingTypeAggregation.filterSensitiveLog(obj.findingTypeAggregation) };
    if (obj.imageLayerAggregation !== undefined)
      return { imageLayerAggregation: ImageLayerAggregation.filterSensitiveLog(obj.imageLayerAggregation) };
    if (obj.packageAggregation !== undefined)
      return { packageAggregation: PackageAggregation.filterSensitiveLog(obj.packageAggregation) };
    if (obj.repositoryAggregation !== undefined)
      return { repositoryAggregation: RepositoryAggregation.filterSensitiveLog(obj.repositoryAggregation) };
    if (obj.titleAggregation !== undefined)
      return { titleAggregation: TitleAggregation.filterSensitiveLog(obj.titleAggregation) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>A response that contains the results of a finding aggregation by AMI.</p>
 */
export interface AmiAggregationResponse {
  /**
   * <p>The ID of the AMI that findings were aggregated for.</p>
   */
  ami: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that the AMI belongs.</p>
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

export namespace AmiAggregationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AmiAggregationResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEcrContainerAggregationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcrContainerAggregationResponse): any => ({
    ...obj,
  });
}

/**
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
  instanceTags?: { [key: string]: string };

  /**
   * <p>The Amazon Web Services account the Amazon EC2 instance belongs to.</p>
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

export namespace Ec2InstanceAggregationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ec2InstanceAggregationResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace FindingTypeAggregationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindingTypeAggregationResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace ImageLayerAggregationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageLayerAggregationResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace PackageAggregationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageAggregationResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace RepositoryAggregationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RepositoryAggregationResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace TitleAggregationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TitleAggregationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that contains details about the results of an aggregation type.</p>
 */
export type AggregationResponse =
  | AggregationResponse.AccountAggregationMember
  | AggregationResponse.AmiAggregationMember
  | AggregationResponse.AwsEcrContainerAggregationMember
  | AggregationResponse.Ec2InstanceAggregationMember
  | AggregationResponse.FindingTypeAggregationMember
  | AggregationResponse.ImageLayerAggregationMember
  | AggregationResponse.PackageAggregationMember
  | AggregationResponse.RepositoryAggregationMember
  | AggregationResponse.TitleAggregationMember
  | AggregationResponse.$UnknownMember;

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
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregationResponse): any => {
    if (obj.accountAggregation !== undefined)
      return { accountAggregation: AccountAggregationResponse.filterSensitiveLog(obj.accountAggregation) };
    if (obj.amiAggregation !== undefined)
      return { amiAggregation: AmiAggregationResponse.filterSensitiveLog(obj.amiAggregation) };
    if (obj.awsEcrContainerAggregation !== undefined)
      return {
        awsEcrContainerAggregation: AwsEcrContainerAggregationResponse.filterSensitiveLog(
          obj.awsEcrContainerAggregation
        ),
      };
    if (obj.ec2InstanceAggregation !== undefined)
      return { ec2InstanceAggregation: Ec2InstanceAggregationResponse.filterSensitiveLog(obj.ec2InstanceAggregation) };
    if (obj.findingTypeAggregation !== undefined)
      return { findingTypeAggregation: FindingTypeAggregationResponse.filterSensitiveLog(obj.findingTypeAggregation) };
    if (obj.imageLayerAggregation !== undefined)
      return { imageLayerAggregation: ImageLayerAggregationResponse.filterSensitiveLog(obj.imageLayerAggregation) };
    if (obj.packageAggregation !== undefined)
      return { packageAggregation: PackageAggregationResponse.filterSensitiveLog(obj.packageAggregation) };
    if (obj.repositoryAggregation !== undefined)
      return { repositoryAggregation: RepositoryAggregationResponse.filterSensitiveLog(obj.repositoryAggregation) };
    if (obj.titleAggregation !== undefined)
      return { titleAggregation: TitleAggregationResponse.filterSensitiveLog(obj.titleAggregation) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export enum AggregationType {
  ACCOUNT = "ACCOUNT",
  AMI = "AMI",
  AWS_EC2_INSTANCE = "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER = "AWS_ECR_CONTAINER",
  FINDING_TYPE = "FINDING_TYPE",
  IMAGE_LAYER = "IMAGE_LAYER",
  PACKAGE = "PACKAGE",
  REPOSITORY = "REPOSITORY",
  TITLE = "TITLE",
}

export interface AssociateMemberRequest {
  /**
   * <p>The Amazon Web Services account ID of the member account to be associated.</p>
   */
  accountId: string | undefined;
}

export namespace AssociateMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateMemberRequest): any => ({
    ...obj,
  });
}

export interface AssociateMemberResponse {
  /**
   * <p>The Amazon Web Services account ID of the successfully associated member account.</p>
   */
  accountId: string | undefined;
}

export namespace AssociateMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateMemberResponse): any => ({
    ...obj,
  });
}

/**
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
 * <p>The limit on the number of requests per second was exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
  }
}

/**
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

export namespace ValidationExceptionField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
}

/**
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
}

export namespace AutoEnable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AutoEnable): any => ({
    ...obj,
  });
}

/**
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

export namespace AwsEc2InstanceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEc2InstanceDetails): any => ({
    ...obj,
  });
}

/**
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
   * <p>The registry the Amazon ECR container image belongs to.</p>
   */
  registry: string | undefined;

  /**
   * <p>The platform of the Amazon ECR container image.</p>
   */
  platform?: string;
}

export namespace AwsEcrContainerImageDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AwsEcrContainerImageDetails): any => ({
    ...obj,
  });
}

/**
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

export interface BatchGetAccountStatusRequest {
  /**
   * <p>The 12-digit Amazon Web Services account IDs of the accounts to retrieve Amazon Inspector status for.</p>
   */
  accountIds?: string[];
}

export namespace BatchGetAccountStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetAccountStatusRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace FailedAccount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FailedAccount): any => ({
    ...obj,
  });
}

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

export namespace BatchGetAccountStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetAccountStatusResponse): any => ({
    ...obj,
  });
}

/**
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

export interface BatchGetFreeTrialInfoRequest {
  /**
   * <p>The account IDs to get free trial status for.</p>
   */
  accountIds: string[] | undefined;
}

export namespace BatchGetFreeTrialInfoRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetFreeTrialInfoRequest): any => ({
    ...obj,
  });
}

export enum FreeTrialStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum FreeTrialType {
  EC2 = "EC2",
  ECR = "ECR",
}

/**
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

export namespace FreeTrialInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FreeTrialInfo): any => ({
    ...obj,
  });
}

/**
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

export namespace FreeTrialAccountInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FreeTrialAccountInfo): any => ({
    ...obj,
  });
}

export enum FreeTrialInfoErrorCode {
  ACCESS_DENIED = "ACCESS_DENIED",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}

/**
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

export namespace FreeTrialInfoError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FreeTrialInfoError): any => ({
    ...obj,
  });
}

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

export namespace BatchGetFreeTrialInfoResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetFreeTrialInfoResponse): any => ({
    ...obj,
  });
}

export interface CancelFindingsReportRequest {
  /**
   * <p>The ID of the report to be canceled.</p>
   */
  reportId: string | undefined;
}

export namespace CancelFindingsReportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelFindingsReportRequest): any => ({
    ...obj,
  });
}

export interface CancelFindingsReportResponse {
  /**
   * <p>The ID of the canceled report.</p>
   */
  reportId: string | undefined;
}

export namespace CancelFindingsReportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CancelFindingsReportResponse): any => ({
    ...obj,
  });
}

/**
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

export enum GroupKey {
  ACCOUNT_ID = "ACCOUNT_ID",
  ECR_REPOSITORY_NAME = "ECR_REPOSITORY_NAME",
  RESOURCE_TYPE = "RESOURCE_TYPE",
  SCAN_STATUS_CODE = "SCAN_STATUS_CODE",
  SCAN_STATUS_REASON = "SCAN_STATUS_REASON",
}

/**
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

export namespace Counts {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Counts): any => ({
    ...obj,
  });
}

export enum CoverageStringComparison {
  EQUALS = "EQUALS",
  NOT_EQUALS = "NOT_EQUALS",
}

/**
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

export namespace CoverageStringFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoverageStringFilter): any => ({
    ...obj,
  });
}

export enum CoverageMapComparison {
  EQUALS = "EQUALS",
}

/**
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

export namespace CoverageMapFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoverageMapFilter): any => ({
    ...obj,
  });
}

/**
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
   * <p>An array of Amazon Web Services resource types to return coverage statistics for.</p>
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
}

export namespace CoverageFilterCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoverageFilterCriteria): any => ({
    ...obj,
  });
}

export enum CoverageResourceType {
  AWS_EC2_INSTANCE = "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER_IMAGE = "AWS_ECR_CONTAINER_IMAGE",
  AWS_ECR_REPOSITORY = "AWS_ECR_REPOSITORY",
}

export enum Ec2Platform {
  LINUX = "LINUX",
  UNKNOWN = "UNKNOWN",
  WINDOWS = "WINDOWS",
}

/**
 * <p>Meta data details of an Amazon EC2 instance.</p>
 */
export interface Ec2Metadata {
  /**
   * <p>The tags attached to the instance.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The ID of the Amazon Machine Image (AMI) used to launch the instance.</p>
   */
  amiId?: string;

  /**
   * <p>The platform of the instance.</p>
   */
  platform?: Ec2Platform | string;
}

export namespace Ec2Metadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Ec2Metadata): any => ({
    ...obj,
  });
}

/**
 * <p>Information on the Amazon ECR image metadata associated with a finding.</p>
 */
export interface EcrContainerImageMetadata {
  /**
   * <p>Tags associated with the Amazon ECR image metadata.</p>
   */
  tags?: string[];
}

export namespace EcrContainerImageMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EcrContainerImageMetadata): any => ({
    ...obj,
  });
}

export enum EcrScanFrequency {
  CONTINUOUS_SCAN = "CONTINUOUS_SCAN",
  MANUAL = "MANUAL",
  SCAN_ON_PUSH = "SCAN_ON_PUSH",
}

/**
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

export namespace EcrRepositoryMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EcrRepositoryMetadata): any => ({
    ...obj,
  });
}

/**
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
}

export namespace ResourceScanMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceScanMetadata): any => ({
    ...obj,
  });
}

export enum ScanStatusReason {
  ACCESS_DENIED = "ACCESS_DENIED",
  EC2_INSTANCE_STOPPED = "EC2_INSTANCE_STOPPED",
  IMAGE_SIZE_EXCEEDED = "IMAGE_SIZE_EXCEEDED",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  NO_RESOURCES_FOUND = "NO_RESOURCES_FOUND",
  PENDING_INITIAL_SCAN = "PENDING_INITIAL_SCAN",
  RESOURCE_TERMINATED = "RESOURCE_TERMINATED",
  SCAN_ELIGIBILITY_EXPIRED = "SCAN_ELIGIBILITY_EXPIRED",
  SCAN_FREQUENCY_MANUAL = "SCAN_FREQUENCY_MANUAL",
  SCAN_FREQUENCY_SCAN_ON_PUSH = "SCAN_FREQUENCY_SCAN_ON_PUSH",
  SUCCESSFUL = "SUCCESSFUL",
  UNMANAGED_EC2_INSTANCE = "UNMANAGED_EC2_INSTANCE",
  UNSUPPORTED_OS = "UNSUPPORTED_OS",
}

export enum ScanStatusCode {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

/**
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

export namespace ScanStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ScanStatus): any => ({
    ...obj,
  });
}

export enum ScanType {
  NETWORK = "NETWORK",
  PACKAGE = "PACKAGE",
}

/**
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

export namespace CoveredResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CoveredResource): any => ({
    ...obj,
  });
}

export enum FilterAction {
  NONE = "NONE",
  SUPPRESS = "SUPPRESS",
}

/**
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

export namespace DateFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateFilter): any => ({
    ...obj,
  });
}

/**
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

export namespace NumberFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NumberFilter): any => ({
    ...obj,
  });
}

/**
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

export namespace PortRangeFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortRangeFilter): any => ({
    ...obj,
  });
}

/**
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
}

export namespace PackageFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageFilter): any => ({
    ...obj,
  });
}

/**
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
}

export namespace FilterCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilterCriteria): any => ({
    ...obj,
  });
}

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
  tags?: { [key: string]: string };
}

export namespace CreateFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFilterRequest): any => ({
    ...obj,
  });
}

export interface CreateFilterResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the successfully created filter.</p>
   */
  arn: string | undefined;
}

export namespace CreateFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFilterResponse): any => ({
    ...obj,
  });
}

/**
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

export enum ReportFormat {
  CSV = "CSV",
  JSON = "JSON",
}

/**
 * <p>Contains details of the Amazon S3 bucket and KMS key used to export findings.</p>
 */
export interface Destination {
  /**
   * <p>The name of the Amazon S3 bucket to export findings to.</p>
   */
  bucketName: string | undefined;

  /**
   * <p>The prefix of the KMS key used to export findings.</p>
   */
  keyPrefix?: string;

  /**
   * <p>The ARN of the KMS key used to encrypt data when exporting findings.</p>
   */
  kmsKeyArn: string | undefined;
}

export namespace Destination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Destination): any => ({
    ...obj,
  });
}

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

export namespace CreateFindingsReportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFindingsReportRequest): any => ({
    ...obj,
  });
}

export interface CreateFindingsReportResponse {
  /**
   * <p>The ID of the report.</p>
   */
  reportId?: string;
}

export namespace CreateFindingsReportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateFindingsReportResponse): any => ({
    ...obj,
  });
}

export enum Currency {
  USD = "USD",
}

/**
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

export namespace CvssScore {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CvssScore): any => ({
    ...obj,
  });
}

/**
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

export namespace CvssScoreAdjustment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CvssScoreAdjustment): any => ({
    ...obj,
  });
}

/**
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

export namespace CvssScoreDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CvssScoreDetails): any => ({
    ...obj,
  });
}

export enum RelationshipStatus {
  ACCOUNT_SUSPENDED = "ACCOUNT_SUSPENDED",
  CANNOT_CREATE_DETECTOR_IN_ORG_MASTER = "CANNOT_CREATE_DETECTOR_IN_ORG_MASTER",
  CREATED = "CREATED",
  DELETED = "DELETED",
  DISABLED = "DISABLED",
  EMAIL_VERIFICATION_FAILED = "EMAIL_VERIFICATION_FAILED",
  EMAIL_VERIFICATION_IN_PROGRESS = "EMAIL_VERIFICATION_IN_PROGRESS",
  ENABLED = "ENABLED",
  INVITED = "INVITED",
  REGION_DISABLED = "REGION_DISABLED",
  REMOVED = "REMOVED",
  RESIGNED = "RESIGNED",
}

/**
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

export namespace DelegatedAdmin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DelegatedAdmin): any => ({
    ...obj,
  });
}

export enum DelegatedAdminStatus {
  DISABLE_IN_PROGRESS = "DISABLE_IN_PROGRESS",
  ENABLED = "ENABLED",
}

/**
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

export namespace DelegatedAdminAccount {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DelegatedAdminAccount): any => ({
    ...obj,
  });
}

export interface DeleteFilterRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the filter to be deleted.</p>
   */
  arn: string | undefined;
}

export namespace DeleteFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFilterRequest): any => ({
    ...obj,
  });
}

export interface DeleteFilterResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the filter that has been deleted.</p>
   */
  arn: string | undefined;
}

export namespace DeleteFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteFilterResponse): any => ({
    ...obj,
  });
}

export interface DescribeOrganizationConfigurationRequest {}

export namespace DescribeOrganizationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

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

export namespace DescribeOrganizationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}

export enum ResourceScanType {
  EC2 = "EC2",
  ECR = "ECR",
}

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

export namespace DisableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableRequest): any => ({
    ...obj,
  });
}

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

export namespace DisableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableResponse): any => ({
    ...obj,
  });
}

export interface DisableDelegatedAdminAccountRequest {
  /**
   * <p>The Amazon Web Services account ID of the current Amazon Inspector delegated administrator.</p>
   */
  delegatedAdminAccountId: string | undefined;
}

export namespace DisableDelegatedAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableDelegatedAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface DisableDelegatedAdminAccountResponse {
  /**
   * <p>The Amazon Web Services account ID of the successfully disabled delegated administrator.</p>
   */
  delegatedAdminAccountId: string | undefined;
}

export namespace DisableDelegatedAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisableDelegatedAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface DisassociateMemberRequest {
  /**
   * <p>The Amazon Web Services account ID of the member account to disassociate.</p>
   */
  accountId: string | undefined;
}

export namespace DisassociateMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMemberRequest): any => ({
    ...obj,
  });
}

export interface DisassociateMemberResponse {
  /**
   * <p>The Amazon Web Services account ID of the successfully disassociated member.</p>
   */
  accountId: string | undefined;
}

export namespace DisassociateMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateMemberResponse): any => ({
    ...obj,
  });
}

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

export namespace EnableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableRequest): any => ({
    ...obj,
  });
}

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

export namespace EnableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableResponse): any => ({
    ...obj,
  });
}

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

export namespace EnableDelegatedAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableDelegatedAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface EnableDelegatedAdminAccountResponse {
  /**
   * <p>The Amazon Web Services account ID of the successfully Amazon Inspector delegated administrator.</p>
   */
  delegatedAdminAccountId: string | undefined;
}

export namespace EnableDelegatedAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnableDelegatedAdminAccountResponse): any => ({
    ...obj,
  });
}

export enum ExternalReportStatus {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  SUCCEEDED = "SUCCEEDED",
}

/**
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
  tags?: { [key: string]: string };
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Amazon Inspector score given to a finding.</p>
 */
export interface InspectorScoreDetails {
  /**
   * <p>An object that contains details about the CVSS score given to a finding.</p>
   */
  adjustedCvss?: CvssScoreDetails;
}

export namespace InspectorScoreDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InspectorScoreDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace Step {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Step): any => ({
    ...obj,
  });
}

/**
 * <p>Information on the network path associated with a finding.</p>
 */
export interface NetworkPath {
  /**
   * <p>The details on the steps in the network path.</p>
   */
  steps?: Step[];
}

export namespace NetworkPath {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkPath): any => ({
    ...obj,
  });
}

/**
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

export namespace PortRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortRange): any => ({
    ...obj,
  });
}

export enum NetworkProtocol {
  TCP = "TCP",
  UDP = "UDP",
}

/**
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

export namespace NetworkReachabilityDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NetworkReachabilityDetails): any => ({
    ...obj,
  });
}

export enum PackageManager {
  BUNDLER = "BUNDLER",
  CARGO = "CARGO",
  COMPOSER = "COMPOSER",
  GOBINARY = "GOBINARY",
  GOMOD = "GOMOD",
  JAR = "JAR",
  NPM = "NPM",
  NUGET = "NUGET",
  OS = "OS",
  PIPENV = "PIPENV",
  POETRY = "POETRY",
  YARN = "YARN",
}

/**
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
}

export namespace VulnerablePackage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VulnerablePackage): any => ({
    ...obj,
  });
}

/**
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
  vulnerablePackages: VulnerablePackage[] | undefined;

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

export namespace PackageVulnerabilityDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PackageVulnerabilityDetails): any => ({
    ...obj,
  });
}

/**
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

export namespace Recommendation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Recommendation): any => ({
    ...obj,
  });
}

/**
 * <p>Information on how to remediate a finding.</p>
 */
export interface Remediation {
  /**
   * <p>An object that contains information about the recommended course of action to remediate the finding.</p>
   */
  recommendation?: Recommendation;
}

export namespace Remediation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Remediation): any => ({
    ...obj,
  });
}

/**
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
}

export namespace ResourceDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceDetails): any => ({
    ...obj,
  });
}

export enum ResourceType {
  AWS_EC2_INSTANCE = "AWS_EC2_INSTANCE",
  AWS_ECR_CONTAINER_IMAGE = "AWS_ECR_CONTAINER_IMAGE",
  AWS_ECR_REPOSITORY = "AWS_ECR_REPOSITORY",
}

/**
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
  tags?: { [key: string]: string };

  /**
   * <p>An object that contains details about the resource involved in a finding.</p>
   */
  details?: ResourceDetails;
}

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

export enum Severity {
  CRITICAL = "CRITICAL",
  HIGH = "HIGH",
  INFORMATIONAL = "INFORMATIONAL",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  UNTRIAGED = "UNTRIAGED",
}

export enum FindingStatus {
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
  SUPPRESSED = "SUPPRESSED",
}

export enum FindingType {
  NETWORK_REACHABILITY = "NETWORK_REACHABILITY",
  PACKAGE_VULNERABILITY = "PACKAGE_VULNERABILITY",
}

/**
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
}

export namespace Finding {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Finding): any => ({
    ...obj,
  });
}

export interface GetDelegatedAdminAccountRequest {}

export namespace GetDelegatedAdminAccountRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDelegatedAdminAccountRequest): any => ({
    ...obj,
  });
}

export interface GetDelegatedAdminAccountResponse {
  /**
   * <p>The Amazon Web Services account ID of the Amazon Inspector delegated administrator.</p>
   */
  delegatedAdmin?: DelegatedAdmin;
}

export namespace GetDelegatedAdminAccountResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDelegatedAdminAccountResponse): any => ({
    ...obj,
  });
}

export interface GetFindingsReportStatusRequest {
  /**
   * <p>The ID of the report to retrieve the status of.</p>
   */
  reportId?: string;
}

export namespace GetFindingsReportStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsReportStatusRequest): any => ({
    ...obj,
  });
}

export enum ReportingErrorCode {
  INTERNAL_ERROR = "INTERNAL_ERROR",
  INVALID_PERMISSIONS = "INVALID_PERMISSIONS",
}

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

export namespace GetFindingsReportStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFindingsReportStatusResponse): any => ({
    ...obj,
  });
}

export interface GetMemberRequest {
  /**
   * <p>The Amazon Web Services account ID of the member account to retrieve information on.</p>
   */
  accountId: string | undefined;
}

export namespace GetMemberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMemberRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace Member {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Member): any => ({
    ...obj,
  });
}

export interface GetMemberResponse {
  /**
   * <p>Details of the retrieved member account.</p>
   */
  member?: Member;
}

export namespace GetMemberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMemberResponse): any => ({
    ...obj,
  });
}

export enum Service {
  EC2 = "EC2",
  ECR = "ECR",
}

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

export namespace ListAccountPermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountPermissionsRequest): any => ({
    ...obj,
  });
}

export enum Operation {
  DISABLE_REPOSITORY = "DISABLE_REPOSITORY",
  DISABLE_SCANNING = "DISABLE_SCANNING",
  ENABLE_REPOSITORY = "ENABLE_REPOSITORY",
  ENABLE_SCANNING = "ENABLE_SCANNING",
}

/**
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

export namespace Permission {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Permission): any => ({
    ...obj,
  });
}

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

export namespace ListAccountPermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccountPermissionsResponse): any => ({
    ...obj,
  });
}

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

export namespace ListCoverageRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCoverageRequest): any => ({
    ...obj,
  });
}

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

export namespace ListCoverageResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCoverageResponse): any => ({
    ...obj,
  });
}

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

export namespace ListCoverageStatisticsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCoverageStatisticsRequest): any => ({
    ...obj,
  });
}

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

export namespace ListCoverageStatisticsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCoverageStatisticsResponse): any => ({
    ...obj,
  });
}

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

export namespace ListDelegatedAdminAccountsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDelegatedAdminAccountsRequest): any => ({
    ...obj,
  });
}

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

export namespace ListDelegatedAdminAccountsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDelegatedAdminAccountsResponse): any => ({
    ...obj,
  });
}

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

export namespace ListFiltersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFiltersRequest): any => ({
    ...obj,
  });
}

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

export namespace ListFiltersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFiltersResponse): any => ({
    ...obj,
  });
}

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

export namespace ListFindingAggregationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingAggregationsRequest): any => ({
    ...obj,
    ...(obj.aggregationRequest && {
      aggregationRequest: AggregationRequest.filterSensitiveLog(obj.aggregationRequest),
    }),
  });
}

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

export namespace ListFindingAggregationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingAggregationsResponse): any => ({
    ...obj,
    ...(obj.responses && { responses: obj.responses.map((item) => AggregationResponse.filterSensitiveLog(item)) }),
  });
}

export enum SortField {
  AWS_ACCOUNT_ID = "AWS_ACCOUNT_ID",
  COMPONENT_TYPE = "COMPONENT_TYPE",
  ECR_IMAGE_PUSHED_AT = "ECR_IMAGE_PUSHED_AT",
  ECR_IMAGE_REGISTRY = "ECR_IMAGE_REGISTRY",
  ECR_IMAGE_REPOSITORY_NAME = "ECR_IMAGE_REPOSITORY_NAME",
  FINDING_STATUS = "FINDING_STATUS",
  FINDING_TYPE = "FINDING_TYPE",
  FIRST_OBSERVED_AT = "FIRST_OBSERVED_AT",
  INSPECTOR_SCORE = "INSPECTOR_SCORE",
  LAST_OBSERVED_AT = "LAST_OBSERVED_AT",
  NETWORK_PROTOCOL = "NETWORK_PROTOCOL",
  RESOURCE_TYPE = "RESOURCE_TYPE",
  SEVERITY = "SEVERITY",
  VENDOR_SEVERITY = "VENDOR_SEVERITY",
  VULNERABILITY_ID = "VULNERABILITY_ID",
  VULNERABILITY_SOURCE = "VULNERABILITY_SOURCE",
}

/**
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

export namespace SortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SortCriteria): any => ({
    ...obj,
  });
}

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

export namespace ListFindingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingsRequest): any => ({
    ...obj,
  });
}

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

export namespace ListFindingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListFindingsResponse): any => ({
    ...obj,
  });
}

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

export namespace ListMembersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMembersRequest): any => ({
    ...obj,
  });
}

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

export namespace ListMembersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMembersResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon resource number (ARN) of the resource to list tags of.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace ListUsageTotalsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsageTotalsRequest): any => ({
    ...obj,
  });
}

export enum UsageType {
  EC2_INSTANCE_HOURS = "EC2_INSTANCE_HOURS",
  ECR_INITIAL_SCAN = "ECR_INITIAL_SCAN",
  ECR_RESCAN = "ECR_RESCAN",
}

/**
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

export namespace Usage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Usage): any => ({
    ...obj,
  });
}

/**
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

export namespace UsageTotal {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UsageTotal): any => ({
    ...obj,
  });
}

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

export namespace ListUsageTotalsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsageTotalsResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to apply a tag to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to be added to a resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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
}

export namespace UpdateFilterRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFilterRequest): any => ({
    ...obj,
  });
}

export interface UpdateFilterResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the successfully updated filter.</p>
   */
  arn: string | undefined;
}

export namespace UpdateFilterResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateFilterResponse): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Defines which scan types are enabled automatically for new members of your Amazon Inspector organization.</p>
   */
  autoEnable: AutoEnable | undefined;
}

export namespace UpdateOrganizationConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateOrganizationConfigurationResponse {
  /**
   * <p>The updated status of scan types automatically enabled for new members of your Amazon Inspector organization.</p>
   */
  autoEnable: AutoEnable | undefined;
}

export namespace UpdateOrganizationConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateOrganizationConfigurationResponse): any => ({
    ...obj,
  });
}
