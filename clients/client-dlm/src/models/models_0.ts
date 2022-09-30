// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { DLMServiceException as __BaseException } from "./DLMServiceException";

/**
 * <p>
 *             <b>[Event-based policies only]</b> Specifies the encryption settings for cross-Region snapshot copies created by
 * 			event-based policies.</p>
 */
export interface EncryptionConfiguration {
  /**
   * <p>To encrypt a copy of an unencrypted snapshot when encryption by default is not enabled, enable
   * 			encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this
   * 			parameter is false or when encryption by default is not enabled.</p>
   */
  Encrypted: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use for EBS encryption. If
   * 			this parameter is not specified, the default KMS key for the account is used.</p>
   */
  CmkArn?: string;
}

export enum RetentionIntervalUnitValues {
  DAYS = "DAYS",
  MONTHS = "MONTHS",
  WEEKS = "WEEKS",
  YEARS = "YEARS",
}

/**
 * <p>Specifies a retention rule for cross-Region snapshot copies created by snapshot or
 * 			event-based policies, or cross-Region AMI copies created by AMI policies. After the
 * 			retention period expires, the cross-Region copy is deleted.</p>
 */
export interface CrossRegionCopyRetainRule {
  /**
   * <p>The amount of time to retain a cross-Region snapshot or AMI copy. The maximum is 100 years.
   * 			This is equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   */
  Interval?: number;

  /**
   * <p>The unit of time for time-based retention. For example, to retain a cross-Region copy for
   * 			3 months, specify <code>Interval=3</code> and <code>IntervalUnit=MONTHS</code>.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;
}

/**
 * <p>
 *             <b>[Event-based policies only]</b> Specifies a cross-Region copy action for event-based policies.</p>
 *
 * 		       <note>
 * 			         <p>To specify a cross-Region copy rule for snapshot and AMI policies, use
 * 				<a>CrossRegionCopyRule</a>.</p>
 * 		       </note>
 */
export interface CrossRegionCopyAction {
  /**
   * <p>The target Region.</p>
   */
  Target: string | undefined;

  /**
   * <p>The encryption settings for the copied snapshot.</p>
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * <p>Specifies a retention rule for cross-Region snapshot copies created by snapshot or
   * 			event-based policies, or cross-Region AMI copies created by AMI policies. After the
   * 			retention period expires, the cross-Region copy is deleted.</p>
   */
  RetainRule?: CrossRegionCopyRetainRule;
}

/**
 * <p>
 *             <b>[Event-based policies only]</b> Specifies an action for an event-based policy.</p>
 */
export interface Action {
  /**
   * <p>A descriptive name for the action.</p>
   */
  Name: string | undefined;

  /**
   * <p>The rule for copying shared snapshots across Regions.</p>
   */
  CrossRegionCopy: CrossRegionCopyAction[] | undefined;
}

/**
 * <p>
 *             <b>[Snapshot policies only]</b> Describes the retention rule for archived snapshots. Once the archive
 * 			retention threshold is met, the snapshots are permanently deleted from the archive tier.</p>
 * 		       <note>
 * 			         <p>The archive retention rule must retain snapshots in the archive tier for a minimum
 * 				of 90 days.</p>
 * 		       </note>
 *
 * 		       <p>For <b>count-based schedules</b>, you must specify <b>Count</b>. For <b>age-based
 * 				schedules</b>, you must specify <b>Interval</b> and
 * 				<b> IntervalUnit</b>.</p>
 * 		       <p>For more information about using snapshot archiving, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive">Considerations for
 * 			snapshot lifecycle policies</a>.</p>
 */
export interface RetentionArchiveTier {
  /**
   * <p>The maximum number of snapshots to retain in the archive storage tier for each volume.
   * 			The count must ensure that each snapshot remains in the archive tier for at least
   * 		90 days. For example, if the schedule creates snapshots every 30 days, you must specify a
   * 		count of 3 or more to ensure that each snapshot is archived for at least 90 days.</p>
   */
  Count?: number;

  /**
   * <p>Specifies the period of time to retain snapshots in the archive tier. After this period
   * 			expires, the snapshot is permanently deleted.</p>
   */
  Interval?: number;

