import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a delete repository operation.</p>
 */
export interface DeleteRepositoryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the repository that was deleted.</p>
   */
  repositoryId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
