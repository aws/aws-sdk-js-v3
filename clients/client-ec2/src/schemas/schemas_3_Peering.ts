// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADRFRV,
  _aDRFRV,
  _AEFLCLTRV,
  _aEFLCLTRV,
  _AEFLVTRCL,
  _aEFLVTRCL,
  _AVI,
  _aVI,
  _AVPC,
  _AVPCR,
  _AVPCRc,
  _CB,
  _cB,
  _CBSid,
  _cBSid,
  _Co,
  _co,
  _CVPC,
  _CVPCR,
  _CVPCRr,
  _DR,
  _dR,
  _eQN,
  _ET,
  _eT,
  _ICB,
  _iCB,
  _ICBSp,
  _iCBSp,
  _it,
  _Me,
  _me,
  _OI,
  _oI,
  _POe,
  _pOe,
  _POI,
  _pOI,
  _PRee,
  _PVI,
  _pVI,
  _reg,
  _Regi,
  _RVIe,
  _rVIe,
  _Sta,
  _sta,
  _T,
  _TS,
  _tS,
  _TSa,
  _VI,
  _vI,
  _VPC,
  _vPC,
  _VPCI,
  _vPCI,
  _VPCOD,
  _VPCSR,
  _VPCVI,
  _xN,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AcceptVpcPeeringConnectionRequest = struct(
  n0,
  _AVPCR,
  0,
  [_DR, _VPCI],
  [
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
        [_eQN]: `VpcPeeringConnectionId`,
        [_xN]: _vPCI,
      },
    ],
  ]
);
export var AcceptVpcPeeringConnectionResult = struct(
  n0,
  _AVPCRc,
  0,
  [_VPC],
  [
    [
      () => VpcPeeringConnection,
      {
        [_eQN]: `VpcPeeringConnection`,
        [_xN]: _vPC,
      },
    ],
  ]
);
export var CidrBlock = struct(
  n0,
  _CB,
  0,
  [_CB],
  [
    [
      0,
      {
        [_eQN]: `CidrBlock`,
        [_xN]: _cB,
      },
    ],
  ]
);
export var CreateVpcPeeringConnectionRequest = struct(
  n0,
  _CVPCR,
  0,
  [_PRee, _TS, _DR, _VI, _PVI, _POI],
  [
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
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PeerVpcId`,
        [_xN]: _pVI,
      },
    ],
    [
      0,
      {
        [_eQN]: `PeerOwnerId`,
        [_xN]: _pOI,
      },
    ],
  ]
);
export var CreateVpcPeeringConnectionResult = struct(
  n0,
  _CVPCRr,
  0,
  [_VPC],
  [
    [
      () => VpcPeeringConnection,
      {
        [_eQN]: `VpcPeeringConnection`,
        [_xN]: _vPC,
      },
    ],
  ]
);
export var Ipv6CidrBlock = struct(
  n0,
  _ICB,
  0,
  [_ICB],
  [
    [
      0,
      {
        [_eQN]: `Ipv6CidrBlock`,
        [_xN]: _iCB,
      },
    ],
  ]
);
export var VpcPeeringConnection = struct(
  n0,
  _VPC,
  0,
  [_AVI, _ET, _RVIe, _Sta, _T, _VPCI],
  [
    [
      () => VpcPeeringConnectionVpcInfo,
      {
        [_eQN]: `AccepterVpcInfo`,
        [_xN]: _aVI,
      },
    ],
    [
      4,
      {
        [_eQN]: `ExpirationTime`,
        [_xN]: _eT,
      },
    ],
    [
      () => VpcPeeringConnectionVpcInfo,
      {
        [_eQN]: `RequesterVpcInfo`,
        [_xN]: _rVIe,
      },
    ],
    [
      () => VpcPeeringConnectionStateReason,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
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
        [_eQN]: `VpcPeeringConnectionId`,
        [_xN]: _vPCI,
      },
    ],
  ]
);
export var VpcPeeringConnectionOptionsDescription = struct(
  n0,
  _VPCOD,
  0,
  [_ADRFRV, _AEFLCLTRV, _AEFLVTRCL],
  [
    [
      2,
      {
        [_eQN]: `AllowDnsResolutionFromRemoteVpc`,
        [_xN]: _aDRFRV,
      },
    ],
    [
      2,
      {
        [_eQN]: `AllowEgressFromLocalClassicLinkToRemoteVpc`,
        [_xN]: _aEFLCLTRV,
      },
    ],
    [
      2,
      {
        [_eQN]: `AllowEgressFromLocalVpcToRemoteClassicLink`,
        [_xN]: _aEFLVTRCL,
      },
    ],
  ]
);
export var VpcPeeringConnectionStateReason = struct(
  n0,
  _VPCSR,
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
export var VpcPeeringConnectionVpcInfo = struct(
  n0,
  _VPCVI,
  0,
  [_CB, _ICBSp, _CBSid, _OI, _POe, _VI, _Regi],
  [
    [
      0,
      {
        [_eQN]: `CidrBlock`,
        [_xN]: _cB,
      },
    ],
    [
      () => Ipv6CidrBlockSet,
      {
        [_eQN]: `Ipv6CidrBlockSet`,
        [_xN]: _iCBSp,
      },
    ],
    [
      () => CidrBlockSet,
      {
        [_eQN]: `CidrBlockSet`,
        [_xN]: _cBSid,
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
      () => VpcPeeringConnectionOptionsDescription,
      {
        [_eQN]: `PeeringOptions`,
        [_xN]: _pOe,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Region`,
        [_xN]: _reg,
      },
    ],
  ]
);
export var CidrBlockSet = list(n0, _CBSid, 0, [
  () => CidrBlock,
  {
    [_xN]: _it,
  },
]);
export var Ipv6CidrBlockSet = list(n0, _ICBSp, 0, [
  () => Ipv6CidrBlock,
  {
    [_xN]: _it,
  },
]);
export var AcceptVpcPeeringConnection = op(
  n0,
  _AVPC,
  0,
  () => AcceptVpcPeeringConnectionRequest,
  () => AcceptVpcPeeringConnectionResult
);
export var CreateVpcPeeringConnection = op(
  n0,
  _CVPC,
  0,
  () => CreateVpcPeeringConnectionRequest,
  () => CreateVpcPeeringConnectionResult
);
