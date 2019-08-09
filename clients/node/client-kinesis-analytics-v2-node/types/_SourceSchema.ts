import { _RecordFormat, _UnmarshalledRecordFormat } from "./_RecordFormat";
import { _RecordColumn, _UnmarshalledRecordColumn } from "./_RecordColumn";

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. </p>
 */
export interface _SourceSchema {
  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormat: _RecordFormat;

  /**
   * <p>Specifies the encoding of the records in the streaming source. For example, UTF-8.</p>
   */
  RecordEncoding?: string;

  /**
   * <p>A list of <code>RecordColumn</code> objects. </p>
   */
  RecordColumns: Array<_RecordColumn> | Iterable<_RecordColumn>;
}

export interface _UnmarshalledSourceSchema extends _SourceSchema {
  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormat: _UnmarshalledRecordFormat;

  /**
   * <p>A list of <code>RecordColumn</code> objects. </p>
   */
  RecordColumns: Array<_UnmarshalledRecordColumn>;
}
