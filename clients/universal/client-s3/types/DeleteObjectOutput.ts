import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteObjectOutput shape
 */
export interface DeleteObjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies whether the versioned object that was permanently deleted was (true) or was not (false) a delete marker.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>Returns the version ID of the delete marker created as a result of the DELETE operation.</p>
   */
  VersionId?: string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: "requester" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
