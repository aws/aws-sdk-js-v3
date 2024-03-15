// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KinesisAnalyticsV2ServiceException as __BaseException } from "./KinesisAnalyticsV2ServiceException";

/**
 * <p>Provides a description of Amazon CloudWatch logging options, including the log stream
 *       Amazon Resource Name (ARN). </p>
 * @public
 */
export interface CloudWatchLoggingOption {
  /**
   * <p>The ARN of the CloudWatch log to receive application messages.</p>
   * @public
   */
  LogStreamARN: string | undefined;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionRequest {
  /**
   * <p>The Kinesis Data Analytics application name.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version ID of the SQL-based Kinesis Data Analytics application. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>.You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   * @public
   */
  CurrentApplicationVersionId?: number;

  /**
   * <p>Provides the Amazon CloudWatch log stream Amazon Resource Name (ARN). </p>
   * @public
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption | undefined;

  /**
   * <p>A value you use to implement strong concurrency for application updates. You must
   *       provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You
   *       get the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the
   *         <code>ConditionalToken</code> parameter instead of
   *       <code>CurrentApplicationVersionId</code>.</p>
   * @public
   */
  ConditionalToken?: string;
}

/**
 * <p>Describes the Amazon CloudWatch logging option.</p>
 * @public
 */
export interface CloudWatchLoggingOptionDescription {
  /**
   * <p>The ID of the CloudWatch logging option description.</p>
   * @public
   */
  CloudWatchLoggingOptionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log to receive application
   *       messages.</p>
   * @public
   */
  LogStreamARN: string | undefined;

  /**
   * <p>The IAM ARN of the role to use to send application messages. </p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications created with the current API version have an
   *         application-level service execution role rather than a resource-level role.</p>
   *          </note>
   * @public
   */
  RoleARN?: string;
}

/**
 * @public
 */
export interface AddApplicationCloudWatchLoggingOptionResponse {
  /**
   * <p>The application's ARN.</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>The new version ID of the SQL-based Kinesis Data Analytics application. Kinesis Data Analytics
   *       updates the <code>ApplicationVersionId</code> each time you change the CloudWatch logging
   *       options. </p>
   * @public
   */
  ApplicationVersionId?: number;

  /**
   * <p>The descriptions of the current CloudWatch logging options for the SQL-based Kinesis Data Analytics application.</p>
   * @public
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
}

/**
 * <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 */
export interface InputParallelism {
  /**
   * <p>The number of in-application streams to create.</p>
   * @public
   */
  Count?: number;
}

/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is
 *       used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application. </p>
 * @public
 */
export interface InputLambdaProcessor {
  /**
   * <p>The ARN of the Amazon Lambda function that operates on records in the stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes a processor that is
 *       used to preprocess the records in the stream before being processed by your application code.
 *       Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.</p>
 * @public
 */
export interface InputProcessingConfiguration {
  /**
   * <p>The <a>InputLambdaProcessor</a> that is used to preprocess the records
   *       in the stream before being processed by your application code.</p>
   * @public
   */
  InputLambdaProcessor: InputLambdaProcessor | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the mapping of each
 *       data element in the streaming source to the corresponding column in the in-application
 *       stream.</p>
 *          <p>Also used to describe the format of the reference data source.</p>
 * @public
 */
export interface RecordColumn {
  /**
   * <p>The name of the column that is created in the in-application input stream or reference
   *       table.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A reference to the data element in the streaming input or the reference data
   *       source.</p>
   * @public
   */
  Mapping?: string;

  /**
   * <p>The type of column created in the in-application input stream or reference table.</p>
   * @public
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
 * @public
 */
export interface CSVMappingParameters {
  /**
   * <p>The row delimiter. For example, in a CSV format, <i>'\n'</i> is the typical
   *       row delimiter.</p>
   * @public
   */
  RecordRowDelimiter: string | undefined;

  /**
   * <p>The column delimiter. For example, in a CSV format, a comma (",") is the typical column
   *       delimiter.</p>
   * @public
   */
  RecordColumnDelimiter: string | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides additional mapping
 *       information when JSON is the record format on the streaming source.</p>
 * @public
 */
export interface JSONMappingParameters {
  /**
   * <p>The path to the top-level parent that contains the records.</p>
   * @public
   */
  RecordRowPath: string | undefined;
}

/**
 * <p>When you configure a SQL-based Kinesis Data Analytics application's input at the
 *       time of creating or updating an application, provides additional mapping information specific
 *       to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the
 *       streaming source.</p>
 * @public
 */
export interface MappingParameters {
  /**
   * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
   * @public
   */
  JSONMappingParameters?: JSONMappingParameters;

  /**
   * <p>Provides additional mapping information when the record format uses delimiters
   *       (for example, CSV).</p>
   * @public
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
 * <p> For a SQL-based Kinesis Data Analytics application, describes the record format
 *       and relevant mapping information that should be applied to schematize the records on the
 *       stream. </p>
 * @public
 */
export interface RecordFormat {
  /**
   * <p>The type of record format.</p>
   * @public
   */
  RecordFormatType: RecordFormatType | undefined;

  /**
   * <p>When you configure application input at the time of creating or updating an application,
   *       provides additional mapping information specific to the record format (such as JSON, CSV, or
   *       record fields delimited by some delimiter) on the streaming source.</p>
   * @public
   */
  MappingParameters?: MappingParameters;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the format of the
 *       data in the streaming source, and how each data element maps to corresponding columns created
 *       in the in-application stream. </p>
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
  RecordEncoding?: string;

  /**
   * <p>A list of <code>RecordColumn</code> objects. </p>
   * @public
   */
  RecordColumns: RecordColumn[] | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data
 *       Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon
 *       Resource Name (ARN).</p>
 * @public
 */
export interface KinesisFirehoseInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * <p> Identifies a Kinesis data stream as the streaming source. You provide the
 *       stream's Amazon Resource Name (ARN).</p>
 * @public
 */
export interface KinesisStreamsInput {
  /**
   * <p>The ARN of the input Kinesis data stream to read.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * <p>When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream
 *       name that is created,
 *       and the mapping between the two. </p>
 * @public
 */
export interface Input {
  /**
   * <p>The name prefix to use when creating an in-application stream. Suppose that you specify a
   *       prefix "<code>MyInApplicationStream</code>." Kinesis Data Analytics then creates one or more
   *       (as per the <code>InputParallelism</code> count you specified) in-application streams with the
   *       names "<code>MyInApplicationStream_001</code>," "<code>MyInApplicationStream_002</code>," and
   *       so on. </p>
   * @public
   */
  NamePrefix: string | undefined;

  /**
   * <p>The <a>InputProcessingConfiguration</a> for the input. An input processor transforms records as they are received
   *       from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is
   *       <a>InputLambdaProcessor</a>. </p>
   * @public
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * <p>If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN). </p>
   * @public
   */
  KinesisStreamsInput?: KinesisStreamsInput;

  /**
   * <p>If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.</p>
   * @public
   */
  KinesisFirehoseInput?: KinesisFirehoseInput;

  /**
   * <p>Describes the number of in-application streams to create. </p>
   * @public
   */
  InputParallelism?: InputParallelism;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps
   *       to corresponding columns in the in-application stream that is being created.</p>
   *          <p>Also used to describe the format of the reference data source.</p>
   * @public
   */
  InputSchema: SourceSchema | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputRequest {
  /**
   * <p>The name of your existing application to which you want to add the streaming
   *       source.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current version of your application.
   *         You must provide the <code>ApplicationVersionID</code> or the <code>ConditionalToken</code>.You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The <a>Input</a> to add.</p>
   * @public
   */
  Input: Input | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, an object that contains the
 *       Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in
 *       the stream.</p>
 * @public
 */
export interface InputLambdaProcessorDescription {
  /**
   * <p>The ARN of the Amazon Lambda function that is used to preprocess the records in the
   *       stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to access the Amazon Lambda function.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   * @public
   */
  RoleARN?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides the configuration
 *         information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">Amazon Lambda</a>.</p>
 * @public
 */
export interface InputProcessingConfigurationDescription {
  /**
   * <p>Provides configuration information about the associated <a>InputLambdaProcessorDescription</a>
   *          </p>
   * @public
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
 * <p>Describes the point at which the application reads from
 *       the streaming source.</p>
 * @public
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
   * @public
   */
  InputStartingPosition?: InputStartingPosition;
}

/**
 * <p>Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source
 *       in the application input configuration. </p>
 * @public
 */
export interface KinesisFirehoseInputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that Kinesis Data Analytics assumes to access the stream.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   * @public
   */
  RoleARN?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the Kinesis data
 *       stream that is configured as the streaming source in the application input configuration. </p>
 * @public
 */
export interface KinesisStreamsInputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.</p>
   * @public
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
   * @public
   */
  RoleARN?: string;
}

/**
 * <p>Describes the application input configuration for a SQL-based Kinesis Data Analytics application. </p>
 * @public
 */
export interface InputDescription {
  /**
   * <p>The input ID that is associated with the application input. This is the ID that Kinesis Data Analytics assigns to each input
   *       configuration that you add to your application. </p>
   * @public
   */
  InputId?: string;

  /**
   * <p>The in-application name prefix.</p>
   * @public
   */
  NamePrefix?: string;

  /**
   * <p>Returns the in-application stream names that are mapped to the stream source. </p>
   * @public
   */
  InAppStreamNames?: string[];

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run. </p>
   * @public
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

  /**
   * <p>If a Kinesis data stream is configured as a streaming source, provides the Kinesis data
   *       stream's Amazon Resource Name (ARN). </p>
   * @public
   */
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is configured as a streaming source, provides the delivery stream's ARN. </p>
   * @public
   */
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns
   *       in the in-application stream that is being created. </p>
   * @public
   */
  InputSchema?: SourceSchema;

  /**
   * <p>Describes the configured parallelism (number of in-application streams mapped to the streaming source). </p>
   * @public
   */
  InputParallelism?: InputParallelism;

  /**
   * <p>The point at which the application is configured to read from the input stream.</p>
   * @public
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;
}

/**
 * @public
 */
export interface AddApplicationInputResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>Provides the current application version.</p>
   * @public
   */
  ApplicationVersionId?: number;

  /**
   * <p>Describes the application input configuration.
   *
   *
   *     </p>
   * @public
   */
  InputDescriptions?: InputDescription[];
}

/**
 * <p>The user-provided application code (query) is not valid. This can be a simple syntax
 *       error.</p>
 * @public
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
   * <p>The name of the application to which you want to add the input processing
   *       configuration.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version of the application to which you want to add the input processing
   *       configuration. You can use the <a>DescribeApplication</a> operation to get the
   *       current application version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the input configuration to add the input processing configuration to. You
   *       can get a list of the input IDs for an application using the <a>DescribeApplication</a> operation.</p>
   * @public
   */
  InputId: string | undefined;

  /**
   * <p>The <a>InputProcessingConfiguration</a> to add to the application.</p>
   * @public
   */
  InputProcessingConfiguration: InputProcessingConfiguration | undefined;
}

/**
 * @public
 */
export interface AddApplicationInputProcessingConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>Provides the current application version. </p>
   * @public
   */
  ApplicationVersionId?: number;

