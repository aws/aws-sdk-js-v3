import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the Amazon Kinesis Firehose destination is invalid. See the error message for details.</p>
 */
export interface InvalidFirehoseDestinationException
  extends __ServiceException__<_InvalidFirehoseDestinationExceptionDetails> {
  name: "InvalidFirehoseDestinationException";
}

export interface _InvalidFirehoseDestinationExceptionDetails {
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>Indicates that the event destination does not exist.</p>
   */
  EventDestinationName?: string;
}
