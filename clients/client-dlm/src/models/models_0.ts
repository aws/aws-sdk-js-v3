// smithy-typescript generated code
import {
  DefaultPoliciesTypeValues,
  DefaultPolicyTypeValues,
  EventSourceValues,
  EventTypeValues,
  ExecutionHandlerServiceValues,
  GettablePolicyStateValues,
  IntervalUnitValues,
  LocationValues,
  PolicyLanguageValues,
  PolicyTypeValues,
  ResourceLocationValues,
  ResourceTypeValues,
  RetentionIntervalUnitValues,
  SettablePolicyStateValues,
  StageValues,
} from "./enums";

/**
 * <p>
 *             <b>[Event-based policies only]</b> Specifies the encryption settings for cross-Region snapshot copies created by
 * 			event-based policies.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>To encrypt a copy of an unencrypted snapshot when encryption by default is not enabled, enable
   * 			encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this
   * 			parameter is false or when encryption by default is not enabled.</p>
   * @public
   */
  Encrypted: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use for EBS encryption. If
   * 			this parameter is not specified, the default KMS key for the account is used.</p>
   * @public
   */
  CmkArn?: string | undefined;
}

/**
 * <p>Specifies a retention rule for cross-Region snapshot copies created by snapshot or
 * 			event-based policies, or cross-Region AMI copies created by AMI policies. After the
 * 			retention period expires, the cross-Region copy is deleted.</p>
 * @public
 */
export interface CrossRegionCopyRetainRule {
  /**
   * <p>The amount of time to retain a cross-Region snapshot or AMI copy. The maximum is 100 years.
   * 			This is equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The unit of time for time-based retention. For example, to retain a cross-Region copy for
   * 			3 months, specify <code>Interval=3</code> and <code>IntervalUnit=MONTHS</code>.</p>
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * <p>
 *             <b>[Event-based policies only]</b> Specifies a cross-Region copy action for event-based policies.</p>
 *          <note>
 *             <p>To specify a cross-Region copy rule for snapshot and AMI policies, use
 * 				<a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyRule.html">CrossRegionCopyRule</a>.</p>
 *          </note>
 * @public
 */
export interface CrossRegionCopyAction {
  /**
   * <p>The target Region.</p>
   * @public
   */
  Target: string | undefined;

  /**
   * <p>The encryption settings for the copied snapshot.</p>
   * @public
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * <p>Specifies a retention rule for cross-Region snapshot copies created by snapshot or
   * 			event-based policies, or cross-Region AMI copies created by AMI policies. After the
   * 			retention period expires, the cross-Region copy is deleted.</p>
   * @public
   */
  RetainRule?: CrossRegionCopyRetainRule | undefined;
}

/**
 * <p>
 *             <b>[Event-based policies only]</b> Specifies an action for an event-based policy.</p>
 * @public
 */
export interface Action {
  /**
   * <p>A descriptive name for the action.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The rule for copying shared snapshots across Regions.</p>
   * @public
   */
  CrossRegionCopy: CrossRegionCopyAction[] | undefined;
}

/**
 * <p>
 *             <b>[Custom snapshot policies only]</b> Describes the retention rule for archived snapshots. Once the archive
 * 			retention threshold is met, the snapshots are permanently deleted from the archive tier.</p>
 *          <note>
 *             <p>The archive retention rule must retain snapshots in the archive tier for a minimum
 * 				of 90 days.</p>
 *          </note>
 *          <p>For <b>count-based schedules</b>, you must specify <b>Count</b>. For <b>age-based
 * 				schedules</b>, you must specify <b>Interval</b> and
 * 				<b> IntervalUnit</b>.</p>
 *          <p>For more information about using snapshot archiving, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive">Considerations for
 * 			snapshot lifecycle policies</a>.</p>
 * @public
 */
export interface RetentionArchiveTier {
  /**
   * <p>The maximum number of snapshots to retain in the archive storage tier for each volume.
   * 			The count must ensure that each snapshot remains in the archive tier for at least
   * 		90 days. For example, if the schedule creates snapshots every 30 days, you must specify a
   * 		count of 3 or more to ensure that each snapshot is archived for at least 90 days.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>Specifies the period of time to retain snapshots in the archive tier. After this period
   * 			expires, the snapshot is permanently deleted.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The unit of time in which to measure the <b>Interval</b>. For
   * 			example, to retain a snapshots in the archive tier for 6 months, specify <code>Interval=6</code>
   * 			and <code>IntervalUnit=MONTHS</code>.</p>
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * <p>
 *             <b>[Custom snapshot policies only]</b> Specifies information about the archive storage tier retention period.</p>
 * @public
 */
export interface ArchiveRetainRule {
  /**
   * <p>Information about retention period in the Amazon EBS Snapshots Archive. For more information, see
   * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/snapshot-archive.html">Archive Amazon
   * 				EBS snapshots</a>.</p>
   * @public
   */
  RetentionArchiveTier: RetentionArchiveTier | undefined;
}

/**
 * <p>
 *             <b>[Custom snapshot policies only]</b> Specifies a snapshot archiving rule for a schedule.</p>
 * @public
 */
export interface ArchiveRule {
  /**
   * <p>Information about the retention period for the snapshot archiving rule.</p>
   * @public
   */
  RetainRule: ArchiveRetainRule | undefined;
}

/**
 * <p>
 *             <b>[Default policies only]</b> Specifies a destination Region for cross-Region copy actions.</p>
 * @public
 */
export interface CrossRegionCopyTarget {
  /**
   * <p>The target Region, for example <code>us-east-1</code>.</p>
   * @public
   */
  TargetRegion?: string | undefined;
}

/**
 * <p>Specifies a tag for a resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag key.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>
 *             <b>[Default policies only]</b> Specifies exclusion parameters for volumes or instances for which you
 * 			do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs
 * 			for target resources that match any of the specified exclusion parameters.</p>
 * @public
 */
export interface Exclusions {
  /**
   * <p>
   *             <b>[Default policies for EBS snapshots only]</b> Indicates whether to exclude volumes that are attached to
   * 			instances as the boot volume. If you exclude boot volumes, only volumes attached as data
   * 			(non-boot) volumes will be backed up by the policy. To exclude boot volumes, specify
   * 			<code>true</code>.</p>
   * @public
   */
  ExcludeBootVolumes?: boolean | undefined;

