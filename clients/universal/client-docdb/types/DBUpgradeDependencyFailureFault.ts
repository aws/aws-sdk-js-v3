import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB upgrade failed because a resource that the DB depends on can't be modified.</p>
 */
export interface DBUpgradeDependencyFailureFault
  extends __ServiceException__<_DBUpgradeDependencyFailureFaultDetails> {
  name: "DBUpgradeDependencyFailureFault";
}

export interface _DBUpgradeDependencyFailureFaultDetails {}
