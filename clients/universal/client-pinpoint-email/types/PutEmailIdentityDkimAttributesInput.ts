import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to enable or disable DKIM signing of email that you send from an email identity.</p>
 */
export interface PutEmailIdentityDkimAttributesInput {
  /**
   * <p>The email identity that you want to change the DKIM settings for.</p>
   */
  EmailIdentity: string;

  /**
   * <p>Sets the DKIM signing configuration for the identity.</p> <p>When you set this value <code>true</code>, then the messages that Amazon Pinpoint sends from the identity are DKIM-signed. When you set this value to <code>false</code>, then the messages that Amazon Pinpoint sends from the identity aren't DKIM-signed.</p>
   */
  SigningEnabled?: boolean;

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
