// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _N, _SFRto, _SFRtop, _SFt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopFleetRequest = struct(n0, _SFRto, 0, [_N], [0]);
export var StopFleetResult = struct(n0, _SFRtop, 0, [], []);
export var StopFleet = op(
  n0,
  _SFt,
  0,
  () => StopFleetRequest,
  () => StopFleetResult
);
