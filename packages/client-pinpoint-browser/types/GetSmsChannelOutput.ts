import { _UnmarshalledSMSChannelResponse } from "./_SMSChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSmsChannelOutput shape
 */
export interface GetSmsChannelOutput {
  /**
   * SMS Channel Response.
   */
  SMSChannelResponse: _UnmarshalledSMSChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
