import { _UnmarshalledVoiceConnector } from "./_VoiceConnector";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListVoiceConnectorsOutput shape
 */
export interface ListVoiceConnectorsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The details of the Amazon Chime Voice Connectors.</p>
   */
  VoiceConnectors?: Array<_UnmarshalledVoiceConnector>;

  /**
   * <p>The token to use to retrieve the next page of results.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
