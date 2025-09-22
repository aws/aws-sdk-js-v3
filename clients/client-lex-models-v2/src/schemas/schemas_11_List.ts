// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aD,
  _aLRDT,
  _AT,
  _aT,
  _ATF,
  _ATFs,
  _ATL,
  _AUF,
  _AUFg,
  _AUS,
  _aUS,
  _AUSB,
  _AUSL,
  _aWET,
  _aWST,
  _bAI,
  _BF,
  _BFo,
  _bI,
  _BLF,
  _BLFo,
  _BLS,
  _bLS,
  _BLSB,
  _BLSL,
  _bLSo,
  _bN,
  _bRI,
  _BS,
  _bS,
  _BSB,
  _BSL,
  _bSo,
  _bTo,
  _bV,
  _cDFDR,
  _cDT,
  _de,
  _EF,
  _EFx,
  _eI,
  _ESB,
  _ESL,
  _ESx,
  _eSx,
  _eSxp,
  _fF,
  _fi,
  _h,
  _hC,
  _iCn,
  _IF,
  _IFm,
  _IFn,
  _IFnt,
  _iI,
  _iIm,
  _iN,
  _iRI,
  _iRN,
  _iRT,
  _IS,
  _ISB,
  _ISBn,
  _ISL,
  _ISLn,
  _iSm,
  _iSmp,
  _iSn,
  _ISnt,
  _LAU,
  _LAUR,
  _LAURi,
  _LB,
  _LBL,
  _LBLR,
  _LBLRi,
  _LBR,
  _LBRi,
  _lBSDT,
  _lBV,
  _LE,
  _LER,
  _LERi,
  _LI,
  _lI,
  _LIi,
  _LIR,
  _LIRi,
  _LIRis,
  _LIRist,
  _lN,
  _LS,
  _LSR,
  _LSRi,
  _LST,
  _LSTR,
  _LSTRi,
  _lUDT,
  _mC,
  _mRax,
  _mS,
  _n,
  _nIe,
  _nTe,
  _o,
  _oC,
  _or,
  _pIS,
  _pSTS,
  _RAD,
  _rAD,
  _rS,
  _SAT,
  _SATR,
  _SATRe,
  _sBo,
  _sCl,
  _SF,
  _SFl,
  _sIl,
  _sN,
  _sO,
  _SSB,
  _SSL,
  _SSl,
  _sSl,
  _sTCl,
  _STF,
  _STFl,
  _sTI,
  _sTN,
  _STSB,
  _STSL,
  _STSl,
  _sTSl,
  _t,
  _tD,
  _tRo,
  _tV,
  _u,
  _UAD,
  _uFRIAD,
  _uLRIAD,
  _v,
  _vEPS,
  n0,
} from "./schemas_0";
import { ExportResourceSpecification } from "./schemas_7_Export";
import { PromptSpecification } from "./schemas_12_Slot";
import { InputContextsList, OutputContextsList } from "./schemas_24_Intent";

/* eslint no-var: 0 */

