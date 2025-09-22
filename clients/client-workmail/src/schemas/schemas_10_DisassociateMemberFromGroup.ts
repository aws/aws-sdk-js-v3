// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMFG, _DMFGR, _DMFGRi, _GI, _MI, _OI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateMemberFromGroupRequest = struct(n0, _DMFGR, 0, [_OI, _GI, _MI], [0, 0, 0]);
export var DisassociateMemberFromGroupResponse = struct(n0, _DMFGRi, 0, [], []);
export var DisassociateMemberFromGroup = op(
  n0,
  _DMFG,
  2,
  () => DisassociateMemberFromGroupRequest,
  () => DisassociateMemberFromGroupResponse
);
