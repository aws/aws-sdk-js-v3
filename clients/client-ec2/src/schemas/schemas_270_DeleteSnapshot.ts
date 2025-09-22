// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _DSele, _DSR, _eQN, _SIn, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSnapshotRequest = struct(
  n0,
  _DSR,
  0,
  [_SIn, _DR],
  [
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
export var DeleteSnapshot = op(
  n0,
  _DSele,
  0,
  () => DeleteSnapshotRequest,
  () => Unit
);
