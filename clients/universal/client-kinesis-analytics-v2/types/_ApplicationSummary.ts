/**
 * <p>Provides application summary information, including the application Amazon Resource Name (ARN), name, and status.</p>
 */
export interface _ApplicationSummary {
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string;

  /**
   * <p>The ARN of the application.</p>
   */
  ApplicationARN: string;

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
   * <p>Provides the current application version.</p>
   */
  ApplicationVersionId: number;

  /**
   * <p>The runtime environment for the application (<code>SQL-1.0</code> or <code>FLINK-1_6</code>).</p>
   */
  RuntimeEnvironment: "SQL-1_0" | "FLINK-1_6" | string;
}

export type _UnmarshalledApplicationSummary = _ApplicationSummary;
