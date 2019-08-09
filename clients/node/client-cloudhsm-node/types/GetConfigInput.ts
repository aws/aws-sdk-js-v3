import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetConfigInput shape
 */
export interface GetConfigInput {
  /**
   * <p>The ARN of the client.</p>
   */
  ClientArn: string;

  /**
   * <p>The client version.</p>
   */
  ClientVersion: "5.1" | "5.3" | string;

  /**
   * <p>A list of ARNs that identify the high-availability partition groups that are associated with the client.</p>
   */
  HapgList: Array<string> | Iterable<string>;

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
