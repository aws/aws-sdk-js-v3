// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DM, _DMR, _DMRe, _h, _i, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMemberRequest = struct(n0, _DMR, 0, [_i], [[0, 1]]);
export var DeleteMemberResponse = struct(n0, _DMRe, 0, [], []);
export var DeleteMember = op(
  n0,
  _DM,
  {
    [_h]: ["DELETE", "/members/{id}", 200],
  },
  () => DeleteMemberRequest,
  () => DeleteMemberResponse
);
