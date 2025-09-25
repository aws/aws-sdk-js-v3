// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DAP, _DAPR, _DAPRe, _n, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteAccessPolicyRequest = struct(n0, _DAPR, 0, [_t, _n, _cT], [0, 0, [0, 4]]);
export var DeleteAccessPolicyResponse = struct(n0, _DAPRe, 0, [], []);
export var DeleteAccessPolicy = op(
  n0,
  _DAP,
  2,
  () => DeleteAccessPolicyRequest,
  () => DeleteAccessPolicyResponse
);
