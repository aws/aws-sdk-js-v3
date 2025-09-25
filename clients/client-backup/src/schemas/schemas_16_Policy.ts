// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BVA, _BVN, _GBVAP, _GBVAPI, _GBVAPO, _h, _P, _PBVAP, _PBVAPI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetBackupVaultAccessPolicyInput = struct(n0, _GBVAPI, 0, [_BVN], [[0, 1]]);
export var GetBackupVaultAccessPolicyOutput = struct(n0, _GBVAPO, 0, [_BVN, _BVA, _P], [0, 0, 0]);
export var PutBackupVaultAccessPolicyInput = struct(n0, _PBVAPI, 0, [_BVN, _P], [[0, 1], 0]);
export var GetBackupVaultAccessPolicy = op(
  n0,
  _GBVAP,
  {
    [_h]: ["GET", "/backup-vaults/{BackupVaultName}/access-policy", 200],
  },
  () => GetBackupVaultAccessPolicyInput,
  () => GetBackupVaultAccessPolicyOutput
);
export var PutBackupVaultAccessPolicy = op(
  n0,
  _PBVAP,
  {
    [_h]: ["PUT", "/backup-vaults/{BackupVaultName}/access-policy", 200],
  },
  () => PutBackupVaultAccessPolicyInput,
  () => Unit
);
