// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DQe, _DQR, _DQRe, _ht, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteQueueRequest = struct(n0, _DQR, 0, [_N], [[0, 1]]);
export var DeleteQueueResponse = struct(n0, _DQRe, 0, [], []);
export var DeleteQueue = op(
  n0,
  _DQe,
  {
    [_ht]: ["DELETE", "/2017-08-29/queues/{Name}", 202],
  },
  () => DeleteQueueRequest,
  () => DeleteQueueResponse
);
