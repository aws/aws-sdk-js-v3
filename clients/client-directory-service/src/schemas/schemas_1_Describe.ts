// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _ASD,
  _ASDR,
  _ASDRc,
  _CASI,
  _CASIl,
  _CDT,
  _CEPS,
  _CEPSR,
  _DCAEP,
  _DCAEPR,
  _DCAEPRe,
  _DCAS,
  _DCASR,
  _DCASRe,
  _DHADU,
  _DHADUR,
  _DHADURe,
  _DI,
  _DIn,
  _DLDAPSS,
  _DLDAPSSR,
  _DLDAPSSRe,
  _DNODC,
  _DR,
  _DRR,
  _DRRe,
  _DUD,
  _DUDR,
  _DUDRe,
  _HAA,
  _HUA,
  _HUIE,
  _HUIEy,
  _HUV,
  _IB,
  _II,
  _L,
  _LDAPSS,
  _LDAPSSI,
  _LDAPSSIe,
  _LDAPSSR,
  _LT,
  _LUDTa,
  _NT,
  _NV,
  _OAI,
  _ODI,
  _OSUS,
  _PCA,
  _PV,
  _R,
  _RD,
  _RDe,
  _RN,
  _RTe,
  _S,
  _SAI,
  _SD,
  _SDI,
  _SLUDTt,
  _SM,
  _SMI,
  _SNh,
  _SR,
  _SS,
  _ST,
  _Ty,
  _UA,
  _UIE,
  _UT,
  _UV,
  _VS,
  n0,
} from "./schemas_0";
import { DirectoryVpcSettings } from "./schemas_6_Describe";
import { Notes } from "./schemas_25_Directories";
import { OSUpdateSettings } from "./schemas_45_Describe";

/* eslint no-var: 0 */

