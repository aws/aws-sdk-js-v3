import { _UnmarshalledWorkspaceBundle } from "./_WorkspaceBundle";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeWorkspaceBundlesOutput shape
 */
export interface DescribeWorkspaceBundlesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the bundles.</p>
   */
  Bundles?: Array<_UnmarshalledWorkspaceBundle>;

  /**
   * <p>The token to use to retrieve the next set of results, or null if there are no more results available. This token is valid for one day and must be used within that time frame.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
