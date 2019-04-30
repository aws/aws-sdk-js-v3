import { _UnmarshalledExportJobsResponse } from "./_ExportJobsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSegmentExportJobsOutput shape
 */
export interface GetSegmentExportJobsOutput {
  /**
   * Export job list.
   */
  ExportJobsResponse: _UnmarshalledExportJobsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
