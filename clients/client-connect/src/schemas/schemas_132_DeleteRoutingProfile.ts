// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRP, _DRPR, _h, _II, _RPI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRoutingProfileRequest = struct(
  n0,
  _DRPR,
  0,
  [_II, _RPI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRoutingProfile = op(
  n0,
  _DRP,
  {
    [_h]: ["DELETE", "/routing-profiles/{InstanceId}/{RoutingProfileId}", 200],
  },
  () => DeleteRoutingProfileRequest,
  () => Unit
);
