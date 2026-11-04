// smithy-typescript generated code
import type {
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
 * **[Event-based policies only]** Specifies the encryption settings for cross-Region snapshot copies created by event-based policies.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * To encrypt a copy of an unencrypted snapshot when encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or when encryption by default is not enabled.
   *
   * @public
   */
  Encrypted: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
   *
   * @public
   */
  CmkArn?: string | undefined;
}

/**
 * Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted.
 *
 * @public
 */
export interface CrossRegionCopyRetainRule {
  /**
   * The amount of time to retain a cross-Region snapshot or AMI copy. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The unit of time for time-based retention. For example, to retain a cross-Region copy for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.
   *
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * **[Event-based policies only]** Specifies a cross-Region copy action for event-based policies.
 *
 * > **Note:** To specify a cross-Region copy rule for snapshot and AMI policies, use [CrossRegionCopyRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyRule.html).
 *
 * @public
 */
export interface CrossRegionCopyAction {
  /**
   * The target Region.
   *
   * @public
   */
  Target: string | undefined;

  /**
   * The encryption settings for the copied snapshot.
   *
   * @public
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * Specifies a retention rule for cross-Region snapshot copies created by snapshot or event-based policies, or cross-Region AMI copies created by AMI policies. After the retention period expires, the cross-Region copy is deleted.
   *
   * @public
   */
  RetainRule?: CrossRegionCopyRetainRule | undefined;
}

/**
 * **[Event-based policies only]** Specifies an action for an event-based policy.
 *
 * @public
 */
export interface Action {
  /**
   * A descriptive name for the action.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The rule for copying shared snapshots across Regions.
   *
   * @public
   */
  CrossRegionCopy: CrossRegionCopyAction[] | undefined;
}

/**
 * **[Custom snapshot policies only]** Describes the retention rule for archived snapshots. Once the archive retention threshold is met, the snapshots are permanently deleted from the archive tier.
 *
 * > **Note:** The archive retention rule must retain snapshots in the archive tier for a minimum of 90 days.
 *
 * For **count-based schedules**, you must specify **Count**. For **age-based schedules**, you must specify **Interval** and **IntervalUnit**.
 *
 * For more information about using snapshot archiving, see [Considerations for snapshot lifecycle policies](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive).
 *
 * @public
 */
export interface RetentionArchiveTier {
  /**
   * The maximum number of snapshots to retain in the archive storage tier for each volume. The count must ensure that each snapshot remains in the archive tier for at least 90 days. For example, if the schedule creates snapshots every 30 days, you must specify a count of 3 or more to ensure that each snapshot is archived for at least 90 days.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * Specifies the period of time to retain snapshots in the archive tier. After this period expires, the snapshot is permanently deleted.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The unit of time in which to measure the **Interval**. For example, to retain a snapshots in the archive tier for 6 months, specify `Interval=6` and `IntervalUnit=MONTHS`.
   *
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * **[Custom snapshot policies only]** Specifies information about the archive storage tier retention period.
 *
 * @public
 */
export interface ArchiveRetainRule {
  /**
   * Information about retention period in the Amazon EBS Snapshots Archive. For more information, see [Archive Amazon EBS snapshots](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/snapshot-archive.html).
   *
   * @public
   */
  RetentionArchiveTier: RetentionArchiveTier | undefined;
}

/**
 * **[Custom snapshot policies only]** Specifies a snapshot archiving rule for a schedule.
 *
 * @public
 */
export interface ArchiveRule {
  /**
   * Information about the retention period for the snapshot archiving rule.
   *
   * @public
   */
  RetainRule: ArchiveRetainRule | undefined;
}

/**
 * **[Default policies only]** Specifies a destination Region for cross-Region copy actions.
 *
 * @public
 */
export interface CrossRegionCopyTarget {
  /**
   * The target Region, for example `us-east-1`.
   *
   * @public
   */
  TargetRegion?: string | undefined;
}

/**
 * Specifies a tag for a resource.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * **[Default policies only]** Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
 *
 * @public
 */
export interface Exclusions {
  /**
   * **[Default policies for EBS snapshots only]** Indicates whether to exclude volumes that are attached to instances as the boot volume. If you exclude boot volumes, only volumes attached as data (non-boot) volumes will be backed up by the policy. To exclude boot volumes, specify `true`.
   *
   * @public
   */
  ExcludeBootVolumes?: boolean | undefined;

  /**
   * **[Default policies for EBS snapshots only]** Specifies the volume types to exclude. Volumes of the specified types will not be targeted by the policy.
   *
   * @public
   */
  ExcludeVolumeTypes?: string[] | undefined;

