import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The registration code is invalid.</p>
 */
export interface RegistrationCodeValidationException
  extends __ServiceException__<_RegistrationCodeValidationExceptionDetails> {
  name: "RegistrationCodeValidationException";
}

export interface _RegistrationCodeValidationExceptionDetails {
  /**
   * <p>Additional information about the exception.</p>
   */
  message?: string;
}
