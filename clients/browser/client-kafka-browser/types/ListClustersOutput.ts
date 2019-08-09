import { _UnmarshalledClusterInfo } from "./_ClusterInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListClustersOutput shape
 */
export interface ListClustersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   *
   *             <p>Information on each of the MSK clusters in the response.</p>
   *
   */
  ClusterInfoList?: Array<_UnmarshalledClusterInfo>;

  /**
   *
   *             <p>The paginated results marker. When the result of a ListClusters operation is truncated, the call returns NextToken in the response.
   *                To get another batch of clusters, provide this token in your next request.</p>
   *
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
