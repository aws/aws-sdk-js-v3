import { _UnmarshalledWorkspaceImage } from "./_WorkspaceImage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeWorkspaceImagesOutput shape
 */
export interface DescribeWorkspaceImagesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the images.</p>
   */
  Images?: Array<_UnmarshalledWorkspaceImage>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if no more results are available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
