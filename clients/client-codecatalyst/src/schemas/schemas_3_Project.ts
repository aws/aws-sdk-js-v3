// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CP, _CPR, _CPRr, _d, _dN, _ht, _n, _sN, _UP, _UPR, _UPRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateProjectRequest = struct(n0, _CPR, 0, [_sN, _dN, _d], [[0, 1], 0, 0]);
export var CreateProjectResponse = struct(n0, _CPRr, 0, [_sN, _n, _dN, _d], [0, 0, 0, 0]);
export var UpdateProjectRequest = struct(n0, _UPR, 0, [_sN, _n, _d], [[0, 1], [0, 1], 0]);
export var UpdateProjectResponse = struct(n0, _UPRp, 0, [_sN, _n, _dN, _d], [0, 0, 0, 0]);
export var CreateProject = op(
  n0,
  _CP,
  {
    [_ht]: ["PUT", "/v1/spaces/{spaceName}/projects", 201],
  },
  () => CreateProjectRequest,
  () => CreateProjectResponse
);
export var UpdateProject = op(
  n0,
  _UP,
  {
    [_ht]: ["PATCH", "/v1/spaces/{spaceName}/projects/{name}", 200],
  },
  () => UpdateProjectRequest,
  () => UpdateProjectResponse
);
