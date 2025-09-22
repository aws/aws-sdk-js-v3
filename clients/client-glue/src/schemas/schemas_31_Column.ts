// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AL,
  _ATn,
  _BCSD,
  _BCSDo,
  _CEo,
  _CEol,
  _CF,
  _CFL,
  _CH,
  _CHL,
  _CI,
  _CIr,
  _CN,
  _CNol,
  _CNolu,
  _Crawl,
  _CSD,
  _CSE,
  _CSEo,
  _CSL,
  _CSo,
  _CTol,
  _DCSD,
  _DCSDe,
  _DCSDo,
  _DN,
  _DNe,
  _DPUH,
  _E,
  _EM,
  _Er,
  _ET,
  _Fil,
  _FN,
  _FO,
  _FV,
  _GCSFP,
  _GCSFPR,
  _GCSFPRe,
  _GCSFT,
  _GCSFTR,
  _GCSFTRe,
  _LCis,
  _LCRis,
  _LCRist,
  _LCSD,
  _LG,
  _LS,
  _ML,
  _MP,
  _MRax,
  _MVax,
  _MVi,
  _NODV,
  _NOF,
  _NON,
  _NOT,
  _NTe,
  _PV,
  _Sca,
  _SCSD,
  _SDt,
  _Sta,
  _STta,
  _Sum,
  _TN,
  _Ty,
  _UCSFP,
  _UCSFPR,
  _UCSFPRp,
  _UCSFT,
  _UCSFTR,
  _UCSFTRp,
  _UCSL,
  _UV,
  ErrorDetail,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BinaryColumnStatisticsData = struct(n0, _BCSD, 0, [_ML, _AL, _NON], [1, 1, 1]);
