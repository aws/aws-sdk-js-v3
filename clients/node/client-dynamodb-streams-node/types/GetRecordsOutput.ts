import { _UnmarshalledRecord } from "./_Record";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output of a <code>GetRecords</code> operation.</p>
 */
export interface GetRecordsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The stream records from the shard, which were retrieved using the shard iterator.</p>
   */
  Records?: Array<_UnmarshalledRecord>;

  /**
   * <p>The next position in the shard from which to start sequentially reading stream records. If set to <code>null</code>, the shard has been closed and the requested iterator will not return any more data.</p>
   */
  NextShardIterator?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
