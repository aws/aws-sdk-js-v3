import { _UnmarshalledExportJobResponse } from "./_ExportJobResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetExportJobOutput shape
 */
export interface GetExportJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
   */
  ExportJobResponse: _UnmarshalledExportJobResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
