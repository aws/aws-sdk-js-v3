import { _UnmarshalledResourceTag } from "./_ResourceTag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeTagsOutput shape
 */
export interface DescribeTagsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the tags.</p>
   */
  resourceTags?: Array<_UnmarshalledResourceTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
