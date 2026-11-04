// smithy-typescript generated code
import type { ApplicationStatus, InputStartingPosition, RecordFormatType } from "./enums";

/**
 * Provides a description of CloudWatch logging options, including the log stream Amazon Resource Name (ARN) and the role ARN.
 *
 * @public
 */
export interface CloudWatchLoggingOption {
  /**
   * ARN of the CloudWatch log to receive application messages.
   *
   * @public
   */
  LogStreamARN: string | undefined;

  /**
   * IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role that is used must have the `PutLogEvents` policy action enabled.
   *
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * The Kinesis Analytics application name.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The version ID of the Kinesis Analytics application.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * Provides the CloudWatch log stream Amazon Resource Name (ARN) and the IAM role ARN. Note: To write application messages to CloudWatch, the IAM role that is used must have the `PutLogEvents` policy action enabled.
   *
   * @public
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption | undefined;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionResponse {}

/**
 * Describes the number of in-application streams to create for a given streaming source. For information about parallelism, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
 *
 * @public
 */
export interface InputParallelism {
  /**
   * Number of in-application streams to create. For more information, see [Limits](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html).
   *
   * @public
   */
  Count?: number | undefined;
}

/**
 * An object that contains the Amazon Resource Name (ARN) of the [AWS Lambda](https://docs.aws.amazon.com/lambda/) function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function.
 *
 * @public
 */
export interface InputLambdaProcessor {
  /**
   * The ARN of the [AWS Lambda](https://docs.aws.amazon.com/lambda/) function that operates on records in the stream.
   *
   * > **Note:** To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: AWS Lambda](/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The ARN of the IAM role that is used to access the AWS Lambda function.
   *
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * Provides a description of a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is [AWS Lambda](https://docs.aws.amazon.com/lambda/).
 *
 * @public
 */
export interface InputProcessingConfiguration {
  /**
   * The [InputLambdaProcessor](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html) that is used to preprocess the records in the stream before being processed by your application code.
   *
   * @public
   */
  InputLambdaProcessor: InputLambdaProcessor | undefined;
}

/**
 * Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
 *
 * Also used to describe the format of the reference data source.
 *
 * @public
 */
export interface RecordColumn {
  /**
   * Name of the column created in the in-application input stream or reference table.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Reference to the data element in the streaming input or the reference data source. This element is required if the [RecordFormatType](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_RecordFormat.html#analytics-Type-RecordFormat-RecordFormatTypel) is `JSON`.
   *
   * @public
   */
  Mapping?: string | undefined;

  /**
   * Type of column created in the in-application input stream or reference table.
   *
   * @public
   */
  SqlType: string | undefined;
}

/**
 * Provides additional mapping information when the record format uses delimiters, such as CSV. For example, the following sample records use CSV format, where the records use the *'\n'* as the row delimiter and a comma (",") as the column delimiter:
 *
 *
 *
 * `"name1", "address1"`
 *
 * `"name2", "address2"`
 *
 * @public
 */
export interface CSVMappingParameters {
  /**
   * Row delimiter. For example, in a CSV format, *'\n'* is the typical row delimiter.
   *
   * @public
   */
  RecordRowDelimiter: string | undefined;

  /**
   * Column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
   *
   * @public
   */
  RecordColumnDelimiter: string | undefined;
}

/**
 * Provides additional mapping information when JSON is the record format on the streaming source.
 *
 * @public
 */
export interface JSONMappingParameters {
  /**
   * Path to the top-level parent that contains the records.
   *
   * @public
   */
  RecordRowPath: string | undefined;
}

/**
 * When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
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
 * Describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
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
   * When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
   *
   * @public
   */
  MappingParameters?: MappingParameters | undefined;
}

/**
 * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
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
 * Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
 *
 * @public
 */
export interface KinesisFirehoseInput {
  /**
   * ARN of the input delivery stream.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to make sure that the role has the necessary permissions to access the stream.
   *
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * Identifies an Amazon Kinesis stream as the streaming source. You provide the stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis Analytics to access the stream on your behalf.
 *
 * @public
 */
export interface KinesisStreamsInput {
  /**
   * ARN of the input Amazon Kinesis stream to read.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.
   *
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
 *
 * @public
 */
export interface Input {
  /**
   * Name prefix to use when creating an in-application stream. Suppose that you specify a prefix "MyInApplicationStream." Amazon Kinesis Analytics then creates one or more (as per the `InputParallelism` count you specified) in-application streams with names "MyInApplicationStream_001," "MyInApplicationStream_002," and so on.
   *
   * @public
   */
  NamePrefix: string | undefined;

