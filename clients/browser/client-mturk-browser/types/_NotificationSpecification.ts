/**
 * <p>The NotificationSpecification data structure describes a HIT event notification for a HIT type.</p>
 */
export interface _NotificationSpecification {
  /**
   * <p> The target for notification messages. The Destination’s format is determined by the specified Transport: </p> <ul> <li> <p>When Transport is Email, the Destination is your email address.</p> </li> <li> <p>When Transport is SQS, the Destination is your queue URL.</p> </li> <li> <p>When Transport is SNS, the Destination is the ARN of your topic.</p> </li> </ul>
   */
  Destination: string;

  /**
   * <p> The method Amazon Mechanical Turk uses to send the notification. Valid Values: Email | SQS | SNS. </p>
   */
  Transport: "Email" | "SQS" | "SNS" | string;

  /**
   * <p>The version of the Notification API to use. Valid value is 2006-05-05.</p>
   */
  Version: string;

  /**
   * <p> The list of events that should cause notifications to be sent. Valid Values: AssignmentAccepted | AssignmentAbandoned | AssignmentReturned | AssignmentSubmitted | AssignmentRejected | AssignmentApproved | HITCreated | HITExtended | HITDisposed | HITReviewable | HITExpired | Ping. The Ping event is only valid for the SendTestEventNotification operation. </p>
   */
  EventTypes:
    | Array<
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
        | string
      >
    | Iterable<
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
        | string
      >;
}

export interface _UnmarshalledNotificationSpecification
  extends _NotificationSpecification {
  /**
   * <p> The list of events that should cause notifications to be sent. Valid Values: AssignmentAccepted | AssignmentAbandoned | AssignmentReturned | AssignmentSubmitted | AssignmentRejected | AssignmentApproved | HITCreated | HITExtended | HITDisposed | HITReviewable | HITExpired | Ping. The Ping event is only valid for the SendTestEventNotification operation. </p>
   */
  EventTypes: Array<
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
    | string
  >;
}
