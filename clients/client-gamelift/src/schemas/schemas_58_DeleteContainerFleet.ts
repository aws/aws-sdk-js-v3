// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCF, _DCFI, _DCFO, _FI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteContainerFleetInput = struct(n0, _DCFI, 0, [_FI], [0]);
export var DeleteContainerFleetOutput = struct(n0, _DCFO, 0, [], []);
export var DeleteContainerFleet = op(
  n0,
  _DCF,
  0,
  () => DeleteContainerFleetInput,
  () => DeleteContainerFleetOutput
);
