// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _lZI, _ma, _oI, _ULZ, _ULZI, _ULZO, _v, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateLandingZoneInput = struct(n0, _ULZI, 0, [_v, _ma, _lZI], [0, 15, 0]);
export var UpdateLandingZoneOutput = struct(n0, _ULZO, 0, [_oI], [0]);
export var UpdateLandingZone = op(
  n0,
  _ULZ,
  {
    [_h]: ["POST", "/update-landingzone", 200],
  },
  () => UpdateLandingZoneInput,
  () => UpdateLandingZoneOutput
);
