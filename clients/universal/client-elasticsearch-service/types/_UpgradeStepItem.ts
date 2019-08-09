/**
 * <p>Represents a single step of the Upgrade or Upgrade Eligibility Check workflow.</p>
 */
export interface _UpgradeStepItem {
  /**
   * <p> Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through: <ul> <li>PreUpgradeCheck</li> <li>Snapshot</li> <li>Upgrade</li> </ul> </p>
   */
  UpgradeStep?: "PRE_UPGRADE_CHECK" | "SNAPSHOT" | "UPGRADE" | string;

  /**
   * <p> The status of a particular step during an upgrade. The status can take one of the following values: <ul> <li>In Progress</li> <li>Succeeded</li> <li>Succeeded with Issues</li> <li>Failed</li> </ul> </p>
   */
  UpgradeStepStatus?:
    | "IN_PROGRESS"
    | "SUCCEEDED"
    | "SUCCEEDED_WITH_ISSUES"
    | "FAILED"
    | string;

  /**
   * <p>A list of strings containing detailed information about the errors encountered in a particular step.</p>
   */
  Issues?: Array<string> | Iterable<string>;

  /**
   * <p>The Floating point value representing progress percentage of a particular step.</p>
   */
  ProgressPercent?: number;
}

export interface _UnmarshalledUpgradeStepItem extends _UpgradeStepItem {
  /**
   * <p>A list of strings containing detailed information about the errors encountered in a particular step.</p>
   */
  Issues?: Array<string>;
}
