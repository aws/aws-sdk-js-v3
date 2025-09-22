// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cTl, _DRP, _DRPR, _DRPRe, _h, _pA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResiliencyPolicyRequest = struct(n0, _DRPR, 0, [_pA, _cTl], [0, [0, 4]]);
export var DeleteResiliencyPolicyResponse = struct(n0, _DRPRe, 0, [_pA], [0]);
export var DeleteResiliencyPolicy = op(
  n0,
  _DRP,
  {
    [_h]: ["POST", "/delete-resiliency-policy", 200],
  },
  () => DeleteResiliencyPolicyRequest,
  () => DeleteResiliencyPolicyResponse
);
