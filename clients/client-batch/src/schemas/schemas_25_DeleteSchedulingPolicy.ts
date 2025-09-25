// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DSP, _DSPR, _DSPRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSchedulingPolicyRequest = struct(n0, _DSPR, 0, [_a], [0]);
export var DeleteSchedulingPolicyResponse = struct(n0, _DSPRe, 0, [], []);
export var DeleteSchedulingPolicy = op(
  n0,
  _DSP,
  {
    [_ht]: ["POST", "/v1/deleteschedulingpolicy", 200],
  },
  () => DeleteSchedulingPolicyRequest,
  () => DeleteSchedulingPolicyResponse
);
