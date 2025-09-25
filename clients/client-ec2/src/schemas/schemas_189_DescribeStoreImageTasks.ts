// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIm,
  _aIm,
  _b,
  _Bu,
  _DR,
  _DSIT,
  _DSITR,
  _DSITRe,
  _eQN,
  _Fi,
  _Fil,
  _IIL,
  _IIm,
  _IIma,
  _it,
  _MR,
  _NTe,
  _nTe,
  _PP,
  _pP,
  _SITR,
  _SITRS,
  _sITRS,
  _SITRt,
  _SKo,
  _sKo,
  _STFR,
  _sTFR,
  _sTS,
  _STSt,
  _TSTa,
  _tSTa,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeStoreImageTasksRequest = struct(
  n0,
  _DSITR,
  0,
  [_IIma, _DR, _Fi, _NTe, _MR],
  [
    [
      () => ImageIdList,
      {
        [_xN]: _IIm,
      },
    ],
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    0,
    1,
  ]
);
export var DescribeStoreImageTasksResult = struct(
  n0,
  _DSITRe,
  0,
  [_SITR, _NTe],
  [
    [
      () => StoreImageTaskResultSet,
      {
        [_eQN]: `StoreImageTaskResultSet`,
        [_xN]: _sITRS,
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
export var StoreImageTaskResult = struct(
  n0,
  _SITRt,
  0,
  [_AIm, _TSTa, _Bu, _SKo, _PP, _STSt, _STFR],
  [
    [
      0,
      {
        [_eQN]: `AmiId`,
        [_xN]: _aIm,
      },
    ],
    [
      4,
      {
        [_eQN]: `TaskStartTime`,
        [_xN]: _tSTa,
      },
    ],
    [
      0,
      {
        [_eQN]: `Bucket`,
        [_xN]: _b,
      },
    ],
    [
      0,
      {
        [_eQN]: `S3objectKey`,
        [_xN]: _sKo,
      },
    ],
    [
      1,
      {
        [_eQN]: `ProgressPercentage`,
        [_xN]: _pP,
      },
    ],
    [
      0,
      {
        [_eQN]: `StoreTaskState`,
        [_xN]: _sTS,
      },
    ],
    [
      0,
      {
        [_eQN]: `StoreTaskFailureReason`,
        [_xN]: _sTFR,
      },
    ],
  ]
);
export var ImageIdList = list(n0, _IIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var StoreImageTaskResultSet = list(n0, _SITRS, 0, [
  () => StoreImageTaskResult,
  {
    [_xN]: _it,
  },
]);
export var DescribeStoreImageTasks = op(
  n0,
  _DSIT,
  0,
  () => DescribeStoreImageTasksRequest,
  () => DescribeStoreImageTasksResult
);
