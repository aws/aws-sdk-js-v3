// smithy-typescript generated code
import { ApplicationStatus, InputStartingPosition, RecordFormatType } from "./enums";

/**
 * <p>Provides a description of CloudWatch logging options, including the log stream
 *             Amazon Resource Name (ARN) and the role ARN.</p>
 * @public
 */
export interface CloudWatchLoggingOption {
  /**
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   * @public
   */
  LogStreamARN: string | undefined;

  /**
   * <p>IAM ARN of the role to use to send application messages. Note: To write application
   *             messages to CloudWatch, the IAM role that is used must have the
   *             <code>PutLogEvents</code> policy action enabled.</p>
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * <p>The Kinesis Analytics application name.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version ID of the Kinesis Analytics application.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>Provides the CloudWatch log stream Amazon Resource Name (ARN) and the IAM role ARN.
   *             Note: To write application messages to CloudWatch, the IAM role that is used must have
   *             the <code>PutLogEvents</code> policy action enabled.</p>
   * @public
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption | undefined;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionResponse {}

/**
 * <p>Describes the number of in-application streams to create for a given
 *             streaming source. For information about parallelism,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *         </p>
 * @public
 */
export interface InputParallelism {
  /**
   * <p>Number of in-application streams to create.
   *             For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.
   *         </p>
   * @public
   */
  Count?: number | undefined;
}

/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that
 *             is used to preprocess records in the stream, and the ARN of the IAM role that is used to
 *             access the AWS Lambda function. </p>
 * @public
 */
export interface InputLambdaProcessor {
  /**
   * <p>The ARN of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that operates
   *             on records in the stream.</p>
   *             <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to access the AWS Lambda function.</p>
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * <p>Provides a description of a processor that is used to preprocess the records in the
 *             stream before being processed by your application code. Currently, the only input
 *             processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS
 *                 Lambda</a>.</p>
 * @public
 */
export interface InputProcessingConfiguration {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records
   *             in the stream before being processed by your application code.</p>
   * @public
   */
  InputLambdaProcessor: InputLambdaProcessor | undefined;
}

/**
 * <p>Describes the mapping of each data element in the streaming
 *             source to the corresponding column in the in-application stream.</p>
 *         <p>Also used to describe the format of the reference data source.</p>
 * @public
 */
export interface RecordColumn {
  /**
   * <p>Name of the column created in the in-application input stream or reference table.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Reference to the data element in the streaming input or the reference data source. This element
   *             is required if the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_RecordFormat.html#analytics-Type-RecordFormat-RecordFormatTypel">RecordFormatType</a> is <code>JSON</code>.</p>
   * @public
   */
  Mapping?: string | undefined;

  /**
   * <p>Type of column created in the in-application input stream or reference table.</p>
   * @public
   */
  SqlType: string | undefined;
}

/**
 * <p>Provides additional mapping information when the record format
 *             uses delimiters, such as CSV. For example, the following sample records
 *             use CSV format, where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as the column delimiter:
 *         </p>
 *
 *         <p>
 *             <code>"name1", "address1"</code>
 *          </p>
 *         <p>
 *             <code>"name2", "address2"</code>
 *          </p>
 * @public
 */
export interface CSVMappingParameters {
  /**
   * <p>Row delimiter. For example, in a CSV format, <i>'\n'</i> is the typical row delimiter.</p>
   * @public
   */
  RecordRowDelimiter: string | undefined;

  /**
   * <p>Column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.</p>
   * @public
   */
  RecordColumnDelimiter: string | undefined;
}

/**
 * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
 * @public
 */
export interface JSONMappingParameters {
  /**
   * <p>Path to the top-level parent that contains the records.</p>
   * @public
   */
  RecordRowPath: string | undefined;
}

/**
 * <p>When configuring application input
 *             at the time of creating or updating an application,
 *             provides additional mapping information specific to
 *             the record format (such as JSON, CSV, or record fields delimited
 *             by some delimiter) on the streaming source.</p>
 * @public
 */
export interface MappingParameters {
  /**
   * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
   * @public
   */
  JSONMappingParameters?: JSONMappingParameters | undefined;

  /**
   * <p>Provides additional mapping information when the record format uses delimiters
   *             (for example, CSV).</p>
   * @public
   */
  CSVMappingParameters?: CSVMappingParameters | undefined;
}

/**
 * <p>
 *             Describes the record format and relevant mapping information that
 *             should be applied to schematize the records on the stream.
 *         </p>
 * @public
 */
export interface RecordFormat {
  /**
   * <p>The type of record format.</p>
   * @public
   */
  RecordFormatType: RecordFormatType | undefined;

  /**
   * <p>When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.</p>
   * @public
   */
  MappingParameters?: MappingParameters | undefined;
}

/**
 * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
 * @public
 */
export interface SourceSchema {
  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   * @public
   */
  RecordFormat: RecordFormat | undefined;

