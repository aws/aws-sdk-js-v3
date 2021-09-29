import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Provides a description of CloudWatch logging options, including the log stream
 *             Amazon Resource Name (ARN) and the role ARN.</p>
 */
export interface CloudWatchLoggingOption {
  /**
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string | undefined;

  /**
   * <p>IAM ARN of the role to use to send application messages. Note: To write application
   *             messages to CloudWatch, the IAM role that is used must have the
   *             <code>PutLogEvents</code> policy action enabled.</p>
   */
  RoleARN: string | undefined;
}

export namespace CloudWatchLoggingOption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchLoggingOption): any => ({
    ...obj,
  });
}

export interface AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * <p>The Kinesis Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version ID of the Kinesis Analytics application.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>Provides the CloudWatch log stream Amazon Resource Name (ARN) and the IAM role ARN.
   *             Note: To write application messages to CloudWatch, the IAM role that is used must have
   *             the <code>PutLogEvents</code> policy action enabled.</p>
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption | undefined;
}

export namespace AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddApplicationCloudWatchLoggingOptionRequest): any => ({
    ...obj,
  });
}

export interface AddApplicationCloudWatchLoggingOptionResponse {}

export namespace AddApplicationCloudWatchLoggingOptionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddApplicationCloudWatchLoggingOptionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ConcurrentModificationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

/**
 * <p>Specified input parameter value is invalid.</p>
 */
export interface InvalidArgumentException extends __SmithyException, $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidArgumentException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidArgumentException): any => ({
    ...obj,
  });
}

/**
 * <p>Application is not available for this operation.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>Specified application can't be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
 */
export interface UnsupportedOperationException extends __SmithyException, $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedOperationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnsupportedOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the number of in-application streams to create for a given
 *             streaming source. For information about parallelism,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *         </p>
 */
export interface InputParallelism {
  /**
   * <p>Number of in-application streams to create.
   *             For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.
   *         </p>
   */
  Count?: number;
}

export namespace InputParallelism {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputParallelism): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that
 *             is used to preprocess records in the stream, and the ARN of the IAM role that is used to
 *             access the AWS Lambda function. </p>
 */
export interface InputLambdaProcessor {
  /**
   * <p>The ARN of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that operates
   *             on records in the stream.</p>
   *             <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to access the AWS Lambda function.</p>
   */
  RoleARN: string | undefined;
}

export namespace InputLambdaProcessor {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputLambdaProcessor): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a description of a processor that is used to preprocess the records in the
 *             stream before being processed by your application code. Currently, the only input
 *             processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS
 *                 Lambda</a>.</p>
 */
export interface InputProcessingConfiguration {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records
   *             in the stream before being processed by your application code.</p>
   */
  InputLambdaProcessor: InputLambdaProcessor | undefined;
}

export namespace InputProcessingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputProcessingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the mapping of each data element in the streaming
 *             source to the corresponding column in the in-application stream.</p>
 *         <p>Also used to describe the format of the reference data source.</p>
 */
export interface RecordColumn {
  /**
   * <p>Name of the column created in the in-application input stream or reference table.</p>
   */
  Name: string | undefined;

  /**
   * <p>Reference to the data element in the streaming input or the reference data source. This element
   *             is required if the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_RecordFormat.html#analytics-Type-RecordFormat-RecordFormatTypel">RecordFormatType</a> is <code>JSON</code>.</p>
   */
  Mapping?: string;

  /**
   * <p>Type of column created in the in-application input stream or reference table.</p>
   */
  SqlType: string | undefined;
}

export namespace RecordColumn {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecordColumn): any => ({
    ...obj,
  });
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
 */
export interface CSVMappingParameters {
  /**
   * <p>Row delimiter. For example, in a CSV format, <i>'\n'</i> is the typical row delimiter.</p>
   */
  RecordRowDelimiter: string | undefined;

  /**
   * <p>Column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.</p>
   */
  RecordColumnDelimiter: string | undefined;
}

export namespace CSVMappingParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CSVMappingParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
 */
export interface JSONMappingParameters {
  /**
   * <p>Path to the top-level parent that contains the records.</p>
   */
  RecordRowPath: string | undefined;
}

export namespace JSONMappingParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JSONMappingParameters): any => ({
    ...obj,
  });
}

/**
 * <p>When configuring application input
 *             at the time of creating or updating an application,
 *             provides additional mapping information specific to
 *             the record format (such as JSON, CSV, or record fields delimited
 *             by some delimiter) on the streaming source.</p>
 */
export interface MappingParameters {
  /**
   * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
   */
  JSONMappingParameters?: JSONMappingParameters;

  /**
   * <p>Provides additional mapping information when the record format uses delimiters
   *             (for example, CSV).</p>
   */
  CSVMappingParameters?: CSVMappingParameters;
}

export namespace MappingParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MappingParameters): any => ({
    ...obj,
  });
}

export enum RecordFormatType {
  CSV = "CSV",
  JSON = "JSON",
}

/**
 * <p>
 *             Describes the record format and relevant mapping information that
 *             should be applied to schematize the records on the stream.
 *         </p>
 */
