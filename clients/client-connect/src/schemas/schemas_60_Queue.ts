// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _II, _QI, _St, _UQS, _UQSR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateQueueStatusRequest = struct(n0, _UQSR, 0, [_II, _QI, _St], [[0, 1], [0, 1], 0]);
export var UpdateQueueStatus = op(
  n0,
  _UQS,
  {
    [_h]: ["POST", "/queues/{InstanceId}/{QueueId}/status", 200],
  },
  () => UpdateQueueStatusRequest,
  () => Unit
);
