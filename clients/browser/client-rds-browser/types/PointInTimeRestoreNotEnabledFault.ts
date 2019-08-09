import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>SourceDBInstanceIdentifier</i> refers to a DB instance with <i>BackupRetentionPeriod</i> equal to 0. </p>
 */
export interface PointInTimeRestoreNotEnabledFault
  extends __ServiceException__<_PointInTimeRestoreNotEnabledFaultDetails> {
  name: "PointInTimeRestoreNotEnabledFault";
}

export interface _PointInTimeRestoreNotEnabledFaultDetails {}
