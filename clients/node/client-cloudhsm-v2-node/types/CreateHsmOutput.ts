import { _UnmarshalledHsm } from "./_Hsm";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateHsmOutput shape
 */
export interface CreateHsmOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the HSM that was created.</p>
   */
  Hsm?: _UnmarshalledHsm;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
