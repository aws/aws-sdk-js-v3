import { _UnmarshalledChannelSummary } from "./_ChannelSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for ListChannelsResponse
 */
export interface ListChannelsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Placeholder documentation for __listOfChannelSummary
   */
  Channels?: Array<_UnmarshalledChannelSummary>;

  /**
   * Placeholder documentation for __string
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
