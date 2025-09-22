// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _BCRM,
  _BCRMR,
  _BCRMRa,
  _E,
  _ECr,
  _EM,
  _Em,
  _FNu,
  _h,
  _IB,
  _ME,
  _Me,
  _MEL,
  _MIe,
  _MIem,
  _MIL,
  _MT,
  _R,
  _RI,
  _RM,
  _URM,
  _URMR,
  _URMRp,
  _UT,
  n0,
  SensitiveString,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchCreateRoomMembershipRequest = struct(
  n0,
  _BCRMR,
  0,
  [_AI, _RI, _MIL],
  [[0, 1], [0, 1], () => MembershipItemList]
);
export var BatchCreateRoomMembershipResponse = struct(n0, _BCRMRa, 0, [_E], [() => MemberErrorList]);
export var Member = struct(
  n0,
  _Me,
  0,
  [_MIe, _MT, _Em, _FNu, _AI],
  [0, 0, [() => SensitiveString, 0], [() => SensitiveString, 0], 0]
);
export var MemberError = struct(n0, _ME, 0, [_MIe, _ECr, _EM], [0, 0, 0]);
export var MembershipItem = struct(n0, _MIem, 0, [_MIe, _R], [0, 0]);
export var RoomMembership = struct(n0, _RM, 0, [_RI, _Me, _R, _IB, _UT], [0, [() => Member, 0], 0, 0, 5]);
export var UpdateRoomMembershipRequest = struct(n0, _URMR, 0, [_AI, _RI, _MIe, _R], [[0, 1], [0, 1], [0, 1], 0]);
export var UpdateRoomMembershipResponse = struct(n0, _URMRp, 0, [_RM], [[() => RoomMembership, 0]]);
export var MemberErrorList = list(n0, _MEL, 0, () => MemberError);
export var MembershipItemList = list(n0, _MIL, 0, () => MembershipItem);
export var BatchCreateRoomMembership = op(
  n0,
  _BCRM,
  {
    [_h]: ["POST", "/accounts/{AccountId}/rooms/{RoomId}/memberships?operation=batch-create", 201],
  },
  () => BatchCreateRoomMembershipRequest,
  () => BatchCreateRoomMembershipResponse
);
export var UpdateRoomMembership = op(
  n0,
  _URM,
  {
    [_h]: ["POST", "/accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}", 200],
  },
  () => UpdateRoomMembershipRequest,
  () => UpdateRoomMembershipResponse
);
