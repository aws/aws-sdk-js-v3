// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DQ, _DQR, _h, _II, _QI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteQueueRequest = struct(
  n0,
  _DQR,
  0,
  [_II, _QI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteQueue = op(
  n0,
  _DQ,
  {
    [_h]: ["DELETE", "/queues/{InstanceId}/{QueueId}", 200],
  },
  () => DeleteQueueRequest,
  () => Unit
);
