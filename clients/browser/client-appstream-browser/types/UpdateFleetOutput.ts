import { _UnmarshalledFleet } from "./_Fleet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFleetOutput shape
 */
export interface UpdateFleetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the fleet.</p>
   */
  Fleet?: _UnmarshalledFleet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
