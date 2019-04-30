import { _UnmarshalledImportJobResponse } from "./_ImportJobResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateImportJobOutput shape
 */
export interface CreateImportJobOutput {
  /**
   * Import job response.
   */
  ImportJobResponse: _UnmarshalledImportJobResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
