import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>CreateTapeOutput</p>
 */
export interface CreateTapeWithBarcodeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A unique Amazon Resource Name (ARN) that represents the virtual tape that was created.</p>
   */
  TapeARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
