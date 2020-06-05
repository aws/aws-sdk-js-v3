import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AddApplicationCloudWatchLoggingOptionRequest {
  __type?: "AddApplicationCloudWatchLoggingOptionRequest";
  /**
   * <p>The Kinesis Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Provides the CloudWatch log stream Amazon Resource Name (ARN) and the IAM role ARN.
   *             Note: To write application messages to CloudWatch, the IAM role that is used must have
   *             the <code>PutLogEvents</code> policy action enabled.</p>
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption | undefined;

  /**
   * <p>The version ID of the Kinesis Analytics application.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace AddApplicationCloudWatchLoggingOptionRequest {
  export const filterSensitiveLog = (
    obj: AddApplicationCloudWatchLoggingOptionRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AddApplicationCloudWatchLoggingOptionRequest =>
    __isa(o, "AddApplicationCloudWatchLoggingOptionRequest");
}

export interface AddApplicationCloudWatchLoggingOptionResponse {
  __type?: "AddApplicationCloudWatchLoggingOptionResponse";
}

export namespace AddApplicationCloudWatchLoggingOptionResponse {
  export const filterSensitiveLog = (
    obj: AddApplicationCloudWatchLoggingOptionResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AddApplicationCloudWatchLoggingOptionResponse =>
    __isa(o, "AddApplicationCloudWatchLoggingOptionResponse");
}

export interface AddApplicationInputProcessingConfigurationRequest {
  __type?: "AddApplicationInputProcessingConfigurationRequest";
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
  export const filterSensitiveLog = (
    obj: AddApplicationInputProcessingConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AddApplicationInputProcessingConfigurationRequest =>
    __isa(o, "AddApplicationInputProcessingConfigurationRequest");
}

export interface AddApplicationInputProcessingConfigurationResponse {
  __type?: "AddApplicationInputProcessingConfigurationResponse";
}

export namespace AddApplicationInputProcessingConfigurationResponse {
  export const filterSensitiveLog = (
    obj: AddApplicationInputProcessingConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is AddApplicationInputProcessingConfigurationResponse =>
    __isa(o, "AddApplicationInputProcessingConfigurationResponse");
}

/**
 * <p></p>
 */
export interface AddApplicationInputRequest {
  __type?: "AddApplicationInputRequest";
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
  export const filterSensitiveLog = (obj: AddApplicationInputRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddApplicationInputRequest =>
    __isa(o, "AddApplicationInputRequest");
}

/**
 * <p></p>
 */
export interface AddApplicationInputResponse {
  __type?: "AddApplicationInputResponse";
}

export namespace AddApplicationInputResponse {
  export const filterSensitiveLog = (
    obj: AddApplicationInputResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddApplicationInputResponse =>
    __isa(o, "AddApplicationInputResponse");
}

/**
 * <p></p>
 */
export interface AddApplicationOutputRequest {
  __type?: "AddApplicationOutputRequest";
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
  export const filterSensitiveLog = (
    obj: AddApplicationOutputRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddApplicationOutputRequest =>
    __isa(o, "AddApplicationOutputRequest");
}

/**
 * <p></p>
 */
export interface AddApplicationOutputResponse {
  __type?: "AddApplicationOutputResponse";
}

export namespace AddApplicationOutputResponse {
  export const filterSensitiveLog = (
    obj: AddApplicationOutputResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddApplicationOutputResponse =>
    __isa(o, "AddApplicationOutputResponse");
}

/**
 * <p></p>
 */
export interface AddApplicationReferenceDataSourceRequest {
  __type?: "AddApplicationReferenceDataSourceRequest";
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
  export const filterSensitiveLog = (
    obj: AddApplicationReferenceDataSourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddApplicationReferenceDataSourceRequest =>
    __isa(o, "AddApplicationReferenceDataSourceRequest");
}

/**
 * <p></p>
 */
export interface AddApplicationReferenceDataSourceResponse {
  __type?: "AddApplicationReferenceDataSourceResponse";
}

export namespace AddApplicationReferenceDataSourceResponse {
  export const filterSensitiveLog = (
    obj: AddApplicationReferenceDataSourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddApplicationReferenceDataSourceResponse =>
    __isa(o, "AddApplicationReferenceDataSourceResponse");
}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>
 */
export interface ApplicationDetail {
  __type?: "ApplicationDetail";
  /**
   * <p>ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * <p>Returns the application code that you provided to perform data analysis on any of the in-application streams in your application.</p>
   */
  ApplicationCode?: string;

  /**
   * <p>Description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>Name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;

  /**
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>Describes the CloudWatch log streams that are configured to receive application
   *             messages. For more information about using CloudWatch log streams with Amazon Kinesis
   *             Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon
   *                 CloudWatch Logs</a>. </p>
   */
  CloudWatchLoggingOptionDescriptions?: CloudWatchLoggingOptionDescription[];

  /**
   * <p>Time stamp when the application version was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>Describes the application input configuration.
   *             For more information,
   *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
   *
   *         </p>
   */
  InputDescriptions?: InputDescription[];

  /**
   * <p>Time stamp when the application was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

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
}

export namespace ApplicationDetail {
  export const filterSensitiveLog = (obj: ApplicationDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationDetail =>
    __isa(o, "ApplicationDetail");
}

export enum ApplicationStatus {
  DELETING = "DELETING",
  READY = "READY",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPING = "STOPPING",
  UPDATING = "UPDATING"
}

/**
 * <note>
 *             <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p>
 *          </note>
 *         <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
 */
export interface ApplicationSummary {
  __type?: "ApplicationSummary";
  /**
   * <p>ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * <p>Name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;
}

export namespace ApplicationSummary {
  export const filterSensitiveLog = (obj: ApplicationSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationSummary =>
    __isa(o, "ApplicationSummary");
}

/**
 * <p>Describes updates to apply to an existing Amazon Kinesis Analytics application.</p>
 */
export interface ApplicationUpdate {
  __type?: "ApplicationUpdate";
  /**
   * <p>Describes application code updates.</p>
   */
  ApplicationCodeUpdate?: string;

  /**
   * <p>Describes application CloudWatch logging option updates.</p>
   */
  CloudWatchLoggingOptionUpdates?: CloudWatchLoggingOptionUpdate[];

  /**
   * <p>Describes application input configuration updates.</p>
   */
  InputUpdates?: InputUpdate[];

  /**
   * <p>Describes application output configuration updates.</p>
   */
  OutputUpdates?: OutputUpdate[];

  /**
   * <p>Describes application reference data source updates.</p>
   */
  ReferenceDataSourceUpdates?: ReferenceDataSourceUpdate[];
}

export namespace ApplicationUpdate {
  export const filterSensitiveLog = (obj: ApplicationUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationUpdate =>
    __isa(o, "ApplicationUpdate");
}

/**
 * <p>Provides a description of CloudWatch logging options, including the log stream
 *             Amazon Resource Name (ARN) and the role ARN.</p>
 */
export interface CloudWatchLoggingOption {
  __type?: "CloudWatchLoggingOption";
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
  export const filterSensitiveLog = (obj: CloudWatchLoggingOption): any => ({
    ...obj
  });
  export const isa = (o: any): o is CloudWatchLoggingOption =>
    __isa(o, "CloudWatchLoggingOption");
}

/**
 * <p>Description of the CloudWatch logging option.</p>
 */
export interface CloudWatchLoggingOptionDescription {
  __type?: "CloudWatchLoggingOptionDescription";
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
  export const filterSensitiveLog = (
    obj: CloudWatchLoggingOptionDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CloudWatchLoggingOptionDescription =>
    __isa(o, "CloudWatchLoggingOptionDescription");
}

/**
 * <p>Describes CloudWatch logging option updates.</p>
 */
export interface CloudWatchLoggingOptionUpdate {
  __type?: "CloudWatchLoggingOptionUpdate";
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
  export const filterSensitiveLog = (
    obj: CloudWatchLoggingOptionUpdate
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CloudWatchLoggingOptionUpdate =>
    __isa(o, "CloudWatchLoggingOptionUpdate");
}

/**
 * <p>User-provided application code (query) is invalid. This can be a simple syntax error.</p>
 */
export interface CodeValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "CodeValidationException";
  $fault: "client";
  /**
   * <p>Test</p>
   */
  message?: string;
}

export namespace CodeValidationException {
  export const filterSensitiveLog = (obj: CodeValidationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is CodeValidationException =>
    __isa(o, "CodeValidationException");
}

/**
 * <p>Exception thrown as a result of concurrent modification to an application. For example, two individuals attempting to edit the same application at the same time.</p>
 */
export interface ConcurrentModificationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (
    obj: ConcurrentModificationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConcurrentModificationException =>
    __isa(o, "ConcurrentModificationException");
}

/**
 * <p>TBD</p>
 */
export interface CreateApplicationRequest {
  __type?: "CreateApplicationRequest";
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
   * <p>Summary description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>Name of your Amazon Kinesis Analytics application (for example, <code>sample-app</code>).</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Use this parameter to configure a CloudWatch log stream to monitor application
   *             configuration errors. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon
   *                 CloudWatch Logs</a>.</p>
   */
  CloudWatchLoggingOptions?: CloudWatchLoggingOption[];

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
   * <p>A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
   *         For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateApplicationRequest {
  export const filterSensitiveLog = (obj: CreateApplicationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateApplicationRequest =>
    __isa(o, "CreateApplicationRequest");
}

/**
 * <p>TBD</p>
 */
export interface CreateApplicationResponse {
  __type?: "CreateApplicationResponse";
  /**
   * <p>In response to your <code>CreateApplication</code> request, Amazon Kinesis Analytics returns a
   *             response with a summary of the application it created, including the application Amazon Resource Name (ARN),
   *             name, and status.</p>
   */
  ApplicationSummary: ApplicationSummary | undefined;
}

export namespace CreateApplicationResponse {
  export const filterSensitiveLog = (obj: CreateApplicationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateApplicationResponse =>
    __isa(o, "CreateApplicationResponse");
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
  __type?: "CSVMappingParameters";
  /**
   * <p>Column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.</p>
   */
  RecordColumnDelimiter: string | undefined;

  /**
   * <p>Row delimiter. For example, in a CSV format, <i>'\n'</i> is the typical row delimiter.</p>
   */
  RecordRowDelimiter: string | undefined;
}

export namespace CSVMappingParameters {
  export const filterSensitiveLog = (obj: CSVMappingParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is CSVMappingParameters =>
    __isa(o, "CSVMappingParameters");
}

export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  __type?: "DeleteApplicationCloudWatchLoggingOptionRequest";
  /**
   * <p>The Kinesis Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The <code>CloudWatchLoggingOptionId</code> of the CloudWatch logging option to
   *             delete. You can get the <code>CloudWatchLoggingOptionId</code> by using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation. </p>
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * <p>The version ID of the Kinesis Analytics application.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace DeleteApplicationCloudWatchLoggingOptionRequest {
  export const filterSensitiveLog = (
    obj: DeleteApplicationCloudWatchLoggingOptionRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeleteApplicationCloudWatchLoggingOptionRequest =>
    __isa(o, "DeleteApplicationCloudWatchLoggingOptionRequest");
}

export interface DeleteApplicationCloudWatchLoggingOptionResponse {
  __type?: "DeleteApplicationCloudWatchLoggingOptionResponse";
}

export namespace DeleteApplicationCloudWatchLoggingOptionResponse {
  export const filterSensitiveLog = (
    obj: DeleteApplicationCloudWatchLoggingOptionResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeleteApplicationCloudWatchLoggingOptionResponse =>
    __isa(o, "DeleteApplicationCloudWatchLoggingOptionResponse");
}

export interface DeleteApplicationInputProcessingConfigurationRequest {
  __type?: "DeleteApplicationInputProcessingConfigurationRequest";
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
  export const filterSensitiveLog = (
    obj: DeleteApplicationInputProcessingConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeleteApplicationInputProcessingConfigurationRequest =>
    __isa(o, "DeleteApplicationInputProcessingConfigurationRequest");
}

export interface DeleteApplicationInputProcessingConfigurationResponse {
  __type?: "DeleteApplicationInputProcessingConfigurationResponse";
}

export namespace DeleteApplicationInputProcessingConfigurationResponse {
  export const filterSensitiveLog = (
    obj: DeleteApplicationInputProcessingConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeleteApplicationInputProcessingConfigurationResponse =>
    __isa(o, "DeleteApplicationInputProcessingConfigurationResponse");
}

/**
 * <p></p>
 */
export interface DeleteApplicationOutputRequest {
  __type?: "DeleteApplicationOutputRequest";
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
  export const filterSensitiveLog = (
    obj: DeleteApplicationOutputRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteApplicationOutputRequest =>
    __isa(o, "DeleteApplicationOutputRequest");
}

/**
 * <p></p>
 */
export interface DeleteApplicationOutputResponse {
  __type?: "DeleteApplicationOutputResponse";
}

export namespace DeleteApplicationOutputResponse {
  export const filterSensitiveLog = (
    obj: DeleteApplicationOutputResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteApplicationOutputResponse =>
    __isa(o, "DeleteApplicationOutputResponse");
}

export interface DeleteApplicationReferenceDataSourceRequest {
  __type?: "DeleteApplicationReferenceDataSourceRequest";
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
  export const filterSensitiveLog = (
    obj: DeleteApplicationReferenceDataSourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeleteApplicationReferenceDataSourceRequest =>
    __isa(o, "DeleteApplicationReferenceDataSourceRequest");
}

export interface DeleteApplicationReferenceDataSourceResponse {
  __type?: "DeleteApplicationReferenceDataSourceResponse";
}

export namespace DeleteApplicationReferenceDataSourceResponse {
  export const filterSensitiveLog = (
    obj: DeleteApplicationReferenceDataSourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DeleteApplicationReferenceDataSourceResponse =>
    __isa(o, "DeleteApplicationReferenceDataSourceResponse");
}

/**
 * <p></p>
 */
export interface DeleteApplicationRequest {
  __type?: "DeleteApplicationRequest";
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
  export const filterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteApplicationRequest =>
    __isa(o, "DeleteApplicationRequest");
}

/**
 * <p></p>
 */
export interface DeleteApplicationResponse {
  __type?: "DeleteApplicationResponse";
}

export namespace DeleteApplicationResponse {
  export const filterSensitiveLog = (obj: DeleteApplicationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteApplicationResponse =>
    __isa(o, "DeleteApplicationResponse");
}

/**
 * <p></p>
 */
export interface DescribeApplicationRequest {
  __type?: "DescribeApplicationRequest";
  /**
   * <p>Name of the application.</p>
   */
  ApplicationName: string | undefined;
}

export namespace DescribeApplicationRequest {
  export const filterSensitiveLog = (obj: DescribeApplicationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeApplicationRequest =>
    __isa(o, "DescribeApplicationRequest");
}

/**
 * <p></p>
 */
export interface DescribeApplicationResponse {
  __type?: "DescribeApplicationResponse";
  /**
   * <p>Provides a description of the application, such as the application Amazon Resource Name (ARN), status, latest version, and input and output configuration details.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

export namespace DescribeApplicationResponse {
  export const filterSensitiveLog = (
    obj: DescribeApplicationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeApplicationResponse =>
    __isa(o, "DescribeApplicationResponse");
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
  __type?: "DestinationSchema";
  /**
   * <p>Specifies the format of the records on the output stream.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;
}

export namespace DestinationSchema {
  export const filterSensitiveLog = (obj: DestinationSchema): any => ({
    ...obj
  });
  export const isa = (o: any): o is DestinationSchema =>
    __isa(o, "DestinationSchema");
}

export interface DiscoverInputSchemaRequest {
  __type?: "DiscoverInputSchemaRequest";
  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> to use to preprocess the records before discovering the schema of the records.</p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * <p>Point at which you want Amazon Kinesis Analytics to start reading records from the specified streaming source discovery purposes.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  /**
   * <p>Amazon Resource Name (ARN) of the streaming source.</p>
   */
  ResourceARN?: string;

  /**
   * <p>ARN of the IAM role that Amazon Kinesis Analytics can assume to access the stream on your behalf.</p>
   */
  RoleARN?: string;

  /**
   * <p>Specify this parameter to discover a schema from data in an Amazon S3
   *             object.</p>
   */
  S3Configuration?: S3Configuration;
}

export namespace DiscoverInputSchemaRequest {
  export const filterSensitiveLog = (obj: DiscoverInputSchemaRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DiscoverInputSchemaRequest =>
    __isa(o, "DiscoverInputSchemaRequest");
}

/**
 * <p></p>
 */
export interface DiscoverInputSchemaResponse {
  __type?: "DiscoverInputSchemaResponse";
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
  export const filterSensitiveLog = (
    obj: DiscoverInputSchemaResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DiscoverInputSchemaResponse =>
    __isa(o, "DiscoverInputSchemaResponse");
}

/**
 * <p>When you configure the application input, you specify the streaming source,  the
 *             in-application stream name that is created, and the mapping between the two.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p>
 */
export interface Input {
  __type?: "Input";
  /**
   * <p>Describes the number of in-application streams to create. </p>
   *          <p>Data from your source is routed to these in-application input streams.</p>
   *         <p>    (see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.</p>
   */
  InputParallelism?: InputParallelism;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a> for the input. An input
   *             processor transforms records as they are received from the stream, before the
   *             application's SQL code executes. Currently, the only input processing configuration
   *             available is <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.</p>
   *         <p>Also used to describe the format of the reference data source.</p>
   */
  InputSchema: SourceSchema | undefined;

  /**
   * <p>If the streaming source is an Amazon Kinesis Firehose delivery stream, identifies
   *             the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics to
   *             access the stream on your behalf.</p>
   *         <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   */
  KinesisFirehoseInput?: KinesisFirehoseInput;

  /**
   * <p>If the streaming source is an Amazon Kinesis stream,
   *             identifies the stream's Amazon Resource Name (ARN) and an IAM role
   *             that enables Amazon Kinesis Analytics to access the stream on your behalf.</p>
   *         <p>Note: Either <code>KinesisStreamsInput</code> or <code>KinesisFirehoseInput</code> is required.</p>
   */
  KinesisStreamsInput?: KinesisStreamsInput;

  /**
   * <p>Name prefix to use when creating an in-application stream. Suppose that you specify
   *             a prefix "MyInApplicationStream." Amazon Kinesis Analytics then creates one or more (as
   *             per the <code>InputParallelism</code> count you specified) in-application streams with
   *             names "MyInApplicationStream_001," "MyInApplicationStream_002," and so on. </p>
   */
  NamePrefix: string | undefined;
}

export namespace Input {
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj
  });
  export const isa = (o: any): o is Input => __isa(o, "Input");
}

/**
 * <p>When you start your application,
 *             you provide this configuration, which identifies the input source and the point
 *             in the input source at which you want the application to start processing records.</p>
 */
export interface InputConfiguration {
  __type?: "InputConfiguration";
  /**
   * <p>Input source ID. You can get this ID by calling
   *             the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation.</p>
   */
  Id: string | undefined;

  /**
   * <p>Point at which you want the application to start processing
   *             records from the streaming source.</p>
   */
  InputStartingPositionConfiguration:
    | InputStartingPositionConfiguration
    | undefined;
}

export namespace InputConfiguration {
  export const filterSensitiveLog = (obj: InputConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputConfiguration =>
    __isa(o, "InputConfiguration");
}

/**
 * <p>Describes the application input configuration.
 *             For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *         </p>
 */
export interface InputDescription {
  __type?: "InputDescription";
  /**
   * <p>Returns the in-application stream names that are mapped to the
   *             stream source.</p>
   */
  InAppStreamNames?: string[];

  /**
   * <p>Input ID associated with the application input.
   *             This is the ID that Amazon Kinesis Analytics assigns to each
   *             input configuration you add to your application. </p>
   */
  InputId?: string;

  /**
   * <p>Describes the configured parallelism (number of in-application streams
   *             mapped to the streaming source).</p>
   */
  InputParallelism?: InputParallelism;

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run.</p>
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding
   *             columns in the in-application stream that is being created. </p>
   */
  InputSchema?: SourceSchema;

  /**
   * <p>Point at which the application is configured to read from the input stream.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  /**
   * <p>If an Amazon Kinesis Firehose delivery stream is configured as a streaming source,
   *             provides the delivery stream's ARN and an IAM role that enables Amazon Kinesis Analytics
   *             to access the stream on your behalf.</p>
   */
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

  /**
   * <p>If an Amazon Kinesis stream is configured as streaming source, provides Amazon
   *             Kinesis stream's Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis
   *             Analytics to access the stream on your behalf.</p>
   */
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription;

  /**
   * <p>In-application name prefix.</p>
   */
  NamePrefix?: string;
}

export namespace InputDescription {
  export const filterSensitiveLog = (obj: InputDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputDescription =>
    __isa(o, "InputDescription");
}

/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that
 *             is used to preprocess records in the stream, and the ARN of the IAM role that is used to
 *             access the AWS Lambda function. </p>
 */
export interface InputLambdaProcessor {
  __type?: "InputLambdaProcessor";
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
  export const filterSensitiveLog = (obj: InputLambdaProcessor): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputLambdaProcessor =>
    __isa(o, "InputLambdaProcessor");
}

/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that
 *             is used to preprocess records in the stream, and the ARN of the IAM role that is  used
 *             to access the AWS Lambda expression.</p>
 */
export interface InputLambdaProcessorDescription {
  __type?: "InputLambdaProcessorDescription";
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
  export const filterSensitiveLog = (
    obj: InputLambdaProcessorDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputLambdaProcessorDescription =>
    __isa(o, "InputLambdaProcessorDescription");
}

/**
 * <p>Represents an update to the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records in the stream.</p>
 */
export interface InputLambdaProcessorUpdate {
  __type?: "InputLambdaProcessorUpdate";
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
  export const filterSensitiveLog = (obj: InputLambdaProcessorUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputLambdaProcessorUpdate =>
    __isa(o, "InputLambdaProcessorUpdate");
}

/**
 * <p>Describes the number of in-application streams to create for a given
 *             streaming source. For information about parallelism,
 *             see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>.
 *         </p>
 */
export interface InputParallelism {
  __type?: "InputParallelism";
  /**
   * <p>Number of in-application streams to create.
   *             For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html">Limits</a>.
   *         </p>
   */
  Count?: number;
}

export namespace InputParallelism {
  export const filterSensitiveLog = (obj: InputParallelism): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputParallelism =>
    __isa(o, "InputParallelism");
}

/**
 * <p>Provides updates to the parallelism count.</p>
 */
export interface InputParallelismUpdate {
  __type?: "InputParallelismUpdate";
  /**
   * <p>Number of in-application streams to create for the specified
   *             streaming source.</p>
   */
  CountUpdate?: number;
}

export namespace InputParallelismUpdate {
  export const filterSensitiveLog = (obj: InputParallelismUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputParallelismUpdate =>
    __isa(o, "InputParallelismUpdate");
}

/**
 * <p>Provides a description of a processor that is used to preprocess the records in the
 *             stream before being processed by your application code. Currently, the only input
 *             processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS
 *                 Lambda</a>.</p>
 */
export interface InputProcessingConfiguration {
  __type?: "InputProcessingConfiguration";
  /**
   * <p>The <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a> that is used to preprocess the records
   *             in the stream before being processed by your application code.</p>
   */
  InputLambdaProcessor: InputLambdaProcessor | undefined;
}

export namespace InputProcessingConfiguration {
  export const filterSensitiveLog = (
    obj: InputProcessingConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputProcessingConfiguration =>
    __isa(o, "InputProcessingConfiguration");
}

/**
 * <p>Provides configuration information about an input processor. Currently, the only input processor available is
 *             <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.</p>
 */
export interface InputProcessingConfigurationDescription {
  __type?: "InputProcessingConfigurationDescription";
  /**
   * <p>Provides configuration information about the associated <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessorDescription.html">InputLambdaProcessorDescription</a>.</p>
   */
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}

export namespace InputProcessingConfigurationDescription {
  export const filterSensitiveLog = (
    obj: InputProcessingConfigurationDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputProcessingConfigurationDescription =>
    __isa(o, "InputProcessingConfigurationDescription");
}

/**
 * <p>Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>. </p>
 */
export interface InputProcessingConfigurationUpdate {
  __type?: "InputProcessingConfigurationUpdate";
  /**
   * <p>Provides update information for an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputLambdaProcessor.html">InputLambdaProcessor</a>.</p>
   */
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate | undefined;
}

export namespace InputProcessingConfigurationUpdate {
  export const filterSensitiveLog = (
    obj: InputProcessingConfigurationUpdate
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputProcessingConfigurationUpdate =>
    __isa(o, "InputProcessingConfigurationUpdate");
}

/**
 * <p>Describes updates for the application's input schema.</p>
 */
export interface InputSchemaUpdate {
  __type?: "InputSchemaUpdate";
  /**
   * <p>A list of <code>RecordColumn</code> objects. Each object describes the mapping
   *             of the streaming source element to the corresponding column in the in-application stream. </p>
   */
  RecordColumnUpdates?: RecordColumn[];

  /**
   * <p>Specifies the encoding of the records in the streaming source. For example, UTF-8.</p>
   */
  RecordEncodingUpdate?: string;

  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormatUpdate?: RecordFormat;
}

export namespace InputSchemaUpdate {
  export const filterSensitiveLog = (obj: InputSchemaUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputSchemaUpdate =>
    __isa(o, "InputSchemaUpdate");
}

export enum InputStartingPosition {
  LAST_STOPPED_POINT = "LAST_STOPPED_POINT",
  NOW = "NOW",
  TRIM_HORIZON = "TRIM_HORIZON"
}

/**
 * <p>Describes the point at which the application reads from
 *             the streaming source.</p>
 */
export interface InputStartingPositionConfiguration {
  __type?: "InputStartingPositionConfiguration";
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
  export const filterSensitiveLog = (
    obj: InputStartingPositionConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputStartingPositionConfiguration =>
    __isa(o, "InputStartingPositionConfiguration");
}

/**
 * <p>Describes updates to a specific input configuration (identified by the
 *             <code>InputId</code> of an application). </p>
 */
export interface InputUpdate {
  __type?: "InputUpdate";
  /**
   * <p>Input ID of the application input to be updated.</p>
   */
  InputId: string | undefined;

  /**
   * <p>Describes the parallelism updates (the number in-application
   *             streams Amazon Kinesis Analytics creates for the specific streaming source).</p>
   */
  InputParallelismUpdate?: InputParallelismUpdate;

  /**
   * <p>Describes updates for an input processing configuration.</p>
   */
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

  /**
   * <p>Describes the data format on the streaming source, and
   *             how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   */
  InputSchemaUpdate?: InputSchemaUpdate;

  /**
   * <p>If an Amazon Kinesis Firehose delivery stream is the streaming source to be
   *             updated, provides an updated stream ARN and IAM role ARN.</p>
   */
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

  /**
   * <p>If an Amazon Kinesis stream is the streaming source to be updated, provides an
   *             updated stream Amazon Resource Name (ARN) and IAM role ARN.</p>
   */
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

  /**
   * <p>Name prefix for in-application streams that Amazon Kinesis Analytics creates
   *             for the specific streaming source.</p>
   */
  NamePrefixUpdate?: string;
}

export namespace InputUpdate {
  export const filterSensitiveLog = (obj: InputUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is InputUpdate => __isa(o, "InputUpdate");
}

/**
 * <p>User-provided application configuration is not valid.</p>
 */
export interface InvalidApplicationConfigurationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidApplicationConfigurationException";
  $fault: "client";
  /**
   * <p>test</p>
   */
  message?: string;
}

export namespace InvalidApplicationConfigurationException {
  export const filterSensitiveLog = (
    obj: InvalidApplicationConfigurationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidApplicationConfigurationException =>
    __isa(o, "InvalidApplicationConfigurationException");
}

/**
 * <p>Specified input parameter value is invalid.</p>
 */
export interface InvalidArgumentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidArgumentException {
  export const filterSensitiveLog = (obj: InvalidArgumentException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidArgumentException =>
    __isa(o, "InvalidArgumentException");
}

/**
 * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
 */
export interface JSONMappingParameters {
  __type?: "JSONMappingParameters";
  /**
   * <p>Path to the top-level parent that contains the records.</p>
   */
  RecordRowPath: string | undefined;
}

export namespace JSONMappingParameters {
  export const filterSensitiveLog = (obj: JSONMappingParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is JSONMappingParameters =>
    __isa(o, "JSONMappingParameters");
}

/**
 * <p> Identifies an Amazon Kinesis Firehose delivery stream as the streaming source. You
 *             provide the delivery stream's Amazon Resource Name (ARN) and an IAM role ARN that
 *             enables Amazon Kinesis Analytics to access the stream on your behalf.</p>
 */
export interface KinesisFirehoseInput {
  __type?: "KinesisFirehoseInput";
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
  export const filterSensitiveLog = (obj: KinesisFirehoseInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisFirehoseInput =>
    __isa(o, "KinesisFirehoseInput");
}

/**
 * <p>
 *             Describes the Amazon Kinesis Firehose delivery stream that is configured as the streaming source
 *             in the application input configuration.
 *         </p>
 */
export interface KinesisFirehoseInputDescription {
  __type?: "KinesisFirehoseInputDescription";
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
  export const filterSensitiveLog = (
    obj: KinesisFirehoseInputDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisFirehoseInputDescription =>
    __isa(o, "KinesisFirehoseInputDescription");
}

/**
 * <p>When updating application input configuration, provides information about an
 *             Amazon Kinesis Firehose delivery stream as the streaming source.</p>
 */
export interface KinesisFirehoseInputUpdate {
  __type?: "KinesisFirehoseInputUpdate";
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
  export const filterSensitiveLog = (obj: KinesisFirehoseInputUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisFirehoseInputUpdate =>
    __isa(o, "KinesisFirehoseInputUpdate");
}

/**
 * <p>When configuring application output,
 *             identifies an Amazon Kinesis Firehose delivery stream as the destination.
 *             You provide the stream Amazon Resource Name (ARN) and an IAM role
 *             that enables Amazon Kinesis Analytics to write to the stream on your behalf.</p>
 */
export interface KinesisFirehoseOutput {
  __type?: "KinesisFirehoseOutput";
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
  export const filterSensitiveLog = (obj: KinesisFirehoseOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisFirehoseOutput =>
    __isa(o, "KinesisFirehoseOutput");
}

/**
 * <p>
 *             For an application output, describes
 *             the Amazon Kinesis Firehose delivery stream configured as its destination.
 *         </p>
 */
export interface KinesisFirehoseOutputDescription {
  __type?: "KinesisFirehoseOutputDescription";
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
  export const filterSensitiveLog = (
    obj: KinesisFirehoseOutputDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisFirehoseOutputDescription =>
    __isa(o, "KinesisFirehoseOutputDescription");
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
  __type?: "KinesisFirehoseOutputUpdate";
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
  export const filterSensitiveLog = (
    obj: KinesisFirehoseOutputUpdate
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisFirehoseOutputUpdate =>
    __isa(o, "KinesisFirehoseOutputUpdate");
}

/**
 * <p> Identifies an Amazon Kinesis stream as the streaming source. You provide the
 *             stream's Amazon Resource Name (ARN) and an IAM role ARN that enables Amazon Kinesis
 *             Analytics to access the stream on your behalf.</p>
 */
export interface KinesisStreamsInput {
  __type?: "KinesisStreamsInput";
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
  export const filterSensitiveLog = (obj: KinesisStreamsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisStreamsInput =>
    __isa(o, "KinesisStreamsInput");
}

/**
 * <p>
 *             Describes the Amazon Kinesis stream that is configured as the streaming source
 *             in the application input configuration.
 *           </p>
 */
export interface KinesisStreamsInputDescription {
  __type?: "KinesisStreamsInputDescription";
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
  export const filterSensitiveLog = (
    obj: KinesisStreamsInputDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisStreamsInputDescription =>
    __isa(o, "KinesisStreamsInputDescription");
}

/**
 * <p>When updating application input configuration, provides information about an
 *             Amazon Kinesis stream as the streaming source.</p>
 */
export interface KinesisStreamsInputUpdate {
  __type?: "KinesisStreamsInputUpdate";
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
  export const filterSensitiveLog = (obj: KinesisStreamsInputUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisStreamsInputUpdate =>
    __isa(o, "KinesisStreamsInputUpdate");
}

/**
 * <p>When configuring application output, identifies an Amazon Kinesis stream as the
 *             destination. You provide the stream Amazon Resource Name (ARN) and also an IAM role ARN
 *             that Amazon Kinesis Analytics can use to write to the stream on your behalf.</p>
 */
export interface KinesisStreamsOutput {
  __type?: "KinesisStreamsOutput";
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
  export const filterSensitiveLog = (obj: KinesisStreamsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisStreamsOutput =>
    __isa(o, "KinesisStreamsOutput");
}

/**
 * <p>
 *             For an application output, describes
 *             the Amazon Kinesis stream configured as its destination.
 *         </p>
 */
export interface KinesisStreamsOutputDescription {
  __type?: "KinesisStreamsOutputDescription";
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
  export const filterSensitiveLog = (
    obj: KinesisStreamsOutputDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisStreamsOutputDescription =>
    __isa(o, "KinesisStreamsOutputDescription");
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
  __type?: "KinesisStreamsOutputUpdate";
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
  export const filterSensitiveLog = (obj: KinesisStreamsOutputUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisStreamsOutputUpdate =>
    __isa(o, "KinesisStreamsOutputUpdate");
}

/**
 * <p>When configuring application output, identifies an AWS Lambda function as the
 *             destination. You provide the function Amazon Resource Name (ARN) and also an IAM role
 *             ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. </p>
 */
export interface LambdaOutput {
  __type?: "LambdaOutput";
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
  export const filterSensitiveLog = (obj: LambdaOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaOutput => __isa(o, "LambdaOutput");
}

/**
 * <p>For an application output, describes the AWS Lambda function configured as its
 *             destination. </p>
 */
export interface LambdaOutputDescription {
  __type?: "LambdaOutputDescription";
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
  export const filterSensitiveLog = (obj: LambdaOutputDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaOutputDescription =>
    __isa(o, "LambdaOutputDescription");
}

/**
 * <p>When updating an output configuration using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a>
 *             operation, provides information about an AWS Lambda function configured as the
 *             destination.</p>
 */
export interface LambdaOutputUpdate {
  __type?: "LambdaOutputUpdate";
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
  export const filterSensitiveLog = (obj: LambdaOutputUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is LambdaOutputUpdate =>
    __isa(o, "LambdaOutputUpdate");
}

/**
 * <p>Exceeded the number of applications allowed.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

/**
 * <p></p>
 */
export interface ListApplicationsRequest {
  __type?: "ListApplicationsRequest";
  /**
   * <p>Name of the application to start the list with. When using pagination to retrieve the list, you don't need to specify this parameter in the first request. However, in subsequent requests, you add the last application name from the previous response to get the next page of applications.</p>
   */
  ExclusiveStartApplicationName?: string;

  /**
   * <p>Maximum number of applications to list.</p>
   */
  Limit?: number;
}

export namespace ListApplicationsRequest {
  export const filterSensitiveLog = (obj: ListApplicationsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListApplicationsRequest =>
    __isa(o, "ListApplicationsRequest");
}

/**
 * <p></p>
 */
export interface ListApplicationsResponse {
  __type?: "ListApplicationsResponse";
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
  export const filterSensitiveLog = (obj: ListApplicationsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListApplicationsResponse =>
    __isa(o, "ListApplicationsResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the application for which to retrieve tags.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The key-value tags assigned to the application.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

/**
 * <p>When configuring application input
 *             at the time of creating or updating an application,
 *             provides additional mapping information specific to
 *             the record format (such as JSON, CSV, or record fields delimited
 *             by some delimiter) on the streaming source.</p>
 */
export interface MappingParameters {
  __type?: "MappingParameters";
  /**
   * <p>Provides additional mapping information when the record format uses delimiters
   *             (for example, CSV).</p>
   */
  CSVMappingParameters?: CSVMappingParameters;

  /**
   * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
   */
  JSONMappingParameters?: JSONMappingParameters;
}

export namespace MappingParameters {
  export const filterSensitiveLog = (obj: MappingParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is MappingParameters =>
    __isa(o, "MappingParameters");
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
  __type?: "Output";
  /**
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   */
  DestinationSchema: DestinationSchema | undefined;

  /**
   * <p>Identifies an Amazon Kinesis Firehose delivery stream as the destination.</p>
   */
  KinesisFirehoseOutput?: KinesisFirehoseOutput;

  /**
   * <p>Identifies an Amazon Kinesis stream
   *             as the destination.</p>
   */
  KinesisStreamsOutput?: KinesisStreamsOutput;

  /**
   * <p>Identifies an AWS Lambda function as the destination.</p>
   */
  LambdaOutput?: LambdaOutput;

  /**
   * <p>Name of the in-application stream.</p>
   */
  Name: string | undefined;
}

export namespace Output {
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj
  });
  export const isa = (o: any): o is Output => __isa(o, "Output");
}

/**
 * <p>Describes the application output configuration, which includes
 *             the in-application stream name and the destination where the stream data
 *             is written. The destination can be an Amazon Kinesis stream or an
 *             Amazon Kinesis Firehose delivery stream.
 *         </p>
 */
export interface OutputDescription {
  __type?: "OutputDescription";
  /**
   * <p>Data format used for writing data to the destination.</p>
   */
  DestinationSchema?: DestinationSchema;

  /**
   * <p>Describes the Amazon Kinesis Firehose delivery stream configured as the
   *             destination where output is written.</p>
   */
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

  /**
   * <p>Describes Amazon Kinesis stream configured as the
   *             destination where output is written.</p>
   */
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

  /**
   * <p>Describes the AWS Lambda function configured as the destination where output is
   *             written.</p>
   */
  LambdaOutputDescription?: LambdaOutputDescription;

  /**
   * <p>Name of the in-application stream configured as output.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for the output configuration.</p>
   */
  OutputId?: string;
}

export namespace OutputDescription {
  export const filterSensitiveLog = (obj: OutputDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutputDescription =>
    __isa(o, "OutputDescription");
}

/**
 * <p>
 *             Describes updates to the output configuration identified by
 *             the <code>OutputId</code>.
 *         </p>
 */
export interface OutputUpdate {
  __type?: "OutputUpdate";
  /**
   * <p>Describes the data format when records are written to the destination. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.</p>
   */
  DestinationSchemaUpdate?: DestinationSchema;

  /**
   * <p>Describes an Amazon Kinesis Firehose delivery stream as the destination for the
   *             output.</p>
   */
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

  /**
   * <p>Describes an Amazon Kinesis stream as the destination for the output.</p>
   */
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

  /**
   * <p>Describes an AWS Lambda function as the destination for the output.</p>
   */
  LambdaOutputUpdate?: LambdaOutputUpdate;

  /**
   * <p>If you want to specify a different in-application stream
   *             for this output configuration, use this field to
   *             specify the new in-application stream name.</p>
   */
  NameUpdate?: string;

  /**
   * <p>Identifies the specific output configuration that you want to update.</p>
   */
  OutputId: string | undefined;
}

export namespace OutputUpdate {
  export const filterSensitiveLog = (obj: OutputUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutputUpdate => __isa(o, "OutputUpdate");
}

/**
 * <p>Describes the mapping of each data element in the streaming
 *             source to the corresponding column in the in-application stream.</p>
 *         <p>Also used to describe the format of the reference data source.</p>
 */
export interface RecordColumn {
  __type?: "RecordColumn";
  /**
   * <p>Reference to the data element in the streaming input or the reference data source. This element
   *             is required if the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_RecordFormat.html#analytics-Type-RecordFormat-RecordFormatTypel">RecordFormatType</a> is <code>JSON</code>.</p>
   */
  Mapping?: string;

  /**
   * <p>Name of the column created in the in-application input stream or reference table.</p>
   */
  Name: string | undefined;

  /**
   * <p>Type of column created in the in-application input stream or reference table.</p>
   */
  SqlType: string | undefined;
}

export namespace RecordColumn {
  export const filterSensitiveLog = (obj: RecordColumn): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecordColumn => __isa(o, "RecordColumn");
}

/**
 * <p>
 *             Describes the record format and relevant mapping information that
 *             should be applied to schematize the records on the stream.
 *         </p>
 */
export interface RecordFormat {
  __type?: "RecordFormat";
  /**
   * <p>When configuring application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.</p>
   */
  MappingParameters?: MappingParameters;

  /**
   * <p>The type of record format.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;
}

export namespace RecordFormat {
  export const filterSensitiveLog = (obj: RecordFormat): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecordFormat => __isa(o, "RecordFormat");
}

export enum RecordFormatType {
  CSV = "CSV",
  JSON = "JSON"
}

/**
 * <p>Describes the reference data source by providing the source information (S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.</p>
 */
export interface ReferenceDataSource {
  __type?: "ReferenceDataSource";
  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema: SourceSchema | undefined;

  /**
   * <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.
   *
   *             An Amazon Kinesis Analytics application loads reference data only once. If the data changes, you call the <code>UpdateApplication</code> operation to trigger reloading of data into your application. </p>
   */
  S3ReferenceDataSource?: S3ReferenceDataSource;

  /**
   * <p>Name of the in-application table to create.</p>
   */
  TableName: string | undefined;
}

export namespace ReferenceDataSource {
  export const filterSensitiveLog = (obj: ReferenceDataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReferenceDataSource =>
    __isa(o, "ReferenceDataSource");
}

/**
 * <p>Describes the reference data source configured for an application.</p>
 */
export interface ReferenceDataSourceDescription {
  __type?: "ReferenceDataSourceDescription";
  /**
   * <p>ID of the reference data source. This is the ID
   *             that Amazon Kinesis Analytics assigns when you add the reference data source
   *             to your application using the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_AddApplicationReferenceDataSource.html">AddApplicationReferenceDataSource</a> operation.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema?: SourceSchema;

  /**
   * <p>Provides the S3 bucket name, the object key name that contains the reference data. It also provides the Amazon Resource Name (ARN) of the IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceDescription:
    | S3ReferenceDataSourceDescription
    | undefined;

  /**
   * <p>The in-application table name created by the specific reference data source configuration.</p>
   */
  TableName: string | undefined;
}

export namespace ReferenceDataSourceDescription {
  export const filterSensitiveLog = (
    obj: ReferenceDataSourceDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReferenceDataSourceDescription =>
    __isa(o, "ReferenceDataSourceDescription");
}

/**
 * <p>When you update a reference data source configuration for an application, this object provides all the updated values (such as the source bucket name and object key name), the in-application table name that is created, and updated mapping information that maps the data in the Amazon S3 object to the in-application reference table that is created.</p>
 */
export interface ReferenceDataSourceUpdate {
  __type?: "ReferenceDataSourceUpdate";
  /**
   * <p>ID of the reference data source being updated. You can use the
   *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. </p>
   */
  ReferenceSchemaUpdate?: SourceSchema;

  /**
   * <p>Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

  /**
   * <p>In-application table name that is created by this update.</p>
   */
  TableNameUpdate?: string;
}

export namespace ReferenceDataSourceUpdate {
  export const filterSensitiveLog = (obj: ReferenceDataSourceUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReferenceDataSourceUpdate =>
    __isa(o, "ReferenceDataSourceUpdate");
}

/**
 * <p>Application is not available for this operation.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceInUseException =>
    __isa(o, "ResourceInUseException");
}

/**
 * <p>Specified application can't be found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Discovery failed to get a record from the
 *             streaming source because of the Amazon Kinesis Streams
 *             ProvisionedThroughputExceededException. For more information,
 *             see <a href="https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a>
 *             in the Amazon Kinesis Streams API Reference.</p>
 */
export interface ResourceProvisionedThroughputExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceProvisionedThroughputExceededException";
  $fault: "client";
  message?: string;
}

export namespace ResourceProvisionedThroughputExceededException {
  export const filterSensitiveLog = (
    obj: ResourceProvisionedThroughputExceededException
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ResourceProvisionedThroughputExceededException =>
    __isa(o, "ResourceProvisionedThroughputExceededException");
}

/**
 * <p>Provides a description of an Amazon S3 data source, including the Amazon Resource
 *             Name (ARN) of the S3 bucket, the ARN of the IAM role that is used to access the bucket,
 *             and the name of the Amazon S3 object that contains the data.</p>
 */
export interface S3Configuration {
  __type?: "S3Configuration";
  /**
   * <p>ARN of the S3 bucket that contains the data.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The name of the object that contains the data.</p>
   */
  FileKey: string | undefined;

  /**
   * <p>IAM ARN of the role used to access the data.</p>
   */
  RoleARN: string | undefined;
}

export namespace S3Configuration {
  export const filterSensitiveLog = (obj: S3Configuration): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Configuration =>
    __isa(o, "S3Configuration");
}

/**
 * <p>Identifies the S3 bucket and object that contains the reference data. Also identifies the IAM role Amazon Kinesis Analytics can assume to read this object on your behalf.</p>
 *         <p>An Amazon Kinesis Analytics application loads reference data only once. If the data changes,
 *             you call the <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_UpdateApplication.html">UpdateApplication</a> operation to trigger
 *             reloading of data into your application.</p>
 */
export interface S3ReferenceDataSource {
  __type?: "S3ReferenceDataSource";
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
  export const filterSensitiveLog = (obj: S3ReferenceDataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3ReferenceDataSource =>
    __isa(o, "S3ReferenceDataSource");
}

/**
 * <p>Provides the bucket name and object key name that stores the reference data.</p>
 */
export interface S3ReferenceDataSourceDescription {
  __type?: "S3ReferenceDataSourceDescription";
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
  export const filterSensitiveLog = (
    obj: S3ReferenceDataSourceDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3ReferenceDataSourceDescription =>
    __isa(o, "S3ReferenceDataSourceDescription");
}

/**
 * <p>Describes the S3 bucket name, object key name, and IAM role that Amazon Kinesis Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
 */
export interface S3ReferenceDataSourceUpdate {
  __type?: "S3ReferenceDataSourceUpdate";
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
  export const filterSensitiveLog = (
    obj: S3ReferenceDataSourceUpdate
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3ReferenceDataSourceUpdate =>
    __isa(o, "S3ReferenceDataSourceUpdate");
}

/**
 * <p>The service is unavailable. Back off and retry the operation. </p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (
    obj: ServiceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableException =>
    __isa(o, "ServiceUnavailableException");
}

/**
 * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
 */
export interface SourceSchema {
  __type?: "SourceSchema";
  /**
   * <p>A list of <code>RecordColumn</code> objects.</p>
   */
  RecordColumns: RecordColumn[] | undefined;

  /**
   * <p>Specifies the encoding of the records in the streaming source. For example, UTF-8.</p>
   */
  RecordEncoding?: string;

  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormat: RecordFormat | undefined;
}

export namespace SourceSchema {
  export const filterSensitiveLog = (obj: SourceSchema): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceSchema => __isa(o, "SourceSchema");
}

/**
 * <p></p>
 */
export interface StartApplicationRequest {
  __type?: "StartApplicationRequest";
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
  export const filterSensitiveLog = (obj: StartApplicationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartApplicationRequest =>
    __isa(o, "StartApplicationRequest");
}

/**
 * <p></p>
 */
export interface StartApplicationResponse {
  __type?: "StartApplicationResponse";
}

export namespace StartApplicationResponse {
  export const filterSensitiveLog = (obj: StartApplicationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartApplicationResponse =>
    __isa(o, "StartApplicationResponse");
}

/**
 * <p></p>
 */
export interface StopApplicationRequest {
  __type?: "StopApplicationRequest";
  /**
   * <p>Name of the running application to stop.</p>
   */
  ApplicationName: string | undefined;
}

export namespace StopApplicationRequest {
  export const filterSensitiveLog = (obj: StopApplicationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopApplicationRequest =>
    __isa(o, "StopApplicationRequest");
}

/**
 * <p></p>
 */
export interface StopApplicationResponse {
  __type?: "StopApplicationResponse";
}

export namespace StopApplicationResponse {
  export const filterSensitiveLog = (obj: StopApplicationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopApplicationResponse =>
    __isa(o, "StopApplicationResponse");
}

/**
 * <p>A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that
 *         the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
 *       For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-tagging.html">Using Tagging</a>.</p>
 */
export interface Tag {
  __type?: "Tag";
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
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

/**
 * <p>Application created with too many tags, or too many tags added to an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.</p>
 */
export interface TooManyTagsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTagsException =>
    __isa(o, "TooManyTagsException");
}

/**
 * <p>Data format is not valid. Amazon Kinesis Analytics is not able to detect schema for
 *             the given streaming source.</p>
 */
export interface UnableToDetectSchemaException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnableToDetectSchemaException";
  $fault: "client";
  ProcessedInputRecords?: string[];
  RawInputRecords?: string[];
  message?: string;
}

export namespace UnableToDetectSchemaException {
  export const filterSensitiveLog = (
    obj: UnableToDetectSchemaException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnableToDetectSchemaException =>
    __isa(o, "UnableToDetectSchemaException");
}

/**
 * <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
 */
export interface UnsupportedOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedOperationException {
  export const filterSensitiveLog = (
    obj: UnsupportedOperationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnsupportedOperationException =>
    __isa(o, "UnsupportedOperationException");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

export interface UpdateApplicationRequest {
  __type?: "UpdateApplicationRequest";
  /**
   * <p>Name of the Amazon Kinesis Analytics application to update.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Describes application updates.</p>
   */
  ApplicationUpdate: ApplicationUpdate | undefined;

  /**
   * <p>The current application version ID. You can use the
   *             <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_DescribeApplication.html">DescribeApplication</a> operation to get this value.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace UpdateApplicationRequest {
  export const filterSensitiveLog = (obj: UpdateApplicationRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApplicationRequest =>
    __isa(o, "UpdateApplicationRequest");
}

export interface UpdateApplicationResponse {
  __type?: "UpdateApplicationResponse";
}

export namespace UpdateApplicationResponse {
  export const filterSensitiveLog = (obj: UpdateApplicationResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApplicationResponse =>
    __isa(o, "UpdateApplicationResponse");
}
