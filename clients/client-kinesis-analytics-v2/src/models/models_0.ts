// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { KinesisAnalyticsV2ServiceException as __BaseException } from "./KinesisAnalyticsV2ServiceException";

/**
 * <p>Provides a description of Amazon CloudWatch logging options, including the log stream
 *       Amazon Resource Name (ARN). </p>
 */
export interface CloudWatchLoggingOption {
  /**
   * <p>The ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string | undefined;
}

export interface AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * <p>The Kinesis Data Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version ID of the Kinesis Data Analytics application. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>.You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  CurrentApplicationVersionId?: number;

  /**
   * <p>Provides the Amazon CloudWatch log stream Amazon Resource Name (ARN). </p>
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption | undefined;

  /**
   * <p>A value you use to implement strong concurrency for application updates. You must
   *       provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You
   *       get the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the
   *         <code>ConditionalToken</code> parameter instead of
   *       <code>CurrentApplicationVersionId</code>.</p>
   */
  ConditionalToken?: string;
}

/**
 * <p>Describes the Amazon CloudWatch logging option.</p>
 */
export interface CloudWatchLoggingOptionDescription {
  /**
   * <p>The ID of the CloudWatch logging option description.</p>
   */
  CloudWatchLoggingOptionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log to receive application
   *       messages.</p>
   */
  LogStreamARN: string | undefined;

  /**
   * <p>The IAM ARN of the role to use to send application messages. </p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications created with the current API version have an
   *         application-level service execution role rather than a resource-level role.</p>
   *          </note>
   */
  RoleARN?: string;
}

export interface AddApplicationCloudWatchLoggingOptionResponse {
  /**
   * <p>The application's ARN.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The new version ID of the Kinesis Data Analytics application. Kinesis Data Analytics
   *       updates the <code>ApplicationVersionId</code> each time you change the CloudWatch logging
   *       options. </p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The descriptions of the current CloudWatch logging options for the Kinesis Data Analytics application.</p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
}

/**
 * <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The user-provided application configuration is not valid.</p>
 */
export class InvalidApplicationConfigurationException extends __BaseException {
  readonly name: "InvalidApplicationConfigurationException" = "InvalidApplicationConfigurationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified input parameter value is not valid.</p>
 */
export class InvalidArgumentException extends __BaseException {
  readonly name: "InvalidArgumentException" = "InvalidArgumentException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The request JSON is not valid for the operation.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The application is not available for this operation.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Specified application can't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the number of
 *       in-application streams to create for a given streaming source. </p>
 */
export interface InputParallelism {
  /**
   * <p>The number of in-application streams to create.</p>
   */
  Count?: number;
}

/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is
 *       used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application. </p>
 */
export interface InputLambdaProcessor {
  /**
   * <p>The ARN of the Amazon Lambda function that operates on records in the stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes a processor that is
 *       used to preprocess the records in the stream before being processed by your application code.
 *       Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.</p>
 */
export interface InputProcessingConfiguration {
  /**
   * <p>The <a>InputLambdaProcessor</a> that is used to preprocess the records
   *       in the stream before being processed by your application code.</p>
   */
  InputLambdaProcessor: InputLambdaProcessor | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the mapping of each
 *       data element in the streaming source to the corresponding column in the in-application
 *       stream.</p>
 *          <p>Also used to describe the format of the reference data source.</p>
 */
export interface RecordColumn {
  /**
   * <p>The name of the column that is created in the in-application input stream or reference
   *       table.</p>
   */
  Name: string | undefined;

  /**
   * <p>A reference to the data element in the streaming input or the reference data
   *       source.</p>
   */
  Mapping?: string;

  /**
   * <p>The type of column created in the in-application input stream or reference table.</p>
   */
  SqlType: string | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record
 *       format uses delimiters, such as CSV. For example, the following sample records use CSV format,
 *       where the records use the <i>'\n'</i> as the row delimiter and a comma (",") as
 *       the column delimiter: </p>
 *
 *          <p>
 *             <code>"name1", "address1"</code>
 *          </p>
 *          <p>
 *             <code>"name2", "address2"</code>
 *          </p>
 */
export interface CSVMappingParameters {
  /**
   * <p>The row delimiter. For example, in a CSV format, <i>'\n'</i> is the typical
   *       row delimiter.</p>
   */
  RecordRowDelimiter: string | undefined;

  /**
   * <p>The column delimiter. For example, in a CSV format, a comma (",") is the typical column
   *       delimiter.</p>
   */
  RecordColumnDelimiter: string | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides additional mapping
 *       information when JSON is the record format on the streaming source.</p>
 */
export interface JSONMappingParameters {
  /**
   * <p>The path to the top-level parent that contains the records.</p>
   */
  RecordRowPath: string | undefined;
}

/**
 * <p>When you configure a SQL-based Kinesis Data Analytics application's input at the
 *       time of creating or updating an application, provides additional mapping information specific
 *       to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the
 *       streaming source.</p>
 */
export interface MappingParameters {
  /**
   * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
   */
  JSONMappingParameters?: JSONMappingParameters;

  /**
   * <p>Provides additional mapping information when the record format uses delimiters
   *       (for example, CSV).</p>
   */
  CSVMappingParameters?: CSVMappingParameters;
}

export enum RecordFormatType {
  CSV = "CSV",
  JSON = "JSON",
}

/**
 * <p> For a SQL-based Kinesis Data Analytics application, describes the record format
 *       and relevant mapping information that should be applied to schematize the records on the
 *       stream. </p>
 */
export interface RecordFormat {
  /**
   * <p>The type of record format.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;

  /**
   * <p>When you configure application input at the time of creating or updating an application,
   *       provides additional mapping information specific to the record format (such as JSON, CSV, or
   *       record fields delimited by some delimiter) on the streaming source.</p>
   */
  MappingParameters?: MappingParameters;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the format of the
 *       data in the streaming source, and how each data element maps to corresponding columns created
 *       in the in-application stream. </p>
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
   * <p>A list of <code>RecordColumn</code> objects. </p>
   */
  RecordColumns: RecordColumn[] | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data
 *       Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon
 *       Resource Name (ARN).</p>
 */
export interface KinesisFirehoseInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * <p> Identifies a Kinesis data stream as the streaming source. You provide the
 *       stream's Amazon Resource Name (ARN).</p>
 */
export interface KinesisStreamsInput {
  /**
   * <p>The ARN of the input Kinesis data stream to read.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * <p>When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream
 *       name that is created,
 *       and the mapping between the two. </p>
 */
export interface Input {
  /**
   * <p>The name prefix to use when creating an in-application stream. Suppose that you specify a
   *       prefix "<code>MyInApplicationStream</code>." Kinesis Data Analytics then creates one or more
   *       (as per the <code>InputParallelism</code> count you specified) in-application streams with the
   *       names "<code>MyInApplicationStream_001</code>," "<code>MyInApplicationStream_002</code>," and
   *       so on. </p>
   */
  NamePrefix: string | undefined;

  /**
   * <p>The <a>InputProcessingConfiguration</a> for the input. An input processor transforms records as they are received
   *       from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is
   *       <a>InputLambdaProcessor</a>. </p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * <p>If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInput?: KinesisStreamsInput;

  /**
   * <p>If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.</p>
   */
  KinesisFirehoseInput?: KinesisFirehoseInput;

  /**
   * <p>Describes the number of in-application streams to create. </p>
   */
  InputParallelism?: InputParallelism;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps
   *       to corresponding columns in the in-application stream that is being created.</p>
   *          <p>Also used to describe the format of the reference data source.</p>
   */
  InputSchema: SourceSchema | undefined;
}

export interface AddApplicationInputRequest {
  /**
   * <p>The name of your existing application to which you want to add the streaming
   *       source.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current version of your application.
   *         You must provide the <code>ApplicationVersionID</code> or the <code>ConditionalToken</code>.You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The <a>Input</a> to add.</p>
   */
  Input: Input | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, an object that contains the
 *       Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in
 *       the stream.</p>
 */
export interface InputLambdaProcessorDescription {
  /**
   * <p>The ARN of the Amazon Lambda function that is used to preprocess the records in the
   *       stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to access the Amazon Lambda function.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides the configuration
 *         information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.</p>
 */
export interface InputProcessingConfigurationDescription {
  /**
   * <p>Provides configuration information about the associated <a>InputLambdaProcessorDescription</a>
   *          </p>
   */
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}

export enum InputStartingPosition {
  LAST_STOPPED_POINT = "LAST_STOPPED_POINT",
  NOW = "NOW",
  TRIM_HORIZON = "TRIM_HORIZON",
}

/**
 * <p>Describes the point at which the application reads from
 *       the streaming source.</p>
 */
export interface InputStartingPositionConfiguration {
  /**
   * <p>The starting position on the stream.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NOW</code> - Start reading just after the most recent record in the stream, and
   *           start at the request timestamp that the customer issued.</p>
   *
   *
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TRIM_HORIZON</code> - Start reading at the last untrimmed record in the stream,
   *           which is the oldest record available in the stream. This option is not available
   *           for an Amazon Kinesis Data Firehose delivery stream.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAST_STOPPED_POINT</code> - Resume reading from where the application last stopped reading.</p>
   *             </li>
   *          </ul>
   */
  InputStartingPosition?: InputStartingPosition | string;
}

/**
 * <p>Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source
 *       in the application input configuration. </p>
 */
export interface KinesisFirehoseInputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics assumes to access the stream.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the Kinesis data
 *       stream that is configured as the streaming source in the application input configuration. </p>
 */
export interface KinesisStreamsInputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to access the
   *       stream.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;
}

/**
 * <p>Describes the application input configuration for a SQL-based Kinesis Data Analytics application. </p>
 */
export interface InputDescription {
  /**
   * <p>The input ID that is associated with the application input. This is the ID that Kinesis Data Analytics assigns to each input
   *       configuration that you add to your application. </p>
   */
  InputId?: string;

  /**
   * <p>The in-application name prefix.</p>
   */
  NamePrefix?: string;

  /**
   * <p>Returns the in-application stream names that are mapped to the stream source. </p>
   */
  InAppStreamNames?: string[];

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run. </p>
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

  /**
   * <p>If a Kinesis data stream is configured as a streaming source, provides the Kinesis data
   *       stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is configured as a streaming source, provides the delivery stream's ARN. </p>
   */
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns
   *       in the in-application stream that is being created. </p>
   */
  InputSchema?: SourceSchema;

  /**
   * <p>Describes the configured parallelism (number of in-application streams mapped to the streaming source). </p>
   */
  InputParallelism?: InputParallelism;

  /**
   * <p>The point at which the application is configured to read from the input stream.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
}

export interface AddApplicationInputResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>Describes the application input configuration.
   *
   *
   *     </p>
   */
  InputDescriptions?: InputDescription[];
}

/**
 * <p>The user-provided application code (query) is not valid. This can be a simple syntax
 *       error.</p>
 */
export class CodeValidationException extends __BaseException {
  readonly name: "CodeValidationException" = "CodeValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export interface AddApplicationInputProcessingConfigurationRequest {
  /**
   * <p>The name of the application to which you want to add the input processing
   *       configuration.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version of the application to which you want to add the input processing
   *       configuration. You can use the <a>DescribeApplication</a> operation to get the
   *       current application version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the input configuration to add the input processing configuration to. You
   *       can get a list of the input IDs for an application using the <a>DescribeApplication</a> operation.</p>
   */
  InputId: string | undefined;

