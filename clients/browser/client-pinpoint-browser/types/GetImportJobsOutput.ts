import { _UnmarshalledImportJobsResponse } from "./_ImportJobsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetImportJobsOutput shape
 */
export interface GetImportJobsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the status and settings of all the import jobs that are associated with an application or segment. An import job is a job that imports endpoint definitions from one or more files.</p>
   */
  ImportJobsResponse: _UnmarshalledImportJobsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
