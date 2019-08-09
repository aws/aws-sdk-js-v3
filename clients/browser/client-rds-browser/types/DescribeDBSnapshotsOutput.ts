import { _UnmarshalledDBSnapshot } from "./_DBSnapshot";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action. </p>
 */
export interface DescribeDBSnapshotsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p> A list of <code>DBSnapshot</code> instances. </p>
   */
  DBSnapshots?: Array<_UnmarshalledDBSnapshot>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
