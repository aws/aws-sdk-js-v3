/**
 * <p>The CloudWatch Logs configuration.</p>
 */
export interface _LogConfig {
  /**
   * <p>The field logging level. Values can be NONE, ERROR, or ALL. </p> <ul> <li> <p> <b>NONE</b>: No field-level logs are captured.</p> </li> <li> <p> <b>ERROR</b>: Logs the following information only for the fields that are in error:</p> <ul> <li> <p>The error section in the server response.</p> </li> <li> <p>Field-level errors.</p> </li> <li> <p>The generated request/response functions that got resolved for error fields.</p> </li> </ul> </li> <li> <p> <b>ALL</b>: The following information is logged for all fields in the query:</p> <ul> <li> <p>Field-level tracing information.</p> </li> <li> <p>The generated request/response functions that got resolved for each field.</p> </li> </ul> </li> </ul>
   */
  fieldLogLevel: "NONE" | "ERROR" | "ALL" | string;

  /**
   * <p>The service role that AWS AppSync will assume to publish to Amazon CloudWatch logs in your account. </p>
   */
  cloudWatchLogsRoleArn: string;
}

export type _UnmarshalledLogConfig = _LogConfig;
