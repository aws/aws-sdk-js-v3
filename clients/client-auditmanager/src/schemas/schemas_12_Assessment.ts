// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ARDs,
  _att,
  _bS,
  _dARD,
  _DED,
  _dED,
  _des,
  _DP,
  _dP,
  _dPO,
  _dRe,
  _dT,
  _e,
  _eDSA,
  _EFE,
  _eFE,
  _eFEv,
  _eSn,
  _GS,
  _GSR,
  _GSRe,
  _h,
  _iAOE,
  _kK,
  _rA,
  _Ro,
  _Rol,
  _rT,
  _Se,
  _se,
  _SNST,
  _sTn,
  _US,
  _USR,
  _USRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SNSTopic = sim(n0, _SNST, 0, 8);
export var AssessmentReportsDestination = struct(n0, _ARDs, 8, [_dT, _des], [0, 0]);
export var DefaultExportDestination = struct(n0, _DED, 0, [_dT, _des], [0, 0]);
export var DeregistrationPolicy = struct(n0, _DP, 0, [_dRe], [0]);
export var EvidenceFinderEnablement = struct(n0, _EFE, 0, [_eDSA, _eSn, _bS, _e], [0, 0, 0, 0]);
export var GetSettingsRequest = struct(n0, _GSR, 0, [_att], [[0, 1]]);
export var GetSettingsResponse = struct(n0, _GSRe, 0, [_se], [[() => Settings, 0]]);
export var Role = struct(n0, _Ro, 0, [_rT, _rA], [0, 0]);
export var Settings = struct(
  n0,
  _Se,
  0,
  [_iAOE, _sTn, _dARD, _dPO, _kK, _eFE, _dP, _dED],
  [
    2,
    [() => SNSTopic, 0],
    [() => AssessmentReportsDestination, 0],
    [() => Roles, 0],
    0,
    () => EvidenceFinderEnablement,
    () => DeregistrationPolicy,
    () => DefaultExportDestination,
  ]
);
export var UpdateSettingsRequest = struct(
  n0,
  _USR,
  0,
  [_sTn, _dARD, _dPO, _kK, _eFEv, _dP, _dED],
  [
    0,
    [() => AssessmentReportsDestination, 0],
    [() => Roles, 0],
    0,
    2,
    () => DeregistrationPolicy,
    () => DefaultExportDestination,
  ]
);
export var UpdateSettingsResponse = struct(n0, _USRp, 0, [_se], [[() => Settings, 0]]);
export var Roles = list(n0, _Rol, 8, () => Role);
export var GetSettings = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/settings/{attribute}", 200],
  },
  () => GetSettingsRequest,
  () => GetSettingsResponse
);
export var UpdateSettings = op(
  n0,
  _US,
  {
    [_h]: ["PUT", "/settings", 200],
  },
  () => UpdateSettingsRequest,
  () => UpdateSettingsResponse
);
