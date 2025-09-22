// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CA, _cA, _CV, _cV, _DC, _DCR, _DCRe, _h, _hQ, _jN, _St, _st, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteClusterRequest = struct(
  n0,
  _DCR,
  0,
  [_CA, _CV],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cV,
      },
    ],
  ]
);
export var DeleteClusterResponse = struct(
  n0,
  _DCRe,
  0,
  [_CA, _St],
  [
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var DeleteCluster = op(
  n0,
  _DC,
  {
    [_h]: ["DELETE", "/v1/clusters/{ClusterArn}", 200],
  },
  () => DeleteClusterRequest,
  () => DeleteClusterResponse
);
