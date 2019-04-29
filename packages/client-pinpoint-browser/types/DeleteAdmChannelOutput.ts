import { _UnmarshalledADMChannelResponse } from "./_ADMChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteAdmChannelOutput shape
 */
export interface DeleteAdmChannelOutput {
  /**
   * Amazon Device Messaging channel definition.
   */
  ADMChannelResponse: _UnmarshalledADMChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
