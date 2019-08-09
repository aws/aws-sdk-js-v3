import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateOpsItemOutput shape
 */
export interface CreateOpsItemOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the OpsItem.</p>
   */
  OpsItemId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
