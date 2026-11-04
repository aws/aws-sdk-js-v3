// smithy-typescript generated code
import type { ApprovalMode, ScheduledChangeType, Status } from "./enums";

/**
 * @public
 */
export interface ApprovePaidSubscriptionInput {
  /**
   * The ARN of the subscription to approve.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The `ETag` value from a previous `GetSubscription` or `ListSubscriptions` response. This ensures you are approving the expected version of the subscription.
   *
   * @public
   */
  ifMatch: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the request is handled only once.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * A pending change on a subscription that takes effect at the end of the current billing period, such as a tier downgrade or cancellation.
 *
 * @public
 */
export interface ScheduledChange {
  /**
   * The type of pending change. Possible values are `DOWNGRADE` (a tier change to a lower level) and `CANCELLATION` (subscription termination).
   *
   * @public
   */
  changeType: ScheduledChangeType | undefined;

  /**
   * The date and time when the change takes effect, in ISO 8601 format. This value is populated after the change is confirmed by the billing system.
   *
   * @public
   */
  effectiveDate?: Date | undefined;

  /**
   * For downgrades, the tier level that the subscription will change to. Not present for cancellations.
   *
   * @public
   */
  planTier?: string | undefined;

  /**
   * For downgrades, the target usage level after the change takes effect.
   *
   * @public
   */
  usageLevel?: string | undefined;
}

/**
 * The full details of a flat-rate pricing subscription, including its current configuration, status, and associated resources.
 *
 * @public
 */
export interface Subscription {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies this subscription.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The pricing plan family for the subscription, such as `CloudFront`.
   *
   * @public
   */
  planFamily: string | undefined;

  /**
   * The current tier level of the pricing plan, such as `FREE`, `PRO`, `BUSINESS`, or `PREMIUM`.
   *
   * @public
   */
  planTier: string | undefined;

  /**
   * The usage level within the plan tier. When present, indicates a specific capacity configuration beyond the base tier.
   *
   * @public
   */
  usageLevel?: string | undefined;

  /**
   * A pending change that will take effect at the end of the current billing period. This field is present only when a downgrade or cancellation is scheduled.
   *
   * @public
   */
  scheduledChange?: ScheduledChange | undefined;

