// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRPe, _DRPRe, _lGN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRetentionPolicyRequest = struct(n0, _DRPRe, 0, [_lGN], [0]);
export var DeleteRetentionPolicy = op(
  n0,
  _DRPe,
  0,
  () => DeleteRetentionPolicyRequest,
  () => Unit
);
