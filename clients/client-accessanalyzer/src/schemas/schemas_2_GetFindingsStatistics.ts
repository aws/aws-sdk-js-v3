// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AA,
  _aA,
  _acco,
  _d,
  _EAFS,
  _eAFS,
  _FAAD,
  _fS,
  _FSin,
  _FSLi,
  _GFS,
  _GFSR,
  _GFSRe,
  _h,
  _IAFS,
  _iAFS,
  _IARTD,
  _IARTSM,
  _lUA,
  _nOAF,
  _RTD,
  _rTS,
  _RTSM,
  _tA,
  _tACA,
  _tAF,
  _tAFo,
  _tAP,
  _to,
  _tRF,
  _UAFS,
  _uAFS,
  _uAT,
  _UATS,
  _uATS,
  _UATSL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ExternalAccessFindingsStatistics = struct(
  n0,
  _EAFS,
  0,
  [_rTS, _tAF, _tAFo, _tRF],
  [() => ResourceTypeStatisticsMap, 1, 1, 1]
);
export var FindingAggregationAccountDetails = struct(n0, _FAAD, 0, [_acco, _nOAF, _d], [0, 1, 128 | 1]);
export var GetFindingsStatisticsRequest = struct(n0, _GFSR, 0, [_aA], [0]);
export var GetFindingsStatisticsResponse = struct(n0, _GFSRe, 0, [_fS, _lUA], [() => FindingsStatisticsList, 5]);
export var InternalAccessFindingsStatistics = struct(
  n0,
  _IAFS,
  0,
  [_rTS, _tAF, _tAFo, _tRF],
  [() => InternalAccessResourceTypeStatisticsMap, 1, 1, 1]
);
export var InternalAccessResourceTypeDetails = struct(n0, _IARTD, 0, [_tAF, _tRF, _tAFo], [1, 1, 1]);
export var ResourceTypeDetails = struct(n0, _RTD, 0, [_tAP, _tACA], [1, 1]);
export var UnusedAccessFindingsStatistics = struct(
  n0,
  _UAFS,
  0,
  [_uATS, _tA, _tAF, _tAFo, _tRF],
  [() => UnusedAccessTypeStatisticsList, () => AccountAggregations, 1, 1, 1]
);
export var UnusedAccessTypeStatistics = struct(n0, _UATS, 0, [_uAT, _to], [0, 1]);
export var AccountAggregations = list(n0, _AA, 0, () => FindingAggregationAccountDetails);
export var FindingsStatisticsList = list(n0, _FSLi, 0, () => FindingsStatistics);
export var UnusedAccessTypeStatisticsList = list(n0, _UATSL, 0, () => UnusedAccessTypeStatistics);
export var FindingAggregationAccountDetailsMap = 128 | 1;

export var InternalAccessResourceTypeStatisticsMap = map(n0, _IARTSM, 0, 0, () => InternalAccessResourceTypeDetails);
export var ResourceTypeStatisticsMap = map(n0, _RTSM, 0, 0, () => ResourceTypeDetails);
export var FindingsStatistics = uni(
  n0,
  _FSin,
  0,
  [_eAFS, _iAFS, _uAFS],
  [() => ExternalAccessFindingsStatistics, () => InternalAccessFindingsStatistics, () => UnusedAccessFindingsStatistics]
);
export var GetFindingsStatistics = op(
  n0,
  _GFS,
  {
    [_h]: ["POST", "/analyzer/findings/statistics", 200],
  },
  () => GetFindingsStatisticsRequest,
  () => GetFindingsStatisticsResponse
);
