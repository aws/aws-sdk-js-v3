// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _dNi, _h, _hQ, _LD, _LDR, _LDRi, _mR, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListDimensionsRequest = struct(
  n0,
  _LDR,
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
export var ListDimensionsResponse = struct(n0, _LDRi, 0, [_dNi, _nT], [64 | 0, 0]);
export var DimensionNames = 64 | 0;

export var ListDimensions = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/dimensions", 200],
  },
  () => ListDimensionsRequest,
  () => ListDimensionsResponse
);
