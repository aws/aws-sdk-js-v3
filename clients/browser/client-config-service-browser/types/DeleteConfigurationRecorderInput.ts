import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The request object for the <code>DeleteConfigurationRecorder</code> action.</p>
 */
export interface DeleteConfigurationRecorderInput {
  /**
   * <p>The name of the configuration recorder to be deleted. You can retrieve the name of your configuration recorder by using the <code>DescribeConfigurationRecorders</code> action.</p>
   */
  ConfigurationRecorderName: string;

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
