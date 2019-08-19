import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterPatchBaselineForPatchGroupOutput shape
 */
export interface RegisterPatchBaselineForPatchGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the patch baseline the patch group was registered with.</p>
   */
  BaselineId?: string;

  /**
   * <p>The name of the patch group registered with the patch baseline.</p>
   */
  PatchGroup?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
