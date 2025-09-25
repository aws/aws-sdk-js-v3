// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPe, _DPR, _DPRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePolicyRequest = struct(n0, _DPR, 0, [], []);
export var DeletePolicyResponse = struct(n0, _DPRe, 0, [], []);
export var DeletePolicy = op(
  n0,
  _DPe,
  {
    [_ht]: ["DELETE", "/2017-08-29/policy", 200],
  },
  () => DeletePolicyRequest,
  () => DeletePolicyResponse
);
