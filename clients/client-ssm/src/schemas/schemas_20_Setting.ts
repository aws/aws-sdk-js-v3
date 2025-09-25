// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ServiceSettingNotFound as __ServiceSettingNotFound } from "../models/index";
import {
  _aQE,
  _ARN,
  _c,
  _e,
  _GSS,
  _GSSR,
  _GSSRe,
  _LMD,
  _LMU,
  _M,
  _RSS,
  _RSSR,
  _RSSRe,
  _SIe,
  _SSe,
  _SSNF,
  _St,
  _SVe,
  _USS,
  _USSR,
  _USSRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetServiceSettingRequest = struct(n0, _GSSR, 0, [_SIe], [0]);
export var GetServiceSettingResult = struct(n0, _GSSRe, 0, [_SSe], [() => ServiceSetting]);
export var ResetServiceSettingRequest = struct(n0, _RSSR, 0, [_SIe], [0]);
export var ResetServiceSettingResult = struct(n0, _RSSRe, 0, [_SSe], [() => ServiceSetting]);
export var ServiceSetting = struct(n0, _SSe, 0, [_SIe, _SVe, _LMD, _LMU, _ARN, _St], [0, 0, 4, 0, 0, 0]);
export var ServiceSettingNotFound = error(
  n0,
  _SSNF,
  {
    [_e]: _c,
    [_aQE]: [`ServiceSettingNotFound`, 400],
  },
  [_M],
  [0],

  __ServiceSettingNotFound
);
export var UpdateServiceSettingRequest = struct(n0, _USSR, 0, [_SIe, _SVe], [0, 0]);
export var UpdateServiceSettingResult = struct(n0, _USSRp, 0, [], []);
export var GetServiceSetting = op(
  n0,
  _GSS,
  0,
  () => GetServiceSettingRequest,
  () => GetServiceSettingResult
);
export var ResetServiceSetting = op(
  n0,
  _RSS,
  0,
  () => ResetServiceSettingRequest,
  () => ResetServiceSettingResult
);
export var UpdateServiceSetting = op(
  n0,
  _USS,
  0,
  () => UpdateServiceSettingRequest,
  () => UpdateServiceSettingResult
);
