import { _UnmarshalledOrderableReplicationInstance } from "./_OrderableReplicationInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface DescribeOrderableReplicationInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The order-able replication instances available.</p>
   */
  OrderableReplicationInstances?: Array<
    _UnmarshalledOrderableReplicationInstance
  >;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
