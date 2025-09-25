// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPel, _DPR, _PI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProfileRequest = struct(n0, _DPR, 0, [_PI], [0]);
export var DeleteProfile = op(
  n0,
  _DPel,
  2,
  () => DeleteProfileRequest,
  () => Unit
);
