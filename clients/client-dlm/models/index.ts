import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface CreateLifecyclePolicyRequest {
  __type?: "CreateLifecyclePolicyRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.</p>
   */
  Description: string | undefined;

  /**
   * <p>The desired activation state of the lifecycle policy after creation.</p>
   */
  State: SettablePolicyStateValues | string | undefined;

  /**
   * <p>The configuration details of the lifecycle policy.</p>
   */
  PolicyDetails: PolicyDetails | undefined;

  /**
   * <p>The tags to apply to the lifecycle policy during creation.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateLifecyclePolicyRequest {
  export const filterSensitiveLog = (obj: CreateLifecyclePolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateLifecyclePolicyRequest => __isa(o, "CreateLifecyclePolicyRequest");
}

export interface CreateLifecyclePolicyResponse {
  __type?: "CreateLifecyclePolicyResponse";
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId?: string;
}

export namespace CreateLifecyclePolicyResponse {
  export const filterSensitiveLog = (obj: CreateLifecyclePolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateLifecyclePolicyResponse => __isa(o, "CreateLifecyclePolicyResponse");
}

/**
 * <p>Specifies when to create snapshots of EBS volumes.</p> <p>You must specify either a Cron expression or an interval, interval unit, and start time. You cannot specify both.</p>
 */
export interface CreateRule {
  __type?: "CreateRule";
  /**
   * <p>The time, in UTC, to start the operation. The supported format is hh:mm.</p> <p>The operation occurs within a one-hour window following the specified time. If you do not specify a time, Amazon DLM selects a time within the next 24 hours.</p>
   */
  Times?: string[];

  /**
   * <p>The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1 year. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron expressions</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  CronExpression?: string;

  /**
   * <p>The interval unit.</p>
   */
  IntervalUnit?: IntervalUnitValues | string;

  /**
   * <p>The interval between snapshots. The supported values are 1, 2, 3, 4, 6, 8, 12, and 24.</p>
   */
  Interval?: number;
}

export namespace CreateRule {
  export const filterSensitiveLog = (obj: CreateRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateRule => __isa(o, "CreateRule");
}

/**
 * <p>Specifies the retention rule for cross-Region snapshot copies.</p>
 */
export interface CrossRegionCopyRetainRule {
  __type?: "CrossRegionCopyRetainRule";
  /**
   * <p>The unit of time for time-based retention.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;

  /**
   * <p>The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   */
  Interval?: number;
}

export namespace CrossRegionCopyRetainRule {
  export const filterSensitiveLog = (obj: CrossRegionCopyRetainRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CrossRegionCopyRetainRule => __isa(o, "CrossRegionCopyRetainRule");
}

/**
 * <p>Specifies a rule for cross-Region snapshot copies.</p>
 */
export interface CrossRegionCopyRule {
  __type?: "CrossRegionCopyRule";
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

  /**
   * <p>Copy all user-defined tags from the source snapshot to the copied snapshot.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS customer master key (CMK) to use for EBS encryption. If this parameter is not specified, your AWS managed CMK for EBS is used.</p>
   */
  CmkArn?: string;
}

export namespace CrossRegionCopyRule {
  export const filterSensitiveLog = (obj: CrossRegionCopyRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CrossRegionCopyRule => __isa(o, "CrossRegionCopyRule");
}

export interface DeleteLifecyclePolicyRequest {
  __type?: "DeleteLifecyclePolicyRequest";
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId: string | undefined;
}

export namespace DeleteLifecyclePolicyRequest {
  export const filterSensitiveLog = (obj: DeleteLifecyclePolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteLifecyclePolicyRequest => __isa(o, "DeleteLifecyclePolicyRequest");
}

export interface DeleteLifecyclePolicyResponse {
  __type?: "DeleteLifecyclePolicyResponse";
}

export namespace DeleteLifecyclePolicyResponse {
  export const filterSensitiveLog = (obj: DeleteLifecyclePolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteLifecyclePolicyResponse => __isa(o, "DeleteLifecyclePolicyResponse");
}

/**
 * <p>Specifies a rule for enabling fast snapshot restore. You can enable fast snapshot restore based on either a count or a time interval.</p>
 */
export interface FastRestoreRule {
  __type?: "FastRestoreRule";
  /**
   * <p>The number of snapshots to be enabled with fast snapshot restore.</p>
   */
  Count?: number;

  /**
   * <p>The unit of time for enabling fast snapshot restore.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;

  /**
   * <p>The amount of time to enable fast snapshot restore. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   */
  Interval?: number;

  /**
   * <p>The Availability Zones in which to enable fast snapshot restore.</p>
   */
  AvailabilityZones: string[] | undefined;
}

export namespace FastRestoreRule {
  export const filterSensitiveLog = (obj: FastRestoreRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is FastRestoreRule => __isa(o, "FastRestoreRule");
}

export interface GetLifecyclePoliciesRequest {
  __type?: "GetLifecyclePoliciesRequest";
  /**
   * <p>The resource type.</p>
   */
  ResourceTypes?: (ResourceTypeValues | string)[];

  /**
   * <p>The target tag for a policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p>
   */
  TargetTags?: string[];

  /**
   * <p>The identifiers of the data lifecycle policies.</p>
   */
  PolicyIds?: string[];

  /**
   * <p>The tags to add to objects created by the policy.</p> <p>Tags are strings in the format <code>key=value</code>.</p> <p>These user-defined tags are added in addition to the AWS-added lifecycle tags.</p>
   */
  TagsToAdd?: string[];

  /**
   * <p>The activation state.</p>
   */
  State?: GettablePolicyStateValues | string;
}

export namespace GetLifecyclePoliciesRequest {
  export const filterSensitiveLog = (obj: GetLifecyclePoliciesRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLifecyclePoliciesRequest => __isa(o, "GetLifecyclePoliciesRequest");
}

export interface GetLifecyclePoliciesResponse {
  __type?: "GetLifecyclePoliciesResponse";
  /**
   * <p>Summary information about the lifecycle policies.</p>
   */
  Policies?: LifecyclePolicySummary[];
}

export namespace GetLifecyclePoliciesResponse {
  export const filterSensitiveLog = (obj: GetLifecyclePoliciesResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLifecyclePoliciesResponse => __isa(o, "GetLifecyclePoliciesResponse");
}

export interface GetLifecyclePolicyRequest {
  __type?: "GetLifecyclePolicyRequest";
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId: string | undefined;
}

export namespace GetLifecyclePolicyRequest {
  export const filterSensitiveLog = (obj: GetLifecyclePolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLifecyclePolicyRequest => __isa(o, "GetLifecyclePolicyRequest");
}

export interface GetLifecyclePolicyResponse {
  __type?: "GetLifecyclePolicyResponse";
  /**
   * <p>Detailed information about the lifecycle policy.</p>
   */
  Policy?: LifecyclePolicy;
}

export namespace GetLifecyclePolicyResponse {
  export const filterSensitiveLog = (obj: GetLifecyclePolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetLifecyclePolicyResponse => __isa(o, "GetLifecyclePolicyResponse");
}

export enum GettablePolicyStateValues {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  ERROR = "ERROR",
}

/**
 * <p>The service failed in an unexpected way.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Code?: string;
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InternalServerException => __isa(o, "InternalServerException");
}

export enum IntervalUnitValues {
  HOURS = "HOURS",
}

/**
 * <p>Bad request. The request is missing required parameters or has invalid parameters.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The request included parameters that cannot be provided together.</p>
   */
  MutuallyExclusiveParameters?: string[];

  Code?: string;
  /**
   * <p>The request omitted one or more required parameters.</p>
   */
  RequiredParameters?: string[];

  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidRequestException => __isa(o, "InvalidRequestException");
}

/**
 * <p>Detailed information about a lifecycle policy.</p>
 */
export interface LifecyclePolicy {
  __type?: "LifecyclePolicy";
  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyArn?: string;

  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The local date and time when the lifecycle policy was last modified.</p>
   */
  DateModified?: Date;

  /**
   * <p>The description of the status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The tags.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The activation state of the lifecycle policy.</p>
   */
  State?: GettablePolicyStateValues | string;

  /**
   * <p>The local date and time when the lifecycle policy was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The configuration of the lifecycle policy</p>
   */
  PolicyDetails?: PolicyDetails;

  /**
   * <p>The description of the lifecycle policy.</p>
   */
  Description?: string;
}

export namespace LifecyclePolicy {
  export const filterSensitiveLog = (obj: LifecyclePolicy): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LifecyclePolicy => __isa(o, "LifecyclePolicy");
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
   * <p>The tags.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The activation state of the lifecycle policy.</p>
   */
  State?: GettablePolicyStateValues | string;
}

export namespace LifecyclePolicySummary {
  export const filterSensitiveLog = (obj: LifecyclePolicySummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LifecyclePolicySummary => __isa(o, "LifecyclePolicySummary");
}

/**
 * <p>The request failed because a limit was exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Code?: string;
  /**
   * <p>Value is the type of resource for which a limit was exceeded.</p>
   */
  ResourceType?: string;

  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LimitExceededException => __isa(o, "LimitExceededException");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceRequest => __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>Information about the tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListTagsForResourceResponse => __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p>Specifies optional parameters to add to a policy. The set of valid parameters depends on the combination of policy type and resource type.</p>
 */
export interface _Parameters {
  __type?: "Parameters";
  /**
   * <p>[EBS Snapshot Management – Instance policies only] Indicates whether to exclude the root volume from snapshots created using <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateSnapshots.html">CreateSnapshots</a>. The default is false.</p>
   */
  ExcludeBootVolume?: boolean;
}

export namespace _Parameters {
  export const filterSensitiveLog = (obj: _Parameters): any => ({
    ...obj,
  });
  export const isa = (o: any): o is _Parameters => __isa(o, "Parameters");
}

/**
 * <p>Specifies the configuration of a lifecycle policy.</p>
 */
export interface PolicyDetails {
  __type?: "PolicyDetails";
  /**
   * <p>A set of optional parameters for the policy. </p>
   */
  Parameters?: _Parameters;

  /**
   * <p>The resource type. Use VOLUME to create snapshots of individual volumes or use INSTANCE to create multi-volume snapshots from the volumes for an instance.</p>
   */
  ResourceTypes?: (ResourceTypeValues | string)[];

  /**
   * <p>The valid target resource types and actions a policy can manage. The default is EBS_SNAPSHOT_MANAGEMENT.</p>
   */
  PolicyType?: PolicyTypeValues | string;

  /**
   * <p>The schedule of policy-defined actions.</p>
   */
  Schedules?: Schedule[];

  /**
   * <p>The single tag that identifies targeted resources for this policy.</p>
   */
  TargetTags?: Tag[];
}

export namespace PolicyDetails {
  export const filterSensitiveLog = (obj: PolicyDetails): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PolicyDetails => __isa(o, "PolicyDetails");
}

export enum PolicyTypeValues {
  EBS_SNAPSHOT_MANAGEMENT = "EBS_SNAPSHOT_MANAGEMENT",
}

/**
 * <p>A requested resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Code?: string;
  /**
   * <p>Value is a list of resource IDs that were not found.</p>
   */
  ResourceIds?: string[];

  Message?: string;
  /**
   * <p>Value is the type of resource that was not found.</p>
   */
  ResourceType?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

export enum ResourceTypeValues {
  INSTANCE = "INSTANCE",
  VOLUME = "VOLUME",
}

/**
 * <p>Specifies the retention rule for a lifecycle policy. You can retain snapshots based on either a count or a time interval.</p>
 */
export interface RetainRule {
  __type?: "RetainRule";
  /**
   * <p>The unit of time for time-based retention.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;

  /**
   * <p>The number of snapshots to retain for each volume, up to a maximum of 1000.</p>
   */
  Count?: number;

  /**
   * <p>The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   */
  Interval?: number;
}

export namespace RetainRule {
  export const filterSensitiveLog = (obj: RetainRule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RetainRule => __isa(o, "RetainRule");
}

export enum RetentionIntervalUnitValues {
  DAYS = "DAYS",
  MONTHS = "MONTHS",
  WEEKS = "WEEKS",
  YEARS = "YEARS",
}

/**
 * <p>Specifies a backup schedule.</p>
 */
export interface Schedule {
  __type?: "Schedule";
  /**
   * <p>The rule for cross-Region snapshot copies.</p>
   */
  CrossRegionCopyRules?: CrossRegionCopyRule[];

  /**
   * <p>Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The name of the schedule.</p>
   */
  Name?: string;

  /**
   * <p>The rule for enabling fast snapshot restore.</p>
   */
  FastRestoreRule?: FastRestoreRule;

  /**
   * <p>The retention rule.</p>
   */
  RetainRule?: RetainRule;

  /**
   * <p>The tags to apply to policy-created resources. These user-defined tags are in addition to the AWS-added lifecycle tags.</p>
   */
  TagsToAdd?: Tag[];

  /**
   * <p>A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: <code>$(instance-id)</code> or <code>$(timestamp)</code>. Variable tags are only valid for EBS Snapshot Management – Instance policies.</p>
   */
  VariableTags?: Tag[];

  /**
   * <p>The creation rule.</p>
   */
  CreateRule?: CreateRule;
}

export namespace Schedule {
  export const filterSensitiveLog = (obj: Schedule): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Schedule => __isa(o, "Schedule");
}

export enum SettablePolicyStateValues {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
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
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>One or more tags.</p>
   */
  Tags: { [key: string]: string } | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceRequest => __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TagResourceResponse => __isa(o, "TagResourceResponse");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceRequest => __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UntagResourceResponse => __isa(o, "UntagResourceResponse");
}

export interface UpdateLifecyclePolicyRequest {
  __type?: "UpdateLifecyclePolicyRequest";
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>The desired activation state of the lifecycle policy after creation.</p>
   */
  State?: SettablePolicyStateValues | string;

  /**
   * <p>The configuration of the lifecycle policy. You cannot update the policy type or the resource type.</p>
   */
  PolicyDetails?: PolicyDetails;

  /**
   * <p>A description of the lifecycle policy.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.</p>
   */
  ExecutionRoleArn?: string;
}

export namespace UpdateLifecyclePolicyRequest {
  export const filterSensitiveLog = (obj: UpdateLifecyclePolicyRequest): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateLifecyclePolicyRequest => __isa(o, "UpdateLifecyclePolicyRequest");
}

export interface UpdateLifecyclePolicyResponse {
  __type?: "UpdateLifecyclePolicyResponse";
}

export namespace UpdateLifecyclePolicyResponse {
  export const filterSensitiveLog = (obj: UpdateLifecyclePolicyResponse): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateLifecyclePolicyResponse => __isa(o, "UpdateLifecyclePolicyResponse");
}
