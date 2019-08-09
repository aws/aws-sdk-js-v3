import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetLogRecordOutput shape
 */
export interface GetLogRecordOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested log event, as a JSON string.</p>
   */
  logRecord?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
