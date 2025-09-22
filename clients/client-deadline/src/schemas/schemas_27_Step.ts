// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _end, _fI, _h, _hH, _iT, _jI, _qI, _sI, _tTRS, _USp, _USRpd, _USRpda, _XACT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateStepRequest = struct(
  n0,
  _USRpd,
  0,
  [_tTRS, _cT, _fI, _qI, _jI, _sI],
  [
    0,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var UpdateStepResponse = struct(n0, _USRpda, 0, [], []);
export var UpdateStep = op(
  n0,
  _USp,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}", 200],
    [_end]: ["management."],
  },
  () => UpdateStepRequest,
  () => UpdateStepResponse
);
