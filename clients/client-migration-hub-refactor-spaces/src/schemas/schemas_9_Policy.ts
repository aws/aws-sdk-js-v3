// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRP, _DRPR, _DRPRe, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_I], [[0, 1]]);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [], []);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["DELETE", "/resourcepolicy/{Identifier}", 200],
  },
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
