// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _ADA,
  _ADC,
  _ADD,
  _ADN,
  _ADS,
  _ADSL,
  _AN,
  _AS,
  _ASL,
  _ASl,
  _AST,
  _AT,
  _CAD,
  _CADR,
  _CADRr,
  _CT,
  _h,
  _hL,
  _hQ,
  _jN,
  _KKA,
  _LAD,
  _LADR,
  _LADRi,
  _LAi,
  _LAR,
  _LARi,
  _LMS,
  _LMSR,
  _LMSRi,
  _LMT,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _MR,
  _MSA,
  _MSD,
  _MSN,
  _MSS,
  _MSSL,
  _NT,
  _rA,
  _RAe,
  _S,
  _T,
  _t,
  _TK,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { AnomalyDetectorConfig } from "./schemas_7_Detector";

/* eslint no-var: 0 */

export var AlertSummary = struct(
  n0,
  _ASl,
  0,
  [_AA, _ADA, _AN, _AST, _AT, _AS, _LMT, _CT, _T],
  [0, 0, 0, 1, 0, 0, 4, 4, 128 | 0]
);
export var AnomalyDetectorSummary = struct(
  n0,
  _ADS,
  0,
  [_ADA, _ADN, _ADD, _CT, _LMT, _S, _T],
  [0, 0, 0, 4, 4, 0, 128 | 0]
);
export var CreateAnomalyDetectorRequest = struct(
  n0,
  _CADR,
  0,
  [_ADN, _ADD, _ADC, _KKA, _T],
  [0, 0, () => AnomalyDetectorConfig, 0, 128 | 0]
);
export var CreateAnomalyDetectorResponse = struct(n0, _CADRr, 0, [_ADA], [0]);
export var ListAlertsRequest = struct(n0, _LAR, 0, [_ADA, _NT, _MR], [0, 0, 1]);
export var ListAlertsResponse = struct(n0, _LARi, 0, [_ASL, _NT], [() => AlertSummaryList, 0]);
export var ListAnomalyDetectorsRequest = struct(n0, _LADR, 0, [_MR, _NT], [1, 0]);
export var ListAnomalyDetectorsResponse = struct(n0, _LADRi, 0, [_ADSL, _NT], [() => AnomalyDetectorSummaryList, 0]);
export var ListMetricSetsRequest = struct(n0, _LMSR, 0, [_ADA, _MR, _NT], [0, 1, 0]);
export var ListMetricSetsResponse = struct(n0, _LMSRi, 0, [_MSSL, _NT], [() => MetricSetSummaryList, 0]);
export var ListTagsForResourceRequest = struct(
  n0,
  _LTFRR,
  0,
  [_RAe],
  [
    [
      0,
      {
        [_jN]: _rA,
        [_hL]: 1,
      },
    ],
  ]
);
export var ListTagsForResourceResponse = struct(
  n0,
  _LTFRRi,
  0,
  [_T],
  [
    [
      128 | 0,
      {
        [_jN]: _T,
      },
    ],
  ]
);
export var MetricSetSummary = struct(n0, _MSS, 0, [_MSA, _ADA, _MSD, _MSN, _CT, _LMT, _T], [0, 0, 0, 0, 4, 4, 128 | 0]);
export var TagResourceRequest = struct(
  n0,
  _TRR,
  0,
  [_RAe, _T],
  [
    [
      0,
      {
        [_jN]: _rA,
        [_hL]: 1,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_RAe, _TK],
  [
    [
      0,
      {
        [_jN]: _rA,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _tK,
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var AlertSummaryList = list(n0, _ASL, 0, () => AlertSummary);
export var AnomalyDetectorSummaryList = list(n0, _ADSL, 0, () => AnomalyDetectorSummary);
export var MetricSetSummaryList = list(n0, _MSSL, 0, () => MetricSetSummary);
export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var CreateAnomalyDetector = op(
  n0,
  _CAD,
  {
    [_h]: ["POST", "/CreateAnomalyDetector", 200],
  },
  () => CreateAnomalyDetectorRequest,
  () => CreateAnomalyDetectorResponse
);
export var ListAlerts = op(
  n0,
  _LAi,
  {
    [_h]: ["POST", "/ListAlerts", 200],
  },
  () => ListAlertsRequest,
  () => ListAlertsResponse
);
export var ListAnomalyDetectors = op(
  n0,
  _LAD,
  {
    [_h]: ["POST", "/ListAnomalyDetectors", 200],
  },
  () => ListAnomalyDetectorsRequest,
  () => ListAnomalyDetectorsResponse
);
export var ListMetricSets = op(
  n0,
  _LMS,
  {
    [_h]: ["POST", "/ListMetricSets", 200],
  },
  () => ListMetricSetsRequest,
  () => ListMetricSetsResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{ResourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{ResourceArn}", 204],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{ResourceArn}", 204],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
