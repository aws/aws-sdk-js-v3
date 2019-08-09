import { _VpcConfig } from "./_VpcConfig";
import { _Environment } from "./_Environment";
import { _DeadLetterConfig } from "./_DeadLetterConfig";
import { _TracingConfig } from "./_TracingConfig";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFunctionConfigurationInput shape
 */
export interface UpdateFunctionConfigurationInput {
  /**
   * <p>The name of the Lambda function.</p> <p class="title"> <b>Name formats</b> </p> <ul> <li> <p> <b>Function name</b> - <code>my-function</code>.</p> </li> <li> <p> <b>Function ARN</b> - <code>arn:aws:lambda:us-west-2:123456789012:function:my-function</code>.</p> </li> <li> <p> <b>Partial ARN</b> - <code>123456789012:function:my-function</code>.</p> </li> </ul> <p>The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.</p>
   */
  FunctionName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the function's execution role.</p>
   */
  Role?: string;

  /**
   * <p>The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/programming-model-v2.html">Programming Model</a>.</p>
   */
  Handler?: string;

  /**
   * <p>A description of the function.</p>
   */
  Description?: string;

  /**
   * <p>The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.</p>
   */
  Timeout?: number;

  /**
   * <p>The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.</p>
   */
  MemorySize?: number;

  /**
   * <p>For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can only access resources and the internet through that VPC. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/vpc.html">VPC Settings</a>.</p>
   */
  VpcConfig?: _VpcConfig;

  /**
   * <p>Environment variables that are accessible from function code during execution.</p>
   */
  Environment?: _Environment;

  /**
   * <p>The identifier of the function's <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime</a>.</p>
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
   * <p>A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/dlq.html">Dead Letter Queues</a>.</p>
   */
  DeadLetterConfig?: _DeadLetterConfig;

  /**
   * <p>The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.</p>
   */
  KMSKeyArn?: string;

  /**
   * <p>Set <code>Mode</code> to <code>Active</code> to sample and trace a subset of incoming requests with AWS X-Ray.</p>
   */
  TracingConfig?: _TracingConfig;

  /**
   * <p>Only update the function if the revision ID matches the ID that's specified. Use this option to avoid modifying a function that has changed since you last read it.</p>
   */
  RevisionId?: string;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">function layers</a> to add to the function's execution environment. Specify each layer by its ARN, including the version.</p>
   */
  Layers?: Array<string> | Iterable<string>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
