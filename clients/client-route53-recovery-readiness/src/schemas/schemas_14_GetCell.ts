// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _CA, _cA, _ce, _CN, _cN, _GC, _GCR, _GCRe, _h, _jN, _PRS, _pRS, _T, _t, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetCellRequest = struct(n0, _GCR, 0, [_CN], [[0, 1]]);
export var GetCellResponse = struct(
  n0,
  _GCRe,
  0,
  [_CA, _CN, _C, _PRS, _T],
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
        [_jN]: _cN,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _ce,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _pRS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _t,
      },
    ],
  ]
);
export var GetCell = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/cells/{CellName}", 200],
  },
  () => GetCellRequest,
  () => GetCellResponse
);
