import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateEnvironmentEC2Input shape
 */
export interface CreateEnvironmentEC2Input {
  /**
   * <p>The name of the environment to create.</p> <p>This name is visible to other AWS IAM users in the same AWS account.</p>
   */
  name: string;

  /**
   * <p>The description of the environment to create.</p>
   */
  description?: string;

  /**
   * <p>A unique, case-sensitive string that helps AWS Cloud9 to ensure this operation completes no more than one time.</p> <p>For more information, see <a href="http://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Client Tokens</a> in the <i>Amazon EC2 API Reference</i>.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The type of instance to connect to the environment (for example, <code>t2.micro</code>).</p>
   */
  instanceType: string;

  /**
   * <p>The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance.</p>
   */
  subnetId?: string;

  /**
   * <p>The number of minutes until the running instance is shut down after the environment has last been used.</p>
   */
  automaticStopTimeMinutes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment owner. This ARN can be the ARN of any AWS IAM principal. If this value is not specified, the ARN defaults to this environment's creator.</p>
   */
  ownerArn?: string;

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