  /**
   * The [InputProcessingConfiguration](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html) for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is [InputLambdaProcessor](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html).
   *
   * @public
   */
  InputProcessingConfiguration?: InputProcessingConfiguration | undefined;

  /**
   * If the streaming source is an Amazon Kinesis stream, identifies the stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.
   *
   * Note: Either `KinesisStreamsInput` or `KinesisFirehoseInput` is required.
   *
   * @public
   */
  KinesisStreamsInput?: KinesisStreamsInput | undefined;

  /**
   * If the streaming source is an Amazon Kinesis Firehose delivery stream, identifies the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.
   *
   * Note: Either `KinesisStreamsInput` or `KinesisFirehoseInput` is required.
   *
   * @public
   */
  KinesisFirehoseInput?: KinesisFirehoseInput | undefined;

  /**
   * Describes the number of in-application streams to create.
   *
   * Data from your source is routed to these in-application input streams.
   *
   * (see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
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
   * Name of your existing Amazon Kinesis Analytics application to which you want to add the streaming source.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Current version of your Amazon Kinesis Analytics application. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation to find the current application version.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The [Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_Input.html) to add.
   *
   * @public
   */
  Input: Input | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputResponse {}

/**
 * @public
 */
export interface AddApplicationInputProcessingConfigurationRequest {
  /**
   * Name of the application to which you want to add the input processing configuration.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Version of the application to which you want to add the input processing configuration. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The ID of the input configuration to add the input processing configuration to. You can get a list of the input IDs for an application using the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation.
   *
   * @public
   */
  InputId: string | undefined;

  /**
   * The [InputProcessingConfiguration](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html) to add to the application.
   *
   * @public
   */
  InputProcessingConfiguration: InputProcessingConfiguration | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputProcessingConfigurationResponse {}

/**
 * Describes the data format when records are written to the destination. For more information, see [Configuring Application Output](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html).
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
 * When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf.
 *
 * @public
 */
export interface KinesisFirehoseOutput {
  /**
   * ARN of the destination Amazon Kinesis Firehose delivery stream to write to.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.
   *
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * When configuring application output, identifies an Amazon Kinesis stream as the destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the stream on your behalf.
 *
 * @public
 */
export interface KinesisStreamsOutput {
  /**
   * ARN of the destination Amazon Kinesis stream to write to.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.
   *
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf.
 *
 * @public
 */
export interface LambdaOutput {
  /**
   * Amazon Resource Name (ARN) of the destination Lambda function to write to.
   *
   * > **Note:** To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: AWS Lambda](/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role.
   *
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream.
 *
 *
 *
 * For limits on how many destinations an application can write and other limitations, see [Limits](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html).
 *
 * @public
 */
export interface Output {
  /**
   * Name of the in-application stream.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Identifies an Amazon Kinesis stream as the destination.
   *
   * @public
   */
  KinesisStreamsOutput?: KinesisStreamsOutput | undefined;

  /**
   * Identifies an Amazon Kinesis Firehose delivery stream as the destination.
   *
   * @public
   */
  KinesisFirehoseOutput?: KinesisFirehoseOutput | undefined;

  /**
   * Identifies an AWS Lambda function as the destination.
   *
   * @public
   */
  LambdaOutput?: LambdaOutput | undefined;

