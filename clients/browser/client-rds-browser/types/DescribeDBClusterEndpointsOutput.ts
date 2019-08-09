import { _UnmarshalledDBClusterEndpoint } from "./_DBClusterEndpoint";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDBClusterEndpointsOutput shape
 */
export interface DescribeDBClusterEndpointsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> An optional pagination token provided by a previous <code>DescribeDBClusterEndpoints</code> request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>Contains the details of the endpoints associated with the cluster and matching any filter conditions.</p>
   */
  DBClusterEndpoints?: Array<_UnmarshalledDBClusterEndpoint>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
