import { _CSVOutput, _UnmarshalledCSVOutput } from "./_CSVOutput";
import { _JSONOutput, _UnmarshalledJSONOutput } from "./_JSONOutput";

/**
 * <p>Describes how results of the Select job are serialized.</p>
 */
export interface _OutputSerialization {
  /**
   * <p>Describes the serialization of CSV-encoded Select results.</p>
   */
  CSV?: _CSVOutput;

  /**
   * <p>Specifies JSON as request's output serialization format.</p>
   */
  JSON?: _JSONOutput;
}

export interface _UnmarshalledOutputSerialization extends _OutputSerialization {
  /**
   * <p>Describes the serialization of CSV-encoded Select results.</p>
   */
  CSV?: _UnmarshalledCSVOutput;

  /**
   * <p>Specifies JSON as request's output serialization format.</p>
   */
  JSON?: _UnmarshalledJSONOutput;
}
