/**
 * <p>The combination of AWS Regions and accounts targeted by the current Automation execution.</p>
 */
export interface _TargetLocation {
  /**
   * <p>The AWS accounts targeted by the current Automation execution.</p>
   */
  Accounts?: Array<string> | Iterable<string>;

  /**
   * <p>The AWS Regions targeted by the current Automation execution.</p>
   */
  Regions?: Array<string> | Iterable<string>;

  /**
   * <p>The maximum number of AWS accounts and AWS regions allowed to run the Automation concurrently </p>
   */
  TargetLocationMaxConcurrency?: string;

  /**
   * <p>The maximum number of errors allowed before the system stops queueing additional Automation executions for the currently running Automation. </p>
   */
  TargetLocationMaxErrors?: string;

  /**
   * <p>The Automation execution role used by the currently running Automation.</p>
   */
  ExecutionRoleName?: string;
}

export interface _UnmarshalledTargetLocation extends _TargetLocation {
  /**
   * <p>The AWS accounts targeted by the current Automation execution.</p>
   */
  Accounts?: Array<string>;

  /**
   * <p>The AWS Regions targeted by the current Automation execution.</p>
   */
  Regions?: Array<string>;
}
