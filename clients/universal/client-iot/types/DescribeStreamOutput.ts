import { _UnmarshalledStreamInfo } from "./_StreamInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStreamOutput shape
 */
export interface DescribeStreamOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the stream.</p>
   */
  streamInfo?: _UnmarshalledStreamInfo;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
