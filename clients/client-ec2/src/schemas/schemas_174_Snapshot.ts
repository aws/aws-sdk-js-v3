// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _At, _DR, _dR, _eQN, _RSAe, _RSAR, _SIn, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var ResetSnapshotAttributeRequest = struct(
  n0,
  _RSAR,
  0,
  [_At, _SIn, _DR],
  [
    0,
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var ResetSnapshotAttribute = op(
  n0,
  _RSAe,
  0,
  () => ResetSnapshotAttributeRequest,
  () => Unit
);
