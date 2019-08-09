import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdatePlacementInput shape
 */
export interface UpdatePlacementInput {
  /**
   * <p>The name of the placement to update.</p>
   */
  placementName: string;

  /**
   * <p>The name of the project containing the placement to be updated.</p>
   */
  projectName: string;

  /**
   * <p>The user-defined object of attributes used to update the placement. The maximum number of key/value pairs is 50.</p>
   */
  attributes?: { [key: string]: string } | Iterable<[string, string]>;

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
