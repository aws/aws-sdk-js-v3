// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAT, _h, _II, _RPI, _URPAAT, _URPAATR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateRoutingProfileAgentAvailabilityTimerRequest = struct(
  n0,
  _URPAATR,
  0,
  [_II, _RPI, _AAT],
  [[0, 1], [0, 1], 0]
);
export var UpdateRoutingProfileAgentAvailabilityTimer = op(
  n0,
  _URPAAT,
  {
    [_h]: ["POST", "/routing-profiles/{InstanceId}/{RoutingProfileId}/agent-availability-timer", 200],
  },
  () => UpdateRoutingProfileAgentAvailabilityTimerRequest,
  () => Unit
);