  /**
   * The current status of the subscription. For the list of possible values, see the `Status` type.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * A human-readable explanation of the current status, present when additional context is available.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The ARNs of the resources covered by this subscription.
   *
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * The date and time when the subscription was created, in ISO 8601 format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the subscription was last modified, in ISO 8601 format.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ApprovePaidSubscriptionOutput {
  /**
   * The details of the approved subscription.
   *
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * The updated entity tag for concurrency control.
   *
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface AssociateResourcesToSubscriptionInput {
  /**
   * The ARN of the subscription to add resources to.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARNs of the resources to add to the subscription.
   *
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * The `ETag` value from a previous `GetSubscription` or `ListSubscriptions` response.
   *
   * @public
   */
  ifMatch: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the request is handled only once.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface AssociateResourcesToSubscriptionOutput {
  /**
   * The details of the subscription with the newly added resources.
   *
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * The updated entity tag for concurrency control.
   *
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionInput {
  /**
   * The ARN of the subscription to cancel.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The `ETag` value from a previous `GetSubscription` or `ListSubscriptions` response.
   *
   * @public
   */
  ifMatch: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the request is handled only once.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionOutput {
  /**
   * The details of the subscription with the pending cancellation. For active subscriptions, a `scheduledChange` of type `CANCELLATION` is included.
   *
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * The updated entity tag for concurrency control.
   *
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionChangeInput {
  /**
   * The ARN of the subscription whose pending change you want to cancel.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The `ETag` value from a previous `GetSubscription` or `ListSubscriptions` response.
   *
   * @public
   */
  ifMatch: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the request is handled only once.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CancelSubscriptionChangeOutput {
  /**
   * The details of the subscription with the pending change removed.
   *
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * The updated entity tag for concurrency control.
   *
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionInput {
  /**
   * The pricing plan family to subscribe to, such as `CloudFront`.
   *
   * @public
   */
  planFamily: string | undefined;

  /**
   * The tier level for the subscription, such as `FREE`, `PRO`, `BUSINESS`, or `PREMIUM`.
   *
   * @public
   */
  planTier: string | undefined;

  /**
   * The usage level within the plan tier. Specify `DEFAULT` for the base configuration, or a higher level if your plan tier supports it.
   *
   * @public
   */
  usageLevel?: string | undefined;

  /**
   * The ARNs of the resources to include in the subscription. Specify one or more supported resources.
   *
   * > **Note:** For subscriptions in the CloudFront plan family, the resources must include exactly one Amazon CloudFront distribution and exactly one WAF web ACL. You can also include other supported resources, such as Amazon Route 53 hosted zones and CloudFront KeyValueStores.
   *
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * Determines whether the subscription requires explicit approval before billing starts. Set to `MANUAL` to require a separate `ApprovePaidSubscription` call, or `IMMEDIATE` to activate the subscription right away. For paid tier plans, this defaults to `MANUAL` if not specified. For the `FREE` plan tier, only `IMMEDIATE` is supported, and it is the default.
   *
   * @public
   */
  approvalMode?: ApprovalMode | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the request is handled only once. If you send the same request with the same client token, the API returns the original response without creating a duplicate subscription.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriptionOutput {
  /**
   * The details of the newly created subscription.
   *
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * The entity tag for concurrency control. Use this value in the `If-Match` header for subsequent operations on this subscription.
   *
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourcesFromSubscriptionInput {
  /**
   * The ARN of the subscription to remove resources from.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ARNs of the resources to remove from the subscription. For subscriptions in the CloudFront plan family, you cannot remove the required CloudFront distribution or WAF web ACL.
   *
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * The `ETag` value from a previous `GetSubscription` or `ListSubscriptions` response.
   *
   * @public
   */
  ifMatch: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the request is handled only once.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateResourcesFromSubscriptionOutput {
  /**
   * The details of the subscription with the specified resources removed.
   *
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * The updated entity tag for concurrency control.
   *
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionInput {
  /**
   * The ARN of the subscription to retrieve.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionOutput {
  /**
   * The details of the requested subscription.
   *
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * The entity tag for concurrency control. Use this value in the `If-Match` header for subsequent operations on this subscription.
   *
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsInput {
  /**
   * A token from a previous `ListSubscriptions` response. If the response included a `nextToken`, there are more results available. Pass this value to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information for a flat-rate pricing subscription, as returned by list operations.
 *
 * @public
 */
export interface SubscriptionSummary {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies this subscription.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The pricing plan family for the subscription, such as `CloudFront`.
   *
   * @public
   */
  planFamily: string | undefined;

  /**
   * The current tier level of the pricing plan.
   *
   * @public
   */
  planTier: string | undefined;

  /**
   * The usage level within the plan tier.
   *
   * @public
   */
  usageLevel?: string | undefined;

  /**
   * A pending change that will take effect at the end of the current billing period, if any.
   *
   * @public
   */
  scheduledChange?: ScheduledChange | undefined;

  /**
   * The current status of the subscription.
   *
   * @public
   */
  status: Status | undefined;

  /**
   * A human-readable explanation of the current status, present when additional context is available.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The ARNs of the resources covered by this subscription.
   *
   * @public
   */
  resourceArns: string[] | undefined;

  /**
   * The date and time when the subscription was created, in ISO 8601 format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the subscription was last modified, in ISO 8601 format.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The entity tag for concurrency control. Pass this value in the `If-Match` header when making changes to this subscription.
   *
   * @public
   */
  eTag: string | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsOutput {
  /**
   * The list of subscription summaries for the calling account.
   *
   * @public
   */
  subscriptionSummaries: SubscriptionSummary[] | undefined;

  /**
   * A token that indicates there are more results available. Pass this value in a subsequent `ListSubscriptions` request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionInput {
  /**
   * The ARN of the subscription to update.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The new tier level for the subscription.
   *
   * @public
   */
  planTier: string | undefined;

  /**
   * The usage level within the plan tier. Specify `DEFAULT` for the base configuration. If omitted, the usage level is reset to the default.
   *
   * @public
   */
  usageLevel?: string | undefined;

  /**
   * The `ETag` value from a previous `GetSubscription` or `ListSubscriptions` response. This ensures you are updating the expected version of the subscription.
   *
   * @public
   */
  ifMatch: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the request is handled only once.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionOutput {
  /**
   * The details of the updated subscription. For downgrades, the current tier remains unchanged and a `scheduledChange` indicates the pending change.
   *
   * @public
   */
  subscription: Subscription | undefined;

  /**
   * The updated entity tag for concurrency control.
   *
   * @public
   */
  eTag: string | undefined;
}
