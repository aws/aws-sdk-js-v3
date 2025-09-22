// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aI, _DAFE, _DAFER, _DAFERe, _eI, _h, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteApplicationFromEnvironmentRequest = struct(
  n0,
  _DAFER,
  0,
  [_aI, _eI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteApplicationFromEnvironmentResponse = struct(n0, _DAFERe, 0, [], []);
export var DeleteApplicationFromEnvironment = op(
  n0,
  _DAFE,
  {
    [_h]: ["DELETE", "/applications/{applicationId}/environment/{environmentId}", 200],
  },
  () => DeleteApplicationFromEnvironmentRequest,
  () => DeleteApplicationFromEnvironmentResponse
);
