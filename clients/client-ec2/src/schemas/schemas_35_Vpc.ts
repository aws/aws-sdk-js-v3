// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AAP,
  _AGLBA,
  _AGLBAd,
  _ANLBA,
  _ANLBAd,
  _AP,
  _APd,
  _APl,
  _aPl,
  _APll,
  _APS,
  _aPS,
  _APSl,
  _ARc,
  _ASIAT,
  _ASIATd,
  _ASR,
  _ASRd,
  _DR,
  _DVESC,
  _DVESCe,
  _DVESCR,
  _DVESCRe,
  _DVESCRes,
  _DVESCResc,
  _DVESP,
  _DVESPR,
  _DVESPRe,
  _eQN,
  _Fi,
  _Fil,
  _it,
  _MR,
  _MVESC,
  _MVESCR,
  _MVESCRo,
  _MVESP,
  _MVESPR,
  _MVESPRo,
  _MVESPRod,
  _MVESPRR,
  _MVESPRRo,
  _NTe,
  _nTe,
  _P,
  _p,
  _PDN,
  _PRa,
  _PT,
  _pT,
  _R,
  _r,
  _RAP,
  _RGLBA,
  _RGLBAe,
  _RNLBA,
  _RNLBAe,
  _RPDN,
  _RSIAT,
  _RSIATe,
  _RSR,
  _RSRe,
  _RV,
  _SCer,
  _SCS,
  _sCS,
  _sI,
  _SIe,
  _SIer,
  _SPI,
  _sPI,
  _SVESPDV,
  _SVESPDVR,
  _SVESPDVRt,
  _T,
  _tS,
  _U,
  _u,
  _VESIL,
  _xN,
  FilterList,
  n0,
  TagList,
  ValueStringList,
} from "./schemas_0";
import { ServiceConfiguration } from "./schemas_24_Vpc";
import { UnsuccessfulItemSet } from "./schemas_54_Vpc";

/* eslint no-var: 0 */