  /**
   * <p>
   *             <b>[Default policies for EBS snapshots only]</b> Specifies the volume types to exclude. Volumes of the specified
   * 			types will not be targeted by the policy.</p>
   * @public
   */
  ExcludeVolumeTypes?: string[] | undefined;

  /**
   * <p>
   *             <b>[Default policies for EBS-backed AMIs only]</b> Specifies whether to exclude volumes that have specific tags. </p>
   * @public
   */
  ExcludeTags?: Tag[] | undefined;
}

/**
 * <p>
 *             <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy.</p>
 * @public
 */
export interface EventParameters {
  /**
   * <p>The type of event. Currently, only snapshot sharing events are supported.</p>
   * @public
   */
  EventType: EventTypeValues | undefined;

  /**
   * <p>The IDs of the Amazon Web Services accounts that can trigger policy by sharing snapshots with your account.
   * 			The policy only runs if one of the specified Amazon Web Services accounts shares a snapshot with your account.</p>
   * @public
   */
  SnapshotOwner: string[] | undefined;

  /**
   * <p>The snapshot description that can trigger the policy. The description pattern is specified using
   * 			a regular expression. The policy runs only if a snapshot with a description that matches the
   * 			specified pattern is shared with your account.</p>
   *          <p>For example, specifying <code>^.*Created for policy: policy-1234567890abcdef0.*$</code>
   * 			configures the policy to run only if snapshots created by policy <code>policy-1234567890abcdef0</code>
   * 			are shared with your account.</p>
   * @public
   */
  DescriptionRegex: string | undefined;
}

/**
 * <p>
 *             <b>[Event-based policies only]</b> Specifies an event that activates an event-based policy.</p>
 * @public
 */
export interface EventSource {
  /**
   * <p>The source of the event. Currently only managed CloudWatch Events rules are supported.</p>
   * @public
   */
  Type: EventSourceValues | undefined;

  /**
   * <p>Information about the event.</p>
   * @public
   */
  Parameters?: EventParameters | undefined;
}

/**
 * <p>
 *             <b>[Custom snapshot and AMI policies only]</b> Specifies optional parameters for snapshot and AMI policies. The
 * 			set of valid parameters depends on the combination of policy type and target resource
 * 			type.</p>
 *          <p>If you choose to exclude boot volumes and you specify tags that consequently exclude
 * 			all of the additional data volumes attached to an instance, then Amazon Data Lifecycle Manager will not create
 * 			any snapshots for the affected instance, and it will emit a <code>SnapshotsCreateFailed</code>
 * 			Amazon CloudWatch metric. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-dlm-cw-metrics.html">Monitor your policies
 * 				using Amazon CloudWatch</a>.</p>
 * @public
 */
export interface _Parameters {
  /**
   * <p>
   *             <b>[Custom snapshot policies that target instances only]</b> Indicates whether to exclude the root volume from multi-volume
   * 			snapshot sets. The default is <code>false</code>. If you specify <code>true</code>,
   * 			then the root volumes attached to targeted instances will be excluded from the multi-volume
   * 			snapshot sets created by the policy.</p>
   * @public
   */
  ExcludeBootVolume?: boolean | undefined;

  /**
   * <p>
   *             <b>[Custom AMI policies only]</b> Indicates whether targeted instances are rebooted when the lifecycle policy
   * 			runs. <code>true</code> indicates that targeted instances are not rebooted when the policy
   * 			runs. <code>false</code> indicates that target instances are rebooted when the policy runs.
   * 			The default is <code>true</code> (instances are not rebooted).</p>
   * @public
   */
  NoReboot?: boolean | undefined;

  /**
   * <p>
   *             <b>[Custom snapshot policies that target instances only]</b> The tags used to identify data (non-root) volumes to exclude from
   * 			multi-volume snapshot sets.</p>
   *          <p>If you create a snapshot lifecycle policy that targets instances and you specify tags for
   * 			this parameter, then data volumes with the specified tags that are attached to targeted
   * 			instances will be excluded from the multi-volume snapshot sets created by the policy.</p>
   * @public
   */
  ExcludeDataVolumeTags?: Tag[] | undefined;
}

/**
 * <p>
 *             <b>[Custom snapshot policies that target instances only]</b> Information about pre and/or post scripts for a
 * 			snapshot lifecycle policy that targets instances. For more information, see
 * 			<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/automate-app-consistent-backups.html">
 * 				Automating application-consistent snapshots with pre and post scripts</a>.</p>
 * @public
 */
export interface Script {
  /**
   * <p>Indicate which scripts Amazon Data Lifecycle Manager should run on target instances. Pre scripts
   * 			run before Amazon Data Lifecycle Manager initiates snapshot creation. Post scripts run after Amazon Data Lifecycle Manager
   * 			initiates snapshot creation.</p>
   *          <ul>
   *             <li>
   *                <p>To run a pre script only, specify <code>PRE</code>. In this case,
   * 					Amazon Data Lifecycle Manager calls the SSM document with the <code>pre-script</code> parameter
   * 					before initiating snapshot creation.</p>
   *             </li>
   *             <li>
   *                <p>To run a post script only, specify <code>POST</code>. In this case,
   * 					Amazon Data Lifecycle Manager calls the SSM document with the <code>post-script</code> parameter
   * 					after initiating snapshot creation.</p>
   *             </li>
   *             <li>
   *                <p>To run both pre and post scripts, specify both <code>PRE</code> and <code>POST</code>. In
   * 					this case, Amazon Data Lifecycle Manager calls the SSM document with the <code>pre-script</code>
   * 					parameter before initiating snapshot creation, and then it calls the SSM
   * 					document again with the <code>post-script</code> parameter after initiating
   * 					snapshot creation.</p>
   *             </li>
   *          </ul>
   *          <p>If you are automating VSS Backups, omit this parameter.</p>
   *          <p>Default: PRE and POST</p>
   * @public
   */
  Stages?: StageValues[] | undefined;

