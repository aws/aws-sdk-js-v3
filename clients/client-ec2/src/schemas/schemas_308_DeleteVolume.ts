// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DR, _dR, _DVel, _DVR, _eQN, _VIo, _xN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVolumeRequest = struct(
  n0,
  _DVR,
  0,
  [_VIo, _DR],
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
export var DeleteVolume = op(
  n0,
  _DVel,
  0,
  () => DeleteVolumeRequest,
  () => Unit
);
