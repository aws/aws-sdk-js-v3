// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _BC, _GSSS, _GSSSR, _GSSSRe, _h, _NT, _RC, _RN, _SC, _SSS, _SSSa, _SSSL, _Ti, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetSamplingStatisticSummariesRequest = struct(n0, _GSSSR, 0, [_NT], [0]);
export var GetSamplingStatisticSummariesResult = struct(
  n0,
  _GSSSRe,
  0,
  [_SSS, _NT],
  [() => SamplingStatisticSummaryList, 0]
);
export var SamplingStatisticSummary = struct(n0, _SSSa, 0, [_RN, _Ti, _RC, _BC, _SC], [0, 4, 1, 1, 1]);
export var SamplingStatisticSummaryList = list(n0, _SSSL, 0, () => SamplingStatisticSummary);
export var GetSamplingStatisticSummaries = op(
  n0,
  _GSSS,
  {
    [_h]: ["POST", "/SamplingStatisticSummaries", 200],
  },
  () => GetSamplingStatisticSummariesRequest,
  () => GetSamplingStatisticSummariesResult
);
