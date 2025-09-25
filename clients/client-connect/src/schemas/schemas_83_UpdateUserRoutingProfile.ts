// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _II, _RPI, _UI, _UURP, _UURPR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateUserRoutingProfileRequest = struct(n0, _UURPR, 0, [_RPI, _UI, _II], [0, [0, 1], [0, 1]]);
export var UpdateUserRoutingProfile = op(
  n0,
  _UURP,
  {
    [_h]: ["POST", "/users/{InstanceId}/{UserId}/routing-profile", 200],
  },
  () => UpdateUserRoutingProfileRequest,
  () => Unit
);
