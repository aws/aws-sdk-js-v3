// smithy-typescript generated code
import { list, struct } from "@smithy/core/schema";

import {
  _ADp,
  _aDp,
  _ATt,
  _aTtta,
  _Ci,
  _ci,
  _Co,
  _co,
  _COi,
  _cOi,
  _CTre,
  _cTre,
  _DCA,
  _dCA,
  _De,
  _de,
  _DT,
  _dT,
  _DVD,
  _dVD,
  _EDnd,
  _eDnd,
  _eQN,
  _ETn,
  _eTnd,
  _FP,
  _fP,
  _it,
  _lBA,
  _LBAo,
  _LBO,
  _lBO,
  _LUTa,
  _lUTa,
  _Me,
  _me,
  _NII,
  _nII,
  _NIO,
  _nIO,
  _Po,
  _po,
  _Pr,
  _pr,
  _PRor,
  _pRS,
  _RDCA,
  _rDCA,
  _RDIA,
  _rDIA,
  _RDPA,
  _rDPA,
  _RE,
  _rEd,
  _ROd,
  _rOd,
  _SGIe,
  _SGIL,
  _sGIS,
  _SI,
  _sISu,
  _SS,
  _sSs,
  _Sta,
  _sta,
  _T,
  _TP,
  _tP,
  _tS,
  _VAE,
  _VAECO,
  _VAEEO,
  _VAEI,
  _vAEI,
  _VAELBO,
  _VAEPR,
  _VAEPRL,
  _VAERO,
  _VAES,
  _VAESIL,
  _VAGI,
  _vAGI,
  _VAII,
  _vAII,
  _xN,
  n0,
  TagList,
  VerifiedAccessSseSpecificationResponse,
} from "./schemas_0";

/* eslint no-var: 0 */

