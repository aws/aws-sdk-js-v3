import { _UnmarshalledColumnMetadata } from "./_ColumnMetadata";
import { _UnmarshalledField } from "./_Field";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response elements represent the output of a request to run a SQL statement against
 *             a database.</p>
 */
export interface ExecuteStatementOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Metadata for the columns included in the results.</p>
   */
  columnMetadata?: Array<_UnmarshalledColumnMetadata>;

  /**
   * <p>Values for fields generated during the request.</p>
   */
  generatedFields?: Array<_UnmarshalledField>;

  /**
   * <p>The number of records updated by the request.</p>
   */
  numberOfRecordsUpdated?: number;

  /**
   * <p>The records returned by the SQL statement.</p>
   */
  records?: Array<Array<_UnmarshalledField>>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
