// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KinesisAnalyticsServiceException as __BaseException } from "./KinesisAnalyticsServiceException";

/**
 * @public
 * <p>Provides a description of CloudWatch logging options, including the log stream
 *             Amazon Resource Name (ARN) and the role ARN.</p>
 */
export interface CloudWatchLoggingOption {
  /**
   * @public
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string | undefined;

  /**
   * @public
   * <p>IAM ARN of the role to use to send application messages. Note: To write application
   *             messages to CloudWatch, the IAM role that is used must have the
   *             <code>PutLogEvents</code> policy action enabled.</p>
   */
  RoleARN: string | undefined;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * @public
   * <p>The Kinesis Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The version ID of the Kinesis Analytics application.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>Provides the CloudWatch log stream Amazon Resource Name (ARN) and the IAM role ARN.
   *             Note: To write application messages to CloudWatch, the IAM role that is used must have
   *             the <code>PutLogEvents</code> policy action enabled.</p>
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption | undefined;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionResponse {}

/**
 * @public
 * <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * @public
 * <p>Specified input parameter value is invalid.</p>
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidArgumentException, __BaseException>) {
    super({
      name: "InvalidArgumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidArgumentException.prototype);
  }
}

/**
 * @public
 * <p>Application is not available for this operation.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * @public
 * <p>Specified application can't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedOperationException, __BaseException>) {
    super({
      name: "UnsupportedOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedOperationException.prototype);
  }
}

/**
 * @public
 * <p>Describes the number of in-application streams to create for a given
 *             streaming source. For information about parallelism,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *         </p>
 */
export interface InputParallelism {
  /**
   * @public
   * <p>Number of in-application streams to create.
   *             For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.
   *         </p>
   */
  Count?: number;
}

/**
 * @public
 * <p>An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that
 *             is used to preprocess records in the stream, and the ARN of the IAM role that is used to
 *             access the AWS Lambda function. </p>
 */
export interface InputLambdaProcessor {
  /**
   * @public
   * <p>The ARN of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that operates
   *             on records in the stream.</p>
   *             <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role that is used to access the AWS Lambda function.</p>
   */
  RoleARN: string | undefined;
}

/**
 * @public
 * <p>Provides a description of a processor that is used to preprocess the records in the
 *             stream before being processed by your application code. Currently, the only input
 *             processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS
 *                 Lambda</a>.</p>
 */
export interface InputProcessingConfiguration {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records
   *             in the stream before being processed by your application code.</p>
   */
  InputLambdaProcessor: InputLambdaProcessor | undefined;
}

/**
 * @public
 * <p>Describes the mapping of each data element in the streaming
 *             source to the corresponding column in the in-application stream.</p>
 *         <p>Also used to describe the format of the reference data source.</p>
 */
export interface RecordColumn {
  /**
   * @public
   * <p>Name of the column created in the in-application input stream or reference table.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Reference to the data element in the streaming input or the reference data source. This element
   *             is required if the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_RecordFormat.html#analytics-Type-RecordFormat-RecordFormatTypel">RecordFormatType</a> is <code>JSON</code>.</p>
   */
  Mapping?: string;

  /**
   * @public
   * <p>Type of column created in the in-application input stream or reference table.</p>
   */
  SqlType: string | undefined;
}

/**
 * @public
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
   * @public
   * <p>Row delimiter. For example, in a CSV format, <i>'\n'</i> is the typical row delimiter.</p>
   */
  RecordRowDelimiter: string | undefined;

  /**
   * @public
   * <p>Column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.</p>
   */
  RecordColumnDelimiter: string | undefined;
}

/**
 * @public
 * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
 */
export interface JSONMappingParameters {
  /**
   * @public
   * <p>Path to the top-level parent that contains the records.</p>
   */
  RecordRowPath: string | undefined;
}

/**
 * @public
 * <p>When configuring application input
 *             at the time of creating or updating an application,
 *             provides additional mapping information specific to
 *             the record format (such as JSON, CSV, or record fields delimited
 *             by some delimiter) on the streaming source.</p>
 */
export interface MappingParameters {
  /**
   * @public
   * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
   */
  JSONMappingParameters?: JSONMappingParameters;

  /**
   * @public
   * <p>Provides additional mapping information when the record format uses delimiters
   *             (for example, CSV).</p>
   */
  CSVMappingParameters?: CSVMappingParameters;
}

/**
 * @public
 * @enum
 */
export const RecordFormatType = {
  CSV: "CSV",
  JSON: "JSON",
} as const;

/**
 * @public
 */
export type RecordFormatType = (typeof RecordFormatType)[keyof typeof RecordFormatType];

/**
 * @public
 * <p>
 *             Describes the record format and relevant mapping information that
 *             should be applied to schematize the records on the stream.
 *         </p>
 */
