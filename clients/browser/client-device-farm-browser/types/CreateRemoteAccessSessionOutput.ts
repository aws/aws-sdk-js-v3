import { _UnmarshalledRemoteAccessSession } from "./_RemoteAccessSession";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the server response from a request to create a remote access session.</p>
 */
export interface CreateRemoteAccessSessionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A container that describes the remote access session when the request to create a remote access session is sent.</p>
   */
  remoteAccessSession?: _UnmarshalledRemoteAccessSession;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
