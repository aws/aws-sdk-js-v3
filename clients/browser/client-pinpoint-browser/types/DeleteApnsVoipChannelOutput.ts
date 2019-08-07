import { _UnmarshalledAPNSVoipChannelResponse } from "./_APNSVoipChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteApnsVoipChannelOutput shape
 */
export interface DeleteApnsVoipChannelOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Apple VoIP Push Notification Service channel definition.
   */
  APNSVoipChannelResponse: _UnmarshalledAPNSVoipChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
