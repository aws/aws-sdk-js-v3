// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DQ, _DQR, _DQRe, _end, _fI, _h, _qI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteQueueRequest = struct(
  n0,
  _DQR,
  0,
  [_fI, _qI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteQueueResponse = struct(n0, _DQRe, 0, [], []);
export var DeleteQueue = op(
  n0,
  _DQ,
  {
    [_h]: ["DELETE", "/2023-10-12/farms/{farmId}/queues/{queueId}", 200],
    [_end]: ["management."],
  },
  () => DeleteQueueRequest,
  () => DeleteQueueResponse
);
