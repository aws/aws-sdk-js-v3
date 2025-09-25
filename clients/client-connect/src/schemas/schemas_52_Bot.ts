// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AB,
  _ABR,
  _ALB,
  _ALBR,
  _BN,
  _bN,
  _CT,
  _cT,
  _DB,
  _DBR,
  _DLB,
  _DLBR,
  _h,
  _hQ,
  _II,
  _iT,
  _LB,
  _LBC,
  _LBCL,
  _LBe,
  _LBi,
  _LBL,
  _LBR,
  _LBRi,
  _LLB,
  _LLBR,
  _LLBRi,
  _LR,
  _lR,
  _lV,
  _LVB,
  _LVe,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateBotRequest = struct(
  n0,
  _ABR,
  0,
  [_II, _LB, _LVB, _CT],
  [[0, 1], () => LexBot, () => LexV2Bot, [0, 4]]
);
export var AssociateLexBotRequest = struct(n0, _ALBR, 0, [_II, _LB, _CT], [[0, 1], () => LexBot, [0, 4]]);
export var DisassociateBotRequest = struct(
  n0,
  _DBR,
  0,
  [_II, _LB, _LVB, _CT],
  [[0, 1], () => LexBot, () => LexV2Bot, [0, 4]]
);
export var DisassociateLexBotRequest = struct(
  n0,
  _DLBR,
  0,
  [_II, _BN, _LR, _CT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _bN,
      },
    ],
    [
      0,
      {
        [_hQ]: _lR,
      },
    ],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var LexBot = struct(n0, _LB, 0, [_N, _LR], [0, 0]);
export var LexBotConfig = struct(n0, _LBC, 0, [_LB, _LVB], [() => LexBot, () => LexV2Bot]);
export var LexV2Bot = struct(n0, _LVB, 0, [_AA], [0]);
export var ListBotsRequest = struct(
  n0,
  _LBR,
  0,
  [_II, _NT, _MRa, _LVe],
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
        [_hQ]: _lV,
      },
    ],
  ]
);
export var ListBotsResponse = struct(n0, _LBRi, 0, [_LBe, _NT], [() => LexBotConfigList, 0]);
export var ListLexBotsRequest = struct(
  n0,
  _LLBR,
  0,
  [_II, _NT, _MRa],
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
export var ListLexBotsResponse = struct(n0, _LLBRi, 0, [_LBe, _NT], [() => LexBotsList, 0]);
export var LexBotConfigList = list(n0, _LBCL, 0, () => LexBotConfig);
export var LexBotsList = list(n0, _LBL, 0, () => LexBot);
export var AssociateBot = op(
  n0,
  _AB,
  {
    [_h]: ["PUT", "/instance/{InstanceId}/bot", 200],
  },
  () => AssociateBotRequest,
  () => Unit
);
export var AssociateLexBot = op(
  n0,
  _ALB,
  {
    [_h]: ["PUT", "/instance/{InstanceId}/lex-bot", 200],
  },
  () => AssociateLexBotRequest,
  () => Unit
);
export var DisassociateBot = op(
  n0,
  _DB,
  {
    [_h]: ["POST", "/instance/{InstanceId}/bot", 200],
  },
  () => DisassociateBotRequest,
  () => Unit
);
export var DisassociateLexBot = op(
  n0,
  _DLB,
  {
    [_h]: ["DELETE", "/instance/{InstanceId}/lex-bot", 200],
  },
  () => DisassociateLexBotRequest,
  () => Unit
);
export var ListBots = op(
  n0,
  _LBi,
  {
    [_h]: ["GET", "/instance/{InstanceId}/bots", 200],
  },
  () => ListBotsRequest,
  () => ListBotsResponse
);
export var ListLexBots = op(
  n0,
  _LLB,
  {
    [_h]: ["GET", "/instance/{InstanceId}/lex-bots", 200],
  },
  () => ListLexBotsRequest,
  () => ListLexBotsResponse
);
