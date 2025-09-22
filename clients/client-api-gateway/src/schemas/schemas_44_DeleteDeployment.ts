// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DD, _DDR, _dI, _ht, _rAI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDeploymentRequest = struct(
  n0,
  _DDR,
  0,
  [_rAI, _dI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDeployment = op(
  n0,
  _DD,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/deployments/{deploymentId}", 202],
  },
  () => DeleteDeploymentRequest,
  () => Unit
);
