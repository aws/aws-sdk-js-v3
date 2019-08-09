import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyHostsInput shape
 */
export interface ModifyHostsInput {
  /**
   * <p>Specify whether to enable or disable auto-placement.</p>
   */
  AutoPlacement?: "on" | "off" | string;

  /**
   * <p>The IDs of the Dedicated Hosts to modify.</p>
   */
  HostIds: Array<string> | Iterable<string>;

  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html"> Host Recovery</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  HostRecovery?: "on" | "off" | string;

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
