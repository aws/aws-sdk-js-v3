import { _UnmarshalledNetworkProfile } from "./_NetworkProfile";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateNetworkProfileOutput shape
 */
export interface CreateNetworkProfileOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The network profile that is returned by the create network profile request.</p>
   */
  networkProfile?: _UnmarshalledNetworkProfile;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
