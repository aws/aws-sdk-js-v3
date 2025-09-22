// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRP, _DRPR, _DRPRe, _h, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_RA], [[0, 1]]);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [], []);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["DELETE", "/resource-policy/{ResourceArn}", 200],
  },
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
