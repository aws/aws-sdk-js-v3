import { _UnmarshalledRecord } from "./_Record";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output for <a>GetRecords</a>.</p>
 */
export interface GetRecordsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The data records retrieved from the shard.</p>
   */
  Records: Array<_UnmarshalledRecord>;

  /**
   * <p>The next position in the shard from which to start sequentially reading data records. If set to <code>null</code>, the shard has been closed and the requested iterator does not return any more data. </p>
   */
  NextShardIterator?: string;

  /**
   * <p>The number of milliseconds the <a>GetRecords</a> response is from the tip of the stream, indicating how far behind current time the consumer is. A value of zero indicates that record processing is caught up, and there are no new records to process at this moment.</p>
   */
  MillisBehindLatest?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
