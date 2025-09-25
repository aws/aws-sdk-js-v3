// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _ac,
  _aRP,
  _aRPC,
  _bCT,
  _bIM,
  _bIT,
  _bN,
  _bOM,
  _bOMy,
  _bP,
  _cA,
  _CG,
  _cGP,
  _cGPC,
  _CGR,
  _CGRr,
  _cP,
  _cPC,
  _cRC,
  _cRD,
  _cRT,
  _cS,
  _cT,
  _CWC,
  _cWC,
  _d,
  _de,
  _eDDE,
  _ena,
  _exa,
  _fC,
  _fi,
  _FMD,
  _FML,
  _FMS,
  _FMSL,
  _fR,
  _gA,
  _GARP,
  _GARPC,
  _GBM,
  _GCF,
  _GCFA,
  _GCFC,
  _GCFCu,
  _GCFT,
  _GCFTC,
  _GCFTN,
  _GCFu,
  _GCGA,
  _GCGF,
  _GCGFC,
  _GCGFCu,
  _GCGFu,
  _GCGP,
  _GCGPC,
  _GCP,
  _GCPC,
  _GCRC,
  _GFM,
  _GFMR,
  _GFMRe,
  _GFR,
  _GFRu,
  _GG,
  _GGR,
  _GGRe,
  _gI,
  _gIu,
  _GM,
  _GMILC,
  _GMILCR,
  _GMILCRe,
  _GMu,
  _GMW,
  _GMWC,
  _GMWL,
  _GMWLC,
  _GPE,
  _GPEC,
  _GPECu,
  _GPEu,
  _gPI,
  _GR,
  _GRC,
  _GRCu,
  _GRu,
  _GSIP,
  _GSIPC,
  _GSR,
  _GSRu,
  _GT,
  _GTA,
  _GTC,
  _GTCu,
  _GTD,
  _GTE,
  _GTEu,
  _GTN,
  _GTP,
  _GTPC,
  _GTT,
  _GTTC,
  _GTTN,
  _GTu,
  _gV,
  _GW,
  _GWA,
  _GWC,
  _GWCu,
  _GWP,
  _GWPC,
  _GWu,
  _hQ,
  _ht,
  _iA,
  _iDDE,
  _iE,
  _iM,
  _iSn,
  _iTS,
  _kKA,
  _kKI,
  _kP,
  _LC,
  _lC,
  _lDDSC,
  _LFM,
  _LFMR,
  _LFMRi,
  _lGN,
  _mA,
  _mD,
  _mI,
  _mIo,
  _mL,
  _mN,
  _mSod,
  _mWL,
  _mWLC,
  _n,
  _oA,
  _oE,
  _oM,
  _oS,
  _pa,
  _pEC,
  _pEi,
  _PMILC,
  _PMILCR,
  _PMILCRu,
  _pN,
  _po,
  _rA,
  _rCe,
  _re,
  _rSS,
  _s,
  _SC,
  _sC,
  _sIP,
  _sIPC,
  _sRt,
  _ta,
  _tCi,
  _tCo,
  _tDDE,
  _te,
  _th,
  _ti,
  _tNi,
  _to,
  _tP,
  _tPC,
  _ty,
  _uA,
  _UG,
  _UGR,
  _UGRp,
  _vDDE,
  _ve,
  _w,
  _wCo,
  _wP,
  _wPC,
  n0,
  TagList,
} from "./schemas_0";
import { GuardrailCrossRegionDetails, GuardrailDescription, GuardrailName } from "./schemas_15_Guardrail";

/* eslint no-var: 0 */

