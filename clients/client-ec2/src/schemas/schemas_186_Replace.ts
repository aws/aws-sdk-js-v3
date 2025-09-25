// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CRRVT,
  _CRRVTR,
  _CRRVTRr,
  _CT,
  _CTom,
  _cTom,
  _DR,
  _DRRV,
  _dRRV,
  _DRRVT,
  _DRRVTR,
  _DRRVTRe,
  _eQN,
  _Fi,
  _Fil,
  _II,
  _iI,
  _IIm,
  _iIma,
  _it,
  _MR,
  _NTe,
  _nTe,
  _RRVT,
  _rRVT,
  _RRVTe,
  _RRVTI,
  _rRVTI,
  _RRVTIe,
  _rRVTS,
  _SIn,
  _sIn,
  _ST,
  _sT,
  _T,
  _TS,
  _tS,
  _TSa,
  _TSas,
  _tSas,
  _VIR,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateReplaceRootVolumeTaskRequest = struct(
  n0,
  _CRRVTR,
  0,
  [_II, _SIn, _CT, _DR, _TS, _IIm, _DRRV, _VIR],
  [
    0,
    0,
    [0, 4],
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
    2,
    1,
  ]
);
export var CreateReplaceRootVolumeTaskResult = struct(
  n0,
  _CRRVTRr,
  0,
  [_RRVT],
  [
    [
      () => ReplaceRootVolumeTask,
      {
        [_eQN]: `ReplaceRootVolumeTask`,
        [_xN]: _rRVT,
      },
    ],
  ]
);
export var DescribeReplaceRootVolumeTasksRequest = struct(
  n0,
  _DRRVTR,
  0,
  [_RRVTI, _Fi, _MR, _NTe, _DR],
  [
    [
      () => ReplaceRootVolumeTaskIds,
      {
        [_xN]: _RRVTIe,
      },
    ],
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
export var DescribeReplaceRootVolumeTasksResult = struct(
  n0,
  _DRRVTRe,
  0,
  [_RRVTe, _NTe],
  [
    [
      () => ReplaceRootVolumeTasks,
      {
        [_eQN]: `ReplaceRootVolumeTaskSet`,
        [_xN]: _rRVTS,
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
export var ReplaceRootVolumeTask = struct(
  n0,
  _RRVT,
  0,
  [_RRVTIe, _II, _TSas, _ST, _CTom, _T, _IIm, _SIn, _DRRV],
  [
    [
      0,
      {
        [_eQN]: `ReplaceRootVolumeTaskId`,
        [_xN]: _rRVTI,
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
        [_eQN]: `TaskState`,
        [_xN]: _tSas,
      },
    ],
    [
      0,
      {
        [_eQN]: `StartTime`,
        [_xN]: _sT,
      },
    ],
    [
      0,
      {
        [_eQN]: `CompleteTime`,
        [_xN]: _cTom,
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
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
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
      2,
      {
        [_eQN]: `DeleteReplacedRootVolume`,
        [_xN]: _dRRV,
      },
    ],
  ]
);
export var ReplaceRootVolumeTaskIds = list(n0, _RRVTI, 0, [
  0,
  {
    [_xN]: _RRVTIe,
  },
]);
export var ReplaceRootVolumeTasks = list(n0, _RRVTe, 0, [
  () => ReplaceRootVolumeTask,
  {
    [_xN]: _it,
  },
]);
export var CreateReplaceRootVolumeTask = op(
  n0,
  _CRRVT,
  0,
  () => CreateReplaceRootVolumeTaskRequest,
  () => CreateReplaceRootVolumeTaskResult
);
export var DescribeReplaceRootVolumeTasks = op(
  n0,
  _DRRVT,
  0,
  () => DescribeReplaceRootVolumeTasksRequest,
  () => DescribeReplaceRootVolumeTasksResult
);