  /**
   * <p>Indicates the service used to execute the pre and/or post scripts.</p>
   *          <ul>
   *             <li>
   *                <p>If you are using custom SSM documents or automating
   * 					application-consistent snapshots of SAP HANA workloads, specify
   * 					<code>AWS_SYSTEMS_MANAGER</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are automating VSS Backups, omit this parameter.</p>
   *             </li>
   *          </ul>
   *          <p>Default: AWS_SYSTEMS_MANAGER</p>
   * @public
   */
  ExecutionHandlerService?: ExecutionHandlerServiceValues | undefined;

  /**
   * <p>The SSM document that includes the pre and/or post scripts to run.</p>
   *          <ul>
   *             <li>
   *                <p>If you are automating VSS backups, specify <code>AWS_VSS_BACKUP</code>.
   * 					In this case, Amazon Data Lifecycle Manager automatically uses the <code>AWSEC2-CreateVssSnapshot</code>
   * 					SSM document.</p>
   *             </li>
   *             <li>
   *                <p>If you are automating application-consistent snapshots for SAP HANA
   * 					workloads, specify <code>AWSSystemsManagerSAP-CreateDLMSnapshotForSAPHANA</code>.</p>
   *             </li>
   *             <li>
   *                <p>If you are using a custom SSM document that you own, specify either
   * 					the name or ARN of the SSM document. If you are using a custom SSM
   * 					document that is shared with you, specify the ARN of the SSM document.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ExecutionHandler: string | undefined;

  /**
   * <p>Indicates whether Amazon Data Lifecycle Manager should default to crash-consistent snapshots if the
   * 			pre script fails.</p>
   *          <ul>
   *             <li>
   *                <p>To default to crash consistent snapshot if the pre script fails,
   * 					specify <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>To skip the instance for snapshot creation if the pre script fails,
   * 					specify <code>false</code>.</p>
   *             </li>
   *          </ul>
   *          <p>This parameter is supported only if you run a pre script. If you run a post
   * 			script only, omit this parameter.</p>
   *          <p>Default: true</p>
   * @public
   */
  ExecuteOperationOnScriptFailure?: boolean | undefined;

  /**
   * <p>Specifies a timeout period, in seconds, after which Amazon Data Lifecycle Manager fails the script
   * 			run attempt if it has not completed. If a script does not complete within its
   * 			timeout period, Amazon Data Lifecycle Manager fails the attempt. The timeout period applies to the pre
   * 			and post scripts individually. </p>
   *          <p>If you are automating VSS Backups, omit this parameter.</p>
   *          <p>Default: 10</p>
   * @public
   */
  ExecutionTimeout?: number | undefined;

  /**
   * <p>Specifies the number of times Amazon Data Lifecycle Manager should retry scripts that fail.</p>
   *          <ul>
   *             <li>
   *                <p>If the pre script fails, Amazon Data Lifecycle Manager retries the entire snapshot creation
   * 					process, including running the pre and post scripts.</p>
   *             </li>
   *             <li>
   *                <p>If the post script fails, Amazon Data Lifecycle Manager retries the post script only; in this
   * 					case, the pre script will have completed and the snapshot might have
   * 					been created.</p>
   *             </li>
   *          </ul>
   *          <p>If you do not want Amazon Data Lifecycle Manager to retry failed scripts, specify <code>0</code>.</p>
   *          <p>Default: 0</p>
   * @public
   */
  MaximumRetryCount?: number | undefined;
}

/**
 * <p>
 *             <b>[Custom snapshot and AMI policies only]</b> Specifies when the policy should create snapshots or AMIs.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must specify either <b>CronExpression</b>, or
 * 						<b>Interval</b>, <b>IntervalUnit</b>,
 * 						and <b>Times</b>.</p>
 *                </li>
 *                <li>
 *                   <p>If you need to specify an <a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html">ArchiveRule</a>
 * 						for the schedule, then you must specify a creation frequency of at least
 * 						28 days.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @public
 */
export interface CreateRule {
  /**
   * <p>
   *             <b>[Custom snapshot policies only]</b> Specifies the destination for snapshots created by the policy. The
   * 			allowed destinations depend on the location of the targeted resources.</p>
   *          <ul>
   *             <li>
   *                <p>If the policy targets resources in a Region, then you must create snapshots
   * 					in the same Region as the source resource.</p>
   *             </li>
   *             <li>
   *                <p>If the policy targets resources in a Local Zone, you can create snapshots in
   * 					the same Local Zone or in its parent Region.</p>
   *             </li>
   *             <li>
   *                <p>If the policy targets resources on an Outpost, then you can create snapshots
   * 					on the same Outpost or in its parent Region.</p>
   *             </li>
   *          </ul>
   *          <p>Specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>To create snapshots in the same Region as the source resource, specify
   * 					<code>CLOUD</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create snapshots in the same Local Zone as the source resource, specify
   * 					<code>LOCAL_ZONE</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create snapshots on the same Outpost as the source resource, specify
   * 					<code>OUTPOST_LOCAL</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>CLOUD</code>
   *          </p>
   * @public
   */
  Location?: LocationValues | undefined;

