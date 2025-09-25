// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ACT,
  _aCT,
  _DR,
  _DSTS,
  _DSTSR,
  _DSTSRe,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _LTOS,
  _lTOS,
  _LTOSD,
  _lTOSD,
  _lTP,
  _LTPa,
  _LTST,
  _lTST,
  _MR,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _RET,
  _rET,
  _SIn,
  _sIn,
  _Sta,
  _sta,
  _STS,
  _STSn,
  _sTSS,
  _STt,
  _sTt,
  _T,
  _tS,
  _VIo,
  _vIo,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSnapshotTierStatusRequest = struct(
  n0,
  _DSTSR,
  0,
  [_Fi, _DR, _NTe, _MR],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
    0,
    1,
  ]
);
export var DescribeSnapshotTierStatusResult = struct(
  n0,
  _DSTSRe,
  0,
  [_STS, _NTe],
  [
    [
      () => snapshotTierStatusSet,
      {
        [_eQN]: `SnapshotTierStatusSet`,
        [_xN]: _sTSS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
  ]
);
export var SnapshotTierStatus = struct(
  n0,
  _STSn,
  0,
  [_SIn, _VIo, _Sta, _OI, _T, _STt, _LTST, _LTPa, _LTOS, _LTOSD, _ACT, _RET],
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
        [_eQN]: `VolumeId`,
        [_xN]: _vIo,
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
      0,
      {
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      0,
      {
        [_eQN]: `StorageTier`,
        [_xN]: _sTt,
      },
    ],
    [
      4,
      {
        [_eQN]: `LastTieringStartTime`,
        [_xN]: _lTST,
      },
    ],
    [
      1,
      {
        [_eQN]: `LastTieringProgress`,
        [_xN]: _lTP,
      },
    ],
    [
      0,
      {
        [_eQN]: `LastTieringOperationStatus`,
        [_xN]: _lTOS,
      },
    ],
    [
      0,
      {
        [_eQN]: `LastTieringOperationStatusDetail`,
        [_xN]: _lTOSD,
      },
    ],
    [
      4,
      {
        [_eQN]: `ArchivalCompleteTime`,
        [_xN]: _aCT,
      },
    ],
    [
      4,
      {
        [_eQN]: `RestoreExpiryTime`,
        [_xN]: _rET,
      },
    ],
  ]
);
export var snapshotTierStatusSet = list(n0, _sTSS, 0, [
  () => SnapshotTierStatus,
  {
    [_xN]: _it,
  },
]);
export var DescribeSnapshotTierStatus = op(
  n0,
  _DSTS,
  0,
  () => DescribeSnapshotTierStatusRequest,
  () => DescribeSnapshotTierStatusResult
);
