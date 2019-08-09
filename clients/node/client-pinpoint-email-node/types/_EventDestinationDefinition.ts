import {
  _KinesisFirehoseDestination,
  _UnmarshalledKinesisFirehoseDestination
} from "./_KinesisFirehoseDestination";
import {
  _CloudWatchDestination,
  _UnmarshalledCloudWatchDestination
} from "./_CloudWatchDestination";
import {
  _SnsDestination,
  _UnmarshalledSnsDestination
} from "./_SnsDestination";
import {
  _PinpointDestination,
  _UnmarshalledPinpointDestination
} from "./_PinpointDestination";

/**
 * <p>An object that defines the event destination. Specifically, it defines which services receive events from emails sent using the configuration set that the event destination is associated with. Also defines the types of events that are sent to the event destination.</p>
 */
export interface _EventDestinationDefinition {
  /**
   * <p>If <code>true</code>, the event destination is enabled. When the event destination is enabled, the specified event types are sent to the destinations in this <code>EventDestinationDefinition</code>.</p> <p>If <code>false</code>, the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.</p>
   */
  Enabled?: boolean;

  /**
   * <p>An array that specifies which events Amazon Pinpoint should send to the destinations in this <code>EventDestinationDefinition</code>.</p>
   */
  MatchingEventTypes?:
    | Array<
        | "SEND"
        | "REJECT"
        | "BOUNCE"
        | "COMPLAINT"
        | "DELIVERY"
        | "OPEN"
        | "CLICK"
        | "RENDERING_FAILURE"
        | string
      >
    | Iterable<
        | "SEND"
        | "REJECT"
        | "BOUNCE"
        | "COMPLAINT"
        | "DELIVERY"
        | "OPEN"
        | "CLICK"
        | "RENDERING_FAILURE"
        | string
      >;

  /**
   * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
   */
  KinesisFirehoseDestination?: _KinesisFirehoseDestination;

  /**
   * <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.</p>
   */
  CloudWatchDestination?: _CloudWatchDestination;

  /**
   * <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.</p>
   */
  SnsDestination?: _SnsDestination;

  /**
   * <p>An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.</p>
   */
  PinpointDestination?: _PinpointDestination;
}

export interface _UnmarshalledEventDestinationDefinition
  extends _EventDestinationDefinition {
  /**
   * <p>An array that specifies which events Amazon Pinpoint should send to the destinations in this <code>EventDestinationDefinition</code>.</p>
   */
  MatchingEventTypes?: Array<
    | "SEND"
    | "REJECT"
    | "BOUNCE"
    | "COMPLAINT"
    | "DELIVERY"
    | "OPEN"
    | "CLICK"
    | "RENDERING_FAILURE"
    | string
  >;

  /**
   * <p>An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.</p>
   */
  KinesisFirehoseDestination?: _UnmarshalledKinesisFirehoseDestination;

  /**
   * <p>An object that defines an Amazon CloudWatch destination for email events. You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.</p>
   */
  CloudWatchDestination?: _UnmarshalledCloudWatchDestination;

  /**
   * <p>An object that defines an Amazon SNS destination for email events. You can use Amazon SNS to send notification when certain email events occur.</p>
   */
  SnsDestination?: _UnmarshalledSnsDestination;

  /**
   * <p>An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.</p>
   */
  PinpointDestination?: _UnmarshalledPinpointDestination;
}
