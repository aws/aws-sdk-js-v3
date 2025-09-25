// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CAA, _DP, _DPR, _Pr, _SAo, n0 } from "./schemas_0";
import { Unit } from "./schemas_2_Certificate";

/* eslint no-var: 0 */

export var DeletePermissionRequest = struct(n0, _DPR, 0, [_CAA, _Pr, _SAo], [0, 0, 0]);
export var DeletePermission = op(
  n0,
  _DP,
  0,
  () => DeletePermissionRequest,
  () => Unit
);