  /**
   * <p>The input ID that is associated with the application input. This is the ID that Kinesis Data Analytics assigns
   *       to each input configuration that you add to your
   *       application.</p>
   * @public
   */
  InputId?: string;

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run.</p>
   * @public
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
}

/**
 * <p>Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application. </p>
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
 * <p>For a SQL-based Kinesis Data Analytics application, when configuring application
 *       output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the
 *       stream Amazon Resource Name (ARN) of the delivery stream. </p>
 * @public
 */
export interface KinesisFirehoseOutput {
  /**
   * <p>The ARN of the destination delivery stream to write to.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * <p>When you configure a SQL-based Kinesis Data Analytics application's output,
 *       identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource
 *       Name (ARN). </p>
 * @public
 */
export interface KinesisStreamsOutput {
  /**
   * <p>The ARN of the destination Kinesis data stream to write to.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * <p>When you configure a SQL-based Kinesis Data Analytics application's output,
 *       identifies an Amazon Lambda function as the destination. You provide the function Amazon Resource
 *       Name (ARN) of the Lambda function. </p>
 * @public
 */
export interface LambdaOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Lambda function to write to.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   * @public
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
 * @public
 */
export interface Output {
  /**
   * <p>The name of the in-application stream.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Identifies a Kinesis data stream
   *       as the destination.</p>
   * @public
   */
  KinesisStreamsOutput?: KinesisStreamsOutput;

  /**
   * <p>Identifies a Kinesis Data Firehose delivery stream as the destination.</p>
   * @public
   */
  KinesisFirehoseOutput?: KinesisFirehoseOutput;

  /**
   * <p>Identifies an Amazon Lambda function as the destination.</p>
   * @public
   */
  LambdaOutput?: LambdaOutput;

  /**
   * <p>Describes the data format when records are written to the destination.
   *       </p>
   * @public
   */
  DestinationSchema: DestinationSchema | undefined;
}

/**
 * @public
 */
export interface AddApplicationOutputRequest {
  /**
   * <p>The name of the application to which you want to add the output configuration.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version of the application to which you want to add the output configuration. You can
   *       use the <a>DescribeApplication</a> operation to get the current application
   *       version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned. </p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>An array of objects, each describing one output configuration. In the output
   *       configuration, you specify the name of an in-application stream, a destination (that is, a
   *       Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), and
   *       record the formation to use when writing to the destination.</p>
   * @public
   */
  Output: Output | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application's output, describes the Kinesis
 *       Data Firehose delivery stream that is configured as its destination.</p>
 * @public
 */
export interface KinesisFirehoseOutputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   * @public
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
   * @public
   */
  RoleARN?: string;
}

/**
 * <p>For an SQL-based Kinesis Data Analytics application's output, describes the Kinesis
 *       data stream that is configured as its destination. </p>
 * @public
 */
export interface KinesisStreamsOutputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream.</p>
   * @public
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
   * @public
   */
  RoleARN?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application's output, describes the Amazon
 *       Lambda function that is configured as its destination. </p>
 * @public
 */
export interface LambdaOutputDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Lambda function.</p>
   * @public
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
   * @public
   */
  RoleARN?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the application
 *       output configuration, which includes the in-application stream name and the destination where
 *       the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data
 *       Firehose delivery stream. </p>
 * @public
 */
export interface OutputDescription {
  /**
   * <p>A unique identifier for the output configuration.</p>
   * @public
   */
  OutputId?: string;

  /**
   * <p>The name of the in-application stream that is configured as output.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>Describes the Kinesis data stream that is configured as the destination where output is
   *       written.</p>
   * @public
   */
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

  /**
   * <p>Describes the Kinesis Data Firehose delivery stream that is configured as the destination
   *       where output is written.</p>
   * @public
   */
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

  /**
   * <p>Describes the Lambda function that is configured as the destination where output is
   *       written.</p>
   * @public
   */
  LambdaOutputDescription?: LambdaOutputDescription;

  /**
   * <p>The data format used for writing data to the destination.</p>
   * @public
   */
  DestinationSchema?: DestinationSchema;
}

/**
 * @public
 */
export interface AddApplicationOutputResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>The updated application version ID. Kinesis Data Analytics increments this ID when the application is
   *       updated.</p>
   * @public
   */
  ApplicationVersionId?: number;

  /**
   * <p>Describes the application output configuration.
   *       For more information,
   *       see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
   *
   *     </p>
   * @public
   */
  OutputDescriptions?: OutputDescription[];
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, identifies the Amazon S3
 *       bucket and object that contains the reference data.</p>
 *
 *          <p>A SQL-based Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a>
 *         operation to trigger reloading of data into your application. </p>
 * @public
 */
export interface S3ReferenceDataSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  BucketARN?: string;

  /**
   * <p>The object key name containing the reference data.</p>
   * @public
   */
  FileKey?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the reference data
 *       source by providing the source information (Amazon S3 bucket name and object key name), the
 *       resulting in-application table name that is created, and the necessary schema to map the data
 *       elements in the Amazon S3 object to the in-application table.</p>
 * @public
 */
export interface ReferenceDataSource {
  /**
   * <p>The name of the in-application table to create.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>Identifies the S3 bucket and object that contains the reference data.
   *
   *       A SQL-based Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
   * @public
   */
  S3ReferenceDataSource?: S3ReferenceDataSource;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   * @public
   */
  ReferenceSchema: SourceSchema | undefined;
}

/**
 * @public
 */
export interface AddApplicationReferenceDataSourceRequest {
  /**
   * <p>The name of an existing application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version of the application for which you are adding the reference data source.
   *         You can
   *       use the <a>DescribeApplication</a> operation to get the current application
   *       version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The reference data source can be an object in your Amazon S3 bucket. Kinesis Data Analytics reads the object and copies the data
   *       into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting
   *       in-application table that is
   *       created. </p>
   * @public
   */
  ReferenceDataSource: ReferenceDataSource | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides the bucket name and
 *       object key name that stores the reference data.</p>
 * @public
 */
export interface S3ReferenceDataSourceDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>Amazon S3 object key name.</p>
   * @public
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
   * @public
   */
  ReferenceRoleARN?: string;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the reference data
 *       source configured for an application.</p>
 * @public
 */
export interface ReferenceDataSourceDescription {
  /**
   * <p>The ID of the reference data source. This is the ID that Kinesis Data Analytics assigns
   *       when you add the reference data source to your application using the <a>CreateApplication</a> or <a>UpdateApplication</a> operation.</p>
   * @public
   */
  ReferenceId: string | undefined;

  /**
   * <p>The in-application table name created by the specific reference data source configuration.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>Provides the Amazon S3 bucket name, the object key name that contains the reference data. </p>
   * @public
   */
  S3ReferenceDataSourceDescription: S3ReferenceDataSourceDescription | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   * @public
   */
  ReferenceSchema?: SourceSchema;
}

/**
 * @public
 */
export interface AddApplicationReferenceDataSourceResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>The updated application version ID. Kinesis Data Analytics increments this ID when
   *       the application is updated.</p>
   * @public
   */
  ApplicationVersionId?: number;

  /**
   * <p>Describes reference data sources configured for the application.
   *
   *
   *
   *     </p>
   * @public
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}

/**
 * <p>Describes the parameters of a VPC used by the application.</p>
 * @public
 */
export interface VpcConfiguration {
  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs
   *         used by the VPC configuration.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a>
   *         IDs used by the VPC configuration.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddApplicationVpcConfigurationRequest {
  /**
   * <p>The name of an existing application.</p>
   * @public
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
   * @public
   */
  CurrentApplicationVersionId?: number;

  /**
   * <p>Description of the VPC to add to the application.</p>
   * @public
   */
  VpcConfiguration: VpcConfiguration | undefined;

  /**
   * <p>A value you use to implement strong concurrency for application updates. You must
   *       provide the <code>ApplicationVersionID</code> or the <code>ConditionalToken</code>. You get
   *       the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the
   *         <code>ConditionalToken</code> parameter instead of
   *       <code>CurrentApplicationVersionId</code>.</p>
   * @public
   */
  ConditionalToken?: string;
}

/**
 * <p>Describes the parameters of a VPC used by the application.</p>
 * @public
 */
export interface VpcConfigurationDescription {
  /**
   * <p>The ID of the VPC configuration.</p>
   * @public
   */
  VpcConfigurationId: string | undefined;

  /**
   * <p>The ID of the associated VPC.</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a>
   *         IDs used by the VPC configuration.</p>
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a>
   *         IDs used by the VPC configuration.</p>
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface AddApplicationVpcConfigurationResponse {
  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>Provides the current application version. Managed Service for Apache Flink updates the ApplicationVersionId each
   *       time you update the application.</p>
   * @public
   */
  ApplicationVersionId?: number;

  /**
   * <p>The parameters of the new VPC configuration.</p>
   * @public
   */
  VpcConfigurationDescription?: VpcConfigurationDescription;
}

/**
 * <p>For a Managed Service for Apache Flink application provides a
 *       description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket,
 *       the name of the Amazon S3 object that contains the data, and the version number of the Amazon
 *       S3 object that contains the data. </p>
 * @public
 */
export interface S3ContentLocation {
  /**
   * <p>The Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>The file key for the object containing the application code.</p>
   * @public
   */
  FileKey: string | undefined;

