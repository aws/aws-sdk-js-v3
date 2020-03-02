import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AddApplicationCloudWatchLoggingOptionRequest {
  __type?: "AddApplicationCloudWatchLoggingOptionRequest";
  /**
   * <p>The Kinesis Data Analytics application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Provides the Amazon CloudWatch log stream Amazon Resource Name (ARN). </p>
   */
  CloudWatchLoggingOption: CloudWatchLoggingOption | undefined;

  /**
   * <p>The version ID of the Kinesis Data Analytics application. You can retrieve the application version ID using <a>DescribeApplication</a>.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace AddApplicationCloudWatchLoggingOptionRequest {
  export function isa(
    o: any
  ): o is AddApplicationCloudWatchLoggingOptionRequest {
    return __isa(o, "AddApplicationCloudWatchLoggingOptionRequest");
  }
}

export interface AddApplicationCloudWatchLoggingOptionResponse {
  __type?: "AddApplicationCloudWatchLoggingOptionResponse";
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
  CloudWatchLoggingOptionDescriptions?: Array<
    CloudWatchLoggingOptionDescription
  >;
}

export namespace AddApplicationCloudWatchLoggingOptionResponse {
  export function isa(
    o: any
  ): o is AddApplicationCloudWatchLoggingOptionResponse {
    return __isa(o, "AddApplicationCloudWatchLoggingOptionResponse");
  }
}

export interface AddApplicationInputProcessingConfigurationRequest {
  __type?: "AddApplicationInputProcessingConfigurationRequest";
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

export namespace AddApplicationInputProcessingConfigurationRequest {
  export function isa(
    o: any
  ): o is AddApplicationInputProcessingConfigurationRequest {
    return __isa(o, "AddApplicationInputProcessingConfigurationRequest");
  }
}

export interface AddApplicationInputProcessingConfigurationResponse {
  __type?: "AddApplicationInputProcessingConfigurationResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The input ID that is associated with the application input. This is the ID that Amazon
   *       Kinesis Data Analytics assigns to each input configuration that you add to your
   *       application.</p>
   */
  InputId?: string;

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run.</p>
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;
}

export namespace AddApplicationInputProcessingConfigurationResponse {
  export function isa(
    o: any
  ): o is AddApplicationInputProcessingConfigurationResponse {
    return __isa(o, "AddApplicationInputProcessingConfigurationResponse");
  }
}

export interface AddApplicationInputRequest {
  __type?: "AddApplicationInputRequest";
  /**
   * <p>The name of your existing application to which you want to add the streaming
   *       source.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current version of your application. You can use the <a>DescribeApplication</a> operation to find the current application version.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The <a>Input</a> to add.</p>
   */
  Input: Input | undefined;
}

export namespace AddApplicationInputRequest {
  export function isa(o: any): o is AddApplicationInputRequest {
    return __isa(o, "AddApplicationInputRequest");
  }
}

export interface AddApplicationInputResponse {
  __type?: "AddApplicationInputResponse";
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
  InputDescriptions?: Array<InputDescription>;
}

export namespace AddApplicationInputResponse {
  export function isa(o: any): o is AddApplicationInputResponse {
    return __isa(o, "AddApplicationInputResponse");
  }
}

export interface AddApplicationOutputRequest {
  __type?: "AddApplicationOutputRequest";
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
   *       Kinesis data stream, a Kinesis Data Firehose delivery stream, or an AWS Lambda function), and
   *       record the formation to use when writing to the destination.</p>
   */
  Output: Output | undefined;
}

export namespace AddApplicationOutputRequest {
  export function isa(o: any): o is AddApplicationOutputRequest {
    return __isa(o, "AddApplicationOutputRequest");
  }
}

export interface AddApplicationOutputResponse {
  __type?: "AddApplicationOutputResponse";
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated application version ID. Kinesis Data Analytics increments this ID when the
   *       application is updated.</p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>Describes the application output configuration.
   *       For more information,
   *       see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-output.html">Configuring Application Output</a>.
   *
   *     </p>
   */
  OutputDescriptions?: Array<OutputDescription>;
}

export namespace AddApplicationOutputResponse {
  export function isa(o: any): o is AddApplicationOutputResponse {
    return __isa(o, "AddApplicationOutputResponse");
  }
}

export interface AddApplicationReferenceDataSourceRequest {
  __type?: "AddApplicationReferenceDataSourceRequest";
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The version of the application for which you are adding the reference data source. You can
   *       use the <a>DescribeApplication</a> operation to get the current application
   *       version. If the version specified is not the current version, the
   *         <code>ConcurrentModificationException</code> is returned.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The reference data source can be an object in your Amazon S3 bucket. Kinesis Data Analytics reads the object and copies the data
   *       into the in-application table that is created. You provide an S3 bucket, object key name, and the resulting in-application table that is
   *       created. </p>
   */
  ReferenceDataSource: ReferenceDataSource | undefined;
}

export namespace AddApplicationReferenceDataSourceRequest {
  export function isa(o: any): o is AddApplicationReferenceDataSourceRequest {
    return __isa(o, "AddApplicationReferenceDataSourceRequest");
  }
}

export interface AddApplicationReferenceDataSourceResponse {
  __type?: "AddApplicationReferenceDataSourceResponse";
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated application version ID. Amazon Kinesis Data Analytics increments this ID when
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
  ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription>;
}

export namespace AddApplicationReferenceDataSourceResponse {
  export function isa(o: any): o is AddApplicationReferenceDataSourceResponse {
    return __isa(o, "AddApplicationReferenceDataSourceResponse");
  }
}

export interface AddApplicationVpcConfigurationRequest {
  __type?: "AddApplicationVpcConfigurationRequest";
  /**
   * <p>The name of an existing application.</p>
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
   * <p>Description of the VPC to add to the application.</p>
   */
  VpcConfiguration: VpcConfiguration | undefined;
}

export namespace AddApplicationVpcConfigurationRequest {
  export function isa(o: any): o is AddApplicationVpcConfigurationRequest {
    return __isa(o, "AddApplicationVpcConfigurationRequest");
  }
}

export interface AddApplicationVpcConfigurationResponse {
  __type?: "AddApplicationVpcConfigurationResponse";
  /**
   * <p>The ARN of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>Provides the current application version. Kinesis Data Analytics updates the ApplicationVersionId each time you update the application. </p>
   */
  ApplicationVersionId?: number;

  /**
   * <p>The parameters of the new VPC configuration.</p>
   */
  VpcConfigurationDescription?: VpcConfigurationDescription;
}

export namespace AddApplicationVpcConfigurationResponse {
  export function isa(o: any): o is AddApplicationVpcConfigurationResponse {
    return __isa(o, "AddApplicationVpcConfigurationResponse");
  }
}

/**
 * <p>Describes code configuration for a Java-based Kinesis Data Analytics
 *       application.</p>
 */
export interface ApplicationCodeConfiguration {
  __type?: "ApplicationCodeConfiguration";
  /**
   * <p>The location and type of the application code.</p>
   */
  CodeContent?: CodeContent;

  /**
   * <p>Specifies whether the code content is in text or zip format.</p>
   */
  CodeContentType: CodeContentType | string | undefined;
}

export namespace ApplicationCodeConfiguration {
  export function isa(o: any): o is ApplicationCodeConfiguration {
    return __isa(o, "ApplicationCodeConfiguration");
  }
}

/**
 * <p>Describes code configuration for a Java-based Kinesis Data Analytics
 *       application.</p>
 */
export interface ApplicationCodeConfigurationDescription {
  __type?: "ApplicationCodeConfigurationDescription";
  /**
   * <p>Describes details about the location and format of the application code.</p>
   */
  CodeContentDescription?: CodeContentDescription;

  /**
   * <p>Specifies whether the code content is in text or zip format.</p>
   */
  CodeContentType: CodeContentType | string | undefined;
}

export namespace ApplicationCodeConfigurationDescription {
  export function isa(o: any): o is ApplicationCodeConfigurationDescription {
    return __isa(o, "ApplicationCodeConfigurationDescription");
  }
}

/**
 * <p>Describes updates to a Java-based Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface ApplicationCodeConfigurationUpdate {
  __type?: "ApplicationCodeConfigurationUpdate";
  /**
   * <p>Describes updates to the code content type.</p>
   */
  CodeContentTypeUpdate?: CodeContentType | string;

  /**
   * <p>Describes updates to the code content of an application.</p>
   */
  CodeContentUpdate?: CodeContentUpdate;
}

export namespace ApplicationCodeConfigurationUpdate {
  export function isa(o: any): o is ApplicationCodeConfigurationUpdate {
    return __isa(o, "ApplicationCodeConfigurationUpdate");
  }
}

/**
 * <p>Specifies the creation parameters for an Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface ApplicationConfiguration {
  __type?: "ApplicationConfiguration";
  /**
   * <p>The code location and type parameters for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationCodeConfiguration: ApplicationCodeConfiguration | undefined;

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;

  /**
   * <p>Describes execution properties for a Java-based Kinesis Data Analytics application.</p>
   */
  EnvironmentProperties?: EnvironmentProperties;

  /**
   * <p>The creation and update parameters for a Java-based Kinesis Data Analytics
   *       application.</p>
   */
  FlinkApplicationConfiguration?: FlinkApplicationConfiguration;

  /**
   * <p>The creation and update parameters for an SQL-based Kinesis Data Analytics
   *       application.</p>
   */
  SqlApplicationConfiguration?: SqlApplicationConfiguration;

  /**
   * <p>The array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurations?: Array<VpcConfiguration>;
}

export namespace ApplicationConfiguration {
  export function isa(o: any): o is ApplicationConfiguration {
    return __isa(o, "ApplicationConfiguration");
  }
}

/**
 * <p>Describes details about the application code and starting parameters for an Amazon Kinesis
 *       Data Analytics application.</p>
 */
export interface ApplicationConfigurationDescription {
  __type?: "ApplicationConfigurationDescription";
  /**
   * <p>The details about the application code for a Java-based Kinesis Data Analytics
   *       application.</p>
   */
  ApplicationCodeConfigurationDescription?: ApplicationCodeConfigurationDescription;

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationDescription?: ApplicationSnapshotConfigurationDescription;

  /**
   * <p>Describes execution properties for a Java-based Kinesis Data Analytics
   *       application.</p>
   */
  EnvironmentPropertyDescriptions?: EnvironmentPropertyDescriptions;

  /**
   * <p>The details about a Java-based Kinesis Data Analytics application.</p>
   */
  FlinkApplicationConfigurationDescription?: FlinkApplicationConfigurationDescription;

  /**
   * <p>The details about the starting properties for a Kinesis Data Analytics application.</p>
   */
  RunConfigurationDescription?: RunConfigurationDescription;

  /**
   * <p>The details about inputs, outputs, and reference data sources for an SQL-based Kinesis
   *       Data Analytics application.</p>
   */
  SqlApplicationConfigurationDescription?: SqlApplicationConfigurationDescription;

  /**
   * <p>The array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurationDescriptions?: Array<VpcConfigurationDescription>;
}

export namespace ApplicationConfigurationDescription {
  export function isa(o: any): o is ApplicationConfigurationDescription {
    return __isa(o, "ApplicationConfigurationDescription");
  }
}

/**
 * <p>Describes updates to an application's configuration.</p>
 */
export interface ApplicationConfigurationUpdate {
  __type?: "ApplicationConfigurationUpdate";
  /**
   * <p>Describes updates to a Java-based Kinesis Data Analytics application's code
   *       configuration.</p>
   */
  ApplicationCodeConfigurationUpdate?: ApplicationCodeConfigurationUpdate;

  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  ApplicationSnapshotConfigurationUpdate?: ApplicationSnapshotConfigurationUpdate;

  /**
   * <p>Describes updates to the environment properties for a Java-based Kinesis Data Analytics application.</p>
   */
  EnvironmentPropertyUpdates?: EnvironmentPropertyUpdates;

  /**
   * <p>Describes updates to a Java-based Kinesis Data Analytics application's configuration.</p>
   */
  FlinkApplicationConfigurationUpdate?: FlinkApplicationConfigurationUpdate;

  /**
   * <p>Describes updates to an SQL-based Kinesis Data Analytics application's
   *       configuration.</p>
   */
  SqlApplicationConfigurationUpdate?: SqlApplicationConfigurationUpdate;

