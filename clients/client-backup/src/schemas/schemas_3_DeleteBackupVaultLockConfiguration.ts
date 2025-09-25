// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BVN, _DBVLC, _DBVLCI, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBackupVaultLockConfigurationInput = struct(n0, _DBVLCI, 0, [_BVN], [[0, 1]]);
export var DeleteBackupVaultLockConfiguration = op(
  n0,
  _DBVLC,
  {
    [_h]: ["DELETE", "/backup-vaults/{BackupVaultName}/vault-lock", 200],
  },
  () => DeleteBackupVaultLockConfigurationInput,
  () => Unit
);
