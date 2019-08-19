import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service.</p>
 */
export interface UserLambdaValidationException
  extends __ServiceException__<_UserLambdaValidationExceptionDetails> {
  name: "UserLambdaValidationException";
}

export interface _UserLambdaValidationExceptionDetails {
  /**
   * <p>The message returned when the Amazon Cognito service returns a user validation exception with the AWS Lambda service.</p>
   */
  message?: string;
}
