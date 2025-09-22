// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADA,
  _ADC,
  _ADCS,
  _ADD,
  _ADDQM,
  _ADDQML,
  _ADF,
  _ADN,
  _CT,
  _DADes,
  _DADRes,
  _DADResc,
  _DQM,
  _DQML,
  _FR,
  _FT,
  _GDQM,
  _GDQMR,
  _GDQMRe,
  _h,
  _KKA,
  _LMT,
  _MD,
  _MSA,
  _MSDQM,
  _MSDQML,
  _MT,
  _MV,
  _RCN,
  _S,
  _ST,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnomalyDetectorConfigSummary = struct(n0, _ADCS, 0, [_ADF], [0]);
export var AnomalyDetectorDataQualityMetric = struct(
  n0,
  _ADDQM,
  0,
  [_ST, _MSDQML],
  [4, () => MetricSetDataQualityMetricList]
);
export var DataQualityMetric = struct(n0, _DQM, 0, [_MT, _MD, _RCN, _MV], [0, 0, 0, 1]);
export var DescribeAnomalyDetectorRequest = struct(n0, _DADRes, 0, [_ADA], [0]);
export var DescribeAnomalyDetectorResponse = struct(
  n0,
  _DADResc,
  0,
  [_ADA, _ADN, _ADD, _ADC, _CT, _LMT, _S, _FR, _KKA, _FT],
  [0, 0, 0, () => AnomalyDetectorConfigSummary, 4, 4, 0, 0, 0, 0]
);
export var GetDataQualityMetricsRequest = struct(n0, _GDQMR, 0, [_ADA, _MSA], [0, 0]);
export var GetDataQualityMetricsResponse = struct(
  n0,
  _GDQMRe,
  0,
  [_ADDQML],
  [() => AnomalyDetectorDataQualityMetricList]
);
export var MetricSetDataQualityMetric = struct(n0, _MSDQM, 0, [_MSA, _DQML], [0, () => DataQualityMetricList]);
export var AnomalyDetectorDataQualityMetricList = list(n0, _ADDQML, 0, () => AnomalyDetectorDataQualityMetric);
export var DataQualityMetricList = list(n0, _DQML, 0, () => DataQualityMetric);
export var MetricSetDataQualityMetricList = list(n0, _MSDQML, 0, () => MetricSetDataQualityMetric);
export var DescribeAnomalyDetector = op(
  n0,
  _DADes,
  {
    [_h]: ["POST", "/DescribeAnomalyDetector", 200],
  },
  () => DescribeAnomalyDetectorRequest,
  () => DescribeAnomalyDetectorResponse
);
export var GetDataQualityMetrics = op(
  n0,
  _GDQM,
  {
    [_h]: ["POST", "/GetDataQualityMetrics", 200],
  },
  () => GetDataQualityMetricsRequest,
  () => GetDataQualityMetricsResponse
);
