import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the Amazon CloudWatch destination is invalid. See the error message for details.</p>
 */
export interface InvalidCloudWatchDestinationException
  extends __ServiceException__<_InvalidCloudWatchDestinationExceptionDetails> {
  name: "InvalidCloudWatchDestinationException";
}

export interface _InvalidCloudWatchDestinationExceptionDetails {
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>Indicates that the event destination does not exist.</p>
   */
  EventDestinationName?: string;
}
