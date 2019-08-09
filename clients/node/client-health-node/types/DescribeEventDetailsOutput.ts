import { _UnmarshalledEventDetails } from "./_EventDetails";
import { _UnmarshalledEventDetailsErrorItem } from "./_EventDetailsErrorItem";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventDetailsOutput shape
 */
export interface DescribeEventDetailsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the events that could be retrieved.</p>
   */
  successfulSet?: Array<_UnmarshalledEventDetails>;

  /**
   * <p>Error messages for any events that could not be retrieved.</p>
   */
  failedSet?: Array<_UnmarshalledEventDetailsErrorItem>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
