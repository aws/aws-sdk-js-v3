import { _UnmarshalledDBInstance } from "./_DBInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of <a>DescribeDBInstances</a>.</p>
 */
export interface DescribeDBInstancesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Detailed information about one or more DB instances. </p>
   */
  DBInstances?: Array<_UnmarshalledDBInstance>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
