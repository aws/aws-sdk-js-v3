// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DF, _DFI, _DFO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFleetInput = struct(n0, _DFI, 0, [_a], [0]);
export var DeleteFleetOutput = struct(n0, _DFO, 0, [], []);
export var DeleteFleet = op(
  n0,
  _DF,
  0,
  () => DeleteFleetInput,
  () => DeleteFleetOutput
);
