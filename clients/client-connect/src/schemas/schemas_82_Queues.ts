// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _h,
  _hQ,
  _I,
  _II,
  _LMR,
  _LMT,
  _LQ,
  _LQR,
  _LQRi,
  _mR,
  _MRa,
  _N,
  _NT,
  _nT,
  _QSL,
  _QSu,
  _qT,
  _QTu,
  _QTue,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListQueuesRequest = struct(
  n0,
  _LQR,
  0,
  [_II, _QTu, _NT, _MRa],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _qT,
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
export var ListQueuesResponse = struct(n0, _LQRi, 0, [_QSL, _NT], [() => QueueSummaryList, 0]);
export var QueueSummary = struct(n0, _QSu, 0, [_I, _A, _N, _QTue, _LMT, _LMR], [0, 0, 0, 0, 4, 0]);
export var QueueSummaryList = list(n0, _QSL, 0, () => QueueSummary);
export var QueueTypes = 64 | 0;

export var ListQueues = op(
  n0,
  _LQ,
  {
    [_h]: ["GET", "/queues-summary/{InstanceId}", 200],
  },
  () => ListQueuesRequest,
  () => ListQueuesResponse
);
