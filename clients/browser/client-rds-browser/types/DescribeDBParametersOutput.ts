import { _UnmarshalledParameter } from "./_Parameter";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action. </p>
 */
export interface DescribeDBParametersOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> A list of <code>Parameter</code> values. </p>
   */
  Parameters?: Array<_UnmarshalledParameter>;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
