// smithy-typescript generated code
import { list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _ad,
  _aFI,
  _aFO,
  _aIc,
  _aIDQR,
  _cA,
  _CDS,
  _CDSI,
  _CDSO,
  _cI,
  _cIo,
  _cNa,
  _cNl,
  _con,
  _cT,
  _da,
  _dAI,
  _dAR,
  _dAS,
  _DDS,
  _DDSI,
  _DDSO,
  _de,
  _dI,
  _dIo,
  _dNa,
  _DSCI,
  _DSCO,
  _dSCS,
  _DSEM,
  _dSI,
  _dSIa,
  _DSRA,
  _DSRAa,
  _dSRI,
  _DSRLS,
  _DSRS,
  _DSRSa,
  _DSS,
  _DSSa,
  _eBNG,
  _eD,
  _eInv,
  _eInvi,
  _eIv,
  _eM,
  _eS,
  _eSve,
  _eTr,
  _exp,
  _fa,
  _fC,
  _FE,
  _fE,
  _FEi,
  _GDS,
  _GDSI,
  _GDSO,
  _GDSR,
  _GDSRI,
  _GDSRO,
  _gRC,
  _GRCI,
  _GRCO,
  _gSGS,
  _GSGSO,
  _hQ,
  _ht,
  _i,
  _id,
  _iS,
  _it,
  _iTd,
  _LDS,
  _LDSI,
  _LDSO,
  _LDSR,
  _LDSRA,
  _LDSRAI,
  _LDSRAO,
  _LDSRI,
  _LDSRO,
  _LI,
  _lRA,
  _lRAC,
  _lREM,
  _lRS,
  _lSi,
  _mRa,
  _N,
  _n,
  _nT,
  _pI,
  _pIr,
  _pOI,
  _RC,
  _RCC,
  _rCC,
  _RCS,
  _rCS,
  _re,
  _reg,
  _RFC,
  _rFC,
  _RFCe,
  _rPORF,
  _rRC,
  _RRCI,
  _RRCO,
  _RSe,
  _rSe,
  _RSFA,
  _rSFA,
  _rSGS,
  _RSGSO,
  _RSS,
  _rSS,
  _s,
  _sAt,
  _sAto,
  _SC,
  _sc,
  _SDSR,
  _SDSRI,
  _SDSRO,
  _sGS,
  _SGSD,
  _sGSD,
  _SGSDe,
  _SGSO,
  _sk,
  _sMA,
  _sMRC,
  _SMRCI,
  _SMRCO,
  _sN,
  _TA,
  _tAr,
  _tD,
  _tim,
  _tNe,
  _ty,
  _uA,
  _UDS,
  _UDSI,
  _UDSO,
  _un,
  _up,
  _wN,
  Description,
  n0,
} from "./schemas_0";
import { FormInputList } from "./schemas_47_Create";
import { FormOutputList } from "./schemas_64_Data";

/* eslint no-var: 0 */

