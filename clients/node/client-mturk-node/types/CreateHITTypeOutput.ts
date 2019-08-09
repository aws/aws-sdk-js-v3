import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateHITTypeOutput shape
 */
export interface CreateHITTypeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p> The ID of the newly registered HIT type.</p>
   */
  HITTypeId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
