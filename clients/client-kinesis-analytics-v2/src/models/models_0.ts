// smithy-typescript generated code
import type {
  ApplicationMode,
  ApplicationRestoreType,
  ApplicationStatus,
  ArtifactType,
  CodeContentType,
  ConfigurationType,
  InputStartingPosition,
  KeyType,
  LogLevel,
  MetricsLevel,
  OperationStatus,
  RecordFormatType,
  RuntimeEnvironment,
  SnapshotStatus,
  UrlType,
} from "./enums";

/**
 * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).
 *
 * @public
 */
export interface CloudWatchLoggingOption {
  /**
   * The ARN of the CloudWatch log to receive application messages.
   *
   * @public
   */
  LogStreamARN: string | undefined;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * The Kinesis Data Analytics application name.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The version ID of the SQL-based Kinesis Data Analytics application. You must provide the `CurrentApplicationVersionId` or the `ConditionalToken`.You can retrieve the application version ID using DescribeApplication. For better concurrency support, use the `ConditionalToken` parameter instead of `CurrentApplicationVersionId`.
   *
   * @public
   */
  CurrentApplicationVersionId?: number | undefined;

  /**
   * Provides the Amazon CloudWatch log stream Amazon Resource Name (ARN).
   *
   * @public
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption | undefined;

  /**
   * A value you use to implement strong concurrency for application updates. You must provide the `CurrentApplicationVersionId` or the `ConditionalToken`. You get the application's current `ConditionalToken` using DescribeApplication. For better concurrency support, use the `ConditionalToken` parameter instead of `CurrentApplicationVersionId`.
   *
   * @public
   */
  ConditionalToken?: string | undefined;
}

/**
 * Describes the Amazon CloudWatch logging option.
 *
 * @public
 */
export interface CloudWatchLoggingOptionDescription {
  /**
   * The ID of the CloudWatch logging option description.
   *
   * @public
   */
  CloudWatchLoggingOptionId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch log to receive application messages.
   *
   * @public
   */
  LogStreamARN: string | undefined;

  /**
   * The IAM ARN of the role to use to send application messages.
   *
   * > **Note:** Provided for backward compatibility. Applications created with the current API version have an application-level service execution role rather than a resource-level role.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionResponse {
  /**
   * The application's ARN.
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * The new version ID of the SQL-based Kinesis Data Analytics application. Kinesis Data Analytics updates the `ApplicationVersionId` each time you change the CloudWatch logging options.
   *
   * @public
   */
  ApplicationVersionId?: number | undefined;

  /**
   * The descriptions of the current CloudWatch logging options for the SQL-based Kinesis Data Analytics application.
   *
   * @public
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[] | undefined;

  /**
   * The operation ID that can be used to track the request.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.
 *
 * @public
 */
export interface InputParallelism {
  /**
   * The number of in-application streams to create.
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application.
 *
 * @public
 */
export interface InputLambdaProcessor {
  /**
   * The ARN of the Amazon Lambda function that operates on records in the stream.
   *
   * > **Note:** To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: Amazon Lambda](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is [Amazon Lambda](https://docs.aws.amazon.com/lambda/).
 *
 * @public
 */
export interface InputProcessingConfiguration {
  /**
   * The InputLambdaProcessor that is used to preprocess the records in the stream before being processed by your application code.
   *
   * @public
   */
  InputLambdaProcessor: InputLambdaProcessor | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
 *
 * Also used to describe the format of the reference data source.
 *
 * @public
 */
export interface RecordColumn {
  /**
   * The name of the column that is created in the in-application input stream or reference table.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A reference to the data element in the streaming input or the reference data source.
   *
   * @public
   */
  Mapping?: string | undefined;

  /**
   * The type of column created in the in-application input stream or reference table.
   *
   * @public
   */
  SqlType: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the *'\n'* as the row delimiter and a comma (",") as the column delimiter:
 *
 * `"name1", "address1"`
 *
 * `"name2", "address2"`
 *
 * @public
 */
export interface CSVMappingParameters {
  /**
   * The row delimiter. For example, in a CSV format, *'\n'* is the typical row delimiter.
   *
   * @public
   */
  RecordRowDelimiter: string | undefined;

  /**
   * The column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
   *
   * @public
   */
  RecordColumnDelimiter: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.
 *
 * @public
 */
export interface JSONMappingParameters {
  /**
   * The path to the top-level parent that contains the records.
   *
   * @public
   */
  RecordRowPath: string | undefined;
}

/**
 * When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
 *
 * @public
 */
export interface MappingParameters {
  /**
   * Provides additional mapping information when JSON is the record format on the streaming source.
   *
   * @public
   */
  JSONMappingParameters?: JSONMappingParameters | undefined;

  /**
   * Provides additional mapping information when the record format uses delimiters (for example, CSV).
   *
   * @public
   */
  CSVMappingParameters?: CSVMappingParameters | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
 *
 * @public
 */
export interface RecordFormat {
  /**
   * The type of record format.
   *
   * @public
   */
  RecordFormatType: RecordFormatType | undefined;

  /**
   * When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
   *
   * @public
   */
  MappingParameters?: MappingParameters | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
 *
 * @public
 */
export interface SourceSchema {
  /**
   * Specifies the format of the records on the streaming source.
   *
   * @public
   */
  RecordFormat: RecordFormat | undefined;

  /**
   * Specifies the encoding of the records in the streaming source. For example, UTF-8.
   *
   * @public
   */
  RecordEncoding?: string | undefined;

  /**
   * A list of `RecordColumn` objects.
   *
   * @public
   */
  RecordColumns: RecordColumn[] | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).
 *
 * @public
 */
export interface KinesisFirehoseInput {
  /**
   * The Amazon Resource Name (ARN) of the delivery stream.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
 *
 * @public
 */
export interface KinesisStreamsInput {
  /**
   * The ARN of the input Kinesis data stream to read.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.
 *
 * @public
 */
export interface Input {
  /**
   * The name prefix to use when creating an in-application stream. Suppose that you specify a prefix "`MyInApplicationStream`." Kinesis Data Analytics then creates one or more (as per the `InputParallelism` count you specified) in-application streams with the names "`MyInApplicationStream_001`," "`MyInApplicationStream_002`," and so on.
   *
   * @public
   */
  NamePrefix: string | undefined;

  /**
   * The InputProcessingConfiguration for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is InputLambdaProcessor.
   *
   * @public
   */
  InputProcessingConfiguration?: InputProcessingConfiguration | undefined;

  /**
   * If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN).
   *
   * @public
   */
  KinesisStreamsInput?: KinesisStreamsInput | undefined;

  /**
   * If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.
   *
   * @public
   */
  KinesisFirehoseInput?: KinesisFirehoseInput | undefined;

  /**
   * Describes the number of in-application streams to create.
   *
   * @public
   */
  InputParallelism?: InputParallelism | undefined;

