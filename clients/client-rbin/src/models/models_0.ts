// smithy-typescript generated code
import type { LockState, ResourceType, RetentionPeriodUnit, RuleStatus, UnlockDelayUnit } from "./enums";

/**
 * [Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention rule.
 *
 * @public
 */
export interface ResourceTag {
  /**
   * The tag key.
   *
   * @public
   */
  ResourceTagKey: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  ResourceTagValue?: string | undefined;
}

/**
 * Information about the retention rule unlock delay. The unlock delay is the period after which a retention rule can be modified or edited after it has been unlocked by a user with the required permissions. The retention rule can't be modified or deleted during the unlock delay.
 *
 * @public
 */
export interface UnlockDelay {
  /**
   * The unlock delay period, measured in the unit specified for **UnlockDelayUnit**.
   *
   * @public
   */
  UnlockDelayValue: number | undefined;

  /**
   * The unit of time in which to measure the unlock delay. Currently, the unlock delay can be measured only in days.
   *
   * @public
   */
  UnlockDelayUnit: UnlockDelayUnit | undefined;
}

/**
 * Information about a retention rule lock configuration.
 *
 * @public
 */
export interface LockConfiguration {
  /**
   * Information about the retention rule unlock delay.
   *
   * @public
   */
  UnlockDelay: UnlockDelay | undefined;
}

/**
 * Information about the retention period for which the retention rule is to retain resources.
 *
 * @public
 */
export interface RetentionPeriod {
  /**
   * The period value for which the retention rule is to retain resources, measured in days. The supported retention periods are:
   *
   * - EBS volumes: 1 - 7 days
   * - EBS snapshots and EBS-backed AMIs: 1 - 365 days
   *
   * @public
   */
  RetentionPeriodValue: number | undefined;

  /**
   * The unit of time in which the retention period is measured. Currently, only `DAYS` is supported.
   *
   * @public
   */
  RetentionPeriodUnit: RetentionPeriodUnit | undefined;
}

/**
 * Information about the tags to assign to the retention rule.
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
 * @public
 */
export interface CreateRuleRequest {
  /**
   * Information about the retention period for which the retention rule is to retain resources.
   *
   * @public
   */
  RetentionPeriod: RetentionPeriod | undefined;

  /**
   * The retention rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the tags to assign to the retention rule.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The resource type to be retained by the retention rule. Currently, only EBS volumes, EBS snapshots, and EBS-backed AMIs are supported.
   *
   * - To retain EBS volumes, specify `EBS_VOLUME`.
   * - To retain EBS snapshots, specify `EBS_SNAPSHOT`
   * - To retain EBS-backed AMIs, specify `EC2_IMAGE`.
   *
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * [Tag-level retention rules only] Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.
   *
   * You can add the same tag key and value pair to a maximum or five retention rules.
   *
   * To create a Region-level retention rule, omit this parameter. A Region-level retention rule does not have any resource tags specified. It retains all deleted resources of the specified resource type in the Region in which the rule is created, even if the resources are not tagged.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * Information about the retention rule lock configuration.
   *
   * @public
   */
  LockConfiguration?: LockConfiguration | undefined;

  /**
   * [Region-level retention rules only] Specifies the exclusion tags to use to identify resources that are to be excluded, or ignored, by a Region-level retention rule. Resources that have any of these tags are not retained by the retention rule upon deletion.
   *
   * You can't specify exclusion tags for tag-level retention rules.
   *
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleResponse {
  /**
   * The unique ID of the retention rule.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * Information about the retention period for which the retention rule is to retain resources.
   *
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * The retention rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the tags assigned to the retention rule.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The resource type retained by the retention rule.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * [Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention rule.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * The state of the retention rule. Only retention rules that are in the `available` state retain resources.
   *
   * @public
   */
  Status?: RuleStatus | undefined;

  /**
   * Information about the retention rule lock configuration.
   *
   * @public
   */
  LockConfiguration?: LockConfiguration | undefined;

