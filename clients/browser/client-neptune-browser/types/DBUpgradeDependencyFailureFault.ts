import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB upgrade failed because a resource the DB depends on could not be modified.</p>
 */
export interface DBUpgradeDependencyFailureFault
  extends __ServiceException__<_DBUpgradeDependencyFailureFaultDetails> {
  name: "DBUpgradeDependencyFailureFault";
}

export interface _DBUpgradeDependencyFailureFaultDetails {}
