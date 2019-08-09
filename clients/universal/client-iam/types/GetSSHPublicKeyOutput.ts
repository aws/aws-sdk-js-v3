import { _UnmarshalledSSHPublicKey } from "./_SSHPublicKey";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>GetSSHPublicKey</a> request.</p>
 */
export interface GetSSHPublicKeyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure containing details about the SSH public key.</p>
   */
  SSHPublicKey?: _UnmarshalledSSHPublicKey;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