  /**
   * <p>The unit of time in which to measure the <b>Interval</b>. For
   * 			example, to retain a snapshots in the archive tier for 6 months, specify <code>Interval=6</code>
   * 			and <code>IntervalUnit=MONTHS</code>.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;
}

/**
 * <p>
 *             <b>[Snapshot policies only]</b> Specifies information about the archive storage tier retention period.</p>
 */
export interface ArchiveRetainRule {
  /**
   * <p>Information about retention period in the Amazon EBS Snapshots Archive. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/snapshot-archive.html">Archive Amazon
   * 				EBS snapshots</a>.</p>
   */
  RetentionArchiveTier: RetentionArchiveTier | undefined;
}

/**
 * <p>
 *             <b>[Snapshot policies only]</b> Specifies a snapshot archiving rule for a schedule.</p>
 */
export interface ArchiveRule {
  /**
   * <p>Information about the retention period for the snapshot archiving rule.</p>
   */
  RetainRule: ArchiveRetainRule | undefined;
}

export enum EventTypeValues {
  SHARE_SNAPSHOT = "shareSnapshot",
}

/**
 * <p>
 *             <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy.</p>
 */
export interface EventParameters {
  /**
   * <p>The type of event. Currently, only snapshot sharing events are supported.</p>
   */
  EventType: EventTypeValues | string | undefined;

  /**
   * <p>The IDs of the Amazon Web Services accounts that can trigger policy by sharing snapshots with your account.
   * 			The policy only runs if one of the specified Amazon Web Services accounts shares a snapshot with your account.</p>
   */
  SnapshotOwner: string[] | undefined;

  /**
   * <p>The snapshot description that can trigger the policy. The description pattern is specified using
   * 			a regular expression. The policy runs only if a snapshot with a description that matches the
   * 			specified pattern is shared with your account.</p>
   * 		       <p>For example, specifying <code>^.*Created for policy: policy-1234567890abcdef0.*$</code>
   * 			configures the policy to run only if snapshots created by policy <code>policy-1234567890abcdef0</code>
   * 			are shared with your account.</p>
   */
  DescriptionRegex: string | undefined;
}

export enum EventSourceValues {
  MANAGED_CWE = "MANAGED_CWE",
}

/**
 * <p>
 *             <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy.</p>
 */
export interface EventSource {
  /**
   * <p>The source of the event. Currently only managed CloudWatch Events rules are supported.</p>
   */
  Type: EventSourceValues | string | undefined;

  /**
   * <p>Information about the event.</p>
   */
  Parameters?: EventParameters;
}

/**
 * <p>Specifies a tag for a resource.</p>
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag value.</p>
   */
  Value: string | undefined;
}

/**
 * <p>
 *             <b>[Snapshot and AMI policies only]</b> Specifies optional parameters for snapshot and AMI policies. The
 * 			set of valid parameters depends on the combination of policy type and target resource
 * 			type.</p>
 * 		       <p>If you choose to exclude boot volumes and you specify tags that consequently exclude
 * 			all of the additional data volumes attached to an instance, then Amazon Data Lifecycle Manager will not create
 * 			any snapshots for the affected instance, and it will emit a <code>SnapshotsCreateFailed</code>
 * 			Amazon CloudWatch metric. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-dlm-cw-metrics.html">Monitor your policies
 * 				using Amazon CloudWatch</a>.</p>
 */
export interface _Parameters {
  /**
   * <p>
   *             <b>[Snapshot policies that target instances only]</b> Indicates whether to exclude the root volume from multi-volume
   * 			snapshot sets. The default is <code>false</code>. If you specify <code>true</code>,
   * 			then the root volumes attached to targeted instances will be excluded from the multi-volume
   * 			snapshot sets created by the policy.</p>
   */
  ExcludeBootVolume?: boolean;

  /**
   * <p>
   *             <b>[AMI policies only]</b> Indicates whether targeted instances are rebooted when the lifecycle policy
   * 			runs. <code>true</code> indicates that targeted instances are not rebooted when the policy
   * 			runs. <code>false</code> indicates that target instances are rebooted when the policy runs.
   * 			The default is <code>true</code> (instances are not rebooted).</p>
   */
  NoReboot?: boolean;

