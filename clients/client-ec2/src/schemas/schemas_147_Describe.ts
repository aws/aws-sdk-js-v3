// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Arc,
  _arc,
  _AZ,
  _aZ,
  _AZI,
  _BDM,
  _bDM,
  _BDML,
  _BDMl,
  _BDMRL,
  _BM,
  _BPi,
  _BPil,
  _BPL,
  _CIr,
  _CIRr,
  _CIRre,
  _De,
  _de,
  _DN,
  _dN,
  _DOT,
  _dOT,
  _DR,
  _dR,
  _Eb,
  _eb,
  _EBD,
  _Enc,
  _enc,
  _eQN,
  _ESna,
  _eSna,
  _II,
  _iI,
  _IIm,
  _iIma,
  _IL,
  _Io,
  _io,
  _ISmd,
  _it,
  _KI,
  _kI,
  _KKI,
  _kKI,
  _N,
  _n,
  _ND,
  _nD,
  _NR,
  _nR,
  _OA,
  _oA,
  _RDN,
  _rDN,
  _RIa,
  _rIa,
  _RIeg,
  _RIRe,
  _RIReg,
  _SIn,
  _sIn,
  _SL,
  _SNS,
  _sNSr,
  _Th,
  _th,
  _TS,
  _TSa,
  _TSp,
  _UD,
  _VIR,
  _VN,
  _vN,
  _VSo,
  _vSo,
  _VT,
  _vT,
  _vTi,
  _VTir,
  _xN,
  n0,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BlockDeviceMapping = struct(
  n0,
  _BDM,
  0,
  [_Eb, _ND, _DN, _VN],
  [
    [
      () => EbsBlockDevice,
      {
        [_eQN]: `Ebs`,
        [_xN]: _eb,
      },
    ],
    [
      0,
      {
        [_eQN]: `NoDevice`,
        [_xN]: _nD,
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
      0,
      {
        [_eQN]: `VirtualName`,
        [_xN]: _vN,
      },
    ],
  ]
);
export var CreateImageRequest = struct(
  n0,
  _CIRr,
  0,
  [_TS, _SL, _DR, _II, _N, _De, _NR, _BDMl],
  [
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
      2,
      {
        [_eQN]: `NoReboot`,
        [_xN]: _nR,
      },
    ],
    [
      () => BlockDeviceMappingRequestList,
      {
        [_eQN]: `BlockDeviceMapping`,
        [_xN]: _bDM,
      },
    ],
  ]
);
export var CreateImageResult = struct(
  n0,
  _CIRre,
  0,
  [_IIm],
  [
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
  ]
);
export var EbsBlockDevice = struct(
  n0,
  _EBD,
  0,
  [_DOT, _Io, _SIn, _VSo, _VT, _KKI, _Th, _OA, _AZ, _Enc, _VIR, _AZI],
  [
    [
      2,
      {
        [_eQN]: `DeleteOnTermination`,
        [_xN]: _dOT,
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
      0,
      {
        [_eQN]: `SnapshotId`,
        [_xN]: _sIn,
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
        [_eQN]: `VolumeType`,
        [_xN]: _vT,
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
      1,
      {
        [_eQN]: `Throughput`,
        [_xN]: _th,
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
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      2,
      {
        [_eQN]: `Encrypted`,
        [_xN]: _enc,
      },
    ],
    1,
    0,
  ]
);
export var RegisterImageRequest = struct(
  n0,
  _RIRe,
  0,
  [_IL, _BPi, _BM, _TSp, _UD, _ISmd, _TS, _DR, _N, _De, _Arc, _KI, _RIa, _RDN, _BDMl, _VTir, _SNS, _ESna],
  [
    0,
    [
      () => BillingProductList,
      {
        [_xN]: _BPil,
      },
    ],
    0,
    0,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
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
        [_eQN]: `Architecture`,
        [_xN]: _arc,
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
        [_eQN]: `RootDeviceName`,
        [_xN]: _rDN,
      },
    ],
    [
      () => BlockDeviceMappingRequestList,
      {
        [_xN]: _BDM,
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
        [_eQN]: `SriovNetSupport`,
        [_xN]: _sNSr,
      },
    ],
    [
      2,
      {
        [_eQN]: `EnaSupport`,
        [_xN]: _eSna,
      },
    ],
  ]
);
export var RegisterImageResult = struct(
  n0,
  _RIReg,
  0,
  [_IIm],
  [
    [
      0,
      {
        [_eQN]: `ImageId`,
        [_xN]: _iIma,
      },
    ],
  ]
);
export var BillingProductList = list(n0, _BPL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var BlockDeviceMappingList = list(n0, _BDML, 0, [
  () => BlockDeviceMapping,
  {
    [_xN]: _it,
  },
]);
export var BlockDeviceMappingRequestList = list(n0, _BDMRL, 0, [
  () => BlockDeviceMapping,
  {
    [_xN]: _BDM,
  },
]);
export var CreateImage = op(
  n0,
  _CIr,
  0,
  () => CreateImageRequest,
  () => CreateImageResult
);
export var RegisterImage = op(
  n0,
  _RIeg,
  0,
  () => RegisterImageRequest,
  () => RegisterImageResult
);
