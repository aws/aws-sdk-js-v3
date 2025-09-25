// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _CA, _cA, _ce, _CN, _cN, _h, _jN, _PRS, _pRS, _T, _t, _UC, _UCR, _UCRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateCellRequest = struct(
  n0,
  _UCR,
  0,
  [_CN, _C],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_jN]: _ce,
      },
    ],
  ]
);
export var UpdateCellResponse = struct(
  n0,
  _UCRp,
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
export var UpdateCell = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/cells/{CellName}", 200],
  },
  () => UpdateCellRequest,
  () => UpdateCellResponse
);
