import { _UnmarshalledAPNSVoipSandboxChannelResponse } from "./_APNSVoipSandboxChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateApnsVoipSandboxChannelOutput shape
 */
export interface UpdateApnsVoipSandboxChannelOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the status and settings of the APNs (Apple Push Notification service) VoIP sandbox channel for an application.</p>
   */
  APNSVoipSandboxChannelResponse: _UnmarshalledAPNSVoipSandboxChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
