// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DIet, _dIet, _hQ, _ht, _jN, _LDi, _LDR, _LDRi, _MR, _mR, _NT, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListDetectorsRequest = struct(
  n0,
  _LDR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_jN]: _mR,
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListDetectorsResponse = struct(
  n0,
  _LDRi,
  0,
  [_DIet, _NT],
  [
    [
      64 | 0,
      {
        [_jN]: _dIet,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var DetectorIds = 64 | 0;

export var ListDetectors = op(
  n0,
  _LDi,
  {
    [_ht]: ["GET", "/detector", 200],
  },
  () => ListDetectorsRequest,
  () => ListDetectorsResponse
);
