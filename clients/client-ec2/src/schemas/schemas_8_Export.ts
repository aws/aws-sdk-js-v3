// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CF,
  _cF,
  _CIET,
  _CIETR,
  _CIETRr,
  _CT,
  _De,
  _de,
  _DET,
  _DETR,
  _DETRe,
  _DIF,
  _dIF,
  _DR,
  _EIRx,
  _EIRxp,
  _eITI,
  _EITIx,
  _EIxp,
  _eQN,
  _ETI,
  _eTI,
  _ETISL,
  _ETIx,
  _ETL,
  _eTS,
  _ETSLR,
  _ETST,
  _ETSTS,
  _eTSx,
  _ETx,
  _eTx,
  _ETxp,
  _Fi,
  _Fil,
  _iE,
  _IED,
  _II,
  _iI,
  _IIm,
  _iIma,
  _it,
  _Pro,
  _pro,
  _RNo,
  _rNo,
  _SB,
  _sB,
  _SEL,
  _sEL,
  _SK,
  _sK,
  _SMt,
  _sMt,
  _SP,
  _sP,
  _St,
  _st,
  _Sta,
  _sta,
  _T,
  _TE,
  _tE,
  _TS,
  _tS,
  _TSa,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { ExportTaskS3Location } from "./schemas_167_ExportImage";

/* eslint no-var: 0 */

export var CreateInstanceExportTaskRequest = struct(
  n0,
  _CIETR,
  0,
  [_TS, _De, _II, _TE, _ETST],
  [
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
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
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
      },
    ],
    [
      0,
      {
        [_eQN]: `TargetEnvironment`,
        [_xN]: _tE,
      },
    ],
    [
      () => ExportToS3TaskSpecification,
      {
        [_eQN]: `ExportToS3`,
        [_xN]: _eTS,
      },
    ],
  ]
);
export var CreateInstanceExportTaskResult = struct(
  n0,
  _CIETRr,
  0,
  [_ETx],
  [
    [
      () => ExportTask,
      {
        [_eQN]: `ExportTask`,
        [_xN]: _eTx,
      },
    ],
  ]
);
export var DescribeExportTasksRequest = struct(
  n0,
  _DETR,
  0,
  [_Fi, _ETIx],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => ExportTaskIdStringList,
      {
        [_eQN]: `ExportTaskId`,
        [_xN]: _eTI,
      },
    ],
  ]
);
export var DescribeExportTasksResult = struct(
  n0,
  _DETRe,
  0,
  [_ETxp],
  [
    [
      () => ExportTaskList,
      {
        [_eQN]: `ExportTaskSet`,
        [_xN]: _eTSx,
      },
    ],
  ]
);
export var ExportImageRequest = struct(
  n0,
  _EIRx,
  0,
  [_CT, _De, _DIF, _DR, _IIm, _SEL, _RNo, _TS],
  [
    [0, 4],
    0,
    0,
    2,
    0,
    () => ExportTaskS3LocationRequest,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var ExportImageResult = struct(
  n0,
  _EIRxp,
  0,
  [_De, _DIF, _EITIx, _IIm, _RNo, _Pro, _SEL, _Sta, _SMt, _T],
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
        [_eQN]: `DiskImageFormat`,
        [_xN]: _dIF,
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
        [_eQN]: `RoleName`,
        [_xN]: _rNo,
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
export var ExportTask = struct(
  n0,
  _ETx,
  0,
  [_De, _ETI, _ETST, _IED, _St, _SMt, _T],
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
        [_eQN]: `ExportTaskId`,
        [_xN]: _eTI,
      },
    ],
    [
      () => ExportToS3Task,
      {
        [_eQN]: `ExportToS3`,
        [_xN]: _eTS,
      },
    ],
    [
      () => InstanceExportDetails,
      {
        [_eQN]: `InstanceExport`,
        [_xN]: _iE,
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
export var ExportTaskS3LocationRequest = struct(n0, _ETSLR, 0, [_SB, _SP], [0, 0]);
export var ExportToS3Task = struct(
  n0,
  _ETST,
  0,
  [_CF, _DIF, _SB, _SK],
  [
    [
      0,
      {
        [_eQN]: `ContainerFormat`,
        [_xN]: _cF,
      },
    ],
    [
      0,
      {
        [_eQN]: `DiskImageFormat`,
        [_xN]: _dIF,
      },
    ],
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
export var ExportToS3TaskSpecification = struct(
  n0,
  _ETSTS,
  0,
  [_DIF, _CF, _SB, _SP],
  [
    [
      0,
      {
        [_eQN]: `DiskImageFormat`,
        [_xN]: _dIF,
      },
    ],
    [
      0,
      {
        [_eQN]: `ContainerFormat`,
        [_xN]: _cF,
      },
    ],
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
export var InstanceExportDetails = struct(
  n0,
  _IED,
  0,
  [_II, _TE],
  [
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
        [_eQN]: `TargetEnvironment`,
        [_xN]: _tE,
      },
    ],
  ]
);
export var ExportTaskIdStringList = list(n0, _ETISL, 0, [
  0,
  {
    [_xN]: _ETI,
  },
]);
export var ExportTaskList = list(n0, _ETL, 0, [
  () => ExportTask,
  {
    [_xN]: _it,
  },
]);
export var CreateInstanceExportTask = op(
  n0,
  _CIET,
  0,
  () => CreateInstanceExportTaskRequest,
  () => CreateInstanceExportTaskResult
);
export var DescribeExportTasks = op(
  n0,
  _DET,
  0,
  () => DescribeExportTasksRequest,
  () => DescribeExportTasksResult
);
export var ExportImage = op(
  n0,
  _EIxp,
  0,
  () => ExportImageRequest,
  () => ExportImageResult
);
