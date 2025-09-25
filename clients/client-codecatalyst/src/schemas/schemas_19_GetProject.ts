// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _dN, _GP, _GPR, _GPRe, _ht, _n, _sN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetProjectRequest = struct(
  n0,
  _GPR,
  0,
  [_sN, _n],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetProjectResponse = struct(n0, _GPRe, 0, [_sN, _n, _dN, _d], [0, 0, 0, 0]);
export var GetProject = op(
  n0,
  _GP,
  {
    [_ht]: ["GET", "/v1/spaces/{spaceName}/projects/{name}", 200],
  },
  () => GetProjectRequest,
  () => GetProjectResponse
);
