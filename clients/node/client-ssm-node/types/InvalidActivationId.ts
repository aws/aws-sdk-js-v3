import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The activation ID is not valid. Verify the you entered the correct ActivationId or ActivationCode and try again.</p>
 */
export interface InvalidActivationId
  extends __ServiceException__<_InvalidActivationIdDetails> {
  name: "InvalidActivationId";
}

export interface _InvalidActivationIdDetails {
  /**
   * _String shape
   */
  Message?: string;
}
