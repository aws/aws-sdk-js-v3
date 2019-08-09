import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateEnvironmentMembershipInput shape
 */
export interface CreateEnvironmentMembershipInput {
  /**
   * <p>The ID of the environment that contains the environment member you want to add.</p>
   */
  environmentId: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment member you want to add.</p>
   */
  userArn: string;

  /**
   * <p>The type of environment member permissions you want to associate with this environment member. Available values include:</p> <ul> <li> <p> <code>read-only</code>: Has read-only access to the environment.</p> </li> <li> <p> <code>read-write</code>: Has read-write access to the environment.</p> </li> </ul>
   */
  permissions: "read-write" | "read-only" | string;

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
