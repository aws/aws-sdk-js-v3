import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An upgrade dependency is preventing the database migration.</p>
 */
export interface UpgradeDependencyFailureFault
  extends __ServiceException__<_UpgradeDependencyFailureFaultDetails> {
  name: "UpgradeDependencyFailureFault";
}

export interface _UpgradeDependencyFailureFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
