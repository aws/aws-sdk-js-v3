import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ExportConfigurationsOutput shape
 */
export interface ExportConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A unique identifier that you can use to query the export status.</p>
   */
  exportId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