  /**
   * <p>The <a>InputProcessingConfiguration</a> to add to the application.</p>
   */
  InputProcessingConfiguration: InputProcessingConfiguration | undefined;
}

export interface AddApplicationInputProcessingConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>Provides the current application version. </p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The input ID that is associated with the application input. This is the ID that Kinesis Data Analytics assigns
   *       to each input configuration that you add to your
   *       application.</p>
   */
  InputId?: string;

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run.</p>
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
}

/**
 * <p>Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application. </p>
 */
export interface DestinationSchema {
  /**
   * <p>Specifies the format of the records on the output stream.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, when configuring application
 *       output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the
 *       stream Amazon Resource Name (ARN) of the delivery stream. </p>
 */
export interface KinesisFirehoseOutput {
  /**
   * <p>The ARN of the destination delivery stream to write to.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * <p>When you configure a SQL-based Kinesis Data Analytics application's output,
 *       identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource
 *       Name (ARN). </p>
 */
export interface KinesisStreamsOutput {
  /**
   * <p>The ARN of the destination Kinesis data stream to write to.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * <p>When you configure a SQL-based Kinesis Data Analytics application's output,
 *       identifies an Amazon Lambda function as the destination. You provide the function Amazon Resource
 *       Name (ARN) of the Lambda function. </p>
 */
export interface LambdaOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Lambda function to write to.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;
}

/**
 * <p> Describes a SQL-based Kinesis Data Analytics application's output configuration,
 *       in which you identify an in-application stream and a destination where you want the
 *       in-application stream data to be written. The destination can be a Kinesis data stream or a
 *       Kinesis Data Firehose delivery stream. </p>
 *
 *          <p></p>
 */
export interface Output {
  /**
   * <p>The name of the in-application stream.</p>
   */
  Name: string | undefined;

  /**
   * <p>Identifies a Kinesis data stream
   *       as the destination.</p>
   */
  KinesisStreamsOutput?: KinesisStreamsOutput;

  /**
   * <p>Identifies a Kinesis Data Firehose delivery stream as the destination.</p>
   */
  KinesisFirehoseOutput?: KinesisFirehoseOutput;

  /**
   * <p>Identifies an Amazon Lambda function as the destination.</p>
   */
  LambdaOutput?: LambdaOutput;

  /**
   * <p>Describes the data format when records are written to the destination.
   *       </p>
   */
  DestinationSchema: DestinationSchema | undefined;
}

export interface AddApplicationOutputRequest {
  /**
   * <p>The name of the application to which you want to add the output configuration.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version of the application to which you want to add the output configuration. You can
   *       use the <a>DescribeApplication</a> operation to get the current application
   *       version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned. </p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>An array of objects, each describing one output configuration. In the output
   *       configuration, you specify the name of an in-application stream, a destination (that is, a
   *       Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), and
   *       record the formation to use when writing to the destination.</p>
   */
  Output: Output | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis
 *       Data Firehose delivery stream that is configured as its destination.</p>
 */
export interface KinesisFirehoseOutputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to access the
   *       stream.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;
}

/**
 * <p>For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis
 *       data stream that is configured as its destination. </p>
 */
export interface KinesisStreamsOutputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to access the
   *       stream.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application's output, describes the Amazon
 *       Lambda function that is configured as its destination. </p>
 */
export interface LambdaOutputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Lambda function.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to write to the destination
   *       function.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the application
 *       output configuration, which includes the in-application stream name and the destination where
 *       the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data
 *       Firehose delivery stream. </p>
 */
export interface OutputDescription {
  /**
   * <p>A unique identifier for the output configuration.</p>
   */
  OutputId?: string;

  /**
   * <p>The name of the in-application stream that is configured as output.</p>
   */
  Name?: string;

  /**
   * <p>Describes the Kinesis data stream that is configured as the destination where output is
   *       written.</p>
   */
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

  /**
   * <p>Describes the Kinesis Data Firehose delivery stream that is configured as the destination
   *       where output is written.</p>
   */
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

  /**
   * <p>Describes the Lambda function that is configured as the destination where output is
   *       written.</p>
   */
  LambdaOutputDescription?: LambdaOutputDescription;

  /**
   * <p>The data format used for writing data to the destination.</p>
   */
  DestinationSchema?: DestinationSchema;
}

export interface AddApplicationOutputResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated application version ID. Kinesis Data Analytics increments this ID when the application is
   *       updated.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>Describes the application output configuration.
   *       For more information,
   *       see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
   *
   *     </p>
   */
  OutputDescriptions?: OutputDescription[];
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3
 *       bucket and object that contains the reference data.</p>
 *
 *          <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a>
 *         operation to trigger reloading of data into your application. </p>
 */
export interface S3ReferenceDataSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN?: string;

  /**
   * <p>The object key name containing the reference data.</p>
   */
  FileKey?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the reference data
 *       source by providing the source information (Amazon S3 bucket name and object key name), the
 *       resulting in-application table name that is created, and the necessary schema to map the data
 *       elements in the Amazon S3 object to the in-application table.</p>
 */
export interface ReferenceDataSource {
  /**
   * <p>The name of the in-application table to create.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Identifies the S3 bucket and object that contains the reference data.
   *
   *       A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
   */
  S3ReferenceDataSource?: S3ReferenceDataSource;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema: SourceSchema | undefined;
}

export interface AddApplicationReferenceDataSourceRequest {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version of the application for which you are adding the reference data source.
   *         You can
   *       use the <a>DescribeApplication</a> operation to get the current application
   *       version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The reference data source can be an object in your Amazon S3 bucket. Kinesis Data Analytics reads the object and copies the data
   *       into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting
   *       in-application table that is
   *       created. </p>
   */
  ReferenceDataSource: ReferenceDataSource | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides the bucket name and
 *       object key name that stores the reference data.</p>
 */
export interface S3ReferenceDataSourceDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>Amazon S3 object key name.</p>
   */
  FileKey: string | undefined;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics can assume to read the Amazon S3
   *       object on your behalf to populate the in-application reference table. </p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  ReferenceRoleARN?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the reference data
 *       source configured for an application.</p>
 */
export interface ReferenceDataSourceDescription {
  /**
   * <p>The ID of the reference data source. This is the ID that Kinesis Data Analytics assigns
   *       when you add the reference data source to your application using the <a>CreateApplication</a> or <a>UpdateApplication</a> operation.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>The in-application table name created by the specific reference data source configuration.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Provides the Amazon S3 bucket name, the object key name that contains the reference data. </p>
   */
  S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema?: SourceSchema;
}

export interface AddApplicationReferenceDataSourceResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated application version ID. Kinesis Data Analytics increments this ID when
   *       the application is updated.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>Describes reference data sources configured for the application.
   *
   *
   *
   *     </p>
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}

/**
 * <p>Describes the parameters of a VPC used by the application.</p>
 */
export interface VpcConfiguration {
  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs
   *         used by the VPC configuration.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a>
   *         IDs used by the VPC configuration.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

export interface AddApplicationVpcConfigurationRequest {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version of the application to which you want to add the VPC configuration. You must
   *       provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You
   *       can use the <a>DescribeApplication</a> operation to get the current application
   *       version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned. For better concurrency support,
   *       use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  CurrentApplicationVersionId?: number;

  /**
   * <p>Description of the VPC to add to the application.</p>
   */
  VpcConfiguration: VpcConfiguration | undefined;

  /**
   * <p>A value you use to implement strong concurrency for application updates. You must
   *       provide the <code>ApplicationVersionID</code> or the <code>ConditionalToken</code>. You get
   *       the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the
   *         <code>ConditionalToken</code> parameter instead of
   *       <code>CurrentApplicationVersionId</code>.</p>
   */
  ConditionalToken?: string;
}

/**
 * <p>Describes the parameters of a VPC used by the application.</p>
 */
export interface VpcConfigurationDescription {
  /**
   * <p>The ID of the VPC configuration.</p>
   */
  VpcConfigurationId: string | undefined;

  /**
   * <p>The ID of the associated VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a>
   *         IDs used by the VPC configuration.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a>
   *         IDs used by the VPC configuration.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

export interface AddApplicationVpcConfigurationResponse {
  /**
   * <p>The ARN of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>Provides the current application version. Kinesis Data Analytics updates the ApplicationVersionId each
   *       time you update the application.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The parameters of the new VPC configuration.</p>
   */
  VpcConfigurationDescription?: VpcConfigurationDescription;
}

/**
 * <p>For a Kinesis Data Analytics application provides a
 *       description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket,
 *       the name of the Amazon S3 object that contains the data, and the version number of the Amazon
 *       S3 object that contains the data. </p>
 */
export interface S3ContentLocation {
  /**
   * <p>The Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The file key for the object containing the application code.</p>
   */
  FileKey: string | undefined;

  /**
   * <p>The version of the object containing the application code.</p>
   */
  ObjectVersion?: string;
}

/**
 * <p>Specifies either the application code, or the location of the application code, for a
 *       Flink-based Kinesis Data Analytics application. </p>
 */
export interface CodeContent {
  /**
   * <p>The text-format code for a Flink-based Kinesis Data Analytics application.</p>
   */
  TextContent?: string;

  /**
   * <p>The zip-format code for a Flink-based Kinesis Data Analytics application.</p>
   */
  ZipFileContent?: Uint8Array;

  /**
   * <p>Information about the Amazon S3 bucket that contains the application code.</p>
   */
  S3ContentLocation?: S3ContentLocation;
}

export enum CodeContentType {
  PLAINTEXT = "PLAINTEXT",
  ZIPFILE = "ZIPFILE",
}

/**
 * <p>Describes code configuration for an application.</p>
 */
export interface ApplicationCodeConfiguration {
  /**
   * <p>The location and type of the application code.</p>
   */
  CodeContent?: CodeContent;

  /**
   * <p>Specifies whether the code content is in text or zip format.</p>
   */
  CodeContentType: CodeContentType | string | undefined;
}

/**
 * <p>Describes the location of an application's code stored in an S3 bucket.</p>
 */
export interface S3ApplicationCodeLocationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The file key for the object containing the application code.</p>
   */
  FileKey: string | undefined;

  /**
   * <p>The version of the object containing the application code.</p>
   */
  ObjectVersion?: string;
}

/**
 * <p>Describes details about the code of a Kinesis Data Analytics application.</p>
 */
export interface CodeContentDescription {
  /**
   * <p>The text-format code</p>
   */
  TextContent?: string;

  /**
   * <p>The checksum that can be used to validate zip-format code.</p>
   */
  CodeMD5?: string;

  /**
   * <p>The size in bytes of the application code. Can be used to validate zip-format code.</p>
   */
  CodeSize?: number;

  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the application
   *       code stored in Amazon S3.</p>
   */
  S3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;
}

/**
 * <p>Describes code configuration for an application.</p>
 */
export interface ApplicationCodeConfigurationDescription {
  /**
   * <p>Specifies whether the code content is in text or zip format.</p>
   */
  CodeContentType: CodeContentType | string | undefined;

  /**
   * <p>Describes details about the location and format of the application code.</p>
   */
  CodeContentDescription?: CodeContentDescription;
}

/**
 * <p>Describes an update for the Amazon S3 code content location for an application.</p>
 */
export interface S3ContentLocationUpdate {
  /**
   * <p>The new Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   */
  BucketARNUpdate?: string;

  /**
   * <p>The new file key for the object containing the application code.</p>
   */
  FileKeyUpdate?: string;

  /**
   * <p>The new version of the object containing the application code.</p>
   */
  ObjectVersionUpdate?: string;
}

/**
 * <p>Describes an update to the code of an application. Not supported for Apache Zeppelin.</p>
 */
export interface CodeContentUpdate {
  /**
   * <p>Describes an update to the text code for an application.</p>
   */
  TextContentUpdate?: string;

  /**
   * <p>Describes an update to the zipped code for an application.</p>
   */
  ZipFileContentUpdate?: Uint8Array;

  /**
   * <p>Describes an update to the location of code for an application.</p>
   */
  S3ContentLocationUpdate?: S3ContentLocationUpdate;
}

/**
 * <p>Describes code configuration updates for an application. This is supported for a Flink-based Kinesis Data Analytics application or a SQL-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationCodeConfigurationUpdate {
  /**
   * <p>Describes updates to the code content type.</p>
   */
  CodeContentTypeUpdate?: CodeContentType | string;

