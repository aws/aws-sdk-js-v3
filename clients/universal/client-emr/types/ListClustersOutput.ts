import { _UnmarshalledClusterSummary } from "./_ClusterSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.</p>
 */
export interface ListClustersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The list of clusters for the account based on the given filters.</p>
   */
  Clusters?: Array<_UnmarshalledClusterSummary>;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
