// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAV, _CAVA, _MA, _MN, _MV, _PAV, _PAVA, _UAMV, _UAMVR, _UAMVRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateActiveModelVersionRequest = struct(n0, _UAMVR, 0, [_MN, _MV], [0, 1]);
export var UpdateActiveModelVersionResponse = struct(
  n0,
  _UAMVRp,
  0,
  [_MN, _MA, _CAV, _PAV, _CAVA, _PAVA],
  [0, 0, 1, 1, 0, 0]
);
export var UpdateActiveModelVersion = op(
  n0,
  _UAMV,
  0,
  () => UpdateActiveModelVersionRequest,
  () => UpdateActiveModelVersionResponse
);
