// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ARc,
  _aRcc,
  _aZIS,
  _AZIv,
  _aZS,
  _AZv,
  _BEDN,
  _bEDNS,
  _CT,
  _cT,
  _CVESC,
  _CVESCR,
  _CVESCRr,
  _DR,
  _DVES,
  _DVESR,
  _DVESRe,
  _eQN,
  _Fi,
  _Fil,
  _GLBA,
  _GLBAa,
  _gLBAS,
  _it,
  _MR,
  _MVE,
  _mVE,
  _N,
  _n,
  _NLBA,
  _NLBAe,
  _nLBAS,
  _NTe,
  _nTe,
  _ow,
  _Own,
  _PDD,
  _PDDS,
  _PDN,
  _PDNC,
  _pDNC,
  _PDNr,
  _pDNr,
  _pDNS,
  _PDNVS,
  _pDNVS,
  _PRa,
  _pRa,
  _RAE,
  _rAE,
  _reg,
  _Regi,
  _sC,
  _SCe,
  _SDe,
  _SDer,
  _SDSe,
  _sDSe,
  _sI,
  _SIAT,
  _sIATS,
  _SIATu,
  _SIe,
  _SN,
  _sN,
  _SNer,
  _sNS,
  _SR,
  _sR,
  _SRD,
  _SRe,
  _SRS,
  _sRS,
  _SRu,
  _SRup,
  _SSe,
  _sSer,
  _St,
  _st,
  _STDe,
  _STDS,
  _STe,
  _sTe,
  _T,
  _TS,
  _tS,
  _TSa,
  _Ty,
  _ty,
  _V,
  _v,
  _VEPS,
  _vEPS,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  ValueStringList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVpcEndpointServiceConfigurationRequest = struct(
  n0,
  _CVESCR,
  0,
  [_DR, _ARc, _PDN, _NLBAe, _GLBA, _SIAT, _SRu, _CT, _TS],
  [
    2,
    2,
    0,
    [
      () => ValueStringList,
      {
        [_xN]: _NLBA,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _GLBAa,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _SIATu,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _SRup,
      },
    ],
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
  ]
);
export var CreateVpcEndpointServiceConfigurationResult = struct(
  n0,
  _CVESCRr,
  0,
  [_SCe, _CT],
  [
    [
      () => ServiceConfiguration,
      {
        [_eQN]: `ServiceConfiguration`,
        [_xN]: _sC,
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
export var DescribeVpcEndpointServicesRequest = struct(
  n0,
  _DVESR,
  0,
  [_DR, _SNer, _Fi, _MR, _NTe, _SRe],
  [
    2,
    [
      () => ValueStringList,
      {
        [_xN]: _SN,
      },
    ],
    [
      () => FilterList,
      {
        [_xN]: _Fil,
      },
    ],
    1,
    0,
    [
      () => ValueStringList,
      {
        [_xN]: _SR,
      },
    ],
  ]
);
export var DescribeVpcEndpointServicesResult = struct(
  n0,
  _DVESRe,
  0,
  [_SNer, _SDe, _NTe],
  [
    [
      () => ValueStringList,
      {
        [_eQN]: `ServiceNameSet`,
        [_xN]: _sNS,
      },
    ],
    [
      () => ServiceDetailSet,
      {
        [_eQN]: `ServiceDetailSet`,
        [_xN]: _sDSe,
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
export var PrivateDnsDetails = struct(
  n0,
  _PDD,
  0,
  [_PDN],
  [
    [
      0,
      {
        [_eQN]: `PrivateDnsName`,
        [_xN]: _pDNr,
      },
    ],
  ]
);
export var PrivateDnsNameConfiguration = struct(
  n0,
  _PDNC,
  0,
  [_St, _Ty, _V, _N],
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
        [_eQN]: `Type`,
        [_xN]: _ty,
      },
    ],
    [
      0,
      {
        [_eQN]: `Value`,
        [_xN]: _v,
      },
    ],
    [
      0,
      {
        [_eQN]: `Name`,
        [_xN]: _n,
      },
    ],
  ]
);
export var ServiceConfiguration = struct(
  n0,
  _SCe,
  0,
  [_STe, _SIe, _SN, _SSe, _AZIv, _AZv, _ARc, _MVE, _NLBAe, _GLBA, _SIAT, _BEDN, _PDN, _PDNC, _PRa, _T, _SRu, _RAE],
  [
    [
      () => ServiceTypeDetailSet,
      {
        [_eQN]: `ServiceType`,
        [_xN]: _sTe,
      },
    ],
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
        [_eQN]: `ServiceName`,
        [_xN]: _sN,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceState`,
        [_xN]: _sSer,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `AvailabilityZoneIdSet`,
        [_xN]: _aZIS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `AvailabilityZoneSet`,
        [_xN]: _aZS,
      },
    ],
    [
      2,
      {
        [_eQN]: `AcceptanceRequired`,
        [_xN]: _aRcc,
      },
    ],
    [
      2,
      {
        [_eQN]: `ManagesVpcEndpoints`,
        [_xN]: _mVE,
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
      () => SupportedIpAddressTypes,
      {
        [_eQN]: `SupportedIpAddressTypeSet`,
        [_xN]: _sIATS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `BaseEndpointDnsNameSet`,
        [_xN]: _bEDNS,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateDnsName`,
        [_xN]: _pDNr,
      },
    ],
    [
      () => PrivateDnsNameConfiguration,
      {
        [_eQN]: `PrivateDnsNameConfiguration`,
        [_xN]: _pDNC,
      },
    ],
    [
      0,
      {
        [_eQN]: `PayerResponsibility`,
        [_xN]: _pRa,
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
      () => SupportedRegionSet,
      {
        [_eQN]: `SupportedRegionSet`,
        [_xN]: _sRS,
      },
    ],
    [
      2,
      {
        [_eQN]: `RemoteAccessEnabled`,
        [_xN]: _rAE,
      },
    ],
  ]
);
export var ServiceDetail = struct(
  n0,
  _SDer,
  0,
  [_SN, _SIe, _STe, _SR, _AZIv, _AZv, _Own, _BEDN, _PDN, _PDNr, _VEPS, _ARc, _MVE, _PRa, _T, _PDNVS, _SIAT],
  [
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
        [_eQN]: `ServiceId`,
        [_xN]: _sI,
      },
    ],
    [
      () => ServiceTypeDetailSet,
      {
        [_eQN]: `ServiceType`,
        [_xN]: _sTe,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceRegion`,
        [_xN]: _sR,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `AvailabilityZoneIdSet`,
        [_xN]: _aZIS,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `AvailabilityZoneSet`,
        [_xN]: _aZS,
      },
    ],
    [
      0,
      {
        [_eQN]: `Owner`,
        [_xN]: _ow,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `BaseEndpointDnsNameSet`,
        [_xN]: _bEDNS,
      },
    ],
    [
      0,
      {
        [_eQN]: `PrivateDnsName`,
        [_xN]: _pDNr,
      },
    ],
    [
      () => PrivateDnsDetailsSet,
      {
        [_eQN]: `PrivateDnsNameSet`,
        [_xN]: _pDNS,
      },
    ],
    [
      2,
      {
        [_eQN]: `VpcEndpointPolicySupported`,
        [_xN]: _vEPS,
      },
    ],
    [
      2,
      {
        [_eQN]: `AcceptanceRequired`,
        [_xN]: _aRcc,
      },
    ],
    [
      2,
      {
        [_eQN]: `ManagesVpcEndpoints`,
        [_xN]: _mVE,
      },
    ],
    [
      0,
      {
        [_eQN]: `PayerResponsibility`,
        [_xN]: _pRa,
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
        [_eQN]: `PrivateDnsNameVerificationState`,
        [_xN]: _pDNVS,
      },
    ],
    [
      () => SupportedIpAddressTypes,
      {
        [_eQN]: `SupportedIpAddressTypeSet`,
        [_xN]: _sIATS,
      },
    ],
  ]
);
export var ServiceTypeDetail = struct(
  n0,
  _STDe,
  0,
  [_STe],
  [
    [
      0,
      {
        [_eQN]: `ServiceType`,
        [_xN]: _sTe,
      },
    ],
  ]
);
export var SupportedRegionDetail = struct(
  n0,
  _SRD,
  0,
  [_Regi, _SSe],
  [
    [
      0,
      {
        [_eQN]: `Region`,
        [_xN]: _reg,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceState`,
        [_xN]: _sSer,
      },
    ],
  ]
);
export var PrivateDnsDetailsSet = list(n0, _PDDS, 0, [
  () => PrivateDnsDetails,
  {
    [_xN]: _it,
  },
]);
export var ServiceDetailSet = list(n0, _SDSe, 0, [
  () => ServiceDetail,
  {
    [_xN]: _it,
  },
]);
export var ServiceTypeDetailSet = list(n0, _STDS, 0, [
  () => ServiceTypeDetail,
  {
    [_xN]: _it,
  },
]);
export var SupportedIpAddressTypes = list(n0, _SIAT, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var SupportedRegionSet = list(n0, _SRS, 0, [
  () => SupportedRegionDetail,
  {
    [_xN]: _it,
  },
]);
export var CreateVpcEndpointServiceConfiguration = op(
  n0,
  _CVESC,
  0,
  () => CreateVpcEndpointServiceConfigurationRequest,
  () => CreateVpcEndpointServiceConfigurationResult
);
export var DescribeVpcEndpointServices = op(
  n0,
  _DVES,
  0,
  () => DescribeVpcEndpointServicesRequest,
  () => DescribeVpcEndpointServicesResult
);
