import { _UnmarshalledChannelSummary } from "./_ChannelSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListChannelsOutput shape
 */
export interface ListChannelsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of "ChannelSummary" objects.</p>
   */
  channelSummaries?: Array<_UnmarshalledChannelSummary>;

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