  /**
   * <p>Updates to the array of descriptions of VPC configurations available to the application.</p>
   */
  VpcConfigurationUpdates?: Array<VpcConfigurationUpdate>;
}

export namespace ApplicationConfigurationUpdate {
  export function isa(o: any): o is ApplicationConfigurationUpdate {
    return __isa(o, "ApplicationConfigurationUpdate");
  }
}

/**
 * <p>Describes the application, including the application Amazon Resource Name (ARN), status,
 *       latest version, and input and output configurations.</p>
 */
export interface ApplicationDetail {
  __type?: "ApplicationDetail";
  /**
   * <p>The ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * <p>Provides details about the application's SQL or Java code and starting parameters.</p>
   */
  ApplicationConfigurationDescription?: ApplicationConfigurationDescription;

  /**
   * <p>The description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

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
   * <p>Describes the application Amazon CloudWatch logging options.</p>
   */
  CloudWatchLoggingOptionDescriptions?: Array<
    CloudWatchLoggingOptionDescription
  >;

  /**
   * <p>The current timestamp when the application was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>The current timestamp when the application was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>The runtime environment for the application (<code>SQL-1.0</code> or <code>FLINK-1_6</code>).</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | string | undefined;

  /**
   * <p>Specifies the IAM role that the application uses to access external resources.</p>
   */
  ServiceExecutionRole?: string;
}

export namespace ApplicationDetail {
  export function isa(o: any): o is ApplicationDetail {
    return __isa(o, "ApplicationDetail");
  }
}

/**
 * <p>Specifies the method and snapshot to use when restarting an application using previously saved application state.</p>
 */
export interface ApplicationRestoreConfiguration {
  __type?: "ApplicationRestoreConfiguration";
  /**
   * <p>Specifies how the application should be restored.</p>
   */
  ApplicationRestoreType: ApplicationRestoreType | string | undefined;

  /**
   * <p>The identifier of an existing snapshot of application state to use to restart an application.
   *       The application uses this value if <code>RESTORE_FROM_CUSTOM_SNAPSHOT</code> is specified for the <code>ApplicationRestoreType</code>.</p>
   */
  SnapshotName?: string;
}

export namespace ApplicationRestoreConfiguration {
  export function isa(o: any): o is ApplicationRestoreConfiguration {
    return __isa(o, "ApplicationRestoreConfiguration");
  }
}

export enum ApplicationRestoreType {
  RESTORE_FROM_CUSTOM_SNAPSHOT = "RESTORE_FROM_CUSTOM_SNAPSHOT",
  RESTORE_FROM_LATEST_SNAPSHOT = "RESTORE_FROM_LATEST_SNAPSHOT",
  SKIP_RESTORE_FROM_SNAPSHOT = "SKIP_RESTORE_FROM_SNAPSHOT"
}

/**
 * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfiguration {
  __type?: "ApplicationSnapshotConfiguration";
  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  SnapshotsEnabled: boolean | undefined;
}

export namespace ApplicationSnapshotConfiguration {
  export function isa(o: any): o is ApplicationSnapshotConfiguration {
    return __isa(o, "ApplicationSnapshotConfiguration");
  }
}

/**
 * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfigurationDescription {
  __type?: "ApplicationSnapshotConfigurationDescription";
  /**
   * <p>Describes whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  SnapshotsEnabled: boolean | undefined;
}

export namespace ApplicationSnapshotConfigurationDescription {
  export function isa(
    o: any
  ): o is ApplicationSnapshotConfigurationDescription {
    return __isa(o, "ApplicationSnapshotConfigurationDescription");
  }
}

/**
 * <p>Describes updates to whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
 */
export interface ApplicationSnapshotConfigurationUpdate {
  __type?: "ApplicationSnapshotConfigurationUpdate";
  /**
   * <p>Describes updates to whether snapshots are enabled for a Java-based Kinesis Data Analytics application.</p>
   */
  SnapshotsEnabledUpdate: boolean | undefined;
}

export namespace ApplicationSnapshotConfigurationUpdate {
  export function isa(o: any): o is ApplicationSnapshotConfigurationUpdate {
    return __isa(o, "ApplicationSnapshotConfigurationUpdate");
  }
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
 * <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
 */
export interface ApplicationSummary {
  __type?: "ApplicationSummary";
  /**
   * <p>The ARN of the application.</p>
   */
  ApplicationARN: string | undefined;

  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The status of the application.</p>
   */
  ApplicationStatus: ApplicationStatus | string | undefined;

  /**
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>The runtime environment for the application (<code>SQL-1.0</code> or <code>FLINK-1_6</code>).</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | string | undefined;
}

export namespace ApplicationSummary {
  export function isa(o: any): o is ApplicationSummary {
    return __isa(o, "ApplicationSummary");
  }
}

/**
 * <p>For an SQL-based application, provides additional mapping information when the record
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
  __type?: "CSVMappingParameters";
  /**
   * <p>The column delimiter. For example, in a CSV format, a comma (",") is the typical column
   *       delimiter.</p>
   */
  RecordColumnDelimiter: string | undefined;

  /**
   * <p>The row delimiter. For example, in a CSV format, <i>'\n'</i> is the typical
   *       row delimiter.</p>
   */
  RecordRowDelimiter: string | undefined;
}

export namespace CSVMappingParameters {
  export function isa(o: any): o is CSVMappingParameters {
    return __isa(o, "CSVMappingParameters");
  }
}

/**
 * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.
 *       For more information, see
 *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance">
 *         Checkpoints for Fault Tolerance</a> in the
 *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>.</p>
 */
export interface CheckpointConfiguration {
  __type?: "CheckpointConfiguration";
  /**
   * <p>Describes the interval in milliseconds between checkpoint operations. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> vaue of 60000, even if this value is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointInterval?: number;

  /**
   * <p>Describes whether checkpointing is enabled for a Java-based Kinesis Data Analytics application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value
   *       is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabled?: boolean;

  /**
   * <p>Describes whether the application uses Amazon Kinesis Data Analytics' default checkpointing behavior.
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
   * <p>Describes the minimum time in milliseconds after a checkpoint operation completes that a
   *       new checkpoint operation can start. If a checkpoint operation takes longer than the
   *         <code>CheckpointInterval</code>, the application otherwise performs continual checkpoint
   *       operations. For more information, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/ops/state/large_state_tuning.html#tuning-checkpointing"> Tuning Checkpointing</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink
   *         Documentation</a>.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this API or in application code.</p>
   *          </note>
   */
  MinPauseBetweenCheckpoints?: number;
}

export namespace CheckpointConfiguration {
  export function isa(o: any): o is CheckpointConfiguration {
    return __isa(o, "CheckpointConfiguration");
  }
}

/**
 * <p>Describes checkpointing parameters for a Java-based Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface CheckpointConfigurationDescription {
  __type?: "CheckpointConfigurationDescription";
  /**
   * <p>Describes the interval in milliseconds between checkpoint operations. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> vaue of 60000, even if this value is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointInterval?: number;

  /**
   * <p>Describes whether checkpointing is enabled for a Java-based Kinesis Data Analytics application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabled?: boolean;

  /**
   * <p>Describes whether the application uses the default checkpointing behavior in Kinesis Data
   *       Analytics. </p>
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
  ConfigurationType?: ConfigurationType | string;

  /**
   * <p>Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation
   *       can start. </p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this API or in application code.</p>
   *          </note>
   */
  MinPauseBetweenCheckpoints?: number;
}

export namespace CheckpointConfigurationDescription {
  export function isa(o: any): o is CheckpointConfigurationDescription {
    return __isa(o, "CheckpointConfigurationDescription");
  }
}

/**
 * <p>Describes updates to the checkpointing parameters for a Java-based Amazon Kinesis
 *       Data Analytics application.</p>
 */
export interface CheckpointConfigurationUpdate {
  __type?: "CheckpointConfigurationUpdate";
  /**
   * <p>Describes updates to the interval in milliseconds between checkpoint operations.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointInterval</code> vaue of 60000, even if this value is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointIntervalUpdate?: number;

  /**
   * <p>Describes updates to whether checkpointing is enabled for an application.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>CheckpointingEnabled</code> value of <code>true</code>, even if this value is set to another value using this API or in application code.</p>
   *          </note>
   */
  CheckpointingEnabledUpdate?: boolean;

  /**
   * <p>Describes updates to whether the application uses the default checkpointing behavior of
   *       Kinesis Data Analytics. You must set this property to <code>CUSTOM</code> in order to set the
   *       <code>CheckpointingEnabled</code>, <code>CheckpointInterval</code>, or <code>MinPauseBetweenCheckpoints</code> parameters.
   *       </p>
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
  ConfigurationTypeUpdate?: ConfigurationType | string;

  /**
   * <p>Describes updates to the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation
   *       can start.</p>
   *          <note>
   *             <p>If <code>CheckpointConfiguration.ConfigurationType</code> is <code>DEFAULT</code>,
   *     the application will use a <code>MinPauseBetweenCheckpoints</code> value of 5000, even if this value is set using this API or in application code.</p>
   *          </note>
   */
  MinPauseBetweenCheckpointsUpdate?: number;
}

export namespace CheckpointConfigurationUpdate {
  export function isa(o: any): o is CheckpointConfigurationUpdate {
    return __isa(o, "CheckpointConfigurationUpdate");
  }
}

/**
 * <p>Provides a description of Amazon CloudWatch logging options, including the log stream
 *       Amazon Resource Name (ARN). </p>
 */
export interface CloudWatchLoggingOption {
  __type?: "CloudWatchLoggingOption";
  /**
   * <p>The ARN of the CloudWatch log to receive application messages.</p>
   */
  LogStreamARN: string | undefined;
}

export namespace CloudWatchLoggingOption {
  export function isa(o: any): o is CloudWatchLoggingOption {
    return __isa(o, "CloudWatchLoggingOption");
  }
}

/**
 * <p>Describes the Amazon CloudWatch logging option.</p>
 */
export interface CloudWatchLoggingOptionDescription {
  __type?: "CloudWatchLoggingOptionDescription";
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

export namespace CloudWatchLoggingOptionDescription {
  export function isa(o: any): o is CloudWatchLoggingOptionDescription {
    return __isa(o, "CloudWatchLoggingOptionDescription");
  }
}

/**
 * <p>Describes the Amazon CloudWatch logging option updates.</p>
 */
export interface CloudWatchLoggingOptionUpdate {
  __type?: "CloudWatchLoggingOptionUpdate";
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

export namespace CloudWatchLoggingOptionUpdate {
  export function isa(o: any): o is CloudWatchLoggingOptionUpdate {
    return __isa(o, "CloudWatchLoggingOptionUpdate");
  }
}

/**
 * <p>Specifies either the application code, or the location of the application code, for a
 *       Java-based Amazon Kinesis Data Analytics application. </p>
 */
export interface CodeContent {
  __type?: "CodeContent";
  /**
   * <p>Information about the Amazon S3 bucket containing the application code.</p>
   */
  S3ContentLocation?: S3ContentLocation;

  /**
   * <p>The text-format code for a Java-based Kinesis Data Analytics application.</p>
   */
  TextContent?: string;

  /**
   * <p>The zip-format code for a Java-based Kinesis Data Analytics application.</p>
   */
  ZipFileContent?: Uint8Array;
}

export namespace CodeContent {
  export function isa(o: any): o is CodeContent {
    return __isa(o, "CodeContent");
  }
}

/**
 * <p>Describes details about the application code for a Java-based Kinesis Data
 *       Analytics application.</p>
 */
export interface CodeContentDescription {
  __type?: "CodeContentDescription";
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

  /**
   * <p>The text-format code</p>
   */
  TextContent?: string;
}

export namespace CodeContentDescription {
  export function isa(o: any): o is CodeContentDescription {
    return __isa(o, "CodeContentDescription");
  }
}

export enum CodeContentType {
  PLAINTEXT = "PLAINTEXT",
  ZIPFILE = "ZIPFILE"
}

/**
 * <p>Describes an update to the code of a Java-based Kinesis Data Analytics
 *       application.</p>
 */
export interface CodeContentUpdate {
  __type?: "CodeContentUpdate";
  /**
   * <p>Describes an update to the location of code for an application.</p>
   */
  S3ContentLocationUpdate?: S3ContentLocationUpdate;

  /**
   * <p>Describes an update to the text code for an application.</p>
   */
  TextContentUpdate?: string;

