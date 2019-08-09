import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportWorkspaceImageOutput shape
 */
export interface ImportWorkspaceImageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the WorkSpace image.</p>
   */
  ImageId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
