// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _B,
  _BE,
  _BI,
  _BL,
  _Bo,
  _BT,
  _CBR,
  _CBre,
  _CBRr,
  _CT,
  _D,
  _DN,
  _Do,
  _GB,
  _GBR,
  _GBRe,
  _h,
  _hQ,
  _LB,
  _LBR,
  _LBRi,
  _MR,
  _mr,
  _NT,
  _nt,
  _RST,
  _RSTR,
  _RSTRe,
  _ST,
  _UB,
  _UBR,
  _UBRp,
  _UI,
  _UT,
  n0,
  SensitiveString,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Bot = struct(
  n0,
  _B,
  0,
  [_BI, _UI, _DN, _BT, _D, _CT, _UT, _BE, _ST],
  [0, 0, [() => SensitiveString, 0], 0, 2, 5, 5, [() => SensitiveString, 0], [() => SensitiveString, 0]]
);
export var CreateBotRequest = struct(n0, _CBR, 0, [_AI, _DN, _Do], [[0, 1], [() => SensitiveString, 0], 0]);
export var CreateBotResponse = struct(n0, _CBRr, 0, [_B], [[() => Bot, 0]]);
export var GetBotRequest = struct(
  n0,
  _GBR,
  0,
  [_AI, _BI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetBotResponse = struct(n0, _GBRe, 0, [_B], [[() => Bot, 0]]);
export var ListBotsRequest = struct(
  n0,
  _LBR,
  0,
  [_AI, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListBotsResponse = struct(n0, _LBRi, 0, [_Bo, _NT], [[() => BotList, 0], 0]);
export var RegenerateSecurityTokenRequest = struct(
  n0,
  _RSTR,
  0,
  [_AI, _BI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var RegenerateSecurityTokenResponse = struct(n0, _RSTRe, 0, [_B], [[() => Bot, 0]]);
export var UpdateBotRequest = struct(n0, _UBR, 0, [_AI, _BI, _D], [[0, 1], [0, 1], 2]);
export var UpdateBotResponse = struct(n0, _UBRp, 0, [_B], [[() => Bot, 0]]);
export var BotList = list(n0, _BL, 0, [() => Bot, 0]);
export var CreateBot = op(
  n0,
  _CBre,
  {
    [_h]: ["POST", "/accounts/{AccountId}/bots", 201],
  },
  () => CreateBotRequest,
  () => CreateBotResponse
);
export var GetBot = op(
  n0,
  _GB,
  {
    [_h]: ["GET", "/accounts/{AccountId}/bots/{BotId}", 200],
  },
  () => GetBotRequest,
  () => GetBotResponse
);
export var ListBots = op(
  n0,
  _LB,
  {
    [_h]: ["GET", "/accounts/{AccountId}/bots", 200],
  },
  () => ListBotsRequest,
  () => ListBotsResponse
);
export var RegenerateSecurityToken = op(
  n0,
  _RST,
  {
    [_h]: ["POST", "/accounts/{AccountId}/bots/{BotId}?operation=regenerate-security-token", 200],
  },
  () => RegenerateSecurityTokenRequest,
  () => RegenerateSecurityTokenResponse
);
export var UpdateBot = op(
  n0,
  _UB,
  {
    [_h]: ["POST", "/accounts/{AccountId}/bots/{BotId}", 200],
  },
  () => UpdateBotRequest,
  () => UpdateBotResponse
);
