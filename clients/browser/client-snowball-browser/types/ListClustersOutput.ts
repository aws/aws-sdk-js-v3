import { _UnmarshalledClusterListEntry } from "./_ClusterListEntry";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListClustersOutput shape
 */
export interface ListClustersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Each <code>ClusterListEntry</code> object contains a cluster's state, a cluster's ID, and other important status information.</p>
   */
  ClusterListEntries?: Array<_UnmarshalledClusterListEntry>;

  /**
   * <p>HTTP requests are stateless. If you use the automatically generated <code>NextToken</code> value in your next <code>ClusterListEntry</code> call, your list of returned clusters will start from this point in the array.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
