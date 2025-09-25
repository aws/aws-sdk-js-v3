// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _ABVMAT,
  _ABVMATI,
  _BVN,
  _DBVMAT,
  _DBVMATI,
  _h,
  _hQ,
  _MATA,
  _RABVA,
  _RC,
  _rC,
  _RRABV,
  _RRABVI,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var RequesterComment = sim(n0, _RC, 0, 8);
export var AssociateBackupVaultMpaApprovalTeamInput = struct(
  n0,
  _ABVMATI,
  0,
  [_BVN, _MATA, _RC],
  [[0, 1], 0, [() => RequesterComment, 0]]
);
export var DisassociateBackupVaultMpaApprovalTeamInput = struct(
  n0,
  _DBVMATI,
  0,
  [_BVN, _RC],
  [
    [0, 1],
    [() => RequesterComment, 0],
  ]
);
export var RevokeRestoreAccessBackupVaultInput = struct(
  n0,
  _RRABVI,
  0,
  [_BVN, _RABVA, _RC],
  [
    [0, 1],
    [0, 1],
    [
      () => RequesterComment,
      {
        [_hQ]: _rC,
      },
    ],
  ]
);
export var AssociateBackupVaultMpaApprovalTeam = op(
  n0,
  _ABVMAT,
  {
    [_h]: ["PUT", "/backup-vaults/{BackupVaultName}/mpaApprovalTeam", 204],
  },
  () => AssociateBackupVaultMpaApprovalTeamInput,
  () => Unit
);
export var DisassociateBackupVaultMpaApprovalTeam = op(
  n0,
  _DBVMAT,
  {
    [_h]: ["POST", "/backup-vaults/{BackupVaultName}/mpaApprovalTeam?delete", 204],
  },
  () => DisassociateBackupVaultMpaApprovalTeamInput,
  () => Unit
);
export var RevokeRestoreAccessBackupVault = op(
  n0,
  _RRABV,
  {
    [_h]: [
      "DELETE",
      "/logically-air-gapped-backup-vaults/{BackupVaultName}/restore-access-backup-vaults/{RestoreAccessBackupVaultArn}",
      200,
    ],
  },
  () => RevokeRestoreAccessBackupVaultInput,
  () => Unit
);
