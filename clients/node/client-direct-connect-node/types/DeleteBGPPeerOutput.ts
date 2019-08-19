import { _UnmarshalledVirtualInterface } from "./_VirtualInterface";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteBGPPeerOutput shape
 */
export interface DeleteBGPPeerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The virtual interface.</p>
   */
  virtualInterface?: _UnmarshalledVirtualInterface;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
