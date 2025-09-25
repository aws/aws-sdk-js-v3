// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _i, _pN, _SDERto, _SDERtop, _SDEt, _sN, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopDevEnvironmentRequest = struct(
  n0,
  _SDERto,
  0,
  [_sN, _pN, _i],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var StopDevEnvironmentResponse = struct(n0, _SDERtop, 0, [_sN, _pN, _i, _st], [0, 0, 0, 0]);
export var StopDevEnvironment = op(
  n0,
  _SDEt,
  {
    [_ht]: ["PUT", "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/stop", 200],
  },
  () => StopDevEnvironmentRequest,
  () => StopDevEnvironmentResponse
);
