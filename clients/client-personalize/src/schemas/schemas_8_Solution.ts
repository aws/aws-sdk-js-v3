// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _eT,
  _ex,
  _GSM,
  _GSMR,
  _GSMRe,
  _LMAM,
  _LMAMR,
  _LMAMRi,
  _m,
  _MA,
  _mAA,
  _MAet,
  _mN,
  _mRa,
  _nT,
  _sVA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetSolutionMetricsRequest = struct(n0, _GSMR, 0, [_sVA], [0]);
export var GetSolutionMetricsResponse = struct(n0, _GSMRe, 0, [_sVA, _m], [0, 128 | 1]);
export var ListMetricAttributionMetricsRequest = struct(n0, _LMAMR, 0, [_mAA, _nT, _mRa], [0, 0, 1]);
export var ListMetricAttributionMetricsResponse = struct(n0, _LMAMRi, 0, [_m, _nT], [() => MetricAttributes, 0]);
export var MetricAttribute = struct(n0, _MA, 0, [_eT, _mN, _ex], [0, 0, 0]);
export var MetricAttributes = list(n0, _MAet, 0, () => MetricAttribute);
export var Metrics = 128 | 1;

export var GetSolutionMetrics = op(
  n0,
  _GSM,
  0,
  () => GetSolutionMetricsRequest,
  () => GetSolutionMetricsResponse
);
export var ListMetricAttributionMetrics = op(
  n0,
  _LMAM,
  2,
  () => ListMetricAttributionMetricsRequest,
  () => ListMetricAttributionMetricsResponse
);
