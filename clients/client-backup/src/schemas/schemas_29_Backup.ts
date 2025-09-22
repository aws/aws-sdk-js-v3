// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AD,
  _BVN,
  _CD,
  _ED,
  _h,
  _hQ,
  _ID,
  _LRABV,
  _LRABVI,
  _LRABVO,
  _LRR,
  _MR,
  _mR,
  _MSA,
  _NT,
  _nT,
  _RABV,
  _RABVA,
  _RABVL,
  _RABVLM,
  _SM,
  _St,
  _VS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LatestRevokeRequest = struct(n0, _LRR, 0, [_MSA, _St, _SM, _ID, _ED], [0, 0, 0, 4, 4]);
export var ListRestoreAccessBackupVaultsInput = struct(
  n0,
  _LRABVI,
  0,
  [_BVN, _NT, _MR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListRestoreAccessBackupVaultsOutput = struct(
  n0,
  _LRABVO,
  0,
  [_NT, _RABV],
  [0, () => RestoreAccessBackupVaultList]
);
export var RestoreAccessBackupVaultListMember = struct(
  n0,
  _RABVLM,
  0,
  [_RABVA, _CD, _AD, _VS, _LRR],
  [0, 4, 4, 0, () => LatestRevokeRequest]
);
export var RestoreAccessBackupVaultList = list(n0, _RABVL, 0, () => RestoreAccessBackupVaultListMember);
export var ListRestoreAccessBackupVaults = op(
  n0,
  _LRABV,
  {
    [_h]: ["GET", "/logically-air-gapped-backup-vaults/{BackupVaultName}/restore-access-backup-vaults", 200],
  },
  () => ListRestoreAccessBackupVaultsInput,
  () => ListRestoreAccessBackupVaultsOutput
);