  /**
   * <p>Describes updates to the code content of an application.</p>
   */
  CodeContentUpdate?: CodeContentUpdate;
}

/**
 * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfiguration {
  /**
   * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
   */
  SnapshotsEnabled: boolean | undefined;
}

/**
 * <p>Property key-value pairs passed into an application.</p>
 */
export interface PropertyGroup {
  /**
   * <p>Describes the key of an application execution property key-value pair.</p>
   */
  PropertyGroupId: string | undefined;

  /**
   * <p>Describes the value of an application execution property key-value pair.</p>
   */
  PropertyMap: Record<string, string> | undefined;
}

/**
 * <p>Describes execution properties for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface EnvironmentProperties {
  /**
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroups: PropertyGroup[] | undefined;
}

export enum ConfigurationType {
  CUSTOM = "CUSTOM",
  DEFAULT = "DEFAULT",
}

/**
 * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault
 *       tolerance.
 *       For more information, see
 *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance">
 *         Checkpoints for Fault Tolerance</a> in the
 *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.</p>
 */
export interface CheckpointConfiguration {
  /**
   * <p>Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior.
   *     You must set this property to <code>CUSTOM</code> in order to set the
   *       <code>CheckpointingEnabled</code>, <code>CheckpointInterval</code>, or <code>MinPauseBetweenCheckpoints</code> parameters.</p>
   *          <note>
   *             <p>If this value is set to <code>DEFAULT</code>, the application will use the following values, even if they are set to other values using APIs or
   *     application code:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>CheckpointingEnabled:</b> true</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>CheckpointInterval:</b> 60000</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>MinPauseBetweenCheckpoints:</b> 5000</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ConfigurationType: ConfigurationType | string | undefined;

  /**
   * <p>Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value
   *       is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabled?: boolean;

  /**
   * <p>Describes the interval in milliseconds between checkpoint operations. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set
   *       to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointInterval?: number;

  /**
   * <p>Describes the minimum time in milliseconds after a checkpoint operation completes that a
   *       new checkpoint operation can start. If a checkpoint operation takes longer than the
   *         <code>CheckpointInterval</code>, the application otherwise performs continual checkpoint
   *       operations. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/ops/state/large_state_tuning.html#tuning-checkpointing"> Tuning Checkpointing</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink
   *         Documentation</a>.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this
   *       API or in application code.</p>
   *          </note>
   */
  MinPauseBetweenCheckpoints?: number;
}

export enum LogLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  INFO = "INFO",
  WARN = "WARN",
}

export enum MetricsLevel {
  APPLICATION = "APPLICATION",
  OPERATOR = "OPERATOR",
  PARALLELISM = "PARALLELISM",
  TASK = "TASK",
}

/**
 * <p>Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.</p>
 */
export interface MonitoringConfiguration {
  /**
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.
   *     You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or
   *     <code>MetricsLevel</code> parameters.</p>
   */
  ConfigurationType: ConfigurationType | string | undefined;

  /**
   * <p>Describes the granularity of the CloudWatch Logs for an application. The <code>Parallelism</code>
   *     level is not recommended for applications with a Parallelism over 64 due to excessive costs.</p>
   */
  MetricsLevel?: MetricsLevel | string;

  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: LogLevel | string;
}

/**
 * <p>Describes parameters for how a Flink-based Kinesis Data Analytics application
 *       executes multiple tasks simultaneously. For more information about parallelism,
 *       see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink
 *         Documentation</a>.</p>
 */
export interface ParallelismConfiguration {
  /**
   * <p>Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. You must set this property to <code>CUSTOM</code>
   *     in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.</p>
   */
  ConfigurationType: ConfigurationType | string | undefined;

  /**
   * <p>Describes the initial number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform. If <code>AutoScalingEnabled</code>
   *       is set to True, Kinesis Data Analytics increases the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase the <code>CurrentParallelism</code> value up to the maximum parallelism, which is
   *       <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If
   *     application load is reduced, the service can
   *     reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   */
  Parallelism?: number;

  /**
   * <p>Describes the number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform per Kinesis Processing Unit
   *       (KPU) used by the application. For more
   *       information about KPUs, see <a href="http://aws.amazon.com/kinesis/data-analytics/pricing/">Amazon Kinesis Data Analytics Pricing</a>.</p>
   */
  ParallelismPerKPU?: number;

  /**
   * <p>Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabled?: boolean;
}

/**
 * <p>Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.</p>
 */
export interface FlinkApplicationConfiguration {
  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the
   *       process of persisting application state for fault tolerance.
   *       For more information, see
   *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance">
   *         Checkpoints for Fault Tolerance</a> in the
   *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>. </p>
   */
  CheckpointConfiguration?: CheckpointConfiguration;

  /**
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   */
  MonitoringConfiguration?: MonitoringConfiguration;

  /**
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * <p>Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.</p>
 */
export interface SqlApplicationConfiguration {
  /**
   * <p>The array of <a>Input</a> objects describing the input streams used by the
   *       application.</p>
   */
  Inputs?: Input[];

  /**
   * <p>The array of <a>Output</a> objects describing the destination streams used by
   *       the application.</p>
   */
  Outputs?: Output[];

  /**
   * <p>The array of <a>ReferenceDataSource</a> objects describing the reference data
   *       sources used by the application.</p>
   */
  ReferenceDataSources?: ReferenceDataSource[];
}

/**
 * <p>The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.</p>
 */
export interface GlueDataCatalogConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  DatabaseARN: string | undefined;
}

/**
 * <p>The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.</p>
 */
export interface CatalogConfiguration {
  /**
   * <p>The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.</p>
   */
  GlueDataCatalogConfiguration: GlueDataCatalogConfiguration | undefined;
}

export enum ArtifactType {
  DEPENDENCY_JAR = "DEPENDENCY_JAR",
  UDF = "UDF",
}

/**
 * <p>The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.</p>
 */
export interface MavenReference {
  /**
   * <p>The group ID of the Maven reference.</p>
   */
  GroupId: string | undefined;

  /**
   * <p>The artifact ID of the Maven reference.</p>
   */
  ArtifactId: string | undefined;

  /**
   * <p>The version of the Maven reference.</p>
   */
  Version: string | undefined;
}

/**
 * <p>Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).</p>
 */
export interface CustomArtifactConfiguration {
  /**
   * <p>
   *             <code>UDF</code> stands for user-defined functions. This type of artifact must be in an S3 bucket. A <code>DEPENDENCY_JAR</code> can be in either Maven or an S3 bucket.</p>
   */
  ArtifactType: ArtifactType | string | undefined;

  /**
   * <p>For a Kinesis Data Analytics application provides a
   *       description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket,
   *       the name of the Amazon S3 object that contains the data, and the version number of the Amazon
   *       S3 object that contains the data. </p>
   */
  S3ContentLocation?: S3ContentLocation;

  /**
   * <p>The parameters required to fully specify a Maven reference.</p>
   */
  MavenReference?: MavenReference;
}

/**
 * <p>The S3 bucket that holds the application information.</p>
 */
export interface S3ContentBaseLocation {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The base path for the S3 bucket.</p>
   */
  BasePath?: string;
}

/**
 * <p>The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.</p>
 */
export interface DeployAsApplicationConfiguration {
  /**
   * <p>The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
   *     </p>
   */
  S3ContentLocation: S3ContentBaseLocation | undefined;
}

/**
 * <p>Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.</p>
 */
export interface ZeppelinMonitoringConfiguration {
  /**
   * <p>The verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel: LogLevel | string | undefined;
}

/**
 * <p>The configuration of a Kinesis Data Analytics Studio notebook.</p>
 */
export interface ZeppelinApplicationConfiguration {
  /**
   * <p>The monitoring configuration of a Kinesis Data Analytics Studio notebook.</p>
   */
  MonitoringConfiguration?: ZeppelinMonitoringConfiguration;

  /**
   * <p>The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.</p>
   */
  CatalogConfiguration?: CatalogConfiguration;

  /**
   * <p>The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.</p>
   */
  DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration;

  /**
   * <p>Custom artifacts are dependency JARs and user-defined functions (UDF).</p>
   */
  CustomArtifactsConfiguration?: CustomArtifactConfiguration[];
}

/**
 * <p>Specifies the creation parameters for a Kinesis Data Analytics application.</p>
 */
export interface ApplicationConfiguration {
  /**
   * <p>The creation and update parameters for a SQL-based Kinesis Data Analytics application.</p>
   */
  SqlApplicationConfiguration?: SqlApplicationConfiguration;

  /**
   * <p>The creation and update parameters for a Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkApplicationConfiguration?: FlinkApplicationConfiguration;

  /**
   * <p>Describes execution properties for a Flink-based Kinesis Data Analytics application.</p>
   */
  EnvironmentProperties?: EnvironmentProperties;

  /**
   * <p>The code location and type parameters for a Flink-based Kinesis Data Analytics application.</p>
   */
  ApplicationCodeConfiguration?: ApplicationCodeConfiguration;

  /**
   * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;

  /**
   * <p>The array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurations?: VpcConfiguration[];

  /**
   * <p>The configuration parameters for a Kinesis Data Analytics Studio notebook.</p>
   */
  ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
}

/**
 * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfigurationDescription {
  /**
   * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
   */
  SnapshotsEnabled: boolean | undefined;
}

/**
 * <p>Describes the execution properties for an Apache Flink runtime.</p>
 */
export interface EnvironmentPropertyDescriptions {
  /**
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroupDescriptions?: PropertyGroup[];
}

/**
 * <p>Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface CheckpointConfigurationDescription {
  /**
   * <p>Describes whether the application uses the default checkpointing behavior in Kinesis Data Analytics. </p>
   *          <note>
   *             <p>If this value is set to <code>DEFAULT</code>, the application will use the following values,
   *       even if they are set to other values using APIs or
   *     application code:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>CheckpointingEnabled:</b> true</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>CheckpointInterval:</b> 60000</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>MinPauseBetweenCheckpoints:</b> 5000</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ConfigurationType?: ConfigurationType | string;

  /**
   * <p>Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to
   *       another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabled?: boolean;

  /**
   * <p>Describes the interval in milliseconds between checkpoint operations. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set to another value
   *       using this API or in application code.</p>
   *          </note>
   */
  CheckpointInterval?: number;

  /**
   * <p>Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation
   *       can start. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this
   *       API or in application code.</p>
   *          </note>
   */
  MinPauseBetweenCheckpoints?: number;
}

/**
 * <p>Describes configuration parameters for CloudWatch logging for an application.</p>
 */
export interface MonitoringConfigurationDescription {
  /**
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.</p>
   */
  ConfigurationType?: ConfigurationType | string;

  /**
   * <p>Describes the granularity of the CloudWatch Logs for an application.</p>
   */
  MetricsLevel?: MetricsLevel | string;

  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: LogLevel | string;
}

/**
 * <p>Describes parameters for how a Flink-based Kinesis Data Analytics application
 *       executes multiple tasks simultaneously.</p>
 */
export interface ParallelismConfigurationDescription {
  /**
   * <p>Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. </p>
   */
  ConfigurationType?: ConfigurationType | string;

  /**
   * <p>Describes the initial number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform.
   *       If <code>AutoScalingEnabled</code> is set to True, then Kinesis Data Analytics can increase the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can
   *     reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   */
  Parallelism?: number;

  /**
   * <p>Describes the number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform per
   *       Kinesis Processing Unit (KPU) used by the application.</p>
   */
  ParallelismPerKPU?: number;

  /**
   * <p>Describes the current number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform.
   *       If <code>AutoScalingEnabled</code> is set to True, Kinesis Data Analytics can increase this value in response to application
   *     load. The service can increase this value up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can reduce
   *     the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   */
  CurrentParallelism?: number;