  /**
   * Describes the data format when records are written to the destination. For more information, see [Configuring Application Output](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html).
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
   * Name of the application to which you want to add the output configuration.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Version of the application to which you want to add the output configuration. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * An array of objects, each describing one output configuration. In the output configuration, you specify the name of an in-application stream, a destination (that is, an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), and record the formation to use when writing to the destination.
   *
   * @public
   */
  Output: Output | undefined;
}

/**
 * @public
 */
export interface AddApplicationOutputResponse {}

/**
 * Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.
 *
 * An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the [UpdateApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html) operation to trigger reloading of data into your application.
 *
 * @public
 */
export interface S3ReferenceDataSource {
  /**
   * Amazon Resource Name (ARN) of the S3 bucket.
   *
   * @public
   */
  BucketARN: string | undefined;

  /**
   * Object key name containing reference data.
   *
   * @public
   */
  FileKey: string | undefined;

  /**
   * ARN of the IAM role that the service can assume to read data on your behalf. This role must have permission for the `s3:GetObject` action on the object and trust policy that allows Amazon Kinesis Analytics service principal to assume this role.
   *
   * @public
   */
  ReferenceRoleARN: string | undefined;
}

/**
 * Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
 *
 * @public
 */
export interface ReferenceDataSource {
  /**
   * Name of the in-application table to create.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf. An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the `UpdateApplication` operation to trigger reloading of data into your application.
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
   * Name of an existing application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Version of the application for which you are adding the reference data source. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The reference data source can be an object in your Amazon S3 bucket. Amazon Kinesis Analytics reads the object and copies the data into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is created. You must also provide an IAM role with the necessary permissions that Amazon Kinesis Analytics can assume to read the object from your S3 bucket on your behalf.
   *
   * @public
   */
  ReferenceDataSource: ReferenceDataSource | undefined;
}

/**
 * @public
 */
export interface AddApplicationReferenceDataSourceResponse {}

/**
 * Description of the CloudWatch logging option.
 *
 * @public
 */
export interface CloudWatchLoggingOptionDescription {
  /**
   * ID of the CloudWatch logging option description.
   *
   * @public
   */
  CloudWatchLoggingOptionId?: string | undefined;

  /**
   * ARN of the CloudWatch log to receive application messages.
   *
   * @public
   */
  LogStreamARN: string | undefined;

  /**
   * IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the `PutLogEvents` policy action enabled.
   *
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * An object that contains the Amazon Resource Name (ARN) of the [AWS Lambda](https://docs.aws.amazon.com/lambda/) function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda expression.
 *
 * @public
 */
export interface InputLambdaProcessorDescription {
  /**
   * The ARN of the [AWS Lambda](https://docs.aws.amazon.com/lambda/) function that is used to preprocess the records in the stream.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * The ARN of the IAM role that is used to access the AWS Lambda function.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * Provides configuration information about an input processor. Currently, the only input processor available is [AWS Lambda](https://docs.aws.amazon.com/lambda/).
 *
 * @public
 */
export interface InputProcessingConfigurationDescription {
  /**
   * Provides configuration information about the associated [InputLambdaProcessorDescription](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessorDescription.html).
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
   * - `NOW` - Start reading just after the most recent record in the stream, start at the request time stamp that the customer issued.
   * - `TRIM_HORIZON` - Start reading at the last untrimmed record in the stream, which is the oldest record available in the stream. This option is not available for an Amazon Kinesis Firehose delivery stream.
   * - `LAST_STOPPED_POINT` - Resume reading from where the application last stopped reading.
   *
   * @public
   */
  InputStartingPosition?: InputStartingPosition | undefined;
}

/**
 * Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source in the application input configuration.
 *
 * @public
 */
export interface KinesisFirehoseInputDescription {
  /**
   * Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics assumes to access the stream.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * Describes the Amazon Kinesis stream that is configured as the streaming source in the application input configuration.
 *
 * @public
 */
export interface KinesisStreamsInputDescription {
  /**
   * Amazon Resource Name (ARN) of the Amazon Kinesis stream.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * Describes the application input configuration. For more information, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
 *
 * @public
 */
export interface InputDescription {
  /**
   * Input ID associated with the application input. This is the ID that Amazon Kinesis Analytics assigns to each input configuration you add to your application.
   *
   * @public
   */
  InputId?: string | undefined;

