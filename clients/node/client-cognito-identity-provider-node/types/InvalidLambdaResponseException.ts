import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters an invalid AWS Lambda response.</p>
 */
export interface InvalidLambdaResponseException
  extends __ServiceException__<_InvalidLambdaResponseExceptionDetails> {
  name: "InvalidLambdaResponseException";
}

export interface _InvalidLambdaResponseExceptionDetails {
  /**
   * <p>The message returned when the Amazon Cognito service throws an invalid AWS Lambda response exception.</p>
   */
  message?: string;
}