  /**
   * **[Default policies for EBS-backed AMIs only]** Specifies whether to exclude volumes that have specific tags.
   *
   * @public
   */
  ExcludeTags?: Tag[] | undefined;
}

/**
 * **[Event-based policies only]** Specifies an event that activates an event-based policy.
 *
 * @public
 */
export interface EventParameters {
  /**
   * The type of event. Currently, only snapshot sharing events are supported.
   *
   * @public
   */
  EventType: EventTypeValues | undefined;

  /**
   * The IDs of the Amazon Web Services accounts that can trigger policy by sharing snapshots with your account. The policy only runs if one of the specified Amazon Web Services accounts shares a snapshot with your account.
   *
   * @public
   */
  SnapshotOwner: string[] | undefined;

  /**
   * The snapshot description that can trigger the policy. The description pattern is specified using a regular expression. The policy runs only if a snapshot with a description that matches the specified pattern is shared with your account.
   *
   * For example, specifying `^.*Created for policy: policy-1234567890abcdef0.*$` configures the policy to run only if snapshots created by policy `policy-1234567890abcdef0` are shared with your account.
   *
   * @public
   */
  DescriptionRegex: string | undefined;
}

/**
 * **[Event-based policies only]** Specifies an event that activates an event-based policy.
 *
 * @public
 */
export interface EventSource {
  /**
   * The source of the event. Currently only managed CloudWatch Events rules are supported.
   *
   * @public
   */
  Type: EventSourceValues | undefined;

  /**
   * Information about the event.
   *
   * @public
   */
  Parameters?: EventParameters | undefined;
}

/**
 * **[Custom snapshot and AMI policies only]** Specifies optional parameters for snapshot and AMI policies. The set of valid parameters depends on the combination of policy type and target resource type.
 *
 * If you choose to exclude boot volumes and you specify tags that consequently exclude all of the additional data volumes attached to an instance, then Amazon Data Lifecycle Manager will not create any snapshots for the affected instance, and it will emit a `SnapshotsCreateFailed` Amazon CloudWatch metric. For more information, see [Monitor your policies using Amazon CloudWatch](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-dlm-cw-metrics.html).
 *
 * @public
 */
export interface _Parameters {
  /**
   * **[Custom snapshot policies that target instances only]** Indicates whether to exclude the root volume from multi-volume snapshot sets. The default is `false`. If you specify `true`, then the root volumes attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
   *
   * @public
   */
  ExcludeBootVolume?: boolean | undefined;

  /**
   * **[Custom AMI policies only]** Indicates whether targeted instances are rebooted when the lifecycle policy runs. `true` indicates that targeted instances are not rebooted when the policy runs. `false` indicates that target instances are rebooted when the policy runs. The default is `true` (instances are not rebooted).
   *
   * @public
   */
  NoReboot?: boolean | undefined;

  /**
   * **[Custom snapshot policies that target instances only]** The tags used to identify data (non-root) volumes to exclude from multi-volume snapshot sets.
   *
   * If you create a snapshot lifecycle policy that targets instances and you specify tags for this parameter, then data volumes with the specified tags that are attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
   *
   * @public
   */
  ExcludeDataVolumeTags?: Tag[] | undefined;
}

/**
 * **[Custom snapshot policies that target instances only]** Information about pre and/or post scripts for a snapshot lifecycle policy that targets instances. For more information, see [Automating application-consistent snapshots with pre and post scripts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/automate-app-consistent-backups.html).
 *
 * @public
 */
export interface Script {
  /**
   * Indicate which scripts Amazon Data Lifecycle Manager should run on target instances. Pre scripts run before Amazon Data Lifecycle Manager initiates snapshot creation. Post scripts run after Amazon Data Lifecycle Manager initiates snapshot creation.
   *
   * - To run a pre script only, specify `PRE`. In this case, Amazon Data Lifecycle Manager calls the SSM document with the `pre-script` parameter before initiating snapshot creation.
   * - To run a post script only, specify `POST`. In this case, Amazon Data Lifecycle Manager calls the SSM document with the `post-script` parameter after initiating snapshot creation.
   * - To run both pre and post scripts, specify both `PRE` and `POST`. In this case, Amazon Data Lifecycle Manager calls the SSM document with the `pre-script` parameter before initiating snapshot creation, and then it calls the SSM document again with the `post-script` parameter after initiating snapshot creation.
   *
   * If you are automating VSS Backups, omit this parameter.
   *
   * Default: PRE and POST
   *
   * @public
   */
  Stages?: StageValues[] | undefined;