  /**
   * In-application name prefix.
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
   * If an Amazon Kinesis stream is configured as streaming source, provides Amazon Kinesis stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.
   *
   * @public
   */
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription | undefined;

  /**
   * If an Amazon Kinesis Firehose delivery stream is configured as a streaming source, provides the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to access the stream on your behalf.
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
   * Point at which the application is configured to read from the input stream.
   *
   * @public
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration | undefined;
}

/**
 * For an application output, describes the Amazon Kinesis Firehose delivery stream configured as its destination.
 *
 * @public
 */
export interface KinesisFirehoseOutputDescription {
  /**
   * Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * For an application output, describes the Amazon Kinesis stream configured as its destination.
 *
 * @public
 */
export interface KinesisStreamsOutputDescription {
  /**
   * Amazon Resource Name (ARN) of the Amazon Kinesis stream.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * For an application output, describes the AWS Lambda function configured as its destination.
 *
 * @public
 */
export interface LambdaOutputDescription {
  /**
   * Amazon Resource Name (ARN) of the destination Lambda function.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * Describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream.
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
   * Name of the in-application stream configured as output.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Describes Amazon Kinesis stream configured as the destination where output is written.
   *
   * @public
   */
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription | undefined;

  /**
   * Describes the Amazon Kinesis Firehose delivery stream configured as the destination where output is written.
   *
   * @public
   */
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription | undefined;

  /**
   * Describes the AWS Lambda function configured as the destination where output is written.
   *
   * @public
   */
  LambdaOutputDescription?: LambdaOutputDescription | undefined;

  /**
   * Data format used for writing data to the destination.
   *
   * @public
   */
  DestinationSchema?: DestinationSchema | undefined;
}

/**
 * Provides the bucket name and object key name that stores the reference data.
 *
 * @public
 */
export interface S3ReferenceDataSourceDescription {
  /**
   * Amazon Resource Name (ARN) of the S3 bucket.
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
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf to populate the in-application reference table.
   *
   * @public
   */
  ReferenceRoleARN: string | undefined;
}

/**
 * Describes the reference data source configured for an application.
 *
 * @public
 */
export interface ReferenceDataSourceDescription {
  /**
   * ID of the reference data source. This is the ID that Amazon Kinesis Analytics assigns when you add the reference data source to your application using the [AddApplicationReferenceDataSource](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html) operation.
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
   * Provides the S3 bucket name, the object key name that contains the reference data. It also provides the Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application reference table.
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
 * > **Note:** This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see [Amazon Kinesis Data Analytics API V2 Documentation](/kinesisanalytics/latest/apiv2/Welcome.html).
 *
 *
 *
 * Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.
 *
 * @public
 */
export interface ApplicationDetail {
  /**
   * Name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Description of the application.
   *
   * @public
   */
  ApplicationDescription?: string | undefined;

  /**
   * ARN of the application.
   *
   * @public
   */
  ApplicationARN: string | undefined;

  /**
   * Status of the application.
   *
   * @public
   */
  ApplicationStatus: ApplicationStatus | undefined;

  /**
   * Time stamp when the application version was created.
   *
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * Time stamp when the application was last updated.
   *
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * Describes the application input configuration. For more information, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
   *
   * @public
   */
  InputDescriptions?: InputDescription[] | undefined;

  /**
   * Describes the application output configuration. For more information, see [Configuring Application Output](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html).
   *
   * @public
   */
  OutputDescriptions?: OutputDescription[] | undefined;

