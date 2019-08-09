import { _Notification } from "./_Notification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Request of UpdateNotification </p>
 */
export interface UpdateNotificationInput {
  /**
   * <p>The <code>accountId</code> that is associated with the budget whose notification you want to update.</p>
   */
  AccountId: string;

  /**
   * <p>The name of the budget whose notification you want to update.</p>
   */
  BudgetName: string;

  /**
   * <p>The previous notification that is associated with a budget.</p>
   */
  OldNotification: _Notification;

  /**
   * <p>The updated notification to be associated with a budget.</p>
   */
  NewNotification: _Notification;

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
