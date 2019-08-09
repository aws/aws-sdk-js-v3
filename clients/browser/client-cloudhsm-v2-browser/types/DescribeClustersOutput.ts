import { _UnmarshalledCluster } from "./_Cluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeClustersOutput shape
 */
export interface DescribeClustersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of clusters.</p>
   */
  Clusters?: Array<_UnmarshalledCluster>;

  /**
   * <p>An opaque string that indicates that the response contains only a subset of clusters. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