  /**
   * Indicates the service used to execute the pre and/or post scripts.
   *
   * - If you are using custom SSM documents or automating application-consistent snapshots of SAP HANA workloads, specify `AWS_SYSTEMS_MANAGER`.
   * - If you are automating VSS Backups, omit this parameter.
   *
   * Default: AWS_SYSTEMS_MANAGER
   *
   * @public
   */
  ExecutionHandlerService?: ExecutionHandlerServiceValues | undefined;

  /**
   * The SSM document that includes the pre and/or post scripts to run.
   *
   * - If you are automating VSS backups, specify `AWS_VSS_BACKUP`. In this case, Amazon Data Lifecycle Manager automatically uses the `AWSEC2-CreateVssSnapshot` SSM document.
   * - If you are automating application-consistent snapshots for SAP HANA workloads, specify `AWSSystemsManagerSAP-CreateDLMSnapshotForSAPHANA`.
   * - If you are using a custom SSM document that you own, specify either the name or ARN of the SSM document. If you are using a custom SSM document that is shared with you, specify the ARN of the SSM document.
   *
   * @public
   */
  ExecutionHandler: string | undefined;

  /**
   * Indicates whether Amazon Data Lifecycle Manager should default to crash-consistent snapshots if the pre script fails.
   *
   * - To default to crash consistent snapshot if the pre script fails, specify `true`.
   * - To skip the instance for snapshot creation if the pre script fails, specify `false`.
   *
   * This parameter is supported only if you run a pre script. If you run a post script only, omit this parameter.
   *
   * Default: true
   *
   * @public
   */
  ExecuteOperationOnScriptFailure?: boolean | undefined;

  /**
   * Specifies a timeout period, in seconds, after which Amazon Data Lifecycle Manager fails the script run attempt if it has not completed. If a script does not complete within its timeout period, Amazon Data Lifecycle Manager fails the attempt. The timeout period applies to the pre and post scripts individually.
   *
   * If you are automating VSS Backups, omit this parameter.
   *
   * Default: 10
   *
   * @public
   */
  ExecutionTimeout?: number | undefined;

  /**
   * Specifies the number of times Amazon Data Lifecycle Manager should retry scripts that fail.
   *
   * - If the pre script fails, Amazon Data Lifecycle Manager retries the entire snapshot creation process, including running the pre and post scripts.
   * - If the post script fails, Amazon Data Lifecycle Manager retries the post script only; in this case, the pre script will have completed and the snapshot might have been created.
   *
   * If you do not want Amazon Data Lifecycle Manager to retry failed scripts, specify `0`.
   *
   * Default: 0
   *
   * @public
   */
  MaximumRetryCount?: number | undefined;
}

/**
 * **[Custom snapshot and AMI policies only]** Specifies when the policy should create snapshots or AMIs.
 *
 * > **Note:**
 * >
 * > - You must specify either **CronExpression**, or **Interval**, **IntervalUnit**, and **Times**.
 * > - If you need to specify an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html) for the schedule, then you must specify a creation frequency of at least 28 days.
 *
 * @public
 */
export interface CreateRule {
  /**
   * **[Custom snapshot policies only]** Specifies the destination for snapshots created by the policy. The allowed destinations depend on the location of the targeted resources.
   *
   * - If the policy targets resources in a Region, then you must create snapshots in the same Region as the source resource.
   * - If the policy targets resources in a Local Zone, you can create snapshots in the same Local Zone or in its parent Region.
   * - If the policy targets resources on an Outpost, then you can create snapshots on the same Outpost or in its parent Region.
   *
   * Specify one of the following values:
   *
   * - To create snapshots in the same Region as the source resource, specify `CLOUD`.
   * - To create snapshots in the same Local Zone as the source resource, specify `LOCAL_ZONE`.
   * - To create snapshots on the same Outpost as the source resource, specify `OUTPOST_LOCAL`.
   *
   * Default: `CLOUD`
   *
   * @public
   */
  Location?: LocationValues | undefined;

  /**
   * The interval between snapshots. The supported values are 1, 2, 3, 4, 6, 8, 12, and 24.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The interval unit.
   *
   * @public
   */
  IntervalUnit?: IntervalUnitValues | undefined;

  /**
   * The time, in UTC, to start the operation. The supported format is hh:mm.
   *
   * The operation occurs within a one-hour window following the specified time. If you do not specify a time, Amazon Data Lifecycle Manager selects a time within the next 24 hours.
   *
   * @public
   */
  Times?: string[] | undefined;

