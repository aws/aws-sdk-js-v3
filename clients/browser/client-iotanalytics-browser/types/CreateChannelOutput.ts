import { _UnmarshalledRetentionPeriod } from "./_RetentionPeriod";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateChannelOutput shape
 */
export interface CreateChannelOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the channel.</p>
   */
  channelName?: string;

  /**
   * <p>The ARN of the channel.</p>
   */
  channelArn?: string;

  /**
   * <p>How long, in days, message data is kept for the channel.</p>
   */
  retentionPeriod?: _UnmarshalledRetentionPeriod;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
