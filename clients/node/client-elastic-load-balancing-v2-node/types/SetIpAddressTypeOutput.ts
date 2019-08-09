import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SetIpAddressTypeOutput shape
 */
export interface SetIpAddressTypeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The IP address type.</p>
   */
  IpAddressType?: "ipv4" | "dualstack" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
