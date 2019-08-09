import { _RoutingStrategy } from "./_RoutingStrategy";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input for a request action.</p>
 */
export interface UpdateAliasInput {
  /**
   * <p>Unique identifier for a fleet alias. Specify the alias you want to update.</p>
   */
  AliasId: string;

  /**
   * <p>Descriptive label that is associated with an alias. Alias names do not need to be unique.</p>
   */
  Name?: string;

  /**
   * <p>Human-readable description of an alias.</p>
   */
  Description?: string;

  /**
   * <p>Object that specifies the fleet and routing type to use for the alias.</p>
   */
  RoutingStrategy?: _RoutingStrategy;

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
