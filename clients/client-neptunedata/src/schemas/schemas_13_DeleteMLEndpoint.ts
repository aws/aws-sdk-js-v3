// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cl, _DMLE, _DMLEI, _DMLEO, _h, _hQ, _i, _nIRA, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMLEndpointInput = struct(
  n0,
  _DMLEI,
  0,
  [_i, _nIRA, _cl],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nIRA,
      },
    ],
    [
      2,
      {
        [_hQ]: _cl,
      },
    ],
  ]
);
export var DeleteMLEndpointOutput = struct(n0, _DMLEO, 0, [_s], [0]);
export var DeleteMLEndpoint = op(
  n0,
  _DMLE,
  {
    [_h]: ["DELETE", "/ml/endpoints/{id}", 200],
  },
  () => DeleteMLEndpointInput,
  () => DeleteMLEndpointOutput
);
