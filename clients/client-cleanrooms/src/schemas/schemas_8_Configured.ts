// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aCl,
  _agg,
  _aIc,
  _aM,
  _aRn,
  _aRP,
  _aRT,
  _aRTn,
  _at,
  _ATR,
  _CCTAR,
  _CCTARI,
  _CCTARO,
  _cNo,
  _CT,
  _cT,
  _cTA,
  _CTAR,
  _CTARP,
  _CTARPV,
  _cTI,
  _cTIo,
  _cTo,
  _cTol,
  _CTS,
  _cTS,
  _CTSL,
  _cu,
  _d,
  _dN,
  _g,
  _GCT,
  _GCTAR,
  _GCTARI,
  _GCTARO,
  _GCTI,
  _GCTO,
  _GTR,
  _h,
  _hQ,
  _i,
  _LCT,
  _LCTI,
  _LCTO,
  _li,
  _mR,
  _n,
  _nT,
  _oL,
  _p,
  _sA,
  _sAM,
  _sN,
  _sn,
  _STR,
  _STS,
  _STSL,
  _STSV,
  _t,
  _tN,
  _TR,
  _tR,
  _tS,
  _UCT,
  _UCTAR,
  _UCTARI,
  _UCTARO,
  _UCTI,
  _UCTO,
  _uT,
  _v_,
  _wG,
  n0,
} from "./schemas_0";
import { AnalysisRuleAggregation, AnalysisRuleCustom, AnalysisRuleList } from "./schemas_10_AnalysisRule";

/* eslint no-var: 0 */

