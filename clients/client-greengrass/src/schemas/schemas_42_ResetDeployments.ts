// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ACT, _DA, _DI, _Fo, _GI, _h, _hH, _RD, _RDR, _RDRe, _XACT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetDeploymentsRequest = struct(
  n0,
  _RDR,
  0,
  [_ACT, _Fo, _GI],
  [
    [
      0,
      {
        [_hH]: _XACT,
      },
    ],
    2,
    [0, 1],
  ]
);
export var ResetDeploymentsResponse = struct(n0, _RDRe, 0, [_DA, _DI], [0, 0]);
export var ResetDeployments = op(
  n0,
  _RD,
  {
    [_h]: ["POST", "/greengrass/groups/{GroupId}/deployments/$reset", 200],
  },
  () => ResetDeploymentsRequest,
  () => ResetDeploymentsResponse
);
