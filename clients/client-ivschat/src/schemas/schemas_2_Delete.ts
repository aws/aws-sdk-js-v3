// smithy-typescript generated code
import { error, map, op, sim, struct } from "@smithy/core/schema";

import {
  ConflictException as __ConflictException,
  PendingVerification as __PendingVerification,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _a,
  _c,
  _ca,
  _CCT,
  _CCTR,
  _CCTRr,
  _CE,
  _CT,
  _CTA,
  _DLC,
  _DLCR,
  _DM,
  _DMR,
  _DMRe,
  _DR,
  _DRR,
  _DU,
  _DUR,
  _DURi,
  _e,
  _eN,
  _h,
  _hE,
  _i,
  _id,
  _l,
  _m,
  _PV,
  _r,
  _rI,
  _rIo,
  _rT,
  _sDIM,
  _SE,
  _SER,
  _SERe,
  _sET,
  _t,
  _TE,
  _tET,
  _uI,
  _UID,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ChatToken = sim(n0, _CT, 0, 8);
export var UserID = sim(n0, _UID, 0, 8);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var CreateChatTokenRequest = struct(
  n0,
  _CCTR,
  0,
  [_rIo, _uI, _ca, _sDIM, _a],
  [0, [() => UserID, 0], 64 | 0, 1, [() => ChatTokenAttributes, 0]]
);
export var CreateChatTokenResponse = struct(n0, _CCTRr, 0, [_t, _tET, _sET], [[() => ChatToken, 0], 5, 5]);
export var DeleteLoggingConfigurationRequest = struct(n0, _DLCR, 0, [_id], [0]);
export var DeleteMessageRequest = struct(n0, _DMR, 0, [_rIo, _i, _r], [0, 0, 0]);
export var DeleteMessageResponse = struct(n0, _DMRe, 0, [_i], [0]);
export var DeleteRoomRequest = struct(n0, _DRR, 0, [_id], [0]);
export var DisconnectUserRequest = struct(n0, _DUR, 0, [_rIo, _uI, _r], [0, [() => UserID, 0], 0]);
export var DisconnectUserResponse = struct(n0, _DURi, 0, [], []);
export var PendingVerification = error(
  n0,
  _PV,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __PendingVerification
);
export var SendEventRequest = struct(n0, _SER, 0, [_rIo, _eN, _a], [0, 0, 128 | 0]);
export var SendEventResponse = struct(n0, _SERe, 0, [_i], [0]);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m, _rI, _rT, _l],
  [0, 0, 0, 1],

  __ThrottlingException
);
export var ChatTokenCapabilities = 64 | 0;

export var ChatTokenAttributes = map(n0, _CTA, 8, 0, 0);
export var EventAttributes = 128 | 0;

export var CreateChatToken = op(
  n0,
  _CCT,
  {
    [_h]: ["POST", "/CreateChatToken", 200],
  },
  () => CreateChatTokenRequest,
  () => CreateChatTokenResponse
);
export var DeleteLoggingConfiguration = op(
  n0,
  _DLC,
  {
    [_h]: ["POST", "/DeleteLoggingConfiguration", 204],
  },
  () => DeleteLoggingConfigurationRequest,
  () => Unit
);
export var DeleteMessage = op(
  n0,
  _DM,
  {
    [_h]: ["POST", "/DeleteMessage", 200],
  },
  () => DeleteMessageRequest,
  () => DeleteMessageResponse
);
export var DeleteRoom = op(
  n0,
  _DR,
  {
    [_h]: ["POST", "/DeleteRoom", 204],
  },
  () => DeleteRoomRequest,
  () => Unit
);
export var DisconnectUser = op(
  n0,
  _DU,
  {
    [_h]: ["POST", "/DisconnectUser", 200],
  },
  () => DisconnectUserRequest,
  () => DisconnectUserResponse
);
export var SendEvent = op(
  n0,
  _SE,
  {
    [_h]: ["POST", "/SendEvent", 200],
  },
  () => SendEventRequest,
  () => SendEventResponse
);
