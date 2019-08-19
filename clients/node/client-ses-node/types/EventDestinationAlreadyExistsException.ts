import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the event destination could not be created because of a naming conflict.</p>
 */
export interface EventDestinationAlreadyExistsException
  extends __ServiceException__<_EventDestinationAlreadyExistsExceptionDetails> {
  name: "EventDestinationAlreadyExistsException";
}

export interface _EventDestinationAlreadyExistsExceptionDetails {
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;

  /**
   * <p>Indicates that the event destination does not exist.</p>
   */
  EventDestinationName?: string;
}
