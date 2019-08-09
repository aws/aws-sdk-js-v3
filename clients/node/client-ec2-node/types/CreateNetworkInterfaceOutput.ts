import { _UnmarshalledNetworkInterface } from "./_NetworkInterface";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of CreateNetworkInterface.</p>
 */
export interface CreateNetworkInterfaceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the network interface.</p>
   */
  NetworkInterface?: _UnmarshalledNetworkInterface;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
