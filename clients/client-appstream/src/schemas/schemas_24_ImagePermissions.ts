// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIP, _DIPR, _DIPRe, _N, _SAI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteImagePermissionsRequest = struct(n0, _DIPR, 0, [_N, _SAI], [0, 0]);
export var DeleteImagePermissionsResult = struct(n0, _DIPRe, 0, [], []);
export var DeleteImagePermissions = op(
  n0,
  _DIP,
  0,
  () => DeleteImagePermissionsRequest,
  () => DeleteImagePermissionsResult
);
