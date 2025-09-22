// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GUP, _GUPR, _GUPRe, _PD, _PN, _UN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetUserPolicyRequest = struct(n0, _GUPR, 0, [_UN, _PN], [0, 0]);
export var GetUserPolicyResponse = struct(n0, _GUPRe, 0, [_UN, _PN, _PD], [0, 0, 0]);
export var GetUserPolicy = op(
  n0,
  _GUP,
  0,
  () => GetUserPolicyRequest,
  () => GetUserPolicyResponse
);