  /**
   * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
   *
   * Also used to describe the format of the reference data source.
   *
   * @public
   */
  InputSchema: SourceSchema | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputRequest {
  /**
   * The name of your existing application to which you want to add the streaming source.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The current version of your application. You must provide the `ApplicationVersionID` or the `ConditionalToken`.You can use the DescribeApplication operation to find the current application version.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The Input to add.
   *
   * @public
   */
  Input: Input | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream.
 *
 * @public
 */
export interface InputLambdaProcessorDescription {
  /**
   * The ARN of the Amazon Lambda function that is used to preprocess the records in the stream.
   *
   * > **Note:** To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: Amazon Lambda](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The ARN of the IAM role that is used to access the Amazon Lambda function.
   *
   * > **Note:** Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides the configuration information about an input processor. Currently, the only input processor available is [Amazon Lambda](https://docs.aws.amazon.com/lambda/).
 *
 * @public
 */
export interface InputProcessingConfigurationDescription {
  /**
   * Provides configuration information about the associated InputLambdaProcessorDescription
   *
   * @public
   */
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription | undefined;
}

/**
 * Describes the point at which the application reads from the streaming source.
 *
 * @public
 */
export interface InputStartingPositionConfiguration {
  /**
   * The starting position on the stream.
   *
   * - `NOW` - Start reading just after the most recent record in the stream, and start at the request timestamp that the customer issued.
   * - `TRIM_HORIZON` - Start reading at the last untrimmed record in the stream, which is the oldest record available in the stream. This option is not available for an Amazon Kinesis Data Firehose delivery stream.
   * - `LAST_STOPPED_POINT` - Resume reading from where the application last stopped reading.
   *
   * @public
   */
  InputStartingPosition?: InputStartingPosition | undefined;
}

/**
 * Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source in the application input configuration.
 *
 * @public
 */
export interface KinesisFirehoseInputDescription {
  /**
   * The Amazon Resource Name (ARN) of the delivery stream.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The ARN of the IAM role that Kinesis Data Analytics assumes to access the stream.
   *
   * > **Note:** Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the Kinesis data stream that is configured as the streaming source in the application input configuration.
 *
 * @public
 */
export interface KinesisStreamsInputDescription {
  /**
   * The Amazon Resource Name (ARN) of the Kinesis data stream.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The ARN of the IAM role that Kinesis Data Analytics can assume to access the stream.
   *
   * > **Note:** Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * Describes the application input configuration for a SQL-based Kinesis Data Analytics application.
 *
 * @public
 */
export interface InputDescription {
  /**
   * The input ID that is associated with the application input. This is the ID that Kinesis Data Analytics assigns to each input configuration that you add to your application.
   *
   * @public
   */
  InputId?: string | undefined;

  /**
   * The in-application name prefix.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * Returns the in-application stream names that are mapped to the stream source.
   *
   * @public
   */
  InAppStreamNames?: string[] | undefined;

  /**
   * The description of the preprocessor that executes on records in this input before the application's code is run.
   *
   * @public
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription | undefined;

  /**
   * If a Kinesis data stream is configured as a streaming source, provides the Kinesis data stream's Amazon Resource Name (ARN).
   *
   * @public
   */
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription | undefined;

  /**
   * If a Kinesis Data Firehose delivery stream is configured as a streaming source, provides the delivery stream's ARN.
   *
   * @public
   */
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription | undefined;

  /**
   * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
   *
   * @public
   */
  InputSchema?: SourceSchema | undefined;

  /**
   * Describes the configured parallelism (number of in-application streams mapped to the streaming source).
   *
   * @public
   */
  InputParallelism?: InputParallelism | undefined;

  /**
   * The point at which the application is configured to read from the input stream.
   *
   * @public
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputResponse {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * Provides the current application version.
   *
   * @public
   */
  ApplicationVersionId?: number | undefined;

  /**
   * Describes the application input configuration.
   *
   * @public
   */
  InputDescriptions?: InputDescription[] | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputProcessingConfigurationRequest {
  /**
   * The name of the application to which you want to add the input processing configuration.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The version of the application to which you want to add the input processing configuration. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The ID of the input configuration to add the input processing configuration to. You can get a list of the input IDs for an application using the DescribeApplication operation.
   *
   * @public
   */
  InputId: string | undefined;

  /**
   * The InputProcessingConfiguration to add to the application.
   *
   * @public
   */
  InputProcessingConfiguration: InputProcessingConfiguration | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputProcessingConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * Provides the current application version.
   *
   * @public
   */
  ApplicationVersionId?: number | undefined;

  /**
   * The input ID that is associated with the application input. This is the ID that Kinesis Data Analytics assigns to each input configuration that you add to your application.
   *
   * @public
   */
  InputId?: string | undefined;

  /**
   * The description of the preprocessor that executes on records in this input before the application's code is run.
   *
   * @public
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription | undefined;
}

/**
 * Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application.
 *
 * @public
 */
export interface DestinationSchema {
  /**
   * Specifies the format of the records on the output stream.
   *
   * @public
   */
  RecordFormatType: RecordFormatType | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) of the delivery stream.
 *
 * @public
 */
export interface KinesisFirehoseOutput {
  /**
   * The ARN of the destination delivery stream to write to.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN).
 *
 * @public
 */
export interface KinesisStreamsOutput {
  /**
   * The ARN of the destination Kinesis data stream to write to.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * When you configure a SQL-based Kinesis Data Analytics application's output, identifies an Amazon Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function.
 *
 * @public
 */
export interface LambdaOutput {
  /**
   * The Amazon Resource Name (ARN) of the destination Lambda function to write to.
   *
   * > **Note:** To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: Amazon Lambda](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.
 *
 * @public
 */
export interface Output {
  /**
   * The name of the in-application stream.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Identifies a Kinesis data stream as the destination.
   *
   * @public
   */
  KinesisStreamsOutput?: KinesisStreamsOutput | undefined;

  /**
   * Identifies a Kinesis Data Firehose delivery stream as the destination.
   *
   * @public
   */
  KinesisFirehoseOutput?: KinesisFirehoseOutput | undefined;

  /**
   * Identifies an Amazon Lambda function as the destination.
   *
   * @public
   */
  LambdaOutput?: LambdaOutput | undefined;

  /**
   * Describes the data format when records are written to the destination.
   *
   * @public
   */
  DestinationSchema: DestinationSchema | undefined;
}

/**
 * @public
 */
export interface AddApplicationOutputRequest {
  /**
   * The name of the application to which you want to add the output configuration.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The version of the application to which you want to add the output configuration. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * An array of objects, each describing one output configuration. In the output configuration, you specify the name of an in-application stream, a destination (that is, a Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), and record the formation to use when writing to the destination.
   *
   * @public
   */
  Output: Output | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis Data Firehose delivery stream that is configured as its destination.
 *
 * @public
 */
export interface KinesisFirehoseOutputDescription {
  /**
   * The Amazon Resource Name (ARN) of the delivery stream.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The ARN of the IAM role that Kinesis Data Analytics can assume to access the stream.
   *
   * > **Note:** Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis data stream that is configured as its destination.
 *
 * @public
 */
export interface KinesisStreamsOutputDescription {
  /**
   * The Amazon Resource Name (ARN) of the Kinesis data stream.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The ARN of the IAM role that Kinesis Data Analytics can assume to access the stream.
   *
   * > **Note:** Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application's output, describes the Amazon Lambda function that is configured as its destination.
 *
 * @public
 */
export interface LambdaOutputDescription {
  /**
   * The Amazon Resource Name (ARN) of the destination Lambda function.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The ARN of the IAM role that Kinesis Data Analytics can assume to write to the destination function.
   *
   * > **Note:** Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.
 *
 * @public
 */
export interface OutputDescription {
  /**
   * A unique identifier for the output configuration.
   *
   * @public
   */
  OutputId?: string | undefined;

  /**
   * The name of the in-application stream that is configured as output.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Describes the Kinesis data stream that is configured as the destination where output is written.
   *
   * @public
   */
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription | undefined;

  /**
   * Describes the Kinesis Data Firehose delivery stream that is configured as the destination where output is written.
   *
   * @public
   */
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription | undefined;

  /**
   * Describes the Lambda function that is configured as the destination where output is written.
   *
   * @public
   */
  LambdaOutputDescription?: LambdaOutputDescription | undefined;

  /**
   * The data format used for writing data to the destination.
   *
   * @public
   */
  DestinationSchema?: DestinationSchema | undefined;
}

/**
 * @public
 */
export interface AddApplicationOutputResponse {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * The updated application version ID. Kinesis Data Analytics increments this ID when the application is updated.
   *
   * @public
   */
  ApplicationVersionId?: number | undefined;

  /**
   * Describes the application output configuration. For more information, see [Configuring Application Output](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html).
   *
   * @public
   */
  OutputDescriptions?: OutputDescription[] | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.
 *
 * A SQL-based Kinesis Data Analytics application loads reference data only once. If the data changes, you call the UpdateApplication operation to trigger reloading of data into your application.
 *
 * @public
 */
export interface S3ReferenceDataSource {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket.
   *
   * @public
   */
  BucketARN?: string | undefined;

  /**
   * The object key name containing the reference data.
   *
   * @public
   */
  FileKey?: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
 *
 * @public
 */
export interface ReferenceDataSource {
  /**
   * The name of the in-application table to create.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Identifies the S3 bucket and object that contains the reference data. A SQL-based Kinesis Data Analytics application loads reference data only once. If the data changes, you call the UpdateApplication operation to trigger reloading of data into your application.
   *
   * @public
   */
  S3ReferenceDataSource?: S3ReferenceDataSource | undefined;

  /**
   * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
   *
   * @public
   */
  ReferenceSchema: SourceSchema | undefined;
}

/**
 * @public
 */
export interface AddApplicationReferenceDataSourceRequest {
  /**
   * The name of an existing application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The version of the application for which you are adding the reference data source. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The reference data source can be an object in your Amazon S3 bucket. Kinesis Data Analytics reads the object and copies the data into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is created.
   *
   * @public
   */
  ReferenceDataSource: ReferenceDataSource | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides the bucket name and object key name that stores the reference data.
 *
 * @public
 */
export interface S3ReferenceDataSourceDescription {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket.
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * Amazon S3 object key name.
   *
   * @public
   */
  FileKey: string | undefined;

  /**
   * The ARN of the IAM role that Kinesis Data Analytics can assume to read the Amazon S3 object on your behalf to populate the in-application reference table.
   *
   * > **Note:** Provided for backward compatibility. Applications that are created with the current API version have an application-level service execution role rather than a resource-level role.
   *
   * @public
   */
  ReferenceRoleARN?: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the reference data source configured for an application.
 *
 * @public
 */
export interface ReferenceDataSourceDescription {
  /**
   * The ID of the reference data source. This is the ID that Kinesis Data Analytics assigns when you add the reference data source to your application using the CreateApplication or UpdateApplication operation.
   *
   * @public
   */
  ReferenceId: string | undefined;

  /**
   * The in-application table name created by the specific reference data source configuration.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Provides the Amazon S3 bucket name, the object key name that contains the reference data.
   *
   * @public
   */
  S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription | undefined;

  /**
   * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
   *
   * @public
   */
  ReferenceSchema?: SourceSchema | undefined;
}

/**
 * @public
 */
export interface AddApplicationReferenceDataSourceResponse {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * The updated application version ID. Kinesis Data Analytics increments this ID when the application is updated.
   *
   * @public
   */
  ApplicationVersionId?: number | undefined;

  /**
   * Describes reference data sources configured for the application.
   *
   * @public
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[] | undefined;
}

/**
 * Describes the parameters of a VPC used by the application.
 *
 * @public
 */
export interface VpcConfiguration {
  /**
   * The array of [Subnet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html) IDs used by the VPC configuration.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The array of [SecurityGroup](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html) IDs used by the VPC configuration.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddApplicationVpcConfigurationRequest {
  /**
   * The name of an existing application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The version of the application to which you want to add the VPC configuration. You must provide the `CurrentApplicationVersionId` or the `ConditionalToken`. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned. For better concurrency support, use the `ConditionalToken` parameter instead of `CurrentApplicationVersionId`.
   *
   * @public
   */
  CurrentApplicationVersionId?: number | undefined;

  /**
   * Description of the VPC to add to the application.
   *
   * @public
   */
  VpcConfiguration: VpcConfiguration | undefined;

  /**
   * A value you use to implement strong concurrency for application updates. You must provide the `ApplicationVersionID` or the `ConditionalToken`. You get the application's current `ConditionalToken` using DescribeApplication. For better concurrency support, use the `ConditionalToken` parameter instead of `CurrentApplicationVersionId`.
   *
   * @public
   */
  ConditionalToken?: string | undefined;
}

/**
 * Describes the parameters of a VPC used by the application.
 *
 * @public
 */
export interface VpcConfigurationDescription {
  /**
   * The ID of the VPC configuration.
   *
   * @public
   */
  VpcConfigurationId: string | undefined;

  /**
   * The ID of the associated VPC.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The array of [Subnet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html) IDs used by the VPC configuration.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The array of [SecurityGroup](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html) IDs used by the VPC configuration.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddApplicationVpcConfigurationResponse {
  /**
   * The ARN of the application.
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * Provides the current application version. Managed Service for Apache Flink updates the ApplicationVersionId each time you update the application.
   *
   * @public
   */
  ApplicationVersionId?: number | undefined;

  /**
   * The parameters of the new VPC configuration.
   *
   * @public
   */
  VpcConfigurationDescription?: VpcConfigurationDescription | undefined;

  /**
   * The operation ID that can be used to track the request.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * For a Managed Service for Apache Flink application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
 *
 * @public
 */
export interface S3ContentLocation {
  /**
   * The Amazon Resource Name (ARN) for the S3 bucket containing the application code.
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * The file key for the object containing the application code.
   *
   * @public
   */
  FileKey: string | undefined;

  /**
   * The version of the object containing the application code.
   *
   * @public
   */
  ObjectVersion?: string | undefined;
}

/**
 * Specifies either the application code, or the location of the application code, for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface CodeContent {
  /**
   * The text-format code for a Managed Service for Apache Flink application.
   *
   * @public
   */
  TextContent?: string | undefined;

  /**
   * The zip-format code for a Managed Service for Apache Flink application.
   *
   * @public
   */
  ZipFileContent?: Uint8Array | undefined;

  /**
   * Information about the Amazon S3 bucket that contains the application code.
   *
   * @public
   */
  S3ContentLocation?: S3ContentLocation | undefined;
}

/**
 * Describes code configuration for an application.
 *
 * @public
 */
export interface ApplicationCodeConfiguration {
  /**
   * The location and type of the application code.
   *
   * @public
   */
  CodeContent?: CodeContent | undefined;

  /**
   * Specifies whether the code content is in text or zip format.
   *
   * @public
   */
  CodeContentType: CodeContentType | undefined;
}

/**
 * Describes the location of an application's code stored in an S3 bucket.
 *
 * @public
 */
export interface S3ApplicationCodeLocationDescription {
  /**
   * The Amazon Resource Name (ARN) for the S3 bucket containing the application code.
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * The file key for the object containing the application code.
   *
   * @public
   */
  FileKey: string | undefined;

  /**
   * The version of the object containing the application code.
   *
   * @public
   */
  ObjectVersion?: string | undefined;
}

/**
 * Describes details about the code of a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface CodeContentDescription {
  /**
   * The text-format code
   *
   * @public
   */
  TextContent?: string | undefined;

  /**
   * The checksum that can be used to validate zip-format code.
   *
   * @public
   */
  CodeMD5?: string | undefined;

  /**
   * The size in bytes of the application code. Can be used to validate zip-format code.
   *
   * @public
   */
  CodeSize?: number | undefined;

  /**
   * The S3 bucket Amazon Resource Name (ARN), file key, and object version of the application code stored in Amazon S3.
   *
   * @public
   */
  S3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription | undefined;
}

/**
 * Describes code configuration for an application.
 *
 * @public
 */
export interface ApplicationCodeConfigurationDescription {
  /**
   * Specifies whether the code content is in text or zip format.
   *
   * @public
   */
  CodeContentType: CodeContentType | undefined;

  /**
   * Describes details about the location and format of the application code.
   *
   * @public
   */
  CodeContentDescription?: CodeContentDescription | undefined;
}

/**
 * Describes an update for the Amazon S3 code content location for an application.
 *
 * @public
 */
export interface S3ContentLocationUpdate {
  /**
   * The new Amazon Resource Name (ARN) for the S3 bucket containing the application code.
   *
   * @public
   */
  BucketARNUpdate?: string | undefined;

  /**
   * The new file key for the object containing the application code.
   *
   * @public
   */
  FileKeyUpdate?: string | undefined;

  /**
   * The new version of the object containing the application code.
   *
   * @public
   */
  ObjectVersionUpdate?: string | undefined;
}

/**
 * Describes an update to the code of an application. Not supported for Apache Zeppelin.
 *
 * @public
 */
export interface CodeContentUpdate {
  /**
   * Describes an update to the text code for an application.
   *
   * @public
   */
  TextContentUpdate?: string | undefined;

  /**
   * Describes an update to the zipped code for an application.
   *
   * @public
   */
  ZipFileContentUpdate?: Uint8Array | undefined;

  /**
   * Describes an update to the location of code for an application.
   *
   * @public
   */
  S3ContentLocationUpdate?: S3ContentLocationUpdate | undefined;
}

/**
 * Describes code configuration updates for an application. This is supported for a Managed Service for Apache Flink application or a SQL-based Kinesis Data Analytics application.
 *
 * @public
 */
export interface ApplicationCodeConfigurationUpdate {
  /**
   * Describes updates to the code content type.
   *
   * @public
   */
  CodeContentTypeUpdate?: CodeContentType | undefined;

  /**
   * Describes updates to the code content of an application.
   *
   * @public
   */
  CodeContentUpdate?: CodeContentUpdate | undefined;
}

/**
 * Specifies the configuration to manage encryption at rest.
 *
 * @public
 */
export interface ApplicationEncryptionConfiguration {
  /**
   * The key ARN, key ID, alias ARN, or alias name of the KMS key used for encryption at rest.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Specifies the type of key used for encryption at rest.
   *
   * @public
   */
  KeyType: KeyType | undefined;
}

/**
 * Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface ApplicationSnapshotConfiguration {
  /**
   * Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
   *
   * @public
   */
  SnapshotsEnabled: boolean | undefined;
}

/**
 * Describes the system rollback configuration for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface ApplicationSystemRollbackConfiguration {
  /**
   * Describes whether system rollbacks are enabled for a Managed Service for Apache Flink application.
   *
   * @public
   */
  RollbackEnabled: boolean | undefined;
}

/**
 * Property key-value pairs passed into an application.
 *
 * @public
 */
export interface PropertyGroup {
  /**
   * Describes the key of an application execution property key-value pair.
   *
   * @public
   */
  PropertyGroupId: string | undefined;

  /**
   * Describes the value of an application execution property key-value pair.
   *
   * @public
   */
  PropertyMap: Record<string, string> | undefined;
}

/**
 * Describes execution properties for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface EnvironmentProperties {
  /**
   * Describes the execution property groups.
   *
   * @public
   */
  PropertyGroups: PropertyGroup[] | undefined;
}

/**
 * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see [Checkpoints for Fault Tolerance](https://nightlies.apache.org/flink/flink-docs-release-2.3/docs/dev/datastream/fault-tolerance/checkpointing/#enabling-and-configuring-checkpointing) in the [Apache Flink Documentation](https://nightlies.apache.org/flink/flink-docs-release-2.3/).
 *
 * @public
 */
export interface CheckpointConfiguration {
  /**
   * Describes whether the application uses Managed Service for Apache Flink' default checkpointing behavior. You must set this property to `CUSTOM` in order to set the `CheckpointingEnabled`, `CheckpointInterval`, or `MinPauseBetweenCheckpoints` parameters.
   *
   * > **Note:**
   * >
   * > If this value is set to `DEFAULT`, the application will use the following values, even if they are set to other values using APIs or application code:
   * >
   * > - **CheckpointingEnabled:** true
   * > - **CheckpointInterval:** 60000
   * > - **MinPauseBetweenCheckpoints:** 5000
   *
   * @public
   */
  ConfigurationType: ConfigurationType | undefined;

  /**
   * Describes whether checkpointing is enabled for a Managed Service for Apache Flink application.
   *
   * > **Note:** If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `CheckpointingEnabled` value of `true`, even if this value is set to another value using this API or in application code.
   *
   * @public
   */
  CheckpointingEnabled?: boolean | undefined;

  /**
   * Describes the interval in milliseconds between checkpoint operations.
   *
   * > **Note:** If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `CheckpointInterval` value of 60000, even if this value is set to another value using this API or in application code.
   *
   * @public
   */
  CheckpointInterval?: number | undefined;

  /**
   * Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. If a checkpoint operation takes longer than the `CheckpointInterval`, the application otherwise performs continual checkpoint operations. For more information, see [Tuning Checkpointing](https://nightlies.apache.org/flink/flink-docs-release-2.3/docs/ops/state/large_state_tuning/#tuning-checkpointing) in the [Apache Flink Documentation](https://nightlies.apache.org/flink/flink-docs-release-2.3/).
   *
   * > **Note:** If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `MinPauseBetweenCheckpoints` value of 5000, even if this value is set using this API or in application code.
   *
   * @public
   */
  MinPauseBetweenCheckpoints?: number | undefined;
}

/**
 * Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see [Monitoring](https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html).
 *
 * @public
 */
export interface MonitoringConfiguration {
  /**
   * Describes whether to use the default CloudWatch logging configuration for an application. You must set this property to `CUSTOM` in order to set the `LogLevel` or `MetricsLevel` parameters.
   *
   * @public
   */
  ConfigurationType: ConfigurationType | undefined;

  /**
   * Describes the granularity of the CloudWatch Logs for an application. The `Parallelism` level is not recommended for applications with a Parallelism over 64 due to excessive costs.
   *
   * @public
   */
  MetricsLevel?: MetricsLevel | undefined;

  /**
   * Describes the verbosity of the CloudWatch Logs for an application.
   *
   * @public
   */
  LogLevel?: LogLevel | undefined;
}

/**
 * Describes parameters for how a Managed Service for Apache Flink application executes multiple tasks simultaneously. For more information about parallelism, see [Parallel Execution](https://nightlies.apache.org/flink/flink-docs-release-2.3/dev/parallel.html) in the [Apache Flink Documentation](https://nightlies.apache.org/flink/flink-docs-release-2.3/).
 *
 * @public
 */
export interface ParallelismConfiguration {
  /**
   * Describes whether the application uses the default parallelism for the Managed Service for Apache Flink service. You must set this property to `CUSTOM` in order to change your application's `AutoScalingEnabled`, `Parallelism`, or `ParallelismPerKPU` properties.
   *
   * @public
   */
  ConfigurationType: ConfigurationType | undefined;

  /**
   * Describes the initial number of parallel tasks that a Managed Service for Apache Flink application can perform. If `AutoScalingEnabled` is set to True, Managed Service for Apache Flink increases the `CurrentParallelism` value in response to application load. The service can increase the `CurrentParallelism` value up to the maximum parallelism, which is `ParalellismPerKPU` times the maximum KPUs for the application. The maximum KPUs for an application is 64 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can reduce the `CurrentParallelism` value down to the `Parallelism` setting.
   *
   * @public
   */
  Parallelism?: number | undefined;

  /**
   * Describes the number of parallel tasks that a Managed Service for Apache Flink application can perform per Kinesis Processing Unit (KPU) used by the application. For more information about KPUs, see [Amazon Managed Service for Apache Flink Pricing](http://aws.amazon.com/kinesis/data-analytics/pricing/).
   *
   * @public
   */
  ParallelismPerKPU?: number | undefined;

  /**
   * Describes whether the Managed Service for Apache Flink service can increase the parallelism of the application in response to increased throughput.
   *
   * @public
   */
  AutoScalingEnabled?: boolean | undefined;
}

/**
 * Describes configuration parameters for a Managed Service for Apache Flink application or a Studio notebook.
 *
 * @public
 */
export interface FlinkApplicationConfiguration {
  /**
   * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see [Checkpoints for Fault Tolerance](https://nightlies.apache.org/flink/flink-docs-release-2.3/docs/dev/datastream/fault-tolerance/checkpointing/#enabling-and-configuring-checkpointing) in the [Apache Flink Documentation](https://nightlies.apache.org/flink/flink-docs-release-2.3/).
   *
   * @public
   */
  CheckpointConfiguration?: CheckpointConfiguration | undefined;

  /**
   * Describes configuration parameters for Amazon CloudWatch logging for an application.
   *
   * @public
   */
  MonitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * Describes parameters for how an application executes multiple tasks simultaneously.
   *
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration | undefined;
}

/**
 * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
 *
 * @public
 */
export interface SqlApplicationConfiguration {
  /**
   * The array of Input objects describing the input streams used by the application.
   *
   * @public
   */
  Inputs?: Input[] | undefined;

  /**
   * The array of Output objects describing the destination streams used by the application.
   *
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * The array of ReferenceDataSource objects describing the reference data sources used by the application.
   *
   * @public
   */
  ReferenceDataSources?: ReferenceDataSource[] | undefined;
}

/**
 * The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
 *
 * @public
 */
export interface GlueDataCatalogConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the database.
   *
   * @public
   */
  DatabaseARN: string | undefined;
}

/**
 * The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Managed Service for Apache Flink Studio notebook.
 *
 * @public
 */
export interface CatalogConfiguration {
  /**
   * The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  GlueDataCatalogConfiguration: GlueDataCatalogConfiguration | undefined;
}

/**
 * The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.
 *
 * @public
 */
export interface MavenReference {
  /**
   * The group ID of the Maven reference.
   *
   * @public
   */
  GroupId: string | undefined;

  /**
   * The artifact ID of the Maven reference.
   *
   * @public
   */
  ArtifactId: string | undefined;

  /**
   * The version of the Maven reference.
   *
   * @public
   */
  Version: string | undefined;
}

/**
 * Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).
 *
 * @public
 */
export interface CustomArtifactConfiguration {
  /**
   * `UDF` stands for user-defined functions. This type of artifact must be in an S3 bucket. A `DEPENDENCY_JAR` can be in either Maven or an S3 bucket.
   *
   * @public
   */
  ArtifactType: ArtifactType | undefined;

  /**
   * For a Managed Service for Apache Flink application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
   *
   * @public
   */
  S3ContentLocation?: S3ContentLocation | undefined;

  /**
   * The parameters required to fully specify a Maven reference.
   *
   * @public
   */
  MavenReference?: MavenReference | undefined;
}

/**
 * The S3 bucket that holds the application information.
 *
 * @public
 */
export interface S3ContentBaseLocation {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket.
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * The base path for the S3 bucket.
   *
   * @public
   */
  BasePath?: string | undefined;
}

/**
 * The information required to deploy a Managed Service for Apache Flink Studio notebook as an application with durable state.
 *
 * @public
 */
export interface DeployAsApplicationConfiguration {
  /**
   * The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
   *
   * @public
   */
  S3ContentLocation: S3ContentBaseLocation | undefined;
}

/**
 * Describes configuration parameters for Amazon CloudWatch logging for a Managed Service for Apache Flink Studio notebook. For more information about CloudWatch logging, see [Monitoring](https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html).
 *
 * @public
 */
export interface ZeppelinMonitoringConfiguration {
  /**
   * The verbosity of the CloudWatch Logs for an application.
   *
   * @public
   */
  LogLevel: LogLevel | undefined;
}

/**
 * The configuration of a Managed Service for Apache Flink Studio notebook.
 *
 * @public
 */
export interface ZeppelinApplicationConfiguration {
  /**
   * The monitoring configuration of a Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  MonitoringConfiguration?: ZeppelinMonitoringConfiguration | undefined;

  /**
   * The Amazon Glue Data Catalog that you use in queries in a Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  CatalogConfiguration?: CatalogConfiguration | undefined;

  /**
   * The information required to deploy a Managed Service for Apache Flink Studio notebook as an application with durable state.
   *
   * @public
   */
  DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration | undefined;

  /**
   * Custom artifacts are dependency JARs and user-defined functions (UDF).
   *
   * @public
   */
  CustomArtifactsConfiguration?: CustomArtifactConfiguration[] | undefined;
}

/**
 * Specifies the creation parameters for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface ApplicationConfiguration {
  /**
   * The creation and update parameters for a SQL-based Kinesis Data Analytics application.
   *
   * @public
   */
  SqlApplicationConfiguration?: SqlApplicationConfiguration | undefined;

  /**
   * The creation and update parameters for a Managed Service for Apache Flink application.
   *
   * @public
   */
  FlinkApplicationConfiguration?: FlinkApplicationConfiguration | undefined;

  /**
   * Describes execution properties for a Managed Service for Apache Flink application.
   *
   * @public
   */
  EnvironmentProperties?: EnvironmentProperties | undefined;

  /**
   * The code location and type parameters for a Managed Service for Apache Flink application.
   *
   * @public
   */
  ApplicationCodeConfiguration?: ApplicationCodeConfiguration | undefined;

  /**
   * Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
   *
   * @public
   */
  ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration | undefined;

  /**
   * Describes whether system rollbacks are enabled for a Managed Service for Apache Flink application.
   *
   * @public
   */
  ApplicationSystemRollbackConfiguration?: ApplicationSystemRollbackConfiguration | undefined;

  /**
   * The array of descriptions of VPC configurations available to the application.
   *
   * @public
   */
  VpcConfigurations?: VpcConfiguration[] | undefined;

  /**
   * The configuration parameters for a Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration | undefined;

  /**
   * The configuration to manage encryption at rest.
   *
   * @public
   */
  ApplicationEncryptionConfiguration?: ApplicationEncryptionConfiguration | undefined;
}

/**
 * Describes the encryption at rest configuration.
 *
 * @public
 */
export interface ApplicationEncryptionConfigurationDescription {
  /**
   * The key ARN, key ID, alias ARN, or alias name of the KMS key used for encryption at rest.
   *
   * @public
   */
  KeyId?: string | undefined;

  /**
   * Specifies the type of key used for encryption at rest.
   *
   * @public
   */
  KeyType: KeyType | undefined;
}

/**
 * Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface ApplicationSnapshotConfigurationDescription {
  /**
   * Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
   *
   * @public
   */
  SnapshotsEnabled: boolean | undefined;
}

/**
 * Describes the system rollback configuration for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface ApplicationSystemRollbackConfigurationDescription {
  /**
   * Describes whether system rollbacks are enabled for a Managed Service for Apache Flink application.
   *
   * @public
   */
  RollbackEnabled: boolean | undefined;
}

/**
 * Describes the execution properties for an Apache Flink runtime.
 *
 * @public
 */
export interface EnvironmentPropertyDescriptions {
  /**
   * Describes the execution property groups.
   *
   * @public
   */
  PropertyGroupDescriptions?: PropertyGroup[] | undefined;
}

/**
 * Describes checkpointing parameters for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface CheckpointConfigurationDescription {
  /**
   * Describes whether the application uses the default checkpointing behavior in Managed Service for Apache Flink.
   *
   * > **Note:**
   * >
   * > If this value is set to `DEFAULT`, the application will use the following values, even if they are set to other values using APIs or application code:
   * >
   * > - **CheckpointingEnabled:** true
   * > - **CheckpointInterval:** 60000
   * > - **MinPauseBetweenCheckpoints:** 5000
   *
   * @public
   */
  ConfigurationType?: ConfigurationType | undefined;

  /**
   * Describes whether checkpointing is enabled for a Managed Service for Apache Flink application.
   *
   * > **Note:** If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `CheckpointingEnabled` value of `true`, even if this value is set to another value using this API or in application code.
   *
   * @public
   */
  CheckpointingEnabled?: boolean | undefined;

  /**
   * Describes the interval in milliseconds between checkpoint operations.
   *
   * > **Note:** If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `CheckpointInterval` value of 60000, even if this value is set to another value using this API or in application code.
   *
   * @public
   */
  CheckpointInterval?: number | undefined;

  /**
   * Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start.
   *
   * > **Note:** If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `MinPauseBetweenCheckpoints` value of 5000, even if this value is set using this API or in application code.
   *
   * @public
   */
  MinPauseBetweenCheckpoints?: number | undefined;
}

/**
 * Describes configuration parameters for CloudWatch logging for an application.
 *
 * @public
 */
export interface MonitoringConfigurationDescription {
  /**
   * Describes whether to use the default CloudWatch logging configuration for an application.
   *
   * @public
   */
  ConfigurationType?: ConfigurationType | undefined;

  /**
   * Describes the granularity of the CloudWatch Logs for an application.
   *
   * @public
   */
  MetricsLevel?: MetricsLevel | undefined;

  /**
   * Describes the verbosity of the CloudWatch Logs for an application.
   *
   * @public
   */
  LogLevel?: LogLevel | undefined;
}

/**
 * Describes parameters for how a Managed Service for Apache Flink application executes multiple tasks simultaneously.
 *
 * @public
 */
export interface ParallelismConfigurationDescription {
  /**
   * Describes whether the application uses the default parallelism for the Managed Service for Apache Flink service.
   *
   * @public
   */
  ConfigurationType?: ConfigurationType | undefined;

  /**
   * Describes the initial number of parallel tasks that a Managed Service for Apache Flink application can perform. If `AutoScalingEnabled` is set to True, then Managed Service for Apache Flink can increase the `CurrentParallelism` value in response to application load. The service can increase `CurrentParallelism` up to the maximum parallelism, which is `ParalellismPerKPU` times the maximum KPUs for the application. The maximum KPUs for an application is 64 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can reduce the `CurrentParallelism` value down to the `Parallelism` setting.
   *
   * @public
   */
  Parallelism?: number | undefined;

  /**
   * Describes the number of parallel tasks that a Managed Service for Apache Flink application can perform per Kinesis Processing Unit (KPU) used by the application.
   *
   * @public
   */
  ParallelismPerKPU?: number | undefined;

  /**
   * Describes the current number of parallel tasks that a Managed Service for Apache Flink application can perform. If `AutoScalingEnabled` is set to True, Managed Service for Apache Flink can increase this value in response to application load. The service can increase this value up to the maximum parallelism, which is `ParalellismPerKPU` times the maximum KPUs for the application. The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can reduce the `CurrentParallelism` value down to the `Parallelism` setting.
   *
   * @public
   */
  CurrentParallelism?: number | undefined;

  /**
   * Describes whether the Managed Service for Apache Flink service can increase the parallelism of the application in response to increased throughput.
   *
   * @public
   */
  AutoScalingEnabled?: boolean | undefined;
}

/**
 * Describes configuration parameters for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface FlinkApplicationConfigurationDescription {
  /**
   * Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.
   *
   * @public
   */
  CheckpointConfigurationDescription?: CheckpointConfigurationDescription | undefined;

  /**
   * Describes configuration parameters for Amazon CloudWatch logging for an application.
   *
   * @public
   */
  MonitoringConfigurationDescription?: MonitoringConfigurationDescription | undefined;

  /**
   * Describes parameters for how an application executes multiple tasks simultaneously.
   *
   * @public
   */
  ParallelismConfigurationDescription?: ParallelismConfigurationDescription | undefined;

  /**
   * The job plan for an application. For more information about the job plan, see [Jobs and Scheduling](https://nightlies.apache.org/flink/flink-docs-release-2.3/internals/job_scheduling.html) in the [Apache Flink Documentation](https://nightlies.apache.org/flink/flink-docs-release-2.3/). To retrieve the job plan for the application, use the DescribeApplicationRequest$IncludeAdditionalDetails parameter of the DescribeApplication operation.
   *
   * @public
   */
  JobPlanDescription?: string | undefined;
}

/**
 * Specifies the method and snapshot to use when restarting an application using previously saved application state.
 *
 * @public
 */
export interface ApplicationRestoreConfiguration {
  /**
   * Specifies how the application should be restored.
   *
   * @public
   */
  ApplicationRestoreType: ApplicationRestoreType | undefined;

  /**
   * The identifier of an existing snapshot of application state to use to restart an application. The application uses this value if `RESTORE_FROM_CUSTOM_SNAPSHOT` is specified for the `ApplicationRestoreType`.
   *
   * @public
   */
  SnapshotName?: string | undefined;
}

/**
 * Describes the starting parameters for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface FlinkRunConfiguration {
  /**
   * When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program. This will happen if the program is updated between snapshots to remove stateful parameters, and state data in the snapshot no longer corresponds to valid application data. For more information, see [Allowing Non-Restored State](https://nightlies.apache.org/flink/flink-docs-release-2.3/docs/ops/state/savepoints/#allowing-non-restored-state) in the [Apache Flink documentation](https://nightlies.apache.org/flink/flink-docs-release-2.3/).
   *
   * > **Note:** This value defaults to `false`. If you update your application without specifying this parameter, `AllowNonRestoredState` will be set to `false`, even if it was previously set to `true`.
   *
   * @public
   */
  AllowNonRestoredState?: boolean | undefined;
}

/**
 * Describes the starting properties for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface RunConfigurationDescription {
  /**
   * Describes the restore behavior of a restarting application.
   *
   * @public
   */
  ApplicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration | undefined;

  /**
   * Describes the starting parameters for a Managed Service for Apache Flink application.
   *
   * @public
   */
  FlinkRunConfigurationDescription?: FlinkRunConfiguration | undefined;
}

/**
 * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
 *
 * @public
 */
export interface SqlApplicationConfigurationDescription {
  /**
   * The array of InputDescription objects describing the input streams used by the application.
   *
   * @public
   */
  InputDescriptions?: InputDescription[] | undefined;

  /**
   * The array of OutputDescription objects describing the destination streams used by the application.
   *
   * @public
   */
  OutputDescriptions?: OutputDescription[] | undefined;

  /**
   * The array of ReferenceDataSourceDescription objects describing the reference data sources used by the application.
   *
   * @public
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[] | undefined;
}

/**
 * The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
 *
 * @public
 */
export interface GlueDataCatalogConfigurationDescription {
  /**
   * The Amazon Resource Name (ARN) of the database.
   *
   * @public
   */
  DatabaseARN: string | undefined;
}

/**
 * The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Managed Service for Apache Flink Studio notebook.
 *
 * @public
 */
export interface CatalogConfigurationDescription {
  /**
   * The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  GlueDataCatalogConfigurationDescription: GlueDataCatalogConfigurationDescription | undefined;
}

/**
 * Specifies a dependency JAR or a JAR of user-defined functions.
 *
 * @public
 */
export interface CustomArtifactConfigurationDescription {
  /**
   * `UDF` stands for user-defined functions. This type of artifact must be in an S3 bucket. A `DEPENDENCY_JAR` can be in either Maven or an S3 bucket.
   *
   * @public
   */
  ArtifactType?: ArtifactType | undefined;

  /**
   * For a Managed Service for Apache Flink application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
   *
   * @public
   */
  S3ContentLocationDescription?: S3ContentLocation | undefined;

  /**
   * The parameters that are required to specify a Maven dependency.
   *
   * @public
   */
  MavenReferenceDescription?: MavenReference | undefined;
}

/**
 * The description of the S3 base location that holds the application.
 *
 * @public
 */
export interface S3ContentBaseLocationDescription {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket.
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * The base path for the S3 bucket.
   *
   * @public
   */
  BasePath?: string | undefined;
}

/**
 * The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.
 *
 * @public
 */
export interface DeployAsApplicationConfigurationDescription {
  /**
   * The location that holds the data required to specify an Amazon Data Analytics application.
   *
   * @public
   */
  S3ContentLocationDescription: S3ContentBaseLocationDescription | undefined;
}

/**
 * The monitoring configuration for Apache Zeppelin within a Managed Service for Apache Flink Studio notebook.
 *
 * @public
 */
export interface ZeppelinMonitoringConfigurationDescription {
  /**
   * Describes the verbosity of the CloudWatch Logs for an application.
   *
   * @public
   */
  LogLevel?: LogLevel | undefined;
}

/**
 * The configuration of a Managed Service for Apache Flink Studio notebook.
 *
 * @public
 */
export interface ZeppelinApplicationConfigurationDescription {
  /**
   * The monitoring configuration of a Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  MonitoringConfigurationDescription: ZeppelinMonitoringConfigurationDescription | undefined;

  /**
   * The Amazon Glue Data Catalog that is associated with the Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  CatalogConfigurationDescription?: CatalogConfigurationDescription | undefined;

  /**
   * The parameters required to deploy a Managed Service for Apache Flink Studio notebook as an application with durable state.
   *
   * @public
   */
  DeployAsApplicationConfigurationDescription?: DeployAsApplicationConfigurationDescription | undefined;

  /**
   * Custom artifacts are dependency JARs and user-defined functions (UDF).
   *
   * @public
   */
  CustomArtifactsConfigurationDescription?: CustomArtifactConfigurationDescription[] | undefined;
}

/**
 * Describes details about the application code and starting parameters for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface ApplicationConfigurationDescription {
  /**
   * The details about inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
   *
   * @public
   */
  SqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription | undefined;

  /**
   * The details about the application code for a Managed Service for Apache Flink application.
   *
   * @public
   */
  ApplicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription | undefined;

  /**
   * The details about the starting properties for a Managed Service for Apache Flink application.
   *
   * @public
   */
  RunConfigurationDescription?: RunConfigurationDescription | undefined;

  /**
   * The details about a Managed Service for Apache Flink application.
   *
   * @public
   */
  FlinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription | undefined;

  /**
   * Describes execution properties for a Managed Service for Apache Flink application.
   *
   * @public
   */
  EnvironmentPropertyDescriptions?: EnvironmentPropertyDescriptions | undefined;

  /**
   * Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
   *
   * @public
   */
  ApplicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription | undefined;

  /**
   * Describes whether system rollbacks are enabled for a Managed Service for Apache Flink application.
   *
   * @public
   */
  ApplicationSystemRollbackConfigurationDescription?: ApplicationSystemRollbackConfigurationDescription | undefined;

  /**
   * The array of descriptions of VPC configurations available to the application.
   *
   * @public
   */
  VpcConfigurationDescriptions?: VpcConfigurationDescription[] | undefined;

  /**
   * The configuration parameters for a Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  ZeppelinApplicationConfigurationDescription?: ZeppelinApplicationConfigurationDescription | undefined;

  /**
   * Describes the encryption at rest configuration.
   *
   * @public
   */
  ApplicationEncryptionConfigurationDescription?: ApplicationEncryptionConfigurationDescription | undefined;
}

/**
 * Describes configuration updates to encryption at rest.
 *
 * @public
 */
export interface ApplicationEncryptionConfigurationUpdate {
  /**
   * The key ARN, key ID, alias ARN, or alias name of the KMS key to be used for encryption at rest.
   *
   * @public
   */
  KeyIdUpdate?: string | undefined;

  /**
   * Specifies the type of key to be used for encryption at rest.
   *
   * @public
   */
  KeyTypeUpdate: KeyType | undefined;
}

/**
 * Describes updates to whether snapshots are enabled for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface ApplicationSnapshotConfigurationUpdate {
  /**
   * Describes updates to whether snapshots are enabled for an application.
   *
   * @public
   */
  SnapshotsEnabledUpdate: boolean | undefined;
}

/**
 * Describes the system rollback configuration for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface ApplicationSystemRollbackConfigurationUpdate {
  /**
   * Describes whether system rollbacks are enabled for a Managed Service for Apache Flink application.
   *
   * @public
   */
  RollbackEnabledUpdate: boolean | undefined;
}

/**
 * Describes updates to the execution property groups for a Managed Service for Apache Flink application or a Studio notebook.
 *
 * @public
 */
export interface EnvironmentPropertyUpdates {
  /**
   * Describes updates to the execution property groups.
   *
   * @public
   */
  PropertyGroups: PropertyGroup[] | undefined;
}

/**
 * Describes updates to the checkpointing parameters for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface CheckpointConfigurationUpdate {
  /**
   * Describes updates to whether the application uses the default checkpointing behavior of Managed Service for Apache Flink. You must set this property to `CUSTOM` in order to set the `CheckpointingEnabled`, `CheckpointInterval`, or `MinPauseBetweenCheckpoints` parameters.
   *
   * > **Note:**
   * >
   * > If this value is set to `DEFAULT`, the application will use the following values, even if they are set to other values using APIs or application code:
   * >
   * > - **CheckpointingEnabled:** true
   * > - **CheckpointInterval:** 60000
   * > - **MinPauseBetweenCheckpoints:** 5000
   *
   * @public
   */
  ConfigurationTypeUpdate?: ConfigurationType | undefined;

  /**
   * Describes updates to whether checkpointing is enabled for an application.
   *
   * > **Note:** If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `CheckpointingEnabled` value of `true`, even if this value is set to another value using this API or in application code.
   *
   * @public
   */
  CheckpointingEnabledUpdate?: boolean | undefined;

  /**
   * Describes updates to the interval in milliseconds between checkpoint operations.
   *
   * > **Note:** If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `CheckpointInterval` value of 60000, even if this value is set to another value using this API or in application code.
   *
   * @public
   */
  CheckpointIntervalUpdate?: number | undefined;

  /**
   * Describes updates to the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start.
   *
   * > **Note:** If `CheckpointConfiguration.ConfigurationType` is `DEFAULT`, the application will use a `MinPauseBetweenCheckpoints` value of 5000, even if this value is set using this API or in application code.
   *
   * @public
   */
  MinPauseBetweenCheckpointsUpdate?: number | undefined;
}

/**
 * Describes updates to configuration parameters for Amazon CloudWatch logging for an application.
 *
 * @public
 */
export interface MonitoringConfigurationUpdate {
  /**
   * Describes updates to whether to use the default CloudWatch logging configuration for an application. You must set this property to `CUSTOM` in order to set the `LogLevel` or `MetricsLevel` parameters.
   *
   * @public
   */
  ConfigurationTypeUpdate?: ConfigurationType | undefined;

  /**
   * Describes updates to the granularity of the CloudWatch Logs for an application. The `Parallelism` level is not recommended for applications with a Parallelism over 64 due to excessive costs.
   *
   * @public
   */
  MetricsLevelUpdate?: MetricsLevel | undefined;

  /**
   * Describes updates to the verbosity of the CloudWatch Logs for an application.
   *
   * @public
   */
  LogLevelUpdate?: LogLevel | undefined;
}

/**
 * Describes updates to parameters for how an application executes multiple tasks simultaneously.
 *
 * @public
 */
export interface ParallelismConfigurationUpdate {
  /**
   * Describes updates to whether the application uses the default parallelism for the Managed Service for Apache Flink service, or if a custom parallelism is used. You must set this property to `CUSTOM` in order to change your application's `AutoScalingEnabled`, `Parallelism`, or `ParallelismPerKPU` properties.
   *
   * @public
   */
  ConfigurationTypeUpdate?: ConfigurationType | undefined;

  /**
   * Describes updates to the initial number of parallel tasks an application can perform. If `AutoScalingEnabled` is set to True, then Managed Service for Apache Flink can increase the `CurrentParallelism` value in response to application load. The service can increase `CurrentParallelism` up to the maximum parallelism, which is `ParalellismPerKPU` times the maximum KPUs for the application. The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service will reduce `CurrentParallelism` down to the `Parallelism` setting.
   *
   * @public
   */
  ParallelismUpdate?: number | undefined;

  /**
   * Describes updates to the number of parallel tasks an application can perform per Kinesis Processing Unit (KPU) used by the application.
   *
   * @public
   */
  ParallelismPerKPUUpdate?: number | undefined;

  /**
   * Describes updates to whether the Managed Service for Apache Flink service can increase the parallelism of a Managed Service for Apache Flink application in response to increased throughput.
   *
   * @public
   */
  AutoScalingEnabledUpdate?: boolean | undefined;
}

/**
 * Describes updates to the configuration parameters for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface FlinkApplicationConfigurationUpdate {
  /**
   * Describes updates to an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.
   *
   * @public
   */
  CheckpointConfigurationUpdate?: CheckpointConfigurationUpdate | undefined;

  /**
   * Describes updates to the configuration parameters for Amazon CloudWatch logging for an application.
   *
   * @public
   */
  MonitoringConfigurationUpdate?: MonitoringConfigurationUpdate | undefined;

  /**
   * Describes updates to the parameters for how an application executes multiple tasks simultaneously.
   *
   * @public
   */
  ParallelismConfigurationUpdate?: ParallelismConfigurationUpdate | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides updates to the parallelism count.
 *
 * @public
 */
export interface InputParallelismUpdate {
  /**
   * The number of in-application streams to create for the specified streaming source.
   *
   * @public
   */
  CountUpdate: number | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, represents an update to the InputLambdaProcessor that is used to preprocess the records in the stream.
 *
 * @public
 */
export interface InputLambdaProcessorUpdate {
  /**
   * The Amazon Resource Name (ARN) of the new Amazon Lambda function that is used to preprocess the records in the stream.
   *
   * > **Note:** To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: Amazon Lambda](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
   *
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes updates to an InputProcessingConfiguration.
 *
 * @public
 */
export interface InputProcessingConfigurationUpdate {
  /**
   * Provides update information for an InputLambdaProcessor.
   *
   * @public
   */
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate | undefined;
}

/**
 * Describes updates for an SQL-based Kinesis Data Analytics application's input schema.
 *
 * @public
 */
export interface InputSchemaUpdate {
  /**
   * Specifies the format of the records on the streaming source.
   *
   * @public
   */
  RecordFormatUpdate?: RecordFormat | undefined;

  /**
   * Specifies the encoding of the records in the streaming source; for example, UTF-8.
   *
   * @public
   */
  RecordEncodingUpdate?: string | undefined;

  /**
   * A list of `RecordColumn` objects. Each object describes the mapping of the streaming source element to the corresponding column in the in-application stream.
   *
   * @public
   */
  RecordColumnUpdates?: RecordColumn[] | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, when updating application input configuration, provides information about a Kinesis Data Firehose delivery stream as the streaming source.
 *
 * @public
 */
export interface KinesisFirehoseInputUpdate {
  /**
   * The Amazon Resource Name (ARN) of the input delivery stream to read.
   *
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a Kinesis stream as the streaming source.
 *
 * @public
 */
export interface KinesisStreamsInputUpdate {
  /**
   * The Amazon Resource Name (ARN) of the input Kinesis data stream to read.
   *
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes updates to a specific input configuration (identified by the `InputId` of an application).
 *
 * @public
 */
export interface InputUpdate {
  /**
   * The input ID of the application input to be updated.
   *
   * @public
   */
  InputId: string | undefined;

  /**
   * The name prefix for in-application streams that Kinesis Data Analytics creates for the specific streaming source.
   *
   * @public
   */
  NamePrefixUpdate?: string | undefined;

  /**
   * Describes updates to an InputProcessingConfiguration.
   *
   * @public
   */
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate | undefined;

  /**
   * If a Kinesis data stream is the streaming source to be updated, provides an updated stream Amazon Resource Name (ARN).
   *
   * @public
   */
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate | undefined;

  /**
   * If a Kinesis Data Firehose delivery stream is the streaming source to be updated, provides an updated stream ARN.
   *
   * @public
   */
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate | undefined;

  /**
   * Describes the data format on the streaming source, and how record elements on the streaming source map to columns of the in-application stream that is created.
   *
   * @public
   */
  InputSchemaUpdate?: InputSchemaUpdate | undefined;

  /**
   * Describes the parallelism updates (the number of in-application streams Kinesis Data Analytics creates for the specific streaming source).
   *
   * @public
   */
  InputParallelismUpdate?: InputParallelismUpdate | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, when updating an output configuration using the UpdateApplication operation, provides information about a Kinesis Data Firehose delivery stream that is configured as the destination.
 *
 * @public
 */
export interface KinesisFirehoseOutputUpdate {
  /**
   * The Amazon Resource Name (ARN) of the delivery stream to write to.
   *
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * When you update a SQL-based Kinesis Data Analytics application's output configuration using the UpdateApplication operation, provides information about a Kinesis data stream that is configured as the destination.
 *
 * @public
 */
export interface KinesisStreamsOutputUpdate {
  /**
   * The Amazon Resource Name (ARN) of the Kinesis data stream where you want to write the output.
   *
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * When you update an SQL-based Kinesis Data Analytics application's output configuration using the UpdateApplication operation, provides information about an Amazon Lambda function that is configured as the destination.
 *
 * @public
 */
export interface LambdaOutputUpdate {
  /**
   * The Amazon Resource Name (ARN) of the destination Amazon Lambda function.
   *
   * > **Note:** To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: Amazon Lambda](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
   *
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes updates to the output configuration identified by the `OutputId`.
 *
 * @public
 */
export interface OutputUpdate {
  /**
   * Identifies the specific output configuration that you want to update.
   *
   * @public
   */
  OutputId: string | undefined;

  /**
   * If you want to specify a different in-application stream for this output configuration, use this field to specify the new in-application stream name.
   *
   * @public
   */
  NameUpdate?: string | undefined;

  /**
   * Describes a Kinesis data stream as the destination for the output.
   *
   * @public
   */
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate | undefined;

  /**
   * Describes a Kinesis Data Firehose delivery stream as the destination for the output.
   *
   * @public
   */
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate | undefined;

  /**
   * Describes an Amazon Lambda function as the destination for the output.
   *
   * @public
   */
  LambdaOutputUpdate?: LambdaOutputUpdate | undefined;

  /**
   * Describes the data format when records are written to the destination.
   *
   * @public
   */
  DestinationSchemaUpdate?: DestinationSchema | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket name and object key name for an in-application reference table.
 *
 * @public
 */
export interface S3ReferenceDataSourceUpdate {
  /**
   * The Amazon Resource Name (ARN) of the S3 bucket.
   *
   * @public
   */
  BucketARNUpdate?: string | undefined;

  /**
   * The object key name.
   *
   * @public
   */
  FileKeyUpdate?: string | undefined;
}

/**
 * When you update a reference data source configuration for a SQL-based Kinesis Data Analytics application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.
 *
 * @public
 */
export interface ReferenceDataSourceUpdate {
  /**
   * The ID of the reference data source that is being updated. You can use the DescribeApplication operation to get this value.
   *
   * @public
   */
  ReferenceId: string | undefined;

  /**
   * The in-application table name that is created by this update.
   *
   * @public
   */
  TableNameUpdate?: string | undefined;

  /**
   * Describes the S3 bucket name, object key name, and IAM role that Kinesis Data Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
   *
   * @public
   */
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate | undefined;

  /**
   * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
   *
   * @public
   */
  ReferenceSchemaUpdate?: SourceSchema | undefined;
}

/**
 * Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application.
 *
 * @public
 */
export interface SqlApplicationConfigurationUpdate {
  /**
   * The array of InputUpdate objects describing the new input streams used by the application.
   *
   * @public
   */
  InputUpdates?: InputUpdate[] | undefined;

  /**
   * The array of OutputUpdate objects describing the new destination streams used by the application.
   *
   * @public
   */
  OutputUpdates?: OutputUpdate[] | undefined;

  /**
   * The array of ReferenceDataSourceUpdate objects describing the new reference data sources used by the application.
   *
   * @public
   */
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[] | undefined;
}

/**
 * Describes updates to the VPC configuration used by the application.
 *
 * @public
 */
export interface VpcConfigurationUpdate {
  /**
   * Describes an update to the ID of the VPC configuration.
   *
   * @public
   */
  VpcConfigurationId: string | undefined;

  /**
   * Describes updates to the array of [Subnet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html) IDs used by the VPC configuration.
   *
   * @public
   */
  SubnetIdUpdates?: string[] | undefined;

  /**
   * Describes updates to the array of [SecurityGroup](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html) IDs used by the VPC configuration.
   *
   * @public
   */
  SecurityGroupIdUpdates?: string[] | undefined;
}

/**
 * Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Managed Service for Apache Flink Studio notebook.
 *
 * @public
 */
export interface GlueDataCatalogConfigurationUpdate {
  /**
   * The updated Amazon Resource Name (ARN) of the database.
   *
   * @public
   */
  DatabaseARNUpdate: string | undefined;
}

/**
 * Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Managed Service for Apache Flink Studio notebook.
 *
 * @public
 */
export interface CatalogConfigurationUpdate {
  /**
   * Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  GlueDataCatalogConfigurationUpdate: GlueDataCatalogConfigurationUpdate | undefined;
}

/**
 * The information required to update the S3 base location that holds the application.
 *
 * @public
 */
export interface S3ContentBaseLocationUpdate {
  /**
   * The updated Amazon Resource Name (ARN) of the S3 bucket.
   *
   * @public
   */
  BucketARNUpdate?: string | undefined;

  /**
   * The updated S3 bucket path.
   *
   * @public
   */
  BasePathUpdate?: string | undefined;
}

/**
 * Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.
 *
 * @public
 */
export interface DeployAsApplicationConfigurationUpdate {
  /**
   * Updates to the location that holds the data required to specify an Amazon Data Analytics application.
   *
   * @public
   */
  S3ContentLocationUpdate?: S3ContentBaseLocationUpdate | undefined;
}

/**
 * Updates to the monitoring configuration for Apache Zeppelin within a Managed Service for Apache Flink Studio notebook.
 *
 * @public
 */
export interface ZeppelinMonitoringConfigurationUpdate {
  /**
   * Updates to the logging level for Apache Zeppelin within a Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  LogLevelUpdate: LogLevel | undefined;
}

/**
 * Updates to the configuration of Managed Service for Apache Flink Studio notebook.
 *
 * @public
 */
export interface ZeppelinApplicationConfigurationUpdate {
  /**
   * Updates to the monitoring configuration of a Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  MonitoringConfigurationUpdate?: ZeppelinMonitoringConfigurationUpdate | undefined;

  /**
   * Updates to the configuration of the Amazon Glue Data Catalog that is associated with the Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  CatalogConfigurationUpdate?: CatalogConfigurationUpdate | undefined;

  /**
   * Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.
   *
   * @public
   */
  DeployAsApplicationConfigurationUpdate?: DeployAsApplicationConfigurationUpdate | undefined;

  /**
   * Updates to the customer artifacts. Custom artifacts are dependency JAR files and user-defined functions (UDF).
   *
   * @public
   */
  CustomArtifactsConfigurationUpdate?: CustomArtifactConfiguration[] | undefined;
}

/**
 * Describes updates to an application's configuration.
 *
 * @public
 */
export interface ApplicationConfigurationUpdate {
  /**
   * Describes updates to a SQL-based Kinesis Data Analytics application's configuration.
   *
   * @public
   */
  SqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate | undefined;

  /**
   * Describes updates to an application's code configuration.
   *
   * @public
   */
  ApplicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate | undefined;

  /**
   * Describes updates to a Managed Service for Apache Flink application's configuration.
   *
   * @public
   */
  FlinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate | undefined;

  /**
   * Describes updates to the environment properties for a Managed Service for Apache Flink application.
   *
   * @public
   */
  EnvironmentPropertyUpdates?: EnvironmentPropertyUpdates | undefined;

  /**
   * Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
   *
   * @public
   */
  ApplicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate | undefined;

  /**
   * Describes whether system rollbacks are enabled for a Managed Service for Apache Flink application.
   *
   * @public
   */
  ApplicationSystemRollbackConfigurationUpdate?: ApplicationSystemRollbackConfigurationUpdate | undefined;

  /**
   * Updates to the array of descriptions of VPC configurations available to the application.
   *
   * @public
   */
  VpcConfigurationUpdates?: VpcConfigurationUpdate[] | undefined;

  /**
   * Updates to the configuration of a Managed Service for Apache Flink Studio notebook.
   *
   * @public
   */
  ZeppelinApplicationConfigurationUpdate?: ZeppelinApplicationConfigurationUpdate | undefined;

  /**
   * Represents an update for encryption at rest configuration.
   *
   * @public
   */
  ApplicationEncryptionConfigurationUpdate?: ApplicationEncryptionConfigurationUpdate | undefined;
}

/**
 * The details of the maintenance configuration for the application.
 *
 * @public
 */
export interface ApplicationMaintenanceConfigurationDescription {
  /**
   * The start time for the maintenance window.
   *
   * @public
   */
  ApplicationMaintenanceWindowStartTime: string | undefined;

  /**
   * The end time for the maintenance window.
   *
   * @public
   */
  ApplicationMaintenanceWindowEndTime: string | undefined;
}

/**
 * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
 *
 * @public
 */
export interface ApplicationDetail {
  /**
   * The ARN of the application.
   *
   * @public
   */
  ApplicationARN: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  ApplicationDescription?: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The runtime environment for the application.
   *
   * @public
   */
  RuntimeEnvironment: RuntimeEnvironment | undefined;

  /**
   * Specifies the IAM role that the application uses to access external resources.
   *
   * @public
   */
  ServiceExecutionRole?: string | undefined;

  /**
   * The status of the application.
   *
   * @public
   */
  ApplicationStatus: ApplicationStatus | undefined;

  /**
   * Provides the current application version. Managed Service for Apache Flink updates the `ApplicationVersionId` each time you update the application.
   *
   * @public
   */
  ApplicationVersionId: number | undefined;

  /**
   * The current timestamp when the application was created.
   *
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * The current timestamp when the application was last updated.
   *
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * Describes details about the application code and starting parameters for a Managed Service for Apache Flink application.
   *
   * @public
   */
  ApplicationConfigurationDescription?: ApplicationConfigurationDescription | undefined;

  /**
   * Describes the application Amazon CloudWatch logging options.
   *
   * @public
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[] | undefined;

  /**
   * The details of the maintenance configuration for the application.
   *
   * @public
   */
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription | undefined;

  /**
   * The previous application version before the latest application update. RollbackApplication reverts the application to this version.
   *
   * @public
   */
  ApplicationVersionUpdatedFrom?: number | undefined;

  /**
   * If you reverted the application using RollbackApplication, the application version when `RollbackApplication` was called.
   *
   * @public
   */
  ApplicationVersionRolledBackFrom?: number | undefined;

  /**
   * The timestamp that indicates when the application version was created.
   *
   * @public
   */
  ApplicationVersionCreateTimestamp?: Date | undefined;

  /**
   * A value you use to implement strong concurrency for application updates.
   *
   * @public
   */
  ConditionalToken?: string | undefined;

  /**
   * The version to which you want to roll back the application.
   *
   * @public
   */
  ApplicationVersionRolledBackTo?: number | undefined;

  /**
   * To create a Managed Service for Apache Flink Studio notebook, you must set the mode to `INTERACTIVE`. However, for a Managed Service for Apache Flink application, the mode is optional.
   *
   * @public
   */
  ApplicationMode?: ApplicationMode | undefined;
}

/**
 * Describes the updated maintenance configuration for the application.
 *
 * @public
 */
export interface ApplicationMaintenanceConfigurationUpdate {
  /**
   * The updated start time for the maintenance window.
   *
   * @public
   */
  ApplicationMaintenanceWindowStartTimeUpdate: string | undefined;
}

/**
 * A description of the aplication operation that provides information about the updates that were made to the application.
 *
 * @public
 */
export interface ApplicationOperationInfo {
  /**
   * The type of operation that is performed on an application.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The operation ID of the request.
   *
   * @public
   */
  OperationId?: string | undefined;

  /**
   * The timestamp that indicates when the operation was created.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp that indicates when the operation finished.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The status of the operation.
   *
   * @public
   */
  OperationStatus?: OperationStatus | undefined;
}

/**
 * Contains information about the version changes that the operation applied to the application.
 *
 * @public
 */
export interface ApplicationVersionChangeDetails {
  /**
   * The new version that the application was updated to.
   *
   * @public
   */
  ApplicationVersionUpdatedFrom: number | undefined;

  /**
   * The version that the operation execution applied to the applicartion.
   *
   * @public
   */
  ApplicationVersionUpdatedTo: number | undefined;
}

/**
 * A description of the error that caused an operation to fail.
 *
 * @public
 */
export interface ErrorInfo {
  /**
   * An error message that is returned when an operation fails.
   *
   * @public
   */
  ErrorString?: string | undefined;
}

/**
 * Provides a description of the operation failure.
 *
 * @public
 */
export interface OperationFailureDetails {
  /**
   * The rollback operation ID of the system-rollback operation that executed due to failure in the current operation.
   *
   * @public
   */
  RollbackOperationId?: string | undefined;

  /**
   * A description of the error that caused an operation to fail.
   *
   * @public
   */
  ErrorInfo?: ErrorInfo | undefined;
}

/**
 * A description of the application operation that provides information about the updates that were made to the application.
 *
 * @public
 */
export interface ApplicationOperationInfoDetails {
  /**
   * The type of operation that is performed on an application.
   *
   * @public
   */
  Operation: string | undefined;

  /**
   * The timestamp that indicates when the operation was created.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The timestamp that indicates when the operation finished.
   *
   * @public
   */
  EndTime: Date | undefined;

  /**
   * The status of the operation.
   *
   * @public
   */
  OperationStatus: OperationStatus | undefined;

  /**
   * Contains information about the version changes that the operation applied to the application.
   *
   * @public
   */
  ApplicationVersionChangeDetails?: ApplicationVersionChangeDetails | undefined;

  /**
   * Provides a description of the operation failure.
   *
   * @public
   */
  OperationFailureDetails?: OperationFailureDetails | undefined;
}

/**
 * Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The ARN of the application.
   *
   * @public
   */
  ApplicationARN: string | undefined;

  /**
   * The status of the application.
   *
   * @public
   */
  ApplicationStatus: ApplicationStatus | undefined;

  /**
   * Provides the current application version.
   *
   * @public
   */
  ApplicationVersionId: number | undefined;

  /**
   * The runtime environment for the application.
   *
   * @public
   */
  RuntimeEnvironment: RuntimeEnvironment | undefined;

  /**
   * For a Managed Service for Apache Flink application, the mode is `STREAMING`. For a Managed Service for Apache Flink Studio notebook, it is `INTERACTIVE`.
   *
   * @public
   */
  ApplicationMode?: ApplicationMode | undefined;
}

/**
 * The summary of the application version.
 *
 * @public
 */
export interface ApplicationVersionSummary {
  /**
   * The ID of the application version. Managed Service for Apache Flink updates the `ApplicationVersionId` each time you update the application.
   *
   * @public
   */
  ApplicationVersionId: number | undefined;

  /**
   * The status of the application.
   *
   * @public
   */
  ApplicationStatus: ApplicationStatus | undefined;
}

/**
 * Describes the Amazon CloudWatch logging option updates.
 *
 * @public
 */
export interface CloudWatchLoggingOptionUpdate {
  /**
   * The ID of the CloudWatch logging option to update
   *
   * @public
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch log to receive application messages.
   *
   * @public
   */
  LogStreamARNUpdate?: string | undefined;
}

/**
 * A key-value pair (the value is optional) that you can define and assign to Amazon resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see [Using Tagging](https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html).
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the key-value tag.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value of the key-value tag. The value is optional.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * The name of your application (for example, `sample-app`).
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * A summary description of the application.
   *
   * @public
   */
  ApplicationDescription?: string | undefined;

  /**
   * The runtime environment for the application.
   *
   * @public
   */
  RuntimeEnvironment: RuntimeEnvironment | undefined;

  /**
   * The IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose delivery streams, Amazon S3 objects, and other external resources.
   *
   * @public
   */
  ServiceExecutionRole: string | undefined;

  /**
   * Use this parameter to configure the application.
   *
   * @public
   */
  ApplicationConfiguration?: ApplicationConfiguration | undefined;

  /**
   * Use this parameter to configure an Amazon CloudWatch log stream to monitor application configuration errors.
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[] | undefined;

  /**
   * A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see [Using Tagging](https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Use the `STREAMING` mode to create a Managed Service for Apache Flink application. To create a Managed Service for Apache Flink Studio notebook, use the `INTERACTIVE` mode.
   *
   * @public
   */
  ApplicationMode?: ApplicationMode | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * In response to your `CreateApplication` request, Managed Service for Apache Flink returns a response with details of the application it created.
   *
   * @public
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * @public
 */
export interface CreateApplicationPresignedUrlRequest {
  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The type of the extension for which to create and return a URL. Currently, the only valid extension URL type is `FLINK_DASHBOARD_URL`.
   *
   * @public
   */
  UrlType: UrlType | undefined;

  /**
   * The duration in seconds for which the returned URL will be valid.
   *
   * @public
   */
  SessionExpirationDurationInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface CreateApplicationPresignedUrlResponse {
  /**
   * The URL of the extension.
   *
   * @public
   */
  AuthorizedUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationSnapshotRequest {
  /**
   * The name of an existing application
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * An identifier for the application snapshot.
   *
   * @public
   */
  SnapshotName: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationSnapshotResponse {}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * The name of the application to delete.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Use the `DescribeApplication` operation to get this value.
   *
   * @public
   */
  CreateTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * The application name.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The version ID of the application. You must provide the `CurrentApplicationVersionId` or the `ConditionalToken`. You can retrieve the application version ID using DescribeApplication. For better concurrency support, use the `ConditionalToken` parameter instead of `CurrentApplicationVersionId`.
   *
   * @public
   */
  CurrentApplicationVersionId?: number | undefined;

  /**
   * The `CloudWatchLoggingOptionId` of the Amazon CloudWatch logging option to delete. You can get the `CloudWatchLoggingOptionId` by using the DescribeApplication operation.
   *
   * @public
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * A value you use to implement strong concurrency for application updates. You must provide the `CurrentApplicationVersionId` or the `ConditionalToken`. You get the application's current `ConditionalToken` using DescribeApplication. For better concurrency support, use the `ConditionalToken` parameter instead of `CurrentApplicationVersionId`.
   *
   * @public
   */
  ConditionalToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationCloudWatchLoggingOptionResponse {
  /**
   * The application's Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * The version ID of the application. Kinesis Data Analytics updates the `ApplicationVersionId` each time you change the CloudWatch logging options.
   *
   * @public
   */
  ApplicationVersionId?: number | undefined;

  /**
   * The descriptions of the remaining CloudWatch logging options for the application.
   *
   * @public
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[] | undefined;

  /**
   * The operation ID that can be used to track the request.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationInputProcessingConfigurationRequest {
  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The application version. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The ID of the input configuration from which to delete the input processing configuration. You can get a list of the input IDs for an application by using the DescribeApplication operation.
   *
   * @public
   */
  InputId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationInputProcessingConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * The current application version ID.
   *
   * @public
   */
  ApplicationVersionId?: number | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationOutputRequest {
  /**
   * The application name.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The application version. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The ID of the configuration to delete. Each output configuration that is added to the application (either when the application is created or later) using the AddApplicationOutput operation has a unique ID. You need to provide the ID to uniquely identify the output configuration that you want to delete from the application configuration. You can use the DescribeApplication operation to get the specific `OutputId`.
   *
   * @public
   */
  OutputId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationOutputResponse {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * The current application version ID.
   *
   * @public
   */
  ApplicationVersionId?: number | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceRequest {
  /**
   * The name of an existing application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The current application version. You can use the DescribeApplication operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The ID of the reference data source. When you add a reference data source to your application using the AddApplicationReferenceDataSource, Kinesis Data Analytics assigns an ID. You can use the DescribeApplication operation to get the reference ID.
   *
   * @public
   */
  ReferenceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceResponse {
  /**
   * The application Amazon Resource Name (ARN).
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * The updated version ID of the application.
   *
   * @public
   */
  ApplicationVersionId?: number | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationSnapshotRequest {
  /**
   * The name of an existing application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The identifier for the snapshot delete.
   *
   * @public
   */
  SnapshotName: string | undefined;

  /**
   * The creation timestamp of the application snapshot to delete. You can retrieve this value using or .
   *
   * @public
   */
  SnapshotCreationTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationSnapshotResponse {}

/**
 * @public
 */
export interface DeleteApplicationVpcConfigurationRequest {
  /**
   * The name of an existing application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The current application version ID. You must provide the `CurrentApplicationVersionId` or the `ConditionalToken`. You can retrieve the application version ID using DescribeApplication. For better concurrency support, use the `ConditionalToken` parameter instead of `CurrentApplicationVersionId`.
   *
   * @public
   */
  CurrentApplicationVersionId?: number | undefined;

  /**
   * The ID of the VPC configuration to delete.
   *
   * @public
   */
  VpcConfigurationId: string | undefined;

  /**
   * A value you use to implement strong concurrency for application updates. You must provide the `CurrentApplicationVersionId` or the `ConditionalToken`. You get the application's current `ConditionalToken` using DescribeApplication. For better concurrency support, use the `ConditionalToken` parameter instead of `CurrentApplicationVersionId`.
   *
   * @public
   */
  ConditionalToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationVpcConfigurationResponse {
  /**
   * The ARN of the Managed Service for Apache Flink application.
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * The updated version ID of the application.
   *
   * @public
   */
  ApplicationVersionId?: number | undefined;

  /**
   * The operation ID that can be used to track the request.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationRequest {
  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Displays verbose information about a Managed Service for Apache Flink application, including the application's job plan.
   *
   * @public
   */
  IncludeAdditionalDetails?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * Provides a description of the application, such as the application's Amazon Resource Name (ARN), status, and latest version.
   *
   * @public
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * A request for information about a specific operation that was performed on a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface DescribeApplicationOperationRequest {
  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The operation ID of the request.
   *
   * @public
   */
  OperationId: string | undefined;
}

/**
 * Provides details of the operation that corresponds to the operation ID on a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface DescribeApplicationOperationResponse {
  /**
   * A description of the application operation that provides information about the updates that were made to the application.
   *
   * @public
   */
  ApplicationOperationInfoDetails?: ApplicationOperationInfoDetails | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationSnapshotRequest {
  /**
   * The name of an existing application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The identifier of an application snapshot. You can retrieve this value using .
   *
   * @public
   */
  SnapshotName: string | undefined;
}

/**
 * Provides details about a snapshot of application state.
 *
 * @public
 */
export interface SnapshotDetails {
  /**
   * The identifier for the application snapshot.
   *
   * @public
   */
  SnapshotName: string | undefined;

  /**
   * The status of the application snapshot.
   *
   * @public
   */
  SnapshotStatus: SnapshotStatus | undefined;

  /**
   * The current application version ID when the snapshot was created.
   *
   * @public
   */
  ApplicationVersionId: number | undefined;

  /**
   * The timestamp of the application snapshot.
   *
   * @public
   */
  SnapshotCreationTimestamp?: Date | undefined;

  /**
   * The Flink Runtime for the application snapshot.
   *
   * @public
   */
  RuntimeEnvironment?: RuntimeEnvironment | undefined;

  /**
   * Specifies the encryption settings of data at rest for the application snapshot.
   *
   * @public
   */
  ApplicationEncryptionConfigurationDescription?: ApplicationEncryptionConfigurationDescription | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationSnapshotResponse {
  /**
   * An object containing information about the application snapshot.
   *
   * @public
   */
  SnapshotDetails: SnapshotDetails | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationVersionRequest {
  /**
   * The name of the application for which you want to get the version description.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The ID of the application version for which you want to get the description.
   *
   * @public
   */
  ApplicationVersionId: number | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationVersionResponse {
  /**
   * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
   *
   * @public
   */
  ApplicationVersionDetail?: ApplicationDetail | undefined;
}

/**
 * For a SQL-based Kinesis Data Analytics application, provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name of the Amazon S3 object that contains the data.
 *
 * @public
 */
export interface S3Configuration {
  /**
   * The ARN of the S3 bucket that contains the data.
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * The name of the object that contains the data.
   *
   * @public
   */
  FileKey: string | undefined;
}

/**
 * @public
 */
export interface DiscoverInputSchemaRequest {
  /**
   * The Amazon Resource Name (ARN) of the streaming source.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The ARN of the role that is used to access the streaming source.
   *
   * @public
   */
  ServiceExecutionRole: string | undefined;

  /**
   * The point at which you want Kinesis Data Analytics to start reading records from the specified streaming source for discovery purposes.
   *
   * @public
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration | undefined;

  /**
   * Specify this parameter to discover a schema from data in an Amazon S3 object.
   *
   * @public
   */
  S3Configuration?: S3Configuration | undefined;

  /**
   * The InputProcessingConfiguration to use to preprocess the records before discovering the schema of the records.
   *
   * @public
   */
  InputProcessingConfiguration?: InputProcessingConfiguration | undefined;
}

/**
 * @public
 */
export interface DiscoverInputSchemaResponse {
  /**
   * The schema inferred from the streaming source. It identifies the format of the data in the streaming source and how each data element maps to corresponding columns in the in-application stream that you can create.
   *
   * @public
   */
  InputSchema?: SourceSchema | undefined;

  /**
   * An array of elements, where each element corresponds to a row in a stream record (a stream record can have more than one row).
   *
   * @public
   */
  ParsedInputRecords?: string[][] | undefined;

  /**
   * The stream data that was modified by the processor specified in the `InputProcessingConfiguration` parameter.
   *
   * @public
   */
  ProcessedInputRecords?: string[] | undefined;

  /**
   * The raw stream data that was sampled to infer the schema.
   *
   * @public
   */
  RawInputRecords?: string[] | undefined;
}

/**
 * A request for a list of operations performed on an application.
 *
 * @public
 */
export interface ListApplicationOperationsRequest {
  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The limit on the number of records to be returned in the response.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The type of operation that is performed on an application.
   *
   * @public
   */
  Operation?: string | undefined;

  /**
   * The status of the operation.
   *
   * @public
   */
  OperationStatus?: OperationStatus | undefined;
}

/**
 * A response that returns a list of operations for an application.
 *
 * @public
 */
export interface ListApplicationOperationsResponse {
  /**
   * A list of `ApplicationOperationInfo` objects that are associated with an application.
   *
   * @public
   */
  ApplicationOperationInfoList?: ApplicationOperationInfo[] | undefined;

  /**
   * A pagination token that can be used in a subsequent request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * The maximum number of applications to list.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * If a previous command returned a pagination token, pass it into this value to retrieve the next set of results. For more information about pagination, see [Using the Amazon Command Line Interface's Pagination Options](https://docs.aws.amazon.com/cli/latest/userguide/pagination.html).
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * A list of `ApplicationSummary` objects.
   *
   * @public
   */
  ApplicationSummaries: ApplicationSummary[] | undefined;

  /**
   * The pagination token for the next set of results, or `null` if there are no additional results. Pass this token into a subsequent command to retrieve the next set of items For more information about pagination, see [Using the Amazon Command Line Interface's Pagination Options](https://docs.aws.amazon.com/cli/latest/userguide/pagination.html).
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationSnapshotsRequest {
  /**
   * The name of an existing application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The maximum number of application snapshots to list.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Use this parameter if you receive a `NextToken` response in a previous request that indicates that there is more output available. Set it to the value of the previous call's `NextToken` response to indicate where the output should continue from.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationSnapshotsResponse {
  /**
   * A collection of objects containing information about the application snapshots.
   *
   * @public
   */
  SnapshotSummaries?: SnapshotDetails[] | undefined;

  /**
   * The token for the next set of results, or `null` if there are no additional results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationVersionsRequest {
  /**
   * The name of the application for which you want to list all versions.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The maximum number of versions to list in this invocation of the operation.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * If a previous invocation of this operation returned a pagination token, pass it into this value to retrieve the next set of results. For more information about pagination, see [Using the Amazon Command Line Interface's Pagination Options](https://docs.aws.amazon.com/cli/latest/userguide/pagination.html).
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationVersionsResponse {
  /**
   * A list of the application versions and the associated configuration summaries. The list includes application versions that were rolled back.
   *
   * To get the complete description of a specific application version, invoke the DescribeApplicationVersion operation.
   *
   * @public
   */
  ApplicationVersionSummaries?: ApplicationVersionSummary[] | undefined;

  /**
   * The pagination token for the next set of results, or `null` if there are no additional results. To retrieve the next set of items, pass this token into a subsequent invocation of this operation. For more information about pagination, see [Using the Amazon Command Line Interface's Pagination Options](https://docs.aws.amazon.com/cli/latest/userguide/pagination.html).
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the application for which to retrieve tags.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The key-value tags assigned to the application.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RollbackApplicationRequest {
  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The current application version ID. You can retrieve the application version ID using DescribeApplication.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;
}

/**
 * @public
 */
export interface RollbackApplicationResponse {
  /**
   * Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.
   *
   * @public
   */
  ApplicationDetail: ApplicationDetail | undefined;

  /**
   * The operation ID that can be used to track the request.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * Describes the starting parameters for a SQL-based Kinesis Data Analytics application.
 *
 * @public
 */
export interface SqlRunConfiguration {
  /**
   * The input source ID. You can get this ID by calling the DescribeApplication operation.
   *
   * @public
   */
  InputId: string | undefined;

  /**
   * The point at which you want the application to start processing records from the streaming source.
   *
   * @public
   */
  InputStartingPositionConfiguration: InputStartingPositionConfiguration | undefined;
}

/**
 * Describes the starting parameters for an Managed Service for Apache Flink application.
 *
 * @public
 */
export interface RunConfiguration {
  /**
   * Describes the starting parameters for a Managed Service for Apache Flink application.
   *
   * @public
   */
  FlinkRunConfiguration?: FlinkRunConfiguration | undefined;

  /**
   * Describes the starting parameters for a SQL-based Kinesis Data Analytics application application.
   *
   * @public
   */
  SqlRunConfigurations?: SqlRunConfiguration[] | undefined;

  /**
   * Describes the restore behavior of a restarting application.
   *
   * @public
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration | undefined;
}

/**
 * @public
 */
export interface StartApplicationRequest {
  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Identifies the run configuration (start parameters) of a Managed Service for Apache Flink application.
   *
   * @public
   */
  RunConfiguration?: RunConfiguration | undefined;
}

/**
 * @public
 */
export interface StartApplicationResponse {
  /**
   * The operation ID that can be used to track the request.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface StopApplicationRequest {
  /**
   * The name of the running application to stop.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Set to `true` to force the application to stop. If you set `Force` to `true`, Managed Service for Apache Flink stops the application without taking a snapshot.
   *
   * > **Note:** Force-stopping your application may lead to data loss or duplication. To prevent data loss or duplicate processing of data during application restarts, we recommend you to take frequent snapshots of your application.
   *
   * You can only force stop a Managed Service for Apache Flink application. You can't force stop a SQL-based Kinesis Data Analytics application.
   *
   * The application must be in the `STARTING`, `UPDATING`, `STOPPING`, `AUTOSCALING`, or `RUNNING` status.
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface StopApplicationResponse {
  /**
   * The operation ID that can be used to track the request.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the application to assign the tags.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The key-value tags to assign to the application.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the Managed Service for Apache Flink application from which to remove the tags.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of keys of tags to remove from the specified application.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * Describes the updates to the starting parameters for a Managed Service for Apache Flink application.
 *
 * @public
 */
export interface RunConfigurationUpdate {
  /**
   * Describes the starting parameters for a Managed Service for Apache Flink application.
   *
   * @public
   */
  FlinkRunConfiguration?: FlinkRunConfiguration | undefined;

  /**
   * Describes updates to the restore behavior of a restarting application.
   *
   * @public
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * The name of the application to update.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The current application version ID. You must provide the `CurrentApplicationVersionId` or the `ConditionalToken`.You can retrieve the application version ID using DescribeApplication. For better concurrency support, use the `ConditionalToken` parameter instead of `CurrentApplicationVersionId`.
   *
   * @public
   */
  CurrentApplicationVersionId?: number | undefined;

  /**
   * Describes application configuration updates.
   *
   * @public
   */
  ApplicationConfigurationUpdate?: ApplicationConfigurationUpdate | undefined;

  /**
   * Describes updates to the service execution role.
   *
   * @public
   */
  ServiceExecutionRoleUpdate?: string | undefined;

  /**
   * Describes updates to the application's starting parameters.
   *
   * @public
   */
  RunConfigurationUpdate?: RunConfigurationUpdate | undefined;

  /**
   * Describes application Amazon CloudWatch logging option updates. You can only update existing CloudWatch logging options with this action. To add a new CloudWatch logging option, use AddApplicationCloudWatchLoggingOption.
   *
   * @public
   */
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[] | undefined;

  /**
   * A value you use to implement strong concurrency for application updates. You must provide the `CurrentApplicationVersionId` or the `ConditionalToken`. You get the application's current `ConditionalToken` using DescribeApplication. For better concurrency support, use the `ConditionalToken` parameter instead of `CurrentApplicationVersionId`.
   *
   * @public
   */
  ConditionalToken?: string | undefined;

  /**
   * Updates the Managed Service for Apache Flink runtime environment used to run your code. To avoid issues you must:
   *
   * - Ensure your new jar and dependencies are compatible with the new runtime selected.
   * - Ensure your new code's state is compatible with the snapshot from which your application will start
   *
   * @public
   */
  RuntimeEnvironmentUpdate?: RuntimeEnvironment | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * Describes application updates.
   *
   * @public
   */
  ApplicationDetail: ApplicationDetail | undefined;

  /**
   * The operation ID that can be used to track the request.
   *
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationMaintenanceConfigurationRequest {
  /**
   * The name of the application for which you want to update the maintenance configuration.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Describes the application maintenance configuration update.
   *
   * @public
   */
  ApplicationMaintenanceConfigurationUpdate: ApplicationMaintenanceConfigurationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationMaintenanceConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationARN?: string | undefined;

  /**
   * The application maintenance configuration description after the update.
   *
   * @public
   */
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription | undefined;
}