  /**
   * <p>The version of the object containing the application code.</p>
   * @public
   */
  ObjectVersion?: string;
}

/**
 * <p>Specifies either the application code, or the location of the application code, for a
 *       Managed Service for Apache Flink application. </p>
 * @public
 */
export interface CodeContent {
  /**
   * <p>The text-format code for a Managed Service for Apache Flink application.</p>
   * @public
   */
  TextContent?: string;

  /**
   * <p>The zip-format code for a Managed Service for Apache Flink application.</p>
   * @public
   */
  ZipFileContent?: Uint8Array;

  /**
   * <p>Information about the Amazon S3 bucket that contains the application code.</p>
   * @public
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
 * <p>Describes code configuration for an application.</p>
 * @public
 */
export interface ApplicationCodeConfiguration {
  /**
   * <p>The location and type of the application code.</p>
   * @public
   */
  CodeContent?: CodeContent;

  /**
   * <p>Specifies whether the code content is in text or zip format.</p>
   * @public
   */
  CodeContentType: CodeContentType | undefined;
}

/**
 * <p>Describes the location of an application's code stored in an S3 bucket.</p>
 * @public
 */
export interface S3ApplicationCodeLocationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>The file key for the object containing the application code.</p>
   * @public
   */
  FileKey: string | undefined;

  /**
   * <p>The version of the object containing the application code.</p>
   * @public
   */
  ObjectVersion?: string;
}

/**
 * <p>Describes details about the code of a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface CodeContentDescription {
  /**
   * <p>The text-format code</p>
   * @public
   */
  TextContent?: string;

  /**
   * <p>The checksum that can be used to validate zip-format code.</p>
   * @public
   */
  CodeMD5?: string;

  /**
   * <p>The size in bytes of the application code. Can be used to validate zip-format code.</p>
   * @public
   */
  CodeSize?: number;

  /**
   * <p>The S3 bucket Amazon Resource Name (ARN), file key, and object version of the application
   *       code stored in Amazon S3.</p>
   * @public
   */
  S3ApplicationCodeLocationDescription?: S3ApplicationCodeLocationDescription;
}

/**
 * <p>Describes code configuration for an application.</p>
 * @public
 */
export interface ApplicationCodeConfigurationDescription {
  /**
   * <p>Specifies whether the code content is in text or zip format.</p>
   * @public
   */
  CodeContentType: CodeContentType | undefined;

  /**
   * <p>Describes details about the location and format of the application code.</p>
   * @public
   */
  CodeContentDescription?: CodeContentDescription;
}

/**
 * <p>Describes an update for the Amazon S3 code content location for an application.</p>
 * @public
 */
export interface S3ContentLocationUpdate {
  /**
   * <p>The new Amazon Resource Name (ARN) for the S3 bucket containing the application code.</p>
   * @public
   */
  BucketARNUpdate?: string;

  /**
   * <p>The new file key for the object containing the application code.</p>
   * @public
   */
  FileKeyUpdate?: string;

  /**
   * <p>The new version of the object containing the application code.</p>
   * @public
   */
  ObjectVersionUpdate?: string;
}

/**
 * <p>Describes an update to the code of an application. Not supported for Apache Zeppelin.</p>
 * @public
 */
export interface CodeContentUpdate {
  /**
   * <p>Describes an update to the text code for an application.</p>
   * @public
   */
  TextContentUpdate?: string;

  /**
   * <p>Describes an update to the zipped code for an application.</p>
   * @public
   */
  ZipFileContentUpdate?: Uint8Array;

  /**
   * <p>Describes an update to the location of code for an application.</p>
   * @public
   */
  S3ContentLocationUpdate?: S3ContentLocationUpdate;
}

/**
 * <p>Describes code configuration updates for an application. This is supported for a Managed Service for Apache Flink application or a SQL-based Kinesis Data Analytics application.</p>
 * @public
 */
export interface ApplicationCodeConfigurationUpdate {
  /**
   * <p>Describes updates to the code content type.</p>
   * @public
   */
  CodeContentTypeUpdate?: CodeContentType;

  /**
   * <p>Describes updates to the code content of an application.</p>
   * @public
   */
  CodeContentUpdate?: CodeContentUpdate;
}

/**
 * <p>Describes whether snapshots are enabled for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface ApplicationSnapshotConfiguration {
  /**
   * <p>Describes whether snapshots are enabled for a Managed Service for Apache Flink application.</p>
   * @public
   */
  SnapshotsEnabled: boolean | undefined;
}

/**
 * <p>Property key-value pairs passed into an application.</p>
 * @public
 */
export interface PropertyGroup {
  /**
   * <p>Describes the key of an application execution property key-value pair.</p>
   * @public
   */
  PropertyGroupId: string | undefined;

  /**
   * <p>Describes the value of an application execution property key-value pair.</p>
   * @public
   */
  PropertyMap: Record<string, string> | undefined;
}

/**
 * <p>Describes execution properties for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface EnvironmentProperties {
  /**
   * <p>Describes the execution property groups.</p>
   * @public
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
 * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault
 *       tolerance.
 *       For more information, see
 *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance">
 *         Checkpoints for Fault Tolerance</a> in the
 *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>.</p>
 * @public
 */
export interface CheckpointConfiguration {
  /**
   * <p>Describes whether the application uses Managed Service for Apache Flink' default checkpointing behavior.
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
   * @public
   */
  ConfigurationType: ConfigurationType | undefined;

  /**
   * <p>Describes whether checkpointing is enabled for a Managed Service for Apache Flink application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value
   *       is set to another value using this API or in application code.</p>
   *          </note>
   * @public
   */
  CheckpointingEnabled?: boolean;

  /**
   * <p>Describes the interval in milliseconds between checkpoint operations. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set
   *       to another value using this API or in application code.</p>
   *          </note>
   * @public
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
   * @public
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
 * <p>Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.</p>
 * @public
 */
export interface MonitoringConfiguration {
  /**
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.
   *     You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or
   *     <code>MetricsLevel</code> parameters.</p>
   * @public
   */
  ConfigurationType: ConfigurationType | undefined;

  /**
   * <p>Describes the granularity of the CloudWatch Logs for an application. The <code>Parallelism</code>
   *     level is not recommended for applications with a Parallelism over 64 due to excessive costs.</p>
   * @public
   */
  MetricsLevel?: MetricsLevel;

  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   * @public
   */
  LogLevel?: LogLevel;
}

/**
 * <p>Describes parameters for how a Managed Service for Apache Flink application
 *       executes multiple tasks simultaneously. For more information about parallelism,
 *       see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink
 *         Documentation</a>.</p>
 * @public
 */
export interface ParallelismConfiguration {
  /**
   * <p>Describes whether the application uses the default parallelism for the Managed Service for Apache Flink service. You must set this property to <code>CUSTOM</code>
   *     in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.</p>
   * @public
   */
  ConfigurationType: ConfigurationType | undefined;

  /**
   * <p>Describes the initial number of parallel tasks that a Managed Service for Apache Flink application can perform. If <code>AutoScalingEnabled</code>
   *       is set to True, Managed Service for Apache Flink increases the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase the <code>CurrentParallelism</code> value up to the maximum parallelism, which is
   *       <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If
   *     application load is reduced, the service can
   *     reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   * @public
   */
  Parallelism?: number;

  /**
   * <p>Describes the number of parallel tasks that a Managed Service for Apache Flink application can perform per Kinesis Processing Unit
   *       (KPU) used by the application. For more
   *       information about KPUs, see <a href="http://aws.amazon.com/kinesis/data-analytics/pricing/">Amazon Managed Service for Apache Flink Pricing</a>.</p>
   * @public
   */
  ParallelismPerKPU?: number;

  /**
   * <p>Describes whether the Managed Service for Apache Flink service can increase the parallelism of the application in response to increased throughput.</p>
   * @public
   */
  AutoScalingEnabled?: boolean;
}

/**
 * <p>Describes configuration parameters for a Managed Service for Apache Flink application or a Studio notebook.</p>
 * @public
 */
export interface FlinkApplicationConfiguration {
  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the
   *       process of persisting application state for fault tolerance.
   *       For more information, see
   *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance">
   *         Checkpoints for Fault Tolerance</a> in the
   *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink Documentation</a>. </p>
   * @public
   */
  CheckpointConfiguration?: CheckpointConfiguration;

  /**
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   * @public
   */
  MonitoringConfiguration?: MonitoringConfiguration;

  /**
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   * @public
   */
  ParallelismConfiguration?: ParallelismConfiguration;
}

/**
 * <p>Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.</p>
 * @public
 */
export interface SqlApplicationConfiguration {
  /**
   * <p>The array of <a>Input</a> objects describing the input streams used by the
   *       application.</p>
   * @public
   */
  Inputs?: Input[];

  /**
   * <p>The array of <a>Output</a> objects describing the destination streams used by
   *       the application.</p>
   * @public
   */
  Outputs?: Output[];

  /**
   * <p>The array of <a>ReferenceDataSource</a> objects describing the reference data
   *       sources used by the application.</p>
   * @public
   */
  ReferenceDataSources?: ReferenceDataSource[];
}

/**
 * <p>The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.</p>
 * @public
 */
export interface GlueDataCatalogConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   * @public
   */
  DatabaseARN: string | undefined;
}

/**
 * <p>The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Managed Service for Apache Flink Studio notebook.</p>
 * @public
 */
export interface CatalogConfiguration {
  /**
   * <p>The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Managed Service for Apache Flink Studio notebook.</p>
   * @public
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
 * <p>The information required to specify a Maven reference. You can use Maven references to specify dependency JAR files.</p>
 * @public
 */
export interface MavenReference {
  /**
   * <p>The group ID of the Maven reference.</p>
   * @public
   */
  GroupId: string | undefined;

  /**
   * <p>The artifact ID of the Maven reference.</p>
   * @public
   */
  ArtifactId: string | undefined;

  /**
   * <p>The version of the Maven reference.</p>
   * @public
   */
  Version: string | undefined;
}

/**
 * <p>Specifies dependency JARs, as well as JAR files that contain user-defined functions (UDF).</p>
 * @public
 */
export interface CustomArtifactConfiguration {
  /**
   * <p>
   *             <code>UDF</code> stands for user-defined functions. This type of artifact must be in an S3 bucket. A <code>DEPENDENCY_JAR</code> can be in either Maven or an S3 bucket.</p>
   * @public
   */
  ArtifactType: ArtifactType | undefined;

