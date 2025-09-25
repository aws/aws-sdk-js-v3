// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ResourceUnavailableException as __ResourceUnavailableException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _ADE,
  _B,
  _c,
  _CA,
  _CE,
  _CREP,
  _CREPR,
  _CREPRr,
  _CT,
  _CU,
  _CUC,
  _D,
  _DI,
  _DL,
  _Do,
  _Doc,
  _DREP,
  _DREPe,
  _DREPR,
  _DREPRe,
  _DREPRes,
  _e,
  _EM,
  _GI,
  _h,
  _hE,
  _hQ,
  _I,
  _ISE,
  _K,
  _LREP,
  _LREPR,
  _LREPRi,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MR,
  _mR,
  _N,
  _NT,
  _nT,
  _OS,
  _R,
  _RARN,
  _RCU,
  _REPI,
  _REPS,
  _REPSL,
  _RI,
  _RIe,
  _RNFE,
  _RR,
  _RRe,
  _RRI,
  _RRIL,
  _RUE,
  _S,
  _s,
  _Sc,
  _SI,
  _SQ,
  _SQEE,
  _T,
  _Ta,
  _TB,
  _TE,
  _Ti,
  _TK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _TT,
  _UA,
  _UR,
  _UREP,
  _UREPR,
  _URR,
  _URRn,
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
  [_M],
  [0],

  __AccessDeniedException
);
export var CapacityUnitsConfiguration = struct(n0, _CUC, 0, [_RCU], [1]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_M],
  [0],

  __ConflictException
);
export var CreateRescoreExecutionPlanRequest = struct(
  n0,
  _CREPR,
  0,
  [_N, _D, _CU, _T, _CT],
  [0, 0, () => CapacityUnitsConfiguration, () => TagList, [0, 4]]
);
export var CreateRescoreExecutionPlanResponse = struct(n0, _CREPRr, 0, [_I, _A], [0, 0]);
export var DeleteRescoreExecutionPlanRequest = struct(n0, _DREPR, 0, [_I], [[0, 1]]);
export var DescribeRescoreExecutionPlanRequest = struct(n0, _DREPRe, 0, [_I], [[0, 1]]);
export var DescribeRescoreExecutionPlanResponse = struct(
  n0,
  _DREPRes,
  0,
  [_I, _A, _N, _D, _CU, _CA, _UA, _S, _EM],
  [0, 0, 0, 0, () => CapacityUnitsConfiguration, 4, 4, 0, 0]
);
export var Document = struct(n0, _Do, 0, [_I, _GI, _Ti, _B, _TT, _TB, _OS], [0, 0, 0, 0, 64 | 0, 64 | 0, 1]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
  },
  [_M],
  [0],

  __InternalServerException
);
export var ListRescoreExecutionPlansRequest = struct(
  n0,
  _LREPR,
  0,
  [_NT, _MR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListRescoreExecutionPlansResponse = struct(
  n0,
  _LREPRi,
  0,
  [_SI, _NT],
  [() => RescoreExecutionPlanSummaryList, 0]
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_T], [() => TagList]);
export var RescoreExecutionPlanSummary = struct(n0, _REPS, 0, [_N, _I, _CA, _UA, _S], [0, 0, 4, 4, 0]);
export var RescoreRequest = struct(n0, _RR, 0, [_REPI, _SQ, _Doc], [[0, 1], 0, () => DocumentList]);
export var RescoreResult = struct(n0, _RRe, 0, [_RI, _RIe], [0, () => RescoreResultItemList]);
export var RescoreResultItem = struct(n0, _RRI, 0, [_DI, _Sc], [0, 1]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceNotFoundException
);
export var ResourceUnavailableException = error(
  n0,
  _RUE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_M],
  [0],

  __ResourceUnavailableException
);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_M],
  [0],

  __ServiceQuotaExceededException
);
export var Tag = struct(n0, _Ta, 0, [_K, _V], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _T], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_M],
  [0],

  __ThrottlingException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateRescoreExecutionPlanRequest = struct(
  n0,
  _UREPR,
  0,
  [_I, _N, _D, _CU],
  [[0, 1], 0, 0, () => CapacityUnitsConfiguration]
);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var BodyTokensList = 64 | 0;

export var DocumentList = list(n0, _DL, 0, () => Document);
export var RescoreExecutionPlanSummaryList = list(n0, _REPSL, 0, () => RescoreExecutionPlanSummary);
export var RescoreResultItemList = list(n0, _RRIL, 0, () => RescoreResultItem);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var TitleTokensList = 64 | 0;

export var CreateRescoreExecutionPlan = op(
  n0,
  _CREP,
  {
    [_h]: ["POST", "/rescore-execution-plans", 200],
  },
  () => CreateRescoreExecutionPlanRequest,
  () => CreateRescoreExecutionPlanResponse
);
export var DeleteRescoreExecutionPlan = op(
  n0,
  _DREP,
  {
    [_h]: ["DELETE", "/rescore-execution-plans/{Id}", 200],
  },
  () => DeleteRescoreExecutionPlanRequest,
  () => Unit
);
export var DescribeRescoreExecutionPlan = op(
  n0,
  _DREPe,
  {
    [_h]: ["GET", "/rescore-execution-plans/{Id}", 200],
  },
  () => DescribeRescoreExecutionPlanRequest,
  () => DescribeRescoreExecutionPlanResponse
);
export var ListRescoreExecutionPlans = op(
  n0,
  _LREP,
  {
    [_h]: ["GET", "/rescore-execution-plans", 200],
  },
  () => ListRescoreExecutionPlansRequest,
  () => ListRescoreExecutionPlansResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var Rescore = op(
  n0,
  _R,
  {
    [_h]: ["POST", "/rescore-execution-plans/{RescoreExecutionPlanId}/rescore", 200],
  },
  () => RescoreRequest,
  () => RescoreResult
);
export var TagResource = op(
  n0,
  _TR,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateRescoreExecutionPlan = op(
  n0,
  _UREP,
  {
    [_h]: ["PUT", "/rescore-execution-plans/{Id}", 200],
  },
  () => UpdateRescoreExecutionPlanRequest,
  () => Unit
);
