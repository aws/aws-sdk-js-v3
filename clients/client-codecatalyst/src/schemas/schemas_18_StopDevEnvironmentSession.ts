// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _i, _pN, _SDESRto, _SDESRtop, _SDESt, _sI, _sN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopDevEnvironmentSessionRequest = struct(
  n0,
  _SDESRto,
  0,
  [_sN, _pN, _i, _sI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var StopDevEnvironmentSessionResponse = struct(n0, _SDESRtop, 0, [_sN, _pN, _i, _sI], [0, 0, 0, 0]);
export var StopDevEnvironmentSession = op(
  n0,
  _SDESt,
  {
    [_ht]: ["DELETE", "/v1/spaces/{spaceName}/projects/{projectName}/devEnvironments/{id}/session/{sessionId}", 200],
  },
  () => StopDevEnvironmentSessionRequest,
  () => StopDevEnvironmentSessionResponse
);
