import { _Deserializer, _UnmarshalledDeserializer } from "./_Deserializer";

/**
 * <p>Specifies the deserializer you want to use to convert the format of the input data.</p>
 */
export interface _InputFormatConfiguration {
  /**
   * <p>Specifies which deserializer to use. You can choose either the Apache Hive JSON SerDe or the OpenX JSON SerDe. If both are non-null, the server rejects the request.</p>
   */
  Deserializer?: _Deserializer;
}

export interface _UnmarshalledInputFormatConfiguration
  extends _InputFormatConfiguration {
  /**
   * <p>Specifies which deserializer to use. You can choose either the Apache Hive JSON SerDe or the OpenX JSON SerDe. If both are non-null, the server rejects the request.</p>
   */
  Deserializer?: _UnmarshalledDeserializer;
}
