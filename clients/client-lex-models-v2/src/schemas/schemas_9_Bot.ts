// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _ALD,
  _ALS,
  _aLS,
  _ALSL,
  _BAHE,
  _bAHE,
  _BAHEL,
  _bAI,
  _BALS,
  _bALS,
  _BALSM,
  _bAN,
  _BAS,
  _bAS,
  _BASL,
  _bASo,
  _bI,
  _bV,
  _cDT,
  _cHIV,
  _CHS,
  _cHS,
  _CLS,
  _cLS,
  _cW,
  _cWLGA,
  _CWLGLD,
  _d,
  _DBA,
  _DBAe,
  _DBAR,
  _DBARe,
  _DBARes,
  _DBAResc,
  _de,
  _dSe,
  _e,
  _eDn,
  _h,
  _hQ,
  _kKA,
  _lARN,
  _LBA,
  _LBAR,
  _LBARi,
  _LCH,
  _lCH,
  _lP,
  _lUDT,
  _mRax,
  _nTe,
  _pBN,
  _SAS,
  _sAS,
  _sB,
  _sBA,
  _SBLD,
  _sD,
  _sLE,
  _sRIUC,
  _TLD,
  _TLS,
  _tLS,
  _TLSL,
  _UBA,
  _UBAR,
  _UBARp,
  n0,
} from "./schemas_0";
import { ParentBotNetworks } from "./schemas_22_Describe";

/* eslint no-var: 0 */

export var AudioLogDestination = struct(n0, _ALD, 0, [_sB], [() => S3BucketLogDestination]);
export var AudioLogSetting = struct(n0, _ALS, 0, [_e, _d, _sLE], [2, () => AudioLogDestination, 2]);
export var BotAliasHistoryEvent = struct(n0, _BAHE, 0, [_bV, _sD, _eDn], [0, 4, 4]);
export var BotAliasLocaleSettings = struct(n0, _BALS, 0, [_e, _cHS], [2, () => CodeHookSpecification]);
export var BotAliasSummary = struct(n0, _BAS, 0, [_bAI, _bAN, _de, _bV, _bAS, _cDT, _lUDT], [0, 0, 0, 0, 0, 4, 4]);
export var CloudWatchLogGroupLogDestination = struct(n0, _CWLGLD, 0, [_cWLGA, _lP], [0, 0]);
export var CodeHookSpecification = struct(n0, _CHS, 0, [_lCH], [() => LambdaCodeHook]);
export var ConversationLogSettings = struct(
  n0,
  _CLS,
  0,
  [_tLS, _aLS],
  [() => TextLogSettingsList, () => AudioLogSettingsList]
);
export var DeleteBotAliasRequest = struct(
  n0,
  _DBAR,
  0,
  [_bAI, _bI, _sRIUC],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _sRIUC,
      },
    ],
  ]
);
export var DeleteBotAliasResponse = struct(n0, _DBARe, 0, [_bAI, _bI, _bAS], [0, 0, 0]);
export var DescribeBotAliasRequest = struct(
  n0,
  _DBARes,
  0,
  [_bAI, _bI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DescribeBotAliasResponse = struct(
  n0,
  _DBAResc,
  0,
  [_bAI, _bAN, _de, _bV, _bALS, _cLS, _sAS, _bAHE, _bAS, _bI, _cDT, _lUDT, _pBN],
  [
    0,
    0,
    0,
    0,
    () => BotAliasLocaleSettingsMap,
    () => ConversationLogSettings,
    () => SentimentAnalysisSettings,
    () => BotAliasHistoryEventsList,
    0,
    0,
    4,
    4,
    () => ParentBotNetworks,
  ]
);
export var LambdaCodeHook = struct(n0, _LCH, 0, [_lARN, _cHIV], [0, 0]);
export var ListBotAliasesRequest = struct(n0, _LBAR, 0, [_bI, _mRax, _nTe], [[0, 1], 1, 0]);
export var ListBotAliasesResponse = struct(n0, _LBARi, 0, [_bASo, _nTe, _bI], [() => BotAliasSummaryList, 0, 0]);
export var S3BucketLogDestination = struct(n0, _SBLD, 0, [_kKA, _sBA, _lP], [0, 0, 0]);
export var SentimentAnalysisSettings = struct(n0, _SAS, 0, [_dSe], [2]);
export var TextLogDestination = struct(n0, _TLD, 0, [_cW], [() => CloudWatchLogGroupLogDestination]);
export var TextLogSetting = struct(n0, _TLS, 0, [_e, _d, _sLE], [2, () => TextLogDestination, 2]);
export var UpdateBotAliasRequest = struct(
  n0,
  _UBAR,
  0,
  [_bAI, _bAN, _de, _bV, _bALS, _cLS, _sAS, _bI],
  [
    [0, 1],
    0,
    0,
    0,
    () => BotAliasLocaleSettingsMap,
    () => ConversationLogSettings,
    () => SentimentAnalysisSettings,
    [0, 1],
  ]
);
export var UpdateBotAliasResponse = struct(
  n0,
  _UBARp,
  0,
  [_bAI, _bAN, _de, _bV, _bALS, _cLS, _sAS, _bAS, _bI, _cDT, _lUDT],
  [
    0,
    0,
    0,
    0,
    () => BotAliasLocaleSettingsMap,
    () => ConversationLogSettings,
    () => SentimentAnalysisSettings,
    0,
    0,
    4,
    4,
  ]
);
export var AudioLogSettingsList = list(n0, _ALSL, 0, () => AudioLogSetting);
export var BotAliasHistoryEventsList = list(n0, _BAHEL, 0, () => BotAliasHistoryEvent);
export var BotAliasSummaryList = list(n0, _BASL, 0, () => BotAliasSummary);
export var TextLogSettingsList = list(n0, _TLSL, 0, () => TextLogSetting);
export var BotAliasLocaleSettingsMap = map(n0, _BALSM, 0, 0, () => BotAliasLocaleSettings);
export var DeleteBotAlias = op(
  n0,
  _DBA,
  {
    [_h]: ["DELETE", "/bots/{botId}/botaliases/{botAliasId}", 202],
  },
  () => DeleteBotAliasRequest,
  () => DeleteBotAliasResponse
);
export var DescribeBotAlias = op(
  n0,
  _DBAe,
  {
    [_h]: ["GET", "/bots/{botId}/botaliases/{botAliasId}", 200],
  },
  () => DescribeBotAliasRequest,
  () => DescribeBotAliasResponse
);
export var ListBotAliases = op(
  n0,
  _LBA,
  {
    [_h]: ["POST", "/bots/{botId}/botaliases", 200],
  },
  () => ListBotAliasesRequest,
  () => ListBotAliasesResponse
);
export var UpdateBotAlias = op(
  n0,
  _UBA,
  {
    [_h]: ["PUT", "/bots/{botId}/botaliases/{botAliasId}", 202],
  },
  () => UpdateBotAliasRequest,
  () => UpdateBotAliasResponse
);
