// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dN, _DP, _DPR, _DPRe, _ht, _n, _sN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProjectRequest = struct(
  n0,
  _DPR,
  0,
  [_sN, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteProjectResponse = struct(n0, _DPRe, 0, [_sN, _n, _dN], [0, 0, 0]);
export var DeleteProject = op(
  n0,
  _DP,
  {
    [_ht]: ["DELETE", "/v1/spaces/{spaceName}/projects/{name}", 200],
  },
  () => DeleteProjectRequest,
  () => DeleteProjectResponse
);
