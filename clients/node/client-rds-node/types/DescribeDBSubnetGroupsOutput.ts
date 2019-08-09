import { _UnmarshalledDBSubnetGroup } from "./_DBSubnetGroup";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action. </p>
 */
export interface DescribeDBSubnetGroupsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p> A list of <code>DBSubnetGroup</code> instances. </p>
   */
  DBSubnetGroups?: Array<_UnmarshalledDBSubnetGroup>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
