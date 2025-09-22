// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _BGC,
  _bI,
  _BLHE,
  _bLHE,
  _BLHEL,
  _bLS,
  _BMS,
  _bMS,
  _BSu,
  _bSu,
  _bV,
  _CBL,
  _CBLR,
  _CBLRr,
  _cDT,
  _cP,
  _dBB,
  _DBBS,
  _DBLe,
  _DBLRes,
  _DBLResc,
  _DBRG,
  _DBRGR,
  _DBRGRe,
  _de,
  _e,
  _eDv,
  _ev,
  _fR,
  _g,
  _GAIS,
  _gAIS,
  _gBLU,
  _gI,
  _gIP,
  _gS,
  _h,
  _iCnt,
  _id,
  _lBSDT,
  _lI,
  _lN,
  _lUDT,
  _mA,
  _nI,
  _nICT,
  _NIS,
  _rAec,
  _RSu,
  _rSu,
  _sRI,
  _SRIS,
  _sTC,
  _sUG,
  _SUGS,
  _tS,
  _UBL,
  _UBLR,
  _UBLRp,
  _ve,
  _vS,
  n0,
} from "./schemas_0";
import { VoiceSettings } from "./schemas_27_Locale";

/* eslint no-var: 0 */

export var BedrockGuardrailConfiguration = struct(n0, _BGC, 0, [_id, _ve], [0, 0]);
export var BedrockModelSpecification = struct(
  n0,
  _BMS,
  0,
  [_mA, _g, _tS, _cP],
  [0, () => BedrockGuardrailConfiguration, 0, 0]
);
export var BotLocaleHistoryEvent = struct(n0, _BLHE, 0, [_ev, _eDv], [0, 4]);
export var BuildtimeSettings = struct(
  n0,
  _BSu,
  0,
  [_dBB, _sUG],
  [() => DescriptiveBotBuilderSpecification, () => SampleUtteranceGenerationSpecification]
);
export var CreateBotLocaleRequest = struct(
  n0,
  _CBLR,
  0,
  [_bI, _bV, _lI, _de, _nICT, _vS, _gAIS],
  [[0, 1], [0, 1], 0, 0, 1, () => VoiceSettings, () => GenerativeAISettings]
);
export var CreateBotLocaleResponse = struct(
  n0,
  _CBLRr,
  0,
  [_bI, _bV, _lN, _lI, _de, _nICT, _vS, _bLS, _cDT, _gAIS],
  [0, 0, 0, 0, 0, 1, () => VoiceSettings, 0, 4, () => GenerativeAISettings]
);
export var DescribeBotLocaleRequest = struct(
  n0,
  _DBLRes,
  0,
  [_bI, _bV, _lI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeBotLocaleResponse = struct(
  n0,
  _DBLResc,
  0,
  [_bI, _bV, _lI, _lN, _de, _nICT, _vS, _iCnt, _sTC, _bLS, _fR, _cDT, _lUDT, _lBSDT, _bLHE, _rAec, _gAIS],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    () => VoiceSettings,
    1,
    1,
    0,
    64 | 0,
    4,
    4,
    4,
    () => BotLocaleHistoryEventsList,
    64 | 0,
    () => GenerativeAISettings,
  ]
);
export var DescribeBotResourceGenerationRequest = struct(
  n0,
  _DBRGR,
  0,
  [_bI, _bV, _lI, _gI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeBotResourceGenerationResponse = struct(
  n0,
  _DBRGRe,
  0,
  [_bI, _bV, _lI, _gI, _fR, _gS, _gIP, _gBLU, _cDT, _mA, _lUDT],
  [0, 0, 0, 0, 64 | 0, 0, 0, 0, 4, 0, 4]
);
export var DescriptiveBotBuilderSpecification = struct(n0, _DBBS, 0, [_e, _bMS], [2, () => BedrockModelSpecification]);
export var GenerativeAISettings = struct(n0, _GAIS, 0, [_rSu, _bSu], [() => RuntimeSettings, () => BuildtimeSettings]);
export var NluImprovementSpecification = struct(n0, _NIS, 0, [_e], [2]);
export var RuntimeSettings = struct(
  n0,
  _RSu,
  0,
  [_sRI, _nI],
  [() => SlotResolutionImprovementSpecification, () => NluImprovementSpecification]
);
export var SampleUtteranceGenerationSpecification = struct(
  n0,
  _SUGS,
  0,
  [_e, _bMS],
  [2, () => BedrockModelSpecification]
);
export var SlotResolutionImprovementSpecification = struct(
  n0,
  _SRIS,
  0,
  [_e, _bMS],
  [2, () => BedrockModelSpecification]
);
export var UpdateBotLocaleRequest = struct(
  n0,
  _UBLR,
  0,
  [_bI, _bV, _lI, _de, _nICT, _vS, _gAIS],
  [[0, 1], [0, 1], [0, 1], 0, 1, () => VoiceSettings, () => GenerativeAISettings]
);
export var UpdateBotLocaleResponse = struct(
  n0,
  _UBLRp,
  0,
  [_bI, _bV, _lI, _lN, _de, _nICT, _vS, _bLS, _fR, _cDT, _lUDT, _rAec, _gAIS],
  [0, 0, 0, 0, 0, 1, () => VoiceSettings, 0, 64 | 0, 4, 4, 64 | 0, () => GenerativeAISettings]
);
export var BotLocaleHistoryEventsList = list(n0, _BLHEL, 0, () => BotLocaleHistoryEvent);
export var RecommendedActions = 64 | 0;

export var CreateBotLocale = op(
  n0,
  _CBL,
  {
    [_h]: ["PUT", "/bots/{botId}/botversions/{botVersion}/botlocales", 202],
  },
  () => CreateBotLocaleRequest,
  () => CreateBotLocaleResponse
);
export var DescribeBotLocale = op(
  n0,
  _DBLe,
  {
    [_h]: ["GET", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}", 200],
  },
  () => DescribeBotLocaleRequest,
  () => DescribeBotLocaleResponse
);
export var DescribeBotResourceGeneration = op(
  n0,
  _DBRG,
  {
    [_h]: ["GET", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/generations/{generationId}", 200],
  },
  () => DescribeBotResourceGenerationRequest,
  () => DescribeBotResourceGenerationResponse
);
export var UpdateBotLocale = op(
  n0,
  _UBL,
  {
    [_h]: ["PUT", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}", 202],
  },
  () => UpdateBotLocaleRequest,
  () => UpdateBotLocaleResponse
);
