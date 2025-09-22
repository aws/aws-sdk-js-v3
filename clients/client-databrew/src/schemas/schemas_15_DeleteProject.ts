// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPe, _DPR, _DPRe, _h, _N, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProjectRequest = struct(n0, _DPR, 0, [_N], [[0, 1]]);
export var DeleteProjectResponse = struct(n0, _DPRe, 0, [_N], [0]);
export var DeleteProject = op(
  n0,
  _DPe,
  {
    [_h]: ["DELETE", "/projects/{Name}", 200],
  },
  () => DeleteProjectRequest,
  () => DeleteProjectResponse
);
