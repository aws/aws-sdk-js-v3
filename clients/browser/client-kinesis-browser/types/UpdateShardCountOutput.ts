import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateShardCountOutput shape
 */
export interface UpdateShardCountOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The name of the stream.</p>
   */
  StreamName?: string;

  /**
   * <p>The current number of shards.</p>
   */
  CurrentShardCount?: number;

  /**
   * <p>The updated number of shards.</p>
   */
  TargetShardCount?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
