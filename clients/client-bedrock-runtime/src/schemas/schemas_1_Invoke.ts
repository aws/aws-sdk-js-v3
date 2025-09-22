// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  InternalServerException as __InternalServerException,
  ModelErrorException as __ModelErrorException,
  ModelNotReadyException as __ModelNotReadyException,
  ModelStreamErrorException as __ModelStreamErrorException,
  ModelTimeoutException as __ModelTimeoutException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ServiceUnavailableException as __ServiceUnavailableException,
  ThrottlingException as __ThrottlingException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _A,
  _a,
  _ac,
  _ADE,
  _AG,
  _AGR,
  _AGRp,
  _AIM,
  _AIODC,
  _AIS,
  _aIS,
  _AISODC,
  _AISs,
  _aMRF,
  _aMRFd,
  _aMRFP,
  _an,
  _aR,
  _aRP,
  _aRPU,
  _aRPu,
  _as,
  _ATC,
  _ATCu,
  _au,
  _B,
  _b,
  _BIPP,
  _bO,
  _bo,
  _BOPP,
  _C,
  _c,
  _CB,
  _CBD,
  _cBD,
  _CBDE,
  _cBI,
  _CBo,
  _CBS,
  _cBS,
  _CBSE,
  _CBSEo,
  _cBSo,
  _CC,
  _cC,
  _CCB,
  _CD,
  _CE,
  _cFS,
  _CGC,
  _CGCL,
  _cGP,
  _cGPU,
  _ch,
  _Ci,
  _ci,
  _cit,
  _CL,
  _cl,
  _CM,
  _CO,
  _Co,
  _co,
  _con,
  _conf,
  _conv,
  _cP,
  _cPa,
  _CPB,
  _cPIU,
  _cPU,
  _CR,
  _cR,
  _cRIT,
  _CRo,
  _cRT,
  _CS,
  _CSC,
  _CSCD,
  _CSCL,
  _CSCLD,
  _CSM,
  _CSME,
  _CSO,
  _CSR,
  _CSRo,
  _CST,
  _CT,
  _cT,
  _CT_,
  _CTI,
  _CTo,
  _CTR,
  _CTRo,
  _CTRou,
  _cTS,
  _cW,
  _cWIT,
  _d,
  _DB,
  _dC,
  _DCB,
  _DCBo,
  _DCL,
  _DCLo,
  _dCo,
  _de,
  _des,
  _dI,
  _do,
  _dP,
  _DPL,
  _DS,
  _dS,
  _e,
  _en,
  _end,
  _eT,
  _f,
  _fi,
  _fil,
  _fM,
  _fS,
  _g,
  _GA,
  _GAI,
  _GAIR,
  _GAIRe,
  _GAL,
  _GALM,
  _GAM,
  _GARDSL,
  _GARF,
  _GARFL,
  _GARIF,
  _GARIFu,
  _GARITR,
  _GARITRL,
  _GARLW,
  _GARNTF,
  _GARPA,
  _GARR,
  _GARRL,
  _GARS,
  _GARSF,
  _GARSL,
  _GARSLC,
  _GARSNLC,
  _GARSu,
  _GART,
  _GARTAF,
  _GARTCF,
  _GARTL,
  _GARTO,
  _GARTOL,
  _GARVF,
  _GC,
  _gC,
  _GCB,
  _GCBL,
  _GCCB,
  _GCF,
  _GCFL,
  _GCGF,
  _GCGFu,
  _GCGPA,
  _GCIB,
  _GCIS,
  _GCPA,
  _GCTB,
  _GCu,
  _gCu,
  _gCua,
  _GCW,
  _GCWL,
  _gI,
  _GIB,
  _GIC,
  _GIM,
  _GIS,
  _GMW,
  _GMWL,
  _GOC,
  _GOCL,
  _GPEF,
  _GPEFL,
  _gPL,
  _GRF,
  _GRFL,
  _GSC,
  _GSIPA,
  _GT,
  _GTA,
  _GTB,
  _GTCC,
  _GTL,
  _GTPA,
  _GU,
  _gu,
  _gV,
  _GWPA,
  _h,
  _hE,
  _hH,
  _hQ,
  _i,
  _iA,
  _iAn,
  _IB,
  _IC,
  _iC,
  _id,
  _IM,
  _iM,
  _im,
  _ima,
  _iMI,
  _iMn,
  _imp,
  _IMR,
  _IMRn,
  _IMTR,
  _IMWBS,
  _IMWBSI,
  _IMWBSO,
  _IMWBSR,
  _IMWBSRn,
  _IMWRS,
  _IMWRSR,
  _IMWRSRn,
  _in,
  _IS,
  _iS,
  _ISE,
  _iSE,
  _iT,
  _j,
  _k,
  _kKI,
  _l,
  _la,
  _LAI,
  _LAIR,
  _LAIRi,
  _lM,
  _lMT,
  _lo,
  _lW,
  _M,
  _m,
  _mA,
  _ma,
  _Me,
  _me,
  _MEE,
  _met,
  _meta,
  _mI,
  _mIo,
  _MIP,
  _MNRE,
  _mO,
  _mR,
  _mS,
  _MSE,
  _mSe,
  _MSEE,
  _MSEe,
  _mSEE,
  _mT,
  _MTE,
  _mTE,
  _mWL,
  _n,
  _nL,
  _nT,
  _nTo,
  _o,
  _oA,
  _oDC,
  _oM,
  _op,
  _oS,
  _oSC,
  _oT,
  _ou,
  _p,
  _PB,
  _PC,
  _pC,
  _pCL,
  _pE,
  _PP,
  _pR,
  _PRT,
  _pV,
  _pVA,
  _PVM,
  _PVV,
  _q,
  _r,
  _rC,
  _RCB,
  _RCBD,
  _rCe,
  _re,
  _RM,
  _rM,
  _rN,
  _RNFE,
  _ro,
  _RS,
  _rT,
  _RTB,
  _s,
  _sa,
  _SAI,
  _SAIR,
  _SAIRt,
  _sB,
  _sC,
  _sc,
  _SCB,
  _SCBy,
  _sE,
  _se,
  _si,
  _sIP,
  _sIPFU,
  _sIPU,
  _SL,
  _sL,
  _sO,
  _sODC,
  _sPM,
  _SQEE,
  _sR,
  _sRu,
  _sS,
  _sT,
  _st,
  _sTA,
  _sta,
  _stat,
  _sTB,
  _STC,
  _str,
  _stre,
  _sU,
  _SUE,
  _sUE,
  _sy,
  _T,
  _t,
  _tA,
  _ta,
  _TC,
  _tC,
  _tCe,
  _TCo,
  _tCo,
  _tCoo,
  _TE,
  _tE,
  _te,
  _tem,
  _th,
  _ti,
  _TIS,
  _TL,
  _To,
  _to,
  _Too,
  _too,
  _tool,
  _top,
  _tP,
  _tPo,
  _tPU,
  _tR,
  _tr,
  _tra,
  _tran,
  _TRB,
  _TRCB,
  _TRCBo,
  _TS,
  _tS,
  _tT,
  _TU,
  _tU,
  _TUB,
  _TUBD,
  _TUBS,
  _tUI,
  _u,
  _uC,
  _uP,
  _ur,
  _v,
  _va,
  _VB,
  _VE,
  _vE,
  _vi,
  _VS,
  _wP,
  _wPU,
  _XABA,
  _XABCT,
  _XABG,
  _XABG_,
  _XABPL,
  _XABT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AsyncInvokeMessage = sim(n0, _AIM, 0, 8);
