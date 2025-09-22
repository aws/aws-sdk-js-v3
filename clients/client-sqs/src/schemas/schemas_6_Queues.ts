// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _LDLSQ, _LDLSQR, _LDLSQRi, _LQ, _LQR, _LQRi, _MR, _NT, _QNP, _QU, _qU, _QUu, _xF, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListDeadLetterSourceQueuesRequest = struct(n0, _LDLSQR, 0, [_QU, _NT, _MR], [0, 0, 1]);
export var ListDeadLetterSourceQueuesResult = struct(
  n0,
  _LDLSQRi,
  0,
  [_qU, _NT],
  [
    [
      64 | 0,
      {
        [_xN]: _QU,
        [_xF]: 1,
      },
    ],
    0,
  ]
);
export var ListQueuesRequest = struct(n0, _LQR, 0, [_QNP, _NT, _MR], [0, 0, 1]);
export var ListQueuesResult = struct(
  n0,
  _LQRi,
  0,
  [_QUu, _NT],
  [
    [
      64 | 0,
      {
        [_xN]: _QU,
        [_xF]: 1,
      },
    ],
    0,
  ]
);
export var QueueUrlList = 64 | 0;

export var ListDeadLetterSourceQueues = op(
  n0,
  _LDLSQ,
  0,
  () => ListDeadLetterSourceQueuesRequest,
  () => ListDeadLetterSourceQueuesResult
);
export var ListQueues = op(
  n0,
  _LQ,
  0,
  () => ListQueuesRequest,
  () => ListQueuesResult
);
