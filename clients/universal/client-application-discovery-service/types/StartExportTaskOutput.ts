import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartExportTaskOutput shape
 */
export interface StartExportTaskOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A unique identifier used to query the status of an export request.</p>
   */
  exportId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
