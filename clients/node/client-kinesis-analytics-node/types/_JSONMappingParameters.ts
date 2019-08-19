/**
 * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
 */
export interface _JSONMappingParameters {
  /**
   * <p>Path to the top-level parent that contains the records.</p>
   */
  RecordRowPath: string;
}

export type _UnmarshalledJSONMappingParameters = _JSONMappingParameters;
