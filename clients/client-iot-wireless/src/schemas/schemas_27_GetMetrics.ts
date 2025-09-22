// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _APg,
  _Av,
  _Di,
  _Dim,
  _Er,
  _ETn,
  _GM,
  _GMR,
  _GMRe,
  _h,
  _Ma,
  _Mi,
  _MN,
  _MQV,
  _MQVe,
  _n,
  _P_,
  _QI,
  _QSue,
  _SMQ,
  _SMQR,
  _SMQRu,
  _SMQu,
  _Std,
  _STta,
  _Su,
  _Tim,
  _Un,
  _v,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Dimension = struct(n0, _Di, 0, [_n, _v], [0, 0]);
export var GetMetricsRequest = struct(n0, _GMR, 0, [_SMQ], [() => SummaryMetricQueries]);
export var GetMetricsResponse = struct(n0, _GMRe, 0, [_SMQR], [() => SummaryMetricQueryResults]);
export var MetricQueryValue = struct(n0, _MQV, 0, [_Mi, _Ma, _Su, _Av, _Std, _P_], [1, 1, 1, 1, 1, 1]);
export var SummaryMetricQuery = struct(
  n0,
  _SMQu,
  0,
  [_QI, _MN, _Dim, _APg, _STta, _ETn],
  [0, 0, () => Dimensions, 0, 4, 4]
);
export var SummaryMetricQueryResult = struct(
  n0,
  _SMQRu,
  0,
  [_QI, _QSue, _Er, _MN, _Dim, _APg, _STta, _ETn, _Tim, _Va, _Un],
  [0, 0, 0, 0, () => Dimensions, 0, 4, 4, 64 | 4, () => MetricQueryValues, 0]
);
export var Dimensions = list(n0, _Dim, 0, () => Dimension);
export var MetricQueryTimestamps = 64 | 4;

export var MetricQueryValues = list(n0, _MQVe, 0, () => MetricQueryValue);
export var SummaryMetricQueries = list(n0, _SMQ, 0, () => SummaryMetricQuery);
export var SummaryMetricQueryResults = list(n0, _SMQR, 0, () => SummaryMetricQueryResult);
export var GetMetrics = op(
  n0,
  _GM,
  {
    [_h]: ["POST", "/metrics", 200],
  },
  () => GetMetricsRequest,
  () => GetMetricsResponse
);
