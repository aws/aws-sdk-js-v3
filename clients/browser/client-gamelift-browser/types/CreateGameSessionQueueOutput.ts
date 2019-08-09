import { _UnmarshalledGameSessionQueue } from "./_GameSessionQueue";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface CreateGameSessionQueueOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object that describes the newly created game session queue.</p>
   */
  GameSessionQueue?: _UnmarshalledGameSessionQueue;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
