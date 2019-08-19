import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterDefaultPatchBaselineOutput shape
 */
export interface RegisterDefaultPatchBaselineOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the default patch baseline.</p>
   */
  BaselineId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
