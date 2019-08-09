/**
 * <note> <p>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see <a href="/kinesisanalytics/latest/apiv2/Welcome.html">Amazon Kinesis Data Analytics API V2 Documentation</a>.</p> </note> <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
 */
export interface _ApplicationSummary {
  /**
   * <p>Name of the application.</p>
   */
  ApplicationName: string;

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
}

export type _UnmarshalledApplicationSummary = _ApplicationSummary;
