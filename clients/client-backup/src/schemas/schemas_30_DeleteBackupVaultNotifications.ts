// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BVN, _DBVN, _DBVNI, _h, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBackupVaultNotificationsInput = struct(n0, _DBVNI, 0, [_BVN], [[0, 1]]);
export var DeleteBackupVaultNotifications = op(
  n0,
  _DBVN,
  {
    [_h]: ["DELETE", "/backup-vaults/{BackupVaultName}/notification-configuration", 200],
  },
  () => DeleteBackupVaultNotificationsInput,
  () => Unit
);