  /**
   * <p>The interval between snapshots. The supported values are 1, 2, 3, 4, 6, 8, 12, and 24.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The interval unit.</p>
   * @public
   */
  IntervalUnit?: IntervalUnitValues | undefined;

  /**
   * <p>The time, in UTC, to start the operation. The supported format is hh:mm.</p>
   *          <p>The operation occurs within a one-hour window following the specified time. If you do
   * 			not specify a time, Amazon Data Lifecycle Manager selects a time within the next 24 hours.</p>
   * @public
   */
  Times?: string[] | undefined;

  /**
   * <p>The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1
   * 			year. For more information, see the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cron-expressions.html">Cron expressions reference</a> in
   * 			the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  CronExpression?: string | undefined;

  /**
   * <p>
   *             <b>[Custom snapshot policies that target instances only]</b> Specifies pre and/or post scripts for a snapshot lifecycle policy
   * 			that targets instances. This is useful for creating application-consistent snapshots, or for
   * 			performing specific administrative tasks before or after Amazon Data Lifecycle Manager initiates snapshot creation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/automate-app-consistent-backups.html">Automating
   * 				application-consistent snapshots with pre and post scripts</a>.</p>
   * @public
   */
  Scripts?: Script[] | undefined;
}

/**
 * <p>
 *             <b>[Custom AMI policies only]</b> Specifies an AMI deprecation rule for cross-Region AMI copies created by an AMI policy.</p>
 * @public
 */
export interface CrossRegionCopyDeprecateRule {
  /**
   * <p>The period after which to deprecate the cross-Region AMI copies. The period must be less than or
   * 			equal to the cross-Region AMI copy retention period, and it can't be greater than 10 years. This is
   * 			equivalent to 120 months, 520 weeks, or 3650 days.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The unit of time in which to measure the <b>Interval</b>. For example,
   * 			to deprecate a cross-Region AMI copy after 3 months, specify <code>Interval=3</code> and
   * 			<code>IntervalUnit=MONTHS</code>.</p>
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * <p>
 *             <b>[Custom snapshot and AMI policies only]</b> Specifies a cross-Region copy rule for a snapshot and AMI policies.</p>
 *          <note>
 *             <p>To specify a cross-Region copy action for event-based polices, use
 * 				<a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyAction.html">CrossRegionCopyAction</a>.</p>
 *          </note>
 * @public
 */
export interface CrossRegionCopyRule {
  /**
   * <note>
   *             <p>Use this parameter for AMI policies only. For snapshot policies, use
   * 				<b>Target</b> instead. For snapshot policies
   * 				created before the <b>Target</b> parameter
   * 				was introduced, this parameter indicates the target Region for snapshot
   * 				copies.</p>
   *             <p></p>
   *          </note>
   *          <p>
   *             <b>[Custom AMI policies only]</b> The target Region or the Amazon Resource Name (ARN) of the target Outpost for the
   * 			snapshot copies.</p>
   * @public
   */
  TargetRegion?: string | undefined;

  /**
   * <note>
   *             <p>Use this parameter for snapshot policies only. For AMI policies, use
   * 				<b>TargetRegion</b> instead.</p>
   *          </note>
   *          <p>
   *             <b>[Custom snapshot policies only]</b> The target Region or the Amazon Resource Name (ARN) of the target Outpost for the
   * 			snapshot copies.</p>
   * @public
   */
  Target?: string | undefined;

  /**
   * <p>To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled,
   * 			enable encryption using this parameter. Copies of encrypted snapshots are encrypted,
   * 			even if this parameter is false or if encryption by default is not enabled.</p>
   * @public
   */
  Encrypted: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to use for EBS encryption. If this
   * 			parameter is not specified, the default KMS key for the account is used.</p>
   * @public
   */
  CmkArn?: string | undefined;

  /**
   * <p>Indicates whether to copy all user-defined tags from the source snapshot or AMI to the
   * 			cross-Region copy.</p>
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * <p>The retention rule that indicates how long the cross-Region snapshot or AMI copies are
   * 			to be retained in the destination Region.</p>
   * @public
   */
  RetainRule?: CrossRegionCopyRetainRule | undefined;

