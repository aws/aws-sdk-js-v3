// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DP, _DPR, _DPRe, _h, _p, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProjectRequest = struct(n0, _DPR, 0, [_p], [[0, 1]]);
export var DeleteProjectResponse = struct(n0, _DPRe, 0, [], []);
export var DeleteProject = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/projects/{project}", 200],
  },
  () => DeleteProjectRequest,
  () => DeleteProjectResponse
);
