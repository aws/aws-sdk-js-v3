// smithy-typescript generated code
import type { ApprovalMode, ScheduledChangeType, Status } from "./enums";

/**
 * @public
 */
export interface ApprovePaidSubscriptionInput {
  /**
   * <p>The ARN of the subscription to approve.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The <code>ETag</code> value from a previous <code>GetSubscription</code> or <code>ListSubscriptions</code> response. This ensures you are approving the expected version of the subscription.</p>
   * @public
   */
  ifMatch: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the request is handled only once.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>A pending change on a subscription that takes effect at the end of the current billing period, such as a tier downgrade or cancellation.</p>
 * @public
 */
export interface ScheduledChange {
  /**
   * <p>The type of pending change. Possible values are <code>DOWNGRADE</code> (a tier change to a lower level) and <code>CANCELLATION</code> (subscription termination).</p>
   * @public
   */
  changeType: ScheduledChangeType | undefined;

  /**
   * <p>The date and time when the change takes effect, in ISO 8601 format. This value is populated after the change is confirmed by the billing system.</p>
   * @public
   */
  effectiveDate?: Date | undefined;

  /**
   * <p>For downgrades, the tier level that the subscription will change to. Not present for cancellations.</p>
   * @public
   */
  planTier?: string | undefined;

  /**
   * <p>For downgrades, the target usage level after the change takes effect.</p>
   * @public
   */
  usageLevel?: string | undefined;
}

/**
 * <p>The full details of a flat-rate pricing subscription, including its current configuration, status, and associated resources.</p>
 * @public
 */
export interface Subscription {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies this subscription.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The pricing plan family for the subscription, such as <code>CloudFront</code>.</p>
   * @public
   */
  planFamily: string | undefined;

  /**
   * <p>The current tier level of the pricing plan, such as <code>FREE</code>, <code>PRO</code>, <code>BUSINESS</code>, or <code>PREMIUM</code>.</p>
   * @public
   */
  planTier: string | undefined;

  /**
   * <p>The usage level within the plan tier. When present, indicates a specific capacity configuration beyond the base tier.</p>
   * @public
   */
  usageLevel?: string | undefined;

  /**
   * <p>A pending change that will take effect at the end of the current billing period. This field is present only when a downgrade or cancellation is scheduled.</p>
   * @public
   */
  scheduledChange?: ScheduledChange | undefined;