  /**
   * <p>Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabled?: boolean;
}

/**
 * <p>Describes configuration parameters for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface FlinkApplicationConfigurationDescription {
  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state
   *       for fault tolerance.</p>
   */
  CheckpointConfigurationDescription?: CheckpointConfigurationDescription;

  /**
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   */
  MonitoringConfigurationDescription?: MonitoringConfigurationDescription;

  /**
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfigurationDescription?: ParallelismConfigurationDescription;

  /**
   * <p>The job plan for an application. For more information about the job plan, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/internals/job_scheduling.html">Jobs and Scheduling</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink
   *         Documentation</a>. To retrieve the job plan for the application, use the <a>DescribeApplicationRequest$IncludeAdditionalDetails</a> parameter of the <a>DescribeApplication</a> operation.</p>
   */
  JobPlanDescription?: string;
}

export enum ApplicationRestoreType {
  RESTORE_FROM_CUSTOM_SNAPSHOT = "RESTORE_FROM_CUSTOM_SNAPSHOT",
  RESTORE_FROM_LATEST_SNAPSHOT = "RESTORE_FROM_LATEST_SNAPSHOT",
  SKIP_RESTORE_FROM_SNAPSHOT = "SKIP_RESTORE_FROM_SNAPSHOT",
}

/**
 * <p>Specifies the method and snapshot to use when restarting an application using previously saved application state.</p>
 */
export interface ApplicationRestoreConfiguration {
  /**
   * <p>Specifies how the application should be restored.</p>
   */
  ApplicationRestoreType: ApplicationRestoreType | string | undefined;

  /**
   * <p>The identifier of an existing snapshot of application state to use to restart an application.
   *       The application uses this value if <code>RESTORE_FROM_CUSTOM_SNAPSHOT</code> is specified for the
   *       <code>ApplicationRestoreType</code>.</p>
   */
  SnapshotName?: string;
}

/**
 * <p>Describes the starting parameters for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface FlinkRunConfiguration {
  /**
   * <p>When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot
   *        be mapped to the new program.
   *      This will happen if the program is updated between snapshots to remove stateful parameters, and
   *      state data in the snapshot no longer
   *      corresponds to valid application data. For more information, see
   *      <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/ops/state/savepoints.html#allowing-non-restored-state">
   *        Allowing Non-Restored State</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink
   *          documentation</a>.</p>
   *          <note>
   *             <p>This value defaults to <code>false</code>. If you update your application without
   *      specifying this parameter, <code>AllowNonRestoredState</code> will be set to <code>false</code>,
   *      even if it was previously set to <code>true</code>.</p>
   *          </note>
   */
  AllowNonRestoredState?: boolean;
}

/**
 * <p>Describes the starting properties for a Kinesis Data Analytics application.</p>
 */
export interface RunConfigurationDescription {
  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;

  /**
   * <p>Describes the starting parameters for a Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkRunConfigurationDescription?: FlinkRunConfiguration;
}

/**
 * <p>Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.</p>
 */
export interface SqlApplicationConfigurationDescription {
  /**
   * <p>The array of <a>InputDescription</a> objects describing the input streams used
   *       by the application.</p>
   */
  InputDescriptions?: InputDescription[];

  /**
   * <p>The array of <a>OutputDescription</a> objects describing the destination
   *       streams used by the application.</p>
   */
  OutputDescriptions?: OutputDescription[];

  /**
   * <p>The array of <a>ReferenceDataSourceDescription</a> objects describing the
   *       reference data sources used by the application.</p>
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}

/**
 * <p>The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.</p>
 */
export interface GlueDataCatalogConfigurationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  DatabaseARN: string | undefined;
}

/**
 * <p>The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.</p>
 */
export interface CatalogConfigurationDescription {
  /**
   * <p>The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.</p>
   */
  GlueDataCatalogConfigurationDescription: GlueDataCatalogConfigurationDescription | undefined;
}

/**
 * <p>Specifies a dependency JAR or a JAR of user-defined functions.</p>
 */
export interface CustomArtifactConfigurationDescription {
  /**
   * <p>
   *             <code>UDF</code> stands for user-defined functions. This type of artifact must be in an S3 bucket. A <code>DEPENDENCY_JAR</code> can be in either Maven or an S3 bucket.</p>
   */
  ArtifactType?: ArtifactType | string;

  /**
   * <p>For a Kinesis Data Analytics application provides a
   *       description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket,
   *       the name of the Amazon S3 object that contains the data, and the version number of the Amazon
   *       S3 object that contains the data. </p>
   */
  S3ContentLocationDescription?: S3ContentLocation;

  /**
   * <p>The parameters that are required to specify a Maven dependency.</p>
   */
  MavenReferenceDescription?: MavenReference;
}

/**
 * <p>The description of the S3 base location that holds the application.</p>
 */
export interface S3ContentBaseLocationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The base path for the S3 bucket.</p>
   */
  BasePath?: string;
}

/**
 * <p>The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.</p>
 */
export interface DeployAsApplicationConfigurationDescription {
  /**
   * <p>The location that holds the data required to specify an Amazon Data Analytics application.</p>
   */
  S3ContentLocationDescription: S3ContentBaseLocationDescription | undefined;
}

/**
 * <p>The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.</p>
 */
export interface ZeppelinMonitoringConfigurationDescription {
  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: LogLevel | string;
}

/**
 * <p>The configuration of a Kinesis Data Analytics Studio notebook.</p>
 */
export interface ZeppelinApplicationConfigurationDescription {
  /**
   * <p>The monitoring configuration of a Kinesis Data Analytics Studio notebook.</p>
   */
  MonitoringConfigurationDescription: ZeppelinMonitoringConfigurationDescription | undefined;

  /**
   * <p>The Amazon Glue Data Catalog that is associated with the Kinesis Data Analytics Studio notebook.</p>
   */
  CatalogConfigurationDescription?: CatalogConfigurationDescription;

  /**
   * <p>The parameters required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.</p>
   */
  DeployAsApplicationConfigurationDescription?: DeployAsApplicationConfigurationDescription;

  /**
   * <p>Custom artifacts are dependency JARs and user-defined functions (UDF).</p>
   */
  CustomArtifactsConfigurationDescription?: CustomArtifactConfigurationDescription[];
}

/**
 * <p>Describes details about the application code and starting parameters for a Kinesis Data Analytics application.</p>
 */
export interface ApplicationConfigurationDescription {
  /**
   * <p>The details about inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.</p>
   */
  SqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;

  /**
   * <p>The details about the application code for a Flink-based Kinesis Data Analytics application.</p>
   */
  ApplicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;

  /**
   * <p>The details about the starting properties for a Kinesis Data Analytics application.</p>
   */
  RunConfigurationDescription?: RunConfigurationDescription;

  /**
   * <p>The details about a Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;

  /**
   * <p>Describes execution properties for a Flink-based Kinesis Data Analytics application.</p>
   */
  EnvironmentPropertyDescriptions?: EnvironmentPropertyDescriptions;

  /**
   * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;

  /**
   * <p>The array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurationDescriptions?: VpcConfigurationDescription[];

  /**
   * <p>The configuration parameters for a Kinesis Data Analytics Studio notebook.</p>
   */
  ZeppelinApplicationConfigurationDescription?: ZeppelinApplicationConfigurationDescription;
}

/**
 * <p>Describes updates to whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfigurationUpdate {
  /**
   * <p>Describes updates to whether snapshots are enabled for an application.</p>
   */
  SnapshotsEnabledUpdate: boolean | undefined;
}

/**
 * <p>Describes updates to the execution property groups for a Flink-based Kinesis Data Analytics application or a Studio notebook.</p>
 */
export interface EnvironmentPropertyUpdates {
  /**
   * <p>Describes updates to the execution property groups.</p>
   */
  PropertyGroups: PropertyGroup[] | undefined;
}

/**
 * <p>Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface CheckpointConfigurationUpdate {
  /**
   * <p>Describes updates to whether the application uses the default checkpointing behavior of
   *       Kinesis Data Analytics. You must set this property to <code>CUSTOM</code> in order to set the
   *       <code>CheckpointingEnabled</code>, <code>CheckpointInterval</code>, or <code>MinPauseBetweenCheckpoints</code> parameters.
   *       </p>
   *          <note>
   *             <p>If this value is set to <code>DEFAULT</code>, the application will use the following values, even if they are
   *       set to other values using APIs or
   *     application code:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <b>CheckpointingEnabled:</b> true</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>CheckpointInterval:</b> 60000</p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <b>MinPauseBetweenCheckpoints:</b> 5000</p>
   *                </li>
   *             </ul>
   *          </note>
   */
  ConfigurationTypeUpdate?: ConfigurationType | string;

  /**
   * <p>Describes updates to whether checkpointing is enabled for an application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to
   *       another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabledUpdate?: boolean;

  /**
   * <p>Describes updates to the interval in milliseconds between checkpoint operations.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set to another value
   *       using this API or in application code.</p>
   *          </note>
   */
  CheckpointIntervalUpdate?: number;

  /**
   * <p>Describes updates to the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation
   *       can start.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this API or
   *       in application code.</p>
   *          </note>
   */
  MinPauseBetweenCheckpointsUpdate?: number;
}

/**
 * <p>Describes updates to configuration parameters for Amazon CloudWatch logging for an application.</p>
 */
export interface MonitoringConfigurationUpdate {
  /**
   * <p>Describes updates to whether to use the default CloudWatch logging configuration for
   *       an application. You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or
   *     <code>MetricsLevel</code> parameters.</p>
   */
  ConfigurationTypeUpdate?: ConfigurationType | string;

  /**
   * <p>Describes updates to the granularity of the CloudWatch Logs for an application. The <code>Parallelism</code>
   *       level is not recommended for applications with a Parallelism over 64 due to excessive costs.</p>
   */
  MetricsLevelUpdate?: MetricsLevel | string;

  /**
   * <p>Describes updates to the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevelUpdate?: LogLevel | string;
}

/**
 * <p>Describes updates to parameters for how an application executes multiple tasks simultaneously.</p>
 */
export interface ParallelismConfigurationUpdate {
  /**
   * <p>Describes updates to whether the application uses the default parallelism for the Kinesis Data Analytics service, or if a custom parallelism is used.
   *     You must set this property to <code>CUSTOM</code>
   *     in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.</p>
   */
  ConfigurationTypeUpdate?: ConfigurationType | string;

  /**
   * <p>Describes updates to the initial number of parallel tasks an application can perform. If <code>AutoScalingEnabled</code> is set to True, then
   *       Kinesis Data Analytics can increase the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service will
   *     reduce <code>CurrentParallelism</code> down to the <code>Parallelism</code> setting.</p>
   */
  ParallelismUpdate?: number;

  /**
   * <p>Describes updates to the number of parallel tasks an application can perform per Kinesis Processing Unit (KPU) used by the application.</p>
   */
  ParallelismPerKPUUpdate?: number;

  /**
   * <p>Describes updates to whether the Kinesis Data Analytics service can increase the parallelism of a Flink-based Kinesis Data Analytics application in response to increased throughput.</p>
   */
  AutoScalingEnabledUpdate?: boolean;
}

/**
 * <p>Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface FlinkApplicationConfigurationUpdate {
  /**
   * <p>Describes updates to an application's checkpointing configuration. Checkpointing is the process of persisting
   *       application state for fault tolerance.</p>
   */
  CheckpointConfigurationUpdate?: CheckpointConfigurationUpdate;

  /**
   * <p>Describes updates to the configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   */
  MonitoringConfigurationUpdate?: MonitoringConfigurationUpdate;

