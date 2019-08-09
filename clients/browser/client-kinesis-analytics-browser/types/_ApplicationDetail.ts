import {
  _InputDescription,
  _UnmarshalledInputDescription
} from "./_InputDescription";
import {
  _OutputDescription,
  _UnmarshalledOutputDescription
} from "./_OutputDescription";
import {
  _ReferenceDataSourceDescription,
  _UnmarshalledReferenceDataSourceDescription
} from "./_ReferenceDataSourceDescription";
import {
  _CloudWatchLoggingOptionDescription,
  _UnmarshalledCloudWatchLoggingOptionDescription
} from "./_CloudWatchLoggingOptionDescription";

/**
 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides a description of the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configuration.</p>
 */
export interface _ApplicationDetail {
  /**
   * <p>Name of the application.</p>
   */
  ApplicationName: string;

  /**
   * <p>Description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>ARN of the application.</p>
   */
  ApplicationARN: string;

  /**
   * <p>Status of the application.</p>
   */
  ApplicationStatus:
    | "DELETING"
    | "STARTING"
    | "STOPPING"
    | "READY"
    | "RUNNING"
    | "UPDATING"
    | string;

  /**
   * <p>Time stamp when the application version was created.</p>
   */
  CreateTimestamp?: Date | string | number;

  /**
   * <p>Time stamp when the application was last updated.</p>
   */
  LastUpdateTimestamp?: Date | string | number;

  /**
   * <p>Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p>
   */
  InputDescriptions?: Array<_InputDescription> | Iterable<_InputDescription>;

  /**
   * <p>Describes the application output configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. </p>
   */
  OutputDescriptions?: Array<_OutputDescription> | Iterable<_OutputDescription>;

  /**
   * <p>Describes reference data sources configured for the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p>
   */
  ReferenceDataSourceDescriptions?:
    | Array<_ReferenceDataSourceDescription>
    | Iterable<_ReferenceDataSourceDescription>;

  /**
   * <p>Describes the CloudWatch log streams that are configured to receive application messages. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>. </p>
   */
  CloudWatchLoggingOptionDescriptions?:
    | Array<_CloudWatchLoggingOptionDescription>
    | Iterable<_CloudWatchLoggingOptionDescription>;

  /**
   * <p>Returns the application code that you provided to perform data analysis on any of the in-application streams in your application.</p>
   */
  ApplicationCode?: string;

  /**
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId: number;
}

export interface _UnmarshalledApplicationDetail extends _ApplicationDetail {
  /**
   * <p>Time stamp when the application version was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>Time stamp when the application was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>Describes the application input configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p>
   */
  InputDescriptions?: Array<_UnmarshalledInputDescription>;

  /**
   * <p>Describes the application output configuration. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>. </p>
   */
  OutputDescriptions?: Array<_UnmarshalledOutputDescription>;

  /**
   * <p>Describes reference data sources configured for the application. For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html">Configuring Application Input</a>. </p>
   */
  ReferenceDataSourceDescriptions?: Array<
    _UnmarshalledReferenceDataSourceDescription
  >;

  /**
   * <p>Describes the CloudWatch log streams that are configured to receive application messages. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/cloudwatch-logs.html">Working with Amazon CloudWatch Logs</a>. </p>
   */
  CloudWatchLoggingOptionDescriptions?: Array<
    _UnmarshalledCloudWatchLoggingOptionDescription
  >;
}