export interface RecordFormat {
  /**
   * @public
   * <p>The type of record format.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;

  /**
   * @public
   * <p>When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.</p>
   */
  MappingParameters?: MappingParameters;
}

/**
 * @public
 * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
 */
export interface SourceSchema {
  /**
   * @public
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormat: RecordFormat | undefined;

  /**
   * @public
   * <p>Specifies the encoding of the records in the streaming source. For example, UTF-8.</p>
   */
  RecordEncoding?: string;

  /**
   * @public
   * <p>A list of <code>RecordColumn</code> objects.</p>
   */
  RecordColumns: RecordColumn[] | undefined;
}

/**
 * @public
 * <p> Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You
 *             provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that
 *             enables Amazon Kinesis Analytics to access the stream on your behalf.</p>
 */
export interface KinesisFirehoseInput {
  /**
   * @public
   * <p>ARN of the input delivery stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream
   *             on your behalf. You need to make sure that the role has the necessary permissions to
   *             access the stream.</p>
   */
  RoleARN: string | undefined;
}

/**
 * @public
 * <p> Identifies an Amazon Kinesis stream as the streaming source. You provide the
 *             stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis
 *             Analytics to access the stream on your behalf.</p>
 */
export interface KinesisStreamsInput {
  /**
   * @public
   * <p>ARN of the input Amazon Kinesis stream to read.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARN: string | undefined;
}

/**
 * @public
 * <p>When you configure the application input, you specify the streaming source,  the
 *             in-application stream name that is created, and the mapping between the two.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p>
 */
export interface Input {
  /**
   * @public
   * <p>Name prefix to use when creating an in-application stream. Suppose that you specify
   *             a prefix "MyInApplicationStream." Amazon Kinesis Analytics then creates one or more (as
   *             per the <code>InputParallelism</code> count you specified) in-application streams with
   *             names "MyInApplicationStream_001," "MyInApplicationStream_002," and so on. </p>
   */
  NamePrefix: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> for the input. An input
   *             processor transforms records as they are received from the stream, before the
   *             application's SQL code executes. Currently, the only input processing configuration
   *             available is <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * @public
   * <p>If the streaming source is an Amazon Kinesis stream,
   *             identifies the stream's Amazon Resource Name (ARN) and an IAM role
   *             that enables Amazon Kinesis Analytics to access the stream on your behalf.</p>
   *         <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   */
  KinesisStreamsInput?: KinesisStreamsInput;

  /**
   * @public
   * <p>If the streaming source is an Amazon Kinesis Firehose delivery stream, identifies
   *             the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to
   *             access the stream on your behalf.</p>
   *         <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   */
  KinesisFirehoseInput?: KinesisFirehoseInput;

  /**
   * @public
   * <p>Describes the number of in-application streams to create. </p>
   *          <p>Data from your source is routed to these in-application input streams.</p>
   *         <p>    (see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.</p>
   */
  InputParallelism?: InputParallelism;

