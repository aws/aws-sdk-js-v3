import { _UnmarshalledChannelsResponse } from "./_ChannelsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetChannelsOutput shape
 */
export interface GetChannelsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Get channels definition
   */
  ChannelsResponse: _UnmarshalledChannelsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
