import { _UnmarshalledStreamInfo } from "./_StreamInfo";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListStreamsOutput shape
 */
export interface ListStreamsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>StreamInfo</code> objects.</p>
   */
  StreamInfoList?: Array<_UnmarshalledStreamInfo>;

  /**
   * <p>If the response is truncated, the call returns this element with a token. To get the next batch of streams, use this token in your next request. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
