import { _UnmarshalledGCMChannelResponse } from "./_GCMChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteGcmChannelOutput shape
 */
export interface DeleteGcmChannelOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.</p>
   */
  GCMChannelResponse: _UnmarshalledGCMChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
