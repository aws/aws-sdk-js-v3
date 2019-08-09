import {
  _UpgradeStepItem,
  _UnmarshalledUpgradeStepItem
} from "./_UpgradeStepItem";

/**
 * <p>History of the last 10 Upgrades and Upgrade Eligibility Checks.</p>
 */
export interface _UpgradeHistory {
  /**
   * <p>A string that describes the update briefly</p>
   */
  UpgradeName?: string;

  /**
   * <p>UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.</p>
   */
  StartTimestamp?: Date | string | number;

  /**
   * <p> The overall status of the update. The status can take one of the following values: <ul> <li>In Progress</li> <li>Succeeded</li> <li>Succeeded with Issues</li> <li>Failed</li> </ul> </p>
   */
  UpgradeStatus?:
    | "IN_PROGRESS"
    | "SUCCEEDED"
    | "SUCCEEDED_WITH_ISSUES"
    | "FAILED"
    | string;

  /**
   * <p> A list of <code> <a>UpgradeStepItem</a> </code> s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check. </p>
   */
  StepsList?: Array<_UpgradeStepItem> | Iterable<_UpgradeStepItem>;
}

export interface _UnmarshalledUpgradeHistory extends _UpgradeHistory {
  /**
   * <p>UTC Timestamp at which the Upgrade API call was made in "yyyy-MM-ddTHH:mm:ssZ" format.</p>
   */
  StartTimestamp?: Date;

  /**
   * <p> A list of <code> <a>UpgradeStepItem</a> </code> s representing information about each step performed as pard of a specific Upgrade or Upgrade Eligibility Check. </p>
   */
  StepsList?: Array<_UnmarshalledUpgradeStepItem>;
}
