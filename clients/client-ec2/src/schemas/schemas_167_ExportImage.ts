// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _De,
  _de,
  _DEIT,
  _DEITR,
  _DEITRe,
  _DR,
  _EIT,
  _EITI,
  _eITI,
  _EITIL,
  _EITIx,
  _EITL,
  _eITS,
  _EITx,
  _eQN,
  _ETSL,
  _Fi,
  _Fil,
  _IIm,
  _iIma,
  _it,
  _MR,
  _NTe,
  _nTe,
  _Pro,
  _pro,
  _SB,
  _sB,
  _SEL,
  _sEL,
  _SMt,
  _sMt,
  _SP,
  _sP,
  _Sta,
  _sta,
  _T,
  _tS,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeExportImageTasksRequest = struct(
  n0,
  _DEITR,
  0,
  [_DR, _Fi, _EITI, _MR, _NTe],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => ExportImageTaskIdList,
      {
        [_xN]: _EITIx,
      },
    ],
    1,
    0,
  ]
);
export var DescribeExportImageTasksResult = struct(
  n0,
  _DEITRe,
  0,
  [_EIT, _NTe],
  [
    [
      () => ExportImageTaskList,
      {
        [_eQN]: `ExportImageTaskSet`,
        [_xN]: _eITS,
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
export var ExportImageTask = struct(
  n0,
  _EITx,
  0,
  [_De, _EITIx, _IIm, _Pro, _SEL, _Sta, _SMt, _T],
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
        [_eQN]: `ExportImageTaskId`,
        [_xN]: _eITI,
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
        [_eQN]: `Progress`,
        [_xN]: _pro,
      },
    ],
    [
      () => ExportTaskS3Location,
      {
        [_eQN]: `S3ExportLocation`,
        [_xN]: _sEL,
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
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var ExportTaskS3Location = struct(
  n0,
  _ETSL,
  0,
  [_SB, _SP],
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
        [_eQN]: `S3Prefix`,
        [_xN]: _sP,
      },
    ],
  ]
);
export var ExportImageTaskIdList = list(n0, _EITIL, 0, [
  0,
  {
    [_xN]: _EITIx,
  },
]);
export var ExportImageTaskList = list(n0, _EITL, 0, [
  () => ExportImageTask,
  {
    [_xN]: _it,
  },
]);
export var DescribeExportImageTasks = op(
  n0,
  _DEIT,
  0,
  () => DescribeExportImageTasksRequest,
  () => DescribeExportImageTasksResult
);