  /**
   * <p>Describes updates to the parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfigurationUpdate?: ParallelismConfigurationUpdate;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides updates to the
 *       parallelism count.</p>
 */
export interface InputParallelismUpdate {
  /**
   * <p>The number of in-application streams to create for the specified streaming source.</p>
   */
  CountUpdate: number | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, represents an update to the
 *         <a>InputLambdaProcessor</a> that is used to preprocess the records in the
 *       stream.</p>
 */
export interface InputLambdaProcessorUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the new Amazon Lambda function that is used to preprocess
   *       the records in the stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.</p>
 */
export interface InputProcessingConfigurationUpdate {
  /**
   * <p>Provides update information for an <a>InputLambdaProcessor</a>.</p>
   */
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate | undefined;
}

/**
 * <p>Describes updates for an SQL-based Kinesis Data Analytics application's input
 *       schema.</p>
 */
export interface InputSchemaUpdate {
  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormatUpdate?: RecordFormat;

  /**
   * <p>Specifies the encoding of the records in the streaming source; for example, UTF-8.</p>
   */
  RecordEncodingUpdate?: string;

  /**
   * <p>A list of <code>RecordColumn</code> objects. Each object describes the mapping
   *       of the streaming source element to the corresponding column in the in-application stream.</p>
   */
  RecordColumnUpdates?: RecordColumn[];
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, when updating application
 *       input configuration, provides information about a Kinesis Data Firehose delivery stream as the
 *       streaming source.</p>
 */
export interface KinesisFirehoseInputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the input delivery stream to read.</p>
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p>When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a
 *       Kinesis stream as the streaming
 *       source.</p>
 */
export interface KinesisStreamsInputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the input Kinesis data stream to read.</p>
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes updates to a
 *       specific input configuration (identified by the <code>InputId</code> of an application). </p>
 */
export interface InputUpdate {
  /**
   * <p>The input ID of the application input to be updated.</p>
   */
  InputId: string | undefined;

  /**
   * <p>The name prefix for in-application streams that Kinesis Data Analytics creates for the
   *       specific streaming source.</p>
   */
  NamePrefixUpdate?: string;

  /**
   * <p>Describes updates to an <a>InputProcessingConfiguration</a>.</p>
   */
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

  /**
   * <p>If a Kinesis data stream is the streaming source to be updated, provides an
   *       updated stream Amazon Resource Name (ARN).</p>
   */
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is the streaming source to be
   *       updated, provides an updated stream ARN.</p>
   */
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

  /**
   * <p>Describes the data format on the streaming source, and
   *       how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   */
  InputSchemaUpdate?: InputSchemaUpdate;

  /**
   * <p>Describes the parallelism updates (the number of in-application streams Kinesis Data Analytics creates for the specific streaming source).</p>
   */
  InputParallelismUpdate?: InputParallelismUpdate;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, when updating an output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about a Kinesis Data Firehose delivery stream that is configured as the destination.</p>
 */
export interface KinesisFirehoseOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream to write to. </p>
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p>When you update a SQL-based Kinesis Data Analytics application's output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about a Kinesis data stream that is configured as the destination.</p>
 */
export interface KinesisStreamsOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream where you want to write the
   *       output.</p>
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p>When you update an SQL-based Kinesis Data Analytics application's output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about an Amazon Lambda function that is configured as the destination.</p>
 */
export interface LambdaOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Amazon Lambda function.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p> For a SQL-based Kinesis Data Analytics application, describes updates to the
 *       output configuration identified by the <code>OutputId</code>. </p>
 */
export interface OutputUpdate {
  /**
   * <p>Identifies the specific output configuration that you want to update.</p>
   */
  OutputId: string | undefined;

  /**
   * <p>If you want to specify a different in-application stream
   *       for this output configuration, use this field to
   *       specify the new in-application stream name.</p>
   */
  NameUpdate?: string;

  /**
   * <p>Describes a Kinesis data stream as the destination for the output.</p>
   */
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

  /**
   * <p>Describes a Kinesis Data Firehose delivery stream as the destination for the
   *       output.</p>
   */
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

  /**
   * <p>Describes an Amazon Lambda function as the destination for the output.</p>
   */
  LambdaOutputUpdate?: LambdaOutputUpdate;

  /**
   * <p>Describes the data format when records are written to the destination.
   *       </p>
   */
  DestinationSchemaUpdate?: DestinationSchema;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket
 *       name and object key name for an in-application reference table. </p>
 */
export interface S3ReferenceDataSourceUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARNUpdate?: string;

  /**
   * <p>The object key name.</p>
   */
  FileKeyUpdate?: string;
}

/**
 * <p>When you update a reference data source configuration for a
 *        SQL-based Kinesis Data Analytics application, this object provides all the updated values
 *       (such as the source bucket name and object key name), the in-application table name that is created,
 *       and updated mapping information that maps the data in the Amazon S3 object to the in-application
 *       reference table that is created.</p>
 */
export interface ReferenceDataSourceUpdate {
  /**
   * <p>The ID of the reference data source that is being updated. You can use the <a>DescribeApplication</a> operation to get this value.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>The in-application table name that is created by this update.</p>
   */
  TableNameUpdate?: string;

  /**
   * <p>Describes the S3 bucket name, object key name, and IAM role that Kinesis Data Analytics can assume to read the
   *       Amazon S3 object on your behalf and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to
   *       corresponding columns created in the in-application stream. </p>
   */
  ReferenceSchemaUpdate?: SourceSchema;
}

/**
 * <p>Describes updates to the input streams, destination streams, and reference data sources
 *       for a SQL-based Kinesis Data Analytics application.</p>
 */
export interface SqlApplicationConfigurationUpdate {
  /**
   * <p>The array of <a>InputUpdate</a> objects describing the new input streams used
   *       by the application.</p>
   */
  InputUpdates?: InputUpdate[];

  /**
   * <p>The array of <a>OutputUpdate</a> objects describing the new destination streams
   *       used by the application.</p>
   */
  OutputUpdates?: OutputUpdate[];

  /**
   * <p>The array of <a>ReferenceDataSourceUpdate</a> objects describing the new
   *       reference data sources used by the application.</p>
   */
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}

/**
 * <p>Describes updates to the VPC configuration used by the application.</p>
 */
export interface VpcConfigurationUpdate {
  /**
   * <p>Describes an update to the ID of the VPC configuration.</p>
   */
  VpcConfigurationId: string | undefined;

  /**
   * <p>Describes updates to the array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a>
   *         IDs
   *         used by the VPC configuration.</p>
   */
  SubnetIdUpdates?: string[];

  /**
   * <p>Describes updates to the array of
   *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.</p>
   */
  SecurityGroupIdUpdates?: string[];
}

/**
 * <p>Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Kinesis Data Analytics Studio notebook.</p>
 */
export interface GlueDataCatalogConfigurationUpdate {
  /**
   * <p>The updated Amazon Resource Name (ARN) of the database.</p>
   */
  DatabaseARNUpdate: string | undefined;
}

/**
 * <p>Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.</p>
 */
export interface CatalogConfigurationUpdate {
  /**
   * <p>Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.</p>
   */
  GlueDataCatalogConfigurationUpdate: GlueDataCatalogConfigurationUpdate | undefined;
}

/**
 * <p>The information required to update the S3 base location that holds the application.</p>
 */
export interface S3ContentBaseLocationUpdate {
  /**
   * <p>The updated Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARNUpdate?: string;

  /**
   * <p>The updated S3 bucket path.</p>
   */
  BasePathUpdate?: string;
}

/**
 * <p>Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.</p>
 */
export interface DeployAsApplicationConfigurationUpdate {
  /**
   * <p>Updates to the location that holds the data required to specify an Amazon Data Analytics application.</p>
   */
  S3ContentLocationUpdate?: S3ContentBaseLocationUpdate;
}

/**
 * <p>Updates to the monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.</p>
 */
export interface ZeppelinMonitoringConfigurationUpdate {
  /**
   * <p>Updates to the logging level for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.</p>
   */
  LogLevelUpdate: LogLevel | string | undefined;
}

/**
 * <p>Updates to the configuration of Kinesis Data Analytics Studio notebook.</p>
 */
export interface ZeppelinApplicationConfigurationUpdate {
  /**
   * <p>Updates to the monitoring configuration of a Kinesis Data Analytics Studio notebook.</p>
   */
  MonitoringConfigurationUpdate?: ZeppelinMonitoringConfigurationUpdate;

  /**
   * <p>Updates to the configuration of the Amazon Glue Data Catalog that is associated with the Kinesis Data Analytics Studio notebook.</p>
   */
  CatalogConfigurationUpdate?: CatalogConfigurationUpdate;

  /**
   * <p>Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.</p>
   */
  DeployAsApplicationConfigurationUpdate?: DeployAsApplicationConfigurationUpdate;

  /**
   * <p>Updates to the customer artifacts. Custom artifacts are dependency JAR files and user-defined functions (UDF).</p>
   */
  CustomArtifactsConfigurationUpdate?: CustomArtifactConfiguration[];
}

/**
 * <p>Describes updates to an application's configuration.</p>
 */
export interface ApplicationConfigurationUpdate {
  /**
   * <p>Describes updates to a SQL-based Kinesis Data Analytics application's
   *       configuration.</p>
   */
  SqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to an application's code
   *       configuration.</p>
   */
  ApplicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;

  /**
   * <p>Describes updates to a Flink-based Kinesis Data Analytics application's configuration.</p>
   */
  FlinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to the environment properties for a Flink-based Kinesis Data Analytics application.</p>
   */
  EnvironmentPropertyUpdates?: EnvironmentPropertyUpdates;

  /**
   * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;

  /**
   * <p>Updates to the array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurationUpdates?: VpcConfigurationUpdate[];

  /**
   * <p>Updates to the configuration of a Kinesis Data Analytics Studio notebook.</p>
   */
  ZeppelinApplicationConfigurationUpdate?: ZeppelinApplicationConfigurationUpdate;
}

/**
 * <p>The details of the maintenance configuration for the application.</p>
 */
export interface ApplicationMaintenanceConfigurationDescription {
  /**
   * <p>The start time for the maintenance window.</p>
   */
  ApplicationMaintenanceWindowStartTime: string | undefined;

  /**
   * <p>The end time for the maintenance window.</p>
   */
  ApplicationMaintenanceWindowEndTime: string | undefined;
}

export enum ApplicationMode {
  INTERACTIVE = "INTERACTIVE",
  STREAMING = "STREAMING",
}

export enum ApplicationStatus {
  AUTOSCALING = "AUTOSCALING",
  DELETING = "DELETING",
  FORCE_STOPPING = "FORCE_STOPPING",
  MAINTENANCE = "MAINTENANCE",
  READY = "READY",
  ROLLED_BACK = "ROLLED_BACK",
  ROLLING_BACK = "ROLLING_BACK",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
  UPDATING = "UPDATING",
}

export enum RuntimeEnvironment {
  FLINK_1_11 = "FLINK-1_11",
  FLINK_1_13 = "FLINK-1_13",
  FLINK_1_15 = "FLINK-1_15",
  FLINK_1_6 = "FLINK-1_6",
  FLINK_1_8 = "FLINK-1_8",
  SQL_1_0 = "SQL-1_0",
  ZEPPELIN_FLINK_1_0 = "ZEPPELIN-FLINK-1_0",
  ZEPPELIN_FLINK_2_0 = "ZEPPELIN-FLINK-2_0",
}

/**
 * <p>Describes the application, including the application Amazon Resource Name (ARN), status,
 *       latest version, and input and output configurations.</p>
 */
export interface ApplicationDetail {
  /**
   * <p>The ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * <p>The description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The runtime environment for the application.</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | string | undefined;

  /**
   * <p>Specifies the IAM role that the application uses to access external resources.</p>
   */
  ServiceExecutionRole?: string;

