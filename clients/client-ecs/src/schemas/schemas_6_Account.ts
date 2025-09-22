// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DAS,
  _DASR,
  _DASRe,
  _eS,
  _LAS,
  _LASR,
  _LASRi,
  _mRa,
  _n,
  _nT,
  _pA,
  _PAS,
  _PASD,
  _PASDR,
  _PASDRu,
  _PASR,
  _PASRu,
  _se,
  _Set,
  _set,
  _Sett,
  _t,
  _v,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccountSettingRequest = struct(n0, _DASR, 0, [_n, _pA], [0, 0]);
export var DeleteAccountSettingResponse = struct(n0, _DASRe, 0, [_set], [() => Setting]);
export var ListAccountSettingsRequest = struct(n0, _LASR, 0, [_n, _v, _pA, _eS, _nT, _mRa], [0, 0, 0, 2, 0, 1]);
export var ListAccountSettingsResponse = struct(n0, _LASRi, 0, [_se, _nT], [() => Settings, 0]);
export var PutAccountSettingDefaultRequest = struct(n0, _PASDR, 0, [_n, _v], [0, 0]);
export var PutAccountSettingDefaultResponse = struct(n0, _PASDRu, 0, [_set], [() => Setting]);
export var PutAccountSettingRequest = struct(n0, _PASR, 0, [_n, _v, _pA], [0, 0, 0]);
export var PutAccountSettingResponse = struct(n0, _PASRu, 0, [_set], [() => Setting]);
export var Setting = struct(n0, _Set, 0, [_n, _v, _pA, _t], [0, 0, 0, 0]);
export var Settings = list(n0, _Sett, 0, () => Setting);
export var DeleteAccountSetting = op(
  n0,
  _DAS,
  0,
  () => DeleteAccountSettingRequest,
  () => DeleteAccountSettingResponse
);
export var ListAccountSettings = op(
  n0,
  _LAS,
  0,
  () => ListAccountSettingsRequest,
  () => ListAccountSettingsResponse
);
export var PutAccountSetting = op(
  n0,
  _PAS,
  0,
  () => PutAccountSettingRequest,
  () => PutAccountSettingResponse
);
export var PutAccountSettingDefault = op(
  n0,
  _PASD,
  0,
  () => PutAccountSettingDefaultRequest,
  () => PutAccountSettingDefaultResponse
);
