import { _InputConfig } from "./_InputConfig";
import { _OutputConfig } from "./_OutputConfig";
import { _StoppingCondition } from "./_StoppingCondition";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCompilationJobInput shape
 */
export interface CreateCompilationJobInput {
  /**
   * <p>A name for the model compilation job. The name must be unique within the AWS Region and within your AWS account. </p>
   */
  CompilationJobName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on your behalf. </p> <p>During model compilation, Amazon SageMaker needs your permission to:</p> <ul> <li> <p>Read input data from an S3 bucket</p> </li> <li> <p>Write model artifacts to an S3 bucket</p> </li> <li> <p>Write logs to Amazon CloudWatch Logs</p> </li> <li> <p>Publish metrics to Amazon CloudWatch</p> </li> </ul> <p>You grant permissions for all of these tasks to an IAM role. To pass this role to Amazon SageMaker, the caller of this API must have the <code>iam:PassRole</code> permission. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sagemaker-roles.html">Amazon SageMaker Roles.</a> </p>
   */
  RoleArn: string;

  /**
   * <p>Provides information about the location of input model artifacts, the name and shape of the expected data inputs, and the framework in which the model was trained.</p>
   */
  InputConfig: _InputConfig;

  /**
   * <p>Provides information about the output location for the compiled model and the target device the model runs on.</p>
   */
  OutputConfig: _OutputConfig;

  /**
   * <p>Specifies a limit to how long a model compilation job can run. When the job reaches the time limit, Amazon SageMaker ends the compilation job. Use this API to cap model training costs.</p>
   */
  StoppingCondition: _StoppingCondition;

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