export var GuardrailBlockedMessaging = sim(n0, _GBM, 0, 8);
export var GuardrailContentFilterAction = sim(n0, _GCFA, 0, 8);
export var GuardrailContentFiltersTierName = sim(n0, _GCFTN, 0, 8);
export var GuardrailContextualGroundingAction = sim(n0, _GCGA, 0, 8);
export var GuardrailFailureRecommendation = sim(n0, _GFR, 0, 8);
export var GuardrailModality = sim(n0, _GM, 0, 8);
export var GuardrailStatusReason = sim(n0, _GSR, 0, 8);
export var GuardrailTopicAction = sim(n0, _GTA, 0, 8);
export var GuardrailTopicDefinition = sim(n0, _GTD, 0, 8);
export var GuardrailTopicExample = sim(n0, _GTE, 0, 8);
export var GuardrailTopicName = sim(n0, _GTN, 0, 8);
export var GuardrailTopicsTierName = sim(n0, _GTTN, 0, 8);
export var GuardrailWordAction = sim(n0, _GWA, 0, 8);
export var CloudWatchConfig = struct(n0, _CWC, 0, [_lGN, _rA, _lDDSC], [0, 0, () => S3Config]);
export var CreateGuardrailRequest = struct(
  n0,
  _CGR,
  0,
  [_n, _d, _tPC, _cPC, _wPC, _sIPC, _cGPC, _aRPC, _cRC, _bIM, _bOM, _kKI, _ta, _cRT],
  [
    [() => GuardrailName, 0],
    [() => GuardrailDescription, 0],
    [() => GuardrailTopicPolicyConfig, 0],
    [() => GuardrailContentPolicyConfig, 0],
    [() => GuardrailWordPolicyConfig, 0],
    () => GuardrailSensitiveInformationPolicyConfig,
    [() => GuardrailContextualGroundingPolicyConfig, 0],
    () => GuardrailAutomatedReasoningPolicyConfig,
    () => GuardrailCrossRegionConfig,
    [() => GuardrailBlockedMessaging, 0],
    [() => GuardrailBlockedMessaging, 0],
    0,
    () => TagList,
    [0, 4],
  ]
);
export var CreateGuardrailResponse = struct(n0, _CGRr, 0, [_gI, _gA, _ve, _cA], [0, 0, 0, 5]);
export var FoundationModelDetails = struct(
  n0,
  _FMD,
  0,
  [_mA, _mIo, _mN, _pN, _iM, _oM, _rSS, _cS, _iTS, _mL],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 2, 64 | 0, 64 | 0, () => FoundationModelLifecycle]
);
export var FoundationModelLifecycle = struct(n0, _FML, 0, [_s], [0]);
export var FoundationModelSummary = struct(
  n0,
  _FMS,
  0,
  [_mA, _mIo, _mN, _pN, _iM, _oM, _rSS, _cS, _iTS, _mL],
  [0, 0, 0, 0, 64 | 0, 64 | 0, 2, 64 | 0, 64 | 0, () => FoundationModelLifecycle]
);
export var GetFoundationModelRequest = struct(n0, _GFMR, 0, [_mI], [[0, 1]]);
export var GetFoundationModelResponse = struct(n0, _GFMRe, 0, [_mD], [() => FoundationModelDetails]);
export var GetGuardrailRequest = struct(
  n0,
  _GGR,
  0,
  [_gIu, _gV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _gV,
      },
    ],
  ]
);
export var GetGuardrailResponse = struct(
  n0,
  _GGRe,
  0,
  [_n, _d, _gI, _gA, _ve, _s, _tP, _cP, _wP, _sIP, _cGP, _aRP, _cRD, _cA, _uA, _sRt, _fR, _bIM, _bOM, _kKA],
  [
    [() => GuardrailName, 0],
    [() => GuardrailDescription, 0],
    0,
    0,
    0,
    0,
    [() => GuardrailTopicPolicy, 0],
    [() => GuardrailContentPolicy, 0],
    [() => GuardrailWordPolicy, 0],
    () => GuardrailSensitiveInformationPolicy,
    [() => GuardrailContextualGroundingPolicy, 0],
    () => GuardrailAutomatedReasoningPolicy,
    () => GuardrailCrossRegionDetails,
    5,
    5,
    [() => GuardrailStatusReasons, 0],
    [() => GuardrailFailureRecommendations, 0],
    [() => GuardrailBlockedMessaging, 0],
    [() => GuardrailBlockedMessaging, 0],
    0,
  ]
);
export var GetModelInvocationLoggingConfigurationRequest = struct(n0, _GMILCR, 0, [], []);
export var GetModelInvocationLoggingConfigurationResponse = struct(n0, _GMILCRe, 0, [_lC], [() => LoggingConfig]);
export var GuardrailAutomatedReasoningPolicy = struct(n0, _GARP, 0, [_po, _cT], [64 | 0, 1]);
export var GuardrailAutomatedReasoningPolicyConfig = struct(n0, _GARPC, 0, [_po, _cT], [64 | 0, 1]);
export var GuardrailContentFilter = struct(
  n0,
  _GCF,
  0,
  [_ty, _iSn, _oS, _iM, _oM, _iA, _oA, _iE, _oE],
  [
    0,
    0,
    0,
    [() => GuardrailModalities, 0],
    [() => GuardrailModalities, 0],
    [() => GuardrailContentFilterAction, 0],
    [() => GuardrailContentFilterAction, 0],
    2,
    2,
  ]
);
export var GuardrailContentFilterConfig = struct(
  n0,
  _GCFC,
  0,
  [_ty, _iSn, _oS, _iM, _oM, _iA, _oA, _iE, _oE],
  [
    0,
    0,
    0,
    [() => GuardrailModalities, 0],
    [() => GuardrailModalities, 0],
    [() => GuardrailContentFilterAction, 0],
    [() => GuardrailContentFilterAction, 0],
    2,
    2,
  ]
);
export var GuardrailContentFiltersTier = struct(n0, _GCFT, 0, [_tNi], [[() => GuardrailContentFiltersTierName, 0]]);
export var GuardrailContentFiltersTierConfig = struct(
  n0,
  _GCFTC,
  0,
  [_tNi],
  [[() => GuardrailContentFiltersTierName, 0]]
);
export var GuardrailContentPolicy = struct(
  n0,
  _GCP,
  0,
  [_fi, _ti],
  [
    [() => GuardrailContentFilters, 0],
    [() => GuardrailContentFiltersTier, 0],
  ]
);
export var GuardrailContentPolicyConfig = struct(
  n0,
  _GCPC,
  0,
  [_fC, _tCi],
  [
    [() => GuardrailContentFiltersConfig, 0],
    [() => GuardrailContentFiltersTierConfig, 0],
  ]
);
export var GuardrailContextualGroundingFilter = struct(
  n0,
  _GCGF,
  0,
  [_ty, _th, _ac, _ena],
  [0, 1, [() => GuardrailContextualGroundingAction, 0], 2]
);
export var GuardrailContextualGroundingFilterConfig = struct(
  n0,
  _GCGFC,
  0,
  [_ty, _th, _ac, _ena],
  [0, 1, [() => GuardrailContextualGroundingAction, 0], 2]
);
export var GuardrailContextualGroundingPolicy = struct(
  n0,
  _GCGP,
  0,
  [_fi],
  [[() => GuardrailContextualGroundingFilters, 0]]
);
export var GuardrailContextualGroundingPolicyConfig = struct(
  n0,
  _GCGPC,
  0,
  [_fC],
  [[() => GuardrailContextualGroundingFiltersConfig, 0]]
);
export var GuardrailCrossRegionConfig = struct(n0, _GCRC, 0, [_gPI], [0]);
export var GuardrailManagedWords = struct(
  n0,
  _GMW,
  0,
  [_ty, _iA, _oA, _iE, _oE],
  [0, [() => GuardrailWordAction, 0], [() => GuardrailWordAction, 0], 2, 2]
);
export var GuardrailManagedWordsConfig = struct(
  n0,
  _GMWC,
  0,
  [_ty, _iA, _oA, _iE, _oE],
  [0, [() => GuardrailWordAction, 0], [() => GuardrailWordAction, 0], 2, 2]
);
export var GuardrailPiiEntity = struct(n0, _GPE, 0, [_ty, _ac, _iA, _oA, _iE, _oE], [0, 0, 0, 0, 2, 2]);
export var GuardrailPiiEntityConfig = struct(n0, _GPEC, 0, [_ty, _ac, _iA, _oA, _iE, _oE], [0, 0, 0, 0, 2, 2]);
export var GuardrailRegex = struct(n0, _GR, 0, [_n, _d, _pa, _ac, _iA, _oA, _iE, _oE], [0, 0, 0, 0, 0, 0, 2, 2]);
export var GuardrailRegexConfig = struct(n0, _GRC, 0, [_n, _d, _pa, _ac, _iA, _oA, _iE, _oE], [0, 0, 0, 0, 0, 0, 2, 2]);
export var GuardrailSensitiveInformationPolicy = struct(
  n0,
  _GSIP,
  0,
  [_pEi, _re],
  [() => GuardrailPiiEntities, () => GuardrailRegexes]
);
export var GuardrailSensitiveInformationPolicyConfig = struct(
  n0,
  _GSIPC,
  0,
  [_pEC, _rCe],
  [() => GuardrailPiiEntitiesConfig, () => GuardrailRegexesConfig]
);
export var GuardrailTopic = struct(
  n0,
  _GT,
  0,
  [_n, _de, _exa, _ty, _iA, _oA, _iE, _oE],
  [
    [() => GuardrailTopicName, 0],
    [() => GuardrailTopicDefinition, 0],
    [() => GuardrailTopicExamples, 0],
    0,
    [() => GuardrailTopicAction, 0],
    [() => GuardrailTopicAction, 0],
    2,
    2,
  ]
);
export var GuardrailTopicConfig = struct(
  n0,
  _GTC,
  0,
  [_n, _de, _exa, _ty, _iA, _oA, _iE, _oE],
  [
    [() => GuardrailTopicName, 0],
    [() => GuardrailTopicDefinition, 0],
    [() => GuardrailTopicExamples, 0],
    0,
    [() => GuardrailTopicAction, 0],
    [() => GuardrailTopicAction, 0],
    2,
    2,
  ]
);
export var GuardrailTopicPolicy = struct(
  n0,
  _GTP,
  0,
  [_to, _ti],
  [
    [() => GuardrailTopics, 0],
    [() => GuardrailTopicsTier, 0],
  ]
);
export var GuardrailTopicPolicyConfig = struct(
  n0,
  _GTPC,
  0,
  [_tCo, _tCi],
  [
    [() => GuardrailTopicsConfig, 0],
    [() => GuardrailTopicsTierConfig, 0],
  ]
);
export var GuardrailTopicsTier = struct(n0, _GTT, 0, [_tNi], [[() => GuardrailTopicsTierName, 0]]);
export var GuardrailTopicsTierConfig = struct(n0, _GTTC, 0, [_tNi], [[() => GuardrailTopicsTierName, 0]]);
export var GuardrailWord = struct(
  n0,
  _GW,
  0,
  [_te, _iA, _oA, _iE, _oE],
  [0, [() => GuardrailWordAction, 0], [() => GuardrailWordAction, 0], 2, 2]
);
export var GuardrailWordConfig = struct(
  n0,
  _GWC,
  0,
  [_te, _iA, _oA, _iE, _oE],
  [0, [() => GuardrailWordAction, 0], [() => GuardrailWordAction, 0], 2, 2]
);
export var GuardrailWordPolicy = struct(
  n0,
  _GWP,
  0,
  [_w, _mWL],
  [
    [() => GuardrailWords, 0],
    [() => GuardrailManagedWordLists, 0],
  ]
);
export var GuardrailWordPolicyConfig = struct(
  n0,
  _GWPC,
  0,
  [_wCo, _mWLC],
  [
    [() => GuardrailWordsConfig, 0],
    [() => GuardrailManagedWordListsConfig, 0],
  ]
);
export var ListFoundationModelsRequest = struct(
  n0,
  _LFMR,
  0,
  [_bP, _bCT, _bOMy, _bIT],
  [
    [
      0,
      {
        [_hQ]: _bP,
      },
    ],
    [
      0,
      {
        [_hQ]: _bCT,
      },
    ],
    [
      0,
      {
        [_hQ]: _bOMy,
      },
    ],
    [
      0,
      {
        [_hQ]: _bIT,
      },
    ],
  ]
);
export var ListFoundationModelsResponse = struct(n0, _LFMRi, 0, [_mSod], [() => FoundationModelSummaryList]);
export var LoggingConfig = struct(
  n0,
  _LC,
  0,
  [_cWC, _sC, _tDDE, _iDDE, _eDDE, _vDDE],
  [() => CloudWatchConfig, () => S3Config, 2, 2, 2, 2]
);
export var PutModelInvocationLoggingConfigurationRequest = struct(n0, _PMILCR, 0, [_lC], [() => LoggingConfig]);
export var PutModelInvocationLoggingConfigurationResponse = struct(n0, _PMILCRu, 0, [], []);
export var S3Config = struct(n0, _SC, 0, [_bN, _kP], [0, 0]);
export var UpdateGuardrailRequest = struct(
  n0,
  _UGR,
  0,
  [_gIu, _n, _d, _tPC, _cPC, _wPC, _sIPC, _cGPC, _aRPC, _cRC, _bIM, _bOM, _kKI],
  [
    [0, 1],
    [() => GuardrailName, 0],
    [() => GuardrailDescription, 0],
    [() => GuardrailTopicPolicyConfig, 0],
    [() => GuardrailContentPolicyConfig, 0],
    [() => GuardrailWordPolicyConfig, 0],
    () => GuardrailSensitiveInformationPolicyConfig,
    [() => GuardrailContextualGroundingPolicyConfig, 0],
    () => GuardrailAutomatedReasoningPolicyConfig,
    () => GuardrailCrossRegionConfig,
    [() => GuardrailBlockedMessaging, 0],
    [() => GuardrailBlockedMessaging, 0],
    0,
  ]
);
export var UpdateGuardrailResponse = struct(n0, _UGRp, 0, [_gI, _gA, _ve, _uA], [0, 0, 0, 5]);
export var AutomatedReasoningPolicyArnList = 64 | 0;