export interface RecordFormat {
  /**
   * <p>The type of record format.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;

  /**
   * <p>When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.</p>
   */
  MappingParameters?: MappingParameters;
}

export namespace RecordFormat {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecordFormat): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
 */
export interface SourceSchema {
  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormat: RecordFormat | undefined;

  /**
   * <p>Specifies the encoding of the records in the streaming source. For example, UTF-8.</p>
   */
  RecordEncoding?: string;

  /**
   * <p>A list of <code>RecordColumn</code> objects.</p>
   */
  RecordColumns: RecordColumn[] | undefined;
}

export namespace SourceSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceSchema): any => ({
    ...obj,
  });
}

/**
 * <p> Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You
 *             provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that
 *             enables Amazon Kinesis Analytics to access the stream on your behalf.</p>
 */
export interface KinesisFirehoseInput {
  /**
   * <p>ARN of the input delivery stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream
   *             on your behalf. You need to make sure that the role has the necessary permissions to
   *             access the stream.</p>
   */
  RoleARN: string | undefined;
}

export namespace KinesisFirehoseInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisFirehoseInput): any => ({
    ...obj,
  });
}

/**
 * <p> Identifies an Amazon Kinesis stream as the streaming source. You provide the
 *             stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis
 *             Analytics to access the stream on your behalf.</p>
 */
export interface KinesisStreamsInput {
  /**
   * <p>ARN of the input Amazon Kinesis stream to read.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARN: string | undefined;
}

export namespace KinesisStreamsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamsInput): any => ({
    ...obj,
  });
}

/**
 * <p>When you configure the application input, you specify the streaming source,  the
 *             in-application stream name that is created, and the mapping between the two.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p>
 */
export interface Input {
  /**
   * <p>Name prefix to use when creating an in-application stream. Suppose that you specify
   *             a prefix "MyInApplicationStream." Amazon Kinesis Analytics then creates one or more (as
   *             per the <code>InputParallelism</code> count you specified) in-application streams with
   *             names "MyInApplicationStream_001," "MyInApplicationStream_002," and so on. </p>
   */
  NamePrefix: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> for the input. An input
   *             processor transforms records as they are received from the stream, before the
   *             application's SQL code executes. Currently, the only input processing configuration
   *             available is <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * <p>If the streaming source is an Amazon Kinesis stream,
   *             identifies the stream's Amazon Resource Name (ARN) and an IAM role
   *             that enables Amazon Kinesis Analytics to access the stream on your behalf.</p>
   *         <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   */
  KinesisStreamsInput?: KinesisStreamsInput;

  /**
   * <p>If the streaming source is an Amazon Kinesis Firehose delivery stream, identifies
   *             the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to
   *             access the stream on your behalf.</p>
   *         <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   */
  KinesisFirehoseInput?: KinesisFirehoseInput;

  /**
   * <p>Describes the number of in-application streams to create. </p>
   *          <p>Data from your source is routed to these in-application input streams.</p>
   *         <p>    (see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.</p>
   */
  InputParallelism?: InputParallelism;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.</p>
   *         <p>Also used to describe the format of the reference data source.</p>
   */
  InputSchema: SourceSchema | undefined;
}

export namespace Input {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface AddApplicationInputRequest {
  /**
   * <p>Name of your existing Amazon Kinesis Analytics application to which you want to add the streaming source.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Current version of your Amazon Kinesis Analytics application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation
   *             to find the current application version.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_Input.html">Input</a> to add.</p>
   */
  Input: Input | undefined;
}

export namespace AddApplicationInputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddApplicationInputRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface AddApplicationInputResponse {}

export namespace AddApplicationInputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddApplicationInputResponse): any => ({
    ...obj,
  });
}

/**
 * <p>User-provided application code (query) is invalid. This can be a simple syntax error.</p>
 */
export interface CodeValidationException extends __SmithyException, $MetadataBearer {
  name: "CodeValidationException";
  $fault: "client";
  /**
   * <p>Test</p>
   */
  message?: string;
}

export namespace CodeValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeValidationException): any => ({
    ...obj,
  });
}

export interface AddApplicationInputProcessingConfigurationRequest {
  /**
   * <p>Name of the application to which you want to add the input processing configuration.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Version of the application to which you want to add the input processing configuration. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>
   *             operation to get the current application version.  If the version specified is not the current version, the
   *             <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the input configuration to add the input processing configuration to. You
   *             can get a list of the input IDs for an application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   */
  InputId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to add to the application.</p>
   */
  InputProcessingConfiguration: InputProcessingConfiguration | undefined;
}

export namespace AddApplicationInputProcessingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddApplicationInputProcessingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface AddApplicationInputProcessingConfigurationResponse {}

export namespace AddApplicationInputProcessingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddApplicationInputProcessingConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the data format when records are written to the destination.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
 *
 *
 *         </p>
 */
