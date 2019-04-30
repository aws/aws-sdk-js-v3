import { _CSVInput, _UnmarshalledCSVInput } from "./_CSVInput";
import { _JSONInput, _UnmarshalledJSONInput } from "./_JSONInput";
import { _ParquetInput, _UnmarshalledParquetInput } from "./_ParquetInput";

/**
 * <p>Describes the serialization format of the object.</p>
 */
export interface _InputSerialization {
  /**
   * <p>Describes the serialization of a CSV-encoded object.</p>
   */
  CSV?: _CSVInput;

  /**
   * <p>Specifies object's compression format. Valid values: NONE, GZIP, BZIP2. Default Value: NONE.</p>
   */
  CompressionType?: "NONE" | "GZIP" | "BZIP2" | string;

  /**
   * <p>Specifies JSON as object's input serialization format.</p>
   */
  JSON?: _JSONInput;

  /**
   * <p>Specifies Parquet as object's input serialization format.</p>
   */
  Parquet?: _ParquetInput;
}

export interface _UnmarshalledInputSerialization extends _InputSerialization {
  /**
   * <p>Describes the serialization of a CSV-encoded object.</p>
   */
  CSV?: _UnmarshalledCSVInput;

  /**
   * <p>Specifies JSON as object's input serialization format.</p>
   */
  JSON?: _UnmarshalledJSONInput;

  /**
   * <p>Specifies Parquet as object's input serialization format.</p>
   */
  Parquet?: _UnmarshalledParquetInput;
}
