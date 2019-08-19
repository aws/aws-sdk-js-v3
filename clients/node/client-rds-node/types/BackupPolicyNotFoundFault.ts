import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * BackupPolicyNotFoundFault shape
 */
export interface BackupPolicyNotFoundFault
  extends __ServiceException__<_BackupPolicyNotFoundFaultDetails> {
  name: "BackupPolicyNotFoundFault";
}

export interface _BackupPolicyNotFoundFaultDetails {}
