// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _SIn, _sIn, _USn, _USR, _USRn, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UnlockSnapshotRequest = struct(n0, _USR, 0, [_SIn, _DR], [0, 2]);
export var UnlockSnapshotResult = struct(
  n0,
  _USRn,
  0,
  [_SIn],
  [
    [
      0,
      {
        [_eQN]: `SnapshotId`,
        [_xN]: _sIn,
      },
    ],
  ]
);
export var UnlockSnapshot = op(
  n0,
  _USn,
  0,
  () => UnlockSnapshotRequest,
  () => UnlockSnapshotResult
);
