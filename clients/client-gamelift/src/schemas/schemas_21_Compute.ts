// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CN, _DCe, _DCI, _DCO, _FI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeregisterComputeInput = struct(n0, _DCI, 0, [_FI, _CN], [0, 0]);
export var DeregisterComputeOutput = struct(n0, _DCO, 0, [], []);
export var DeregisterCompute = op(
  n0,
  _DCe,
  0,
  () => DeregisterComputeInput,
  () => DeregisterComputeOutput
);
