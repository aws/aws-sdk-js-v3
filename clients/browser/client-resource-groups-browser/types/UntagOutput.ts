import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UntagOutput shape
 */
export interface UntagOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the resource from which tags have been removed.</p>
   */
  Arn?: string;

  /**
   * <p>The keys of tags that have been removed.</p>
   */
  Keys?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
