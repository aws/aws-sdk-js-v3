import { _UnmarshalledRepository } from "./_Repository";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRepositoryOutput shape
 */
export interface CreateRepositoryOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The repository that was created.</p>
   */
  repository?: _UnmarshalledRepository;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
