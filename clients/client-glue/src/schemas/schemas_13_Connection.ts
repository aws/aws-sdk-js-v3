// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _AC,
  _ACI,
  _ACP,
  _ACPt,
  _ACut,
  _ACuth,
  _AOFCE,
  _AP,
  _AT,
  _ATu,
  _AV,
  _AVl,
  _AWSMCAR,
  _AZ,
  _BAC,
  _BAP,
  _Ca,
  _CAC,
  _CAP,
  _Cate,
  _CCE,
  _CCrea,
  _CCRreat,
  _CCRreate,
  _CCS,
  _CEC,
  _CECM,
  _CECo,
  _CEom,
  _CI,
  _CIon,
  _CLo,
  _CMre,
  _Co,
  _CONO,
  _COon,
  _CPNO,
  _CPo,
  _CPRO,
  _CSV,
  _CTB,
  _CTLo,
  _CTo,
  _CTonn,
  _CTre,
  _CTV,
  _CTVL,
  _CTVN,
  _CTVo,
  _D,
  _DCT,
  _DCTR,
  _DCTRe,
  _DNi,
  _DOS,
  _DV,
  _Fi,
  _GCeto,
  _GCeton,
  _GCF,
  _GCReto,
  _GCReton,
  _GCRetonn,
  _GCRetonne,
  _HP,
  _JT,
  _KKA,
  _LCT,
  _LCTR,
  _LCTRi,
  _LCVT,
  _LUB,
  _LUo,
  _LUT,
  _MCa,
  _MRax,
  _N,
  _NTe,
  _OAC,
  _OACA,
  _OAGT,
  _OAP,
  _OAPI,
  _P,
  _PCP,
  _PCPR,
  _PCR,
  _PM,
  _PPy,
  _Prop,
  _PTr,
  _Req,
  _RT,
  _RU,
  _SA,
  _SAT,
  _SCE,
  _SCPp,
  _SDO,
  _SGIL,
  _SIu,
  _SP,
  _SR,
  _St,
  _Tag,
  _TUo,
  _TUPM,
  _UCpd,
  _UCRpdat,
  _UCRpdate,
  _UMCACI,
  _UMCACS,
  _Us,
  _V,
  _VC,
  _Ve,
  _VFCE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccessToken = sim(n0, _AT, 0, 8);
