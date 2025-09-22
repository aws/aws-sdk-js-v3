// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ad,
  _AEIO,
  _aEIO,
  _Arc,
  _arc,
  _At,
  _bDM,
  _BDMl,
  _BM,
  _bM,
  _CDr,
  _cDr,
  _Co,
  _co,
  _CTr,
  _cTr,
  _cVP,
  _CVPr,
  _De,
  _de,
  _DFIA,
  _DFIAR,
  _DFIARe,
  _DFIesc,
  _DFIRescr,
  _DFIRescri,
  _DIA,
  _DIAR,
  _DIes,
  _DIev,
  _DIRes,
  _DIResc,
  _dPe,
  _DPer,
  _DR,
  _dR,
  _DRS,
  _dRS,
  _DSAe,
  _DSAR,
  _DSARe,
  _DTe,
  _dTe,
  _DVA,
  _DVAR,
  _DVARe,
  _EBSL,
  _EBx,
  _eQN,
  _ESna,
  _eSna,
  _EU,
  _Fi,
  _FIA,
  _fIA,
  _FIGI,
  _fIGI,
  _FII,
  _fII,
  _FIIL,
  _FIIp,
  _FIL,
  _Fil,
  _FIp,
  _FIpg,
  _FIS,
  _fISp,
  _FTE,
  _fTE,
  _g,
  _Gr,
  _h,
  _Hy,
  _IAm,
  _iAm,
  _IAma,
  _ID,
  _IDn,
  _IIm,
  _IIma,
  _iIma,
  _IL,
  _iL,
  _ILm,
  _Im,
  _Ima,
  _IOA,
  _iOA,
  _iOI,
  _iPs,
  _iSm,
  _iSma,
  _ISmd,
  _iSmd,
  _it,
  _ITL,
  _ITm,
  _iTm,
  _iTns,
  _ITnst,
  _ke,
  _KI,
  _kI,
  _LLT,
  _lLT,
  _LP,
  _lP,
  _LPa,
  _lPa,
  _LPLo,
  _LPLR,
  _LPMo,
  _LPo,
  _LPR,
  _Me,
  _me,
  _MFIA,
  _MFIAR,
  _MFIARo,
  _MR,
  _N,
  _n,
  _NTe,
  _nTe,
  _OAw,
  _oAw,
  _OI,
  _oI,
  _OTp,
  _Ow,
  _Own,
  _pC,
  _PCIr,
  _PCLr,
  _PCr,
  _pCr,
  _PCro,
  _PCT,
  _PDl,
  _pDl,
  _PIc,
  _pIc,
  _Pl,
  _pl,
  _Pu,
  _pu,
  _ra,
  _RDN,
  _rDN,
  _RDT,
  _rDT,
  _Rem,
  _RIa,
  _rIa,
  _SII,
  _sII,
  _SIIo,
  _sIIo,
  _SIn,
  _sIn,
  _sIR,
  _SIRo,
  _SIub,
  _SNS,
  _sNSr,
  _SRt,
  _sRt,
  _St,
  _st,
  _SVh,
  _sVh,
  _SVI,
  _T,
  _tag,
  _tS,
  _TSp,
  _tSp,
  _ty,
  _UD,
  _uD,
  _UG,
  _UGs,
  _UI,
  _uI,
  _UIs,
  _UO,
  _uO,
  _UT,
  _uT,
  _VIe,
  _VIo,
  _vIo,
  _vTi,
  _VTir,
  _xN,
  FilterList,
  n0,
  TagList,
} from "./schemas_0";
import {
  CreateVolumePermissionList,
  ProductCodeStringList,
  UserGroupStringList,
  UserIdStringList,
} from "./schemas_13_Attribute";
import { AttributeValue, LaunchPermissionList } from "./schemas_102_Attribute";
import { ImageIdStringList } from "./schemas_138_Images";
import { BlockDeviceMappingList } from "./schemas_147_Describe";
import { AttributeBooleanValue } from "./schemas_261_Attribute";
import { StateReason } from "./schemas_287_Describe";
import { OwnerStringList } from "./schemas_288_Describe";

/* eslint no-var: 0 */

