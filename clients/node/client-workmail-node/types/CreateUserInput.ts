import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateUserInput shape
 */
export interface CreateUserInput {
  /**
   * <p>The identifier of the organization for which the user is created.</p>
   */
  OrganizationId: string;

  /**
   * <p>The name for the new user. Simple AD or AD Connector user names have a maximum length of 20. All others have a maximum length of 64.</p>
   */
  Name: string;

  /**
   * <p>The display name for the new user.</p>
   */
  DisplayName: string;

  /**
   * <p>The password for the new user.</p>
   */
  Password: string;

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
