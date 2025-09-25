// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aSt,
  _Atta,
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _CDM,
  _cDM,
  _CSre,
  _CSrea,
  _CSRr,
  _CSRre,
  _CSRrea,
  _CTFS,
  _CTomp,
  _cTomp,
  _CTr,
  _cTr,
  _De,
  _de,
  _DEKI,
  _dEKI,
  _DR,
  _dR,
  _DSes,
  _DSRes,
  _DSResc,
  _DVes,
  _DVRes,
  _DVResc,
  _EBV,
  _EDVI,
  _EDVIx,
  _EEBD,
  _eEBD,
  _Enc,
  _enc,
  _eQN,
  _Fi,
  _Fil,
  _FRa,
  _fRa,
  _FSSIB,
  _fSSIB,
  _GEEBD,
  _GEEBDR,
  _GEEBDRe,
  _II,
  _Io,
  _io,
  _ISn,
  _it,
  _KKI,
  _kKI,
  _Loc,
  _MAE,
  _mAE,
  _MR,
  _mR,
  _NTe,
  _nTe,
  _OA,
  _oA,
  _OAw,
  _oAw,
  _OI,
  _oI,
  _OIw,
  _Op,
  _ope,
  _Own,
  _Pro,
  _pro,
  _RBe,
  _RBUI,
  _RET,
  _rET,
  _RSFRB,
  _RSFRBR,
  _RSFRBRe,
  _si,
  _SIn,
  _sIn,
  _SIna,
  _SInap,
  _Siz,
  _SLn,
  _sMt,
  _SMta,
  _Sn,
  _Sna,
  _sS,
  _SSn,
  _ST,
  _St,
  _sT,
  _st,
  _sta,
  _STs,
  _sTs,
  _STt,
  _sTt,
  _T,
  _Th,
  _th,
  _TS,
  _tS,
  _TSa,
  _TTr,
  _tTr,
  _VALo,
  _VIo,
  _vIo,
  _VIol,
  _VIR,
  _vIR,
  _VL,
  _Vo,
  _Vol,
  _vS,
  _VSo,
  _vSo,
  _VT,
  _vT,
  _xN,
  FilterList,
  n0,
  OperatorResponse,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { SnapshotIdStringList } from "./schemas_33_Snapshot";
import { VolumeIdStringList } from "./schemas_47_Describe";
import { VolumeAttachment } from "./schemas_185_Volume";
import { OwnerStringList } from "./schemas_288_Describe";

/* eslint no-var: 0 */

