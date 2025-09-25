// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _aZ,
  _DFSR,
  _DFSRR,
  _DFSRRe,
  _DFSRSI,
  _DFSRSS,
  _DR,
  _DTi,
  _dTi,
  _DTis,
  _dTis,
  _eQN,
  _ETna,
  _eTna,
  _ETnab,
  _eTnab,
  _Fi,
  _Fil,
  _FSR,
  _fSRS,
  _it,
  _MR,
  _NTe,
  _nTe,
  _OAw,
  _oAw,
  _OI,
  _oI,
  _OT,
  _oT,
  _SIn,
  _sIn,
  _St,
  _st,
  _STR,
  _sTR,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeFastSnapshotRestoresRequest = struct(
  n0,
  _DFSRR,
  0,
  [_Fi, _MR, _NTe, _DR],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    2,
  ]
);
export var DescribeFastSnapshotRestoresResult = struct(
  n0,
  _DFSRRe,
  0,
  [_FSR, _NTe],
  [
    [
      () => DescribeFastSnapshotRestoreSuccessSet,
      {
        [_eQN]: `FastSnapshotRestoreSet`,
        [_xN]: _fSRS,
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
export var DescribeFastSnapshotRestoreSuccessItem = struct(
  n0,
  _DFSRSI,
  0,
  [_SIn, _AZ, _St, _STR, _OI, _OAw, _ETna, _OT, _ETnab, _DTi, _DTis],
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
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      0,
      {
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `StateTransitionReason`,
        [_xN]: _sTR,
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
      0,
      {
        [_eQN]: `OwnerAlias`,
        [_xN]: _oAw,
      },
    ],
    [
      4,
      {
        [_eQN]: `EnablingTime`,
        [_xN]: _eTna,
      },
    ],
    [
      4,
      {
        [_eQN]: `OptimizingTime`,
        [_xN]: _oT,
      },
    ],
    [
      4,
      {
        [_eQN]: `EnabledTime`,
        [_xN]: _eTnab,
      },
    ],
    [
      4,
      {
        [_eQN]: `DisablingTime`,
        [_xN]: _dTi,
      },
    ],
    [
      4,
      {
        [_eQN]: `DisabledTime`,
        [_xN]: _dTis,
      },
    ],
  ]
);
export var DescribeFastSnapshotRestoreSuccessSet = list(n0, _DFSRSS, 0, [
  () => DescribeFastSnapshotRestoreSuccessItem,
  {
    [_xN]: _it,
  },
]);
export var DescribeFastSnapshotRestores = op(
  n0,
  _DFSR,
  0,
  () => DescribeFastSnapshotRestoresRequest,
  () => DescribeFastSnapshotRestoresResult
);
