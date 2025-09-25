// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _a,
  _Ac,
  _ADE,
  _aI,
  _aIc,
  _am,
  _aPED,
  _aPRC,
  _aPS,
  _aPT,
  _AR,
  _AS,
  _aUA,
  _c,
  _cA,
  _cr,
  _D,
  _d,
  _DV,
  _E,
  _e,
  _eA,
  _eTTCIM,
  _Ex,
  _f,
  _fAS,
  _fTT,
  _FTU,
  _fTU,
  _FTUr,
  _fUA,
  _GAA,
  _GAAR,
  _GAARe,
  _GAPS,
  _GAPSR,
  _GAPSRe,
  _GFTU,
  _GFTUR,
  _GFTURe,
  _hE,
  _ISE,
  _iU,
  _K,
  _l,
  _LAA,
  _LAAR,
  _LAARi,
  _lC,
  _m,
  _MA,
  _MO,
  _mR,
  _N,
  _nT,
  _O,
  _o,
  _r,
  _re,
  _RNFE,
  _s,
  _sA,
  _se,
  _ser,
  _t,
  _TE,
  _u,
  _UAP,
  _UAPR,
  _UAPRp,
  _uT,
  _V,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var ActivitySummary = struct(n0, _AS, 0, [_aI, _t, _r, _s], [0, 0, () => ActivityReward, 0]);
export var DimensionValues = struct(n0, _DV, 0, [_K, _V, _MO], [0, 64 | 0, 64 | 0]);
export var Expression = struct(
  n0,
  _E,
  0,
  [_O, _A, _N, _D],
  [() => Expressions, () => Expressions, () => Expression, () => DimensionValues]
);
export var FreeTierUsage = struct(
  n0,
  _FTU,
  0,
  [_se, _o, _uT, _re, _aUA, _fUA, _l, _u, _d, _fTT],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0]
);
export var GetAccountActivityRequest = struct(n0, _GAAR, 0, [_aI, _lC], [0, 0]);
export var GetAccountActivityResponse = struct(
  n0,
  _GAARe,
  0,
  [_aI, _t, _d, _s, _iU, _r, _eTTCIM, _eA, _sA, _cA],
  [0, 0, 0, 0, 0, () => ActivityReward, 1, 5, 5, 5]
);
export var GetAccountPlanStateRequest = struct(n0, _GAPSR, 0, [], []);
export var GetAccountPlanStateResponse = struct(
  n0,
  _GAPSRe,
  0,
  [_aIc, _aPT, _aPS, _aPRC, _aPED],
  [0, 0, 0, () => MonetaryAmount, 5]
);
export var GetFreeTierUsageRequest = struct(n0, _GFTUR, 0, [_f, _mR, _nT], [() => Expression, 1, 0]);
export var GetFreeTierUsageResponse = struct(n0, _GFTURe, 0, [_fTU, _nT], [() => FreeTierUsages, 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _ser,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var ListAccountActivitiesRequest = struct(n0, _LAAR, 0, [_fAS, _nT, _mR, _lC], [64 | 0, 0, 1, 0]);
export var ListAccountActivitiesResponse = struct(n0, _LAARi, 0, [_a, _nT], [() => Activities, 0]);
export var MonetaryAmount = struct(n0, _MA, 0, [_am, _u], [1, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var UpgradeAccountPlanRequest = struct(n0, _UAPR, 0, [_aPT], [0]);
export var UpgradeAccountPlanResponse = struct(n0, _UAPRp, 0, [_aIc, _aPT, _aPS], [0, 0, 0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var Activities = list(n0, _Ac, 0, () => ActivitySummary);
export var Expressions = list(n0, _Ex, 0, () => Expression);
export var FilterActivityStatuses = 64 | 0;

export var FreeTierUsages = list(n0, _FTUr, 0, () => FreeTierUsage);
export var MatchOptions = 64 | 0;

export var Values = 64 | 0;

export var ActivityReward = uni(n0, _AR, 0, [_cr], [() => MonetaryAmount]);
export var GetAccountActivity = op(
  n0,
  _GAA,
  0,
  () => GetAccountActivityRequest,
  () => GetAccountActivityResponse
);
export var GetAccountPlanState = op(
  n0,
  _GAPS,
  0,
  () => GetAccountPlanStateRequest,
  () => GetAccountPlanStateResponse
);
export var GetFreeTierUsage = op(
  n0,
  _GFTU,
  0,
  () => GetFreeTierUsageRequest,
  () => GetFreeTierUsageResponse
);
export var ListAccountActivities = op(
  n0,
  _LAA,
  0,
  () => ListAccountActivitiesRequest,
  () => ListAccountActivitiesResponse
);
export var UpgradeAccountPlan = op(
  n0,
  _UAP,
  0,
  () => UpgradeAccountPlanRequest,
  () => UpgradeAccountPlanResponse
);