  /**
   * The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1 year. For more information, see the [Cron expressions reference](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cron-expressions.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  CronExpression?: string | undefined;

  /**
   * **[Custom snapshot policies that target instances only]** Specifies pre and/or post scripts for a snapshot lifecycle policy that targets instances. This is useful for creating application-consistent snapshots, or for performing specific administrative tasks before or after Amazon Data Lifecycle Manager initiates snapshot creation.
   *
   * For more information, see [Automating application-consistent snapshots with pre and post scripts](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/automate-app-consistent-backups.html).
   *
   * @public
   */
  Scripts?: Script[] | undefined;
}

/**
 * **[Custom AMI policies only]** Specifies an AMI deprecation rule for cross-Region AMI copies created by an AMI policy.
 *
 * @public
 */
export interface CrossRegionCopyDeprecateRule {
  /**
   * The period after which to deprecate the cross-Region AMI copies. The period must be less than or equal to the cross-Region AMI copy retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The unit of time in which to measure the **Interval**. For example, to deprecate a cross-Region AMI copy after 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.
   *
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * **[Custom snapshot and AMI policies only]** Specifies a cross-Region copy rule for a snapshot and AMI policies.
 *
 * > **Note:** To specify a cross-Region copy action for event-based polices, use [CrossRegionCopyAction](https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyAction.html).
 *
 * @public
 */
export interface CrossRegionCopyRule {
  /**
   * > **Note:** Use this parameter for AMI policies only. For snapshot policies, use **Target** instead. For snapshot policies created before the **Target** parameter was introduced, this parameter indicates the target Region for snapshot copies.
   *
   * **[Custom AMI policies only]** The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.
   *
   * @public
   */
  TargetRegion?: string | undefined;

  /**
   * > **Note:** Use this parameter for snapshot policies only. For AMI policies, use **TargetRegion** instead.
   *
   * **[Custom snapshot policies only]** The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is false or if encryption by default is not enabled.
   *
   * @public
   */
  Encrypted: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
   *
   * @public
   */
  CmkArn?: string | undefined;

  /**
   * Indicates whether to copy all user-defined tags from the source snapshot or AMI to the cross-Region copy.
   *
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * The retention rule that indicates how long the cross-Region snapshot or AMI copies are to be retained in the destination Region.
   *
   * @public
   */
  RetainRule?: CrossRegionCopyRetainRule | undefined;

  /**
   * **[Custom AMI policies only]** The AMI deprecation rule for cross-Region AMI copies created by the rule.
   *
   * @public
   */
  DeprecateRule?: CrossRegionCopyDeprecateRule | undefined;
}

/**
 * **[Custom AMI policies only]** Specifies an AMI deprecation rule for AMIs created by an AMI lifecycle policy.
 *
 * For age-based schedules, you must specify **Interval** and **IntervalUnit**. For count-based schedules, you must specify **Count**.
 *
 * @public
 */
export interface DeprecateRule {
  /**
   * If the schedule has a count-based retention rule, this parameter specifies the number of oldest AMIs to deprecate. The count must be less than or equal to the schedule's retention count, and it can't be greater than 1000.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * If the schedule has an age-based retention rule, this parameter specifies the period after which to deprecate AMIs created by the schedule. The period must be less than or equal to the schedule's retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The unit of time in which to measure the **Interval**.
   *
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * **[Custom snapshot policies only]** Specifies a rule for enabling fast snapshot restore for snapshots created by snapshot policies. You can enable fast snapshot restore based on either a count or a time interval.
 *
 * @public
 */
export interface FastRestoreRule {
  /**
   * The number of snapshots to be enabled with fast snapshot restore.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The amount of time to enable fast snapshot restore. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The unit of time for enabling fast snapshot restore.
   *
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;

  /**
   * The Availability Zones in which to enable fast snapshot restore.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * The Availability Zone Ids in which to enable fast snapshot restore.
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;
}

/**
 * **[Custom snapshot and AMI policies only]** Specifies a retention rule for snapshots created by snapshot policies, or for AMIs created by AMI policies.
 *
 * > **Note:**
 * >
 * > For snapshot policies that have an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html), this retention rule applies to standard tier retention. When the retention threshold is met, snapshots are moved from the standard to the archive tier.
 * >
 * > For snapshot policies that do not have an **ArchiveRule**, snapshots are permanently deleted when this retention threshold is met.
 *
 * You can retain snapshots based on either a count or a time interval.
 *
 * - **Count-based retention**
 *
 *   You must specify **Count**. If you specify an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html) for the schedule, then you can specify a retention count of `0` to archive snapshots immediately after creation. If you specify a [FastRestoreRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_FastRestoreRule.html), [ShareRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ShareRule.html), or a [CrossRegionCopyRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyRule.html), then you must specify a retention count of `1` or more.
 * - **Age-based retention**
 *
 *   You must specify **Interval** and **IntervalUnit**. If you specify an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html) for the schedule, then you can specify a retention interval of `0` days to archive snapshots immediately after creation. If you specify a [FastRestoreRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_FastRestoreRule.html), [ShareRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ShareRule.html), or a [CrossRegionCopyRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_CrossRegionCopyRule.html), then you must specify a retention interval of `1` day or more.
 *
 * @public
 */
export interface RetainRule {
  /**
   * The number of snapshots to retain for each volume, up to a maximum of 1000. For example if you want to retain a maximum of three snapshots, specify `3`. When the fourth snapshot is created, the oldest retained snapshot is deleted, or it is moved to the archive tier if you have specified an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html).
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
   *
   * @public
   */
  Interval?: number | undefined;

