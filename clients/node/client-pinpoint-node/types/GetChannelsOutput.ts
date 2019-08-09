import { _UnmarshalledChannelsResponse } from "./_ChannelsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetChannelsOutput shape
 */
export interface GetChannelsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the general settings and status of all channels for an application, including channels that aren't enabled for the application.</p>
   */
  ChannelsResponse: _UnmarshalledChannelsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
