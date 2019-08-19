import {
  _ApplicationConfigurationDescription,
  _UnmarshalledApplicationConfigurationDescription
} from "./_ApplicationConfigurationDescription";
import {
  _CloudWatchLoggingOptionDescription,
  _UnmarshalledCloudWatchLoggingOptionDescription
} from "./_CloudWatchLoggingOptionDescription";

/**
 * <p>Describes the application, including the application Amazon Resource Name (ARN), status, latest version, and input and output configurations.</p>
 */
export interface _ApplicationDetail {
  /**
   * <p>The ARN of the application.</p>
   */
  ApplicationARN: string;

  /**
   * <p>The description of the application.</p>
   */
  ApplicationDescription?: string;

  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string;

  /**
   * <p>The runtime environment for the application (<code>SQL-1.0</code> or <code>FLINK-1_6</code>).</p>
   */
  RuntimeEnvironment: "SQL-1_0" | "FLINK-1_6" | string;

  /**
   * <p>Specifies the IAM role that the application uses to access external resources.</p>
   */
  ServiceExecutionRole?: string;

  /**
   * <p>The status of the application.</p>
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
   * <p>Provides the current application version. Kinesis Data Analytics updates the <code>ApplicationVersionId</code> each time you update the application.</p>
   */
  ApplicationVersionId: number;

  /**
   * <p>The current timestamp when the application was created.</p>
   */
  CreateTimestamp?: Date | string | number;

  /**
   * <p>The current timestamp when the application was last updated.</p>
   */
  LastUpdateTimestamp?: Date | string | number;

  /**
   * <p>Provides details about the application's SQL or Java code and starting parameters.</p>
   */
  ApplicationConfigurationDescription?: _ApplicationConfigurationDescription;

  /**
   * <p>Describes the application Amazon CloudWatch logging options.</p>
   */
  CloudWatchLoggingOptionDescriptions?:
    | Array<_CloudWatchLoggingOptionDescription>
    | Iterable<_CloudWatchLoggingOptionDescription>;
}

export interface _UnmarshalledApplicationDetail extends _ApplicationDetail {
  /**
   * <p>The current timestamp when the application was created.</p>
   */
  CreateTimestamp?: Date;

  /**
   * <p>The current timestamp when the application was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>Provides details about the application's SQL or Java code and starting parameters.</p>
   */
  ApplicationConfigurationDescription?: _UnmarshalledApplicationConfigurationDescription;

  /**
   * <p>Describes the application Amazon CloudWatch logging options.</p>
   */
  CloudWatchLoggingOptionDescriptions?: Array<
    _UnmarshalledCloudWatchLoggingOptionDescription
  >;
}