  /**
   * <p>
   *             <b>[Snapshot policies that target instances only]</b> The tags used to identify data (non-root) volumes to exclude from
   * 			multi-volume snapshot sets.</p>
   * 		       <p>If you create a snapshot lifecycle policy that targets instances and you specify tags for
   * 			this parameter, then data volumes with the specified tags that are attached to targeted
   * 			instances will be excluded from the multi-volume snapshot sets created by the policy.</p>
   */
  ExcludeDataVolumeTags?: Tag[];
}

export enum PolicyTypeValues {
  EBS_SNAPSHOT_MANAGEMENT = "EBS_SNAPSHOT_MANAGEMENT",
  EVENT_BASED_POLICY = "EVENT_BASED_POLICY",
  IMAGE_MANAGEMENT = "IMAGE_MANAGEMENT",
}

export enum ResourceLocationValues {
  CLOUD = "CLOUD",
  OUTPOST = "OUTPOST",
}

export enum ResourceTypeValues {
  INSTANCE = "INSTANCE",
  VOLUME = "VOLUME",
}

export enum IntervalUnitValues {
  HOURS = "HOURS",
}

export enum LocationValues {
  CLOUD = "CLOUD",
  OUTPOST_LOCAL = "OUTPOST_LOCAL",
}

/**
 * <p>
 *             <b>[Snapshot and AMI policies only]</b> Specifies when the policy should create snapshots or AMIs.</p>
 * 		       <note>
 * 			         <ul>
 *                <li>
 * 					             <p>You must specify either <b>CronExpression</b>, or
 * 						<b>Interval</b>, <b>IntervalUnit</b>,
 * 						and <b>Times</b>.</p>
 * 				           </li>
 *                <li>
 * 					             <p>If you need to specify an <a>ArchiveRule</a> for the schedule, then you must
 * 						specify a creation frequency of at least 28 days.</p>
 * 				           </li>
 *             </ul>
 * 		       </note>
 */
export interface CreateRule {
  /**
   * <p>
   *             <b>[Snapshot policies only]</b> Specifies the destination for snapshots created by the policy. To create
   * 			snapshots in the same Region as the source resource, specify <code>CLOUD</code>. To create
   * 			snapshots on the same Outpost as the source resource, specify <code>OUTPOST_LOCAL</code>.
   * 			If you omit this parameter, <code>CLOUD</code> is used by default.</p>
   * 		       <p>If the policy targets resources in an Amazon Web Services Region, then you must create
   * 			snapshots in the same Region as the source resource. If the policy targets resources on an
   * 			Outpost, then you can create snapshots on the same Outpost as the source resource, or in
   * 			the Region of that Outpost.</p>
   */
  Location?: LocationValues | string;

  /**
   * <p>The interval between snapshots. The supported values are 1, 2, 3, 4, 6, 8, 12, and 24.</p>
   */
  Interval?: number;

  /**
   * <p>The interval unit.</p>
   */
  IntervalUnit?: IntervalUnitValues | string;

  /**
   * <p>The time, in UTC, to start the operation. The supported format is hh:mm.</p>
   * 		       <p>The operation occurs within a one-hour window following the specified time. If you do
   * 			not specify a time, Amazon Data Lifecycle Manager selects a time within the next 24 hours.</p>
   */
  Times?: string[];

  /**
   * <p>The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1
   * 			year. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron
   * 				expressions</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   */
  CronExpression?: string;
}

/**
 * <p>
 *             <b>[AMI policies only]</b> Specifies an AMI deprecation rule for cross-Region AMI copies created by an AMI policy.</p>
 */
export interface CrossRegionCopyDeprecateRule {
  /**
   * <p>The period after which to deprecate the cross-Region AMI copies. The period must be less than or
   * 			equal to the cross-Region AMI copy retention period, and it can't be greater than 10 years. This is
   * 			equivalent to 120 months, 520 weeks, or 3650 days.</p>
   */
  Interval?: number;

