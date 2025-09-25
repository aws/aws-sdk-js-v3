// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BR,
  _CRARN,
  _CRF,
  _CRFL,
  _CT,
  _EF,
  _FSARN,
  _IF,
  _LARN,
  _N,
  _R,
  _SCR,
  _SCRI,
  _SCRO,
  _T,
  _V,
  _VPCEDNSN,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CacheReportFilter = struct(n0, _CRF, 0, [_N, _V], [0, 64 | 0]);
export var StartCacheReportInput = struct(
  n0,
  _SCRI,
  0,
  [_FSARN, _R, _LARN, _BR, _VPCEDNSN, _IF, _EF, _CT, _T],
  [0, 0, 0, 0, 0, () => CacheReportFilterList, () => CacheReportFilterList, 0, () => Tags]
);
export var StartCacheReportOutput = struct(n0, _SCRO, 0, [_CRARN], [0]);
export var CacheReportFilterList = list(n0, _CRFL, 0, () => CacheReportFilter);
export var CacheReportFilterValues = 64 | 0;

export var StartCacheReport = op(
  n0,
  _SCR,
  0,
  () => StartCacheReportInput,
  () => StartCacheReportOutput
);
