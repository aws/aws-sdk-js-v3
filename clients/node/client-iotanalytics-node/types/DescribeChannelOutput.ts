import { _UnmarshalledChannel } from "./_Channel";
import { _UnmarshalledChannelStatistics } from "./_ChannelStatistics";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeChannelOutput shape
 */
export interface DescribeChannelOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains information about the channel.</p>
   */
  channel?: _UnmarshalledChannel;

  /**
   * <p>Statistics about the channel. Included if the 'includeStatistics' parameter is set to true in the request.</p>
   */
  statistics?: _UnmarshalledChannelStatistics;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
