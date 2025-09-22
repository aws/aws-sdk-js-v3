// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cE, _DCE, _DCER, _DCERe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteComputeEnvironmentRequest = struct(n0, _DCER, 0, [_cE], [0]);
export var DeleteComputeEnvironmentResponse = struct(n0, _DCERe, 0, [], []);
export var DeleteComputeEnvironment = op(
  n0,
  _DCE,
  {
    [_ht]: ["POST", "/v1/deletecomputeenvironment", 200],
  },
  () => DeleteComputeEnvironmentRequest,
  () => DeleteComputeEnvironmentResponse
);
