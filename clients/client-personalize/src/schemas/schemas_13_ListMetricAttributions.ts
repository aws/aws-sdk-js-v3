// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cDT,
  _dGA,
  _fR,
  _LMA,
  _LMAR,
  _LMARi,
  _lUDT,
  _mAA,
  _mAe,
  _MAetr,
  _MAS,
  _mRa,
  _n,
  _nT,
  _s,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListMetricAttributionsRequest = struct(n0, _LMAR, 0, [_dGA, _nT, _mRa], [0, 0, 1]);
export var ListMetricAttributionsResponse = struct(n0, _LMARi, 0, [_mAe, _nT], [() => MetricAttributions, 0]);
export var MetricAttributionSummary = struct(n0, _MAS, 0, [_n, _mAA, _s, _cDT, _lUDT, _fR], [0, 0, 0, 4, 4, 0]);
export var MetricAttributions = list(n0, _MAetr, 0, () => MetricAttributionSummary);
export var ListMetricAttributions = op(
  n0,
  _LMA,
  2,
  () => ListMetricAttributionsRequest,
  () => ListMetricAttributionsResponse
);
