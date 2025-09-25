// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _CDl,
  _Com,
  _CT,
  _DCisk,
  _De,
  _de,
  _DIS,
  _dIS,
  _DIST,
  _DISTR,
  _DISTRe,
  _DR,
  _Enc,
  _enc,
  _eQN,
  _Fi,
  _Fo,
  _for,
  _ISmp,
  _ISR,
  _ISRm,
  _IST,
  _ISTIL,
  _ISTL,
  _ISTm,
  _iSTS,
  _it,
  _ITI,
  _iTI,
  _ITIm,
  _KKI,
  _kKI,
  _MR,
  _NTe,
  _nTe,
  _Pro,
  _pro,
  _RNo,
  _SB,
  _sB,
  _SDCn,
  _SIn,
  _sIn,
  _SK,
  _sK,
  _SMt,
  _sMt,
  _Sta,
  _sta,
  _STD,
  _sTD,
  _SU,
  _T,
  _TS,
  _tS,
  _TSa,
  _UB,
  _uB,
  _UBD,
  _UE,
  _Ur,
  _ur,
  _USp,
  _USpl,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveUrl = sim(n0, _SU, 0, 8);
export var ClientData = struct(n0, _CDl, 0, [_Com, _UE, _USp, _USpl], [0, 4, 1, 4]);
export var DescribeImportSnapshotTasksRequest = struct(
  n0,
  _DISTR,
  0,
  [_DR, _Fi, _ITIm, _MR, _NTe],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fi,
      },
    ],
    [
      () => ImportSnapshotTaskIdList,
      {
        [_xN]: _ITI,
      },
    ],
    1,
    0,
  ]
);
export var DescribeImportSnapshotTasksResult = struct(
  n0,
  _DISTRe,
  0,
  [_IST, _NTe],
  [
    [
      () => ImportSnapshotTaskList,
      {
        [_eQN]: `ImportSnapshotTaskSet`,
        [_xN]: _iSTS,
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
export var ImportSnapshotRequest = struct(
  n0,
  _ISR,
  0,
  [_CDl, _CT, _De, _DCisk, _DR, _Enc, _KKI, _RNo, _TS],
  [
    () => ClientData,
    0,
    0,
    [() => SnapshotDiskContainer, 0],
    2,
    2,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var ImportSnapshotResult = struct(
  n0,
  _ISRm,
  0,
  [_De, _ITI, _STD, _T],
  [
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
        [_eQN]: `ImportTaskId`,
        [_xN]: _iTI,
      },
    ],
    [
      () => SnapshotTaskDetail,
      {
        [_eQN]: `SnapshotTaskDetail`,
        [_xN]: _sTD,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var ImportSnapshotTask = struct(
  n0,
  _ISTm,
  0,
  [_De, _ITI, _STD, _T],
  [
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
        [_eQN]: `ImportTaskId`,
        [_xN]: _iTI,
      },
    ],
    [
      () => SnapshotTaskDetail,
      {
        [_eQN]: `SnapshotTaskDetail`,
        [_xN]: _sTD,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var SnapshotDiskContainer = struct(
  n0,
  _SDCn,
  0,
  [_De, _Fo, _Ur, _UB],
  [0, 0, [() => SensitiveUrl, 0], () => UserBucket]
);
export var SnapshotTaskDetail = struct(
  n0,
  _STD,
  0,
  [_De, _DIS, _Enc, _Fo, _KKI, _Pro, _SIn, _Sta, _SMt, _Ur, _UB],
  [
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
        [_eQN]: `DiskImageSize`,
        [_xN]: _dIS,
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
        [_eQN]: `Format`,
        [_xN]: _for,
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
        [_eQN]: `Progress`,
        [_xN]: _pro,
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
      () => SensitiveUrl,
      {
        [_eQN]: `Url`,
        [_xN]: _ur,
      },
    ],
    [
      () => UserBucketDetails,
      {
        [_eQN]: `UserBucket`,
        [_xN]: _uB,
      },
    ],
  ]
);
export var UserBucket = struct(n0, _UB, 0, [_SB, _SK], [0, 0]);
export var UserBucketDetails = struct(
  n0,
  _UBD,
  0,
  [_SB, _SK],
  [
    [
      0,
      {
        [_eQN]: `S3Bucket`,
        [_xN]: _sB,
      },
    ],
    [
      0,
      {
        [_eQN]: `S3Key`,
        [_xN]: _sK,
      },
    ],
  ]
);
export var ImportSnapshotTaskIdList = list(n0, _ISTIL, 0, [
  0,
  {
    [_xN]: _ITI,
  },
]);
export var ImportSnapshotTaskList = list(n0, _ISTL, 0, [
  () => ImportSnapshotTask,
  {
    [_xN]: _it,
  },
]);
export var DescribeImportSnapshotTasks = op(
  n0,
  _DIST,
  0,
  () => DescribeImportSnapshotTasksRequest,
  () => DescribeImportSnapshotTasksResult
);
export var ImportSnapshot = op(
  n0,
  _ISmp,
  0,
  () => ImportSnapshotRequest,
  () => ImportSnapshotResult
);
