// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AS, _GAS, _GASO, _GLEDS, _GLES, _GLESM, _h, _UAS, _UASI, _UASO, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountSettings = struct(n0, _AS, 0, [_GLEDS, _GLES, _GLESM], [0, 0, 0]);
export var GetAccountSettingsOutput = struct(n0, _GASO, 0, [_AS], [() => AccountSettings]);
export var UpdateAccountSettingsInput = struct(n0, _UASI, 0, [_GLEDS], [0]);
export var UpdateAccountSettingsOutput = struct(n0, _UASO, 0, [_AS], [() => AccountSettings]);
export var GetAccountSettings = op(
  n0,
  _GAS,
  {
    [_h]: ["POST", "/get-account-settings", 200],
  },
  () => Unit,
  () => GetAccountSettingsOutput
);
export var UpdateAccountSettings = op(
  n0,
  _UAS,
  {
    [_h]: ["POST", "/update-account-settings", 200],
  },
  () => UpdateAccountSettingsInput,
  () => UpdateAccountSettingsOutput
);
