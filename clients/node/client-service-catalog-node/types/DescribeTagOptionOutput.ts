import { _UnmarshalledTagOptionDetail } from "./_TagOptionDetail";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTagOptionOutput shape
 */
export interface DescribeTagOptionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the TagOption.</p>
   */
  TagOptionDetail?: _UnmarshalledTagOptionDetail;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
