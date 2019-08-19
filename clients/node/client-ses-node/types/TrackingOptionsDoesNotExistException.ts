import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the TrackingOptions object you specified does not exist.</p>
 */
export interface TrackingOptionsDoesNotExistException
  extends __ServiceException__<_TrackingOptionsDoesNotExistExceptionDetails> {
  name: "TrackingOptionsDoesNotExistException";
}

export interface _TrackingOptionsDoesNotExistExceptionDetails {
  /**
   * <p>Indicates that a TrackingOptions object does not exist in the specified configuration set.</p>
   */
  ConfigurationSetName?: string;
}
