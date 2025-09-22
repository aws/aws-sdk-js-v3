// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _b,
  _BA,
  _bA,
  _BAM,
  _BAML,
  _bC,
  _BCA,
  _bCA,
  _BCAL,
  _BIM,
  _BIML,
  _BM,
  _BML,
  _bN,
  _BSTM,
  _BSTML,
  _bV,
  _cD,
  _ch,
  _cL,
  _d,
  _fR,
  _GBAe,
  _GBAR,
  _GBARe,
  _GBCAe,
  _GBCARet,
  _GBCAReto,
  _GBe,
  _GBIe,
  _GBIRet,
  _GBIRetu,
  _GBRet,
  _GBReto,
  _GBST,
  _GBSTR,
  _GBSTRe,
  _GBV,
  _GBVR,
  _GBVRe,
  _GIet,
  _GIRetnt,
  _GIRetnte,
  _GIV,
  _GIVR,
  _GIVRe,
  _GMe,
  _GMRet,
  _GMReti,
  _GSTe,
  _GSTRet,
  _GSTRetl,
  _GSTV,
  _GSTVR,
  _GSTVRe,
  _h,
  _hQ,
  _i,
  _IM,
  _IML,
  _l,
  _lUD,
  _mI,
  _mR,
  _MS,
  _mSE,
  _mSi,
  _mSig,
  _mSigr,
  _MSL,
  _mT,
  _n,
  _nC,
  _nT,
  _s,
  _sBA,
  _sBO,
  _sC,
  _si,
  _sL,
  _sT,
  _STM,
  _STML,
  _t,
  _v,
  _vBI,
  _vBL,
  _vBN,
  _vBNC,
  _vBR,
  _vBV,
  n0,
} from "./schemas_0";
import { ChannelConfigurationMap, ConversationLogsResponse } from "./schemas_5_Bot";

/* eslint no-var: 0 */

