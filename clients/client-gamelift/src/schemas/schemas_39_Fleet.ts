// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DFL, _DFLI, _DFLO, _FA, _FI, _L, _Lo, _LS, _LSL, _LSo, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFleetLocationsInput = struct(n0, _DFLI, 0, [_FI, _Lo], [0, 64 | 0]);
export var DeleteFleetLocationsOutput = struct(n0, _DFLO, 0, [_FI, _FA, _LS], [0, 0, () => LocationStateList]);
export var LocationState = struct(n0, _LSo, 0, [_L, _St], [0, 0]);
export var LocationStateList = list(n0, _LSL, 0, () => LocationState);
export var DeleteFleetLocations = op(
  n0,
  _DFL,
  0,
  () => DeleteFleetLocationsInput,
  () => DeleteFleetLocationsOutput
);
