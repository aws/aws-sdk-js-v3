// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aI,
  _aUOU,
  _bC,
  _BCBEP,
  _bCBEP,
  _BCBET,
  _bCBET,
  _bCBOER,
  _BCBSAT,
  _bCBSAT,
  _BCPAUOU,
  _BSBS,
  _bSBS,
  _cE,
  _cOC,
  _cSIB,
  _dUOU,
  _ex,
  _fTi,
  _GBS,
  _GBSR,
  _GBSRe,
  _h,
  _in,
  _jN,
  _kM,
  _lU,
  _nC,
  _nS,
  _nSo,
  _oC,
  _OLS,
  _pA,
  _pAC,
  _pR,
  _pW,
  _SA,
  _sCt,
  _se,
  _sIB,
  _sIBC,
  _sM,
  _tCo,
  _to,
  _tSIB,
  _u,
  _un,
  _uOC,
  _uOSIB,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BucketCountByEffectivePermission = struct(
  n0,
  _BCBEP,
  0,
  [_pA, _pR, _pW, _u],
  [
    [
      1,
      {
        [_jN]: _pA,
      },
    ],
    [
      1,
      {
        [_jN]: _pR,
      },
    ],
    [
      1,
      {
        [_jN]: _pW,
      },
    ],
    [
      1,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var BucketCountByEncryptionType = struct(
  n0,
  _BCBET,
  0,
  [_kM, _sM, _un, _u],
  [
    [
      1,
      {
        [_jN]: _kM,
      },
    ],
    [
      1,
      {
        [_jN]: _sM,
      },
    ],
    [
      1,
      {
        [_jN]: _un,
      },
    ],
    [
      1,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var BucketCountBySharedAccessType = struct(
  n0,
  _BCBSAT,
  0,
  [_ex, _in, _nS, _u],
  [
    [
      1,
      {
        [_jN]: _ex,
      },
    ],
    [
      1,
      {
        [_jN]: _in,
      },
    ],
    [
      1,
      {
        [_jN]: _nS,
      },
    ],
    [
      1,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var BucketCountPolicyAllowsUnencryptedObjectUploads = struct(
  n0,
  _BCPAUOU,
  0,
  [_aUOU, _dUOU, _u],
  [
    [
      1,
      {
        [_jN]: _aUOU,
      },
    ],
    [
      1,
      {
        [_jN]: _dUOU,
      },
    ],
    [
      1,
      {
        [_jN]: _u,
      },
    ],
  ]
);
export var BucketStatisticsBySensitivity = struct(
  n0,
  _BSBS,
  0,
  [_cE, _nC, _nSo, _se],
  [
    [
      () => SensitivityAggregations,
      {
        [_jN]: _cE,
      },
    ],
    [
      () => SensitivityAggregations,
      {
        [_jN]: _nC,
      },
    ],
    [
      () => SensitivityAggregations,
      {
        [_jN]: _nSo,
      },
    ],
    [
      () => SensitivityAggregations,
      {
        [_jN]: _se,
      },
    ],
  ]
);
export var GetBucketStatisticsRequest = struct(
  n0,
  _GBSR,
  0,
  [_aI],
  [
    [
      0,
      {
        [_jN]: _aI,
      },
    ],
  ]
);
export var GetBucketStatisticsResponse = struct(
  n0,
  _GBSRe,
  0,
  [_bC, _bCBEP, _bCBET, _bCBOER, _bCBSAT, _bSBS, _cOC, _cSIB, _lU, _oC, _sIB, _sIBC, _uOC, _uOSIB],
  [
    [
      1,
      {
        [_jN]: _bC,
      },
    ],
    [
      () => BucketCountByEffectivePermission,
      {
        [_jN]: _bCBEP,
      },
    ],
    [
      () => BucketCountByEncryptionType,
      {
        [_jN]: _bCBET,
      },
    ],
    [
      () => BucketCountPolicyAllowsUnencryptedObjectUploads,
      {
        [_jN]: _bCBOER,
      },
    ],
    [
      () => BucketCountBySharedAccessType,
      {
        [_jN]: _bCBSAT,
      },
    ],
    [
      () => BucketStatisticsBySensitivity,
      {
        [_jN]: _bSBS,
      },
    ],
    [
      1,
      {
        [_jN]: _cOC,
      },
    ],
    [
      1,
      {
        [_jN]: _cSIB,
      },
    ],
    [
      5,
      {
        [_jN]: _lU,
      },
    ],
    [
      1,
      {
        [_jN]: _oC,
      },
    ],
    [
      1,
      {
        [_jN]: _sIB,
      },
    ],
    [
      1,
      {
        [_jN]: _sIBC,
      },
    ],
    [
      () => ObjectLevelStatistics,
      {
        [_jN]: _uOC,
      },
    ],
    [
      () => ObjectLevelStatistics,
      {
        [_jN]: _uOSIB,
      },
    ],
  ]
);
export var ObjectLevelStatistics = struct(
  n0,
  _OLS,
  0,
  [_fTi, _sCt, _to],
  [
    [
      1,
      {
        [_jN]: _fTi,
      },
    ],
    [
      1,
      {
        [_jN]: _sCt,
      },
    ],
    [
      1,
      {
        [_jN]: _to,
      },
    ],
  ]
);
export var SensitivityAggregations = struct(
  n0,
  _SA,
  0,
  [_cSIB, _pAC, _tCo, _tSIB],
  [
    [
      1,
      {
        [_jN]: _cSIB,
      },
    ],
    [
      1,
      {
        [_jN]: _pAC,
      },
    ],
    [
      1,
      {
        [_jN]: _tCo,
      },
    ],
    [
      1,
      {
        [_jN]: _tSIB,
      },
    ],
  ]
);
export var GetBucketStatistics = op(
  n0,
  _GBS,
  {
    [_h]: ["POST", "/datasources/s3/statistics", 200],
  },
  () => GetBucketStatisticsRequest,
  () => GetBucketStatisticsResponse
);
