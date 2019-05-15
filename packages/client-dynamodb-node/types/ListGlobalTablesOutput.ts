import { _UnmarshalledGlobalTable } from "./_GlobalTable";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGlobalTablesOutput shape
 */
export interface ListGlobalTablesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>List of global table names.</p>
   */
  GlobalTables?: Array<_UnmarshalledGlobalTable>;

  /**
   * <p>Last evaluated global table name.</p>
   */
  LastEvaluatedGlobalTableName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
