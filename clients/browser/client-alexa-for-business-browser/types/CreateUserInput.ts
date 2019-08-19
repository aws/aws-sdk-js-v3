import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUserInput shape
 */
export interface CreateUserInput {
  /**
   * <p>The ARN for the user.</p>
   */
  UserId: string;

  /**
   * <p>The first name for the user.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name for the user.</p>
   */
  LastName?: string;

  /**
   * <p>The email address for the user.</p>
   */
  Email?: string;

  /**
   * <p>A unique, user-specified identifier for this request that ensures idempotency. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>The tags for the user.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

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