export interface DestinationSchema {
  /**
   * <p>Specifies the format of the records on the output stream.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;
}

export namespace DestinationSchema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DestinationSchema): any => ({
    ...obj,
  });
}

/**
 * <p>When configuring application output,
 *             identifies an Amazon Kinesis Firehose delivery stream as the destination.
 *             You provide the stream Amazon Resource Name (ARN) and an IAM role
 *             that enables Amazon Kinesis Analytics to write to the stream on your behalf.</p>
 */
export interface KinesisFirehoseOutput {
  /**
   * <p>ARN of the destination Amazon Kinesis Firehose delivery stream to write to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARN: string | undefined;
}

export namespace KinesisFirehoseOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisFirehoseOutput): any => ({
    ...obj,
  });
}

/**
 * <p>When configuring application output, identifies an Amazon Kinesis stream as the
 *             destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN
 *             that Amazon Kinesis Analytics can use to write to the stream on your behalf.</p>
 */
export interface KinesisStreamsOutput {
  /**
   * <p>ARN of the destination Amazon Kinesis stream to write to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARN: string | undefined;
}

export namespace KinesisStreamsOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>When configuring application output, identifies an AWS Lambda function as the
 *             destination. You provide the function Amazon Resource Name (ARN) and also an IAM role
 *             ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. </p>
 */
export interface LambdaOutput {
  /**
   * <p>Amazon Resource Name (ARN) of the destination Lambda function to write
   *             to.</p>
   *         <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role. </p>
   */
  RoleARN: string | undefined;
}

export namespace LambdaOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaOutput): any => ({
    ...obj,
  });
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
 */
export interface Output {
  /**
   * <p>Name of the in-application stream.</p>
   */
  Name: string | undefined;

  /**
   * <p>Identifies an Amazon Kinesis stream
   *             as the destination.</p>
   */
  KinesisStreamsOutput?: KinesisStreamsOutput;

  /**
   * <p>Identifies an Amazon Kinesis Firehose delivery stream as the destination.</p>
   */
  KinesisFirehoseOutput?: KinesisFirehoseOutput;

  /**
   * <p>Identifies an AWS Lambda function as the destination.</p>
   */
  LambdaOutput?: LambdaOutput;

  /**
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   */
  DestinationSchema: DestinationSchema | undefined;
}

export namespace Output {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface AddApplicationOutputRequest {
  /**
   * <p>Name of the application to which you want to add the output configuration.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Version of the application to which you want to add the output configuration. You
   *             can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current
   *             application version. If the version specified is not the current version, the
   *                 <code>ConcurrentModificationException</code> is returned. </p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>An array of objects, each describing one output configuration. In the output
   *             configuration, you specify the name of an in-application stream, a destination (that is,
   *             an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda
   *             function), and record the formation to use when writing to the destination.</p>
   */
  Output: Output | undefined;
}

export namespace AddApplicationOutputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddApplicationOutputRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface AddApplicationOutputResponse {}

export namespace AddApplicationOutputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddApplicationOutputResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p>
 *         <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes,
 *             you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger
 *             reloading of data into your application.</p>
 */
export interface S3ReferenceDataSource {
  /**
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>Object key name containing reference data.</p>
   */
  FileKey: string | undefined;

  /**
   * <p>ARN of the IAM role that the service can assume to read data on your behalf. This role must have permission for the <code>s3:GetObject</code> action on the object and trust policy that allows Amazon Kinesis Analytics service principal to assume this role.</p>
   */
  ReferenceRoleARN: string | undefined;
}

export namespace S3ReferenceDataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3ReferenceDataSource): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.</p>
 */
export interface ReferenceDataSource {
  /**
   * <p>Name of the in-application table to create.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.
   *
   *             An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <code>UpdateApplication</code> operation to trigger reloading of data into your application. </p>
   */
  S3ReferenceDataSource?: S3ReferenceDataSource;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema: SourceSchema | undefined;
}

export namespace ReferenceDataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReferenceDataSource): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface AddApplicationReferenceDataSourceRequest {
  /**
   * <p>Name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Version of the application for which you are adding the reference data source.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version.
   *             If the version specified is not the current version, the
   *             <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The reference data source can be an object in your Amazon S3 bucket. Amazon Kinesis Analytics reads the object and copies the data into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is created. You must also provide an IAM role with the necessary permissions that Amazon Kinesis Analytics can assume to read the object from your S3 bucket on your behalf.</p>
   */
  ReferenceDataSource: ReferenceDataSource | undefined;
}

export namespace AddApplicationReferenceDataSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddApplicationReferenceDataSourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface AddApplicationReferenceDataSourceResponse {}

export namespace AddApplicationReferenceDataSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AddApplicationReferenceDataSourceResponse): any => ({
    ...obj,
  });
}

export enum ApplicationStatus {
  DELETING = "DELETING",
  READY = "READY",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
  UPDATING = "UPDATING",
}

/**
 * <p>Description of the CloudWatch logging option.</p>
 */
export interface CloudWatchLoggingOptionDescription {
  /**
   * <p>ID of the CloudWatch logging option description.</p>
   */
  CloudWatchLoggingOptionId?: string;

  /**
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string | undefined;

  /**
   * <p>IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the <code>PutLogEvents</code> policy action enabled.</p>
   */
  RoleARN: string | undefined;
}

export namespace CloudWatchLoggingOptionDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchLoggingOptionDescription): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that
 *             is used to preprocess records in the stream, and the ARN of the IAM role that is  used
 *             to access the AWS Lambda expression.</p>
 */
export interface InputLambdaProcessorDescription {
  /**
   * <p>The ARN of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess the records in the stream.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The ARN of the IAM role that is used to access the AWS Lambda function.</p>
   */
  RoleARN?: string;
}

export namespace InputLambdaProcessorDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputLambdaProcessorDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information about an input processor. Currently, the only input processor available is
 *             <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
 */
export interface InputProcessingConfigurationDescription {
  /**
   * <p>Provides configuration information about the associated <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessorDescription.html">InputLambdaProcessorDescription</a>.</p>
   */
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}

export namespace InputProcessingConfigurationDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputProcessingConfigurationDescription): any => ({
    ...obj,
  });
}

export enum InputStartingPosition {
  LAST_STOPPED_POINT = "LAST_STOPPED_POINT",
  NOW = "NOW",
  TRIM_HORIZON = "TRIM_HORIZON",
}

/**
 * <p>Describes the point at which the application reads from
 *             the streaming source.</p>
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
   */
  InputStartingPosition?: InputStartingPosition | string;
}

export namespace InputStartingPositionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputStartingPositionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source
 *             in the application input configuration.
 *         </p>
 */
export interface KinesisFirehoseInputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.</p>
   */
  ResourceARN?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics assumes to access the stream.</p>
   */
  RoleARN?: string;
}

export namespace KinesisFirehoseInputDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisFirehoseInputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Describes the Amazon Kinesis stream that is configured as the streaming source
 *             in the application input configuration.
 *           </p>
 */
export interface KinesisStreamsInputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream.</p>
   */
  ResourceARN?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.</p>
   */
  RoleARN?: string;
}

export namespace KinesisStreamsInputDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamsInputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the application input configuration.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *         </p>
 */
export interface InputDescription {
  /**
   * <p>Input ID associated with the application input.
   *             This is the ID that Amazon Kinesis Analytics assigns to each
   *             input configuration you add to your application. </p>
   */
  InputId?: string;

  /**
   * <p>In-application name prefix.</p>
   */
  NamePrefix?: string;

  /**
   * <p>Returns the in-application stream names that are mapped to the
   *             stream source.</p>
   */
  InAppStreamNames?: string[];

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run.</p>
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

  /**
   * <p>If an Amazon Kinesis stream is configured as streaming source, provides Amazon
   *             Kinesis stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis
   *             Analytics to access the stream on your behalf.</p>
   */
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription;

  /**
   * <p>If an Amazon Kinesis Firehose delivery stream is configured as a streaming source,
   *             provides the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics
   *             to access the stream on your behalf.</p>
   */
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding
   *             columns in the in-application stream that is being created. </p>
   */
  InputSchema?: SourceSchema;

  /**
   * <p>Describes the configured parallelism (number of in-application streams
   *             mapped to the streaming source).</p>
   */
  InputParallelism?: InputParallelism;

  /**
   * <p>Point at which the application is configured to read from the input stream.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
}

export namespace InputDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             For an application output, describes
 *             the Amazon Kinesis Firehose delivery stream configured as its destination.
 *         </p>
 */
export interface KinesisFirehoseOutputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.</p>
   */
  ResourceARN?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.</p>
   */
  RoleARN?: string;
}

export namespace KinesisFirehoseOutputDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisFirehoseOutputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             For an application output, describes
 *             the Amazon Kinesis stream configured as its destination.
 *         </p>
 */
export interface KinesisStreamsOutputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream.</p>
   */
  ResourceARN?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.</p>
   */
  RoleARN?: string;
}

export namespace KinesisStreamsOutputDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamsOutputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>For an application output, describes the AWS Lambda function configured as its
 *             destination. </p>
 */
export interface LambdaOutputDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the destination Lambda function.</p>
   */
  ResourceARN?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function.</p>
   */
  RoleARN?: string;
}

export namespace LambdaOutputDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaOutputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the application output configuration, which includes
 *             the in-application stream name and the destination where the stream data
 *             is written. The destination can be an Amazon Kinesis stream or an
 *             Amazon Kinesis Firehose delivery stream.
 *         </p>
 */
export interface OutputDescription {
  /**
   * <p>A unique identifier for the output configuration.</p>
   */
  OutputId?: string;

  /**
   * <p>Name of the in-application stream configured as output.</p>
   */
  Name?: string;

  /**
   * <p>Describes Amazon Kinesis stream configured as the
   *             destination where output is written.</p>
   */
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

  /**
   * <p>Describes the Amazon Kinesis Firehose delivery stream configured as the
   *             destination where output is written.</p>
   */
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

  /**
   * <p>Describes the AWS Lambda function configured as the destination where output is
   *             written.</p>
   */
  LambdaOutputDescription?: LambdaOutputDescription;

  /**
   * <p>Data format used for writing data to the destination.</p>
   */
  DestinationSchema?: DestinationSchema;
}

export namespace OutputDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the bucket name and object key name that stores the reference data.</p>
 */
