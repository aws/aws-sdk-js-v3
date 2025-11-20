// smithy-typescript generated code
import { LockState, ResourceType, RetentionPeriodUnit, RuleStatus, UnlockDelayUnit } from "./enums";

/**
 * <p>[Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention
 *       rule.</p>
 * @public
 */
export interface ResourceTag {
  /**
   * <p>The tag key.</p>
   * @public
   */
  ResourceTagKey: string | undefined;

  /**
   * <p>The tag value.</p>
   * @public
   */
  ResourceTagValue?: string | undefined;
}

/**
 * <p>Information about the retention rule unlock delay. The unlock delay is the period after which
 *       a retention rule can be modified or edited after it has been unlocked by a user with the required
 *       permissions. The retention rule can't be modified or deleted during the unlock delay.</p>
 * @public
 */
export interface UnlockDelay {
  /**
   * <p>The unlock delay period, measured in the unit specified for <b>
   *       UnlockDelayUnit</b>.</p>
   * @public
   */
  UnlockDelayValue: number | undefined;

  /**
   * <p>The unit of time in which to measure the unlock delay. Currently, the unlock delay can
   *       be measured only in days.</p>
   * @public
   */
  UnlockDelayUnit: UnlockDelayUnit | undefined;
}

/**
 * <p>Information about a retention rule lock configuration.</p>
 * @public
 */
export interface LockConfiguration {
  /**
   * <p>Information about the retention rule unlock delay.</p>
   * @public
   */
  UnlockDelay: UnlockDelay | undefined;
}

/**
 * <p>Information about the retention period for which the retention rule is to
 *   retain resources.</p>
 * @public
 */
export interface RetentionPeriod {
  /**
   * <p>The period value for which the retention rule is to retain resources, measured in days.
   *       The supported retention periods are:</p>
   *          <ul>
   *             <li>
   *                <p>EBS volumes: 1 - 7 days</p>
   *             </li>
   *             <li>
   *                <p>EBS snapshots and EBS-backed AMIs: 1 - 365 days</p>
   *             </li>
   *          </ul>
   * @public
   */
  RetentionPeriodValue: number | undefined;

  /**
   * <p>The unit of time in which the retention period is measured. Currently, only <code>DAYS</code>
   *       is supported.</p>
   * @public
   */
  RetentionPeriodUnit: RetentionPeriodUnit | undefined;
}

/**
 * <p>Information about the tags to assign to the retention rule.</p>
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
 * @public
 */
export interface CreateRuleRequest {
  /**
   * <p>Information about the retention period for which the retention rule is to
   *   retain resources.</p>
   * @public
   */
  RetentionPeriod: RetentionPeriod | undefined;

  /**
   * <p>The retention rule description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the tags to assign to the retention rule.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The resource type to be retained by the retention rule. Currently, only EBS volumes, EBS snapshots, and EBS-backed AMIs
   *       are supported.</p>
   *          <ul>
   *             <li>
   *                <p>To retain EBS volumes, specify <code>EBS_VOLUME</code>.</p>
   *             </li>
   *             <li>
   *                <p>To retain EBS snapshots, specify <code>EBS_SNAPSHOT</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>To retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * <p>[Tag-level retention rules only] Specifies the resource tags to use to identify resources that are to be retained by a
   *   tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that
   *   have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have
   *   any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.</p>
   *          <p>You can add the same tag key and value pair to a maximum or five retention rules.</p>
   *          <p>To create a Region-level retention rule, omit this parameter. A Region-level retention rule
   *       does not have any resource tags specified. It retains all deleted resources of the specified
   *       resource type in the Region in which the rule is created, even if the resources are not tagged.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>Information about the retention rule lock configuration.</p>
   * @public
   */
  LockConfiguration?: LockConfiguration | undefined;

  /**
   * <p>[Region-level retention rules only] Specifies the exclusion tags to use to identify resources that are to be excluded,
   * or ignored, by a Region-level retention rule. Resources that have any of these tags are not retained by the retention rule
   * upon deletion.</p>
   *          <p>You can't specify exclusion tags for tag-level retention rules.</p>
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface CreateRuleResponse {
  /**
   * <p>The unique ID of the retention rule.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>Information about the retention period for which the retention rule is to
   *   retain resources.</p>
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>The retention rule description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the tags assigned to the retention rule.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The resource type retained by the retention rule.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>[Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention
   *       rule.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>The state of the retention rule. Only retention rules that are in the <code>available</code>
   *       state retain resources.</p>
   * @public
   */
  Status?: RuleStatus | undefined;

  /**
   * <p>Information about the retention rule lock configuration.</p>
   * @public
   */
  LockConfiguration?: LockConfiguration | undefined;

