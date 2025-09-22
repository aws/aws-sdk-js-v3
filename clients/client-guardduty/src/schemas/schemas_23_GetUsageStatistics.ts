// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Acc,
  _acc,
  _AIc,
  _aIc,
  _AIcc,
  _aIcc,
  _Am,
  _am,
  _DI,
  _dI,
  _DS,
  _dS,
  _dSa,
  _DSat,
  _F,
  _f,
  _Fea,
  _fea,
  _GUS,
  _GUSR,
  _GUSRe,
  _hL,
  _ht,
  _jN,
  _MR,
  _mR,
  _NT,
  _nT,
  _Res,
  _res,
  _Reso,
  _reso,
  _SBA,
  _sBA,
  _SBDS,
  _sBDS,
  _SBF,
  _sBF,
  _SBR,
  _sBR,
  _TABF,
  _tABF,
  _To,
  _to,
  _TR,
  _tR,
  _UAR,
  _UARL,
  _UC,
  _uC,
  _UDSRL,
  _UDSRs,
  _UFRL,
  _UFRs,
  _Uni,
  _uni,
  _URRL,
  _URRs,
  _US,
  _uS,
  _UST,
  _uST,
  _UTABFL,
  _UTAR,
  _UTARL,
  _UTARs,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetUsageStatisticsRequest = struct(
  n0,
  _GUSR,
  0,
  [_DI, _UST, _UC, _Uni, _MR, _NT],
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
        [_jN]: _uST,
      },
    ],
    [
      () => UsageCriteria,
      {
        [_jN]: _uC,
      },
    ],
    [
      0,
      {
        [_jN]: _uni,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var GetUsageStatisticsResponse = struct(
  n0,
  _GUSRe,
  0,
  [_US, _NT],
  [
    [
      () => UsageStatistics,
      {
        [_jN]: _uS,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var Total = struct(
  n0,
  _To,
  0,
  [_Am, _Uni],
  [
    [
      0,
      {
        [_jN]: _am,
      },
    ],
    [
      0,
      {
        [_jN]: _uni,
      },
    ],
  ]
);
export var UsageAccountResult = struct(
  n0,
  _UAR,
  0,
  [_AIc, _To],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      () => Total,
      {
        [_jN]: _to,
      },
    ],
  ]
);
export var UsageCriteria = struct(
  n0,
  _UC,
  0,
  [_AIcc, _DS, _Reso, _F],
  [
    [
      64 | 0,
      {
        [_jN]: _aIcc,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _dS,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _reso,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _f,
      },
    ],
  ]
);
export var UsageDataSourceResult = struct(
  n0,
  _UDSRs,
  0,
  [_DSat, _To],
  [
    [
      0,
      {
        [_jN]: _dSa,
      },
    ],
    [
      () => Total,
      {
        [_jN]: _to,
      },
    ],
  ]
);
export var UsageFeatureResult = struct(
  n0,
  _UFRs,
  0,
  [_Fea, _To],
  [
    [
      0,
      {
        [_jN]: _fea,
      },
    ],
    [
      () => Total,
      {
        [_jN]: _to,
      },
    ],
  ]
);
export var UsageResourceResult = struct(
  n0,
  _URRs,
  0,
  [_Res, _To],
  [
    [
      0,
      {
        [_jN]: _res,
      },
    ],
    [
      () => Total,
      {
        [_jN]: _to,
      },
    ],
  ]
);
export var UsageStatistics = struct(
  n0,
  _US,
  0,
  [_SBA, _TABF, _SBDS, _SBR, _TR, _SBF],
  [
    [
      () => UsageAccountResultList,
      {
        [_jN]: _sBA,
      },
    ],
    [
      () => UsageTopAccountsResultList,
      {
        [_jN]: _tABF,
      },
    ],
    [
      () => UsageDataSourceResultList,
      {
        [_jN]: _sBDS,
      },
    ],
    [
      () => UsageResourceResultList,
      {
        [_jN]: _sBR,
      },
    ],
    [
      () => UsageResourceResultList,
      {
        [_jN]: _tR,
      },
    ],
    [
      () => UsageFeatureResultList,
      {
        [_jN]: _sBF,
      },
    ],
  ]
);
export var UsageTopAccountResult = struct(
  n0,
  _UTAR,
  0,
  [_AIc, _To],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      () => Total,
      {
        [_jN]: _to,
      },
    ],
  ]
);
export var UsageTopAccountsResult = struct(
  n0,
  _UTARs,
  0,
  [_Fea, _Acc],
  [
    [
      0,
      {
        [_jN]: _fea,
      },
    ],
    [
      () => UsageTopAccountsByFeatureList,
      {
        [_jN]: _acc,
      },
    ],
  ]
);
export var DataSourceList = 64 | 0;

export var ResourceList = 64 | 0;

export var UsageAccountResultList = list(n0, _UARL, 0, [() => UsageAccountResult, 0]);
export var UsageDataSourceResultList = list(n0, _UDSRL, 0, [() => UsageDataSourceResult, 0]);
export var UsageFeatureList = 64 | 0;

export var UsageFeatureResultList = list(n0, _UFRL, 0, [() => UsageFeatureResult, 0]);
export var UsageResourceResultList = list(n0, _URRL, 0, [() => UsageResourceResult, 0]);
export var UsageTopAccountsByFeatureList = list(n0, _UTABFL, 0, [() => UsageTopAccountResult, 0]);
export var UsageTopAccountsResultList = list(n0, _UTARL, 0, [() => UsageTopAccountsResult, 0]);
export var GetUsageStatistics = op(
  n0,
  _GUS,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/usage/statistics", 200],
  },
  () => GetUsageStatisticsRequest,
  () => GetUsageStatisticsResponse
);
