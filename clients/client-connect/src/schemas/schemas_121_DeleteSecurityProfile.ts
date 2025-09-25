// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSP, _DSPR, _h, _II, _SPI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSecurityProfileRequest = struct(
  n0,
  _DSPR,
  0,
  [_II, _SPI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSecurityProfile = op(
  n0,
  _DSP,
  {
    [_h]: ["DELETE", "/security-profiles/{InstanceId}/{SecurityProfileId}", 200],
  },
  () => DeleteSecurityProfileRequest,
  () => Unit
);