  /**
   * <p>The unit of time in which to measure the <b>Interval</b>. For example,
   * 			to deprecate a cross-Region AMI copy after 3 months, specify <code>Interval=3</code> and
   * 			<code>IntervalUnit=MONTHS</code>.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;
}

/**
 * <p>
 *             <b>[Snapshot and AMI policies only]</b> Specifies a cross-Region copy rule for snapshot and AMI policies.</p>
 * 		       <note>
 * 			         <p>To specify a cross-Region copy action for event-based polices, use
 * 				<a>CrossRegionCopyAction</a>.</p>
 * 		       </note>
 */
export interface CrossRegionCopyRule {
  /**
   * <note>
   * 			         <p>Avoid using this parameter when creating new policies. Instead, use
   * 				<b>Target</b> to specify a target Region or a target
   * 				Outpost for snapshot copies.</p>
   * 			         <p>For policies created before the <b>Target</b> parameter
   * 				was introduced, this parameter indicates the target Region for snapshot copies.</p>
   * 		       </note>
   */
  TargetRegion?: string;

  /**
   * <p>The target Region or the Amazon Resource Name (ARN) of the target Outpost for the
   * 			snapshot copies.</p>
   * 		       <p>Use this parameter instead of <b>TargetRegion</b>. Do not
   * 			specify both.</p>
   */
  Target?: string;

  /**
   * <p>To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled,
   * 			enable encryption using this parameter. Copies of encrypted snapshots are encrypted,
   * 			even if this parameter is false or if encryption by default is not enabled.</p>
   */
  Encrypted: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use for EBS encryption. If this
   * 			parameter is not specified, the default KMS key for the account is used.</p>
   */
  CmkArn?: string;

  /**
   * <p>Indicates whether to copy all user-defined tags from the source snapshot or AMI to the
   * 			cross-Region copy.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The retention rule that indicates how long the cross-Region snapshot or AMI copies are
   * 			to be retained in the destination Region.</p>
   */
  RetainRule?: CrossRegionCopyRetainRule;

  /**
   * <p>
   *             <b>[AMI policies only]</b> The AMI deprecation rule for cross-Region AMI copies created by the rule.</p>
   */
  DeprecateRule?: CrossRegionCopyDeprecateRule;
}

/**
 * <p>
 *             <b>[AMI policies only]</b> Specifies an AMI deprecation rule for AMIs created by an AMI lifecycle policy.</p>
 * 		       <p>For age-based schedules, you must specify <b>Interval</b> and
 * 			<b>IntervalUnit</b>. For count-based schedules, you must specify
 * 			<b>Count</b>.</p>
 */
export interface DeprecateRule {
  /**
   * <p>If the schedule has a count-based retention rule, this parameter specifies the number of oldest
   * 			AMIs to deprecate. The count must be less than or equal to the schedule's retention count, and it
   * 			can't be greater than 1000.</p>
   */
  Count?: number;

  /**
   * <p>If the schedule has an age-based retention rule, this parameter specifies the period after which
   * 			to deprecate AMIs created by the schedule. The period must be less than or equal to the schedule's
   * 			retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520
   * 			weeks, or 3650 days.</p>
   */
  Interval?: number;

  /**
   * <p>The unit of time in which to measure the <b>Interval</b>.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;
}

/**
 * <p>
 *             <b>[Snapshot policies only]</b> Specifies a rule for enabling fast snapshot restore for snapshots created by
 * 			snapshot policies. You can enable fast snapshot restore based on either a count or a
 * 			time interval.</p>
 */
export interface FastRestoreRule {
  /**
   * <p>The number of snapshots to be enabled with fast snapshot restore.</p>
   */
  Count?: number;

  /**
   * <p>The amount of time to enable fast snapshot restore. The maximum is 100 years. This is
   * 			equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   */
  Interval?: number;