  /**
   * Describes reference data sources configured for the application. For more information, see [Configuring Application Input](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html).
   *
   * @public
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[] | undefined;

  /**
   * Describes the CloudWatch log streams that are configured to receive application messages. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see [Working with Amazon CloudWatch Logs](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html).
   *
   * @public
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[] | undefined;

  /**
   * Returns the application code that you provided to perform data analysis on any of the in-application streams in your application.
   *
   * @public
   */
  ApplicationCode?: string | undefined;

  /**
   * Provides the current application version.
   *
   * @public
   */
  ApplicationVersionId: number | undefined;
}

/**
 * > **Note:** This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see [Amazon Kinesis Data Analytics API V2 Documentation](/kinesisanalytics/latest/apiv2/Welcome.html).
 *
 *
 *
 * Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * Name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * ARN of the application.
   *
   * @public
   */
  ApplicationARN: string | undefined;

  /**
   * Status of the application.
   *
   * @public
   */
  ApplicationStatus: ApplicationStatus | undefined;
}

/**
 * Describes CloudWatch logging option updates.
 *
 * @public
 */
export interface CloudWatchLoggingOptionUpdate {
  /**
   * ID of the CloudWatch logging option to update
   *
   * @public
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * ARN of the CloudWatch log to receive application messages.
   *
   * @public
   */
  LogStreamARNUpdate?: string | undefined;

  /**
   * IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the `PutLogEvents` policy action enabled.
   *
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * Provides updates to the parallelism count.
 *
 * @public
 */
export interface InputParallelismUpdate {
  /**
   * Number of in-application streams to create for the specified streaming source.
   *
   * @public
   */
  CountUpdate?: number | undefined;
}

/**
 * Represents an update to the [InputLambdaProcessor](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html) that is used to preprocess the records in the stream.
 *
 * @public
 */
export interface InputLambdaProcessorUpdate {
  /**
   * The Amazon Resource Name (ARN) of the new [AWS Lambda](https://docs.aws.amazon.com/lambda/) function that is used to preprocess the records in the stream.
   *
   * > **Note:** To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: AWS Lambda](/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
   *
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * The ARN of the new IAM role that is used to access the AWS Lambda function.
   *
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * Describes updates to an [InputProcessingConfiguration](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html).
 *
 * @public
 */
export interface InputProcessingConfigurationUpdate {
  /**
   * Provides update information for an [InputLambdaProcessor](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html).
   *
   * @public
   */
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate | undefined;
}

/**
 * Describes updates for the application's input schema.
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
   * Specifies the encoding of the records in the streaming source. For example, UTF-8.
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
 * When updating application input configuration, provides information about an Amazon Kinesis Firehose delivery stream as the streaming source.
 *
 * @public
 */
export interface KinesisFirehoseInputUpdate {
  /**
   * Amazon Resource Name (ARN) of the input Amazon Kinesis Firehose delivery stream to read.
   *
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.
   *
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * When updating application input configuration, provides information about an Amazon Kinesis stream as the streaming source.
 *
 * @public
 */
export interface KinesisStreamsInputUpdate {
  /**
   * Amazon Resource Name (ARN) of the input Amazon Kinesis stream to read.
   *
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.
   *
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * Describes updates to a specific input configuration (identified by the `InputId` of an application).
 *
 * @public
 */
export interface InputUpdate {
  /**
   * Input ID of the application input to be updated.
   *
   * @public
   */
  InputId: string | undefined;

  /**
   * Name prefix for in-application streams that Amazon Kinesis Analytics creates for the specific streaming source.
   *
   * @public
   */
  NamePrefixUpdate?: string | undefined;

  /**
   * Describes updates for an input processing configuration.
   *
   * @public
   */
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate | undefined;

  /**
   * If an Amazon Kinesis stream is the streaming source to be updated, provides an updated stream Amazon Resource Name (ARN) and IAM role ARN.
   *
   * @public
   */
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate | undefined;