export var BotAliasMetadata = struct(
  n0,
  _BAM,
  0,
  [_n, _d, _bV, _bN, _lUD, _cD, _ch, _cL],
  [0, 0, 0, 0, 4, 4, 0, () => ConversationLogsResponse]
);
export var BotChannelAssociation = struct(
  n0,
  _BCA,
  0,
  [_n, _d, _bA, _bN, _cD, _t, _bC, _s, _fR],
  [0, 0, 0, 0, 4, 0, [() => ChannelConfigurationMap, 0], 0, 0]
);
export var BotMetadata = struct(n0, _BM, 0, [_n, _d, _s, _lUD, _cD, _v], [0, 0, 0, 4, 4, 0]);
export var BuiltinIntentMetadata = struct(n0, _BIM, 0, [_si, _sL], [0, 64 | 0]);
export var BuiltinSlotTypeMetadata = struct(n0, _BSTM, 0, [_si, _sL], [0, 64 | 0]);
export var GetBotAliasesRequest = struct(
  n0,
  _GBAR,
  0,
  [_bN, _nT, _mR, _nC],
  [
    [0, 1],
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
    [
      0,
      {
        [_hQ]: _nC,
      },
    ],
  ]
);
export var GetBotAliasesResponse = struct(n0, _GBARe, 0, [_BA, _nT], [() => BotAliasMetadataList, 0]);
export var GetBotChannelAssociationsRequest = struct(
  n0,
  _GBCARet,
  0,
  [_bN, _bA, _nT, _mR, _nC],
  [
    [0, 1],
    [0, 1],
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
    [
      0,
      {
        [_hQ]: _nC,
      },
    ],
  ]
);
export var GetBotChannelAssociationsResponse = struct(
  n0,
  _GBCAReto,
  0,
  [_bCA, _nT],
  [[() => BotChannelAssociationList, 0], 0]
);
export var GetBotsRequest = struct(
  n0,
  _GBRet,
  0,
  [_nT, _mR, _nC],
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
    [
      0,
      {
        [_hQ]: _nC,
      },
    ],
  ]
);
export var GetBotsResponse = struct(n0, _GBReto, 0, [_b, _nT], [() => BotMetadataList, 0]);
export var GetBotVersionsRequest = struct(
  n0,
  _GBVR,
  0,
  [_n, _nT, _mR],
  [
    [0, 1],
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
export var GetBotVersionsResponse = struct(n0, _GBVRe, 0, [_b, _nT], [() => BotMetadataList, 0]);
export var GetBuiltinIntentsRequest = struct(
  n0,
  _GBIRet,
  0,
  [_l, _sC, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _sC,
      },
    ],
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
export var GetBuiltinIntentsResponse = struct(n0, _GBIRetu, 0, [_i, _nT], [() => BuiltinIntentMetadataList, 0]);
export var GetBuiltinSlotTypesRequest = struct(
  n0,
  _GBSTR,
  0,
  [_l, _sC, _nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _l,
      },
    ],
    [
      0,
      {
        [_hQ]: _sC,
      },
    ],
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
export var GetBuiltinSlotTypesResponse = struct(n0, _GBSTRe, 0, [_sT, _nT], [() => BuiltinSlotTypeMetadataList, 0]);
export var GetIntentsRequest = struct(
  n0,
  _GIRetnt,
  0,
  [_nT, _mR, _nC],
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
    [
      0,
      {
        [_hQ]: _nC,
      },
    ],
  ]
);
export var GetIntentsResponse = struct(n0, _GIRetnte, 0, [_i, _nT], [() => IntentMetadataList, 0]);
export var GetIntentVersionsRequest = struct(
  n0,
  _GIVR,
  0,
  [_n, _nT, _mR],
  [
    [0, 1],
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
export var GetIntentVersionsResponse = struct(n0, _GIVRe, 0, [_i, _nT], [() => IntentMetadataList, 0]);
export var GetMigrationsRequest = struct(
  n0,
  _GMRet,
  0,
  [_sBA, _sBO, _vBNC, _mSE, _mR, _nT],
  [
    [
      0,
      {
        [_hQ]: _sBA,
      },
    ],
    [
      0,
      {
        [_hQ]: _sBO,
      },
    ],
    [
      0,
      {
        [_hQ]: _vBNC,
      },
    ],
    [
      0,
      {
        [_hQ]: _mSE,
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
  ]
);
export var GetMigrationsResponse = struct(n0, _GMReti, 0, [_mSigr, _nT], [() => MigrationSummaryList, 0]);
export var GetSlotTypesRequest = struct(
  n0,
  _GSTRet,
  0,
  [_nT, _mR, _nC],
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
    [
      0,
      {
        [_hQ]: _nC,
      },
    ],
  ]
);
export var GetSlotTypesResponse = struct(n0, _GSTRetl, 0, [_sT, _nT], [() => SlotTypeMetadataList, 0]);
export var GetSlotTypeVersionsRequest = struct(
  n0,
  _GSTVR,
  0,
  [_n, _nT, _mR],
  [
    [0, 1],
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
export var GetSlotTypeVersionsResponse = struct(n0, _GSTVRe, 0, [_sT, _nT], [() => SlotTypeMetadataList, 0]);
export var IntentMetadata = struct(n0, _IM, 0, [_n, _d, _lUD, _cD, _v], [0, 0, 4, 4, 0]);
export var MigrationSummary = struct(
  n0,
  _MS,
  0,
  [_mI, _vBN, _vBV, _vBL, _vBI, _vBR, _mSi, _mSig, _mT],
  [0, 0, 0, 0, 0, 0, 0, 0, 4]
);
export var SlotTypeMetadata = struct(n0, _STM, 0, [_n, _d, _lUD, _cD, _v], [0, 0, 4, 4, 0]);
export var BotAliasMetadataList = list(n0, _BAML, 0, () => BotAliasMetadata);
export var BotChannelAssociationList = list(n0, _BCAL, 0, [() => BotChannelAssociation, 0]);
export var BotMetadataList = list(n0, _BML, 0, () => BotMetadata);
export var BuiltinIntentMetadataList = list(n0, _BIML, 0, () => BuiltinIntentMetadata);
export var BuiltinSlotTypeMetadataList = list(n0, _BSTML, 0, () => BuiltinSlotTypeMetadata);
export var IntentMetadataList = list(n0, _IML, 0, () => IntentMetadata);
export var MigrationSummaryList = list(n0, _MSL, 0, () => MigrationSummary);
export var SlotTypeMetadataList = list(n0, _STML, 0, () => SlotTypeMetadata);
export var GetBotAliases = op(
  n0,
  _GBAe,
  {
    [_h]: ["GET", "/bots/{botName}/aliases", 200],
  },
  () => GetBotAliasesRequest,
  () => GetBotAliasesResponse
);
export var GetBotChannelAssociations = op(
  n0,
  _GBCAe,
  {
    [_h]: ["GET", "/bots/{botName}/aliases/{botAlias}/channels", 200],
  },
  () => GetBotChannelAssociationsRequest,
  () => GetBotChannelAssociationsResponse
);
export var GetBots = op(
  n0,
  _GBe,
  {
    [_h]: ["GET", "/bots", 200],
  },
  () => GetBotsRequest,
  () => GetBotsResponse
);
export var GetBotVersions = op(
  n0,
  _GBV,
  {
    [_h]: ["GET", "/bots/{name}/versions", 200],
  },
  () => GetBotVersionsRequest,
  () => GetBotVersionsResponse
);
export var GetBuiltinIntents = op(
  n0,
  _GBIe,
  {
    [_h]: ["GET", "/builtins/intents", 200],
  },
  () => GetBuiltinIntentsRequest,
  () => GetBuiltinIntentsResponse
);
export var GetBuiltinSlotTypes = op(
  n0,
  _GBST,
  {
    [_h]: ["GET", "/builtins/slottypes", 200],
  },
  () => GetBuiltinSlotTypesRequest,
  () => GetBuiltinSlotTypesResponse
);
export var GetIntents = op(
  n0,
  _GIet,
  {
    [_h]: ["GET", "/intents", 200],
  },
  () => GetIntentsRequest,
  () => GetIntentsResponse
);
export var GetIntentVersions = op(
  n0,
  _GIV,
  {
    [_h]: ["GET", "/intents/{name}/versions", 200],
  },
  () => GetIntentVersionsRequest,
  () => GetIntentVersionsResponse
);
export var GetMigrations = op(
  n0,
  _GMe,
  {
    [_h]: ["GET", "/migrations", 200],
  },
  () => GetMigrationsRequest,
  () => GetMigrationsResponse
);
export var GetSlotTypes = op(
  n0,
  _GSTe,
  {
    [_h]: ["GET", "/slottypes", 200],
  },
  () => GetSlotTypesRequest,
  () => GetSlotTypesResponse
);
export var GetSlotTypeVersions = op(
  n0,
  _GSTV,
  {
    [_h]: ["GET", "/slottypes/{name}/versions", 200],
  },
  () => GetSlotTypeVersionsRequest,
  () => GetSlotTypeVersionsResponse
);