  /**
   * <p>The current status of the subscription. For the list of possible values, see the <code>Status</code> type.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>A human-readable explanation of the current status, present when additional context is available.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The ARNs of the resources covered by this subscription.</p>
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * <p>The date and time when the subscription was created, in ISO 8601 format.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the subscription was last modified, in ISO 8601 format.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ApprovePaidSubscriptionOutput {
  /**
   * <p>The details of the approved subscription.</p>
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * <p>The updated entity tag for concurrency control.</p>
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface AssociateResourcesToSubscriptionInput {
  /**
   * <p>The ARN of the subscription to add resources to.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARNs of the resources to add to the subscription.</p>
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * <p>The <code>ETag</code> value from a previous <code>GetSubscription</code> or <code>ListSubscriptions</code> response.</p>
   * @public
   */
  ifMatch: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the request is handled only once.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResourcesToSubscriptionOutput {
  /**
   * <p>The details of the subscription with the newly added resources.</p>
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * <p>The updated entity tag for concurrency control.</p>
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionInput {
  /**
   * <p>The ARN of the subscription to cancel.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The <code>ETag</code> value from a previous <code>GetSubscription</code> or <code>ListSubscriptions</code> response.</p>
   * @public
   */
  ifMatch: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the request is handled only once.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionOutput {
  /**
   * <p>The details of the subscription with the pending cancellation. For active subscriptions, a <code>scheduledChange</code> of type <code>CANCELLATION</code> is included.</p>
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * <p>The updated entity tag for concurrency control.</p>
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionChangeInput {
  /**
   * <p>The ARN of the subscription whose pending change you want to cancel.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The <code>ETag</code> value from a previous <code>GetSubscription</code> or <code>ListSubscriptions</code> response.</p>
   * @public
   */
  ifMatch: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the request is handled only once.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionChangeOutput {
  /**
   * <p>The details of the subscription with the pending change removed.</p>
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * <p>The updated entity tag for concurrency control.</p>
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionInput {
  /**
   * <p>The pricing plan family to subscribe to, such as <code>CloudFront</code>.</p>
   * @public
   */
  planFamily: string | undefined;

  /**
   * <p>The tier level for the subscription, such as <code>FREE</code>, <code>PRO</code>, <code>BUSINESS</code>, or <code>PREMIUM</code>.</p>
   * @public
   */
  planTier: string | undefined;

  /**
   * <p>The usage level within the plan tier. Specify <code>DEFAULT</code> for the base configuration, or a higher level if your plan tier supports it.</p>
   * @public
   */
  usageLevel?: string | undefined;

  /**
   * <p>The ARNs of the resources to include in the subscription. Specify one or more supported resources.</p> <note> <p>For subscriptions in the CloudFront plan family, the resources must include exactly one Amazon CloudFront distribution and exactly one WAF web ACL. You can also include other supported resources, such as Amazon Route 53 hosted zones and CloudFront KeyValueStores.</p> </note>
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * <p>Determines whether the subscription requires explicit approval before billing starts. Set to <code>MANUAL</code> to require a separate <code>ApprovePaidSubscription</code> call, or <code>IMMEDIATE</code> to activate the subscription right away. For paid tier plans, this defaults to <code>MANUAL</code> if not specified. For the <code>FREE</code> plan tier, only <code>IMMEDIATE</code> is supported, and it is the default.</p>
   * @public
   */
  approvalMode?: ApprovalMode | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure that the request is handled only once. If you send the same request with the same client token, the API returns the original response without creating a duplicate subscription.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionOutput {
  /**
   * <p>The details of the newly created subscription.</p>
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * <p>The entity tag for concurrency control. Use this value in the <code>If-Match</code> header for subsequent operations on this subscription.</p>
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourcesFromSubscriptionInput {
  /**
   * <p>The ARN of the subscription to remove resources from.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ARNs of the resources to remove from the subscription. For subscriptions in the CloudFront plan family, you cannot remove the required CloudFront distribution or WAF web ACL.</p>
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * <p>The <code>ETag</code> value from a previous <code>GetSubscription</code> or <code>ListSubscriptions</code> response.</p>
   * @public
   */
  ifMatch: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the request is handled only once.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourcesFromSubscriptionOutput {
  /**
   * <p>The details of the subscription with the specified resources removed.</p>
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * <p>The updated entity tag for concurrency control.</p>
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionInput {
  /**
   * <p>The ARN of the subscription to retrieve.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionOutput {
  /**
   * <p>The details of the requested subscription.</p>
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * <p>The entity tag for concurrency control. Use this value in the <code>If-Match</code> header for subsequent operations on this subscription.</p>
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsInput {
  /**
   * <p>A token from a previous <code>ListSubscriptions</code> response. If the response included a <code>nextToken</code>, there are more results available. Pass this value to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information for a flat-rate pricing subscription, as returned by list operations.</p>
 * @public
 */
export interface SubscriptionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies this subscription.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The pricing plan family for the subscription, such as <code>CloudFront</code>.</p>
   * @public
   */
  planFamily: string | undefined;

  /**
   * <p>The current tier level of the pricing plan.</p>
   * @public
   */
  planTier: string | undefined;

  /**
   * <p>The usage level within the plan tier.</p>
   * @public
   */
  usageLevel?: string | undefined;

  /**
   * <p>A pending change that will take effect at the end of the current billing period, if any.</p>
   * @public
   */
  scheduledChange?: ScheduledChange | undefined;

  /**
   * <p>The current status of the subscription.</p>
   * @public
   */
  status: Status | undefined;

  /**
   * <p>A human-readable explanation of the current status, present when additional context is available.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The ARNs of the resources covered by this subscription.</p>
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * <p>The date and time when the subscription was created, in ISO 8601 format.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time when the subscription was last modified, in ISO 8601 format.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The entity tag for concurrency control. Pass this value in the <code>If-Match</code> header when making changes to this subscription.</p>
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsOutput {
  /**
   * <p>The list of subscription summaries for the calling account.</p>
   * @public
   */
  subscriptionSummaries: SubscriptionSummary[] | undefined;

  /**
   * <p>A token that indicates there are more results available. Pass this value in a subsequent <code>ListSubscriptions</code> request to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionInput {
  /**
   * <p>The ARN of the subscription to update.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The new tier level for the subscription.</p>
   * @public
   */
  planTier: string | undefined;

  /**
   * <p>The usage level within the plan tier. Specify <code>DEFAULT</code> for the base configuration. If omitted, the usage level is reset to the default.</p>
   * @public
   */
  usageLevel?: string | undefined;

  /**
   * <p>The <code>ETag</code> value from a previous <code>GetSubscription</code> or <code>ListSubscriptions</code> response. This ensures you are updating the expected version of the subscription.</p>
   * @public
   */
  ifMatch: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the request is handled only once.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionOutput {
  /**
   * <p>The details of the updated subscription. For downgrades, the current tier remains unchanged and a <code>scheduledChange</code> indicates the pending change.</p>
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * <p>The updated entity tag for concurrency control.</p>
   * @public
   */
  eTag: string | undefined;
}