export var AuthorizationCode = sim(n0, _AC, 0, 8);
export var JwtToken = sim(n0, _JT, 0, 8);
export var Password = sim(n0, _P, 0, 8);
export var RefreshToken = sim(n0, _RT, 0, 8);
export var UserManagedClientApplicationClientSecret = sim(n0, _UMCACS, 0, 8);
export var AllowedValue = struct(n0, _AV, 0, [_D, _V], [0, 0]);
export var AuthConfiguration = struct(
  n0,
  _ACut,
  0,
  [_ATu, _SA, _OAP, _BAP, _CAP],
  [() => Property, () => Property, () => PropertiesMap, () => PropertiesMap, () => PropertiesMap]
);
export var AuthenticationConfiguration = struct(n0, _ACuth, 0, [_ATu, _SA, _OAP], [0, 0, () => OAuth2Properties]);
export var AuthenticationConfigurationInput = struct(
  n0,
  _ACI,
  0,
  [_ATu, _OAP, _SA, _KKA, _BAC, _CAC],
  [0, [() => OAuth2PropertiesInput, 0], 0, 0, [() => BasicAuthenticationCredentials, 0], [() => CredentialMap, 0]]
);
export var AuthorizationCodeProperties = struct(n0, _ACP, 0, [_AC, _RU], [[() => AuthorizationCode, 0], 0]);
export var BasicAuthenticationCredentials = struct(n0, _BAC, 0, [_Us, _P], [0, [() => Password, 0]]);
export var Capabilities = struct(n0, _Ca, 0, [_SAT, _SDO, _SCE], [64 | 0, 64 | 0, 64 | 0]);
export var ComputeEnvironmentConfiguration = struct(
  n0,
  _CEC,
  0,
  [_N, _D, _CEom, _SAT, _COon, _CPNO, _CONO, _CPRO, _PCPR],
  [0, 0, 0, 64 | 0, () => PropertiesMap, 128 | 0, 128 | 0, 64 | 0, 2]
);
export var Connection = struct(
  n0,
  _Co,
  0,
  [_N, _D, _CTo, _MCa, _CPo, _SP, _AP, _PPy, _PCR, _CTre, _LUT, _LUB, _St, _SR, _LCVT, _ACuth, _CSV, _CCE],
  [
    0,
    0,
    0,
    64 | 0,
    128 | 0,
    128 | 0,
    128 | 0,
    128 | 0,
    () => PhysicalConnectionRequirements,
    4,
    4,
    0,
    0,
    0,
    4,
    () => AuthenticationConfiguration,
    1,
    64 | 0,
  ]
);
export var ConnectionInput = struct(
  n0,
  _CIon,
  0,
  [_N, _D, _CTo, _MCa, _CPo, _SP, _AP, _PPy, _PCR, _ACuth, _VC, _VFCE],
  [
    0,
    0,
    0,
    64 | 0,
    128 | 0,
    128 | 0,
    128 | 0,
    128 | 0,
    () => PhysicalConnectionRequirements,
    [() => AuthenticationConfigurationInput, 0],
    2,
    64 | 0,
  ]
);
export var ConnectionTypeBrief = struct(
  n0,
  _CTB,
  0,
  [_CTo, _DNi, _Ve, _D, _Cate, _Ca, _LUo, _CTV],
  [0, 0, 0, 0, 64 | 0, () => Capabilities, 0, () => ConnectionTypeVariantList]
);
export var ConnectionTypeVariant = struct(n0, _CTVo, 0, [_CTVN, _DNi, _D, _LUo], [0, 0, 0, 0]);
export var CreateConnectionRequest = struct(
  n0,
  _CCRreat,
  0,
  [_CI, _CIon, _Tag],
  [0, [() => ConnectionInput, 0], 128 | 0]
);
export var CreateConnectionResponse = struct(n0, _CCRreate, 0, [_CCS], [0]);
export var DescribeConnectionTypeRequest = struct(n0, _DCTR, 0, [_CTo], [0]);
export var DescribeConnectionTypeResponse = struct(
  n0,
  _DCTRe,
  0,
  [_CTo, _D, _Ca, _CPo, _COon, _ACuth, _CECo, _PCR, _ACPt, _PCP, _SCPp],
  [
    0,
    0,
    () => Capabilities,
    () => PropertiesMap,
    () => PropertiesMap,
    () => AuthConfiguration,
    () => ComputeEnvironmentConfigurationMap,
    () => PropertiesMap,
    () => PropertiesMap,
    () => PropertiesMap,
    () => PropertiesMap,
  ]
);
export var GetConnectionRequest = struct(n0, _GCReto, 0, [_CI, _N, _HP, _AOFCE], [0, 0, 2, 0]);
export var GetConnectionResponse = struct(n0, _GCReton, 0, [_Co], [() => Connection]);
export var GetConnectionsFilter = struct(n0, _GCF, 0, [_MCa, _CTo, _CSV], [64 | 0, 0, 1]);
export var GetConnectionsRequest = struct(
  n0,
  _GCRetonn,
  0,
  [_CI, _Fi, _HP, _NTe, _MRax],
  [0, () => GetConnectionsFilter, 2, 0, 1]
);
export var GetConnectionsResponse = struct(n0, _GCRetonne, 0, [_CLo, _NTe], [() => ConnectionList, 0]);
export var ListConnectionTypesRequest = struct(n0, _LCTR, 0, [_MRax, _NTe], [1, 0]);
export var ListConnectionTypesResponse = struct(n0, _LCTRi, 0, [_CTonn, _NTe], [() => ConnectionTypeList, 0]);
export var OAuth2ClientApplication = struct(n0, _OACA, 0, [_UMCACI, _AWSMCAR], [0, 0]);
export var OAuth2Credentials = struct(
  n0,
  _OAC,
  0,
  [_UMCACS, _AT, _RT, _JT],
  [
    [() => UserManagedClientApplicationClientSecret, 0],
    [() => AccessToken, 0],
    [() => RefreshToken, 0],
    [() => JwtToken, 0],
  ]
);
export var OAuth2Properties = struct(
  n0,
  _OAP,
  0,
  [_OAGT, _OACA, _TUo, _TUPM],
  [0, () => OAuth2ClientApplication, 0, 128 | 0]
);
export var OAuth2PropertiesInput = struct(
  n0,
  _OAPI,
  0,
  [_OAGT, _OACA, _TUo, _TUPM, _ACP, _OAC],
  [0, () => OAuth2ClientApplication, 0, 128 | 0, [() => AuthorizationCodeProperties, 0], [() => OAuth2Credentials, 0]]
);
export var PhysicalConnectionRequirements = struct(n0, _PCR, 0, [_SIu, _SGIL, _AZ], [0, 64 | 0, 0]);
export var Property = struct(
  n0,
  _Prop,
  0,
  [_N, _D, _Req, _DV, _PTr, _AVl, _DOS],
  [0, 0, 2, 0, 64 | 0, () => AllowedValues, 64 | 0]
);
export var UpdateConnectionRequest = struct(n0, _UCRpdat, 0, [_CI, _N, _CIon], [0, 0, [() => ConnectionInput, 0]]);
export var UpdateConnectionResponse = struct(n0, _UCRpdate, 0, [], []);
export var AllowedValues = list(n0, _AVl, 0, () => AllowedValue);
export var AuthenticationTypes = 64 | 0;

