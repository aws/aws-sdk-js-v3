import {
  _SchemaConfiguration,
  _UnmarshalledSchemaConfiguration
} from "./_SchemaConfiguration";
import {
  _InputFormatConfiguration,
  _UnmarshalledInputFormatConfiguration
} from "./_InputFormatConfiguration";
import {
  _OutputFormatConfiguration,
  _UnmarshalledOutputFormatConfiguration
} from "./_OutputFormatConfiguration";

/**
 * <p>Specifies that you want Kinesis Data Firehose to convert data from the JSON format to the Parquet or ORC format before writing it to Amazon S3. Kinesis Data Firehose uses the serializer and deserializer that you specify, in addition to the column information from the AWS Glue table, to deserialize your input data from JSON and then serialize it to the Parquet or ORC format. For more information, see <a href="https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html">Kinesis Data Firehose Record Format Conversion</a>.</p>
 */
export interface _DataFormatConversionConfiguration {
  /**
   * <p>Specifies the AWS Glue Data Catalog table that contains the column information.</p>
   */
  SchemaConfiguration?: _SchemaConfiguration;

  /**
   * <p>Specifies the deserializer that you want Kinesis Data Firehose to use to convert the format of your data from JSON.</p>
   */
  InputFormatConfiguration?: _InputFormatConfiguration;

  /**
   * <p>Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data to the Parquet or ORC format.</p>
   */
  OutputFormatConfiguration?: _OutputFormatConfiguration;

  /**
   * <p>Defaults to <code>true</code>. Set it to <code>false</code> if you want to disable format conversion while preserving the configuration details.</p>
   */
  Enabled?: boolean;
}

export interface _UnmarshalledDataFormatConversionConfiguration
  extends _DataFormatConversionConfiguration {
  /**
   * <p>Specifies the AWS Glue Data Catalog table that contains the column information.</p>
   */
  SchemaConfiguration?: _UnmarshalledSchemaConfiguration;

  /**
   * <p>Specifies the deserializer that you want Kinesis Data Firehose to use to convert the format of your data from JSON.</p>
   */
  InputFormatConfiguration?: _UnmarshalledInputFormatConfiguration;

  /**
   * <p>Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data to the Parquet or ORC format.</p>
   */
  OutputFormatConfiguration?: _UnmarshalledOutputFormatConfiguration;
}
