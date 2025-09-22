// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CBr,
  _CT,
  _GR,
  _GRR,
  _GRRe,
  _h,
  _N,
  _RI,
  _Ro,
  _UR,
  _URR,
  _URRp,
  _UT,
  n0,
  SensitiveString,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRoomRequest = struct(
  n0,
  _GRR,
  0,
  [_AI, _RI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetRoomResponse = struct(n0, _GRRe, 0, [_Ro], [[() => Room, 0]]);
export var Room = struct(n0, _Ro, 0, [_RI, _N, _AI, _CBr, _CT, _UT], [0, [() => SensitiveString, 0], 0, 0, 5, 5]);
export var UpdateRoomRequest = struct(
  n0,
  _URR,
  0,
  [_AI, _RI, _N],
  [
    [0, 1],
    [0, 1],
    [() => SensitiveString, 0],
  ]
);
export var UpdateRoomResponse = struct(n0, _URRp, 0, [_Ro], [[() => Room, 0]]);
export var GetRoom = op(
  n0,
  _GR,
  {
    [_h]: ["GET", "/accounts/{AccountId}/rooms/{RoomId}", 200],
  },
  () => GetRoomRequest,
  () => GetRoomResponse
);
export var UpdateRoom = op(
  n0,
  _UR,
  {
    [_h]: ["POST", "/accounts/{AccountId}/rooms/{RoomId}", 200],
  },
  () => UpdateRoomRequest,
  () => UpdateRoomResponse
);
