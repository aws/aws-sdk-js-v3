import {
  _MappingParameters,
  _UnmarshalledMappingParameters
} from "./_MappingParameters";

/**
 * <p> For an SQL-based Amazon Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream. </p>
 */
export interface _RecordFormat {
  /**
   * <p>The type of record format.</p>
   */
  RecordFormatType: "JSON" | "CSV" | string;

  /**
   * <p>When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.</p>
   */
  MappingParameters?: _MappingParameters;
}

export interface _UnmarshalledRecordFormat extends _RecordFormat {
  /**
   * <p>When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.</p>
   */
  MappingParameters?: _UnmarshalledMappingParameters;
}
