import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateFpgaImageOutput shape
 */
export interface CreateFpgaImageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The FPGA image identifier (AFI ID).</p>
   */
  FpgaImageId?: string;

  /**
   * <p>The global FPGA image identifier (AGFI ID).</p>
   */
  FpgaImageGlobalId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
