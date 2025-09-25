// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AEI, _AEIR, _C, _h, _I, _REIej, _REIR, _RR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptEngagementInvitationRequest = struct(n0, _AEIR, 0, [_C, _I], [0, 0]);
export var RejectEngagementInvitationRequest = struct(n0, _REIR, 0, [_C, _I, _RR], [0, 0, 0]);
export var AcceptEngagementInvitation = op(
  n0,
  _AEI,
  {
    [_h]: ["POST", "/AcceptEngagementInvitation", 200],
  },
  () => AcceptEngagementInvitationRequest,
  () => Unit
);
export var RejectEngagementInvitation = op(
  n0,
  _REIej,
  {
    [_h]: ["POST", "/RejectEngagementInvitation", 200],
  },
  () => RejectEngagementInvitationRequest,
  () => Unit
);
