// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AZ,
  _aZ,
  _CAr,
  _cAr,
  _CICE,
  _CICER,
  _CICERr,
  _Co,
  _co,
  _CT,
  _cT,
  _CTrea,
  _cTrea,
  _CVER,
  _CVEr,
  _CVERr,
  _DEn,
  _DES,
  _dES,
  _DICE,
  _DICEe,
  _DICER,
  _DICERe,
  _DICERes,
  _DICEResc,
  _DNn,
  _dNn,
  _DOn,
  _dOn,
  _DOS,
  _DR,
  _DRIT,
  _dRIT,
  _Dua,
  _dua,
  _DVEC,
  _DVECR,
  _DVECRe,
  _EICE,
  _eQN,
  _FDN,
  _fDN,
  _Fi,
  _Fil,
  _FR,
  _fR,
  _G,
  _GIr,
  _gIr,
  _GIS,
  _GLBA,
  _gLBAS,
  _GN,
  _gN,
  _gS,
  _IAT,
  _iAT,
  _ICE,
  _iCE,
  _ICEA,
  _iCEA,
  _ICEDN,
  _ICEI,
  _iCEI,
  _ICEIn,
  _ICEn,
  _ICEPDN,
  _ICES,
  _iCES,
  _IPp,
  _IPpre,
  _IPpvr,
  _iPSpr,
  _iPSpv,
  _iPSpvr,
  _Ipv,
  _ipv,
  _Ipv_,
  _it,
  _LEa,
  _lEa,
  _Me,
  _me,
  _MICE,
  _MICER,
  _MICERo,
  _MR,
  _NIIe,
  _NIIS,
  _nIIS,
  _NLBAe,
  _nLBAS,
  _NTe,
  _nTe,
  _OI,
  _oI,
  _PCI,
  _pCI,
  _PDE,
  _pDE,
  _pDN,
  _PDNu,
  _PDo,
  _pDo,
  _PDOFIRE,
  _pDOFIRE,
  _R,
  _r,
  _RCA,
  _rCA,
  _RMeq,
  _rMeq,
  _RTI,
  _RTIo,
  _rTIS,
  _SC,
  _SCL,
  _SCu,
  _SGI,
  _SGIe,
  _SGIec,
  _SGIS,
  _sGIS,
  _SGISLR,
  _SI,
  _sI,
  _SIe,
  _SIPL,
  _SIPu,
  _sISu,
  _SIu,
  _sIu,
  _SMta,
  _sMta,
  _SN,
  _sN,
  _SNA,
  _sNA,
  _SR,
  _sR,
  _St,
  _st,
  _T,
  _TS,
  _tS,
  _TSa,
  _VE,
  _vE,
  _VEC,
  _VECIp,
  _vECIp,
  _VECpc,
  _VECS,
  _vECS,
  _vEI,
  _VEIp,
  _VEO,
  _vEO,
  _VER,
  _vER,
  _VERTIL,
  _VESGIL,
  _VESILp,
  _VESpc,
  _vESpc,
  _VET,
  _vET,
  _VI,
  _vI,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  ValueStringList,
} from "./schemas_0";
import { DnsEntry } from "./schemas_235_Vpc";

/* eslint no-var: 0 */

