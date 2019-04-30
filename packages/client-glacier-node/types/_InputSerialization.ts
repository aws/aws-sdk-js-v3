import { _CSVInput, _UnmarshalledCSVInput } from "./_CSVInput";

/**
 * <p>Describes how the archive is serialized.</p>
 */
export interface _InputSerialization {
  /**
   * <p>Describes the serialization of a CSV-encoded object.</p>
   */
  csv?: _CSVInput;
}

export interface _UnmarshalledInputSerialization extends _InputSerialization {
  /**
   * <p>Describes the serialization of a CSV-encoded object.</p>
   */
  csv?: _UnmarshalledCSVInput;
}
