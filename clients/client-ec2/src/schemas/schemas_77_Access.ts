// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _AE,
  _aE,
  _AVATP,
  _AVATPR,
  _AVATPRt,
  _CECSD,
  _cECSD,
  _Ci,
  _ci,
  _CIli,
  _cIli,
  _Confi,
  _confi,
  _CS,
  _cSl,
  _CST,
  _CT,
  _CTre,
  _cTre,
  _CVAI,
  _CVAIR,
  _CVAIRr,
  _CVANAOO,
  _CVATP,
  _CVATPDO,
  _CVATPOO,
  _CVATPR,
  _CVATPRr,
  _De,
  _de,
  _DOev,
  _dOev,
  _DR,
  _DTP,
  _dTPS,
  _DTPT,
  _dTPT,
  _DTPTL,
  _DVAI,
  _DVAIe,
  _DVAIR,
  _DVAIRe,
  _DVAIRes,
  _DVAIResc,
  _DVATP,
  _DVATPe,
  _DVATPet,
  _DVATPR,
  _DVATPRe,
  _DVATPRes,
  _DVATPResc,
  _DVATPRet,
  _DVATPReta,
  _eQN,
  _EVAICC,
  _EVAICCR,
  _EVAICCRx,
  _FE,
  _fE,
  _Fi,
  _Fil,
  _FIPSE,
  _Is,
  _is,
  _it,
  _LUTa,
  _lUTa,
  _MR,
  _MVAI,
  _MVAIR,
  _MVAIRo,
  _MVANAOO,
  _MVATP,
  _MVATPDO,
  _MVATPOO,
  _MVATPR,
  _MVATPRo,
  _Na,
  _NAOO,
  _nAOO,
  _nSa,
  _NTe,
  _nTe,
  _OO,
  _oO,
  _OVC,
  _oVCS,
  _PEk,
  _pEk,
  _PRN,
  _pRNo,
  _PSKE,
  _pSKE,
  _PSKU,
  _pSKU,
  _reg,
  _Regi,
  _Rou,
  _rSou,
  _Sc,
  _sc,
  _Scop,
  _scop,
  _SDu,
  _sDu,
  _SS,
  _sSs,
  _T,
  _TEo,
  _tEo,
  _TIe,
  _tIe,
  _TPT,
  _tPT,
  _TS,
  _tS,
  _TSa,
  _Ty,
  _ty,
  _UIE,
  _uIE,
  _UTP,
  _uTP,
  _UTPT,
  _uTPT,
  _VAI,
  _vAI,
  _VAICSD,
  _VAIe,
  _VAII,
  _vAII,
  _VAIIe,
  _VAIL,
  _VAIOVCC,
  _VAIOVCCL,
  _VAIOVCCR,
  _VAIOVCCRL,
  _vAIS,
  _VAIUTPCC,
  _VATP,
  _vATP,
  _VATPC,
  _VATPCL,
  _VATPe,
  _VATPI,
  _vATPI,
  _VATPIe,
  _VATPIL,
  _VATPL,
  _vATPS,
  _ve,
  _Ver,
  _xN,
  FilterList,
  n0,
  TagList,
  TagSpecificationList,
  ValueStringList,
  VerifiedAccessSseSpecificationResponse,
} from "./schemas_0";
import { VerifiedAccessSseSpecificationRequest } from "./schemas_222_Access";
import { VerifiedAccessInstanceIdList } from "./schemas_320_Describe";

/* eslint no-var: 0 */

