// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _CTA,
  _CTB,
  _FR,
  _LMT,
  _LMTA,
  _LMTB,
  _LTJi,
  _LTJRis,
  _LTJRist,
  _MR,
  _NCa,
  _NT,
  _SBo,
  _SE,
  _SO,
  _TETr,
  _TJAr,
  _TJNr,
  _TJSr,
  _TJSran,
  _TJSrans,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListTransformJobsRequest = struct(
  n0,
  _LTJRis,
  0,
  [_CTA, _CTB, _LMTA, _LMTB, _NCa, _SE, _SBo, _SO, _NT, _MR],
  [4, 4, 4, 4, 0, 0, 0, 0, 0, 1]
);
export var ListTransformJobsResponse = struct(n0, _LTJRist, 0, [_TJSran, _NT], [() => TransformJobSummaries, 0]);
export var TransformJobSummary = struct(
  n0,
  _TJSrans,
  0,
  [_TJNr, _TJAr, _CT, _TETr, _LMT, _TJSr, _FR],
  [0, 0, 4, 4, 4, 0, 0]
);
export var TransformJobSummaries = list(n0, _TJSran, 0, () => TransformJobSummary);
export var ListTransformJobs = op(
  n0,
  _LTJi,
  0,
  () => ListTransformJobsRequest,
  () => ListTransformJobsResponse
);
