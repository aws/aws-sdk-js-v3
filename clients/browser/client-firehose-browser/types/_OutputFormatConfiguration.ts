import { _Serializer, _UnmarshalledSerializer } from "./_Serializer";

/**
 * <p>Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data before it writes it to Amazon S3.</p>
 */
export interface _OutputFormatConfiguration {
  /**
   * <p>Specifies which serializer to use. You can choose either the ORC SerDe or the Parquet SerDe. If both are non-null, the server rejects the request.</p>
   */
  Serializer?: _Serializer;
}

export interface _UnmarshalledOutputFormatConfiguration
  extends _OutputFormatConfiguration {
  /**
   * <p>Specifies which serializer to use. You can choose either the ORC SerDe or the Parquet SerDe. If both are non-null, the server rejects the request.</p>
   */
  Serializer?: _UnmarshalledSerializer;
}
