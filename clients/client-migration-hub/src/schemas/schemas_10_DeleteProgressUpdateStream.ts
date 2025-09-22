// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPUS, _DPUSR, _DPUSRe, _DR, _PUSN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProgressUpdateStreamRequest = struct(n0, _DPUSR, 0, [_PUSN, _DR], [0, 2]);
export var DeleteProgressUpdateStreamResult = struct(n0, _DPUSRe, 0, [], []);
export var DeleteProgressUpdateStream = op(
  n0,
  _DPUS,
  0,
  () => DeleteProgressUpdateStreamRequest,
  () => DeleteProgressUpdateStreamResult
);
