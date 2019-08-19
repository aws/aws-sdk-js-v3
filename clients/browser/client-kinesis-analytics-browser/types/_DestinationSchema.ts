/**
 * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. </p>
 */
export interface _DestinationSchema {
  /**
   * <p>Specifies the format of the records on the output stream.</p>
   */
  RecordFormatType: "JSON" | "CSV" | string;
}

export type _UnmarshalledDestinationSchema = _DestinationSchema;
