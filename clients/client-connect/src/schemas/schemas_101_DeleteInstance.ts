// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CT, _cT, _DIel, _DIR, _h, _hQ, _II, _iT, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteInstanceRequest = struct(
  n0,
  _DIR,
  0,
  [_II, _CT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteInstance = op(
  n0,
  _DIel,
  {
    [_h]: ["DELETE", "/instance/{InstanceId}", 200],
  },
  () => DeleteInstanceRequest,
  () => Unit
);
