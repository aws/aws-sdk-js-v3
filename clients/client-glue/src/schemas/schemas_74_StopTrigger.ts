// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _N, _STRto, _STRtop, _STto, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopTriggerRequest = struct(n0, _STRto, 0, [_N], [0]);
export var StopTriggerResponse = struct(n0, _STRtop, 0, [_N], [0]);
export var StopTrigger = op(
  n0,
  _STto,
  0,
  () => StopTriggerRequest,
  () => StopTriggerResponse
);
