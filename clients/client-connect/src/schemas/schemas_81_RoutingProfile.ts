// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _C, _DRPQ, _DRPQR, _h, _II, _QI, _QR, _RPI, _RPQR, _RPQRL, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisassociateRoutingProfileQueuesRequest = struct(
  n0,
  _DRPQR,
  0,
  [_II, _RPI, _QR],
  [[0, 1], [0, 1], () => RoutingProfileQueueReferenceList]
);
export var RoutingProfileQueueReference = struct(n0, _RPQR, 0, [_QI, _C], [0, 0]);
export var RoutingProfileQueueReferenceList = list(n0, _RPQRL, 0, () => RoutingProfileQueueReference);
export var DisassociateRoutingProfileQueues = op(
  n0,
  _DRPQ,
  {
    [_h]: ["POST", "/routing-profiles/{InstanceId}/{RoutingProfileId}/disassociate-queues", 200],
  },
  () => DisassociateRoutingProfileQueuesRequest,
  () => Unit
);
