// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BVA, _BVE, _BVN, _GBVN, _GBVNI, _GBVNO, _h, _PBVN, _PBVNI, _SNSTA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var GetBackupVaultNotificationsInput = struct(n0, _GBVNI, 0, [_BVN], [[0, 1]]);
export var GetBackupVaultNotificationsOutput = struct(n0, _GBVNO, 0, [_BVN, _BVA, _SNSTA, _BVE], [0, 0, 0, 64 | 0]);
export var PutBackupVaultNotificationsInput = struct(n0, _PBVNI, 0, [_BVN, _SNSTA, _BVE], [[0, 1], 0, 64 | 0]);
export var BackupVaultEvents = 64 | 0;

export var GetBackupVaultNotifications = op(
  n0,
  _GBVN,
  {
    [_h]: ["GET", "/backup-vaults/{BackupVaultName}/notification-configuration", 200],
  },
  () => GetBackupVaultNotificationsInput,
  () => GetBackupVaultNotificationsOutput
);
export var PutBackupVaultNotifications = op(
  n0,
  _PBVN,
  {
    [_h]: ["PUT", "/backup-vaults/{BackupVaultName}/notification-configuration", 200],
  },
  () => PutBackupVaultNotificationsInput,
  () => Unit
);
