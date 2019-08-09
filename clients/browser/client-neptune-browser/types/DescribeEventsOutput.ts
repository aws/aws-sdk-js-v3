import { _UnmarshalledEvent } from "./_Event";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventsOutput shape
 */
export interface DescribeEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> An optional pagination token provided by a previous Events request. If this parameter is specified, the response includes only records beyond the marker, up to the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * <p> A list of <a>Event</a> instances.</p>
   */
  Events?: Array<_UnmarshalledEvent>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