  /**
   * <p>The status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;

  /**
   * <p>Provides the current application version. Kinesis Data Analytics updates the
   *         <code>ApplicationVersionId</code> each time you update the application.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>The current timestamp when the application was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>The current timestamp when the application was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>Describes details about the application code and starting parameters for a Kinesis Data Analytics application.</p>
   */
  ApplicationConfigurationDescription?: ApplicationConfigurationDescription;

  /**
   * <p>Describes the application Amazon CloudWatch logging options.</p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  /**
   * <p>The details of the maintenance configuration for the application.</p>
   */
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;

  /**
   * <p>The previous application version before the latest application update. <a>RollbackApplication</a>
   *         reverts the application to this version.</p>
   */
  ApplicationVersionUpdatedFrom?: number;

  /**
   * <p>If you reverted the application using <a>RollbackApplication</a>,
   *         the application version when <code>RollbackApplication</code> was called.</p>
   */
  ApplicationVersionRolledBackFrom?: number;

  /**
   * <p>A value you use to implement strong concurrency for application updates.</p>
   */
  ConditionalToken?: string;

  /**
   * <p>The version to which you want to roll back the application.</p>
   */
  ApplicationVersionRolledBackTo?: number;

  /**
   * <p>To create a Kinesis Data Analytics Studio notebook, you must set the mode to <code>INTERACTIVE</code>. However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.</p>
   */
  ApplicationMode?: ApplicationMode | string;
}

/**
 * <p>Describes the updated maintenance configuration for the application.</p>
 */
export interface ApplicationMaintenanceConfigurationUpdate {
  /**
   * <p>The updated start time for the maintenance window.</p>
   */
  ApplicationMaintenanceWindowStartTimeUpdate: string | undefined;
}

/**
 * <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
 */
export interface ApplicationSummary {
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * <p>The status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;

  /**
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>The runtime environment for the application.</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | string | undefined;

  /**
   * <p>For a Kinesis Data Analytics for Apache Flink application, the mode is <code>STREAMING</code>. For a Kinesis Data Analytics Studio notebook, it is <code>INTERACTIVE</code>.</p>
   */
  ApplicationMode?: ApplicationMode | string;
}

/**
 * <p>The summary of the application version.</p>
 */
export interface ApplicationVersionSummary {
  /**
   * <p>The ID of the application version. Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update the application.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>The status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;
}

/**
 * <p>Describes the Amazon CloudWatch logging option updates.</p>
 */
export interface CloudWatchLoggingOptionUpdate {
  /**
   * <p>The ID of the CloudWatch logging option to update</p>
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log to receive application
   *       messages.</p>
   */
  LogStreamARNUpdate?: string;
}

/**
 * <p>A key-value pair (the value is optional) that you can define and assign to Amazon resources.
 *         If you specify a tag that already exists, the tag value is replaced with the value that you
 *         specify in the request. Note that
 *         the maximum number of application tags includes system tags. The maximum number of user-defined
 *         application tags is 50.
 *       For more information, see
 *         <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
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

export interface CreateApplicationRequest {
  /**
   * <p>The name of your application (for example, <code>sample-app</code>).</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>A summary description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>The runtime environment for the application.</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | string | undefined;

  /**
   * <p>The IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose
   *       delivery streams, Amazon S3 objects, and other external resources.</p>
   */
  ServiceExecutionRole: string | undefined;

  /**
   * <p>Use this parameter to configure the application.</p>
   */
  ApplicationConfiguration?: ApplicationConfiguration;

  /**
   * <p>Use this parameter to configure an Amazon CloudWatch log stream to monitor application
   *       configuration errors.
   *       </p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[];

  /**
   * <p>A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an
   *         application. Note that the maximum number of application tags includes system tags. The maximum number of
   *         user-defined application tags is 50.
   *         For more information, see
   *         <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Use the <code>STREAMING</code> mode to create a Kinesis Data Analytics For Flink application. To create a Kinesis Data Analytics Studio notebook, use the
   *     <code>INTERACTIVE</code> mode.</p>
   */
  ApplicationMode?: ApplicationMode | string;
}

export interface CreateApplicationResponse {
  /**
   * <p>In response to your <code>CreateApplication</code> request, Kinesis Data Analytics returns a
   *       response with details of the application it created.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * <p>The number of allowed resources has been exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Application created with too many tags, or too many tags added to an application. Note that the maximum
 *         number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
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
 * <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this
 *       operation. </p>
 */
export class UnsupportedOperationException extends __BaseException {
  readonly name: "UnsupportedOperationException" = "UnsupportedOperationException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

export enum UrlType {
  FLINK_DASHBOARD_URL = "FLINK_DASHBOARD_URL",
  ZEPPELIN_UI_URL = "ZEPPELIN_UI_URL",
}

export interface CreateApplicationPresignedUrlRequest {
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The type of the extension for which to create and return a URL. Currently, the only valid
   *             extension URL type is <code>FLINK_DASHBOARD_URL</code>. </p>
   */
  UrlType: UrlType | string | undefined;

  /**
   * <p>The duration in seconds for which the returned URL will be valid.</p>
   */
  SessionExpirationDurationInSeconds?: number;
}

export interface CreateApplicationPresignedUrlResponse {
  /**
   * <p>The URL of the extension.</p>
   */
  AuthorizedUrl?: string;
}

export interface CreateApplicationSnapshotRequest {
  /**
   * <p>The name of an existing application</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>An identifier for the application snapshot.</p>
   */
  SnapshotName: string | undefined;
}

export interface CreateApplicationSnapshotResponse {}

export interface DeleteApplicationRequest {
  /**
   * <p>The name of the application to delete.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Use the <code>DescribeApplication</code> operation to get this value.</p>
   */
  CreateTimestamp: Date | undefined;
}

export interface DeleteApplicationResponse {}

export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  /**
   * <p>The application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version ID of the application. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  CurrentApplicationVersionId?: number;

  /**
   * <p>The <code>CloudWatchLoggingOptionId</code> of the Amazon CloudWatch logging option to
   *          delete. You can get the <code>CloudWatchLoggingOptionId</code> by using the <a>DescribeApplication</a> operation. </p>
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * <p>A value you use to implement strong concurrency for application updates. You must provide
   *       the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You get the
   *       application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  ConditionalToken?: string;
}

export interface DeleteApplicationCloudWatchLoggingOptionResponse {
  /**
   * <p>The application's Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The version ID of the application. Kinesis Data Analytics updates the
   *         <code>ApplicationVersionId</code> each time you change the CloudWatch logging
   *       options.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The descriptions of the remaining CloudWatch logging options for the application.</p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
}

export interface DeleteApplicationInputProcessingConfigurationRequest {
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified is not the current version, the
   *       <code>ConcurrentModificationException</code> is returned.
   *     </p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the input configuration from which to delete the input processing
   *       configuration. You can get a list of the input IDs for an application by using the <a>DescribeApplication</a> operation.</p>
   */
  InputId: string | undefined;
}

export interface DeleteApplicationInputProcessingConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The current application version ID.</p>
   */
  ApplicationVersionId?: number;
}

export interface DeleteApplicationOutputRequest {
  /**
   * <p>The application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified is not the current version, the
   *       <code>ConcurrentModificationException</code> is returned.
   *     </p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the configuration to delete. Each output configuration that is added to the
   *       application (either when the application is created or later) using the <a>AddApplicationOutput</a> operation has a unique ID. You need to provide the ID to
   *       uniquely identify the output configuration that you want to delete from the application
   *       configuration. You can use the <a>DescribeApplication</a> operation to get the
   *       specific <code>OutputId</code>. </p>
   */
  OutputId: string | undefined;
}

export interface DeleteApplicationOutputResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The current application version ID.</p>
   */
  ApplicationVersionId?: number;
}

export interface DeleteApplicationReferenceDataSourceRequest {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified
   *       is not the current version, the <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the reference data source. When you add a reference data source to your
   *       application using the <a>AddApplicationReferenceDataSource</a>, Kinesis Data Analytics assigns an ID.
   *       You can use the <a>DescribeApplication</a> operation to
   *       get the reference ID. </p>
   */
  ReferenceId: string | undefined;
}

export interface DeleteApplicationReferenceDataSourceResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated version ID of the application.</p>
   */
  ApplicationVersionId?: number;
}

export interface DeleteApplicationSnapshotRequest {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The identifier for the snapshot delete.</p>
   */
  SnapshotName: string | undefined;

  /**
   * <p>The creation timestamp of the application snapshot to delete. You can retrieve this value
   *       using
   *       or .</p>
   */
  SnapshotCreationTimestamp: Date | undefined;
}

export interface DeleteApplicationSnapshotResponse {}

export interface DeleteApplicationVpcConfigurationRequest {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version ID. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  CurrentApplicationVersionId?: number;

  /**
   * <p>The ID of the VPC configuration to delete.</p>
   */
  VpcConfigurationId: string | undefined;

  /**
   * <p>A value you use to implement strong concurrency for application updates. You must provide
   *       the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You get the
   *       application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  ConditionalToken?: string;
}

export interface DeleteApplicationVpcConfigurationResponse {
  /**
   * <p>The ARN of the Kinesis Data Analytics application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated version ID of the application.</p>
   */
  ApplicationVersionId?: number;
}

export interface DescribeApplicationRequest {
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Displays verbose information about a Kinesis Data Analytics application, including the application's job plan.</p>
   */
  IncludeAdditionalDetails?: boolean;
}

export interface DescribeApplicationResponse {
  /**
   * <p>Provides a description of the application, such as the application's Amazon Resource Name
   *       (ARN), status, and latest version.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

export interface DescribeApplicationSnapshotRequest {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The identifier of an application snapshot. You can retrieve this value using
   *       .</p>
   */
  SnapshotName: string | undefined;
}

export enum SnapshotStatus {
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  READY = "READY",
}

/**
 * <p>Provides details about a snapshot of application state.</p>
 */
export interface SnapshotDetails {
  /**
   * <p>The identifier for the application snapshot.</p>
   */
  SnapshotName: string | undefined;

  /**
   * <p>The status of the application snapshot.</p>
   */
  SnapshotStatus: SnapshotStatus | string | undefined;

  /**
   * <p>The current application version ID when the snapshot was created.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>The timestamp of the application snapshot.</p>
   */
  SnapshotCreationTimestamp?: Date;
}

export interface DescribeApplicationSnapshotResponse {
  /**
   * <p>An object containing information about the application snapshot.</p>
   */
  SnapshotDetails: SnapshotDetails | undefined;
}

export interface DescribeApplicationVersionRequest {
  /**
   * <p>The name of the application for which you want to get the version description.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The ID of the application version for which you want to get the description.</p>
   */
  ApplicationVersionId: number | undefined;
}

export interface DescribeApplicationVersionResponse {
  /**
   * <p>Describes the application, including the application Amazon Resource Name (ARN), status,
   *       latest version, and input and output configurations.</p>
   */
  ApplicationVersionDetail?: ApplicationDetail;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides a description of an
 *       Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name
 *       of the Amazon S3 object that contains the data.</p>
 */
export interface S3Configuration {
  /**
   * <p>The ARN of the S3 bucket that contains the data.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The name of the object that contains the data.</p>
   */
  FileKey: string | undefined;
}

export interface DiscoverInputSchemaRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the streaming source.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The ARN of the role that is used to access the streaming source.</p>
   */
  ServiceExecutionRole: string | undefined;

  /**
   * <p>The point at which you want Kinesis Data Analytics to start reading records from the
   *       specified streaming source discovery purposes.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  /**
   * <p>Specify this parameter to discover a schema from data in an Amazon S3
   *       object.</p>
   */
  S3Configuration?: S3Configuration;

  /**
   * <p>The <a>InputProcessingConfiguration</a> to use to preprocess the records
   *       before discovering the schema of the records.</p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;
}

export interface DiscoverInputSchemaResponse {
  /**
   * <p>The schema inferred from the streaming source. It identifies the format of the data in the
   *       streaming source and how each data element maps to corresponding columns in the in-application
   *       stream that you can create.</p>
   */
  InputSchema?: SourceSchema;

