// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _aA,
  _aAP,
  _AC,
  _aC,
  _ac,
  _ACL,
  _aES,
  _aF,
  _aFSL,
  _ag,
  _aI,
  _aIl,
  _aIN,
  _aIu,
  _aMV,
  _aO,
  _aP,
  _aSN,
  _aTg,
  _ATR,
  _ATS,
  _aVDM,
  _bAI,
  _bI,
  _bKBA,
  _BKSC,
  _bKSC,
  _BKSERF,
  _bMC,
  _bR,
  _bRAVI,
  _bV,
  _C,
  _c,
  _CB,
  _cB,
  _CBo,
  _cC,
  _cCa,
  _cDT,
  _cET,
  _cH,
  _ch,
  _CI,
  _cI,
  _CIR,
  _CIRr,
  _CLICR,
  _CLICRI,
  _cLR,
  _CLRD,
  _CLSRR,
  _CLSRRI,
  _CLTR,
  _cLTR,
  _CLTRFB,
  _cLTRFB,
  _CLTRI,
  _CLTRIL,
  _cNS,
  _cNSa,
  _co,
  _con,
  _cR,
  _cRa,
  _cRo,
  _cRon,
  _CS,
  _CSR,
  _CSr,
  _CSRr,
  _cST,
  _cT,
  _DA,
  _dAi,
  _dAT,
  _dB,
  _DCB,
  _dCe,
  _dCH,
  _DCHIS,
  _DCHS,
  _dE,
  _de,
  _DIesc,
  _DIRescr,
  _DIRescri,
  _dIS,
  _dNS,
  _dR,
  _DS,
  _DSC,
  _dSC,
  _DSes,
  _DSRe,
  _DSRes,
  _DTSDR,
  _DTSDRR,
  _DTSDRRe,
  _dV,
  _dVL,
  _dVS,
  _e,
  _eAP,
  _eCH,
  _eCHI,
  _ECHIS,
  _eCr,
  _eD,
  _eDT,
  _EED,
  _eM,
  _eO,
  _eR,
  _ERF,
  _eRF,
  _eS,
  _eTER,
  _eTERC,
  _ex,
  _exp,
  _fC,
  _fCH,
  _FCHS,
  _fi,
  _fIS,
  _fNS,
  _fR,
  _fRa,
  _FSRS,
  _FURS,
  _FUS,
  _fUS,
  _h,
  _iCn,
  _iCR,
  _ICS,
  _iCS,
  _ICSn,
  _iCSn,
  _ICTR,
  _iCTR,
  _ICTRI,
  _ICTRIC,
  _ICTRIL,
  _iD,
  _iF,
  _iI,
  _iLn,
  _ILSRTR,
  _iLSRTR,
  _ILSRTRI,
  _ILSRTRIL,
  _iMR,
  _iMRC,
  _iN,
  _iNn,
  _inp,
  _int,
  _IO,
  _iR,
  _iRC,
  _iRS,
  _IRSn,
  _iSnt,
  _ISSS,
  _iT,
  _it,
  _iV,
  _KC,
  _kC,
  _kI,
  _lI,
  _LTERI,
  _LTERIR,
  _LTERIRi,
  _LTSRis,
  _LTSRR,
  _LTSRRi,
  _LUAD,
  _LUADR,
  _LUADRi,
  _lUDT,
  _lUDTa,
  _mG,
  _mod,
  _mRa,
  _mRax,
  _mTC,
  _MVS,
  _mVS,
  _n,
  _nS,
  _nTe,
  _OC,
  _oC,
  _oCp,
  _or,
  _OS,
  _oS,
  _oST,
  _oT,
  _OTR,
  _oTR,
  _OTRI,
  _OTRIL,
  _pCHS,
  _PDCHIS,
  _PFSS,
  _pFSS,
  _ph,
  _pIS,
  _pri,
  _pS,
  _QAIC,
  _qAIC,
  _QAKC,
  _qF,
  _qFS,
  _qFSE,
  _QICAC,
  _qICAC,
  _QICIC,
  _qICIC,
  _rAeq,
  _rC,
  _re,
  _rFB,
  _RH,
  _rH,
  _RHD,
  _RHV,
  _rHV,
  _RHVL,
  _rN,
  _RS,
  _rTF,
  _S,
  _sA,
  _sBo,
  _sC,
  _sCl,
  _SCS,
  _sCS,
  _sDl,
  _sDT,
  _SDV,
  _SDVL,
  _SDVS,
  _sFIS,
  _sH,
  _sh,
  _SHIM,
  _SHSM,
  _sIe,
  _sIl,
  _sl,
  _sMR,
  _sMRC,
  _sN,
  _sNM,
  _sNS,
  _SP,
  _sP,
  _SPL,
  _sRR,
  _SRS,
  _sRS,
  _sRSl,
  _sRt,
  _SRTRI,
  _SRTRIC,
  _SRTRIl,
  _sRu,
  _sS,
  _sSe,
  _sSH,
  _sSlo,
  _SSS,
  _sSS,
  _SSSM,
  _SSVES,
  _sTE,
  _sTI,
  _sTR,
  _sTRC,
  _sU,
  _SVES,
  _SVl,
  _SVlo,
  _SVO,
  _SVOM,
  _sWR,
  _SWRS,
  _t,
  _tar,
  _tC,
  _tEI,
  _tER,
  _TERFB,
  _TERI,
  _tI,
  _tIS,
  _tN,
  _tNS,
  _tR,
  _tRC,
  _tRu,
  _TS,
  _TSDE,
  _tSDRI,
  _tSDROU,
  _tSDRS,
  _tSDTE,
  _tSI,
  _TSIDI,
  _TSIDL,
  _tSR,
  _TSSDI,
  _TSSDL,
  _TSTR,
  _TSTRe,
  _TSTRL,
  _tSu,
  _ty,
  _u,
  _UAIS,
  _UBRt,
  _UBRtt,
  _UDSB,
  _UI,
  _uI,
  _UIR,
  _UIRp,
  _UIS,
  _ULTR,
  _uLTR,
  _ULTRI,
  _ULTRIL,
  _uR,
  _uRI,
  _US,
  _us,
  _USp,
  _USR,
  _USRp,
  _USt,
  _uT,
  _ut,
  _UTIO,
  _UTIS,
  _UTOS,
  _UTR,
  _UTS,
  _UTSO,
  _UTSOL,
  _UTSOM,
  _uTt,
  _uUt,
  _v,
  _va,
  _vES,
  _WACS,
  _wACS,
  _wR,
  n0,
} from "./schemas_0";
import { BedrockModelSpecification } from "./schemas_5_Bot";
import { AnalyticsUtteranceFilters } from "./schemas_10_List";
import { ImageResponseCard, MessageGroupsList, PromptSpecification } from "./schemas_12_Slot";
import { InputContextsList, OutputContextsList } from "./schemas_24_Intent";
import { SampleUtterancesList } from "./schemas_25_Slot";
import { TestSetDiscrepancyReportResourceTarget } from "./schemas_31_Discrepancy";

