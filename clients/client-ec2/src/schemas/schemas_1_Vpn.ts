// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aD,
  _ADc,
  _AO,
  _aO,
  _ASGTCVTN,
  _ASGTCVTNR,
  _ASGTCVTNRp,
  _ATN,
  _aTN,
  _ATNS,
  _ATNs,
  _Au,
  _bT,
  _BTa,
  _CAer,
  _CAR,
  _CCB,
  _cCB,
  _CCO,
  _cCO,
  _CCRO,
  _CCVE,
  _CCVER,
  _CCVERr,
  _CDS,
  _CLBO,
  _cLBO,
  _CLBRO,
  _CLG,
  _CLO,
  _cLO,
  _CLRO,
  _CLS,
  _Co,
  _co,
  _CRCC,
  _cRCC,
  _CRCCA,
  _CREO,
  _cREO,
  _CRERO,
  _CT,
  _CTre,
  _cTre,
  _CVA,
  _CVAL,
  _CVAR,
  _CVARL,
  _CVE,
  _cVE,
  _CVEAS,
  _CVEI,
  _cVEI,
  _CVEIL,
  _CVEIl,
  _CVEl,
  _CVSGIS,
  _DCVEe,
  _DCVERes,
  _DCVEResc,
  _De,
  _de,
  _DIi,
  _dIi,
  _DNn,
  _dNn,
  _DOST,
  _dOST,
  _DR,
  _DS,
  _dS,
  _DSA,
  _DSARi,
  _DSOMS,
  _DT,
  _dT,
  _EIAT,
  _eIAT,
  _En,
  _en,
  _Enf,
  _enf,
  _eQN,
  _ESnd,
  _FA,
  _fA,
  _FAR,
  _Fi,
  _Fil,
  _it,
  _LFA,
  _lFA,
  _MA,
  _mA,
  _MCVE,
  _MCVER,
  _MCVERo,
  _Me,
  _me,
  _MR,
  _NI,
  _nI,
  _NT,
  _nT,
  _NTe,
  _nTe,
  _R,
  _r,
  _SAMLPA,
  _SCA,
  _sCA,
  _SGI,
  _SGIe,
  _sGIe,
  _sGIS,
  _SPA,
  _sPA,
  _SSP,
  _SSPU,
  _sSPU,
  _SSSAMLPA,
  _SSSPA,
  _sSSPA,
  _Sta,
  _sta,
  _STH,
  _sTH,
  _STp,
  _sTp,
  _T,
  _TIAT,
  _tIAT,
  _TPr,
  _tPr,
  _TS,
  _tS,
  _TSa,
  _Ty,
  _ty,
  _VI,
  _vI,
  _VP,
  _vP,
  _VPp,
  _vPp,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  ValueStringList,
} from "./schemas_0";
import { ClientVpnEndpointStatus } from "./schemas_10_Vpn";

/* eslint no-var: 0 */

