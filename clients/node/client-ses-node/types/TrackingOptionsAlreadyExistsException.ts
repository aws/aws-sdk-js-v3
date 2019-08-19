import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the configuration set you specified already contains a TrackingOptions object.</p>
 */
export interface TrackingOptionsAlreadyExistsException
  extends __ServiceException__<_TrackingOptionsAlreadyExistsExceptionDetails> {
  name: "TrackingOptionsAlreadyExistsException";
}

export interface _TrackingOptionsAlreadyExistsExceptionDetails {
  /**
   * <p>Indicates that a TrackingOptions object already exists in the specified configuration set.</p>
   */
  ConfigurationSetName?: string;
}
