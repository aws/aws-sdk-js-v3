/**
 * <p>Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>
 */
export interface _RecordColumn {
  /**
   * <p>Name of the column created in the in-application input stream or reference table.</p>
   */
  Name: string;

  /**
   * <p>Reference to the data element in the streaming input or the reference data source. This element is required if the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_RecordFormat.html#analytics-Type-RecordFormat-RecordFormatTypel">RecordFormatType</a> is <code>JSON</code>.</p>
   */
  Mapping?: string;

  /**
   * <p>Type of column created in the in-application input stream or reference table.</p>
   */
  SqlType: string;
}

export type _UnmarshalledRecordColumn = _RecordColumn;
