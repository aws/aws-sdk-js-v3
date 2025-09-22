// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DR,
  _eQN,
  _IPR,
  _iPR,
  _PRer,
  _RD,
  _rD,
  _RST,
  _rST,
  _RSTe,
  _RSTR,
  _RSTRe,
  _SIn,
  _sIn,
  _TRD,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var RestoreSnapshotTierRequest = struct(n0, _RSTR, 0, [_SIn, _TRD, _PRer, _DR], [0, 1, 2, 2]);
export var RestoreSnapshotTierResult = struct(
  n0,
  _RSTRe,
  0,
  [_SIn, _RST, _RD, _IPR],
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
        [_eQN]: `RestoreStartTime`,
        [_xN]: _rST,
      },
    ],
    [
      1,
      {
        [_eQN]: `RestoreDuration`,
        [_xN]: _rD,
      },
    ],
    [
      2,
      {
        [_eQN]: `IsPermanentRestore`,
        [_xN]: _iPR,
      },
    ],
  ]
);
export var RestoreSnapshotTier = op(
  n0,
  _RSTe,
  0,
  () => RestoreSnapshotTierRequest,
  () => RestoreSnapshotTierResult
);
