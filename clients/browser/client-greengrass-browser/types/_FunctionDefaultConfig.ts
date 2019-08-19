import {
  _FunctionDefaultExecutionConfig,
  _UnmarshalledFunctionDefaultExecutionConfig
} from "./_FunctionDefaultExecutionConfig";

/**
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
 */
export interface _FunctionDefaultConfig {
  /**
   * Configuration information that specifies how a Lambda function runs.
   */
  Execution?: _FunctionDefaultExecutionConfig;
}

export interface _UnmarshalledFunctionDefaultConfig
  extends _FunctionDefaultConfig {
  /**
   * Configuration information that specifies how a Lambda function runs.
   */
  Execution?: _UnmarshalledFunctionDefaultExecutionConfig;
}
