import { _UnmarshalledBusinessCallingSettings } from "./_BusinessCallingSettings";
import { _UnmarshalledVoiceConnectorSettings } from "./_VoiceConnectorSettings";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetGlobalSettingsOutput shape
 */
export interface GetGlobalSettingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Chime Business Calling settings.</p>
   */
  BusinessCalling?: _UnmarshalledBusinessCallingSettings;

  /**
   * <p>The Amazon Chime Voice Connector settings.</p>
   */
  VoiceConnector?: _UnmarshalledVoiceConnectorSettings;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
