import { _AttributeType } from "./_AttributeType";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the request to update the user's attributes as an administrator.</p>
 */
export interface AdminUpdateUserAttributesInput {
  /**
   * <p>The user pool ID for the user pool where you want to update user attributes.</p>
   */
  UserPoolId: string;

  /**
   * <p>The user name of the user for whom you want to update user attributes.</p>
   */
  Username: string;

  /**
   * <p>An array of name-value pairs representing user attributes.</p> <p>For custom attributes, you must prepend the <code>custom:</code> prefix to the attribute name.</p>
   */
  UserAttributes: Array<_AttributeType> | Iterable<_AttributeType>;

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
