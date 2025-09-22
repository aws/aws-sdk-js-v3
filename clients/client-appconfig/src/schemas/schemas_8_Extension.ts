// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AS, _DP, _DPS, _E, _GAS, _h, _PPIM, _UAS, _UASR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountSettings = struct(n0, _AS, 0, [_DP], [() => DeletionProtectionSettings]);
export var DeletionProtectionSettings = struct(n0, _DPS, 0, [_E, _PPIM], [2, 1]);
export var UpdateAccountSettingsRequest = struct(n0, _UASR, 0, [_DP], [() => DeletionProtectionSettings]);
export var GetAccountSettings = op(
  n0,
  _GAS,
  {
    [_h]: ["GET", "/settings", 200],
  },
  () => Unit,
  () => AccountSettings
);
export var UpdateAccountSettings = op(
  n0,
  _UAS,
  {
    [_h]: ["PATCH", "/settings", 200],
  },
  () => UpdateAccountSettingsRequest,
  () => AccountSettings
);