  /**
   * <p>[Region-level retention rules only] The lock state for the retention rule.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>locked</code> - The retention rule is locked and can't be modified or deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending_unlock</code> - The retention rule has been unlocked but it is still within
   *           the unlock delay period. The retention rule can be modified or deleted only after the unlock
   *           delay period has expired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unlocked</code> - The retention rule is unlocked and it can be modified or deleted by
   *           any user with the required permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>null</code> - The retention rule has never been locked. Once a retention rule has
   *         been locked, it can transition between the <code>locked</code> and <code>unlocked</code> states
   *         only; it can never transition back to <code>null</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>[Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be
   * excluded, or ignored, by the retention rule.</p>
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * <p>The unique ID of the retention rule.</p>
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
   * <p>The unique ID of the retention rule.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetRuleResponse {
  /**
   * <p>The unique ID of the retention rule.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>The retention rule description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The resource type retained by the retention rule.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>Information about the retention period for which the retention rule is to
   *   retain resources.</p>
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>[Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention
   *       rule.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>The state of the retention rule. Only retention rules that are in the <code>available</code>
   *       state retain resources.</p>
   * @public
   */
  Status?: RuleStatus | undefined;

  /**
   * <p>Information about the retention rule lock configuration.</p>
   * @public
   */
  LockConfiguration?: LockConfiguration | undefined;

