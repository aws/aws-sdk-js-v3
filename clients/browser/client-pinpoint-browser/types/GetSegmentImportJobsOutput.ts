import { _UnmarshalledImportJobsResponse } from "./_ImportJobsResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSegmentImportJobsOutput shape
 */
export interface GetSegmentImportJobsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Import job list.
   */
  ImportJobsResponse: _UnmarshalledImportJobsResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
