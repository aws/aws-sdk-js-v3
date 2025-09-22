// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cT,
  _end,
  _fI,
  _h,
  _hH,
  _iT,
  _jI,
  _lS,
  _mFTC,
  _mRPT,
  _mWCa,
  _pr,
  _qI,
  _tTRS,
  _UJ,
  _UJR,
  _UJRp,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateJobRequest = struct(
  n0,
  _UJR,
  0,
  [_cT, _tTRS, _pr, _mFTC, _mRPT, _lS, _mWCa, _fI, _qI, _jI],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    0,
    1,
    1,
    1,
    0,
    1,
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var UpdateJobResponse = struct(n0, _UJRp, 0, [], []);
export var UpdateJob = op(
  n0,
  _UJ,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}", 200],
    [_end]: ["management."],
  },
  () => UpdateJobRequest,
  () => UpdateJobResponse
);
