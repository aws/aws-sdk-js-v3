import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMembersInput shape
 */
export interface ListMembersInput {
  /**
   * <p>The unique identifier of the network for which to list members.</p>
   */
  NetworkId: string;

  /**
   * <p>The optional name of the member to list.</p>
   */
  Name?: string;

  /**
   * <p>An optional status specifier. If provided, only members currently in this status are listed.</p>
   */
  Status?:
    | "CREATING"
    | "AVAILABLE"
    | "CREATE_FAILED"
    | "DELETING"
    | "DELETED"
    | string;

  /**
   * <p>An optional Boolean value. If provided, the request is limited either to members that the current AWS account owns (<code>true</code>) or that other AWS accounts own (<code>false</code>). If omitted, all members are listed.</p>
   */
  IsOwned?: boolean;

  /**
   * <p>The maximum number of members to return in the request.</p>
   */
  MaxResults?: number;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  NextToken?: string;

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
