import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Confirms the device response.</p>
 */
export interface ConfirmDeviceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates whether the user confirmation is necessary to confirm the device response.</p>
   */
  UserConfirmationNecessary?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
