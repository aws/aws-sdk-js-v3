import { _UnmarshalledEventStream } from "./_EventStream";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutEventStreamOutput shape
 */
export interface PutEventStreamOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.</p>
   */
  EventStream: _UnmarshalledEventStream;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
