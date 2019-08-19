import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGroupMembersInput shape
 */
export interface ListGroupMembersInput {
  /**
   * <p>The identifier for the organization under which the group exists.</p>
   */
  OrganizationId: string;

  /**
   * <p>The identifier for the group to which the members (users or groups) are associated.</p>
   */
  GroupId: string;

  /**
   * <p> The token to use to retrieve the next page of results. The first call does not contain any tokens.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   */
  MaxResults?: number;

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
