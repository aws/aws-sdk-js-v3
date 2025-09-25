// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CPUS, _CPUSR, _CPUSRr, _DR, _PUSN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateProgressUpdateStreamRequest = struct(n0, _CPUSR, 0, [_PUSN, _DR], [0, 2]);
export var CreateProgressUpdateStreamResult = struct(n0, _CPUSRr, 0, [], []);
export var CreateProgressUpdateStream = op(
  n0,
  _CPUS,
  0,
  () => CreateProgressUpdateStreamRequest,
  () => CreateProgressUpdateStreamResult
);