export var DescribeFpgaImageAttributeRequest = struct(n0, _DFIAR, 0, [_DR, _FII, _At], [2, 0, 0]);
export var DescribeFpgaImageAttributeResult = struct(
  n0,
  _DFIARe,
  0,
  [_FIA],
  [
    [
      () => FpgaImageAttribute,
      {
        [_eQN]: `FpgaImageAttribute`,
        [_xN]: _fIA,
      },
    ],
  ]
);
export var DescribeFpgaImagesRequest = struct(
  n0,
  _DFIRescr,
  0,
  [_DR, _FIIp, _Ow, _Fi, _NTe, _MR],
  [
    2,
    [
      () => FpgaImageIdList,
      {
        [_xN]: _FII,
      },
    ],
    [
      () => OwnerStringList,
      {
        [_xN]: _Own,
      },
    ],
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
export var DescribeFpgaImagesResult = struct(
  n0,
  _DFIRescri,
  0,
  [_FIp, _NTe],
  [
    [
      () => FpgaImageList,
      {
        [_eQN]: `FpgaImageSet`,
        [_xN]: _fISp,
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
export var DescribeImageAttributeRequest = struct(
  n0,
  _DIAR,
  0,
  [_At, _IIm, _DR],
  [
    0,
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
export var DescribeImagesRequest = struct(
  n0,
  _DIRes,
  0,
  [_EU, _IIma, _Ow, _ID, _IDn, _MR, _NTe, _DR, _Fi],
  [
    [
      () => ExecutableByStringList,
      {
        [_xN]: _EBx,
      },
    ],
    [
      () => ImageIdStringList,
      {
        [_xN]: _IIm,
      },
    ],
    [
      () => OwnerStringList,
      {
        [_xN]: _Own,
      },
    ],
    2,
    2,
    1,
    0,
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
export var DescribeImagesResult = struct(
  n0,
  _DIResc,
  0,
  [_NTe, _Im],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => ImageList,
      {
        [_eQN]: `ImagesSet`,
        [_xN]: _iSm,
      },
    ],
  ]
);
export var DescribeSnapshotAttributeRequest = struct(
  n0,
  _DSAR,
  0,
  [_At, _SIn, _DR],
  [
    0,
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
export var DescribeSnapshotAttributeResult = struct(
  n0,
  _DSARe,
  0,
  [_PCro, _SIn, _CVPr],
  [
    [
      () => ProductCodeList,
      {
        [_eQN]: `ProductCodes`,
        [_xN]: _pC,
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
      () => CreateVolumePermissionList,
      {
        [_eQN]: `CreateVolumePermission`,
        [_xN]: _cVP,
      },
    ],
  ]
);
export var DescribeVolumeAttributeRequest = struct(
  n0,
  _DVAR,
  0,
  [_At, _VIo, _DR],
  [
    0,
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
export var DescribeVolumeAttributeResult = struct(
  n0,
  _DVARe,
  0,
  [_AEIO, _PCro, _VIo],
  [
    [
      () => AttributeBooleanValue,
      {
        [_eQN]: `AutoEnableIO`,
        [_xN]: _aEIO,
      },
    ],
    [
      () => ProductCodeList,
      {
        [_eQN]: `ProductCodes`,
        [_xN]: _pC,
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
export var FpgaImage = struct(
  n0,
  _FIpg,
  0,
  [_FII, _FIGI, _N, _De, _SVh, _PIc, _St, _CTr, _UT, _OI, _OAw, _PCro, _T, _Pu, _DRS, _ITnst],
  [
    [
      0,
      {
        [_eQN]: `FpgaImageId`,
        [_xN]: _fII,
      },
    ],
    [
      0,
      {
        [_eQN]: `FpgaImageGlobalId`,
        [_xN]: _fIGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
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
        [_eQN]: `ShellVersion`,
        [_xN]: _sVh,
      },
    ],
    [
      () => PciId,
      {
        [_eQN]: `PciId`,
        [_xN]: _pIc,
      },
    ],
    [
      () => FpgaImageState,
      {
        [_eQN]: `State`,
        [_xN]: _st,
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
      4,
      {
        [_eQN]: `UpdateTime`,
        [_xN]: _uT,
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
      () => ProductCodeList,
      {
        [_eQN]: `ProductCodes`,
        [_xN]: _pC,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `Tags`,
        [_xN]: _tag,
      },
    ],
    [
      2,
      {
        [_eQN]: `Public`,
        [_xN]: _pu,
      },
    ],
    [
      2,
      {
        [_eQN]: `DataRetentionSupport`,
        [_xN]: _dRS,
      },
    ],
    [
      () => InstanceTypesList,
      {
        [_eQN]: `InstanceTypes`,
        [_xN]: _iTns,
      },
    ],
  ]
);
export var FpgaImageAttribute = struct(
  n0,
  _FIA,
  0,
  [_FII, _N, _De, _LP, _PCro],
  [
    [
      0,
      {
        [_eQN]: `FpgaImageId`,
        [_xN]: _fII,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
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
      () => LoadPermissionList,
      {
        [_eQN]: `LoadPermissions`,
        [_xN]: _lP,
      },
    ],
    [
      () => ProductCodeList,
      {
        [_eQN]: `ProductCodes`,
        [_xN]: _pC,
      },
    ],
  ]
);
export var FpgaImageState = struct(
  n0,
  _FIS,
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
export var Image = struct(
  n0,
  _Ima,
  0,
  [
    _PDl,
    _UO,
    _BDMl,
    _De,
    _ESna,
    _Hy,
    _IOA,
    _N,
    _RDN,
    _RDT,
    _SNS,
    _SRt,
    _T,
    _VTir,
    _BM,
    _TSp,
    _DTe,
    _ISmd,
    _SIIo,
    _DPer,
    _LLT,
    _IAm,
    _SII,
    _SIRo,
    _FTE,
    _IIm,
    _IL,
    _St,
    _OI,
    _CDr,
    _Pu,
    _PCro,
    _Arc,
    _ITm,
    _KI,
    _RIa,
    _Pl,
  ],
  [
    [
      0,
      {
        [_eQN]: `PlatformDetails`,
        [_xN]: _pDl,
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
      () => BlockDeviceMappingList,
      {
        [_eQN]: `BlockDeviceMapping`,
        [_xN]: _bDM,
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
        [_eQN]: `EnaSupport`,
        [_xN]: _eSna,
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
        [_eQN]: `ImageOwnerAlias`,
        [_xN]: _iOA,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
    [
      0,
      {
        [_eQN]: `RootDeviceName`,
        [_xN]: _rDN,
      },
    ],
    [
      0,
      {
        [_eQN]: `RootDeviceType`,
        [_xN]: _rDT,
      },
    ],
    [
      0,
      {
        [_eQN]: `SriovNetSupport`,
        [_xN]: _sNSr,
      },
    ],
    [
      () => StateReason,
      {
        [_eQN]: `StateReason`,
        [_xN]: _sRt,
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
        [_eQN]: `VirtualizationType`,
        [_xN]: _vTi,
      },
    ],
    [
      0,
      {
        [_eQN]: `BootMode`,
        [_xN]: _bM,
      },
    ],
    [
      0,
      {
        [_eQN]: `TpmSupport`,
        [_xN]: _tSp,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeprecationTime`,
        [_xN]: _dTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImdsSupport`,
        [_xN]: _iSmd,
      },
    ],
    [
      0,
      {
        [_eQN]: `SourceInstanceId`,
        [_xN]: _sII,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeregistrationProtection`,
        [_xN]: _dPe,
      },
    ],
    [
      0,
      {
        [_eQN]: `LastLaunchedTime`,
        [_xN]: _lLT,
      },
    ],
    [
      2,
      {
        [_eQN]: `ImageAllowed`,
        [_xN]: _iAm,
      },
    ],
    [
      0,
      {
        [_eQN]: `SourceImageId`,
        [_xN]: _sIIo,
      },
    ],
    [
      0,
      {
        [_eQN]: `SourceImageRegion`,
        [_xN]: _sIR,
      },
    ],
    [
      2,
      {
        [_eQN]: `FreeTierEligible`,
        [_xN]: _fTE,
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
        [_eQN]: `ImageLocation`,
        [_xN]: _iL,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImageState`,
        [_xN]: _iSma,
      },
    ],
    [
      0,
      {
        [_eQN]: `ImageOwnerId`,
        [_xN]: _iOI,
      },
    ],
    [
      0,
      {
        [_eQN]: `CreationDate`,
        [_xN]: _cDr,
      },
    ],
    [
      2,
      {
        [_eQN]: `IsPublic`,
        [_xN]: _iPs,
      },
    ],
    [
      () => ProductCodeList,
      {
        [_eQN]: `ProductCodes`,
        [_xN]: _pC,
      },
    ],
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
        [_eQN]: `ImageType`,
        [_xN]: _iTm,
      },
    ],
    [
      0,
      {
        [_eQN]: `KernelId`,
        [_xN]: _kI,
      },
    ],
    [
      0,
      {
        [_eQN]: `RamdiskId`,
        [_xN]: _rIa,
      },
    ],
    [
      0,
      {
        [_eQN]: `Platform`,
        [_xN]: _pl,
      },
    ],
  ]
);
export var ImageAttribute = struct(
  n0,
  _IAma,
  0,
  [_De, _KI, _RIa, _SNS, _BM, _TSp, _UD, _LLT, _ISmd, _DPer, _IIm, _LPa, _PCro, _BDMl],
  [
    [
      () => AttributeValue,
      {
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `Kernel`,
        [_xN]: _ke,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `Ramdisk`,
        [_xN]: _ra,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `SriovNetSupport`,
        [_xN]: _sNSr,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `BootMode`,
        [_xN]: _bM,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `TpmSupport`,
        [_xN]: _tSp,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `UefiData`,
        [_xN]: _uD,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `LastLaunchedTime`,
        [_xN]: _lLT,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `ImdsSupport`,
        [_xN]: _iSmd,
      },
    ],
    [
      () => AttributeValue,
      {
        [_eQN]: `DeregistrationProtection`,
        [_xN]: _dPe,
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
      () => LaunchPermissionList,
      {
        [_eQN]: `LaunchPermission`,
        [_xN]: _lPa,
      },
    ],
    [
      () => ProductCodeList,
      {
        [_eQN]: `ProductCodes`,
        [_xN]: _pC,
      },
    ],
    [
      () => BlockDeviceMappingList,
      {
        [_eQN]: `BlockDeviceMapping`,
        [_xN]: _bDM,
      },
    ],
  ]
);
export var LoadPermission = struct(
  n0,
  _LPo,
  0,
  [_UI, _Gr],
  [
    [
      0,
      {
        [_eQN]: `UserId`,
        [_xN]: _uI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Group`,
        [_xN]: _g,
      },
    ],
  ]
);
export var LoadPermissionModifications = struct(
  n0,
  _LPMo,
  0,
  [_Ad, _Rem],
  [
    [() => LoadPermissionListRequest, 0],
    [() => LoadPermissionListRequest, 0],
  ]
);
export var LoadPermissionRequest = struct(n0, _LPR, 0, [_Gr, _UI], [0, 0]);
export var ModifyFpgaImageAttributeRequest = struct(
  n0,
  _MFIAR,
  0,
  [_DR, _FII, _At, _OTp, _UIs, _UG, _PCro, _LPo, _De, _N],
  [
    2,
    0,
    0,
    0,
    [
      () => UserIdStringList,
      {
        [_xN]: _UI,
      },
    ],
    [
      () => UserGroupStringList,
      {
        [_xN]: _UGs,
      },
    ],
    [
      () => ProductCodeStringList,
      {
        [_xN]: _PCr,
      },
    ],
    [() => LoadPermissionModifications, 0],
    0,
    0,
  ]
);
export var ModifyFpgaImageAttributeResult = struct(
  n0,
  _MFIARo,
  0,
  [_FIA],
  [
    [
      () => FpgaImageAttribute,
      {
        [_eQN]: `FpgaImageAttribute`,
        [_xN]: _fIA,
      },
    ],
  ]
);
export var PciId = struct(n0, _PIc, 0, [_DIev, _VIe, _SIub, _SVI], [0, 0, 0, 0]);
export var ProductCode = struct(
  n0,
  _PCr,
  0,
  [_PCIr, _PCT],
  [
    [
      0,
      {
        [_eQN]: `ProductCode`,
        [_xN]: _pCr,
      },
    ],
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
  ]
);
export var ExecutableByStringList = list(n0, _EBSL, 0, [
  0,
  {
    [_xN]: _EBx,
  },
]);
export var FpgaImageIdList = list(n0, _FIIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var FpgaImageList = list(n0, _FIL, 0, [
  () => FpgaImage,
  {
    [_xN]: _it,
  },
]);
export var ImageList = list(n0, _ILm, 0, [
  () => Image,
  {
    [_xN]: _it,
  },
]);
export var InstanceTypesList = list(n0, _ITL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var LoadPermissionList = list(n0, _LPLo, 0, [
  () => LoadPermission,
  {
    [_xN]: _it,
  },
]);
export var LoadPermissionListRequest = list(n0, _LPLR, 0, [
  () => LoadPermissionRequest,
  {
    [_xN]: _it,
  },
]);
export var ProductCodeList = list(n0, _PCLr, 0, [
  () => ProductCode,
  {
    [_xN]: _it,
  },
]);
export var DescribeFpgaImageAttribute = op(
  n0,
  _DFIA,
  0,
  () => DescribeFpgaImageAttributeRequest,
  () => DescribeFpgaImageAttributeResult
);
export var DescribeFpgaImages = op(
  n0,
  _DFIesc,
  0,
  () => DescribeFpgaImagesRequest,
  () => DescribeFpgaImagesResult
);
export var DescribeImageAttribute = op(
  n0,
  _DIA,
  0,
  () => DescribeImageAttributeRequest,
  () => ImageAttribute
);
export var DescribeImages = op(
  n0,
  _DIes,
  0,
  () => DescribeImagesRequest,
  () => DescribeImagesResult
);
export var DescribeSnapshotAttribute = op(
  n0,
  _DSAe,
  0,
  () => DescribeSnapshotAttributeRequest,
  () => DescribeSnapshotAttributeResult
);
export var DescribeVolumeAttribute = op(
  n0,
  _DVA,
  0,
  () => DescribeVolumeAttributeRequest,
  () => DescribeVolumeAttributeResult
);
export var ModifyFpgaImageAttribute = op(
  n0,
  _MFIA,
  0,
  () => ModifyFpgaImageAttributeRequest,
  () => ModifyFpgaImageAttributeResult
);
