import { _UnmarshalledHandshake } from "./_Handshake";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * EnableAllFeaturesOutput shape
 */
export interface EnableAllFeaturesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure that contains details about the handshake created to support this request to enable all features in the organization.</p>
   */
  Handshake?: _UnmarshalledHandshake;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
