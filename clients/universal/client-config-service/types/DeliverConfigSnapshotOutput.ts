import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The output for the <a>DeliverConfigSnapshot</a> action, in JSON format.</p>
 */
export interface DeliverConfigSnapshotOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the snapshot that is being created.</p>
   */
  configSnapshotId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
