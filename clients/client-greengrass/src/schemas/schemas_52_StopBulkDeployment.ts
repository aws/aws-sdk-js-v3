// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BDI, _h, _SBDRto, _SBDRtop, _SBDt, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopBulkDeploymentRequest = struct(n0, _SBDRto, 0, [_BDI], [[0, 1]]);
export var StopBulkDeploymentResponse = struct(n0, _SBDRtop, 0, [], []);
export var StopBulkDeployment = op(
  n0,
  _SBDt,
  {
    [_h]: ["PUT", "/greengrass/bulk/deployments/{BulkDeploymentId}/$stop", 200],
  },
  () => StopBulkDeploymentRequest,
  () => StopBulkDeploymentResponse
);