export var Body = sim(n0, _B, 21, 8);
export var GuardrailAutomatedReasoningStatementLogicContent = sim(n0, _GARSLC, 0, 8);
export var GuardrailAutomatedReasoningStatementNaturalLanguageContent = sim(n0, _GARSNLC, 0, 8);
export var ModelInputPayload = sim(n0, _MIP, 15, 8);
export var PartBody = sim(n0, _PB, 21, 8);
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var AnyToolChoice = struct(n0, _ATC, 0, [], []);
export var ApplyGuardrailRequest = struct(
  n0,
  _AGR,
  0,
  [_gI, _gV, _s, _co, _oS],
  [[0, 1], [0, 1], 0, [() => GuardrailContentBlockList, 0], 0]
);
export var ApplyGuardrailResponse = struct(
  n0,
  _AGRp,
  0,
  [_u, _a, _aR, _o, _as, _gC],
  [
    () => GuardrailUsage,
    0,
    0,
    () => GuardrailOutputContentList,
    [() => GuardrailAssessmentList, 0],
    () => GuardrailCoverage,
  ]
);
export var AsyncInvokeS3OutputDataConfig = struct(n0, _AISODC, 0, [_sU, _kKI, _bO], [0, 0, 0]);
export var AsyncInvokeSummary = struct(
  n0,
  _AIS,
  0,
  [_iA, _mA, _cRT, _st, _fM, _sT, _lMT, _eT, _oDC],
  [0, 0, 0, 0, [() => AsyncInvokeMessage, 0], 5, 5, 5, () => AsyncInvokeOutputDataConfig]
);
export var AutoToolChoice = struct(n0, _ATCu, 0, [], []);
export var BidirectionalInputPayloadPart = struct(n0, _BIPP, 8, [_b], [[() => PartBody, 0]]);
export var BidirectionalOutputPayloadPart = struct(n0, _BOPP, 8, [_b], [[() => PartBody, 0]]);
export var CachePointBlock = struct(n0, _CPB, 0, [_t], [0]);
export var Citation = struct(n0, _C, 0, [_ti, _sC, _l], [0, () => CitationSourceContentList, () => CitationLocation]);
export var CitationsConfig = struct(n0, _CC, 0, [_en], [2]);
export var CitationsContentBlock = struct(
  n0,
  _CCB,
  0,
  [_co, _ci],
  [() => CitationGeneratedContentList, () => Citations]
);
export var CitationsDelta = struct(
  n0,
  _CD,
  0,
  [_ti, _sC, _l],
  [0, () => CitationSourceContentListDelta, () => CitationLocation]
);
export var CitationSourceContentDelta = struct(n0, _CSCD, 0, [_te], [0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ConflictException
);
export var ContentBlockDeltaEvent = struct(n0, _CBDE, 0, [_d, _cBI], [[() => ContentBlockDelta, 0], 1]);
export var ContentBlockStartEvent = struct(n0, _CBSE, 0, [_sta, _cBI], [() => ContentBlockStart, 1]);
export var ContentBlockStopEvent = struct(n0, _CBSEo, 0, [_cBI], [1]);
export var ConverseMetrics = struct(n0, _CM, 0, [_lM], [1]);
export var ConverseRequest = struct(
  n0,
  _CR,
  0,
  [_mI, _me, _sy, _iC, _tC, _gCu, _aMRF, _pV, _aMRFP, _rM, _pC],
  [
    [0, 1],
    [() => Messages, 0],
    [() => SystemContentBlocks, 0],
    () => InferenceConfiguration,
    () => ToolConfiguration,
    () => GuardrailConfiguration,
    15,
    [() => PromptVariableMap, 0],
    64 | 0,
    [() => RequestMetadata, 0],
    () => PerformanceConfiguration,
  ]
);
export var ConverseResponse = struct(
  n0,
  _CRo,
  0,
  [_ou, _sR, _u, _met, _aMRFd, _tr, _pC],
  [
    [() => ConverseOutput, 0],
    0,
    () => TokenUsage,
    () => ConverseMetrics,
    15,
    [() => ConverseTrace, 0],
    () => PerformanceConfiguration,
  ]
);
export var ConverseStreamMetadataEvent = struct(
  n0,
  _CSME,
  0,
  [_u, _met, _tr, _pC],
  [() => TokenUsage, () => ConverseStreamMetrics, [() => ConverseStreamTrace, 0], () => PerformanceConfiguration]
);
export var ConverseStreamMetrics = struct(n0, _CSM, 0, [_lM], [1]);
export var ConverseStreamRequest = struct(
  n0,
  _CSR,
  0,
  [_mI, _me, _sy, _iC, _tC, _gCu, _aMRF, _pV, _aMRFP, _rM, _pC],
  [
    [0, 1],
    [() => Messages, 0],
    [() => SystemContentBlocks, 0],
    () => InferenceConfiguration,
    () => ToolConfiguration,
    () => GuardrailStreamConfiguration,
    15,
    [() => PromptVariableMap, 0],
    64 | 0,
    [() => RequestMetadata, 0],
    () => PerformanceConfiguration,
  ]
);
export var ConverseStreamResponse = struct(n0, _CSRo, 0, [_str], [[() => ConverseStreamOutput, 16]]);
export var ConverseStreamTrace = struct(
  n0,
  _CST,
  0,
  [_g, _pR],
  [[() => GuardrailTraceAssessment, 0], () => PromptRouterTrace]
);
export var ConverseTokensRequest = struct(
  n0,
  _CTR,
  0,
  [_me, _sy],
  [
    [() => Messages, 0],
    [() => SystemContentBlocks, 0],
  ]
);
export var ConverseTrace = struct(
  n0,
  _CT,
  0,
  [_g, _pR],
  [[() => GuardrailTraceAssessment, 0], () => PromptRouterTrace]
);
export var CountTokensRequest = struct(
  n0,
  _CTRo,
  0,
  [_mI, _i],
  [
    [0, 1],
    [() => CountTokensInput, 0],
  ]
);
export var CountTokensResponse = struct(n0, _CTRou, 0, [_iT], [1]);
export var DocumentBlock = struct(
  n0,
  _DB,
  0,
  [_f, _n, _s, _con, _ci],
  [0, 0, () => DocumentSource, 0, () => CitationsConfig]
);
export var DocumentCharLocation = struct(n0, _DCL, 0, [_dI, _sta, _end], [1, 1, 1]);
export var DocumentChunkLocation = struct(n0, _DCLo, 0, [_dI, _sta, _end], [1, 1, 1]);
export var DocumentPageLocation = struct(n0, _DPL, 0, [_dI, _sta, _end], [1, 1, 1]);
export var GetAsyncInvokeRequest = struct(n0, _GAIR, 0, [_iA], [[0, 1]]);
export var GetAsyncInvokeResponse = struct(
  n0,
  _GAIRe,
  0,
  [_iA, _mA, _cRT, _st, _fM, _sT, _lMT, _eT, _oDC],
  [0, 0, 0, 0, [() => AsyncInvokeMessage, 0], 5, 5, 5, () => AsyncInvokeOutputDataConfig]
);
export var GuardrailAssessment = struct(
  n0,
  _GA,
  0,
  [_tP, _cP, _wP, _sIP, _cGP, _aRP, _iM],
  [
    () => GuardrailTopicPolicyAssessment,
    () => GuardrailContentPolicyAssessment,
    () => GuardrailWordPolicyAssessment,
    () => GuardrailSensitiveInformationPolicyAssessment,
    () => GuardrailContextualGroundingPolicyAssessment,
    [() => GuardrailAutomatedReasoningPolicyAssessment, 0],
    () => GuardrailInvocationMetrics,
  ]
);
export var GuardrailAutomatedReasoningImpossibleFinding = struct(
  n0,
  _GARIF,
  0,
  [_tra, _cR, _lW],
  [
    [() => GuardrailAutomatedReasoningTranslation, 0],
    () => GuardrailAutomatedReasoningRuleList,
    [() => GuardrailAutomatedReasoningLogicWarning, 0],
  ]
);
export var GuardrailAutomatedReasoningInputTextReference = struct(
  n0,
  _GARITR,
  0,
  [_te],
  [[() => GuardrailAutomatedReasoningStatementNaturalLanguageContent, 0]]
);
export var GuardrailAutomatedReasoningInvalidFinding = struct(
  n0,
  _GARIFu,
  0,
  [_tra, _cR, _lW],
  [
    [() => GuardrailAutomatedReasoningTranslation, 0],
    () => GuardrailAutomatedReasoningRuleList,
    [() => GuardrailAutomatedReasoningLogicWarning, 0],
  ]
);
export var GuardrailAutomatedReasoningLogicWarning = struct(
  n0,
  _GARLW,
  0,
  [_t, _p, _cl],
  [0, [() => GuardrailAutomatedReasoningStatementList, 0], [() => GuardrailAutomatedReasoningStatementList, 0]]
);
export var GuardrailAutomatedReasoningNoTranslationsFinding = struct(n0, _GARNTF, 0, [], []);
export var GuardrailAutomatedReasoningPolicyAssessment = struct(
  n0,
  _GARPA,
  0,
  [_fi],
  [[() => GuardrailAutomatedReasoningFindingList, 0]]
);
export var GuardrailAutomatedReasoningRule = struct(n0, _GARR, 0, [_id, _pVA], [0, 0]);
export var GuardrailAutomatedReasoningSatisfiableFinding = struct(
  n0,
  _GARSF,
  0,
  [_tra, _cTS, _cFS, _lW],
  [
    [() => GuardrailAutomatedReasoningTranslation, 0],
    [() => GuardrailAutomatedReasoningScenario, 0],
    [() => GuardrailAutomatedReasoningScenario, 0],
    [() => GuardrailAutomatedReasoningLogicWarning, 0],
  ]
);
export var GuardrailAutomatedReasoningScenario = struct(
  n0,
  _GARS,
  0,
  [_stat],
  [[() => GuardrailAutomatedReasoningStatementList, 0]]
);
export var GuardrailAutomatedReasoningStatement = struct(
  n0,
  _GARSu,
  0,
  [_lo, _nL],
  [
    [() => GuardrailAutomatedReasoningStatementLogicContent, 0],
    [() => GuardrailAutomatedReasoningStatementNaturalLanguageContent, 0],
  ]
);
export var GuardrailAutomatedReasoningTooComplexFinding = struct(n0, _GARTCF, 0, [], []);
export var GuardrailAutomatedReasoningTranslation = struct(
  n0,
  _GART,
  0,
  [_p, _cl, _uP, _uC, _conf],
  [
    [() => GuardrailAutomatedReasoningStatementList, 0],
    [() => GuardrailAutomatedReasoningStatementList, 0],
    [() => GuardrailAutomatedReasoningInputTextReferenceList, 0],
    [() => GuardrailAutomatedReasoningInputTextReferenceList, 0],
    1,
  ]
);
export var GuardrailAutomatedReasoningTranslationAmbiguousFinding = struct(
  n0,
  _GARTAF,
  0,
  [_op, _dS],
  [
    [() => GuardrailAutomatedReasoningTranslationOptionList, 0],
    [() => GuardrailAutomatedReasoningDifferenceScenarioList, 0],
  ]
);
export var GuardrailAutomatedReasoningTranslationOption = struct(
  n0,
  _GARTO,
  0,
  [_tran],
  [[() => GuardrailAutomatedReasoningTranslationList, 0]]
);
export var GuardrailAutomatedReasoningValidFinding = struct(
  n0,
  _GARVF,
  0,
  [_tra, _cTS, _sRu, _lW],
  [
    [() => GuardrailAutomatedReasoningTranslation, 0],
    [() => GuardrailAutomatedReasoningScenario, 0],
    () => GuardrailAutomatedReasoningRuleList,
    [() => GuardrailAutomatedReasoningLogicWarning, 0],
  ]
);
export var GuardrailConfiguration = struct(n0, _GC, 0, [_gI, _gV, _tr], [0, 0, 0]);
export var GuardrailContentFilter = struct(n0, _GCF, 0, [_t, _conf, _fS, _a, _de], [0, 0, 0, 0, 2]);
export var GuardrailContentPolicyAssessment = struct(n0, _GCPA, 0, [_fil], [() => GuardrailContentFilterList]);
export var GuardrailContextualGroundingFilter = struct(n0, _GCGF, 0, [_t, _th, _sc, _a, _de], [0, 1, 1, 0, 2]);
export var GuardrailContextualGroundingPolicyAssessment = struct(
  n0,
  _GCGPA,
  0,
  [_fil],
  [() => GuardrailContextualGroundingFilters]
);
export var GuardrailConverseImageBlock = struct(n0, _GCIB, 8, [_f, _s], [0, [() => GuardrailConverseImageSource, 0]]);
export var GuardrailConverseTextBlock = struct(n0, _GCTB, 0, [_te, _q], [0, 64 | 0]);
export var GuardrailCoverage = struct(
  n0,
  _GCu,
  0,
  [_tCe, _im],
  [() => GuardrailTextCharactersCoverage, () => GuardrailImageCoverage]
);
export var GuardrailCustomWord = struct(n0, _GCW, 0, [_ma, _a, _de], [0, 0, 2]);
export var GuardrailImageBlock = struct(n0, _GIB, 8, [_f, _s], [0, [() => GuardrailImageSource, 0]]);
export var GuardrailImageCoverage = struct(n0, _GIC, 0, [_gu, _to], [1, 1]);
export var GuardrailInvocationMetrics = struct(
  n0,
  _GIM,
  0,
  [_gPL, _u, _gC],
  [1, () => GuardrailUsage, () => GuardrailCoverage]
);
export var GuardrailManagedWord = struct(n0, _GMW, 0, [_ma, _t, _a, _de], [0, 0, 0, 2]);
export var GuardrailOutputContent = struct(n0, _GOC, 0, [_te], [0]);
export var GuardrailPiiEntityFilter = struct(n0, _GPEF, 0, [_ma, _t, _a, _de], [0, 0, 0, 2]);
export var GuardrailRegexFilter = struct(n0, _GRF, 0, [_n, _ma, _r, _a, _de], [0, 0, 0, 0, 2]);
export var GuardrailSensitiveInformationPolicyAssessment = struct(
  n0,
  _GSIPA,
  0,
  [_pE, _re],
  [() => GuardrailPiiEntityFilterList, () => GuardrailRegexFilterList]
);
export var GuardrailStreamConfiguration = struct(n0, _GSC, 0, [_gI, _gV, _tr, _sPM], [0, 0, 0, 0]);
export var GuardrailTextBlock = struct(n0, _GTB, 0, [_te, _q], [0, 64 | 0]);
export var GuardrailTextCharactersCoverage = struct(n0, _GTCC, 0, [_gu, _to], [1, 1]);
export var GuardrailTopic = struct(n0, _GT, 0, [_n, _t, _a, _de], [0, 0, 0, 2]);
export var GuardrailTopicPolicyAssessment = struct(n0, _GTPA, 0, [_top], [() => GuardrailTopicList]);
export var GuardrailTraceAssessment = struct(
  n0,
  _GTA,
  0,
  [_mO, _iAn, _oA, _aR],
  [64 | 0, [() => GuardrailAssessmentMap, 0], [() => GuardrailAssessmentListMap, 0], 0]
);
export var GuardrailUsage = struct(
  n0,
  _GU,
  0,
  [_tPU, _cPU, _wPU, _sIPU, _sIPFU, _cGPU, _cPIU, _aRPU, _aRPu],
  [1, 1, 1, 1, 1, 1, 1, 1, 1]
);
export var GuardrailWordPolicyAssessment = struct(
  n0,
  _GWPA,
  0,
  [_cW, _mWL],
  [() => GuardrailCustomWordList, () => GuardrailManagedWordList]
);
export var ImageBlock = struct(n0, _IB, 0, [_f, _s], [0, () => ImageSource]);
export var InferenceConfiguration = struct(n0, _IC, 0, [_mT, _tem, _tPo, _sS], [1, 1, 1, 64 | 0]);
export var InternalServerException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServerException
);
export var InvokeModelRequest = struct(
  n0,
  _IMR,
  0,
  [_bo, _cT, _ac, _mI, _tr, _gI, _gV, _pCL],
  [
    [() => Body, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _A,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _XABT,
      },
    ],
    [
      0,
      {
        [_hH]: _XABG,
      },
    ],
    [
      0,
      {
        [_hH]: _XABG_,
      },
    ],
    [
      0,
      {
        [_hH]: _XABPL,
      },
    ],
  ]
);
export var InvokeModelResponse = struct(
  n0,
  _IMRn,
  0,
  [_bo, _cT, _pCL],
  [
    [() => Body, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _XABPL,
      },
    ],
  ]
);
export var InvokeModelTokensRequest = struct(n0, _IMTR, 0, [_bo], [[() => Body, 0]]);
export var InvokeModelWithBidirectionalStreamRequest = struct(
  n0,
  _IMWBSR,
  0,
  [_mI, _bo],
  [
    [0, 1],
    [() => InvokeModelWithBidirectionalStreamInput, 16],
  ]
);
export var InvokeModelWithBidirectionalStreamResponse = struct(
  n0,
  _IMWBSRn,
  0,
  [_bo],
  [[() => InvokeModelWithBidirectionalStreamOutput, 16]]
);
export var InvokeModelWithResponseStreamRequest = struct(
  n0,
  _IMWRSR,
  0,
  [_bo, _cT, _ac, _mI, _tr, _gI, _gV, _pCL],
  [
    [() => Body, 16],
    [
      0,
      {
        [_hH]: _CT_,
      },
    ],
    [
      0,
      {
        [_hH]: _XABA,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hH]: _XABT,
      },
    ],
    [
      0,
      {
        [_hH]: _XABG,
      },
    ],
    [
      0,
      {
        [_hH]: _XABG_,
      },
    ],
    [
      0,
      {
        [_hH]: _XABPL,
      },
    ],
  ]
);
export var InvokeModelWithResponseStreamResponse = struct(
  n0,
  _IMWRSRn,
  0,
  [_bo, _cT, _pCL],
  [
    [() => ResponseStream, 16],
    [
      0,
      {
        [_hH]: _XABCT,
      },
    ],
    [
      0,
      {
        [_hH]: _XABPL,
      },
    ],
  ]
);
export var ListAsyncInvokesRequest = struct(
  n0,
  _LAIR,
  0,
  [_sTA, _sTB, _sE, _mR, _nT, _sB, _sO],
  [
    [
      5,
      {
        [_hQ]: _sTA,
      },
    ],
    [
      5,
      {
        [_hQ]: _sTB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sE,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
      },
    ],
  ]
);
export var ListAsyncInvokesResponse = struct(n0, _LAIRi, 0, [_nT, _aIS], [0, [() => AsyncInvokeSummaries, 0]]);
export var Message = struct(n0, _M, 0, [_ro, _co], [0, [() => ContentBlocks, 0]]);
export var MessageStartEvent = struct(n0, _MSE, 0, [_ro], [0]);
export var MessageStopEvent = struct(n0, _MSEe, 0, [_sR, _aMRFd], [0, 15]);
export var ModelErrorException = error(
  n0,
  _MEE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_m, _oSC, _rN],
  [0, 1, 0],

  __ModelErrorException
);
export var ModelNotReadyException = error(
  n0,
  _MNRE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ModelNotReadyException
);
export var ModelStreamErrorException = error(
  n0,
  _MSEE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_m, _oSC, _oM],
  [0, 1, 0],

  __ModelStreamErrorException
);
export var ModelTimeoutException = error(
  n0,
  _MTE,
  {
    [_e]: _c,
    [_hE]: 408,
  },
  [_m],
  [0],

  __ModelTimeoutException
);
export var PayloadPart = struct(n0, _PP, 8, [_b], [[() => PartBody, 0]]);
export var PerformanceConfiguration = struct(n0, _PC, 0, [_la], [0]);
export var PromptRouterTrace = struct(n0, _PRT, 0, [_iMI], [0]);
export var ReasoningTextBlock = struct(n0, _RTB, 8, [_te, _si], [0, 0]);
export var ResourceNotFoundException = error(
  n0,
  _RNFE,
  {
    [_e]: _c,
    [_hE]: 404,
  },
  [_m],
  [0],

  __ResourceNotFoundException
);
export var S3Location = struct(n0, _SL, 0, [_ur, _bO], [0, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var ServiceUnavailableException = error(
  n0,
  _SUE,
  {
    [_e]: _se,
    [_hE]: 503,
  },
  [_m],
  [0],

  __ServiceUnavailableException
);
export var SpecificToolChoice = struct(n0, _STC, 0, [_n], [0]);
export var StartAsyncInvokeRequest = struct(
  n0,
  _SAIR,
  0,
  [_cRT, _mI, _mIo, _oDC, _ta],
  [[0, 4], 0, [() => ModelInputPayload, 0], () => AsyncInvokeOutputDataConfig, () => TagList]
);
export var StartAsyncInvokeResponse = struct(n0, _SAIRt, 0, [_iA], [0]);
export var Tag = struct(n0, _T, 0, [_k, _v], [0, 0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var TokenUsage = struct(n0, _TU, 0, [_iT, _oT, _tT, _cRIT, _cWIT], [1, 1, 1, 1, 1]);
export var ToolConfiguration = struct(n0, _TC, 0, [_too, _tCo], [() => Tools, () => ToolChoice]);
export var ToolResultBlock = struct(n0, _TRB, 0, [_tUI, _co, _st], [0, () => ToolResultContentBlocks, 0]);
export var ToolSpecification = struct(n0, _TS, 0, [_n, _des, _iS], [0, 0, () => ToolInputSchema]);
export var ToolUseBlock = struct(n0, _TUB, 0, [_tUI, _n, _i], [0, 0, 15]);
export var ToolUseBlockDelta = struct(n0, _TUBD, 0, [_i], [0]);
export var ToolUseBlockStart = struct(n0, _TUBS, 0, [_tUI, _n], [0, 0]);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __ValidationException
);
export var VideoBlock = struct(n0, _VB, 0, [_f, _s], [0, () => VideoSource]);
export var Unit = "unit" as const;

export var AdditionalModelResponseFieldPaths = 64 | 0;

export var AsyncInvokeSummaries = list(n0, _AISs, 0, [() => AsyncInvokeSummary, 0]);
export var CitationGeneratedContentList = list(n0, _CGCL, 0, () => CitationGeneratedContent);
export var Citations = list(n0, _Ci, 0, () => Citation);
export var CitationSourceContentList = list(n0, _CSCL, 0, () => CitationSourceContent);
export var CitationSourceContentListDelta = list(n0, _CSCLD, 0, () => CitationSourceContentDelta);
export var ContentBlocks = list(n0, _CB, 0, [() => ContentBlock, 0]);
export var DocumentContentBlocks = list(n0, _DCB, 0, () => DocumentContentBlock);
export var GuardrailAssessmentList = list(n0, _GAL, 0, [() => GuardrailAssessment, 0]);
export var GuardrailAutomatedReasoningDifferenceScenarioList = list(n0, _GARDSL, 0, [
  () => GuardrailAutomatedReasoningScenario,
  0,
]);
export var GuardrailAutomatedReasoningFindingList = list(n0, _GARFL, 0, [() => GuardrailAutomatedReasoningFinding, 0]);
export var GuardrailAutomatedReasoningInputTextReferenceList = list(n0, _GARITRL, 0, [
  () => GuardrailAutomatedReasoningInputTextReference,
  0,
]);
export var GuardrailAutomatedReasoningRuleList = list(n0, _GARRL, 0, () => GuardrailAutomatedReasoningRule);
export var GuardrailAutomatedReasoningStatementList = list(n0, _GARSL, 0, [
  () => GuardrailAutomatedReasoningStatement,
  0,
]);
export var GuardrailAutomatedReasoningTranslationList = list(n0, _GARTL, 0, [
  () => GuardrailAutomatedReasoningTranslation,
  0,
]);
export var GuardrailAutomatedReasoningTranslationOptionList = list(n0, _GARTOL, 0, [
  () => GuardrailAutomatedReasoningTranslationOption,
  0,
]);
export var GuardrailContentBlockList = list(n0, _GCBL, 0, [() => GuardrailContentBlock, 0]);
export var GuardrailContentFilterList = list(n0, _GCFL, 0, () => GuardrailContentFilter);
export var GuardrailContentQualifierList = 64 | 0;

export var GuardrailContextualGroundingFilters = list(n0, _GCGFu, 0, () => GuardrailContextualGroundingFilter);
export var GuardrailConverseContentQualifierList = 64 | 0;

export var GuardrailCustomWordList = list(n0, _GCWL, 0, () => GuardrailCustomWord);
export var GuardrailManagedWordList = list(n0, _GMWL, 0, () => GuardrailManagedWord);
export var GuardrailOutputContentList = list(n0, _GOCL, 0, () => GuardrailOutputContent);
export var GuardrailPiiEntityFilterList = list(n0, _GPEFL, 0, () => GuardrailPiiEntityFilter);
export var GuardrailRegexFilterList = list(n0, _GRFL, 0, () => GuardrailRegexFilter);
export var GuardrailTopicList = list(n0, _GTL, 0, () => GuardrailTopic);
export var Messages = list(n0, _Me, 0, [() => Message, 0]);
export var ModelOutputs = 64 | 0;

export var NonEmptyStringList = 64 | 0;

export var SystemContentBlocks = list(n0, _SCB, 0, [() => SystemContentBlock, 0]);
export var TagList = list(n0, _TL, 0, () => Tag);
export var ToolResultContentBlocks = list(n0, _TRCB, 0, () => ToolResultContentBlock);
export var Tools = list(n0, _To, 0, () => Tool);
export var GuardrailAssessmentListMap = map(n0, _GALM, 0, [0, 0], [() => GuardrailAssessmentList, 0]);
export var GuardrailAssessmentMap = map(n0, _GAM, 0, [0, 0], [() => GuardrailAssessment, 0]);
export var PromptVariableMap = map(n0, _PVM, 8, 0, () => PromptVariableValues);
export var RequestMetadata = map(n0, _RM, 8, 0, 0);
export var AsyncInvokeOutputDataConfig = uni(n0, _AIODC, 0, [_sODC], [() => AsyncInvokeS3OutputDataConfig]);
export var CitationGeneratedContent = uni(n0, _CGC, 0, [_te], [0]);
export var CitationLocation = uni(
  n0,
  _CL,
  0,
  [_dC, _dP, _dCo],
  [() => DocumentCharLocation, () => DocumentPageLocation, () => DocumentChunkLocation]
);
export var CitationSourceContent = uni(n0, _CSC, 0, [_te], [0]);
export var ContentBlock = uni(
  n0,
  _CBo,
  0,
  [_te, _ima, _do, _vi, _tU, _tR, _gCua, _cPa, _rC, _cC],
  [
    0,
    () => ImageBlock,
    () => DocumentBlock,
    () => VideoBlock,
    () => ToolUseBlock,
    () => ToolResultBlock,
    [() => GuardrailConverseContentBlock, 0],
    () => CachePointBlock,
    [() => ReasoningContentBlock, 0],
    () => CitationsContentBlock,
  ]
);
export var ContentBlockDelta = uni(
  n0,
  _CBD,
  0,
  [_te, _tU, _rC, _cit],
  [0, () => ToolUseBlockDelta, [() => ReasoningContentBlockDelta, 0], () => CitationsDelta]
);
export var ContentBlockStart = uni(n0, _CBS, 0, [_tU], [() => ToolUseBlockStart]);
export var ConverseOutput = uni(n0, _CO, 0, [_m], [[() => Message, 0]]);
export var ConverseStreamOutput = uni(
  n0,
  _CSO,
  {
    [_stre]: 1,
  },
  [_mS, _cBS, _cBD, _cBSo, _mSe, _meta, _iSE, _mSEE, _vE, _tE, _sUE],
  [
    () => MessageStartEvent,
    () => ContentBlockStartEvent,
    [() => ContentBlockDeltaEvent, 0],
    () => ContentBlockStopEvent,
    () => MessageStopEvent,
    [() => ConverseStreamMetadataEvent, 0],
    [() => InternalServerException, 0],
    [() => ModelStreamErrorException, 0],
    [() => ValidationException, 0],
    [() => ThrottlingException, 0],
    [() => ServiceUnavailableException, 0],
  ]
);
export var CountTokensInput = uni(
  n0,
  _CTI,
  0,
  [_iMn, _conv],
  [
    [() => InvokeModelTokensRequest, 0],
    [() => ConverseTokensRequest, 0],
  ]
);
export var DocumentContentBlock = uni(n0, _DCBo, 0, [_te], [0]);
export var DocumentSource = uni(
  n0,
  _DS,
  0,
  [_b, _sL, _te, _co],
  [21, () => S3Location, 0, () => DocumentContentBlocks]
);
export var GuardrailAutomatedReasoningFinding = uni(
  n0,
  _GARF,
  0,
  [_va, _in, _sa, _imp, _tA, _tCoo, _nTo],
  [
    [() => GuardrailAutomatedReasoningValidFinding, 0],
    [() => GuardrailAutomatedReasoningInvalidFinding, 0],
    [() => GuardrailAutomatedReasoningSatisfiableFinding, 0],
    [() => GuardrailAutomatedReasoningImpossibleFinding, 0],
    [() => GuardrailAutomatedReasoningTranslationAmbiguousFinding, 0],
    () => GuardrailAutomatedReasoningTooComplexFinding,
    () => GuardrailAutomatedReasoningNoTranslationsFinding,
  ]
);
export var GuardrailContentBlock = uni(
  n0,
  _GCB,
  0,
  [_te, _ima],
  [() => GuardrailTextBlock, [() => GuardrailImageBlock, 0]]
);
export var GuardrailConverseContentBlock = uni(
  n0,
  _GCCB,
  0,
  [_te, _ima],
  [() => GuardrailConverseTextBlock, [() => GuardrailConverseImageBlock, 0]]
);
export var GuardrailConverseImageSource = uni(n0, _GCIS, 8, [_b], [21]);
export var GuardrailImageSource = uni(n0, _GIS, 8, [_b], [21]);
export var ImageSource = uni(n0, _IS, 0, [_b, _sL], [21, () => S3Location]);
export var InvokeModelWithBidirectionalStreamInput = uni(
  n0,
  _IMWBSI,
  {
    [_stre]: 1,
  },
  [_ch],
  [[() => BidirectionalInputPayloadPart, 0]]
);
export var InvokeModelWithBidirectionalStreamOutput = uni(
  n0,
  _IMWBSO,
  {
    [_stre]: 1,
  },
  [_ch, _iSE, _mSEE, _vE, _tE, _mTE, _sUE],
  [
    [() => BidirectionalOutputPayloadPart, 0],
    [() => InternalServerException, 0],
    [() => ModelStreamErrorException, 0],
    [() => ValidationException, 0],
    [() => ThrottlingException, 0],
    [() => ModelTimeoutException, 0],
    [() => ServiceUnavailableException, 0],
  ]
);
export var PromptVariableValues = uni(n0, _PVV, 0, [_te], [0]);
export var ReasoningContentBlock = uni(n0, _RCB, 8, [_rT, _rCe], [[() => ReasoningTextBlock, 0], 21]);
export var ReasoningContentBlockDelta = uni(n0, _RCBD, 8, [_te, _rCe, _si], [0, 21, 0]);
export var ResponseStream = uni(
  n0,
  _RS,
  {
    [_stre]: 1,
  },
  [_ch, _iSE, _mSEE, _vE, _tE, _mTE, _sUE],
  [
    [() => PayloadPart, 0],
    [() => InternalServerException, 0],
    [() => ModelStreamErrorException, 0],
    [() => ValidationException, 0],
    [() => ThrottlingException, 0],
    [() => ModelTimeoutException, 0],
    [() => ServiceUnavailableException, 0],
  ]
);
export var SystemContentBlock = uni(
  n0,
  _SCBy,
  0,
  [_te, _gCua, _cPa],
  [0, [() => GuardrailConverseContentBlock, 0], () => CachePointBlock]
);
export var Tool = uni(n0, _Too, 0, [_tS, _cPa], [() => ToolSpecification, () => CachePointBlock]);
export var ToolChoice = uni(
  n0,
  _TCo,
  0,
  [_au, _an, _tool],
  [() => AutoToolChoice, () => AnyToolChoice, () => SpecificToolChoice]
);
export var ToolInputSchema = uni(n0, _TIS, 0, [_j], [15]);
export var ToolResultContentBlock = uni(
  n0,
  _TRCBo,
  0,
  [_j, _te, _ima, _do, _vi],
  [15, 0, () => ImageBlock, () => DocumentBlock, () => VideoBlock]
);
export var VideoSource = uni(n0, _VS, 0, [_b, _sL], [21, () => S3Location]);
export var ApplyGuardrail = op(
  n0,
  _AG,
  {
    [_h]: ["POST", "/guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply", 200],
  },
  () => ApplyGuardrailRequest,
  () => ApplyGuardrailResponse
);
export var Converse = op(
  n0,
  _Co,
  {
    [_h]: ["POST", "/model/{modelId}/converse", 200],
  },
  () => ConverseRequest,
  () => ConverseResponse
);
export var ConverseStream = op(
  n0,
  _CS,
  {
    [_h]: ["POST", "/model/{modelId}/converse-stream", 200],
  },
  () => ConverseStreamRequest,
  () => ConverseStreamResponse
);
export var CountTokens = op(
  n0,
  _CTo,
  {
    [_h]: ["POST", "/model/{modelId}/count-tokens", 200],
  },
  () => CountTokensRequest,
  () => CountTokensResponse
);
export var GetAsyncInvoke = op(
  n0,
  _GAI,
  {
    [_h]: ["GET", "/async-invoke/{invocationArn}", 200],
  },
  () => GetAsyncInvokeRequest,
  () => GetAsyncInvokeResponse
);
export var InvokeModel = op(
  n0,
  _IM,
  {
    [_h]: ["POST", "/model/{modelId}/invoke", 200],
  },
  () => InvokeModelRequest,
  () => InvokeModelResponse
);
export var InvokeModelWithBidirectionalStream = op(
  n0,
  _IMWBS,
  {
    [_h]: ["POST", "/model/{modelId}/invoke-with-bidirectional-stream", 200],
  },
  () => InvokeModelWithBidirectionalStreamRequest,
  () => InvokeModelWithBidirectionalStreamResponse
);
export var InvokeModelWithResponseStream = op(
  n0,
  _IMWRS,
  {
    [_h]: ["POST", "/model/{modelId}/invoke-with-response-stream", 200],
  },
  () => InvokeModelWithResponseStreamRequest,
  () => InvokeModelWithResponseStreamResponse
);
export var ListAsyncInvokes = op(
  n0,
  _LAI,
  {
    [_h]: ["GET", "/async-invoke", 200],
  },
  () => ListAsyncInvokesRequest,
  () => ListAsyncInvokesResponse
);
export var StartAsyncInvoke = op(
  n0,
  _SAI,
  {
    [_h]: ["POST", "/async-invoke", 200],
  },
  () => StartAsyncInvokeRequest,
  () => StartAsyncInvokeResponse
);
