// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BGM,
  _BGMR,
  _BGMRa,
  _BPM,
  _BPME,
  _BPMEL,
  _BPMR,
  _BPMRa,
  _C,
  _E,
  _En,
  _h,
  _M,
  _MD,
  _MI,
  _MN,
  _MQ,
  _MQe,
  _MQL,
  _MQR,
  _MQRe,
  _MQRL,
  _MS,
  _MV,
  _P,
  _RA,
  _RMD,
  _RMDL,
  _S,
  _St,
  _Ste,
  _T,
  _TCN,
  _V,
  _XAT,
  _XAV,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetMetricsRequest = struct(n0, _BGMR, 0, [_MQ], [() => MetricQueryList]);
export var BatchGetMetricsResponse = struct(n0, _BGMRa, 0, [_MQR], [() => MetricQueryResultList]);
export var BatchPutMetricsError = struct(n0, _BPME, 0, [_C, _MI], [0, 1]);
export var BatchPutMetricsRequest = struct(n0, _BPMR, 0, [_TCN, _MD], [0, () => RawMetricDataList]);
export var BatchPutMetricsResponse = struct(n0, _BPMRa, 0, [_E], [() => BatchPutMetricsErrorList]);
export var MetricQuery = struct(n0, _MQe, 0, [_MN, _RA, _MS, _P, _XAT, _S, _En], [0, 0, 0, 0, 0, 1, 1]);
export var MetricQueryResult = struct(n0, _MQRe, 0, [_St, _M, _XAV, _MV], [0, 0, 64 | 1, 64 | 1]);
export var RawMetricData = struct(n0, _RMD, 0, [_MN, _T, _Ste, _V], [0, 4, 1, 1]);
export var Unit = "unit" as const;

export var BatchPutMetricsErrorList = list(n0, _BPMEL, 0, () => BatchPutMetricsError);
export var MetricQueryList = list(n0, _MQL, 0, () => MetricQuery);
export var MetricQueryResultList = list(n0, _MQRL, 0, () => MetricQueryResult);
export var MetricValues = 64 | 1;

export var RawMetricDataList = list(n0, _RMDL, 0, () => RawMetricData);
export var XAxisValues = 64 | 1;

export var BatchGetMetrics = op(
  n0,
  _BGM,
  {
    [_h]: ["POST", "/BatchGetMetrics", 200],
  },
  () => BatchGetMetricsRequest,
  () => BatchGetMetricsResponse
);
export var BatchPutMetrics = op(
  n0,
  _BPM,
  {
    [_h]: ["PUT", "/BatchPutMetrics", 200],
  },
  () => BatchPutMetricsRequest,
  () => BatchPutMetricsResponse
);