  /**
   * The unit of time for time-based retention. For example, to retain snapshots for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`. Once the snapshot has been retained for 3 months, it is deleted, or it is moved to the archive tier if you have specified an [ArchiveRule](https://docs.aws.amazon.com/dlm/latest/APIReference/API_ArchiveRule.html).
   *
   * @public
   */
  IntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * **[Custom snapshot policies only]** Specifies a rule for sharing snapshots across Amazon Web Services accounts.
 *
 * @public
 */
export interface ShareRule {
  /**
   * The IDs of the Amazon Web Services accounts with which to share the snapshots.
   *
   * @public
   */
  TargetAccounts: string[] | undefined;

  /**
   * The period after which snapshots that are shared with other Amazon Web Services accounts are automatically unshared.
   *
   * @public
   */
  UnshareInterval?: number | undefined;

  /**
   * The unit of time for the automatic unsharing interval.
   *
   * @public
   */
  UnshareIntervalUnit?: RetentionIntervalUnitValues | undefined;
}

/**
 * **[Custom snapshot and AMI policies only]** Specifies a schedule for a snapshot or AMI lifecycle policy.
 *
 * @public
 */
export interface Schedule {
  /**
   * The name of the schedule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.
   *
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * The tags to apply to policy-created resources. These user-defined tags are in addition to the Amazon Web Services-added lifecycle tags.
   *
   * @public
   */
  TagsToAdd?: Tag[] | undefined;

  /**
   * **[AMI policies and snapshot policies that target instances only]** A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: `$(instance-id)` or `$(timestamp)`. Variable tags are only valid for EBS Snapshot Management – Instance policies.
   *
   * @public
   */
  VariableTags?: Tag[] | undefined;

  /**
   * The creation rule.
   *
   * @public
   */
  CreateRule?: CreateRule | undefined;

  /**
   * The retention rule for snapshots or AMIs created by the policy.
   *
   * @public
   */
  RetainRule?: RetainRule | undefined;

  /**
   * **[Custom snapshot policies only]** The rule for enabling fast snapshot restore.
   *
   * @public
   */
  FastRestoreRule?: FastRestoreRule | undefined;

  /**
   * Specifies a rule for copying snapshots or AMIs across Regions.
   *
   * > **Note:** You can't specify cross-Region copy rules for policies that create snapshots on an Outpost or in a Local Zone. If the policy creates snapshots in a Region, then snapshots can be copied to up to three Regions or Outposts.
   *
   * @public
   */
  CrossRegionCopyRules?: CrossRegionCopyRule[] | undefined;

  /**
   * **[Custom snapshot policies only]** The rule for sharing snapshots with other Amazon Web Services accounts.
   *
   * @public
   */
  ShareRules?: ShareRule[] | undefined;

  /**
   * **[Custom AMI policies only]** The AMI deprecation rule for the schedule.
   *
   * @public
   */
  DeprecateRule?: DeprecateRule | undefined;

  /**
   * **[Custom snapshot policies that target volumes only]** The snapshot archiving rule for the schedule. When you specify an archiving rule, snapshots are automatically moved from the standard tier to the archive tier once the schedule's retention threshold is met. Snapshots are then retained in the archive tier for the archive retention period that you specify.
   *
   * For more information about using snapshot archiving, see [Considerations for snapshot lifecycle policies](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-ami-policy.html#dlm-archive).
   *
   * @public
   */
  ArchiveRule?: ArchiveRule | undefined;
}

/**
 * Specifies the configuration of a lifecycle policy.
 *
 * @public
 */
export interface PolicyDetails {
  /**
   * The type of policy. Specify `EBS_SNAPSHOT_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify `IMAGE_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify `EVENT_BASED_POLICY` to create an event-based policy that performs specific actions when a defined event occurs in your Amazon Web Services account.
   *
   * The default is `EBS_SNAPSHOT_MANAGEMENT`.
   *
   * @public
   */
  PolicyType?: PolicyTypeValues | undefined;

