// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _AADD,
  _AAE,
  _AL,
  _ALd,
  _ALL,
  _AO,
  _AOS,
  _APc,
  _APS,
  _ARN,
  _ASO,
  _ASOI,
  _ASOS,
  _ASSH,
  _ATMS,
  _ATMSL,
  _ATO,
  _ATOI,
  _ATOO,
  _ATOS,
  _ATS,
  _AV,
  _AZC,
  _C,
  _CCS,
  _CD,
  _CECA,
  _CED,
  _CEDR,
  _CEDRr,
  _CEE,
  _CEFR,
  _CEu,
  _CEV,
  _CEVL,
  _CI,
  _CO,
  _COS,
  _CPD,
  _CSO,
  _CVM,
  _CWLLGA,
  _D,
  _DC,
  _DED,
  _DEDC,
  _DEDCR,
  _DEDCRe,
  _DEDe,
  _DEDes,
  _DEDR,
  _DEDRe,
  _DEDRes,
  _DEDResc,
  _DEDRescr,
  _DEDRescri,
  _DEITL,
  _DEITLR,
  _DEITLRe,
  _Del,
  _DEO,
  _DEOS,
  _DIom,
  _DMC,
  _DME,
  _DMT,
  _DN,
  _dN,
  _DNo,
  _DPSo,
  _DR,
  _DRR,
  _DS,
  _DSL,
  _DSo,
  _DT,
  _E,
  _EARO,
  _EAROS,
  _EBSE,
  _EBSO,
  _EBSOS,
  _ECC,
  _ECCS,
  _EDC,
  _EDS,
  _EDSL,
  _EHTTPS,
  _EI,
  _EIT,
  _EM,
  _En,
  _End,
  _EV,
  _EVl,
  _EVS,
  _GCEV,
  _GCEVR,
  _GCEVRe,
  _h,
  _hQ,
  _I,
  _IB,
  _IC,
  _ICL,
  _Id,
  _IL,
  _IPI,
  _IT,
  _IUDE,
  _KKI,
  _L,
  _LBR,
  _LEIT,
  _LEITR,
  _LEITRi,
  _LEV,
  _LEVR,
  _LEVRi,
  _LN,
  _LPO,
  _LPOo,
  _LPOS,
  _LUT,
  _LV,
  _M,
  _MBR,
  _MC,
  _MIC,
  _MICa,
  _MP,
  _MPL,
  _MR,
  _mR,
  _MS,
  _MUARN,
  _MUN,
  _MUO,
  _MUP,
  _N,
  _NT,
  _nT,
  _NTNEO,
  _NTNEOS,
  _O,
  _OS,
  _P,
  _PCO,
  _PD,
  _Pro,
  _PVe,
  _RA,
  _RK,
  _ROD,
  _S,
  _SA,
  _SAMLI,
  _SAMLO,
  _SAMLOI,
  _SAMLOO,
  _SKu,
  _SO,
  _SOS,
  _SSO,
  _SSTN,
  _ST,
  _St,
  _STL,
  _STLL,
  _STLt,
  _STLto,
  _STM,
  _STN,
  _STt,
  _STto,
  _SV,
  _T,
  _TL,
  _TLSSP,
  _TV,
  _TVa,
  _U,
  _UD,
  _UED,
  _UEDC,
  _UEDCR,
  _UEDCRp,
  _UEDR,
  _UEDRp,
  _Un,
  _UP,
  _UPI,
  _UV,
  _V,
  _VPCDIS,
  _VPCO,
  _VS,
  _VT,
  _VTa,
  _WC,
  _WE,
  _WT,
  _ZAC,
  _ZAE,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_1_Elasticsearch";
import { VPCDerivedInfo, VPCOptions } from "./schemas_4_Domain";
import { ServiceSoftwareOptions } from "./schemas_18_Elasticsearch";

/* eslint no-var: 0 */

