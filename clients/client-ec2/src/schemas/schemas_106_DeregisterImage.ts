// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DAS,
  _DIer,
  _DIRer,
  _DIRere,
  _DR,
  _dR,
  _DSRC,
  _DSRel,
  _DSRS,
  _dSRS,
  _eQN,
  _IIm,
  _it,
  _R,
  _r,
  _RC,
  _rC,
  _SIn,
  _sIn,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteSnapshotReturnCode = struct(
  n0,
  _DSRC,
  0,
  [_SIn, _RC],
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
        [_eQN]: `ReturnCode`,
        [_xN]: _rC,
      },
    ],
  ]
);
export var DeregisterImageRequest = struct(
  n0,
  _DIRer,
  0,
  [_IIm, _DAS, _DR],
  [
    0,
    2,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DeregisterImageResult = struct(
  n0,
  _DIRere,
  0,
  [_R, _DSRel],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
    [
      () => DeleteSnapshotResultSet,
      {
        [_eQN]: `DeleteSnapshotResultSet`,
        [_xN]: _dSRS,
      },
    ],
  ]
);
export var DeleteSnapshotResultSet = list(n0, _DSRS, 0, [
  () => DeleteSnapshotReturnCode,
  {
    [_xN]: _it,
  },
]);
export var DeregisterImage = op(
  n0,
  _DIer,
  0,
  () => DeregisterImageRequest,
  () => DeregisterImageResult
);
