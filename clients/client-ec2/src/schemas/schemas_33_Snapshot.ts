// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _aZ,
  _AZSL,
  _AZv,
  _Co,
  _co,
  _COP,
  _cOP,
  _COPEO,
  _cOPEO,
  _De,
  _de,
  _DFSREI,
  _DFSRES,
  _DFSRi,
  _DFSRRi,
  _DFSRRis,
  _DFSRSE,
  _DFSRSEI,
  _DFSRSES,
  _DFSRSIi,
  _DFSRSSi,
  _DLSe,
  _DLSR,
  _DLSRe,
  _DR,
  _DTi,
  _dTi,
  _DTis,
  _dTis,
  _EFSR,
  _EFSREI,
  _EFSRES,
  _EFSRR,
  _EFSRRn,
  _EFSRSE,
  _EFSRSEI,
  _EFSRSES,
  _EFSRSI,
  _EFSRSS,
  _eQN,
  _Er,
  _er,
  _ETna,
  _eTna,
  _ETnab,
  _eTnab,
  _Fi,
  _Fil,
  _FSRSE,
  _fSRSES,
  _it,
  _LCO,
  _lCO,
  _LDo,
  _lDo,
  _LDST,
  _lDST,
  _LEO,
  _lEO,
  _LSI,
  _LSIL,
  _LSIRB,
  _LSIRBR,
  _LSIRBRi,
  _LSoc,
  _lSoc,
  _Me,
  _me,
  _MR,
  _NTe,
  _nTe,
  _OAw,
  _oAw,
  _OI,
  _oI,
  _OT,
  _oT,
  _RBET,
  _rBET,
  _RBETe,
  _rBETe,
  _SIn,
  _sIn,
  _SIna,
  _SISL,
  _Sn,
  _SRBI,
  _SRBIL,
  _sS,
  _SSI,
  _SSIo,
  _St,
  _st,
  _STR,
  _sTR,
  _Suc,
  _suc,
  _U,
  _u,
  _VIo,
  _vIo,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeLockedSnapshotsRequest = struct(
  n0,
  _DLSR,
  0,
  [_Fi, _MR, _NTe, _SIna, _DR],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    [
      () => SnapshotIdStringList,
      {
        [_xN]: _SIn,
      },
    ],
    2,
  ]
);
export var DescribeLockedSnapshotsResult = struct(
  n0,
  _DLSRe,
  0,
  [_Sn, _NTe],
  [
    [
      () => LockedSnapshotsInfoList,
      {
        [_eQN]: `SnapshotSet`,
        [_xN]: _sS,
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
export var DisableFastSnapshotRestoreErrorItem = struct(
  n0,
  _DFSREI,
  0,
  [_SIn, _FSRSE],
  [
    [
      0,
      {
        [_eQN]: `SnapshotId`,
        [_xN]: _sIn,
      },
    ],
    [
      () => DisableFastSnapshotRestoreStateErrorSet,
      {
        [_eQN]: `FastSnapshotRestoreStateErrorSet`,
        [_xN]: _fSRSES,
      },
    ],
  ]
);
export var DisableFastSnapshotRestoresRequest = struct(
  n0,
  _DFSRRi,
  0,
  [_AZv, _SSIo, _DR],
  [
    [
      () => AvailabilityZoneStringList,
      {
        [_xN]: _AZ,
      },
    ],
    [
      () => SnapshotIdStringList,
      {
        [_xN]: _SSI,
      },
    ],
    2,
  ]
);
export var DisableFastSnapshotRestoresResult = struct(
  n0,
  _DFSRRis,
  0,
  [_Suc, _U],
  [
    [
      () => DisableFastSnapshotRestoreSuccessSet,
      {
        [_eQN]: `Successful`,
        [_xN]: _suc,
      },
    ],
    [
      () => DisableFastSnapshotRestoreErrorSet,
      {
        [_eQN]: `Unsuccessful`,
        [_xN]: _u,
      },
    ],
  ]
);
export var DisableFastSnapshotRestoreStateError = struct(
  n0,
  _DFSRSE,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var DisableFastSnapshotRestoreStateErrorItem = struct(
  n0,
  _DFSRSEI,
  0,
  [_AZ, _Er],
  [
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      () => DisableFastSnapshotRestoreStateError,
      {
        [_eQN]: `Error`,
        [_xN]: _er,
      },
    ],
  ]
);
export var DisableFastSnapshotRestoreSuccessItem = struct(
  n0,
  _DFSRSIi,
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
export var EnableFastSnapshotRestoreErrorItem = struct(
  n0,
  _EFSREI,
  0,
  [_SIn, _FSRSE],
  [
    [
      0,
      {
        [_eQN]: `SnapshotId`,
        [_xN]: _sIn,
      },
    ],
    [
      () => EnableFastSnapshotRestoreStateErrorSet,
      {
        [_eQN]: `FastSnapshotRestoreStateErrorSet`,
        [_xN]: _fSRSES,
      },
    ],
  ]
);
export var EnableFastSnapshotRestoresRequest = struct(
  n0,
  _EFSRR,
  0,
  [_AZv, _SSIo, _DR],
  [
    [
      () => AvailabilityZoneStringList,
      {
        [_xN]: _AZ,
      },
    ],
    [
      () => SnapshotIdStringList,
      {
        [_xN]: _SSI,
      },
    ],
    2,
  ]
);
export var EnableFastSnapshotRestoresResult = struct(
  n0,
  _EFSRRn,
  0,
  [_Suc, _U],
  [
    [
      () => EnableFastSnapshotRestoreSuccessSet,
      {
        [_eQN]: `Successful`,
        [_xN]: _suc,
      },
    ],
    [
      () => EnableFastSnapshotRestoreErrorSet,
      {
        [_eQN]: `Unsuccessful`,
        [_xN]: _u,
      },
    ],
  ]
);
export var EnableFastSnapshotRestoreStateError = struct(
  n0,
  _EFSRSE,
  0,
  [_Co, _Me],
  [
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
  ]
);
export var EnableFastSnapshotRestoreStateErrorItem = struct(
  n0,
  _EFSRSEI,
  0,
  [_AZ, _Er],
  [
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      () => EnableFastSnapshotRestoreStateError,
      {
        [_eQN]: `Error`,
        [_xN]: _er,
      },
    ],
  ]
);
export var EnableFastSnapshotRestoreSuccessItem = struct(
  n0,
  _EFSRSI,
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
export var ListSnapshotsInRecycleBinRequest = struct(
  n0,
  _LSIRBR,
  0,
  [_MR, _NTe, _SIna, _DR],
  [
    1,
    0,
    [
      () => SnapshotIdStringList,
      {
        [_xN]: _SIn,
      },
    ],
    2,
  ]
);
export var ListSnapshotsInRecycleBinResult = struct(
  n0,
  _LSIRBRi,
  0,
  [_Sn, _NTe],
  [
    [
      () => SnapshotRecycleBinInfoList,
      {
        [_eQN]: `SnapshotSet`,
        [_xN]: _sS,
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
export var LockedSnapshotsInfo = struct(
  n0,
  _LSI,
  0,
  [_OI, _SIn, _LSoc, _LDo, _COP, _COPEO, _LCO, _LDST, _LEO],
  [
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
        [_eQN]: `LockDurationStartTime`,
        [_xN]: _lDST,
      },
    ],
    [
      4,
      {
        [_eQN]: `LockExpiresOn`,
        [_xN]: _lEO,
      },
    ],
  ]
);
export var SnapshotRecycleBinInfo = struct(
  n0,
  _SRBI,
  0,
  [_SIn, _RBET, _RBETe, _De, _VIo],
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
        [_eQN]: `RecycleBinEnterTime`,
        [_xN]: _rBET,
      },
    ],
    [
      4,
      {
        [_eQN]: `RecycleBinExitTime`,
        [_xN]: _rBETe,
      },
    ],
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
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
export var AvailabilityZoneStringList = list(n0, _AZSL, 0, [
  0,
  {
    [_xN]: _AZ,
  },
]);
export var DisableFastSnapshotRestoreErrorSet = list(n0, _DFSRES, 0, [
  () => DisableFastSnapshotRestoreErrorItem,
  {
    [_xN]: _it,
  },
]);
export var DisableFastSnapshotRestoreStateErrorSet = list(n0, _DFSRSES, 0, [
  () => DisableFastSnapshotRestoreStateErrorItem,
  {
    [_xN]: _it,
  },
]);
export var DisableFastSnapshotRestoreSuccessSet = list(n0, _DFSRSSi, 0, [
  () => DisableFastSnapshotRestoreSuccessItem,
  {
    [_xN]: _it,
  },
]);
export var EnableFastSnapshotRestoreErrorSet = list(n0, _EFSRES, 0, [
  () => EnableFastSnapshotRestoreErrorItem,
  {
    [_xN]: _it,
  },
]);
export var EnableFastSnapshotRestoreStateErrorSet = list(n0, _EFSRSES, 0, [
  () => EnableFastSnapshotRestoreStateErrorItem,
  {
    [_xN]: _it,
  },
]);
export var EnableFastSnapshotRestoreSuccessSet = list(n0, _EFSRSS, 0, [
  () => EnableFastSnapshotRestoreSuccessItem,
  {
    [_xN]: _it,
  },
]);
export var LockedSnapshotsInfoList = list(n0, _LSIL, 0, [
  () => LockedSnapshotsInfo,
  {
    [_xN]: _it,
  },
]);
export var SnapshotIdStringList = list(n0, _SISL, 0, [
  0,
  {
    [_xN]: _SIn,
  },
]);
export var SnapshotRecycleBinInfoList = list(n0, _SRBIL, 0, [
  () => SnapshotRecycleBinInfo,
  {
    [_xN]: _it,
  },
]);
export var DescribeLockedSnapshots = op(
  n0,
  _DLSe,
  0,
  () => DescribeLockedSnapshotsRequest,
  () => DescribeLockedSnapshotsResult
);
export var DisableFastSnapshotRestores = op(
  n0,
  _DFSRi,
  0,
  () => DisableFastSnapshotRestoresRequest,
  () => DisableFastSnapshotRestoresResult
);
export var EnableFastSnapshotRestores = op(
  n0,
  _EFSR,
  0,
  () => EnableFastSnapshotRestoresRequest,
  () => EnableFastSnapshotRestoresResult
);
export var ListSnapshotsInRecycleBin = op(
  n0,
  _LSIRB,
  0,
  () => ListSnapshotsInRecycleBinRequest,
  () => ListSnapshotsInRecycleBinResult
);
