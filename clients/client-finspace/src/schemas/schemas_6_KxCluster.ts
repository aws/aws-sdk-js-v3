// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cN, _DKCN, _DKCNR, _DKCNRe, _eI, _h, _nI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKxClusterNodeRequest = struct(
  n0,
  _DKCNR,
  0,
  [_eI, _cN, _nI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteKxClusterNodeResponse = struct(n0, _DKCNRe, 0, [], []);
export var DeleteKxClusterNode = op(
  n0,
  _DKCN,
  {
    [_h]: ["DELETE", "/kx/environments/{environmentId}/clusters/{clusterName}/nodes/{nodeId}", 200],
  },
  () => DeleteKxClusterNodeRequest,
  () => DeleteKxClusterNodeResponse
);
