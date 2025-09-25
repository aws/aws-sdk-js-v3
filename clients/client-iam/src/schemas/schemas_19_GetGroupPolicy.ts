// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GGP, _GGPR, _GGPRe, _GN, _PD, _PN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetGroupPolicyRequest = struct(n0, _GGPR, 0, [_GN, _PN], [0, 0]);
export var GetGroupPolicyResponse = struct(n0, _GGPRe, 0, [_GN, _PN, _PD], [0, 0, 0]);
export var GetGroupPolicy = op(
  n0,
  _GGP,
  0,
  () => GetGroupPolicyRequest,
  () => GetGroupPolicyResponse
);
