import { _UnmarshalledADMChannelResponse } from "./_ADMChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetAdmChannelOutput shape
 */
export interface GetAdmChannelOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Amazon Device Messaging channel definition.
   */
  ADMChannelResponse: _UnmarshalledADMChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
