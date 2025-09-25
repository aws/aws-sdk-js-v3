// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DGP, _DGPR, _GN, _PN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGroupPolicyRequest = struct(n0, _DGPR, 0, [_GN, _PN], [0, 0]);
export var DeleteGroupPolicy = op(
  n0,
  _DGP,
  0,
  () => DeleteGroupPolicyRequest,
  () => Unit
);
