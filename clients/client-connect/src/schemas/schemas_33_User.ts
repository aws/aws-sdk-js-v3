// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _II, _SPIe, _UI, _UUSP, _UUSPR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateUserSecurityProfilesRequest = struct(n0, _UUSPR, 0, [_SPIe, _UI, _II], [64 | 0, [0, 1], [0, 1]]);
export var SecurityProfileIds = 64 | 0;

export var UpdateUserSecurityProfiles = op(
  n0,
  _UUSP,
  {
    [_h]: ["POST", "/users/{InstanceId}/{UserId}/security-profiles", 200],
  },
  () => UpdateUserSecurityProfilesRequest,
  () => Unit
);