export var ApplySecurityGroupsToClientVpnTargetNetworkRequest = struct(
  n0,
  _ASGTCVTNR,
  0,
  [_CVEI, _VI, _SGIe, _DR],
  [
    0,
    0,
    [
      () => ClientVpnSecurityGroupIdSet,
      {
        [_xN]: _SGI,
      },
    ],
    2,
  ]
);
export var ApplySecurityGroupsToClientVpnTargetNetworkResult = struct(
  n0,
  _ASGTCVTNRp,
  0,
  [_SGIe],
  [
    [
      () => ClientVpnSecurityGroupIdSet,
      {
        [_eQN]: `SecurityGroupIds`,
        [_xN]: _sGIe,
      },
    ],
  ]
);
export var AssociatedTargetNetwork = struct(
  n0,
  _ATN,
  0,
  [_NI, _NT],
  [
    [
      0,
      {
        [_eQN]: `NetworkId`,
        [_xN]: _nI,
      },
    ],
    [
      0,
      {
        [_eQN]: `NetworkType`,
        [_xN]: _nT,
      },
    ],
  ]
);
export var CertificateAuthentication = struct(
  n0,
  _CAer,
  0,
  [_CRCC],
  [
    [
      0,
      {
        [_eQN]: `ClientRootCertificateChain`,
        [_xN]: _cRCC,
      },
    ],
  ]
);
export var CertificateAuthenticationRequest = struct(n0, _CAR, 0, [_CRCCA], [0]);
export var ClientConnectOptions = struct(n0, _CCO, 0, [_En, _LFA], [2, 0]);
export var ClientConnectResponseOptions = struct(
  n0,
  _CCRO,
  0,
  [_En, _LFA, _Sta],
  [
    [
      2,
      {
        [_eQN]: `Enabled`,
        [_xN]: _en,
      },
    ],
    [
      0,
      {
        [_eQN]: `LambdaFunctionArn`,
        [_xN]: _lFA,
      },
    ],
    [
      () => ClientVpnEndpointAttributeStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
  ]
);
export var ClientLoginBannerOptions = struct(n0, _CLBO, 0, [_En, _BTa], [2, 0]);
export var ClientLoginBannerResponseOptions = struct(
  n0,
  _CLBRO,
  0,
  [_En, _BTa],
  [
    [
      2,
      {
        [_eQN]: `Enabled`,
        [_xN]: _en,
      },
    ],
    [
      0,
      {
        [_eQN]: `BannerText`,
        [_xN]: _bT,
      },
    ],
  ]
);
export var ClientRouteEnforcementOptions = struct(n0, _CREO, 0, [_Enf], [2]);
export var ClientRouteEnforcementResponseOptions = struct(
  n0,
  _CRERO,
  0,
  [_Enf],
  [
    [
      2,
      {
        [_eQN]: `Enforced`,
        [_xN]: _enf,
      },
    ],
  ]
);
export var ClientVpnAuthentication = struct(
  n0,
  _CVA,
  0,
  [_Ty, _ADc, _MA, _FA],
  [
    [
      0,
      {
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
    [
      () => DirectoryServiceAuthentication,
      {
        [_eQN]: `ActiveDirectory`,
        [_xN]: _aD,
      },
    ],
    [
      () => CertificateAuthentication,
      {
        [_eQN]: `MutualAuthentication`,
        [_xN]: _mA,
      },
    ],
    [
      () => FederatedAuthentication,
      {
        [_eQN]: `FederatedAuthentication`,
        [_xN]: _fA,
      },
    ],
  ]
);
export var ClientVpnAuthenticationRequest = struct(
  n0,
  _CVAR,
  0,
  [_Ty, _ADc, _MA, _FA],
  [
    0,
    () => DirectoryServiceAuthenticationRequest,
    () => CertificateAuthenticationRequest,
    () => FederatedAuthenticationRequest,
  ]
);
export var ClientVpnEndpoint = struct(
  n0,
  _CVE,
  0,
  [
    _CVEI,
    _De,
    _Sta,
    _CTre,
    _DT,
    _DNn,
    _CCB,
    _DS,
    _STp,
    _VP,
    _TPr,
    _VPp,
    _ATNs,
    _SCA,
    _AO,
    _CLO,
    _T,
    _SGIe,
    _VI,
    _SSPU,
    _CCO,
    _STH,
    _CLBO,
    _CREO,
    _DOST,
    _EIAT,
    _TIAT,
  ],
  [
    [
      0,
      {
        [_eQN]: `ClientVpnEndpointId`,
        [_xN]: _cVEI,
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
      () => ClientVpnEndpointStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
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
        [_eQN]: `DeletionTime`,
        [_xN]: _dT,
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
        [_eQN]: `ClientCidrBlock`,
        [_xN]: _cCB,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `DnsServer`,
        [_xN]: _dS,
      },
    ],
    [
      2,
      {
        [_eQN]: `SplitTunnel`,
        [_xN]: _sTp,
      },
    ],
    [
      0,
      {
        [_eQN]: `VpnProtocol`,
        [_xN]: _vP,
      },
    ],
    [
      0,
      {
        [_eQN]: `TransportProtocol`,
        [_xN]: _tPr,
      },
    ],
    [
      1,
      {
        [_eQN]: `VpnPort`,
        [_xN]: _vPp,
      },
    ],
    [
      () => AssociatedTargetNetworkSet,
      {
        [_eQN]: `AssociatedTargetNetwork`,
        [_xN]: _aTN,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServerCertificateArn`,
        [_xN]: _sCA,
      },
    ],
    [
      () => ClientVpnAuthenticationList,
      {
        [_eQN]: `AuthenticationOptions`,
        [_xN]: _aO,
      },
    ],
    [
      () => ConnectionLogResponseOptions,
      {
        [_eQN]: `ConnectionLogOptions`,
        [_xN]: _cLO,
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
      () => ClientVpnSecurityGroupIdSet,
      {
        [_eQN]: `SecurityGroupIdSet`,
        [_xN]: _sGIS,
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
        [_eQN]: `SelfServicePortalUrl`,
        [_xN]: _sSPU,
      },
    ],
    [
      () => ClientConnectResponseOptions,
      {
        [_eQN]: `ClientConnectOptions`,
        [_xN]: _cCO,
      },
    ],
    [
      1,
      {
        [_eQN]: `SessionTimeoutHours`,
        [_xN]: _sTH,
      },
    ],
    [
      () => ClientLoginBannerResponseOptions,
      {
        [_eQN]: `ClientLoginBannerOptions`,
        [_xN]: _cLBO,
      },
    ],
    [
      () => ClientRouteEnforcementResponseOptions,
      {
        [_eQN]: `ClientRouteEnforcementOptions`,
        [_xN]: _cREO,
      },
    ],
    [
      2,
      {
        [_eQN]: `DisconnectOnSessionTimeout`,
        [_xN]: _dOST,
      },
    ],
    [
      0,
      {
        [_eQN]: `EndpointIpAddressType`,
        [_xN]: _eIAT,
      },
    ],
    [
      0,
      {
        [_eQN]: `TrafficIpAddressType`,
        [_xN]: _tIAT,
      },
    ],
  ]
);
export var ClientVpnEndpointAttributeStatus = struct(
  n0,
  _CVEAS,
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
export var ConnectionLogOptions = struct(n0, _CLO, 0, [_En, _CLG, _CLS], [2, 0, 0]);
export var ConnectionLogResponseOptions = struct(n0, _CLRO, 0, [_En, _CLG, _CLS], [2, 0, 0]);
export var CreateClientVpnEndpointRequest = struct(
  n0,
  _CCVER,
  0,
  [
    _CCB,
    _SCA,
    _AO,
    _CLO,
    _DS,
    _TPr,
    _VPp,
    _De,
    _STp,
    _DR,
    _CT,
    _TS,
    _SGIe,
    _VI,
    _SSP,
    _CCO,
    _STH,
    _CLBO,
    _CREO,
    _DOST,
    _EIAT,
    _TIAT,
  ],
  [
    0,
    0,
    [
      () => ClientVpnAuthenticationRequestList,
      {
        [_xN]: _Au,
      },
    ],
    () => ConnectionLogOptions,
    [() => ValueStringList, 0],
    0,
    1,
    0,
    2,
    2,
    [0, 4],
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [
      () => ClientVpnSecurityGroupIdSet,
      {
        [_xN]: _SGI,
      },
    ],
    0,
    0,
    () => ClientConnectOptions,
    1,
    () => ClientLoginBannerOptions,
    () => ClientRouteEnforcementOptions,
    2,
    0,
    0,
  ]
);
export var CreateClientVpnEndpointResult = struct(
  n0,
  _CCVERr,
  0,
  [_CVEI, _Sta, _DNn],
  [
    [
      0,
      {
        [_eQN]: `ClientVpnEndpointId`,
        [_xN]: _cVEI,
      },
    ],
    [
      () => ClientVpnEndpointStatus,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      0,
      {
        [_eQN]: `DnsName`,
        [_xN]: _dNn,
      },
    ],
  ]
);
export var DescribeClientVpnEndpointsRequest = struct(
  n0,
  _DCVERes,
  0,
  [_CVEIl, _MR, _NTe, _Fi, _DR],
  [
    [
      () => ClientVpnEndpointIdList,
      {
        [_xN]: _CVEI,
      },
    ],
    1,
    0,
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    2,
  ]
);
export var DescribeClientVpnEndpointsResult = struct(
  n0,
  _DCVEResc,
  0,
  [_CVEl, _NTe],
  [
    [
      () => EndpointSet,
      {
        [_eQN]: `ClientVpnEndpoint`,
        [_xN]: _cVE,
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
export var DirectoryServiceAuthentication = struct(
  n0,
  _DSA,
  0,
  [_DIi],
  [
    [
      0,
      {
        [_eQN]: `DirectoryId`,
        [_xN]: _dIi,
      },
    ],
  ]
);
export var DirectoryServiceAuthenticationRequest = struct(n0, _DSARi, 0, [_DIi], [0]);
export var DnsServersOptionsModifyStructure = struct(n0, _DSOMS, 0, [_CDS, _En], [[() => ValueStringList, 0], 2]);
export var FederatedAuthentication = struct(
  n0,
  _FA,
  0,
  [_SPA, _SSSPA],
  [
    [
      0,
      {
        [_eQN]: `SamlProviderArn`,
        [_xN]: _sPA,
      },
    ],
    [
      0,
      {
        [_eQN]: `SelfServiceSamlProviderArn`,
        [_xN]: _sSSPA,
      },
    ],
  ]
);
export var FederatedAuthenticationRequest = struct(n0, _FAR, 0, [_SAMLPA, _SSSAMLPA], [0, 0]);
export var ModifyClientVpnEndpointRequest = struct(
  n0,
  _MCVER,
  0,
  [_CVEI, _SCA, _CLO, _DS, _VPp, _De, _STp, _DR, _SGIe, _VI, _SSP, _CCO, _STH, _CLBO, _CREO, _DOST],
  [
    0,
    0,
    () => ConnectionLogOptions,
    [() => DnsServersOptionsModifyStructure, 0],
    1,
    0,
    2,
    2,
    [
      () => ClientVpnSecurityGroupIdSet,
      {
        [_xN]: _SGI,
      },
    ],
    0,
    0,
    () => ClientConnectOptions,
    1,
    () => ClientLoginBannerOptions,
    () => ClientRouteEnforcementOptions,
    2,
  ]
);
export var ModifyClientVpnEndpointResult = struct(
  n0,
  _MCVERo,
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
export var AssociatedTargetNetworkSet = list(n0, _ATNS, 0, [
  () => AssociatedTargetNetwork,
  {
    [_xN]: _it,
  },
]);
export var ClientVpnAuthenticationList = list(n0, _CVAL, 0, [
  () => ClientVpnAuthentication,
  {
    [_xN]: _it,
  },
]);
export var ClientVpnAuthenticationRequestList = list(n0, _CVARL, 0, () => ClientVpnAuthenticationRequest);
export var ClientVpnEndpointIdList = list(n0, _CVEIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var ClientVpnSecurityGroupIdSet = list(n0, _CVSGIS, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var EndpointSet = list(n0, _ESnd, 0, [
  () => ClientVpnEndpoint,
  {
    [_xN]: _it,
  },
]);
export var ApplySecurityGroupsToClientVpnTargetNetwork = op(
  n0,
  _ASGTCVTN,
  0,
  () => ApplySecurityGroupsToClientVpnTargetNetworkRequest,
  () => ApplySecurityGroupsToClientVpnTargetNetworkResult
);
export var CreateClientVpnEndpoint = op(
  n0,
  _CCVE,
  0,
  () => CreateClientVpnEndpointRequest,
  () => CreateClientVpnEndpointResult
);
export var DescribeClientVpnEndpoints = op(
  n0,
  _DCVEe,
  0,
  () => DescribeClientVpnEndpointsRequest,
  () => DescribeClientVpnEndpointsResult
);
export var ModifyClientVpnEndpoint = op(
  n0,
  _MCVE,
  0,
  () => ModifyClientVpnEndpointRequest,
  () => ModifyClientVpnEndpointResult
);
