// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSE, _DSER, _DSERe, _ht, _sE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteServiceEnvironmentRequest = struct(n0, _DSER, 0, [_sE], [0]);
export var DeleteServiceEnvironmentResponse = struct(n0, _DSERe, 0, [], []);
export var DeleteServiceEnvironment = op(
  n0,
  _DSE,
  {
    [_ht]: ["POST", "/v1/deleteserviceenvironment", 200],
  },
  () => DeleteServiceEnvironmentRequest,
  () => DeleteServiceEnvironmentResponse
);