  /**
   * <p>Specifies the encoding of the records in the streaming source. For example, UTF-8.</p>
   * @public
   */
  RecordEncoding?: string | undefined;

  /**
   * <p>A list of <code>RecordColumn</code> objects.</p>
   * @public
   */
  RecordColumns: RecordColumn[] | undefined;
}

/**
 * <p> Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You
 *             provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that
 *             enables Amazon Kinesis Analytics to access the stream on your behalf.</p>
 * @public
 */
export interface KinesisFirehoseInput {
  /**
   * <p>ARN of the input delivery stream.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream
   *             on your behalf. You need to make sure that the role has the necessary permissions to
   *             access the stream.</p>
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * <p> Identifies an Amazon Kinesis stream as the streaming source. You provide the
 *             stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis
 *             Analytics to access the stream on your behalf.</p>
 * @public
 */
export interface KinesisStreamsInput {
  /**
   * <p>ARN of the input Amazon Kinesis stream to read.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * <p>When you configure the application input, you specify the streaming source,  the
 *             in-application stream name that is created, and the mapping between the two.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p>
 * @public
 */
export interface Input {
  /**
   * <p>Name prefix to use when creating an in-application stream. Suppose that you specify
   *             a prefix "MyInApplicationStream." Amazon Kinesis Analytics then creates one or more (as
   *             per the <code>InputParallelism</code> count you specified) in-application streams with
   *             names "MyInApplicationStream_001," "MyInApplicationStream_002," and so on. </p>
   * @public
   */
  NamePrefix: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> for the input. An input
   *             processor transforms records as they are received from the stream, before the
   *             application's SQL code executes. Currently, the only input processing configuration
   *             available is <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   * @public
   */
  InputProcessingConfiguration?: InputProcessingConfiguration | undefined;

  /**
   * <p>If the streaming source is an Amazon Kinesis stream,
   *             identifies the stream's Amazon Resource Name (ARN) and an IAM role
   *             that enables Amazon Kinesis Analytics to access the stream on your behalf.</p>
   *         <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   * @public
   */
  KinesisStreamsInput?: KinesisStreamsInput | undefined;

  /**
   * <p>If the streaming source is an Amazon Kinesis Firehose delivery stream, identifies
   *             the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to
   *             access the stream on your behalf.</p>
   *         <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   * @public
   */
  KinesisFirehoseInput?: KinesisFirehoseInput | undefined;