  /**
   * <p>
   *             <b>[Custom AMI policies only]</b> The AMI deprecation rule for cross-Region AMI copies created by the rule.</p>
   * @public
   */
  DeprecateRule?: CrossRegionCopyDeprecateRule | undefined;
}

/**
 * <p>
 *             <b>[Custom AMI policies only]</b> Specifies an AMI deprecation rule for AMIs created by an AMI lifecycle policy.</p>
 *          <p>For age-based schedules, you must specify <b>Interval</b> and
 * 			<b>IntervalUnit</b>. For count-based schedules, you must specify
 * 			<b>Count</b>.</p>
 * @public
 */
export interface DeprecateRule {
  /**
   * <p>If the schedule has a count-based retention rule, this parameter specifies the number of oldest
   * 			AMIs to deprecate. The count must be less than or equal to the schedule's retention count, and it
   * 			can't be greater than 1000.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>If the schedule has an age-based retention rule, this parameter specifies the period after which
   * 			to deprecate AMIs created by the schedule. The period must be less than or equal to the schedule's
   * 			retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520
   * 			weeks, or 3650 days.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The unit of time in which to measure the <b>Interval</b>.</p>
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * <p>
 *             <b>[Custom snapshot policies only]</b> Specifies a rule for enabling fast snapshot restore for snapshots created by
 * 			snapshot policies. You can enable fast snapshot restore based on either a count or a
 * 			time interval.</p>
 * @public
 */
export interface FastRestoreRule {
  /**
   * <p>The number of snapshots to be enabled with fast snapshot restore.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The amount of time to enable fast snapshot restore. The maximum is 100 years. This is
   * 			equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The unit of time for enabling fast snapshot restore.</p>
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;

  /**
   * <p>The Availability Zones in which to enable fast snapshot restore.</p>
   * @public
   */
  AvailabilityZones: string[] | undefined;
}

/**
 * <p>
 *             <b>[Custom snapshot and AMI policies only]</b> Specifies a retention rule for snapshots created by snapshot policies, or for AMIs
 * 			created by AMI policies.</p>
 *          <note>
 *             <p>For snapshot policies that have an <a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html">ArchiveRule</a>, this retention rule
 * 				applies to standard tier retention. When the retention threshold is met, snapshots
 * 				are moved from the standard to the archive tier.</p>
 *             <p>For snapshot policies that do not have an <b>ArchiveRule</b>, snapshots
 * 				are permanently deleted when this retention threshold is met.</p>
 *          </note>
 *          <p>You can retain snapshots based on either a count or a time interval.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Count-based retention</b>
 *                </p>
 *                <p>You must specify <b>Count</b>.
 * 					If you specify an <a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html">ArchiveRule</a> for the schedule, then you can specify a retention count of
 * 					<code>0</code> to archive snapshots immediately after creation. If you specify a <a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_FastRestoreRule.html">FastRestoreRule</a>,
 * 					<a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_ShareRule.html">ShareRule</a>, or a
 * 					<a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyRule.html">CrossRegionCopyRule</a>, then you must specify a retention count
 * 					of <code>1</code> or more.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Age-based retention</b>
 *                </p>
 *                <p>You must specify <b>Interval</b>
 * 					and <b>IntervalUnit</b>. If you specify an <a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html">ArchiveRule</a> for the
 * 					schedule, then you can specify a retention interval of <code>0</code> days to archive snapshots immediately
 * 					after creation. If you specify a <a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_FastRestoreRule.html">FastRestoreRule</a>, <a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_ShareRule.html">ShareRule</a>, or a
 * 					<a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyRule.html">CrossRegionCopyRule</a>,
 * 					then you must specify a retention interval of <code>1</code> day or
 * 					more.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface RetainRule {
  /**
   * <p>The number of snapshots to retain for each volume, up to a maximum of 1000. For example if you want to
   * 			retain a maximum of three snapshots, specify <code>3</code>. When the fourth snapshot is created, the
   * 			oldest retained snapshot is deleted, or it is moved to the archive tier if you have specified an
   * 			<a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html">ArchiveRule</a>.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The amount of time to retain each snapshot. The maximum is 100 years. This is
   * 			equivalent to 1200 months, 5200 weeks, or 36500 days.</p>
   * @public
   */
  Interval?: number | undefined;

  /**
   * <p>The unit of time for time-based retention. For example, to retain snapshots for 3 months, specify
   * 			<code>Interval=3</code> and <code>IntervalUnit=MONTHS</code>. Once the snapshot has been retained for
   * 			3 months, it is deleted, or it is moved to the archive tier if you have specified an
   * 			<a href="https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html">ArchiveRule</a>.</p>
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * <p>
 *             <b>[Custom snapshot policies only]</b> Specifies a rule for sharing snapshots across Amazon Web Services accounts.</p>
 * @public
 */
export interface ShareRule {
  /**
   * <p>The IDs of the Amazon Web Services accounts with which to share the snapshots.</p>
   * @public
   */
  TargetAccounts: string[] | undefined;

  /**
   * <p>The period after which snapshots that are shared with other Amazon Web Services accounts are automatically unshared.</p>
   * @public
   */
  UnshareInterval?: number | undefined;

  /**
   * <p>The unit of time for the automatic unsharing interval.</p>
   * @public
   */
  UnshareIntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * <p>
 *             <b>[Custom snapshot and AMI policies only]</b> Specifies a schedule for a snapshot or AMI lifecycle policy.</p>
 * @public
 */
export interface Schedule {
  /**
   * <p>The name of the schedule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Copy all user-defined tags on a source volume to snapshots of the volume created by
   * 			this policy.</p>
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * <p>The tags to apply to policy-created resources. These user-defined tags are in addition
   * 			to the Amazon Web Services-added lifecycle tags.</p>
   * @public
   */
  TagsToAdd?: Tag[] | undefined;

  /**
   * <p>
   *             <b>[AMI policies and snapshot policies that target instances only]</b>
   * 			A collection of key/value pairs with values determined dynamically when the policy is
   * 			executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two
   * 			following formats: <code>$(instance-id)</code> or <code>$(timestamp)</code>. Variable
   * 			tags are only valid for EBS Snapshot Management – Instance policies.</p>
   * @public
   */
  VariableTags?: Tag[] | undefined;

  /**
   * <p>The creation rule.</p>
   * @public
   */
  CreateRule?: CreateRule | undefined;

  /**
   * <p>The retention rule for snapshots or AMIs created by the policy.</p>
   * @public
   */
  RetainRule?: RetainRule | undefined;

  /**
   * <p>
   *             <b>[Custom snapshot policies only]</b> The rule for enabling fast snapshot restore.</p>
   * @public
   */
  FastRestoreRule?: FastRestoreRule | undefined;

  /**
   * <p>Specifies a rule for copying snapshots or AMIs across Regions.</p>
   *          <note>
   *             <p>You can't specify cross-Region copy rules for policies that create snapshots on an
   * 				Outpost or in a Local Zone. If the policy creates snapshots in a Region, then snapshots
   * 				can be copied to up to three Regions or Outposts.</p>
   *          </note>
   * @public
   */
  CrossRegionCopyRules?: CrossRegionCopyRule[] | undefined;