  /**
   * <p>Describes an update to the zipped code for an application.</p>
   */
  ZipFileContentUpdate?: Uint8Array;
}

export namespace CodeContentUpdate {
  export function isa(o: any): o is CodeContentUpdate {
    return __isa(o, "CodeContentUpdate");
  }
}

/**
 * <p>The user-provided application code (query) is not valid. This can be a simple syntax
 *       error.</p>
 */
export interface CodeValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "CodeValidationException";
  $fault: "client";
  Message?: string;
}

export namespace CodeValidationException {
  export function isa(o: any): o is CodeValidationException {
    return __isa(o, "CodeValidationException");
  }
}

/**
 * <p>Exception thrown as a result of concurrent modifications to an application. This error can
 *       be the result of attempting to modify an application without using the current application
 *       ID.</p>
 */
export interface ConcurrentModificationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  Message?: string;
}

export namespace ConcurrentModificationException {
  export function isa(o: any): o is ConcurrentModificationException {
    return __isa(o, "ConcurrentModificationException");
  }
}

export enum ConfigurationType {
  CUSTOM = "CUSTOM",
  DEFAULT = "DEFAULT"
}

export interface CreateApplicationRequest {
  __type?: "CreateApplicationRequest";
  /**
   * <p>Use this parameter to configure the application.</p>
   */
  ApplicationConfiguration?: ApplicationConfiguration;

  /**
   * <p>A summary description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>The name of your application (for example, <code>sample-app</code>).</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Use this parameter to configure an Amazon CloudWatch log stream to monitor application
   *       configuration errors.
   *       </p>
   */
  CloudWatchLoggingOptions?: Array<CloudWatchLoggingOption>;

  /**
   * <p>The runtime environment for the application (<code>SQL-1.0</code> or <code>FLINK-1_6</code>).</p>
   */
  RuntimeEnvironment: RuntimeEnvironment | string | undefined;

  /**
   * <p>The IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose
   *       delivery streams, Amazon S3 objects, and other external resources.</p>
   */
  ServiceExecutionRole: string | undefined;

  /**
   * <p>A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
   *         For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateApplicationRequest {
  export function isa(o: any): o is CreateApplicationRequest {
    return __isa(o, "CreateApplicationRequest");
  }
}

export interface CreateApplicationResponse {
  __type?: "CreateApplicationResponse";
  /**
   * <p>In response to your <code>CreateApplication</code> request, Kinesis Data Analytics returns a
   *       response with details of the application it created.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

export namespace CreateApplicationResponse {
  export function isa(o: any): o is CreateApplicationResponse {
    return __isa(o, "CreateApplicationResponse");
  }
}

export interface CreateApplicationSnapshotRequest {
  __type?: "CreateApplicationSnapshotRequest";
  /**
   * <p>The name of an existing application</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>An identifier for the application snapshot.</p>
   */
  SnapshotName: string | undefined;
}

export namespace CreateApplicationSnapshotRequest {
  export function isa(o: any): o is CreateApplicationSnapshotRequest {
    return __isa(o, "CreateApplicationSnapshotRequest");
  }
}

export interface CreateApplicationSnapshotResponse {
  __type?: "CreateApplicationSnapshotResponse";
}

export namespace CreateApplicationSnapshotResponse {
  export function isa(o: any): o is CreateApplicationSnapshotResponse {
    return __isa(o, "CreateApplicationSnapshotResponse");
  }
}

export interface DeleteApplicationCloudWatchLoggingOptionRequest {
  __type?: "DeleteApplicationCloudWatchLoggingOptionRequest";
  /**
   * <p>The application name.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The <code>CloudWatchLoggingOptionId</code> of the Amazon CloudWatch logging option to
   *       delete. You can get the <code>CloudWatchLoggingOptionId</code> by using the <a>DescribeApplication</a> operation. </p>
   */
  CloudWatchLoggingOptionId: string | undefined;

  /**
   * <p>The version ID of the application. You can retrieve the application version ID using
   *     <a>DescribeApplication</a>.</p>
   */
  CurrentApplicationVersionId: number | undefined;
}

export namespace DeleteApplicationCloudWatchLoggingOptionRequest {
  export function isa(
    o: any
  ): o is DeleteApplicationCloudWatchLoggingOptionRequest {
    return __isa(o, "DeleteApplicationCloudWatchLoggingOptionRequest");
  }
}

export interface DeleteApplicationCloudWatchLoggingOptionResponse {
  __type?: "DeleteApplicationCloudWatchLoggingOptionResponse";
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
  CloudWatchLoggingOptionDescriptions?: Array<
    CloudWatchLoggingOptionDescription
  >;
}

export namespace DeleteApplicationCloudWatchLoggingOptionResponse {
  export function isa(
    o: any
  ): o is DeleteApplicationCloudWatchLoggingOptionResponse {
    return __isa(o, "DeleteApplicationCloudWatchLoggingOptionResponse");
  }
}

export interface DeleteApplicationInputProcessingConfigurationRequest {
  __type?: "DeleteApplicationInputProcessingConfigurationRequest";
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

export namespace DeleteApplicationInputProcessingConfigurationRequest {
  export function isa(
    o: any
  ): o is DeleteApplicationInputProcessingConfigurationRequest {
    return __isa(o, "DeleteApplicationInputProcessingConfigurationRequest");
  }
}

export interface DeleteApplicationInputProcessingConfigurationResponse {
  __type?: "DeleteApplicationInputProcessingConfigurationResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The current application version ID.</p>
   */
  ApplicationVersionId?: number;
}

export namespace DeleteApplicationInputProcessingConfigurationResponse {
  export function isa(
    o: any
  ): o is DeleteApplicationInputProcessingConfigurationResponse {
    return __isa(o, "DeleteApplicationInputProcessingConfigurationResponse");
  }
}

export interface DeleteApplicationOutputRequest {
  __type?: "DeleteApplicationOutputRequest";
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

export namespace DeleteApplicationOutputRequest {
  export function isa(o: any): o is DeleteApplicationOutputRequest {
    return __isa(o, "DeleteApplicationOutputRequest");
  }
}

export interface DeleteApplicationOutputResponse {
  __type?: "DeleteApplicationOutputResponse";
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The current application version ID.</p>
   */
  ApplicationVersionId?: number;
}

export namespace DeleteApplicationOutputResponse {
  export function isa(o: any): o is DeleteApplicationOutputResponse {
    return __isa(o, "DeleteApplicationOutputResponse");
  }
}

export interface DeleteApplicationReferenceDataSourceRequest {
  __type?: "DeleteApplicationReferenceDataSourceRequest";
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
   *       application using the <a>AddApplicationReferenceDataSource</a>, Kinesis Data
   *       Analytics assigns an ID. You can use the <a>DescribeApplication</a> operation to
   *       get the reference ID. </p>
   */
  ReferenceId: string | undefined;
}

export namespace DeleteApplicationReferenceDataSourceRequest {
  export function isa(
    o: any
  ): o is DeleteApplicationReferenceDataSourceRequest {
    return __isa(o, "DeleteApplicationReferenceDataSourceRequest");
  }
}

export interface DeleteApplicationReferenceDataSourceResponse {
  __type?: "DeleteApplicationReferenceDataSourceResponse";
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated version ID of the application.</p>
   */
  ApplicationVersionId?: number;
}

export namespace DeleteApplicationReferenceDataSourceResponse {
  export function isa(
    o: any
  ): o is DeleteApplicationReferenceDataSourceResponse {
    return __isa(o, "DeleteApplicationReferenceDataSourceResponse");
  }
}

export interface DeleteApplicationRequest {
  __type?: "DeleteApplicationRequest";
  /**
   * <p>The name of the application to delete.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Use the <code>DescribeApplication</code> operation to get this value.</p>
   */
  CreateTimestamp: Date | undefined;
}

export namespace DeleteApplicationRequest {
  export function isa(o: any): o is DeleteApplicationRequest {
    return __isa(o, "DeleteApplicationRequest");
  }
}

export interface DeleteApplicationResponse {
  __type?: "DeleteApplicationResponse";
}

export namespace DeleteApplicationResponse {
  export function isa(o: any): o is DeleteApplicationResponse {
    return __isa(o, "DeleteApplicationResponse");
  }
}

export interface DeleteApplicationSnapshotRequest {
  __type?: "DeleteApplicationSnapshotRequest";
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The creation timestamp of the application snapshot to delete. You can retrieve this value using
   *       or .</p>
   */
  SnapshotCreationTimestamp: Date | undefined;

  /**
   * <p>The identifier for the snapshot delete.</p>
   */
  SnapshotName: string | undefined;
}

export namespace DeleteApplicationSnapshotRequest {
  export function isa(o: any): o is DeleteApplicationSnapshotRequest {
    return __isa(o, "DeleteApplicationSnapshotRequest");
  }
}

export interface DeleteApplicationSnapshotResponse {
  __type?: "DeleteApplicationSnapshotResponse";
}

export namespace DeleteApplicationSnapshotResponse {
  export function isa(o: any): o is DeleteApplicationSnapshotResponse {
    return __isa(o, "DeleteApplicationSnapshotResponse");
  }
}

export interface DeleteApplicationVpcConfigurationRequest {
  __type?: "DeleteApplicationVpcConfigurationRequest";
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The current application version ID. You can retrieve the application version ID using <a>DescribeApplication</a>.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>The ID of the VPC configuration to delete.</p>
   */
  VpcConfigurationId: string | undefined;
}

export namespace DeleteApplicationVpcConfigurationRequest {
  export function isa(o: any): o is DeleteApplicationVpcConfigurationRequest {
    return __isa(o, "DeleteApplicationVpcConfigurationRequest");
  }
}

export interface DeleteApplicationVpcConfigurationResponse {
  __type?: "DeleteApplicationVpcConfigurationResponse";
  /**
   * <p>The ARN of the Kinesis Data Analytics application.</p>
   */
  ApplicationARN?: string;

  /**
   * <p>The updated version ID of the application.</p>
   */
  ApplicationVersionId?: number;
}

export namespace DeleteApplicationVpcConfigurationResponse {
  export function isa(o: any): o is DeleteApplicationVpcConfigurationResponse {
    return __isa(o, "DeleteApplicationVpcConfigurationResponse");
  }
}

export interface DescribeApplicationRequest {
  __type?: "DescribeApplicationRequest";
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Displays verbose information about a Kinesis Data Analytics application, including the application's job plan.</p>
   */
  IncludeAdditionalDetails?: boolean;
}

export namespace DescribeApplicationRequest {
  export function isa(o: any): o is DescribeApplicationRequest {
    return __isa(o, "DescribeApplicationRequest");
  }
}

export interface DescribeApplicationResponse {
  __type?: "DescribeApplicationResponse";
  /**
   * <p>Provides a description of the application, such as the application's Amazon Resource Name
   *       (ARN), status, and latest version.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

export namespace DescribeApplicationResponse {
  export function isa(o: any): o is DescribeApplicationResponse {
    return __isa(o, "DescribeApplicationResponse");
  }
}

export interface DescribeApplicationSnapshotRequest {
  __type?: "DescribeApplicationSnapshotRequest";
  /**
   * <p>The name of an existing application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The identifier of an application snapshot. You can retrieve this value using .</p>
   */
  SnapshotName: string | undefined;
}

export namespace DescribeApplicationSnapshotRequest {
  export function isa(o: any): o is DescribeApplicationSnapshotRequest {
    return __isa(o, "DescribeApplicationSnapshotRequest");
  }
}

export interface DescribeApplicationSnapshotResponse {
  __type?: "DescribeApplicationSnapshotResponse";
  /**
   * <p>An object containing information about the application snapshot.</p>
   */
  SnapshotDetails: SnapshotDetails | undefined;
}

export namespace DescribeApplicationSnapshotResponse {
  export function isa(o: any): o is DescribeApplicationSnapshotResponse {
    return __isa(o, "DescribeApplicationSnapshotResponse");
  }
}

/**
 * <p>Describes the data format when records are written to the destination in an SQL-based
 *       Amazon Kinesis Data Analytics application. </p>
 */
export interface DestinationSchema {
  __type?: "DestinationSchema";
  /**
   * <p>Specifies the format of the records on the output stream.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;
}

export namespace DestinationSchema {
  export function isa(o: any): o is DestinationSchema {
    return __isa(o, "DestinationSchema");
  }
}

export interface DiscoverInputSchemaRequest {
  __type?: "DiscoverInputSchemaRequest";
  /**
   * <p>The <a>InputProcessingConfiguration</a> to use to preprocess the records before discovering the schema of the records.</p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * <p>The point at which you want Kinesis Data Analytics to start reading records from the
   *       specified streaming source discovery purposes.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of the streaming source.</p>
   */
  ResourceARN?: string;

