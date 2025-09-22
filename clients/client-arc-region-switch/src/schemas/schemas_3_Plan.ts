// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { IllegalArgumentException as __IllegalArgumentException } from "../models/index";
import {
  _a,
  _ac,
  _AE,
  _AEL,
  _AP,
  _ap,
  _aPE,
  _APES,
  _APESR,
  _APESRp,
  _aRc,
  _aRT,
  _aTT,
  _c,
  _cl,
  _CPE,
  _CPER,
  _CPERa,
  _d,
  _dR,
  _e,
  _eA,
  _eBT,
  _EE,
  _EEL,
  _eI,
  _eIv,
  _eR,
  _eRx,
  _eS,
  _eT,
  _GPE,
  _GPER,
  _GPERe,
  _hE,
  _i,
  _IAE,
  _LP,
  _LPE,
  _LPEE,
  _LPEER,
  _LPEERi,
  _LPER,
  _LPERi,
  _LPIR,
  _LPIRR,
  _LPIRRi,
  _LPR,
  _LPRi,
  _lV,
  _m,
  _me,
  _mR,
  _n,
  _nT,
  _o,
  _p,
  _pA,
  _pEI,
  _PL,
  _pl,
  _pR,
  _pV,
  _r,
  _rA,
  _re,
  _rTOM,
  _s,
  _sM,
  _sN,
  _SPE,
  _SPER,
  _SPERt,
  _SS,
  _sS,
  _SSt,
  _sT,
  _sta,
  _ti,
  _tR,
  _ty,
  _uA,
  _UPE,
  _UPER,
  _UPERp,
  _UPES,
  _UPESR,
  _UPESRp,
  _v,
  n0,
} from "./schemas_0";
import { Plan } from "./schemas_1_Plan";

/* eslint no-var: 0 */

export var AbbreviatedExecution = struct(
  n0,
  _AE,
  0,
  [_pA, _eI, _v, _uA, _c, _sT, _eT, _m, _eS, _eA, _eR, _aRT],
  [0, 0, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0]
);
export var AbbreviatedPlan = struct(
  n0,
  _AP,
  0,
  [_a, _o, _n, _r, _rA, _pR, _v, _uA, _d, _eRx, _aPE, _rTOM],
  [0, 0, 0, 64 | 0, 0, 0, 0, 4, 0, 0, 0, 1]
);
export var ApprovePlanExecutionStepRequest = struct(n0, _APESR, 0, [_pA, _eI, _sN, _ap, _c], [0, 0, 0, 0, 0]);
export var ApprovePlanExecutionStepResponse = struct(n0, _APESRp, 0, [], []);
export var CancelPlanExecutionRequest = struct(n0, _CPER, 0, [_pA, _eI, _c], [0, 0, 0]);
export var CancelPlanExecutionResponse = struct(n0, _CPERa, 0, [], []);
export var ExecutionEvent = struct(
  n0,
  _EE,
  0,
  [_ti, _ty, _sN, _eBT, _re, _e, _d, _eIv, _pEI],
  [4, 0, 0, 0, 64 | 0, 0, 0, 0, 0]
);
export var GetPlanExecutionRequest = struct(n0, _GPER, 0, [_pA, _eI, _mR, _nT], [0, 0, 1, 0]);
export var GetPlanExecutionResponse = struct(
  n0,
  _GPERe,
  0,
  [_pA, _eI, _v, _uA, _c, _sT, _eT, _m, _eS, _eA, _eR, _sS, _p, _aRT, _nT],
  [0, 0, 0, 4, 0, 4, 4, 0, 0, 0, 0, () => StepStates, () => Plan, 0, 0]
);
export var IllegalArgumentException = error(
  n0,
  _IAE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_me],
  [0],

  __IllegalArgumentException
);
export var ListPlanExecutionEventsRequest = struct(n0, _LPEER, 0, [_pA, _eI, _mR, _nT, _n], [0, 0, 1, 0, 0]);
export var ListPlanExecutionEventsResponse = struct(n0, _LPEERi, 0, [_i, _nT], [() => ExecutionEventList, 0]);
export var ListPlanExecutionsRequest = struct(n0, _LPER, 0, [_pA, _mR, _nT, _s], [0, 1, 0, 0]);
export var ListPlanExecutionsResponse = struct(n0, _LPERi, 0, [_i, _nT], [() => AbbreviatedExecutionsList, 0]);
export var ListPlansInRegionRequest = struct(n0, _LPIRR, 0, [_mR, _nT], [1, 0]);
export var ListPlansInRegionResponse = struct(n0, _LPIRRi, 0, [_pl, _nT], [() => PlanList, 0]);
export var ListPlansRequest = struct(n0, _LPR, 0, [_mR, _nT], [1, 0]);
export var ListPlansResponse = struct(n0, _LPRi, 0, [_pl, _nT], [() => PlanList, 0]);
export var StartPlanExecutionRequest = struct(n0, _SPER, 0, [_pA, _tR, _ac, _m, _c, _lV], [0, 0, 0, 0, 0, 0]);
export var StartPlanExecutionResponse = struct(n0, _SPERt, 0, [_eI, _p, _pV, _aRc, _dR], [0, 0, 0, 0, 0]);
export var StepState = struct(n0, _SS, 0, [_n, _sta, _sT, _eT, _sM], [0, 0, 4, 4, 0]);
export var UpdatePlanExecutionRequest = struct(n0, _UPER, 0, [_pA, _eI, _ac, _c], [0, 0, 0, 0]);
export var UpdatePlanExecutionResponse = struct(n0, _UPERp, 0, [], []);
export var UpdatePlanExecutionStepRequest = struct(n0, _UPESR, 0, [_pA, _eI, _c, _sN, _aTT], [0, 0, 0, 0, 0]);
export var UpdatePlanExecutionStepResponse = struct(n0, _UPESRp, 0, [], []);
export var AbbreviatedExecutionsList = list(n0, _AEL, 0, () => AbbreviatedExecution);
export var ExecutionEventList = list(n0, _EEL, 0, () => ExecutionEvent);
export var PlanList = list(n0, _PL, 0, () => AbbreviatedPlan);
export var Resources = 64 | 0;

