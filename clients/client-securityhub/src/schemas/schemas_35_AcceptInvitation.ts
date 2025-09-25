// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIcce, _AIR, _AIRc, _h, _II, _MI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptInvitationRequest = struct(n0, _AIR, 0, [_MI, _II], [0, 0]);
export var AcceptInvitationResponse = struct(n0, _AIRc, 0, [], []);
export var AcceptInvitation = op(
  n0,
  _AIcce,
  {
    [_h]: ["POST", "/master", 200],
  },
  () => AcceptInvitationRequest,
  () => AcceptInvitationResponse
);