  /**
   * If an Amazon Kinesis Firehose delivery stream is the streaming source to be updated, provides an updated stream ARN and IAM role ARN.
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
   * Describes the parallelism updates (the number in-application streams Amazon Kinesis Analytics creates for the specific streaming source).
   *
   * @public
   */
  InputParallelismUpdate?: InputParallelismUpdate | undefined;
}

/**
 * When updating an output configuration using the [UpdateApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html) operation, provides information about an Amazon Kinesis Firehose delivery stream configured as the destination.
 *
 * @public
 */
export interface KinesisFirehoseOutputUpdate {
  /**
   * Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream to write to.
   *
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.
   *
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * When updating an output configuration using the [UpdateApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html) operation, provides information about an Amazon Kinesis stream configured as the destination.
 *
 * @public
 */
export interface KinesisStreamsOutputUpdate {
  /**
   * Amazon Resource Name (ARN) of the Amazon Kinesis stream where you want to write the output.
   *
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.
   *
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * When updating an output configuration using the [UpdateApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html) operation, provides information about an AWS Lambda function configured as the destination.
 *
 * @public
 */
export interface LambdaOutputUpdate {
  /**
   * Amazon Resource Name (ARN) of the destination Lambda function.
   *
   * > **Note:** To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: AWS Lambda](/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
   *
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role.
   *
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * Describes updates to the output configuration identified by the `OutputId`.
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
   * Describes an Amazon Kinesis stream as the destination for the output.
   *
   * @public
   */
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate | undefined;

  /**
   * Describes an Amazon Kinesis Firehose delivery stream as the destination for the output.
   *
   * @public
   */
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate | undefined;

  /**
   * Describes an AWS Lambda function as the destination for the output.
   *
   * @public
   */
  LambdaOutputUpdate?: LambdaOutputUpdate | undefined;

  /**
   * Describes the data format when records are written to the destination. For more information, see [Configuring Application Output](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html).
   *
   * @public
   */
  DestinationSchemaUpdate?: DestinationSchema | undefined;
}

/**
 * Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
 *
 * @public
 */
export interface S3ReferenceDataSourceUpdate {
  /**
   * Amazon Resource Name (ARN) of the S3 bucket.
   *
   * @public
   */
  BucketARNUpdate?: string | undefined;

  /**
   * Object key name.
   *
   * @public
   */
  FileKeyUpdate?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application.
   *
   * @public
   */
  ReferenceRoleARNUpdate?: string | undefined;
}

/**
 * When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.
 *
 * @public
 */
export interface ReferenceDataSourceUpdate {
  /**
   * ID of the reference data source being updated. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation to get this value.
   *
   * @public
   */
  ReferenceId: string | undefined;

  /**
   * In-application table name that is created by this update.
   *
   * @public
   */
  TableNameUpdate?: string | undefined;

  /**
   * Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.
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
 * Describes updates to apply to an existing Amazon Kinesis Analytics application.
 *
 * @public
 */
export interface ApplicationUpdate {
  /**
   * Describes application input configuration updates.
   *
   * @public
   */
  InputUpdates?: InputUpdate[] | undefined;

  /**
   * Describes application code updates.
   *
   * @public
   */
  ApplicationCodeUpdate?: string | undefined;

  /**
   * Describes application output configuration updates.
   *
   * @public
   */
  OutputUpdates?: OutputUpdate[] | undefined;

  /**
   * Describes application reference data source updates.
   *
   * @public
   */
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[] | undefined;

  /**
   * Describes application CloudWatch logging option updates.
   *
   * @public
   */
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[] | undefined;
}

/**
 * A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see [Using Tagging](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html).
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
 * TBD
 *
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * Name of your Amazon Kinesis Analytics application (for example, `sample-app`).
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Summary description of the application.
   *
   * @public
   */
  ApplicationDescription?: string | undefined;

