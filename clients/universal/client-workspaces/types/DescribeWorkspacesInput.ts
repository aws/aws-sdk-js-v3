import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeWorkspacesInput shape
 */
export interface DescribeWorkspacesInput {
  /**
   * <p>The identifiers of the WorkSpaces. You cannot combine this parameter with any other filter.</p> <p>Because the <a>CreateWorkspaces</a> operation is asynchronous, the identifier it returns is not immediately available. If you immediately call <a>DescribeWorkspaces</a> with this identifier, no information is returned.</p>
   */
  WorkspaceIds?: Array<string> | Iterable<string>;

  /**
   * <p>The identifier of the directory. In addition, you can optionally specify a specific directory user (see <code>UserName</code>). You cannot combine this parameter with any other filter.</p>
   */
  DirectoryId?: string;

  /**
   * <p>The name of the directory user. You must specify this parameter with <code>DirectoryId</code>.</p>
   */
  UserName?: string;

  /**
   * <p>The identifier of the bundle. All WorkSpaces that are created from this bundle are retrieved. You cannot combine this parameter with any other filter.</p>
   */
  BundleId?: string;

  /**
   * <p>The maximum number of items to return.</p>
   */
  Limit?: number;

  /**
   * <p>If you received a <code>NextToken</code> from a previous call that was paginated, provide this token to receive the next set of results.</p>
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
