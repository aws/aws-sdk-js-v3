// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DRM, _DRMR, _h, _MIe, _RI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRoomMembershipRequest = struct(
  n0,
  _DRMR,
  0,
  [_AI, _RI, _MIe],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRoomMembership = op(
  n0,
  _DRM,
  {
    [_h]: ["DELETE", "/accounts/{AccountId}/rooms/{RoomId}/memberships/{MemberId}", 204],
  },
  () => DeleteRoomMembershipRequest,
  () => Unit
);
