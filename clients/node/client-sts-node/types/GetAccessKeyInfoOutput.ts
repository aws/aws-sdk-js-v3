import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAccessKeyInfoOutput shape
 */
export interface GetAccessKeyInfoOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number used to identify the AWS account.</p>
   */
  Account?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
