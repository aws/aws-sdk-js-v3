// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDE, _DDER, _DDERe, _ht, _i, _pN, _sN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDevEnvironmentRequest = struct(
  n0,
  _DDER,
  0,
  [_sN, _pN, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDevEnvironmentResponse = struct(n0, _DDERe, 0, [_sN, _pN, _i], [0, 0, 0]);
export var DeleteDevEnvironment = op(
  n0,
  _DDE,
  {
    [_ht]: ["DELETE", "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}", 200],
  },
  () => DeleteDevEnvironmentRequest,
  () => DeleteDevEnvironmentResponse
);
