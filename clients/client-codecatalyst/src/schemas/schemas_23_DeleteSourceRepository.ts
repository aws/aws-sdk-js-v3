// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSRel, _DSRR, _DSRRe, _ht, _n, _pN, _sN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSourceRepositoryRequest = struct(
  n0,
  _DSRR,
  0,
  [_sN, _pN, _n],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteSourceRepositoryResponse = struct(n0, _DSRRe, 0, [_sN, _pN, _n], [0, 0, 0]);
export var DeleteSourceRepository = op(
  n0,
  _DSRel,
  {
    [_ht]: ["DELETE", "/v1/spaces/{spaceName}/projects/{projectName}/sourceRepositories/{name}", 200],
  },
  () => DeleteSourceRepositoryRequest,
  () => DeleteSourceRepositoryResponse
);
