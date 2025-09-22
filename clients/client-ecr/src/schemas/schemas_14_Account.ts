// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GAS, _GASR, _GASRe, _n, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAccountSettingRequest = struct(n0, _GASR, 0, [_n], [0]);
export var GetAccountSettingResponse = struct(n0, _GASRe, 0, [_n, _v], [0, 0]);
export var GetAccountSetting = op(
  n0,
  _GAS,
  0,
  () => GetAccountSettingRequest,
  () => GetAccountSettingResponse
);
