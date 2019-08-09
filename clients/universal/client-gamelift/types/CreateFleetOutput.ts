import { _UnmarshalledFleetAttributes } from "./_FleetAttributes";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface CreateFleetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Properties for the newly created fleet.</p>
   */
  FleetAttributes?: _UnmarshalledFleetAttributes;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