  /**
   * <p>The unit of time for enabling fast snapshot restore.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;

  /**
   * <p>The Availability Zones in which to enable fast snapshot restore.</p>
   */
  AvailabilityZones: string[] | undefined;
}

/**
 * <p>
 *             <b>[Snapshot and AMI policies only]</b> Specifies a retention rule for snapshots created by snapshot policies, or for AMIs
 * 			created by AMI policies.</p>
 *
 * 		       <note>
 * 			         <p>For snapshot policies that have an <a>ArchiveRule</a>, this retention rule
 * 				applies to standard tier retention. When the retention threshold is met, snapshots
 * 				are moved from the standard to the archive tier.</p>
 * 			         <p>For snapshot policies that do not have an <b>ArchiveRule</b>, snapshots
 * 				are permanently deleted when this retention threshold is met.</p>
 * 		       </note>
 *
 * 		       <p>You can retain snapshots based on either a count or a time interval.</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <b>Count-based retention</b>
 *                </p>
 * 				           <p>You must specify <b>Count</b>.
 * 					If you specify an <a>ArchiveRule</a> for the schedule, then you can specify a retention count of
 * 					<code>0</code> to archive snapshots immediately after creation. If you specify a <a>FastRestoreRule</a>,
 * 					<a>ShareRule</a>, or a <a>CrossRegionCopyRule</a>, then you must specify a retention count
 * 					of <code>1</code> or more.</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 *                   <b>Age-based retention</b>
 *                </p>
 * 				           <p>You must specify <b>Interval</b>
 * 					and <b>IntervalUnit</b>. If you specify an <a>ArchiveRule</a> for the
 * 					schedule, then you can specify a retention interval of <code>0</code> days to archive snapshots immediately
 * 					after creation. If you specify a <a>FastRestoreRule</a>, <a>ShareRule</a>, or a
 * 					<a>CrossRegionCopyRule</a>, then you must specify a retention interval of <code>1</code> day or
 * 					more.</p>
 * 			         </li>
 *          </ul>
 */
export interface RetainRule {
  /**
   * <p>The number of snapshots to retain for each volume, up to a maximum of 1000. For example if you want to
   * 			retain a maximum of three snapshots, specify <code>3</code>. When the fourth snapshot is created, the
   * 			oldest retained snapshot is deleted, or it is moved to the archive tier if you have specified an
   * 			<a>ArchiveRule</a>.</p>
   */
  Count?: number;

  /**
   * <p>The amount of time to retain each snapshot. The maximum is 100 years. This is
   * 			equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   */
  Interval?: number;

  /**
   * <p>The unit of time for time-based retention. For example, to retain snapshots for 3 months, specify
   * 			<code>Interval=3</code> and <code>IntervalUnit=MONTHS</code>. Once the snapshot has been retained for
   * 			3 months, it is deleted, or it is moved to the archive tier if you have specified an
   * 			<a>ArchiveRule</a>.</p>
   */
  IntervalUnit?: RetentionIntervalUnitValues | string;
}

/**
 * <p>
 *             <b>[Snapshot policies only]</b> Specifies a rule for sharing snapshots across Amazon Web Services accounts.</p>
 */
export interface ShareRule {
  /**
   * <p>The IDs of the Amazon Web Services accounts with which to share the snapshots.</p>
   */
  TargetAccounts: string[] | undefined;

  /**
   * <p>The period after which snapshots that are shared with other Amazon Web Services accounts are automatically unshared.</p>
   */
  UnshareInterval?: number;

  /**
   * <p>The unit of time for the automatic unsharing interval.</p>
   */
  UnshareIntervalUnit?: RetentionIntervalUnitValues | string;
}

/**
 * <p>
 *             <b>[Snapshot and AMI policies only]</b> Specifies a schedule for a snapshot or AMI lifecycle policy.</p>
 */
export interface Schedule {
  /**
   * <p>The name of the schedule.</p>
   */
  Name?: string;

  /**
   * <p>Copy all user-defined tags on a source volume to snapshots of the volume created by
   * 			this policy.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The tags to apply to policy-created resources. These user-defined tags are in addition
   * 			to the Amazon Web Services-added lifecycle tags.</p>
   */
  TagsToAdd?: Tag[];

  /**
   * <p>
   *             <b>[AMI policies and snapshot policies that target instances only]</b>
   * 			A collection of key/value pairs with values determined dynamically when the policy is
   * 			executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two
   * 			following formats: <code>$(instance-id)</code> or <code>$(timestamp)</code>. Variable
   * 			tags are only valid for EBS Snapshot Management – Instance policies.</p>
   */
  VariableTags?: Tag[];

  /**
   * <p>The creation rule.</p>
   */
  CreateRule?: CreateRule;

  /**
   * <p>The retention rule for snapshots or AMIs created by the policy.</p>
   */
  RetainRule?: RetainRule;

