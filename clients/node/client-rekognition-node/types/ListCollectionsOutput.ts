import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCollectionsOutput shape
 */
export interface ListCollectionsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of collection IDs.</p>
   */
  CollectionIds?: Array<string>;

  /**
   * <p>If the result is truncated, the response provides a <code>NextToken</code> that you can use in the subsequent request to fetch the next set of collection IDs.</p>
   */
  NextToken?: string;

  /**
   * <p>Version numbers of the face detection models associated with the collections in the array <code>CollectionIds</code>. For example, the value of <code>FaceModelVersions[2]</code> is the version number for the face detection model used by the collection in <code>CollectionId[2]</code>.</p>
   */
  FaceModelVersions?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
