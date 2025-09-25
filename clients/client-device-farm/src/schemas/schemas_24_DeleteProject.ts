// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DPel, _DPR, _DPRe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProjectRequest = struct(n0, _DPR, 0, [_a], [0]);
export var DeleteProjectResult = struct(n0, _DPRe, 0, [], []);
export var DeleteProject = op(
  n0,
  _DPel,
  0,
  () => DeleteProjectRequest,
  () => DeleteProjectResult
);