  /**
   * <p>Specify this parameter to discover a schema from data in an Amazon S3
   *       object.</p>
   */
  S3Configuration?: S3Configuration;

  /**
   * <p>The ARN of the role that is used to access the streaming source.</p>
   */
  ServiceExecutionRole: string | undefined;
}

export namespace DiscoverInputSchemaRequest {
  export function isa(o: any): o is DiscoverInputSchemaRequest {
    return __isa(o, "DiscoverInputSchemaRequest");
  }
}

export interface DiscoverInputSchemaResponse {
  __type?: "DiscoverInputSchemaResponse";
  /**
   * <p>The schema inferred from the streaming source. It identifies the format of the data in the
   *       streaming source and how each data element maps to corresponding columns in the in-application
   *       stream that you can create.</p>
   */
  InputSchema?: SourceSchema;

  /**
   * <p>An array of elements, where each element corresponds to a row in a stream record (a stream record can have more than one row).</p>
   */
  ParsedInputRecords?: Array<Array<string>>;

  /**
   * <p>The stream data that was modified by the processor specified in the
   *         <code>InputProcessingConfiguration</code> parameter.</p>
   */
  ProcessedInputRecords?: Array<string>;

  /**
   * <p>The raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: Array<string>;
}

export namespace DiscoverInputSchemaResponse {
  export function isa(o: any): o is DiscoverInputSchemaResponse {
    return __isa(o, "DiscoverInputSchemaResponse");
  }
}

/**
 * <p>Describes execution properties for a Java-based Kinesis Data Analytics
 *       application.</p>
 */
export interface EnvironmentProperties {
  __type?: "EnvironmentProperties";
  /**
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroups: Array<PropertyGroup> | undefined;
}

export namespace EnvironmentProperties {
  export function isa(o: any): o is EnvironmentProperties {
    return __isa(o, "EnvironmentProperties");
  }
}

/**
 * <p>Describes the execution properties for a Java-based Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface EnvironmentPropertyDescriptions {
  __type?: "EnvironmentPropertyDescriptions";
  /**
   * <p>Describes the execution property groups.</p>
   */
  PropertyGroupDescriptions?: Array<PropertyGroup>;
}

export namespace EnvironmentPropertyDescriptions {
  export function isa(o: any): o is EnvironmentPropertyDescriptions {
    return __isa(o, "EnvironmentPropertyDescriptions");
  }
}

/**
 * <p>Describes updates to the execution property groups for a Java-based Amazon
 *       Kinesis Data Analytics application.</p>
 */
export interface EnvironmentPropertyUpdates {
  __type?: "EnvironmentPropertyUpdates";
  /**
   * <p>Describes updates to the execution property groups.</p>
   */
  PropertyGroups: Array<PropertyGroup> | undefined;
}

export namespace EnvironmentPropertyUpdates {
  export function isa(o: any): o is EnvironmentPropertyUpdates {
    return __isa(o, "EnvironmentPropertyUpdates");
  }
}

/**
 * <p>Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface FlinkApplicationConfiguration {
  __type?: "FlinkApplicationConfiguration";
  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the
   *       process of persisting application state for fault tolerance.
   *       For more information, see
   *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/concepts/programming-model.html#checkpoints-for-fault-tolerance">
   *         Checkpoints for Fault Tolerance</a> in the
   *       <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink Documentation</a>. </p>
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

export namespace FlinkApplicationConfiguration {
  export function isa(o: any): o is FlinkApplicationConfiguration {
    return __isa(o, "FlinkApplicationConfiguration");
  }
}

/**
 * <p>Describes configuration parameters for a Java-based Amazon Kinesis Data Analytics
 *       application.</p>
 */
export interface FlinkApplicationConfigurationDescription {
  __type?: "FlinkApplicationConfigurationDescription";
  /**
   * <p>Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.</p>
   */
  CheckpointConfigurationDescription?: CheckpointConfigurationDescription;

  /**
   * <p>The job plan for an application. For more information about the job plan, see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/internals/job_scheduling.html">Jobs and Scheduling</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink
   *         Documentation</a>. To retrieve the job plan for the application, use the <a>DescribeApplicationRequest$IncludeAdditionalDetails</a> parameter of the <a>DescribeApplication</a> operation.</p>
   */
  JobPlanDescription?: string;

  /**
   * <p>Describes configuration parameters for Amazon CloudWatch logging for an
   *       application.</p>
   */
  MonitoringConfigurationDescription?: MonitoringConfigurationDescription;

  /**
   * <p>Describes parameters for how an application executes multiple tasks simultaneously.</p>
   */
  ParallelismConfigurationDescription?: ParallelismConfigurationDescription;
}

export namespace FlinkApplicationConfigurationDescription {
  export function isa(o: any): o is FlinkApplicationConfigurationDescription {
    return __isa(o, "FlinkApplicationConfigurationDescription");
  }
}

/**
 * <p>Describes updates to the configuration parameters for a Java-based Amazon Kinesis
 *       Data Analytics application.</p>
 */
export interface FlinkApplicationConfigurationUpdate {
  __type?: "FlinkApplicationConfigurationUpdate";
  /**
   * <p>Describes updates to an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance.</p>
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

export namespace FlinkApplicationConfigurationUpdate {
  export function isa(o: any): o is FlinkApplicationConfigurationUpdate {
    return __isa(o, "FlinkApplicationConfigurationUpdate");
  }
}

/**
 * <p>Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application.</p>
 */
export interface FlinkRunConfiguration {
  __type?: "FlinkRunConfiguration";
  /**
   * <p>When restoring from a savepoint, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program.
   *      This will happen if the program is updated between savepoints to remove stateful parameters, and state data in the savepoint no longer
   *      corresponds to valid application data. For more information, see
   *      <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/ops/state/savepoints.html#allowing-non-restored-state">
   *        Allowing Non-Restored State</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.8/">Apache Flink
   *          documentation</a>.</p>
   */
  AllowNonRestoredState?: boolean;
}

export namespace FlinkRunConfiguration {
  export function isa(o: any): o is FlinkRunConfiguration {
    return __isa(o, "FlinkRunConfiguration");
  }
}

/**
 * <p>When you configure the application input for an SQL-based Amazon Kinesis Data Analytics
 *       application, you specify the streaming source, the in-application stream name that is created,
 *       and the mapping between the two. </p>
 */
export interface Input {
  __type?: "Input";
  /**
   * <p>Describes the number of in-application streams to create. </p>
   */
  InputParallelism?: InputParallelism;

  /**
   * <p>The <a>InputProcessingConfiguration</a> for the input. An input processor transforms records as they are received
   *       from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is
   *       <a>InputLambdaProcessor</a>. </p>
   */
  InputProcessingConfiguration?: InputProcessingConfiguration;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps
   *       to corresponding columns in the in-application stream that is being created.</p>
   *          <p>Also used to describe the format of the reference data source.</p>
   */
  InputSchema: SourceSchema | undefined;

  /**
   * <p>If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.</p>
   */
  KinesisFirehoseInput?: KinesisFirehoseInput;

  /**
   * <p>If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInput?: KinesisStreamsInput;

  /**
   * <p>The name prefix to use when creating an in-application stream. Suppose that you specify a
   *       prefix "<code>MyInApplicationStream</code>." Kinesis Data Analytics then creates one or more
   *       (as per the <code>InputParallelism</code> count you specified) in-application streams with the
   *       names "<code>MyInApplicationStream_001</code>," "<code>MyInApplicationStream_002</code>," and
   *       so on. </p>
   */
  NamePrefix: string | undefined;
}

export namespace Input {
  export function isa(o: any): o is Input {
    return __isa(o, "Input");
  }
}

/**
 * <p>Describes the application input configuration for an SQL-based Amazon Kinesis Data
 *       Analytics application. </p>
 */
export interface InputDescription {
  __type?: "InputDescription";
  /**
   * <p>Returns the in-application stream names that are mapped to the stream source. </p>
   */
  InAppStreamNames?: Array<string>;

  /**
   * <p>The input ID that is associated with the application input. This is the ID that Kinesis
   *       Data Analytics assigns to each input configuration that you add to your application. </p>
   */
  InputId?: string;

  /**
   * <p>Describes the configured parallelism (number of in-application streams mapped to the streaming source). </p>
   */
  InputParallelism?: InputParallelism;

  /**
   * <p>The description of the preprocessor that executes on records in this input before the application's code is run. </p>
   */
  InputProcessingConfigurationDescription?: InputProcessingConfigurationDescription;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created. </p>
   */
  InputSchema?: SourceSchema;

  /**
   * <p>The point at which the application is configured to read from the input stream.</p>
   */
  InputStartingPositionConfiguration?: InputStartingPositionConfiguration;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is configured as a streaming source, provides the delivery stream's ARN. </p>
   */
  KinesisFirehoseInputDescription?: KinesisFirehoseInputDescription;

  /**
   * <p>If a Kinesis data stream is configured as a streaming source, provides the Kinesis data
   *       stream's Amazon Resource Name (ARN). </p>
   */
  KinesisStreamsInputDescription?: KinesisStreamsInputDescription;

