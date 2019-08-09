import { _RecordFormat, _UnmarshalledRecordFormat } from "./_RecordFormat";
import { _RecordColumn, _UnmarshalledRecordColumn } from "./_RecordColumn";

/**
 * <p>Describes updates for an SQL-based Amazon Kinesis Data Analytics application's input schema.</p>
 */
export interface _InputSchemaUpdate {
  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormatUpdate?: _RecordFormat;

  /**
   * <p>Specifies the encoding of the records in the streaming source; for example, UTF-8.</p>
   */
  RecordEncodingUpdate?: string;

  /**
   * <p>A list of <code>RecordColumn</code> objects. Each object describes the mapping of the streaming source element to the corresponding column in the in-application stream.</p>
   */
  RecordColumnUpdates?: Array<_RecordColumn> | Iterable<_RecordColumn>;
}

export interface _UnmarshalledInputSchemaUpdate extends _InputSchemaUpdate {
  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormatUpdate?: _UnmarshalledRecordFormat;

  /**
   * <p>A list of <code>RecordColumn</code> objects. Each object describes the mapping of the streaming source element to the corresponding column in the in-application stream.</p>
   */
  RecordColumnUpdates?: Array<_UnmarshalledRecordColumn>;
}
