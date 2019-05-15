import { _UnmarshalledStreamDescription } from "./_StreamDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output for <code>DescribeStream</code>.</p>
 */
export interface DescribeStreamOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current status of the stream, the stream Amazon Resource Name (ARN), an array of shard objects that comprise the stream, and whether there are more shards available.</p>
   */
  StreamDescription: _UnmarshalledStreamDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
