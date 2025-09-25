// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BVN, _CFD, _h, _MRD, _MRDa, _PBVLC, _PBVLCI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var PutBackupVaultLockConfigurationInput = struct(n0, _PBVLCI, 0, [_BVN, _MRD, _MRDa, _CFD], [[0, 1], 1, 1, 1]);
export var PutBackupVaultLockConfiguration = op(
  n0,
  _PBVLC,
  {
    [_h]: ["PUT", "/backup-vaults/{BackupVaultName}/vault-lock", 200],
  },
  () => PutBackupVaultLockConfigurationInput,
  () => Unit
);