export var CreateInstanceConnectEndpointRequest = struct(
  n0,
  _CICER,
  0,
  [_DR, _SIu, _SGIe, _PCI, _CT, _TS, _IAT],
  [
    2,
    0,
    [
      () => SecurityGroupIdStringListRequest,
      {
        [_xN]: _SGI,
      },
    ],
    2,
    [0, 4],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    0,
  ]
);
export var CreateInstanceConnectEndpointResult = struct(
  n0,
  _CICERr,
  0,
  [_ICE, _CT],
  [
    [
      () => Ec2InstanceConnectEndpoint,
      {
        [_eQN]: `InstanceConnectEndpoint`,
        [_xN]: _iCE,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
  ]
);
export var CreateVpcEndpointRequest = struct(
  n0,
  _CVER,
  0,
  [_DR, _VET, _VI, _SN, _PDo, _RTIo, _SI, _SGIe, _IAT, _DOn, _CT, _PDE, _TS, _SC, _SNA, _RCA, _SR],
  [
    2,
    0,
    0,
    0,
    0,
    [
      () => VpcEndpointRouteTableIdList,
      {
        [_xN]: _RTI,
      },
    ],
    [
      () => VpcEndpointSubnetIdList,
      {
        [_xN]: _SIu,
      },
    ],
    [
      () => VpcEndpointSecurityGroupIdList,
      {
        [_xN]: _SGI,
      },
    ],
    0,
    () => DnsOptionsSpecification,
    0,
    2,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [
      () => SubnetConfigurationsList,
      {
        [_xN]: _SCu,
      },
    ],
    0,
    0,
    0,
  ]
);
export var CreateVpcEndpointResult = struct(
  n0,
  _CVERr,
  0,
  [_VE, _CT],
  [
    [
      () => VpcEndpoint,
      {
        [_eQN]: `VpcEndpoint`,
        [_xN]: _vE,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientToken`,
        [_xN]: _cT,
      },
    ],
  ]
);
export var DeleteInstanceConnectEndpointRequest = struct(n0, _DICER, 0, [_DR, _ICEI], [2, 0]);
export var DeleteInstanceConnectEndpointResult = struct(
  n0,
  _DICERe,
  0,
  [_ICE],
  [
    [
      () => Ec2InstanceConnectEndpoint,
      {
        [_eQN]: `InstanceConnectEndpoint`,
        [_xN]: _iCE,
      },
    ],
  ]
);
export var DescribeInstanceConnectEndpointsRequest = struct(
  n0,
  _DICERes,
  0,
  [_DR, _MR, _NTe, _Fi, _ICEIn],
  [
    2,
    1,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _ICEI,
      },
    ],
  ]
);
export var DescribeInstanceConnectEndpointsResult = struct(
  n0,
  _DICEResc,
  0,
  [_ICEn, _NTe],
  [
    [
      () => InstanceConnectEndpointSet,
      {
        [_eQN]: `InstanceConnectEndpointSet`,
        [_xN]: _iCES,
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
export var DescribeVpcEndpointConnectionsRequest = struct(
  n0,
  _DVECR,
  0,
  [_DR, _Fi, _MR, _NTe],
  [
    2,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
  ]
);
export var DescribeVpcEndpointConnectionsResult = struct(
  n0,
  _DVECRe,
  0,
  [_VEC, _NTe],
  [
    [
      () => VpcEndpointConnectionSet,
      {
        [_eQN]: `VpcEndpointConnectionSet`,
        [_xN]: _vECS,
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
export var DnsOptions = struct(
  n0,
  _DOn,
  0,
  [_DRIT, _PDOFIRE],
  [
    [
      0,
      {
        [_eQN]: `DnsRecordIpType`,
        [_xN]: _dRIT,
      },
    ],
    [
      2,
      {
        [_eQN]: `PrivateDnsOnlyForInboundResolverEndpoint`,
        [_xN]: _pDOFIRE,
      },
    ],
  ]
);
export var DnsOptionsSpecification = struct(n0, _DOS, 0, [_DRIT, _PDOFIRE], [0, 2]);
export var Ec2InstanceConnectEndpoint = struct(
  n0,
  _EICE,
  0,
  [_OI, _ICEI, _ICEA, _St, _SMta, _DNn, _FDN, _NIIe, _VI, _AZ, _CAr, _SIu, _PCI, _SGIe, _T, _IAT, _PDNu],
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
        [_eQN]: `InstanceConnectEndpointId`,
        [_xN]: _iCEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `InstanceConnectEndpointArn`,
        [_xN]: _iCEA,
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
      0,
      {
        [_eQN]: `DnsName`,
        [_xN]: _dNn,
      },
    ],
    [
      0,
      {
        [_eQN]: `FipsDnsName`,
        [_xN]: _fDN,
      },
    ],
    [
      () => NetworkInterfaceIdSet,
      {
        [_eQN]: `NetworkInterfaceIdSet`,
        [_xN]: _nIIS,
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
        [_eQN]: `AvailabilityZone`,
        [_xN]: _aZ,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreatedAt`,
        [_xN]: _cAr,
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
      2,
      {
        [_eQN]: `PreserveClientIp`,
        [_xN]: _pCI,
      },
    ],
    [
      () => SecurityGroupIdSet,
      {
        [_eQN]: `SecurityGroupIdSet`,
        [_xN]: _sGIS,
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
        [_eQN]: `IpAddressType`,
        [_xN]: _iAT,
      },
    ],
    [
      () => InstanceConnectEndpointPublicDnsNames,
      {
        [_eQN]: `PublicDnsNames`,
        [_xN]: _pDN,
      },
    ],
  ]
);
export var InstanceConnectEndpointDnsNames = struct(
  n0,
  _ICEDN,
  0,
  [_DNn, _FDN],
  [
    [
      0,
      {
        [_eQN]: `DnsName`,
        [_xN]: _dNn,
      },
    ],
    [
      0,
      {
        [_eQN]: `FipsDnsName`,
        [_xN]: _fDN,
      },
    ],
  ]
);
export var InstanceConnectEndpointPublicDnsNames = struct(
  n0,
  _ICEPDN,
  0,
  [_Ipv, _Dua],
  [
    [
      () => InstanceConnectEndpointDnsNames,
      {
        [_eQN]: `Ipv4`,
        [_xN]: _ipv,
      },
    ],
    [
      () => InstanceConnectEndpointDnsNames,
      {
        [_eQN]: `Dualstack`,
        [_xN]: _dua,
      },
    ],
  ]
);
export var LastError = struct(
  n0,
  _LEa,
  0,
  [_Me, _Co],
  [
    [
      0,
      {
        [_eQN]: `Message`,
        [_xN]: _me,
      },
    ],
    [
      0,
      {
        [_eQN]: `Code`,
        [_xN]: _co,
      },
    ],
  ]
);
export var ModifyInstanceConnectEndpointRequest = struct(
  n0,
  _MICER,
  0,
  [_DR, _ICEI, _IAT, _SGIe, _PCI],
  [
    2,
    0,
    0,
    [
      () => SecurityGroupIdStringListRequest,
      {
        [_xN]: _SGI,
      },
    ],
    2,
  ]
);
export var ModifyInstanceConnectEndpointResult = struct(
  n0,
  _MICERo,
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
export var SecurityGroupIdentifier = struct(
  n0,
  _SGIec,
  0,
  [_GIr, _GN],
  [
    [
      0,
      {
        [_eQN]: `GroupId`,
        [_xN]: _gIr,
      },
    ],
    [
      0,
      {
        [_eQN]: `GroupName`,
        [_xN]: _gN,
      },
    ],
  ]
);
export var SubnetConfiguration = struct(n0, _SCu, 0, [_SIu, _Ipv, _Ipv_], [0, 0, 0]);
export var SubnetIpPrefixes = struct(
  n0,
  _SIPu,
  0,
  [_SIu, _IPpre],
  [
    [
      0,
      {
        [_eQN]: `SubnetId`,
        [_xN]: _sIu,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `IpPrefixSet`,
        [_xN]: _iPSpr,
      },
    ],
  ]
);
export var VpcEndpoint = struct(
  n0,
  _VE,
  0,
  [
    _VEIp,
    _VET,
    _VI,
    _SN,
    _St,
    _PDo,
    _RTIo,
    _SI,
    _G,
    _IAT,
    _DOn,
    _PDE,
    _RMeq,
    _NIIe,
    _DEn,
    _CTrea,
    _T,
    _OI,
    _LEa,
    _IPpvr,
    _IPp,
    _FR,
    _SNA,
    _RCA,
    _SR,
  ],
  [
    [
      0,
      {
        [_eQN]: `VpcEndpointId`,
        [_xN]: _vEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcEndpointType`,
        [_xN]: _vET,
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
        [_eQN]: `ServiceName`,
        [_xN]: _sN,
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
        [_eQN]: `PolicyDocument`,
        [_xN]: _pDo,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `RouteTableIdSet`,
        [_xN]: _rTIS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `SubnetIdSet`,
        [_xN]: _sISu,
      },
    ],
    [
      () => GroupIdentifierSet,
      {
        [_eQN]: `GroupSet`,
        [_xN]: _gS,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpAddressType`,
        [_xN]: _iAT,
      },
    ],
    [
      () => DnsOptions,
      {
        [_eQN]: `DnsOptions`,
        [_xN]: _dOn,
      },
    ],
    [
      2,
      {
        [_eQN]: `PrivateDnsEnabled`,
        [_xN]: _pDE,
      },
    ],
    [
      2,
      {
        [_eQN]: `RequesterManaged`,
        [_xN]: _rMeq,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `NetworkInterfaceIdSet`,
        [_xN]: _nIIS,
      },
    ],
    [
      () => DnsEntrySet,
      {
        [_eQN]: `DnsEntrySet`,
        [_xN]: _dES,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreationTimestamp`,
        [_xN]: _cTrea,
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
        [_eQN]: `OwnerId`,
        [_xN]: _oI,
      },
    ],
    [
      () => LastError,
      {
        [_eQN]: `LastError`,
        [_xN]: _lEa,
      },
    ],
    [
      () => SubnetIpPrefixesList,
      {
        [_eQN]: `Ipv4PrefixSet`,
        [_xN]: _iPSpv,
      },
    ],
    [
      () => SubnetIpPrefixesList,
      {
        [_eQN]: `Ipv6PrefixSet`,
        [_xN]: _iPSpvr,
      },
    ],
    [
      0,
      {
        [_eQN]: `FailureReason`,
        [_xN]: _fR,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceNetworkArn`,
        [_xN]: _sNA,
      },
    ],
    [
      0,
      {
        [_eQN]: `ResourceConfigurationArn`,
        [_xN]: _rCA,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceRegion`,
        [_xN]: _sR,
      },
    ],
  ]
);
export var VpcEndpointConnection = struct(
  n0,
  _VECpc,
  0,
  [_SIe, _VEIp, _VEO, _VESpc, _CTrea, _DEn, _NLBAe, _GLBA, _IAT, _VECIp, _T, _VER],
  [
    [
      0,
      {
        [_eQN]: `ServiceId`,
        [_xN]: _sI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcEndpointId`,
        [_xN]: _vEI,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcEndpointOwner`,
        [_xN]: _vEO,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcEndpointState`,
        [_xN]: _vESpc,
      },
    ],
    [
      4,
      {
        [_eQN]: `CreationTimestamp`,
        [_xN]: _cTrea,
      },
    ],
    [
      () => DnsEntrySet,
      {
        [_eQN]: `DnsEntrySet`,
        [_xN]: _dES,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `NetworkLoadBalancerArnSet`,
        [_xN]: _nLBAS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `GatewayLoadBalancerArnSet`,
        [_xN]: _gLBAS,
      },
    ],
    [
      0,
      {
        [_eQN]: `IpAddressType`,
        [_xN]: _iAT,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpcEndpointConnectionId`,
        [_xN]: _vECIp,
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
        [_eQN]: `VpcEndpointRegion`,
        [_xN]: _vER,
      },
    ],
  ]
);
export var DnsEntrySet = list(n0, _DES, 0, [
  () => DnsEntry,
  {
    [_xN]: _it,
  },
]);
export var GroupIdentifierSet = list(n0, _GIS, 0, [
  () => SecurityGroupIdentifier,
  {
    [_xN]: _it,
  },
]);
export var InstanceConnectEndpointSet = list(n0, _ICES, 0, [
  () => Ec2InstanceConnectEndpoint,
  {
    [_xN]: _it,
  },
]);
export var NetworkInterfaceIdSet = list(n0, _NIIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var SecurityGroupIdSet = list(n0, _SGIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var SecurityGroupIdStringListRequest = list(n0, _SGISLR, 0, [
  0,
  {
    [_xN]: _SGI,
  },
]);
export var SubnetConfigurationsList = list(n0, _SCL, 0, [
  () => SubnetConfiguration,
  {
    [_xN]: _it,
  },
]);
export var SubnetIpPrefixesList = list(n0, _SIPL, 0, [
  () => SubnetIpPrefixes,
  {
    [_xN]: _it,
  },
]);
export var VpcEndpointConnectionSet = list(n0, _VECS, 0, [
  () => VpcEndpointConnection,
  {
    [_xN]: _it,
  },
]);
export var VpcEndpointRouteTableIdList = list(n0, _VERTIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VpcEndpointSecurityGroupIdList = list(n0, _VESGIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VpcEndpointSubnetIdList = list(n0, _VESILp, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var CreateInstanceConnectEndpoint = op(
  n0,
  _CICE,
  0,
  () => CreateInstanceConnectEndpointRequest,
  () => CreateInstanceConnectEndpointResult
);
export var CreateVpcEndpoint = op(
  n0,
  _CVEr,
  0,
  () => CreateVpcEndpointRequest,
  () => CreateVpcEndpointResult
);
export var DeleteInstanceConnectEndpoint = op(
  n0,
  _DICE,
  0,
  () => DeleteInstanceConnectEndpointRequest,
  () => DeleteInstanceConnectEndpointResult
);
export var DescribeInstanceConnectEndpoints = op(
  n0,
  _DICEe,
  0,
  () => DescribeInstanceConnectEndpointsRequest,
  () => DescribeInstanceConnectEndpointsResult
);
export var DescribeVpcEndpointConnections = op(
  n0,
  _DVEC,
  0,
  () => DescribeVpcEndpointConnectionsRequest,
  () => DescribeVpcEndpointConnectionsResult
);
export var ModifyInstanceConnectEndpoint = op(
  n0,
  _MICE,
  0,
  () => ModifyInstanceConnectEndpointRequest,
  () => ModifyInstanceConnectEndpointResult
);
