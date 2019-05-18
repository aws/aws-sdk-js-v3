import { _UnmarshalledAPNSSandboxChannelResponse } from "./_APNSSandboxChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetApnsSandboxChannelOutput shape
 */
export interface GetApnsSandboxChannelOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Apple Development Push Notification Service channel definition.
   */
  APNSSandboxChannelResponse: _UnmarshalledAPNSSandboxChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