  /**
   * <p>
   *             <b>[Snapshot policies only]</b> The rule for enabling fast snapshot restore.</p>
   */
  FastRestoreRule?: FastRestoreRule;

  /**
   * <p>Specifies a rule for copying snapshots or AMIs across regions.</p>
   *
   * 		       <note>
   *             <p>You can't specify cross-Region copy rules for policies that create snapshots on an Outpost.
   * 			If the policy creates snapshots in a Region, then snapshots can be copied to up to three
   * 			Regions or Outposts.</p>
   *          </note>
   */
  CrossRegionCopyRules?: CrossRegionCopyRule[];

  /**
   * <p>
   *             <b>[Snapshot policies only]</b> The rule for sharing snapshots with other Amazon Web Services accounts.</p>
   */
  ShareRules?: ShareRule[];

  /**
   * <p>
   *             <b>[AMI policies only]</b> The AMI deprecation rule for the schedule.</p>
   */
  DeprecateRule?: DeprecateRule;

  /**
   * <p>
   *             <b>[Snapshot policies that target volumes only]</b> The snapshot archiving rule for the schedule. When you specify an archiving
   * 			rule, snapshots are automatically moved from the standard tier to the archive tier once the schedule's
   * 			retention threshold is met. Snapshots are then retained in the archive tier for the archive retention
   * 			period that you specify. </p>
   * 		       <p>For more information about using snapshot archiving, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive">Considerations for
   * 				snapshot lifecycle policies</a>.</p>
   */
  ArchiveRule?: ArchiveRule;
}

/**
 * <p>
 *             <b>[All policy types]</b> Specifies the configuration of a lifecycle policy.</p>
 */
export interface PolicyDetails {
  /**
   * <p>
   *             <b>[All policy types]</b> The valid target resource types and actions a policy can manage. Specify <code>EBS_SNAPSHOT_MANAGEMENT</code>
   * 			to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify <code>IMAGE_MANAGEMENT</code>
   * 			to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify <code>EVENT_BASED_POLICY </code>
   * 			to create an event-based policy that performs specific actions when a defined event occurs in your Amazon Web Services account.</p>
   * 		       <p>The default is <code>EBS_SNAPSHOT_MANAGEMENT</code>.</p>
   */
  PolicyType?: PolicyTypeValues | string;

  /**
   * <p>
   *             <b>[Snapshot policies only]</b> The target resource type for snapshot and AMI lifecycle policies. Use <code>VOLUME </code>to
   * 			create snapshots of individual volumes or use <code>INSTANCE</code> to create multi-volume
   * 			snapshots from the volumes for an instance.</p>
   */
  ResourceTypes?: (ResourceTypeValues | string)[];

  /**
   * <p>
   *             <b>[Snapshot and AMI policies only]</b> The location of the resources to backup. If the source resources are located in an
   * 			Amazon Web Services Region, specify <code>CLOUD</code>. If the source resources are located on an Outpost
   * 			in your account, specify <code>OUTPOST</code>.</p>
   * 			      <p>If you specify <code>OUTPOST</code>, Amazon Data Lifecycle Manager backs up all resources
   * 				of the specified type with matching target tags across all of the Outposts in your account.</p>
   */
  ResourceLocations?: (ResourceLocationValues | string)[];

  /**
   * <p>
   *             <b>[Snapshot and AMI policies only]</b> The single tag that identifies targeted resources for this policy.</p>
   */
  TargetTags?: Tag[];

  /**
   * <p>
   *             <b>[Snapshot and AMI policies only]</b> The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy
   * 			can have up to four schedules—one mandatory schedule and up to three optional schedules.</p>
   */
  Schedules?: Schedule[];

  /**
   * <p>
   *             <b>[Snapshot and AMI policies only]</b> A set of optional parameters for snapshot and AMI lifecycle policies. </p>
   *
   * 		       <note>
   * 			         <p>If you are modifying a policy that was created or previously modified using the Amazon
   * 				Data Lifecycle Manager console, then you must include this parameter and specify either
   * 				the default values or the new values that you require. You can't omit this parameter or
   * 				set its values to null.</p>
   * 		       </note>
   */
  Parameters?: _Parameters;

