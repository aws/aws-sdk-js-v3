import {
  _OpenXJsonSerDe,
  _UnmarshalledOpenXJsonSerDe
} from "./_OpenXJsonSerDe";
import { _HiveJsonSerDe, _UnmarshalledHiveJsonSerDe } from "./_HiveJsonSerDe";

/**
 * <p>The deserializer you want Kinesis Data Firehose to use for converting the input data from JSON. Kinesis Data Firehose then serializes the data to its final format using the <a>Serializer</a>. Kinesis Data Firehose supports two types of deserializers: the <a href="https://cwiki.apache.org/confluence/display/Hive/LanguageManual+DDL#LanguageManualDDL-JSON">Apache Hive JSON SerDe</a> and the <a href="https://github.com/rcongiu/Hive-JSON-Serde">OpenX JSON SerDe</a>.</p>
 */
export interface _Deserializer {
  /**
   * <p>The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.</p>
   */
  OpenXJsonSerDe?: _OpenXJsonSerDe;

  /**
   * <p>The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.</p>
   */
  HiveJsonSerDe?: _HiveJsonSerDe;
}

export interface _UnmarshalledDeserializer extends _Deserializer {
  /**
   * <p>The OpenX SerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the native Hive / HCatalog JsonSerDe.</p>
   */
  OpenXJsonSerDe?: _UnmarshalledOpenXJsonSerDe;

  /**
   * <p>The native Hive / HCatalog JsonSerDe. Used by Kinesis Data Firehose for deserializing data, which means converting it from the JSON format in preparation for serializing it to the Parquet or ORC format. This is one of two deserializers you can choose, depending on which one offers the functionality you need. The other option is the OpenX SerDe.</p>
   */
  HiveJsonSerDe?: _UnmarshalledHiveJsonSerDe;
}
