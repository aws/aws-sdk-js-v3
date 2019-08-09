import { _UnmarshalledFpgaImageAttribute } from "./_FpgaImageAttribute";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeFpgaImageAttributeOutput shape
 */
export interface DescribeFpgaImageAttributeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the attribute.</p>
   */
  FpgaImageAttribute?: _UnmarshalledFpgaImageAttribute;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