export var ClientSecretType = sim(n0, _CST, 0, 8);
export var AttachVerifiedAccessTrustProviderRequest = struct(
  n0,
  _AVATPR,
  0,
  [_VAII, _VATPI, _CT, _DR],
  [0, 0, [0, 4], 2]
);
export var AttachVerifiedAccessTrustProviderResult = struct(
  n0,
  _AVATPRt,
  0,
  [_VATP, _VAI],
  [
    [
      () => VerifiedAccessTrustProvider,
      {
        [_eQN]: `VerifiedAccessTrustProvider`,
        [_xN]: _vATP,
      },
    ],
    [
      () => VerifiedAccessInstance,
      {
        [_eQN]: `VerifiedAccessInstance`,
        [_xN]: _vAI,
      },
    ],
  ]
);
export var CreateVerifiedAccessInstanceRequest = struct(
  n0,
  _CVAIR,
  0,
  [_De, _TS, _CT, _DR, _FIPSE, _CECSD],
  [
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
    2,
    2,
    0,
  ]
);
export var CreateVerifiedAccessInstanceResult = struct(
  n0,
  _CVAIRr,
  0,
  [_VAI],
  [
    [
      () => VerifiedAccessInstance,
      {
        [_eQN]: `VerifiedAccessInstance`,
        [_xN]: _vAI,
      },
    ],
  ]
);
export var CreateVerifiedAccessNativeApplicationOidcOptions = struct(
  n0,
  _CVANAOO,
  0,
  [_PSKE, _Is, _AE, _TEo, _UIE, _CIli, _CS, _Sc],
  [0, 0, 0, 0, 0, 0, [() => ClientSecretType, 0], 0]
);
export var CreateVerifiedAccessTrustProviderDeviceOptions = struct(n0, _CVATPDO, 0, [_TIe, _PSKU], [0, 0]);
export var CreateVerifiedAccessTrustProviderOidcOptions = struct(
  n0,
  _CVATPOO,
  0,
  [_Is, _AE, _TEo, _UIE, _CIli, _CS, _Sc],
  [0, 0, 0, 0, 0, [() => ClientSecretType, 0], 0]
);
export var CreateVerifiedAccessTrustProviderRequest = struct(
  n0,
  _CVATPR,
  0,
  [_TPT, _UTPT, _DTPT, _OO, _DOev, _PRN, _De, _TS, _CT, _DR, _SS, _NAOO],
  [
    0,
    0,
    0,
    [() => CreateVerifiedAccessTrustProviderOidcOptions, 0],
    () => CreateVerifiedAccessTrustProviderDeviceOptions,
    0,
    0,
    [
      () => TagSpecificationList,
      {
        [_xN]: _TSa,
      },
    ],
    [0, 4],
    2,
    () => VerifiedAccessSseSpecificationRequest,
    [() => CreateVerifiedAccessNativeApplicationOidcOptions, 0],
  ]
);
export var CreateVerifiedAccessTrustProviderResult = struct(
  n0,
  _CVATPRr,
  0,
  [_VATP],
  [
    [
      () => VerifiedAccessTrustProvider,
      {
        [_eQN]: `VerifiedAccessTrustProvider`,
        [_xN]: _vATP,
      },
    ],
  ]
);
export var DeleteVerifiedAccessInstanceRequest = struct(n0, _DVAIR, 0, [_VAII, _DR, _CT], [0, 2, [0, 4]]);
export var DeleteVerifiedAccessInstanceResult = struct(
  n0,
  _DVAIRe,
  0,
  [_VAI],
  [
    [
      () => VerifiedAccessInstance,
      {
        [_eQN]: `VerifiedAccessInstance`,
        [_xN]: _vAI,
      },
    ],
  ]
);
export var DeleteVerifiedAccessTrustProviderRequest = struct(n0, _DVATPR, 0, [_VATPI, _DR, _CT], [0, 2, [0, 4]]);
export var DeleteVerifiedAccessTrustProviderResult = struct(
  n0,
  _DVATPRe,
  0,
  [_VATP],
  [
    [
      () => VerifiedAccessTrustProvider,
      {
        [_eQN]: `VerifiedAccessTrustProvider`,
        [_xN]: _vATP,
      },
    ],
  ]
);
export var DescribeVerifiedAccessInstancesRequest = struct(
  n0,
  _DVAIRes,
  0,
  [_VAIIe, _MR, _NTe, _Fi, _DR],
  [
    [
      () => VerifiedAccessInstanceIdList,
      {
        [_xN]: _VAII,
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
export var DescribeVerifiedAccessInstancesResult = struct(
  n0,
  _DVAIResc,
  0,
  [_VAIe, _NTe],
  [
    [
      () => VerifiedAccessInstanceList,
      {
        [_eQN]: `VerifiedAccessInstanceSet`,
        [_xN]: _vAIS,
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
export var DescribeVerifiedAccessTrustProvidersRequest = struct(
  n0,
  _DVATPRes,
  0,
  [_VATPIe, _MR, _NTe, _Fi, _DR],
  [
    [
      () => VerifiedAccessTrustProviderIdList,
      {
        [_xN]: _VATPI,
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
export var DescribeVerifiedAccessTrustProvidersResult = struct(
  n0,
  _DVATPResc,
  0,
  [_VATPe, _NTe],
  [
    [
      () => VerifiedAccessTrustProviderList,
      {
        [_eQN]: `VerifiedAccessTrustProviderSet`,
        [_xN]: _vATPS,
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
export var DetachVerifiedAccessTrustProviderRequest = struct(
  n0,
  _DVATPRet,
  0,
  [_VAII, _VATPI, _CT, _DR],
  [0, 0, [0, 4], 2]
);
export var DetachVerifiedAccessTrustProviderResult = struct(
  n0,
  _DVATPReta,
  0,
  [_VATP, _VAI],
  [
    [
      () => VerifiedAccessTrustProvider,
      {
        [_eQN]: `VerifiedAccessTrustProvider`,
        [_xN]: _vATP,
      },
    ],
    [
      () => VerifiedAccessInstance,
      {
        [_eQN]: `VerifiedAccessInstance`,
        [_xN]: _vAI,
      },
    ],
  ]
);
export var DeviceOptions = struct(
  n0,
  _DOev,
  0,
  [_TIe, _PSKU],
  [
    [
      0,
      {
        [_eQN]: `TenantId`,
        [_xN]: _tIe,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicSigningKeyUrl`,
        [_xN]: _pSKU,
      },
    ],
  ]
);
export var ExportVerifiedAccessInstanceClientConfigurationRequest = struct(n0, _EVAICCR, 0, [_VAII, _DR], [0, 2]);
export var ExportVerifiedAccessInstanceClientConfigurationResult = struct(
  n0,
  _EVAICCRx,
  0,
  [_Ver, _VAII, _Regi, _DTP, _UTP, _OVC],
  [
    [
      0,
      {
        [_eQN]: `Version`,
        [_xN]: _ve,
      },
    ],
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
        [_eQN]: `Region`,
        [_xN]: _reg,
      },
    ],
    [
      () => DeviceTrustProviderTypeList,
      {
        [_eQN]: `DeviceTrustProviderSet`,
        [_xN]: _dTPS,
      },
    ],
    [
      () => VerifiedAccessInstanceUserTrustProviderClientConfiguration,
      {
        [_eQN]: `UserTrustProvider`,
        [_xN]: _uTP,
      },
    ],
    [
      () => VerifiedAccessInstanceOpenVpnClientConfigurationList,
      {
        [_eQN]: `OpenVpnConfigurationSet`,
        [_xN]: _oVCS,
      },
    ],
  ]
);
export var ModifyVerifiedAccessInstanceRequest = struct(
  n0,
  _MVAIR,
  0,
  [_VAII, _De, _DR, _CT, _CECSD],
  [0, 0, 2, [0, 4], 0]
);
export var ModifyVerifiedAccessInstanceResult = struct(
  n0,
  _MVAIRo,
  0,
  [_VAI],
  [
    [
      () => VerifiedAccessInstance,
      {
        [_eQN]: `VerifiedAccessInstance`,
        [_xN]: _vAI,
      },
    ],
  ]
);
export var ModifyVerifiedAccessNativeApplicationOidcOptions = struct(
  n0,
  _MVANAOO,
  0,
  [_PSKE, _Is, _AE, _TEo, _UIE, _CIli, _CS, _Sc],
  [0, 0, 0, 0, 0, 0, [() => ClientSecretType, 0], 0]
);
export var ModifyVerifiedAccessTrustProviderDeviceOptions = struct(n0, _MVATPDO, 0, [_PSKU], [0]);
export var ModifyVerifiedAccessTrustProviderOidcOptions = struct(
  n0,
  _MVATPOO,
  0,
  [_Is, _AE, _TEo, _UIE, _CIli, _CS, _Sc],
  [0, 0, 0, 0, 0, [() => ClientSecretType, 0], 0]
);
export var ModifyVerifiedAccessTrustProviderRequest = struct(
  n0,
  _MVATPR,
  0,
  [_VATPI, _OO, _DOev, _De, _DR, _CT, _SS, _NAOO],
  [
    0,
    [() => ModifyVerifiedAccessTrustProviderOidcOptions, 0],
    () => ModifyVerifiedAccessTrustProviderDeviceOptions,
    0,
    2,
    [0, 4],
    () => VerifiedAccessSseSpecificationRequest,
    [() => ModifyVerifiedAccessNativeApplicationOidcOptions, 0],
  ]
);
export var ModifyVerifiedAccessTrustProviderResult = struct(
  n0,
  _MVATPRo,
  0,
  [_VATP],
  [
    [
      () => VerifiedAccessTrustProvider,
      {
        [_eQN]: `VerifiedAccessTrustProvider`,
        [_xN]: _vATP,
      },
    ],
  ]
);
export var NativeApplicationOidcOptions = struct(
  n0,
  _NAOO,
  0,
  [_PSKE, _Is, _AE, _TEo, _UIE, _CIli, _Sc],
  [
    [
      0,
      {
        [_eQN]: `PublicSigningKeyEndpoint`,
        [_xN]: _pSKE,
      },
    ],
    [
      0,
      {
        [_eQN]: `Issuer`,
        [_xN]: _is,
      },
    ],
    [
      0,
      {
        [_eQN]: `AuthorizationEndpoint`,
        [_xN]: _aE,
      },
    ],
    [
      0,
      {
        [_eQN]: `TokenEndpoint`,
        [_xN]: _tEo,
      },
    ],
    [
      0,
      {
        [_eQN]: `UserInfoEndpoint`,
        [_xN]: _uIE,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientId`,
        [_xN]: _cIli,
      },
    ],
    [
      0,
      {
        [_eQN]: `Scope`,
        [_xN]: _sc,
      },
    ],
  ]
);
export var OidcOptions = struct(
  n0,
  _OO,
  0,
  [_Is, _AE, _TEo, _UIE, _CIli, _CS, _Sc],
  [
    [
      0,
      {
        [_eQN]: `Issuer`,
        [_xN]: _is,
      },
    ],
    [
      0,
      {
        [_eQN]: `AuthorizationEndpoint`,
        [_xN]: _aE,
      },
    ],
    [
      0,
      {
        [_eQN]: `TokenEndpoint`,
        [_xN]: _tEo,
      },
    ],
    [
      0,
      {
        [_eQN]: `UserInfoEndpoint`,
        [_xN]: _uIE,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientId`,
        [_xN]: _cIli,
      },
    ],
    [
      () => ClientSecretType,
      {
        [_eQN]: `ClientSecret`,
        [_xN]: _cSl,
      },
    ],
    [
      0,
      {
        [_eQN]: `Scope`,
        [_xN]: _sc,
      },
    ],
  ]
);
export var VerifiedAccessInstance = struct(
  n0,
  _VAI,
  0,
  [_VAII, _De, _VATPe, _CTre, _LUTa, _T, _FE, _CECSD],
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
        [_eQN]: `Description`,
        [_xN]: _de,
      },
    ],
    [
      () => VerifiedAccessTrustProviderCondensedList,
      {
        [_eQN]: `VerifiedAccessTrustProviderSet`,
        [_xN]: _vATPS,
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
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
    [
      2,
      {
        [_eQN]: `FipsEnabled`,
        [_xN]: _fE,
      },
    ],
    [
      () => VerifiedAccessInstanceCustomSubDomain,
      {
        [_eQN]: `CidrEndpointsCustomSubDomain`,
        [_xN]: _cECSD,
      },
    ],
  ]
);
export var VerifiedAccessInstanceCustomSubDomain = struct(
  n0,
  _VAICSD,
  0,
  [_SDu, _Na],
  [
    [
      0,
      {
        [_eQN]: `SubDomain`,
        [_xN]: _sDu,
      },
    ],
    [
      () => ValueStringList,
      {
        [_eQN]: `NameserverSet`,
        [_xN]: _nSa,
      },
    ],
  ]
);
export var VerifiedAccessInstanceOpenVpnClientConfiguration = struct(
  n0,
  _VAIOVCC,
  0,
  [_Confi, _Rou],
  [
    [
      0,
      {
        [_eQN]: `Config`,
        [_xN]: _confi,
      },
    ],
    [
      () => VerifiedAccessInstanceOpenVpnClientConfigurationRouteList,
      {
        [_eQN]: `RouteSet`,
        [_xN]: _rSou,
      },
    ],
  ]
);
export var VerifiedAccessInstanceOpenVpnClientConfigurationRoute = struct(
  n0,
  _VAIOVCCR,
  0,
  [_Ci],
  [
    [
      0,
      {
        [_eQN]: `Cidr`,
        [_xN]: _ci,
      },
    ],
  ]
);
export var VerifiedAccessInstanceUserTrustProviderClientConfiguration = struct(
  n0,
  _VAIUTPCC,
  0,
  [_Ty, _Scop, _Is, _AE, _PSKE, _TEo, _UIE, _CIli, _CS, _PEk],
  [
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
        [_eQN]: `Scopes`,
        [_xN]: _scop,
      },
    ],
    [
      0,
      {
        [_eQN]: `Issuer`,
        [_xN]: _is,
      },
    ],
    [
      0,
      {
        [_eQN]: `AuthorizationEndpoint`,
        [_xN]: _aE,
      },
    ],
    [
      0,
      {
        [_eQN]: `PublicSigningKeyEndpoint`,
        [_xN]: _pSKE,
      },
    ],
    [
      0,
      {
        [_eQN]: `TokenEndpoint`,
        [_xN]: _tEo,
      },
    ],
    [
      0,
      {
        [_eQN]: `UserInfoEndpoint`,
        [_xN]: _uIE,
      },
    ],
    [
      0,
      {
        [_eQN]: `ClientId`,
        [_xN]: _cIli,
      },
    ],
    [
      () => ClientSecretType,
      {
        [_eQN]: `ClientSecret`,
        [_xN]: _cSl,
      },
    ],
    [
      2,
      {
        [_eQN]: `PkceEnabled`,
        [_xN]: _pEk,
      },
    ],
  ]
);
export var VerifiedAccessTrustProvider = struct(
  n0,
  _VATP,
  0,
  [_VATPI, _De, _TPT, _UTPT, _DTPT, _OO, _DOev, _PRN, _CTre, _LUTa, _T, _SS, _NAOO],
  [
    [
      0,
      {
        [_eQN]: `VerifiedAccessTrustProviderId`,
        [_xN]: _vATPI,
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
        [_eQN]: `TrustProviderType`,
        [_xN]: _tPT,
      },
    ],
    [
      0,
      {
        [_eQN]: `UserTrustProviderType`,
        [_xN]: _uTPT,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeviceTrustProviderType`,
        [_xN]: _dTPT,
      },
    ],
    [
      () => OidcOptions,
      {
        [_eQN]: `OidcOptions`,
        [_xN]: _oO,
      },
    ],
    [
      () => DeviceOptions,
      {
        [_eQN]: `DeviceOptions`,
        [_xN]: _dOev,
      },
    ],
    [
      0,
      {
        [_eQN]: `PolicyReferenceName`,
        [_xN]: _pRNo,
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
      () => NativeApplicationOidcOptions,
      {
        [_eQN]: `NativeApplicationOidcOptions`,
        [_xN]: _nAOO,
      },
    ],
  ]
);
export var VerifiedAccessTrustProviderCondensed = struct(
  n0,
  _VATPC,
  0,
  [_VATPI, _De, _TPT, _UTPT, _DTPT],
  [
    [
      0,
      {
        [_eQN]: `VerifiedAccessTrustProviderId`,
        [_xN]: _vATPI,
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
        [_eQN]: `TrustProviderType`,
        [_xN]: _tPT,
      },
    ],
    [
      0,
      {
        [_eQN]: `UserTrustProviderType`,
        [_xN]: _uTPT,
      },
    ],
    [
      0,
      {
        [_eQN]: `DeviceTrustProviderType`,
        [_xN]: _dTPT,
      },
    ],
  ]
);
export var DeviceTrustProviderTypeList = list(n0, _DTPTL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessInstanceList = list(n0, _VAIL, 0, [
  () => VerifiedAccessInstance,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessInstanceOpenVpnClientConfigurationList = list(n0, _VAIOVCCL, 0, [
  () => VerifiedAccessInstanceOpenVpnClientConfiguration,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessInstanceOpenVpnClientConfigurationRouteList = list(n0, _VAIOVCCRL, 0, [
  () => VerifiedAccessInstanceOpenVpnClientConfigurationRoute,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessTrustProviderCondensedList = list(n0, _VATPCL, 0, [
  () => VerifiedAccessTrustProviderCondensed,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessTrustProviderIdList = list(n0, _VATPIL, 0, [
  0,
  {
    [_xN]: _it,
  },
]);
export var VerifiedAccessTrustProviderList = list(n0, _VATPL, 0, [
  () => VerifiedAccessTrustProvider,
  {
    [_xN]: _it,
  },
]);
export var AttachVerifiedAccessTrustProvider = op(
  n0,
  _AVATP,
  0,
  () => AttachVerifiedAccessTrustProviderRequest,
  () => AttachVerifiedAccessTrustProviderResult
);
export var CreateVerifiedAccessInstance = op(
  n0,
  _CVAI,
  0,
  () => CreateVerifiedAccessInstanceRequest,
  () => CreateVerifiedAccessInstanceResult
);
export var CreateVerifiedAccessTrustProvider = op(
  n0,
  _CVATP,
  0,
  () => CreateVerifiedAccessTrustProviderRequest,
  () => CreateVerifiedAccessTrustProviderResult
);
export var DeleteVerifiedAccessInstance = op(
  n0,
  _DVAI,
  0,
  () => DeleteVerifiedAccessInstanceRequest,
  () => DeleteVerifiedAccessInstanceResult
);
export var DeleteVerifiedAccessTrustProvider = op(
  n0,
  _DVATP,
  0,
  () => DeleteVerifiedAccessTrustProviderRequest,
  () => DeleteVerifiedAccessTrustProviderResult
);
export var DescribeVerifiedAccessInstances = op(
  n0,
  _DVAIe,
  0,
  () => DescribeVerifiedAccessInstancesRequest,
  () => DescribeVerifiedAccessInstancesResult
);
export var DescribeVerifiedAccessTrustProviders = op(
  n0,
  _DVATPe,
  0,
  () => DescribeVerifiedAccessTrustProvidersRequest,
  () => DescribeVerifiedAccessTrustProvidersResult
);
export var DetachVerifiedAccessTrustProvider = op(
  n0,
  _DVATPet,
  0,
  () => DetachVerifiedAccessTrustProviderRequest,
  () => DetachVerifiedAccessTrustProviderResult
);
export var ExportVerifiedAccessInstanceClientConfiguration = op(
  n0,
  _EVAICC,
  0,
  () => ExportVerifiedAccessInstanceClientConfigurationRequest,
  () => ExportVerifiedAccessInstanceClientConfigurationResult
);
export var ModifyVerifiedAccessInstance = op(
  n0,
  _MVAI,
  0,
  () => ModifyVerifiedAccessInstanceRequest,
  () => ModifyVerifiedAccessInstanceResult
);
export var ModifyVerifiedAccessTrustProvider = op(
  n0,
  _MVATP,
  0,
  () => ModifyVerifiedAccessTrustProviderRequest,
  () => ModifyVerifiedAccessTrustProviderResult
);
