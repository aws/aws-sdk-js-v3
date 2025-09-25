// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aA,
  _ac,
  _AIAA,
  _AIs,
  _aIss,
  _ALD,
  _aT,
  _ATFR,
  _aTs,
  _bNG,
  _BNGC,
  _cA,
  _CAI,
  _CAO,
  _CAR,
  _CAr,
  _CARI,
  _CARO,
  _cB,
  _CR,
  _CRI,
  _CRO,
  _cT,
  _d,
  _DAT,
  _DATI,
  _DATO,
  _de,
  _dI,
  _dIo,
  _dPa,
  _dPIa,
  _DPIAA,
  _DPRI,
  _dUI,
  _DUT,
  _dUT,
  _eIx,
  _en,
  _fi,
  _fIo,
  _fO,
  _fRCA,
  _fRCB,
  _GA,
  _GAI,
  _GAO,
  _GAT,
  _GATI,
  _GATO,
  _gGT,
  _GI,
  _GIAA,
  _gIlo,
  _gIlos,
  _GR,
  _GRI,
  _GRO,
  _gT,
  _GTI,
  _gTI,
  _GTIAA,
  _hQ,
  _ht,
  _i,
  _iC,
  _iCDU,
  _id,
  _it,
  _l,
  _lDo,
  _lI,
  _LRi,
  _LRIi,
  _LRO,
  _lS,
  _lTSDPFO,
  _lUBa,
  _MFED,
  _mFED,
  _MFR,
  _mR,
  _mRa,
  _n,
  _nT,
  _oDI,
  _oPI,
  _oPIr,
  _oPIw,
  _PC,
  _pCr,
  _PFR,
  _pIro,
  _proj,
  _r,
  _rA,
  _RD,
  _rMF,
  _RMFL,
  _RN,
  _rOFO,
  _RS,
  _RSu,
  _RSul,
  _RT,
  _rT,
  _s,
  _sAT,
  _sco,
  _sD,
  _Se,
  _SI,
  _sIe,
  _SIRI,
  _SIRIe,
  _sM,
  _SO,
  _so,
  _sPpe,
  _sS,
  _sTe,
  _tar,
  _tI,
  _tIa,
  _tMC,
  _tR,
  _tRe,
  _tT,
  _uA,
  _uB,
  _uR,
  _URI,
  _URO,
  _URp,
  Description,
  GlossaryTermName,
  n0,
  ShortDescription,
} from "./schemas_0";
import { AssetName, MatchRationale, TimeSeriesDataPointSummaryFormOutputList } from "./schemas_4_TimeSeries";
import { GlossaryDescription, GlossaryName, LongDescription, TermRelations } from "./schemas_18_Glossary";
import { FilterClause, SearchInList, SearchSort } from "./schemas_28_Search";
import { FormsOutputMap } from "./schemas_37_Type";
import { DataProductDescription, DataProductName } from "./schemas_43_Product";
import { FormInputList } from "./schemas_47_Create";
import { FormOutputList } from "./schemas_64_Data";

/* eslint no-var: 0 */

