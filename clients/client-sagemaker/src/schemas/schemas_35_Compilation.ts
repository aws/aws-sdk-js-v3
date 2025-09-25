// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CET,
  _CJAo,
  _CJN,
  _CJS,
  _CJSo,
  _CJSom,
  _CSTo,
  _CT,
  _CTA,
  _CTB,
  _CTD,
  _CTPA,
  _CTPAo,
  _CTPO,
  _LCJ,
  _LCJR,
  _LCJRi,
  _LMT,
  _LMTA,
  _LMTB,
  _MR,
  _NCa,
  _NT,
  _SBo,
  _SE,
  _SO,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CompilationJobSummary = struct(
  n0,
  _CJS,
  0,
  [_CJN, _CJAo, _CT, _CSTo, _CET, _CTD, _CTPO, _CTPA, _CTPAo, _LMT, _CJSo],
  [0, 0, 4, 4, 4, 0, 0, 0, 0, 4, 0]
);
export var ListCompilationJobsRequest = struct(
  n0,
  _LCJR,
  0,
  [_NT, _MR, _CTA, _CTB, _LMTA, _LMTB, _NCa, _SE, _SBo, _SO],
  [0, 1, 4, 4, 4, 4, 0, 0, 0, 0]
);
export var ListCompilationJobsResponse = struct(n0, _LCJRi, 0, [_CJSom, _NT], [() => CompilationJobSummaries, 0]);
export var CompilationJobSummaries = list(n0, _CJSom, 0, () => CompilationJobSummary);
export var ListCompilationJobs = op(
  n0,
  _LCJ,
  0,
  () => ListCompilationJobsRequest,
  () => ListCompilationJobsResponse
);
