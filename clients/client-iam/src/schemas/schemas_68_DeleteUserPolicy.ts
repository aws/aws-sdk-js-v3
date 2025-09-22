// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DUP, _DUPR, _PN, _UN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteUserPolicyRequest = struct(n0, _DUPR, 0, [_UN, _PN], [0, 0]);
export var DeleteUserPolicy = op(
  n0,
  _DUP,
  0,
  () => DeleteUserPolicyRequest,
  () => Unit
);