  /**
   * **[Custom snapshot policies only]** The target resource type for snapshot and AMI lifecycle policies. Use `VOLUME`to create snapshots of individual volumes or use `INSTANCE` to create multi-volume snapshots from the volumes for an instance.
   *
   * @public
   */
  ResourceTypes?: ResourceTypeValues[] | undefined;

  /**
   * **[Custom snapshot and AMI policies only]** The location of the resources to backup.
   *
   * - If the source resources are located in a Region, specify `CLOUD`. In this case, the policy targets all resources of the specified type with matching target tags across all Availability Zones in the Region.
   * - **[Custom snapshot policies only]** If the source resources are located in a Local Zone, specify `LOCAL_ZONE`. In this case, the policy targets all resources of the specified type with matching target tags across all Local Zones in the Region.
   * - If the source resources are located on an Outpost in your account, specify `OUTPOST`. In this case, the policy targets all resources of the specified type with matching target tags across all of the Outposts in your account.
   *
   * @public
   */
  ResourceLocations?: ResourceLocationValues[] | undefined;

  /**
   * **[Custom snapshot and AMI policies only]** The single tag that identifies targeted resources for this policy.
   *
   * @public
   */
  TargetTags?: Tag[] | undefined;

  /**
   * **[Custom snapshot and AMI policies only]** The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy can have up to four schedules—one mandatory schedule and up to three optional schedules.
   *
   * @public
   */
  Schedules?: Schedule[] | undefined;

  /**
   * **[Custom snapshot and AMI policies only]** A set of optional parameters for snapshot and AMI lifecycle policies.
   *
   * > **Note:** If you are modifying a policy that was created or previously modified using the Amazon Data Lifecycle Manager console, then you must include this parameter and specify either the default values or the new values that you require. You can't omit this parameter or set its values to null.
   *
   * @public
   */
  Parameters?: _Parameters | undefined;

  /**
   * **[Event-based policies only]** The event that activates the event-based policy.
   *
   * @public
   */
  EventSource?: EventSource | undefined;

  /**
   * **[Event-based policies only]** The actions to be performed when the event-based policy is activated. You can specify only one action per policy.
   *
   * @public
   */
  Actions?: Action[] | undefined;

  /**
   * The type of policy to create. Specify one of the following:
   *
   * - `SIMPLIFIED` To create a default policy.
   * - `STANDARD` To create a custom policy.
   *
   * @public
   */
  PolicyLanguage?: PolicyLanguageValues | undefined;

  /**
   * **[Default policies only]** Specify the type of default policy to create.
   *
   * - To create a default policy for EBS snapshots, that creates snapshots of all volumes in the Region that do not have recent backups, specify `VOLUME`.
   * - To create a default policy for EBS-backed AMIs, that creates EBS-backed AMIs from all instances in the Region that do not have recent backups, specify `INSTANCE`.
   *
   * @public
   */
  ResourceType?: ResourceTypeValues | undefined;

  /**
   * **[Default policies only]** Specifies how often the policy should run and create snapshots or AMIs. The creation frequency can range from 1 to 7 days. If you do not specify a value, the default is 1.
   *
   * Default: 1
   *
   * @public
   */
  CreateInterval?: number | undefined;

  /**
   * **[Default policies only]** Specifies how long the policy should retain snapshots or AMIs before deleting them. The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time. If you do not specify a value, the default is 7.
   *
   * Default: 7
   *
   * @public
   */
  RetainInterval?: number | undefined;

  /**
   * **[Default policies only]** Indicates whether the policy should copy tags from the source resource to the snapshot or AMI. If you do not specify a value, the default is `false`.
   *
   * Default: false
   *
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * **[Default policies only]** Specifies destination Regions for snapshot or AMI copies. You can specify up to 3 destination Regions. If you do not want to create cross-Region copies, omit this parameter.
   *
   * @public
   */
  CrossRegionCopyTargets?: CrossRegionCopyTarget[] | undefined;

  /**
   * **[Default policies only]** Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.
   *
   * By default (**ExtendDeletion=false**):
   *
   * - If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously created snapshots or AMIs, up to but not including the last one, based on the specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs, including the last one, specify `true`.
   * - If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs, including the last one, if the policy enters one of these states, specify `true`.
   *
   * If you enable extended deletion (**ExtendDeletion=true**), you override both default behaviors simultaneously.
   *
   * If you do not specify a value, the default is `false`.
   *
   * Default: false
   *
   * @public
   */
  ExtendDeletion?: boolean | undefined;

  /**
   * **[Default policies only]** Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
   *
   * @public
   */
  Exclusions?: Exclusions | undefined;
}

/**
 * @public
 */
export interface CreateLifecyclePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
   *
   * @public
   */
  ExecutionRoleArn: string | undefined;

