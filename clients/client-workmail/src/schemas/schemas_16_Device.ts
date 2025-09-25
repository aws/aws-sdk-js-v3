// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _D,
  _DC,
  _DIe,
  _DM,
  _DMe,
  _DMev,
  _DOS,
  _DOSe,
  _DT,
  _DTe,
  _DUA,
  _DUAe,
  _E,
  _GMDAE,
  _GMDAER,
  _GMDAERe,
  _GMDAO,
  _GMDAOR,
  _GMDAORe,
  _LMDAO,
  _LMDAOR,
  _LMDAORi,
  _LMDAR,
  _LMDARR,
  _LMDARRi,
  _MDAMR,
  _MDAMRL,
  _MDAO,
  _MDAOL,
  _MDAR,
  _MDARI,
  _MDARL,
  _MR,
  _MRa,
  _N,
  _NDM,
  _NDOS,
  _NDT,
  _NDUA,
  _NT,
  _OI,
  _Ov,
  _PMDAO,
  _PMDAOR,
  _PMDAORu,
  _R,
  _UIs,
  _UMDAR,
  _UMDARR,
  _UMDARRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetMobileDeviceAccessEffectRequest = struct(
  n0,
  _GMDAER,
  0,
  [_OI, _DTe, _DMev, _DOSe, _DUAe],
  [0, 0, 0, 0, 0]
);
export var GetMobileDeviceAccessEffectResponse = struct(
  n0,
  _GMDAERe,
  0,
  [_E, _MR],
  [0, () => MobileDeviceAccessMatchedRuleList]
);
export var GetMobileDeviceAccessOverrideRequest = struct(n0, _GMDAOR, 0, [_OI, _UIs, _DIe], [0, 0, 0]);
export var GetMobileDeviceAccessOverrideResponse = struct(
  n0,
  _GMDAORe,
  0,
  [_UIs, _DIe, _E, _D, _DC, _DM],
  [0, 0, 0, 0, 4, 4]
);
export var ListMobileDeviceAccessOverridesRequest = struct(
  n0,
  _LMDAOR,
  0,
  [_OI, _UIs, _DIe, _NT, _MRa],
  [0, 0, 0, 0, 1]
);
export var ListMobileDeviceAccessOverridesResponse = struct(
  n0,
  _LMDAORi,
  0,
  [_Ov, _NT],
  [() => MobileDeviceAccessOverridesList, 0]
);
export var ListMobileDeviceAccessRulesRequest = struct(n0, _LMDARR, 0, [_OI], [0]);
export var ListMobileDeviceAccessRulesResponse = struct(n0, _LMDARRi, 0, [_R], [() => MobileDeviceAccessRulesList]);
export var MobileDeviceAccessMatchedRule = struct(n0, _MDAMR, 0, [_MDARI, _N], [0, 0]);
export var MobileDeviceAccessOverride = struct(n0, _MDAO, 0, [_UIs, _DIe, _E, _D, _DC, _DM], [0, 0, 0, 0, 4, 4]);
export var MobileDeviceAccessRule = struct(
  n0,
  _MDAR,
  0,
  [_MDARI, _N, _D, _E, _DT, _NDT, _DMe, _NDM, _DOS, _NDOS, _DUA, _NDUA, _DC, _DM],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 4, 4]
);
export var PutMobileDeviceAccessOverrideRequest = struct(n0, _PMDAOR, 0, [_OI, _UIs, _DIe, _E, _D], [0, 0, 0, 0, 0]);
export var PutMobileDeviceAccessOverrideResponse = struct(n0, _PMDAORu, 0, [], []);
export var UpdateMobileDeviceAccessRuleRequest = struct(
  n0,
  _UMDARR,
  0,
  [_OI, _MDARI, _N, _D, _E, _DT, _NDT, _DMe, _NDM, _DOS, _NDOS, _DUA, _NDUA],
  [0, 0, 0, 0, 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var UpdateMobileDeviceAccessRuleResponse = struct(n0, _UMDARRp, 0, [], []);
export var DeviceModelList = 64 | 0;

export var DeviceOperatingSystemList = 64 | 0;

export var DeviceTypeList = 64 | 0;

export var DeviceUserAgentList = 64 | 0;

export var MobileDeviceAccessMatchedRuleList = list(n0, _MDAMRL, 0, () => MobileDeviceAccessMatchedRule);
export var MobileDeviceAccessOverridesList = list(n0, _MDAOL, 0, () => MobileDeviceAccessOverride);
export var MobileDeviceAccessRulesList = list(n0, _MDARL, 0, () => MobileDeviceAccessRule);
export var GetMobileDeviceAccessEffect = op(
  n0,
  _GMDAE,
  0,
  () => GetMobileDeviceAccessEffectRequest,
  () => GetMobileDeviceAccessEffectResponse
);
export var GetMobileDeviceAccessOverride = op(
  n0,
  _GMDAO,
  0,
  () => GetMobileDeviceAccessOverrideRequest,
  () => GetMobileDeviceAccessOverrideResponse
);
export var ListMobileDeviceAccessOverrides = op(
  n0,
  _LMDAO,
  0,
  () => ListMobileDeviceAccessOverridesRequest,
  () => ListMobileDeviceAccessOverridesResponse
);
export var ListMobileDeviceAccessRules = op(
  n0,
  _LMDAR,
  0,
  () => ListMobileDeviceAccessRulesRequest,
  () => ListMobileDeviceAccessRulesResponse
);
export var PutMobileDeviceAccessOverride = op(
  n0,
  _PMDAO,
  0,
  () => PutMobileDeviceAccessOverrideRequest,
  () => PutMobileDeviceAccessOverrideResponse
);
export var UpdateMobileDeviceAccessRule = op(
  n0,
  _UMDAR,
  0,
  () => UpdateMobileDeviceAccessRuleRequest,
  () => UpdateMobileDeviceAccessRuleResponse
);
