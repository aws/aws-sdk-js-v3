import { _UnmarshalledExportJobsResponse } from "./_ExportJobsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetExportJobsOutput shape
 */
export interface GetExportJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about all the export jobs that are associated with an application or segment. An export job is a job that exports endpoint definitions to a file.</p>
   */
  ExportJobsResponse: _UnmarshalledExportJobsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
