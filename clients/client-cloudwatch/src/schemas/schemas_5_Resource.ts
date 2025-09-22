// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _ASd,
  _CD,
  _EF,
  _FA,
  _GMSe,
  _GMSIe,
  _GMSOe,
  _IF,
  _ILAM,
  _IM,
  _LUD,
  _MN,
  _MNe,
  _MSF,
  _MSFe,
  _MSSC,
  _MSSCe,
  _MSSIM,
  _MSSM,
  _N,
  _Na,
  _OF,
  _RA,
  _SCt,
  _Stat,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetMetricStreamInput = struct(n0, _GMSIe, 0, [_Na], [0]);
export var GetMetricStreamOutput = struct(
  n0,
  _GMSOe,
  0,
  [_Ar, _Na, _IF, _EF, _FA, _RA, _Stat, _CD, _LUD, _OF, _SCt, _ILAM],
  [
    0,
    0,
    () => MetricStreamFilters,
    () => MetricStreamFilters,
    0,
    0,
    0,
    4,
    4,
    0,
    () => MetricStreamStatisticsConfigurations,
    2,
  ]
);
export var MetricStreamFilter = struct(n0, _MSF, 0, [_N, _MNe], [0, 64 | 0]);
export var MetricStreamStatisticsConfiguration = struct(
  n0,
  _MSSC,
  0,
  [_IM, _ASd],
  [() => MetricStreamStatisticsIncludeMetrics, 64 | 0]
);
export var MetricStreamStatisticsMetric = struct(n0, _MSSM, 0, [_N, _MN], [0, 0]);
export var MetricStreamFilterMetricNames = 64 | 0;

export var MetricStreamFilters = list(n0, _MSFe, 0, () => MetricStreamFilter);
export var MetricStreamStatisticsAdditionalStatistics = 64 | 0;

export var MetricStreamStatisticsConfigurations = list(n0, _MSSCe, 0, () => MetricStreamStatisticsConfiguration);
export var MetricStreamStatisticsIncludeMetrics = list(n0, _MSSIM, 0, () => MetricStreamStatisticsMetric);
export var GetMetricStream = op(
  n0,
  _GMSe,
  0,
  () => GetMetricStreamInput,
  () => GetMetricStreamOutput
);