export var AcceptSharedDirectoryRequest = struct(n0, _ASDR, 0, [_SDI], [0]);
export var AcceptSharedDirectoryResult = struct(n0, _ASDRc, 0, [_SD], [[() => SharedDirectory, 0]]);
export var ClientAuthenticationSettingInfo = struct(n0, _CASI, 0, [_Ty, _S, _LUDTa], [0, 0, 4]);
export var DescribeCAEnrollmentPolicyRequest = struct(n0, _DCAEPR, 0, [_DI], [0]);
export var DescribeCAEnrollmentPolicyResult = struct(
  n0,
  _DCAEPRe,
  0,
  [_DI, _PCA, _CEPS, _LUDTa, _CEPSR],
  [0, 0, 0, 4, 0]
);
export var DescribeClientAuthenticationSettingsRequest = struct(n0, _DCASR, 0, [_DI, _Ty, _NT, _L], [0, 0, 0, 1]);
export var DescribeClientAuthenticationSettingsResult = struct(
  n0,
  _DCASRe,
  0,
  [_CASIl, _NT],
  [() => ClientAuthenticationSettingsInfo, 0]
);
export var DescribeHybridADUpdateRequest = struct(n0, _DHADUR, 0, [_DI, _UT, _NT], [0, 0, 0]);
export var DescribeHybridADUpdateResult = struct(n0, _DHADURe, 0, [_UA, _NT], [() => HybridUpdateActivities, 0]);
export var DescribeLDAPSSettingsRequest = struct(n0, _DLDAPSSR, 0, [_DI, _Ty, _NT, _L], [0, 0, 0, 1]);
export var DescribeLDAPSSettingsResult = struct(n0, _DLDAPSSRe, 0, [_LDAPSSI, _NT], [() => LDAPSSettingsInfo, 0]);
export var DescribeRegionsRequest = struct(n0, _DRR, 0, [_DI, _RN, _NT], [0, 0, 0]);
export var DescribeRegionsResult = struct(n0, _DRRe, 0, [_RD, _NT], [() => RegionsDescription, 0]);
export var DescribeUpdateDirectoryRequest = struct(n0, _DUDR, 0, [_DI, _UT, _RN, _NT], [0, 0, 0, 0]);
export var DescribeUpdateDirectoryResult = struct(n0, _DUDRe, 0, [_UA, _NT], [() => UpdateActivities, 0]);
export var HybridUpdateActivities = struct(
  n0,
  _HUA,
  0,
  [_SMI, _HAA],
  [() => HybridUpdateInfoEntries, () => HybridUpdateInfoEntries]
);
export var HybridUpdateInfoEntry = struct(
  n0,
  _HUIE,
  0,
  [_S, _SR, _IB, _NV, _PV, _ST, _LUDTa, _AI],
  [0, 0, 0, () => HybridUpdateValue, () => HybridUpdateValue, 4, 4, 0]
);
export var HybridUpdateValue = struct(n0, _HUV, 0, [_II, _DIn], [64 | 0, 64 | 0]);
export var LDAPSSettingInfo = struct(n0, _LDAPSSIe, 0, [_LDAPSS, _LDAPSSR, _LUDTa], [0, 0, 4]);
export var RegionDescription = struct(
  n0,
  _RDe,
  0,
  [_DI, _RN, _RTe, _S, _VS, _DNODC, _LT, _SLUDTt, _LUDTa],
  [0, 0, 0, 0, () => DirectoryVpcSettings, 1, 4, 4, 4]
);
export var SharedDirectory = struct(
  n0,
  _SD,
  0,
  [_OAI, _ODI, _SM, _SAI, _SDI, _SS, _SNh, _CDT, _LUDTa],
  [0, 0, 0, 0, 0, 0, [() => Notes, 0], 4, 4]
);
export var UpdateInfoEntry = struct(
  n0,
  _UIE,
  0,
  [_R, _S, _SR, _IB, _NV, _PV, _ST, _LUDTa],
  [0, 0, 0, 0, () => UpdateValue, () => UpdateValue, 4, 4]
);
export var UpdateValue = struct(n0, _UV, 0, [_OSUS], [() => OSUpdateSettings]);
export var ClientAuthenticationSettingsInfo = list(n0, _CASIl, 0, () => ClientAuthenticationSettingInfo);
export var HybridUpdateInfoEntries = list(n0, _HUIEy, 0, () => HybridUpdateInfoEntry);
export var LDAPSSettingsInfo = list(n0, _LDAPSSI, 0, () => LDAPSSettingInfo);
export var RegionsDescription = list(n0, _RD, 0, () => RegionDescription);
export var UpdateActivities = list(n0, _UA, 0, () => UpdateInfoEntry);
export var AcceptSharedDirectory = op(
  n0,
  _ASD,
  0,
  () => AcceptSharedDirectoryRequest,
  () => AcceptSharedDirectoryResult
);
export var DescribeCAEnrollmentPolicy = op(
  n0,
  _DCAEP,
  0,
  () => DescribeCAEnrollmentPolicyRequest,
  () => DescribeCAEnrollmentPolicyResult
);
export var DescribeClientAuthenticationSettings = op(
  n0,
  _DCAS,
  0,
  () => DescribeClientAuthenticationSettingsRequest,
  () => DescribeClientAuthenticationSettingsResult
);
export var DescribeHybridADUpdate = op(
  n0,
  _DHADU,
  0,
  () => DescribeHybridADUpdateRequest,
  () => DescribeHybridADUpdateResult
);
export var DescribeLDAPSSettings = op(
  n0,
  _DLDAPSS,
  0,
  () => DescribeLDAPSSettingsRequest,
  () => DescribeLDAPSSettingsResult
);
export var DescribeRegions = op(
  n0,
  _DR,
  0,
  () => DescribeRegionsRequest,
  () => DescribeRegionsResult
);
export var DescribeUpdateDirectory = op(
  n0,
  _DUD,
  0,
  () => DescribeUpdateDirectoryRequest,
  () => DescribeUpdateDirectoryResult
);