  /**
   * <p>An array of elements, where each element corresponds to a row in a stream record
   *       (a stream record can have more than one row).</p>
   */
  ParsedInputRecords?: string[][];

  /**
   * <p>The stream data that was modified by the processor specified in the
   *         <code>InputProcessingConfiguration</code> parameter.</p>
   */
  ProcessedInputRecords?: string[];

  /**
   * <p>The raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: string[];
}

/**
 * <p>Discovery failed to get a record from the streaming source because of the Kinesis
 *       Streams <code>ProvisionedThroughputExceededException</code>. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a> in the Amazon Kinesis Streams API Reference.</p>
 */
export class ResourceProvisionedThroughputExceededException extends __BaseException {
  readonly name: "ResourceProvisionedThroughputExceededException" = "ResourceProvisionedThroughputExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The service cannot complete the request.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The data format is not valid. Kinesis Data Analytics cannot detect the schema for
 *       the given streaming source.</p>
 */
export class UnableToDetectSchemaException extends __BaseException {
  readonly name: "UnableToDetectSchemaException" = "UnableToDetectSchemaException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: string[];

  /**
   * <p>Stream data that was modified by the processor specified in the <code>InputProcessingConfiguration</code> parameter. </p>
   */
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
    this.Message = opts.Message;
    this.RawInputRecords = opts.RawInputRecords;
    this.ProcessedInputRecords = opts.ProcessedInputRecords;
  }
}

export interface ListApplicationsRequest {
  /**
   * <p>The maximum number of applications to list.</p>
   */
  Limit?: number;

  /**
   * <p>If a previous command returned a pagination token,
   *       pass it into this value to retrieve the next set of results.
   *       For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;
}

export interface ListApplicationsResponse {
  /**
   * <p>A list of <code>ApplicationSummary</code> objects.</p>
   */
  ApplicationSummaries: ApplicationSummary[] | undefined;

  /**
   * <p>The pagination token for the next set of results, or <code>null</code> if there are no additional results.
   *       Pass this token into a subsequent command to retrieve the next set of items
   *       For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;
}

export interface ListApplicationSnapshotsRequest {
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The maximum number of application snapshots to list.</p>
   */
  Limit?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more
   *       output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should
   *       continue from. </p>
   */
  NextToken?: string;
}

export interface ListApplicationSnapshotsResponse {
  /**
   * <p>A collection of objects containing information about the application snapshots.</p>
   */
  SnapshotSummaries?: SnapshotDetails[];

  /**
   * <p>The token for the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  NextToken?: string;
}

export interface ListApplicationVersionsRequest {
  /**
   * <p>The name of the application for which you want to list all versions.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The maximum number of versions to list in this invocation of the operation.</p>
   */
  Limit?: number;

  /**
   * <p>If a previous invocation of this operation returned a pagination token, pass it into this value to retrieve the next set of results. For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;
}

export interface ListApplicationVersionsResponse {
  /**
   * <p>A list of the application versions and the associated configuration summaries. The list includes application versions that were rolled back.</p>
   *          <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p>
   */
  ApplicationVersionSummaries?: ApplicationVersionSummary[];

