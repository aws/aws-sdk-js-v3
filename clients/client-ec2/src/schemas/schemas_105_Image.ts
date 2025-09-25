// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Arc,
  _arc,
  _BM,
  _bM,
  _CDl,
  _CT,
  _DCis,
  _DCisk,
  _De,
  _de,
  _DIIT,
  _DIITR,
  _DIITRe,
  _DIS,
  _dIS,
  _DN,
  _dN,
  _DR,
  _Enc,
  _enc,
  _eQN,
  _Fi,
  _Fo,
  _for,
  _h,
  _Hy,
  _IDC,
  _IDCL,
  _IILCR,
  _IILCRm,
  _IILSLR,
  _IILSLRm,
  _IIm,
  _iIma,
  _IImpo,
  _IIR,
  _IIRm,
  _IIT,
  _IITL,
  _IITm,
  _iITS,
  _it,
  _ITI,
  _iTI,
  _ITIL,
  _ITIm,
  _KKI,
  _kKI,
  _LCA,
  _lCA,
  _LS,
  _lS,
  _LTi,
  _lTi,
  _MR,
  _NTe,
  _nTe,
  _Pl,
  _pl,
  _Pro,
  _pro,
  _RNo,
  _SDL,
  _SDn,
  _SDna,
  _sDSn,
  _SIn,
  _sIn,
  _SMt,
  _sMt,
  _Sta,
  _sta,
  _T,
  _TS,
  _tS,
  _TSa,
  _UB,
  _uB,
  _UO,
  _uO,
  _Ur,
  _ur,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";
import { ClientData, SensitiveUrl, UserBucket, UserBucketDetails } from "./schemas_14_Import";

/* eslint no-var: 0 */

export var DescribeImportImageTasksRequest = struct(
  n0,
  _DIITR,
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
      () => ImportTaskIdList,
      {
        [_xN]: _ITI,
      },
    ],
    1,
    0,
  ]
);
export var DescribeImportImageTasksResult = struct(
  n0,
  _DIITRe,
  0,
  [_IIT, _NTe],
  [
    [
      () => ImportImageTaskList,
      {
        [_eQN]: `ImportImageTaskSet`,
        [_xN]: _iITS,
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
export var ImageDiskContainer = struct(
  n0,
  _IDC,
  0,
  [_De, _DN, _Fo, _SIn, _Ur, _UB],
  [0, 0, 0, 0, [() => SensitiveUrl, 0], () => UserBucket]
);
export var ImportImageLicenseConfigurationRequest = struct(n0, _IILCR, 0, [_LCA], [0]);
export var ImportImageLicenseConfigurationResponse = struct(
  n0,
  _IILCRm,
  0,
  [_LCA],
  [
    [
      0,
      {
        [_eQN]: `LicenseConfigurationArn`,
        [_xN]: _lCA,
      },
    ],
  ]
);
export var ImportImageRequest = struct(
  n0,
  _IIR,
  0,
  [_Arc, _CDl, _CT, _De, _DCis, _DR, _Enc, _Hy, _KKI, _LTi, _Pl, _RNo, _LS, _TS, _UO, _BM],
  [
    0,
    () => ClientData,
    0,
    0,
    [
      () => ImageDiskContainerList,
      {
        [_xN]: _DCisk,
      },
    ],
    2,
    2,
    0,
    0,
    0,
    0,
    0,
    [() => ImportImageLicenseSpecificationListRequest, 0],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
    0,
  ]
);
export var ImportImageResult = struct(
  n0,
  _IIRm,
  0,
  [_Arc, _De, _Enc, _Hy, _IIm, _ITI, _KKI, _LTi, _Pl, _Pro, _SDn, _Sta, _SMt, _LS, _T, _UO],
  [
    [
      0,
      {
        [_eQN]: `Architecture`,
        [_xN]: _arc,
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
        [_eQN]: `Hypervisor`,
        [_xN]: _h,
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
        [_eQN]: `ImportTaskId`,
        [_xN]: _iTI,
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
        [_eQN]: `LicenseType`,
        [_xN]: _lTi,
      },
    ],
    [
      0,
      {
        [_eQN]: `Platform`,
        [_xN]: _pl,
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
      () => SnapshotDetailList,
      {
        [_eQN]: `SnapshotDetailSet`,
        [_xN]: _sDSn,
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
      () => ImportImageLicenseSpecificationListResponse,
      {
        [_eQN]: `LicenseSpecifications`,
        [_xN]: _lS,
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
        [_eQN]: `UsageOperation`,
        [_xN]: _uO,
      },
    ],
  ]
);
export var ImportImageTask = struct(
  n0,
  _IITm,
  0,
  [_Arc, _De, _Enc, _Hy, _IIm, _ITI, _KKI, _LTi, _Pl, _Pro, _SDn, _Sta, _SMt, _T, _LS, _UO, _BM],
  [
    [
      0,
      {
        [_eQN]: `Architecture`,
        [_xN]: _arc,
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
        [_eQN]: `Hypervisor`,
        [_xN]: _h,
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
        [_eQN]: `ImportTaskId`,
        [_xN]: _iTI,
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
        [_eQN]: `LicenseType`,
        [_xN]: _lTi,
      },
    ],
    [
      0,
      {
        [_eQN]: `Platform`,
        [_xN]: _pl,
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
      () => SnapshotDetailList,
      {
        [_eQN]: `SnapshotDetailSet`,
        [_xN]: _sDSn,
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
    [
      () => ImportImageLicenseSpecificationListResponse,
      {
        [_eQN]: `LicenseSpecifications`,
        [_xN]: _lS,
      },
    ],
    [
      0,
      {
        [_eQN]: `UsageOperation`,
        [_xN]: _uO,
      },
    ],
    [
      0,
      {
        [_eQN]: `BootMode`,
        [_xN]: _bM,
      },
    ],
  ]
);
export var SnapshotDetail = struct(
  n0,
  _SDna,
  0,
  [_De, _DN, _DIS, _Fo, _Pro, _SIn, _Sta, _SMt, _Ur, _UB],
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
        [_eQN]: `DeviceName`,
        [_xN]: _dN,
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
      0,
      {
        [_eQN]: `Format`,
        [_xN]: _for,
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
export var ImageDiskContainerList = list(n0, _IDCL, 0, [
  () => ImageDiskContainer,
  {
    [_xN]: _it,
  },
]);
export var ImportImageLicenseSpecificationListRequest = list(n0, _IILSLR, 0, [
  () => ImportImageLicenseConfigurationRequest,
  {
    [_xN]: _it,
  },
]);
export var ImportImageLicenseSpecificationListResponse = list(n0, _IILSLRm, 0, [
  () => ImportImageLicenseConfigurationResponse,
  {
    [_xN]: _it,
  },
]);
export var ImportImageTaskList = list(n0, _IITL, 0, [
  () => ImportImageTask,
  {
    [_xN]: _it,
  },
]);
export var ImportTaskIdList = list(n0, _ITIL, 0, [
  0,
  {
    [_xN]: _ITI,
  },
]);
export var SnapshotDetailList = list(n0, _SDL, 0, [
  () => SnapshotDetail,
  {
    [_xN]: _it,
  },
]);
export var DescribeImportImageTasks = op(
  n0,
  _DIIT,
  0,
  () => DescribeImportImageTasksRequest,
  () => DescribeImportImageTasksResult
);
export var ImportImage = op(
  n0,
  _IImpo,
  0,
  () => ImportImageRequest,
  () => ImportImageResult
);