export var FoundationModelSummaryList = list(n0, _FMSL, 0, () => FoundationModelSummary);
export var GuardrailContentFilters = list(n0, _GCFu, 0, [() => GuardrailContentFilter, 0]);
export var GuardrailContentFiltersConfig = list(n0, _GCFCu, 0, [() => GuardrailContentFilterConfig, 0]);
export var GuardrailContextualGroundingFilters = list(n0, _GCGFu, 0, [() => GuardrailContextualGroundingFilter, 0]);
export var GuardrailContextualGroundingFiltersConfig = list(n0, _GCGFCu, 0, [
  () => GuardrailContextualGroundingFilterConfig,
  0,
]);
export var GuardrailFailureRecommendations = list(n0, _GFRu, 0, [() => GuardrailFailureRecommendation, 0]);
export var GuardrailManagedWordLists = list(n0, _GMWL, 0, [() => GuardrailManagedWords, 0]);
export var GuardrailManagedWordListsConfig = list(n0, _GMWLC, 0, [() => GuardrailManagedWordsConfig, 0]);
export var GuardrailModalities = list(n0, _GMu, 0, [() => GuardrailModality, 0]);
export var GuardrailPiiEntities = list(n0, _GPEu, 0, () => GuardrailPiiEntity);
export var GuardrailPiiEntitiesConfig = list(n0, _GPECu, 0, () => GuardrailPiiEntityConfig);
export var GuardrailRegexes = list(n0, _GRu, 0, () => GuardrailRegex);
export var GuardrailRegexesConfig = list(n0, _GRCu, 0, () => GuardrailRegexConfig);
export var GuardrailStatusReasons = list(n0, _GSRu, 0, [() => GuardrailStatusReason, 0]);
export var GuardrailTopicExamples = list(n0, _GTEu, 0, [() => GuardrailTopicExample, 0]);
export var GuardrailTopics = list(n0, _GTu, 0, [() => GuardrailTopic, 0]);
export var GuardrailTopicsConfig = list(n0, _GTCu, 0, [() => GuardrailTopicConfig, 0]);
export var GuardrailWords = list(n0, _GWu, 0, [() => GuardrailWord, 0]);
export var GuardrailWordsConfig = list(n0, _GWCu, 0, [() => GuardrailWordConfig, 0]);
export var InferenceTypeList = 64 | 0;