  /**
   * <p>
   *             <b>[Event-based policies only]</b>  The event that activates the event-based policy.</p>
   */
  EventSource?: EventSource;

  /**
   * <p>
   *             <b>[Event-based policies only]</b>  The actions to be performed when the  event-based policy is activated. You can specify
   * 			only one action per policy.</p>
   */
  Actions?: Action[];
}

export enum SettablePolicyStateValues {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface CreateLifecyclePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by
   * 			the lifecycle policy.</p>
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are
   * 			supported.</p>
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
  Tags?: Record<string, string>;
}

export interface CreateLifecyclePolicyResponse {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId?: string;
}

/**
 * <p>The service failed in an unexpected way.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  Code?: string;
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
    this.Message = opts.Message;
    this.Code = opts.Code;
  }
}

/**
 * <p>Bad request. The request is missing required parameters or has invalid
 * 			parameters.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>The request omitted one or more required parameters.</p>
   */
  RequiredParameters?: string[];

  /**
   * <p>The request included parameters that cannot be provided together.</p>
   */
  MutuallyExclusiveParameters?: string[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.RequiredParameters = opts.RequiredParameters;
    this.MutuallyExclusiveParameters = opts.MutuallyExclusiveParameters;
  }
}

/**
 * <p>The request failed because a limit was exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>Value is the type of resource for which a limit was exceeded.</p>
   */
  ResourceType?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.ResourceType = opts.ResourceType;
  }
}

export interface DeleteLifecyclePolicyRequest {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId: string | undefined;
}

export interface DeleteLifecyclePolicyResponse {}

/**
 * <p>A requested resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  Code?: string;
  /**
   * <p>Value is the type of resource that was not found.</p>
   */
  ResourceType?: string;

  /**
   * <p>Value is a list of resource IDs that were not found.</p>
   */
  ResourceIds?: string[];
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
    this.Message = opts.Message;
    this.Code = opts.Code;
    this.ResourceType = opts.ResourceType;
    this.ResourceIds = opts.ResourceIds;
  }
}

export enum GettablePolicyStateValues {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  ERROR = "ERROR",
}

export interface GetLifecyclePoliciesRequest {
  /**
   * <p>The identifiers of the data lifecycle policies.</p>
   */
  PolicyIds?: string[];

  /**
   * <p>The activation state.</p>
   */
  State?: GettablePolicyStateValues | string;

  /**
   * <p>The resource type.</p>
   */
  ResourceTypes?: (ResourceTypeValues | string)[];

  /**
   * <p>The target tag for a policy.</p>
   * 		       <p>Tags are strings in the format <code>key=value</code>.</p>
   */
  TargetTags?: string[];

  /**
   * <p>The tags to add to objects created by the policy.</p>
   * 		       <p>Tags are strings in the format <code>key=value</code>.</p>
   * 		       <p>These user-defined tags are added in addition to the Amazon Web Services-added lifecycle tags.</p>
   */
  TagsToAdd?: string[];
}

/**
 * <p>Summary information about a lifecycle policy.</p>
 */
export interface LifecyclePolicySummary {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The description of the lifecycle policy.</p>
   */
  Description?: string;

  /**
   * <p>The activation state of the lifecycle policy.</p>
   */
  State?: GettablePolicyStateValues | string;

  /**
   * <p>The tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The type of policy. <code>EBS_SNAPSHOT_MANAGEMENT</code> indicates that the policy
   * 			manages the lifecycle of Amazon EBS snapshots. <code>IMAGE_MANAGEMENT</code>
   * 			indicates that the policy manages the lifecycle of EBS-backed AMIs.
   * 			<code>EVENT_BASED_POLICY</code> indicates that the policy automates cross-account
   * 			snapshot copies for snapshots that are shared with your account.</p>
   */
  PolicyType?: PolicyTypeValues | string;
}

export interface GetLifecyclePoliciesResponse {
  /**
   * <p>Summary information about the lifecycle policies.</p>
   */
  Policies?: LifecyclePolicySummary[];
}

export interface GetLifecyclePolicyRequest {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId: string | undefined;
}

