// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _dVe, _n, _UV, _UVR, _UVRp, _vT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateVariableRequest = struct(n0, _UVR, 0, [_n, _dVe, _d, _vT], [0, 0, 0, 0]);
export var UpdateVariableResult = struct(n0, _UVRp, 0, [], []);
export var UpdateVariable = op(
  n0,
  _UV,
  0,
  () => UpdateVariableRequest,
  () => UpdateVariableResult
);
