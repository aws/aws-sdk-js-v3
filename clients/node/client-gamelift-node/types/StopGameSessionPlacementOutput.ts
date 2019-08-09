import { _UnmarshalledGameSessionPlacement } from "./_GameSessionPlacement";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface StopGameSessionPlacementOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object that describes the canceled game session placement, with <code>CANCELLED</code> status and an end time stamp. </p>
   */
  GameSessionPlacement?: _UnmarshalledGameSessionPlacement;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
