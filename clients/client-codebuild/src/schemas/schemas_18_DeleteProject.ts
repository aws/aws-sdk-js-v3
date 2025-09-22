// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DP, _DPI, _DPO, _na, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProjectInput = struct(n0, _DPI, 0, [_na], [0]);
export var DeleteProjectOutput = struct(n0, _DPO, 0, [], []);
export var DeleteProject = op(
  n0,
  _DP,
  0,
  () => DeleteProjectInput,
  () => DeleteProjectOutput
);
