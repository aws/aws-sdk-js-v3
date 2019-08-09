/**
 * <p>Describes the data format when records are written to the destination in an SQL-based Amazon Kinesis Data Analytics application. </p>
 */
export interface _DestinationSchema {
  /**
   * <p>Specifies the format of the records on the output stream.</p>
   */
  RecordFormatType: "JSON" | "CSV" | string;
}

export type _UnmarshalledDestinationSchema = _DestinationSchema;