  /**
   * <p>Describes the number of in-application streams to create. </p>
   *          <p>Data from your source is routed to these in-application input streams.</p>
   *         <p>    (see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.</p>
   * @public
   */
  InputParallelism?: InputParallelism | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.</p>
   *         <p>Also used to describe the format of the reference data source.</p>
   * @public
   */
  InputSchema: SourceSchema | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AddApplicationInputRequest {
  /**
   * <p>Name of your existing Amazon Kinesis Analytics application to which you want to add the streaming source.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Current version of your Amazon Kinesis Analytics application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation
   *             to find the current application version.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_Input.html">Input</a> to add.</p>
   * @public
   */
  Input: Input | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AddApplicationInputResponse {}

/**
 * @public
 */
export interface AddApplicationInputProcessingConfigurationRequest {
  /**
   * <p>Name of the application to which you want to add the input processing configuration.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Version of the application to which you want to add the input processing configuration. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>
   *             operation to get the current application version.  If the version specified is not the current version, the
   *             <code>ConcurrentModificationException</code> is returned.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the input configuration to add the input processing configuration to. You
   *             can get a list of the input IDs for an application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   * @public
   */
  InputId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to add to the application.</p>
   * @public
   */
  InputProcessingConfiguration: InputProcessingConfiguration | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputProcessingConfigurationResponse {}

/**
 * <p>Describes the data format when records are written to the destination.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
 *
 *
 *         </p>
 * @public
 */
export interface DestinationSchema {
  /**
   * <p>Specifies the format of the records on the output stream.</p>
   * @public
   */
  RecordFormatType: RecordFormatType | undefined;
}

/**
 * <p>When configuring application output,
 *             identifies an Amazon Kinesis Firehose delivery stream as the destination.
 *             You provide the stream Amazon Resource Name (ARN) and an IAM role
 *             that enables Amazon Kinesis Analytics to write to the stream on your behalf.</p>
 * @public
 */
export interface KinesisFirehoseOutput {
  /**
   * <p>ARN of the destination Amazon Kinesis Firehose delivery stream to write to.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.</p>
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * <p>When configuring application output, identifies an Amazon Kinesis stream as the
 *             destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN
 *             that Amazon Kinesis Analytics can use to write to the stream on your behalf.</p>
 * @public
 */
export interface KinesisStreamsOutput {
  /**
   * <p>ARN of the destination Amazon Kinesis stream to write to.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.</p>
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * <p>When configuring application output, identifies an AWS Lambda function as the
 *             destination. You provide the function Amazon Resource Name (ARN) and also an IAM role
 *             ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. </p>
 * @public
 */
export interface LambdaOutput {
  /**
   * <p>Amazon Resource Name (ARN) of the destination Lambda function to write
   *             to.</p>
   *         <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role. </p>
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * <p>
 *             Describes application output configuration in which you identify
 *             an in-application stream and a destination where you want the
 *             in-application stream data to be written. The destination can be
 *             an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream.
 *         </p>
 *
 *         <p></p>
 *         <p>For limits on how many destinations an application can write and other
 *             limitations, see
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.
 *         </p>
 * @public
 */
export interface Output {
  /**
   * <p>Name of the in-application stream.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Identifies an Amazon Kinesis stream
   *             as the destination.</p>
   * @public
   */
  KinesisStreamsOutput?: KinesisStreamsOutput | undefined;

  /**
   * <p>Identifies an Amazon Kinesis Firehose delivery stream as the destination.</p>
   * @public
   */
  KinesisFirehoseOutput?: KinesisFirehoseOutput | undefined;

  /**
   * <p>Identifies an AWS Lambda function as the destination.</p>
   * @public
   */
  LambdaOutput?: LambdaOutput | undefined;

  /**
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   * @public
   */
  DestinationSchema: DestinationSchema | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AddApplicationOutputRequest {
  /**
   * <p>Name of the application to which you want to add the output configuration.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Version of the application to which you want to add the output configuration. You
   *             can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current
   *             application version. If the version specified is not the current version, the
   *                 <code>ConcurrentModificationException</code> is returned. </p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>An array of objects, each describing one output configuration. In the output
   *             configuration, you specify the name of an in-application stream, a destination (that is,
   *             an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda
   *             function), and record the formation to use when writing to the destination.</p>
   * @public
   */
  Output: Output | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AddApplicationOutputResponse {}

/**
 * <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p>
 *         <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes,
 *             you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger
 *             reloading of data into your application.</p>
 * @public
 */
export interface S3ReferenceDataSource {
  /**
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>Object key name containing reference data.</p>
   * @public
   */
  FileKey: string | undefined;

  /**
   * <p>ARN of the IAM role that the service can assume to read data on your behalf. This role must have permission for the <code>s3:GetObject</code> action on the object and trust policy that allows Amazon Kinesis Analytics service principal to assume this role.</p>
   * @public
   */
  ReferenceRoleARN: string | undefined;
}

/**
 * <p>Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.</p>
 * @public
 */
export interface ReferenceDataSource {
  /**
   * <p>Name of the in-application table to create.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.
   *
   *             An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <code>UpdateApplication</code> operation to trigger reloading of data into your application. </p>
   * @public
   */
  S3ReferenceDataSource?: S3ReferenceDataSource | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   * @public
   */
  ReferenceSchema: SourceSchema | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AddApplicationReferenceDataSourceRequest {
  /**
   * <p>Name of an existing application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Version of the application for which you are adding the reference data source.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version.
   *             If the version specified is not the current version, the
   *             <code>ConcurrentModificationException</code> is returned.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The reference data source can be an object in your Amazon S3 bucket. Amazon Kinesis Analytics reads the object and copies the data into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is created. You must also provide an IAM role with the necessary permissions that Amazon Kinesis Analytics can assume to read the object from your S3 bucket on your behalf.</p>
   * @public
   */
  ReferenceDataSource: ReferenceDataSource | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface AddApplicationReferenceDataSourceResponse {}

/**
 * <p>Description of the CloudWatch logging option.</p>
 * @public
 */
export interface CloudWatchLoggingOptionDescription {
  /**
   * <p>ID of the CloudWatch logging option description.</p>
   * @public
   */
  CloudWatchLoggingOptionId?: string | undefined;

  /**
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   * @public
   */
  LogStreamARN: string | undefined;

  /**
   * <p>IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the <code>PutLogEvents</code> policy action enabled.</p>
   * @public
   */
  RoleARN: string | undefined;
}

/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that
 *             is used to preprocess records in the stream, and the ARN of the IAM role that is  used
 *             to access the AWS Lambda expression.</p>
 * @public
 */
export interface InputLambdaProcessorDescription {
  /**
   * <p>The ARN of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess the records in the stream.</p>
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to access the AWS Lambda function.</p>
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * <p>Provides configuration information about an input processor. Currently, the only input processor available is
 *             <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
 * @public
 */
export interface InputProcessingConfigurationDescription {
  /**
   * <p>Provides configuration information about the associated <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessorDescription.html">InputLambdaProcessorDescription</a>.</p>
   * @public
   */
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription | undefined;
}

/**
 * <p>Describes the point at which the application reads from
 *             the streaming source.</p>
 * @public
 */
export interface InputStartingPositionConfiguration {
  /**
   * <p>The starting position on the stream.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>NOW</code> - Start reading just after the most recent record in the
   *                     stream, start at the request time stamp that the customer issued.</p>
   *
   *
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TRIM_HORIZON</code> - Start reading at the last untrimmed record in the stream,
   *                     which is the oldest record available in the stream. This option is not available
   *                     for an Amazon Kinesis Firehose delivery stream.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>LAST_STOPPED_POINT</code> - Resume reading from where the application last stopped reading.</p>
   *             </li>
   *          </ul>
   * @public
   */
  InputStartingPosition?: InputStartingPosition | undefined;
}

/**
 * <p>
 *             Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source
 *             in the application input configuration.
 *         </p>
 * @public
 */
export interface KinesisFirehoseInputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.</p>
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics assumes to access the stream.</p>
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * <p>
 *             Describes the Amazon Kinesis stream that is configured as the streaming source
 *             in the application input configuration.
 *           </p>
 * @public
 */
export interface KinesisStreamsInputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream.</p>
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.</p>
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * <p>Describes the application input configuration.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *         </p>
 * @public
 */
export interface InputDescription {
  /**
   * <p>Input ID associated with the application input.
   *             This is the ID that Amazon Kinesis Analytics assigns to each
   *             input configuration you add to your application. </p>
   * @public
   */
  InputId?: string | undefined;

  /**
   * <p>In-application name prefix.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>Returns the in-application stream names that are mapped to the
   *             stream source.</p>
   * @public
   */
  InAppStreamNames?: string[] | undefined;

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run.</p>
   * @public
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription | undefined;

  /**
   * <p>If an Amazon Kinesis stream is configured as streaming source, provides Amazon
   *             Kinesis stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis
   *             Analytics to access the stream on your behalf.</p>
   * @public
   */
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription | undefined;

  /**
   * <p>If an Amazon Kinesis Firehose delivery stream is configured as a streaming source,
   *             provides the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics
   *             to access the stream on your behalf.</p>
   * @public
   */
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding
   *             columns in the in-application stream that is being created. </p>
   * @public
   */
  InputSchema?: SourceSchema | undefined;

  /**
   * <p>Describes the configured parallelism (number of in-application streams
   *             mapped to the streaming source).</p>
   * @public
   */
  InputParallelism?: InputParallelism | undefined;

  /**
   * <p>Point at which the application is configured to read from the input stream.</p>
   * @public
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration | undefined;
}

/**
 * <p>
 *             For an application output, describes
 *             the Amazon Kinesis Firehose delivery stream configured as its destination.
 *         </p>
 * @public
 */
export interface KinesisFirehoseOutputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.</p>
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.</p>
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * <p>
 *             For an application output, describes
 *             the Amazon Kinesis stream configured as its destination.
 *         </p>
 * @public
 */
export interface KinesisStreamsOutputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream.</p>
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.</p>
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * <p>For an application output, describes the AWS Lambda function configured as its
 *             destination. </p>
 * @public
 */
export interface LambdaOutputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the destination Lambda function.</p>
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function.</p>
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * <p>Describes the application output configuration, which includes
 *             the in-application stream name and the destination where the stream data
 *             is written. The destination can be an Amazon Kinesis stream or an
 *             Amazon Kinesis Firehose delivery stream.
 *         </p>
 * @public
 */
export interface OutputDescription {
  /**
   * <p>A unique identifier for the output configuration.</p>
   * @public
   */
  OutputId?: string | undefined;

  /**
   * <p>Name of the in-application stream configured as output.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Describes Amazon Kinesis stream configured as the
   *             destination where output is written.</p>
   * @public
   */
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription | undefined;

  /**
   * <p>Describes the Amazon Kinesis Firehose delivery stream configured as the
   *             destination where output is written.</p>
   * @public
   */
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription | undefined;

  /**
   * <p>Describes the AWS Lambda function configured as the destination where output is
   *             written.</p>
   * @public
   */
  LambdaOutputDescription?: LambdaOutputDescription | undefined;

  /**
   * <p>Data format used for writing data to the destination.</p>
   * @public
   */
  DestinationSchema?: DestinationSchema | undefined;
}

/**
 * <p>Provides the bucket name and object key name that stores the reference data.</p>
 * @public
 */
export interface S3ReferenceDataSourceDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>Amazon S3 object key name.</p>
   * @public
   */
  FileKey: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf to populate the in-application reference table.</p>
   * @public
   */
  ReferenceRoleARN: string | undefined;
}

/**
 * <p>Describes the reference data source configured for an application.</p>
 * @public
 */
export interface ReferenceDataSourceDescription {
  /**
   * <p>ID of the reference data source. This is the ID
   *             that Amazon Kinesis Analytics assigns when you add the reference data source
   *             to your application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation.</p>
   * @public
   */
  ReferenceId: string | undefined;

  /**
   * <p>The in-application table name created by the specific reference data source configuration.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>Provides the S3 bucket name, the object key name that contains the reference data. It also provides the Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application reference table.</p>
   * @public
   */
  S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   * @public
   */
  ReferenceSchema?: SourceSchema | undefined;
}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>
 * @public
 */
export interface ApplicationDetail {
  /**
   * <p>Name of the application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Description of the application.</p>
   * @public
   */
  ApplicationDescription?: string | undefined;

  /**
   * <p>ARN of the application.</p>
   * @public
   */
  ApplicationARN: string | undefined;

  /**
   * <p>Status of the application.</p>
   * @public
   */
  ApplicationStatus: ApplicationStatus | undefined;

  /**
   * <p>Time stamp when the application version was created.</p>
   * @public
   */
  CreateTimestamp?: Date | undefined;

  /**
   * <p>Time stamp when the application was last updated.</p>
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * <p>Describes the application input configuration.
   *             For more information,
   *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
   *
   *         </p>
   * @public
   */
  InputDescriptions?: InputDescription[] | undefined;

  /**
   * <p>Describes the application output configuration.
   *             For more information,
   *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
   *
   *         </p>
   * @public
   */
  OutputDescriptions?: OutputDescription[] | undefined;

  /**
   * <p>Describes reference data sources configured for the application.
   *
   *             For more information,
   *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
   *
   *         </p>
   * @public
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[] | undefined;

  /**
   * <p>Describes the CloudWatch log streams that are configured to receive application
   *             messages. For more information about using CloudWatch log streams with Amazon Kinesis
   *             Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon
   *                 CloudWatch Logs</a>. </p>
   * @public
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[] | undefined;

  /**
   * <p>Returns the application code that you provided to perform data analysis on any of the in-application streams in your application.</p>
   * @public
   */
  ApplicationCode?: string | undefined;

  /**
   * <p>Provides the current application version.</p>
   * @public
   */
  ApplicationVersionId: number | undefined;
}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>Name of the application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>ARN of the application.</p>
   * @public
   */
  ApplicationARN: string | undefined;

  /**
   * <p>Status of the application.</p>
   * @public
   */
  ApplicationStatus: ApplicationStatus | undefined;
}

/**
 * <p>Describes CloudWatch logging option updates.</p>
 * @public
 */
export interface CloudWatchLoggingOptionUpdate {
  /**
   * <p>ID of the CloudWatch logging option to update</p>
   * @public
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   * @public
   */
  LogStreamARNUpdate?: string | undefined;

  /**
   * <p>IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the <code>PutLogEvents</code> policy action enabled.</p>
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * <p>Provides updates to the parallelism count.</p>
 * @public
 */
export interface InputParallelismUpdate {
  /**
   * <p>Number of in-application streams to create for the specified
   *             streaming source.</p>
   * @public
   */
  CountUpdate?: number | undefined;
}

/**
 * <p>Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream.</p>
 * @public
 */
export interface InputLambdaProcessorUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the new <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that
   *             is used to preprocess the records in the stream.</p>
   *         <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * <p>The ARN of the new IAM role that is used to access the AWS Lambda
   *             function.</p>
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * <p>Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>. </p>
 * @public
 */
export interface InputProcessingConfigurationUpdate {
  /**
   * <p>Provides update information for an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   * @public
   */
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate | undefined;
}

/**
 * <p>Describes updates for the application's input schema.</p>
 * @public
 */
export interface InputSchemaUpdate {
  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   * @public
   */
  RecordFormatUpdate?: RecordFormat | undefined;

  /**
   * <p>Specifies the encoding of the records in the streaming source. For example, UTF-8.</p>
   * @public
   */
  RecordEncodingUpdate?: string | undefined;

  /**
   * <p>A list of <code>RecordColumn</code> objects. Each object describes the mapping
   *             of the streaming source element to the corresponding column in the in-application stream. </p>
   * @public
   */
  RecordColumnUpdates?: RecordColumn[] | undefined;
}

/**
 * <p>When updating application input configuration, provides information about an
 *             Amazon Kinesis Firehose delivery stream as the streaming source.</p>
 * @public
 */
export interface KinesisFirehoseInputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the input Amazon Kinesis Firehose delivery stream to
   *             read.</p>
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream
   *             on your behalf. You need to grant the necessary permissions to this role.</p>
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * <p>When updating application input configuration, provides information about an
 *             Amazon Kinesis stream as the streaming source.</p>
 * @public
 */
export interface KinesisStreamsInputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the input Amazon Kinesis stream to read.</p>
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * <p>Describes updates to a specific input configuration (identified by the
 *             <code>InputId</code> of an application). </p>
 * @public
 */
export interface InputUpdate {
  /**
   * <p>Input ID of the application input to be updated.</p>
   * @public
   */
  InputId: string | undefined;

  /**
   * <p>Name prefix for in-application streams that Amazon Kinesis Analytics creates
   *             for the specific streaming source.</p>
   * @public
   */
  NamePrefixUpdate?: string | undefined;

  /**
   * <p>Describes updates for an input processing configuration.</p>
   * @public
   */
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate | undefined;

  /**
   * <p>If an Amazon Kinesis stream is the streaming source to be updated, provides an
   *             updated stream Amazon Resource Name (ARN) and IAM role ARN.</p>
   * @public
   */
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate | undefined;

  /**
   * <p>If an Amazon Kinesis Firehose delivery stream is the streaming source to be
   *             updated, provides an updated stream ARN and IAM role ARN.</p>
   * @public
   */
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate | undefined;

  /**
   * <p>Describes the data format on the streaming source, and
   *             how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   * @public
   */
  InputSchemaUpdate?: InputSchemaUpdate | undefined;

  /**
   * <p>Describes the parallelism updates (the number in-application
   *             streams Amazon Kinesis Analytics creates for the specific streaming source).</p>
   * @public
   */
  InputParallelismUpdate?: InputParallelismUpdate | undefined;
}

/**
 * <p>
 *             When updating an output configuration using the
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation,
 *             provides information about an Amazon Kinesis Firehose delivery stream configured as
 *             the destination.
 *         </p>
 * @public
 */
export interface KinesisFirehoseOutputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream to write to.</p>
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream
   *             on your behalf. You need to grant the necessary permissions to this role.</p>
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * <p>
 *             When updating an output configuration using the
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a>  operation,
 *             provides information about an Amazon Kinesis stream configured as
 *             the destination.
 *         </p>
 * @public
 */
export interface KinesisStreamsOutputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream where you want to write the output.</p>
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * <p>When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a>
 *             operation, provides information about an AWS Lambda function configured as the
 *             destination.</p>
 * @public
 */
export interface LambdaOutputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the destination Lambda function.</p>
   *         <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   * @public
   */
  ResourceARNUpdate?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role. </p>
   * @public
   */
  RoleARNUpdate?: string | undefined;
}

/**
 * <p>
 *             Describes updates to the output configuration identified by
 *             the <code>OutputId</code>.
 *         </p>
 * @public
 */
export interface OutputUpdate {
  /**
   * <p>Identifies the specific output configuration that you want to update.</p>
   * @public
   */
  OutputId: string | undefined;

  /**
   * <p>If you want to specify a different in-application stream
   *             for this output configuration, use this field to
   *             specify the new in-application stream name.</p>
   * @public
   */
  NameUpdate?: string | undefined;

  /**
   * <p>Describes an Amazon Kinesis stream as the destination for the output.</p>
   * @public
   */
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate | undefined;

  /**
   * <p>Describes an Amazon Kinesis Firehose delivery stream as the destination for the
   *             output.</p>
   * @public
   */
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate | undefined;

  /**
   * <p>Describes an AWS Lambda function as the destination for the output.</p>
   * @public
   */
  LambdaOutputUpdate?: LambdaOutputUpdate | undefined;

  /**
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   * @public
   */
  DestinationSchemaUpdate?: DestinationSchema | undefined;
}

/**
 * <p>Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
 * @public
 */
export interface S3ReferenceDataSourceUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  BucketARNUpdate?: string | undefined;

  /**
   * <p>Object key name.</p>
   * @public
   */
  FileKeyUpdate?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application.</p>
   * @public
   */
  ReferenceRoleARNUpdate?: string | undefined;
}

/**
 * <p>When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.</p>
 * @public
 */
export interface ReferenceDataSourceUpdate {
  /**
   * <p>ID of the reference data source being updated. You can use the
   *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.</p>
   * @public
   */
  ReferenceId: string | undefined;

  /**
   * <p>In-application table name that is created by this update.</p>
   * @public
   */
  TableNameUpdate?: string | undefined;

  /**
   * <p>Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
   * @public
   */
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. </p>
   * @public
   */
  ReferenceSchemaUpdate?: SourceSchema | undefined;
}

/**
 * <p>Describes updates to apply to an existing Amazon Kinesis Analytics application.</p>
 * @public
 */
export interface ApplicationUpdate {
  /**
   * <p>Describes application input configuration updates.</p>
   * @public
   */
  InputUpdates?: InputUpdate[] | undefined;

  /**
   * <p>Describes application code updates.</p>
   * @public
   */
  ApplicationCodeUpdate?: string | undefined;

  /**
   * <p>Describes application output configuration updates.</p>
   * @public
   */
  OutputUpdates?: OutputUpdate[] | undefined;

  /**
   * <p>Describes application reference data source updates.</p>
   * @public
   */
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[] | undefined;

  /**
   * <p>Describes application CloudWatch logging option updates.</p>
   * @public
   */
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[] | undefined;
}

/**
 * <p>A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that
 *         the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
 *       For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the key-value tag.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value of the key-value tag. The value is optional.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>TBD</p>
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>Name of your Amazon Kinesis Analytics application (for example, <code>sample-app</code>).</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Summary description of the application.</p>
   * @public
   */
  ApplicationDescription?: string | undefined;

  /**
   * <p>Use this parameter to configure the application input.</p>
   *         <p>You can configure your application to receive input from a single streaming source. In this configuration, you map this streaming source to an in-application stream that is created. Your application code can then query the in-application stream like a table (you can think of it as a constantly updating table).</p>
   *         <p>For the streaming source, you provide its Amazon Resource Name (ARN) and format of
   *             data on the stream (for example, JSON, CSV, etc.). You also must provide an IAM role
   *             that Amazon Kinesis Analytics can assume to read this stream on your behalf.</p>
   *         <p>To create the in-application stream, you need to specify a schema to transform your data into a schematized version used in SQL. In the schema, you provide the necessary mapping of the data elements in the streaming source to record columns in the in-app stream.</p>
   * @public
   */
  Inputs?: Input[] | undefined;

  /**
   * <p>You can configure application output to write data from any of the in-application streams to up to three destinations.</p>
   *         <p>These destinations can be Amazon Kinesis streams, Amazon Kinesis Firehose delivery
   *             streams, AWS Lambda destinations, or any combination of the three.</p>
   *         <p>In the configuration, you specify the in-application stream name, the destination stream or Lambda function Amazon Resource Name (ARN), and the format to use when writing data. You must also provide an IAM role that Amazon Kinesis Analytics can assume to write to the
   *             destination stream or Lambda function on your behalf.</p>
   *         <p>In the output configuration, you also provide the output stream or Lambda function ARN. For stream destinations, you provide the format
   *             of data in the stream (for example, JSON, CSV). You also must provide an IAM role that
   *             Amazon Kinesis Analytics can assume to write to the stream or Lambda function on your behalf.</p>
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * <p>Use this parameter to configure a CloudWatch log stream to monitor application
   *             configuration errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon
   *                 CloudWatch Logs</a>.</p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[] | undefined;

  /**
   * <p>One or more SQL statements that read input data, transform it, and generate output.
   *             For example, you can write a SQL statement that reads data from one in-application
   *             stream, generates a running average of the number of advertisement clicks by vendor, and
   *             insert resulting rows in another in-application stream using pumps. For more information
   *             about the typical pattern, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-app-code.html">Application
   *                 Code</a>. </p>
   *
   *         <p>You can provide such series of SQL statements,
   *             where output of one statement can be
   *             used as the input for the next statement. You store
   *             intermediate results by creating in-application streams and pumps.</p>
   *
   *         <p>Note that the application code must create the streams with names
   *             specified in the <code>Outputs</code>. For example,
   *             if your <code>Outputs</code> defines output streams named
   *             <code>ExampleOutputStream1</code> and <code>ExampleOutputStream2</code>,
   *             then your application code must create these streams. </p>
   * @public
   */
  ApplicationCode?: string | undefined;

  /**
   * <p>A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
   *         For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>TBD</p>
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>In response to your <code>CreateApplication</code> request, Amazon Kinesis Analytics returns a
   *             response with a summary of the application it created, including the application Amazon Resource Name (ARN),
   *             name, and status.</p>
   * @public
   */
  ApplicationSummary: ApplicationSummary | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>Name of the Amazon Kinesis Analytics application to delete.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>
   *             You can use the <code>DescribeApplication</code> operation to get this value.
   *         </p>
   * @public
   */
  CreateTimestamp: Date | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * <p>The Kinesis Analytics application name.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version ID of the Kinesis Analytics application.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The <code>CloudWatchLoggingOptionId</code> of the CloudWatch logging option to
   *             delete. You can get the <code>CloudWatchLoggingOptionId</code> by using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation. </p>
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
   * <p>The Kinesis Analytics application name.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version ID of the Kinesis Analytics application.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the input configuration from which to delete the input processing
   *             configuration. You can get a list of the input IDs for an application by using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   * @public
   */
  InputId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationInputProcessingConfigurationResponse {}

/**
 * <p></p>
 * @public
 */
export interface DeleteApplicationOutputRequest {
  /**
   * <p>Amazon Kinesis Analytics application name.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Amazon Kinesis Analytics application version.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version.
   *             If the version specified is not the current version, the
   *             <code>ConcurrentModificationException</code> is returned.
   *         </p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the configuration to delete.
   *             Each output configuration that is added to the application, either when the application is
   *             created or later using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationOutput.html">AddApplicationOutput</a> operation, has a unique ID.
   *             You need to provide the ID to uniquely identify the output configuration that you want to
   *             delete from the application configuration.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the specific
   *             <code>OutputId</code>.
   *         </p>
   * @public
   */
  OutputId: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DeleteApplicationOutputResponse {}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceRequest {
  /**
   * <p>Name of an existing application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Version of the application.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version.
   *             If the version specified
   *             is not the current version, the <code>ConcurrentModificationException</code> is returned.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>ID of the reference data source. When you add a reference data source to your
   *             application using the
   *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a>, Amazon Kinesis Analytics assigns an ID.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the reference ID.
   *         </p>
   * @public
   */
  ReferenceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceResponse {}

/**
 * <p></p>
 * @public
 */
export interface DescribeApplicationRequest {
  /**
   * <p>Name of the application.</p>
   * @public
   */
  ApplicationName: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * <p>Provides a description of the application, such as the application Amazon Resource Name (ARN), status, latest version, and input and output configuration details.</p>
   * @public
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * <p>Provides a description of an Amazon S3 data source, including the Amazon Resource
 *             Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket,
 *             and the name of the Amazon S3 object that contains the data.</p>
 * @public
 */
export interface S3Configuration {
  /**
   * <p>IAM ARN of the role used to access the data.</p>
   * @public
   */
  RoleARN: string | undefined;

  /**
   * <p>ARN of the S3 bucket that contains the data.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>The name of the object that contains the data.</p>
   * @public
   */
  FileKey: string | undefined;
}

/**
 * @public
 */
export interface DiscoverInputSchemaRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the streaming source.</p>
   * @public
   */
  ResourceARN?: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf.</p>
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * <p>Point at which you want Amazon Kinesis Analytics to start reading records from the specified streaming source discovery purposes.</p>
   * @public
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration | undefined;

  /**
   * <p>Specify this parameter to discover a schema from data in an Amazon S3
   *             object.</p>
   * @public
   */
  S3Configuration?: S3Configuration | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to use to preprocess the records before discovering the schema of the records.</p>
   * @public
   */
  InputProcessingConfiguration?: InputProcessingConfiguration | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DiscoverInputSchemaResponse {
  /**
   * <p>Schema inferred from the streaming source. It identifies the format of the data in the streaming source and how each data element maps to corresponding columns in the in-application stream that you can create.</p>
   * @public
   */
  InputSchema?: SourceSchema | undefined;

  /**
   * <p>An array of elements, where each element corresponds to a row in a stream record (a stream record can have more than one row).</p>
   * @public
   */
  ParsedInputRecords?: string[][] | undefined;

  /**
   * <p>Stream data that was modified by the processor specified in the <code>InputProcessingConfiguration</code> parameter.</p>
   * @public
   */
  ProcessedInputRecords?: string[] | undefined;

  /**
   * <p>Raw stream data that was sampled to infer the schema.</p>
   * @public
   */
  RawInputRecords?: string[] | undefined;
}

/**
 * <p>When you start your application,
 *             you provide this configuration, which identifies the input source and the point
 *             in the input source at which you want the application to start processing records.</p>
 * @public
 */
export interface InputConfiguration {
  /**
   * <p>Input source ID. You can get this ID by calling
   *             the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Point at which you want the application to start processing
   *             records from the streaming source.</p>
   * @public
   */
  InputStartingPositionConfiguration: InputStartingPositionConfiguration | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>Maximum number of applications to list.</p>
   * @public
   */
  Limit?: number | undefined;

  /**
   * <p>Name of the application to start the list with. When using pagination to retrieve the list, you don't need to specify this parameter in the first request. However, in subsequent requests, you add the last application name from the previous response to get the next page of applications.</p>
   * @public
   */
  ExclusiveStartApplicationName?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>List of <code>ApplicationSummary</code> objects. </p>
   * @public
   */
  ApplicationSummaries: ApplicationSummary[] | undefined;

  /**
   * <p>Returns true if there are more applications to retrieve.</p>
   * @public
   */
  HasMoreApplications: boolean | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the application for which to retrieve tags.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value tags assigned to the application.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartApplicationRequest {
  /**
   * <p>Name of the application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Identifies the specific input, by ID, that the application starts consuming. Amazon Kinesis Analytics starts reading the streaming source associated with the input. You can also specify where in the streaming source you want Amazon Kinesis Analytics to start reading.</p>
   * @public
   */
  InputConfigurations: InputConfiguration[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartApplicationResponse {}

/**
 * <p></p>
 * @public
 */
export interface StopApplicationRequest {
  /**
   * <p>Name of the running application to stop.</p>
   * @public
   */
  ApplicationName: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StopApplicationResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the application to assign the tags.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The key-value tags to assign to the application.</p>
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
   * <p>The ARN of the Kinesis Analytics application from which to remove the tags.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of keys of tags to remove from the specified application.</p>
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
   * <p>Name of the Amazon Kinesis Analytics application to update.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version ID. You can use the
   *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>Describes application updates.</p>
   * @public
   */
  ApplicationUpdate: ApplicationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}
