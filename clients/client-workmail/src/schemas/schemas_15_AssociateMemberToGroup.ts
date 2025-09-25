// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AMTG, _AMTGR, _AMTGRs, _GI, _MI, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateMemberToGroupRequest = struct(n0, _AMTGR, 0, [_OI, _GI, _MI], [0, 0, 0]);
export var AssociateMemberToGroupResponse = struct(n0, _AMTGRs, 0, [], []);
export var AssociateMemberToGroup = op(
  n0,
  _AMTG,
  2,
  () => AssociateMemberToGroupRequest,
  () => AssociateMemberToGroupResponse
);
