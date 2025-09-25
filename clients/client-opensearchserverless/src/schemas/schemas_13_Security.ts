// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DSP, _DSPR, _DSPRe, _n, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSecurityPolicyRequest = struct(n0, _DSPR, 0, [_t, _n, _cT], [0, 0, [0, 4]]);
export var DeleteSecurityPolicyResponse = struct(n0, _DSPRe, 0, [], []);
export var DeleteSecurityPolicy = op(
  n0,
  _DSP,
  2,
  () => DeleteSecurityPolicyRequest,
  () => DeleteSecurityPolicyResponse
);