  /**
   * [Region-level retention rules only] The lock state for the retention rule.
   *
   * - `locked` - The retention rule is locked and can't be modified or deleted.
   * - `pending_unlock` - The retention rule has been unlocked but it is still within the unlock delay period. The retention rule can be modified or deleted only after the unlock delay period has expired.
   * - `unlocked` - The retention rule is unlocked and it can be modified or deleted by any user with the required permissions.
   * - `null` - The retention rule has never been locked. Once a retention rule has been locked, it can transition between the `locked` and `unlocked` states only; it can never transition back to `null`.
   *
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * The Amazon Resource Name (ARN) of the retention rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * [Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be excluded, or ignored, by the retention rule.
   *
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * The unique ID of the retention rule.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleResponse {}

/**
 * @public
 */
export interface GetRuleRequest {
  /**
   * The unique ID of the retention rule.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetRuleResponse {
  /**
   * The unique ID of the retention rule.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * The retention rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The resource type retained by the retention rule.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * Information about the retention period for which the retention rule is to retain resources.
   *
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * [Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention rule.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * The state of the retention rule. Only retention rules that are in the `available` state retain resources.
   *
   * @public
   */
  Status?: RuleStatus | undefined;

  /**
   * Information about the retention rule lock configuration.
   *
   * @public
   */
  LockConfiguration?: LockConfiguration | undefined;

