// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _BD, _BDA, _BDI, _BDu, _CA, _h, _hQ, _LBD, _LBDR, _LBDRi, _MR, _NT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var BulkDeployment = struct(n0, _BD, 0, [_BDA, _BDI, _CA], [0, 0, 0]);
export var ListBulkDeploymentsRequest = struct(
  n0,
  _LBDR,
  0,
  [_MR, _NT],
  [
    [
      0,
      {
        [_hQ]: _MR,
      },
    ],
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var ListBulkDeploymentsResponse = struct(n0, _LBDRi, 0, [_BDu, _NT], [() => BulkDeployments, 0]);
export var BulkDeployments = list(n0, _BDu, 0, () => BulkDeployment);
export var ListBulkDeployments = op(
  n0,
  _LBD,
  {
    [_h]: ["GET", "/greengrass/bulk/deployments", 200],
  },
  () => ListBulkDeploymentsRequest,
  () => ListBulkDeploymentsResponse
);
