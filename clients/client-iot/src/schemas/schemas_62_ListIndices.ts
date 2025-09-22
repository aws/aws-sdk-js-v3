// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _h, _hQ, _iNnd, _LI, _LIR, _LIRi, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListIndicesRequest = struct(
  n0,
  _LIR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListIndicesResponse = struct(n0, _LIRi, 0, [_iNnd, _nT], [64 | 0, 0]);
export var IndexNamesList = 64 | 0;

export var ListIndices = op(
  n0,
  _LI,
  {
    [_h]: ["GET", "/indices", 200],
  },
  () => ListIndicesRequest,
  () => ListIndicesResponse
);
