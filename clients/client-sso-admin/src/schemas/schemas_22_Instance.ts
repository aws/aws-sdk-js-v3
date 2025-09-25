// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _IA, _N, _UI, _UIR, _UIRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateInstanceRequest = struct(n0, _UIR, 0, [_N, _IA], [0, 0]);
export var UpdateInstanceResponse = struct(n0, _UIRp, 0, [], []);
export var UpdateInstance = op(
  n0,
  _UI,
  0,
  () => UpdateInstanceRequest,
  () => UpdateInstanceResponse
);
