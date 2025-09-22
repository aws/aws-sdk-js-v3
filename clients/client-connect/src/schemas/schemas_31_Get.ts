// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Col,
  _Com,
  _Dim,
  _ETnd,
  _Fil,
  _FK,
  _FVi,
  _FVil,
  _FVL,
  _G,
  _GMDV,
  _GMDVR,
  _GMDVRe,
  _h,
  _IDn,
  _Int,
  _IP,
  _MDCV,
  _MDV,
  _Met,
  _Metr,
  _MFe,
  _MFK,
  _MFV,
  _MFVe,
  _MFVL,
  _MIe,
  _MR,
  _MRa,
  _MRV,
  _MRVe,
  _MVe,
  _MVet,
  _N,
  _Ne,
  _NT,
  _RAe,
  _STtar,
  _TCh,
  _Th,
  _TVh,
  _TVhr,
  _TZ,
  _V,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FilterV2 = struct(n0, _FVi, 0, [_FK, _FVil], [0, 64 | 0]);
export var GetMetricDataV2Request = struct(
  n0,
  _GMDVR,
  0,
  [_RAe, _STtar, _ETnd, _Int, _Fil, _G, _Metr, _NT, _MRa],
  [0, 4, 4, () => IntervalDetails, () => FiltersV2List, 64 | 0, () => MetricsV2, 0, 1]
);
export var GetMetricDataV2Response = struct(n0, _GMDVRe, 0, [_NT, _MR], [0, () => MetricResultsV2]);
export var IntervalDetails = struct(n0, _IDn, 0, [_TZ, _IP], [0, 0]);
export var MetricDataV2 = struct(n0, _MDV, 0, [_Met, _V], [() => MetricV2, 1]);
export var MetricFilterV2 = struct(n0, _MFV, 0, [_MFK, _MFVe, _Ne], [0, 64 | 0, 2]);
export var MetricInterval = struct(n0, _MIe, 0, [_Int, _STtar, _ETnd], [0, 4, 4]);
export var MetricResultV2 = struct(
  n0,
  _MRV,
  0,
  [_Dim, _MIe, _Col],
  [128 | 0, () => MetricInterval, () => MetricDataCollectionsV2]
);
export var MetricV2 = struct(n0, _MVe, 0, [_N, _Th, _MFe], [0, () => ThresholdCollections, () => MetricFiltersV2List]);
export var ThresholdV2 = struct(n0, _TVhr, 0, [_Com, _TVh], [0, 1]);
export var FiltersV2List = list(n0, _FVL, 0, () => FilterV2);
export var FilterValueList = 64 | 0;

export var GroupingsV2 = 64 | 0;

export var MetricDataCollectionsV2 = list(n0, _MDCV, 0, () => MetricDataV2);
export var MetricFiltersV2List = list(n0, _MFVL, 0, () => MetricFilterV2);
export var MetricFilterValueList = 64 | 0;

export var MetricResultsV2 = list(n0, _MRVe, 0, () => MetricResultV2);
export var MetricsV2 = list(n0, _MVet, 0, () => MetricV2);
export var ThresholdCollections = list(n0, _TCh, 0, () => ThresholdV2);
export var DimensionsV2Map = 128 | 0;

export var GetMetricDataV2 = op(
  n0,
  _GMDV,
  {
    [_h]: ["POST", "/metrics/data", 200],
  },
  () => GetMetricDataV2Request,
  () => GetMetricDataV2Response
);
