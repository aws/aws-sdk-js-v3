import { _UnmarshalledRemoteAccessSession } from "./_RemoteAccessSession";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.</p>
 */
export interface StopRemoteAccessSessionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A container representing the metadata from the service about the remote access session you are stopping.</p>
   */
  remoteAccessSession?: _UnmarshalledRemoteAccessSession;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