export var ComputeEnvironmentList = 64 | 0;

export var ComputeEnvironments = 64 | 0;

export var ConnectionList = list(n0, _CLo, 0, () => Connection);
export var ConnectionTypeList = list(n0, _CTLo, 0, () => ConnectionTypeBrief);
export var ConnectionTypeVariantList = list(n0, _CTVL, 0, () => ConnectionTypeVariant);
export var DataOperations = 64 | 0;

export var MatchCriteria = 64 | 0;

export var PropertyTypes = 64 | 0;

export var SecurityGroupIdList = 64 | 0;

export var ComputeEnvironmentConfigurationMap = map(n0, _CECM, 0, 0, () => ComputeEnvironmentConfiguration);
export var ConnectionProperties = 128 | 0;

export var CredentialMap = map(n0, _CMre, 8, 0, 0);
export var PropertiesMap = map(n0, _PM, 0, 0, () => Property);
export var PropertyMap = 128 | 0;

export var PropertyNameOverrides = 128 | 0;

export var TokenUrlParametersMap = 128 | 0;

export var CreateConnection = op(
  n0,
  _CCrea,
  0,
  () => CreateConnectionRequest,
  () => CreateConnectionResponse
);
export var DescribeConnectionType = op(
  n0,
  _DCT,
  0,
  () => DescribeConnectionTypeRequest,
  () => DescribeConnectionTypeResponse
);
export var GetConnection = op(
  n0,
  _GCeto,
  0,
  () => GetConnectionRequest,
  () => GetConnectionResponse
);
export var GetConnections = op(
  n0,
  _GCeton,
  0,
  () => GetConnectionsRequest,
  () => GetConnectionsResponse
);
export var ListConnectionTypes = op(
  n0,
  _LCT,
  0,
  () => ListConnectionTypesRequest,
  () => ListConnectionTypesResponse
);
export var UpdateConnection = op(
  n0,
  _UCpd,
  0,
  () => UpdateConnectionRequest,
  () => UpdateConnectionResponse
);
