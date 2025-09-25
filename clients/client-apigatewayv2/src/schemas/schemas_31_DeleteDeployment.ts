// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AI, _DD, _DDR, _DI, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDeploymentRequest = struct(
  n0,
  _DDR,
  0,
  [_AI, _DI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteDeployment = op(
  n0,
  _DD,
  {
    [_ht]: ["DELETE", "/v2/apis/{ApiId}/deployments/{DeploymentId}", 204],
  },
  () => DeleteDeploymentRequest,
  () => Unit
);