  /**
   * @public
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.</p>
   *         <p>Also used to describe the format of the reference data source.</p>
   */
  InputSchema: SourceSchema | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface AddApplicationInputRequest {
  /**
   * @public
   * <p>Name of your existing Amazon Kinesis Analytics application to which you want to add the streaming source.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Current version of your Amazon Kinesis Analytics application. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation
   *             to find the current application version.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_Input.html">Input</a> to add.</p>
   */
  Input: Input | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface AddApplicationInputResponse {}

/**
 * @public
 * <p>User-provided application code (query) is invalid. This can be a simple syntax error.</p>
 */
export class CodeValidationException extends __BaseException {
  readonly name: "CodeValidationException" = "CodeValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeValidationException, __BaseException>) {
    super({
      name: "CodeValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeValidationException.prototype);
  }
}

/**
 * @public
 */
export interface AddApplicationInputProcessingConfigurationRequest {
  /**
   * @public
   * <p>Name of the application to which you want to add the input processing configuration.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Version of the application to which you want to add the input processing configuration. You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a>
   *             operation to get the current application version.  If the version specified is not the current version, the
   *             <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The ID of the input configuration to add the input processing configuration to. You
   *             can get a list of the input IDs for an application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   */
  InputId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to add to the application.</p>
   */
  InputProcessingConfiguration: InputProcessingConfiguration | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputProcessingConfigurationResponse {}

/**
 * @public
 * <p>Describes the data format when records are written to the destination.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
 *
 *
 *         </p>
 */
export interface DestinationSchema {
  /**
   * @public
   * <p>Specifies the format of the records on the output stream.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;
}

/**
 * @public
 * <p>When configuring application output,
 *             identifies an Amazon Kinesis Firehose delivery stream as the destination.
 *             You provide the stream Amazon Resource Name (ARN) and an IAM role
 *             that enables Amazon Kinesis Analytics to write to the stream on your behalf.</p>
 */
export interface KinesisFirehoseOutput {
  /**
   * @public
   * <p>ARN of the destination Amazon Kinesis Firehose delivery stream to write to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARN: string | undefined;
}

/**
 * @public
 * <p>When configuring application output, identifies an Amazon Kinesis stream as the
 *             destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN
 *             that Amazon Kinesis Analytics can use to write to the stream on your behalf.</p>
 */
export interface KinesisStreamsOutput {
  /**
   * @public
   * <p>ARN of the destination Amazon Kinesis stream to write to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARN: string | undefined;
}

/**
 * @public
 * <p>When configuring application output, identifies an AWS Lambda function as the
 *             destination. You provide the function Amazon Resource Name (ARN) and also an IAM role
 *             ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. </p>
 */
export interface LambdaOutput {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the destination Lambda function to write
   *             to.</p>
   *         <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role. </p>
   */
  RoleARN: string | undefined;
}

/**
 * @public
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
   * @public
   * <p>Name of the in-application stream.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Identifies an Amazon Kinesis stream
   *             as the destination.</p>
   */
  KinesisStreamsOutput?: KinesisStreamsOutput;

  /**
   * @public
   * <p>Identifies an Amazon Kinesis Firehose delivery stream as the destination.</p>
   */
  KinesisFirehoseOutput?: KinesisFirehoseOutput;

  /**
   * @public
   * <p>Identifies an AWS Lambda function as the destination.</p>
   */
  LambdaOutput?: LambdaOutput;

  /**
   * @public
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   */
  DestinationSchema: DestinationSchema | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface AddApplicationOutputRequest {
  /**
   * @public
   * <p>Name of the application to which you want to add the output configuration.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Version of the application to which you want to add the output configuration. You
   *             can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current
   *             application version. If the version specified is not the current version, the
   *                 <code>ConcurrentModificationException</code> is returned. </p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>An array of objects, each describing one output configuration. In the output
   *             configuration, you specify the name of an in-application stream, a destination (that is,
   *             an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda
   *             function), and record the formation to use when writing to the destination.</p>
   */
  Output: Output | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface AddApplicationOutputResponse {}

/**
 * @public
 * <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p>
 *         <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes,
 *             you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger
 *             reloading of data into your application.</p>
 */
export interface S3ReferenceDataSource {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>Object key name containing reference data.</p>
   */
  FileKey: string | undefined;

  /**
   * @public
   * <p>ARN of the IAM role that the service can assume to read data on your behalf. This role must have permission for the <code>s3:GetObject</code> action on the object and trust policy that allows Amazon Kinesis Analytics service principal to assume this role.</p>
   */
  ReferenceRoleARN: string | undefined;
}

/**
 * @public
 * <p>Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.</p>
 */
export interface ReferenceDataSource {
  /**
   * @public
   * <p>Name of the in-application table to create.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.
   *
   *             An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <code>UpdateApplication</code> operation to trigger reloading of data into your application. </p>
   */
  S3ReferenceDataSource?: S3ReferenceDataSource;

  /**
   * @public
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema: SourceSchema | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface AddApplicationReferenceDataSourceRequest {
  /**
   * @public
   * <p>Name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Version of the application for which you are adding the reference data source.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version.
   *             If the version specified is not the current version, the
   *             <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The reference data source can be an object in your Amazon S3 bucket. Amazon Kinesis Analytics reads the object and copies the data into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is created. You must also provide an IAM role with the necessary permissions that Amazon Kinesis Analytics can assume to read the object from your S3 bucket on your behalf.</p>
   */
  ReferenceDataSource: ReferenceDataSource | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface AddApplicationReferenceDataSourceResponse {}

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  DELETING: "DELETING",
  READY: "READY",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPING: "STOPPING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * <p>Description of the CloudWatch logging option.</p>
 */
export interface CloudWatchLoggingOptionDescription {
  /**
   * @public
   * <p>ID of the CloudWatch logging option description.</p>
   */
  CloudWatchLoggingOptionId?: string;

  /**
   * @public
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string | undefined;

  /**
   * @public
   * <p>IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the <code>PutLogEvents</code> policy action enabled.</p>
   */
  RoleARN: string | undefined;
}

/**
 * @public
 * <p>An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that
 *             is used to preprocess records in the stream, and the ARN of the IAM role that is  used
 *             to access the AWS Lambda expression.</p>
 */
export interface InputLambdaProcessorDescription {
  /**
   * @public
   * <p>The ARN of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess the records in the stream.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that is used to access the AWS Lambda function.</p>
   */
  RoleARN?: string;
}

/**
 * @public
 * <p>Provides configuration information about an input processor. Currently, the only input processor available is
 *             <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
 */
export interface InputProcessingConfigurationDescription {
  /**
   * @public
   * <p>Provides configuration information about the associated <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessorDescription.html">InputLambdaProcessorDescription</a>.</p>
   */
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}

/**
 * @public
 * @enum
 */
export const InputStartingPosition = {
  LAST_STOPPED_POINT: "LAST_STOPPED_POINT",
  NOW: "NOW",
  TRIM_HORIZON: "TRIM_HORIZON",
} as const;

/**
 * @public
 */
export type InputStartingPosition = (typeof InputStartingPosition)[keyof typeof InputStartingPosition];

/**
 * @public
 * <p>Describes the point at which the application reads from
 *             the streaming source.</p>
 */
export interface InputStartingPositionConfiguration {
  /**
   * @public
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

/**
 * @public
 * <p>
 *             Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source
 *             in the application input configuration.
 *         </p>
 */
export interface KinesisFirehoseInputDescription {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics assumes to access the stream.</p>
   */
  RoleARN?: string;
}

/**
 * @public
 * <p>
 *             Describes the Amazon Kinesis stream that is configured as the streaming source
 *             in the application input configuration.
 *           </p>
 */
export interface KinesisStreamsInputDescription {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.</p>
   */
  RoleARN?: string;
}

/**
 * @public
 * <p>Describes the application input configuration.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *         </p>
 */
export interface InputDescription {
  /**
   * @public
   * <p>Input ID associated with the application input.
   *             This is the ID that Amazon Kinesis Analytics assigns to each
   *             input configuration you add to your application. </p>
   */
  InputId?: string;

  /**
   * @public
   * <p>In-application name prefix.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>Returns the in-application stream names that are mapped to the
   *             stream source.</p>
   */
  InAppStreamNames?: string[];

  /**
   * @public
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run.</p>
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

  /**
   * @public
   * <p>If an Amazon Kinesis stream is configured as streaming source, provides Amazon
   *             Kinesis stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis
   *             Analytics to access the stream on your behalf.</p>
   */
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription;

  /**
   * @public
   * <p>If an Amazon Kinesis Firehose delivery stream is configured as a streaming source,
   *             provides the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics
   *             to access the stream on your behalf.</p>
   */
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

  /**
   * @public
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding
   *             columns in the in-application stream that is being created. </p>
   */
  InputSchema?: SourceSchema;

  /**
   * @public
   * <p>Describes the configured parallelism (number of in-application streams
   *             mapped to the streaming source).</p>
   */
  InputParallelism?: InputParallelism;

  /**
   * @public
   * <p>Point at which the application is configured to read from the input stream.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
}

/**
 * @public
 * <p>
 *             For an application output, describes
 *             the Amazon Kinesis Firehose delivery stream configured as its destination.
 *         </p>
 */
export interface KinesisFirehoseOutputDescription {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.</p>
   */
  RoleARN?: string;
}

/**
 * @public
 * <p>
 *             For an application output, describes
 *             the Amazon Kinesis stream configured as its destination.
 *         </p>
 */
export interface KinesisStreamsOutputDescription {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream.</p>
   */
  RoleARN?: string;
}

/**
 * @public
 * <p>For an application output, describes the AWS Lambda function configured as its
 *             destination. </p>
 */
export interface LambdaOutputDescription {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the destination Lambda function.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function.</p>
   */
  RoleARN?: string;
}

/**
 * @public
 * <p>Describes the application output configuration, which includes
 *             the in-application stream name and the destination where the stream data
 *             is written. The destination can be an Amazon Kinesis stream or an
 *             Amazon Kinesis Firehose delivery stream.
 *         </p>
 */
export interface OutputDescription {
  /**
   * @public
   * <p>A unique identifier for the output configuration.</p>
   */
  OutputId?: string;

  /**
   * @public
   * <p>Name of the in-application stream configured as output.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Describes Amazon Kinesis stream configured as the
   *             destination where output is written.</p>
   */
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

  /**
   * @public
   * <p>Describes the Amazon Kinesis Firehose delivery stream configured as the
   *             destination where output is written.</p>
   */
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

  /**
   * @public
   * <p>Describes the AWS Lambda function configured as the destination where output is
   *             written.</p>
   */
  LambdaOutputDescription?: LambdaOutputDescription;

  /**
   * @public
   * <p>Data format used for writing data to the destination.</p>
   */
  DestinationSchema?: DestinationSchema;
}

/**
 * @public
 * <p>Provides the bucket name and object key name that stores the reference data.</p>
 */
export interface S3ReferenceDataSourceDescription {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>Amazon S3 object key name.</p>
   */
  FileKey: string | undefined;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf to populate the in-application reference table.</p>
   */
  ReferenceRoleARN: string | undefined;
}

/**
 * @public
 * <p>Describes the reference data source configured for an application.</p>
 */
export interface ReferenceDataSourceDescription {
  /**
   * @public
   * <p>ID of the reference data source. This is the ID
   *             that Amazon Kinesis Analytics assigns when you add the reference data source
   *             to your application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation.</p>
   */
  ReferenceId: string | undefined;

  /**
   * @public
   * <p>The in-application table name created by the specific reference data source configuration.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>Provides the S3 bucket name, the object key name that contains the reference data. It also provides the Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription | undefined;

  /**
   * @public
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema?: SourceSchema;
}

/**
 * @public
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>
 */
export interface ApplicationDetail {
  /**
   * @public
   * <p>Name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * @public
   * <p>ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * @public
   * <p>Status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;

  /**
   * @public
   * <p>Time stamp when the application version was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * @public
   * <p>Time stamp when the application was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * @public
   * <p>Describes the application input configuration.
   *             For more information,
   *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
   *
   *         </p>
   */
  InputDescriptions?: InputDescription[];

  /**
   * @public
   * <p>Describes the application output configuration.
   *             For more information,
   *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
   *
   *         </p>
   */
  OutputDescriptions?: OutputDescription[];

  /**
   * @public
   * <p>Describes reference data sources configured for the application.
   *
   *             For more information,
   *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
   *
   *         </p>
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];

  /**
   * @public
   * <p>Describes the CloudWatch log streams that are configured to receive application
   *             messages. For more information about using CloudWatch log streams with Amazon Kinesis
   *             Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon
   *                 CloudWatch Logs</a>. </p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  /**
   * @public
   * <p>Returns the application code that you provided to perform data analysis on any of the in-application streams in your application.</p>
   */
  ApplicationCode?: string;

  /**
   * @public
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId: number | undefined;
}

/**
 * @public
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
 */
export interface ApplicationSummary {
  /**
   * @public
   * <p>Name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * @public
   * <p>Status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;
}

/**
 * @public
 * <p>Describes CloudWatch logging option updates.</p>
 */
export interface CloudWatchLoggingOptionUpdate {
  /**
   * @public
   * <p>ID of the CloudWatch logging option to update</p>
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * @public
   * <p>ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARNUpdate?: string;

  /**
   * @public
   * <p>IAM ARN of the role to use to send application messages. Note: To write application messages to CloudWatch, the IAM role used must have the <code>PutLogEvents</code> policy action enabled.</p>
   */
  RoleARNUpdate?: string;
}

/**
 * @public
 * <p>Provides updates to the parallelism count.</p>
 */
export interface InputParallelismUpdate {
  /**
   * @public
   * <p>Number of in-application streams to create for the specified
   *             streaming source.</p>
   */
  CountUpdate?: number;
}

/**
 * @public
 * <p>Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream.</p>
 */
export interface InputLambdaProcessorUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the new <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that
   *             is used to preprocess the records in the stream.</p>
   *         <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARNUpdate?: string;

  /**
   * @public
   * <p>The ARN of the new IAM role that is used to access the AWS Lambda
   *             function.</p>
   */
  RoleARNUpdate?: string;
}

/**
 * @public
 * <p>Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>. </p>
 */
export interface InputProcessingConfigurationUpdate {
  /**
   * @public
   * <p>Provides update information for an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   */
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate | undefined;
}

/**
 * @public
 * <p>Describes updates for the application's input schema.</p>
 */
export interface InputSchemaUpdate {
  /**
   * @public
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormatUpdate?: RecordFormat;

  /**
   * @public
   * <p>Specifies the encoding of the records in the streaming source. For example, UTF-8.</p>
   */
  RecordEncodingUpdate?: string;

  /**
   * @public
   * <p>A list of <code>RecordColumn</code> objects. Each object describes the mapping
   *             of the streaming source element to the corresponding column in the in-application stream. </p>
   */
  RecordColumnUpdates?: RecordColumn[];
}

/**
 * @public
 * <p>When updating application input configuration, provides information about an
 *             Amazon Kinesis Firehose delivery stream as the streaming source.</p>
 */
export interface KinesisFirehoseInputUpdate {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the input Amazon Kinesis Firehose delivery stream to
   *             read.</p>
   */
  ResourceARNUpdate?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream
   *             on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARNUpdate?: string;
}

/**
 * @public
 * <p>When updating application input configuration, provides information about an
 *             Amazon Kinesis stream as the streaming source.</p>
 */
export interface KinesisStreamsInputUpdate {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the input Amazon Kinesis stream to read.</p>
   */
  ResourceARNUpdate?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARNUpdate?: string;
}

/**
 * @public
 * <p>Describes updates to a specific input configuration (identified by the
 *             <code>InputId</code> of an application). </p>
 */
export interface InputUpdate {
  /**
   * @public
   * <p>Input ID of the application input to be updated.</p>
   */
  InputId: string | undefined;

  /**
   * @public
   * <p>Name prefix for in-application streams that Amazon Kinesis Analytics creates
   *             for the specific streaming source.</p>
   */
  NamePrefixUpdate?: string;

  /**
   * @public
   * <p>Describes updates for an input processing configuration.</p>
   */
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

  /**
   * @public
   * <p>If an Amazon Kinesis stream is the streaming source to be updated, provides an
   *             updated stream Amazon Resource Name (ARN) and IAM role ARN.</p>
   */
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

  /**
   * @public
   * <p>If an Amazon Kinesis Firehose delivery stream is the streaming source to be
   *             updated, provides an updated stream ARN and IAM role ARN.</p>
   */
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

  /**
   * @public
   * <p>Describes the data format on the streaming source, and
   *             how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   */
  InputSchemaUpdate?: InputSchemaUpdate;

  /**
   * @public
   * <p>Describes the parallelism updates (the number in-application
   *             streams Amazon Kinesis Analytics creates for the specific streaming source).</p>
   */
  InputParallelismUpdate?: InputParallelismUpdate;
}

/**
 * @public
 * <p>
 *             When updating an output configuration using the
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation,
 *             provides information about an Amazon Kinesis Firehose delivery stream configured as
 *             the destination.
 *         </p>
 */
export interface KinesisFirehoseOutputUpdate {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis Firehose delivery stream to write to.</p>
   */
  ResourceARNUpdate?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream
   *             on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARNUpdate?: string;
}

/**
 * @public
 * <p>
 *             When updating an output configuration using the
 *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a>  operation,
 *             provides information about an Amazon Kinesis stream configured as
 *             the destination.
 *         </p>
 */
export interface KinesisStreamsOutputUpdate {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the Amazon Kinesis stream where you want to write the output.</p>
   */
  ResourceARNUpdate?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf. You need to grant the necessary permissions to this role.</p>
   */
  RoleARNUpdate?: string;
}

/**
 * @public
 * <p>When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a>
 *             operation, provides information about an AWS Lambda function configured as the
 *             destination.</p>
 */
export interface LambdaOutputUpdate {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the destination Lambda function.</p>
   *         <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARNUpdate?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to write to the destination function on your behalf. You need to grant the necessary permissions to this role. </p>
   */
  RoleARNUpdate?: string;
}

/**
 * @public
 * <p>
 *             Describes updates to the output configuration identified by
 *             the <code>OutputId</code>.
 *         </p>
 */
export interface OutputUpdate {
  /**
   * @public
   * <p>Identifies the specific output configuration that you want to update.</p>
   */
  OutputId: string | undefined;

  /**
   * @public
   * <p>If you want to specify a different in-application stream
   *             for this output configuration, use this field to
   *             specify the new in-application stream name.</p>
   */
  NameUpdate?: string;

  /**
   * @public
   * <p>Describes an Amazon Kinesis stream as the destination for the output.</p>
   */
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

  /**
   * @public
   * <p>Describes an Amazon Kinesis Firehose delivery stream as the destination for the
   *             output.</p>
   */
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

  /**
   * @public
   * <p>Describes an AWS Lambda function as the destination for the output.</p>
   */
  LambdaOutputUpdate?: LambdaOutputUpdate;

  /**
   * @public
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   */
  DestinationSchemaUpdate?: DestinationSchema;
}

/**
 * @public
 * <p>Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
 */
export interface S3ReferenceDataSourceUpdate {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARNUpdate?: string;

  /**
   * @public
   * <p>Object key name.</p>
   */
  FileKeyUpdate?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application.</p>
   */
  ReferenceRoleARNUpdate?: string;
}

/**
 * @public
 * <p>When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.</p>
 */
export interface ReferenceDataSourceUpdate {
  /**
   * @public
   * <p>ID of the reference data source being updated. You can use the
   *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.</p>
   */
  ReferenceId: string | undefined;

  /**
   * @public
   * <p>In-application table name that is created by this update.</p>
   */
  TableNameUpdate?: string;

  /**
   * @public
   * <p>Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

  /**
   * @public
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. </p>
   */
  ReferenceSchemaUpdate?: SourceSchema;
}

/**
 * @public
 * <p>Describes updates to apply to an existing Amazon Kinesis Analytics application.</p>
 */
export interface ApplicationUpdate {
  /**
   * @public
   * <p>Describes application input configuration updates.</p>
   */
  InputUpdates?: InputUpdate[];

  /**
   * @public
   * <p>Describes application code updates.</p>
   */
  ApplicationCodeUpdate?: string;

  /**
   * @public
   * <p>Describes application output configuration updates.</p>
   */
  OutputUpdates?: OutputUpdate[];

  /**
   * @public
   * <p>Describes application reference data source updates.</p>
   */
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[];

  /**
   * @public
   * <p>Describes application CloudWatch logging option updates.</p>
   */
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];
}

/**
 * @public
 * <p>A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that
 *         the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
 *       For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key of the key-value tag.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value of the key-value tag. The value is optional.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>TBD</p>
 */
export interface CreateApplicationRequest {
  /**
   * @public
   * <p>Name of your Amazon Kinesis Analytics application (for example, <code>sample-app</code>).</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Summary description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * @public
   * <p>Use this parameter to configure the application input.</p>
   *         <p>You can configure your application to receive input from a single streaming source. In this configuration, you map this streaming source to an in-application stream that is created. Your application code can then query the in-application stream like a table (you can think of it as a constantly updating table).</p>
   *         <p>For the streaming source, you provide its Amazon Resource Name (ARN) and format of
   *             data on the stream (for example, JSON, CSV, etc.). You also must provide an IAM role
   *             that Amazon Kinesis Analytics can assume to read this stream on your behalf.</p>
   *         <p>To create the in-application stream, you need to specify a schema to transform your data into a schematized version used in SQL. In the schema, you provide the necessary mapping of the data elements in the streaming source to record columns in the in-app stream.</p>
   */
  Inputs?: Input[];

  /**
   * @public
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
   * @public
   * <p>Use this parameter to configure a CloudWatch log stream to monitor application
   *             configuration errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon
   *                 CloudWatch Logs</a>.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[];

  /**
   * @public
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
   * @public
   * <p>A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
   *         For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>TBD</p>
 */
export interface CreateApplicationResponse {
  /**
   * @public
   * <p>In response to your <code>CreateApplication</code> request, Amazon Kinesis Analytics returns a
   *             response with a summary of the application it created, including the application Amazon Resource Name (ARN),
   *             name, and status.</p>
   */
  ApplicationSummary: ApplicationSummary | undefined;
}

/**
 * @public
 * <p>Exceeded the number of applications allowed.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface DeleteApplicationRequest {
  /**
   * @public
   * <p>Name of the Amazon Kinesis Analytics application to delete.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>
   *             You can use the <code>DescribeApplication</code> operation to get this value.
   *         </p>
   */
  CreateTimestamp: Date | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * @public
   * <p>The Kinesis Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The version ID of the Kinesis Analytics application.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The <code>CloudWatchLoggingOptionId</code> of the CloudWatch logging option to
   *             delete. You can get the <code>CloudWatchLoggingOptionId</code> by using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation. </p>
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
   * @public
   * <p>The Kinesis Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The version ID of the Kinesis Analytics application.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The ID of the input configuration from which to delete the input processing
   *             configuration. You can get a list of the input IDs for an application by using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   */
  InputId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationInputProcessingConfigurationResponse {}

/**
 * @public
 * <p></p>
 */
export interface DeleteApplicationOutputRequest {
  /**
   * @public
   * <p>Amazon Kinesis Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Amazon Kinesis Analytics application version.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version.
   *             If the version specified is not the current version, the
   *             <code>ConcurrentModificationException</code> is returned.
   *         </p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
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

/**
 * @public
 * <p></p>
 */
export interface DeleteApplicationOutputResponse {}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceRequest {
  /**
   * @public
   * <p>Name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Version of the application.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the current application version.
   *             If the version specified
   *             is not the current version, the <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>ID of the reference data source. When you add a reference data source to your
   *             application using the
   *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a>, Amazon Kinesis Analytics assigns an ID.
   *             You can use the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get the reference ID.
   *         </p>
   */
  ReferenceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceResponse {}

/**
 * @public
 * <p></p>
 */
export interface DescribeApplicationRequest {
  /**
   * @public
   * <p>Name of the application.</p>
   */
  ApplicationName: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface DescribeApplicationResponse {
  /**
   * @public
   * <p>Provides a description of the application, such as the application Amazon Resource Name (ARN), status, latest version, and input and output configuration details.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * @public
 * <p>Provides a description of an Amazon S3 data source, including the Amazon Resource
 *             Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket,
 *             and the name of the Amazon S3 object that contains the data.</p>
 */
export interface S3Configuration {
  /**
   * @public
   * <p>IAM ARN of the role used to access the data.</p>
   */
  RoleARN: string | undefined;

  /**
   * @public
   * <p>ARN of the S3 bucket that contains the data.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>The name of the object that contains the data.</p>
   */
  FileKey: string | undefined;
}

/**
 * @public
 */
export interface DiscoverInputSchemaRequest {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the streaming source.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf.</p>
   */
  RoleARN?: string;

  /**
   * @public
   * <p>Point at which you want Amazon Kinesis Analytics to start reading records from the specified streaming source discovery purposes.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  /**
   * @public
   * <p>Specify this parameter to discover a schema from data in an Amazon S3
   *             object.</p>
   */
  S3Configuration?: S3Configuration;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to use to preprocess the records before discovering the schema of the records.</p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;
}

/**
 * @public
 * <p></p>
 */
export interface DiscoverInputSchemaResponse {
  /**
   * @public
   * <p>Schema inferred from the streaming source. It identifies the format of the data in the streaming source and how each data element maps to corresponding columns in the in-application stream that you can create.</p>
   */
  InputSchema?: SourceSchema;

  /**
   * @public
   * <p>An array of elements, where each element corresponds to a row in a stream record (a stream record can have more than one row).</p>
   */
  ParsedInputRecords?: string[][];

  /**
   * @public
   * <p>Stream data that was modified by the processor specified in the <code>InputProcessingConfiguration</code> parameter.</p>
   */
  ProcessedInputRecords?: string[];

  /**
   * @public
   * <p>Raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: string[];
}

/**
 * @public
 * <p>Discovery failed to get a record from the
 *             streaming source because of the Amazon Kinesis Streams
 *             ProvisionedThroughputExceededException. For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a>
 *             in the Amazon Kinesis Streams API Reference.</p>
 */
export class ResourceProvisionedThroughputExceededException extends __BaseException {
  readonly name: "ResourceProvisionedThroughputExceededException" = "ResourceProvisionedThroughputExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceProvisionedThroughputExceededException, __BaseException>) {
    super({
      name: "ResourceProvisionedThroughputExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceProvisionedThroughputExceededException.prototype);
  }
}

/**
 * @public
 * <p>The service is unavailable. Back off and retry the operation. </p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * @public
 * <p>Data format is not valid. Amazon Kinesis Analytics is not able to detect schema for
 *             the given streaming source.</p>
 */
export class UnableToDetectSchemaException extends __BaseException {
  readonly name: "UnableToDetectSchemaException" = "UnableToDetectSchemaException";
  readonly $fault: "client" = "client";
  RawInputRecords?: string[];
  ProcessedInputRecords?: string[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnableToDetectSchemaException, __BaseException>) {
    super({
      name: "UnableToDetectSchemaException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnableToDetectSchemaException.prototype);
    this.RawInputRecords = opts.RawInputRecords;
    this.ProcessedInputRecords = opts.ProcessedInputRecords;
  }
}

/**
 * @public
 * <p>When you start your application,
 *             you provide this configuration, which identifies the input source and the point
 *             in the input source at which you want the application to start processing records.</p>
 */
export interface InputConfiguration {
  /**
   * @public
   * <p>Input source ID. You can get this ID by calling
   *             the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Point at which you want the application to start processing
   *             records from the streaming source.</p>
   */
  InputStartingPositionConfiguration: InputStartingPositionConfiguration | undefined;
}

/**
 * @public
 * <p>User-provided application configuration is not valid.</p>
 */
export class InvalidApplicationConfigurationException extends __BaseException {
  readonly name: "InvalidApplicationConfigurationException" = "InvalidApplicationConfigurationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidApplicationConfigurationException, __BaseException>) {
    super({
      name: "InvalidApplicationConfigurationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidApplicationConfigurationException.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface ListApplicationsRequest {
  /**
   * @public
   * <p>Maximum number of applications to list.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>Name of the application to start the list with. When using pagination to retrieve the list, you don't need to specify this parameter in the first request. However, in subsequent requests, you add the last application name from the previous response to get the next page of applications.</p>
   */
  ExclusiveStartApplicationName?: string;
}

/**
 * @public
 * <p></p>
 */
export interface ListApplicationsResponse {
  /**
   * @public
   * <p>List of <code>ApplicationSummary</code> objects. </p>
   */
  ApplicationSummaries: ApplicationSummary[] | undefined;

  /**
   * @public
   * <p>Returns true if there are more applications to retrieve.</p>
   */
  HasMoreApplications: boolean | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the application for which to retrieve tags.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The key-value tags assigned to the application.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p></p>
 */
export interface StartApplicationRequest {
  /**
   * @public
   * <p>Name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Identifies the specific input, by ID, that the application starts consuming. Amazon Kinesis Analytics starts reading the streaming source associated with the input. You can also specify where in the streaming source you want Amazon Kinesis Analytics to start reading.</p>
   */
  InputConfigurations: InputConfiguration[] | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface StartApplicationResponse {}

/**
 * @public
 * <p></p>
 */
export interface StopApplicationRequest {
  /**
   * @public
   * <p>Name of the running application to stop.</p>
   */
  ApplicationName: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface StopApplicationResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the application to assign the tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The key-value tags to assign to the application.</p>
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
   * @public
   * <p>The ARN of the Kinesis Analytics application from which to remove the tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A list of keys of tags to remove from the specified application.</p>
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
   * @public
   * <p>Name of the Amazon Kinesis Analytics application to update.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The current application version ID. You can use the
   *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>Describes application updates.</p>
   */
  ApplicationUpdate: ApplicationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}
