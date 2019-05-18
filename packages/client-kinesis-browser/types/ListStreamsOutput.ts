import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the output for <code>ListStreams</code>.</p>
 */
export interface ListStreamsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The names of the streams that are associated with the AWS account making the <code>ListStreams</code> request.</p>
   */
  StreamNames: Array<string>;

  /**
   * <p>If set to <code>true</code>, there are more streams available to list.</p>
   */
  HasMoreStreams: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
