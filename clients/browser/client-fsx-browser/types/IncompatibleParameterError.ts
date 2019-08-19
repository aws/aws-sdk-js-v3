import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The error returned when a second request is received with the same client request token but different parameters settings. A client request token should always uniquely identify a single request.</p>
 */
export interface IncompatibleParameterError
  extends __ServiceException__<_IncompatibleParameterErrorDetails> {
  name: "IncompatibleParameterError";
}

export interface _IncompatibleParameterErrorDetails {
  /**
   * <p>A parameter that is incompatible with the earlier request.</p>
   */
  Parameter: string;

  /**
   * <p>A detailed error message.</p>
   */
  Message?: string;
}