export var Password = sim(n0, _P, 0, 8);
export var Username = sim(n0, _U, 0, 8);
export var AccessPoliciesStatus = struct(n0, _APS, 0, [_O, _S], [0, () => OptionStatus]);
export var AdditionalLimit = struct(n0, _AL, 0, [_LN, _LV], [0, 64 | 0]);
export var AdvancedOptionsStatus = struct(n0, _AOS, 0, [_O, _S], [128 | 0, () => OptionStatus]);
export var AdvancedSecurityOptions = struct(
  n0,
  _ASO,
  0,
  [_E, _IUDE, _SAMLO, _AADD, _AAE],
  [2, 2, () => SAMLOptionsOutput, 4, 2]
);
export var AdvancedSecurityOptionsInput = struct(
  n0,
  _ASOI,
  0,
  [_E, _IUDE, _MUO, _SAMLO, _AAE],
  [2, 2, [() => MasterUserOptions, 0], [() => SAMLOptionsInput, 0], 2]
);
export var AdvancedSecurityOptionsStatus = struct(
  n0,
  _ASOS,
  0,
  [_O, _S],
  [() => AdvancedSecurityOptions, () => OptionStatus]
);
export var AutoTuneMaintenanceSchedule = struct(n0, _ATMS, 0, [_SA, _D, _CEFR], [4, () => Duration, 0]);
export var AutoTuneOptions = struct(n0, _ATO, 0, [_DS, _ROD, _MS], [0, 0, () => AutoTuneMaintenanceScheduleList]);
export var AutoTuneOptionsInput = struct(n0, _ATOI, 0, [_DS, _MS], [0, () => AutoTuneMaintenanceScheduleList]);
export var AutoTuneOptionsOutput = struct(n0, _ATOO, 0, [_St, _EM], [0, 0]);
export var AutoTuneOptionsStatus = struct(n0, _ATOS, 0, [_O, _S], [() => AutoTuneOptions, () => AutoTuneStatus]);
export var AutoTuneStatus = struct(n0, _ATS, 0, [_CD, _UD, _UV, _St, _EM, _PD], [4, 4, 1, 0, 0, 2]);
export var ChangeProgressDetails = struct(n0, _CPD, 0, [_CI, _M, _CCS, _ST, _LUT, _IB], [0, 0, 0, 4, 4, 0]);
export var CognitoOptions = struct(n0, _CO, 0, [_E, _UPI, _IPI, _RA], [2, 0, 0, 0]);
export var CognitoOptionsStatus = struct(n0, _COS, 0, [_O, _S], [() => CognitoOptions, () => OptionStatus]);
export var ColdStorageOptions = struct(n0, _CSO, 0, [_E], [2]);
export var CompatibleVersionsMap = struct(n0, _CVM, 0, [_SV, _TV], [0, 64 | 0]);
export var CreateElasticsearchDomainRequest = struct(
  n0,
  _CEDR,
  0,
  [_DN, _EV, _ECC, _EBSO, _APc, _SO, _VPCO, _CO, _EARO, _NTNEO, _AO, _LPO, _DEO, _ASO, _ATO, _TL],
  [
    0,
    0,
    () => ElasticsearchClusterConfig,
    () => EBSOptions,
    0,
    () => SnapshotOptions,
    () => VPCOptions,
    () => CognitoOptions,
    () => EncryptionAtRestOptions,
    () => NodeToNodeEncryptionOptions,
    128 | 0,
    () => LogPublishingOptions,
    () => DomainEndpointOptions,
    [() => AdvancedSecurityOptionsInput, 0],
    () => AutoTuneOptionsInput,
    () => TagList,
  ]
);
export var CreateElasticsearchDomainResponse = struct(n0, _CEDRr, 0, [_DSo], [() => ElasticsearchDomainStatus]);
export var DeleteElasticsearchDomainRequest = struct(n0, _DEDR, 0, [_DN], [[0, 1]]);
export var DeleteElasticsearchDomainResponse = struct(n0, _DEDRe, 0, [_DSo], [() => ElasticsearchDomainStatus]);
export var DescribeElasticsearchDomainConfigRequest = struct(n0, _DEDCR, 0, [_DN], [[0, 1]]);
export var DescribeElasticsearchDomainConfigResponse = struct(n0, _DEDCRe, 0, [_DC], [() => ElasticsearchDomainConfig]);
export var DescribeElasticsearchDomainRequest = struct(n0, _DEDRes, 0, [_DN], [[0, 1]]);
export var DescribeElasticsearchDomainResponse = struct(n0, _DEDResc, 0, [_DSo], [() => ElasticsearchDomainStatus]);
export var DescribeElasticsearchDomainsRequest = struct(n0, _DEDRescr, 0, [_DNo], [64 | 0]);
export var DescribeElasticsearchDomainsResponse = struct(
  n0,
  _DEDRescri,
  0,
  [_DSL],
  [() => ElasticsearchDomainStatusList]
);
export var DescribeElasticsearchInstanceTypeLimitsRequest = struct(
  n0,
  _DEITLR,
  0,
  [_DN, _IT, _EV],
  [
    [
      0,
      {
        [_hQ]: _dN,
      },
    ],
    [0, 1],
    [0, 1],
  ]
);
export var DescribeElasticsearchInstanceTypeLimitsResponse = struct(n0, _DEITLRe, 0, [_LBR], [() => LimitsByRole]);
export var DomainEndpointOptions = struct(n0, _DEO, 0, [_EHTTPS, _TLSSP, _CEE, _CEu, _CECA], [2, 0, 2, 0, 0]);
export var DomainEndpointOptionsStatus = struct(
  n0,
  _DEOS,
  0,
  [_O, _S],
  [() => DomainEndpointOptions, () => OptionStatus]
);
export var DryRunResults = struct(n0, _DRR, 0, [_DT, _M], [0, 0]);
export var Duration = struct(n0, _D, 0, [_V, _Un], [1, 0]);
export var EBSOptions = struct(n0, _EBSO, 0, [_EBSE, _VT, _VS, _I, _T], [2, 0, 1, 1, 1]);
export var EBSOptionsStatus = struct(n0, _EBSOS, 0, [_O, _S], [() => EBSOptions, () => OptionStatus]);
export var ElasticsearchClusterConfig = struct(
  n0,
  _ECC,
  0,
  [_IT, _IC, _DME, _ZAE, _ZAC, _DMT, _DMC, _WE, _WT, _WC, _CSO],
  [0, 1, 2, 2, () => ZoneAwarenessConfig, 0, 1, 2, 0, 1, () => ColdStorageOptions]
);
export var ElasticsearchClusterConfigStatus = struct(
  n0,
  _ECCS,
  0,
  [_O, _S],
  [() => ElasticsearchClusterConfig, () => OptionStatus]
);
export var ElasticsearchDomainConfig = struct(
  n0,
  _EDC,
  0,
  [_EV, _ECC, _EBSO, _APc, _SO, _VPCO, _CO, _EARO, _NTNEO, _AO, _LPO, _DEO, _ASO, _ATO, _CPD, _MP],
  [
    () => ElasticsearchVersionStatus,
    () => ElasticsearchClusterConfigStatus,
    () => EBSOptionsStatus,
    () => AccessPoliciesStatus,
    () => SnapshotOptionsStatus,
    () => VPCDerivedInfoStatus,
    () => CognitoOptionsStatus,
    () => EncryptionAtRestOptionsStatus,
    () => NodeToNodeEncryptionOptionsStatus,
    () => AdvancedOptionsStatus,
    () => LogPublishingOptionsStatus,
    () => DomainEndpointOptionsStatus,
    () => AdvancedSecurityOptionsStatus,
    () => AutoTuneOptionsStatus,
    () => ChangeProgressDetails,
    () => ModifyingPropertiesList,
  ]
);
export var ElasticsearchDomainStatus = struct(
  n0,
  _EDS,
  0,
  [
    _DIom,
    _DN,
    _ARN,
    _C,
    _Del,
    _En,
    _End,
    _Pro,
    _UP,
    _EV,
    _ECC,
    _EBSO,
    _APc,
    _SO,
    _VPCO,
    _CO,
    _EARO,
    _NTNEO,
    _AO,
    _LPO,
    _SSO,
    _DEO,
    _ASO,
    _ATO,
    _CPD,
    _DPSo,
    _MP,
  ],
  [
    0,
    0,
    0,
    2,
    2,
    0,
    128 | 0,
    2,
    2,
    0,
    () => ElasticsearchClusterConfig,
    () => EBSOptions,
    0,
    () => SnapshotOptions,
    () => VPCDerivedInfo,
    () => CognitoOptions,
    () => EncryptionAtRestOptions,
    () => NodeToNodeEncryptionOptions,
    128 | 0,
    () => LogPublishingOptions,
    () => ServiceSoftwareOptions,
    () => DomainEndpointOptions,
    () => AdvancedSecurityOptions,
    () => AutoTuneOptionsOutput,
    () => ChangeProgressDetails,
    0,
    () => ModifyingPropertiesList,
  ]
);
export var ElasticsearchVersionStatus = struct(n0, _EVS, 0, [_O, _S], [0, () => OptionStatus]);
export var EncryptionAtRestOptions = struct(n0, _EARO, 0, [_E, _KKI], [2, 0]);
export var EncryptionAtRestOptionsStatus = struct(
  n0,
  _EAROS,
  0,
  [_O, _S],
  [() => EncryptionAtRestOptions, () => OptionStatus]
);
export var GetCompatibleElasticsearchVersionsRequest = struct(
  n0,
  _GCEVR,
  0,
  [_DN],
  [
    [
      0,
      {
        [_hQ]: _dN,
      },
    ],
  ]
);
export var GetCompatibleElasticsearchVersionsResponse = struct(
  n0,
  _GCEVRe,
  0,
  [_CEV],
  [() => CompatibleElasticsearchVersionsList]
);
export var InstanceCountLimits = struct(n0, _ICL, 0, [_MIC, _MICa], [1, 1]);
export var InstanceLimits = struct(n0, _IL, 0, [_ICL], [() => InstanceCountLimits]);
export var Limits = struct(
  n0,
  _L,
  0,
  [_STt, _IL, _ALd],
  [() => StorageTypeList, () => InstanceLimits, () => AdditionalLimitList]
);
export var ListElasticsearchInstanceTypesRequest = struct(
  n0,
  _LEITR,
  0,
  [_EV, _DN, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dN,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListElasticsearchInstanceTypesResponse = struct(n0, _LEITRi, 0, [_EIT, _NT], [64 | 0, 0]);
export var ListElasticsearchVersionsRequest = struct(
  n0,
  _LEVR,
  0,
  [_MR, _NT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListElasticsearchVersionsResponse = struct(n0, _LEVRi, 0, [_EVl, _NT], [64 | 0, 0]);
export var LogPublishingOption = struct(n0, _LPOo, 0, [_CWLLGA, _E], [0, 2]);
export var LogPublishingOptionsStatus = struct(
  n0,
  _LPOS,
  0,
  [_O, _S],
  [() => LogPublishingOptions, () => OptionStatus]
);
export var MasterUserOptions = struct(n0, _MUO, 0, [_MUARN, _MUN, _MUP], [0, [() => Username, 0], [() => Password, 0]]);
export var ModifyingProperties = struct(n0, _MP, 0, [_N, _AV, _PVe, _VTa], [0, 0, 0, 0]);
export var NodeToNodeEncryptionOptions = struct(n0, _NTNEO, 0, [_E], [2]);
export var NodeToNodeEncryptionOptionsStatus = struct(
  n0,
  _NTNEOS,
  0,
  [_O, _S],
  [() => NodeToNodeEncryptionOptions, () => OptionStatus]
);
export var OptionStatus = struct(n0, _OS, 0, [_CD, _UD, _UV, _St, _PD], [4, 4, 1, 0, 2]);
export var SAMLIdp = struct(n0, _SAMLI, 0, [_MC, _EI], [0, 0]);
export var SAMLOptionsInput = struct(
  n0,
  _SAMLOI,
  0,
  [_E, _Id, _MUN, _MBR, _SKu, _RK, _STM],
  [2, () => SAMLIdp, [() => Username, 0], 0, 0, 0, 1]
);
export var SAMLOptionsOutput = struct(n0, _SAMLOO, 0, [_E, _Id, _SKu, _RK, _STM], [2, () => SAMLIdp, 0, 0, 1]);
export var SnapshotOptions = struct(n0, _SO, 0, [_ASSH], [1]);
export var SnapshotOptionsStatus = struct(n0, _SOS, 0, [_O, _S], [() => SnapshotOptions, () => OptionStatus]);
export var StorageType = struct(n0, _STto, 0, [_STN, _SSTN, _STL], [0, 0, () => StorageTypeLimitList]);
export var StorageTypeLimit = struct(n0, _STLt, 0, [_LN, _LV], [0, 64 | 0]);
export var UpdateElasticsearchDomainConfigRequest = struct(
  n0,
  _UEDCR,
  0,
  [_DN, _ECC, _EBSO, _SO, _VPCO, _CO, _AO, _APc, _LPO, _DEO, _ASO, _NTNEO, _EARO, _ATO, _DR],
  [
    [0, 1],
    () => ElasticsearchClusterConfig,
    () => EBSOptions,
    () => SnapshotOptions,
    () => VPCOptions,
    () => CognitoOptions,
    128 | 0,
    0,
    () => LogPublishingOptions,
    () => DomainEndpointOptions,
    [() => AdvancedSecurityOptionsInput, 0],
    () => NodeToNodeEncryptionOptions,
    () => EncryptionAtRestOptions,
    () => AutoTuneOptions,
    2,
  ]
);
export var UpdateElasticsearchDomainConfigResponse = struct(
  n0,
  _UEDCRp,
  0,
  [_DC, _DRR],
  [() => ElasticsearchDomainConfig, () => DryRunResults]
);
export var UpgradeElasticsearchDomainRequest = struct(n0, _UEDR, 0, [_DN, _TVa, _PCO], [0, 0, 2]);
export var UpgradeElasticsearchDomainResponse = struct(
  n0,
  _UEDRp,
  0,
  [_DN, _TVa, _PCO, _CPD],
  [0, 0, 2, () => ChangeProgressDetails]
);
export var VPCDerivedInfoStatus = struct(n0, _VPCDIS, 0, [_O, _S], [() => VPCDerivedInfo, () => OptionStatus]);
export var ZoneAwarenessConfig = struct(n0, _ZAC, 0, [_AZC], [1]);
export var AdditionalLimitList = list(n0, _ALL, 0, () => AdditionalLimit);
export var AutoTuneMaintenanceScheduleList = list(n0, _ATMSL, 0, () => AutoTuneMaintenanceSchedule);
export var CompatibleElasticsearchVersionsList = list(n0, _CEVL, 0, () => CompatibleVersionsMap);
export var DomainNameList = 64 | 0;

export var ElasticsearchDomainStatusList = list(n0, _EDSL, 0, () => ElasticsearchDomainStatus);
export var ElasticsearchInstanceTypeList = 64 | 0;

export var ElasticsearchVersionList = 64 | 0;

export var LimitValueList = 64 | 0;

export var ModifyingPropertiesList = list(n0, _MPL, 0, () => ModifyingProperties);
export var StorageTypeLimitList = list(n0, _STLL, 0, () => StorageTypeLimit);
export var StorageTypeList = list(n0, _STLto, 0, () => StorageType);
export var AdvancedOptions = 128 | 0;

export var EndpointsMap = 128 | 0;

export var LimitsByRole = map(n0, _LBR, 0, 0, () => Limits);
export var LogPublishingOptions = map(n0, _LPO, 0, 0, () => LogPublishingOption);
export var CreateElasticsearchDomain = op(
  n0,
  _CED,
  {
    [_h]: ["POST", "/2015-01-01/es/domain", 200],
  },
  () => CreateElasticsearchDomainRequest,
  () => CreateElasticsearchDomainResponse
);
export var DeleteElasticsearchDomain = op(
  n0,
  _DED,
  {
    [_h]: ["DELETE", "/2015-01-01/es/domain/{DomainName}", 200],
  },
  () => DeleteElasticsearchDomainRequest,
  () => DeleteElasticsearchDomainResponse
);
export var DescribeElasticsearchDomain = op(
  n0,
  _DEDe,
  {
    [_h]: ["GET", "/2015-01-01/es/domain/{DomainName}", 200],
  },
  () => DescribeElasticsearchDomainRequest,
  () => DescribeElasticsearchDomainResponse
);
export var DescribeElasticsearchDomainConfig = op(
  n0,
  _DEDC,
  {
    [_h]: ["GET", "/2015-01-01/es/domain/{DomainName}/config", 200],
  },
  () => DescribeElasticsearchDomainConfigRequest,
  () => DescribeElasticsearchDomainConfigResponse
);
export var DescribeElasticsearchDomains = op(
  n0,
  _DEDes,
  {
    [_h]: ["POST", "/2015-01-01/es/domain-info", 200],
  },
  () => DescribeElasticsearchDomainsRequest,
  () => DescribeElasticsearchDomainsResponse
);
export var DescribeElasticsearchInstanceTypeLimits = op(
  n0,
  _DEITL,
  {
    [_h]: ["GET", "/2015-01-01/es/instanceTypeLimits/{ElasticsearchVersion}/{InstanceType}", 200],
  },
  () => DescribeElasticsearchInstanceTypeLimitsRequest,
  () => DescribeElasticsearchInstanceTypeLimitsResponse
);
export var GetCompatibleElasticsearchVersions = op(
  n0,
  _GCEV,
  {
    [_h]: ["GET", "/2015-01-01/es/compatibleVersions", 200],
  },
  () => GetCompatibleElasticsearchVersionsRequest,
  () => GetCompatibleElasticsearchVersionsResponse
);
export var ListElasticsearchInstanceTypes = op(
  n0,
  _LEIT,
  {
    [_h]: ["GET", "/2015-01-01/es/instanceTypes/{ElasticsearchVersion}", 200],
  },
  () => ListElasticsearchInstanceTypesRequest,
  () => ListElasticsearchInstanceTypesResponse
);
export var ListElasticsearchVersions = op(
  n0,
  _LEV,
  {
    [_h]: ["GET", "/2015-01-01/es/versions", 200],
  },
  () => ListElasticsearchVersionsRequest,
  () => ListElasticsearchVersionsResponse
);
export var UpdateElasticsearchDomainConfig = op(
  n0,
  _UEDC,
  {
    [_h]: ["POST", "/2015-01-01/es/domain/{DomainName}/config", 200],
  },
  () => UpdateElasticsearchDomainConfigRequest,
  () => UpdateElasticsearchDomainConfigResponse
);
export var UpgradeElasticsearchDomain = op(
  n0,
  _UED,
  {
    [_h]: ["POST", "/2015-01-01/es/upgradeDomain", 200],
  },
  () => UpgradeElasticsearchDomainRequest,
  () => UpgradeElasticsearchDomainResponse
);
