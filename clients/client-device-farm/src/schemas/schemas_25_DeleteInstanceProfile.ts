// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DIP, _DIPR, _DIPRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInstanceProfileRequest = struct(n0, _DIPR, 0, [_a], [0]);
export var DeleteInstanceProfileResult = struct(n0, _DIPRe, 0, [], []);
export var DeleteInstanceProfile = op(
  n0,
  _DIP,
  0,
  () => DeleteInstanceProfileRequest,
  () => DeleteInstanceProfileResult
);
