// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DUPe, _DUPRe, _PA, _UN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DetachUserPolicyRequest = struct(n0, _DUPRe, 0, [_UN, _PA], [0, 0]);
export var DetachUserPolicy = op(
  n0,
  _DUPe,
  0,
  () => DetachUserPolicyRequest,
  () => Unit
);