export var RuleName = sim(n0, _RN, 0, 8);
export var AssetItem = struct(
  n0,
  _AIs,
  0,
  [_dIo, _i, _n, _tI, _tR, _eIx, _de, _cA, _cB, _fRCA, _fRCB, _gT, _oPI, _aA, _gGT],
  [
    0,
    0,
    [() => AssetName, 0],
    0,
    0,
    0,
    [() => Description, 0],
    4,
    0,
    4,
    0,
    64 | 0,
    0,
    [() => AssetItemAdditionalAttributes, 0],
    64 | 0,
  ]
);
export var AssetItemAdditionalAttributes = struct(
  n0,
  _AIAA,
  0,
  [_fO, _rOFO, _lTSDPFO, _mR],
  [
    [() => FormOutputList, 0],
    [() => FormOutputList, 0],
    () => TimeSeriesDataPointSummaryFormOutputList,
    () => MatchRationale,
  ]
);
export var AssetListingDetails = struct(n0, _ALD, 0, [_lI, _lS], [0, 0]);
export var AssetTypesForRule = struct(n0, _ATFR, 0, [_sM, _sAT], [0, 64 | 0]);
export var BusinessNameGenerationConfiguration = struct(n0, _BNGC, 0, [_en], [2]);
export var CreateAssetInput = struct(
  n0,
  _CAI,
  0,
  [_n, _dI, _eIx, _tI, _tR, _de, _gT, _fIo, _oPIw, _pCr, _cT],
  [
    [() => AssetName, 0],
    [0, 1],
    0,
    0,
    0,
    [() => Description, 0],
    64 | 0,
    [() => FormInputList, 0],
    0,
    () => PredictionConfiguration,
    [0, 4],
  ]
);
export var CreateAssetOutput = struct(
  n0,
  _CAO,
  0,
  [_id, _n, _tI, _tR, _eIx, _r, _de, _cA, _cB, _fRCA, _fRCB, _gT, _gGT, _oPI, _dIo, _l, _fO, _rOFO, _lTSDPFO, _pCr],
  [
    0,
    [() => AssetName, 0],
    0,
    0,
    0,
    0,
    [() => Description, 0],
    4,
    0,
    4,
    0,
    64 | 0,
    64 | 0,
    0,
    0,
    () => AssetListingDetails,
    [() => FormOutputList, 0],
    [() => FormOutputList, 0],
    () => TimeSeriesDataPointSummaryFormOutputList,
    () => PredictionConfiguration,
  ]
);
export var CreateAssetRevisionInput = struct(
  n0,
  _CARI,
  0,
  [_n, _dI, _i, _tR, _de, _gT, _fIo, _pCr, _cT],
  [
    [() => AssetName, 0],
    [0, 1],
    [0, 1],
    0,
    [() => Description, 0],
    64 | 0,
    [() => FormInputList, 0],
    () => PredictionConfiguration,
    [0, 4],
  ]
);
export var CreateAssetRevisionOutput = struct(
  n0,
  _CARO,
  0,
  [_id, _n, _tI, _tR, _eIx, _r, _de, _cA, _cB, _fRCA, _fRCB, _gT, _gGT, _oPI, _dIo, _l, _fO, _rOFO, _lTSDPFO, _pCr],
  [
    0,
    [() => AssetName, 0],
    0,
    0,
    0,
    0,
    [() => Description, 0],
    4,
    0,
    4,
    0,
    64 | 0,
    64 | 0,
    0,
    0,
    () => AssetListingDetails,
    [() => FormOutputList, 0],
    [() => FormOutputList, 0],
    () => TimeSeriesDataPointSummaryFormOutputList,
    () => PredictionConfiguration,
  ]
);
export var CreateRuleInput = struct(
  n0,
  _CRI,
  0,
  [_dI, _n, _tar, _ac, _sco, _d, _de, _cT],
  [[0, 1], [() => RuleName, 0], () => RuleTarget, 0, () => RuleScope, () => RuleDetail, [() => Description, 0], [0, 4]]
);
export var CreateRuleOutput = struct(
  n0,
  _CRO,
  0,
  [_i, _n, _rT, _tar, _ac, _sco, _d, _tT, _de, _cA, _cB],
  [0, [() => RuleName, 0], 0, () => RuleTarget, 0, () => RuleScope, () => RuleDetail, 0, [() => Description, 0], 4, 0]
);
export var DataProductItemAdditionalAttributes = struct(n0, _DPIAA, 0, [_mR], [() => MatchRationale]);
export var DataProductResultItem = struct(
  n0,
  _DPRI,
  0,
  [_dIo, _id, _n, _oPI, _de, _gT, _cA, _cB, _fRCA, _fRCB, _aA],
  [
    0,
    0,
    [() => DataProductName, 0],
    0,
    [() => DataProductDescription, 0],
    64 | 0,
    4,
    0,
    4,
    0,
    () => DataProductItemAdditionalAttributes,
  ]
);
export var DeleteAssetTypeInput = struct(
  n0,
  _DATI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteAssetTypeOutput = struct(n0, _DATO, 0, [], []);
export var DomainUnitTarget = struct(n0, _DUT, 0, [_dUI, _iCDU], [0, 2]);
export var GetAssetInput = struct(
  n0,
  _GAI,
  0,
  [_dI, _i, _r],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
  ]
);
export var GetAssetOutput = struct(
  n0,
  _GAO,
  0,
  [_id, _n, _tI, _tR, _eIx, _r, _de, _cA, _cB, _fRCA, _fRCB, _gT, _gGT, _oPI, _dIo, _l, _fO, _rOFO, _lTSDPFO],
  [
    0,
    [() => AssetName, 0],
    0,
    0,
    0,
    0,
    [() => Description, 0],
    4,
    0,
    4,
    0,
    64 | 0,
    64 | 0,
    0,
    0,
    () => AssetListingDetails,
    [() => FormOutputList, 0],
    [() => FormOutputList, 0],
    () => TimeSeriesDataPointSummaryFormOutputList,
  ]
);
export var GetAssetTypeInput = struct(
  n0,
  _GATI,
  0,
  [_dI, _i, _r],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
  ]
);
export var GetAssetTypeOutput = struct(
  n0,
  _GATO,
  0,
  [_dIo, _n, _r, _de, _fO, _oPI, _oDI, _oPIr, _cA, _cB, _uA, _uB],
  [0, 0, 0, [() => Description, 0], [() => FormsOutputMap, 0], 0, 0, 0, 4, 0, 4, 0]
);
export var GetRuleInput = struct(
  n0,
  _GRI,
  0,
  [_dI, _i, _r],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
  ]
);
export var GetRuleOutput = struct(
  n0,
  _GRO,
  0,
  [_i, _r, _n, _rT, _tar, _ac, _sco, _d, _tT, _de, _cA, _uA, _cB, _lUBa],
  [
    0,
    0,
    [() => RuleName, 0],
    0,
    () => RuleTarget,
    0,
    () => RuleScope,
    () => RuleDetail,
    0,
    [() => Description, 0],
    4,
    4,
    0,
    0,
  ]
);
export var GlossaryItem = struct(
  n0,
  _GI,
  0,
  [_dIo, _id, _n, _oPI, _de, _s, _uR, _cA, _cB, _uA, _uB, _aA],
  [
    0,
    0,
    [() => GlossaryName, 0],
    0,
    [() => GlossaryDescription, 0],
    0,
    64 | 0,
    4,
    0,
    4,
    0,
    () => GlossaryItemAdditionalAttributes,
  ]
);
export var GlossaryItemAdditionalAttributes = struct(n0, _GIAA, 0, [_mR], [() => MatchRationale]);
export var GlossaryTermItem = struct(
  n0,
  _GTI,
  0,
  [_dIo, _gIlo, _id, _n, _sD, _uR, _lDo, _tRe, _s, _cA, _cB, _uA, _uB, _aA],
  [
    0,
    0,
    0,
    [() => GlossaryTermName, 0],
    [() => ShortDescription, 0],
    64 | 0,
    [() => LongDescription, 0],
    () => TermRelations,
    0,
    4,
    0,
    4,
    0,
    () => GlossaryTermItemAdditionalAttributes,
  ]
);
export var GlossaryTermItemAdditionalAttributes = struct(n0, _GTIAA, 0, [_mR], [() => MatchRationale]);
export var ListRulesInput = struct(
  n0,
  _LRIi,
  0,
  [_dI, _tT, _tIa, _rT, _ac, _pIro, _aTs, _dPa, _iC, _mRa, _nT],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _rT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rA,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _pIro,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _aTs,
      },
    ],
    [
      2,
      {
        [_hQ]: _dPa,
      },
    ],
    [
      2,
      {
        [_hQ]: _iC,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListRulesOutput = struct(n0, _LRO, 0, [_it, _nT], [[() => RuleSummaries, 0], 0]);
export var MetadataFormEnforcementDetail = struct(n0, _MFED, 0, [_rMF], [() => RequiredMetadataFormList]);
export var MetadataFormReference = struct(n0, _MFR, 0, [_tI, _tR], [0, 0]);
export var PredictionConfiguration = struct(n0, _PC, 0, [_bNG], [() => BusinessNameGenerationConfiguration]);
export var ProjectsForRule = struct(n0, _PFR, 0, [_sM, _sPpe], [0, 64 | 0]);
export var RuleScope = struct(n0, _RS, 0, [_aT, _dPa, _proj], [() => AssetTypesForRule, 2, () => ProjectsForRule]);
export var RuleSummary = struct(
  n0,
  _RSu,
  0,
  [_i, _r, _rT, _n, _tT, _tar, _ac, _sco, _uA, _lUBa],
  [0, 0, 0, [() => RuleName, 0], 0, () => RuleTarget, 0, () => RuleScope, 4, 0]
);
export var SearchInput = struct(
  n0,
  _SI,
  0,
  [_dI, _oPIw, _mRa, _nT, _sS, _sTe, _sIe, _fi, _so, _aA],
  [[0, 1], 0, 1, 0, 0, 0, () => SearchInList, () => FilterClause, () => SearchSort, 64 | 0]
);
export var SearchOutput = struct(n0, _SO, 0, [_it, _nT, _tMC], [[() => SearchInventoryResultItems, 0], 0, 1]);
export var UpdateRuleInput = struct(
  n0,
  _URI,
  0,
  [_dI, _i, _n, _de, _sco, _d, _iCDU],
  [[0, 1], [0, 1], [() => RuleName, 0], [() => Description, 0], () => RuleScope, () => RuleDetail, 2]
);
export var UpdateRuleOutput = struct(
  n0,
  _URO,
  0,
  [_i, _r, _n, _rT, _tar, _ac, _sco, _d, _de, _cA, _uA, _cB, _lUBa],
  [
    0,
    0,
    [() => RuleName, 0],
    0,
    () => RuleTarget,
    0,
    () => RuleScope,
    () => RuleDetail,
    [() => Description, 0],
    4,
    4,
    0,
    0,
  ]
);
export var AssetTypeIdentifiers = 64 | 0;

export var ProjectIds = 64 | 0;

export var RequiredMetadataFormList = list(n0, _RMFL, 0, () => MetadataFormReference);
export var RuleAssetTypeList = 64 | 0;

export var RuleProjectIdentifierList = 64 | 0;

export var RuleSummaries = list(n0, _RSul, 0, [() => RuleSummary, 0]);
export var SearchInventoryResultItems = list(n0, _SIRI, 0, [() => SearchInventoryResultItem, 0]);
export var RuleDetail = uni(n0, _RD, 0, [_mFED], [() => MetadataFormEnforcementDetail]);
export var RuleTarget = uni(n0, _RT, 0, [_dUT], [() => DomainUnitTarget]);
export var SearchInventoryResultItem = uni(
  n0,
  _SIRIe,
  0,
  [_gIlos, _gTI, _aIss, _dPIa],
  [
    [() => GlossaryItem, 0],
    [() => GlossaryTermItem, 0],
    [() => AssetItem, 0],
    [() => DataProductResultItem, 0],
  ]
);
export var CreateAsset = op(
  n0,
  _CAr,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/assets", 201],
  },
  () => CreateAssetInput,
  () => CreateAssetOutput
);
export var CreateAssetRevision = op(
  n0,
  _CAR,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/assets/{identifier}/revisions", 200],
  },
  () => CreateAssetRevisionInput,
  () => CreateAssetRevisionOutput
);
export var CreateRule = op(
  n0,
  _CR,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/rules", 201],
  },
  () => CreateRuleInput,
  () => CreateRuleOutput
);
export var DeleteAssetType = op(
  n0,
  _DAT,
  {
    [_ht]: ["DELETE", "/v2/domains/{domainIdentifier}/asset-types/{identifier}", 204],
  },
  () => DeleteAssetTypeInput,
  () => DeleteAssetTypeOutput
);
export var GetAsset = op(
  n0,
  _GA,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/assets/{identifier}", 200],
  },
  () => GetAssetInput,
  () => GetAssetOutput
);
export var GetAssetType = op(
  n0,
  _GAT,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/asset-types/{identifier}", 200],
  },
  () => GetAssetTypeInput,
  () => GetAssetTypeOutput
);
export var GetRule = op(
  n0,
  _GR,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/rules/{identifier}", 200],
  },
  () => GetRuleInput,
  () => GetRuleOutput
);
export var ListRules = op(
  n0,
  _LRi,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/list-rules/{targetType}/{targetIdentifier}", 200],
  },
  () => ListRulesInput,
  () => ListRulesOutput
);
export var Search = op(
  n0,
  _Se,
  {
    [_ht]: ["POST", "/v2/domains/{domainIdentifier}/search", 200],
  },
  () => SearchInput,
  () => SearchOutput
);
export var UpdateRule = op(
  n0,
  _URp,
  {
    [_ht]: ["PATCH", "/v2/domains/{domainIdentifier}/rules/{identifier}", 200],
  },
  () => UpdateRuleInput,
  () => UpdateRuleOutput
);
