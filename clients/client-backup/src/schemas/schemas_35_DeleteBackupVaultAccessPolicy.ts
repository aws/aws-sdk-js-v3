// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BVN, _DBVAP, _DBVAPI, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBackupVaultAccessPolicyInput = struct(n0, _DBVAPI, 0, [_BVN], [[0, 1]]);
export var DeleteBackupVaultAccessPolicy = op(
  n0,
  _DBVAP,
  {
    [_h]: ["DELETE", "/backup-vaults/{BackupVaultName}/access-policy", 200],
  },
  () => DeleteBackupVaultAccessPolicyInput,
  () => Unit
);
