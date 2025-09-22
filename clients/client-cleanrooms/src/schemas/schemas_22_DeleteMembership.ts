// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMe, _DMIe, _DMOe, _h, _mIe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMembershipInput = struct(n0, _DMIe, 0, [_mIe], [[0, 1]]);
export var DeleteMembershipOutput = struct(n0, _DMOe, 0, [], []);
export var DeleteMembership = op(
  n0,
  _DMe,
  {
    [_h]: ["DELETE", "/memberships/{membershipIdentifier}", 204],
  },
  () => DeleteMembershipInput,
  () => DeleteMembershipOutput
);
