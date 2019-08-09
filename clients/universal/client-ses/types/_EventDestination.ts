import {
  _KinesisFirehoseDestination,
  _UnmarshalledKinesisFirehoseDestination
} from "./_KinesisFirehoseDestination";
import {
  _CloudWatchDestination,
  _UnmarshalledCloudWatchDestination
} from "./_CloudWatchDestination";
import {
  _SNSDestination,
  _UnmarshalledSNSDestination
} from "./_SNSDestination";

/**
 * <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _EventDestination {
  /**
   * <p>The name of the event destination. The name must:</p> <ul> <li> <p>This value can only contain ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).</p> </li> <li> <p>Contain less than 64 characters.</p> </li> </ul>
   */
  Name: string;

  /**
   * <p>Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to <code>true</code> to enable publishing to this destination; set to <code>false</code> to prevent publishing to this destination. The default value is <code>false</code>.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The type of email sending events to publish to the event destination.</p>
   */
  MatchingEventTypes:
    | Array<
        | "send"
        | "reject"
        | "bounce"
        | "complaint"
        | "delivery"
        | "open"
        | "click"
        | "renderingFailure"
        | string
      >
    | Iterable<
        | "send"
        | "reject"
        | "bounce"
        | "complaint"
        | "delivery"
        | "open"
        | "click"
        | "renderingFailure"
        | string
      >;

  /**
   * <p>An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p>
   */
  KinesisFirehoseDestination?: _KinesisFirehoseDestination;

  /**
   * <p>An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.</p>
   */
  CloudWatchDestination?: _CloudWatchDestination;

  /**
   * <p>An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p>
   */
  SNSDestination?: _SNSDestination;
}

export interface _UnmarshalledEventDestination extends _EventDestination {
  /**
   * <p>The type of email sending events to publish to the event destination.</p>
   */
  MatchingEventTypes: Array<
    | "send"
    | "reject"
    | "bounce"
    | "complaint"
    | "delivery"
    | "open"
    | "click"
    | "renderingFailure"
    | string
  >;

  /**
   * <p>An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.</p>
   */
  KinesisFirehoseDestination?: _UnmarshalledKinesisFirehoseDestination;

  /**
   * <p>An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.</p>
   */
  CloudWatchDestination?: _UnmarshalledCloudWatchDestination;

  /**
   * <p>An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.</p>
   */
  SNSDestination?: _UnmarshalledSNSDestination;
}
