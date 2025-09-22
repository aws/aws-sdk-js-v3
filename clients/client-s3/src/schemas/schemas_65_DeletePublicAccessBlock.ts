// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _B, _DPAB, _DPABR, _EBO, _h, _hH, _xaebo, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePublicAccessBlockRequest = struct(
  n0,
  _DPABR,
  0,
  [_B, _EBO],
  [
    [0, 1],
    [
      0,
      {
        [_hH]: _xaebo,
      },
    ],
  ]
);
export var DeletePublicAccessBlock = op(
  n0,
  _DPAB,
  {
    [_h]: ["DELETE", "/?publicAccessBlock", 204],
  },
  () => DeletePublicAccessBlockRequest,
  () => Unit
);
