import { _UnmarshalledClusterDbRevision } from "./_ClusterDbRevision";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClusterDbRevisionsOutput shape
 */
export interface DescribeClusterDbRevisionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A string representing the starting point for the next set of revisions. If a value is returned in a response, you can retrieve the next set of revisions by providing the value in the <code>marker</code> parameter and retrying the command. If the <code>marker</code> field is empty, all revisions have already been returned.</p>
   */
  Marker?: string;

  /**
   * <p>A list of revisions.</p>
   */
  ClusterDbRevisions?: Array<_UnmarshalledClusterDbRevision>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
