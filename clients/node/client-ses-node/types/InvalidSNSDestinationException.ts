import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the Amazon Simple Notification Service (Amazon SNS) destination is invalid. See the error message for details.</p>
 */
export interface InvalidSNSDestinationException
  extends __ServiceException__<_InvalidSNSDestinationExceptionDetails> {
  name: "InvalidSNSDestinationException";
}

export interface _InvalidSNSDestinationExceptionDetails {
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>Indicates that the event destination does not exist.</p>
   */
  EventDestinationName?: string;
}
