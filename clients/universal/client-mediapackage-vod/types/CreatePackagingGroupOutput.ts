import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePackagingGroupOutput shape
 */
export interface CreatePackagingGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the PackagingGroup.
   */
  Arn?: string;

  /**
   * The ID of the PackagingGroup.
   */
  Id?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
