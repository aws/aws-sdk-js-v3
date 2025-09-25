// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACT, _BDA, _BDI, _ERA, _h, _hH, _IFU, _SBD, _SBDR, _SBDRt, _t, _XACT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartBulkDeploymentRequest = struct(
  n0,
  _SBDR,
  0,
  [_ACT, _ERA, _IFU, _t],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    0,
    0,
    128 | 0,
  ]
);
export var StartBulkDeploymentResponse = struct(n0, _SBDRt, 0, [_BDA, _BDI], [0, 0]);
export var StartBulkDeployment = op(
  n0,
  _SBD,
  {
    [_h]: ["POST", "/greengrass/bulk/deployments", 200],
  },
  () => StartBulkDeploymentRequest,
  () => StartBulkDeploymentResponse
);
