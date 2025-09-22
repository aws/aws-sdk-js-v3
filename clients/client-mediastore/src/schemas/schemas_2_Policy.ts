// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _LP, _PLP, _PLPI, _PLPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutLifecyclePolicyInput = struct(n0, _PLPI, 0, [_CN, _LP], [0, 0]);
export var PutLifecyclePolicyOutput = struct(n0, _PLPO, 0, [], []);
export var PutLifecyclePolicy = op(
  n0,
  _PLP,
  0,
  () => PutLifecyclePolicyInput,
  () => PutLifecyclePolicyOutput
);
