// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _bR,
  _cA,
  _cB,
  _dBA,
  _dN,
  _end,
  _fI,
  _h,
  _hQ,
  _LQ,
  _LQR,
  _LQRi,
  _mR,
  _nT,
  _pI,
  _q,
  _qI,
  _QS,
  _QSu,
  _st,
  _uA,
  _uB,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListQueuesRequest = struct(
  n0,
  _LQR,
  0,
  [_fI, _pI, _st, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListQueuesResponse = struct(n0, _LQRi, 0, [_q, _nT], [() => QueueSummaries, 0]);
export var QueueSummary = struct(
  n0,
  _QS,
  0,
  [_fI, _qI, _dN, _st, _dBA, _bR, _cA, _cB, _uA, _uB],
  [0, 0, 0, 0, 0, 0, 5, 0, 5, 0]
);
export var QueueSummaries = list(n0, _QSu, 0, () => QueueSummary);
export var ListQueues = op(
  n0,
  _LQ,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues", 200],
  },
  () => ListQueuesRequest,
  () => ListQueuesResponse
);
