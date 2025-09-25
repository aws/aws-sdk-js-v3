// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _DIT,
  _LMT,
  _LMTA,
  _LMTB,
  _LOJ,
  _LOJR,
  _LOJRi,
  _MR,
  _NCa,
  _NT,
  _OCpt,
  _OET,
  _OJA,
  _OJN,
  _OJS,
  _OJSp,
  _OJSpt,
  _OST,
  _OT,
  _SBo,
  _SE,
  _SO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListOptimizationJobsRequest = struct(
  n0,
  _LOJR,
  0,
  [_NT, _MR, _CTA, _CTB, _LMTA, _LMTB, _OCpt, _NCa, _SE, _SBo, _SO],
  [0, 1, 4, 4, 4, 4, 0, 0, 0, 0, 0]
);
export var ListOptimizationJobsResponse = struct(n0, _LOJRi, 0, [_OJSp, _NT], [() => OptimizationJobSummaries, 0]);
export var OptimizationJobSummary = struct(
  n0,
  _OJSpt,
  0,
  [_OJN, _OJA, _CT, _OJS, _OST, _OET, _LMT, _DIT, _OT],
  [0, 0, 4, 0, 4, 4, 4, 0, 64 | 0]
);
export var OptimizationJobSummaries = list(n0, _OJSp, 0, () => OptimizationJobSummary);
export var OptimizationTypes = 64 | 0;

export var ListOptimizationJobs = op(
  n0,
  _LOJ,
  0,
  () => ListOptimizationJobsRequest,
  () => ListOptimizationJobsResponse
);
