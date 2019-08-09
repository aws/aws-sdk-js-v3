import { _UnmarshalledNetworkProfile } from "./_NetworkProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateNetworkProfileOutput shape
 */
export interface UpdateNetworkProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of the available network profiles.</p>
   */
  networkProfile?: _UnmarshalledNetworkProfile;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
