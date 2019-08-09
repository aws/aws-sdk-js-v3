import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRobotInput shape
 */
export interface CreateRobotInput {
  /**
   * <p>The name for the robot.</p>
   */
  name: string;

  /**
   * <p>The target architecture of the robot.</p>
   */
  architecture: "X86_64" | "ARM64" | "ARMHF" | string;

  /**
   * <p>The Greengrass group id.</p>
   */
  greengrassGroupId: string;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the robot.</p>
   */
  tags?: { [key: string]: string } | Iterable<[string, string]>;

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