export interface S3ReferenceDataSourceDescription {
  /**
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>Amazon S3 object key name.</p>
   */
  FileKey: string | undefined;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf to populate the in-application reference table.</p>
   */
  ReferenceRoleARN: string | undefined;
}

export namespace S3ReferenceDataSourceDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3ReferenceDataSourceDescription): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the reference data source configured for an application.</p>
 */
export interface ReferenceDataSourceDescription {
  /**
   * <p>ID of the reference data source. This is the ID
   *             that Amazon Kinesis Analytics assigns when you add the reference data source
   *             to your application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>The in-application table name created by the specific reference data source configuration.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Provides the S3 bucket name, the object key name that contains the reference data. It also provides the Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema?: SourceSchema;
}

export namespace ReferenceDataSourceDescription {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReferenceDataSourceDescription): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>
 */
export interface ApplicationDetail {
  /**
   * <p>Name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * <p>Status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;

  /**
   * <p>Time stamp when the application version was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>Time stamp when the application was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>Describes the application input configuration.
   *             For more information,
   *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
   *
   *         </p>
   */
  InputDescriptions?: InputDescription[];

  /**
   * <p>Describes the application output configuration.
   *             For more information,
   *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
   *
   *         </p>
   */
  OutputDescriptions?: OutputDescription[];

  /**
   * <p>Describes reference data sources configured for the application.
   *
   *             For more information,
   *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
   *
   *         </p>
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];

  /**
   * <p>Describes the CloudWatch log streams that are configured to receive application
   *             messages. For more information about using CloudWatch log streams with Amazon Kinesis
   *             Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon
   *                 CloudWatch Logs</a>. </p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  /**
   * <p>Returns the application code that you provided to perform data analysis on any of the in-application streams in your application.</p>
   */
  ApplicationCode?: string;

  /**
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId: number | undefined;
}

export namespace ApplicationDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationDetail): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
 */
export interface ApplicationSummary {
  /**
   * <p>Name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * <p>Status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;
}

export namespace ApplicationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes CloudWatch logging option updates.</p>
 */
export interface CloudWatchLoggingOptionUpdate {
  /**
   * <p>ID of the CloudWatch logging option to update</p>
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARNUpdate?: string;

  /**
   * <p>IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the <code>PutLogEvents</code> policy action enabled.</p>
   */
  RoleARNUpdate?: string;
}

export namespace CloudWatchLoggingOptionUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchLoggingOptionUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Provides updates to the parallelism count.</p>
 */
export interface InputParallelismUpdate {
  /**
   * <p>Number of in-application streams to create for the specified
   *             streaming source.</p>
   */
  CountUpdate?: number;
}

export namespace InputParallelismUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputParallelismUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream.</p>
 */
export interface InputLambdaProcessorUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the new <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that
   *             is used to preprocess the records in the stream.</p>
   *         <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARNUpdate?: string;

  /**
   * <p>The ARN of the new IAM role that is used to access the AWS Lambda
   *             function.</p>
   */
  RoleARNUpdate?: string;
}

export namespace InputLambdaProcessorUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputLambdaProcessorUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>. </p>
 */
export interface InputProcessingConfigurationUpdate {
  /**
   * <p>Provides update information for an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   */
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate | undefined;
}

export namespace InputProcessingConfigurationUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputProcessingConfigurationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates for the application's input schema.</p>
 */
export interface InputSchemaUpdate {
  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormatUpdate?: RecordFormat;

  /**
   * <p>Specifies the encoding of the records in the streaming source. For example, UTF-8.</p>
   */
  RecordEncodingUpdate?: string;

  /**
   * <p>A list of <code>RecordColumn</code> objects. Each object describes the mapping
   *             of the streaming source element to the corresponding column in the in-application stream. </p>
   */
  RecordColumnUpdates?: RecordColumn[];
}

export namespace InputSchemaUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputSchemaUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>When updating application input configuration, provides information about an
 *             Amazon Kinesis Firehose delivery stream as the streaming source.</p>
 */
export interface KinesisFirehoseInputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the input Amazon Kinesis Firehose delivery stream to
   *             read.</p>
   */
  ResourceARNUpdate?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream
   *             on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARNUpdate?: string;
}

export namespace KinesisFirehoseInputUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisFirehoseInputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>When updating application input configuration, provides information about an
 *             Amazon Kinesis stream as the streaming source.</p>
 */
export interface KinesisStreamsInputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the input Amazon Kinesis stream to read.</p>
   */
  ResourceARNUpdate?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARNUpdate?: string;
}

export namespace KinesisStreamsInputUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamsInputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to a specific input configuration (identified by the
 *             <code>InputId</code> of an application). </p>
 */
export interface InputUpdate {
  /**
   * <p>Input ID of the application input to be updated.</p>
   */
  InputId: string | undefined;

  /**
   * <p>Name prefix for in-application streams that Amazon Kinesis Analytics creates
   *             for the specific streaming source.</p>
   */
  NamePrefixUpdate?: string;

  /**
   * <p>Describes updates for an input processing configuration.</p>
   */
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

  /**
   * <p>If an Amazon Kinesis stream is the streaming source to be updated, provides an
   *             updated stream Amazon Resource Name (ARN) and IAM role ARN.</p>
   */
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