  /**
   * A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The activation state of the lifecycle policy after creation.
   *
   * @public
   */
  State: SettablePolicyStateValues | undefined;

  /**
   * The configuration details of the lifecycle policy.
   *
   * > **Important:** If you create a default policy, you can specify the request parameters either in the request body, or in the PolicyDetails request structure, but not both.
   *
   * @public
   */
  PolicyDetails?: PolicyDetails | undefined;

  /**
   * The tags to apply to the lifecycle policy during creation.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * **[Default policies only]** Specify the type of default policy to create.
   *
   * - To create a default policy for EBS snapshots, that creates snapshots of all volumes in the Region that do not have recent backups, specify `VOLUME`.
   * - To create a default policy for EBS-backed AMIs, that creates EBS-backed AMIs from all instances in the Region that do not have recent backups, specify `INSTANCE`.
   *
   * @public
   */
  DefaultPolicy?: DefaultPolicyTypeValues | undefined;

  /**
   * **[Default policies only]** Specifies how often the policy should run and create snapshots or AMIs. The creation frequency can range from 1 to 7 days. If you do not specify a value, the default is 1.
   *
   * Default: 1
   *
   * @public
   */
  CreateInterval?: number | undefined;

  /**
   * **[Default policies only]** Specifies how long the policy should retain snapshots or AMIs before deleting them. The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time. If you do not specify a value, the default is 7.
   *
   * Default: 7
   *
   * @public
   */
  RetainInterval?: number | undefined;

  /**
   * **[Default policies only]** Indicates whether the policy should copy tags from the source resource to the snapshot or AMI. If you do not specify a value, the default is `false`.
   *
   * Default: false
   *
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * **[Default policies only]** Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.
   *
   * By default (**ExtendDeletion=false**):
   *
   * - If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously created snapshots or AMIs, up to but not including the last one, based on the specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs, including the last one, specify `true`.
   * - If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs, including the last one, if the policy enters one of these states, specify `true`.
   *
   * If you enable extended deletion (**ExtendDeletion=true**), you override both default behaviors simultaneously.
   *
   * If you do not specify a value, the default is `false`.
   *
   * Default: false
   *
   * @public
   */
  ExtendDeletion?: boolean | undefined;

  /**
   * **[Default policies only]** Specifies destination Regions for snapshot or AMI copies. You can specify up to 3 destination Regions. If you do not want to create cross-Region copies, omit this parameter.
   *
   * @public
   */
  CrossRegionCopyTargets?: CrossRegionCopyTarget[] | undefined;

  /**
   * **[Default policies only]** Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
   *
   * @public
   */
  Exclusions?: Exclusions | undefined;
}

/**
 * @public
 */
export interface CreateLifecyclePolicyResponse {
  /**
   * The identifier of the lifecycle policy.
   *
   * @public
   */
  PolicyId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecyclePolicyRequest {
  /**
   * The identifier of the lifecycle policy.
   *
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
   * The identifiers of the data lifecycle policies.
   *
   * @public
   */
  PolicyIds?: string[] | undefined;

  /**
   * The activation state.
   *
   * @public
   */
  State?: GettablePolicyStateValues | undefined;

  /**
   * The resource type.
   *
   * @public
   */
  ResourceTypes?: ResourceTypeValues[] | undefined;

  /**
   * The target tag for a policy.
   *
   * Tags are strings in the format `key=value`.
   *
   * @public
   */
  TargetTags?: string[] | undefined;

  /**
   * The tags to add to objects created by the policy.
   *
   * Tags are strings in the format `key=value`.
   *
   * These user-defined tags are added in addition to the Amazon Web Services-added lifecycle tags.
   *
   * @public
   */
  TagsToAdd?: string[] | undefined;

  /**
   * **[Default policies only]** Specifies the type of default policy to get. Specify one of the following:
   *
   * - `VOLUME` - To get only the default policy for EBS snapshots
   * - `INSTANCE` - To get only the default policy for EBS-backed AMIs
   * - `ALL` - To get all default policies
   *
   * @public
   */
  DefaultPolicyType?: DefaultPoliciesTypeValues | undefined;
}

/**
 * Summary information about a lifecycle policy.
 *
 * @public
 */
export interface LifecyclePolicySummary {
  /**
   * The identifier of the lifecycle policy.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * The description of the lifecycle policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The activation state of the lifecycle policy.
   *
   * @public
   */
  State?: GettablePolicyStateValues | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The type of policy. `EBS_SNAPSHOT_MANAGEMENT` indicates that the policy manages the lifecycle of Amazon EBS snapshots. `IMAGE_MANAGEMENT` indicates that the policy manages the lifecycle of EBS-backed AMIs. `EVENT_BASED_POLICY` indicates that the policy automates cross-account snapshot copies for snapshots that are shared with your account.
   *
   * @public
   */
  PolicyType?: PolicyTypeValues | undefined;

