/**
 * <p>Information about a serialization/deserialization program (SerDe) which serves as an extractor and loader.</p>
 */
export interface _SerDeInfo {
  /**
   * <p>Name of the SerDe.</p>
   */
  Name?: string;

  /**
   * <p>Usually the class that implements the SerDe. An example is: <code>org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe</code>.</p>
   */
  SerializationLibrary?: string;

  /**
   * <p>These key-value pairs define initialization parameters for the SerDe.</p>
   */
  Parameters?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledSerDeInfo extends _SerDeInfo {
  /**
   * <p>These key-value pairs define initialization parameters for the SerDe.</p>
   */
  Parameters?: { [key: string]: string };
}
