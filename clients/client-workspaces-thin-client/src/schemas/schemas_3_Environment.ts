// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DEe, _DER, _DERe, _end, _h, _hQ, _i, _iT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEnvironmentRequest = struct(
  n0,
  _DER,
  0,
  [_i, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteEnvironmentResponse = struct(n0, _DERe, 0, [], []);
export var DeleteEnvironment = op(
  n0,
  _DEe,
  {
    [_h]: ["DELETE", "/environments/{id}", 204],
    [_end]: ["api."],
  },
  () => DeleteEnvironmentRequest,
  () => DeleteEnvironmentResponse
);