export var Name = sim(n0, _N, 0, 8);
export var CreateDataSourceInput = struct(
  n0,
  _CDSI,
  0,
  [_n, _de, _dI, _pIr, _eInv, _cIo, _ty, _con, _re, _eS, _sc, _pOI, _aFI, _cT],
  [
    [() => Name, 0],
    [() => Description, 0],
    [0, 1],
    0,
    0,
    0,
    0,
    () => DataSourceConfigurationInput,
    () => RecommendationConfiguration,
    0,
    [() => ScheduleConfiguration, 0],
    2,
    [() => FormInputList, 0],
    [0, 4],
  ]
);
export var CreateDataSourceOutput = struct(
  n0,
  _CDSO,
  0,
  [_id, _s, _ty, _n, _de, _dIo, _pI, _eInvi, _cI, _con, _re, _eS, _pOI, _aFO, _sc, _lRS, _lRA, _lREM, _eM, _cA, _uA],
  [
    0,
    0,
    0,
    [() => Name, 0],
    [() => Description, 0],
    0,
    0,
    0,
    0,
    () => DataSourceConfigurationOutput,
    () => RecommendationConfiguration,
    0,
    2,
    [() => FormOutputList, 0],
    [() => ScheduleConfiguration, 0],
    0,
    5,
    () => DataSourceErrorMessage,
    () => DataSourceErrorMessage,
    5,
    5,
  ]
);
export var DataSourceErrorMessage = struct(n0, _DSEM, 0, [_eTr, _eD], [0, 0]);
export var DataSourceRunActivity = struct(
  n0,
  _DSRA,
  0,
  [_da, _dSRI, _tNe, _dAS, _pI, _dAI, _tD, _eM, _lSi, _cA, _uA],
  [
    [() => Name, 0],
    0,
    [() => Name, 0],
    0,
    0,
    0,
    [() => Description, 0],
    () => DataSourceErrorMessage,
    () => LineageInfo,
    5,
    5,
  ]
);
export var DataSourceRunLineageSummary = struct(n0, _DSRLS, 0, [_iS], [0]);
export var DataSourceRunSummary = struct(
  n0,
  _DSRS,
  0,
  [_id, _dSI, _ty, _s, _pI, _rSFA, _eM, _cA, _uA, _sAt, _sAto, _lSi],
  [
    0,
    0,
    0,
    0,
    0,
    () => RunStatisticsForAssets,
    () => DataSourceErrorMessage,
    5,
    5,
    5,
    5,
    () => DataSourceRunLineageSummary,
  ]
);
export var DataSourceSummary = struct(
  n0,
  _DSS,
  0,
  [_dIo, _eInvi, _cI, _dSI, _n, _ty, _s, _eS, _sc, _lRS, _lRA, _lREM, _lRAC, _cA, _uA, _de],
  [
    0,
    0,
    0,
    0,
    [() => Name, 0],
    0,
    0,
    0,
    [() => ScheduleConfiguration, 0],
    0,
    5,
    () => DataSourceErrorMessage,
    1,
    5,
    5,
    [() => Description, 0],
  ]
);
export var DeleteDataSourceInput = struct(
  n0,
  _DDSI,
  0,
  [_dI, _i, _cT, _rPORF],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iTd]: 1,
        [_hQ]: _cT,
      },
    ],
    [
      2,
      {
        [_hQ]: _rPORF,
      },
    ],
  ]
);
export var DeleteDataSourceOutput = struct(
  n0,
  _DDSO,
  0,
  [
    _id,
    _s,
    _ty,
    _n,
    _de,
    _dIo,
    _pI,
    _eInvi,
    _cI,
    _con,
    _eS,
    _pOI,
    _aFO,
    _sc,
    _lRS,
    _lRA,
    _lREM,
    _eM,
    _cA,
    _uA,
    _sGS,
    _rPORF,
  ],
  [
    0,
    0,
    0,
    [() => Name, 0],
    [() => Description, 0],
    0,
    0,
    0,
    0,
    () => DataSourceConfigurationOutput,
    0,
    2,
    [() => FormOutputList, 0],
    [() => ScheduleConfiguration, 0],
    0,
    5,
    () => DataSourceErrorMessage,
    () => DataSourceErrorMessage,
    5,
    5,
    () => SelfGrantStatusOutput,
    2,
  ]
);
export var FilterExpression = struct(n0, _FE, 0, [_ty, _exp], [0, 0]);
export var GetDataSourceInput = struct(
  n0,
  _GDSI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataSourceOutput = struct(
  n0,
  _GDSO,
  0,
  [
    _id,
    _s,
    _ty,
    _n,
    _de,
    _dIo,
    _pI,
    _eInvi,
    _cI,
    _con,
    _re,
    _eS,
    _pOI,
    _aFO,
    _sc,
    _lRS,
    _lRA,
    _lREM,
    _lRAC,
    _eM,
    _cA,
    _uA,
    _sGS,
  ],
  [
    0,
    0,
    0,
    [() => Name, 0],
    [() => Description, 0],
    0,
    0,
    0,
    0,
    () => DataSourceConfigurationOutput,
    () => RecommendationConfiguration,
    0,
    2,
    [() => FormOutputList, 0],
    [() => ScheduleConfiguration, 0],
    0,
    5,
    () => DataSourceErrorMessage,
    1,
    () => DataSourceErrorMessage,
    5,
    5,
    () => SelfGrantStatusOutput,
  ]
);
export var GetDataSourceRunInput = struct(
  n0,
  _GDSRI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataSourceRunOutput = struct(
  n0,
  _GDSRO,
  0,
  [_dIo, _dSI, _id, _pI, _s, _ty, _dSCS, _rSFA, _lSi, _eM, _cA, _uA, _sAt, _sAto],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => RunStatisticsForAssets,
    () => DataSourceRunLineageSummary,
    () => DataSourceErrorMessage,
    5,
    5,
    5,
    5,
  ]
);
export var GlueRunConfigurationInput = struct(
  n0,
  _GRCI,
  0,
  [_dAR, _rFC, _aIDQR, _cNa],
  [0, () => RelationalFilterConfigurations, 2, 0]
);
export var GlueRunConfigurationOutput = struct(
  n0,
  _GRCO,
  0,
  [_aIc, _reg, _dAR, _rFC, _aIDQR, _cNa],
  [0, 0, 0, () => RelationalFilterConfigurations, 2, 0]
);
export var GlueSelfGrantStatusOutput = struct(n0, _GSGSO, 0, [_sGSD], [() => SelfGrantStatusDetails]);
export var LineageInfo = struct(n0, _LI, 0, [_eIv, _eSve, _eM], [0, 0, 0]);
export var ListDataSourceRunActivitiesInput = struct(
  n0,
  _LDSRAI,
  0,
  [_dI, _i, _s, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListDataSourceRunActivitiesOutput = struct(
  n0,
  _LDSRAO,
  0,
  [_it, _nT],
  [[() => DataSourceRunActivities, 0], 0]
);
export var ListDataSourceRunsInput = struct(
  n0,
  _LDSRI,
  0,
  [_dI, _dSIa, _s, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListDataSourceRunsOutput = struct(n0, _LDSRO, 0, [_it, _nT], [() => DataSourceRunSummaries, 0]);
export var ListDataSourcesInput = struct(
  n0,
  _LDSI,
  0,
  [_dI, _pIr, _eInv, _cIo, _ty, _s, _n, _nT, _mRa],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pIr,
      },
    ],
    [
      0,
      {
        [_hQ]: _eInv,
      },
    ],
    [
      0,
      {
        [_hQ]: _cIo,
      },
    ],
    [
      0,
      {
        [_hQ]: _ty,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      () => Name,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
  ]
);
export var ListDataSourcesOutput = struct(n0, _LDSO, 0, [_it, _nT], [[() => DataSourceSummaries, 0], 0]);
export var RecommendationConfiguration = struct(n0, _RC, 0, [_eBNG], [2]);
export var RedshiftClusterStorage = struct(n0, _RCS, 0, [_cNl], [0]);
export var RedshiftCredentialConfiguration = struct(n0, _RCC, 0, [_sMA], [0]);
export var RedshiftRunConfigurationInput = struct(
  n0,
  _RRCI,
  0,
  [_dAR, _rFC, _rCC, _rSe],
  [0, () => RelationalFilterConfigurations, () => RedshiftCredentialConfiguration, () => RedshiftStorage]
);
export var RedshiftRunConfigurationOutput = struct(
  n0,
  _RRCO,
  0,
  [_aIc, _reg, _dAR, _rFC, _rCC, _rSe],
  [0, 0, 0, () => RelationalFilterConfigurations, () => RedshiftCredentialConfiguration, () => RedshiftStorage]
);
export var RedshiftSelfGrantStatusOutput = struct(n0, _RSGSO, 0, [_sGSD], [() => SelfGrantStatusDetails]);
export var RedshiftServerlessStorage = struct(n0, _RSS, 0, [_wN], [0]);
export var RelationalFilterConfiguration = struct(n0, _RFC, 0, [_dNa, _sN, _fE], [0, 0, () => FilterExpressions]);
export var RunStatisticsForAssets = struct(n0, _RSFA, 0, [_ad, _up, _un, _sk, _fa], [1, 1, 1, 1, 1]);
export var SageMakerRunConfigurationInput = struct(n0, _SMRCI, 0, [_tAr], [map(n0, _TA, 0, 0, 64 | 0)]);
export var SageMakerRunConfigurationOutput = struct(
  n0,
  _SMRCO,
  0,
  [_aIc, _reg, _tAr],
  [0, 0, map(n0, _TA, 0, 0, 64 | 0)]
);
export var ScheduleConfiguration = struct(n0, _SC, 8, [_tim, _sc], [0, 0]);
export var SelfGrantStatusDetail = struct(n0, _SGSD, 0, [_dNa, _sN, _s, _fC], [0, 0, 0, 0]);
export var StartDataSourceRunInput = struct(
  n0,
  _SDSRI,
  0,
  [_dI, _dSIa, _cT],
  [
    [0, 1],
    [0, 1],
    [0, 4],
  ]
);
export var StartDataSourceRunOutput = struct(
  n0,
  _SDSRO,
  0,
  [_dIo, _dSI, _id, _pI, _s, _ty, _dSCS, _rSFA, _eM, _cA, _uA, _sAt, _sAto],
  [0, 0, 0, 0, 0, 0, 0, () => RunStatisticsForAssets, () => DataSourceErrorMessage, 5, 5, 5, 5]
);
export var UpdateDataSourceInput = struct(
  n0,
  _UDSI,
  0,
  [_dI, _i, _n, _de, _eS, _pOI, _aFI, _sc, _con, _re, _rPORF],
  [
    [0, 1],
    [0, 1],
    [() => Name, 0],
    [() => Description, 0],
    0,
    2,
    [() => FormInputList, 0],
    [() => ScheduleConfiguration, 0],
    () => DataSourceConfigurationInput,
    () => RecommendationConfiguration,
    2,
  ]
);
export var UpdateDataSourceOutput = struct(
  n0,
  _UDSO,
  0,
  [
    _id,
    _s,
    _ty,
    _n,
    _de,
    _dIo,
    _pI,
    _eInvi,
    _cI,
    _con,
    _re,
    _eS,
    _pOI,
    _aFO,
    _sc,
    _lRS,
    _lRA,
    _lREM,
    _eM,
    _cA,
    _uA,
    _sGS,
    _rPORF,
  ],
  [
    0,
    0,
    0,
    [() => Name, 0],
    [() => Description, 0],
    0,
    0,
    0,
    0,
    () => DataSourceConfigurationOutput,
    () => RecommendationConfiguration,
    0,
    2,
    [() => FormOutputList, 0],
    [() => ScheduleConfiguration, 0],
    0,
    5,
    () => DataSourceErrorMessage,
    () => DataSourceErrorMessage,
    5,
    5,
    () => SelfGrantStatusOutput,
    2,
  ]
);
export var DataSourceRunActivities = list(n0, _DSRAa, 0, [() => DataSourceRunActivity, 0]);
export var DataSourceRunSummaries = list(n0, _DSRSa, 0, () => DataSourceRunSummary);
export var DataSourceSummaries = list(n0, _DSSa, 0, [() => DataSourceSummary, 0]);
export var FilterExpressions = list(n0, _FEi, 0, () => FilterExpression);
export var RelationalFilterConfigurations = list(n0, _RFCe, 0, () => RelationalFilterConfiguration);
export var SelfGrantStatusDetails = list(n0, _SGSDe, 0, () => SelfGrantStatusDetail);
export var TrackingAssetArns = 64 | 0;

export var TrackingAssets = map(n0, _TA, 0, 0, 64 | 0);
export var DataSourceConfigurationInput = uni(
  n0,
  _DSCI,
  0,
  [_gRC, _rRC, _sMRC],
  [() => GlueRunConfigurationInput, () => RedshiftRunConfigurationInput, () => SageMakerRunConfigurationInput]
);
export var DataSourceConfigurationOutput = uni(
  n0,
  _DSCO,
  0,
  [_gRC, _rRC, _sMRC],
  [() => GlueRunConfigurationOutput, () => RedshiftRunConfigurationOutput, () => SageMakerRunConfigurationOutput]
);
export var RedshiftStorage = uni(
  n0,
  _RSe,
  0,
  [_rCS, _rSS],
  [() => RedshiftClusterStorage, () => RedshiftServerlessStorage]
);
export var SelfGrantStatusOutput = uni(
  n0,
  _SGSO,
  0,
  [_gSGS, _rSGS],
  [() => GlueSelfGrantStatusOutput, () => RedshiftSelfGrantStatusOutput]
);
export var CreateDataSource = op(
  n0,
  _CDS,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/data-sources", 201],
  },
  () => CreateDataSourceInput,
  () => CreateDataSourceOutput
);
export var DeleteDataSource = op(
  n0,
  _DDS,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/data-sources/{identifier}", 200],
  },
  () => DeleteDataSourceInput,
  () => DeleteDataSourceOutput
);
export var GetDataSource = op(
  n0,
  _GDS,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/data-sources/{identifier}", 200],
  },
  () => GetDataSourceInput,
  () => GetDataSourceOutput
);
export var GetDataSourceRun = op(
  n0,
  _GDSR,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/data-source-runs/{identifier}", 200],
  },
  () => GetDataSourceRunInput,
  () => GetDataSourceRunOutput
);
export var ListDataSourceRunActivities = op(
  n0,
  _LDSRA,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/data-source-runs/{identifier}/activities", 200],
  },
  () => ListDataSourceRunActivitiesInput,
  () => ListDataSourceRunActivitiesOutput
);
export var ListDataSourceRuns = op(
  n0,
  _LDSR,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs", 200],
  },
  () => ListDataSourceRunsInput,
  () => ListDataSourceRunsOutput
);
export var ListDataSources = op(
  n0,
  _LDS,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/data-sources", 200],
  },
  () => ListDataSourcesInput,
  () => ListDataSourcesOutput
);
export var StartDataSourceRun = op(
  n0,
  _SDSR,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/data-sources/{dataSourceIdentifier}/runs", 200],
  },
  () => StartDataSourceRunInput,
  () => StartDataSourceRunOutput
);
export var UpdateDataSource = op(
  n0,
  _UDS,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/data-sources/{identifier}", 200],
  },
  () => UpdateDataSourceInput,
  () => UpdateDataSourceOutput
);
