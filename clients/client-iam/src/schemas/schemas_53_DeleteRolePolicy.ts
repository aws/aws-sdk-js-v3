// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRP, _DRPR, _PN, _RN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRolePolicyRequest = struct(n0, _DRPR, 0, [_RN, _PN], [0, 0]);
export var DeleteRolePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteRolePolicyRequest,
  () => Unit
);
