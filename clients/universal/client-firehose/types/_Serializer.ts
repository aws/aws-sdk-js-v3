import { _ParquetSerDe, _UnmarshalledParquetSerDe } from "./_ParquetSerDe";
import { _OrcSerDe, _UnmarshalledOrcSerDe } from "./_OrcSerDe";

/**
 * <p>The serializer that you want Kinesis Data Firehose to use to convert data to the target format before writing it to Amazon S3. Kinesis Data Firehose supports two types of serializers: the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/orc/OrcSerde.html">ORC SerDe</a> and the <a href="https://hive.apache.org/javadocs/r1.2.2/api/org/apache/hadoop/hive/ql/io/parquet/serde/ParquetHiveSerDe.html">Parquet SerDe</a>.</p>
 */
export interface _Serializer {
  /**
   * <p>A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.</p>
   */
  ParquetSerDe?: _ParquetSerDe;

  /**
   * <p>A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.</p>
   */
  OrcSerDe?: _OrcSerDe;
}

export interface _UnmarshalledSerializer extends _Serializer {
  /**
   * <p>A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.</p>
   */
  ParquetSerDe?: _UnmarshalledParquetSerDe;

  /**
   * <p>A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.</p>
   */
  OrcSerDe?: _UnmarshalledOrcSerDe;
}
