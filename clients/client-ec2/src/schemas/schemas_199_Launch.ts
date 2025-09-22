// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AIAC,
  _aIAC,
  _AIAOC,
  _aIAOC,
  _AZ,
  _aZ,
  _AZI,
  _aZI,
  _BPAS,
  _bPAS,
  _CB,
  _cB,
  _CDSR,
  _CDSr,
  _CDSRr,
  _COIP,
  _cOIP,
  _CSreat,
  _CSRreat,
  _CSRreate,
  _DFA,
  _dFA,
  _DLADI,
  _DR,
  _dR,
  _DSesc,
  _DSRescr,
  _DSRescri,
  _EDn,
  _eDn,
  _ELADI,
  _eLADI,
  _eQN,
  _ERNDAAAAR,
  _eRNDAAAAR,
  _ERNDAAAAROL,
  _ERNDAR,
  _eRNDAR,
  _ERNDAROL,
  _Fi,
  _Fil,
  _HTo,
  _hTo,
  _ICB,
  _ICBAS,
  _iCBAS,
  _II,
  _IIPI,
  _IIPIp,
  _IN,
  _iN,
  _INL,
  _INLp,
  _it,
  _MCOIOL,
  _mCOIOL,
  _MPDNO,
  _MPDNOR,
  _MPDNORo,
  _MPIOL,
  _mPIOL,
  _MR,
  _MSAo,
  _MSARo,
  _NTe,
  _nTe,
  _OA,
  _oA,
  _OI,
  _oI,
  _PDHT,
  _PDHTOL,
  _PDNOOL,
  _pDNOOL,
  _R,
  _r,
  _SAub,
  _sAub,
  _SI,
  _SICBAS,
  _SISLu,
  _SIu,
  _sIu,
  _SLu,
  _sSub,
  _St,
  _st,
  _Su,
  _su,
  _Subn,
  _T,
  _TS,
  _tS,
  _TSa,
  _Ty,
  _ty,
  _VI,
  _vI,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  Unit,
} from "./schemas_0";
import { BlockPublicAccessStates, SubnetIpv6CidrBlockAssociation } from "./schemas_9_Vpc";
import { AttributeBooleanValue } from "./schemas_261_Attribute";

/* eslint no-var: 0 */