  /**
   * Use this parameter to configure the application input.
   *
   * You can configure your application to receive input from a single streaming source. In this configuration, you map this streaming source to an in-application stream that is created. Your application code can then query the in-application stream like a table (you can think of it as a constantly updating table).
   *
   * For the streaming source, you provide its Amazon Resource Name (ARN) and format of data on the stream (for example, JSON, CSV, etc.). You also must provide an IAM role that Amazon Kinesis Analytics can assume to read this stream on your behalf.
   *
   * To create the in-application stream, you need to specify a schema to transform your data into a schematized version used in SQL. In the schema, you provide the necessary mapping of the data elements in the streaming source to record columns in the in-app stream.
   *
   * @public
   */
  Inputs?: Input[] | undefined;

  /**
   * You can configure application output to write data from any of the in-application streams to up to three destinations.
   *
   * These destinations can be Amazon Kinesis streams, Amazon Kinesis Firehose delivery streams, AWS Lambda destinations, or any combination of the three.
   *
   * In the configuration, you specify the in-application stream name, the destination stream or Lambda function Amazon Resource Name (ARN), and the format to use when writing data. You must also provide an IAM role that Amazon Kinesis Analytics can assume to write to the destination stream or Lambda function on your behalf.
   *
   * In the output configuration, you also provide the output stream or Lambda function ARN. For stream destinations, you provide the format of data in the stream (for example, JSON, CSV). You also must provide an IAM role that Amazon Kinesis Analytics can assume to write to the stream or Lambda function on your behalf.
   *
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * Use this parameter to configure a CloudWatch log stream to monitor application configuration errors. For more information, see [Working with Amazon CloudWatch Logs](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html).
   *
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[] | undefined;

  /**
   * One or more SQL statements that read input data, transform it, and generate output. For example, you can write a SQL statement that reads data from one in-application stream, generates a running average of the number of advertisement clicks by vendor, and insert resulting rows in another in-application stream using pumps. For more information about the typical pattern, see [Application Code](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-app-code.html).
   *
   *
   *
   * You can provide such series of SQL statements, where output of one statement can be used as the input for the next statement. You store intermediate results by creating in-application streams and pumps.
   *
   *
   *
   * Note that the application code must create the streams with names specified in the `Outputs`. For example, if your `Outputs` defines output streams named `ExampleOutputStream1` and `ExampleOutputStream2`, then your application code must create these streams.
   *
   * @public
   */
  ApplicationCode?: string | undefined;

