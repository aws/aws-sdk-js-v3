// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _II, _MCa, _QI, _UQMC, _UQMCR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateQueueMaxContactsRequest = struct(n0, _UQMCR, 0, [_II, _QI, _MCa], [[0, 1], [0, 1], 1]);
export var UpdateQueueMaxContacts = op(
  n0,
  _UQMC,
  {
    [_h]: ["POST", "/queues/{InstanceId}/{QueueId}/max-contacts", 200],
  },
  () => UpdateQueueMaxContactsRequest,
  () => Unit
);
