// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRP, _DRPI, _DRPO, _rAe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyInput = struct(n0, _DRPI, 0, [_rAe], [0]);
export var DeleteResourcePolicyOutput = struct(n0, _DRPO, 0, [], []);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyInput,
  () => DeleteResourcePolicyOutput
);
