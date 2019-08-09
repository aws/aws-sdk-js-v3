import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters an invalid parameter.</p>
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * <p>The message returned when the Amazon Cognito service throws an invalid parameter exception.</p>
   */
  message?: string;
}
