// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMC, _DMCI, _DMCO, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMatchmakingConfigurationInput = struct(n0, _DMCI, 0, [_N], [0]);
export var DeleteMatchmakingConfigurationOutput = struct(n0, _DMCO, 0, [], []);
export var DeleteMatchmakingConfiguration = op(
  n0,
  _DMC,
  0,
  () => DeleteMatchmakingConfigurationInput,
  () => DeleteMatchmakingConfigurationOutput
);
