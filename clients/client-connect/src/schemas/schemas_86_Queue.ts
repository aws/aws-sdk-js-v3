// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _D, _h, _II, _N, _QI, _UQN, _UQNR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateQueueNameRequest = struct(n0, _UQNR, 0, [_II, _QI, _N, _D], [[0, 1], [0, 1], 0, 0]);
export var UpdateQueueName = op(
  n0,
  _UQN,
  {
    [_h]: ["POST", "/queues/{InstanceId}/{QueueId}/name", 200],
  },
  () => UpdateQueueNameRequest,
  () => Unit
);
