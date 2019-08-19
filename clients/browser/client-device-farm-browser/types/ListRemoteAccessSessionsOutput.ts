import { _UnmarshalledRemoteAccessSession } from "./_RemoteAccessSession";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.</p>
 */
export interface ListRemoteAccessSessionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A container representing the metadata from the service about each remote access session you are requesting.</p>
   */
  remoteAccessSessions?: Array<_UnmarshalledRemoteAccessSession>;

  /**
   * <p>An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
