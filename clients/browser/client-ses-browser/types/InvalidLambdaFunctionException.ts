import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the provided AWS Lambda function is invalid, or that Amazon SES could not execute the provided function, possibly due to permissions issues. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p>
 */
export interface InvalidLambdaFunctionException
  extends __ServiceException__<_InvalidLambdaFunctionExceptionDetails> {
  name: "InvalidLambdaFunctionException";
}

export interface _InvalidLambdaFunctionExceptionDetails {
  /**
   * <p>Indicates that the ARN of the function was not found.</p>
   */
  FunctionArn?: string;
}
