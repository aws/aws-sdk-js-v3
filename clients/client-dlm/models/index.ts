import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface CreateLifecyclePolicyRequest {
  __type?: "CreateLifecyclePolicyRequest";
  /**
   * <p>A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.</p>
   */
  Description: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>The configuration details of the lifecycle policy.</p>
   */
  PolicyDetails: PolicyDetails | undefined;

  /**
   * <p>The desired activation state of the lifecycle policy after creation.</p>
   */
  State: SettablePolicyStateValues | string | undefined;

  /**
   * <p>The tags to apply to the lifecycle policy during creation.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateLifecyclePolicyRequest {
  export function isa(o: any): o is CreateLifecyclePolicyRequest {
    return __isa(o, "CreateLifecyclePolicyRequest");
  }
}

export interface CreateLifecyclePolicyResponse {
  __type?: "CreateLifecyclePolicyResponse";
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId?: string;
}

export namespace CreateLifecyclePolicyResponse {
  export function isa(o: any): o is CreateLifecyclePolicyResponse {
    return __isa(o, "CreateLifecyclePolicyResponse");
  }
}

/**
 * <p>Specifies when to create snapshots of EBS volumes.</p>
 */
export interface CreateRule {
  __type?: "CreateRule";
  /**
   * <p>The interval between snapshots. The supported values are 2, 3, 4, 6, 8, 12, and 24.</p>
   */
  Interval: number | undefined;

  /**
   * <p>The interval unit.</p>
   */
  IntervalUnit: IntervalUnitValues | string | undefined;

  /**
   * <p>The time, in UTC, to start the operation. The supported format is hh:mm.</p> <p>The operation occurs within a one-hour window following the specified time.</p>
   */
  Times?: Array<string>;
}

export namespace CreateRule {
  export function isa(o: any): o is CreateRule {
    return __isa(o, "CreateRule");
  }
}

/**
 * <p>Specifies the retention rule for cross-Region snapshot copies.</p>
 */
export interface CrossRegionCopyRetainRule {
  __type?: "CrossRegionCopyRetainRule";
  /**
   * <p>The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   */
  Interval?: number;

  /**
   * <p>The unit of time for time-based retention.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;
}

export namespace CrossRegionCopyRetainRule {
  export function isa(o: any): o is CrossRegionCopyRetainRule {
    return __isa(o, "CrossRegionCopyRetainRule");
  }
}

/**
 * <p>Specifies a rule for cross-Region snapshot copies.</p>
 */
export interface CrossRegionCopyRule {
  __type?: "CrossRegionCopyRule";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS customer master key (CMK) to use for EBS encryption. If this parameter is not specified, your AWS managed CMK for EBS is used.</p>
   */
  CmkArn?: string;

  /**
   * <p>Copy all user-defined tags from the source snapshot to the copied snapshot.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or if encryption by default is not enabled.</p>
   */
  Encrypted: boolean | undefined;

  /**
   * <p>The retention rule.</p>
   */
  RetainRule?: CrossRegionCopyRetainRule;

  /**
   * <p>The target Region.</p>
   */
  TargetRegion: string | undefined;
}

export namespace CrossRegionCopyRule {
  export function isa(o: any): o is CrossRegionCopyRule {
    return __isa(o, "CrossRegionCopyRule");
  }
}

export interface DeleteLifecyclePolicyRequest {
  __type?: "DeleteLifecyclePolicyRequest";
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId: string | undefined;
}

export namespace DeleteLifecyclePolicyRequest {
  export function isa(o: any): o is DeleteLifecyclePolicyRequest {
    return __isa(o, "DeleteLifecyclePolicyRequest");
  }
}

export interface DeleteLifecyclePolicyResponse {
  __type?: "DeleteLifecyclePolicyResponse";
}

export namespace DeleteLifecyclePolicyResponse {
  export function isa(o: any): o is DeleteLifecyclePolicyResponse {
    return __isa(o, "DeleteLifecyclePolicyResponse");
  }
}

/**
 * <p>Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval.</p>
 */
export interface FastRestoreRule {
  __type?: "FastRestoreRule";
  /**
   * <p>The Availability Zones in which to enable fast snapshot restore.</p>
   */
  AvailabilityZones: Array<string> | undefined;

  /**
   * <p>The number of snapshots to be enabled with fast snapshot restore.</p>
   */
  Count?: number;

  /**
   * <p>The amount of time to enable fast snapshot restore. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   */
  Interval?: number;

  /**
   * <p>The unit of time for enabling fast snapshot restore.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;
}

export namespace FastRestoreRule {
  export function isa(o: any): o is FastRestoreRule {
    return __isa(o, "FastRestoreRule");
  }
}

export interface GetLifecyclePoliciesRequest {
  __type?: "GetLifecyclePoliciesRequest";
  /**
   * <p>The identifiers of the data lifecycle policies.</p>
   */
  PolicyIds?: Array<string>;

  /**
   * <p>The resource type.</p>
   */
  ResourceTypes?: Array<ResourceTypeValues | string>;

  /**
   * <p>The activation state.</p>
   */
  State?: GettablePolicyStateValues | string;

  /**
   * <p>The tags to add to objects created by the policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p> <p>These user-defined tags are added in addition to the AWS-added lifecycle tags.</p>
   */
  TagsToAdd?: Array<string>;

  /**
   * <p>The target tag for a policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p>
   */
  TargetTags?: Array<string>;
}

export namespace GetLifecyclePoliciesRequest {
  export function isa(o: any): o is GetLifecyclePoliciesRequest {
    return __isa(o, "GetLifecyclePoliciesRequest");
  }
}

export interface GetLifecyclePoliciesResponse {
  __type?: "GetLifecyclePoliciesResponse";
  /**
   * <p>Summary information about the lifecycle policies.</p>
   */
  Policies?: Array<LifecyclePolicySummary>;
}

export namespace GetLifecyclePoliciesResponse {
  export function isa(o: any): o is GetLifecyclePoliciesResponse {
    return __isa(o, "GetLifecyclePoliciesResponse");
  }
}

export interface GetLifecyclePolicyRequest {
  __type?: "GetLifecyclePolicyRequest";
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId: string | undefined;
}

export namespace GetLifecyclePolicyRequest {
  export function isa(o: any): o is GetLifecyclePolicyRequest {
    return __isa(o, "GetLifecyclePolicyRequest");
  }
}

export interface GetLifecyclePolicyResponse {
  __type?: "GetLifecyclePolicyResponse";
  /**
   * <p>Detailed information about the lifecycle policy.</p>
   */
  Policy?: LifecyclePolicy;
}

export namespace GetLifecyclePolicyResponse {
  export function isa(o: any): o is GetLifecyclePolicyResponse {
    return __isa(o, "GetLifecyclePolicyResponse");
  }
}

export enum GettablePolicyStateValues {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  ERROR = "ERROR"
}

/**
 * <p>The service failed in an unexpected way.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Code?: string;
  Message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

export enum IntervalUnitValues {
  HOURS = "HOURS"
}

/**
 * <p>Bad request. The request is missing required parameters or has invalid parameters.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Code?: string;
  Message?: string;
  /**
   * <p>The request included parameters that cannot be provided together.</p>
   */
  MutuallyExclusiveParameters?: Array<string>;

  /**
   * <p>The request omitted one or more required parameters.</p>
   */
  RequiredParameters?: Array<string>;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>Detailed information about a lifecycle policy.</p>
 */
export interface LifecyclePolicy {
  __type?: "LifecyclePolicy";
  /**
   * <p>The local date and time when the lifecycle policy was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The local date and time when the lifecycle policy was last modified.</p>
   */
  DateModified?: Date;

  /**
   * <p>The description of the lifecycle policy.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The configuration of the lifecycle policy</p>
   */
  PolicyDetails?: PolicyDetails;

  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The activation state of the lifecycle policy.</p>
   */
  State?: GettablePolicyStateValues | string;

  /**
   * <p>The description of the status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace LifecyclePolicy {
  export function isa(o: any): o is LifecyclePolicy {
    return __isa(o, "LifecyclePolicy");
  }
}

/**
 * <p>Summary information about a lifecycle policy.</p>
 */
export interface LifecyclePolicySummary {
  __type?: "LifecyclePolicySummary";
  /**
   * <p>The description of the lifecycle policy.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The activation state of the lifecycle policy.</p>
   */
  State?: GettablePolicyStateValues | string;

  /**
   * <p>The tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace LifecyclePolicySummary {
  export function isa(o: any): o is LifecyclePolicySummary {
    return __isa(o, "LifecyclePolicySummary");
  }
}

/**
 * <p>The request failed because a limit was exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Code?: string;
  Message?: string;
  /**
   * <p>Value is the type of resource for which a limit was exceeded.</p>
   */
  ResourceType?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>Information about the tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

/**
 * <p>Optional parameters that can be added to the policy. The set of valid parameters depends on the combination of <code>policyType</code> and <code>resourceType</code> values.</p>
 */
export interface _Parameters {
  __type?: "Parameters";
  /**
   * <p>When executing an EBS Snapshot Management – Instance policy, execute all CreateSnapshots calls with the <code>excludeBootVolume</code> set to the supplied field. Defaults to false. Only valid for EBS Snapshot Management – Instance policies.</p>
   */
  ExcludeBootVolume?: boolean;
}

export namespace _Parameters {
  export function isa(o: any): o is _Parameters {
    return __isa(o, "Parameters");
  }
}

/**
 * <p>Specifies the configuration of a lifecycle policy.</p>
 */
export interface PolicyDetails {
  __type?: "PolicyDetails";
  /**
   * <p>A set of optional parameters that can be provided by the policy. </p>
   */
  Parameters?: _Parameters;

  /**
   * <p>This field determines the valid target resource types and actions a policy can manage. This field defaults to EBS_SNAPSHOT_MANAGEMENT if not present.</p>
   */
  PolicyType?: PolicyTypeValues | string;

  /**
   * <p>The resource type.</p>
   */
  ResourceTypes?: Array<ResourceTypeValues | string>;

  /**
   * <p>The schedule of policy-defined actions.</p>
   */
  Schedules?: Array<Schedule>;

  /**
   * <p>The single tag that identifies targeted resources for this policy.</p>
   */
  TargetTags?: Array<Tag>;
}

export namespace PolicyDetails {
  export function isa(o: any): o is PolicyDetails {
    return __isa(o, "PolicyDetails");
  }
}

export enum PolicyTypeValues {
  EBS_SNAPSHOT_MANAGEMENT = "EBS_SNAPSHOT_MANAGEMENT"
}

/**
 * <p>A requested resource was not found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Code?: string;
  Message?: string;
  /**
   * <p>Value is a list of resource IDs that were not found.</p>
   */
  ResourceIds?: Array<string>;

  /**
   * <p>Value is the type of resource that was not found.</p>
   */
  ResourceType?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

export enum ResourceTypeValues {
  INSTANCE = "INSTANCE",
  VOLUME = "VOLUME"
}

/**
 * <p>Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval.</p>
 */
export interface RetainRule {
  __type?: "RetainRule";
  /**
   * <p>The number of snapshots to retain for each volume, up to a maximum of 1000.</p>
   */
  Count?: number;

  /**
   * <p>The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   */
  Interval?: number;

  /**
   * <p>The unit of time for time-based retention.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;
}

export namespace RetainRule {
  export function isa(o: any): o is RetainRule {
    return __isa(o, "RetainRule");
  }
}

export enum RetentionIntervalUnitValues {
  DAYS = "DAYS",
  MONTHS = "MONTHS",
  WEEKS = "WEEKS",
  YEARS = "YEARS"
}

/**
 * <p>Specifies a schedule.</p>
 */
export interface Schedule {
  __type?: "Schedule";
  /**
   * <p>Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The creation rule.</p>
   */
  CreateRule?: CreateRule;

  /**
   * <p>The rule for cross-Region snapshot copies.</p>
   */
  CrossRegionCopyRules?: Array<CrossRegionCopyRule>;

  /**
   * <p>The rule for enabling fast snapshot restore.</p>
   */
  FastRestoreRule?: FastRestoreRule;

  /**
   * <p>The name of the schedule.</p>
   */
  Name?: string;

  /**
   * <p>The retention rule.</p>
   */
  RetainRule?: RetainRule;

  /**
   * <p>The tags to apply to policy-created resources. These user-defined tags are in addition to the AWS-added lifecycle tags.</p>
   */
  TagsToAdd?: Array<Tag>;

  /**
   * <p>A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: <code>$(instance-id)</code> or <code>$(timestamp)</code>. Variable tags are only valid for EBS Snapshot Management – Instance policies.</p>
   */
  VariableTags?: Array<Tag>;
}

export namespace Schedule {
  export function isa(o: any): o is Schedule {
    return __isa(o, "Schedule");
  }
}

export enum SettablePolicyStateValues {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED"
}

/**
 * <p>Specifies a tag for a resource.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The tag key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag value.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdateLifecyclePolicyRequest {
  __type?: "UpdateLifecyclePolicyRequest";
  /**
   * <p>A description of the lifecycle policy.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The configuration of the lifecycle policy. You cannot update the policy type or the resource type.</p>
   */
  PolicyDetails?: PolicyDetails;

  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>The desired activation state of the lifecycle policy after creation.</p>
   */
  State?: SettablePolicyStateValues | string;
}

export namespace UpdateLifecyclePolicyRequest {
  export function isa(o: any): o is UpdateLifecyclePolicyRequest {
    return __isa(o, "UpdateLifecyclePolicyRequest");
  }
}

export interface UpdateLifecyclePolicyResponse {
  __type?: "UpdateLifecyclePolicyResponse";
}

export namespace UpdateLifecyclePolicyResponse {
  export function isa(o: any): o is UpdateLifecyclePolicyResponse {
    return __isa(o, "UpdateLifecyclePolicyResponse");
  }
}
