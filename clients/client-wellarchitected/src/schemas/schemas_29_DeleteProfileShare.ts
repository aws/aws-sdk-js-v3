// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _DPS, _DPSI, _h, _hQ, _iT, _PAr, _SI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteProfileShareInput = struct(
  n0,
  _DPSI,
  0,
  [_SI, _PAr, _CRT],
  [
    [0, 1],
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
export var DeleteProfileShare = op(
  n0,
  _DPS,
  {
    [_h]: ["DELETE", "/profiles/{ProfileArn}/shares/{ShareId}", 200],
  },
  () => DeleteProfileShareInput,
  () => Unit
);
