import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUserInput shape
 */
export interface DescribeUserInput {
  /**
   * <p>A system-assigned unique identifier for an SFTP server that has this user assigned.</p>
   */
  ServerId: string;

  /**
   * <p>The name of the user assigned to one or more servers. User names are part of the sign-in credentials to use the AWS Transfer service and perform file transfer tasks.</p>
   */
  UserName: string;

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
