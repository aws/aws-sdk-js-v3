// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _A,
  _aI,
  _aKV,
  _ALS,
  _aLS,
  _AS,
  _aS,
  _bL,
  _cCE,
  _cCI,
  _cCS,
  _cCSa,
  _cD,
  _cDE,
  _CDR,
  _CDr,
  _cE,
  _cRA,
  _CS,
  _cS,
  _CSR,
  _CSr,
  _cTIS,
  _CUP,
  _CUPR,
  _d,
  _dA,
  _DCS,
  _dI,
  _dTE,
  _dV,
  _f,
  _fe,
  _GA,
  _GAR,
  _GSe,
  _GSet,
  _GSRe,
  _GSRet,
  _GUP,
  _GUPe,
  _GUPR,
  _GUPRe,
  _hQ,
  _ht,
  _i,
  _it,
  _ite,
  _jN,
  _kI,
  _li,
  _lL,
  _LOAS,
  _LOS,
  _LOUP,
  _lUD,
  _mE,
  _MOASTS,
  _MOMS,
  _MS,
  _mS,
  _n,
  _of,
  _p,
  _pC,
  _pe,
  _pO,
  _pT,
  _q,
  _QS,
  _rAFCC,
  _rAI,
  _rL,
  _S,
  _s,
  _sD,
  _sN,
  _St,
  _sVO,
  _t,
  _tBL,
  _tE,
  _th,
  _tRL,
  _TS,
  _tS,
  _UA,
  _UAR,
  _uCCHS,
  _UP,
  _uPI,
  _UPs,
  _US,
  _uSC,
  _USR,
  _UUP,
  _UUPR,
  _va,
  _wAA,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";
import { Deployment } from "./schemas_22_Deployment";

/* eslint no-var: 0 */