export var AggregatedUtterancesFilter = struct(n0, _AUF, 0, [_n, _v, _o], [0, 64 | 0, 0]);
export var AggregatedUtterancesSortBy = struct(n0, _AUSB, 0, [_a, _or], [0, 0]);
export var AggregatedUtterancesSummary = struct(
  n0,
  _AUS,
  0,
  [_u, _hC, _mC, _uFRIAD, _uLRIAD, _cDFDR],
  [0, 1, 1, 4, 4, 2]
);
export var AssociatedTranscript = struct(n0, _AT, 0, [_t], [0]);
export var AssociatedTranscriptFilter = struct(n0, _ATF, 0, [_n, _v], [0, 64 | 0]);
export var BotFilter = struct(n0, _BF, 0, [_n, _v, _o], [0, 64 | 0, 0]);
export var BotLocaleFilter = struct(n0, _BLF, 0, [_n, _v, _o], [0, 64 | 0, 0]);
export var BotLocaleSortBy = struct(n0, _BLSB, 0, [_a, _or], [0, 0]);
export var BotLocaleSummary = struct(n0, _BLS, 0, [_lI, _lN, _de, _bLS, _lUDT, _lBSDT], [0, 0, 0, 0, 4, 4]);
export var BotSortBy = struct(n0, _BSB, 0, [_a, _or], [0, 0]);
export var BotSummary = struct(n0, _BS, 0, [_bI, _bN, _de, _bS, _lBV, _lUDT, _bTo], [0, 0, 0, 0, 0, 4, 0]);
export var ExportFilter = struct(n0, _EF, 0, [_n, _v, _o], [0, 64 | 0, 0]);
export var ExportSortBy = struct(n0, _ESB, 0, [_a, _or], [0, 0]);
export var ExportSummary = struct(
  n0,
  _ESx,
  0,
  [_eI, _rS, _fF, _eSx, _cDT, _lUDT],
  [0, () => ExportResourceSpecification, 0, 0, 4, 4]
);
export var ImportFilter = struct(n0, _IF, 0, [_n, _v, _o], [0, 64 | 0, 0]);
export var ImportSortBy = struct(n0, _ISB, 0, [_a, _or], [0, 0]);
export var ImportSummary = struct(
  n0,
  _IS,
  0,
  [_iIm, _iRI, _iRN, _iSm, _mS, _cDT, _lUDT, _iRT],
  [0, 0, 0, 0, 0, 4, 4, 0]
);
export var IntentFilter = struct(n0, _IFn, 0, [_n, _v, _o], [0, 64 | 0, 0]);
export var IntentSortBy = struct(n0, _ISBn, 0, [_a, _or], [0, 0]);
export var IntentSummary = struct(
  n0,
  _ISnt,
  0,
  [_iI, _iN, _de, _pIS, _iCn, _oC, _lUDT],
  [0, 0, 0, 0, () => InputContextsList, () => OutputContextsList, 4]
);
export var ListAggregatedUtterancesRequest = struct(
  n0,
  _LAUR,
  0,
  [_bI, _bAI, _bV, _lI, _aD, _sBo, _fi, _mRax, _nTe],
  [
    [0, 1],
    0,
    0,
    0,
    () => UtteranceAggregationDuration,
    () => AggregatedUtterancesSortBy,
    () => AggregatedUtterancesFilters,
    1,
    0,
  ]
);
export var ListAggregatedUtterancesResponse = struct(
  n0,
  _LAURi,
  0,
  [_bI, _bAI, _bV, _lI, _aD, _aWST, _aWET, _aLRDT, _aUS, _nTe],
  [0, 0, 0, 0, () => UtteranceAggregationDuration, 4, 4, 4, () => AggregatedUtterancesSummaryList, 0]
);
export var ListBotLocalesRequest = struct(
  n0,
  _LBLR,
  0,
  [_bI, _bV, _sBo, _fi, _mRax, _nTe],
  [[0, 1], [0, 1], () => BotLocaleSortBy, () => BotLocaleFilters, 1, 0]
);
export var ListBotLocalesResponse = struct(
  n0,
  _LBLRi,
  0,
  [_bI, _bV, _nTe, _bLSo],
  [0, 0, 0, () => BotLocaleSummaryList]
);
export var ListBotsRequest = struct(n0, _LBR, 0, [_sBo, _fi, _mRax, _nTe], [() => BotSortBy, () => BotFilters, 1, 0]);
export var ListBotsResponse = struct(n0, _LBRi, 0, [_bSo, _nTe], [() => BotSummaryList, 0]);
export var ListExportsRequest = struct(
  n0,
  _LER,
  0,
  [_bI, _bV, _sBo, _fi, _mRax, _nTe, _lI],
  [0, 0, () => ExportSortBy, () => ExportFilters, 1, 0, 0]
);
export var ListExportsResponse = struct(
  n0,
  _LERi,
  0,
  [_bI, _bV, _eSxp, _nTe, _lI],
  [0, 0, () => ExportSummaryList, 0, 0]
);
export var ListImportsRequest = struct(
  n0,
  _LIR,
  0,
  [_bI, _bV, _sBo, _fi, _mRax, _nTe, _lI],
  [0, 0, () => ImportSortBy, () => ImportFilters, 1, 0, 0]
);
export var ListImportsResponse = struct(
  n0,
  _LIRi,
  0,
  [_bI, _bV, _iSmp, _nTe, _lI],
  [0, 0, () => ImportSummaryList, 0, 0]
);
export var ListIntentsRequest = struct(
  n0,
  _LIRis,
  0,
  [_bI, _bV, _lI, _sBo, _fi, _mRax, _nTe],
  [[0, 1], [0, 1], [0, 1], () => IntentSortBy, () => IntentFilters, 1, 0]
);
export var ListIntentsResponse = struct(
  n0,
  _LIRist,
  0,
  [_bI, _bV, _lI, _iSn, _nTe],
  [0, 0, 0, () => IntentSummaryList, 0]
);
export var ListSlotsRequest = struct(
  n0,
  _LSR,
  0,
  [_bI, _bV, _lI, _iI, _sBo, _fi, _mRax, _nTe],
  [[0, 1], [0, 1], [0, 1], [0, 1], () => SlotSortBy, () => SlotFilters, 1, 0]
);
export var ListSlotsResponse = struct(
  n0,
  _LSRi,
  0,
  [_bI, _bV, _lI, _iI, _sSl, _nTe],
  [0, 0, 0, 0, () => SlotSummaryList, 0]
);
export var ListSlotTypesRequest = struct(
  n0,
  _LSTR,
  0,
  [_bI, _bV, _lI, _sBo, _fi, _mRax, _nTe],
  [[0, 1], [0, 1], [0, 1], () => SlotTypeSortBy, () => SlotTypeFilters, 1, 0]
);
export var ListSlotTypesResponse = struct(
  n0,
  _LSTRi,
  0,
  [_bI, _bV, _lI, _sTSl, _nTe],
  [0, 0, 0, () => SlotTypeSummaryList, 0]
);
export var RelativeAggregationDuration = struct(n0, _RAD, 0, [_tD, _tV], [0, 1]);
export var SearchAssociatedTranscriptsRequest = struct(
  n0,
  _SATR,
  0,
  [_bI, _bV, _lI, _bRI, _sO, _fi, _mRax, _nIe],
  [[0, 1], [0, 1], [0, 1], [0, 1], 0, () => AssociatedTranscriptFilters, 1, 1]
);
export var SearchAssociatedTranscriptsResponse = struct(
  n0,
  _SATRe,
  0,
  [_bI, _bV, _lI, _bRI, _nIe, _aT, _tRo],
  [0, 0, 0, 0, 1, () => AssociatedTranscriptList, 1]
);
export var SlotFilter = struct(n0, _SF, 0, [_n, _v, _o], [0, 64 | 0, 0]);
export var SlotSortBy = struct(n0, _SSB, 0, [_a, _or], [0, 0]);
export var SlotSummary = struct(
  n0,
  _SSl,
  0,
  [_sIl, _sN, _de, _sCl, _sTI, _vEPS, _lUDT],
  [0, 0, 0, 0, 0, () => PromptSpecification, 4]
);
export var SlotTypeFilter = struct(n0, _STF, 0, [_n, _v, _o], [0, 64 | 0, 0]);
export var SlotTypeSortBy = struct(n0, _STSB, 0, [_a, _or], [0, 0]);
export var SlotTypeSummary = struct(n0, _STSl, 0, [_sTI, _sTN, _de, _pSTS, _lUDT, _sTCl], [0, 0, 0, 0, 4, 0]);
export var UtteranceAggregationDuration = struct(n0, _UAD, 0, [_rAD], [() => RelativeAggregationDuration]);
export var AggregatedUtterancesFilters = list(n0, _AUFg, 0, () => AggregatedUtterancesFilter);
export var AggregatedUtterancesSummaryList = list(n0, _AUSL, 0, () => AggregatedUtterancesSummary);
export var AssociatedTranscriptFilters = list(n0, _ATFs, 0, () => AssociatedTranscriptFilter);
export var AssociatedTranscriptList = list(n0, _ATL, 0, () => AssociatedTranscript);
export var BotFilters = list(n0, _BFo, 0, () => BotFilter);
export var BotLocaleFilters = list(n0, _BLFo, 0, () => BotLocaleFilter);
export var BotLocaleSummaryList = list(n0, _BLSL, 0, () => BotLocaleSummary);
export var BotSummaryList = list(n0, _BSL, 0, () => BotSummary);
export var ExportFilters = list(n0, _EFx, 0, () => ExportFilter);
export var ExportSummaryList = list(n0, _ESL, 0, () => ExportSummary);
export var FilterValues = 64 | 0;

