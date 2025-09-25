// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DM, _DMR, _DMRi, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateMemberRequest = struct(n0, _DMR, 0, [_aI], [0]);
export var DisassociateMemberResponse = struct(n0, _DMRi, 0, [_aI], [0]);
export var DisassociateMember = op(
  n0,
  _DM,
  {
    [_ht]: ["POST", "/members/disassociate", 200],
  },
  () => DisassociateMemberRequest,
  () => DisassociateMemberResponse
);
