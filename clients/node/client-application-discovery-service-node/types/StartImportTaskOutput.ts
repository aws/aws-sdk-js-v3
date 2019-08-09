import { _UnmarshalledImportTask } from "./_ImportTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartImportTaskOutput shape
 */
export interface StartImportTaskOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of information related to the import task request including status information, times, IDs, the Amazon S3 Object URL for the import file, and more. </p>
   */
  task?: _UnmarshalledImportTask;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
