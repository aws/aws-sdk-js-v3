import { _Budget } from "./_Budget";
import { _NotificationWithSubscribers } from "./_NotificationWithSubscribers";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request of CreateBudget </p>
 */
export interface CreateBudgetInput {
  /**
   * <p>The <code>accountId</code> that is associated with the budget.</p>
   */
  AccountId: string;

  /**
   * <p>The budget object that you want to create.</p>
   */
  Budget: _Budget;

  /**
   * <p>A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your <code>CreateBudget</code> call, AWS creates the notifications and subscribers for you.</p>
   */
  NotificationsWithSubscribers?:
    | Array<_NotificationWithSubscribers>
    | Iterable<_NotificationWithSubscribers>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
