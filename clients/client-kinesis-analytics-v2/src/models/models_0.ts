// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KinesisAnalyticsV2ServiceException as __BaseException } from "./KinesisAnalyticsV2ServiceException";

/**
 * @public
 * <p>Provides a description of Amazon CloudWatch logging options, including the log stream
 *       Amazon Resource Name (ARN). </p>
 */
export interface CloudWatchLoggingOption {
  /**
   * @public
   * <p>The ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string | undefined;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * @public
   * <p>The Kinesis Data Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The version ID of the Kinesis Data Analytics application. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>.You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  CurrentApplicationVersionId?: number;

  /**
   * @public
   * <p>Provides the Amazon CloudWatch log stream Amazon Resource Name (ARN). </p>
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption | undefined;

  /**
   * @public
   * <p>A value you use to implement strong concurrency for application updates. You must
   *       provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You
   *       get the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the
   *         <code>ConditionalToken</code> parameter instead of
   *       <code>CurrentApplicationVersionId</code>.</p>
   */
  ConditionalToken?: string;
}

/**
 * @public
 * <p>Describes the Amazon CloudWatch logging option.</p>
 */
export interface CloudWatchLoggingOptionDescription {
  /**
   * @public
   * <p>The ID of the CloudWatch logging option description.</p>
   */
  CloudWatchLoggingOptionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log to receive application
   *       messages.</p>
   */
  LogStreamARN: string | undefined;

