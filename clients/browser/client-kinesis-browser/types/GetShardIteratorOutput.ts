import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output for <code>GetShardIterator</code>.</p>
 */
export interface GetShardIteratorOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The position in the shard from which to start reading data records sequentially. A shard iterator specifies this position using the sequence number of a data record in a shard.</p>
   */
  ShardIterator?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
