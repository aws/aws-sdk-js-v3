import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You attempted to register a LAMBDA or STEP_FUNCTIONS task in a region where the corresponding service is not available. </p>
 */
export interface FeatureNotAvailableException
  extends __ServiceException__<_FeatureNotAvailableExceptionDetails> {
  name: "FeatureNotAvailableException";
}

export interface _FeatureNotAvailableExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
