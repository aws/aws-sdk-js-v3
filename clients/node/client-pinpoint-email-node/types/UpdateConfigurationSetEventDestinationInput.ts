import { _EventDestinationDefinition } from "./_EventDestinationDefinition";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A request to change the settings for an event destination for a configuration set.</p>
 */
export interface UpdateConfigurationSetEventDestinationInput {
  /**
   * <p>The name of the configuration set that contains the event destination that you want to modify.</p>
   */
  ConfigurationSetName: string;

  /**
   * <p>The name of the event destination that you want to modify.</p>
   */
  EventDestinationName: string;

  /**
   * <p>An object that defines the event destination.</p>
   */
  EventDestination: _EventDestinationDefinition;

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
