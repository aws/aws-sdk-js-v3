// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GIC, _GICR, _GICRe, _h, _ICnv, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetInvitationsCountRequest = struct(n0, _GICR, 0, [], []);
export var GetInvitationsCountResponse = struct(n0, _GICRe, 0, [_ICnv], [1]);
export var GetInvitationsCount = op(
  n0,
  _GIC,
  {
    [_h]: ["GET", "/invitations/count", 200],
  },
  () => GetInvitationsCountRequest,
  () => GetInvitationsCountResponse
);
