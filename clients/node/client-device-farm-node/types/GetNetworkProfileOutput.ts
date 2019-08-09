import { _UnmarshalledNetworkProfile } from "./_NetworkProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetNetworkProfileOutput shape
 */
export interface GetNetworkProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The network profile.</p>
   */
  networkProfile?: _UnmarshalledNetworkProfile;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
