import {
  _FunctionConfigurationEnvironment,
  _UnmarshalledFunctionConfigurationEnvironment
} from "./_FunctionConfigurationEnvironment";

/**
 * The configuration of the Lambda function.
 */
export interface _FunctionConfiguration {
  /**
   * The expected encoding type of the input payload for the function. The default is ''json''.
   */
  EncodingType?: "binary" | "json" | string;

  /**
   * The environment configuration of the function.
   */
  Environment?: _FunctionConfigurationEnvironment;

  /**
   * The execution arguments.
   */
  ExecArgs?: string;

  /**
   * The name of the function executable.
   */
  Executable?: string;

  /**
   * The memory size, in KB, which the function requires. This setting is not applicable and should be cleared when you run the Lambda function without containerization.
   */
  MemorySize?: number;

  /**
   * True if the function is pinned. Pinned means the function is long-lived and starts when the core starts.
   */
  Pinned?: boolean;

  /**
   * The allowed function execution time, after which Lambda should terminate the function. This timeout still applies to pinned Lambda functions for each request.
   */
  Timeout?: number;
}

export interface _UnmarshalledFunctionConfiguration
  extends _FunctionConfiguration {
  /**
   * The environment configuration of the function.
   */
  Environment?: _UnmarshalledFunctionConfigurationEnvironment;
}
