// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASD, _aSD, _CL, _cL, _GAS, _GASR, _GASRe, _mICIOCU, _mSCIOCU, _UAS, _UASR, _UASRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountSettingsDetail = struct(n0, _ASD, 0, [_cL], [() => CapacityLimits]);
export var CapacityLimits = struct(n0, _CL, 0, [_mICIOCU, _mSCIOCU], [1, 1]);
export var GetAccountSettingsRequest = struct(n0, _GASR, 0, [], []);
export var GetAccountSettingsResponse = struct(n0, _GASRe, 0, [_aSD], [() => AccountSettingsDetail]);
export var UpdateAccountSettingsRequest = struct(n0, _UASR, 0, [_cL], [() => CapacityLimits]);
export var UpdateAccountSettingsResponse = struct(n0, _UASRp, 0, [_aSD], [() => AccountSettingsDetail]);
export var GetAccountSettings = op(
  n0,
  _GAS,
  0,
  () => GetAccountSettingsRequest,
  () => GetAccountSettingsResponse
);
export var UpdateAccountSettings = op(
  n0,
  _UAS,
  0,
  () => UpdateAccountSettingsRequest,
  () => UpdateAccountSettingsResponse
);