  /**
   * <p>The in-application name prefix.</p>
   */
  NamePrefix?: string;
}

export namespace InputDescription {
  export function isa(o: any): o is InputDescription {
    return __isa(o, "InputDescription");
  }
}

/**
 * <p>An object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is
 *       used to preprocess records in the stream in an SQL-based Amazon Kinesis Data Analytics
 *       application. </p>
 */
export interface InputLambdaProcessor {
  __type?: "InputLambdaProcessor";
  /**
   * <p>The ARN of the AWS Lambda function that operates on records in the stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;
}

export namespace InputLambdaProcessor {
  export function isa(o: any): o is InputLambdaProcessor {
    return __isa(o, "InputLambdaProcessor");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, an object that contains the
 *       Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in
 *       the stream.</p>
 */
export interface InputLambdaProcessorDescription {
  __type?: "InputLambdaProcessorDescription";
  /**
   * <p>The ARN of the AWS Lambda function that is used to preprocess the records in the
   *       stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the IAM role that is used to access the AWS Lambda function.</p>
   *          <note>
   *             <p>Provided for backward compatibility. Applications that are created with the current API
   *         version have an application-level service execution role rather than a resource-level
   *         role.</p>
   *          </note>
   */
  RoleARN?: string;
}

export namespace InputLambdaProcessorDescription {
  export function isa(o: any): o is InputLambdaProcessorDescription {
    return __isa(o, "InputLambdaProcessorDescription");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, represents an update to the
 *         <a>InputLambdaProcessor</a> that is used to preprocess the records in the
 *       stream.</p>
 */
export interface InputLambdaProcessorUpdate {
  __type?: "InputLambdaProcessorUpdate";
  /**
   * <p>The Amazon Resource Name (ARN) of the new AWS Lambda function that is used to preprocess
   *       the records in the stream.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace InputLambdaProcessorUpdate {
  export function isa(o: any): o is InputLambdaProcessorUpdate {
    return __isa(o, "InputLambdaProcessorUpdate");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the number of
 *       in-application streams to create for a given streaming source. </p>
 */
export interface InputParallelism {
  __type?: "InputParallelism";
  /**
   * <p>The number of in-application streams to create.</p>
   */
  Count?: number;
}

export namespace InputParallelism {
  export function isa(o: any): o is InputParallelism {
    return __isa(o, "InputParallelism");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides updates to the
 *       parallelism count.</p>
 */
export interface InputParallelismUpdate {
  __type?: "InputParallelismUpdate";
  /**
   * <p>The number of in-application streams to create for the specified streaming source.</p>
   */
  CountUpdate: number | undefined;
}

export namespace InputParallelismUpdate {
  export function isa(o: any): o is InputParallelismUpdate {
    return __isa(o, "InputParallelismUpdate");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is
 *       used to preprocess the records in the stream before being processed by your application code.
 *       Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.</p>
 */
export interface InputProcessingConfiguration {
  __type?: "InputProcessingConfiguration";
  /**
   * <p>The <a>InputLambdaProcessor</a> that is used to preprocess the records
   *       in the stream before being processed by your application code.</p>
   */
  InputLambdaProcessor: InputLambdaProcessor | undefined;
}

export namespace InputProcessingConfiguration {
  export function isa(o: any): o is InputProcessingConfiguration {
    return __isa(o, "InputProcessingConfiguration");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides the configuration
 *       information about an input processor. Currently, the only input processor available is <a href="https://aws.amazon.com/documentation/lambda/">AWS Lambda</a>.</p>
 */
export interface InputProcessingConfigurationDescription {
  __type?: "InputProcessingConfigurationDescription";
  /**
   * <p>Provides configuration information about the associated <a>InputLambdaProcessorDescription</a>
   *          </p>
   */
  InputLambdaProcessorDescription?: InputLambdaProcessorDescription;
}

export namespace InputProcessingConfigurationDescription {
  export function isa(o: any): o is InputProcessingConfigurationDescription {
    return __isa(o, "InputProcessingConfigurationDescription");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.</p>
 */
export interface InputProcessingConfigurationUpdate {
  __type?: "InputProcessingConfigurationUpdate";
  /**
   * <p>Provides update information for an <a>InputLambdaProcessor</a>.</p>
   */
  InputLambdaProcessorUpdate: InputLambdaProcessorUpdate | undefined;
}

export namespace InputProcessingConfigurationUpdate {
  export function isa(o: any): o is InputProcessingConfigurationUpdate {
    return __isa(o, "InputProcessingConfigurationUpdate");
  }
}

/**
 * <p>Describes updates for an SQL-based Amazon Kinesis Data Analytics application's input
 *       schema.</p>
 */
export interface InputSchemaUpdate {
  __type?: "InputSchemaUpdate";
  /**
   * <p>A list of <code>RecordColumn</code> objects. Each object describes the mapping
   *       of the streaming source element to the corresponding column in the in-application stream.</p>
   */
  RecordColumnUpdates?: Array<RecordColumn>;

  /**
   * <p>Specifies the encoding of the records in the streaming source; for example, UTF-8.</p>
   */
  RecordEncodingUpdate?: string;

  /**
   * <p>Specifies the format of the records on the streaming source.</p>
   */
  RecordFormatUpdate?: RecordFormat;
}

export namespace InputSchemaUpdate {
  export function isa(o: any): o is InputSchemaUpdate {
    return __isa(o, "InputSchemaUpdate");
  }
}

export enum InputStartingPosition {
  LAST_STOPPED_POINT = "LAST_STOPPED_POINT",
  NOW = "NOW",
  TRIM_HORIZON = "TRIM_HORIZON"
}

/**
 * <p>Describes the point at which the application reads from
 *       the streaming source.</p>
 */
export interface InputStartingPositionConfiguration {
  __type?: "InputStartingPositionConfiguration";
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

export namespace InputStartingPositionConfiguration {
  export function isa(o: any): o is InputStartingPositionConfiguration {
    return __isa(o, "InputStartingPositionConfiguration");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes updates to a
 *       specific input configuration (identified by the <code>InputId</code> of an application). </p>
 */
export interface InputUpdate {
  __type?: "InputUpdate";
  /**
   * <p>The input ID of the application input to be updated.</p>
   */
  InputId: string | undefined;

  /**
   * <p>Describes the parallelism updates (the number of in-application streams Kinesis Data
   *       Analytics creates for the specific streaming source).</p>
   */
  InputParallelismUpdate?: InputParallelismUpdate;

  /**
   * <p>Describes updates to an <a>InputProcessingConfiguration</a>.</p>
   */
  InputProcessingConfigurationUpdate?: InputProcessingConfigurationUpdate;

  /**
   * <p>Describes the data format on the streaming source, and
   *       how record elements on the streaming source map to columns of the in-application stream that is created.</p>
   */
  InputSchemaUpdate?: InputSchemaUpdate;

  /**
   * <p>If a Kinesis Data Firehose delivery stream is the streaming source to be
   *       updated, provides an updated stream ARN.</p>
   */
  KinesisFirehoseInputUpdate?: KinesisFirehoseInputUpdate;

  /**
   * <p>If a Kinesis data stream is the streaming source to be updated, provides an
   *       updated stream Amazon Resource Name (ARN).</p>
   */
  KinesisStreamsInputUpdate?: KinesisStreamsInputUpdate;

  /**
   * <p>The name prefix for in-application streams that Kinesis Data Analytics creates for the
   *       specific streaming source.</p>
   */
  NamePrefixUpdate?: string;
}

export namespace InputUpdate {
  export function isa(o: any): o is InputUpdate {
    return __isa(o, "InputUpdate");
  }
}

/**
 * <p>The user-provided application configuration is not valid.</p>
 */
export interface InvalidApplicationConfigurationException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidApplicationConfigurationException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidApplicationConfigurationException {
  export function isa(o: any): o is InvalidApplicationConfigurationException {
    return __isa(o, "InvalidApplicationConfigurationException");
  }
}

/**
 * <p>The specified input parameter value is not valid.</p>
 */
export interface InvalidArgumentException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidArgumentException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgumentException {
  export function isa(o: any): o is InvalidArgumentException {
    return __isa(o, "InvalidArgumentException");
  }
}

/**
 * <p>The request JSON is not valid for the operation.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides additional mapping
 *       information when JSON is the record format on the streaming source.</p>
 */
export interface JSONMappingParameters {
  __type?: "JSONMappingParameters";
  /**
   * <p>The path to the top-level parent that contains the records.</p>
   */
  RecordRowPath: string | undefined;
}

export namespace JSONMappingParameters {
  export function isa(o: any): o is JSONMappingParameters {
    return __isa(o, "JSONMappingParameters");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, identifies a Kinesis Data
 *       Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon
 *       Resource Name (ARN).</p>
 */
export interface KinesisFirehoseInput {
  __type?: "KinesisFirehoseInput";
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  ResourceARN: string | undefined;
}

export namespace KinesisFirehoseInput {
  export function isa(o: any): o is KinesisFirehoseInput {
    return __isa(o, "KinesisFirehoseInput");
  }
}

/**
 * <p>Describes the Amazon Kinesis Data Firehose delivery stream that is configured as the streaming source
 *       in the application input configuration. </p>
 */
export interface KinesisFirehoseInputDescription {
  __type?: "KinesisFirehoseInputDescription";
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

export namespace KinesisFirehoseInputDescription {
  export function isa(o: any): o is KinesisFirehoseInputDescription {
    return __isa(o, "KinesisFirehoseInputDescription");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, when updating application
 *       input configuration, provides information about a Kinesis Data Firehose delivery stream as the
 *       streaming source.</p>
 */
export interface KinesisFirehoseInputUpdate {
  __type?: "KinesisFirehoseInputUpdate";
  /**
   * <p>The Amazon Resource Name (ARN) of the input delivery stream to read.</p>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace KinesisFirehoseInputUpdate {
  export function isa(o: any): o is KinesisFirehoseInputUpdate {
    return __isa(o, "KinesisFirehoseInputUpdate");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, when configuring application
 *       output, identifies a Kinesis Data Firehose delivery stream as the destination. You provide the
 *       stream Amazon Resource Name (ARN) of the delivery stream. </p>
 */
export interface KinesisFirehoseOutput {
  __type?: "KinesisFirehoseOutput";
  /**
   * <p>The ARN of the destination delivery stream to write to.</p>
   */
  ResourceARN: string | undefined;
}

export namespace KinesisFirehoseOutput {
  export function isa(o: any): o is KinesisFirehoseOutput {
    return __isa(o, "KinesisFirehoseOutput");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis
 *       Data Firehose delivery stream that is configured as its destination.</p>
 */
export interface KinesisFirehoseOutputDescription {
  __type?: "KinesisFirehoseOutputDescription";
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

export namespace KinesisFirehoseOutputDescription {
  export function isa(o: any): o is KinesisFirehoseOutputDescription {
    return __isa(o, "KinesisFirehoseOutputDescription");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, when updating an output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about a Kinesis Data Firehose delivery stream that is configured as the destination.</p>
 */
export interface KinesisFirehoseOutputUpdate {
  __type?: "KinesisFirehoseOutputUpdate";
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream to write to. </p>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace KinesisFirehoseOutputUpdate {
  export function isa(o: any): o is KinesisFirehoseOutputUpdate {
    return __isa(o, "KinesisFirehoseOutputUpdate");
  }
}

/**
 * <p> Identifies an Amazon Kinesis data stream as the streaming source. You provide the
 *       stream's Amazon Resource Name (ARN).</p>
 */
export interface KinesisStreamsInput {
  __type?: "KinesisStreamsInput";
  /**
   * <p>The ARN of the input Kinesis data stream to read.</p>
   */
  ResourceARN: string | undefined;
}

export namespace KinesisStreamsInput {
  export function isa(o: any): o is KinesisStreamsInput {
    return __isa(o, "KinesisStreamsInput");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the Kinesis data
 *       stream that is configured as the streaming source in the application input configuration. </p>
 */
export interface KinesisStreamsInputDescription {
  __type?: "KinesisStreamsInputDescription";
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

export namespace KinesisStreamsInputDescription {
  export function isa(o: any): o is KinesisStreamsInputDescription {
    return __isa(o, "KinesisStreamsInputDescription");
  }
}

/**
 * <p>When you update the input configuration for an SQL-based Amazon Kinesis Data Analytics
 *       application, provides information about an Amazon Kinesis stream as the streaming
 *       source.</p>
 */
export interface KinesisStreamsInputUpdate {
  __type?: "KinesisStreamsInputUpdate";
  /**
   * <p>The Amazon Resource Name (ARN) of the input Kinesis data stream to read.</p>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace KinesisStreamsInputUpdate {
  export function isa(o: any): o is KinesisStreamsInputUpdate {
    return __isa(o, "KinesisStreamsInputUpdate");
  }
}

/**
 * <p>When you configure an SQL-based Amazon Kinesis Data Analytics application's output,
 *       identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource
 *       Name (ARN). </p>
 */
export interface KinesisStreamsOutput {
  __type?: "KinesisStreamsOutput";
  /**
   * <p>The ARN of the destination Kinesis data stream to write to.</p>
   */
  ResourceARN: string | undefined;
}

export namespace KinesisStreamsOutput {
  export function isa(o: any): o is KinesisStreamsOutput {
    return __isa(o, "KinesisStreamsOutput");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application's output, describes the Kinesis
 *       data stream that is configured as its destination. </p>
 */
export interface KinesisStreamsOutputDescription {
  __type?: "KinesisStreamsOutputDescription";
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

export namespace KinesisStreamsOutputDescription {
  export function isa(o: any): o is KinesisStreamsOutputDescription {
    return __isa(o, "KinesisStreamsOutputDescription");
  }
}

/**
 * <p>When you update an SQL-based Amazon Kinesis Data Analytics application's output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about a Kinesis data stream that is configured as the destination.</p>
 */
export interface KinesisStreamsOutputUpdate {
  __type?: "KinesisStreamsOutputUpdate";
  /**
   * <p>The Amazon Resource Name (ARN) of the Kinesis data stream where you want to write the
   *       output.</p>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace KinesisStreamsOutputUpdate {
  export function isa(o: any): o is KinesisStreamsOutputUpdate {
    return __isa(o, "KinesisStreamsOutputUpdate");
  }
}

/**
 * <p>When you configure an SQL-based Amazon Kinesis Data Analytics application's output,
 *       identifies an AWS Lambda function as the destination. You provide the function Amazon Resource
 *       Name (ARN) of the Lambda function. </p>
 */
export interface LambdaOutput {
  __type?: "LambdaOutput";
  /**
   * <p>The Amazon Resource Name (ARN) of the destination Lambda function to write to.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARN: string | undefined;
}

export namespace LambdaOutput {
  export function isa(o: any): o is LambdaOutput {
    return __isa(o, "LambdaOutput");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application output, describes the AWS
 *       Lambda function that is configured as its destination. </p>
 */
export interface LambdaOutputDescription {
  __type?: "LambdaOutputDescription";
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

export namespace LambdaOutputDescription {
  export function isa(o: any): o is LambdaOutputDescription {
    return __isa(o, "LambdaOutputDescription");
  }
}

/**
 * <p>When you update an SQL-based Amazon Kinesis Data Analytics application's output
 *       configuration using the <a>UpdateApplication</a> operation, provides information
 *       about an AWS Lambda function that is configured as the destination.</p>
 */
export interface LambdaOutputUpdate {
  __type?: "LambdaOutputUpdate";
  /**
   * <p>The Amazon Resource Name (ARN) of the destination AWS Lambda function.</p>
   *          <note>
   *             <p>To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see <a href="/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda">Example ARNs: AWS Lambda</a>
   *             </p>
   *          </note>
   */
  ResourceARNUpdate: string | undefined;
}

export namespace LambdaOutputUpdate {
  export function isa(o: any): o is LambdaOutputUpdate {
    return __isa(o, "LambdaOutputUpdate");
  }
}

/**
 * <p>The number of allowed resources has been exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export interface ListApplicationSnapshotsRequest {
  __type?: "ListApplicationSnapshotsRequest";
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
   *       output available. Set it to the value of the previous call's <code>NextToken</code> response to indicate where the output should continue from. </p>
   */
  NextToken?: string;
}

export namespace ListApplicationSnapshotsRequest {
  export function isa(o: any): o is ListApplicationSnapshotsRequest {
    return __isa(o, "ListApplicationSnapshotsRequest");
  }
}

export interface ListApplicationSnapshotsResponse {
  __type?: "ListApplicationSnapshotsResponse";
  /**
   * <p>The token for the next set of results, or <code>null</code> if there are no additional results.</p>
   */
  NextToken?: string;

  /**
   * <p>A collection of objects containing information about the application snapshots.</p>
   */
  SnapshotSummaries?: Array<SnapshotDetails>;
}

export namespace ListApplicationSnapshotsResponse {
  export function isa(o: any): o is ListApplicationSnapshotsResponse {
    return __isa(o, "ListApplicationSnapshotsResponse");
  }
}

export interface ListApplicationsRequest {
  __type?: "ListApplicationsRequest";
  /**
   * <p>The maximum number of applications to list.</p>
   */
  Limit?: number;

  /**
   * <p>If a previous command returned a pagination token,
   *       pass it into this value to retrieve the next set of results.
   *       For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the AWS Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;
}

export namespace ListApplicationsRequest {
  export function isa(o: any): o is ListApplicationsRequest {
    return __isa(o, "ListApplicationsRequest");
  }
}

export interface ListApplicationsResponse {
  __type?: "ListApplicationsResponse";
  /**
   * <p>A list of <code>ApplicationSummary</code> objects.</p>
   */
  ApplicationSummaries: Array<ApplicationSummary> | undefined;

  /**
   * <p>The pagination token for the next set of results, or <code>null</code> if there are no additional results.
   *       Pass this token into a subsequent command to retrieve the next set of items
   *       For more information about pagination, see
   *       <a href="https://docs.aws.amazon.com/cli/latest/userguide/pagination.html">Using the AWS Command Line Interface's Pagination Options</a>.</p>
   */
  NextToken?: string;
}

export namespace ListApplicationsResponse {
  export function isa(o: any): o is ListApplicationsResponse {
    return __isa(o, "ListApplicationsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The ARN of the application for which to retrieve tags.</p>
   */
  ResourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The key-value tags assigned to the application.</p>
   */
  Tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export enum LogLevel {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  INFO = "INFO",
  WARN = "WARN"
}

/**
 * <p>When you configure an SQL-based Amazon Kinesis Data Analytics application's input at the
 *       time of creating or updating an application, provides additional mapping information specific
 *       to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the
 *       streaming source.</p>
 */
export interface MappingParameters {
  __type?: "MappingParameters";
  /**
   * <p>Provides additional mapping information when the record format uses delimiters
   *       (for example, CSV).</p>
   */
  CSVMappingParameters?: CSVMappingParameters;

  /**
   * <p>Provides additional mapping information when JSON is the record format on the streaming source.</p>
   */
  JSONMappingParameters?: JSONMappingParameters;
}

export namespace MappingParameters {
  export function isa(o: any): o is MappingParameters {
    return __isa(o, "MappingParameters");
  }
}

export enum MetricsLevel {
  APPLICATION = "APPLICATION",
  OPERATOR = "OPERATOR",
  PARALLELISM = "PARALLELISM",
  TASK = "TASK"
}

/**
 * <p>Describes configuration parameters for Amazon CloudWatch logging for a Java-based
 *       Kinesis Data Analytics application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.</p>
 */
export interface MonitoringConfiguration {
  __type?: "MonitoringConfiguration";
  /**
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.
   *     You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or
   *     <code>MetricsLevel</code> parameters.</p>
   */
  ConfigurationType: ConfigurationType | string | undefined;

  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: LogLevel | string;

  /**
   * <p>Describes the granularity of the CloudWatch Logs for an application.</p>
   */
  MetricsLevel?: MetricsLevel | string;
}

export namespace MonitoringConfiguration {
  export function isa(o: any): o is MonitoringConfiguration {
    return __isa(o, "MonitoringConfiguration");
  }
}

/**
 * <p>Describes configuration parameters for CloudWatch logging for a Java-based
 *       Kinesis Data Analytics application.</p>
 */
export interface MonitoringConfigurationDescription {
  __type?: "MonitoringConfigurationDescription";
  /**
   * <p>Describes whether to use the default CloudWatch logging configuration for an application.</p>
   */
  ConfigurationType?: ConfigurationType | string;

  /**
   * <p>Describes the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevel?: LogLevel | string;

  /**
   * <p>Describes the granularity of the CloudWatch Logs for an application.</p>
   */
  MetricsLevel?: MetricsLevel | string;
}

export namespace MonitoringConfigurationDescription {
  export function isa(o: any): o is MonitoringConfigurationDescription {
    return __isa(o, "MonitoringConfigurationDescription");
  }
}

/**
 * <p>Describes updates to configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application.</p>
 */
export interface MonitoringConfigurationUpdate {
  __type?: "MonitoringConfigurationUpdate";
  /**
   * <p>Describes updates to whether to use the default CloudWatch logging configuration for
   *       an application. You must set this property to <code>CUSTOM</code> in order to set the <code>LogLevel</code> or
   *     <code>MetricsLevel</code> parameters.</p>
   */
  ConfigurationTypeUpdate?: ConfigurationType | string;

  /**
   * <p>Describes updates to the verbosity of the CloudWatch Logs for an application.</p>
   */
  LogLevelUpdate?: LogLevel | string;

  /**
   * <p>Describes updates to the granularity of the CloudWatch Logs for an application.</p>
   */
  MetricsLevelUpdate?: MetricsLevel | string;
}

export namespace MonitoringConfigurationUpdate {
  export function isa(o: any): o is MonitoringConfigurationUpdate {
    return __isa(o, "MonitoringConfigurationUpdate");
  }
}

/**
 * <p> Describes an SQL-based Amazon Kinesis Data Analytics application's output configuration,
 *       in which you identify an in-application stream and a destination where you want the
 *       in-application stream data to be written. The destination can be a Kinesis data stream or a
 *       Kinesis Data Firehose delivery stream. </p>
 *
 *          <p></p>
 */
export interface Output {
  __type?: "Output";
  /**
   * <p>Describes the data format when records are written to the destination.
   *       </p>
   */
  DestinationSchema: DestinationSchema | undefined;

  /**
   * <p>Identifies an Amazon Kinesis Data Firehose delivery stream as the destination.</p>
   */
  KinesisFirehoseOutput?: KinesisFirehoseOutput;

  /**
   * <p>Identifies an Amazon Kinesis data stream
   *       as the destination.</p>
   */
  KinesisStreamsOutput?: KinesisStreamsOutput;

  /**
   * <p>Identifies an AWS Lambda function as the destination.</p>
   */
  LambdaOutput?: LambdaOutput;

  /**
   * <p>The name of the in-application stream.</p>
   */
  Name: string | undefined;
}

export namespace Output {
  export function isa(o: any): o is Output {
    return __isa(o, "Output");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the application
 *       output configuration, which includes the in-application stream name and the destination where
 *       the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data
 *       Firehose delivery stream. </p>
 */
export interface OutputDescription {
  __type?: "OutputDescription";
  /**
   * <p>The data format used for writing data to the destination.</p>
   */
  DestinationSchema?: DestinationSchema;

  /**
   * <p>Describes the Kinesis Data Firehose delivery stream that is configured as the destination
   *       where output is written.</p>
   */
  KinesisFirehoseOutputDescription?: KinesisFirehoseOutputDescription;

  /**
   * <p>Describes the Kinesis data stream that is configured as the destination where output is
   *       written.</p>
   */
  KinesisStreamsOutputDescription?: KinesisStreamsOutputDescription;

  /**
   * <p>Describes the Lambda function that is configured as the destination where output is
   *       written.</p>
   */
  LambdaOutputDescription?: LambdaOutputDescription;

  /**
   * <p>The name of the in-application stream that is configured as output.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier for the output configuration.</p>
   */
  OutputId?: string;
}

export namespace OutputDescription {
  export function isa(o: any): o is OutputDescription {
    return __isa(o, "OutputDescription");
  }
}

/**
 * <p> For an SQL-based Amazon Kinesis Data Analytics application, describes updates to the
 *       output configuration identified by the <code>OutputId</code>. </p>
 */
export interface OutputUpdate {
  __type?: "OutputUpdate";
  /**
   * <p>Describes the data format when records are written to the destination.
   *       </p>
   */
  DestinationSchemaUpdate?: DestinationSchema;

  /**
   * <p>Describes a Kinesis Data Firehose delivery stream as the destination for the
   *       output.</p>
   */
  KinesisFirehoseOutputUpdate?: KinesisFirehoseOutputUpdate;

  /**
   * <p>Describes a Kinesis data stream as the destination for the output.</p>
   */
  KinesisStreamsOutputUpdate?: KinesisStreamsOutputUpdate;

  /**
   * <p>Describes an AWS Lambda function as the destination for the output.</p>
   */
  LambdaOutputUpdate?: LambdaOutputUpdate;

  /**
   * <p>If you want to specify a different in-application stream
   *       for this output configuration, use this field to
   *       specify the new in-application stream name.</p>
   */
  NameUpdate?: string;

  /**
   * <p>Identifies the specific output configuration that you want to update.</p>
   */
  OutputId: string | undefined;
}

export namespace OutputUpdate {
  export function isa(o: any): o is OutputUpdate {
    return __isa(o, "OutputUpdate");
  }
}

/**
 * <p>Describes parameters for how a Java-based Amazon Kinesis Data Analytics
 *       application executes multiple tasks simultaneously. For more information about parallelism,
 *       see <a href="https://ci.apache.org/projects/flink/flink-docs-stable/dev/parallel.html">Parallel Execution</a> in the <a href="https://ci.apache.org/projects/flink/flink-docs-release-1.6/">Apache Flink
 *         Documentation</a>.</p>
 */
export interface ParallelismConfiguration {
  __type?: "ParallelismConfiguration";
  /**
   * <p>Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabled?: boolean;

  /**
   * <p>Describes whether the application uses the default parallelism for the Kinesis Data
   *       Analytics service. You must set this property to <code>CUSTOM</code>
   *     in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.</p>
   */
  ConfigurationType: ConfigurationType | string | undefined;

  /**
   * <p>Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics
   *       application can perform. If <code>AutoScalingEnabled</code> is set to True, Kinesis Data Analytics increases the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase the <code>CurrentParallelism</code> value up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can
   *     reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   */
  Parallelism?: number;

  /**
   * <p>Describes the number of parallel tasks that a Java-based Kinesis Data Analytics
   *       application can perform per Kinesis Processing Unit (KPU) used by the application. For more
   *       information about KPUs, see <a href="http://aws.amazon.com/kinesis/data-analytics/pricing/">Amazon Kinesis Data Analytics Pricing</a>.</p>
   */
  ParallelismPerKPU?: number;
}

export namespace ParallelismConfiguration {
  export function isa(o: any): o is ParallelismConfiguration {
    return __isa(o, "ParallelismConfiguration");
  }
}

/**
 * <p>Describes parameters for how a Java-based Kinesis Data Analytics application
 *       executes multiple tasks simultaneously.</p>
 */
export interface ParallelismConfigurationDescription {
  __type?: "ParallelismConfigurationDescription";
  /**
   * <p>Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabled?: boolean;

  /**
   * <p>Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. </p>
   */
  ConfigurationType?: ConfigurationType | string;

  /**
   * <p>Describes the current number of parallel tasks that a Java-based Kinesis Data Analytics
   *       application can perform. If <code>AutoScalingEnabled</code> is set to True, Kinesis Data Analytics can increase this value in response to application
   *     load. The service can increase this value up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can reduce
   *     the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   */
  CurrentParallelism?: number;

  /**
   * <p>Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics
   *       application can perform. If <code>AutoScalingEnabled</code> is set to True, then Kinesis Data Analytics can increase the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service can
   *     reduce the <code>CurrentParallelism</code> value down to the <code>Parallelism</code> setting.</p>
   */
  Parallelism?: number;

  /**
   * <p>Describes the number of parallel tasks that a Java-based Kinesis Data Analytics
   *       application can perform per Kinesis Processing Unit (KPU) used by the application.</p>
   */
  ParallelismPerKPU?: number;
}

export namespace ParallelismConfigurationDescription {
  export function isa(o: any): o is ParallelismConfigurationDescription {
    return __isa(o, "ParallelismConfigurationDescription");
  }
}

/**
 * <p>Describes updates to parameters for how a Java-based Kinesis Data Analytics
 *       application executes multiple tasks simultaneously.</p>
 */
export interface ParallelismConfigurationUpdate {
  __type?: "ParallelismConfigurationUpdate";
  /**
   * <p>Describes updates to whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.</p>
   */
  AutoScalingEnabledUpdate?: boolean;

  /**
   * <p>Describes updates to whether the application uses the default parallelism for the Kinesis Data Analytics service, or if a custom parallelism is used.
   *     You must set this property to <code>CUSTOM</code>
   *     in order to change your application's <code>AutoScalingEnabled</code>, <code>Parallelism</code>, or <code>ParallelismPerKPU</code> properties.</p>
   */
  ConfigurationTypeUpdate?: ConfigurationType | string;

  /**
   * <p>Describes updates to the number of parallel tasks an application can perform per Kinesis Processing Unit (KPU) used by the application.</p>
   */
  ParallelismPerKPUUpdate?: number;

  /**
   * <p>Describes updates to the initial number of parallel tasks an application can perform. If <code>AutoScalingEnabled</code> is set to True, then Kinesis
   *       Data Analytics can increase the <code>CurrentParallelism</code> value in response to application
   *     load. The service can increase <code>CurrentParallelism</code> up to the maximum parallelism, which is <code>ParalellismPerKPU</code> times the maximum KPUs for the application.
   *     The maximum KPUs for an application is 32 by default, and can be increased by requesting a limit increase. If application load is reduced, the service will
   *     reduce <code>CurrentParallelism</code> down to the <code>Parallelism</code> setting.</p>
   */
  ParallelismUpdate?: number;
}

export namespace ParallelismConfigurationUpdate {
  export function isa(o: any): o is ParallelismConfigurationUpdate {
    return __isa(o, "ParallelismConfigurationUpdate");
  }
}

/**
 * <p>Property key-value pairs passed into a Java-based Kinesis Data Analytics
 *       application.</p>
 */
export interface PropertyGroup {
  __type?: "PropertyGroup";
  /**
   * <p>Describes the key of an application execution property key-value pair.</p>
   */
  PropertyGroupId: string | undefined;

  /**
   * <p>Describes the value of an application execution property key-value pair.</p>
   */
  PropertyMap: { [key: string]: string } | undefined;
}

export namespace PropertyGroup {
  export function isa(o: any): o is PropertyGroup {
    return __isa(o, "PropertyGroup");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the mapping of each
 *       data element in the streaming source to the corresponding column in the in-application
 *       stream.</p>
 *          <p>Also used to describe the format of the reference data source.</p>
 */
export interface RecordColumn {
  __type?: "RecordColumn";
  /**
   * <p>A reference to the data element in the streaming input or the reference data
   *       source.</p>
   */
  Mapping?: string;

  /**
   * <p>The name of the column that is created in the in-application input stream or reference
   *       table.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of column created in the in-application input stream or reference table.</p>
   */
  SqlType: string | undefined;
}

export namespace RecordColumn {
  export function isa(o: any): o is RecordColumn {
    return __isa(o, "RecordColumn");
  }
}

/**
 * <p> For an SQL-based Amazon Kinesis Data Analytics application, describes the record format
 *       and relevant mapping information that should be applied to schematize the records on the
 *       stream. </p>
 */
export interface RecordFormat {
  __type?: "RecordFormat";
  /**
   * <p>When you configure application input at the time of creating or updating an application,
   *       provides additional mapping information specific to the record format (such as JSON, CSV, or
   *       record fields delimited by some delimiter) on the streaming source.</p>
   */
  MappingParameters?: MappingParameters;

  /**
   * <p>The type of record format.</p>
   */
  RecordFormatType: RecordFormatType | string | undefined;
}

export namespace RecordFormat {
  export function isa(o: any): o is RecordFormat {
    return __isa(o, "RecordFormat");
  }
}

export enum RecordFormatType {
  CSV = "CSV",
  JSON = "JSON"
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data
 *       source by providing the source information (Amazon S3 bucket name and object key name), the
 *       resulting in-application table name that is created, and the necessary schema to map the data
 *       elements in the Amazon S3 object to the in-application table.</p>
 */
export interface ReferenceDataSource {
  __type?: "ReferenceDataSource";
  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema: SourceSchema | undefined;

  /**
   * <p>Identifies the S3 bucket and object that contains the reference data.
   *
   *       A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
   */
  S3ReferenceDataSource?: S3ReferenceDataSource;

  /**
   * <p>The name of the in-application table to create.</p>
   */
  TableName: string | undefined;
}

export namespace ReferenceDataSource {
  export function isa(o: any): o is ReferenceDataSource {
    return __isa(o, "ReferenceDataSource");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the reference data
 *       source configured for an application.</p>
 */
export interface ReferenceDataSourceDescription {
  __type?: "ReferenceDataSourceDescription";
  /**
   * <p>The ID of the reference data source. This is the ID that Kinesis Data Analytics assigns
   *       when you add the reference data source to your application using the <a>CreateApplication</a> or <a>UpdateApplication</a> operation.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.</p>
   */
  ReferenceSchema?: SourceSchema;

  /**
   * <p>Provides the Amazon S3 bucket name, the object key name that contains the reference data. </p>
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
  export function isa(o: any): o is ReferenceDataSourceDescription {
    return __isa(o, "ReferenceDataSourceDescription");
  }
}

/**
 * <p>When you update a reference data source configuration for a
 *       SQL-based Amazon Kinesis Data Analytics application, this object provides all the updated values
 *       (such as the source bucket name and object key name), the in-application table name that is created,
 *       and updated mapping information that maps the data in the Amazon S3 object to the in-application
 *       reference table that is created.</p>
 */
export interface ReferenceDataSourceUpdate {
  __type?: "ReferenceDataSourceUpdate";
  /**
   * <p>The ID of the reference data source that is being updated. You can use the <a>DescribeApplication</a> operation to get this value.</p>
   */
  ReferenceId: string | undefined;

  /**
   * <p>Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. </p>
   */
  ReferenceSchemaUpdate?: SourceSchema;

  /**
   * <p>Describes the S3 bucket name, object key name, and IAM role that Kinesis Data Analytics can assume to read the Amazon S3 object on your behalf and populate the in-application reference table.</p>
   */
  S3ReferenceDataSourceUpdate?: S3ReferenceDataSourceUpdate;

  /**
   * <p>The in-application table name that is created by this update.</p>
   */
  TableNameUpdate?: string;
}

export namespace ReferenceDataSourceUpdate {
  export function isa(o: any): o is ReferenceDataSourceUpdate {
    return __isa(o, "ReferenceDataSourceUpdate");
  }
}

/**
 * <p>The application is not available for this operation.</p>
 */
export interface ResourceInUseException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return __isa(o, "ResourceInUseException");
  }
}

/**
 * <p>Specified application can't be found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>Discovery failed to get a record from the streaming source because of the Amazon Kinesis
 *       Streams <code>ProvisionedThroughputExceededException</code>. For more information, see <a href="http://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetRecords.html">GetRecords</a> in the Amazon Kinesis Streams API Reference.</p>
 */
export interface ResourceProvisionedThroughputExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceProvisionedThroughputExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceProvisionedThroughputExceededException {
  export function isa(
    o: any
  ): o is ResourceProvisionedThroughputExceededException {
    return __isa(o, "ResourceProvisionedThroughputExceededException");
  }
}

/**
 * <p>Describes the starting parameters for an Amazon Kinesis Data Analytics application.</p>
 */
export interface RunConfiguration {
  __type?: "RunConfiguration";
  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;

  /**
   * <p>Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkRunConfiguration?: FlinkRunConfiguration;

  /**
   * <p>Describes the starting parameters for an SQL-based Kinesis Data Analytics
   *       application.</p>
   */
  SqlRunConfigurations?: Array<SqlRunConfiguration>;
}

export namespace RunConfiguration {
  export function isa(o: any): o is RunConfiguration {
    return __isa(o, "RunConfiguration");
  }
}

/**
 * <p>Describes the starting properties for a Kinesis Data Analytics application.</p>
 */
export interface RunConfigurationDescription {
  __type?: "RunConfigurationDescription";
  /**
   * <p>Describes the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfigurationDescription?: ApplicationRestoreConfiguration;
}

export namespace RunConfigurationDescription {
  export function isa(o: any): o is RunConfigurationDescription {
    return __isa(o, "RunConfigurationDescription");
  }
}

/**
 * <p>Describes the updates to the starting parameters for a Kinesis Data Analytics
 *       application.</p>
 */
export interface RunConfigurationUpdate {
  __type?: "RunConfigurationUpdate";
  /**
   * <p>Describes updates to the restore behavior of a restarting application.</p>
   */
  ApplicationRestoreConfiguration?: ApplicationRestoreConfiguration;

  /**
   * <p>Describes the starting parameters for an Apache Flink-based Kinesis Data Analytics application.</p>
   */
  FlinkRunConfiguration?: FlinkRunConfiguration;
}

export namespace RunConfigurationUpdate {
  export function isa(o: any): o is RunConfigurationUpdate {
    return __isa(o, "RunConfigurationUpdate");
  }
}

export enum RuntimeEnvironment {
  FLINK_1_6 = "FLINK-1_6",
  FLINK_1_8 = "FLINK-1_8",
  SQL_1_0 = "SQL-1_0"
}

/**
 * <p>Describes the location of a Java-based Amazon Kinesis Data Analytics
 *       application's code stored in an S3 bucket.</p>
 */
export interface S3ApplicationCodeLocationDescription {
  __type?: "S3ApplicationCodeLocationDescription";
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

export namespace S3ApplicationCodeLocationDescription {
  export function isa(o: any): o is S3ApplicationCodeLocationDescription {
    return __isa(o, "S3ApplicationCodeLocationDescription");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides a description of an
 *       Amazon S3 data source, including the Amazon Resource Name (ARN) of the S3 bucket and the name
 *       of the Amazon S3 object that contains the data.</p>
 */
export interface S3Configuration {
  __type?: "S3Configuration";
  /**
   * <p>The ARN of the S3 bucket that contains the data.</p>
   */
  BucketARN: string | undefined;

  /**
   * <p>The name of the object that contains the data.</p>
   */
  FileKey: string | undefined;
}

export namespace S3Configuration {
  export function isa(o: any): o is S3Configuration {
    return __isa(o, "S3Configuration");
  }
}

/**
 * <p>For a Java-based Amazon Kinesis Data Analytics application, provides a
 *       description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket,
 *       the name of the Amazon S3 object that contains the data, and the version number of the Amazon
 *       S3 object that contains the data. </p>
 */
export interface S3ContentLocation {
  __type?: "S3ContentLocation";
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

export namespace S3ContentLocation {
  export function isa(o: any): o is S3ContentLocation {
    return __isa(o, "S3ContentLocation");
  }
}

/**
 * <p>Describes an update for the Amazon S3 code content location for a Java-based
 *       Amazon Kinesis Data Analytics application.</p>
 */
export interface S3ContentLocationUpdate {
  __type?: "S3ContentLocationUpdate";
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

export namespace S3ContentLocationUpdate {
  export function isa(o: any): o is S3ContentLocationUpdate {
    return __isa(o, "S3ContentLocationUpdate");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, identifies the Amazon S3
 *       bucket and object that contains the reference data.</p>
 *
 *          <p>A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the <a>UpdateApplication</a> operation to trigger reloading of data into your application. </p>
 */
export interface S3ReferenceDataSource {
  __type?: "S3ReferenceDataSource";
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARN?: string;

  /**
   * <p>The object key name containing the reference data.</p>
   */
  FileKey?: string;
}

export namespace S3ReferenceDataSource {
  export function isa(o: any): o is S3ReferenceDataSource {
    return __isa(o, "S3ReferenceDataSource");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, provides the bucket name and
 *       object key name that stores the reference data.</p>
 */
export interface S3ReferenceDataSourceDescription {
  __type?: "S3ReferenceDataSourceDescription";
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

export namespace S3ReferenceDataSourceDescription {
  export function isa(o: any): o is S3ReferenceDataSourceDescription {
    return __isa(o, "S3ReferenceDataSourceDescription");
  }
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the Amazon S3 bucket
 *       name and object key name for an in-application reference table. </p>
 */
export interface S3ReferenceDataSourceUpdate {
  __type?: "S3ReferenceDataSourceUpdate";
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket.</p>
   */
  BucketARNUpdate?: string;

  /**
   * <p>The object key name.</p>
   */
  FileKeyUpdate?: string;
}

export namespace S3ReferenceDataSourceUpdate {
  export function isa(o: any): o is S3ReferenceDataSourceUpdate {
    return __isa(o, "S3ReferenceDataSourceUpdate");
  }
}

/**
 * <p>The service cannot complete the request.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
}

/**
 * <p>Provides details about a snapshot of application state.</p>
 */
export interface SnapshotDetails {
  __type?: "SnapshotDetails";
  /**
   * <p>The current application version ID when the snapshot was created.</p>
   */
  ApplicationVersionId: number | undefined;

  /**
   * <p>The timestamp of the application snapshot.</p>
   */
  SnapshotCreationTimestamp?: Date;

  /**
   * <p>The identifier for the application snapshot.</p>
   */
  SnapshotName: string | undefined;

  /**
   * <p>The status of the application snapshot.</p>
   */
  SnapshotStatus: SnapshotStatus | string | undefined;
}

export namespace SnapshotDetails {
  export function isa(o: any): o is SnapshotDetails {
    return __isa(o, "SnapshotDetails");
  }
}

export enum SnapshotStatus {
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  READY = "READY"
}

/**
 * <p>For an SQL-based Amazon Kinesis Data Analytics application, describes the format of the
 *       data in the streaming source, and how each data element maps to corresponding columns created
 *       in the in-application stream. </p>
 */
export interface SourceSchema {
  __type?: "SourceSchema";
  /**
   * <p>A list of <code>RecordColumn</code> objects. </p>
   */
  RecordColumns: Array<RecordColumn> | undefined;

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
  export function isa(o: any): o is SourceSchema {
    return __isa(o, "SourceSchema");
  }
}

/**
 * <p>Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data
 *       Analytics application.</p>
 */
export interface SqlApplicationConfiguration {
  __type?: "SqlApplicationConfiguration";
  /**
   * <p>The array of <a>Input</a> objects describing the input streams used by the
   *       application.</p>
   */
  Inputs?: Array<Input>;

  /**
   * <p>The array of <a>Output</a> objects describing the destination streams used by
   *       the application.</p>
   */
  Outputs?: Array<Output>;

  /**
   * <p>The array of <a>ReferenceDataSource</a> objects describing the reference data
   *       sources used by the application.</p>
   */
  ReferenceDataSources?: Array<ReferenceDataSource>;
}

export namespace SqlApplicationConfiguration {
  export function isa(o: any): o is SqlApplicationConfiguration {
    return __isa(o, "SqlApplicationConfiguration");
  }
}

/**
 * <p>Describes the inputs, outputs, and reference data sources for an SQL-based Kinesis Data
 *       Analytics application.</p>
 */
export interface SqlApplicationConfigurationDescription {
  __type?: "SqlApplicationConfigurationDescription";
  /**
   * <p>The array of <a>InputDescription</a> objects describing the input streams used
   *       by the application.</p>
   */
  InputDescriptions?: Array<InputDescription>;

  /**
   * <p>The array of <a>OutputDescription</a> objects describing the destination
   *       streams used by the application.</p>
   */
  OutputDescriptions?: Array<OutputDescription>;

  /**
   * <p>The array of <a>ReferenceDataSourceDescription</a> objects describing the
   *       reference data sources used by the application.</p>
   */
  ReferenceDataSourceDescriptions?: Array<ReferenceDataSourceDescription>;
}

export namespace SqlApplicationConfigurationDescription {
  export function isa(o: any): o is SqlApplicationConfigurationDescription {
    return __isa(o, "SqlApplicationConfigurationDescription");
  }
}

/**
 * <p>Describes updates to the input streams, destination streams, and reference data sources
 *       for an SQL-based Kinesis Data Analytics application.</p>
 */
export interface SqlApplicationConfigurationUpdate {
  __type?: "SqlApplicationConfigurationUpdate";
  /**
   * <p>The array of <a>InputUpdate</a> objects describing the new input streams used
   *       by the application.</p>
   */
  InputUpdates?: Array<InputUpdate>;

  /**
   * <p>The array of <a>OutputUpdate</a> objects describing the new destination streams
   *       used by the application.</p>
   */
  OutputUpdates?: Array<OutputUpdate>;

  /**
   * <p>The array of <a>ReferenceDataSourceUpdate</a> objects describing the new
   *       reference data sources used by the application.</p>
   */
  ReferenceDataSourceUpdates?: Array<ReferenceDataSourceUpdate>;
}

export namespace SqlApplicationConfigurationUpdate {
  export function isa(o: any): o is SqlApplicationConfigurationUpdate {
    return __isa(o, "SqlApplicationConfigurationUpdate");
  }
}

/**
 * <p>Describes the starting parameters for an SQL-based Kinesis Data Analytics
 *       application.</p>
 */
export interface SqlRunConfiguration {
  __type?: "SqlRunConfiguration";
  /**
   * <p>The input source ID. You can get this ID by calling the <a>DescribeApplication</a> operation. </p>
   */
  InputId: string | undefined;

  /**
   * <p>The point at which you want the application to start processing records from the streaming
   *       source. </p>
   */
  InputStartingPositionConfiguration:
    | InputStartingPositionConfiguration
    | undefined;
}

export namespace SqlRunConfiguration {
  export function isa(o: any): o is SqlRunConfiguration {
    return __isa(o, "SqlRunConfiguration");
  }
}

export interface StartApplicationRequest {
  __type?: "StartApplicationRequest";
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Identifies the run configuration (start parameters) of a Kinesis Data Analytics application.</p>
   */
  RunConfiguration: RunConfiguration | undefined;
}

export namespace StartApplicationRequest {
  export function isa(o: any): o is StartApplicationRequest {
    return __isa(o, "StartApplicationRequest");
  }
}

export interface StartApplicationResponse {
  __type?: "StartApplicationResponse";
}

export namespace StartApplicationResponse {
  export function isa(o: any): o is StartApplicationResponse {
    return __isa(o, "StartApplicationResponse");
  }
}

export interface StopApplicationRequest {
  __type?: "StopApplicationRequest";
  /**
   * <p>The name of the running application to stop.</p>
   */
  ApplicationName: string | undefined;
}

export namespace StopApplicationRequest {
  export function isa(o: any): o is StopApplicationRequest {
    return __isa(o, "StopApplicationRequest");
  }
}

export interface StopApplicationResponse {
  __type?: "StopApplicationResponse";
}

export namespace StopApplicationResponse {
  export function isa(o: any): o is StopApplicationResponse {
    return __isa(o, "StopApplicationResponse");
  }
}

/**
 * <p>A key-value pair (the value is optional) that you can define and assign to AWS resources. If you specify a tag that already exists, the tag value is replaced with the value that you specify in the request. Note that
 *         the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
 *       For more information, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/how-tagging.html">Using Tagging</a>.</p>
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
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
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
  Tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
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
  export function isa(o: any): o is TooManyTagsException {
    return __isa(o, "TooManyTagsException");
  }
}

/**
 * <p>The data format is not valid. Amazon Kinesis Data Analytics cannot detect the schema for
 *       the given streaming source.</p>
 */
export interface UnableToDetectSchemaException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnableToDetectSchemaException";
  $fault: "client";
  Message?: string;
  /**
   * <p>Stream data that was modified by the processor specified in the <code>InputProcessingConfiguration</code> parameter. </p>
   */
  ProcessedInputRecords?: Array<string>;

  /**
   * <p>Raw stream data that was sampled to infer the schema.</p>
   */
  RawInputRecords?: Array<string>;
}

export namespace UnableToDetectSchemaException {
  export function isa(o: any): o is UnableToDetectSchemaException {
    return __isa(o, "UnableToDetectSchemaException");
  }
}

/**
 * <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this operation. </p>
 */
export interface UnsupportedOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnsupportedOperationException";
  $fault: "client";
  Message?: string;
}

export namespace UnsupportedOperationException {
  export function isa(o: any): o is UnsupportedOperationException {
    return __isa(o, "UnsupportedOperationException");
  }
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
  TagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdateApplicationRequest {
  __type?: "UpdateApplicationRequest";
  /**
   * <p>Describes application configuration updates.</p>
   */
  ApplicationConfigurationUpdate?: ApplicationConfigurationUpdate;

  /**
   * <p>The name of the application to update.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Describes application Amazon CloudWatch logging option updates. You can only update
   *       existing CloudWatch logging options with this action. To add a new CloudWatch logging option,
   *       use <a>AddApplicationCloudWatchLoggingOption</a>.</p>
   */
  CloudWatchLoggingOptionUpdates?: Array<CloudWatchLoggingOptionUpdate>;

  /**
   * <p>The current application version ID. You can retrieve the application version ID using <a>DescribeApplication</a>.</p>
   */
  CurrentApplicationVersionId: number | undefined;

  /**
   * <p>Describes updates to the application's starting parameters.</p>
   */
  RunConfigurationUpdate?: RunConfigurationUpdate;

  /**
   * <p>Describes updates to the service execution role.</p>
   */
  ServiceExecutionRoleUpdate?: string;
}

export namespace UpdateApplicationRequest {
  export function isa(o: any): o is UpdateApplicationRequest {
    return __isa(o, "UpdateApplicationRequest");
  }
}

export interface UpdateApplicationResponse {
  __type?: "UpdateApplicationResponse";
  /**
   * <p>Describes application updates.</p>
   */
  ApplicationDetail: ApplicationDetail | undefined;
}

export namespace UpdateApplicationResponse {
  export function isa(o: any): o is UpdateApplicationResponse {
    return __isa(o, "UpdateApplicationResponse");
  }
}

/**
 * <p>Describes the parameters of a VPC used by the application.</p>
 */
export interface VpcConfiguration {
  __type?: "VpcConfiguration";
  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.</p>
   */
  SecurityGroupIds: Array<string> | undefined;

  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs used by the VPC configuration.</p>
   */
  SubnetIds: Array<string> | undefined;
}

export namespace VpcConfiguration {
  export function isa(o: any): o is VpcConfiguration {
    return __isa(o, "VpcConfiguration");
  }
}

/**
 * <p>Describes the parameters of a VPC used by the application.</p>
 */
export interface VpcConfigurationDescription {
  __type?: "VpcConfigurationDescription";
  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.</p>
   */
  SecurityGroupIds: Array<string> | undefined;

  /**
   * <p>The array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs used by the VPC configuration.</p>
   */
  SubnetIds: Array<string> | undefined;

  /**
   * <p>The ID of the VPC configuration.</p>
   */
  VpcConfigurationId: string | undefined;

  /**
   * <p>The ID of the associated VPC.</p>
   */
  VpcId: string | undefined;
}

export namespace VpcConfigurationDescription {
  export function isa(o: any): o is VpcConfigurationDescription {
    return __isa(o, "VpcConfigurationDescription");
  }
}

/**
 * <p>Describes updates to the VPC configuration used by the application.</p>
 */
export interface VpcConfigurationUpdate {
  __type?: "VpcConfigurationUpdate";
  /**
   * <p>Describes updates to the array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html">SecurityGroup</a> IDs used by the VPC configuration.</p>
   */
  SecurityGroupIdUpdates?: Array<string>;

  /**
   * <p>Describes updates to the array of <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html">Subnet</a> IDs
   *         used by the VPC configuration.</p>
   */
  SubnetIdUpdates?: Array<string>;

  /**
   * <p>Describes an update to the ID of the VPC configuration.</p>
   */
  VpcConfigurationId: string | undefined;
}

export namespace VpcConfigurationUpdate {
  export function isa(o: any): o is VpcConfigurationUpdate {
    return __isa(o, "VpcConfigurationUpdate");
  }
}