  /**
   * <p>For a Managed Service for Apache Flink application provides a
   *       description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket,
   *       the name of the Amazon S3 object that contains the data, and the version number of the Amazon
   *       S3 object that contains the data. </p>
   * @public
   */
  S3ContentLocation?: S3ContentLocation;

  /**
   * <p>The parameters required to fully specify a Maven reference.</p>
   * @public
   */
  MavenReference?: MavenReference;
}

/**
 * <p>The S3 bucket that holds the application information.</p>
 * @public
 */
export interface S3ContentBaseLocation {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>The base path for the S3 bucket.</p>
   * @public
   */
  BasePath?: string;
}

/**
 * <p>The information required to deploy a Managed Service for Apache Flink Studio notebook as an application with durable state.</p>
 * @public
 */
export interface DeployAsApplicationConfiguration {
  /**
   * <p>The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
   *     </p>
   * @public
   */
  S3ContentLocation: S3ContentBaseLocation | undefined;
}

/**
 * <p>Describes configuration parameters for Amazon CloudWatch logging for a Managed Service for Apache Flink Studio notebook. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.</p>
 * @public
 */
export interface ZeppelinMonitoringConfiguration {
  /**
   * <p>The verbosity of the CloudWatch Logs for an application.</p>
   * @public
   */
  LogLevel: LogLevel | undefined;
}

/**
 * <p>The configuration of a Managed Service for Apache Flink Studio notebook.</p>
 * @public
 */
export interface ZeppelinApplicationConfiguration {
  /**
   * <p>The monitoring configuration of a Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  MonitoringConfiguration?: ZeppelinMonitoringConfiguration;

  /**
   * <p>The Amazon Glue Data Catalog that you use in queries in a Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  CatalogConfiguration?: CatalogConfiguration;

  /**
   * <p>The information required to deploy a Managed Service for Apache Flink Studio notebook as an application with durable state.</p>
   * @public
   */
  DeployAsApplicationConfiguration?: DeployAsApplicationConfiguration;

  /**
   * <p>Custom artifacts are dependency JARs and user-defined functions (UDF).</p>
   * @public
   */
  CustomArtifactsConfiguration?: CustomArtifactConfiguration[];
}

/**
 * <p>Specifies the creation parameters for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface ApplicationConfiguration {
  /**
   * <p>The creation and update parameters for a SQL-based Kinesis Data Analytics application.</p>
   * @public
   */
  SqlApplicationConfiguration?: SqlApplicationConfiguration;

  /**
   * <p>The creation and update parameters for a Managed Service for Apache Flink application.</p>
   * @public
   */
  FlinkApplicationConfiguration?: FlinkApplicationConfiguration;

  /**
   * <p>Describes execution properties for a Managed Service for Apache Flink application.</p>
   * @public
   */
  EnvironmentProperties?: EnvironmentProperties;

  /**
   * <p>The code location and type parameters for a Managed Service for Apache Flink application.</p>
   * @public
   */
  ApplicationCodeConfiguration?: ApplicationCodeConfiguration;

  /**
   * <p>Describes whether snapshots are enabled for a Managed Service for Apache Flink application.</p>
   * @public
   */
  ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;

  /**
   * <p>The array of descriptions of VPC configurations available to the application.</p>
   * @public
   */
  VpcConfigurations?: VpcConfiguration[];

  /**
   * <p>The configuration parameters for a Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  ZeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
}

/**
 * <p>Describes whether snapshots are enabled for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface ApplicationSnapshotConfigurationDescription {
  /**
   * <p>Describes whether snapshots are enabled for a Managed Service for Apache Flink application.</p>
   * @public
   */
  SnapshotsEnabled: boolean | undefined;
}

/**
 * <p>Describes the execution properties for an Apache Flink runtime.</p>
 * @public
 */
export interface EnvironmentPropertyDescriptions {
  /**
   * <p>Describes the execution property groups.</p>
   * @public
   */
  PropertyGroupDescriptions?: PropertyGroup[];
}

/**
 * <p>Describes checkpointing parameters for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface CheckpointConfigurationDescription {
  /**
   * <p>Describes whether the application uses the default checkpointing behavior in Managed Service for Apache Flink. </p>
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
   * @public
   */
  ConfigurationType?: ConfigurationType;

  /**
   * <p>Describes whether checkpointing is enabled for a Managed Service for Apache Flink application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to
   *       another value using this API or in application code.</p>
   *          </note>
   * @public
   */
  CheckpointingEnabled?: boolean;

  /**
   * <p>Describes the interval in milliseconds between checkpoint operations. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set to another value
   *       using this API or in application code.</p>
   *          </note>
   * @public
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
   * @public
   */
  MinPauseBetweenCheckpoints?: number;
}

/**
 * <p>Describes configuration parameters for CloudWatch logging for an application.</p>
 * @public
 */
export interface MonitoringConfigurationDescription {
  /**
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.</p>
   * @public
   */
  ConfigurationType?: ConfigurationType;

  /**
   * <p>Describes the granularity of the CloudWatch Logs for an application.</p>
   * @public
   */
  MetricsLevel?: MetricsLevel;

  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   * @public
   */
  LogLevel?: LogLevel;
}

/**
 * <p>Describes parameters for how a Managed Service for Apache Flink application
 *       executes multiple tasks simultaneously.</p>
 * @public
 */
export interface ParallelismConfigurationDescription {
  /**
   * <p>Describes whether the application uses the default parallelism for the Managed Service for Apache Flink service. </p>
   * @public
   */
  ConfigurationType?: ConfigurationType;

  /**
   * <p>Describes the initial number of parallel tasks that a Managed Service for Apache Flink application can perform.
   *       If <code>AutoScalingEnabled</code> is set to True, then Managed Service for Apache Flink can increase the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can
   *     reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   * @public
   */
  Parallelism?: number;

  /**
   * <p>Describes the number of parallel tasks that a Managed Service for Apache Flink application can perform per
   *       Kinesis Processing Unit (KPU) used by the application.</p>
   * @public
   */
  ParallelismPerKPU?: number;

  /**
   * <p>Describes the current number of parallel tasks that a Managed Service for Apache Flink application can perform.
   *       If <code>AutoScalingEnabled</code> is set to True, Managed Service for Apache Flink can increase this value in response to application
   *     load. The service can increase this value up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can reduce
   *     the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   * @public
   */
  CurrentParallelism?: number;

  /**
   * <p>Describes whether the Managed Service for Apache Flink service can increase the parallelism of the application in response to increased throughput.</p>
   * @public
   */
  AutoScalingEnabled?: boolean;
}

/**
 * <p>Describes configuration parameters for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface FlinkApplicationConfigurationDescription {
  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state
   *       for fault tolerance.</p>
   * @public
   */
  CheckpointConfigurationDescription?: CheckpointConfigurationDescription;

  /**
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   * @public
   */
  MonitoringConfigurationDescription?: MonitoringConfigurationDescription;

  /**
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   * @public
   */
  ParallelismConfigurationDescription?: ParallelismConfigurationDescription;

  /**
   * <p>The job plan for an application. For more information about the job plan, see <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/internals/job_scheduling.html">Jobs and Scheduling</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink
   *         Documentation</a>. To retrieve the job plan for the application, use the <a>DescribeApplicationRequest$IncludeAdditionalDetails</a> parameter of the <a>DescribeApplication</a> operation.</p>
   * @public
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
 * <p>Specifies the method and snapshot to use when restarting an application using previously saved application state.</p>
 * @public
 */
export interface ApplicationRestoreConfiguration {
  /**
   * <p>Specifies how the application should be restored.</p>
   * @public
   */
  ApplicationRestoreType: ApplicationRestoreType | undefined;

  /**
   * <p>The identifier of an existing snapshot of application state to use to restart an application.
   *       The application uses this value if <code>RESTORE_FROM_CUSTOM_SNAPSHOT</code> is specified for the
   *       <code>ApplicationRestoreType</code>.</p>
   * @public
   */
  SnapshotName?: string;
}

/**
 * <p>Describes the starting parameters for a Managed Service for Apache Flink application.</p>
 * @public
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
   * @public
   */
  AllowNonRestoredState?: boolean;
}

/**
 * <p>Describes the starting properties for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface RunConfigurationDescription {
  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   * @public
   */
  ApplicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;

  /**
   * <p>Describes the starting parameters for a Managed Service for Apache Flink application.</p>
   * @public
   */
  FlinkRunConfigurationDescription?: FlinkRunConfiguration;
}

/**
 * <p>Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.</p>
 * @public
 */
export interface SqlApplicationConfigurationDescription {
  /**
   * <p>The array of <a>InputDescription</a> objects describing the input streams used
   *       by the application.</p>
   * @public
   */
  InputDescriptions?: InputDescription[];

  /**
   * <p>The array of <a>OutputDescription</a> objects describing the destination
   *       streams used by the application.</p>
   * @public
   */
  OutputDescriptions?: OutputDescription[];

  /**
   * <p>The array of <a>ReferenceDataSourceDescription</a> objects describing the
   *       reference data sources used by the application.</p>
   * @public
   */
  ReferenceDataSourceDescriptions?: ReferenceDataSourceDescription[];
}

/**
 * <p>The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.</p>
 * @public
 */
export interface GlueDataCatalogConfigurationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   * @public
   */
  DatabaseARN: string | undefined;
}

/**
 * <p>The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Managed Service for Apache Flink Studio notebook.</p>
 * @public
 */
export interface CatalogConfigurationDescription {
  /**
   * <p>The configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  GlueDataCatalogConfigurationDescription: GlueDataCatalogConfigurationDescription | undefined;
}

/**
 * <p>Specifies a dependency JAR or a JAR of user-defined functions.</p>
 * @public
 */
export interface CustomArtifactConfigurationDescription {
  /**
   * <p>
   *             <code>UDF</code> stands for user-defined functions. This type of artifact must be in an S3 bucket. A <code>DEPENDENCY_JAR</code> can be in either Maven or an S3 bucket.</p>
   * @public
   */
  ArtifactType?: ArtifactType;

  /**
   * <p>For a Managed Service for Apache Flink application provides a
   *       description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket,
   *       the name of the Amazon S3 object that contains the data, and the version number of the Amazon
   *       S3 object that contains the data. </p>
   * @public
   */
  S3ContentLocationDescription?: S3ContentLocation;

