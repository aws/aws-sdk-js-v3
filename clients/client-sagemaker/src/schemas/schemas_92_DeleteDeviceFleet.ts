// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDF, _DDFR, _DFN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDeviceFleetRequest = struct(n0, _DDFR, 0, [_DFN], [0]);
export var DeleteDeviceFleet = op(
  n0,
  _DDF,
  0,
  () => DeleteDeviceFleetRequest,
  () => Unit
);
