// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GP, _GPR, _GPRe, _Po, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetPolicyRequest = struct(n0, _GPR, 0, [_RA], [0]);
export var GetPolicyResponse = struct(n0, _GPRe, 0, [_Po], [0]);
export var GetPolicy = op(
  n0,
  _GP,
  0,
  () => GetPolicyRequest,
  () => GetPolicyResponse
);
