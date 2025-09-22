// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cN, _cTl, _DKC, _DKCR, _DKCRe, _eI, _h, _hQ, _iT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteKxClusterRequest = struct(
  n0,
  _DKCR,
  0,
  [_eI, _cN, _cTl],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cTl,
      },
    ],
  ]
);
export var DeleteKxClusterResponse = struct(n0, _DKCRe, 0, [], []);
export var DeleteKxCluster = op(
  n0,
  _DKC,
  {
    [_h]: ["DELETE", "/kx/environments/{environmentId}/clusters/{clusterName}", 200],
  },
  () => DeleteKxClusterRequest,
  () => DeleteKxClusterResponse
);
