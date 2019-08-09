import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to enable or disable the ability of Amazon Pinpoint to send emails that use a specific configuration set.</p>
 */
export interface PutConfigurationSetSendingOptionsInput {
  /**
   * <p>The name of the configuration set that you want to enable or disable email sending for.</p>
   */
  ConfigurationSetName: string;

  /**
   * <p>If <code>true</code>, email sending is enabled for the configuration set. If <code>false</code>, email sending is disabled for the configuration set.</p>
   */
  SendingEnabled?: boolean;

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
