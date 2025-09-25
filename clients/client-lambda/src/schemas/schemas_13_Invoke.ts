// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AL, _AU, _CE, _CSU, _CSZ, _FC, _GAS, _GASR, _GASRe, _h, _TCS, _UCE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountLimit = struct(n0, _AL, 0, [_TCS, _CSU, _CSZ, _CE, _UCE], [1, 1, 1, 1, 1]);
export var AccountUsage = struct(n0, _AU, 0, [_TCS, _FC], [1, 1]);
export var GetAccountSettingsRequest = struct(n0, _GASR, 0, [], []);
export var GetAccountSettingsResponse = struct(n0, _GASRe, 0, [_AL, _AU], [() => AccountLimit, () => AccountUsage]);
export var GetAccountSettings = op(
  n0,
  _GAS,
  {
    [_h]: ["GET", "/2016-08-19/account-settings", 200],
  },
  () => GetAccountSettingsRequest,
  () => GetAccountSettingsResponse
);
