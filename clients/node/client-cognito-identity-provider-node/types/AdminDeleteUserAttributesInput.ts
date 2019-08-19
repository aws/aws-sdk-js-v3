import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the request to delete user attributes as an administrator.</p>
 */
export interface AdminDeleteUserAttributesInput {
  /**
   * <p>The user pool ID for the user pool where you want to delete user attributes.</p>
   */
  UserPoolId: string;

  /**
   * <p>The user name of the user from which you would like to delete attributes.</p>
   */
  Username: string;

  /**
   * <p>An array of strings representing the user attribute names you wish to delete.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p>
   */
  UserAttributeNames: Array<string> | Iterable<string>;

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