  /**
   * <p>The parameters that are required to specify a Maven dependency.</p>
   * @public
   */
  MavenReferenceDescription?: MavenReference;
}

/**
 * <p>The description of the S3 base location that holds the application.</p>
 * @public
 */
export interface S3ContentBaseLocationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  BucketARN: string | undefined;

  /**
   * <p>The base path for the S3 bucket.</p>
   * @public
   */
  BasePath?: string;
}

/**
 * <p>The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.</p>
 * @public
 */
export interface DeployAsApplicationConfigurationDescription {
  /**
   * <p>The location that holds the data required to specify an Amazon Data Analytics application.</p>
   * @public
   */
  S3ContentLocationDescription: S3ContentBaseLocationDescription | undefined;
}

/**
 * <p>The monitoring configuration for Apache Zeppelin within a Managed Service for Apache Flink Studio notebook.</p>
 * @public
 */
export interface ZeppelinMonitoringConfigurationDescription {
  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   * @public
   */
  LogLevel?: LogLevel;
}

/**
 * <p>The configuration of a Managed Service for Apache Flink Studio notebook.</p>
 * @public
 */
export interface ZeppelinApplicationConfigurationDescription {
  /**
   * <p>The monitoring configuration of a Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  MonitoringConfigurationDescription: ZeppelinMonitoringConfigurationDescription | undefined;

  /**
   * <p>The Amazon Glue Data Catalog that is associated with the Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  CatalogConfigurationDescription?: CatalogConfigurationDescription;

  /**
   * <p>The parameters required to deploy a Managed Service for Apache Flink Studio notebook as an application with durable state.</p>
   * @public
   */
  DeployAsApplicationConfigurationDescription?: DeployAsApplicationConfigurationDescription;

  /**
   * <p>Custom artifacts are dependency JARs and user-defined functions (UDF).</p>
   * @public
   */
  CustomArtifactsConfigurationDescription?: CustomArtifactConfigurationDescription[];
}

/**
 * <p>Describes details about the application code and starting parameters for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface ApplicationConfigurationDescription {
  /**
   * <p>The details about inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.</p>
   * @public
   */
  SqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;

  /**
   * <p>The details about the application code for a Managed Service for Apache Flink application.</p>
   * @public
   */
  ApplicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;

  /**
   * <p>The details about the starting properties for a Managed Service for Apache Flink application.</p>
   * @public
   */
  RunConfigurationDescription?: RunConfigurationDescription;

  /**
   * <p>The details about a Managed Service for Apache Flink application.</p>
   * @public
   */
  FlinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;

  /**
   * <p>Describes execution properties for a Managed Service for Apache Flink application.</p>
   * @public
   */
  EnvironmentPropertyDescriptions?: EnvironmentPropertyDescriptions;

  /**
   * <p>Describes whether snapshots are enabled for a Managed Service for Apache Flink application.</p>
   * @public
   */
  ApplicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;

  /**
   * <p>The array of descriptions of VPC configurations available to the application.</p>
   * @public
   */
  VpcConfigurationDescriptions?: VpcConfigurationDescription[];

  /**
   * <p>The configuration parameters for a Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  ZeppelinApplicationConfigurationDescription?: ZeppelinApplicationConfigurationDescription;
}

/**
 * <p>Describes updates to whether snapshots are enabled for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface ApplicationSnapshotConfigurationUpdate {
  /**
   * <p>Describes updates to whether snapshots are enabled for an application.</p>
   * @public
   */
  SnapshotsEnabledUpdate: boolean | undefined;
}

/**
 * <p>Describes updates to the execution property groups for a Managed Service for Apache Flink application or a Studio notebook.</p>
 * @public
 */
export interface EnvironmentPropertyUpdates {
  /**
   * <p>Describes updates to the execution property groups.</p>
   * @public
   */
  PropertyGroups: PropertyGroup[] | undefined;
}

/**
 * <p>Describes updates to the checkpointing parameters for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface CheckpointConfigurationUpdate {
  /**
   * <p>Describes updates to whether the application uses the default checkpointing behavior of
   *       Managed Service for Apache Flink. You must set this property to <code>CUSTOM</code> in order to set the
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
   * @public
   */
  ConfigurationTypeUpdate?: ConfigurationType;

  /**
   * <p>Describes updates to whether checkpointing is enabled for an application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to
   *       another value using this API or in application code.</p>
   *          </note>
   * @public
   */
  CheckpointingEnabledUpdate?: boolean;

  /**
   * <p>Describes updates to the interval in milliseconds between checkpoint operations.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> value of 60000, even if this value is set to another value
   *       using this API or in application code.</p>
   *          </note>
   * @public
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
   * @public
   */
  MinPauseBetweenCheckpointsUpdate?: number;
}

/**
 * <p>Describes updates to configuration parameters for Amazon CloudWatch logging for an application.</p>
 * @public
 */
export interface MonitoringConfigurationUpdate {
  /**
   * <p>Describes updates to whether to use the default CloudWatch logging configuration for
   *       an application. You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or
   *     <code>MetricsLevel</code> parameters.</p>
   * @public
   */
  ConfigurationTypeUpdate?: ConfigurationType;

  /**
   * <p>Describes updates to the granularity of the CloudWatch Logs for an application. The <code>Parallelism</code>
   *       level is not recommended for applications with a Parallelism over 64 due to excessive costs.</p>
   * @public
   */
  MetricsLevelUpdate?: MetricsLevel;

  /**
   * <p>Describes updates to the verbosity of the CloudWatch Logs for an application.</p>
   * @public
   */
  LogLevelUpdate?: LogLevel;
}

/**
 * <p>Describes updates to parameters for how an application executes multiple tasks simultaneously.</p>
 * @public
 */
export interface ParallelismConfigurationUpdate {
  /**
   * <p>Describes updates to whether the application uses the default parallelism for the Managed Service for Apache Flink service, or if a custom parallelism is used.
   *     You must set this property to <code>CUSTOM</code>
   *     in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.</p>
   * @public
   */
  ConfigurationTypeUpdate?: ConfigurationType;

  /**
   * <p>Describes updates to the initial number of parallel tasks an application can perform. If <code>AutoScalingEnabled</code> is set to True, then
   *       Managed Service for Apache Flink can increase the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service will
   *     reduce <code>CurrentParallelism</code> down to the <code>Parallelism</code> setting.</p>
   * @public
   */
  ParallelismUpdate?: number;

  /**
   * <p>Describes updates to the number of parallel tasks an application can perform per Kinesis Processing Unit (KPU) used by the application.</p>
   * @public
   */
  ParallelismPerKPUUpdate?: number;

  /**
   * <p>Describes updates to whether the Managed Service for Apache Flink service can increase the parallelism of a Managed Service for Apache Flink application in response to increased throughput.</p>
   * @public
   */
  AutoScalingEnabledUpdate?: boolean;
}

/**
 * <p>Describes updates to the configuration parameters for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface FlinkApplicationConfigurationUpdate {
  /**
   * <p>Describes updates to an application's checkpointing configuration. Checkpointing is the process of persisting
   *       application state for fault tolerance.</p>
   * @public
   */
  CheckpointConfigurationUpdate?: CheckpointConfigurationUpdate;

  /**
   * <p>Describes updates to the configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   * @public
   */
  MonitoringConfigurationUpdate?: MonitoringConfigurationUpdate;

  /**
   * <p>Describes updates to the parameters for how an application executes multiple tasks simultaneously.</p>
   * @public
   */
  ParallelismConfigurationUpdate?: ParallelismConfigurationUpdate;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides updates to the
 *       parallelism count.</p>
 * @public
 */
export interface InputParallelismUpdate {
  /**
   * <p>The number of in-application streams to create for the specified streaming source.</p>
   * @public
   */
  CountUpdate: number | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, represents an update to the
 *         <a>InputLambdaProcessor</a> that is used to preprocess the records in the
 *       stream.</p>
 * @public
 */
export interface InputLambdaProcessorUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the new Amazon Lambda function that is used to preprocess
   *       the records in the stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.</p>
 * @public
 */
export interface InputProcessingConfigurationUpdate {
  /**
   * <p>Provides update information for an <a>InputLambdaProcessor</a>.</p>
   * @public
   */
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate | undefined;
}

/**
 * <p>Describes updates for an SQL-based Kinesis Data Analytics application's input
 *       schema.</p>
 * @public
 */
export interface InputSchemaUpdate {
  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   * @public
   */
  RecordFormatUpdate?: RecordFormat;

  /**
   * <p>Specifies the encoding of the records in the streaming source; for example, UTF-8.</p>
   * @public
   */
  RecordEncodingUpdate?: string;

  /**
   * <p>A list of <code>RecordColumn</code> objects. Each object describes the mapping
   *       of the streaming source element to the corresponding column in the in-application stream.</p>
   * @public
   */
  RecordColumnUpdates?: RecordColumn[];
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, when updating application
 *       input configuration, provides information about a Kinesis Data Firehose delivery stream as the
 *       streaming source.</p>
 * @public
 */
export interface KinesisFirehoseInputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the input delivery stream to read.</p>
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p>When you update the input configuration for a SQL-based Kinesis Data Analytics application, provides information about a
 *       Kinesis stream as the streaming
 *       source.</p>
 * @public
 */
export interface KinesisStreamsInputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the input Kinesis data stream to read.</p>
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes updates to a
 *       specific input configuration (identified by the <code>InputId</code> of an application). </p>
 * @public
 */
export interface InputUpdate {
  /**
   * <p>The input ID of the application input to be updated.</p>
   * @public
   */
  InputId: string | undefined;

  /**
   * <p>The name prefix for in-application streams that Kinesis Data Analytics creates for the
   *       specific streaming source.</p>
   * @public
   */
  NamePrefixUpdate?: string;

  /**
   * <p>Describes updates to an <a>InputProcessingConfiguration</a>.</p>
   * @public
   */
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

  /**
   * <p>If a Kinesis data stream is the streaming source to be updated, provides an
   *       updated stream Amazon Resource Name (ARN).</p>
   * @public
   */
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is the streaming source to be
   *       updated, provides an updated stream ARN.</p>
   * @public
   */
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

  /**
   * <p>Describes the data format on the streaming source, and
   *       how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   * @public
   */
  InputSchemaUpdate?: InputSchemaUpdate;