  /**
   * <p>
   *             <b>[Custom snapshot policies only]</b> The rule for sharing snapshots with other Amazon Web Services accounts.</p>
   * @public
   */
  ShareRules?: ShareRule[] | undefined;

  /**
   * <p>
   *             <b>[Custom AMI policies only]</b> The AMI deprecation rule for the schedule.</p>
   * @public
   */
  DeprecateRule?: DeprecateRule | undefined;

  /**
   * <p>
   *             <b>[Custom snapshot policies that target volumes only]</b> The snapshot archiving rule for the schedule. When you specify an archiving
   * 			rule, snapshots are automatically moved from the standard tier to the archive tier once the schedule's
   * 			retention threshold is met. Snapshots are then retained in the archive tier for the archive retention
   * 			period that you specify. </p>
   *          <p>For more information about using snapshot archiving, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive">Considerations for
   * 				snapshot lifecycle policies</a>.</p>
   * @public
   */
  ArchiveRule?: ArchiveRule | undefined;
}

/**
 * <p>Specifies the configuration of a lifecycle policy.</p>
 * @public
 */
export interface PolicyDetails {
  /**
   * <p>The type of policy. Specify <code>EBS_SNAPSHOT_MANAGEMENT</code>
   * 			to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify <code>IMAGE_MANAGEMENT</code>
   * 			to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify <code>EVENT_BASED_POLICY </code>
   * 			to create an event-based policy that performs specific actions when a defined event occurs in your Amazon Web Services account.</p>
   *          <p>The default is <code>EBS_SNAPSHOT_MANAGEMENT</code>.</p>
   * @public
   */
  PolicyType?: PolicyTypeValues | undefined;

  /**
   * <p>
   *             <b>[Custom snapshot policies only]</b> The target resource type for snapshot and AMI lifecycle policies. Use <code>VOLUME </code>to
   * 			create snapshots of individual volumes or use <code>INSTANCE</code> to create multi-volume
   * 			snapshots from the volumes for an instance.</p>
   * @public
   */
  ResourceTypes?: ResourceTypeValues[] | undefined;

  /**
   * <p>
   *             <b>[Custom snapshot and AMI policies only]</b> The location of the resources to backup.</p>
   *          <ul>
   *             <li>
   *                <p>If the source resources are located in a Region, specify <code>CLOUD</code>. In this case,
   * 					the policy targets all resources of the specified type with matching target tags across all
   * 					Availability Zones in the Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>[Custom snapshot policies only]</b> If the source resources are located in a Local Zone, specify <code>LOCAL_ZONE</code>.
   * 					In this case, the policy targets all resources of the specified type with matching target
   * 					tags across all Local Zones in the Region.</p>
   *             </li>
   *             <li>
   *                <p>If the source resources are located on an Outpost in your account, specify <code>OUTPOST</code>.
   * 					In this case, the policy targets all resources of the specified type with matching target
   * 					tags across all of the Outposts in your account.</p>
   *             </li>
   *          </ul>
   *          <p></p>
   * @public
   */
  ResourceLocations?: ResourceLocationValues[] | undefined;

  /**
   * <p>
   *             <b>[Custom snapshot and AMI policies only]</b> The single tag that identifies targeted resources for this policy.</p>
   * @public
   */
  TargetTags?: Tag[] | undefined;

  /**
   * <p>
   *             <b>[Custom snapshot and AMI policies only]</b> The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy
   * 			can have up to four schedules—one mandatory schedule and up to three optional schedules.</p>
   * @public
   */
  Schedules?: Schedule[] | undefined;

  /**
   * <p>
   *             <b>[Custom snapshot and AMI policies only]</b> A set of optional parameters for snapshot and AMI lifecycle policies. </p>
   *          <note>
   *             <p>If you are modifying a policy that was created or previously modified using the Amazon
   * 				Data Lifecycle Manager console, then you must include this parameter and specify either
   * 				the default values or the new values that you require. You can't omit this parameter or
   * 				set its values to null.</p>
   *          </note>
   * @public
   */
  Parameters?: _Parameters | undefined;

  /**
   * <p>
   *             <b>[Event-based policies only]</b>  The event that activates the event-based policy.</p>
   * @public
   */
  EventSource?: EventSource | undefined;

  /**
   * <p>
   *             <b>[Event-based policies only]</b>  The actions to be performed when the  event-based policy is activated. You can specify
   * 			only one action per policy.</p>
   * @public
   */
  Actions?: Action[] | undefined;

