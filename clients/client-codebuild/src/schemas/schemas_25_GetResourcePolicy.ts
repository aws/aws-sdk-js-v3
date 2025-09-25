// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GRP, _GRPI, _GRPO, _po, _rAe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetResourcePolicyInput = struct(n0, _GRPI, 0, [_rAe], [0]);
export var GetResourcePolicyOutput = struct(n0, _GRPO, 0, [_po], [0]);
export var GetResourcePolicy = op(
  n0,
  _GRP,
  0,
  () => GetResourcePolicyInput,
  () => GetResourcePolicyOutput
);
