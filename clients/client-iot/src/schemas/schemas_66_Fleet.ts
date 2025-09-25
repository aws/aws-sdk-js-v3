// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DFM,
  _DFMR,
  _eV,
  _fM,
  _FMNAA,
  _FMNAAL,
  _h,
  _hQ,
  _LFM,
  _LFMR,
  _LFMRi,
  _mA,
  _mNe,
  _mR,
  _nT,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFleetMetricRequest = struct(
  n0,
  _DFMR,
  0,
  [_mNe, _eV],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _eV,
      },
    ],
  ]
);
export var FleetMetricNameAndArn = struct(n0, _FMNAA, 0, [_mNe, _mA], [0, 0]);
export var ListFleetMetricsRequest = struct(
  n0,
  _LFMR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListFleetMetricsResponse = struct(n0, _LFMRi, 0, [_fM, _nT], [() => FleetMetricNameAndArnList, 0]);
export var FleetMetricNameAndArnList = list(n0, _FMNAAL, 0, () => FleetMetricNameAndArn);
export var DeleteFleetMetric = op(
  n0,
  _DFM,
  {
    [_h]: ["DELETE", "/fleet-metric/{metricName}", 200],
  },
  () => DeleteFleetMetricRequest,
  () => Unit
);
export var ListFleetMetrics = op(
  n0,
  _LFM,
  {
    [_h]: ["GET", "/fleet-metrics", 200],
  },
  () => ListFleetMetricsRequest,
  () => ListFleetMetricsResponse
);
