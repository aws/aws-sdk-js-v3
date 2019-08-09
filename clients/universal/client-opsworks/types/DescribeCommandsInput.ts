import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCommandsInput shape
 */
export interface DescribeCommandsInput {
  /**
   * <p>The deployment ID. If you include this parameter, <code>DescribeCommands</code> returns a description of the commands associated with the specified deployment.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The instance ID. If you include this parameter, <code>DescribeCommands</code> returns a description of the commands associated with the specified instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>An array of command IDs. If you include this parameter, <code>DescribeCommands</code> returns a description of the specified commands. Otherwise, it returns a description of every command.</p>
   */
  CommandIds?: Array<string> | Iterable<string>;

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
