// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AMN,
  _BGRMD,
  _BGRMDR,
  _BGRMDRa,
  _d,
  _DA,
  _dA,
  _De,
  _Des,
  _DK,
  _EPv,
  _h,
  _hQ,
  _IRA,
  _LRMD,
  _LRMDR,
  _LRMDRi,
  _MD,
  _MDe,
  _MDI,
  _MDS,
  _MDSL,
  _MR,
  _mR,
  _N,
  _Na,
  _NT,
  _nT,
  _UL,
  _VK,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetRumMetricDefinitionsRequest = struct(
  n0,
  _BGRMDR,
  0,
  [_AMN, _De, _DA, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _dA,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var BatchGetRumMetricDefinitionsResponse = struct(n0, _BGRMDRa, 0, [_MDe, _NT], [() => MetricDefinitions, 0]);
export var ListRumMetricsDestinationsRequest = struct(
  n0,
  _LRMDR,
  0,
  [_AMN, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListRumMetricsDestinationsResponse = struct(
  n0,
  _LRMDRi,
  0,
  [_Des, _NT],
  [() => MetricDestinationSummaryList, 0]
);
export var MetricDefinition = struct(n0, _MD, 0, [_MDI, _N, _VK, _UL, _DK, _EPv, _Na], [0, 0, 0, 0, 128 | 0, 0, 0]);
export var MetricDestinationSummary = struct(n0, _MDS, 0, [_De, _DA, _IRA], [0, 0, 0]);
export var MetricDefinitions = list(n0, _MDe, 0, () => MetricDefinition);
export var MetricDestinationSummaryList = list(n0, _MDSL, 0, () => MetricDestinationSummary);
export var DimensionKeysMap = 128 | 0;

export var BatchGetRumMetricDefinitions = op(
  n0,
  _BGRMD,
  {
    [_h]: ["GET", "/rummetrics/{AppMonitorName}/metrics", 200],
  },
  () => BatchGetRumMetricDefinitionsRequest,
  () => BatchGetRumMetricDefinitionsResponse
);
export var ListRumMetricsDestinations = op(
  n0,
  _LRMD,
  {
    [_h]: ["GET", "/rummetrics/{AppMonitorName}/metricsdestination", 200],
  },
  () => ListRumMetricsDestinationsRequest,
  () => ListRumMetricsDestinationsResponse
);
