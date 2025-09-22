// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADA,
  _AGI,
  _AGTS,
  _AGTSF,
  _CP,
  _DADE,
  _DADER,
  _DADERe,
  _EL,
  _ES,
  _FR,
  _GF,
  _GFR,
  _GFRe,
  _h,
  _IA,
  _IMID,
  _IMIL,
  _LAGRM,
  _LAGRMR,
  _LAGRMRi,
  _MN,
  _MR,
  _NT,
  _RTe,
  _RTF,
  _S,
  _Tim,
  _TSF,
  _TSFL,
  _TSI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnomalyGroupTimeSeries = struct(n0, _AGTS, 0, [_AGI, _TSI], [0, 0]);
export var DescribeAnomalyDetectionExecutionsRequest = struct(n0, _DADER, 0, [_ADA, _Tim, _MR, _NT], [0, 0, 1, 0]);
export var DescribeAnomalyDetectionExecutionsResponse = struct(n0, _DADERe, 0, [_EL, _NT], [() => ExecutionList, 0]);
export var ExecutionStatus = struct(n0, _ES, 0, [_Tim, _S, _FR], [0, 0, 0]);
export var GetFeedbackRequest = struct(n0, _GFR, 0, [_ADA, _AGTSF, _MR, _NT], [0, () => AnomalyGroupTimeSeries, 1, 0]);
export var GetFeedbackResponse = struct(n0, _GFRe, 0, [_AGTSF, _NT], [() => TimeSeriesFeedbackList, 0]);
export var InterMetricImpactDetails = struct(n0, _IMID, 0, [_MN, _AGI, _RTe, _CP], [0, 0, 0, 1]);
export var ListAnomalyGroupRelatedMetricsRequest = struct(
  n0,
  _LAGRMR,
  0,
  [_ADA, _AGI, _RTF, _MR, _NT],
  [0, 0, 0, 1, 0]
);
export var ListAnomalyGroupRelatedMetricsResponse = struct(
  n0,
  _LAGRMRi,
  0,
  [_IMIL, _NT],
  [() => InterMetricImpactList, 0]
);
export var TimeSeriesFeedback = struct(n0, _TSF, 0, [_TSI, _IA], [0, 2]);
export var ExecutionList = list(n0, _EL, 0, () => ExecutionStatus);
export var InterMetricImpactList = list(n0, _IMIL, 0, () => InterMetricImpactDetails);
export var TimeSeriesFeedbackList = list(n0, _TSFL, 0, () => TimeSeriesFeedback);
export var DescribeAnomalyDetectionExecutions = op(
  n0,
  _DADE,
  {
    [_h]: ["POST", "/DescribeAnomalyDetectionExecutions", 200],
  },
  () => DescribeAnomalyDetectionExecutionsRequest,
  () => DescribeAnomalyDetectionExecutionsResponse
);
export var GetFeedback = op(
  n0,
  _GF,
  {
    [_h]: ["POST", "/GetFeedback", 200],
  },
  () => GetFeedbackRequest,
  () => GetFeedbackResponse
);
export var ListAnomalyGroupRelatedMetrics = op(
  n0,
  _LAGRM,
  {
    [_h]: ["POST", "/ListAnomalyGroupRelatedMetrics", 200],
  },
  () => ListAnomalyGroupRelatedMetricsRequest,
  () => ListAnomalyGroupRelatedMetricsResponse
);
