import { _NotificationSpecification } from "./_NotificationSpecification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SendTestEventNotificationInput shape
 */
export interface SendTestEventNotificationInput {
  /**
   * <p> The notification specification to test. This value is identical to the value you would provide to the UpdateNotificationSettings operation when you establish the notification specification for a HIT type. </p>
   */
  Notification: _NotificationSpecification;

  /**
   * <p> The event to simulate to test the notification specification. This event is included in the test message even if the notification specification does not include the event type. The notification specification does not filter out the test event. </p>
   */
  TestEventType:
    | "AssignmentAccepted"
    | "AssignmentAbandoned"
    | "AssignmentReturned"
    | "AssignmentSubmitted"
    | "AssignmentRejected"
    | "AssignmentApproved"
    | "HITCreated"
    | "HITExpired"
    | "HITReviewable"
    | "HITExtended"
    | "HITDisposed"
    | "Ping"
    | string;

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