export var ImportFilters = list(n0, _IFm, 0, () => ImportFilter);
export var ImportSummaryList = list(n0, _ISL, 0, () => ImportSummary);
export var IntentFilters = list(n0, _IFnt, 0, () => IntentFilter);
export var IntentSummaryList = list(n0, _ISLn, 0, () => IntentSummary);
export var SlotFilters = list(n0, _SFl, 0, () => SlotFilter);
export var SlotSummaryList = list(n0, _SSL, 0, () => SlotSummary);
export var SlotTypeFilters = list(n0, _STFl, 0, () => SlotTypeFilter);
export var SlotTypeSummaryList = list(n0, _STSL, 0, () => SlotTypeSummary);
export var ListAggregatedUtterances = op(
  n0,
  _LAU,
  {
    [_h]: ["POST", "/bots/{botId}/aggregatedutterances", 200],
  },
  () => ListAggregatedUtterancesRequest,
  () => ListAggregatedUtterancesResponse
);
export var ListBotLocales = op(
  n0,
  _LBL,
  {
    [_h]: ["POST", "/bots/{botId}/botversions/{botVersion}/botlocales", 200],
  },
  () => ListBotLocalesRequest,
  () => ListBotLocalesResponse
);
export var ListBots = op(
  n0,
  _LB,
  {
    [_h]: ["POST", "/bots", 200],
  },
  () => ListBotsRequest,
  () => ListBotsResponse
);
export var ListExports = op(
  n0,
  _LE,
  {
    [_h]: ["POST", "/exports", 200],
  },
  () => ListExportsRequest,
  () => ListExportsResponse
);
export var ListImports = op(
  n0,
  _LI,
  {
    [_h]: ["POST", "/imports", 200],
  },
  () => ListImportsRequest,
  () => ListImportsResponse
);
export var ListIntents = op(
  n0,
  _LIi,
  {
    [_h]: ["POST", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents", 200],
  },
  () => ListIntentsRequest,
  () => ListIntentsResponse
);
export var ListSlots = op(
  n0,
  _LS,
  {
    [_h]: ["POST", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots", 200],
  },
  () => ListSlotsRequest,
  () => ListSlotsResponse
);
export var ListSlotTypes = op(
  n0,
  _LST,
  {
    [_h]: ["POST", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes", 200],
  },
  () => ListSlotTypesRequest,
  () => ListSlotTypesResponse
);
export var SearchAssociatedTranscripts = op(
  n0,
  _SAT,
  {
    [_h]: [
      "POST",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts",
      200,
    ],
  },
  () => SearchAssociatedTranscriptsRequest,
  () => SearchAssociatedTranscriptsResponse
);
