// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _dI, _FNi, _fNi, _hL, _hQ, _ht, _jN, _LF, _LFR, _LFRi, _MR, _mR, _NT, _nT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListFiltersRequest = struct(
  n0,
  _LFR,
  0,
  [_DI, _MR, _NT],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
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
export var ListFiltersResponse = struct(
  n0,
  _LFRi,
  0,
  [_FNi, _NT],
  [
    [
      64 | 0,
      {
        [_jN]: _fNi,
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
export var FilterNames = 64 | 0;

export var ListFilters = op(
  n0,
  _LF,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/filter", 200],
  },
  () => ListFiltersRequest,
  () => ListFiltersResponse
);
