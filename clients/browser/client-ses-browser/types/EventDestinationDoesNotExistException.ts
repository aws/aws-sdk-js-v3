import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the event destination does not exist.</p>
 */
export interface EventDestinationDoesNotExistException
  extends __ServiceException__<_EventDestinationDoesNotExistExceptionDetails> {
  name: "EventDestinationDoesNotExistException";
}

export interface _EventDestinationDoesNotExistExceptionDetails {
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>Indicates that the event destination does not exist.</p>
   */
  EventDestinationName?: string;
}
