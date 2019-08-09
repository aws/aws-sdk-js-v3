import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProtectionOutput shape
 */
export interface CreateProtectionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The unique identifier (ID) for the <a>Protection</a> object that is created.</p>
   */
  ProtectionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