  /**
   * <p>The pagination token for the next set of results, or <code>null</code> if there are no additional results.
   *       To retrieve the next set of items, pass this token into a subsequent invocation of this operation. For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the application for which to retrieve tags.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value tags assigned to the application.</p>
   */
  Tags?: Tag[];
}

export interface RollbackApplicationRequest {
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version ID. You can retrieve the application version ID using
   *             <a>DescribeApplication</a>.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export interface RollbackApplicationResponse {
  /**
   * <p>Describes the application, including the application Amazon Resource Name (ARN), status,
   *       latest version, and input and output configurations.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * <p>Describes the starting parameters for a SQL-based Kinesis Data Analytics application.</p>
 */
export interface SqlRunConfiguration {
  /**
   * <p>The input source ID. You can get this ID by calling the <a>DescribeApplication</a> operation. </p>
   */
  InputId: string | undefined;

  /**
   * <p>The point at which you want the application to start processing records from the streaming
   *       source. </p>
   */
  InputStartingPositionConfiguration: InputStartingPositionConfiguration | undefined;
}

/**
 * <p>Describes the starting parameters for an Kinesis Data Analytics application.</p>
 */
export interface RunConfiguration {
  /**
   * <p>Describes the starting parameters for a Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkRunConfiguration?: FlinkRunConfiguration;

  /**
   * <p>Describes the starting parameters for a SQL-based Kinesis Data Analytics application
   *       application.</p>
   */
  SqlRunConfigurations?: SqlRunConfiguration[];

  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
}

export interface StartApplicationRequest {
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Identifies the run configuration (start parameters) of a Kinesis Data Analytics application.</p>
   */
  RunConfiguration?: RunConfiguration;
}

export interface StartApplicationResponse {}

export interface StopApplicationRequest {
  /**
   * <p>The name of the running application to stop.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Set to <code>true</code> to force the application to stop. If you set <code>Force</code>
   *           to <code>true</code>, Kinesis Data Analytics stops the application without taking a snapshot.
   *       </p>
   *           <note>
   *             <p>Force-stopping your application may lead to data loss or duplication.
   *               To prevent data loss or duplicate processing of data during application restarts,
   *               we recommend you to take frequent snapshots of your application.</p>
   *          </note>
   *          <p>You can only force stop a Flink-based Kinesis Data Analytics application. You can't force stop a SQL-based Kinesis Data Analytics application.</p>
   *          <p>The application must be in the
   *           <code>STARTING</code>, <code>UPDATING</code>, <code>STOPPING</code>, <code>AUTOSCALING</code>, or
   *           <code>RUNNING</code> status. </p>
   */
  Force?: boolean;
}

export interface StopApplicationResponse {}

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

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the Kinesis Data Analytics application from which to remove the tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of keys of tags to remove from the specified application.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * <p>Describes the updates to the starting parameters for a Kinesis Data Analytics application.</p>
 */
export interface RunConfigurationUpdate {
  /**
   * <p>Describes the starting parameters for a Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkRunConfiguration?: FlinkRunConfiguration;

  /**
   * <p>Describes updates to the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
}

export interface UpdateApplicationRequest {
  /**
   * <p>The name of the application to update.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version ID. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>.You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  CurrentApplicationVersionId?: number;

  /**
   * <p>Describes application configuration updates.</p>
   */
  ApplicationConfigurationUpdate?: ApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to the service execution role.</p>
   */
  ServiceExecutionRoleUpdate?: string;

  /**
   * <p>Describes updates to the application's starting parameters.</p>
   */
  RunConfigurationUpdate?: RunConfigurationUpdate;

  /**
   * <p>Describes application Amazon CloudWatch logging option updates. You can only update
   *       existing CloudWatch logging options with this action. To add a new CloudWatch logging option,
   *       use <a>AddApplicationCloudWatchLoggingOption</a>.</p>
   */
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];

  /**
   * <p>A value you use to implement strong concurrency for application updates. You must
   *       provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You
   *       get the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the
   *         <code>ConditionalToken</code> parameter instead of
   *       <code>CurrentApplicationVersionId</code>.</p>
   */
  ConditionalToken?: string;
}

export interface UpdateApplicationResponse {
  /**
   * <p>Describes application updates.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

export interface UpdateApplicationMaintenanceConfigurationRequest {
  /**
   * <p>The name of the application for which you want to update the maintenance configuration.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Describes the application maintenance configuration update.</p>
   */
  ApplicationMaintenanceConfigurationUpdate: ApplicationMaintenanceConfigurationUpdate | undefined;
}

export interface UpdateApplicationMaintenanceConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The application maintenance configuration description after the update.</p>
   */
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
}

/**
 * @internal
 */
export const CloudWatchLoggingOptionFilterSensitiveLog = (obj: CloudWatchLoggingOption): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationCloudWatchLoggingOptionRequestFilterSensitiveLog = (
  obj: AddApplicationCloudWatchLoggingOptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLoggingOptionDescriptionFilterSensitiveLog = (obj: CloudWatchLoggingOptionDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationCloudWatchLoggingOptionResponseFilterSensitiveLog = (
  obj: AddApplicationCloudWatchLoggingOptionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputParallelismFilterSensitiveLog = (obj: InputParallelism): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputLambdaProcessorFilterSensitiveLog = (obj: InputLambdaProcessor): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputProcessingConfigurationFilterSensitiveLog = (obj: InputProcessingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecordColumnFilterSensitiveLog = (obj: RecordColumn): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CSVMappingParametersFilterSensitiveLog = (obj: CSVMappingParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JSONMappingParametersFilterSensitiveLog = (obj: JSONMappingParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MappingParametersFilterSensitiveLog = (obj: MappingParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecordFormatFilterSensitiveLog = (obj: RecordFormat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceSchemaFilterSensitiveLog = (obj: SourceSchema): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisFirehoseInputFilterSensitiveLog = (obj: KinesisFirehoseInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisStreamsInputFilterSensitiveLog = (obj: KinesisStreamsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputFilterSensitiveLog = (obj: Input): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationInputRequestFilterSensitiveLog = (obj: AddApplicationInputRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputLambdaProcessorDescriptionFilterSensitiveLog = (obj: InputLambdaProcessorDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputProcessingConfigurationDescriptionFilterSensitiveLog = (
  obj: InputProcessingConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputStartingPositionConfigurationFilterSensitiveLog = (obj: InputStartingPositionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisFirehoseInputDescriptionFilterSensitiveLog = (obj: KinesisFirehoseInputDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisStreamsInputDescriptionFilterSensitiveLog = (obj: KinesisStreamsInputDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputDescriptionFilterSensitiveLog = (obj: InputDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationInputResponseFilterSensitiveLog = (obj: AddApplicationInputResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationInputProcessingConfigurationRequestFilterSensitiveLog = (
  obj: AddApplicationInputProcessingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationInputProcessingConfigurationResponseFilterSensitiveLog = (
  obj: AddApplicationInputProcessingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DestinationSchemaFilterSensitiveLog = (obj: DestinationSchema): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisFirehoseOutputFilterSensitiveLog = (obj: KinesisFirehoseOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisStreamsOutputFilterSensitiveLog = (obj: KinesisStreamsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaOutputFilterSensitiveLog = (obj: LambdaOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputFilterSensitiveLog = (obj: Output): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationOutputRequestFilterSensitiveLog = (obj: AddApplicationOutputRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisFirehoseOutputDescriptionFilterSensitiveLog = (obj: KinesisFirehoseOutputDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisStreamsOutputDescriptionFilterSensitiveLog = (obj: KinesisStreamsOutputDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaOutputDescriptionFilterSensitiveLog = (obj: LambdaOutputDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputDescriptionFilterSensitiveLog = (obj: OutputDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationOutputResponseFilterSensitiveLog = (obj: AddApplicationOutputResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ReferenceDataSourceFilterSensitiveLog = (obj: S3ReferenceDataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceDataSourceFilterSensitiveLog = (obj: ReferenceDataSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationReferenceDataSourceRequestFilterSensitiveLog = (
  obj: AddApplicationReferenceDataSourceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ReferenceDataSourceDescriptionFilterSensitiveLog = (obj: S3ReferenceDataSourceDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceDataSourceDescriptionFilterSensitiveLog = (obj: ReferenceDataSourceDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationReferenceDataSourceResponseFilterSensitiveLog = (
  obj: AddApplicationReferenceDataSourceResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigurationFilterSensitiveLog = (obj: VpcConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationVpcConfigurationRequestFilterSensitiveLog = (
  obj: AddApplicationVpcConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigurationDescriptionFilterSensitiveLog = (obj: VpcConfigurationDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AddApplicationVpcConfigurationResponseFilterSensitiveLog = (
  obj: AddApplicationVpcConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ContentLocationFilterSensitiveLog = (obj: S3ContentLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeContentFilterSensitiveLog = (obj: CodeContent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationCodeConfigurationFilterSensitiveLog = (obj: ApplicationCodeConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ApplicationCodeLocationDescriptionFilterSensitiveLog = (
  obj: S3ApplicationCodeLocationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeContentDescriptionFilterSensitiveLog = (obj: CodeContentDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationCodeConfigurationDescriptionFilterSensitiveLog = (
  obj: ApplicationCodeConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ContentLocationUpdateFilterSensitiveLog = (obj: S3ContentLocationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeContentUpdateFilterSensitiveLog = (obj: CodeContentUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationCodeConfigurationUpdateFilterSensitiveLog = (obj: ApplicationCodeConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationSnapshotConfigurationFilterSensitiveLog = (obj: ApplicationSnapshotConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PropertyGroupFilterSensitiveLog = (obj: PropertyGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentPropertiesFilterSensitiveLog = (obj: EnvironmentProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckpointConfigurationFilterSensitiveLog = (obj: CheckpointConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringConfigurationFilterSensitiveLog = (obj: MonitoringConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParallelismConfigurationFilterSensitiveLog = (obj: ParallelismConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlinkApplicationConfigurationFilterSensitiveLog = (obj: FlinkApplicationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SqlApplicationConfigurationFilterSensitiveLog = (obj: SqlApplicationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlueDataCatalogConfigurationFilterSensitiveLog = (obj: GlueDataCatalogConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CatalogConfigurationFilterSensitiveLog = (obj: CatalogConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MavenReferenceFilterSensitiveLog = (obj: MavenReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomArtifactConfigurationFilterSensitiveLog = (obj: CustomArtifactConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ContentBaseLocationFilterSensitiveLog = (obj: S3ContentBaseLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeployAsApplicationConfigurationFilterSensitiveLog = (obj: DeployAsApplicationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZeppelinMonitoringConfigurationFilterSensitiveLog = (obj: ZeppelinMonitoringConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZeppelinApplicationConfigurationFilterSensitiveLog = (obj: ZeppelinApplicationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationConfigurationFilterSensitiveLog = (obj: ApplicationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationSnapshotConfigurationDescriptionFilterSensitiveLog = (
  obj: ApplicationSnapshotConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentPropertyDescriptionsFilterSensitiveLog = (obj: EnvironmentPropertyDescriptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckpointConfigurationDescriptionFilterSensitiveLog = (obj: CheckpointConfigurationDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringConfigurationDescriptionFilterSensitiveLog = (obj: MonitoringConfigurationDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParallelismConfigurationDescriptionFilterSensitiveLog = (
  obj: ParallelismConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlinkApplicationConfigurationDescriptionFilterSensitiveLog = (
  obj: FlinkApplicationConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationRestoreConfigurationFilterSensitiveLog = (obj: ApplicationRestoreConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlinkRunConfigurationFilterSensitiveLog = (obj: FlinkRunConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunConfigurationDescriptionFilterSensitiveLog = (obj: RunConfigurationDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SqlApplicationConfigurationDescriptionFilterSensitiveLog = (
  obj: SqlApplicationConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlueDataCatalogConfigurationDescriptionFilterSensitiveLog = (
  obj: GlueDataCatalogConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CatalogConfigurationDescriptionFilterSensitiveLog = (obj: CatalogConfigurationDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomArtifactConfigurationDescriptionFilterSensitiveLog = (
  obj: CustomArtifactConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ContentBaseLocationDescriptionFilterSensitiveLog = (obj: S3ContentBaseLocationDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeployAsApplicationConfigurationDescriptionFilterSensitiveLog = (
  obj: DeployAsApplicationConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZeppelinMonitoringConfigurationDescriptionFilterSensitiveLog = (
  obj: ZeppelinMonitoringConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZeppelinApplicationConfigurationDescriptionFilterSensitiveLog = (
  obj: ZeppelinApplicationConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationConfigurationDescriptionFilterSensitiveLog = (
  obj: ApplicationConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationSnapshotConfigurationUpdateFilterSensitiveLog = (
  obj: ApplicationSnapshotConfigurationUpdate
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentPropertyUpdatesFilterSensitiveLog = (obj: EnvironmentPropertyUpdates): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckpointConfigurationUpdateFilterSensitiveLog = (obj: CheckpointConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitoringConfigurationUpdateFilterSensitiveLog = (obj: MonitoringConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParallelismConfigurationUpdateFilterSensitiveLog = (obj: ParallelismConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FlinkApplicationConfigurationUpdateFilterSensitiveLog = (
  obj: FlinkApplicationConfigurationUpdate
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputParallelismUpdateFilterSensitiveLog = (obj: InputParallelismUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputLambdaProcessorUpdateFilterSensitiveLog = (obj: InputLambdaProcessorUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputProcessingConfigurationUpdateFilterSensitiveLog = (obj: InputProcessingConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputSchemaUpdateFilterSensitiveLog = (obj: InputSchemaUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisFirehoseInputUpdateFilterSensitiveLog = (obj: KinesisFirehoseInputUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisStreamsInputUpdateFilterSensitiveLog = (obj: KinesisStreamsInputUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputUpdateFilterSensitiveLog = (obj: InputUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisFirehoseOutputUpdateFilterSensitiveLog = (obj: KinesisFirehoseOutputUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisStreamsOutputUpdateFilterSensitiveLog = (obj: KinesisStreamsOutputUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaOutputUpdateFilterSensitiveLog = (obj: LambdaOutputUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputUpdateFilterSensitiveLog = (obj: OutputUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ReferenceDataSourceUpdateFilterSensitiveLog = (obj: S3ReferenceDataSourceUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceDataSourceUpdateFilterSensitiveLog = (obj: ReferenceDataSourceUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SqlApplicationConfigurationUpdateFilterSensitiveLog = (obj: SqlApplicationConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcConfigurationUpdateFilterSensitiveLog = (obj: VpcConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GlueDataCatalogConfigurationUpdateFilterSensitiveLog = (obj: GlueDataCatalogConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CatalogConfigurationUpdateFilterSensitiveLog = (obj: CatalogConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ContentBaseLocationUpdateFilterSensitiveLog = (obj: S3ContentBaseLocationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeployAsApplicationConfigurationUpdateFilterSensitiveLog = (
  obj: DeployAsApplicationConfigurationUpdate
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZeppelinMonitoringConfigurationUpdateFilterSensitiveLog = (
  obj: ZeppelinMonitoringConfigurationUpdate
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ZeppelinApplicationConfigurationUpdateFilterSensitiveLog = (
  obj: ZeppelinApplicationConfigurationUpdate
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationConfigurationUpdateFilterSensitiveLog = (obj: ApplicationConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationMaintenanceConfigurationDescriptionFilterSensitiveLog = (
  obj: ApplicationMaintenanceConfigurationDescription
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationDetailFilterSensitiveLog = (obj: ApplicationDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationMaintenanceConfigurationUpdateFilterSensitiveLog = (
  obj: ApplicationMaintenanceConfigurationUpdate
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationSummaryFilterSensitiveLog = (obj: ApplicationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationVersionSummaryFilterSensitiveLog = (obj: ApplicationVersionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLoggingOptionUpdateFilterSensitiveLog = (obj: CloudWatchLoggingOptionUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationRequestFilterSensitiveLog = (obj: CreateApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationResponseFilterSensitiveLog = (obj: CreateApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationPresignedUrlRequestFilterSensitiveLog = (
  obj: CreateApplicationPresignedUrlRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationPresignedUrlResponseFilterSensitiveLog = (
  obj: CreateApplicationPresignedUrlResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationSnapshotRequestFilterSensitiveLog = (obj: CreateApplicationSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationSnapshotResponseFilterSensitiveLog = (obj: CreateApplicationSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationRequestFilterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationResponseFilterSensitiveLog = (obj: DeleteApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationCloudWatchLoggingOptionRequestFilterSensitiveLog = (
  obj: DeleteApplicationCloudWatchLoggingOptionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationCloudWatchLoggingOptionResponseFilterSensitiveLog = (
  obj: DeleteApplicationCloudWatchLoggingOptionResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationInputProcessingConfigurationRequestFilterSensitiveLog = (
  obj: DeleteApplicationInputProcessingConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationInputProcessingConfigurationResponseFilterSensitiveLog = (
  obj: DeleteApplicationInputProcessingConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationOutputRequestFilterSensitiveLog = (obj: DeleteApplicationOutputRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationOutputResponseFilterSensitiveLog = (obj: DeleteApplicationOutputResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationReferenceDataSourceRequestFilterSensitiveLog = (
  obj: DeleteApplicationReferenceDataSourceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationReferenceDataSourceResponseFilterSensitiveLog = (
  obj: DeleteApplicationReferenceDataSourceResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationSnapshotRequestFilterSensitiveLog = (obj: DeleteApplicationSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationSnapshotResponseFilterSensitiveLog = (obj: DeleteApplicationSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationVpcConfigurationRequestFilterSensitiveLog = (
  obj: DeleteApplicationVpcConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationVpcConfigurationResponseFilterSensitiveLog = (
  obj: DeleteApplicationVpcConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationRequestFilterSensitiveLog = (obj: DescribeApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationResponseFilterSensitiveLog = (obj: DescribeApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationSnapshotRequestFilterSensitiveLog = (obj: DescribeApplicationSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotDetailsFilterSensitiveLog = (obj: SnapshotDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationSnapshotResponseFilterSensitiveLog = (
  obj: DescribeApplicationSnapshotResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationVersionRequestFilterSensitiveLog = (obj: DescribeApplicationVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationVersionResponseFilterSensitiveLog = (obj: DescribeApplicationVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ConfigurationFilterSensitiveLog = (obj: S3Configuration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DiscoverInputSchemaRequestFilterSensitiveLog = (obj: DiscoverInputSchemaRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DiscoverInputSchemaResponseFilterSensitiveLog = (obj: DiscoverInputSchemaResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationsRequestFilterSensitiveLog = (obj: ListApplicationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationsResponseFilterSensitiveLog = (obj: ListApplicationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationSnapshotsRequestFilterSensitiveLog = (obj: ListApplicationSnapshotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationSnapshotsResponseFilterSensitiveLog = (obj: ListApplicationSnapshotsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationVersionsRequestFilterSensitiveLog = (obj: ListApplicationVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationVersionsResponseFilterSensitiveLog = (obj: ListApplicationVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RollbackApplicationRequestFilterSensitiveLog = (obj: RollbackApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RollbackApplicationResponseFilterSensitiveLog = (obj: RollbackApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SqlRunConfigurationFilterSensitiveLog = (obj: SqlRunConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunConfigurationFilterSensitiveLog = (obj: RunConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartApplicationRequestFilterSensitiveLog = (obj: StartApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartApplicationResponseFilterSensitiveLog = (obj: StartApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopApplicationRequestFilterSensitiveLog = (obj: StopApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopApplicationResponseFilterSensitiveLog = (obj: StopApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunConfigurationUpdateFilterSensitiveLog = (obj: RunConfigurationUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationRequestFilterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationResponseFilterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationMaintenanceConfigurationRequestFilterSensitiveLog = (
  obj: UpdateApplicationMaintenanceConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationMaintenanceConfigurationResponseFilterSensitiveLog = (
  obj: UpdateApplicationMaintenanceConfigurationResponse
): any => ({
  ...obj,
});
