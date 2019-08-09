import { _UnmarshalledPlayerSession } from "./_PlayerSession";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface CreatePlayerSessionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Object that describes the newly created player session record.</p>
   */
  PlayerSession?: _UnmarshalledPlayerSession;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
