import { _UnmarshalledExportTask } from "./_ExportTask";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateInstanceExportTaskOutput shape
 */
export interface CreateInstanceExportTaskOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the instance export task.</p>
   */
  ExportTask?: _UnmarshalledExportTask;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
