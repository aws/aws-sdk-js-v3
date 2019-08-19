import { _CommandFilter } from "./_CommandFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCommandInvocationsInput shape
 */
export interface ListCommandInvocationsInput {
  /**
   * <p>(Optional) The invocations for a specific command ID.</p>
   */
  CommandId?: string;

  /**
   * <p>(Optional) The command execution details for a specific instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>(Optional) The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.</p>
   */
  MaxResults?: number;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>(Optional) One or more filters. Use a filter to return a more specific list of results.</p>
   */
  Filters?: Array<_CommandFilter> | Iterable<_CommandFilter>;

  /**
   * <p>(Optional) If set this returns the response of the command executions and any command output. By default this is set to False. </p>
   */
  Details?: boolean;

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
