// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _a, _DRS, _DRSI, _DRSO, _h, _hQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteReplicationSetInput = struct(
  n0,
  _DRSI,
  0,
  [_a],
  [
    [
      0,
      {
        [_hQ]: _a,
      },
    ],
  ]
);
export var DeleteReplicationSetOutput = struct(n0, _DRSO, 0, [], []);
export var DeleteReplicationSet = op(
  n0,
  _DRS,
  {
    [_h]: ["POST", "/deleteReplicationSet", 204],
  },
  () => DeleteReplicationSetInput,
  () => DeleteReplicationSetOutput
);