  /**
   * [Region-level retention rules only] The lock state for the retention rule.
   *
   * - `locked` - The retention rule is locked and can't be modified or deleted.
   * - `pending_unlock` - The retention rule has been unlocked but it is still within the unlock delay period. The retention rule can be modified or deleted only after the unlock delay period has expired.
   * - `unlocked` - The retention rule is unlocked and it can be modified or deleted by any user with the required permissions.
   * - `null` - The retention rule has never been locked. Once a retention rule has been locked, it can transition between the `locked` and `unlocked` states only; it can never transition back to `null`.
   *
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * The date and time at which the unlock delay is set to expire. Only returned for retention rules that have been unlocked and that are still within the unlock delay period.
   *
   * @public
   */
  LockEndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the retention rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * [Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be excluded, or ignored, by the retention rule.
   *
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `NextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The resource type retained by the retention rule. Only retention rules that retain the specified resource type are listed. Currently, only EBS volumes, EBS snapshots, and EBS-backed AMIs are supported.
   *
   * - To list retention rules that retain EBS volumes, specify `EBS_VOLUME`.
   * - To list retention rules that retain EBS snapshots, specify `EBS_SNAPSHOT`.
   * - To list retention rules that retain EBS-backed AMIs, specify `EC2_IMAGE`.
   *
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * [Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention rule.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * The lock state of the retention rules to list. Only retention rules with the specified lock state are returned.
   *
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * [Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be excluded, or ignored, by the retention rule.
   *
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * Information about a Recycle Bin retention rule.
 *
 * @public
 */
export interface RuleSummary {
  /**
   * The unique ID of the retention rule.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * The retention rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the retention period for which the retention rule is to retain resources.
   *
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * [Region-level retention rules only] The lock state for the retention rule.
   *
   * - `locked` - The retention rule is locked and can't be modified or deleted.
   * - `pending_unlock` - The retention rule has been unlocked but it is still within the unlock delay period. The retention rule can be modified or deleted only after the unlock delay period has expired.
   * - `unlocked` - The retention rule is unlocked and it can be modified or deleted by any user with the required permissions.
   * - `null` - The retention rule has never been locked. Once a retention rule has been locked, it can transition between the `locked` and `unlocked` states only; it can never transition back to `null`.
   *
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * The Amazon Resource Name (ARN) of the retention rule.
   *
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * Information about the retention rules.
   *
   * @public
   */
  Rules?: RuleSummary[] | undefined;

  /**
   * The token to use to retrieve the next page of results. This value is `null` when there are no more results to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the retention rule.
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
   * Information about the tags assigned to the retention rule.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface LockRuleRequest {
  /**
   * The unique ID of the retention rule.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Information about the retention rule lock configuration.
   *
   * @public
   */
  LockConfiguration: LockConfiguration | undefined;
}

/**
 * @public
 */
export interface LockRuleResponse {
  /**
   * The unique ID of the retention rule.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * The retention rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The resource type retained by the retention rule.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * Information about the retention period for which the retention rule is to retain resources.
   *
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * [Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention rule.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * The state of the retention rule. Only retention rules that are in the `available` state retain resources.
   *
   * @public
   */
  Status?: RuleStatus | undefined;

  /**
   * Information about the retention rule lock configuration.
   *
   * @public
   */
  LockConfiguration?: LockConfiguration | undefined;

  /**
   * [Region-level retention rules only] The lock state for the retention rule.
   *
   * - `locked` - The retention rule is locked and can't be modified or deleted.
   * - `pending_unlock` - The retention rule has been unlocked but it is still within the unlock delay period. The retention rule can be modified or deleted only after the unlock delay period has expired.
   * - `unlocked` - The retention rule is unlocked and it can be modified or deleted by any user with the required permissions.
   * - `null` - The retention rule has never been locked. Once a retention rule has been locked, it can transition between the `locked` and `unlocked` states only; it can never transition back to `null`.
   *
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * The Amazon Resource Name (ARN) of the retention rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * [Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be excluded, or ignored, by the retention rule.
   *
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the retention rule.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Information about the tags to assign to the retention rule.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UnlockRuleRequest {
  /**
   * The unique ID of the retention rule.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface UnlockRuleResponse {
  /**
   * The unique ID of the retention rule.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * The retention rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The resource type retained by the retention rule.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * Information about the retention period for which the retention rule is to retain resources.
   *
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * [Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention rule.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * The state of the retention rule. Only retention rules that are in the `available` state retain resources.
   *
   * @public
   */
  Status?: RuleStatus | undefined;

  /**
   * Information about the retention rule lock configuration.
   *
   * @public
   */
  LockConfiguration?: LockConfiguration | undefined;

  /**
   * [Region-level retention rules only] The lock state for the retention rule.
   *
   * - `locked` - The retention rule is locked and can't be modified or deleted.
   * - `pending_unlock` - The retention rule has been unlocked but it is still within the unlock delay period. The retention rule can be modified or deleted only after the unlock delay period has expired.
   * - `unlocked` - The retention rule is unlocked and it can be modified or deleted by any user with the required permissions.
   * - `null` - The retention rule has never been locked. Once a retention rule has been locked, it can transition between the `locked` and `unlocked` states only; it can never transition back to `null`.
   *
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * The date and time at which the unlock delay is set to expire. Only returned for retention rules that have been unlocked and that are still within the unlock delay period.
   *
   * @public
   */
  LockEndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the retention rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * [Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be excluded, or ignored, by the retention rule.
   *
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the retention rule.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys of the tags to unassign. All tags that have the specified tag key are unassigned.
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
export interface UpdateRuleRequest {
  /**
   * The unique ID of the retention rule.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Information about the retention period for which the retention rule is to retain resources.
   *
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * The retention rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * > **Note:** This parameter is currently not supported. You can't update a retention rule's resource type after creation.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * [Tag-level retention rules only] Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.
   *
   * You can add the same tag key and value pair to a maximum or five retention rules.
   *
   * To create a Region-level retention rule, omit this parameter. A Region-level retention rule does not have any resource tags specified. It retains all deleted resources of the specified resource type in the Region in which the rule is created, even if the resources are not tagged.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * [Region-level retention rules only] Specifies the exclusion tags to use to identify resources that are to be excluded, or ignored, by a Region-level retention rule. Resources that have any of these tags are not retained by the retention rule upon deletion.
   *
   * You can't specify exclusion tags for tag-level retention rules.
   *
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface UpdateRuleResponse {
  /**
   * The unique ID of the retention rule.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * Information about the retention period for which the retention rule is to retain resources.
   *
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * The retention rule description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The resource type retained by the retention rule.
   *
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * [Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention rule.
   *
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * The state of the retention rule. Only retention rules that are in the `available` state retain resources.
   *
   * @public
   */
  Status?: RuleStatus | undefined;

  /**
   * [Region-level retention rules only] The lock state for the retention rule.
   *
   * - `locked` - The retention rule is locked and can't be modified or deleted.
   * - `pending_unlock` - The retention rule has been unlocked but it is still within the unlock delay period. The retention rule can be modified or deleted only after the unlock delay period has expired.
   * - `unlocked` - The retention rule is unlocked and it can be modified or deleted by any user with the required permissions.
   * - `null` - The retention rule has never been locked. Once a retention rule has been locked, it can transition between the `locked` and `unlocked` states only; it can never transition back to `null`.
   *
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * The date and time at which the unlock delay is set to expire. Only returned for retention rules that have been unlocked and that are still within the unlock delay period.
   *
   * @public
   */
  LockEndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the retention rule.
   *
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * [Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be excluded, or ignored, by the retention rule.
   *
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}
