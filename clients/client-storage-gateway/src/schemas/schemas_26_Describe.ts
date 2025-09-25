// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CRARN,
  _CRI,
  _CRL,
  _CRS,
  _DAMT,
  _DAMTI,
  _DAMTO,
  _DCRe,
  _DCRIe,
  _DCROe,
  _EF,
  _ET,
  _FSARN,
  _GARN,
  _IF,
  _LARN,
  _LCR,
  _LCRI,
  _LCRO,
  _M,
  _R,
  _RCP,
  _RN,
  _ST,
  _St,
  _T,
  n0,
  Tags,
} from "./schemas_0";
import { CacheReportFilterList } from "./schemas_28_File";

/* eslint no-var: 0 */

export var CacheReportInfo = struct(
  n0,
  _CRI,
  0,
  [_CRARN, _CRS, _RCP, _ET, _R, _FSARN, _LARN, _ST, _IF, _EF, _RN, _T],
  [0, 0, 1, 4, 0, 0, 0, 4, () => CacheReportFilterList, () => CacheReportFilterList, 0, () => Tags]
);
export var DescribeAvailabilityMonitorTestInput = struct(n0, _DAMTI, 0, [_GARN], [0]);
export var DescribeAvailabilityMonitorTestOutput = struct(n0, _DAMTO, 0, [_GARN, _St, _ST], [0, 0, 4]);
export var DescribeCacheReportInput = struct(n0, _DCRIe, 0, [_CRARN], [0]);
export var DescribeCacheReportOutput = struct(n0, _DCROe, 0, [_CRI], [() => CacheReportInfo]);
export var ListCacheReportsInput = struct(n0, _LCRI, 0, [_M], [0]);
export var ListCacheReportsOutput = struct(n0, _LCRO, 0, [_CRL, _M], [() => CacheReportList, 0]);
export var CacheReportList = list(n0, _CRL, 0, () => CacheReportInfo);
export var DescribeAvailabilityMonitorTest = op(
  n0,
  _DAMT,
  0,
  () => DescribeAvailabilityMonitorTestInput,
  () => DescribeAvailabilityMonitorTestOutput
);
export var DescribeCacheReport = op(
  n0,
  _DCRe,
  0,
  () => DescribeCacheReportInput,
  () => DescribeCacheReportOutput
);
export var ListCacheReports = op(
  n0,
  _LCR,
  0,
  () => ListCacheReportsInput,
  () => ListCacheReportsOutput
);
