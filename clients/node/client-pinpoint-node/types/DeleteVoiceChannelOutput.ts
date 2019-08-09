import { _UnmarshalledVoiceChannelResponse } from "./_VoiceChannelResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteVoiceChannelOutput shape
 */
export interface DeleteVoiceChannelOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the status and settings of the voice channel for an application.</p>
   */
  VoiceChannelResponse: _UnmarshalledVoiceChannelResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