  /**
   * <p>The type of policy to create. Specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SIMPLIFIED</code> To create a default policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STANDARD</code> To create a custom policy.</p>
   *             </li>
   *          </ul>
   * @public
   */
  PolicyLanguage?: PolicyLanguageValues | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specify the type of default policy to create.</p>
   *          <ul>
   *             <li>
   *                <p>To create a default policy for EBS snapshots, that creates snapshots of all volumes in the
   * 					Region that do not have recent backups, specify <code>VOLUME</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create a default policy for EBS-backed AMIs, that creates EBS-backed
   * 					AMIs from all instances in the Region that do not have recent backups, specify
   * 					<code>INSTANCE</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceType?: ResourceTypeValues | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies how often the policy should run and create snapshots or AMIs.
   * 			The creation frequency can range from 1 to 7 days. If you do not specify a value, the
   * 			default is 1.</p>
   *          <p>Default: 1</p>
   * @public
   */
  CreateInterval?: number | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies how long the policy should retain snapshots or AMIs before
   * 			deleting them. The retention period can range from 2 to 14 days, but it must be greater
   * 			than the creation frequency to ensure that the policy retains at least 1 snapshot or
   * 			AMI at any given time. If you do not specify a value, the default is 7.</p>
   *          <p>Default: 7</p>
   * @public
   */
  RetainInterval?: number | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Indicates whether the policy should copy tags from the source resource
   * 			to the snapshot or AMI. If you do not specify a value, the default is <code>false</code>.</p>
   *          <p>Default: false</p>
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies destination Regions for snapshot or AMI copies. You can specify
   * 			up to 3 destination Regions. If you do not want to create cross-Region copies, omit this
   * 			parameter.</p>
   * @public
   */
  CrossRegionCopyTargets?: CrossRegionCopyTarget[] | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Defines the snapshot or AMI retention behavior for the policy if the
   * 			source volume or instance is deleted, or if the policy enters the error, disabled, or
   * 			deleted state.</p>
   *          <p>By default (<b>ExtendDeletion=false</b>):</p>
   *          <ul>
   *             <li>
   *                <p>If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously
   * 					created snapshots or AMIs, up to but not including the last one, based on the
   * 					specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs,
   * 					including the last one, specify <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting
   * 					snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs,
   * 					including the last one, if the policy enters one of these states, specify
   * 					<code>true</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If you enable extended deletion (<b>ExtendDeletion=true</b>),
   * 			you override both default behaviors simultaneously.</p>
   *          <p>If you do not specify a value, the default is <code>false</code>.</p>
   *          <p>Default: false</p>
   * @public
   */
  ExtendDeletion?: boolean | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies exclusion parameters for volumes or instances for which you
   * 			do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs
   * 			for target resources that match any of the specified exclusion parameters.</p>
   * @public
   */
  Exclusions?: Exclusions | undefined;
}

/**
 * @public
 */
export interface CreateLifecyclePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by
   * 			the lifecycle policy.</p>
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * <p>A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are
   * 			supported.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>The activation state of the lifecycle policy after creation.</p>
   * @public
   */
  State: SettablePolicyStateValues | undefined;

  /**
   * <p>The configuration details of the lifecycle policy.</p>
   *          <important>
   *             <p>If you create a default policy, you can specify the request parameters either in
   * 				the request body, or in the PolicyDetails request structure, but not both.</p>
   *          </important>
   * @public
   */
  PolicyDetails?: PolicyDetails | undefined;

