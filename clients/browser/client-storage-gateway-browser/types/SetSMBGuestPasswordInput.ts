import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>SetSMBGuestPasswordInput</p>
 */
export interface SetSMBGuestPasswordInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the file gateway the SMB file share is associated with.</p>
   */
  GatewayARN: string;

  /**
   * <p>The password that you want to set for your SMB Server.</p>
   */
  Password: string;

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
