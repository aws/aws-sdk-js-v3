// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CCM,
  _CCMR,
  _CCMRr,
  _cD,
  _cRT,
  _DCM,
  _DCMe,
  _DCMR,
  _DCMRe,
  _DCMRes,
  _DCMResc,
  _dN,
  _dNim,
  _h,
  _hQ,
  _LCM,
  _LCMR,
  _LCMRi,
  _lMD,
  _LSP,
  _LSPR,
  _LSPRi,
  _mA,
  _mNe,
  _mNet,
  _mR,
  _mTe,
  _nT,
  _sPI,
  _SPIe,
  _tag,
  _UCM,
  _UCMR,
  _UCMRp,
  n0,
  TagList,
} from "./schemas_0";
import { SecurityProfileIdentifier } from "./schemas_16_Security";

/* eslint no-var: 0 */

export var CreateCustomMetricRequest = struct(
  n0,
  _CCMR,
  0,
  [_mNe, _dN, _mTe, _tag, _cRT],
  [[0, 1], 0, 0, () => TagList, [0, 4]]
);
export var CreateCustomMetricResponse = struct(n0, _CCMRr, 0, [_mNe, _mA], [0, 0]);
export var DeleteCustomMetricRequest = struct(n0, _DCMR, 0, [_mNe], [[0, 1]]);
export var DeleteCustomMetricResponse = struct(n0, _DCMRe, 0, [], []);
export var DescribeCustomMetricRequest = struct(n0, _DCMRes, 0, [_mNe], [[0, 1]]);
export var DescribeCustomMetricResponse = struct(
  n0,
  _DCMResc,
  0,
  [_mNe, _mA, _mTe, _dN, _cD, _lMD],
  [0, 0, 0, 0, 4, 4]
);
export var ListCustomMetricsRequest = struct(
  n0,
  _LCMR,
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
export var ListCustomMetricsResponse = struct(n0, _LCMRi, 0, [_mNet, _nT], [64 | 0, 0]);
export var ListSecurityProfilesRequest = struct(
  n0,
  _LSPR,
  0,
  [_nT, _mR, _dNim, _mNe],
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
    [
      0,
      {
        [_hQ]: _dNim,
      },
    ],
    [
      0,
      {
        [_hQ]: _mNe,
      },
    ],
  ]
);
export var ListSecurityProfilesResponse = struct(n0, _LSPRi, 0, [_sPI, _nT], [() => SecurityProfileIdentifiers, 0]);
export var UpdateCustomMetricRequest = struct(n0, _UCMR, 0, [_mNe, _dN], [[0, 1], 0]);
export var UpdateCustomMetricResponse = struct(n0, _UCMRp, 0, [_mNe, _mA, _mTe, _dN, _cD, _lMD], [0, 0, 0, 0, 4, 4]);
export var MetricNames = 64 | 0;

export var SecurityProfileIdentifiers = list(n0, _SPIe, 0, () => SecurityProfileIdentifier);
export var CreateCustomMetric = op(
  n0,
  _CCM,
  {
    [_h]: ["POST", "/custom-metric/{metricName}", 200],
  },
  () => CreateCustomMetricRequest,
  () => CreateCustomMetricResponse
);
export var DeleteCustomMetric = op(
  n0,
  _DCM,
  {
    [_h]: ["DELETE", "/custom-metric/{metricName}", 200],
  },
  () => DeleteCustomMetricRequest,
  () => DeleteCustomMetricResponse
);
export var DescribeCustomMetric = op(
  n0,
  _DCMe,
  {
    [_h]: ["GET", "/custom-metric/{metricName}", 200],
  },
  () => DescribeCustomMetricRequest,
  () => DescribeCustomMetricResponse
);
export var ListCustomMetrics = op(
  n0,
  _LCM,
  {
    [_h]: ["GET", "/custom-metrics", 200],
  },
  () => ListCustomMetricsRequest,
  () => ListCustomMetricsResponse
);
export var ListSecurityProfiles = op(
  n0,
  _LSP,
  {
    [_h]: ["GET", "/security-profiles", 200],
  },
  () => ListSecurityProfilesRequest,
  () => ListSecurityProfilesResponse
);
export var UpdateCustomMetric = op(
  n0,
  _UCM,
  {
    [_h]: ["PATCH", "/custom-metric/{metricName}", 200],
  },
  () => UpdateCustomMetricRequest,
  () => UpdateCustomMetricResponse
);
