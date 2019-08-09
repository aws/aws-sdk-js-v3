/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.</p>
 */
export interface _JSONMappingParameters {
  /**
   * <p>The path to the top-level parent that contains the records.</p>
   */
  RecordRowPath: string;
}

export type _UnmarshalledJSONMappingParameters = _JSONMappingParameters;
