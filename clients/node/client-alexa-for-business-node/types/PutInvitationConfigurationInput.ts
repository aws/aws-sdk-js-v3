import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutInvitationConfigurationInput shape
 */
export interface PutInvitationConfigurationInput {
  /**
   * <p>The name of the organization sending the enrollment invite to a user.</p>
   */
  OrganizationName: string;

  /**
   * <p>The email ID of the organization or individual contact that the enrolled user can use. </p>
   */
  ContactEmail?: string;

  /**
   * <p>The list of private skill IDs that you want to recommend to the user to enable in the invitation.</p>
   */
  PrivateSkillIds?: Array<string> | Iterable<string>;

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
