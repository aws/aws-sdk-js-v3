import { _UnmarshalledOrigination } from "./_Origination";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutVoiceConnectorOriginationOutput shape
 */
export interface PutVoiceConnectorOriginationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The updated origination setting details.</p>
   */
  Origination?: _UnmarshalledOrigination;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
