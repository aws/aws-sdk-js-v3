// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DF, _DFR, _DFRe, _DI, _dI, _FN, _fN, _hL, _ht, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteFilterRequest = struct(
  n0,
  _DFR,
  0,
  [_DI, _FN],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _fN,
        [_hL]: 1,
      },
    ],
  ]
);
export var DeleteFilterResponse = struct(n0, _DFRe, 0, [], []);
export var DeleteFilter = op(
  n0,
  _DF,
  {
    [_ht]: ["DELETE", "/detector/{DetectorId}/filter/{FilterName}", 200],
  },
  () => DeleteFilterRequest,
  () => DeleteFilterResponse
);
