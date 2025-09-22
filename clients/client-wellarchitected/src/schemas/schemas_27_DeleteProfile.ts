// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _DP, _DPI, _h, _hQ, _iT, _PAr, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProfileInput = struct(
  n0,
  _DPI,
  0,
  [_PAr, _CRT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _CRT,
      },
    ],
  ]
);
export var DeleteProfile = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/profiles/{ProfileArn}", 200],
  },
  () => DeleteProfileInput,
  () => Unit
);
