import {
  _FunctionExecutionConfig,
  _UnmarshalledFunctionExecutionConfig
} from "./_FunctionExecutionConfig";
import {
  _ResourceAccessPolicy,
  _UnmarshalledResourceAccessPolicy
} from "./_ResourceAccessPolicy";

/**
 * The environment configuration of the function.
 */
export interface _FunctionConfigurationEnvironment {
  /**
   * If true, the Lambda function is allowed to access the host's /sys folder. Use this when the Lambda function needs to read device information from /sys. This setting applies only when you run the Lambda function in a Greengrass container.
   */
  AccessSysfs?: boolean;

  /**
   * Configuration related to executing the Lambda function
   */
  Execution?: _FunctionExecutionConfig;

  /**
   * A list of the resources, with their permissions, to which the Lambda function will be granted access. A Lambda function can have at most 10 resources. ResourceAccessPolicies apply only when you run the Lambda function in a Greengrass container.
   */
  ResourceAccessPolicies?:
    | Array<_ResourceAccessPolicy>
    | Iterable<_ResourceAccessPolicy>;

  /**
   * Environment variables for the Lambda function's configuration.
   */
  Variables?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledFunctionConfigurationEnvironment
  extends _FunctionConfigurationEnvironment {
  /**
   * Configuration related to executing the Lambda function
   */
  Execution?: _UnmarshalledFunctionExecutionConfig;

  /**
   * A list of the resources, with their permissions, to which the Lambda function will be granted access. A Lambda function can have at most 10 resources. ResourceAccessPolicies apply only when you run the Lambda function in a Greengrass container.
   */
  ResourceAccessPolicies?: Array<_UnmarshalledResourceAccessPolicy>;

  /**
   * Environment variables for the Lambda function's configuration.
   */
  Variables?: { [key: string]: string };
}
