// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _bAI,
  _bALS,
  _bAN,
  _bAS,
  _bI,
  _bV,
  _CBA,
  _CBAR,
  _CBARr,
  _cDT,
  _cLS,
  _de,
  _h,
  _sAS,
  _ta,
  n0,
} from "./schemas_0";
import { BotAliasLocaleSettingsMap, ConversationLogSettings, SentimentAnalysisSettings } from "./schemas_9_Bot";

/* eslint no-var: 0 */

export var CreateBotAliasRequest = struct(
  n0,
  _CBAR,
  0,
  [_bAN, _de, _bV, _bALS, _cLS, _sAS, _bI, _ta],
  [
    0,
    0,
    0,
    () => BotAliasLocaleSettingsMap,
    () => ConversationLogSettings,
    () => SentimentAnalysisSettings,
    [0, 1],
    128 | 0,
  ]
);
export var CreateBotAliasResponse = struct(
  n0,
  _CBARr,
  0,
  [_bAI, _bAN, _de, _bV, _bALS, _cLS, _sAS, _bAS, _bI, _cDT, _ta],
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
    128 | 0,
  ]
);
export var TagMap = 128 | 0;

export var CreateBotAlias = op(
  n0,
  _CBA,
  {
    [_h]: ["PUT", "/bots/{botId}/botaliases", 202],
  },
  () => CreateBotAliasRequest,
  () => CreateBotAliasResponse
);
