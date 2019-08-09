import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to add a custom domain for tracking open and click events to a configuration set.</p>
 */
export interface PutConfigurationSetTrackingOptionsInput {
  /**
   * <p>The name of the configuration set that you want to add a custom tracking domain to.</p>
   */
  ConfigurationSetName: string;

  /**
   * <p>The domain that you want to use to track open and click events.</p>
   */
  CustomRedirectDomain?: string;

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
