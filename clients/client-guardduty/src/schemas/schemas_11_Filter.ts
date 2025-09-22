// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CBCS,
  _cBCS,
  _CBRT,
  _cBRT,
  _CFC,
  _CFCL,
  _CFCo,
  _CFCov,
  _CK,
  _cK,
  _CSo,
  _cSo,
  _DI,
  _dI,
  _DIe,
  _dIe,
  _DP,
  _dP,
  _DPDe,
  _DPDRes,
  _DPDResc,
  _DT,
  _dT,
  _Equ,
  _equ,
  _FC,
  _fC,
  _FCi,
  _fCi,
  _FCil,
  _fCil,
  _GCS,
  _GCSR,
  _GCSRe,
  _hL,
  _ht,
  _jN,
  _NE,
  _nE,
  _PFST,
  _pFST,
  _St,
  _st,
  _STt,
  _sTt,
  n0,
} from "./schemas_0";
import { DestinationProperties } from "./schemas_31_Destination";

/* eslint no-var: 0 */

export var CoverageFilterCondition = struct(
  n0,
  _CFC,
  0,
  [_Equ, _NE],
  [
    [
      64 | 0,
      {
        [_jN]: _equ,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _nE,
      },
    ],
  ]
);
export var CoverageFilterCriteria = struct(
  n0,
  _CFCo,
  0,
  [_FC],
  [
    [
      () => CoverageFilterCriterionList,
      {
        [_jN]: _fC,
      },
    ],
  ]
);
export var CoverageFilterCriterion = struct(
  n0,
  _CFCov,
  0,
  [_CK, _FCi],
  [
    [
      0,
      {
        [_jN]: _cK,
      },
    ],
    [
      () => CoverageFilterCondition,
      {
        [_jN]: _fCi,
      },
    ],
  ]
);
export var CoverageStatistics = struct(
  n0,
  _CSo,
  0,
  [_CBRT, _CBCS],
  [
    [
      128 | 1,
      {
        [_jN]: _cBRT,
      },
    ],
    [
      128 | 1,
      {
        [_jN]: _cBCS,
      },
    ],
  ]
);
export var DescribePublishingDestinationRequest = struct(
  n0,
  _DPDRes,
  0,
  [_DI, _DIe],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _dIe,
        [_hL]: 1,
      },
    ],
  ]
);
export var DescribePublishingDestinationResponse = struct(
  n0,
  _DPDResc,
  0,
  [_DIe, _DT, _St, _PFST, _DP],
  [
    [
      0,
      {
        [_jN]: _dIe,
      },
    ],
    [
      0,
      {
        [_jN]: _dT,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      1,
      {
        [_jN]: _pFST,
      },
    ],
    [
      () => DestinationProperties,
      {
        [_jN]: _dP,
      },
    ],
  ]
);
export var GetCoverageStatisticsRequest = struct(
  n0,
  _GCSR,
  0,
  [_DI, _FCil, _STt],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      () => CoverageFilterCriteria,
      {
        [_jN]: _fCil,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _sTt,
      },
    ],
  ]
);
export var GetCoverageStatisticsResponse = struct(
  n0,
  _GCSRe,
  0,
  [_CSo],
  [
    [
      () => CoverageStatistics,
      {
        [_jN]: _cSo,
      },
    ],
  ]
);
export var CoverageFilterCriterionList = list(n0, _CFCL, 0, [() => CoverageFilterCriterion, 0]);
export var CoverageStatisticsTypeList = 64 | 0;

export var Equals = 64 | 0;

export var NotEquals = 64 | 0;

export var CountByCoverageStatus = 128 | 1;

export var CountByResourceType = 128 | 1;

export var DescribePublishingDestination = op(
  n0,
  _DPDe,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/publishingDestination/{DestinationId}", 200],
  },
  () => DescribePublishingDestinationRequest,
  () => DescribePublishingDestinationResponse
);
export var GetCoverageStatistics = op(
  n0,
  _GCS,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/coverage/statistics", 200],
  },
  () => GetCoverageStatisticsRequest,
  () => GetCoverageStatisticsResponse
);