export var AddedPrincipal = struct(
  n0,
  _AP,
  0,
  [_PT, _P, _SPI, _SIe],
  [
    [
      0,
      {
        [_eQN]: `PrincipalType`,
        [_xN]: _pT,
      },
    ],
    [
      0,
      {
        [_eQN]: `Principal`,
        [_xN]: _p,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServicePermissionId`,
        [_xN]: _sPI,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServiceId`,
        [_xN]: _sI,
      },
    ],
  ]
);
export var AllowedPrincipal = struct(
  n0,
  _APl,
  0,
  [_PT, _P, _SPI, _T, _SIe],
  [
    [
      0,
      {
        [_eQN]: `PrincipalType`,
        [_xN]: _pT,
      },
    ],
    [
      0,
      {
        [_eQN]: `Principal`,
        [_xN]: _p,
      },
    ],
    [
      0,
      {
        [_eQN]: `ServicePermissionId`,
        [_xN]: _sPI,
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
        [_eQN]: `ServiceId`,
        [_xN]: _sI,
      },
    ],
  ]
);
export var DeleteVpcEndpointServiceConfigurationsRequest = struct(
  n0,
  _DVESCR,
  0,
  [_DR, _SIer],
  [
    2,
    [
      () => VpcEndpointServiceIdList,
      {
        [_xN]: _SIe,
      },
    ],
  ]
);
export var DeleteVpcEndpointServiceConfigurationsResult = struct(
  n0,
  _DVESCRe,
  0,
  [_U],
  [
    [
      () => UnsuccessfulItemSet,
      {
        [_eQN]: `Unsuccessful`,
        [_xN]: _u,
      },
    ],
  ]
);
export var DescribeVpcEndpointServiceConfigurationsRequest = struct(
  n0,
  _DVESCRes,
  0,
  [_DR, _SIer, _Fi, _MR, _NTe],
  [
    2,
    [
      () => VpcEndpointServiceIdList,
      {
        [_xN]: _SIe,
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
  ]
);
export var DescribeVpcEndpointServiceConfigurationsResult = struct(
  n0,
  _DVESCResc,
  0,
  [_SCer, _NTe],
  [
    [
      () => ServiceConfigurationSet,
      {
        [_eQN]: `ServiceConfigurationSet`,
        [_xN]: _sCS,
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
export var DescribeVpcEndpointServicePermissionsRequest = struct(
  n0,
  _DVESPR,
  0,
  [_DR, _SIe, _Fi, _MR, _NTe],
  [
    2,
    0,
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
export var DescribeVpcEndpointServicePermissionsResult = struct(
  n0,
  _DVESPRe,
  0,
  [_APll, _NTe],
  [
    [
      () => AllowedPrincipalSet,
      {
        [_eQN]: `AllowedPrincipals`,
        [_xN]: _aPl,
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
export var ModifyVpcEndpointServiceConfigurationRequest = struct(
  n0,
  _MVESCR,
  0,
  [_DR, _SIe, _PDN, _RPDN, _ARc, _ANLBA, _RNLBA, _AGLBA, _RGLBA, _ASIAT, _RSIAT, _ASR, _RSR],
  [
    2,
    0,
    0,
    2,
    2,
    [
      () => ValueStringList,
      {
        [_xN]: _ANLBAd,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _RNLBAe,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _AGLBAd,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _RGLBAe,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _ASIATd,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _RSIATe,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _ASRd,
      },
    ],
    [
      () => ValueStringList,
      {
        [_xN]: _RSRe,
      },
    ],
  ]
);
export var ModifyVpcEndpointServiceConfigurationResult = struct(
  n0,
  _MVESCRo,
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
export var ModifyVpcEndpointServicePayerResponsibilityRequest = struct(n0, _MVESPRR, 0, [_DR, _SIe, _PRa], [2, 0, 0]);
export var ModifyVpcEndpointServicePayerResponsibilityResult = struct(
  n0,
  _MVESPRRo,
  0,
  [_RV],
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
export var ModifyVpcEndpointServicePermissionsRequest = struct(
  n0,
  _MVESPR,
  0,
  [_DR, _SIe, _AAP, _RAP],
  [2, 0, [() => ValueStringList, 0], [() => ValueStringList, 0]]
);
export var ModifyVpcEndpointServicePermissionsResult = struct(
  n0,
  _MVESPRo,
  0,
  [_APd, _RV],
  [
    [
      () => AddedPrincipalSet,
      {
        [_eQN]: `AddedPrincipalSet`,
        [_xN]: _aPS,
      },
    ],
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var StartVpcEndpointServicePrivateDnsVerificationRequest = struct(n0, _SVESPDVR, 0, [_DR, _SIe], [2, 0]);
export var StartVpcEndpointServicePrivateDnsVerificationResult = struct(
  n0,
  _SVESPDVRt,
  0,
  [_RV],
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
export var AddedPrincipalSet = list(n0, _APS, 0, [
  () => AddedPrincipal,
  {
    [_xN]: _it,
  },
]);
export var AllowedPrincipalSet = list(n0, _APSl, 0, [
  () => AllowedPrincipal,
  {
    [_xN]: _it,
  },
]);
export var ServiceConfigurationSet = list(n0, _SCS, 0, [
  () => ServiceConfiguration,
  {
    [_xN]: _it,
  },
]);
export var VpcEndpointServiceIdList = list(n0, _VESIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var DeleteVpcEndpointServiceConfigurations = op(
  n0,
  _DVESC,
  0,
  () => DeleteVpcEndpointServiceConfigurationsRequest,
  () => DeleteVpcEndpointServiceConfigurationsResult
);
export var DescribeVpcEndpointServiceConfigurations = op(
  n0,
  _DVESCe,
  0,
  () => DescribeVpcEndpointServiceConfigurationsRequest,
  () => DescribeVpcEndpointServiceConfigurationsResult
);
export var DescribeVpcEndpointServicePermissions = op(
  n0,
  _DVESP,
  0,
  () => DescribeVpcEndpointServicePermissionsRequest,
  () => DescribeVpcEndpointServicePermissionsResult
);
export var ModifyVpcEndpointServiceConfiguration = op(
  n0,
  _MVESC,
  0,
  () => ModifyVpcEndpointServiceConfigurationRequest,
  () => ModifyVpcEndpointServiceConfigurationResult
);
export var ModifyVpcEndpointServicePayerResponsibility = op(
  n0,
  _MVESPRod,
  0,
  () => ModifyVpcEndpointServicePayerResponsibilityRequest,
  () => ModifyVpcEndpointServicePayerResponsibilityResult
);
export var ModifyVpcEndpointServicePermissions = op(
  n0,
  _MVESP,
  0,
  () => ModifyVpcEndpointServicePermissionsRequest,
  () => ModifyVpcEndpointServicePermissionsResult
);
export var StartVpcEndpointServicePrivateDnsVerification = op(
  n0,
  _SVESPDV,
  0,
  () => StartVpcEndpointServicePrivateDnsVerificationRequest,
  () => StartVpcEndpointServicePrivateDnsVerificationResult
);
