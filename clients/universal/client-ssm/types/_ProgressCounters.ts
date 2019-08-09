/**
 * <p>An aggregate of step execution statuses displayed in the AWS Console for a multi-Region and multi-account Automation execution.</p>
 */
export interface _ProgressCounters {
  /**
   * <p>The total number of steps run in all specified AWS Regions and accounts for the current Automation execution.</p>
   */
  TotalSteps?: number;

  /**
   * <p>The total number of steps that successfully completed in all specified AWS Regions and accounts for the current Automation execution.</p>
   */
  SuccessSteps?: number;

  /**
   * <p>The total number of steps that failed to run in all specified AWS Regions and accounts for the current Automation execution.</p>
   */
  FailedSteps?: number;

  /**
   * <p>The total number of steps that the system cancelled in all specified AWS Regions and accounts for the current Automation execution.</p>
   */
  CancelledSteps?: number;

  /**
   * <p>The total number of steps that timed out in all specified AWS Regions and accounts for the current Automation execution.</p>
   */
  TimedOutSteps?: number;
}

export type _UnmarshalledProgressCounters = _ProgressCounters;
