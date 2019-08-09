import { _UnmarshalledBatchDeleteImportDataError } from "./_BatchDeleteImportDataError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDeleteImportDataOutput shape
 */
export interface BatchDeleteImportDataOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Error messages returned for each import task that you deleted as a response for this command.</p>
   */
  errors?: Array<_UnmarshalledBatchDeleteImportDataError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