/* eslint no-var: 0 */

export var ActiveContext = struct(n0, _AC, 0, [_n], [0]);
export var AgentTurnResult = struct(
  n0,
  _ATR,
  0,
  [_eAP, _aAP, _eD, _aES, _aI],
  [0, 0, () => ExecutionErrorDetails, 0, 0]
);
export var AgentTurnSpecification = struct(n0, _ATS, 0, [_aP], [0]);
export var BedrockKnowledgeStoreConfiguration = struct(
  n0,
  _BKSC,
  0,
  [_bKBA, _eR, _eRF],
  [0, 2, () => BedrockKnowledgeStoreExactResponseFields]
);
export var BedrockKnowledgeStoreExactResponseFields = struct(n0, _BKSERF, 0, [_aF], [0]);
export var Condition = struct(n0, _C, 0, [_eS], [0]);
export var ConditionalBranch = struct(
  n0,
  _CB,
  0,
  [_n, _c, _nS, _re],
  [0, () => Condition, () => DialogState, () => ResponseSpecification]
);
export var ConditionalSpecification = struct(
  n0,
  _CS,
  0,
  [_ac, _cB, _dB],
  [2, () => ConditionalBranches, () => DefaultConditionalBranch]
);
export var ConversationLevelIntentClassificationResultItem = struct(n0, _CLICRI, 0, [_iN, _mRa], [0, 0]);
export var ConversationLevelResultDetail = struct(n0, _CLRD, 0, [_eTER, _sTR], [0, 0]);
export var ConversationLevelSlotResolutionResultItem = struct(n0, _CLSRRI, 0, [_iN, _sN, _mRa], [0, 0, 0]);
export var ConversationLevelTestResultItem = struct(
  n0,
  _CLTRI,
  0,
  [_cI, _eTER, _sTR, _iCR, _sRR],
  [0, 0, 0, () => ConversationLevelIntentClassificationResults, () => ConversationLevelSlotResolutionResults]
);
export var ConversationLevelTestResults = struct(n0, _CLTR, 0, [_it], [() => ConversationLevelTestResultItemList]);
export var ConversationLevelTestResultsFilterBy = struct(n0, _CLTRFB, 0, [_eTER], [0]);
export var CreateIntentRequest = struct(
  n0,
  _CIR,
  0,
  [_iN, _de, _pIS, _sU, _dCH, _fCH, _iCS, _iCSn, _iCn, _oC, _kC, _bI, _bV, _lI, _iRS, _qAIC, _qICIC],
  [
    0,
    0,
    0,
    () => SampleUtterancesList,
    () => DialogCodeHookSettings,
    () => FulfillmentCodeHookSettings,
    () => IntentConfirmationSetting,
    () => IntentClosingSetting,
    () => InputContextsList,
    () => OutputContextsList,
    () => KendraConfiguration,
    [0, 1],
    [0, 1],
    [0, 1],
    () => InitialResponseSetting,
    () => QnAIntentConfiguration,
    () => QInConnectIntentConfiguration,
  ]
);
export var CreateIntentResponse = struct(
  n0,
  _CIRr,
  0,
  [_iI, _iN, _de, _pIS, _sU, _dCH, _fCH, _iCS, _iCSn, _iCn, _oC, _kC, _bI, _bV, _lI, _cDT, _iRS, _qAIC, _qICIC],
  [
    0,
    0,
    0,
    0,
    () => SampleUtterancesList,
    () => DialogCodeHookSettings,
    () => FulfillmentCodeHookSettings,
    () => IntentConfirmationSetting,
    () => IntentClosingSetting,
    () => InputContextsList,
    () => OutputContextsList,
    () => KendraConfiguration,
    0,
    0,
    0,
    4,
    () => InitialResponseSetting,
    () => QnAIntentConfiguration,
    () => QInConnectIntentConfiguration,
  ]
);
export var CreateSlotRequest = struct(
  n0,
  _CSR,
  0,
  [_sN, _de, _sTI, _vES, _oS, _bI, _bV, _lI, _iI, _mVS, _sSS],
  [
    0,
    0,
    0,
    () => SlotValueElicitationSetting,
    () => ObfuscationSetting,
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    () => MultipleValuesSetting,
    () => SubSlotSetting,
  ]
);
export var CreateSlotResponse = struct(
  n0,
  _CSRr,
  0,
  [_sIl, _sN, _de, _sTI, _vES, _oS, _bI, _bV, _lI, _iI, _cDT, _mVS, _sSS],
  [
    0,
    0,
    0,
    0,
    () => SlotValueElicitationSetting,
    () => ObfuscationSetting,
    0,
    0,
    0,
    0,
    4,
    () => MultipleValuesSetting,
    () => SubSlotSetting,
  ]
);
export var DataSourceConfiguration = struct(
  n0,
  _DSC,
  0,
  [_oCp, _kC, _bKSC],
  [() => OpensearchConfiguration, () => QnAKendraConfiguration, () => BedrockKnowledgeStoreConfiguration]
);
export var DefaultConditionalBranch = struct(n0, _DCB, 0, [_nS, _re], [() => DialogState, () => ResponseSpecification]);
export var DescribeIntentRequest = struct(
  n0,
  _DIRescr,
  0,
  [_iI, _bI, _bV, _lI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeIntentResponse = struct(
  n0,
  _DIRescri,
  0,
  [
    _iI,
    _iN,
    _de,
    _pIS,
    _sU,
    _dCH,
    _fCH,
    _sP,
    _iCS,
    _iCSn,
    _iCn,
    _oC,
    _kC,
    _bI,
    _bV,
    _lI,
    _cDT,
    _lUDT,
    _iRS,
    _qAIC,
    _qICIC,
  ],
  [
    0,
    0,
    0,
    0,
    () => SampleUtterancesList,
    () => DialogCodeHookSettings,
    () => FulfillmentCodeHookSettings,
    () => SlotPrioritiesList,
    () => IntentConfirmationSetting,
    () => IntentClosingSetting,
    () => InputContextsList,
    () => OutputContextsList,
    () => KendraConfiguration,
    0,
    0,
    0,
    4,
    4,
    () => InitialResponseSetting,
    () => QnAIntentConfiguration,
    () => QInConnectIntentConfiguration,
  ]
);
export var DescribeSlotRequest = struct(
  n0,
  _DSRe,
  0,
  [_sIl, _bI, _bV, _lI, _iI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeSlotResponse = struct(
  n0,
  _DSRes,
  0,
  [_sIl, _sN, _de, _sTI, _vES, _oS, _bI, _bV, _lI, _iI, _cDT, _lUDT, _mVS, _sSS],
  [
    0,
    0,
    0,
    0,
    () => SlotValueElicitationSetting,
    () => ObfuscationSetting,
    0,
    0,
    0,
    0,
    4,
    4,
    () => MultipleValuesSetting,
    () => SubSlotSetting,
  ]
);
export var DescribeTestSetDiscrepancyReportRequest = struct(n0, _DTSDRR, 0, [_tSDRI], [[0, 1]]);
export var DescribeTestSetDiscrepancyReportResponse = struct(
  n0,
  _DTSDRRe,
  0,
  [_tSDRI, _tSI, _cDT, _tar, _tSDRS, _lUDTa, _tSDTE, _tSDROU, _fR],
  [0, 0, 4, () => TestSetDiscrepancyReportResourceTarget, 0, 4, () => TestSetDiscrepancyErrors, 0, 64 | 0]
);
export var DialogAction = struct(n0, _DA, 0, [_ty, _sTE, _sNM], [0, 0, 2]);
export var DialogCodeHookInvocationSetting = struct(
  n0,
  _DCHIS,
  0,
  [_eCHI, _ac, _iLn, _pCHS],
  [2, 2, 0, () => PostDialogCodeHookInvocationSpecification]
);
export var DialogCodeHookSettings = struct(n0, _DCHS, 0, [_e], [2]);
export var DialogState = struct(n0, _DS, 0, [_dAi, _int, _sA], [() => DialogAction, () => IntentOverride, 128 | 0]);
export var ElicitationCodeHookInvocationSetting = struct(n0, _ECHIS, 0, [_eCHI, _iLn], [2, 0]);
export var ExactResponseFields = struct(n0, _ERF, 0, [_qF, _aF], [0, 0]);
export var ExecutionErrorDetails = struct(n0, _EED, 0, [_eCr, _eM], [0, 0]);
export var FulfillmentCodeHookSettings = struct(
  n0,
  _FCHS,
  0,
  [_e, _pFSS, _fUS, _ac],
  [2, () => PostFulfillmentStatusSpecification, () => FulfillmentUpdatesSpecification, 2]
);
export var FulfillmentStartResponseSpecification = struct(
  n0,
  _FSRS,
  0,
  [_dIS, _mG, _aIl],
  [1, () => MessageGroupsList, 2]
);
export var FulfillmentUpdateResponseSpecification = struct(
  n0,
  _FURS,
  0,
  [_fIS, _mG, _aIl],
  [1, () => MessageGroupsList, 2]
);
export var FulfillmentUpdatesSpecification = struct(
  n0,
  _FUS,
  0,
  [_ac, _sRt, _uR, _tIS],
  [2, () => FulfillmentStartResponseSpecification, () => FulfillmentUpdateResponseSpecification, 1]
);
export var InitialResponseSetting = struct(
  n0,
  _IRSn,
  0,
  [_iR, _nS, _co, _cH],
  [
    () => ResponseSpecification,
    () => DialogState,
    () => ConditionalSpecification,
    () => DialogCodeHookInvocationSetting,
  ]
);
export var InputSessionStateSpecification = struct(
  n0,
  _ISSS,
  0,
  [_sA, _aC, _rH],
  [128 | 0, () => ActiveContextList, () => RuntimeHints]
);
export var IntentClassificationTestResultItem = struct(
  n0,
  _ICTRI,
  0,
  [_iN, _mTC, _rC],
  [0, 2, () => IntentClassificationTestResultItemCounts]
);
export var IntentClassificationTestResultItemCounts = struct(
  n0,
  _ICTRIC,
  0,
  [_tRC, _sTRC, _iMRC],
  [1, 128 | 1, 128 | 1]
);
export var IntentClassificationTestResults = struct(
  n0,
  _ICTR,
  0,
  [_it],
  [() => IntentClassificationTestResultItemList]
);
export var IntentClosingSetting = struct(
  n0,
  _ICS,
  0,
  [_cR, _ac, _nS, _co],
  [() => ResponseSpecification, 2, () => DialogState, () => ConditionalSpecification]
);
export var IntentConfirmationSetting = struct(
  n0,
  _ICSn,
  0,
  [_pS, _dR, _ac, _cRo, _cNS, _cC, _dNS, _dCe, _fRa, _fNS, _fC, _cH, _eCH],
  [
    () => PromptSpecification,
    () => ResponseSpecification,
    2,
    () => ResponseSpecification,
    () => DialogState,
    () => ConditionalSpecification,
    () => DialogState,
    () => ConditionalSpecification,
    () => ResponseSpecification,
    () => DialogState,
    () => ConditionalSpecification,
    () => DialogCodeHookInvocationSetting,
    () => ElicitationCodeHookInvocationSetting,
  ]
);
export var IntentLevelSlotResolutionTestResultItem = struct(
  n0,
  _ILSRTRI,
  0,
  [_iN, _mTC, _sRR],
  [0, 2, () => SlotResolutionTestResultItems]
);
export var IntentLevelSlotResolutionTestResults = struct(
  n0,
  _ILSRTR,
  0,
  [_it],
  [() => IntentLevelSlotResolutionTestResultItemList]
);
export var IntentOverride = struct(n0, _IO, 0, [_n, _sl], [0, () => SlotValueOverrideMap]);
export var KendraConfiguration = struct(n0, _KC, 0, [_kI, _qFSE, _qFS], [0, 2, 0]);
export var ListTestExecutionResultItemsRequest = struct(
  n0,
  _LTERIR,
  0,
  [_tEI, _rFB, _mRax, _nTe],
  [[0, 1], () => TestExecutionResultFilterBy, 1, 0]
);
export var ListTestExecutionResultItemsResponse = struct(
  n0,
  _LTERIRi,
  0,
  [_tER, _nTe],
  [() => TestExecutionResultItems, 0]
);
export var ListTestSetRecordsRequest = struct(n0, _LTSRR, 0, [_tSI, _mRax, _nTe], [[0, 1], 1, 0]);
export var ListTestSetRecordsResponse = struct(n0, _LTSRRi, 0, [_tSR, _nTe], [() => TestSetTurnRecordList, 0]);
export var ListUtteranceAnalyticsDataRequest = struct(
  n0,
  _LUADR,
  0,
  [_bI, _sDT, _eDT, _sBo, _fi, _mRax, _nTe],
  [[0, 1], 4, 4, () => UtteranceDataSortBy, () => AnalyticsUtteranceFilters, 1, 0]
);
export var ListUtteranceAnalyticsDataResponse = struct(
  n0,
  _LUADRi,
  0,
  [_bI, _nTe, _ut],
  [0, 0, () => UtteranceSpecifications]
);
export var MultipleValuesSetting = struct(n0, _MVS, 0, [_aMV], [2]);
export var ObfuscationSetting = struct(n0, _OS, 0, [_oST], [0]);
export var OpensearchConfiguration = struct(
  n0,
  _OC,
  0,
  [_dE, _iNn, _eR, _eRF, _iF],
  [0, 0, 2, () => ExactResponseFields, 64 | 0]
);
export var OverallTestResultItem = struct(n0, _OTRI, 0, [_mTC, _tRC, _sTRC, _eTERC], [2, 1, 128 | 1, 128 | 1]);
export var OverallTestResults = struct(n0, _OTR, 0, [_it], [() => OverallTestResultItemList]);
export var PostDialogCodeHookInvocationSpecification = struct(
  n0,
  _PDCHIS,
  0,
  [_sRu, _sNS, _sC, _fRa, _fNS, _fC, _tR, _tNS, _tC],
  [
    () => ResponseSpecification,
    () => DialogState,
    () => ConditionalSpecification,
    () => ResponseSpecification,
    () => DialogState,
    () => ConditionalSpecification,
    () => ResponseSpecification,
    () => DialogState,
    () => ConditionalSpecification,
  ]
);
export var PostFulfillmentStatusSpecification = struct(
  n0,
  _PFSS,
  0,
  [_sRu, _fRa, _tR, _sNS, _sC, _fNS, _fC, _tNS, _tC],
  [
    () => ResponseSpecification,
    () => ResponseSpecification,
    () => ResponseSpecification,
    () => DialogState,
    () => ConditionalSpecification,
    () => DialogState,
    () => ConditionalSpecification,
    () => DialogState,
    () => ConditionalSpecification,
  ]
);
export var QInConnectAssistantConfiguration = struct(n0, _QICAC, 0, [_aA], [0]);
export var QInConnectIntentConfiguration = struct(n0, _QICIC, 0, [_qICAC], [() => QInConnectAssistantConfiguration]);
export var QnAIntentConfiguration = struct(
  n0,
  _QAIC,
  0,
  [_dSC, _bMC],
  [() => DataSourceConfiguration, () => BedrockModelSpecification]
);
export var QnAKendraConfiguration = struct(n0, _QAKC, 0, [_kI, _qFSE, _qFS, _eR], [0, 2, 0, 2]);
export var ResponseSpecification = struct(n0, _RS, 0, [_mG, _aIl], [() => MessageGroupsList, 2]);
export var RuntimeHintDetails = struct(
  n0,
  _RHD,
  0,
  [_rHV, _sSH],
  [() => RuntimeHintValuesList, () => SlotHintsSlotMap]
);
export var RuntimeHints = struct(n0, _RH, 0, [_sH], [() => SlotHintsIntentMap]);
export var RuntimeHintValue = struct(n0, _RHV, 0, [_ph], [0]);
export var SlotCaptureSetting = struct(
  n0,
  _SCS,
  0,
  [_cRa, _cNSa, _cCa, _fRa, _fNS, _fC, _cH, _eCH],
  [
    () => ResponseSpecification,
    () => DialogState,
    () => ConditionalSpecification,
    () => ResponseSpecification,
    () => DialogState,
    () => ConditionalSpecification,
    () => DialogCodeHookInvocationSetting,
    () => ElicitationCodeHookInvocationSetting,
  ]
);
export var SlotDefaultValue = struct(n0, _SDV, 0, [_dV], [0]);
export var SlotDefaultValueSpecification = struct(n0, _SDVS, 0, [_dVL], [() => SlotDefaultValueList]);
export var SlotPriority = struct(n0, _SP, 0, [_pri, _sIl], [1, 0]);
export var SlotResolutionSetting = struct(n0, _SRS, 0, [_sRS], [0]);
export var SlotResolutionTestResultItem = struct(
  n0,
  _SRTRI,
  0,
  [_sN, _rC],
  [0, () => SlotResolutionTestResultItemCounts]
);
export var SlotResolutionTestResultItemCounts = struct(n0, _SRTRIC, 0, [_tRC, _sTRC, _sMRC], [1, 128 | 1, 128 | 1]);
export var SlotValue = struct(n0, _SVl, 0, [_iV], [0]);
export var SlotValueElicitationSetting = struct(
  n0,
  _SVES,
  0,
  [_dVS, _sCl, _pS, _sU, _wACS, _sCS, _sRSl],
  [
    () => SlotDefaultValueSpecification,
    0,
    () => PromptSpecification,
    () => SampleUtterancesList,
    () => WaitAndContinueSpecification,
    () => SlotCaptureSetting,
    () => SlotResolutionSetting,
  ]
);
export var SlotValueOverride = struct(n0, _SVO, 0, [_sh, _va, _v], [0, () => SlotValue, () => SlotValues]);
export var Specifications = struct(n0, _S, 0, [_sTI, _vES], [0, () => SubSlotValueElicitationSetting]);
export var StillWaitingResponseSpecification = struct(
  n0,
  _SWRS,
  0,
  [_mG, _fIS, _tIS, _aIl],
  [() => MessageGroupsList, 1, 1, 2]
);
export var SubSlotSetting = struct(n0, _SSS, 0, [_ex, _sSlo], [0, () => SubSlotSpecificationMap]);
export var SubSlotValueElicitationSetting = struct(
  n0,
  _SSVES,
  0,
  [_dVS, _pS, _sU, _wACS],
  [
    () => SlotDefaultValueSpecification,
    () => PromptSpecification,
    () => SampleUtterancesList,
    () => WaitAndContinueSpecification,
  ]
);
export var TestExecutionResultFilterBy = struct(
  n0,
  _TERFB,
  0,
  [_rTF, _cLTRFB],
  [0, () => ConversationLevelTestResultsFilterBy]
);
export var TestExecutionResultItems = struct(
  n0,
  _TERI,
  0,
  [_oTR, _cLTR, _iCTR, _iLSRTR, _uLTR],
  [
    () => OverallTestResults,
    () => ConversationLevelTestResults,
    () => IntentClassificationTestResults,
    () => IntentLevelSlotResolutionTestResults,
    () => UtteranceLevelTestResults,
  ]
);
export var TestSetDiscrepancyErrors = struct(
  n0,
  _TSDE,
  0,
  [_iD, _sDl],
  [() => TestSetIntentDiscrepancyList, () => TestSetSlotDiscrepancyList]
);
export var TestSetIntentDiscrepancyItem = struct(n0, _TSIDI, 0, [_iN, _eM], [0, 0]);
export var TestSetSlotDiscrepancyItem = struct(n0, _TSSDI, 0, [_iN, _sN, _eM], [0, 0, 0]);
export var TestSetTurnRecord = struct(n0, _TSTR, 0, [_rN, _cI, _tN, _tSu], [1, 0, 1, () => TurnSpecification]);
export var TestSetTurnResult = struct(n0, _TSTRe, 0, [_ag, _us], [() => AgentTurnResult, () => UserTurnResult]);
export var TurnSpecification = struct(
  n0,
  _TS,
  0,
  [_aTg, _uT],
  [() => AgentTurnSpecification, () => UserTurnSpecification]
);
export var UpdateIntentRequest = struct(
  n0,
  _UIR,
  0,
  [_iI, _iN, _de, _pIS, _sU, _dCH, _fCH, _sP, _iCS, _iCSn, _iCn, _oC, _kC, _bI, _bV, _lI, _iRS, _qAIC, _qICIC],
  [
    [0, 1],
    0,
    0,
    0,
    () => SampleUtterancesList,
    () => DialogCodeHookSettings,
    () => FulfillmentCodeHookSettings,
    () => SlotPrioritiesList,
    () => IntentConfirmationSetting,
    () => IntentClosingSetting,
    () => InputContextsList,
    () => OutputContextsList,
    () => KendraConfiguration,
    [0, 1],
    [0, 1],
    [0, 1],
    () => InitialResponseSetting,
    () => QnAIntentConfiguration,
    () => QInConnectIntentConfiguration,
  ]
);
export var UpdateIntentResponse = struct(
  n0,
  _UIRp,
  0,
  [
    _iI,
    _iN,
    _de,
    _pIS,
    _sU,
    _dCH,
    _fCH,
    _sP,
    _iCS,
    _iCSn,
    _iCn,
    _oC,
    _kC,
    _bI,
    _bV,
    _lI,
    _cDT,
    _lUDT,
    _iRS,
    _qAIC,
    _qICIC,
  ],
  [
    0,
    0,
    0,
    0,
    () => SampleUtterancesList,
    () => DialogCodeHookSettings,
    () => FulfillmentCodeHookSettings,
    () => SlotPrioritiesList,
    () => IntentConfirmationSetting,
    () => IntentClosingSetting,
    () => InputContextsList,
    () => OutputContextsList,
    () => KendraConfiguration,
    0,
    0,
    0,
    4,
    4,
    () => InitialResponseSetting,
    () => QnAIntentConfiguration,
    () => QInConnectIntentConfiguration,
  ]
);
export var UpdateSlotRequest = struct(
  n0,
  _USR,
  0,
  [_sIl, _sN, _de, _sTI, _vES, _oS, _bI, _bV, _lI, _iI, _mVS, _sSS],
  [
    [0, 1],
    0,
    0,
    0,
    () => SlotValueElicitationSetting,
    () => ObfuscationSetting,
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    () => MultipleValuesSetting,
    () => SubSlotSetting,
  ]
);
export var UpdateSlotResponse = struct(
  n0,
  _USRp,
  0,
  [_sIl, _sN, _de, _sTI, _vES, _oS, _bI, _bV, _lI, _iI, _cDT, _lUDT, _mVS, _sSS],
  [
    0,
    0,
    0,
    0,
    () => SlotValueElicitationSetting,
    () => ObfuscationSetting,
    0,
    0,
    0,
    0,
    4,
    4,
    () => MultipleValuesSetting,
    () => SubSlotSetting,
  ]
);
export var UserTurnInputSpecification = struct(
  n0,
  _UTIS,
  0,
  [_uI, _rAeq, _sSe],
  [() => UtteranceInputSpecification, 128 | 0, () => InputSessionStateSpecification]
);
export var UserTurnIntentOutput = struct(n0, _UTIO, 0, [_n, _sl], [0, () => UserTurnSlotOutputMap]);
export var UserTurnOutputSpecification = struct(
  n0,
  _UTOS,
  0,
  [_int, _aC, _t],
  [() => UserTurnIntentOutput, () => ActiveContextList, 0]
);
export var UserTurnResult = struct(
  n0,
  _UTR,
  0,
  [_inp, _eO, _aO, _eD, _eTER, _iMR, _sMR, _sTR, _cLR],
  [
    () => UserTurnInputSpecification,
    () => UserTurnOutputSpecification,
    () => UserTurnOutputSpecification,
    () => ExecutionErrorDetails,
    0,
    0,
    0,
    0,
    () => ConversationLevelResultDetail,
  ]
);
export var UserTurnSlotOutput = struct(
  n0,
  _UTSO,
  0,
  [_va, _v, _sS],
  [0, () => UserTurnSlotOutputList, () => UserTurnSlotOutputMap]
);
export var UserTurnSpecification = struct(
  n0,
  _UTS,
  0,
  [_inp, _exp],
  [() => UserTurnInputSpecification, () => UserTurnOutputSpecification]
);
export var UtteranceAudioInputSpecification = struct(n0, _UAIS, 0, [_aFSL], [0]);
export var UtteranceBotResponse = struct(n0, _UBRt, 0, [_con, _cT, _iRC], [0, 0, () => ImageResponseCard]);
export var UtteranceDataSortBy = struct(n0, _UDSB, 0, [_n, _or], [0, 0]);
export var UtteranceInputSpecification = struct(n0, _UIS, 0, [_tI, _aIu], [0, () => UtteranceAudioInputSpecification]);
export var UtteranceLevelTestResultItem = struct(n0, _ULTRI, 0, [_rN, _cI, _tRu], [1, 0, () => TestSetTurnResult]);
export var UtteranceLevelTestResults = struct(n0, _ULTR, 0, [_it], [() => UtteranceLevelTestResultItemList]);
export var UtteranceSpecification = struct(
  n0,
  _US,
  0,
  [
    _bAI,
    _bV,
    _lI,
    _sIe,
    _ch,
    _mod,
    _cST,
    _cET,
    _u,
    _uTt,
    _aVDM,
    _uUt,
    _iT,
    _oT,
    _aIN,
    _aSN,
    _iSnt,
    _dAT,
    _bRAVI,
    _sFIS,
    _uRI,
    _bR,
  ],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 4, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, () => UtteranceBotResponses]
);
export var WaitAndContinueSpecification = struct(
  n0,
  _WACS,
  0,
  [_wR, _cRon, _sWR, _ac],
  [() => ResponseSpecification, () => ResponseSpecification, () => StillWaitingResponseSpecification, 2]
);
export var ActiveContextList = list(n0, _ACL, 0, () => ActiveContext);
export var ConditionalBranches = list(n0, _CBo, 0, () => ConditionalBranch);
export var ConversationLevelIntentClassificationResults = list(
  n0,
  _CLICR,
  0,
  () => ConversationLevelIntentClassificationResultItem
);
export var ConversationLevelSlotResolutionResults = list(
  n0,
  _CLSRR,
  0,
  () => ConversationLevelSlotResolutionResultItem
);
export var ConversationLevelTestResultItemList = list(n0, _CLTRIL, 0, () => ConversationLevelTestResultItem);
export var IntentClassificationTestResultItemList = list(n0, _ICTRIL, 0, () => IntentClassificationTestResultItem);
export var IntentLevelSlotResolutionTestResultItemList = list(
  n0,
  _ILSRTRIL,
  0,
  () => IntentLevelSlotResolutionTestResultItem
);
export var OSIncludeFields = 64 | 0;

export var OverallTestResultItemList = list(n0, _OTRIL, 0, () => OverallTestResultItem);
export var RuntimeHintValuesList = list(n0, _RHVL, 0, () => RuntimeHintValue);
export var SlotDefaultValueList = list(n0, _SDVL, 0, () => SlotDefaultValue);
export var SlotPrioritiesList = list(n0, _SPL, 0, () => SlotPriority);
export var SlotResolutionTestResultItems = list(n0, _SRTRIl, 0, () => SlotResolutionTestResultItem);
export var SlotValues = list(n0, _SVlo, 0, () => SlotValueOverride);
export var TestSetIntentDiscrepancyList = list(n0, _TSIDL, 0, () => TestSetIntentDiscrepancyItem);
export var TestSetSlotDiscrepancyList = list(n0, _TSSDL, 0, () => TestSetSlotDiscrepancyItem);
export var TestSetTurnRecordList = list(n0, _TSTRL, 0, () => TestSetTurnRecord);
export var UserTurnSlotOutputList = list(n0, _UTSOL, 0, () => UserTurnSlotOutput);
export var UtteranceBotResponses = list(n0, _UBRtt, 0, () => UtteranceBotResponse);
export var UtteranceLevelTestResultItemList = list(n0, _ULTRIL, 0, () => UtteranceLevelTestResultItem);
export var UtteranceSpecifications = list(n0, _USt, 0, () => UtteranceSpecification);
export var SlotHintsIntentMap = map(n0, _SHIM, 0, 0, () => SlotHintsSlotMap);
export var SlotHintsSlotMap = map(n0, _SHSM, 0, 0, () => RuntimeHintDetails);
export var SlotValueOverrideMap = map(n0, _SVOM, 0, 0, () => SlotValueOverride);
export var StringMap = 128 | 0;

export var SubSlotSpecificationMap = map(n0, _SSSM, 0, 0, () => Specifications);
export var TestResultMatchStatusCountMap = 128 | 1;

export var UserTurnSlotOutputMap = map(n0, _UTSOM, 0, 0, () => UserTurnSlotOutput);
export var CreateIntent = op(
  n0,
  _CI,
  {
    [_h]: ["PUT", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents", 200],
  },
  () => CreateIntentRequest,
  () => CreateIntentResponse
);
export var CreateSlot = op(
  n0,
  _CSr,
  {
    [_h]: ["PUT", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots", 200],
  },
  () => CreateSlotRequest,
  () => CreateSlotResponse
);
export var DescribeIntent = op(
  n0,
  _DIesc,
  {
    [_h]: ["GET", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}", 200],
  },
  () => DescribeIntentRequest,
  () => DescribeIntentResponse
);
export var DescribeSlot = op(
  n0,
  _DSes,
  {
    [_h]: [
      "GET",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
      200,
    ],
  },
  () => DescribeSlotRequest,
  () => DescribeSlotResponse
);
export var DescribeTestSetDiscrepancyReport = op(
  n0,
  _DTSDR,
  {
    [_h]: ["GET", "/testsetdiscrepancy/{testSetDiscrepancyReportId}", 200],
  },
  () => DescribeTestSetDiscrepancyReportRequest,
  () => DescribeTestSetDiscrepancyReportResponse
);
export var ListTestExecutionResultItems = op(
  n0,
  _LTERI,
  {
    [_h]: ["POST", "/testexecutions/{testExecutionId}/results", 200],
  },
  () => ListTestExecutionResultItemsRequest,
  () => ListTestExecutionResultItemsResponse
);
export var ListTestSetRecords = op(
  n0,
  _LTSRis,
  {
    [_h]: ["POST", "/testsets/{testSetId}/records", 200],
  },
  () => ListTestSetRecordsRequest,
  () => ListTestSetRecordsResponse
);
export var ListUtteranceAnalyticsData = op(
  n0,
  _LUAD,
  {
    [_h]: ["POST", "/bots/{botId}/analytics/utterances", 200],
  },
  () => ListUtteranceAnalyticsDataRequest,
  () => ListUtteranceAnalyticsDataResponse
);
export var UpdateIntent = op(
  n0,
  _UI,
  {
    [_h]: ["PUT", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}", 200],
  },
  () => UpdateIntentRequest,
  () => UpdateIntentResponse
);
export var UpdateSlot = op(
  n0,
  _USp,
  {
    [_h]: [
      "PUT",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}",
      200,
    ],
  },
  () => UpdateSlotRequest,
  () => UpdateSlotResponse
);
