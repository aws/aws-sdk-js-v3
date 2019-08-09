import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeCollectionOutput shape
 */
export interface DescribeCollectionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The number of faces that are indexed into the collection. To index faces into a collection, use <a>IndexFaces</a>.</p>
   */
  FaceCount?: number;

  /**
   * <p>The version of the face model that's used by the collection for face detection.</p> <p>For more information, see Model Versioning in the Amazon Rekognition Developer Guide.</p>
   */
  FaceModelVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the collection.</p>
   */
  CollectionARN?: string;

  /**
   * <p>The number of milliseconds since the Unix epoch time until the creation of the collection. The Unix epoch time is 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970.</p>
   */
  CreationTimestamp?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
