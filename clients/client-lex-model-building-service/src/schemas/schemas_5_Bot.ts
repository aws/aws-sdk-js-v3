// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _bA,
  _bC,
  _bN,
  _bV,
  _CCM,
  _cD,
  _ch,
  _cL,
  _CLR,
  _CLRo,
  _d,
  _DBCA,
  _DBCAR,
  _de,
  _fR,
  _GBA,
  _GBARet,
  _GBAReto,
  _GBCA,
  _GBCAR,
  _GBCARe,
  _h,
  _iRA,
  _kKA,
  _lS,
  _LSR,
  _LSRL,
  _LSRLo,
  _LSRo,
  _lT,
  _lUD,
  _n,
  _PBA,
  _PBAR,
  _PBARu,
  _rA,
  _rP,
  _s,
  _t,
  _ta,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_3_Resource";

/* eslint no-var: 0 */

export var ConversationLogsRequest = struct(n0, _CLR, 0, [_lS, _iRA], [() => LogSettingsRequestList, 0]);
export var ConversationLogsResponse = struct(n0, _CLRo, 0, [_lS, _iRA], [() => LogSettingsResponseList, 0]);
export var DeleteBotChannelAssociationRequest = struct(
  n0,
  _DBCAR,
  0,
  [_n, _bN, _bA],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetBotAliasRequest = struct(
  n0,
  _GBARet,
  0,
  [_n, _bN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetBotAliasResponse = struct(
  n0,
  _GBAReto,
  0,
  [_n, _d, _bV, _bN, _lUD, _cD, _ch, _cL],
  [0, 0, 0, 0, 4, 4, 0, () => ConversationLogsResponse]
);
export var GetBotChannelAssociationRequest = struct(
  n0,
  _GBCAR,
  0,
  [_n, _bN, _bA],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetBotChannelAssociationResponse = struct(
  n0,
  _GBCARe,
  0,
  [_n, _d, _bA, _bN, _cD, _t, _bC, _s, _fR],
  [0, 0, 0, 0, 4, 0, [() => ChannelConfigurationMap, 0], 0, 0]
);
export var LogSettingsRequest = struct(n0, _LSR, 0, [_lT, _de, _kKA, _rA], [0, 0, 0, 0]);
export var LogSettingsResponse = struct(n0, _LSRo, 0, [_lT, _de, _kKA, _rA, _rP], [0, 0, 0, 0, 0]);
export var PutBotAliasRequest = struct(
  n0,
  _PBAR,
  0,
  [_n, _d, _bV, _bN, _ch, _cL, _ta],
  [[0, 1], 0, 0, [0, 1], 0, () => ConversationLogsRequest, () => TagList]
);
export var PutBotAliasResponse = struct(
  n0,
  _PBARu,
  0,
  [_n, _d, _bV, _bN, _lUD, _cD, _ch, _cL, _ta],
  [0, 0, 0, 0, 4, 4, 0, () => ConversationLogsResponse, () => TagList]
);
export var LogSettingsRequestList = list(n0, _LSRL, 0, () => LogSettingsRequest);
export var LogSettingsResponseList = list(n0, _LSRLo, 0, () => LogSettingsResponse);
export var ChannelConfigurationMap = map(n0, _CCM, 8, 0, 0);
export var DeleteBotChannelAssociation = op(
  n0,
  _DBCA,
  {
    [_h]: ["DELETE", "/bots/{botName}/aliases/{botAlias}/channels/{name}", 204],
  },
  () => DeleteBotChannelAssociationRequest,
  () => Unit
);
export var GetBotAlias = op(
  n0,
  _GBA,
  {
    [_h]: ["GET", "/bots/{botName}/aliases/{name}", 200],
  },
  () => GetBotAliasRequest,
  () => GetBotAliasResponse
);
export var GetBotChannelAssociation = op(
  n0,
  _GBCA,
  {
    [_h]: ["GET", "/bots/{botName}/aliases/{botAlias}/channels/{name}", 200],
  },
  () => GetBotChannelAssociationRequest,
  () => GetBotChannelAssociationResponse
);
export var PutBotAlias = op(
  n0,
  _PBA,
  {
    [_h]: ["PUT", "/bots/{botName}/aliases/{name}", 200],
  },
  () => PutBotAliasRequest,
  () => PutBotAliasResponse
);