  /**
   * A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see [Using Tagging](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html).
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * TBD
 *
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * In response to your `CreateApplication` request, Amazon Kinesis Analytics returns a response with a summary of the application it created, including the application Amazon Resource Name (ARN), name, and status.
   *
   * @public
   */
  ApplicationSummary: ApplicationSummary | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * Name of the Amazon Kinesis Analytics application to delete.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * You can use the `DescribeApplication` operation to get this value.
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
   * The Kinesis Analytics application name.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The version ID of the Kinesis Analytics application.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The `CloudWatchLoggingOptionId` of the CloudWatch logging option to delete. You can get the `CloudWatchLoggingOptionId` by using the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation.
   *
   * @public
   */
  CloudWatchLoggingOptionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationCloudWatchLoggingOptionResponse {}

/**
 * @public
 */
export interface DeleteApplicationInputProcessingConfigurationRequest {
  /**
   * The Kinesis Analytics application name.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The version ID of the Kinesis Analytics application.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The ID of the input configuration from which to delete the input processing configuration. You can get a list of the input IDs for an application by using the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation.
   *
   * @public
   */
  InputId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationInputProcessingConfigurationResponse {}

/**
 * @public
 */
export interface DeleteApplicationOutputRequest {
  /**
   * Amazon Kinesis Analytics application name.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Amazon Kinesis Analytics application version. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * The ID of the configuration to delete. Each output configuration that is added to the application, either when the application is created or later using the [AddApplicationOutput](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationOutput.html) operation, has a unique ID. You need to provide the ID to uniquely identify the output configuration that you want to delete from the application configuration. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation to get the specific `OutputId`.
   *
   * @public
   */
  OutputId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationOutputResponse {}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceRequest {
  /**
   * Name of an existing application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Version of the application. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation to get the current application version. If the version specified is not the current version, the `ConcurrentModificationException` is returned.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * ID of the reference data source. When you add a reference data source to your application using the [AddApplicationReferenceDataSource](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html), Amazon Kinesis Analytics assigns an ID. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation to get the reference ID.
   *
   * @public
   */
  ReferenceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceResponse {}

/**
 * @public
 */
export interface DescribeApplicationRequest {
  /**
   * Name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * Provides a description of the application, such as the application Amazon Resource Name (ARN), status, latest version, and input and output configuration details.
   *
   * @public
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * Provides a description of an Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket, and the name of the Amazon S3 object that contains the data.
 *
 * @public
 */
export interface S3Configuration {
  /**
   * IAM ARN of the role used to access the data.
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * ARN of the S3 bucket that contains the data.
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
   * Amazon Resource Name (ARN) of the streaming source.
   *
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * Point at which you want Amazon Kinesis Analytics to start reading records from the specified streaming source discovery purposes.
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
   * The [InputProcessingConfiguration](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html) to use to preprocess the records before discovering the schema of the records.
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
   * Schema inferred from the streaming source. It identifies the format of the data in the streaming source and how each data element maps to corresponding columns in the in-application stream that you can create.
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
   * Stream data that was modified by the processor specified in the `InputProcessingConfiguration` parameter.
   *
   * @public
   */
  ProcessedInputRecords?: string[] | undefined;

  /**
   * Raw stream data that was sampled to infer the schema.
   *
   * @public
   */
  RawInputRecords?: string[] | undefined;
}

/**
 * When you start your application, you provide this configuration, which identifies the input source and the point in the input source at which you want the application to start processing records.
 *
 * @public
 */
export interface InputConfiguration {
  /**
   * Input source ID. You can get this ID by calling the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Point at which you want the application to start processing records from the streaming source.
   *
   * @public
   */
  InputStartingPositionConfiguration: InputStartingPositionConfiguration | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * Maximum number of applications to list.
   *
   * @public
   */
  Limit?: number | undefined;

  /**
   * Name of the application to start the list with. When using pagination to retrieve the list, you don't need to specify this parameter in the first request. However, in subsequent requests, you add the last application name from the previous response to get the next page of applications.
   *
   * @public
   */
  ExclusiveStartApplicationName?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * List of `ApplicationSummary` objects.
   *
   * @public
   */
  ApplicationSummaries: ApplicationSummary[] | undefined;

  /**
   * Returns true if there are more applications to retrieve.
   *
   * @public
   */
  HasMoreApplications: boolean | undefined;
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
export interface StartApplicationRequest {
  /**
   * Name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Identifies the specific input, by ID, that the application starts consuming. Amazon Kinesis Analytics starts reading the streaming source associated with the input. You can also specify where in the streaming source you want Amazon Kinesis Analytics to start reading.
   *
   * @public
   */
  InputConfigurations: InputConfiguration[] | undefined;
}

/**
 * @public
 */
export interface StartApplicationResponse {}

/**
 * @public
 */
export interface StopApplicationRequest {
  /**
   * Name of the running application to stop.
   *
   * @public
   */
  ApplicationName: string | undefined;
}

/**
 * @public
 */
export interface StopApplicationResponse {}

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
   * The ARN of the Kinesis Analytics application from which to remove the tags.
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
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * Name of the Amazon Kinesis Analytics application to update.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The current application version ID. You can use the [DescribeApplication](https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html) operation to get this value.
   *
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * Describes application updates.
   *
   * @public
   */
  ApplicationUpdate: ApplicationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}