export var BooleanColumnStatisticsData = struct(n0, _BCSDo, 0, [_NOT, _NOF, _NON], [1, 1, 1]);
export var ColumnError = struct(n0, _CEo, 0, [_CNol, _Er], [0, () => ErrorDetail]);
export var ColumnStatistics = struct(n0, _CSo, 0, [_CNol, _CTol, _ATn, _SDt], [0, 0, 4, () => ColumnStatisticsData]);
export var ColumnStatisticsData = struct(
  n0,
  _CSD,
  0,
  [_Ty, _BCSDo, _DCSD, _DCSDe, _DCSDo, _LCSD, _SCSD, _BCSD],
  [
    0,
    () => BooleanColumnStatisticsData,
    () => DateColumnStatisticsData,
    () => DecimalColumnStatisticsData,
    () => DoubleColumnStatisticsData,
    () => LongColumnStatisticsData,
    () => StringColumnStatisticsData,
    () => BinaryColumnStatisticsData,
  ]
);
export var ColumnStatisticsError = struct(n0, _CSE, 0, [_CSo, _Er], [() => ColumnStatistics, () => ErrorDetail]);
export var CrawlerHistory = struct(
  n0,
  _CH,
  0,
  [_CIr, _Sta, _STta, _ET, _Sum, _EM, _LG, _LS, _MP, _DPUH],
  [0, 0, 4, 4, 0, 0, 0, 0, 0, 1]
);
export var CrawlsFilter = struct(n0, _CF, 0, [_FN, _FO, _FV], [0, 0, 0]);
export var DateColumnStatisticsData = struct(n0, _DCSD, 0, [_MVi, _MVax, _NON, _NODV], [4, 4, 1, 1]);
export var DecimalColumnStatisticsData = struct(
  n0,
  _DCSDe,
  0,
  [_MVi, _MVax, _NON, _NODV],
  [() => DecimalNumber, () => DecimalNumber, 1, 1]
);
export var DecimalNumber = struct(n0, _DNe, 0, [_UV, _Sca], [21, 1]);
export var DoubleColumnStatisticsData = struct(n0, _DCSDo, 0, [_MVi, _MVax, _NON, _NODV], [1, 1, 1, 1]);
export var GetColumnStatisticsForPartitionRequest = struct(
  n0,
  _GCSFPR,
  0,
  [_CI, _DN, _TN, _PV, _CNolu],
  [0, 0, 0, 64 | 0, 64 | 0]
);
export var GetColumnStatisticsForPartitionResponse = struct(
  n0,
  _GCSFPRe,
  0,
  [_CSL, _E],
  [() => ColumnStatisticsList, () => ColumnErrors]
);
export var GetColumnStatisticsForTableRequest = struct(n0, _GCSFTR, 0, [_CI, _DN, _TN, _CNolu], [0, 0, 0, 64 | 0]);
export var GetColumnStatisticsForTableResponse = struct(
  n0,
  _GCSFTRe,
  0,
  [_CSL, _E],
  [() => ColumnStatisticsList, () => ColumnErrors]
);
export var ListCrawlsRequest = struct(n0, _LCRis, 0, [_CN, _MRax, _Fil, _NTe], [0, 1, () => CrawlsFilterList, 0]);
export var ListCrawlsResponse = struct(n0, _LCRist, 0, [_Crawl, _NTe], [() => CrawlerHistoryList, 0]);
export var LongColumnStatisticsData = struct(n0, _LCSD, 0, [_MVi, _MVax, _NON, _NODV], [1, 1, 1, 1]);
export var StringColumnStatisticsData = struct(n0, _SCSD, 0, [_ML, _AL, _NON, _NODV], [1, 1, 1, 1]);
export var UpdateColumnStatisticsForPartitionRequest = struct(
  n0,
  _UCSFPR,
  0,
  [_CI, _DN, _TN, _PV, _CSL],
  [0, 0, 0, 64 | 0, () => UpdateColumnStatisticsList]
);
export var UpdateColumnStatisticsForPartitionResponse = struct(n0, _UCSFPRp, 0, [_E], [() => ColumnStatisticsErrors]);
export var UpdateColumnStatisticsForTableRequest = struct(
  n0,
  _UCSFTR,
  0,
  [_CI, _DN, _TN, _CSL],
  [0, 0, 0, () => UpdateColumnStatisticsList]
);
export var UpdateColumnStatisticsForTableResponse = struct(n0, _UCSFTRp, 0, [_E], [() => ColumnStatisticsErrors]);
export var ColumnErrors = list(n0, _CEol, 0, () => ColumnError);
export var ColumnStatisticsErrors = list(n0, _CSEo, 0, () => ColumnStatisticsError);
export var ColumnStatisticsList = list(n0, _CSL, 0, () => ColumnStatistics);
export var CrawlerHistoryList = list(n0, _CHL, 0, () => CrawlerHistory);
export var CrawlsFilterList = list(n0, _CFL, 0, () => CrawlsFilter);
export var GetColumnNamesList = 64 | 0;

export var UpdateColumnStatisticsList = list(n0, _UCSL, 0, () => ColumnStatistics);
export var GetColumnStatisticsForPartition = op(
  n0,
  _GCSFP,
  0,
  () => GetColumnStatisticsForPartitionRequest,
  () => GetColumnStatisticsForPartitionResponse
);
export var GetColumnStatisticsForTable = op(
  n0,
  _GCSFT,
  0,
  () => GetColumnStatisticsForTableRequest,
  () => GetColumnStatisticsForTableResponse
);
export var ListCrawls = op(
  n0,
  _LCis,
  0,
  () => ListCrawlsRequest,
  () => ListCrawlsResponse
);
export var UpdateColumnStatisticsForPartition = op(
  n0,
  _UCSFP,
  0,
  () => UpdateColumnStatisticsForPartitionRequest,
  () => UpdateColumnStatisticsForPartitionResponse
);
export var UpdateColumnStatisticsForTable = op(
  n0,
  _UCSFT,
  0,
  () => UpdateColumnStatisticsForTableRequest,
  () => UpdateColumnStatisticsForTableResponse
);
