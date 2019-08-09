import { _UnmarshalledOrderableDBInstanceOption } from "./_OrderableDBInstanceOption";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeOrderableDBInstanceOptionsOutput shape
 */
export interface DescribeOrderableDBInstanceOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An <a>OrderableDBInstanceOption</a> structure containing information about orderable options for the DB instance.</p>
   */
  OrderableDBInstanceOptions?: Array<_UnmarshalledOrderableDBInstanceOption>;

  /**
   * <p> An optional pagination token provided by a previous OrderableDBInstanceOptions request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
