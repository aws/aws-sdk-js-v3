// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _DR,
  _eQN,
  _eTn,
  _ETnd,
  _Io,
  _MAE,
  _MSod,
  _mSod,
  _MVo,
  _MVR,
  _MVRo,
  _OIr,
  _oIr,
  _OMAE,
  _oMAE,
  _OSr,
  _oSr,
  _OTr,
  _oTr,
  _OVT,
  _oVT,
  _Pro,
  _pro,
  _Siz,
  _SMt,
  _sMt,
  _ST,
  _sT,
  _Th,
  _TIar,
  _tIar,
  _TMAE,
  _tMAE,
  _tSar,
  _TSarg,
  _TTar,
  _tTar,
  _TVT,
  _tVT,
  _VIo,
  _vIo,
  _vM,
  _VMo,
  _VT,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyVolumeRequest = struct(n0, _MVR, 0, [_DR, _VIo, _Siz, _VT, _Io, _Th, _MAE], [2, 0, 1, 0, 1, 1, 2]);
export var ModifyVolumeResult = struct(
  n0,
  _MVRo,
  0,
  [_VMo],
  [
    [
      () => VolumeModification,
      {
        [_eQN]: `VolumeModification`,
        [_xN]: _vM,
      },
    ],
  ]
);
export var VolumeModification = struct(
  n0,
  _VMo,
  0,
  [_VIo, _MSod, _SMt, _TSarg, _TIar, _TVT, _TTar, _TMAE, _OSr, _OIr, _OVT, _OTr, _OMAE, _Pro, _ST, _ETnd],
  [
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
        [_eQN]: `ModificationState`,
        [_xN]: _mSod,
      },
    ],
    [
      0,
      {
        [_eQN]: `StatusMessage`,
        [_xN]: _sMt,
      },
    ],
    [
      1,
      {
        [_eQN]: `TargetSize`,
        [_xN]: _tSar,
      },
    ],
    [
      1,
      {
        [_eQN]: `TargetIops`,
        [_xN]: _tIar,
      },
    ],
    [
      0,
      {
        [_eQN]: `TargetVolumeType`,
        [_xN]: _tVT,
      },
    ],
    [
      1,
      {
        [_eQN]: `TargetThroughput`,
        [_xN]: _tTar,
      },
    ],
    [
      2,
      {
        [_eQN]: `TargetMultiAttachEnabled`,
        [_xN]: _tMAE,
      },
    ],
    [
      1,
      {
        [_eQN]: `OriginalSize`,
        [_xN]: _oSr,
      },
    ],
    [
      1,
      {
        [_eQN]: `OriginalIops`,
        [_xN]: _oIr,
      },
    ],
    [
      0,
      {
        [_eQN]: `OriginalVolumeType`,
        [_xN]: _oVT,
      },
    ],
    [
      1,
      {
        [_eQN]: `OriginalThroughput`,
        [_xN]: _oTr,
      },
    ],
    [
      2,
      {
        [_eQN]: `OriginalMultiAttachEnabled`,
        [_xN]: _oMAE,
      },
    ],
    [
      1,
      {
        [_eQN]: `Progress`,
        [_xN]: _pro,
      },
    ],
    [
      4,
      {
        [_eQN]: `StartTime`,
        [_xN]: _sT,
      },
    ],
    [
      4,
      {
        [_eQN]: `EndTime`,
        [_xN]: _eTn,
      },
    ],
  ]
);
export var ModifyVolume = op(
  n0,
  _MVo,
  0,
  () => ModifyVolumeRequest,
  () => ModifyVolumeResult
);
