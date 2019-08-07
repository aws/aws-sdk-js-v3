import { _UnmarshalledExportJobResponse } from "./_ExportJobResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateExportJobOutput shape
 */
export interface CreateExportJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Export job response.
   */
  ExportJobResponse: _UnmarshalledExportJobResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
