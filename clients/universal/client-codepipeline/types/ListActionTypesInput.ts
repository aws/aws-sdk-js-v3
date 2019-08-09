import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the input of a <code>ListActionTypes</code> action.</p>
 */
export interface ListActionTypesInput {
  /**
   * <p>Filters the list of action types to those created by a specified entity.</p>
   */
  actionOwnerFilter?: "AWS" | "ThirdParty" | "Custom" | string;

  /**
   * <p>An identifier that was returned from the previous list action types call, which can be used to return the next set of action types in the list.</p>
   */
  nextToken?: string;

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
