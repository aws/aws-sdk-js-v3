// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import { ResourceLimitExceededException as __ResourceLimitExceededException } from "../models/index";
import {
  _AI,
  _BI,
  _C,
  _c,
  _CR,
  _CRM,
  _CRMR,
  _CRMRr,
  _CRR,
  _CRRr,
  _CRT,
  _DEC,
  _DECR,
  _e,
  _EC,
  _GEC,
  _GECR,
  _GECRe,
  _h,
  _hE,
  _LFA,
  _M,
  _MIe,
  _N,
  _OEHTTPSE,
  _PEC,
  _PECR,
  _PECRu,
  _R,
  _RI,
  _RLEE,
  _RM,
  _Ro,
  n0,
  SensitiveString,
  Unit,
} from "./schemas_0";
import { Room } from "./schemas_14_Room";
import { RoomMembership } from "./schemas_15_Room";

/* eslint no-var: 0 */

export var ClientRequestToken = sim(n0, _CRT, 0, 8);
export var CreateRoomMembershipRequest = struct(n0, _CRMR, 0, [_AI, _RI, _MIe, _R], [[0, 1], [0, 1], 0, 0]);
export var CreateRoomMembershipResponse = struct(n0, _CRMRr, 0, [_RM], [[() => RoomMembership, 0]]);
export var CreateRoomRequest = struct(
  n0,
  _CRR,
  0,
  [_AI, _N, _CRT],
  [
    [0, 1],
    [() => SensitiveString, 0],
    [() => ClientRequestToken, 4],
  ]
);
export var CreateRoomResponse = struct(n0, _CRRr, 0, [_Ro], [[() => Room, 0]]);
export var DeleteEventsConfigurationRequest = struct(
  n0,
  _DECR,
  0,
  [_AI, _BI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var EventsConfiguration = struct(
  n0,
  _EC,
  0,
  [_BI, _OEHTTPSE, _LFA],
  [0, [() => SensitiveString, 0], [() => SensitiveString, 0]]
);
export var GetEventsConfigurationRequest = struct(
  n0,
  _GECR,
  0,
  [_AI, _BI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetEventsConfigurationResponse = struct(n0, _GECRe, 0, [_EC], [[() => EventsConfiguration, 0]]);
export var PutEventsConfigurationRequest = struct(
  n0,
  _PECR,
  0,
  [_AI, _BI, _OEHTTPSE, _LFA],
  [
    [0, 1],
    [0, 1],
    [() => SensitiveString, 0],
    [() => SensitiveString, 0],
  ]
);
export var PutEventsConfigurationResponse = struct(n0, _PECRu, 0, [_EC], [[() => EventsConfiguration, 0]]);
export var ResourceLimitExceededException = error(
  n0,
  _RLEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_C, _M],
  [0, 0],

  __ResourceLimitExceededException
);
export var CreateRoom = op(
  n0,
  _CR,
  {
    [_h]: ["POST", "/accounts/{AccountId}/rooms", 201],
  },
  () => CreateRoomRequest,
  () => CreateRoomResponse
);
export var CreateRoomMembership = op(
  n0,
  _CRM,
  {
    [_h]: ["POST", "/accounts/{AccountId}/rooms/{RoomId}/memberships", 201],
  },
  () => CreateRoomMembershipRequest,
  () => CreateRoomMembershipResponse
);
export var DeleteEventsConfiguration = op(
  n0,
  _DEC,
  {
    [_h]: ["DELETE", "/accounts/{AccountId}/bots/{BotId}/events-configuration", 204],
  },
  () => DeleteEventsConfigurationRequest,
  () => Unit
);
export var GetEventsConfiguration = op(
  n0,
  _GEC,
  {
    [_h]: ["GET", "/accounts/{AccountId}/bots/{BotId}/events-configuration", 200],
  },
  () => GetEventsConfigurationRequest,
  () => GetEventsConfigurationResponse
);
export var PutEventsConfiguration = op(
  n0,
  _PEC,
  {
    [_h]: ["PUT", "/accounts/{AccountId}/bots/{BotId}/events-configuration", 201],
  },
  () => PutEventsConfigurationRequest,
  () => PutEventsConfigurationResponse
);
