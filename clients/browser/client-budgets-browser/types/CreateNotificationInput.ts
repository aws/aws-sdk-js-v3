import { _Notification } from "./_Notification";
import { _Subscriber } from "./_Subscriber";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request of CreateNotification </p>
 */
export interface CreateNotificationInput {
  /**
   * <p>The <code>accountId</code> that is associated with the budget that you want to create a notification for.</p>
   */
  AccountId: string;

  /**
   * <p>The name of the budget that you want AWS to notify you about. Budget names must be unique within an account.</p>
   */
  BudgetName: string;

  /**
   * <p>The notification that you want to create.</p>
   */
  Notification: _Notification;

  /**
   * <p>A list of subscribers that you want to associate with the notification. Each notification can have one SNS subscriber and up to 10 email subscribers.</p>
   */
  Subscribers: Array<_Subscriber> | Iterable<_Subscriber>;

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