  /**
   * <p>If an Amazon Kinesis Firehose delivery stream is the streaming source to be
   *             updated, provides an updated stream ARN and IAM role ARN.</p>
   */
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

  /**
   * <p>Describes the data format on the streaming source, and
   *             how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   */
  InputSchemaUpdate?: InputSchemaUpdate;

  /**
   * <p>Describes the parallelism updates (the number in-application
   *             streams Amazon Kinesis Analytics creates for the specific streaming source).</p>
   */
  InputParallelismUpdate?: InputParallelismUpdate;
}

export namespace InputUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             When updating an output configuration using the
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation,
 *             provides information about an Amazon Kinesis Firehose delivery stream configured as
 *             the destination.
 *         </p>
 */
export interface KinesisFirehoseOutputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream to write to.</p>
   */
  ResourceARNUpdate?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream
   *             on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARNUpdate?: string;
}

export namespace KinesisFirehoseOutputUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisFirehoseOutputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             When updating an output configuration using the
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a>  operation,
 *             provides information about an Amazon Kinesis stream configured as
 *             the destination.
 *         </p>
 */
export interface KinesisStreamsOutputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream where you want to write the output.</p>
   */
  ResourceARNUpdate?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARNUpdate?: string;
}

export namespace KinesisStreamsOutputUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamsOutputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a>
 *             operation, provides information about an AWS Lambda function configured as the
 *             destination.</p>
 */
export interface LambdaOutputUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the destination Lambda function.</p>
   *         <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARNUpdate?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role. </p>
   */
  RoleARNUpdate?: string;
}

export namespace LambdaOutputUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaOutputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>
 *             Describes updates to the output configuration identified by
 *             the <code>OutputId</code>.
 *         </p>
 */
export interface OutputUpdate {
  /**
   * <p>Identifies the specific output configuration that you want to update.</p>
   */
  OutputId: string | undefined;

  /**
   * <p>If you want to specify a different in-application stream
   *             for this output configuration, use this field to
   *             specify the new in-application stream name.</p>
   */
  NameUpdate?: string;

  /**
   * <p>Describes an Amazon Kinesis stream as the destination for the output.</p>
   */
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

  /**
   * <p>Describes an Amazon Kinesis Firehose delivery stream as the destination for the
   *             output.</p>
   */
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

  /**
   * <p>Describes an AWS Lambda function as the destination for the output.</p>
   */
  LambdaOutputUpdate?: LambdaOutputUpdate;

  /**
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   */
  DestinationSchemaUpdate?: DestinationSchema;
}

export namespace OutputUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
 */
export interface S3ReferenceDataSourceUpdate {
  /**
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARNUpdate?: string;

  /**
   * <p>Object key name.</p>
   */
  FileKeyUpdate?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application.</p>
   */
  ReferenceRoleARNUpdate?: string;
}

export namespace S3ReferenceDataSourceUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3ReferenceDataSourceUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.</p>
 */
export interface ReferenceDataSourceUpdate {
  /**
   * <p>ID of the reference data source being updated. You can use the
   *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>In-application table name that is created by this update.</p>
   */
  TableNameUpdate?: string;

  /**
   * <p>Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. </p>
   */
  ReferenceSchemaUpdate?: SourceSchema;
}

export namespace ReferenceDataSourceUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReferenceDataSourceUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>Describes updates to apply to an existing Amazon Kinesis Analytics application.</p>
 */
export interface ApplicationUpdate {
  /**
   * <p>Describes application input configuration updates.</p>
   */
  InputUpdates?: InputUpdate[];

  /**
   * <p>Describes application code updates.</p>
   */
  ApplicationCodeUpdate?: string;

  /**
   * <p>Describes application output configuration updates.</p>
   */
  OutputUpdates?: OutputUpdate[];

  /**
   * <p>Describes application reference data source updates.</p>
   */
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[];

  /**
   * <p>Describes application CloudWatch logging option updates.</p>
   */
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];
}

export namespace ApplicationUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationUpdate): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that
 *         the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
 *       For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.</p>
 */
export interface Tag {
  /**
   * <p>The key of the key-value tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the key-value tag. The value is optional.</p>
   */
  Value?: string;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>TBD</p>
 */
export interface CreateApplicationRequest {
  /**
   * <p>Name of your Amazon Kinesis Analytics application (for example, <code>sample-app</code>).</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Summary description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>Use this parameter to configure the application input.</p>
   *         <p>You can configure your application to receive input from a single streaming source. In this configuration, you map this streaming source to an in-application stream that is created. Your application code can then query the in-application stream like a table (you can think of it as a constantly updating table).</p>
   *         <p>For the streaming source, you provide its Amazon Resource Name (ARN) and format of
   *             data on the stream (for example, JSON, CSV, etc.). You also must provide an IAM role
   *             that Amazon Kinesis Analytics can assume to read this stream on your behalf.</p>
   *         <p>To create the in-application stream, you need to specify a schema to transform your data into a schematized version used in SQL. In the schema, you provide the necessary mapping of the data elements in the streaming source to record columns in the in-app stream.</p>
   */
  Inputs?: Input[];

