// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _aRs,
  _ARss,
  _aTt,
  _ATtt,
  _AVR,
  _AVtt,
  _Dev,
  _dev,
  _DOT,
  _dOT,
  _DR,
  _dR,
  _DVet,
  _DVRet,
  _eQN,
  _F,
  _II,
  _iI,
  _IOS,
  _iOS,
  _St,
  _sta,
  _VAo,
  _VIo,
  _vIo,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttachVolumeRequest = struct(
  n0,
  _AVR,
  0,
  [_Dev, _II, _VIo, _DR],
  [
    0,
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
export var DetachVolumeRequest = struct(
  n0,
  _DVRet,
  0,
  [_Dev, _F, _II, _VIo, _DR],
  [
    0,
    2,
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
export var VolumeAttachment = struct(
  n0,
  _VAo,
  0,
  [_DOT, _ARss, _IOS, _VIo, _II, _Dev, _St, _ATtt],
  [
    [
      2,
      {
        [_eQN]: `DeleteOnTermination`,
        [_xN]: _dOT,
      },
    ],
    [
      0,
      {
        [_eQN]: `AssociatedResource`,
        [_xN]: _aRs,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceOwningService`,
        [_xN]: _iOS,
      },
    ],
    [
      0,
      {
        [_eQN]: `VolumeId`,
        [_xN]: _vIo,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Device`,
        [_xN]: _dev,
      },
    ],
    [
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      4,
      {
        [_eQN]: `AttachTime`,
        [_xN]: _aTt,
      },
    ],
  ]
);
export var AttachVolume = op(
  n0,
  _AVtt,
  0,
  () => AttachVolumeRequest,
  () => VolumeAttachment
);
export var DetachVolume = op(
  n0,
  _DVet,
  0,
  () => DetachVolumeRequest,
  () => VolumeAttachment
);
