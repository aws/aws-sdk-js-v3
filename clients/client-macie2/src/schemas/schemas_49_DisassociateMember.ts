// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMis, _DMRisa, _DMRisas, _h, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateMemberRequest = struct(n0, _DMRisa, 0, [_i], [[0, 1]]);
export var DisassociateMemberResponse = struct(n0, _DMRisas, 0, [], []);
export var DisassociateMember = op(
  n0,
  _DMis,
  {
    [_h]: ["POST", "/members/disassociate/{id}", 200],
  },
  () => DisassociateMemberRequest,
  () => DisassociateMemberResponse
);
