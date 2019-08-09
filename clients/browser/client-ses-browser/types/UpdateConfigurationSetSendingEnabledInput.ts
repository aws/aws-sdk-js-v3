import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a request to enable or disable the email sending capabilities for a specific configuration set.</p>
 */
export interface UpdateConfigurationSetSendingEnabledInput {
  /**
   * <p>The name of the configuration set that you want to update.</p>
   */
  ConfigurationSetName: string;

  /**
   * <p>Describes whether email sending is enabled or disabled for the configuration set. </p>
   */
  Enabled: boolean;

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
