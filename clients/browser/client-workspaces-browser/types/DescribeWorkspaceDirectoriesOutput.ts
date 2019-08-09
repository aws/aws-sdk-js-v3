import { _UnmarshalledWorkspaceDirectory } from "./_WorkspaceDirectory";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeWorkspaceDirectoriesOutput shape
 */
export interface DescribeWorkspaceDirectoriesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the directories.</p>
   */
  Directories?: Array<_UnmarshalledWorkspaceDirectory>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
