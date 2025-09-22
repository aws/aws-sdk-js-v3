// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIs,
  _aIs,
  _APICB,
  _aPICB,
  _ASCB,
  _ASCBR,
  _ASCBRs,
  _AVCB,
  _AVCBR,
  _AVCBRs,
  _BPAS,
  _bPAS,
  _CB,
  _cB,
  _CBA,
  _cBA,
  _CBAS,
  _cBAS,
  _CBSi,
  _cBSi,
  _CDV,
  _CDVR,
  _CDVRr,
  _CVre,
  _CVRre,
  _CVRrea,
  _DOI,
  _dOI,
  _DR,
  _dR,
  _DSCB,
  _DSCBR,
  _DSCBRi,
  _DVCB,
  _DVCBR,
  _DVCBRi,
  _DVesc,
  _DVRescr,
  _DVRescri,
  _ECn,
  _eCn,
  _EOIG,
  _eOIG,
  _eQN,
  _Fi,
  _Fil,
  _IAA,
  _iAA,
  _ICB,
  _iCB,
  _ICBA,
  _iCBA,
  _ICBAS,
  _iCBAS,
  _ICBNBG,
  _ICBS,
  _iCBS,
  _IDs,
  _iDs,
  _IG,
  _iG,
  _IGBM,
  _iGBM,
  _IIPI,
  _IIPIp,
  _INL,
  _INLp,
  _IPpvo,
  _iPpvo,
  _ISpo,
  _iSpo,
  _it,
  _iTn,
  _ITns,
  _Mo,
  _mod,
  _MR,
  _NBG,
  _nBG,
  _NG,
  _nG,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _REes,
  _rEes,
  _SCBS,
  _SICBA,
  _SIu,
  _sIu,
  _SMt,
  _sMt,
  _SMta,
  _sMta,
  _St,
  _st,
  _T,
  _TS,
  _tS,
  _TSa,
  _VCBA,
  _VCBAS,
  _VCBS,
  _VECE,
  _VECEp,
  _VECI,
  _vECI,
  _VECp,
  _VI,
  _vI,
  _VICBA,
  _VICBAS,
  _VIp,
  _VISLp,
  _VLp,
  _Vp,
  _vp,
  _Vpc,
  _VPG,
  _vPG,
  _VPpc,
  _vPpc,
  _vSp,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AssociateSubnetCidrBlockRequest = struct(
  n0,
  _ASCBR,
  0,
  [_IIPI, _INL, _SIu, _ICB],
  [
    0,
    1,
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6CidrBlock`,
        [_xN]: _iCB,
      },
    ],
  ]
);
export var AssociateSubnetCidrBlockResult = struct(
  n0,
  _ASCBRs,
  0,
  [_ICBA, _SIu],
  [
    [
      () => SubnetIpv6CidrBlockAssociation,
      {
        [_eQN]: `Ipv6CidrBlockAssociation`,
        [_xN]: _iCBA,
      },
    ],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
  ]
);
export var AssociateVpcCidrBlockRequest = struct(
  n0,
  _AVCBR,
  0,
  [_CB, _ICBNBG, _IPpvo, _ICB, _IIPIp, _INLp, _IIPI, _INL, _VI, _APICB],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
    [
      2,
      {
        [_eQN]: `AmazonProvidedIpv6CidrBlock`,
        [_xN]: _aPICB,
      },
    ],
  ]
);
export var AssociateVpcCidrBlockResult = struct(
  n0,
  _AVCBRs,
  0,
  [_ICBA, _CBA, _VI],
  [
    [
      () => VpcIpv6CidrBlockAssociation,
      {
        [_eQN]: `Ipv6CidrBlockAssociation`,
        [_xN]: _iCBA,
      },
    ],
    [
      () => VpcCidrBlockAssociation,
      {
        [_eQN]: `CidrBlockAssociation`,
        [_xN]: _cBA,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
  ]
);
export var BlockPublicAccessStates = struct(
  n0,
  _BPAS,
  0,
  [_IGBM],
  [
    [
      0,
      {
        [_eQN]: `InternetGatewayBlockMode`,
        [_xN]: _iGBM,
      },
    ],
  ]
);
export var CreateDefaultVpcRequest = struct(n0, _CDVR, 0, [_DR], [2]);
export var CreateDefaultVpcResult = struct(
  n0,
  _CDVRr,
  0,
  [_Vp],
  [
    [
      () => Vpc,
      {
        [_eQN]: `Vpc`,
        [_xN]: _vp,
      },
    ],
  ]
);
export var CreateVpcRequest = struct(
  n0,
  _CVRre,
  0,
  [_CB, _IPpvo, _ICB, _IIPIp, _INLp, _IIPI, _INL, _ICBNBG, _TS, _DR, _ITns, _APICB],
  [
    0,
    0,
    0,
    0,
    1,
    0,
    1,
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
        [_eQN]: `InstanceTenancy`,
        [_xN]: _iTn,
      },
    ],
    [
      2,
      {
        [_eQN]: `AmazonProvidedIpv6CidrBlock`,
        [_xN]: _aPICB,
      },
    ],
  ]
);
export var CreateVpcResult = struct(
  n0,
  _CVRrea,
  0,
  [_Vp],
  [
    [
      () => Vpc,
      {
        [_eQN]: `Vpc`,
        [_xN]: _vp,
      },
    ],
  ]
);
export var DescribeVpcsRequest = struct(
  n0,
  _DVRescr,
  0,
  [_Fi, _VIp, _NTe, _MR, _DR],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => VpcIdStringList,
      {
        [_xN]: _VI,
      },
    ],
    0,
    1,
    [
      2,
      {
        [_eQN]: `DryRun`,
        [_xN]: _dR,
      },
    ],
  ]
);
export var DescribeVpcsResult = struct(
  n0,
  _DVRescri,
  0,
  [_NTe, _Vpc],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => VpcList,
      {
        [_eQN]: `VpcSet`,
        [_xN]: _vSp,
      },
    ],
  ]
);
export var DisassociateSubnetCidrBlockRequest = struct(
  n0,
  _DSCBR,
  0,
  [_AIs],
  [
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
  ]
);
export var DisassociateSubnetCidrBlockResult = struct(
  n0,
  _DSCBRi,
  0,
  [_ICBA, _SIu],
  [
    [
      () => SubnetIpv6CidrBlockAssociation,
      {
        [_eQN]: `Ipv6CidrBlockAssociation`,
        [_xN]: _iCBA,
      },
    ],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
  ]
);
export var DisassociateVpcCidrBlockRequest = struct(
  n0,
  _DVCBR,
  0,
  [_AIs],
  [
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
  ]
);
export var DisassociateVpcCidrBlockResult = struct(
  n0,
  _DVCBRi,
  0,
  [_ICBA, _CBA, _VI],
  [
    [
      () => VpcIpv6CidrBlockAssociation,
      {
        [_eQN]: `Ipv6CidrBlockAssociation`,
        [_xN]: _iCBA,
      },
    ],
    [
      () => VpcCidrBlockAssociation,
      {
        [_eQN]: `CidrBlockAssociation`,
        [_xN]: _cBA,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcId`,
        [_xN]: _vI,
      },
    ],
  ]
);
export var SubnetCidrBlockState = struct(
  n0,
  _SCBS,
  0,
  [_St, _SMt],
  [
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
  ]
);
export var SubnetIpv6CidrBlockAssociation = struct(
  n0,
  _SICBA,
  0,
  [_AIs, _ICB, _ICBS, _IAA, _ISpo],
  [
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6CidrBlock`,
        [_xN]: _iCB,
      },
    ],
    [
      () => SubnetCidrBlockState,
      {
        [_eQN]: `Ipv6CidrBlockState`,
        [_xN]: _iCBS,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6AddressAttribute`,
        [_xN]: _iAA,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpSource`,
        [_xN]: _iSpo,
      },
    ],
  ]
);
export var Vpc = struct(
  n0,
  _Vp,
  0,
  [_OI, _ITns, _ICBAS, _CBAS, _IDs, _ECn, _T, _BPAS, _VI, _St, _CB, _DOI],
  [
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
        [_eQN]: `InstanceTenancy`,
        [_xN]: _iTn,
      },
    ],
    [
      () => VpcIpv6CidrBlockAssociationSet,
      {
        [_eQN]: `Ipv6CidrBlockAssociationSet`,
        [_xN]: _iCBAS,
      },
    ],
    [
      () => VpcCidrBlockAssociationSet,
      {
        [_eQN]: `CidrBlockAssociationSet`,
        [_xN]: _cBAS,
      },
    ],
    [
      2,
      {
        [_eQN]: `IsDefault`,
        [_xN]: _iDs,
      },
    ],
    [
      () => VpcEncryptionControl,
      {
        [_eQN]: `EncryptionControl`,
        [_xN]: _eCn,
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
      () => BlockPublicAccessStates,
      {
        [_eQN]: `BlockPublicAccessStates`,
        [_xN]: _bPAS,
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
        [_eQN]: `State`,
        [_xN]: _st,
      },
    ],
    [
      0,
      {
        [_eQN]: `CidrBlock`,
        [_xN]: _cB,
      },
    ],
    [
      0,
      {
        [_eQN]: `DhcpOptionsId`,
        [_xN]: _dOI,
      },
    ],
  ]
);
export var VpcCidrBlockAssociation = struct(
  n0,
  _VCBA,
  0,
  [_AIs, _CB, _CBSi],
  [
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
    [
      0,
      {
        [_eQN]: `CidrBlock`,
        [_xN]: _cB,
      },
    ],
    [
      () => VpcCidrBlockState,
      {
        [_eQN]: `CidrBlockState`,
        [_xN]: _cBSi,
      },
    ],
  ]
);
export var VpcCidrBlockState = struct(
  n0,
  _VCBS,
  0,
  [_St, _SMt],
  [
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
  ]
);
export var VpcEncryptionControl = struct(
  n0,
  _VECp,
  0,
  [_VI, _VECI, _Mo, _St, _SMta, _REes, _T],
  [
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
        [_eQN]: `VpcEncryptionControlId`,
        [_xN]: _vECI,
      },
    ],
    [
      0,
      {
        [_eQN]: `Mode`,
        [_xN]: _mod,
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
        [_eQN]: `StateMessage`,
        [_xN]: _sMta,
      },
    ],
    [
      () => VpcEncryptionControlExclusions,
      {
        [_eQN]: `ResourceExclusions`,
        [_xN]: _rEes,
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
export var VpcEncryptionControlExclusion = struct(
  n0,
  _VECE,
  0,
  [_St, _SMta],
  [
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
        [_eQN]: `StateMessage`,
        [_xN]: _sMta,
      },
    ],
  ]
);
export var VpcEncryptionControlExclusions = struct(
  n0,
  _VECEp,
  0,
  [_IG, _EOIG, _NG, _VPG, _VPpc],
  [
    [
      () => VpcEncryptionControlExclusion,
      {
        [_eQN]: `InternetGateway`,
        [_xN]: _iG,
      },
    ],
    [
      () => VpcEncryptionControlExclusion,
      {
        [_eQN]: `EgressOnlyInternetGateway`,
        [_xN]: _eOIG,
      },
    ],
    [
      () => VpcEncryptionControlExclusion,
      {
        [_eQN]: `NatGateway`,
        [_xN]: _nG,
      },
    ],
    [
      () => VpcEncryptionControlExclusion,
      {
        [_eQN]: `VirtualPrivateGateway`,
        [_xN]: _vPG,
      },
    ],
    [
      () => VpcEncryptionControlExclusion,
      {
        [_eQN]: `VpcPeering`,
        [_xN]: _vPpc,
      },
    ],
  ]
);
export var VpcIpv6CidrBlockAssociation = struct(
  n0,
  _VICBA,
  0,
  [_AIs, _ICB, _ICBS, _NBG, _IPpvo, _IAA, _ISpo],
  [
    [
      0,
      {
        [_eQN]: `AssociationId`,
        [_xN]: _aIs,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6CidrBlock`,
        [_xN]: _iCB,
      },
    ],
    [
      () => VpcCidrBlockState,
      {
        [_eQN]: `Ipv6CidrBlockState`,
        [_xN]: _iCBS,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkBorderGroup`,
        [_xN]: _nBG,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6Pool`,
        [_xN]: _iPpvo,
      },
    ],
    [
      0,
      {
        [_eQN]: `Ipv6AddressAttribute`,
        [_xN]: _iAA,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpSource`,
        [_xN]: _iSpo,
      },
    ],
  ]
);
export var VpcCidrBlockAssociationSet = list(n0, _VCBAS, 0, [
  () => VpcCidrBlockAssociation,
  {
    [_xN]: _it,
  },
]);
export var VpcIdStringList = list(n0, _VISLp, 0, [
  0,
  {
    [_xN]: _VI,
  },
]);
export var VpcIpv6CidrBlockAssociationSet = list(n0, _VICBAS, 0, [
  () => VpcIpv6CidrBlockAssociation,
  {
    [_xN]: _it,
  },
]);
export var VpcList = list(n0, _VLp, 0, [
  () => Vpc,
  {
    [_xN]: _it,
  },
]);
export var AssociateSubnetCidrBlock = op(
  n0,
  _ASCB,
  0,
  () => AssociateSubnetCidrBlockRequest,
  () => AssociateSubnetCidrBlockResult
);
export var AssociateVpcCidrBlock = op(
  n0,
  _AVCB,
  0,
  () => AssociateVpcCidrBlockRequest,
  () => AssociateVpcCidrBlockResult
);
export var CreateDefaultVpc = op(
  n0,
  _CDV,
  0,
  () => CreateDefaultVpcRequest,
  () => CreateDefaultVpcResult
);
export var CreateVpc = op(
  n0,
  _CVre,
  0,
  () => CreateVpcRequest,
  () => CreateVpcResult
);
export var DescribeVpcs = op(
  n0,
  _DVesc,
  0,
  () => DescribeVpcsRequest,
  () => DescribeVpcsResult
);
export var DisassociateSubnetCidrBlock = op(
  n0,
  _DSCB,
  0,
  () => DisassociateSubnetCidrBlockRequest,
  () => DisassociateSubnetCidrBlockResult
);
export var DisassociateVpcCidrBlock = op(
  n0,
  _DVCB,
  0,
  () => DisassociateVpcCidrBlockRequest,
  () => DisassociateVpcCidrBlockResult
);
