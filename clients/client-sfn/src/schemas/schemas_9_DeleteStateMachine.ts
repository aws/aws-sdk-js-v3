// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSM, _DSMI, _DSMO, _sMA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteStateMachineInput = struct(n0, _DSMI, 0, [_sMA], [0]);
export var DeleteStateMachineOutput = struct(n0, _DSMO, 0, [], []);
export var DeleteStateMachine = op(
  n0,
  _DSM,
  0,
  () => DeleteStateMachineInput,
  () => DeleteStateMachineOutput
);
