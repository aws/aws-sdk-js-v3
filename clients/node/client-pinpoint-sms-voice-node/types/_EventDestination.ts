import {
  _CloudWatchLogsDestination,
  _UnmarshalledCloudWatchLogsDestination
} from "./_CloudWatchLogsDestination";
import {
  _KinesisFirehoseDestination,
  _UnmarshalledKinesisFirehoseDestination
} from "./_KinesisFirehoseDestination";
import {
  _SnsDestination,
  _UnmarshalledSnsDestination
} from "./_SnsDestination";

/**
 * An object that defines an event destination.
 */
export interface _EventDestination {
  /**
   * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
   */
  CloudWatchLogsDestination?: _CloudWatchLogsDestination;

  /**
   * Indicates whether or not the event destination is enabled. If the event destination is enabled, then Amazon Pinpoint sends response data to the specified event destination.
   */
  Enabled?: boolean;

  /**
   * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
   */
  KinesisFirehoseDestination?: _KinesisFirehoseDestination;

  /**
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   */
  MatchingEventTypes?:
    | Array<
        | "INITIATED_CALL"
        | "RINGING"
        | "ANSWERED"
        | "COMPLETED_CALL"
        | "BUSY"
        | "FAILED"
        | "NO_ANSWER"
        | string
      >
    | Iterable<
        | "INITIATED_CALL"
        | "RINGING"
        | "ANSWERED"
        | "COMPLETED_CALL"
        | "BUSY"
        | "FAILED"
        | "NO_ANSWER"
        | string
      >;

  /**
   * A name that identifies the event destination configuration.
   */
  Name?: string;

  /**
   * An object that contains information about an event destination that sends data to Amazon SNS.
   */
  SnsDestination?: _SnsDestination;
}

export interface _UnmarshalledEventDestination extends _EventDestination {
  /**
   * An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
   */
  CloudWatchLogsDestination?: _UnmarshalledCloudWatchLogsDestination;

  /**
   * An object that contains information about an event destination that sends data to Amazon Kinesis Data Firehose.
   */
  KinesisFirehoseDestination?: _UnmarshalledKinesisFirehoseDestination;

  /**
   * An array of EventDestination objects. Each EventDestination object includes ARNs and other information that define an event destination.
   */
  MatchingEventTypes?: Array<
    | "INITIATED_CALL"
    | "RINGING"
    | "ANSWERED"
    | "COMPLETED_CALL"
    | "BUSY"
    | "FAILED"
    | "NO_ANSWER"
    | string
  >;

  /**
   * An object that contains information about an event destination that sends data to Amazon SNS.
   */
  SnsDestination?: _UnmarshalledSnsDestination;
}
