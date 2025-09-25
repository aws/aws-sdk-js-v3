// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BVN, _DBV, _DBVI, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBackupVaultInput = struct(n0, _DBVI, 0, [_BVN], [[0, 1]]);
export var DeleteBackupVault = op(
  n0,
  _DBV,
  {
    [_h]: ["DELETE", "/backup-vaults/{BackupVaultName}", 200],
  },
  () => DeleteBackupVaultInput,
  () => Unit
);
