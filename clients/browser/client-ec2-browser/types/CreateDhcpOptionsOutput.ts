import { _UnmarshalledDhcpOptions } from "./_DhcpOptions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDhcpOptionsOutput shape
 */
export interface CreateDhcpOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A set of DHCP options.</p>
   */
  DhcpOptions?: _UnmarshalledDhcpOptions;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
