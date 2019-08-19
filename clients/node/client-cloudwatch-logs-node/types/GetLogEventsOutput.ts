import { _UnmarshalledOutputLogEvent } from "./_OutputLogEvent";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLogEventsOutput shape
 */
export interface GetLogEventsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The events.</p>
   */
  events?: Array<_UnmarshalledOutputLogEvent>;

  /**
   * <p>The token for the next set of items in the forward direction. The token expires after 24 hours. If you have reached the end of the stream, it will return the same token you passed in.</p>
   */
  nextForwardToken?: string;

  /**
   * <p>The token for the next set of items in the backward direction. The token expires after 24 hours. This token will never be null. If you have reached the end of the stream, it will return the same token you passed in.</p>
   */
  nextBackwardToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
