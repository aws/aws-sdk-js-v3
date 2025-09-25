// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _aTP,
  _bI,
  _bLEP,
  _bRI,
  _BRS,
  _bRS,
  _BRSL,
  _bRSot,
  _bV,
  _cDT,
  _DRF,
  _dRF,
  _eDT,
  _ES,
  _eSn,
  _FP,
  _h,
  _kKA,
  _LBRis,
  _LBRR,
  _LBRRi,
  _lI,
  _LTF,
  _lTF,
  _lUDT,
  _mRax,
  _nTe,
  _oP,
  _PF,
  _pF,
  _sBN,
  _SBR,
  _SBRR,
  _SBRRt,
  _SBRRto,
  _SBRRtop,
  _SBRt,
  _SBTS,
  _sBTS,
  _sDT,
  _TF,
  _tF,
  _tFr,
  _tSS,
  _TSSr,
  _UBRpd,
  _UBRR,
  _UBRRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var FilePassword = sim(n0, _FP, 0, 8);
export var BotRecommendationSummary = struct(n0, _BRS, 0, [_bRS, _bRI, _cDT, _lUDT], [0, 0, 4, 4]);
export var DateRangeFilter = struct(n0, _DRF, 0, [_sDT, _eDT], [4, 4]);
export var EncryptionSetting = struct(
  n0,
  _ES,
  0,
  [_kKA, _bLEP, _aTP],
  [0, [() => FilePassword, 0], [() => FilePassword, 0]]
);
export var LexTranscriptFilter = struct(n0, _LTF, 0, [_dRF], [() => DateRangeFilter]);
export var ListBotRecommendationsRequest = struct(
  n0,
  _LBRR,
  0,
  [_bI, _bV, _lI, _mRax, _nTe],
  [[0, 1], [0, 1], [0, 1], 1, 0]
);
export var ListBotRecommendationsResponse = struct(
  n0,
  _LBRRi,
  0,
  [_bI, _bV, _lI, _bRSot, _nTe],
  [0, 0, 0, () => BotRecommendationSummaryList, 0]
);
export var PathFormat = struct(n0, _PF, 0, [_oP], [64 | 0]);
export var S3BucketTranscriptSource = struct(
  n0,
  _SBTS,
  0,
  [_sBN, _pF, _tF, _tFr, _kKA],
  [0, () => PathFormat, 0, () => TranscriptFilter, 0]
);
export var StartBotRecommendationRequest = struct(
  n0,
  _SBRR,
  0,
  [_bI, _bV, _lI, _tSS, _eSn],
  [[0, 1], [0, 1], [0, 1], () => TranscriptSourceSetting, [() => EncryptionSetting, 0]]
);
export var StartBotRecommendationResponse = struct(
  n0,
  _SBRRt,
  0,
  [_bI, _bV, _lI, _bRS, _bRI, _cDT, _tSS, _eSn],
  [0, 0, 0, 0, 0, 4, () => TranscriptSourceSetting, [() => EncryptionSetting, 0]]
);
export var StopBotRecommendationRequest = struct(
  n0,
  _SBRRto,
  0,
  [_bI, _bV, _lI, _bRI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var StopBotRecommendationResponse = struct(n0, _SBRRtop, 0, [_bI, _bV, _lI, _bRS, _bRI], [0, 0, 0, 0, 0]);
export var TranscriptFilter = struct(n0, _TF, 0, [_lTF], [() => LexTranscriptFilter]);
export var TranscriptSourceSetting = struct(n0, _TSSr, 0, [_sBTS], [() => S3BucketTranscriptSource]);
export var UpdateBotRecommendationRequest = struct(
  n0,
  _UBRR,
  0,
  [_bI, _bV, _lI, _bRI, _eSn],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [() => EncryptionSetting, 0],
  ]
);
export var UpdateBotRecommendationResponse = struct(
  n0,
  _UBRRp,
  0,
  [_bI, _bV, _lI, _bRS, _bRI, _cDT, _lUDT, _tSS, _eSn],
  [0, 0, 0, 0, 0, 4, 4, () => TranscriptSourceSetting, [() => EncryptionSetting, 0]]
);
export var BotRecommendationSummaryList = list(n0, _BRSL, 0, () => BotRecommendationSummary);
export var ObjectPrefixes = 64 | 0;

export var ListBotRecommendations = op(
  n0,
  _LBRis,
  {
    [_h]: ["POST", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations", 200],
  },
  () => ListBotRecommendationsRequest,
  () => ListBotRecommendationsResponse
);
export var StartBotRecommendation = op(
  n0,
  _SBR,
  {
    [_h]: ["PUT", "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations", 202],
  },
  () => StartBotRecommendationRequest,
  () => StartBotRecommendationResponse
);
export var StopBotRecommendation = op(
  n0,
  _SBRt,
  {
    [_h]: [
      "PUT",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation",
      202,
    ],
  },
  () => StopBotRecommendationRequest,
  () => StopBotRecommendationResponse
);
export var UpdateBotRecommendation = op(
  n0,
  _UBRpd,
  {
    [_h]: [
      "PUT",
      "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}",
      202,
    ],
  },
  () => UpdateBotRecommendationRequest,
  () => UpdateBotRecommendationResponse
);
