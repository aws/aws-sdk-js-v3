// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CRT, _DL, _DLI, _h, _hQ, _iT, _LAen, _LS, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteLensInput = struct(
  n0,
  _DLI,
  0,
  [_LAen, _CRT, _LS],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _CRT,
      },
    ],
    [
      0,
      {
        [_hQ]: _LS,
      },
    ],
  ]
);
export var DeleteLens = op(
  n0,
  _DL,
  {
    [_h]: ["DELETE", "/lenses/{LensAlias}", 200],
  },
  () => DeleteLensInput,
  () => Unit
);
