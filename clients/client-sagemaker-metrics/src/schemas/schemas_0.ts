const _BGM = "BatchGetMetrics";
const _BGMR = "BatchGetMetricsRequest";
const _BGMRa = "BatchGetMetricsResponse";
const _BPM = "BatchPutMetrics";
const _BPME = "BatchPutMetricsError";
const _BPMEL = "BatchPutMetricsErrorList";
const _BPMR = "BatchPutMetricsRequest";
const _BPMRa = "BatchPutMetricsResponse";
const _C = "Code";
const _E = "Errors";
const _En = "End";
const _M = "Message";
const _MD = "MetricData";
const _MI = "MetricIndex";
const _MN = "MetricName";
const _MQ = "MetricQueries";
const _MQL = "MetricQueryList";
const _MQR = "MetricQueryResults";
const _MQRL = "MetricQueryResultList";
const _MQRe = "MetricQueryResult";
const _MQe = "MetricQuery";
const _MS = "MetricStat";
const _MV = "MetricValues";
const _P = "Period";
const _RA = "ResourceArn";
const _RMD = "RawMetricData";
const _RMDL = "RawMetricDataList";
const _S = "Start";
const _St = "Status";
const _Ste = "Step";
const _T = "Timestamp";
const _TCN = "TrialComponentName";
const _V = "Value";
const _XAT = "XAxisType";
const _XAV = "XAxisValues";
const _h = "http";
const _s = "smithy.ts.sdk.synthetic.com.amazonaws.sagemakermetrics";
const n0 = "com.amazonaws.sagemakermetrics";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { SageMakerMetricsServiceException as __SageMakerMetricsServiceException } from "../models/SageMakerMetricsServiceException";

/* eslint no-var: 0 */
export var BatchGetMetricsRequest: StaticStructureSchema = [3, n0, _BGMR, 0, [_MQ], [() => MetricQueryList]];
export var BatchGetMetricsResponse: StaticStructureSchema = [3, n0, _BGMRa, 0, [_MQR], [() => MetricQueryResultList]];
export var BatchPutMetricsError: StaticStructureSchema = [3, n0, _BPME, 0, [_C, _MI], [0, 1]];
export var BatchPutMetricsRequest: StaticStructureSchema = [3, n0, _BPMR, 0, [_TCN, _MD], [0, () => RawMetricDataList]];
export var BatchPutMetricsResponse: StaticStructureSchema = [3, n0, _BPMRa, 0, [_E], [() => BatchPutMetricsErrorList]];
export var MetricQuery: StaticStructureSchema = [
  3,
  n0,
  _MQe,
  0,
  [_MN, _RA, _MS, _P, _XAT, _S, _En],
  [0, 0, 0, 0, 0, 1, 1],
];
export var MetricQueryResult: StaticStructureSchema = [3, n0, _MQRe, 0, [_St, _M, _XAV, _MV], [0, 0, 64 | 1, 64 | 1]];
export var RawMetricData: StaticStructureSchema = [3, n0, _RMD, 0, [_MN, _T, _Ste, _V], [0, 4, 1, 1]];
export var __Unit = "unit" as const;
export var SageMakerMetricsServiceException: StaticErrorSchema = [
  -3,
  _s,
  "SageMakerMetricsServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_s).registerError(SageMakerMetricsServiceException, __SageMakerMetricsServiceException);
export var BatchPutMetricsErrorList: StaticListSchema = [1, n0, _BPMEL, 0, () => BatchPutMetricsError];
export var MetricQueryList: StaticListSchema = [1, n0, _MQL, 0, () => MetricQuery];
export var MetricQueryResultList: StaticListSchema = [1, n0, _MQRL, 0, () => MetricQueryResult];
export var MetricValues = 64 | 1;
export var RawMetricDataList: StaticListSchema = [1, n0, _RMDL, 0, () => RawMetricData];
export var XAxisValues = 64 | 1;
export var BatchGetMetrics: StaticOperationSchema = [
  9,
  n0,
  _BGM,
  { [_h]: ["POST", "/BatchGetMetrics", 200] },
  () => BatchGetMetricsRequest,
  () => BatchGetMetricsResponse,
];
export var BatchPutMetrics: StaticOperationSchema = [
  9,
  n0,
  _BPM,
  { [_h]: ["PUT", "/BatchPutMetrics", 200] },
  () => BatchPutMetricsRequest,
  () => BatchPutMetricsResponse,
];
