import { _UnmarshalledRemoteAccessSession } from "./_RemoteAccessSession";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server that lists detailed information about the remote access session.</p>
 */
export interface GetRemoteAccessSessionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A container that lists detailed information about the remote access session.</p>
   */
  remoteAccessSession?: _UnmarshalledRemoteAccessSession;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
