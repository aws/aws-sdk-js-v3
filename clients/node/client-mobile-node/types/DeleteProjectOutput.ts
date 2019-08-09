import { _UnmarshalledResource } from "./_Resource";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Result structure used in response to request to delete a project. </p>
 */
export interface DeleteProjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> Resources which were deleted. </p>
   */
  deletedResources?: Array<_UnmarshalledResource>;

  /**
   * <p> Resources which were not deleted, due to a risk of losing potentially important data or files. </p>
   */
  orphanedResources?: Array<_UnmarshalledResource>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
