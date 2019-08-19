import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ClaimDevicesByClaimCodeOutput shape
 */
export interface ClaimDevicesByClaimCodeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The claim code provided by the device manufacturer.</p>
   */
  ClaimCode?: string;

  /**
   * <p>The total number of devices associated with the claim code that has been processed in
   *  the claim request.</p>
   */
  Total?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
