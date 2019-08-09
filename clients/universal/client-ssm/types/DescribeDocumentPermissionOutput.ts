import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDocumentPermissionOutput shape
 */
export interface DescribeDocumentPermissionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The account IDs that have permission to use this document. The ID can be either an AWS account or <i>All</i>.</p>
   */
  AccountIds?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