/**
 * <p>
 *             <b>[All policy types]</b> Detailed information about a snapshot, AMI, or event-based lifecycle policy.</p>
 */
export interface LifecyclePolicy {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The description of the lifecycle policy.</p>
   */
  Description?: string;

  /**
   * <p>The activation state of the lifecycle policy.</p>
   */
  State?: GettablePolicyStateValues | string;

  /**
   * <p>The description of the status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by
   * 			the lifecycle policy.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The local date and time when the lifecycle policy was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The local date and time when the lifecycle policy was last modified.</p>
   */
  DateModified?: Date;

  /**
   * <p>The configuration of the lifecycle policy</p>
   */
  PolicyDetails?: PolicyDetails;

  /**
   * <p>The tags.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyArn?: string;
}

export interface GetLifecyclePolicyResponse {
  /**
   * <p>Detailed information about the lifecycle policy.</p>
   */
  Policy?: LifecyclePolicy;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   */
  Tags?: Record<string, string>;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateLifecyclePolicyRequest {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   */
  PolicyId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by
   * 			the lifecycle policy.</p>
   */
  ExecutionRoleArn?: string;

  /**
   * <p>The desired activation state of the lifecycle policy after creation.</p>
   */
  State?: SettablePolicyStateValues | string;

  /**
   * <p>A description of the lifecycle policy.</p>
   */
  Description?: string;

  /**
   * <p>The configuration of the lifecycle policy. You cannot update the policy type or the
   * 			resource type.</p>
   */
  PolicyDetails?: PolicyDetails;
}

export interface UpdateLifecyclePolicyResponse {}

/**
 * @internal
 */
export const EncryptionConfigurationFilterSensitiveLog = (obj: EncryptionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CrossRegionCopyRetainRuleFilterSensitiveLog = (obj: CrossRegionCopyRetainRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CrossRegionCopyActionFilterSensitiveLog = (obj: CrossRegionCopyAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActionFilterSensitiveLog = (obj: Action): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetentionArchiveTierFilterSensitiveLog = (obj: RetentionArchiveTier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArchiveRetainRuleFilterSensitiveLog = (obj: ArchiveRetainRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArchiveRuleFilterSensitiveLog = (obj: ArchiveRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventParametersFilterSensitiveLog = (obj: EventParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventSourceFilterSensitiveLog = (obj: EventSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const _ParametersFilterSensitiveLog = (obj: _Parameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRuleFilterSensitiveLog = (obj: CreateRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CrossRegionCopyDeprecateRuleFilterSensitiveLog = (obj: CrossRegionCopyDeprecateRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CrossRegionCopyRuleFilterSensitiveLog = (obj: CrossRegionCopyRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeprecateRuleFilterSensitiveLog = (obj: DeprecateRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FastRestoreRuleFilterSensitiveLog = (obj: FastRestoreRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetainRuleFilterSensitiveLog = (obj: RetainRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ShareRuleFilterSensitiveLog = (obj: ShareRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleFilterSensitiveLog = (obj: Schedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyDetailsFilterSensitiveLog = (obj: PolicyDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLifecyclePolicyRequestFilterSensitiveLog = (obj: CreateLifecyclePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLifecyclePolicyResponseFilterSensitiveLog = (obj: CreateLifecyclePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLifecyclePolicyRequestFilterSensitiveLog = (obj: DeleteLifecyclePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLifecyclePolicyResponseFilterSensitiveLog = (obj: DeleteLifecyclePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLifecyclePoliciesRequestFilterSensitiveLog = (obj: GetLifecyclePoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecyclePolicySummaryFilterSensitiveLog = (obj: LifecyclePolicySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLifecyclePoliciesResponseFilterSensitiveLog = (obj: GetLifecyclePoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLifecyclePolicyRequestFilterSensitiveLog = (obj: GetLifecyclePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecyclePolicyFilterSensitiveLog = (obj: LifecyclePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLifecyclePolicyResponseFilterSensitiveLog = (obj: GetLifecyclePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLifecyclePolicyRequestFilterSensitiveLog = (obj: UpdateLifecyclePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateLifecyclePolicyResponseFilterSensitiveLog = (obj: UpdateLifecyclePolicyResponse): any => ({
  ...obj,
});
