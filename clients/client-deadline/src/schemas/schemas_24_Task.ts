// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _end, _fI, _h, _hH, _iT, _jI, _qI, _sI, _tI, _tRSa, _UT, _UTR, _UTRp, _XACT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateTaskRequest = struct(
  n0,
  _UTR,
  0,
  [_cT, _tRSa, _fI, _qI, _jI, _sI, _tI],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    0,
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var UpdateTaskResponse = struct(n0, _UTRp, 0, [], []);
export var UpdateTask = op(
  n0,
  _UT,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}", 200],
    [_end]: ["management."],
  },
  () => UpdateTaskRequest,
  () => UpdateTaskResponse
);
