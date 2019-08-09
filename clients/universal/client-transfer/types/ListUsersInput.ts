import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListUsersInput shape
 */
export interface ListUsersInput {
  /**
   * <p>Specifies the number of users to return as a response to the <code>ListUsers</code> request.</p>
   */
  MaxResults?: number;

  /**
   * <p>When you can get additional results from the <code>ListUsers</code> call, a <code>NextToken</code> parameter is returned in the output. You can then pass in a subsequent command the <code>NextToken</code> parameter to continue listing additional users.</p>
   */
  NextToken?: string;

  /**
   * <p>A system-assigned unique identifier for a Secure File Transfer Protocol (SFTP) server that has users are assigned to it.</p>
   */
  ServerId: string;

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
