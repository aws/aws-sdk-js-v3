import { _UnmarshalledFailedCreateWorkspaceRequest } from "./_FailedCreateWorkspaceRequest";
import { _UnmarshalledWorkspace } from "./_Workspace";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateWorkspacesOutput shape
 */
export interface CreateWorkspacesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the WorkSpaces that could not be created.</p>
   */
  FailedRequests?: Array<_UnmarshalledFailedCreateWorkspaceRequest>;

  /**
   * <p>Information about the WorkSpaces that were created.</p> <p>Because this operation is asynchronous, the identifier returned is not immediately available for use with other operations. For example, if you call <a>DescribeWorkspaces</a> before the WorkSpace is created, the information returned can be incomplete.</p>
   */
  PendingRequests?: Array<_UnmarshalledWorkspace>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
