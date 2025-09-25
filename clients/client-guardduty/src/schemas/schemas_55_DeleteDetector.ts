// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DDe, _DDR, _DDRe, _DI, _dI, _hL, _ht, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDetectorRequest = struct(
  n0,
  _DDR,
  0,
  [_DI],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
  ]
);
export var DeleteDetectorResponse = struct(n0, _DDRe, 0, [], []);
export var DeleteDetector = op(
  n0,
  _DDe,
  {
    [_ht]: ["DELETE", "/detector/{DetectorId}", 200],
  },
  () => DeleteDetectorRequest,
  () => DeleteDetectorResponse
);
