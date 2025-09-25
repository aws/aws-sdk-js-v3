// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _HOOI, _II, _QI, _UQHOO, _UQHOOR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateQueueHoursOfOperationRequest = struct(n0, _UQHOOR, 0, [_II, _QI, _HOOI], [[0, 1], [0, 1], 0]);
export var UpdateQueueHoursOfOperation = op(
  n0,
  _UQHOO,
  {
    [_h]: ["POST", "/queues/{InstanceId}/{QueueId}/hours-of-operation", 200],
  },
  () => UpdateQueueHoursOfOperationRequest,
  () => Unit
);