export var CreateDefaultSubnetRequest = struct(n0, _CDSR, 0, [_AZ, _DR, _IN, _AZI], [0, 2, 2, 0]);
export var CreateDefaultSubnetResult = struct(
  n0,
  _CDSRr,
  0,
  [_Su],
  [
    [
      () => Subnet,
      {
        [_eQN]: `Subnet`,
        [_xN]: _su,
      },
    ],
  ]
);
export var CreateSubnetRequest = struct(
  n0,
  _CSRreat,
  0,
  [_TS, _AZ, _AZI, _CB, _ICB, _OA, _VI, _IN, _IIPIp, _INLp, _IIPI, _INL, _DR],
  [
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    0,
    1,
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
export var CreateSubnetResult = struct(
  n0,
  _CSRreate,
  0,
  [_Su],
  [
    [
      () => Subnet,
      {
        [_eQN]: `Subnet`,
        [_xN]: _su,
      },
    ],
  ]
);
export var DescribeSubnetsRequest = struct(
  n0,
  _DSRescr,
  0,
  [_Fi, _SI, _NTe, _MR, _DR],
  [
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => SubnetIdStringList,
      {
        [_xN]: _SIu,
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
export var DescribeSubnetsResult = struct(
  n0,
  _DSRescri,
  0,
  [_NTe, _Subn],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => SubnetList,
      {
        [_eQN]: `SubnetSet`,
        [_xN]: _sSub,
      },
    ],
  ]
);
export var ModifyPrivateDnsNameOptionsRequest = struct(
  n0,
  _MPDNOR,
  0,
  [_DR, _II, _PDHT, _ERNDAR, _ERNDAAAAR],
  [2, 0, 0, 2, 2]
);
export var ModifyPrivateDnsNameOptionsResult = struct(
  n0,
  _MPDNORo,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var ModifySubnetAttributeRequest = struct(
  n0,
  _MSARo,
  0,
  [_AIAOC, _MPIOL, _SIu, _MCOIOL, _COIP, _EDn, _PDHTOL, _ERNDAROL, _ERNDAAAAROL, _ELADI, _DLADI],
  [
    [() => AttributeBooleanValue, 0],
    [() => AttributeBooleanValue, 0],
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [() => AttributeBooleanValue, 0],
    0,
    [() => AttributeBooleanValue, 0],
    0,
    [() => AttributeBooleanValue, 0],
    [() => AttributeBooleanValue, 0],
    1,
    [() => AttributeBooleanValue, 0],
  ]
);
export var PrivateDnsNameOptionsOnLaunch = struct(
  n0,
  _PDNOOL,
  0,
  [_HTo, _ERNDAR, _ERNDAAAAR],
  [
    [
      0,
      {
        [_eQN]: `HostnameType`,
        [_xN]: _hTo,
      },
    ],
    [
      2,
      {
        [_eQN]: `EnableResourceNameDnsARecord`,
        [_xN]: _eRNDAR,
      },
    ],
    [
      2,
      {
        [_eQN]: `EnableResourceNameDnsAAAARecord`,
        [_xN]: _eRNDAAAAR,
      },
    ],
  ]
);
export var Subnet = struct(
  n0,
  _Su,
  0,
  [
    _AZI,
    _ELADI,
    _MCOIOL,
    _COIP,
    _OI,
    _AIAOC,
    _ICBAS,
    _T,
    _SAub,
    _OA,
    _EDn,
    _IN,
    _PDNOOL,
    _BPAS,
    _Ty,
    _SIu,
    _St,
    _VI,
    _CB,
    _AIAC,
    _AZ,
    _DFA,
    _MPIOL,
  ],
  [
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
        [_eQN]: `EnableLniAtDeviceIndex`,
        [_xN]: _eLADI,
      },
    ],
    [
      2,
      {
        [_eQN]: `MapCustomerOwnedIpOnLaunch`,
        [_xN]: _mCOIOL,
      },
    ],
    [
      0,
      {
        [_eQN]: `CustomerOwnedIpv4Pool`,
        [_xN]: _cOIP,
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
      2,
      {
        [_eQN]: `AssignIpv6AddressOnCreation`,
        [_xN]: _aIAOC,
      },
    ],
    [
      () => SubnetIpv6CidrBlockAssociationSet,
      {
        [_eQN]: `Ipv6CidrBlockAssociationSet`,
        [_xN]: _iCBAS,
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
        [_eQN]: `SubnetArn`,
        [_xN]: _sAub,
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
      2,
      {
        [_eQN]: `EnableDns64`,
        [_xN]: _eDn,
      },
    ],
    [
      2,
      {
        [_eQN]: `Ipv6Native`,
        [_xN]: _iN,
      },
    ],
    [
      () => PrivateDnsNameOptionsOnLaunch,
      {
        [_eQN]: `PrivateDnsNameOptionsOnLaunch`,
        [_xN]: _pDNOOL,
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
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
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
        [_eQN]: `State`,
        [_xN]: _st,
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
        [_eQN]: `CidrBlock`,
        [_xN]: _cB,
      },
    ],
    [
      1,
      {
        [_eQN]: `AvailableIpAddressCount`,
        [_xN]: _aIAC,
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
        [_eQN]: `DefaultForAz`,
        [_xN]: _dFA,
      },
    ],
    [
      2,
      {
        [_eQN]: `MapPublicIpOnLaunch`,
        [_xN]: _mPIOL,
      },
    ],
  ]
);
export var SubnetIdStringList = list(n0, _SISLu, 0, [
  0,
  {
    [_xN]: _SIu,
  },
]);
export var SubnetIpv6CidrBlockAssociationSet = list(n0, _SICBAS, 0, [
  () => SubnetIpv6CidrBlockAssociation,
  {
    [_xN]: _it,
  },
]);
export var SubnetList = list(n0, _SLu, 0, [
  () => Subnet,
  {
    [_xN]: _it,
  },
]);
export var CreateDefaultSubnet = op(
  n0,
  _CDSr,
  0,
  () => CreateDefaultSubnetRequest,
  () => CreateDefaultSubnetResult
);
export var CreateSubnet = op(
  n0,
  _CSreat,
  0,
  () => CreateSubnetRequest,
  () => CreateSubnetResult
);
export var DescribeSubnets = op(
  n0,
  _DSesc,
  0,
  () => DescribeSubnetsRequest,
  () => DescribeSubnetsResult
);
export var ModifyPrivateDnsNameOptions = op(
  n0,
  _MPDNO,
  0,
  () => ModifyPrivateDnsNameOptionsRequest,
  () => ModifyPrivateDnsNameOptionsResult
);
export var ModifySubnetAttribute = op(
  n0,
  _MSAo,
  0,
  () => ModifySubnetAttributeRequest,
  () => Unit
);
