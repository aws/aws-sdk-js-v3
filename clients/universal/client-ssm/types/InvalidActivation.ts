import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The activation is not valid. The activation might have been deleted, or the ActivationId and the ActivationCode do not match.</p>
 */
export interface InvalidActivation
  extends __ServiceException__<_InvalidActivationDetails> {
  name: "InvalidActivation";
}

export interface _InvalidActivationDetails {
  /**
   * _String shape
   */
  Message?: string;
}
