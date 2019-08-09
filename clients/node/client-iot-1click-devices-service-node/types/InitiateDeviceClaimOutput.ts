import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InitiateDeviceClaimOutput shape
 */
export interface InitiateDeviceClaimOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The device's final claim state.</p>
   */
  State?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
