import { _UnmarshalledEvent } from "./_Event";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventsOutput shape
 */
export interface DescribeEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides an identifier to allow retrieval of paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of events. Each element in the array represents one event.</p>
   */
  Events?: Array<_UnmarshalledEvent>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
