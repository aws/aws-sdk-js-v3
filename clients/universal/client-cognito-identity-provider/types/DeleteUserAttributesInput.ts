import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the request to delete user attributes.</p>
 */
export interface DeleteUserAttributesInput {
  /**
   * <p>An array of strings representing the user attribute names you wish to delete.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p>
   */
  UserAttributeNames: Array<string> | Iterable<string>;

  /**
   * <p>The access token used in the request to delete user attributes.</p>
   */
  AccessToken: string;

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
