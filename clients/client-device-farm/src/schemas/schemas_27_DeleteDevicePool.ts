// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DDP, _DDPR, _DDPRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDevicePoolRequest = struct(n0, _DDPR, 0, [_a], [0]);
export var DeleteDevicePoolResult = struct(n0, _DDPRe, 0, [], []);
export var DeleteDevicePool = op(
  n0,
  _DDP,
  0,
  () => DeleteDevicePoolRequest,
  () => DeleteDevicePoolResult
);
