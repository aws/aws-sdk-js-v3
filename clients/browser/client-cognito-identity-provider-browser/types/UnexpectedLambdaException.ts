import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters an unexpected exception with the AWS Lambda service.</p>
 */
export interface UnexpectedLambdaException
  extends __ServiceException__<_UnexpectedLambdaExceptionDetails> {
  name: "UnexpectedLambdaException";
}

export interface _UnexpectedLambdaExceptionDetails {
  /**
   * <p>The message returned when the Amazon Cognito service returns an unexpected AWS Lambda exception.</p>
   */
  message?: string;
}
