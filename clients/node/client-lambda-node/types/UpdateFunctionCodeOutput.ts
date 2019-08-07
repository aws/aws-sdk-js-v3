import { _UnmarshalledVpcConfigResponse } from "./_VpcConfigResponse";
import { _UnmarshalledDeadLetterConfig } from "./_DeadLetterConfig";
import { _UnmarshalledEnvironmentResponse } from "./_EnvironmentResponse";
import { _UnmarshalledTracingConfigResponse } from "./_TracingConfigResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A Lambda function's configuration settings.</p>
 */
export interface UpdateFunctionCodeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The function's Amazon Resource Name.</p>
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
    | "java8"
    | "python2.7"
    | "python3.6"
    | "dotnetcore1.0"
    | "dotnetcore2.0"
    | "dotnetcore2.1"
    | "nodejs4.3-edge"
    | "go1.x"
    | string;

  /**
   * <p>The function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>The function Lambda calls to begin executing your function.</p>
   */
  Handler?: string;

  /**
   * <p>The size of the function's deployment package in bytes.</p>
   */
  CodeSize?: number;

  /**
   * <p>The function's description.</p>
   */
  Description?: string;

  /**
   * <p>The amount of time that Lambda allows a function to run before terminating it.</p>
   */
  Timeout?: number;

  /**
   * <p>The memory allocated to the function</p>
   */
  MemorySize?: number;

  /**
   * <p>The date and time that the function was last updated, in <a href="https://www.w3.org/TR/NOTE-datetime">ISO-8601 format</a> (YYYY-MM-DDThh:mm:ssTZD).</p>
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
   * <p>The KMS key used to encrypt the function's environment variables. Only returned if you've configured a customer managed CMK.</p>
   */
  KMSKeyArn?: string;

  /**
   * <p>The function's AWS X-Ray tracing configuration.</p>
   */
  TracingConfig?: _UnmarshalledTracingConfigResponse;

  /**
   * <p>The ARN of the master function.</p>
   */
  MasterArn?: string;

  /**
   * <p>Represents the latest updated revision of the function or alias.</p>
   */
  RevisionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
