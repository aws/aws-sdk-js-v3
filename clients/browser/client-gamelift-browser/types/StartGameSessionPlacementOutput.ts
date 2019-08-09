import { _UnmarshalledGameSessionPlacement } from "./_GameSessionPlacement";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface StartGameSessionPlacementOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object that describes the newly created game session placement. This object includes all the information provided in the request, as well as start/end time stamps and placement status. </p>
   */
  GameSessionPlacement?: _UnmarshalledGameSessionPlacement;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
