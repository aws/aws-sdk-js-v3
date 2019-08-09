import { _UnmarshalledNetwork } from "./_Network";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetNetworkOutput shape
 */
export interface GetNetworkOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object containing network configuration parameters.</p>
   */
  Network?: _UnmarshalledNetwork;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
