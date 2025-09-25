// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AQQC, _AQQCR, _DQQC, _DQQCR, _h, _II, _QCI, _QI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateQueueQuickConnectsRequest = struct(n0, _AQQCR, 0, [_II, _QI, _QCI], [[0, 1], [0, 1], 64 | 0]);
export var DisassociateQueueQuickConnectsRequest = struct(n0, _DQQCR, 0, [_II, _QI, _QCI], [[0, 1], [0, 1], 64 | 0]);
export var QuickConnectsList = 64 | 0;

export var AssociateQueueQuickConnects = op(
  n0,
  _AQQC,
  {
    [_h]: ["POST", "/queues/{InstanceId}/{QueueId}/associate-quick-connects", 200],
  },
  () => AssociateQueueQuickConnectsRequest,
  () => Unit
);
export var DisassociateQueueQuickConnects = op(
  n0,
  _DQQC,
  {
    [_h]: ["POST", "/queues/{InstanceId}/{QueueId}/disassociate-quick-connects", 200],
  },
  () => DisassociateQueueQuickConnectsRequest,
  () => Unit
);
