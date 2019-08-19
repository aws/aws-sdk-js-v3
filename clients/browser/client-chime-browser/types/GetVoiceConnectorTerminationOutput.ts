import { _UnmarshalledTermination } from "./_Termination";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetVoiceConnectorTerminationOutput shape
 */
export interface GetVoiceConnectorTerminationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The termination setting details.</p>
   */
  Termination?: _UnmarshalledTermination;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
