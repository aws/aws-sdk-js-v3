// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  InternalServerException as __InternalServerException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _a,
  _ADE,
  _AF,
  _AFL,
  _aI,
  _aQE,
  _c,
  _co,
  _e,
  _f,
  _fe,
  _fL,
  _hE,
  _i,
  _ISE,
  _k,
  _LRA,
  _LRAR,
  _LRARi,
  _lUTS,
  _m,
  _mO,
  _mR,
  _n,
  _nS,
  _nT,
  _r,
  _RA,
  _rA,
  _RAe,
  _RF,
  _s,
  _se,
  _t,
  _TE,
  _v,
  _VE,
  _VEF,
  _VEFL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
    [_aQE]: [`BCMRecommendedActionsAccessDenied`, 403],
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var ActionFilter = struct(n0, _AF, 0, [_k, _mO, _v], [0, 0, 64 | 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`BCMRecommendedActionsInternalServer`, 500],
  },
  [_m],
  [0],

  __InternalServerException
);
export var ListRecommendedActionsRequest = struct(n0, _LRAR, 0, [_f, _mR, _nT], [() => RequestFilter, 1, 0]);
export var ListRecommendedActionsResponse = struct(n0, _LRARi, 0, [_rA, _nT], [() => RecommendedActions, 0]);
export var RecommendedAction = struct(
  n0,
  _RA,
  0,
  [_i, _t, _aI, _se, _fe, _co, _nS, _lUTS],
  [0, 0, 0, 0, 0, 128 | 0, 64 | 0, 0]
);
export var RequestFilter = struct(n0, _RF, 0, [_a], [() => ActionFilterList]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
    [_aQE]: [`BCMRecommendedActionsThrottling`, 429],
  },
  [_m],
  [0],

  __ThrottlingException
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`BCMRecommendedActionsValidation`, 400],
  },
  [_m, _r, _fL],
  [0, 0, () => ValidationExceptionFieldList],

  __ValidationException
);
export var ValidationExceptionField = struct(n0, _VEF, 0, [_n, _m], [0, 0]);
export var Unit = "unit" as const;

export var ActionFilterList = list(n0, _AFL, 0, () => ActionFilter);
export var FilterValues = 64 | 0;

export var NextSteps = 64 | 0;

export var RecommendedActions = list(n0, _RAe, 0, () => RecommendedAction);
export var ValidationExceptionFieldList = list(n0, _VEFL, 0, () => ValidationExceptionField);
export var Context = 128 | 0;

export var ListRecommendedActions = op(
  n0,
  _LRA,
  0,
  () => ListRecommendedActionsRequest,
  () => ListRecommendedActionsResponse
);
