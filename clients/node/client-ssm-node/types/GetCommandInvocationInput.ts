import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCommandInvocationInput shape
 */
export interface GetCommandInvocationInput {
  /**
   * <p>(Required) The parent command ID of the invocation plugin.</p>
   */
  CommandId: string;

  /**
   * <p>(Required) The ID of the managed instance targeted by the command. A managed instance can be an Amazon EC2 instance or an instance in your hybrid environment that is configured for Systems Manager.</p>
   */
  InstanceId: string;

  /**
   * <p>(Optional) The name of the plugin for which you want detailed results. If the document contains only one plugin, the name can be omitted and the details will be returned.</p>
   */
  PluginName?: string;

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
