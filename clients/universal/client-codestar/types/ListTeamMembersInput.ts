import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListTeamMembersInput shape
 */
export interface ListTeamMembersInput {
  /**
   * <p>The ID of the project for which you want to list team members.</p>
   */
  projectId: string;

  /**
   * <p>The continuation token for the next set of results, if the results cannot be returned in one response.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of team members you want returned in a response.</p>
   */
  maxResults?: number;

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
