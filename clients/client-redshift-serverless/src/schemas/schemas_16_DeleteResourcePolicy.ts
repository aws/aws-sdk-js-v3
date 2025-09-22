// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRP, _DRPR, _DRPRe, _rAe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_rAe], [0]);
export var DeleteResourcePolicyResponse = struct(n0, _DRPRe, 0, [], []);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyRequest,
  () => DeleteResourcePolicyResponse
);
