// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ca,
  _cat,
  _cN,
  _de,
  _f,
  _ht,
  _id_,
  _IF,
  _ins,
  _IS,
  _iS,
  _ISn,
  _ISns,
  _kV,
  _kVu,
  _LI,
  _LIR,
  _LIRi,
  _lRTa,
  _lTT,
  _mR,
  _n,
  _nT,
  _rea,
  _s,
  _st,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var InsightsFilter = struct(n0, _IF, 0, [_cat, _kVu, _st], [64 | 0, 64 | 0, 64 | 0]);
export var InsightStatus = struct(n0, _IS, 0, [_s, _rea], [0, 0]);
export var InsightSummary = struct(
  n0,
  _ISn,
  0,
  [_id_, _n, _ca, _kV, _lRTa, _lTT, _de, _iS],
  [0, 0, 0, 0, 4, 4, 0, () => InsightStatus]
);
export var ListInsightsRequest = struct(n0, _LIR, 0, [_cN, _f, _mR, _nT], [[0, 1], () => InsightsFilter, 1, 0]);
export var ListInsightsResponse = struct(n0, _LIRi, 0, [_ins, _nT], [() => InsightSummaries, 0]);
export var CategoryList = 64 | 0;

export var InsightStatusValueList = 64 | 0;

export var InsightSummaries = list(n0, _ISns, 0, () => InsightSummary);
export var ListInsights = op(
  n0,
  _LI,
  {
    [_ht]: ["POST", "/clusters/{clusterName}/insights", 200],
  },
  () => ListInsightsRequest,
  () => ListInsightsResponse
);
