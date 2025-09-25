// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cMDI, _DCMD, _DCMDR, _DCMDRe, _ht, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCustomModelDeploymentRequest = struct(n0, _DCMDR, 0, [_cMDI], [[0, 1]]);
export var DeleteCustomModelDeploymentResponse = struct(n0, _DCMDRe, 0, [], []);
export var DeleteCustomModelDeployment = op(
  n0,
  _DCMD,
  {
    [_ht]: ["DELETE", "/model-customization/custom-model-deployments/{customModelDeploymentIdentifier}", 200],
  },
  () => DeleteCustomModelDeploymentRequest,
  () => DeleteCustomModelDeploymentResponse
);