  /**
   * <p>You can configure application output to write data from any of the in-application streams to up to three destinations.</p>
   *         <p>These destinations can be Amazon Kinesis streams, Amazon Kinesis Firehose delivery
   *             streams, AWS Lambda destinations, or any combination of the three.</p>
   *         <p>In the configuration, you specify the in-application stream name, the destination stream or Lambda function Amazon Resource Name (ARN), and the format to use when writing data. You must also provide an IAM role that Amazon Kinesis Analytics can assume to write to the
   *             destination stream or Lambda function on your behalf.</p>
   *         <p>In the output configuration, you also provide the output stream or Lambda function ARN. For stream destinations, you provide the format
   *             of data in the stream (for example, JSON, CSV). You also must provide an IAM role that
   *             Amazon Kinesis Analytics can assume to write to the stream or Lambda function on your behalf.</p>
   */
  Outputs?: Output[];

  /**
   * <p>Use this parameter to configure a CloudWatch log stream to monitor application
   *             configuration errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon
   *                 CloudWatch Logs</a>.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[];

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
   */
  ApplicationCode?: string;

  /**
   * <p>A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
   *         For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>TBD</p>
 */
export interface CreateApplicationResponse {
  /**
   * <p>In response to your <code>CreateApplication</code> request, Amazon Kinesis Analytics returns a
   *             response with a summary of the application it created, including the application Amazon Resource Name (ARN),
   *             name, and status.</p>
   */
  ApplicationSummary: ApplicationSummary | undefined;
}

export namespace CreateApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Exceeded the number of applications allowed.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteApplicationRequest {
  /**
   * <p>Name of the Amazon Kinesis Analytics application to delete.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>
   *             You can use the <code>DescribeApplication</code> operation to get this value.
   *         </p>
   */
  CreateTimestamp: Date | undefined;
}

export namespace DeleteApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteApplicationResponse {}

export namespace DeleteApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * <p>The Kinesis Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version ID of the Kinesis Analytics application.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The <code>CloudWatchLoggingOptionId</code> of the CloudWatch logging option to
   *             delete. You can get the <code>CloudWatchLoggingOptionId</code> by using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation. </p>
   */
  CloudWatchLoggingOptionId: string | undefined;
}

export namespace DeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationCloudWatchLoggingOptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationCloudWatchLoggingOptionResponse {}

export namespace DeleteApplicationCloudWatchLoggingOptionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationCloudWatchLoggingOptionResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationInputProcessingConfigurationRequest {
  /**
   * <p>The Kinesis Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version ID of the Kinesis Analytics application.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the input configuration from which to delete the input processing
   *             configuration. You can get a list of the input IDs for an application by using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   */
  InputId: string | undefined;
}

export namespace DeleteApplicationInputProcessingConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationInputProcessingConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationInputProcessingConfigurationResponse {}

export namespace DeleteApplicationInputProcessingConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationInputProcessingConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteApplicationOutputRequest {
  /**
   * <p>Amazon Kinesis Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Amazon Kinesis Analytics application version.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version.
   *             If the version specified is not the current version, the
   *             <code>ConcurrentModificationException</code> is returned.
   *         </p>
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
   */
  OutputId: string | undefined;
}

export namespace DeleteApplicationOutputRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationOutputRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteApplicationOutputResponse {}

export namespace DeleteApplicationOutputResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationOutputResponse): any => ({
    ...obj,
  });
}

export interface DeleteApplicationReferenceDataSourceRequest {
  /**
   * <p>Name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Version of the application.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version.
   *             If the version specified
   *             is not the current version, the <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>ID of the reference data source. When you add a reference data source to your
   *             application using the
   *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a>, Amazon Kinesis Analytics assigns an ID.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the reference ID.
   *         </p>
   */
  ReferenceId: string | undefined;
}

export namespace DeleteApplicationReferenceDataSourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationReferenceDataSourceRequest): any => ({
    ...obj,
  });
}

export interface DeleteApplicationReferenceDataSourceResponse {}

export namespace DeleteApplicationReferenceDataSourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationReferenceDataSourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeApplicationRequest {
  /**
   * <p>Name of the application.</p>
   */
  ApplicationName: string | undefined;
}

export namespace DescribeApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeApplicationRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeApplicationResponse {
  /**
   * <p>Provides a description of the application, such as the application Amazon Resource Name (ARN), status, latest version, and input and output configuration details.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

export namespace DescribeApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeApplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a description of an Amazon S3 data source, including the Amazon Resource
 *             Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket,
 *             and the name of the Amazon S3 object that contains the data.</p>
 */
export interface S3Configuration {
  /**
   * <p>IAM ARN of the role used to access the data.</p>
   */
  RoleARN: string | undefined;

  /**
   * <p>ARN of the S3 bucket that contains the data.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The name of the object that contains the data.</p>
   */
  FileKey: string | undefined;
}

export namespace S3Configuration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Configuration): any => ({
    ...obj,
  });
}

