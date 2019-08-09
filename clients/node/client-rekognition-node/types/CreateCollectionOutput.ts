import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCollectionOutput shape
 */
export interface CreateCollectionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>HTTP status code indicating the result of the operation.</p>
   */
  StatusCode?: number;

  /**
   * <p>Amazon Resource Name (ARN) of the collection. You can use this to manage permissions on your resources. </p>
   */
  CollectionArn?: string;

  /**
   * <p>Version number of the face detection model associated with the collection you are creating.</p>
   */
  FaceModelVersion?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
