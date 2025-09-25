// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _d, _dO, _do, _eT, _f, _GRE, _GRER, _GRERe, _hQ, _ht, _r, _rE, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetRepositoryEndpointRequest = struct(
  n0,
  _GRER,
  0,
  [_d, _dO, _r, _f, _eT],
  [
    [
      0,
      {
        [_hQ]: _d,
      },
    ],
    [
      0,
      {
        [_hQ]: _do,
      },
    ],
    [
      0,
      {
        [_hQ]: _r,
      },
    ],
    [
      0,
      {
        [_hQ]: _f,
      },
    ],
    [
      0,
      {
        [_hQ]: _eT,
      },
    ],
  ]
);
export var GetRepositoryEndpointResult = struct(n0, _GRERe, 0, [_rE], [0]);
export var GetRepositoryEndpoint = op(
  n0,
  _GRE,
  {
    [_ht]: ["GET", "/v1/repository/endpoint", 200],
  },
  () => GetRepositoryEndpointRequest,
  () => GetRepositoryEndpointResult
);
