// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _COP,
  _cOP,
  _COPEO,
  _cOPEO,
  _DR,
  _EDx,
  _eQN,
  _LCO,
  _lCO,
  _LDo,
  _lDo,
  _LDST,
  _lDST,
  _LEO,
  _lEO,
  _LM,
  _LSoc,
  _lSoc,
  _LSock,
  _LSR,
  _LSRo,
  _SIn,
  _sIn,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var LockSnapshotRequest = struct(n0, _LSR, 0, [_SIn, _DR, _LM, _COP, _LDo, _EDx], [0, 2, 0, 1, 1, 4]);
export var LockSnapshotResult = struct(
  n0,
  _LSRo,
  0,
  [_SIn, _LSoc, _LDo, _COP, _COPEO, _LCO, _LEO, _LDST],
  [
    [
      0,
      {
        [_eQN]: `SnapshotId`,
        [_xN]: _sIn,
      },
    ],
    [
      0,
      {
        [_eQN]: `LockState`,
        [_xN]: _lSoc,
      },
    ],
    [
      1,
      {
        [_eQN]: `LockDuration`,
        [_xN]: _lDo,
      },
    ],
    [
      1,
      {
        [_eQN]: `CoolOffPeriod`,
        [_xN]: _cOP,
      },
    ],
    [
      4,
      {
        [_eQN]: `CoolOffPeriodExpiresOn`,
        [_xN]: _cOPEO,
      },
    ],
    [
      4,
      {
        [_eQN]: `LockCreatedOn`,
        [_xN]: _lCO,
      },
    ],
    [
      4,
      {
        [_eQN]: `LockExpiresOn`,
        [_xN]: _lEO,
      },
    ],
    [
      4,
      {
        [_eQN]: `LockDurationStartTime`,
        [_xN]: _lDST,
      },
    ],
  ]
);
export var LockSnapshot = op(
  n0,
  _LSock,
  0,
  () => LockSnapshotRequest,
  () => LockSnapshotResult
);
