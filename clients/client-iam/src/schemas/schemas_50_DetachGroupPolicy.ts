// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DGPe, _DGPRe, _GN, _PA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DetachGroupPolicyRequest = struct(n0, _DGPRe, 0, [_GN, _PA], [0, 0]);
export var DetachGroupPolicy = op(
  n0,
  _DGPe,
  0,
  () => DetachGroupPolicyRequest,
  () => Unit
);
