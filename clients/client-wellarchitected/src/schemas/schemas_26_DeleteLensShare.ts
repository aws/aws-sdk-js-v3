// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _DLS, _DLSI, _h, _hQ, _iT, _LAen, _SI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLensShareInput = struct(
  n0,
  _DLSI,
  0,
  [_SI, _LAen, _CRT],
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
export var DeleteLensShare = op(
  n0,
  _DLS,
  {
    [_h]: ["DELETE", "/lenses/{LensAlias}/shares/{ShareId}", 200],
  },
  () => DeleteLensShareInput,
  () => Unit
);
