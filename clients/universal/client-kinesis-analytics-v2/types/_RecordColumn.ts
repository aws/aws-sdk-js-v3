/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>
 */
export interface _RecordColumn {
  /**
   * <p>The name of the column that is created in the in-application input stream or reference table.</p>
   */
  Name: string;

  /**
   * <p>A reference to the data element in the streaming input or the reference data source.</p>
   */
  Mapping?: string;

  /**
   * <p>The type of column created in the in-application input stream or reference table.</p>
   */
  SqlType: string;
}

export type _UnmarshalledRecordColumn = _RecordColumn;
