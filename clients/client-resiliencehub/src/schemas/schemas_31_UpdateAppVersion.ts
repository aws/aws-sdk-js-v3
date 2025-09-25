// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import { _aA, _aI, _AIM, _aV, _h, _UAV, _UAVR, _UAVRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateAppVersionRequest = struct(n0, _UAVR, 0, [_aA, _aI], [0, map(n0, _AIM, 0, 0, 64 | 0)]);
export var UpdateAppVersionResponse = struct(n0, _UAVRp, 0, [_aA, _aV, _aI], [0, 0, map(n0, _AIM, 0, 0, 64 | 0)]);
export var UpdateAppVersion = op(
  n0,
  _UAV,
  {
    [_h]: ["POST", "/update-app-version", 200],
  },
  () => UpdateAppVersionRequest,
  () => UpdateAppVersionResponse
);
