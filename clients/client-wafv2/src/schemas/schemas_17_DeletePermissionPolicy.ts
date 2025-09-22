// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPP, _DPPR, _DPPRe, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePermissionPolicyRequest = struct(n0, _DPPR, 0, [_RA], [0]);
export var DeletePermissionPolicyResponse = struct(n0, _DPPRe, 0, [], []);
export var DeletePermissionPolicy = op(
  n0,
  _DPP,
  0,
  () => DeletePermissionPolicyRequest,
  () => DeletePermissionPolicyResponse
);
