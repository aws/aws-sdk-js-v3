// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRPe, _DRPRe, _PA, _RN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DetachRolePolicyRequest = struct(n0, _DRPRe, 0, [_RN, _PA], [0, 0]);
export var DetachRolePolicy = op(
  n0,
  _DRPe,
  0,
  () => DetachRolePolicyRequest,
  () => Unit
);