export var AccessLogSettings = struct(n0, _ALS, 0, [_f, _dA], [0, 0]);
export var Account = struct(n0, _A, 0, [_cRA, _tS, _fe, _aKV], [0, () => ThrottleSettings, 64 | 0, 0]);
export var ApiStage = struct(n0, _AS, 0, [_aI, _s, _th], [0, 0, () => MapOfApiStageThrottleSettings]);
export var CanarySettings = struct(n0, _CS, 0, [_pT, _dI, _sVO, _uSC], [1, 0, 128 | 0, 2]);
export var CreateDeploymentRequest = struct(
  n0,
  _CDR,
  0,
  [_rAI, _sN, _sD, _d, _cCE, _cCS, _va, _cS, _tE],
  [[0, 1], 0, 0, 0, 2, 0, 128 | 0, () => DeploymentCanarySettings, 2]
);
export var CreateStageRequest = struct(
  n0,
  _CSR,
  0,
  [_rAI, _sN, _dI, _d, _cCE, _cCS, _va, _dV, _cS, _tE, _t],
  [[0, 1], 0, 0, 0, 2, 0, 128 | 0, 0, () => CanarySettings, 2, 128 | 0]
);
export var CreateUsagePlanRequest = struct(
  n0,
  _CUPR,
  0,
  [_n, _d, _aS, _th, _q, _t],
  [0, 0, () => ListOfApiStage, () => ThrottleSettings, () => QuotaSettings, 128 | 0]
);
export var DeploymentCanarySettings = struct(n0, _DCS, 0, [_pT, _sVO, _uSC], [1, 128 | 0, 2]);
export var GetAccountRequest = struct(n0, _GAR, 0, [], []);
export var GetStageRequest = struct(
  n0,
  _GSRe,
  0,
  [_rAI, _sN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetStagesRequest = struct(
  n0,
  _GSRet,
  0,
  [_rAI, _dI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dI,
      },
    ],
  ]
);
export var GetUsagePlanRequest = struct(n0, _GUPR, 0, [_uPI], [[0, 1]]);
export var GetUsagePlansRequest = struct(
  n0,
  _GUPRe,
  0,
  [_p, _kI, _li],
  [
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      0,
      {
        [_hQ]: _kI,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
  ]
);
export var MethodSetting = struct(
  n0,
  _MS,
  0,
  [_mE, _lL, _dTE, _tBL, _tRL, _cE, _cTIS, _cDE, _rAFCC, _uCCHS],
  [2, 0, 2, 1, 1, 2, 1, 2, 2, 0]
);
export var QuotaSettings = struct(n0, _QS, 0, [_li, _of, _pe], [1, 1, 0]);
export var Stage = struct(
  n0,
  _S,
  0,
  [_dI, _cCI, _sN, _d, _cCE, _cCS, _cCSa, _mS, _va, _dV, _aLS, _cS, _tE, _wAA, _t, _cD, _lUD],
  [
    0,
    0,
    0,
    0,
    2,
    0,
    0,
    () => MapOfMethodSettings,
    128 | 0,
    0,
    () => AccessLogSettings,
    () => CanarySettings,
    2,
    0,
    128 | 0,
    4,
    4,
  ]
);
export var Stages = struct(n0, _St, 0, [_ite], [() => ListOfStage]);
export var ThrottleSettings = struct(n0, _TS, 0, [_bL, _rL], [1, 1]);
export var UpdateAccountRequest = struct(n0, _UAR, 0, [_pO], [() => ListOfPatchOperation]);
export var UpdateStageRequest = struct(n0, _USR, 0, [_rAI, _sN, _pO], [[0, 1], [0, 1], () => ListOfPatchOperation]);
export var UpdateUsagePlanRequest = struct(n0, _UUPR, 0, [_uPI, _pO], [[0, 1], () => ListOfPatchOperation]);
export var UsagePlan = struct(
  n0,
  _UP,
  0,
  [_i, _n, _d, _aS, _th, _q, _pC, _t],
  [0, 0, 0, () => ListOfApiStage, () => ThrottleSettings, () => QuotaSettings, 0, 128 | 0]
);
export var UsagePlans = struct(
  n0,
  _UPs,
  0,
  [_it, _p],
  [
    [
      () => ListOfUsagePlan,
      {
        [_jN]: _ite,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
  ]
);
export var ListOfApiStage = list(n0, _LOAS, 0, () => ApiStage);
export var ListOfStage = list(n0, _LOS, 0, () => Stage);
export var ListOfUsagePlan = list(n0, _LOUP, 0, () => UsagePlan);
export var MapOfApiStageThrottleSettings = map(n0, _MOASTS, 0, 0, () => ThrottleSettings);
export var MapOfMethodSettings = map(n0, _MOMS, 0, 0, () => MethodSetting);
export var CreateDeployment = op(
  n0,
  _CDr,
  {
    [_ht]: ["POST", "/restapis/{restApiId}/deployments", 201],
  },
  () => CreateDeploymentRequest,
  () => Deployment
);
export var CreateStage = op(
  n0,
  _CSr,
  {
    [_ht]: ["POST", "/restapis/{restApiId}/stages", 201],
  },
  () => CreateStageRequest,
  () => Stage
);
export var CreateUsagePlan = op(
  n0,
  _CUP,
  {
    [_ht]: ["POST", "/usageplans", 201],
  },
  () => CreateUsagePlanRequest,
  () => UsagePlan
);
export var GetAccount = op(
  n0,
  _GA,
  {
    [_ht]: ["GET", "/account", 200],
  },
  () => GetAccountRequest,
  () => Account
);
export var GetStage = op(
  n0,
  _GSe,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/stages/{stageName}", 200],
  },
  () => GetStageRequest,
  () => Stage
);
export var GetStages = op(
  n0,
  _GSet,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/stages", 200],
  },
  () => GetStagesRequest,
  () => Stages
);
export var GetUsagePlan = op(
  n0,
  _GUP,
  {
    [_ht]: ["GET", "/usageplans/{usagePlanId}", 200],
  },
  () => GetUsagePlanRequest,
  () => UsagePlan
);
export var GetUsagePlans = op(
  n0,
  _GUPe,
  {
    [_ht]: ["GET", "/usageplans", 200],
  },
  () => GetUsagePlansRequest,
  () => UsagePlans
);
export var UpdateAccount = op(
  n0,
  _UA,
  {
    [_ht]: ["PATCH", "/account", 200],
  },
  () => UpdateAccountRequest,
  () => Account
);
export var UpdateStage = op(
  n0,
  _US,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/stages/{stageName}", 200],
  },
  () => UpdateStageRequest,
  () => Stage
);
export var UpdateUsagePlan = op(
  n0,
  _UUP,
  {
    [_ht]: ["PATCH", "/usageplans/{usagePlanId}", 200],
  },
  () => UpdateUsagePlanRequest,
  () => UsagePlan
);
