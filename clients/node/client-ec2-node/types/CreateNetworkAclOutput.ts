import { _UnmarshalledNetworkAcl } from "./_NetworkAcl";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateNetworkAclOutput shape
 */
export interface CreateNetworkAclOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the network ACL.</p>
   */
  NetworkAcl?: _UnmarshalledNetworkAcl;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
