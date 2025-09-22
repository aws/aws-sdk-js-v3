// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DVN, _DVNI, _h, _vN, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Job";

/* eslint no-var: 0 */

export var DeleteVaultNotificationsInput = struct(
  n0,
  _DVNI,
  0,
  [_aI, _vN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteVaultNotifications = op(
  n0,
  _DVN,
  {
    [_h]: ["DELETE", "/{accountId}/vaults/{vaultName}/notification-configuration", 204],
  },
  () => DeleteVaultNotificationsInput,
  () => Unit
);