  /**
   * **[Default policies only]** The type of default policy. Values include:
   *
   * - `VOLUME` - Default policy for EBS snapshots
   * - `INSTANCE` - Default policy for EBS-backed AMIs
   *
   * @public
   */
  DefaultPolicy?: boolean | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePoliciesResponse {
  /**
   * Summary information about the lifecycle policies.
   *
   * @public
   */
  Policies?: LifecyclePolicySummary[] | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyRequest {
  /**
   * The identifier of the lifecycle policy.
   *
   * @public
   */
  PolicyId: string | undefined;
}

/**
 * Information about a lifecycle policy.
 *
 * @public
 */
export interface LifecyclePolicy {
  /**
   * The identifier of the lifecycle policy.
   *
   * @public
   */
  PolicyId?: string | undefined;

  /**
   * The description of the lifecycle policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The activation state of the lifecycle policy.
   *
   * @public
   */
  State?: GettablePolicyStateValues | undefined;

  /**
   * The description of the status.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * The local date and time when the lifecycle policy was created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The local date and time when the lifecycle policy was last modified.
   *
   * @public
   */
  DateModified?: Date | undefined;

  /**
   * The configuration of the lifecycle policy
   *
   * @public
   */
  PolicyDetails?: PolicyDetails | undefined;

  /**
   * The tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  PolicyArn?: string | undefined;

  /**
   * Indicates whether the policy is a default lifecycle policy or a custom lifecycle policy.
   *
   * - `true` - the policy is a default policy.
   * - `false` - the policy is a custom policy.
   *
   * @public
   */
  DefaultPolicy?: boolean | undefined;
}

/**
 * @public
 */
export interface GetLifecyclePolicyResponse {
  /**
   * Detailed information about the lifecycle policy.
   *
   * @public
   */
  Policy?: LifecyclePolicy | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Information about the tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * One or more tags.
   *
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys.
   *
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
   * The identifier of the lifecycle policy.
   *
   * @public
   */
  PolicyId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * The desired activation state of the lifecycle policy after creation.
   *
   * @public
   */
  State?: SettablePolicyStateValues | undefined;

  /**
   * A description of the lifecycle policy.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration of the lifecycle policy. You cannot update the policy type or the resource type.
   *
   * @public
   */
  PolicyDetails?: PolicyDetails | undefined;

  /**
   * **[Default policies only]** Specifies how often the policy should run and create snapshots or AMIs. The creation frequency can range from 1 to 7 days.
   *
   * @public
   */
  CreateInterval?: number | undefined;

  /**
   * **[Default policies only]** Specifies how long the policy should retain snapshots or AMIs before deleting them. The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time.
   *
   * @public
   */
  RetainInterval?: number | undefined;

  /**
   * **[Default policies only]** Indicates whether the policy should copy tags from the source resource to the snapshot or AMI.
   *
   * @public
   */
  CopyTags?: boolean | undefined;

  /**
   * **[Default policies only]** Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.
   *
   * By default (**ExtendDeletion=false**):
   *
   * - If a source resource is deleted, Amazon Data Lifecycle Manager will continue to delete previously created snapshots or AMIs, up to but not including the last one, based on the specified retention period. If you want Amazon Data Lifecycle Manager to delete all snapshots or AMIs, including the last one, specify `true`.
   * - If a policy enters the error, disabled, or deleted state, Amazon Data Lifecycle Manager stops deleting snapshots and AMIs. If you want Amazon Data Lifecycle Manager to continue deleting snapshots or AMIs, including the last one, if the policy enters one of these states, specify `true`.
   *
   * If you enable extended deletion (**ExtendDeletion=true**), you override both default behaviors simultaneously.
   *
   * Default: false
   *
   * @public
   */
  ExtendDeletion?: boolean | undefined;

  /**
   * **[Default policies only]** Specifies destination Regions for snapshot or AMI copies. You can specify up to 3 destination Regions. If you do not want to create cross-Region copies, omit this parameter.
   *
   * @public
   */
  CrossRegionCopyTargets?: CrossRegionCopyTarget[] | undefined;

  /**
   * **[Default policies only]** Specifies exclusion parameters for volumes or instances for which you do not want to create snapshots or AMIs. The policy will not create snapshots or AMIs for target resources that match any of the specified exclusion parameters.
   *
   * @public
   */
  Exclusions?: Exclusions | undefined;
}

/**
 * @public
 */
export interface UpdateLifecyclePolicyResponse {}
