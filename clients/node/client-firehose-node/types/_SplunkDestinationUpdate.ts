import {
  _SplunkRetryOptions,
  _UnmarshalledSplunkRetryOptions
} from "./_SplunkRetryOptions";
import {
  _S3DestinationUpdate,
  _UnmarshalledS3DestinationUpdate
} from "./_S3DestinationUpdate";
import {
  _ProcessingConfiguration,
  _UnmarshalledProcessingConfiguration
} from "./_ProcessingConfiguration";
import {
  _CloudWatchLoggingOptions,
  _UnmarshalledCloudWatchLoggingOptions
} from "./_CloudWatchLoggingOptions";

/**
 * <p>Describes an update for a destination in Splunk.</p>
 */
export interface _SplunkDestinationUpdate {
  /**
   * <p>The HTTP Event Collector (HEC) endpoint to which Kinesis Data Firehose sends your data.</p>
   */
  HECEndpoint?: string;

  /**
   * <p>This type can be either "Raw" or "Event."</p>
   */
  HECEndpointType?: "Raw" | "Event" | string;

  /**
   * <p>A GUID that you obtain from your Splunk cluster when you create a new HEC endpoint.</p>
   */
  HECToken?: string;

  /**
   * <p>The amount of time that Kinesis Data Firehose waits to receive an acknowledgment from Splunk after it sends data. At the end of the timeout period, Kinesis Data Firehose either tries to send the data again or considers it an error, based on your retry settings.</p>
   */
  HECAcknowledgmentTimeoutInSeconds?: number;

  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk or if it doesn't receive an acknowledgment of receipt from Splunk.</p>
   */
  RetryOptions?: _SplunkRetryOptions;

  /**
   * <p>Defines how documents should be delivered to Amazon S3. When set to <code>FailedDocumentsOnly</code>, Kinesis Data Firehose writes any data that could not be indexed to the configured Amazon S3 destination. When set to <code>AllDocuments</code>, Kinesis Data Firehose delivers all incoming records to Amazon S3, and also writes failed documents to Amazon S3. Default value is <code>FailedDocumentsOnly</code>. </p>
   */
  S3BackupMode?: "FailedEventsOnly" | "AllEvents" | string;

  /**
   * <p>Your update to the configuration of the backup Amazon S3 location.</p>
   */
  S3Update?: _S3DestinationUpdate;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _ProcessingConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _CloudWatchLoggingOptions;
}

export interface _UnmarshalledSplunkDestinationUpdate
  extends _SplunkDestinationUpdate {
  /**
   * <p>The retry behavior in case Kinesis Data Firehose is unable to deliver data to Splunk or if it doesn't receive an acknowledgment of receipt from Splunk.</p>
   */
  RetryOptions?: _UnmarshalledSplunkRetryOptions;

  /**
   * <p>Your update to the configuration of the backup Amazon S3 location.</p>
   */
  S3Update?: _UnmarshalledS3DestinationUpdate;

  /**
   * <p>The data processing configuration.</p>
   */
  ProcessingConfiguration?: _UnmarshalledProcessingConfiguration;

  /**
   * <p>The Amazon CloudWatch logging options for your delivery stream.</p>
   */
  CloudWatchLoggingOptions?: _UnmarshalledCloudWatchLoggingOptions;
}