  /**
   * <p>Describes the parallelism updates (the number of in-application streams Kinesis Data Analytics creates for the specific streaming source).</p>
   * @public
   */
  InputParallelismUpdate?: InputParallelismUpdate;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, when updating an output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about a Kinesis Data Firehose delivery stream that is configured as the destination.</p>
 * @public
 */
export interface KinesisFirehoseOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream to write to. </p>
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p>When you update a SQL-based Kinesis Data Analytics application's output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about a Kinesis data stream that is configured as the destination.</p>
 * @public
 */
export interface KinesisStreamsOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream where you want to write the
   *       output.</p>
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p>When you update an SQL-based Kinesis Data Analytics application's output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about an Amazon Lambda function that is configured as the destination.</p>
 * @public
 */
export interface LambdaOutputUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Amazon Lambda function.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: Amazon Lambda</a>
   *             </p>
   *          </note>
   * @public
   */
  ResourceARNUpdate: string | undefined;
}

/**
 * <p> For a SQL-based Kinesis Data Analytics application, describes updates to the
 *       output configuration identified by the <code>OutputId</code>. </p>
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
   *       for this output configuration, use this field to
   *       specify the new in-application stream name.</p>
   * @public
   */
  NameUpdate?: string;

  /**
   * <p>Describes a Kinesis data stream as the destination for the output.</p>
   * @public
   */
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

  /**
   * <p>Describes a Kinesis Data Firehose delivery stream as the destination for the
   *       output.</p>
   * @public
   */
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

  /**
   * <p>Describes an Amazon Lambda function as the destination for the output.</p>
   * @public
   */
  LambdaOutputUpdate?: LambdaOutputUpdate;

  /**
   * <p>Describes the data format when records are written to the destination.
   *       </p>
   * @public
   */
  DestinationSchemaUpdate?: DestinationSchema;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, describes the Amazon S3 bucket
 *       name and object key name for an in-application reference table. </p>
 * @public
 */
export interface S3ReferenceDataSourceUpdate {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  BucketARNUpdate?: string;

  /**
   * <p>The object key name.</p>
   * @public
   */
  FileKeyUpdate?: string;
}

/**
 * <p>When you update a reference data source configuration for a
 *        SQL-based Kinesis Data Analytics application, this object provides all the updated values
 *       (such as the source bucket name and object key name), the in-application table name that is created,
 *       and updated mapping information that maps the data in the Amazon S3 object to the in-application
 *       reference table that is created.</p>
 * @public
 */
export interface ReferenceDataSourceUpdate {
  /**
   * <p>The ID of the reference data source that is being updated. You can use the <a>DescribeApplication</a> operation to get this value.</p>
   * @public
   */
  ReferenceId: string | undefined;

  /**
   * <p>The in-application table name that is created by this update.</p>
   * @public
   */
  TableNameUpdate?: string;

  /**
   * <p>Describes the S3 bucket name, object key name, and IAM role that Kinesis Data Analytics can assume to read the
   *       Amazon S3 object on your behalf and populate the in-application reference table.</p>
   * @public
   */
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to
   *       corresponding columns created in the in-application stream. </p>
   * @public
   */
  ReferenceSchemaUpdate?: SourceSchema;
}

/**
 * <p>Describes updates to the input streams, destination streams, and reference data sources
 *       for a SQL-based Kinesis Data Analytics application.</p>
 * @public
 */
export interface SqlApplicationConfigurationUpdate {
  /**
   * <p>The array of <a>InputUpdate</a> objects describing the new input streams used
   *       by the application.</p>
   * @public
   */
  InputUpdates?: InputUpdate[];

  /**
   * <p>The array of <a>OutputUpdate</a> objects describing the new destination streams
   *       used by the application.</p>
   * @public
   */
  OutputUpdates?: OutputUpdate[];

  /**
   * <p>The array of <a>ReferenceDataSourceUpdate</a> objects describing the new
   *       reference data sources used by the application.</p>
   * @public
   */
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}

/**
 * <p>Describes updates to the VPC configuration used by the application.</p>
 * @public
 */
export interface VpcConfigurationUpdate {
  /**
   * <p>Describes an update to the ID of the VPC configuration.</p>
   * @public
   */
  VpcConfigurationId: string | undefined;

  /**
   * <p>Describes updates to the array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a>
   *         IDs
   *         used by the VPC configuration.</p>
   * @public
   */
  SubnetIdUpdates?: string[];

  /**
   * <p>Describes updates to the array of
   *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.</p>
   * @public
   */
  SecurityGroupIdUpdates?: string[];
}

/**
 * <p>Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Managed Service for Apache Flink Studio notebook.</p>
 * @public
 */
export interface GlueDataCatalogConfigurationUpdate {
  /**
   * <p>The updated Amazon Resource Name (ARN) of the database.</p>
   * @public
   */
  DatabaseARNUpdate: string | undefined;
}

/**
 * <p>Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Managed Service for Apache Flink Studio notebook.</p>
 * @public
 */
export interface CatalogConfigurationUpdate {
  /**
   * <p>Updates to the configuration parameters for the default Amazon Glue database. You use this database for SQL queries that you write in a Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  GlueDataCatalogConfigurationUpdate: GlueDataCatalogConfigurationUpdate | undefined;
}

/**
 * <p>The information required to update the S3 base location that holds the application.</p>
 * @public
 */
export interface S3ContentBaseLocationUpdate {
  /**
   * <p>The updated Amazon Resource Name (ARN) of the S3 bucket.</p>
   * @public
   */
  BucketARNUpdate?: string;

  /**
   * <p>The updated S3 bucket path.</p>
   * @public
   */
  BasePathUpdate?: string;
}

/**
 * <p>Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.</p>
 * @public
 */
export interface DeployAsApplicationConfigurationUpdate {
  /**
   * <p>Updates to the location that holds the data required to specify an Amazon Data Analytics application.</p>
   * @public
   */
  S3ContentLocationUpdate?: S3ContentBaseLocationUpdate;
}

/**
 * <p>Updates to the monitoring configuration for Apache Zeppelin within a Managed Service for Apache Flink Studio notebook.</p>
 * @public
 */
export interface ZeppelinMonitoringConfigurationUpdate {
  /**
   * <p>Updates to the logging level for Apache Zeppelin within a Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  LogLevelUpdate: LogLevel | undefined;
}

/**
 * <p>Updates to the configuration of Managed Service for Apache Flink Studio notebook.</p>
 * @public
 */
export interface ZeppelinApplicationConfigurationUpdate {
  /**
   * <p>Updates to the monitoring configuration of a Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  MonitoringConfigurationUpdate?: ZeppelinMonitoringConfigurationUpdate;

  /**
   * <p>Updates to the configuration of the Amazon Glue Data Catalog that is associated with the Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  CatalogConfigurationUpdate?: CatalogConfigurationUpdate;

  /**
   * <p>Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.</p>
   * @public
   */
  DeployAsApplicationConfigurationUpdate?: DeployAsApplicationConfigurationUpdate;

  /**
   * <p>Updates to the customer artifacts. Custom artifacts are dependency JAR files and user-defined functions (UDF).</p>
   * @public
   */
  CustomArtifactsConfigurationUpdate?: CustomArtifactConfiguration[];
}

/**
 * <p>Describes updates to an application's configuration.</p>
 * @public
 */
export interface ApplicationConfigurationUpdate {
  /**
   * <p>Describes updates to a SQL-based Kinesis Data Analytics application's
   *       configuration.</p>
   * @public
   */
  SqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to an application's code
   *       configuration.</p>
   * @public
   */
  ApplicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;

  /**
   * <p>Describes updates to a Managed Service for Apache Flink application's configuration.</p>
   * @public
   */
  FlinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to the environment properties for a Managed Service for Apache Flink application.</p>
   * @public
   */
  EnvironmentPropertyUpdates?: EnvironmentPropertyUpdates;

  /**
   * <p>Describes whether snapshots are enabled for a Managed Service for Apache Flink application.</p>
   * @public
   */
  ApplicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;

  /**
   * <p>Updates to the array of descriptions of VPC configurations available to the application.</p>
   * @public
   */
  VpcConfigurationUpdates?: VpcConfigurationUpdate[];

  /**
   * <p>Updates to the configuration of a Managed Service for Apache Flink Studio notebook.</p>
   * @public
   */
  ZeppelinApplicationConfigurationUpdate?: ZeppelinApplicationConfigurationUpdate;
}

/**
 * <p>The details of the maintenance configuration for the application.</p>
 * @public
 */
export interface ApplicationMaintenanceConfigurationDescription {
  /**
   * <p>The start time for the maintenance window.</p>
   * @public
   */
  ApplicationMaintenanceWindowStartTime: string | undefined;

  /**
   * <p>The end time for the maintenance window.</p>
   * @public
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
 * <p>Describes the application, including the application Amazon Resource Name (ARN), status,
 *       latest version, and input and output configurations.</p>
 * @public
 */
export interface ApplicationDetail {
  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  ApplicationARN: string | undefined;

  /**
   * <p>The description of the application.</p>
   * @public
   */
  ApplicationDescription?: string;

  /**
   * <p>The name of the application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The runtime environment for the application.</p>
   * @public
   */
  RuntimeEnvironment: RuntimeEnvironment | undefined;

  /**
   * <p>Specifies the IAM role that the application uses to access external resources.</p>
   * @public
   */
  ServiceExecutionRole?: string;

  /**
   * <p>The status of the application.</p>
   * @public
   */
  ApplicationStatus: ApplicationStatus | undefined;

  /**
   * <p>Provides the current application version. Managed Service for Apache Flink updates the
   *         <code>ApplicationVersionId</code> each time you update the application.</p>
   * @public
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>The current timestamp when the application was created.</p>
   * @public
   */
  CreateTimestamp?: Date;

  /**
   * <p>The current timestamp when the application was last updated.</p>
   * @public
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>Describes details about the application code and starting parameters for a Managed Service for Apache Flink application.</p>
   * @public
   */
  ApplicationConfigurationDescription?: ApplicationConfigurationDescription;

  /**
   * <p>Describes the application Amazon CloudWatch logging options.</p>
   * @public
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  /**
   * <p>The details of the maintenance configuration for the application.</p>
   * @public
   */
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;

  /**
   * <p>The previous application version before the latest application update. <a>RollbackApplication</a>
   *         reverts the application to this version.</p>
   * @public
   */
  ApplicationVersionUpdatedFrom?: number;

  /**
   * <p>If you reverted the application using <a>RollbackApplication</a>,
   *         the application version when <code>RollbackApplication</code> was called.</p>
   * @public
   */
  ApplicationVersionRolledBackFrom?: number;

