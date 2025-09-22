// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AIcc, _DMi, _DMRi, _DMRis, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateMembersRequest = struct(n0, _DMRi, 0, [_AIcc], [64 | 0]);
export var DisassociateMembersResponse = struct(n0, _DMRis, 0, [], []);
export var AccountIdList = 64 | 0;

export var DisassociateMembers = op(
  n0,
  _DMi,
  {
    [_h]: ["POST", "/members/disassociate", 200],
  },
  () => DisassociateMembersRequest,
  () => DisassociateMembersResponse
);
