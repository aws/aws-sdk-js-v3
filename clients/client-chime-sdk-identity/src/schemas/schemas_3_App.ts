// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _AIA,
  _aia,
  _AIAA,
  _AIAL,
  _AIAp,
  _AIApp,
  _AIAS,
  _AIBA,
  _AIBL,
  _AIBp,
  _AIBS,
  _Ar,
  _C,
  _CAIA,
  _CAIAR,
  _CAIARr,
  _CAIB,
  _CAIBR,
  _CAIBRr,
  _CRT,
  _h,
  _hQ,
  _I,
  _IB,
  _L,
  _LAIA,
  _LAIAR,
  _LAIARi,
  _LAIB,
  _LAIBR,
  _LAIBRi,
  _LBAA,
  _LC,
  _LI,
  _M,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  _RN,
  _RT,
  _SM,
  _Ta,
  _TM,
  _UAIB,
  _UAIBR,
  _UAIBRp,
  _WI,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_1_App";
import { NextToken } from "./schemas_5_App";
import { Metadata } from "./schemas_13_App";

/* eslint no-var: 0 */

export var ResourceName = sim(n0, _RN, 0, 8);
export var AppInstanceAdminSummary = struct(n0, _AIAS, 0, [_A], [[() => Identity, 0]]);
export var AppInstanceBotSummary = struct(
  n0,
  _AIBS,
  0,
  [_AIBA, _N, _M],
  [0, [() => ResourceName, 0], [() => Metadata, 0]]
);
export var Configuration = struct(n0, _C, 0, [_L], [() => LexConfiguration]);
export var CreateAppInstanceAdminRequest = struct(n0, _CAIAR, 0, [_AIAA, _AIA], [0, [0, 1]]);
export var CreateAppInstanceAdminResponse = struct(n0, _CAIARr, 0, [_AIAp, _AIA], [[() => Identity, 0], 0]);
export var CreateAppInstanceBotRequest = struct(
  n0,
  _CAIBR,
  0,
  [_AIA, _N, _M, _CRT, _Ta, _C],
  [0, [() => ResourceName, 0], [() => Metadata, 0], [0, 4], [() => TagList, 0], () => Configuration]
);
export var CreateAppInstanceBotResponse = struct(n0, _CAIBRr, 0, [_AIBA], [0]);
export var Identity = struct(n0, _I, 0, [_Ar, _N], [0, [() => ResourceName, 0]]);
export var InvokedBy = struct(n0, _IB, 0, [_SM, _TM], [0, 0]);
export var LexConfiguration = struct(n0, _LC, 0, [_RT, _IB, _LBAA, _LI, _WI], [0, () => InvokedBy, 0, 0, 0]);
export var ListAppInstanceAdminsRequest = struct(
  n0,
  _LAIAR,
  0,
  [_AIA, _MR, _NT],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListAppInstanceAdminsResponse = struct(
  n0,
  _LAIARi,
  0,
  [_AIA, _AIApp, _NT],
  [0, [() => AppInstanceAdminList, 0], [() => NextToken, 0]]
);
export var ListAppInstanceBotsRequest = struct(
  n0,
  _LAIBR,
  0,
  [_AIA, _MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _aia,
      },
    ],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      () => NextToken,
      {
        [_hQ]: _nt,
      },
    ],
  ]
);
export var ListAppInstanceBotsResponse = struct(
  n0,
  _LAIBRi,
  0,
  [_AIA, _AIBp, _NT],
  [0, [() => AppInstanceBotList, 0], [() => NextToken, 0]]
);
export var UpdateAppInstanceBotRequest = struct(
  n0,
  _UAIBR,
  0,
  [_AIBA, _N, _M, _C],
  [[0, 1], [() => ResourceName, 0], [() => Metadata, 0], () => Configuration]
);
export var UpdateAppInstanceBotResponse = struct(n0, _UAIBRp, 0, [_AIBA], [0]);
export var AppInstanceAdminList = list(n0, _AIAL, 0, [() => AppInstanceAdminSummary, 0]);
export var AppInstanceBotList = list(n0, _AIBL, 0, [() => AppInstanceBotSummary, 0]);
export var CreateAppInstanceAdmin = op(
  n0,
  _CAIA,
  {
    [_h]: ["POST", "/app-instances/{AppInstanceArn}/admins", 201],
  },
  () => CreateAppInstanceAdminRequest,
  () => CreateAppInstanceAdminResponse
);
export var CreateAppInstanceBot = op(
  n0,
  _CAIB,
  {
    [_h]: ["POST", "/app-instance-bots", 201],
  },
  () => CreateAppInstanceBotRequest,
  () => CreateAppInstanceBotResponse
);
export var ListAppInstanceAdmins = op(
  n0,
  _LAIA,
  {
    [_h]: ["GET", "/app-instances/{AppInstanceArn}/admins", 200],
  },
  () => ListAppInstanceAdminsRequest,
  () => ListAppInstanceAdminsResponse
);
export var ListAppInstanceBots = op(
  n0,
  _LAIB,
  {
    [_h]: ["GET", "/app-instance-bots", 200],
  },
  () => ListAppInstanceBotsRequest,
  () => ListAppInstanceBotsResponse
);
export var UpdateAppInstanceBot = op(
  n0,
  _UAIB,
  {
    [_h]: ["PUT", "/app-instance-bots/{AppInstanceBotArn}", 200],
  },
  () => UpdateAppInstanceBotRequest,
  () => UpdateAppInstanceBotResponse
);
