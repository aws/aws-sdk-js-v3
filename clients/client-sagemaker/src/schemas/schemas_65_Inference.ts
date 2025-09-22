// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _CTom,
  _D,
  _DIEe,
  _DIER,
  _DIERe,
  _ETn,
  _IE,
  _IEA,
  _IEL,
  _IES,
  _IESn,
  _LIE,
  _LIER,
  _LIERi,
  _LMT,
  _LMTA,
  _LMTB,
  _MR,
  _N,
  _NCa,
  _NT,
  _RAo,
  _SBo,
  _Sc,
  _SE,
  _SIE,
  _SIER,
  _SIERt,
  _SO,
  _SRt,
  _St,
  _STt,
  _Ty,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInferenceExperimentRequest = struct(n0, _DIER, 0, [_N], [0]);
export var DeleteInferenceExperimentResponse = struct(n0, _DIERe, 0, [_IEA], [0]);
export var InferenceExperimentSchedule = struct(n0, _IES, 0, [_STt, _ETn], [4, 4]);
export var InferenceExperimentSummary = struct(
  n0,
  _IESn,
  0,
  [_N, _Ty, _Sc, _St, _SRt, _D, _CT, _CTom, _LMT, _RAo],
  [0, 0, () => InferenceExperimentSchedule, 0, 0, 0, 4, 4, 4, 0]
);
export var ListInferenceExperimentsRequest = struct(
  n0,
  _LIER,
  0,
  [_NCa, _Ty, _SE, _CTA, _CTB, _LMTA, _LMTB, _SBo, _SO, _NT, _MR],
  [0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 1]
);
export var ListInferenceExperimentsResponse = struct(n0, _LIERi, 0, [_IE, _NT], [() => InferenceExperimentList, 0]);
export var StartInferenceExperimentRequest = struct(n0, _SIER, 0, [_N], [0]);
export var StartInferenceExperimentResponse = struct(n0, _SIERt, 0, [_IEA], [0]);
export var InferenceExperimentList = list(n0, _IEL, 0, () => InferenceExperimentSummary);
export var DeleteInferenceExperiment = op(
  n0,
  _DIEe,
  0,
  () => DeleteInferenceExperimentRequest,
  () => DeleteInferenceExperimentResponse
);
export var ListInferenceExperiments = op(
  n0,
  _LIE,
  0,
  () => ListInferenceExperimentsRequest,
  () => ListInferenceExperimentsResponse
);
export var StartInferenceExperiment = op(
  n0,
  _SIE,
  0,
  () => StartInferenceExperimentRequest,
  () => StartInferenceExperimentResponse
);