  /**
   * <p>A value you use to implement strong concurrency for application updates.</p>
   * @public
   */
  ConditionalToken?: string;

  /**
   * <p>The version to which you want to roll back the application.</p>
   * @public
   */
  ApplicationVersionRolledBackTo?: number;

  /**
   * <p>To create a Managed Service for Apache Flink Studio notebook, you must set the mode to <code>INTERACTIVE</code>. However, for a Managed Service for Apache Flink application, the mode is optional.</p>
   * @public
   */
  ApplicationMode?: ApplicationMode;
}

/**
 * <p>Describes the updated maintenance configuration for the application.</p>
 * @public
 */
export interface ApplicationMaintenanceConfigurationUpdate {
  /**
   * <p>The updated start time for the maintenance window.</p>
   * @public
   */
  ApplicationMaintenanceWindowStartTimeUpdate: string | undefined;
}

/**
 * <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The ARN of the application.</p>
   * @public
   */
  ApplicationARN: string | undefined;

  /**
   * <p>The status of the application.</p>
   * @public
   */
  ApplicationStatus: ApplicationStatus | undefined;

  /**
   * <p>Provides the current application version.</p>
   * @public
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>The runtime environment for the application.</p>
   * @public
   */
  RuntimeEnvironment: RuntimeEnvironment | undefined;

  /**
   * <p>For a Managed Service for Apache Flink application, the mode is <code>STREAMING</code>. For a Managed Service for Apache Flink Studio notebook, it is <code>INTERACTIVE</code>.</p>
   * @public
   */
  ApplicationMode?: ApplicationMode;
}

/**
 * <p>The summary of the application version.</p>
 * @public
 */
export interface ApplicationVersionSummary {
  /**
   * <p>The ID of the application version. Managed Service for Apache Flink updates the <code>ApplicationVersionId</code> each time you update the application.</p>
   * @public
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>The status of the application.</p>
   * @public
   */
  ApplicationStatus: ApplicationStatus | undefined;
}

/**
 * <p>Describes the Amazon CloudWatch logging option updates.</p>
 * @public
 */
export interface CloudWatchLoggingOptionUpdate {
  /**
   * <p>The ID of the CloudWatch logging option to update</p>
   * @public
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch log to receive application
   *       messages.</p>
   * @public
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
  Value?: string;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The name of your application (for example, <code>sample-app</code>).</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>A summary description of the application.</p>
   * @public
   */
  ApplicationDescription?: string;

  /**
   * <p>The runtime environment for the application.</p>
   * @public
   */
  RuntimeEnvironment: RuntimeEnvironment | undefined;

  /**
   * <p>The IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose
   *       delivery streams, Amazon S3 objects, and other external resources.</p>
   * @public
   */
  ServiceExecutionRole: string | undefined;

  /**
   * <p>Use this parameter to configure the application.</p>
   * @public
   */
  ApplicationConfiguration?: ApplicationConfiguration;

  /**
   * <p>Use this parameter to configure an Amazon CloudWatch log stream to monitor application
   *       configuration errors.
   *       </p>
   * @public
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[];

  /**
   * <p>A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an
   *         application. Note that the maximum number of application tags includes system tags. The maximum number of
   *         user-defined application tags is 50.
   *         For more information, see
   *         <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
   * @public
   */
  Tags?: Tag[];

  /**
   * <p>Use the <code>STREAMING</code> mode to create a Managed Service for Apache Flink application. To create a Managed Service for Apache Flink Studio notebook, use the
   *     <code>INTERACTIVE</code> mode.</p>
   * @public
   */
  ApplicationMode?: ApplicationMode;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>In response to your <code>CreateApplication</code> request, Managed Service for Apache Flink returns a
   *       response with details of the application it created.</p>
   * @public
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * <p>The number of allowed resources has been exceeded.</p>
 * @public
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
 * @public
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
 * @public
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
   * <p>The name of the application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The type of the extension for which to create and return a URL. Currently, the only valid
   *             extension URL type is <code>FLINK_DASHBOARD_URL</code>. </p>
   * @public
   */
  UrlType: UrlType | undefined;

  /**
   * <p>The duration in seconds for which the returned URL will be valid.</p>
   * @public
   */
  SessionExpirationDurationInSeconds?: number;
}

/**
 * @public
 */
export interface CreateApplicationPresignedUrlResponse {
  /**
   * <p>The URL of the extension.</p>
   * @public
   */
  AuthorizedUrl?: string;
}

/**
 * @public
 */
export interface CreateApplicationSnapshotRequest {
  /**
   * <p>The name of an existing application</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>An identifier for the application snapshot.</p>
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
   * <p>The name of the application to delete.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Use the <code>DescribeApplication</code> operation to get this value.</p>
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
   * <p>The application name.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version ID of the application. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   * @public
   */
  CurrentApplicationVersionId?: number;

  /**
   * <p>The <code>CloudWatchLoggingOptionId</code> of the Amazon CloudWatch logging option to
   *          delete. You can get the <code>CloudWatchLoggingOptionId</code> by using the <a>DescribeApplication</a> operation. </p>
   * @public
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * <p>A value you use to implement strong concurrency for application updates. You must provide
   *       the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You get the
   *       application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   * @public
   */
  ConditionalToken?: string;
}

/**
 * @public
 */
export interface DeleteApplicationCloudWatchLoggingOptionResponse {
  /**
   * <p>The application's Amazon Resource Name (ARN).</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>The version ID of the application. Kinesis Data Analytics updates the
   *         <code>ApplicationVersionId</code> each time you change the CloudWatch logging
   *       options.</p>
   * @public
   */
  ApplicationVersionId?: number;

