// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _eQN, _EVIO, _EVIOR, _VIo, _vIo, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var EnableVolumeIORequest = struct(
  n0,
  _EVIOR,
  0,
  [_DR, _VIo],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      0,
      {
        [_eQN]: `VolumeId`,
        [_xN]: _vIo,
      },
    ],
  ]
);
export var EnableVolumeIO = op(
  n0,
  _EVIO,
  0,
  () => EnableVolumeIORequest,
  () => Unit
);
