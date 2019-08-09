import {
  _JSONMappingParameters,
  _UnmarshalledJSONMappingParameters
} from "./_JSONMappingParameters";
import {
  _CSVMappingParameters,
  _UnmarshalledCSVMappingParameters
} from "./_CSVMappingParameters";

/**
 * <p>When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.</p>
 */
export interface _MappingParameters {
  /**
   * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
   */
  JSONMappingParameters?: _JSONMappingParameters;

  /**
   * <p>Provides additional mapping information when the record format uses delimiters (for example, CSV).</p>
   */
  CSVMappingParameters?: _CSVMappingParameters;
}

export interface _UnmarshalledMappingParameters extends _MappingParameters {
  /**
   * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
   */
  JSONMappingParameters?: _UnmarshalledJSONMappingParameters;

  /**
   * <p>Provides additional mapping information when the record format uses delimiters (for example, CSV).</p>
   */
  CSVMappingParameters?: _UnmarshalledCSVMappingParameters;
}
