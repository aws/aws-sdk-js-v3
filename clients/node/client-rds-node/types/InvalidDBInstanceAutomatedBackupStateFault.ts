import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The automated backup is in an invalid state. For example, this automated backup is associated with an active instance. </p>
 */
export interface InvalidDBInstanceAutomatedBackupStateFault
  extends __ServiceException__<
    _InvalidDBInstanceAutomatedBackupStateFaultDetails
  > {
  name: "InvalidDBInstanceAutomatedBackupStateFault";
}

export interface _InvalidDBInstanceAutomatedBackupStateFaultDetails {}