  /**
   * <p>The descriptions of the remaining CloudWatch logging options for the application.</p>
   * @public
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];
}

/**
 * @public
 */
export interface DeleteApplicationInputProcessingConfigurationRequest {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified is not the current version, the
   *       <code>ConcurrentModificationException</code> is returned.
   *     </p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the input configuration from which to delete the input processing
   *       configuration. You can get a list of the input IDs for an application by using the <a>DescribeApplication</a> operation.</p>
   * @public
   */
  InputId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationInputProcessingConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>The current application version ID.</p>
   * @public
   */
  ApplicationVersionId?: number;
}

/**
 * @public
 */
export interface DeleteApplicationOutputRequest {
  /**
   * <p>The application name.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified is not the current version, the
   *       <code>ConcurrentModificationException</code> is returned.
   *     </p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the configuration to delete. Each output configuration that is added to the
   *       application (either when the application is created or later) using the <a>AddApplicationOutput</a> operation has a unique ID. You need to provide the ID to
   *       uniquely identify the output configuration that you want to delete from the application
   *       configuration. You can use the <a>DescribeApplication</a> operation to get the
   *       specific <code>OutputId</code>. </p>
   * @public
   */
  OutputId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationOutputResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>The current application version ID.</p>
   * @public
   */
  ApplicationVersionId?: number;
}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceRequest {
  /**
   * <p>The name of an existing application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version.
   *       You can use the <a>DescribeApplication</a> operation to get the current application version.
   *       If the version specified
   *       is not the current version, the <code>ConcurrentModificationException</code> is returned.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the reference data source. When you add a reference data source to your
   *       application using the <a>AddApplicationReferenceDataSource</a>, Kinesis Data Analytics assigns an ID.
   *       You can use the <a>DescribeApplication</a> operation to
   *       get the reference ID. </p>
   * @public
   */
  ReferenceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationReferenceDataSourceResponse {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>The updated version ID of the application.</p>
   * @public
   */
  ApplicationVersionId?: number;
}

/**
 * @public
 */
export interface DeleteApplicationSnapshotRequest {
  /**
   * <p>The name of an existing application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The identifier for the snapshot delete.</p>
   * @public
   */
  SnapshotName: string | undefined;

  /**
   * <p>The creation timestamp of the application snapshot to delete. You can retrieve this value
   *       using
   *       or .</p>
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
   * <p>The name of an existing application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version ID. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   * @public
   */
  CurrentApplicationVersionId?: number;

  /**
   * <p>The ID of the VPC configuration to delete.</p>
   * @public
   */
  VpcConfigurationId: string | undefined;

  /**
   * <p>A value you use to implement strong concurrency for application updates. You must provide
   *       the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You get the
   *       application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   * @public
   */
  ConditionalToken?: string;
}

/**
 * @public
 */
export interface DeleteApplicationVpcConfigurationResponse {
  /**
   * <p>The ARN of the Managed Service for Apache Flink application.</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>The updated version ID of the application.</p>
   * @public
   */
  ApplicationVersionId?: number;
}

/**
 * @public
 */
export interface DescribeApplicationRequest {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Displays verbose information about a Managed Service for Apache Flink application, including the application's job plan.</p>
   * @public
   */
  IncludeAdditionalDetails?: boolean;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * <p>Provides a description of the application, such as the application's Amazon Resource Name
   *       (ARN), status, and latest version.</p>
   * @public
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationSnapshotRequest {
  /**
   * <p>The name of an existing application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The identifier of an application snapshot. You can retrieve this value using
   *       .</p>
   * @public
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
 * <p>Provides details about a snapshot of application state.</p>
 * @public
 */
export interface SnapshotDetails {
  /**
   * <p>The identifier for the application snapshot.</p>
   * @public
   */
  SnapshotName: string | undefined;

  /**
   * <p>The status of the application snapshot.</p>
   * @public
   */
  SnapshotStatus: SnapshotStatus | undefined;

  /**
   * <p>The current application version ID when the snapshot was created.</p>
   * @public
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>The timestamp of the application snapshot.</p>
   * @public
   */
  SnapshotCreationTimestamp?: Date;

  /**
   * <p>The Flink Runtime for the application snapshot.</p>
   * @public
   */
  RuntimeEnvironment?: RuntimeEnvironment;
}

/**
 * @public
 */
export interface DescribeApplicationSnapshotResponse {
  /**
   * <p>An object containing information about the application snapshot.</p>
   * @public
   */
  SnapshotDetails: SnapshotDetails | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationVersionRequest {
  /**
   * <p>The name of the application for which you want to get the version description.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The ID of the application version for which you want to get the description.</p>
   * @public
   */
  ApplicationVersionId: number | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationVersionResponse {
  /**
   * <p>Describes the application, including the application Amazon Resource Name (ARN), status,
   *       latest version, and input and output configurations.</p>
   * @public
   */
  ApplicationVersionDetail?: ApplicationDetail;
}

/**
 * <p>For a SQL-based Kinesis Data Analytics application, provides a description of an
 *       Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name
 *       of the Amazon S3 object that contains the data.</p>
 * @public
 */
export interface S3Configuration {
  /**
   * <p>The ARN of the S3 bucket that contains the data.</p>
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
   * <p>The Amazon Resource Name (ARN) of the streaming source.</p>
   * @public
   */
  ResourceARN?: string;

  /**
   * <p>The ARN of the role that is used to access the streaming source.</p>
   * @public
   */
  ServiceExecutionRole: string | undefined;

  /**
   * <p>The point at which you want Kinesis Data Analytics to start reading records from the
   *       specified streaming source for discovery purposes.</p>
   * @public
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  /**
   * <p>Specify this parameter to discover a schema from data in an Amazon S3
   *       object.</p>
   * @public
   */
  S3Configuration?: S3Configuration;

  /**
   * <p>The <a>InputProcessingConfiguration</a> to use to preprocess the records
   *       before discovering the schema of the records.</p>
   * @public
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;
}

/**
 * @public
 */
export interface DiscoverInputSchemaResponse {
  /**
   * <p>The schema inferred from the streaming source. It identifies the format of the data in the
   *       streaming source and how each data element maps to corresponding columns in the in-application
   *       stream that you can create.</p>
   * @public
   */
  InputSchema?: SourceSchema;

  /**
   * <p>An array of elements, where each element corresponds to a row in a stream record
   *       (a stream record can have more than one row).</p>
   * @public
   */
  ParsedInputRecords?: string[][];

  /**
   * <p>The stream data that was modified by the processor specified in the
   *         <code>InputProcessingConfiguration</code> parameter.</p>
   * @public
   */
  ProcessedInputRecords?: string[];

  /**
   * <p>The raw stream data that was sampled to infer the schema.</p>
   * @public
   */
  RawInputRecords?: string[];
}

/**
 * <p>Discovery failed to get a record from the streaming source because of the Kinesis
 *       Streams <code>ProvisionedThroughputExceededException</code>. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a> in the Amazon Kinesis Streams API Reference.</p>
 * @public
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
 * @public
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
 * @public
 */
export class UnableToDetectSchemaException extends __BaseException {
  readonly name: "UnableToDetectSchemaException" = "UnableToDetectSchemaException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Raw stream data that was sampled to infer the schema.</p>
   * @public
   */
  RawInputRecords?: string[];

  /**
   * <p>Stream data that was modified by the processor specified in the <code>InputProcessingConfiguration</code> parameter. </p>
   * @public
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
   * <p>The maximum number of applications to list.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>If a previous command returned a pagination token,
   *       pass it into this value to retrieve the next set of results.
   *       For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>A list of <code>ApplicationSummary</code> objects.</p>
   * @public
   */
  ApplicationSummaries: ApplicationSummary[] | undefined;

  /**
   * <p>The pagination token for the next set of results, or <code>null</code> if there are no additional results.
   *       Pass this token into a subsequent command to retrieve the next set of items
   *       For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationSnapshotsRequest {
  /**
   * <p>The name of an existing application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The maximum number of application snapshots to list.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>Use this parameter if you receive a <code>NextToken</code> response in a previous request that indicates that there is more
   *       output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should
   *       continue from. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationSnapshotsResponse {
  /**
   * <p>A collection of objects containing information about the application snapshots.</p>
   * @public
   */
  SnapshotSummaries?: SnapshotDetails[];

  /**
   * <p>The token for the next set of results, or <code>null</code> if there are no additional results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationVersionsRequest {
  /**
   * <p>The name of the application for which you want to list all versions.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The maximum number of versions to list in this invocation of the operation.</p>
   * @public
   */
  Limit?: number;

  /**
   * <p>If a previous invocation of this operation returned a pagination token, pass it into this value to retrieve the next set of results. For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListApplicationVersionsResponse {
  /**
   * <p>A list of the application versions and the associated configuration summaries. The list includes application versions that were rolled back.</p>
   *          <p>To get the complete description of a specific application version, invoke the <a>DescribeApplicationVersion</a> operation.</p>
   * @public
   */
  ApplicationVersionSummaries?: ApplicationVersionSummary[];

  /**
   * <p>The pagination token for the next set of results, or <code>null</code> if there are no additional results.
   *       To retrieve the next set of items, pass this token into a subsequent invocation of this operation. For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the Amazon Command Line Interface's Pagination Options</a>.</p>
   * @public
   */
  NextToken?: string;
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
  Tags?: Tag[];
}

/**
 * @public
 */
export interface RollbackApplicationRequest {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version ID. You can retrieve the application version ID using
   *             <a>DescribeApplication</a>.</p>
   * @public
   */
  CurrentApplicationVersionId: number | undefined;
}

/**
 * @public
 */
export interface RollbackApplicationResponse {
  /**
   * <p>Describes the application, including the application Amazon Resource Name (ARN), status,
   *       latest version, and input and output configurations.</p>
   * @public
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * <p>Describes the starting parameters for a SQL-based Kinesis Data Analytics application.</p>
 * @public
 */
export interface SqlRunConfiguration {
  /**
   * <p>The input source ID. You can get this ID by calling the <a>DescribeApplication</a> operation. </p>
   * @public
   */
  InputId: string | undefined;

  /**
   * <p>The point at which you want the application to start processing records from the streaming
   *       source. </p>
   * @public
   */
  InputStartingPositionConfiguration: InputStartingPositionConfiguration | undefined;
}

/**
 * <p>Describes the starting parameters for an Managed Service for Apache Flink application.</p>
 * @public
 */
export interface RunConfiguration {
  /**
   * <p>Describes the starting parameters for a Managed Service for Apache Flink application.</p>
   * @public
   */
  FlinkRunConfiguration?: FlinkRunConfiguration;

  /**
   * <p>Describes the starting parameters for a SQL-based Kinesis Data Analytics application
   *       application.</p>
   * @public
   */
  SqlRunConfigurations?: SqlRunConfiguration[];

  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   * @public
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
}

/**
 * @public
 */
export interface StartApplicationRequest {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Identifies the run configuration (start parameters) of a Managed Service for Apache Flink application.</p>
   * @public
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
   * <p>The name of the running application to stop.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Set to <code>true</code> to force the application to stop. If you set <code>Force</code>
   *           to <code>true</code>, Managed Service for Apache Flink stops the application without taking a snapshot.
   *       </p>
   *           <note>
   *             <p>Force-stopping your application may lead to data loss or duplication.
   *               To prevent data loss or duplicate processing of data during application restarts,
   *               we recommend you to take frequent snapshots of your application.</p>
   *          </note>
   *          <p>You can only force stop a Managed Service for Apache Flink application. You can't force stop a SQL-based Kinesis Data Analytics application.</p>
   *          <p>The application must be in the
   *           <code>STARTING</code>, <code>UPDATING</code>, <code>STOPPING</code>, <code>AUTOSCALING</code>, or
   *           <code>RUNNING</code> status. </p>
   * @public
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
   * <p>The ARN of the Managed Service for Apache Flink application from which to remove the tags.</p>
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
 * <p>Describes the updates to the starting parameters for a Managed Service for Apache Flink application.</p>
 * @public
 */
export interface RunConfigurationUpdate {
  /**
   * <p>Describes the starting parameters for a Managed Service for Apache Flink application.</p>
   * @public
   */
  FlinkRunConfiguration?: FlinkRunConfiguration;

  /**
   * <p>Describes updates to the restore behavior of a restarting application.</p>
   * @public
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;
}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * <p>The name of the application to update.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version ID. You must provide the
   *         <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>.You can
   *       retrieve the application version ID using <a>DescribeApplication</a>. For better
   *       concurrency support, use the <code>ConditionalToken</code> parameter instead of
   *         <code>CurrentApplicationVersionId</code>.</p>
   * @public
   */
  CurrentApplicationVersionId?: number;

  /**
   * <p>Describes application configuration updates.</p>
   * @public
   */
  ApplicationConfigurationUpdate?: ApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to the service execution role.</p>
   * @public
   */
  ServiceExecutionRoleUpdate?: string;

  /**
   * <p>Describes updates to the application's starting parameters.</p>
   * @public
   */
  RunConfigurationUpdate?: RunConfigurationUpdate;

  /**
   * <p>Describes application Amazon CloudWatch logging option updates. You can only update
   *       existing CloudWatch logging options with this action. To add a new CloudWatch logging option,
   *       use <a>AddApplicationCloudWatchLoggingOption</a>.</p>
   * @public
   */
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];

  /**
   * <p>A value you use to implement strong concurrency for application updates. You must
   *       provide the <code>CurrentApplicationVersionId</code> or the <code>ConditionalToken</code>. You
   *       get the application's current <code>ConditionalToken</code> using <a>DescribeApplication</a>. For better concurrency support, use the
   *         <code>ConditionalToken</code> parameter instead of
   *       <code>CurrentApplicationVersionId</code>.</p>
   * @public
   */
  ConditionalToken?: string;

  /**
   * <p>Updates the Managed Service for Apache Flink runtime environment used to run your code. To avoid issues you must:</p>
   *         <ul>
   *             <li>
   *                <p>Ensure your new jar and dependencies are compatible with the new runtime selected.</p>
   *             </li>
   *             <li>
   *                <p>Ensure your new code's state is compatible with the snapshot from which your application will start</p>
   *             </li>
   *          </ul>
   * @public
   */
  RuntimeEnvironmentUpdate?: RuntimeEnvironment;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {
  /**
   * <p>Describes application updates.</p>
   * @public
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationMaintenanceConfigurationRequest {
  /**
   * <p>The name of the application for which you want to update the maintenance configuration.</p>
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * <p>Describes the application maintenance configuration update.</p>
   * @public
   */
  ApplicationMaintenanceConfigurationUpdate: ApplicationMaintenanceConfigurationUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationMaintenanceConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  ApplicationARN?: string;

  /**
   * <p>The application maintenance configuration description after the update.</p>
   * @public
   */
  ApplicationMaintenanceConfigurationDescription?: ApplicationMaintenanceConfigurationDescription;
}