  /**
   * @public
   * <p>The IAM ARN of the role to use to send application messages. </p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications created with the current API version have an
   *         application-level service execution role rather than a resource-level role.</p>
   *          </note>
   */
  RoleARN?: string;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionResponse {
  /**
   * @public
   * <p>The application's ARN.</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>The new version ID of the Kinesis Data Analytics application. Kinesis Data Analytics
   *       updates the <code>ApplicationVersionId</code> each time you change the CloudWatch logging
   *       options. </p>
   */
  ApplicationVersionId?: number;

  /**
   * @public
   * <p>The descriptions of the current CloudWatch logging options for the Kinesis Data Analytics application.</p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, describes the number of
 *       in-application streams to create for a given streaming source. </p>
 */
export interface InputParallelism {
  /**
   * @public
   * <p>The number of in-application streams to create.</p>
   */
  Count?: number;
}

/**
 * @public
 * <p>An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is
 *       used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application. </p>
 */
export interface InputLambdaProcessor {
  /**
   * @public
   * <p>The ARN of the Amazon Lambda function that operates on records in the stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, describes a processor that is
 *       used to preprocess the records in the stream before being processed by your application code.
 *       Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.</p>
 */
export interface InputProcessingConfiguration {
  /**
   * @public
   * <p>The <a>InputLambdaProcessor</a> that is used to preprocess the records
   *       in the stream before being processed by your application code.</p>
   */
  InputLambdaProcessor: InputLambdaProcessor | undefined;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, describes the mapping of each
 *       data element in the streaming source to the corresponding column in the in-application
 *       stream.</p>
 *          <p>Also used to describe the format of the reference data source.</p>
 */
export interface RecordColumn {
  /**
   * @public
   * <p>The name of the column that is created in the in-application input stream or reference
   *       table.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A reference to the data element in the streaming input or the reference data
   *       source.</p>
   */
  Mapping?: string;

  /**
   * @public
   * <p>The type of column created in the in-application input stream or reference table.</p>
   */
  SqlType: string | undefined;
}

/**
 * @public
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
   * @public
   * <p>The row delimiter. For example, in a CSV format, <i>'\n'</i> is the typical
   *       row delimiter.</p>
   */
  RecordRowDelimiter: string | undefined;

  /**
   * @public
   * <p>The column delimiter. For example, in a CSV format, a comma (",") is the typical column
   *       delimiter.</p>
   */
  RecordColumnDelimiter: string | undefined;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, provides additional mapping
 *       information when JSON is the record format on the streaming source.</p>
 */
export interface JSONMappingParameters {
  /**
   * @public
   * <p>The path to the top-level parent that contains the records.</p>
   */
  RecordRowPath: string | undefined;
}

/**
 * @public
 * <p>When you configure a SQL-based Kinesis Data Analytics application's input at the
 *       time of creating or updating an application, provides additional mapping information specific
 *       to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the
 *       streaming source.</p>
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
   *       (for example, CSV).</p>
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
 * <p> For a SQL-based Kinesis Data Analytics application, describes the record format
 *       and relevant mapping information that should be applied to schematize the records on the
 *       stream. </p>
 */
export interface RecordFormat {
  /**
   * @public
   * <p>The type of record format.</p>
   */
  RecordFormatType: RecordFormatType | undefined;

  /**
   * @public
   * <p>When you configure application input at the time of creating or updating an application,
   *       provides additional mapping information specific to the record format (such as JSON, CSV, or
   *       record fields delimited by some delimiter) on the streaming source.</p>
   */
  MappingParameters?: MappingParameters;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, describes the format of the
 *       data in the streaming source, and how each data element maps to corresponding columns created
 *       in the in-application stream. </p>
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
   * <p>A list of <code>RecordColumn</code> objects. </p>
   */
  RecordColumns: RecordColumn[] | undefined;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data
 *       Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon
 *       Resource Name (ARN).</p>
 */
export interface KinesisFirehoseInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 * <p> Identifies a Kinesis data stream as the streaming source. You provide the
 *       stream's Amazon Resource Name (ARN).</p>
 */
export interface KinesisStreamsInput {
  /**
   * @public
   * <p>The ARN of the input Kinesis data stream to read.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 * <p>When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream
 *       name that is created,
 *       and the mapping between the two. </p>
 */
export interface Input {
  /**
   * @public
   * <p>The name prefix to use when creating an in-application stream. Suppose that you specify a
   *       prefix "<code>MyInApplicationStream</code>." Kinesis Data Analytics then creates one or more
   *       (as per the <code>InputParallelism</code> count you specified) in-application streams with the
   *       names "<code>MyInApplicationStream_001</code>," "<code>MyInApplicationStream_002</code>," and
   *       so on. </p>
   */
  NamePrefix: string | undefined;

  /**
   * @public
   * <p>The <a>InputProcessingConfiguration</a> for the input. An input processor transforms records as they are received
   *       from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is
   *       <a>InputLambdaProcessor</a>. </p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * @public
   * <p>If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInput?: KinesisStreamsInput;

  /**
   * @public
   * <p>If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.</p>
   */
  KinesisFirehoseInput?: KinesisFirehoseInput;

  /**
   * @public
   * <p>Describes the number of in-application streams to create. </p>
   */
  InputParallelism?: InputParallelism;

  /**
   * @public
   * <p>Describes the format of the data in the streaming source, and how each data element maps
   *       to corresponding columns in the in-application stream that is being created.</p>
   *          <p>Also used to describe the format of the reference data source.</p>
   */
  InputSchema: SourceSchema | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputRequest {
  /**
   * @public
   * <p>The name of your existing application to which you want to add the streaming
   *       source.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The current version of your application.
   *         You must provide the <code>ApplicationVersionID</code> or the <code>ConditionalToken</code>.You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The <a>Input</a> to add.</p>
   */
  Input: Input | undefined;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, an object that contains the
 *       Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in
 *       the stream.</p>
 */
export interface InputLambdaProcessorDescription {
  /**
   * @public
   * <p>The ARN of the Amazon Lambda function that is used to preprocess the records in the
   *       stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;

  /**
   * @public
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
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, provides the configuration
 *         information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.</p>
 */
export interface InputProcessingConfigurationDescription {
  /**
   * @public
   * <p>Provides configuration information about the associated <a>InputLambdaProcessorDescription</a>
   *          </p>
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
 *       the streaming source.</p>
 */
export interface InputStartingPositionConfiguration {
  /**
   * @public
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
  InputStartingPosition?: InputStartingPosition;
}

/**
 * @public
 * <p>Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source
 *       in the application input configuration. </p>
 */
export interface KinesisFirehoseInputDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
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
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, describes the Kinesis data
 *       stream that is configured as the streaming source in the application input configuration. </p>
 */
export interface KinesisStreamsInputDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
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
 * @public
 * <p>Describes the application input configuration for a SQL-based Kinesis Data Analytics application. </p>
 */
export interface InputDescription {
  /**
   * @public
   * <p>The input ID that is associated with the application input. This is the ID that Kinesis Data Analytics assigns to each input
   *       configuration that you add to your application. </p>
   */
  InputId?: string;

  /**
   * @public
   * <p>The in-application name prefix.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>Returns the in-application stream names that are mapped to the stream source. </p>
   */
  InAppStreamNames?: string[];

  /**
   * @public
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run. </p>
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

  /**
   * @public
   * <p>If a Kinesis data stream is configured as a streaming source, provides the Kinesis data
   *       stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription;

  /**
   * @public
   * <p>If a Kinesis Data Firehose delivery stream is configured as a streaming source, provides the delivery stream's ARN. </p>
   */
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

  /**
   * @public
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns
   *       in the in-application stream that is being created. </p>
   */
  InputSchema?: SourceSchema;

  /**
   * @public
   * <p>Describes the configured parallelism (number of in-application streams mapped to the streaming source). </p>
   */
  InputParallelism?: InputParallelism;

  /**
   * @public
   * <p>The point at which the application is configured to read from the input stream.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
}

/**
 * @public
 */
export interface AddApplicationInputResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId?: number;

  /**
   * @public
   * <p>Describes the application input configuration.
   *
   *
   *     </p>
   */
  InputDescriptions?: InputDescription[];
}

/**
 * @public
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

/**
 * @public
 */
export interface AddApplicationInputProcessingConfigurationRequest {
  /**
   * @public
   * <p>The name of the application to which you want to add the input processing
   *       configuration.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The version of the application to which you want to add the input processing
   *       configuration. You can use the <a>DescribeApplication</a> operation to get the
   *       current application version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The ID of the input configuration to add the input processing configuration to. You
   *       can get a list of the input IDs for an application using the <a>DescribeApplication</a> operation.</p>
   */
  InputId: string | undefined;

  /**
   * @public
   * <p>The <a>InputProcessingConfiguration</a> to add to the application.</p>
   */
  InputProcessingConfiguration: InputProcessingConfiguration | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputProcessingConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>Provides the current application version. </p>
   */
  ApplicationVersionId?: number;

  /**
   * @public
   * <p>The input ID that is associated with the application input. This is the ID that Kinesis Data Analytics assigns
   *       to each input configuration that you add to your
   *       application.</p>
   */
  InputId?: string;

  /**
   * @public
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run.</p>
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
}

/**
 * @public
 * <p>Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application. </p>
 */
export interface DestinationSchema {
  /**
   * @public
   * <p>Specifies the format of the records on the output stream.</p>
   */
  RecordFormatType: RecordFormatType | undefined;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, when configuring application
 *       output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the
 *       stream Amazon Resource Name (ARN) of the delivery stream. </p>
 */
export interface KinesisFirehoseOutput {
  /**
   * @public
   * <p>The ARN of the destination delivery stream to write to.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 * <p>When you configure a SQL-based Kinesis Data Analytics application's output,
 *       identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource
 *       Name (ARN). </p>
 */
export interface KinesisStreamsOutput {
  /**
   * @public
   * <p>The ARN of the destination Kinesis data stream to write to.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 * <p>When you configure a SQL-based Kinesis Data Analytics application's output,
 *       identifies an Amazon Lambda function as the destination. You provide the function Amazon Resource
 *       Name (ARN) of the Lambda function. </p>
 */
export interface LambdaOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination Lambda function to write to.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 * <p> Describes a SQL-based Kinesis Data Analytics application's output configuration,
 *       in which you identify an in-application stream and a destination where you want the
 *       in-application stream data to be written. The destination can be a Kinesis data stream or a
 *       Kinesis Data Firehose delivery stream. </p>
 *
 *          <p></p>
 */
export interface Output {
  /**
   * @public
   * <p>The name of the in-application stream.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Identifies a Kinesis data stream
   *       as the destination.</p>
   */
  KinesisStreamsOutput?: KinesisStreamsOutput;

  /**
   * @public
   * <p>Identifies a Kinesis Data Firehose delivery stream as the destination.</p>
   */
  KinesisFirehoseOutput?: KinesisFirehoseOutput;

  /**
   * @public
   * <p>Identifies an Amazon Lambda function as the destination.</p>
   */
  LambdaOutput?: LambdaOutput;

  /**
   * @public
   * <p>Describes the data format when records are written to the destination.
   *       </p>
   */
  DestinationSchema: DestinationSchema | undefined;
}

/**
 * @public
 */
export interface AddApplicationOutputRequest {
  /**
   * @public
   * <p>The name of the application to which you want to add the output configuration.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The version of the application to which you want to add the output configuration. You can
   *       use the <a>DescribeApplication</a> operation to get the current application
   *       version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned. </p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>An array of objects, each describing one output configuration. In the output
   *       configuration, you specify the name of an in-application stream, a destination (that is, a
   *       Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), and
   *       record the formation to use when writing to the destination.</p>
   */
  Output: Output | undefined;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis
 *       Data Firehose delivery stream that is configured as its destination.</p>
 */
export interface KinesisFirehoseOutputDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
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
 * @public
 * <p>For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis
 *       data stream that is configured as its destination. </p>
 */
export interface KinesisStreamsOutputDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
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
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application's output, describes the Amazon
 *       Lambda function that is configured as its destination. </p>
 */
export interface LambdaOutputDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination Lambda function.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
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
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, describes the application
 *       output configuration, which includes the in-application stream name and the destination where
 *       the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data
 *       Firehose delivery stream. </p>
 */
export interface OutputDescription {
  /**
   * @public
   * <p>A unique identifier for the output configuration.</p>
   */
  OutputId?: string;

  /**
   * @public
   * <p>The name of the in-application stream that is configured as output.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Describes the Kinesis data stream that is configured as the destination where output is
   *       written.</p>
   */
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

  /**
   * @public
   * <p>Describes the Kinesis Data Firehose delivery stream that is configured as the destination
   *       where output is written.</p>
   */
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

  /**
   * @public
   * <p>Describes the Lambda function that is configured as the destination where output is
   *       written.</p>
   */
  LambdaOutputDescription?: LambdaOutputDescription;

  /**
   * @public
   * <p>The data format used for writing data to the destination.</p>
   */
  DestinationSchema?: DestinationSchema;
}

/**
 * @public
 */
export interface AddApplicationOutputResponse {
  /**
   * @public
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>The updated application version ID. Kinesis Data Analytics increments this ID when the application is
   *       updated.</p>
   */
  ApplicationVersionId?: number;

  /**
   * @public
   * <p>Describes the application output configuration.
   *       For more information,
   *       see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
   *
   *     </p>
   */
  OutputDescriptions?: OutputDescription[];
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3
 *       bucket and object that contains the reference data.</p>
 *
 *          <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a>
 *         operation to trigger reloading of data into your application. </p>
 */
export interface S3ReferenceDataSource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN?: string;

  /**
   * @public
   * <p>The object key name containing the reference data.</p>
   */
  FileKey?: string;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, describes the reference data
 *       source by providing the source information (Amazon S3 bucket name and object key name), the
 *       resulting in-application table name that is created, and the necessary schema to map the data
 *       elements in the Amazon S3 object to the in-application table.</p>
 */
export interface ReferenceDataSource {
  /**
   * @public
   * <p>The name of the in-application table to create.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>Identifies the S3 bucket and object that contains the reference data.
   *
   *       A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
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
 */
export interface AddApplicationReferenceDataSourceRequest {
  /**
   * @public
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The version of the application for which you are adding the reference data source.
   *         You can
   *       use the <a>DescribeApplication</a> operation to get the current application
   *       version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The reference data source can be an object in your Amazon S3 bucket. Kinesis Data Analytics reads the object and copies the data
   *       into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting
   *       in-application table that is
   *       created. </p>
   */
  ReferenceDataSource: ReferenceDataSource | undefined;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, provides the bucket name and
 *       object key name that stores the reference data.</p>
 */
export interface S3ReferenceDataSourceDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>Amazon S3 object key name.</p>
   */
  FileKey: string | undefined;

  /**
   * @public
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
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, describes the reference data
 *       source configured for an application.</p>
 */
export interface ReferenceDataSourceDescription {
  /**
   * @public
   * <p>The ID of the reference data source. This is the ID that Kinesis Data Analytics assigns
   *       when you add the reference data source to your application using the <a>CreateApplication</a> or <a>UpdateApplication</a> operation.</p>
   */
  ReferenceId: string | undefined;

  /**
   * @public
   * <p>The in-application table name created by the specific reference data source configuration.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>Provides the Amazon S3 bucket name, the object key name that contains the reference data. </p>
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
 */
export interface AddApplicationReferenceDataSourceResponse {
  /**
   * @public
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>The updated application version ID. Kinesis Data Analytics increments this ID when
   *       the application is updated.</p>
   */
  ApplicationVersionId?: number;

  /**
   * @public
   * <p>Describes reference data sources configured for the application.
   *
   *
   *
   *     </p>
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}

/**
 * @public
 * <p>Describes the parameters of a VPC used by the application.</p>
 */
export interface VpcConfiguration {
  /**
   * @public
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs
   *         used by the VPC configuration.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a>
   *         IDs used by the VPC configuration.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddApplicationVpcConfigurationRequest {
  /**
   * @public
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
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
   * @public
   * <p>Description of the VPC to add to the application.</p>
   */
  VpcConfiguration: VpcConfiguration | undefined;

  /**
   * @public
   * <p>A value you use to implement strong concurrency for application updates. You must
   *       provide the <code>ApplicationVersionID</code> or the <code>ConditionalToken</code>. You get
   *       the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the
   *         <code>ConditionalToken</code> parameter instead of
   *       <code>CurrentApplicationVersionId</code>.</p>
   */
  ConditionalToken?: string;
}

/**
 * @public
 * <p>Describes the parameters of a VPC used by the application.</p>
 */
export interface VpcConfigurationDescription {
  /**
   * @public
   * <p>The ID of the VPC configuration.</p>
   */
  VpcConfigurationId: string | undefined;

  /**
   * @public
   * <p>The ID of the associated VPC.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a>
   *         IDs used by the VPC configuration.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a>
   *         IDs used by the VPC configuration.</p>
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddApplicationVpcConfigurationResponse {
  /**
   * @public
   * <p>The ARN of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>Provides the current application version. Kinesis Data Analytics updates the ApplicationVersionId each
   *       time you update the application.</p>
   */
  ApplicationVersionId?: number;

  /**
   * @public
   * <p>The parameters of the new VPC configuration.</p>
   */
  VpcConfigurationDescription?: VpcConfigurationDescription;
}

/**
 * @public
 * <p>For a Kinesis Data Analytics application provides a
 *       description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket,
 *       the name of the Amazon S3 object that contains the data, and the version number of the Amazon
 *       S3 object that contains the data. </p>
 */
export interface S3ContentLocation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>The file key for the object containing the application code.</p>
   */
  FileKey: string | undefined;

  /**
   * @public
   * <p>The version of the object containing the application code.</p>
   */
  ObjectVersion?: string;
}

/**
 * @public
 * <p>Specifies either the application code, or the location of the application code, for a
 *       Flink-based Kinesis Data Analytics application. </p>
 */
export interface CodeContent {
  /**
   * @public
   * <p>The text-format code for a Flink-based Kinesis Data Analytics application.</p>
   */
  TextContent?: string;

  /**
   * @public
   * <p>The zip-format code for a Flink-based Kinesis Data Analytics application.</p>
   */
  ZipFileContent?: Uint8Array;

  /**
   * @public
   * <p>Information about the Amazon S3 bucket that contains the application code.</p>
   */
  S3ContentLocation?: S3ContentLocation;
}

/**
 * @public
 * @enum
 */
export const CodeContentType = {
  PLAINTEXT: "PLAINTEXT",
  ZIPFILE: "ZIPFILE",
} as const;

/**
 * @public
 */
export type CodeContentType = (typeof CodeContentType)[keyof typeof CodeContentType];

/**
 * @public
 * <p>Describes code configuration for an application.</p>
 */
export interface ApplicationCodeConfiguration {
  /**
   * @public
   * <p>The location and type of the application code.</p>
   */
  CodeContent?: CodeContent;

  /**
   * @public
   * <p>Specifies whether the code content is in text or zip format.</p>
   */
  CodeContentType: CodeContentType | undefined;
}

/**
 * @public
 * <p>Describes the location of an application's code stored in an S3 bucket.</p>
 */
export interface S3ApplicationCodeLocationDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>The file key for the object containing the application code.</p>
   */
  FileKey: string | undefined;

  /**
   * @public
   * <p>The version of the object containing the application code.</p>
   */
  ObjectVersion?: string;
}

/**
 * @public
 * <p>Describes details about the code of a Kinesis Data Analytics application.</p>
 */
export interface CodeContentDescription {
  /**
   * @public
   * <p>The text-format code</p>
   */
  TextContent?: string;

  /**
   * @public
   * <p>The checksum that can be used to validate zip-format code.</p>
   */
  CodeMD5?: string;

  /**
   * @public
   * <p>The size in bytes of the application code. Can be used to validate zip-format code.</p>
   */
  CodeSize?: number;

  /**
   * @public
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the application
   *       code stored in Amazon S3.</p>
   */
  S3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;
}

/**
 * @public
 * <p>Describes code configuration for an application.</p>
 */
export interface ApplicationCodeConfigurationDescription {
  /**
   * @public
   * <p>Specifies whether the code content is in text or zip format.</p>
   */
  CodeContentType: CodeContentType | undefined;

  /**
   * @public
   * <p>Describes details about the location and format of the application code.</p>
   */
  CodeContentDescription?: CodeContentDescription;
}

/**
 * @public
 * <p>Describes an update for the Amazon S3 code content location for an application.</p>
 */
export interface S3ContentLocationUpdate {
  /**
   * @public
   * <p>The new Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   */
  BucketARNUpdate?: string;

  /**
   * @public
   * <p>The new file key for the object containing the application code.</p>
   */
  FileKeyUpdate?: string;

  /**
   * @public
   * <p>The new version of the object containing the application code.</p>
   */
  ObjectVersionUpdate?: string;
}

/**
 * @public
 * <p>Describes an update to the code of an application. Not supported for Apache Zeppelin.</p>
 */
export interface CodeContentUpdate {
  /**
   * @public
   * <p>Describes an update to the text code for an application.</p>
   */
  TextContentUpdate?: string;

  /**
   * @public
   * <p>Describes an update to the zipped code for an application.</p>
   */
  ZipFileContentUpdate?: Uint8Array;

  /**
   * @public
   * <p>Describes an update to the location of code for an application.</p>
   */
  S3ContentLocationUpdate?: S3ContentLocationUpdate;
}

/**
 * @public
 * <p>Describes code configuration updates for an application. This is supported for a Flink-based Kinesis Data Analytics application or a SQL-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationCodeConfigurationUpdate {
  /**
   * @public
   * <p>Describes updates to the code content type.</p>
   */
  CodeContentTypeUpdate?: CodeContentType;

  /**
   * @public
   * <p>Describes updates to the code content of an application.</p>
   */
  CodeContentUpdate?: CodeContentUpdate;
}

/**
 * @public
 * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfiguration {
  /**
   * @public
   * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
   */
  SnapshotsEnabled: boolean | undefined;
}

/**
 * @public
 * <p>Property key-value pairs passed into an application.</p>
 */
export interface PropertyGroup {
  /**
   * @public
   * <p>Describes the key of an application execution property key-value pair.</p>
   */
  PropertyGroupId: string | undefined;

  /**
   * @public
   * <p>Describes the value of an application execution property key-value pair.</p>
   */
  PropertyMap: Record<string, string> | undefined;
}

/**
 * @public
 * <p>Describes execution properties for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface EnvironmentProperties {
  /**
   * @public
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroups: PropertyGroup[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigurationType = {
  CUSTOM: "CUSTOM",
  DEFAULT: "DEFAULT",
} as const;

/**
 * @public
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

/**
 * @public
 * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault
 *       tolerance.
 *       For more information, see
 *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance">
 *         Checkpoints for Fault Tolerance</a> in the
 *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.</p>
 */
export interface CheckpointConfiguration {
  /**
   * @public
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
  ConfigurationType: ConfigurationType | undefined;

  /**
   * @public
   * <p>Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value
   *       is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabled?: boolean;

  /**
   * @public
   * <p>Describes the interval in milliseconds between checkpoint operations. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set
   *       to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointInterval?: number;

  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const LogLevel = {
  DEBUG: "DEBUG",
  ERROR: "ERROR",
  INFO: "INFO",
  WARN: "WARN",
} as const;

/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const MetricsLevel = {
  APPLICATION: "APPLICATION",
  OPERATOR: "OPERATOR",
  PARALLELISM: "PARALLELISM",
  TASK: "TASK",
} as const;

/**
 * @public
 */
export type MetricsLevel = (typeof MetricsLevel)[keyof typeof MetricsLevel];

/**
 * @public
 * <p>Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.</p>
 */
export interface MonitoringConfiguration {
  /**
   * @public
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.
   *     You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or
   *     <code>MetricsLevel</code> parameters.</p>
   */
  ConfigurationType: ConfigurationType | undefined;

  /**
   * @public
   * <p>Describes the granularity of the CloudWatch Logs for an application. The <code>Parallelism</code>
   *     level is not recommended for applications with a Parallelism over 64 due to excessive costs.</p>
   */
  MetricsLevel?: MetricsLevel;

  /**
   * @public
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: LogLevel;
}

/**
 * @public
 * <p>Describes parameters for how a Flink-based Kinesis Data Analytics application
 *       executes multiple tasks simultaneously. For more information about parallelism,
 *       see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink
 *         Documentation</a>.</p>
 */
export interface ParallelismConfiguration {
  /**
   * @public
   * <p>Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. You must set this property to <code>CUSTOM</code>
   *     in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.</p>
   */
  ConfigurationType: ConfigurationType | undefined;

  /**
   * @public
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
   * @public
   * <p>Describes the number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform per Kinesis Processing Unit
   *       (KPU) used by the application. For more
   *       information about KPUs, see <a href="http://aws.amazon.com/kinesis/data-analytics/pricing/">Amazon Kinesis Data Analytics Pricing</a>.</p>
   */
  ParallelismPerKPU?: number;

  /**
   * @public
   * <p>Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabled?: boolean;
}

/**
 * @public
 * <p>Describes configuration parameters for a Flink-based Kinesis Data Analytics application or a Studio notebook.</p>
 */
export interface FlinkApplicationConfiguration {
  /**
   * @public
   * <p>Describes an application's checkpointing configuration. Checkpointing is the
   *       process of persisting application state for fault tolerance.
   *       For more information, see
   *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance">
   *         Checkpoints for Fault Tolerance</a> in the
   *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>. </p>
   */
  CheckpointConfiguration?: CheckpointConfiguration;

  /**
   * @public
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   */
  MonitoringConfiguration?: MonitoringConfiguration;

  /**
   * @public
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * @public
 * <p>Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.</p>
 */
export interface SqlApplicationConfiguration {
  /**
   * @public
   * <p>The array of <a>Input</a> objects describing the input streams used by the
   *       application.</p>
   */
  Inputs?: Input[];

  /**
   * @public
   * <p>The array of <a>Output</a> objects describing the destination streams used by
   *       the application.</p>
   */
  Outputs?: Output[];

  /**
   * @public
   * <p>The array of <a>ReferenceDataSource</a> objects describing the reference data
   *       sources used by the application.</p>
   */
  ReferenceDataSources?: ReferenceDataSource[];
}

/**
 * @public
 * <p>The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.</p>
 */
export interface GlueDataCatalogConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  DatabaseARN: string | undefined;
}

/**
 * @public
 * <p>The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.</p>
 */
export interface CatalogConfiguration {
  /**
   * @public
   * <p>The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.</p>
   */
  GlueDataCatalogConfiguration: GlueDataCatalogConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ArtifactType = {
  DEPENDENCY_JAR: "DEPENDENCY_JAR",
  UDF: "UDF",
} as const;

/**
 * @public
 */
export type ArtifactType = (typeof ArtifactType)[keyof typeof ArtifactType];

/**
 * @public
 * <p>The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.</p>
 */
export interface MavenReference {
  /**
   * @public
   * <p>The group ID of the Maven reference.</p>
   */
  GroupId: string | undefined;

  /**
   * @public
   * <p>The artifact ID of the Maven reference.</p>
   */
  ArtifactId: string | undefined;

  /**
   * @public
   * <p>The version of the Maven reference.</p>
   */
  Version: string | undefined;
}

/**
 * @public
 * <p>Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).</p>
 */
export interface CustomArtifactConfiguration {
  /**
   * @public
   * <p>
   *             <code>UDF</code> stands for user-defined functions. This type of artifact must be in an S3 bucket. A <code>DEPENDENCY_JAR</code> can be in either Maven or an S3 bucket.</p>
   */
  ArtifactType: ArtifactType | undefined;

  /**
   * @public
   * <p>For a Kinesis Data Analytics application provides a
   *       description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket,
   *       the name of the Amazon S3 object that contains the data, and the version number of the Amazon
   *       S3 object that contains the data. </p>
   */
  S3ContentLocation?: S3ContentLocation;

  /**
   * @public
   * <p>The parameters required to fully specify a Maven reference.</p>
   */
  MavenReference?: MavenReference;
}

/**
 * @public
 * <p>The S3 bucket that holds the application information.</p>
 */
export interface S3ContentBaseLocation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>The base path for the S3 bucket.</p>
   */
  BasePath?: string;
}

/**
 * @public
 * <p>The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.</p>
 */
export interface DeployAsApplicationConfiguration {
  /**
   * @public
   * <p>The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
   *     </p>
   */
  S3ContentLocation: S3ContentBaseLocation | undefined;
}

/**
 * @public
 * <p>Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.</p>
 */
export interface ZeppelinMonitoringConfiguration {
  /**
   * @public
   * <p>The verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel: LogLevel | undefined;
}

/**
 * @public
 * <p>The configuration of a Kinesis Data Analytics Studio notebook.</p>
 */
export interface ZeppelinApplicationConfiguration {
  /**
   * @public
   * <p>The monitoring configuration of a Kinesis Data Analytics Studio notebook.</p>
   */
  MonitoringConfiguration?: ZeppelinMonitoringConfiguration;

  /**
   * @public
   * <p>The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.</p>
   */
  CatalogConfiguration?: CatalogConfiguration;

  /**
   * @public
   * <p>The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.</p>
   */
  DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration;

  /**
   * @public
   * <p>Custom artifacts are dependency JARs and user-defined functions (UDF).</p>
   */
  CustomArtifactsConfiguration?: CustomArtifactConfiguration[];
}

/**
 * @public
 * <p>Specifies the creation parameters for a Kinesis Data Analytics application.</p>
 */
export interface ApplicationConfiguration {
  /**
   * @public
   * <p>The creation and update parameters for a SQL-based Kinesis Data Analytics application.</p>
   */
  SqlApplicationConfiguration?: SqlApplicationConfiguration;

  /**
   * @public
   * <p>The creation and update parameters for a Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkApplicationConfiguration?: FlinkApplicationConfiguration;

  /**
   * @public
   * <p>Describes execution properties for a Flink-based Kinesis Data Analytics application.</p>
   */
  EnvironmentProperties?: EnvironmentProperties;

  /**
   * @public
   * <p>The code location and type parameters for a Flink-based Kinesis Data Analytics application.</p>
   */
  ApplicationCodeConfiguration?: ApplicationCodeConfiguration;

  /**
   * @public
   * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;

  /**
   * @public
   * <p>The array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurations?: VpcConfiguration[];

  /**
   * @public
   * <p>The configuration parameters for a Kinesis Data Analytics Studio notebook.</p>
   */
  ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
}

/**
 * @public
 * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfigurationDescription {
  /**
   * @public
   * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
   */
  SnapshotsEnabled: boolean | undefined;
}

/**
 * @public
 * <p>Describes the execution properties for an Apache Flink runtime.</p>
 */
export interface EnvironmentPropertyDescriptions {
  /**
   * @public
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroupDescriptions?: PropertyGroup[];
}

/**
 * @public
 * <p>Describes checkpointing parameters for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface CheckpointConfigurationDescription {
  /**
   * @public
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
  ConfigurationType?: ConfigurationType;

  /**
   * @public
   * <p>Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to
   *       another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabled?: boolean;

  /**
   * @public
   * <p>Describes the interval in milliseconds between checkpoint operations. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set to another value
   *       using this API or in application code.</p>
   *          </note>
   */
  CheckpointInterval?: number;

  /**
   * @public
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
 * @public
 * <p>Describes configuration parameters for CloudWatch logging for an application.</p>
 */
export interface MonitoringConfigurationDescription {
  /**
   * @public
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.</p>
   */
  ConfigurationType?: ConfigurationType;

  /**
   * @public
   * <p>Describes the granularity of the CloudWatch Logs for an application.</p>
   */
  MetricsLevel?: MetricsLevel;

  /**
   * @public
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: LogLevel;
}

/**
 * @public
 * <p>Describes parameters for how a Flink-based Kinesis Data Analytics application
 *       executes multiple tasks simultaneously.</p>
 */
export interface ParallelismConfigurationDescription {
  /**
   * @public
   * <p>Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. </p>
   */
  ConfigurationType?: ConfigurationType;

  /**
   * @public
   * <p>Describes the initial number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform.
   *       If <code>AutoScalingEnabled</code> is set to True, then Kinesis Data Analytics can increase the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can
   *     reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   */
  Parallelism?: number;

  /**
   * @public
   * <p>Describes the number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform per
   *       Kinesis Processing Unit (KPU) used by the application.</p>
   */
  ParallelismPerKPU?: number;

  /**
   * @public
   * <p>Describes the current number of parallel tasks that a Flink-based Kinesis Data Analytics application can perform.
   *       If <code>AutoScalingEnabled</code> is set to True, Kinesis Data Analytics can increase this value in response to application
   *     load. The service can increase this value up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can reduce
   *     the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   */
  CurrentParallelism?: number;

  /**
   * @public
   * <p>Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabled?: boolean;
}

/**
 * @public
 * <p>Describes configuration parameters for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface FlinkApplicationConfigurationDescription {
  /**
   * @public
   * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state
   *       for fault tolerance.</p>
   */
  CheckpointConfigurationDescription?: CheckpointConfigurationDescription;

  /**
   * @public
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   */
  MonitoringConfigurationDescription?: MonitoringConfigurationDescription;

  /**
   * @public
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfigurationDescription?: ParallelismConfigurationDescription;

  /**
   * @public
   * <p>The job plan for an application. For more information about the job plan, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/internals/job_scheduling.html">Jobs and Scheduling</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink
   *         Documentation</a>. To retrieve the job plan for the application, use the <a>DescribeApplicationRequest$IncludeAdditionalDetails</a> parameter of the <a>DescribeApplication</a> operation.</p>
   */
  JobPlanDescription?: string;
}

/**
 * @public
 * @enum
 */
export const ApplicationRestoreType = {
  RESTORE_FROM_CUSTOM_SNAPSHOT: "RESTORE_FROM_CUSTOM_SNAPSHOT",
  RESTORE_FROM_LATEST_SNAPSHOT: "RESTORE_FROM_LATEST_SNAPSHOT",
  SKIP_RESTORE_FROM_SNAPSHOT: "SKIP_RESTORE_FROM_SNAPSHOT",
} as const;

/**
 * @public
 */
export type ApplicationRestoreType = (typeof ApplicationRestoreType)[keyof typeof ApplicationRestoreType];

/**
 * @public
 * <p>Specifies the method and snapshot to use when restarting an application using previously saved application state.</p>
 */
export interface ApplicationRestoreConfiguration {
  /**
   * @public
   * <p>Specifies how the application should be restored.</p>
   */
  ApplicationRestoreType: ApplicationRestoreType | undefined;

  /**
   * @public
   * <p>The identifier of an existing snapshot of application state to use to restart an application.
   *       The application uses this value if <code>RESTORE_FROM_CUSTOM_SNAPSHOT</code> is specified for the
   *       <code>ApplicationRestoreType</code>.</p>
   */
  SnapshotName?: string;
}

/**
 * @public
 * <p>Describes the starting parameters for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface FlinkRunConfiguration {
  /**
   * @public
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
 * @public
 * <p>Describes the starting properties for a Kinesis Data Analytics application.</p>
 */
export interface RunConfigurationDescription {
  /**
   * @public
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;

  /**
   * @public
   * <p>Describes the starting parameters for a Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkRunConfigurationDescription?: FlinkRunConfiguration;
}

/**
 * @public
 * <p>Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.</p>
 */
export interface SqlApplicationConfigurationDescription {
  /**
   * @public
   * <p>The array of <a>InputDescription</a> objects describing the input streams used
   *       by the application.</p>
   */
  InputDescriptions?: InputDescription[];

  /**
   * @public
   * <p>The array of <a>OutputDescription</a> objects describing the destination
   *       streams used by the application.</p>
   */
  OutputDescriptions?: OutputDescription[];

  /**
   * @public
   * <p>The array of <a>ReferenceDataSourceDescription</a> objects describing the
   *       reference data sources used by the application.</p>
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}

/**
 * @public
 * <p>The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.</p>
 */
export interface GlueDataCatalogConfigurationDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  DatabaseARN: string | undefined;
}

/**
 * @public
 * <p>The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.</p>
 */
export interface CatalogConfigurationDescription {
  /**
   * @public
   * <p>The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.</p>
   */
  GlueDataCatalogConfigurationDescription: GlueDataCatalogConfigurationDescription | undefined;
}

/**
 * @public
 * <p>Specifies a dependency JAR or a JAR of user-defined functions.</p>
 */
export interface CustomArtifactConfigurationDescription {
  /**
   * @public
   * <p>
   *             <code>UDF</code> stands for user-defined functions. This type of artifact must be in an S3 bucket. A <code>DEPENDENCY_JAR</code> can be in either Maven or an S3 bucket.</p>
   */
  ArtifactType?: ArtifactType;

  /**
   * @public
   * <p>For a Kinesis Data Analytics application provides a
   *       description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket,
   *       the name of the Amazon S3 object that contains the data, and the version number of the Amazon
   *       S3 object that contains the data. </p>
   */
  S3ContentLocationDescription?: S3ContentLocation;

  /**
   * @public
   * <p>The parameters that are required to specify a Maven dependency.</p>
   */
  MavenReferenceDescription?: MavenReference;
}

/**
 * @public
 * <p>The description of the S3 base location that holds the application.</p>
 */
export interface S3ContentBaseLocationDescription {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN: string | undefined;

  /**
   * @public
   * <p>The base path for the S3 bucket.</p>
   */
  BasePath?: string;
}

/**
 * @public
 * <p>The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.</p>
 */
export interface DeployAsApplicationConfigurationDescription {
  /**
   * @public
   * <p>The location that holds the data required to specify an Amazon Data Analytics application.</p>
   */
  S3ContentLocationDescription: S3ContentBaseLocationDescription | undefined;
}

/**
 * @public
 * <p>The monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.</p>
 */
export interface ZeppelinMonitoringConfigurationDescription {
  /**
   * @public
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: LogLevel;
}

/**
 * @public
 * <p>The configuration of a Kinesis Data Analytics Studio notebook.</p>
 */
export interface ZeppelinApplicationConfigurationDescription {
  /**
   * @public
   * <p>The monitoring configuration of a Kinesis Data Analytics Studio notebook.</p>
   */
  MonitoringConfigurationDescription: ZeppelinMonitoringConfigurationDescription | undefined;

  /**
   * @public
   * <p>The Amazon Glue Data Catalog that is associated with the Kinesis Data Analytics Studio notebook.</p>
   */
  CatalogConfigurationDescription?: CatalogConfigurationDescription;

  /**
   * @public
   * <p>The parameters required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.</p>
   */
  DeployAsApplicationConfigurationDescription?: DeployAsApplicationConfigurationDescription;

  /**
   * @public
   * <p>Custom artifacts are dependency JARs and user-defined functions (UDF).</p>
   */
  CustomArtifactsConfigurationDescription?: CustomArtifactConfigurationDescription[];
}

/**
 * @public
 * <p>Describes details about the application code and starting parameters for a Kinesis Data Analytics application.</p>
 */
export interface ApplicationConfigurationDescription {
  /**
   * @public
   * <p>The details about inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.</p>
   */
  SqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;

  /**
   * @public
   * <p>The details about the application code for a Flink-based Kinesis Data Analytics application.</p>
   */
  ApplicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;

  /**
   * @public
   * <p>The details about the starting properties for a Kinesis Data Analytics application.</p>
   */
  RunConfigurationDescription?: RunConfigurationDescription;

  /**
   * @public
   * <p>The details about a Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;

  /**
   * @public
   * <p>Describes execution properties for a Flink-based Kinesis Data Analytics application.</p>
   */
  EnvironmentPropertyDescriptions?: EnvironmentPropertyDescriptions;

  /**
   * @public
   * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;

  /**
   * @public
   * <p>The array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurationDescriptions?: VpcConfigurationDescription[];

  /**
   * @public
   * <p>The configuration parameters for a Kinesis Data Analytics Studio notebook.</p>
   */
  ZeppelinApplicationConfigurationDescription?: ZeppelinApplicationConfigurationDescription;
}

/**
 * @public
 * <p>Describes updates to whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfigurationUpdate {
  /**
   * @public
   * <p>Describes updates to whether snapshots are enabled for an application.</p>
   */
  SnapshotsEnabledUpdate: boolean | undefined;
}

/**
 * @public
 * <p>Describes updates to the execution property groups for a Flink-based Kinesis Data Analytics application or a Studio notebook.</p>
 */
export interface EnvironmentPropertyUpdates {
  /**
   * @public
   * <p>Describes updates to the execution property groups.</p>
   */
  PropertyGroups: PropertyGroup[] | undefined;
}

/**
 * @public
 * <p>Describes updates to the checkpointing parameters for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface CheckpointConfigurationUpdate {
  /**
   * @public
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
  ConfigurationTypeUpdate?: ConfigurationType;

  /**
   * @public
   * <p>Describes updates to whether checkpointing is enabled for an application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to
   *       another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabledUpdate?: boolean;

  /**
   * @public
   * <p>Describes updates to the interval in milliseconds between checkpoint operations.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set to another value
   *       using this API or in application code.</p>
   *          </note>
   */
  CheckpointIntervalUpdate?: number;

  /**
   * @public
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
 * @public
 * <p>Describes updates to configuration parameters for Amazon CloudWatch logging for an application.</p>
 */
export interface MonitoringConfigurationUpdate {
  /**
   * @public
   * <p>Describes updates to whether to use the default CloudWatch logging configuration for
   *       an application. You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or
   *     <code>MetricsLevel</code> parameters.</p>
   */
  ConfigurationTypeUpdate?: ConfigurationType;

  /**
   * @public
   * <p>Describes updates to the granularity of the CloudWatch Logs for an application. The <code>Parallelism</code>
   *       level is not recommended for applications with a Parallelism over 64 due to excessive costs.</p>
   */
  MetricsLevelUpdate?: MetricsLevel;

  /**
   * @public
   * <p>Describes updates to the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevelUpdate?: LogLevel;
}

/**
 * @public
 * <p>Describes updates to parameters for how an application executes multiple tasks simultaneously.</p>
 */
export interface ParallelismConfigurationUpdate {
  /**
   * @public
   * <p>Describes updates to whether the application uses the default parallelism for the Kinesis Data Analytics service, or if a custom parallelism is used.
   *     You must set this property to <code>CUSTOM</code>
   *     in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.</p>
   */
  ConfigurationTypeUpdate?: ConfigurationType;

  /**
   * @public
   * <p>Describes updates to the initial number of parallel tasks an application can perform. If <code>AutoScalingEnabled</code> is set to True, then
   *       Kinesis Data Analytics can increase the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service will
   *     reduce <code>CurrentParallelism</code> down to the <code>Parallelism</code> setting.</p>
   */
  ParallelismUpdate?: number;

  /**
   * @public
   * <p>Describes updates to the number of parallel tasks an application can perform per Kinesis Processing Unit (KPU) used by the application.</p>
   */
  ParallelismPerKPUUpdate?: number;

  /**
   * @public
   * <p>Describes updates to whether the Kinesis Data Analytics service can increase the parallelism of a Flink-based Kinesis Data Analytics application in response to increased throughput.</p>
   */
  AutoScalingEnabledUpdate?: boolean;
}

/**
 * @public
 * <p>Describes updates to the configuration parameters for a Flink-based Kinesis Data Analytics application.</p>
 */
export interface FlinkApplicationConfigurationUpdate {
  /**
   * @public
   * <p>Describes updates to an application's checkpointing configuration. Checkpointing is the process of persisting
   *       application state for fault tolerance.</p>
   */
  CheckpointConfigurationUpdate?: CheckpointConfigurationUpdate;

  /**
   * @public
   * <p>Describes updates to the configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   */
  MonitoringConfigurationUpdate?: MonitoringConfigurationUpdate;

  /**
   * @public
   * <p>Describes updates to the parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfigurationUpdate?: ParallelismConfigurationUpdate;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, provides updates to the
 *       parallelism count.</p>
 */
export interface InputParallelismUpdate {
  /**
   * @public
   * <p>The number of in-application streams to create for the specified streaming source.</p>
   */
  CountUpdate: number | undefined;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, represents an update to the
 *         <a>InputLambdaProcessor</a> that is used to preprocess the records in the
 *       stream.</p>
 */
export interface InputLambdaProcessorUpdate {
  /**
   * @public
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
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.</p>
 */
export interface InputProcessingConfigurationUpdate {
  /**
   * @public
   * <p>Provides update information for an <a>InputLambdaProcessor</a>.</p>
   */
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate | undefined;
}

/**
 * @public
 * <p>Describes updates for an SQL-based Kinesis Data Analytics application's input
 *       schema.</p>
 */
export interface InputSchemaUpdate {
  /**
   * @public
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormatUpdate?: RecordFormat;

  /**
   * @public
   * <p>Specifies the encoding of the records in the streaming source; for example, UTF-8.</p>
   */
  RecordEncodingUpdate?: string;

  /**
   * @public
   * <p>A list of <code>RecordColumn</code> objects. Each object describes the mapping
   *       of the streaming source element to the corresponding column in the in-application stream.</p>
   */
  RecordColumnUpdates?: RecordColumn[];
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, when updating application
 *       input configuration, provides information about a Kinesis Data Firehose delivery stream as the
 *       streaming source.</p>
 */
export interface KinesisFirehoseInputUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the input delivery stream to read.</p>
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * @public
 * <p>When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a
 *       Kinesis stream as the streaming
 *       source.</p>
 */
export interface KinesisStreamsInputUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the input Kinesis data stream to read.</p>
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, describes updates to a
 *       specific input configuration (identified by the <code>InputId</code> of an application). </p>
 */
export interface InputUpdate {
  /**
   * @public
   * <p>The input ID of the application input to be updated.</p>
   */
  InputId: string | undefined;

  /**
   * @public
   * <p>The name prefix for in-application streams that Kinesis Data Analytics creates for the
   *       specific streaming source.</p>
   */
  NamePrefixUpdate?: string;

  /**
   * @public
   * <p>Describes updates to an <a>InputProcessingConfiguration</a>.</p>
   */
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

  /**
   * @public
   * <p>If a Kinesis data stream is the streaming source to be updated, provides an
   *       updated stream Amazon Resource Name (ARN).</p>
   */
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

  /**
   * @public
   * <p>If a Kinesis Data Firehose delivery stream is the streaming source to be
   *       updated, provides an updated stream ARN.</p>
   */
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

  /**
   * @public
   * <p>Describes the data format on the streaming source, and
   *       how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   */
  InputSchemaUpdate?: InputSchemaUpdate;

  /**
   * @public
   * <p>Describes the parallelism updates (the number of in-application streams Kinesis Data Analytics creates for the specific streaming source).</p>
   */
  InputParallelismUpdate?: InputParallelismUpdate;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, when updating an output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about a Kinesis Data Firehose delivery stream that is configured as the destination.</p>
 */
export interface KinesisFirehoseOutputUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the delivery stream to write to. </p>
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * @public
 * <p>When you update a SQL-based Kinesis Data Analytics application's output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about a Kinesis data stream that is configured as the destination.</p>
 */
export interface KinesisStreamsOutputUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream where you want to write the
   *       output.</p>
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * @public
 * <p>When you update an SQL-based Kinesis Data Analytics application's output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about an Amazon Lambda function that is configured as the destination.</p>
 */
export interface LambdaOutputUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the destination Amazon Lambda function.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * @public
 * <p> For a SQL-based Kinesis Data Analytics application, describes updates to the
 *       output configuration identified by the <code>OutputId</code>. </p>
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
   *       for this output configuration, use this field to
   *       specify the new in-application stream name.</p>
   */
  NameUpdate?: string;

  /**
   * @public
   * <p>Describes a Kinesis data stream as the destination for the output.</p>
   */
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

  /**
   * @public
   * <p>Describes a Kinesis Data Firehose delivery stream as the destination for the
   *       output.</p>
   */
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

  /**
   * @public
   * <p>Describes an Amazon Lambda function as the destination for the output.</p>
   */
  LambdaOutputUpdate?: LambdaOutputUpdate;

  /**
   * @public
   * <p>Describes the data format when records are written to the destination.
   *       </p>
   */
  DestinationSchemaUpdate?: DestinationSchema;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket
 *       name and object key name for an in-application reference table. </p>
 */
export interface S3ReferenceDataSourceUpdate {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARNUpdate?: string;

  /**
   * @public
   * <p>The object key name.</p>
   */
  FileKeyUpdate?: string;
}

/**
 * @public
 * <p>When you update a reference data source configuration for a
 *        SQL-based Kinesis Data Analytics application, this object provides all the updated values
 *       (such as the source bucket name and object key name), the in-application table name that is created,
 *       and updated mapping information that maps the data in the Amazon S3 object to the in-application
 *       reference table that is created.</p>
 */
export interface ReferenceDataSourceUpdate {
  /**
   * @public
   * <p>The ID of the reference data source that is being updated. You can use the <a>DescribeApplication</a> operation to get this value.</p>
   */
  ReferenceId: string | undefined;

  /**
   * @public
   * <p>The in-application table name that is created by this update.</p>
   */
  TableNameUpdate?: string;

  /**
   * @public
   * <p>Describes the S3 bucket name, object key name, and IAM role that Kinesis Data Analytics can assume to read the
   *       Amazon S3 object on your behalf and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

  /**
   * @public
   * <p>Describes the format of the data in the streaming source, and how each data element maps to
   *       corresponding columns created in the in-application stream. </p>
   */
  ReferenceSchemaUpdate?: SourceSchema;
}

/**
 * @public
 * <p>Describes updates to the input streams, destination streams, and reference data sources
 *       for a SQL-based Kinesis Data Analytics application.</p>
 */
export interface SqlApplicationConfigurationUpdate {
  /**
   * @public
   * <p>The array of <a>InputUpdate</a> objects describing the new input streams used
   *       by the application.</p>
   */
  InputUpdates?: InputUpdate[];

  /**
   * @public
   * <p>The array of <a>OutputUpdate</a> objects describing the new destination streams
   *       used by the application.</p>
   */
  OutputUpdates?: OutputUpdate[];

  /**
   * @public
   * <p>The array of <a>ReferenceDataSourceUpdate</a> objects describing the new
   *       reference data sources used by the application.</p>
   */
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}

/**
 * @public
 * <p>Describes updates to the VPC configuration used by the application.</p>
 */
export interface VpcConfigurationUpdate {
  /**
   * @public
   * <p>Describes an update to the ID of the VPC configuration.</p>
   */
  VpcConfigurationId: string | undefined;

  /**
   * @public
   * <p>Describes updates to the array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a>
   *         IDs
   *         used by the VPC configuration.</p>
   */
  SubnetIdUpdates?: string[];

  /**
   * @public
   * <p>Describes updates to the array of
   *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.</p>
   */
  SecurityGroupIdUpdates?: string[];
}

/**
 * @public
 * <p>Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Kinesis Data Analytics Studio notebook.</p>
 */
export interface GlueDataCatalogConfigurationUpdate {
  /**
   * @public
   * <p>The updated Amazon Resource Name (ARN) of the database.</p>
   */
  DatabaseARNUpdate: string | undefined;
}

/**
 * @public
 * <p>Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.</p>
 */
export interface CatalogConfigurationUpdate {
  /**
   * @public
   * <p>Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.</p>
   */
  GlueDataCatalogConfigurationUpdate: GlueDataCatalogConfigurationUpdate | undefined;
}

/**
 * @public
 * <p>The information required to update the S3 base location that holds the application.</p>
 */
export interface S3ContentBaseLocationUpdate {
  /**
   * @public
   * <p>The updated Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARNUpdate?: string;

  /**
   * @public
   * <p>The updated S3 bucket path.</p>
   */
  BasePathUpdate?: string;
}

/**
 * @public
 * <p>Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.</p>
 */
export interface DeployAsApplicationConfigurationUpdate {
  /**
   * @public
   * <p>Updates to the location that holds the data required to specify an Amazon Data Analytics application.</p>
   */
  S3ContentLocationUpdate?: S3ContentBaseLocationUpdate;
}

/**
 * @public
 * <p>Updates to the monitoring configuration for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.</p>
 */
export interface ZeppelinMonitoringConfigurationUpdate {
  /**
   * @public
   * <p>Updates to the logging level for Apache Zeppelin within a Kinesis Data Analytics Studio notebook.</p>
   */
  LogLevelUpdate: LogLevel | undefined;
}

/**
 * @public
 * <p>Updates to the configuration of Kinesis Data Analytics Studio notebook.</p>
 */
export interface ZeppelinApplicationConfigurationUpdate {
  /**
   * @public
   * <p>Updates to the monitoring configuration of a Kinesis Data Analytics Studio notebook.</p>
   */
  MonitoringConfigurationUpdate?: ZeppelinMonitoringConfigurationUpdate;

  /**
   * @public
   * <p>Updates to the configuration of the Amazon Glue Data Catalog that is associated with the Kinesis Data Analytics Studio notebook.</p>
   */
  CatalogConfigurationUpdate?: CatalogConfigurationUpdate;

  /**
   * @public
   * <p>Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.</p>
   */
  DeployAsApplicationConfigurationUpdate?: DeployAsApplicationConfigurationUpdate;

  /**
   * @public
   * <p>Updates to the customer artifacts. Custom artifacts are dependency JAR files and user-defined functions (UDF).</p>
   */
  CustomArtifactsConfigurationUpdate?: CustomArtifactConfiguration[];
}

/**
 * @public
 * <p>Describes updates to an application's configuration.</p>
 */
export interface ApplicationConfigurationUpdate {
  /**
   * @public
   * <p>Describes updates to a SQL-based Kinesis Data Analytics application's
   *       configuration.</p>
   */
  SqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;

  /**
   * @public
   * <p>Describes updates to an application's code
   *       configuration.</p>
   */
  ApplicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;

  /**
   * @public
   * <p>Describes updates to a Flink-based Kinesis Data Analytics application's configuration.</p>
   */
  FlinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;

  /**
   * @public
   * <p>Describes updates to the environment properties for a Flink-based Kinesis Data Analytics application.</p>
   */
  EnvironmentPropertyUpdates?: EnvironmentPropertyUpdates;

  /**
   * @public
   * <p>Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;

  /**
   * @public
   * <p>Updates to the array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurationUpdates?: VpcConfigurationUpdate[];

  /**
   * @public
   * <p>Updates to the configuration of a Kinesis Data Analytics Studio notebook.</p>
   */
  ZeppelinApplicationConfigurationUpdate?: ZeppelinApplicationConfigurationUpdate;
}

/**
 * @public
 * <p>The details of the maintenance configuration for the application.</p>
 */
export interface ApplicationMaintenanceConfigurationDescription {
  /**
   * @public
   * <p>The start time for the maintenance window.</p>
   */
  ApplicationMaintenanceWindowStartTime: string | undefined;

  /**
   * @public
   * <p>The end time for the maintenance window.</p>
   */
  ApplicationMaintenanceWindowEndTime: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ApplicationMode = {
  INTERACTIVE: "INTERACTIVE",
  STREAMING: "STREAMING",
} as const;

/**
 * @public
 */
export type ApplicationMode = (typeof ApplicationMode)[keyof typeof ApplicationMode];

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  AUTOSCALING: "AUTOSCALING",
  DELETING: "DELETING",
  FORCE_STOPPING: "FORCE_STOPPING",
  MAINTENANCE: "MAINTENANCE",
  READY: "READY",
  ROLLED_BACK: "ROLLED_BACK",
  ROLLING_BACK: "ROLLING_BACK",
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
 * @enum
 */
export const RuntimeEnvironment = {
  FLINK_1_11: "FLINK-1_11",
  FLINK_1_13: "FLINK-1_13",
  FLINK_1_15: "FLINK-1_15",
  FLINK_1_6: "FLINK-1_6",
  FLINK_1_8: "FLINK-1_8",
  SQL_1_0: "SQL-1_0",
  ZEPPELIN_FLINK_1_0: "ZEPPELIN-FLINK-1_0",
  ZEPPELIN_FLINK_2_0: "ZEPPELIN-FLINK-2_0",
  ZEPPELIN_FLINK_3_0: "ZEPPELIN-FLINK-3_0",
} as const;

/**
 * @public
 */
export type RuntimeEnvironment = (typeof RuntimeEnvironment)[keyof typeof RuntimeEnvironment];

/**
 * @public
 * <p>Describes the application, including the application Amazon Resource Name (ARN), status,
 *       latest version, and input and output configurations.</p>
 */
export interface ApplicationDetail {
  /**
   * @public
   * <p>The ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * @public
   * <p>The description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * @public
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The runtime environment for the application.</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | undefined;

  /**
   * @public
   * <p>Specifies the IAM role that the application uses to access external resources.</p>
   */
  ServiceExecutionRole?: string;

  /**
   * @public
   * <p>The status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | undefined;

  /**
   * @public
   * <p>Provides the current application version. Kinesis Data Analytics updates the
   *         <code>ApplicationVersionId</code> each time you update the application.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The current timestamp when the application was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * @public
   * <p>The current timestamp when the application was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * @public
   * <p>Describes details about the application code and starting parameters for a Kinesis Data Analytics application.</p>
   */
  ApplicationConfigurationDescription?: ApplicationConfigurationDescription;

  /**
   * @public
   * <p>Describes the application Amazon CloudWatch logging options.</p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  /**
   * @public
   * <p>The details of the maintenance configuration for the application.</p>
   */
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;

  /**
   * @public
   * <p>The previous application version before the latest application update. <a>RollbackApplication</a>
   *         reverts the application to this version.</p>
   */
  ApplicationVersionUpdatedFrom?: number;

  /**
   * @public
   * <p>If you reverted the application using <a>RollbackApplication</a>,
   *         the application version when <code>RollbackApplication</code> was called.</p>
   */
  ApplicationVersionRolledBackFrom?: number;

  /**
   * @public
   * <p>A value you use to implement strong concurrency for application updates.</p>
   */
  ConditionalToken?: string;

  /**
   * @public
   * <p>The version to which you want to roll back the application.</p>
   */
  ApplicationVersionRolledBackTo?: number;

  /**
   * @public
   * <p>To create a Kinesis Data Analytics Studio notebook, you must set the mode to <code>INTERACTIVE</code>. However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.</p>
   */
  ApplicationMode?: ApplicationMode;
}

/**
 * @public
 * <p>Describes the updated maintenance configuration for the application.</p>
 */
export interface ApplicationMaintenanceConfigurationUpdate {
  /**
   * @public
   * <p>The updated start time for the maintenance window.</p>
   */
  ApplicationMaintenanceWindowStartTimeUpdate: string | undefined;
}

/**
 * @public
 * <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
 */
export interface ApplicationSummary {
  /**
   * @public
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * @public
   * <p>The status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | undefined;

  /**
   * @public
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The runtime environment for the application.</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | undefined;

  /**
   * @public
   * <p>For a Kinesis Data Analytics for Apache Flink application, the mode is <code>STREAMING</code>. For a Kinesis Data Analytics Studio notebook, it is <code>INTERACTIVE</code>.</p>
   */
  ApplicationMode?: ApplicationMode;
}

/**
 * @public
 * <p>The summary of the application version.</p>
 */
export interface ApplicationVersionSummary {
  /**
   * @public
   * <p>The ID of the application version. Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update the application.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | undefined;
}

/**
 * @public
 * <p>Describes the Amazon CloudWatch logging option updates.</p>
 */
export interface CloudWatchLoggingOptionUpdate {
  /**
   * @public
   * <p>The ID of the CloudWatch logging option to update</p>
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log to receive application
   *       messages.</p>
   */
  LogStreamARNUpdate?: string;
}

/**
 * @public
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
 */
export interface CreateApplicationRequest {
  /**
   * @public
   * <p>The name of your application (for example, <code>sample-app</code>).</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>A summary description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * @public
   * <p>The runtime environment for the application.</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | undefined;

  /**
   * @public
   * <p>The IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose
   *       delivery streams, Amazon S3 objects, and other external resources.</p>
   */
  ServiceExecutionRole: string | undefined;

  /**
   * @public
   * <p>Use this parameter to configure the application.</p>
   */
  ApplicationConfiguration?: ApplicationConfiguration;

  /**
   * @public
   * <p>Use this parameter to configure an Amazon CloudWatch log stream to monitor application
   *       configuration errors.
   *       </p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[];

  /**
   * @public
   * <p>A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an
   *         application. Note that the maximum number of application tags includes system tags. The maximum number of
   *         user-defined application tags is 50.
   *         For more information, see
   *         <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>Use the <code>STREAMING</code> mode to create a Kinesis Data Analytics For Flink application. To create a Kinesis Data Analytics Studio notebook, use the
   *     <code>INTERACTIVE</code> mode.</p>
   */
  ApplicationMode?: ApplicationMode;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * @public
   * <p>In response to your <code>CreateApplication</code> request, Kinesis Data Analytics returns a
   *       response with details of the application it created.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const UrlType = {
  FLINK_DASHBOARD_URL: "FLINK_DASHBOARD_URL",
  ZEPPELIN_UI_URL: "ZEPPELIN_UI_URL",
} as const;

/**
 * @public
 */
export type UrlType = (typeof UrlType)[keyof typeof UrlType];

/**
 * @public
 */
export interface CreateApplicationPresignedUrlRequest {
  /**
   * @public
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The type of the extension for which to create and return a URL. Currently, the only valid
   *             extension URL type is <code>FLINK_DASHBOARD_URL</code>. </p>
   */
  UrlType: UrlType | undefined;

  /**
   * @public
   * <p>The duration in seconds for which the returned URL will be valid.</p>
   */
  SessionExpirationDurationInSeconds?: number;
}

/**
 * @public
 */
export interface CreateApplicationPresignedUrlResponse {
  /**
   * @public
   * <p>The URL of the extension.</p>
   */
  AuthorizedUrl?: string;
}

/**
 * @public
 */
export interface CreateApplicationSnapshotRequest {
  /**
   * @public
   * <p>The name of an existing application</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>An identifier for the application snapshot.</p>
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
   * @public
   * <p>The name of the application to delete.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Use the <code>DescribeApplication</code> operation to get this value.</p>
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
   * @public
   * <p>The application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The version ID of the application. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  CurrentApplicationVersionId?: number;

  /**
   * @public
   * <p>The <code>CloudWatchLoggingOptionId</code> of the Amazon CloudWatch logging option to
   *          delete. You can get the <code>CloudWatchLoggingOptionId</code> by using the <a>DescribeApplication</a> operation. </p>
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * @public
   * <p>A value you use to implement strong concurrency for application updates. You must provide
   *       the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You get the
   *       application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  ConditionalToken?: string;
}

/**
 * @public
 */
export interface DeleteApplicationCloudWatchLoggingOptionResponse {
  /**
   * @public
   * <p>The application's Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>The version ID of the application. Kinesis Data Analytics updates the
   *         <code>ApplicationVersionId</code> each time you change the CloudWatch logging
   *       options.</p>
   */
  ApplicationVersionId?: number;

  /**
   * @public
   * <p>The descriptions of the remaining CloudWatch logging options for the application.</p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
}

/**
 * @public
 */
export interface DeleteApplicationInputProcessingConfigurationRequest {
  /**
   * @public
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified is not the current version, the
   *       <code>ConcurrentModificationException</code> is returned.
   *     </p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The ID of the input configuration from which to delete the input processing
   *       configuration. You can get a list of the input IDs for an application by using the <a>DescribeApplication</a> operation.</p>
   */
  InputId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationInputProcessingConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>The current application version ID.</p>
   */
  ApplicationVersionId?: number;
}

/**
 * @public
 */
export interface DeleteApplicationOutputRequest {
  /**
   * @public
   * <p>The application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified is not the current version, the
   *       <code>ConcurrentModificationException</code> is returned.
   *     </p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The ID of the configuration to delete. Each output configuration that is added to the
   *       application (either when the application is created or later) using the <a>AddApplicationOutput</a> operation has a unique ID. You need to provide the ID to
   *       uniquely identify the output configuration that you want to delete from the application
   *       configuration. You can use the <a>DescribeApplication</a> operation to get the
   *       specific <code>OutputId</code>. </p>
   */
  OutputId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationOutputResponse {
  /**
   * @public
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>The current application version ID.</p>
   */
  ApplicationVersionId?: number;
}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceRequest {
  /**
   * @public
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The current application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified
   *       is not the current version, the <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The ID of the reference data source. When you add a reference data source to your
   *       application using the <a>AddApplicationReferenceDataSource</a>, Kinesis Data Analytics assigns an ID.
   *       You can use the <a>DescribeApplication</a> operation to
   *       get the reference ID. </p>
   */
  ReferenceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceResponse {
  /**
   * @public
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>The updated version ID of the application.</p>
   */
  ApplicationVersionId?: number;
}

/**
 * @public
 */
export interface DeleteApplicationSnapshotRequest {
  /**
   * @public
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The identifier for the snapshot delete.</p>
   */
  SnapshotName: string | undefined;

  /**
   * @public
   * <p>The creation timestamp of the application snapshot to delete. You can retrieve this value
   *       using
   *       or .</p>
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
   * @public
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The current application version ID. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  CurrentApplicationVersionId?: number;

  /**
   * @public
   * <p>The ID of the VPC configuration to delete.</p>
   */
  VpcConfigurationId: string | undefined;

  /**
   * @public
   * <p>A value you use to implement strong concurrency for application updates. You must provide
   *       the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You get the
   *       application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  ConditionalToken?: string;
}

/**
 * @public
 */
export interface DeleteApplicationVpcConfigurationResponse {
  /**
   * @public
   * <p>The ARN of the Kinesis Data Analytics application.</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>The updated version ID of the application.</p>
   */
  ApplicationVersionId?: number;
}

/**
 * @public
 */
export interface DescribeApplicationRequest {
  /**
   * @public
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Displays verbose information about a Kinesis Data Analytics application, including the application's job plan.</p>
   */
  IncludeAdditionalDetails?: boolean;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * @public
   * <p>Provides a description of the application, such as the application's Amazon Resource Name
   *       (ARN), status, and latest version.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationSnapshotRequest {
  /**
   * @public
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The identifier of an application snapshot. You can retrieve this value using
   *       .</p>
   */
  SnapshotName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SnapshotStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  READY: "READY",
} as const;

/**
 * @public
 */
export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus];

/**
 * @public
 * <p>Provides details about a snapshot of application state.</p>
 */
export interface SnapshotDetails {
  /**
   * @public
   * <p>The identifier for the application snapshot.</p>
   */
  SnapshotName: string | undefined;

  /**
   * @public
   * <p>The status of the application snapshot.</p>
   */
  SnapshotStatus: SnapshotStatus | undefined;

  /**
   * @public
   * <p>The current application version ID when the snapshot was created.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * @public
   * <p>The timestamp of the application snapshot.</p>
   */
  SnapshotCreationTimestamp?: Date;
}

/**
 * @public
 */
export interface DescribeApplicationSnapshotResponse {
  /**
   * @public
   * <p>An object containing information about the application snapshot.</p>
   */
  SnapshotDetails: SnapshotDetails | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationVersionRequest {
  /**
   * @public
   * <p>The name of the application for which you want to get the version description.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The ID of the application version for which you want to get the description.</p>
   */
  ApplicationVersionId: number | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationVersionResponse {
  /**
   * @public
   * <p>Describes the application, including the application Amazon Resource Name (ARN), status,
   *       latest version, and input and output configurations.</p>
   */
  ApplicationVersionDetail?: ApplicationDetail;
}

/**
 * @public
 * <p>For a SQL-based Kinesis Data Analytics application, provides a description of an
 *       Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name
 *       of the Amazon S3 object that contains the data.</p>
 */
export interface S3Configuration {
  /**
   * @public
   * <p>The ARN of the S3 bucket that contains the data.</p>
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
   * <p>The Amazon Resource Name (ARN) of the streaming source.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>The ARN of the role that is used to access the streaming source.</p>
   */
  ServiceExecutionRole: string | undefined;

  /**
   * @public
   * <p>The point at which you want Kinesis Data Analytics to start reading records from the
   *       specified streaming source discovery purposes.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  /**
   * @public
   * <p>Specify this parameter to discover a schema from data in an Amazon S3
   *       object.</p>
   */
  S3Configuration?: S3Configuration;

  /**
   * @public
   * <p>The <a>InputProcessingConfiguration</a> to use to preprocess the records
   *       before discovering the schema of the records.</p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;
}

/**
 * @public
 */
export interface DiscoverInputSchemaResponse {
  /**
   * @public
   * <p>The schema inferred from the streaming source. It identifies the format of the data in the
   *       streaming source and how each data element maps to corresponding columns in the in-application
   *       stream that you can create.</p>
   */
  InputSchema?: SourceSchema;

  /**
   * @public
   * <p>An array of elements, where each element corresponds to a row in a stream record
   *       (a stream record can have more than one row).</p>
   */
  ParsedInputRecords?: string[][];

  /**
   * @public
   * <p>The stream data that was modified by the processor specified in the
   *         <code>InputProcessingConfiguration</code> parameter.</p>
   */
  ProcessedInputRecords?: string[];

  /**
   * @public
   * <p>The raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: string[];
}

/**
 * @public
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
 * @public
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
 * @public
 * <p>The data format is not valid. Kinesis Data Analytics cannot detect the schema for
 *       the given streaming source.</p>
 */
export class UnableToDetectSchemaException extends __BaseException {
  readonly name: "UnableToDetectSchemaException" = "UnableToDetectSchemaException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>Raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: string[];

  /**
   * @public
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

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * @public
   * <p>The maximum number of applications to list.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>If a previous command returned a pagination token,
   *       pass it into this value to retrieve the next set of results.
   *       For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * @public
   * <p>A list of <code>ApplicationSummary</code> objects.</p>
   */
  ApplicationSummaries: ApplicationSummary[] | undefined;

  /**
   * @public
   * <p>The pagination token for the next set of results, or <code>null</code> if there are no additional results.
   *       Pass this token into a subsequent command to retrieve the next set of items
   *       For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationSnapshotsRequest {
  /**
   * @public
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The maximum number of application snapshots to list.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more
   *       output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should
   *       continue from. </p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationSnapshotsResponse {
  /**
   * @public
   * <p>A collection of objects containing information about the application snapshots.</p>
   */
  SnapshotSummaries?: SnapshotDetails[];

  /**
   * @public
   * <p>The token for the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationVersionsRequest {
  /**
   * @public
   * <p>The name of the application for which you want to list all versions.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The maximum number of versions to list in this invocation of the operation.</p>
   */
  Limit?: number;

  /**
   * @public
   * <p>If a previous invocation of this operation returned a pagination token, pass it into this value to retrieve the next set of results. For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationVersionsResponse {
  /**
   * @public
   * <p>A list of the application versions and the associated configuration summaries. The list includes application versions that were rolled back.</p>
   *          <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p>
   */
  ApplicationVersionSummaries?: ApplicationVersionSummary[];

  /**
   * @public
   * <p>The pagination token for the next set of results, or <code>null</code> if there are no additional results.
   *       To retrieve the next set of items, pass this token into a subsequent invocation of this operation. For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;
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
 */
export interface RollbackApplicationRequest {
  /**
   * @public
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The current application version ID. You can retrieve the application version ID using
   *             <a>DescribeApplication</a>.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

/**
 * @public
 */
export interface RollbackApplicationResponse {
  /**
   * @public
   * <p>Describes the application, including the application Amazon Resource Name (ARN), status,
   *       latest version, and input and output configurations.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * @public
 * <p>Describes the starting parameters for a SQL-based Kinesis Data Analytics application.</p>
 */
export interface SqlRunConfiguration {
  /**
   * @public
   * <p>The input source ID. You can get this ID by calling the <a>DescribeApplication</a> operation. </p>
   */
  InputId: string | undefined;

  /**
   * @public
   * <p>The point at which you want the application to start processing records from the streaming
   *       source. </p>
   */
  InputStartingPositionConfiguration: InputStartingPositionConfiguration | undefined;
}

/**
 * @public
 * <p>Describes the starting parameters for an Kinesis Data Analytics application.</p>
 */
export interface RunConfiguration {
  /**
   * @public
   * <p>Describes the starting parameters for a Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkRunConfiguration?: FlinkRunConfiguration;

  /**
   * @public
   * <p>Describes the starting parameters for a SQL-based Kinesis Data Analytics application
   *       application.</p>
   */
  SqlRunConfigurations?: SqlRunConfiguration[];

  /**
   * @public
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
}

/**
 * @public
 */
export interface StartApplicationRequest {
  /**
   * @public
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Identifies the run configuration (start parameters) of a Kinesis Data Analytics application.</p>
   */
  RunConfiguration?: RunConfiguration;
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
   * @public
   * <p>The name of the running application to stop.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
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

/**
 * @public
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
   * <p>The ARN of the Kinesis Data Analytics application from which to remove the tags.</p>
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
 * <p>Describes the updates to the starting parameters for a Kinesis Data Analytics application.</p>
 */
export interface RunConfigurationUpdate {
  /**
   * @public
   * <p>Describes the starting parameters for a Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkRunConfiguration?: FlinkRunConfiguration;

  /**
   * @public
   * <p>Describes updates to the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * @public
   * <p>The name of the application to update.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>The current application version ID. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>.You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   */
  CurrentApplicationVersionId?: number;

  /**
   * @public
   * <p>Describes application configuration updates.</p>
   */
  ApplicationConfigurationUpdate?: ApplicationConfigurationUpdate;

  /**
   * @public
   * <p>Describes updates to the service execution role.</p>
   */
  ServiceExecutionRoleUpdate?: string;

  /**
   * @public
   * <p>Describes updates to the application's starting parameters.</p>
   */
  RunConfigurationUpdate?: RunConfigurationUpdate;

  /**
   * @public
   * <p>Describes application Amazon CloudWatch logging option updates. You can only update
   *       existing CloudWatch logging options with this action. To add a new CloudWatch logging option,
   *       use <a>AddApplicationCloudWatchLoggingOption</a>.</p>
   */
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];

  /**
   * @public
   * <p>A value you use to implement strong concurrency for application updates. You must
   *       provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You
   *       get the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the
   *         <code>ConditionalToken</code> parameter instead of
   *       <code>CurrentApplicationVersionId</code>.</p>
   */
  ConditionalToken?: string;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * @public
   * <p>Describes application updates.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationMaintenanceConfigurationRequest {
  /**
   * @public
   * <p>The name of the application for which you want to update the maintenance configuration.</p>
   */
  ApplicationName: string | undefined;

  /**
   * @public
   * <p>Describes the application maintenance configuration update.</p>
   */
  ApplicationMaintenanceConfigurationUpdate: ApplicationMaintenanceConfigurationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationMaintenanceConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * @public
   * <p>The application maintenance configuration description after the update.</p>
   */
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
}