  /**
   * <p>[Region-level retention rules only] The lock state for the retention rule.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>locked</code> - The retention rule is locked and can't be modified or deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending_unlock</code> - The retention rule has been unlocked but it is still within
   *           the unlock delay period. The retention rule can be modified or deleted only after the unlock
   *           delay period has expired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unlocked</code> - The retention rule is unlocked and it can be modified or deleted by
   *           any user with the required permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>null</code> - The retention rule has never been locked. Once a retention rule has
   *         been locked, it can transition between the <code>locked</code> and <code>unlocked</code> states
   *         only; it can never transition back to <code>null</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * <p>The date and time at which the unlock delay is set to expire. Only returned
   *       for retention rules that have been unlocked and that are still within the unlock
   *       delay period.</p>
   * @public
   */
  LockEndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>[Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be
   * excluded, or ignored, by the retention rule.</p>
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>NextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The resource type retained by the retention rule. Only retention rules that retain
   *       the specified resource type are listed. Currently, only EBS volumes, EBS snapshots, and EBS-backed AMIs are supported.</p>
   *          <ul>
   *             <li>
   *                <p>To list retention rules that retain EBS volumes, specify <code>EBS_VOLUME</code>.</p>
   *             </li>
   *             <li>
   *                <p>To list retention rules that retain EBS snapshots, specify <code>EBS_SNAPSHOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>To list retention rules that retain EBS-backed AMIs, specify <code>EC2_IMAGE</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceType: ResourceType | undefined;

  /**
   * <p>[Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention
   *       rule.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>The lock state of the retention rules to list. Only retention rules with the specified
   *       lock state are returned.</p>
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * <p>[Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be
   * excluded, or ignored, by the retention rule.</p>
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * <p>Information about a Recycle Bin retention rule.</p>
 * @public
 */
export interface RuleSummary {
  /**
   * <p>The unique ID of the retention rule.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>The retention rule description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Information about the retention period for which the retention rule is to
   *   retain resources.</p>
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>[Region-level retention rules only] The lock state for the retention rule.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>locked</code> - The retention rule is locked and can't be modified or deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending_unlock</code> - The retention rule has been unlocked but it is still within
   *           the unlock delay period. The retention rule can be modified or deleted only after the unlock
   *           delay period has expired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unlocked</code> - The retention rule is unlocked and it can be modified or deleted by
   *           any user with the required permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>null</code> - The retention rule has never been locked. Once a retention rule has
   *         been locked, it can transition between the <code>locked</code> and <code>unlocked</code> states
   *         only; it can never transition back to <code>null</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * <p>Information about the retention rules.</p>
   * @public
   */
  Rules?: RuleSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags assigned to the retention rule.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface LockRuleRequest {
  /**
   * <p>The unique ID of the retention rule.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Information about the retention rule lock configuration.</p>
   * @public
   */
  LockConfiguration: LockConfiguration | undefined;
}

/**
 * @public
 */
export interface LockRuleResponse {
  /**
   * <p>The unique ID of the retention rule.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>The retention rule description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The resource type retained by the retention rule.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>Information about the retention period for which the retention rule is to
   *   retain resources.</p>
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>[Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention
   *       rule.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>The state of the retention rule. Only retention rules that are in the <code>available</code>
   *       state retain resources.</p>
   * @public
   */
  Status?: RuleStatus | undefined;

  /**
   * <p>Information about the retention rule lock configuration.</p>
   * @public
   */
  LockConfiguration?: LockConfiguration | undefined;

  /**
   * <p>[Region-level retention rules only] The lock state for the retention rule.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>locked</code> - The retention rule is locked and can't be modified or deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending_unlock</code> - The retention rule has been unlocked but it is still within
   *           the unlock delay period. The retention rule can be modified or deleted only after the unlock
   *           delay period has expired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unlocked</code> - The retention rule is unlocked and it can be modified or deleted by
   *           any user with the required permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>null</code> - The retention rule has never been locked. Once a retention rule has
   *         been locked, it can transition between the <code>locked</code> and <code>unlocked</code> states
   *         only; it can never transition back to <code>null</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>[Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be
   * excluded, or ignored, by the retention rule.</p>
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Information about the tags to assign to the retention rule.</p>
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
   * <p>The unique ID of the retention rule.</p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface UnlockRuleResponse {
  /**
   * <p>The unique ID of the retention rule.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>The retention rule description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The resource type retained by the retention rule.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>Information about the retention period for which the retention rule is to
   *   retain resources.</p>
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>[Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention
   *       rule.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>The state of the retention rule. Only retention rules that are in the <code>available</code>
   *       state retain resources.</p>
   * @public
   */
  Status?: RuleStatus | undefined;

  /**
   * <p>Information about the retention rule lock configuration.</p>
   * @public
   */
  LockConfiguration?: LockConfiguration | undefined;

  /**
   * <p>[Region-level retention rules only] The lock state for the retention rule.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>locked</code> - The retention rule is locked and can't be modified or deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending_unlock</code> - The retention rule has been unlocked but it is still within
   *           the unlock delay period. The retention rule can be modified or deleted only after the unlock
   *           delay period has expired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unlocked</code> - The retention rule is unlocked and it can be modified or deleted by
   *           any user with the required permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>null</code> - The retention rule has never been locked. Once a retention rule has
   *         been locked, it can transition between the <code>locked</code> and <code>unlocked</code> states
   *         only; it can never transition back to <code>null</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * <p>The date and time at which the unlock delay is set to expire. Only returned
   *       for retention rules that have been unlocked and that are still within the unlock
   *       delay period.</p>
   * @public
   */
  LockEndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>[Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be
   * excluded, or ignored, by the retention rule.</p>
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys of the tags to unassign. All tags that have the specified tag key are unassigned.</p>
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
   * <p>The unique ID of the retention rule.</p>
   * @public
   */
  Identifier: string | undefined;

  /**
   * <p>Information about the retention period for which the retention rule is to
   *   retain resources.</p>
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>The retention rule description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <note>
   *             <p>This parameter is currently not supported. You can't update a retention rule's resource type
   *       after creation.</p>
   *          </note>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>[Tag-level retention rules only] Specifies the resource tags to use to identify resources that are to be retained by a
   *   tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that
   *   have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have
   *   any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.</p>
   *          <p>You can add the same tag key and value pair to a maximum or five retention rules.</p>
   *          <p>To create a Region-level retention rule, omit this parameter. A Region-level retention rule
   *       does not have any resource tags specified. It retains all deleted resources of the specified
   *       resource type in the Region in which the rule is created, even if the resources are not tagged.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>[Region-level retention rules only] Specifies the exclusion tags to use to identify resources that are to be excluded,
   * or ignored, by a Region-level retention rule. Resources that have any of these tags are not retained by the retention rule
   * upon deletion.</p>
   *          <p>You can't specify exclusion tags for tag-level retention rules.</p>
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}

/**
 * @public
 */
export interface UpdateRuleResponse {
  /**
   * <p>The unique ID of the retention rule.</p>
   * @public
   */
  Identifier?: string | undefined;

  /**
   * <p>Information about the retention period for which the retention rule is to
   *   retain resources.</p>
   * @public
   */
  RetentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>The retention rule description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The resource type retained by the retention rule.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>[Tag-level retention rules only] Information about the resource tags used to identify resources that are retained by the retention
   *       rule.</p>
   * @public
   */
  ResourceTags?: ResourceTag[] | undefined;

  /**
   * <p>The state of the retention rule. Only retention rules that are in the <code>available</code>
   *       state retain resources.</p>
   * @public
   */
  Status?: RuleStatus | undefined;

  /**
   * <p>[Region-level retention rules only] The lock state for the retention rule.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>locked</code> - The retention rule is locked and can't be modified or deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending_unlock</code> - The retention rule has been unlocked but it is still within
   *           the unlock delay period. The retention rule can be modified or deleted only after the unlock
   *           delay period has expired.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>unlocked</code> - The retention rule is unlocked and it can be modified or deleted by
   *           any user with the required permissions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>null</code> - The retention rule has never been locked. Once a retention rule has
   *         been locked, it can transition between the <code>locked</code> and <code>unlocked</code> states
   *         only; it can never transition back to <code>null</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LockState?: LockState | undefined;

  /**
   * <p>The date and time at which the unlock delay is set to expire. Only returned
   *       for retention rules that have been unlocked and that are still within the unlock
   *       delay period.</p>
   * @public
   */
  LockEndTime?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the retention rule.</p>
   * @public
   */
  RuleArn?: string | undefined;

  /**
   * <p>[Region-level retention rules only] Information about the exclusion tags used to identify resources that are to be
   * excluded, or ignored, by the retention rule.</p>
   * @public
   */
  ExcludeResourceTags?: ResourceTag[] | undefined;
}
