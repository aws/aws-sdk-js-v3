// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DOQI, _h, _II, _RPI, _URPDOQ, _URPDOQR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateRoutingProfileDefaultOutboundQueueRequest = struct(
  n0,
  _URPDOQR,
  0,
  [_II, _RPI, _DOQI],
  [[0, 1], [0, 1], 0]
);
export var UpdateRoutingProfileDefaultOutboundQueue = op(
  n0,
  _URPDOQ,
  {
    [_h]: ["POST", "/routing-profiles/{InstanceId}/{RoutingProfileId}/default-outbound-queue", 200],
  },
  () => UpdateRoutingProfileDefaultOutboundQueueRequest,
  () => Unit
);