export var VerifiedAccessEndpoint = struct(
  n0,
  _VAE,
  0,
  [
    _VAII,
    _VAGI,
    _VAEI,
    _ADp,
    _ETn,
    _ATt,
    _DCA,
    _EDnd,
    _DVD,
    _SGIe,
    _LBO,
    _NIO,
    _Sta,
    _De,
    _CTre,
    _LUTa,
    _DT,
    _T,
    _SS,
    _ROd,
    _COi,
  ],
  [
    [
      0,
      {
        [_eQN]: `VerifiedAccessInstanceId`,
        [_xN]: _vAII,
      },
    ],
    [
      0,
      {
        [_eQN]: `VerifiedAccessGroupId`,
        [_xN]: _vAGI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VerifiedAccessEndpointId`,
        [_xN]: _vAEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ApplicationDomain`,
        [_xN]: _aDp,
      },
    ],
    [
      0,
      {
        [_eQN]: `EndpointType`,
        [_xN]: _eTnd,
      },
    ],
    [
      0,
      {
        [_eQN]: `AttachmentType`,
        [_xN]: _aTtta,
      },
    ],
    [
      0,
      {
        [_eQN]: `DomainCertificateArn`,
        [_xN]: _dCA,
      },
    ],
    [
      0,
      {
        [_eQN]: `EndpointDomain`,
        [_xN]: _eDnd,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeviceValidationDomain`,
        [_xN]: _dVD,
      },
    ],
    [
      () => SecurityGroupIdList,
      {
        [_eQN]: `SecurityGroupIdSet`,
        [_xN]: _sGIS,
      },
    ],
    [
      () => VerifiedAccessEndpointLoadBalancerOptions,
      {
        [_eQN]: `LoadBalancerOptions`,
        [_xN]: _lBO,
      },
    ],
    [
      () => VerifiedAccessEndpointEniOptions,
      {
        [_eQN]: `NetworkInterfaceOptions`,
        [_xN]: _nIO,
      },
    ],
    [
      () => VerifiedAccessEndpointStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
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
        [_eQN]: `CreationTime`,
        [_xN]: _cTre,
      },
    ],
    [
      0,
      {
        [_eQN]: `LastUpdatedTime`,
        [_xN]: _lUTa,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeletionTime`,
        [_xN]: _dT,
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
      () => VerifiedAccessSseSpecificationResponse,
      {
        [_eQN]: `SseSpecification`,
        [_xN]: _sSs,
      },
    ],
    [
      () => VerifiedAccessEndpointRdsOptions,
      {
        [_eQN]: `RdsOptions`,
        [_xN]: _rOd,
      },
    ],
    [
      () => VerifiedAccessEndpointCidrOptions,
      {
        [_eQN]: `CidrOptions`,
        [_xN]: _cOi,
      },
    ],
  ]
);
export var VerifiedAccessEndpointCidrOptions = struct(
  n0,
  _VAECO,
  0,
  [_Ci, _PRor, _Pr, _SI],
  [
    [
      0,
      {
        [_eQN]: `Cidr`,
        [_xN]: _ci,
      },
    ],
    [
      () => VerifiedAccessEndpointPortRangeList,
      {
        [_eQN]: `PortRangeSet`,
        [_xN]: _pRS,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      () => VerifiedAccessEndpointSubnetIdList,
      {
        [_eQN]: `SubnetIdSet`,
        [_xN]: _sISu,
      },
    ],
  ]
);
export var VerifiedAccessEndpointEniOptions = struct(
  n0,
  _VAEEO,
  0,
  [_NII, _Pr, _Po, _PRor],
  [
    [
      0,
      {
        [_eQN]: `NetworkInterfaceId`,
        [_xN]: _nII,
      },
    ],
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      1,
      {
        [_eQN]: `Port`,
        [_xN]: _po,
      },
    ],
    [
      () => VerifiedAccessEndpointPortRangeList,
      {
        [_eQN]: `PortRangeSet`,
        [_xN]: _pRS,
      },
    ],
  ]
);
export var VerifiedAccessEndpointLoadBalancerOptions = struct(
  n0,
  _VAELBO,
  0,
  [_Pr, _Po, _LBAo, _SI, _PRor],
  [
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      1,
      {
        [_eQN]: `Port`,
        [_xN]: _po,
      },
    ],
    [
      0,
      {
        [_eQN]: `LoadBalancerArn`,
        [_xN]: _lBA,
      },
    ],
    [
      () => VerifiedAccessEndpointSubnetIdList,
      {
        [_eQN]: `SubnetIdSet`,
        [_xN]: _sISu,
      },
    ],
    [
      () => VerifiedAccessEndpointPortRangeList,
      {
        [_eQN]: `PortRangeSet`,
        [_xN]: _pRS,
      },
    ],
  ]
);
export var VerifiedAccessEndpointPortRange = struct(
  n0,
  _VAEPR,
  0,
  [_FP, _TP],
  [
    [
      1,
      {
        [_eQN]: `FromPort`,
        [_xN]: _fP,
      },
    ],
    [
      1,
      {
        [_eQN]: `ToPort`,
        [_xN]: _tP,
      },
    ],
  ]
);
export var VerifiedAccessEndpointRdsOptions = struct(
  n0,
  _VAERO,
  0,
  [_Pr, _Po, _RDIA, _RDCA, _RDPA, _RE, _SI],
  [
    [
      0,
      {
        [_eQN]: `Protocol`,
        [_xN]: _pr,
      },
    ],
    [
      1,
      {
        [_eQN]: `Port`,
        [_xN]: _po,
      },
    ],
    [
      0,
      {
        [_eQN]: `RdsDbInstanceArn`,
        [_xN]: _rDIA,
      },
    ],
    [
      0,
      {
        [_eQN]: `RdsDbClusterArn`,
        [_xN]: _rDCA,
      },
    ],
    [
      0,
      {
        [_eQN]: `RdsDbProxyArn`,
        [_xN]: _rDPA,
      },
    ],
    [
      0,
      {
        [_eQN]: `RdsEndpoint`,
        [_xN]: _rEd,
      },
    ],
    [
      () => VerifiedAccessEndpointSubnetIdList,
      {
        [_eQN]: `SubnetIdSet`,
        [_xN]: _sISu,
      },
    ],
  ]
);
export var VerifiedAccessEndpointStatus = struct(
  n0,
  _VAES,
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
export var SecurityGroupIdList = list(n0, _SGIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessEndpointPortRangeList = list(n0, _VAEPRL, 0, [
  () => VerifiedAccessEndpointPortRange,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessEndpointSubnetIdList = list(n0, _VAESIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
