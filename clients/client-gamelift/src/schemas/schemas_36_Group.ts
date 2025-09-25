// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _RSB, _Val, _VMRS, _VMRSI, _VMRSO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ValidateMatchmakingRuleSetInput = struct(n0, _VMRSI, 0, [_RSB], [0]);
export var ValidateMatchmakingRuleSetOutput = struct(n0, _VMRSO, 0, [_Val], [2]);
export var ValidateMatchmakingRuleSet = op(
  n0,
  _VMRS,
  0,
  () => ValidateMatchmakingRuleSetInput,
  () => ValidateMatchmakingRuleSetOutput
);
