// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DLZ, _DLZI, _DLZO, _h, _lZI, _oI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLandingZoneInput = struct(n0, _DLZI, 0, [_lZI], [0]);
export var DeleteLandingZoneOutput = struct(n0, _DLZO, 0, [_oI], [0]);
export var DeleteLandingZone = op(
  n0,
  _DLZ,
  {
    [_h]: ["POST", "/delete-landingzone", 200],
  },
  () => DeleteLandingZoneInput,
  () => DeleteLandingZoneOutput
);
