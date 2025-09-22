// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _h,
  _hQ,
  _LR,
  _LRM,
  _LRMR,
  _LRMRi,
  _LRR,
  _LRRi,
  _mi,
  _MIe,
  _MR,
  _mr,
  _NT,
  _nt,
  _RI,
  _RL,
  _RML,
  _RMo,
  _Roo,
  n0,
} from "./schemas_0";
import { Room } from "./schemas_14_Room";
import { RoomMembership } from "./schemas_15_Room";

/* eslint no-var: 0 */

export var ListRoomMembershipsRequest = struct(
  n0,
  _LRMR,
  0,
  [_AI, _RI, _MR, _NT],
  [
    [0, 1],
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
export var ListRoomMembershipsResponse = struct(n0, _LRMRi, 0, [_RMo, _NT], [[() => RoomMembershipList, 0], 0]);
export var ListRoomsRequest = struct(
  n0,
  _LRR,
  0,
  [_AI, _MIe, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mi,
      },
    ],
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
export var ListRoomsResponse = struct(n0, _LRRi, 0, [_Roo, _NT], [[() => RoomList, 0], 0]);
export var RoomList = list(n0, _RL, 0, [() => Room, 0]);
export var RoomMembershipList = list(n0, _RML, 0, [() => RoomMembership, 0]);
export var ListRoomMemberships = op(
  n0,
  _LRM,
  {
    [_h]: ["GET", "/accounts/{AccountId}/rooms/{RoomId}/memberships", 200],
  },
  () => ListRoomMembershipsRequest,
  () => ListRoomMembershipsResponse
);
export var ListRooms = op(
  n0,
  _LR,
  {
    [_h]: ["GET", "/accounts/{AccountId}/rooms", 200],
  },
  () => ListRoomsRequest,
  () => ListRoomsResponse
);
