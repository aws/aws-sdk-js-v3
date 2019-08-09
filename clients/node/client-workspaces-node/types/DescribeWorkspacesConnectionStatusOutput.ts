import { _UnmarshalledWorkspaceConnectionStatus } from "./_WorkspaceConnectionStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeWorkspacesConnectionStatusOutput shape
 */
export interface DescribeWorkspacesConnectionStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the connection status of the WorkSpace.</p>
   */
  WorkspacesConnectionStatus?: Array<_UnmarshalledWorkspaceConnectionStatus>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
