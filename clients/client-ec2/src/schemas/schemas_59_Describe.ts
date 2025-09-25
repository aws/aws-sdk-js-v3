// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _bCy,
  _BCyt,
  _Byt,
  _byt,
  _Ch,
  _ch,
  _CISL,
  _CTI,
  _cTI,
  _CTIo,
  _CTo,
  _cTo,
  _cTon,
  _CTonv,
  _DCT,
  _DCTL,
  _DCTR,
  _DCTRe,
  _De,
  _de,
  _DID,
  _DIDi,
  _DIVD,
  _DR,
  _dR,
  _eQN,
  _ET,
  _eT,
  _Fo,
  _for,
  _I,
  _i,
  _II,
  _iI,
  _iIm,
  _IImp,
  _IITD,
  _IIVDI,
  _IIVDS,
  _im,
  _Ima,
  _IMU,
  _iMU,
  _it,
  _IVm,
  _iVm,
  _IVR,
  _IVRm,
  _IVTD,
  _Pl,
  _pl,
  _si,
  _Siz,
  _SMt,
  _sMt,
  _St,
  _st,
  _Sta,
  _sta,
  _T,
  _tS,
  _VDo,
  _Vo,
  _vo,
  _Vol,
  _vol,
  _xN,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ImportManifestUrl = sim(n0, _IMU, 0, 8);
export var ConversionTask = struct(
  n0,
  _CTo,
  0,
  [_CTI, _ET, _IImp, _IVm, _St, _SMt, _T],
  [
    [
      0,
      {
        [_eQN]: `ConversionTaskId`,
        [_xN]: _cTI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ExpirationTime`,
        [_xN]: _eT,
      },
    ],
    [
      () => ImportInstanceTaskDetails,
      {
        [_eQN]: `ImportInstance`,
        [_xN]: _iIm,
      },
    ],
    [
      () => ImportVolumeTaskDetails,
      {
        [_eQN]: `ImportVolume`,
        [_xN]: _iVm,
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
export var DescribeConversionTasksRequest = struct(
  n0,
  _DCTR,
  0,
  [_DR, _CTIo],
  [
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
    [
      () => ConversionIdStringList,
      {
        [_eQN]: `ConversionTaskId`,
        [_xN]: _cTI,
      },
    ],
  ]
);
export var DescribeConversionTasksResult = struct(
  n0,
  _DCTRe,
  0,
  [_CTonv],
  [
    [
      () => DescribeConversionTaskList,
      {
        [_eQN]: `ConversionTasks`,
        [_xN]: _cTo,
      },
    ],
  ]
);
export var DiskImageDescription = struct(
  n0,
  _DID,
  0,
  [_Ch, _Fo, _IMU, _Siz],
  [
    [
      0,
      {
        [_eQN]: `Checksum`,
        [_xN]: _ch,
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
      () => ImportManifestUrl,
      {
        [_eQN]: `ImportManifestUrl`,
        [_xN]: _iMU,
      },
    ],
    [
      1,
      {
        [_eQN]: `Size`,
        [_xN]: _si,
      },
    ],
  ]
);
export var DiskImageDetail = struct(
  n0,
  _DIDi,
  0,
  [_Fo, _Byt, _IMU],
  [
    [
      0,
      {
        [_eQN]: `Format`,
        [_xN]: _for,
      },
    ],
    [
      1,
      {
        [_eQN]: `Bytes`,
        [_xN]: _byt,
      },
    ],
    [
      () => ImportManifestUrl,
      {
        [_eQN]: `ImportManifestUrl`,
        [_xN]: _iMU,
      },
    ],
  ]
);
export var DiskImageVolumeDescription = struct(
  n0,
  _DIVD,
  0,
  [_I, _Siz],
  [
    [
      0,
      {
        [_eQN]: `Id`,
        [_xN]: _i,
      },
    ],
    [
      1,
      {
        [_eQN]: `Size`,
        [_xN]: _si,
      },
    ],
  ]
);
export var ImportInstanceTaskDetails = struct(
  n0,
  _IITD,
  0,
  [_De, _II, _Pl, _Vo],
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
        [_eQN]: `InstanceId`,
        [_xN]: _iI,
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
      () => ImportInstanceVolumeDetailSet,
      {
        [_eQN]: `Volumes`,
        [_xN]: _vo,
      },
    ],
  ]
);
export var ImportInstanceVolumeDetailItem = struct(
  n0,
  _IIVDI,
  0,
  [_AZ, _AZI, _BCyt, _De, _Ima, _Sta, _SMt, _Vol],
  [
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
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      1,
      {
        [_eQN]: `BytesConverted`,
        [_xN]: _bCy,
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
      () => DiskImageDescription,
      {
        [_eQN]: `Image`,
        [_xN]: _im,
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
      () => DiskImageVolumeDescription,
      {
        [_eQN]: `Volume`,
        [_xN]: _vol,
      },
    ],
  ]
);
export var ImportVolumeRequest = struct(
  n0,
  _IVR,
  0,
  [_AZI, _DR, _AZ, _Ima, _De, _Vol],
  [
    0,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
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
      () => DiskImageDetail,
      {
        [_eQN]: `Image`,
        [_xN]: _im,
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
      () => VolumeDetail,
      {
        [_eQN]: `Volume`,
        [_xN]: _vol,
      },
    ],
  ]
);
export var ImportVolumeResult = struct(
  n0,
  _IVRm,
  0,
  [_CTo],
  [
    [
      () => ConversionTask,
      {
        [_eQN]: `ConversionTask`,
        [_xN]: _cTon,
      },
    ],
  ]
);
export var ImportVolumeTaskDetails = struct(
  n0,
  _IVTD,
  0,
  [_AZ, _AZI, _BCyt, _De, _Ima, _Vol],
  [
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
        [_eQN]: `AvailabilityZoneId`,
        [_xN]: _aZI,
      },
    ],
    [
      1,
      {
        [_eQN]: `BytesConverted`,
        [_xN]: _bCy,
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
      () => DiskImageDescription,
      {
        [_eQN]: `Image`,
        [_xN]: _im,
      },
    ],
    [
      () => DiskImageVolumeDescription,
      {
        [_eQN]: `Volume`,
        [_xN]: _vol,
      },
    ],
  ]
);
export var VolumeDetail = struct(
  n0,
  _VDo,
  0,
  [_Siz],
  [
    [
      1,
      {
        [_eQN]: `Size`,
        [_xN]: _si,
      },
    ],
  ]
);
export var ConversionIdStringList = list(n0, _CISL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var DescribeConversionTaskList = list(n0, _DCTL, 0, [
  () => ConversionTask,
  {
    [_xN]: _it,
  },
]);
export var ImportInstanceVolumeDetailSet = list(n0, _IIVDS, 0, [
  () => ImportInstanceVolumeDetailItem,
  {
    [_xN]: _it,
  },
]);
export var DescribeConversionTasks = op(
  n0,
  _DCT,
  0,
  () => DescribeConversionTasksRequest,
  () => DescribeConversionTasksResult
);
export var ImportVolume = op(
  n0,
  _IVm,
  0,
  () => ImportVolumeRequest,
  () => ImportVolumeResult
);
