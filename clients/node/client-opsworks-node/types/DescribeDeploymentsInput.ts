import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDeploymentsInput shape
 */
export interface DescribeDeploymentsInput {
  /**
   * <p>The stack ID. If you include this parameter, the command returns a description of the commands associated with the specified stack.</p>
   */
  StackId?: string;

  /**
   * <p>The app ID. If you include this parameter, the command returns a description of the commands associated with the specified app.</p>
   */
  AppId?: string;

  /**
   * <p>An array of deployment IDs to be described. If you include this parameter, the command returns a description of the specified deployments. Otherwise, it returns a description of every deployment.</p>
   */
  DeploymentIds?: Array<string> | Iterable<string>;

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
