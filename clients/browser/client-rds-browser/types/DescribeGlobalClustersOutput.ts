import { _UnmarshalledGlobalCluster } from "./_GlobalCluster";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeGlobalClustersOutput shape
 */
export interface DescribeGlobalClustersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p> The list of global clusters returned by this request. </p>
   */
  GlobalClusters?: Array<_UnmarshalledGlobalCluster>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
