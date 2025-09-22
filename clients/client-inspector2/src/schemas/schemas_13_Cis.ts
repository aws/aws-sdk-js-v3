// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aIF,
  _AIFL,
  _cIF,
  _co,
  _CRSF,
  _CRSFL,
  _CSRABTRFC,
  _CTRA,
  _CTRAL,
  _CTSF,
  _CTSRF,
  _fCF,
  _fCi,
  _ht,
  _k,
  _LCSRABTR,
  _LCSRABTRR,
  _LCSRABTRRi,
  _mR,
  _nT,
  _p,
  _pF,
  _RIFL,
  _RTFL,
  _sAc,
  _sB,
  _sCt,
  _sF,
  _sO,
  _TF,
  _tRA,
  _tRI,
  _tRIF,
  _TRT,
  _tRT,
  _tRTF,
  _tS,
  _tSF,
  _TSFL,
  _tSR,
  _tSRF,
  _TSRFL,
  _va,
  n0,
} from "./schemas_0";
import { CheckIdFilterList, CisNumberFilterList, PlatformFilterList, StatusCounts } from "./schemas_18_Cis";
import { CisStringFilter } from "./schemas_35_Cis";

/* eslint no-var: 0 */

export var CisResultStatusFilter = struct(n0, _CRSF, 0, [_co, _va], [0, 0]);
export var CisScanResultsAggregatedByTargetResourceFilterCriteria = struct(
  n0,
  _CSRABTRFC,
  0,
  [_aIF, _sF, _cIF, _tRIF, _tRTF, _pF, _tSF, _tSRF, _fCF],
  [
    () => AccountIdFilterList,
    () => CisResultStatusFilterList,
    () => CheckIdFilterList,
    () => ResourceIdFilterList,
    () => ResourceTagFilterList,
    () => PlatformFilterList,
    () => TargetStatusFilterList,
    () => TargetStatusReasonFilterList,
    () => CisNumberFilterList,
  ]
);
export var CisTargetResourceAggregation = struct(
  n0,
  _CTRA,
  0,
  [_sAc, _tRI, _aI, _tRT, _sCt, _p, _tS, _tSR],
  [0, 0, 0, map(n0, _TRT, 0, 0, 64 | 0), () => StatusCounts, 0, 0, 0]
);
export var CisTargetStatusFilter = struct(n0, _CTSF, 0, [_co, _va], [0, 0]);
export var CisTargetStatusReasonFilter = struct(n0, _CTSRF, 0, [_co, _va], [0, 0]);
export var ListCisScanResultsAggregatedByTargetResourceRequest = struct(
  n0,
  _LCSRABTRR,
  0,
  [_sAc, _fCi, _sB, _sO, _nT, _mR],
  [0, () => CisScanResultsAggregatedByTargetResourceFilterCriteria, 0, 0, 0, 1]
);
export var ListCisScanResultsAggregatedByTargetResourceResponse = struct(
  n0,
  _LCSRABTRRi,
  0,
  [_tRA, _nT],
  [() => CisTargetResourceAggregationList, 0]
);
export var TagFilter = struct(n0, _TF, 0, [_co, _k, _va], [0, 0, 0]);
export var AccountIdFilterList = list(n0, _AIFL, 0, () => CisStringFilter);
export var CisResultStatusFilterList = list(n0, _CRSFL, 0, () => CisResultStatusFilter);
export var CisTargetResourceAggregationList = list(n0, _CTRAL, 0, () => CisTargetResourceAggregation);
export var ResourceIdFilterList = list(n0, _RIFL, 0, () => CisStringFilter);
export var ResourceTagFilterList = list(n0, _RTFL, 0, () => TagFilter);
export var TagValueList = 64 | 0;

export var TargetStatusFilterList = list(n0, _TSFL, 0, () => CisTargetStatusFilter);
export var TargetStatusReasonFilterList = list(n0, _TSRFL, 0, () => CisTargetStatusReasonFilter);
export var TargetResourceTags = map(n0, _TRT, 0, 0, 64 | 0);
export var ListCisScanResultsAggregatedByTargetResource = op(
  n0,
  _LCSRABTR,
  {
    [_ht]: ["POST", "/cis/scan-result/resource/list", 200],
  },
  () => ListCisScanResultsAggregatedByTargetResourceRequest,
  () => ListCisScanResultsAggregatedByTargetResourceResponse
);