export interface DiscoverInputSchemaRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the streaming source.</p>
   */
  ResourceARN?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf.</p>
   */
  RoleARN?: string;

  /**
   * <p>Point at which you want Amazon Kinesis Analytics to start reading records from the specified streaming source discovery purposes.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  /**
   * <p>Specify this parameter to discover a schema from data in an Amazon S3
   *             object.</p>
   */
  S3Configuration?: S3Configuration;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to use to preprocess the records before discovering the schema of the records.</p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;
}

export namespace DiscoverInputSchemaRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiscoverInputSchemaRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DiscoverInputSchemaResponse {
  /**
   * <p>Schema inferred from the streaming source. It identifies the format of the data in the streaming source and how each data element maps to corresponding columns in the in-application stream that you can create.</p>
   */
  InputSchema?: SourceSchema;

  /**
   * <p>An array of elements, where each element corresponds to a row in a stream record (a stream record can have more than one row).</p>
   */
  ParsedInputRecords?: string[][];

  /**
   * <p>Stream data that was modified by the processor specified in the <code>InputProcessingConfiguration</code> parameter.</p>
   */
  ProcessedInputRecords?: string[];

  /**
   * <p>Raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: string[];
}

export namespace DiscoverInputSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DiscoverInputSchemaResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Discovery failed to get a record from the
 *             streaming source because of the Amazon Kinesis Streams
 *             ProvisionedThroughputExceededException. For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a>
 *             in the Amazon Kinesis Streams API Reference.</p>
 */
export interface ResourceProvisionedThroughputExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceProvisionedThroughputExceededException";
  $fault: "client";
  message?: string;
}

export namespace ResourceProvisionedThroughputExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceProvisionedThroughputExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is unavailable. Back off and retry the operation. </p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>Data format is not valid. Amazon Kinesis Analytics is not able to detect schema for
 *             the given streaming source.</p>
 */
export interface UnableToDetectSchemaException extends __SmithyException, $MetadataBearer {
  name: "UnableToDetectSchemaException";
  $fault: "client";
  message?: string;
  RawInputRecords?: string[];
  ProcessedInputRecords?: string[];
}

export namespace UnableToDetectSchemaException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnableToDetectSchemaException): any => ({
    ...obj,
  });
}

/**
 * <p>When you start your application,
 *             you provide this configuration, which identifies the input source and the point
 *             in the input source at which you want the application to start processing records.</p>
 */
export interface InputConfiguration {
  /**
   * <p>Input source ID. You can get this ID by calling
   *             the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   */
  Id: string | undefined;

  /**
   * <p>Point at which you want the application to start processing
   *             records from the streaming source.</p>
   */
  InputStartingPositionConfiguration: InputStartingPositionConfiguration | undefined;
}

export namespace InputConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>User-provided application configuration is not valid.</p>
 */
export interface InvalidApplicationConfigurationException extends __SmithyException, $MetadataBearer {
  name: "InvalidApplicationConfigurationException";
  $fault: "client";
  /**
   * <p>test</p>
   */
  message?: string;
}

export namespace InvalidApplicationConfigurationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidApplicationConfigurationException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ListApplicationsRequest {
  /**
   * <p>Maximum number of applications to list.</p>
   */
  Limit?: number;

  /**
   * <p>Name of the application to start the list with. When using pagination to retrieve the list, you don't need to specify this parameter in the first request. However, in subsequent requests, you add the last application name from the previous response to get the next page of applications.</p>
   */
  ExclusiveStartApplicationName?: string;
}

export namespace ListApplicationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ListApplicationsResponse {
  /**
   * <p>List of <code>ApplicationSummary</code> objects. </p>
   */
  ApplicationSummaries: ApplicationSummary[] | undefined;

  /**
   * <p>Returns true if there are more applications to retrieve.</p>
   */
  HasMoreApplications: boolean | undefined;
}

export namespace ListApplicationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the application for which to retrieve tags.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value tags assigned to the application.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StartApplicationRequest {
  /**
   * <p>Name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Identifies the specific input, by ID, that the application starts consuming. Amazon Kinesis Analytics starts reading the streaming source associated with the input. You can also specify where in the streaming source you want Amazon Kinesis Analytics to start reading.</p>
   */
  InputConfigurations: InputConfiguration[] | undefined;
}

export namespace StartApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartApplicationRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StartApplicationResponse {}

export namespace StartApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartApplicationResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StopApplicationRequest {
  /**
   * <p>Name of the running application to stop.</p>
   */
  ApplicationName: string | undefined;
}

export namespace StopApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopApplicationRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StopApplicationResponse {}

export namespace StopApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopApplicationResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the application to assign the tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The key-value tags to assign to the application.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the Kinesis Analytics application from which to remove the tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of keys of tags to remove from the specified application.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateApplicationRequest {
  /**
   * <p>Name of the Amazon Kinesis Analytics application to update.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version ID. You can use the
   *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>Describes application updates.</p>
   */
  ApplicationUpdate: ApplicationUpdate | undefined;
}

export namespace UpdateApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
    ...obj,
  });
}

export interface UpdateApplicationResponse {}

export namespace UpdateApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
    ...obj,
  });
}