export var CreateSnapshotRequest = struct(
  n0,
  _CSRr,
  0,
  [_De, _OA, _VIo, _TS, _Loc, _DR],
  [
    0,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
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
export var CreateSnapshotsRequest = struct(
  n0,
  _CSRre,
  0,
  [_De, _ISn, _OA, _TS, _DR, _CTFS, _Loc],
  [
    0,
    [() => InstanceSpecification, 0],
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    2,
    0,
    0,
  ]
);
export var CreateSnapshotsResult = struct(
  n0,
  _CSRrea,
  0,
  [_Sn],
  [
    [
      () => SnapshotSet,
      {
        [_eQN]: `SnapshotSet`,
        [_xN]: _sS,
      },
    ],
  ]
);
export var DescribeSnapshotsRequest = struct(
  n0,
  _DSRes,
  0,
  [_MR, _NTe, _OIw, _RBUI, _SIna, _DR, _Fi],
  [
    1,
    0,
    [
      () => OwnerStringList,
      {
        [_xN]: _Own,
      },
    ],
    [
      64 | 0,
      {
        [_xN]: _RBe,
      },
    ],
    [
      () => SnapshotIdStringList,
      {
        [_xN]: _SIn,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
  ]
);
export var DescribeSnapshotsResult = struct(
  n0,
  _DSResc,
  0,
  [_NTe, _Sn],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => SnapshotList,
      {
        [_eQN]: `SnapshotSet`,
        [_xN]: _sS,
      },
    ],
  ]
);
export var DescribeVolumesRequest = struct(
  n0,
  _DVRes,
  0,
  [_VIol, _DR, _Fi, _NTe, _MR],
  [
    [
      () => VolumeIdStringList,
      {
        [_xN]: _VIo,
      },
    ],
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      1,
      {
        [_eQN]: `MaxResults`,
        [_xN]: _mR,
      },
    ],
  ]
);
export var DescribeVolumesResult = struct(
  n0,
  _DVResc,
  0,
  [_NTe, _Vo],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => VolumeList,
      {
        [_eQN]: `VolumeSet`,
        [_xN]: _vS,
      },
    ],
  ]
);
export var GetEbsEncryptionByDefaultRequest = struct(n0, _GEEBDR, 0, [_DR], [2]);
export var GetEbsEncryptionByDefaultResult = struct(
  n0,
  _GEEBDRe,
  0,
  [_EEBD, _STs],
  [
    [
      2,
      {
        [_eQN]: `EbsEncryptionByDefault`,
        [_xN]: _eEBD,
      },
    ],
    [
      0,
      {
        [_eQN]: `SseType`,
        [_xN]: _sTs,
      },
    ],
  ]
);
export var InstanceSpecification = struct(
  n0,
  _ISn,
  0,
  [_II, _EBV, _EDVI],
  [
    0,
    2,
    [
      () => VolumeIdStringList,
      {
        [_xN]: _EDVIx,
      },
    ],
  ]
);
export var RestoreSnapshotFromRecycleBinRequest = struct(n0, _RSFRBR, 0, [_SIn, _DR], [0, 2]);
export var RestoreSnapshotFromRecycleBinResult = struct(
  n0,
  _RSFRBRe,
  0,
  [_SIn, _OA, _De, _Enc, _OI, _Pro, _ST, _St, _VIo, _VSo, _STs],
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
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
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
      2,
      {
        [_eQN]: `Encrypted`,
        [_xN]: _enc,
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
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
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
      1,
      {
        [_eQN]: `VolumeSize`,
        [_xN]: _vSo,
      },
    ],
    [
      0,
      {
        [_eQN]: `SseType`,
        [_xN]: _sTs,
      },
    ],
  ]
);
export var Snapshot = struct(
  n0,
  _Sna,
  0,
  [
    _OAw,
    _OA,
    _T,
    _STt,
    _RET,
    _STs,
    _AZ,
    _TTr,
    _CDM,
    _CTomp,
    _FSSIB,
    _SIn,
    _VIo,
    _St,
    _SMta,
    _ST,
    _Pro,
    _OI,
    _De,
    _VSo,
    _Enc,
    _KKI,
    _DEKI,
  ],
  [
    [
      0,
      {
        [_eQN]: `OwnerAlias`,
        [_xN]: _oAw,
      },
    ],
    [
      0,
      {
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
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
        [_eQN]: `RestoreExpiryTime`,
        [_xN]: _rET,
      },
    ],
    [
      0,
      {
        [_eQN]: `SseType`,
        [_xN]: _sTs,
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
        [_eQN]: `TransferType`,
        [_xN]: _tTr,
      },
    ],
    [
      1,
      {
        [_eQN]: `CompletionDurationMinutes`,
        [_xN]: _cDM,
      },
    ],
    [
      4,
      {
        [_eQN]: `CompletionTime`,
        [_xN]: _cTomp,
      },
    ],
    [
      1,
      {
        [_eQN]: `FullSnapshotSizeInBytes`,
        [_xN]: _fSSIB,
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
        [_eQN]: `StatusMessage`,
        [_xN]: _sMt,
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
      0,
      {
        [_eQN]: `Progress`,
        [_xN]: _pro,
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
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      1,
      {
        [_eQN]: `VolumeSize`,
        [_xN]: _vSo,
      },
    ],
    [
      2,
      {
        [_eQN]: `Encrypted`,
        [_xN]: _enc,
      },
    ],
    [
      0,
      {
        [_eQN]: `KmsKeyId`,
        [_xN]: _kKI,
      },
    ],
    [
      0,
      {
        [_eQN]: `DataEncryptionKeyId`,
        [_xN]: _dEKI,
      },
    ],
  ]
);
export var SnapshotInfo = struct(
  n0,
  _SInap,
  0,
  [_De, _T, _Enc, _VIo, _St, _VSo, _ST, _Pro, _OI, _SIn, _OA, _STs, _AZ],
  [
    [
      0,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
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
      2,
      {
        [_eQN]: `Encrypted`,
        [_xN]: _enc,
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
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      1,
      {
        [_eQN]: `VolumeSize`,
        [_xN]: _vSo,
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
      0,
      {
        [_eQN]: `Progress`,
        [_xN]: _pro,
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
        [_eQN]: `SnapshotId`,
        [_xN]: _sIn,
      },
    ],
    [
      0,
      {
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
      },
    ],
    [
      0,
      {
        [_eQN]: `SseType`,
        [_xN]: _sTs,
      },
    ],
    [
      0,
      {
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
  ]
);
export var Volume = struct(
  n0,
  _Vol,
  0,
  [_AZI, _OA, _Io, _T, _VT, _FRa, _MAE, _Th, _STs, _Op, _VIR, _VIo, _Siz, _SIn, _AZ, _St, _CTr, _Atta, _Enc, _KKI],
  [
    [
      0,
      {
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      0,
      {
        [_eQN]: `OutpostArn`,
        [_xN]: _oA,
      },
    ],
    [
      1,
      {
        [_eQN]: `Iops`,
        [_xN]: _io,
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
        [_eQN]: `VolumeType`,
        [_xN]: _vT,
      },
    ],
    [
      2,
      {
        [_eQN]: `FastRestored`,
        [_xN]: _fRa,
      },
    ],
    [
      2,
      {
        [_eQN]: `MultiAttachEnabled`,
        [_xN]: _mAE,
      },
    ],
    [
      1,
      {
        [_eQN]: `Throughput`,
        [_xN]: _th,
      },
    ],
    [
      0,
      {
        [_eQN]: `SseType`,
        [_xN]: _sTs,
      },
    ],
    [
      () => OperatorResponse,
      {
        [_eQN]: `Operator`,
        [_xN]: _ope,
      },
    ],
    [
      1,
      {
        [_eQN]: `VolumeInitializationRate`,
        [_xN]: _vIR,
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
      1,
      {
        [_eQN]: `Size`,
        [_xN]: _si,
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
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
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
        [_eQN]: `CreateTime`,
        [_xN]: _cTr,
      },
    ],
    [
      () => VolumeAttachmentList,
      {
        [_eQN]: `AttachmentSet`,
        [_xN]: _aSt,
      },
    ],
    [
      2,
      {
        [_eQN]: `Encrypted`,
        [_xN]: _enc,
      },
    ],
    [
      0,
      {
        [_eQN]: `KmsKeyId`,
        [_xN]: _kKI,
      },
    ],
  ]
);
export var RestorableByStringList = 64 | 0;

export var SnapshotList = list(n0, _SLn, 0, [
  () => Snapshot,
  {
    [_xN]: _it,
  },
]);
export var SnapshotSet = list(n0, _SSn, 0, [
  () => SnapshotInfo,
  {
    [_xN]: _it,
  },
]);
export var VolumeAttachmentList = list(n0, _VALo, 0, [
  () => VolumeAttachment,
  {
    [_xN]: _it,
  },
]);
export var VolumeList = list(n0, _VL, 0, [
  () => Volume,
  {
    [_xN]: _it,
  },
]);
export var CreateSnapshot = op(
  n0,
  _CSre,
  0,
  () => CreateSnapshotRequest,
  () => Snapshot
);
export var CreateSnapshots = op(
  n0,
  _CSrea,
  0,
  () => CreateSnapshotsRequest,
  () => CreateSnapshotsResult
);
export var DescribeSnapshots = op(
  n0,
  _DSes,
  0,
  () => DescribeSnapshotsRequest,
  () => DescribeSnapshotsResult
);
export var DescribeVolumes = op(
  n0,
  _DVes,
  0,
  () => DescribeVolumesRequest,
  () => DescribeVolumesResult
);
export var GetEbsEncryptionByDefault = op(
  n0,
  _GEEBD,
  0,
  () => GetEbsEncryptionByDefaultRequest,
  () => GetEbsEncryptionByDefaultResult
);
export var RestoreSnapshotFromRecycleBin = op(
  n0,
  _RSFRB,
  0,
  () => RestoreSnapshotFromRecycleBinRequest,
  () => RestoreSnapshotFromRecycleBinResult
);
