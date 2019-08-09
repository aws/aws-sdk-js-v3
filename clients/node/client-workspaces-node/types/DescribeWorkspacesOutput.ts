import { _UnmarshalledWorkspace } from "./_Workspace";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeWorkspacesOutput shape
 */
export interface DescribeWorkspacesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the WorkSpaces.</p> <p>Because <a>CreateWorkspaces</a> is an asynchronous operation, some of the returned information could be incomplete.</p>
   */
  Workspaces?: Array<_UnmarshalledWorkspace>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
