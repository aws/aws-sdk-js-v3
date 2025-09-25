// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMRS, _DMRSI, _DMRSO, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMatchmakingRuleSetInput = struct(n0, _DMRSI, 0, [_N], [0]);
export var DeleteMatchmakingRuleSetOutput = struct(n0, _DMRSO, 0, [], []);
export var DeleteMatchmakingRuleSet = op(
  n0,
  _DMRS,
  0,
  () => DeleteMatchmakingRuleSetInput,
  () => DeleteMatchmakingRuleSetOutput
);