  /**
   * <p>The tags to apply to the lifecycle policy during creation.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specify the type of default policy to create.</p>
   *          <ul>
   *             <li>
   *                <p>To create a default policy for EBS snapshots, that creates snapshots of all volumes in the
   * 					Region that do not have recent backups, specify <code>VOLUME</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create a default policy for EBS-backed AMIs, that creates EBS-backed
   * 					AMIs from all instances in the Region that do not have recent backups, specify
   * 					<code>INSTANCE</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DefaultPolicy?: DefaultPolicyTypeValues | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies how often the policy should run and create snapshots or AMIs.
   * 			The creation frequency can range from 1 to 7 days. If you do not specify a value, the
   * 			default is 1.</p>
   *          <p>Default: 1</p>
   * @public
   */
  CreateInterval?: number | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies how long the policy should retain snapshots or AMIs before
   * 			deleting them. The retention period can range from 2 to 14 days, but it must be greater
   * 			than the creation frequency to ensure that the policy retains at least 1 snapshot or
   * 			AMI at any given time. If you do not specify a value, the default is 7.</p>
   *          <p>Default: 7</p>
   * @public
   */
  RetainInterval?: number | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Indicates whether the policy should copy tags from the source resource
   * 			to the snapshot or AMI. If you do not specify a value, the default is <code>false</code>.</p>
   *          <p>Default: false</p>
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Defines the snapshot or AMI retention behavior for the policy if the
   * 			source volume or instance is deleted, or if the policy enters the error, disabled, or
   * 			deleted state.</p>
   *          <p>By default (<b>ExtendDeletion=false</b>):</p>
   *          <ul>
   *             <li>
   *                <p>If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously
   * 				created snapshots or AMIs, up to but not including the last one, based on the
   * 				specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs,
   * 				including the last one, specify <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting
   * 					snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs,
   * 					including the last one, if the policy enters one of these states, specify
   * 					<code>true</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If you enable extended deletion (<b>ExtendDeletion=true</b>),
   * 			you override both default behaviors simultaneously.</p>
   *          <p>If you do not specify a value, the default is <code>false</code>.</p>
   *          <p>Default: false</p>
   * @public
   */
  ExtendDeletion?: boolean | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies destination Regions for snapshot or AMI copies. You can specify
   * 			up to 3 destination Regions. If you do not want to create cross-Region copies, omit this
   * 			parameter.</p>
   * @public
   */
  CrossRegionCopyTargets?: CrossRegionCopyTarget[] | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies exclusion parameters for volumes or instances for which you
   * 			do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs
   * 			for target resources that match any of the specified exclusion parameters.</p>
   * @public
   */
  Exclusions?: Exclusions | undefined;
}

/**
 * @public
 */
export interface CreateLifecyclePolicyResponse {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   * @public
   */
  PolicyId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyRequest {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyResponse {}

/**
 * @public
 */
export interface GetLifecyclePoliciesRequest {
  /**
   * <p>The identifiers of the data lifecycle policies.</p>
   * @public
   */
  PolicyIds?: string[] | undefined;

  /**
   * <p>The activation state.</p>
   * @public
   */
  State?: GettablePolicyStateValues | undefined;

  /**
   * <p>The resource type.</p>
   * @public
   */
  ResourceTypes?: ResourceTypeValues[] | undefined;

  /**
   * <p>The target tag for a policy.</p>
   *          <p>Tags are strings in the format <code>key=value</code>.</p>
   * @public
   */
  TargetTags?: string[] | undefined;

  /**
   * <p>The tags to add to objects created by the policy.</p>
   *          <p>Tags are strings in the format <code>key=value</code>.</p>
   *          <p>These user-defined tags are added in addition to the Amazon Web Services-added lifecycle tags.</p>
   * @public
   */
  TagsToAdd?: string[] | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies the type of default policy to get. Specify one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VOLUME</code> - To get only the default policy for EBS snapshots</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE</code> - To get only the default policy for EBS-backed AMIs</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALL</code> - To get all default policies</p>
   *             </li>
   *          </ul>
   * @public
   */
  DefaultPolicyType?: DefaultPoliciesTypeValues | undefined;
}

/**
 * <p>Summary information about a lifecycle policy.</p>
 * @public
 */
export interface LifecyclePolicySummary {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>The description of the lifecycle policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The activation state of the lifecycle policy.</p>
   * @public
   */
  State?: GettablePolicyStateValues | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The type of policy. <code>EBS_SNAPSHOT_MANAGEMENT</code> indicates that the policy
   * 			manages the lifecycle of Amazon EBS snapshots. <code>IMAGE_MANAGEMENT</code>
   * 			indicates that the policy manages the lifecycle of EBS-backed AMIs.
   * 			<code>EVENT_BASED_POLICY</code> indicates that the policy automates cross-account
   * 			snapshot copies for snapshots that are shared with your account.</p>
   * @public
   */
  PolicyType?: PolicyTypeValues | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> The type of default policy. Values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>VOLUME</code> - Default policy for EBS snapshots</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE</code> - Default policy for EBS-backed AMIs</p>
   *             </li>
   *          </ul>
   * @public
   */
  DefaultPolicy?: boolean | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePoliciesResponse {
  /**
   * <p>Summary information about the lifecycle policies.</p>
   * @public
   */
  Policies?: LifecyclePolicySummary[] | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyRequest {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * <p>Information about a lifecycle policy.</p>
 * @public
 */
export interface LifecyclePolicy {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * <p>The description of the lifecycle policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The activation state of the lifecycle policy.</p>
   * @public
   */
  State?: GettablePolicyStateValues | undefined;

  /**
   * <p>The description of the status.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by
   * 			the lifecycle policy.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>The local date and time when the lifecycle policy was created.</p>
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * <p>The local date and time when the lifecycle policy was last modified.</p>
   * @public
   */
  DateModified?: Date | undefined;

  /**
   * <p>The configuration of the lifecycle policy</p>
   * @public
   */
  PolicyDetails?: PolicyDetails | undefined;

  /**
   * <p>The tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * <p>Indicates whether the policy is a default lifecycle policy or a custom
   * 			lifecycle policy.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code> - the policy is a default policy.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code> - the policy is a custom policy.</p>
   *             </li>
   *          </ul>
   * @public
   */
  DefaultPolicy?: boolean | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyResponse {
  /**
   * <p>Detailed information about the lifecycle policy.</p>
   * @public
   */
  Policy?: LifecyclePolicy | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateLifecyclePolicyRequest {
  /**
   * <p>The identifier of the lifecycle policy.</p>
   * @public
   */
  PolicyId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by
   * 			the lifecycle policy.</p>
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * <p>The desired activation state of the lifecycle policy after creation.</p>
   * @public
   */
  State?: SettablePolicyStateValues | undefined;

  /**
   * <p>A description of the lifecycle policy.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The configuration of the lifecycle policy. You cannot update the policy type or the
   * 			resource type.</p>
   * @public
   */
  PolicyDetails?: PolicyDetails | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies how often the policy should run and create snapshots or AMIs.
   * 			The creation frequency can range from 1 to 7 days.</p>
   * @public
   */
  CreateInterval?: number | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies how long the policy should retain snapshots or AMIs before
   * 			deleting them. The retention period can range from 2 to 14 days, but it must be greater
   * 			than the creation frequency to ensure that the policy retains at least 1 snapshot or
   * 			AMI at any given time.</p>
   * @public
   */
  RetainInterval?: number | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Indicates whether the policy should copy tags from the source resource
   * 			to the snapshot or AMI.</p>
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Defines the snapshot or AMI retention behavior for the policy if the
   * 			source volume or instance is deleted, or if the policy enters the error, disabled, or
   * 			deleted state.</p>
   *          <p>By default (<b>ExtendDeletion=false</b>):</p>
   *          <ul>
   *             <li>
   *                <p>If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously
   * 					created snapshots or AMIs, up to but not including the last one, based on the
   * 					specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs,
   * 					including the last one, specify <code>true</code>.</p>
   *             </li>
   *             <li>
   *                <p>If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting
   * 					snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs,
   * 					including the last one, if the policy enters one of these states, specify
   * 					<code>true</code>.</p>
   *             </li>
   *          </ul>
   *          <p>If you enable extended deletion (<b>ExtendDeletion=true</b>),
   * 			you override both default behaviors simultaneously.</p>
   *          <p>Default: false</p>
   * @public
   */
  ExtendDeletion?: boolean | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies destination Regions for snapshot or AMI copies. You can specify
   * 			up to 3 destination Regions. If you do not want to create cross-Region copies, omit this
   * 			parameter.</p>
   * @public
   */
  CrossRegionCopyTargets?: CrossRegionCopyTarget[] | undefined;

  /**
   * <p>
   *             <b>[Default policies only]</b> Specifies exclusion parameters for volumes or instances for which you
   * 			do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs
   * 			for target resources that match any of the specified exclusion parameters.</p>
   * @public
   */
  Exclusions?: Exclusions | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyResponse {}
