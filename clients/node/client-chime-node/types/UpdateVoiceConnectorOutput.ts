import { _UnmarshalledVoiceConnector } from "./_VoiceConnector";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateVoiceConnectorOutput shape
 */
export interface UpdateVoiceConnectorOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Chime Voice Connector details.</p>
   */
  VoiceConnector?: _UnmarshalledVoiceConnector;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
