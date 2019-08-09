import { _UnmarshalledGameSession } from "./_GameSession";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface UpdateGameSessionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object that contains the updated game session metadata.</p>
   */
  GameSession?: _UnmarshalledGameSession;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
