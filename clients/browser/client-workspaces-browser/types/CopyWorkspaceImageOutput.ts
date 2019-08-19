import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CopyWorkspaceImageOutput shape
 */
export interface CopyWorkspaceImageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the image.</p>
   */
  ImageId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
