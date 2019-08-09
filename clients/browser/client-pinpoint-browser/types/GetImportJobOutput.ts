import { _UnmarshalledImportJobResponse } from "./_ImportJobResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetImportJobOutput shape
 */
export interface GetImportJobOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
   */
  ImportJobResponse: _UnmarshalledImportJobResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
