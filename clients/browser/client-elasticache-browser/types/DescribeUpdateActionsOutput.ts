import { _UnmarshalledUpdateAction } from "./_UpdateAction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUpdateActionsOutput shape
 */
export interface DescribeUpdateActionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An optional marker returned from a prior request. Use this marker for pagination of results from this operation. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Returns a list of update actions</p>
   */
  UpdateActions?: Array<_UnmarshalledUpdateAction>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
