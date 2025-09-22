// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _lZI, _oI, _RLZ, _RLZI, _RLZO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetLandingZoneInput = struct(n0, _RLZI, 0, [_lZI], [0]);
export var ResetLandingZoneOutput = struct(n0, _RLZO, 0, [_oI], [0]);
export var ResetLandingZone = op(
  n0,
  _RLZ,
  {
    [_h]: ["POST", "/reset-landingzone", 200],
  },
  () => ResetLandingZoneInput,
  () => ResetLandingZoneOutput
);
