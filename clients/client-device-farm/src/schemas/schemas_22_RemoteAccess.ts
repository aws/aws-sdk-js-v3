// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aAN,
  _AS,
  _aS,
  _dJTM,
  _GAS,
  _GASR,
  _GASRe,
  _mJTM,
  _mS,
  _rem,
  _sAR,
  _TM,
  _tM,
  _to,
  _uD,
  _uRAD,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountSettings = struct(
  n0,
  _AS,
  0,
  [_aAN, _uD, _uRAD, _mJTM, _tM, _mS, _dJTM, _sAR],
  [0, 128 | 1, 128 | 1, 1, () => TrialMinutes, 128 | 1, 1, 2]
);
export var GetAccountSettingsRequest = struct(n0, _GASR, 0, [], []);
export var GetAccountSettingsResult = struct(n0, _GASRe, 0, [_aS], [() => AccountSettings]);
export var TrialMinutes = struct(n0, _TM, 0, [_to, _rem], [1, 1]);
export var MaxSlotMap = 128 | 1;

export var PurchasedDevicesMap = 128 | 1;

export var GetAccountSettings = op(
  n0,
  _GAS,
  0,
  () => GetAccountSettingsRequest,
  () => GetAccountSettingsResult
);