export var StepStates = list(n0, _SSt, 0, () => StepState);
export var ApprovePlanExecutionStep = op(
  n0,
  _APES,
  0,
  () => ApprovePlanExecutionStepRequest,
  () => ApprovePlanExecutionStepResponse
);
export var CancelPlanExecution = op(
  n0,
  _CPE,
  0,
  () => CancelPlanExecutionRequest,
  () => CancelPlanExecutionResponse
);
export var GetPlanExecution = op(
  n0,
  _GPE,
  0,
  () => GetPlanExecutionRequest,
  () => GetPlanExecutionResponse
);
export var ListPlanExecutionEvents = op(
  n0,
  _LPEE,
  0,
  () => ListPlanExecutionEventsRequest,
  () => ListPlanExecutionEventsResponse
);
export var ListPlanExecutions = op(
  n0,
  _LPE,
  0,
  () => ListPlanExecutionsRequest,
  () => ListPlanExecutionsResponse
);
export var ListPlans = op(
  n0,
  _LP,
  0,
  () => ListPlansRequest,
  () => ListPlansResponse
);
export var ListPlansInRegion = op(
  n0,
  _LPIR,
  0,
  () => ListPlansInRegionRequest,
  () => ListPlansInRegionResponse
);
export var StartPlanExecution = op(
  n0,
  _SPE,
  0,
  () => StartPlanExecutionRequest,
  () => StartPlanExecutionResponse
);
export var UpdatePlanExecution = op(
  n0,
  _UPE,
  0,
  () => UpdatePlanExecutionRequest,
  () => UpdatePlanExecutionResponse
);
export var UpdatePlanExecutionStep = op(
  n0,
  _UPES,
  0,
  () => UpdatePlanExecutionStepRequest,
  () => UpdatePlanExecutionStepResponse
);