export var AthenaTableReference = struct(n0, _ATR, 0, [_wG, _oL, _dN, _tN], [0, 0, 0, 0]);
export var ConfiguredTable = struct(
  n0,
  _CT,
  0,
  [_i, _a, _n, _d, _tR, _cT, _uT, _aRT, _aM, _aCl, _sAM],
  [0, 0, 0, 0, () => TableReference, 4, 4, 64 | 0, 0, 64 | 0, 64 | 0]
);
export var ConfiguredTableAnalysisRule = struct(
  n0,
  _CTAR,
  0,
  [_cTI, _cTA, _p, _t, _cT, _uT],
  [0, 0, () => ConfiguredTableAnalysisRulePolicy, 0, 4, 4]
);
export var ConfiguredTableSummary = struct(
  n0,
  _CTS,
  0,
  [_i, _a, _n, _cT, _uT, _aRT, _aM, _sAM],
  [0, 0, 0, 4, 4, 64 | 0, 0, 64 | 0]
);
export var CreateConfiguredTableAnalysisRuleInput = struct(
  n0,
  _CCTARI,
  0,
  [_cTIo, _aRTn, _aRP],
  [[0, 1], 0, () => ConfiguredTableAnalysisRulePolicy]
);
export var CreateConfiguredTableAnalysisRuleOutput = struct(
  n0,
  _CCTARO,
  0,
  [_aRn],
  [() => ConfiguredTableAnalysisRule]
);
export var GetConfiguredTableAnalysisRuleInput = struct(
  n0,
  _GCTARI,
  0,
  [_cTIo, _aRTn],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetConfiguredTableAnalysisRuleOutput = struct(n0, _GCTARO, 0, [_aRn], [() => ConfiguredTableAnalysisRule]);
export var GetConfiguredTableInput = struct(n0, _GCTI, 0, [_cTIo], [[0, 1]]);
export var GetConfiguredTableOutput = struct(n0, _GCTO, 0, [_cTo], [() => ConfiguredTable]);
export var GlueTableReference = struct(n0, _GTR, 0, [_tN, _dN], [0, 0]);
export var ListConfiguredTablesInput = struct(
  n0,
  _LCTI,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListConfiguredTablesOutput = struct(n0, _LCTO, 0, [_cTS, _nT], [() => ConfiguredTableSummaryList, 0]);
export var SnowflakeTableReference = struct(
  n0,
  _STR,
  0,
  [_sA, _aIc, _dN, _tN, _sN, _tS],
  [0, 0, 0, 0, 0, () => SnowflakeTableSchema]
);
export var SnowflakeTableSchemaV1 = struct(n0, _STSV, 0, [_cNo, _cTol], [0, 0]);
export var UpdateConfiguredTableAnalysisRuleInput = struct(
  n0,
  _UCTARI,
  0,
  [_cTIo, _aRTn, _aRP],
  [[0, 1], [0, 1], () => ConfiguredTableAnalysisRulePolicy]
);
export var UpdateConfiguredTableAnalysisRuleOutput = struct(
  n0,
  _UCTARO,
  0,
  [_aRn],
  [() => ConfiguredTableAnalysisRule]
);
export var UpdateConfiguredTableInput = struct(
  n0,
  _UCTI,
  0,
  [_cTIo, _n, _d, _tR, _aCl, _aM, _sAM],
  [[0, 1], 0, 0, () => TableReference, 64 | 0, 0, 64 | 0]
);
export var UpdateConfiguredTableOutput = struct(n0, _UCTO, 0, [_cTo], [() => ConfiguredTable]);
export var AllowedColumnList = 64 | 0;

export var ConfiguredTableAnalysisRuleTypeList = 64 | 0;

export var ConfiguredTableSummaryList = list(n0, _CTSL, 0, () => ConfiguredTableSummary);
export var SnowflakeTableSchemaList = list(n0, _STSL, 0, () => SnowflakeTableSchemaV1);
export var ConfiguredTableAnalysisRulePolicy = uni(n0, _CTARP, 0, [_v_], [() => ConfiguredTableAnalysisRulePolicyV1]);
export var ConfiguredTableAnalysisRulePolicyV1 = uni(
  n0,
  _CTARPV,
  0,
  [_li, _agg, _cu],
  [() => AnalysisRuleList, () => AnalysisRuleAggregation, () => AnalysisRuleCustom]
);
export var SnowflakeTableSchema = uni(n0, _STS, 0, [_v_], [() => SnowflakeTableSchemaList]);
export var TableReference = uni(
  n0,
  _TR,
  0,
  [_g, _sn, _at],
  [() => GlueTableReference, () => SnowflakeTableReference, () => AthenaTableReference]
);
export var CreateConfiguredTableAnalysisRule = op(
  n0,
  _CCTAR,
  {
    [_h]: ["POST", "/configuredTables/{configuredTableIdentifier}/analysisRule", 200],
  },
  () => CreateConfiguredTableAnalysisRuleInput,
  () => CreateConfiguredTableAnalysisRuleOutput
);
export var GetConfiguredTable = op(
  n0,
  _GCT,
  {
    [_h]: ["GET", "/configuredTables/{configuredTableIdentifier}", 200],
  },
  () => GetConfiguredTableInput,
  () => GetConfiguredTableOutput
);
export var GetConfiguredTableAnalysisRule = op(
  n0,
  _GCTAR,
  {
    [_h]: ["GET", "/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}", 200],
  },
  () => GetConfiguredTableAnalysisRuleInput,
  () => GetConfiguredTableAnalysisRuleOutput
);
export var ListConfiguredTables = op(
  n0,
  _LCT,
  {
    [_h]: ["GET", "/configuredTables", 200],
  },
  () => ListConfiguredTablesInput,
  () => ListConfiguredTablesOutput
);
export var UpdateConfiguredTable = op(
  n0,
  _UCT,
  {
    [_h]: ["PATCH", "/configuredTables/{configuredTableIdentifier}", 200],
  },
  () => UpdateConfiguredTableInput,
  () => UpdateConfiguredTableOutput
);
export var UpdateConfiguredTableAnalysisRule = op(
  n0,
  _UCTAR,
  {
    [_h]: ["PATCH", "/configuredTables/{configuredTableIdentifier}/analysisRule/{analysisRuleType}", 200],
  },
  () => UpdateConfiguredTableAnalysisRuleInput,
  () => UpdateConfiguredTableAnalysisRuleOutput
);
