import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that custom verification email template provided content is invalid.</p>
 */
export interface CustomVerificationEmailInvalidContentException
  extends __ServiceException__<
    _CustomVerificationEmailInvalidContentExceptionDetails
  > {
  name: "CustomVerificationEmailInvalidContentException";
}

export interface _CustomVerificationEmailInvalidContentExceptionDetails {}
