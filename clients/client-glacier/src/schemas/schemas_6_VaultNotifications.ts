// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _Ev, _GVN, _GVNI, _GVNO, _h, _SNST, _SVN, _SVNI, _vN, _VNC, _vNC, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var GetVaultNotificationsInput = struct(
  n0,
  _GVNI,
  0,
  [_aI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetVaultNotificationsOutput = struct(n0, _GVNO, 0, [_vNC], [[() => VaultNotificationConfig, 16]]);
export var SetVaultNotificationsInput = struct(
  n0,
  _SVNI,
  0,
  [_aI, _vN, _vNC],
  [
    [0, 1],
    [0, 1],
    [() => VaultNotificationConfig, 16],
  ]
);
export var VaultNotificationConfig = struct(n0, _VNC, 0, [_SNST, _Ev], [0, 64 | 0]);
export var NotificationEventList = 64 | 0;

export var GetVaultNotifications = op(
  n0,
  _GVN,
  {
    [_h]: ["GET", "/{accountId}/vaults/{vaultName}/notification-configuration", 200],
  },
  () => GetVaultNotificationsInput,
  () => GetVaultNotificationsOutput
);
export var SetVaultNotifications = op(
  n0,
  _SVN,
  {
    [_h]: ["PUT", "/{accountId}/vaults/{vaultName}/notification-configuration", 204],
  },
  () => SetVaultNotificationsInput,
  () => Unit
);
