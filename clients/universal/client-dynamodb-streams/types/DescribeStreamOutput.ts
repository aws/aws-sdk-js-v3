import { _UnmarshalledStreamDescription } from "./_StreamDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>DescribeStream</code> operation.</p>
 */
export interface DescribeStreamOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complete description of the stream, including its creation date and time, the DynamoDB table associated with the stream, the shard IDs within the stream, and the beginning and ending sequence numbers of stream records within the shards.</p>
   */
  StreamDescription?: _UnmarshalledStreamDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
