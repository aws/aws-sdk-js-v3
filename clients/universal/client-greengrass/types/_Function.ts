import {
  _FunctionConfiguration,
  _UnmarshalledFunctionConfiguration
} from "./_FunctionConfiguration";

/**
 * Information about a Lambda function.
 */
export interface _Function {
  /**
   * The ARN of the Lambda function.
   */
  FunctionArn?: string;

  /**
   * The configuration of the Lambda function.
   */
  FunctionConfiguration?: _FunctionConfiguration;

  /**
   * A descriptive or arbitrary ID for the function. This value must be unique within the function definition version. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''.
   */
  Id: string;
}

export interface _UnmarshalledFunction extends _Function {
  /**
   * The configuration of the Lambda function.
   */
  FunctionConfiguration?: _UnmarshalledFunctionConfiguration;
}
