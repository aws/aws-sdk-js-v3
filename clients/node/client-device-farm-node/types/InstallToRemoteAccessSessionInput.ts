import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.</p>
 */
export interface InstallToRemoteAccessSessionInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the remote access session about which you are requesting information.</p>
   */
  remoteAccessSessionArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the app about which you are requesting information.</p>
   */
  appArn: string;

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
