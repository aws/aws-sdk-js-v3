// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ac,
  _aI,
  _aIc,
  _BGFTI,
  _BGFTIR,
  _BGFTIRa,
  _cod,
  _cu,
  _eMC,
  _en,
  _fAa,
  _FTAI,
  _FTAIL,
  _FTI,
  _fTI,
  _FTIE,
  _FTIEL,
  _FTIL,
  _ht,
  _LUT,
  _LUTR,
  _LUTRi,
  _m,
  _mR,
  _nT,
  _s,
  _sta,
  _tot,
  _tota,
  _ty,
  _UL,
  _Us,
  _us,
  _UT,
  _UTL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetFreeTrialInfoRequest = struct(n0, _BGFTIR, 0, [_aIc], [64 | 0]);
export var BatchGetFreeTrialInfoResponse = struct(
  n0,
  _BGFTIRa,
  0,
  [_ac, _fAa],
  [() => FreeTrialAccountInfoList, () => FreeTrialInfoErrorList]
);
export var FreeTrialAccountInfo = struct(n0, _FTAI, 0, [_aI, _fTI], [0, () => FreeTrialInfoList]);
export var FreeTrialInfo = struct(n0, _FTI, 0, [_ty, _sta, _en, _s], [0, 4, 4, 0]);
export var FreeTrialInfoError = struct(n0, _FTIE, 0, [_aI, _cod, _m], [0, 0, 0]);
export var ListUsageTotalsRequest = struct(n0, _LUTR, 0, [_mR, _nT, _aIc], [1, 0, 64 | 0]);
export var ListUsageTotalsResponse = struct(n0, _LUTRi, 0, [_nT, _tot], [0, () => UsageTotalList]);
export var Usage = struct(n0, _Us, 0, [_ty, _tota, _eMC, _cu], [0, 1, 1, 0]);
export var UsageTotal = struct(n0, _UT, 0, [_aI, _us], [0, () => UsageList]);
export var FreeTrialAccountInfoList = list(n0, _FTAIL, 0, () => FreeTrialAccountInfo);
export var FreeTrialInfoErrorList = list(n0, _FTIEL, 0, () => FreeTrialInfoError);
export var FreeTrialInfoList = list(n0, _FTIL, 0, () => FreeTrialInfo);
export var MeteringAccountIdList = 64 | 0;

export var UsageAccountIdList = 64 | 0;

export var UsageList = list(n0, _UL, 0, () => Usage);
export var UsageTotalList = list(n0, _UTL, 0, () => UsageTotal);
export var BatchGetFreeTrialInfo = op(
  n0,
  _BGFTI,
  {
    [_ht]: ["POST", "/freetrialinfo/batchget", 200],
  },
  () => BatchGetFreeTrialInfoRequest,
  () => BatchGetFreeTrialInfoResponse
);
export var ListUsageTotals = op(
  n0,
  _LUT,
  {
    [_ht]: ["POST", "/usage/list", 200],
  },
  () => ListUsageTotalsRequest,
  () => ListUsageTotalsResponse
);
