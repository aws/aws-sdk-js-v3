import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The AWS Lambda function returned invalid output or an exception.</p>
 */
export interface InvalidLambdaFunctionOutputException
  extends __ServiceException__<_InvalidLambdaFunctionOutputExceptionDetails> {
  name: "InvalidLambdaFunctionOutputException";
}

export interface _InvalidLambdaFunctionOutputExceptionDetails {
  /**
   * <p>A message returned when an InvalidLambdaFunctionOutputException occurs</p>
   */
  message: string;
}
