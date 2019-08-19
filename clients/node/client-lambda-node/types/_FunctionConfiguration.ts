import {
  _VpcConfigResponse,
  _UnmarshalledVpcConfigResponse
} from "./_VpcConfigResponse";
import {
  _DeadLetterConfig,
  _UnmarshalledDeadLetterConfig
} from "./_DeadLetterConfig";
import {
  _EnvironmentResponse,
  _UnmarshalledEnvironmentResponse
} from "./_EnvironmentResponse";
import {
  _TracingConfigResponse,
  _UnmarshalledTracingConfigResponse
} from "./_TracingConfigResponse";
import { _Layer, _UnmarshalledLayer } from "./_Layer";

/**
 * <p>Details about a function's configuration.</p>
 */
export interface _FunctionConfiguration {
  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The function's Amazon Resource Name (ARN).</p>
   */
  FunctionArn?: string;

  /**
   * <p>The runtime environment for the Lambda function.</p>
   */
  Runtime?:
    | "nodejs"
    | "nodejs4.3"
    | "nodejs6.10"
    | "nodejs8.10"
    | "nodejs10.x"
    | "java8"
    | "python2.7"
    | "python3.6"
    | "python3.7"
    | "dotnetcore1.0"
    | "dotnetcore2.0"
    | "dotnetcore2.1"
    | "nodejs4.3-edge"
    | "go1.x"
    | "ruby2.5"
    | "provided"
    | string;

  /**
   * <p>The function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>The function that Lambda calls to begin executing your function.</p>
   */
  Handler?: string;

  /**
   * <p>The size of the function's deployment package, in bytes.</p>
   */
  CodeSize?: number;

  /**
   * <p>The function's description.</p>
   */
  Description?: string;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it.</p>
   */
  Timeout?: number;

  /**
   * <p>The memory that's allocated to the function.</p>
   */
  MemorySize?: number;

  /**
   * <p>The date and time that the function was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ss.sTZD).</p>
   */
  LastModified?: string;

  /**
   * <p>The SHA256 hash of the function's deployment package.</p>
   */
  CodeSha256?: string;

  /**
   * <p>The version of the Lambda function.</p>
   */
  Version?: string;

  /**
   * <p>The function's networking configuration.</p>
   */
  VpcConfig?: _VpcConfigResponse;

  /**
   * <p>The function's dead letter queue.</p>
   */
  DeadLetterConfig?: _DeadLetterConfig;

  /**
   * <p>The function's environment variables.</p>
   */
  Environment?: _EnvironmentResponse;

  /**
   * <p>The KMS key that's used to encrypt the function's environment variables. This key is only returned if you've configured a customer-managed CMK.</p>
   */
  KMSKeyArn?: string;

  /**
   * <p>The function's AWS X-Ray tracing configuration.</p>
   */
  TracingConfig?: _TracingConfigResponse;

  /**
   * <p>For Lambda@Edge functions, the ARN of the master function.</p>
   */
  MasterArn?: string;

  /**
   * <p>The latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html"> layers</a>.</p>
   */
  Layers?: Array<_Layer> | Iterable<_Layer>;
}

export interface _UnmarshalledFunctionConfiguration
  extends _FunctionConfiguration {
  /**
   * <p>The function's networking configuration.</p>
   */
  VpcConfig?: _UnmarshalledVpcConfigResponse;

  /**
   * <p>The function's dead letter queue.</p>
   */
  DeadLetterConfig?: _UnmarshalledDeadLetterConfig;

  /**
   * <p>The function's environment variables.</p>
   */
  Environment?: _UnmarshalledEnvironmentResponse;

  /**
   * <p>The function's AWS X-Ray tracing configuration.</p>
   */
  TracingConfig?: _UnmarshalledTracingConfigResponse;

  /**
   * <p>The function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html"> layers</a>.</p>
   */
  Layers?: Array<_UnmarshalledLayer>;
}
