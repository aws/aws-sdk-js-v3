// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _eQN, _MST, _MSTR, _MSTRo, _SIn, _sIn, _STt, _TST, _tST, _xN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifySnapshotTierRequest = struct(n0, _MSTR, 0, [_SIn, _STt, _DR], [0, 0, 2]);
export var ModifySnapshotTierResult = struct(
  n0,
  _MSTRo,
  0,
  [_SIn, _TST],
  [
    [
      0,
      {
        [_eQN]: `SnapshotId`,
        [_xN]: _sIn,
      },
    ],
    [
      4,
      {
        [_eQN]: `TieringStartTime`,
        [_xN]: _tST,
      },
    ],
  ]
);
export var ModifySnapshotTier = op(
  n0,
  _MST,
  0,
  () => ModifySnapshotTierRequest,
  () => ModifySnapshotTierResult
);
