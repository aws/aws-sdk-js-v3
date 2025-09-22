// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ATS, _cR, _d, _RATH, _RATHI, _tT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ActivityTaskStatus = struct(n0, _ATS, 0, [_cR], [2]);
export var RecordActivityTaskHeartbeatInput = struct(n0, _RATHI, 0, [_tT, _d], [0, 0]);
export var RecordActivityTaskHeartbeat = op(
  n0,
  _RATH,
  0,
  () => RecordActivityTaskHeartbeatInput,
  () => ActivityTaskStatus
);