export var ModelCustomizationList = 64 | 0;

export var ModelModalityList = 64 | 0;

export var CreateGuardrail = op(
  n0,
  _CG,
  {
    [_ht]: ["POST", "/guardrails", 202],
  },
  () => CreateGuardrailRequest,
  () => CreateGuardrailResponse
);
export var GetFoundationModel = op(
  n0,
  _GFM,
  {
    [_ht]: ["GET", "/foundation-models/{modelIdentifier}", 200],
  },
  () => GetFoundationModelRequest,
  () => GetFoundationModelResponse
);
export var GetGuardrail = op(
  n0,
  _GG,
  {
    [_ht]: ["GET", "/guardrails/{guardrailIdentifier}", 200],
  },
  () => GetGuardrailRequest,
  () => GetGuardrailResponse
);
export var GetModelInvocationLoggingConfiguration = op(
  n0,
  _GMILC,
  {
    [_ht]: ["GET", "/logging/modelinvocations", 200],
  },
  () => GetModelInvocationLoggingConfigurationRequest,
  () => GetModelInvocationLoggingConfigurationResponse
);
export var ListFoundationModels = op(
  n0,
  _LFM,
  {
    [_ht]: ["GET", "/foundation-models", 200],
  },
  () => ListFoundationModelsRequest,
  () => ListFoundationModelsResponse
);
export var PutModelInvocationLoggingConfiguration = op(
  n0,
  _PMILC,
  {
    [_ht]: ["PUT", "/logging/modelinvocations", 200],
  },
  () => PutModelInvocationLoggingConfigurationRequest,
  () => PutModelInvocationLoggingConfigurationResponse
);
export var UpdateGuardrail = op(
  n0,
  _UG,
  {
    [_ht]: ["PUT", "/guardrails/{guardrailIdentifier}", 202],
  },
  () => UpdateGuardrailRequest,
  () => UpdateGuardrailResponse
);
