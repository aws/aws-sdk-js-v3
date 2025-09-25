// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _AADD,
  _AAE,
  _AIMLO,
  _AIMLOI,
  _AIMLOO,
  _AIMLOS,
  _ALUL,
  _AO,
  _AOS,
  _APC,
  _APc,
  _APP,
  _APS,
  _APV,
  _ARN,
  _ASO,
  _ASOI,
  _ASOS,
  _ASSH,
  _ASUE,
  _ATMS,
  _ATMSL,
  _ATO,
  _ATOI,
  _ATOO,
  _ATOS,
  _ATS,
  _AV,
  _AZC,
  _CAr,
  _CC,
  _CCSl,
  _CD,
  _CDR,
  _CDr,
  _CDRr,
  _CECA,
  _CEE,
  _CEFR,
  _CEu,
  _CMo,
  _CO,
  _Cod,
  _COS,
  _Cou,
  _CPD,
  _CPR,
  _CPr,
  _CPRr,
  _Cr,
  _CSO,
  _CSu,
  _CWLLGA,
  _DC,
  _DD,
  _DDC,
  _DDCR,
  _DDCRe,
  _DDe,
  _DDes,
  _DDR,
  _DDRe,
  _DDRes,
  _DDResc,
  _DDRescr,
  _DDRescri,
  _DDRP,
  _DDRPR,
  _DDRPRe,
  _De,
  _DEO,
  _DEOS,
  _DEVHZI,
  _DIo,
  _DMC,
  _DME,
  _DMT,
  _DN,
  _DNo,
  _DP,
  _DPe,
  _DPF,
  _DPFL,
  _DPR,
  _DPRe,
  _DPRes,
  _DPResc,
  _DPSo,
  _DR,
  _DRC,
  _DRI,
  _dRI,
  _DRM,
  _DRPS,
  _DRR,
  _DRS,
  _DS,
  _DSL,
  _DSo,
  _DT,
  _Du,
  _E,
  _EAPIA,
  _EARO,
  _EAROS,
  _EBSE,
  _EBSO,
  _EBSOS,
  _ED,
  _EE,
  _EHTTPS,
  _EInt,
  _EM,
  _En,
  _End,
  _EV,
  _EVn,
  _F,
  _H,
  _h,
  _hQ,
  _I,
  _IAMFO,
  _IAMFOI,
  _IAMFOO,
  _IC,
  _ICAARN,
  _ICIARN,
  _ICO,
  _ICOI,
  _ICOS,
  _Id,
  _IPAT,
  _IPATS,
  _IPI,
  _ISI,
  _IT,
  _IUDE,
  _JWTO,
  _JWTOI,
  _JWTOO,
  _KKI,
  _KKIm,
  _LDRC,
  _lDRC,
  _LPO,
  _LPOo,
  _LPOS,
  _LUA,
  _M,
  _MAZWSE,
  _MBR,
  _MC,
  _Mi,
  _MP,
  _MPL,
  _MR,
  _MS,
  _MUARN,
  _MUN,
  _MUO,
  _MUP,
  _N,
  _NC,
  _NLQGO,
  _NLQGOI,
  _NLQGOO,
  _NO,
  _NOL,
  _NOo,
  _NT,
  _NTNEO,
  _NTNEOS,
  _NTo,
  _O,
  _OPW,
  _OPWO,
  _OPWOS,
  _OS,
  _P,
  _PC,
  _PD,
  _PDa,
  _PDac,
  _PDL,
  _PEO,
  _PID,
  _PK,
  _PNa,
  _PO,
  _Pro,
  _PS,
  _PSa,
  _PTa,
  _PVe,
  _PVO,
  _RA,
  _RK,
  _ROD,
  _S,
  _SA,
  _SAMLI,
  _SAMLO,
  _SAMLOI,
  _SAMLOO,
  _SBN,
  _SK,
  _SKe,
  _SO,
  _SOS,
  _SSO,
  _St,
  _STM,
  _SUO,
  _SUOS,
  _SVE,
  _T,
  _TL,
  _TLSSP,
  _Ty,
  _U,
  _UD,
  _UDC,
  _UDCR,
  _UDCRp,
  _Un,
  _UOPW,
  _UP,
  _UPI,
  _UPp,
  _UPR,
  _UPRp,
  _UV,
  _V,
  _VEe,
  _VF,
  _VFa,
  _VPCDIS,
  _VPCO,
  _VS,
  _VSe,
  _VT,
  _VTa,
  _WC,
  _WE,
  _WST,
  _WT,
  _ZAC,
  _ZAE,
  n0,
} from "./schemas_0";
import { ErrorDetails, PackageConfiguration, PluginProperties } from "./schemas_2_Package";
import { VPCDerivedInfo, VPCOptions } from "./schemas_4_Domain";
import { TagList } from "./schemas_12_Add";
import { ServiceSoftwareOptions } from "./schemas_27_Domain";
import { ChangeProgressDetails } from "./schemas_30_Domain";

/* eslint no-var: 0 */

export var Password = sim(n0, _P, 0, 8);
export var Username = sim(n0, _U, 0, 8);
export var AccessPoliciesStatus = struct(n0, _APS, 0, [_O, _S], [0, () => OptionStatus]);
export var AdvancedOptionsStatus = struct(n0, _AOS, 0, [_O, _S], [128 | 0, () => OptionStatus]);
export var AdvancedSecurityOptions = struct(
  n0,
  _ASO,
  0,
  [_E, _IUDE, _SAMLO, _JWTO, _IAMFO, _AADD, _AAE],
  [2, 2, () => SAMLOptionsOutput, () => JWTOptionsOutput, () => IAMFederationOptionsOutput, 4, 2]
);
export var AdvancedSecurityOptionsInput = struct(
  n0,
  _ASOI,
  0,
  [_E, _IUDE, _MUO, _SAMLO, _JWTO, _IAMFO, _AAE],
  [
    2,
    2,
    [() => MasterUserOptions, 0],
    [() => SAMLOptionsInput, 0],
    () => JWTOptionsInput,
    () => IAMFederationOptionsInput,
    2,
  ]
);
export var AdvancedSecurityOptionsStatus = struct(
  n0,
  _ASOS,
  0,
  [_O, _S],
  [() => AdvancedSecurityOptions, () => OptionStatus]
);
export var AIMLOptionsInput = struct(
  n0,
  _AIMLOI,
  0,
  [_NLQGO, _SVE],
  [() => NaturalLanguageQueryGenerationOptionsInput, () => S3VectorsEngine]
);
export var AIMLOptionsOutput = struct(
  n0,
  _AIMLOO,
  0,
  [_NLQGO, _SVE],
  [() => NaturalLanguageQueryGenerationOptionsOutput, () => S3VectorsEngine]
);
export var AIMLOptionsStatus = struct(n0, _AIMLOS, 0, [_O, _S], [() => AIMLOptionsOutput, () => OptionStatus]);
export var AutoTuneMaintenanceSchedule = struct(n0, _ATMS, 0, [_SA, _Du, _CEFR], [4, () => Duration, 0]);
export var AutoTuneOptions = struct(
  n0,
  _ATO,
  0,
  [_DS, _ROD, _MS, _UOPW],
  [0, 0, () => AutoTuneMaintenanceScheduleList, 2]
);
export var AutoTuneOptionsInput = struct(
  n0,
  _ATOI,
  0,
  [_DS, _MS, _UOPW],
  [0, () => AutoTuneMaintenanceScheduleList, 2]
);
export var AutoTuneOptionsOutput = struct(n0, _ATOO, 0, [_St, _EM, _UOPW], [0, 0, 2]);
export var AutoTuneOptionsStatus = struct(n0, _ATOS, 0, [_O, _S], [() => AutoTuneOptions, () => AutoTuneStatus]);
export var AutoTuneStatus = struct(n0, _ATS, 0, [_CD, _UD, _UV, _St, _EM, _PD], [4, 4, 1, 0, 0, 2]);
export var ClusterConfig = struct(
  n0,
  _CC,
  0,
  [_IT, _IC, _DME, _ZAE, _ZAC, _DMT, _DMC, _WE, _WT, _WC, _CSO, _MAZWSE, _NO],
  [0, 1, 2, 2, () => ZoneAwarenessConfig, 0, 1, 2, 0, 1, () => ColdStorageOptions, 2, () => NodeOptionsList]
);
export var ClusterConfigStatus = struct(n0, _CCSl, 0, [_O, _S], [() => ClusterConfig, () => OptionStatus]);
export var CognitoOptions = struct(n0, _CO, 0, [_E, _UPI, _IPI, _RA], [2, 0, 0, 0]);
export var CognitoOptionsStatus = struct(n0, _COS, 0, [_O, _S], [() => CognitoOptions, () => OptionStatus]);
export var ColdStorageOptions = struct(n0, _CSO, 0, [_E], [2]);
export var CreateDomainRequest = struct(
  n0,
  _CDR,
  0,
  [
    _DN,
    _EV,
    _CC,
    _EBSO,
    _APc,
    _IPAT,
    _SO,
    _VPCO,
    _CO,
    _EARO,
    _NTNEO,
    _AO,
    _LPO,
    _DEO,
    _ASO,
    _ICO,
    _TL,
    _ATO,
    _OPWO,
    _SUO,
    _AIMLO,
  ],
  [
    0,
    0,
    () => ClusterConfig,
    () => EBSOptions,
    0,
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
    () => IdentityCenterOptionsInput,
    () => TagList,
    () => AutoTuneOptionsInput,
    () => OffPeakWindowOptions,
    () => SoftwareUpdateOptions,
    () => AIMLOptionsInput,
  ]
);
export var CreateDomainResponse = struct(n0, _CDRr, 0, [_DSo], [() => DomainStatus]);
export var CreatePackageRequest = struct(
  n0,
  _CPR,
  0,
  [_PNa, _PTa, _PDa, _PS, _PC, _EV, _PVO, _PEO],
  [
    0,
    0,
    0,
    () => PackageSource,
    () => PackageConfiguration,
    0,
    () => PackageVendingOptions,
    () => PackageEncryptionOptions,
  ]
);
export var CreatePackageResponse = struct(n0, _CPRr, 0, [_PDac], [() => PackageDetails]);
export var DeleteDomainRequest = struct(n0, _DDR, 0, [_DN], [[0, 1]]);
export var DeleteDomainResponse = struct(n0, _DDRe, 0, [_DSo], [() => DomainStatus]);
export var DeletePackageRequest = struct(n0, _DPR, 0, [_PID], [[0, 1]]);
export var DeletePackageResponse = struct(n0, _DPRe, 0, [_PDac], [() => PackageDetails]);
export var DescribeDomainConfigRequest = struct(n0, _DDCR, 0, [_DN], [[0, 1]]);
export var DescribeDomainConfigResponse = struct(n0, _DDCRe, 0, [_DC], [() => DomainConfig]);
export var DescribeDomainRequest = struct(n0, _DDRes, 0, [_DN], [[0, 1]]);
export var DescribeDomainResponse = struct(n0, _DDResc, 0, [_DSo], [() => DomainStatus]);
export var DescribeDomainsRequest = struct(n0, _DDRescr, 0, [_DNo], [64 | 0]);
export var DescribeDomainsResponse = struct(n0, _DDRescri, 0, [_DSL], [() => DomainStatusList]);
export var DescribeDryRunProgressRequest = struct(
  n0,
  _DDRPR,
  0,
  [_DN, _DRI, _LDRC],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _dRI,
      },
    ],
    [
      2,
      {
        [_hQ]: _lDRC,
      },
    ],
  ]
);
export var DescribeDryRunProgressResponse = struct(
  n0,
  _DDRPRe,
  0,
  [_DRPS, _DRC, _DRR],
  [() => DryRunProgressStatus, () => DomainStatus, () => DryRunResults]
);
export var DescribePackagesFilter = struct(n0, _DPF, 0, [_N, _V], [0, 64 | 0]);
export var DescribePackagesRequest = struct(n0, _DPRes, 0, [_F, _MR, _NT], [() => DescribePackagesFilterList, 1, 0]);
export var DescribePackagesResponse = struct(n0, _DPResc, 0, [_PDL, _NT], [() => PackageDetailsList, 0]);
export var DomainConfig = struct(
  n0,
  _DC,
  0,
  [
    _EV,
    _CC,
    _EBSO,
    _APc,
    _IPAT,
    _SO,
    _VPCO,
    _CO,
    _EARO,
    _NTNEO,
    _AO,
    _LPO,
    _DEO,
    _ASO,
    _ICO,
    _ATO,
    _CPD,
    _OPWO,
    _SUO,
    _MP,
    _AIMLO,
  ],
  [
    () => VersionStatus,
    () => ClusterConfigStatus,
    () => EBSOptionsStatus,
    () => AccessPoliciesStatus,
    () => IPAddressTypeStatus,
    () => SnapshotOptionsStatus,
    () => VPCDerivedInfoStatus,
    () => CognitoOptionsStatus,
    () => EncryptionAtRestOptionsStatus,
    () => NodeToNodeEncryptionOptionsStatus,
    () => AdvancedOptionsStatus,
    () => LogPublishingOptionsStatus,
    () => DomainEndpointOptionsStatus,
    () => AdvancedSecurityOptionsStatus,
    () => IdentityCenterOptionsStatus,
    () => AutoTuneOptionsStatus,
    () => ChangeProgressDetails,
    () => OffPeakWindowOptionsStatus,
    () => SoftwareUpdateOptionsStatus,
    () => ModifyingPropertiesList,
    () => AIMLOptionsStatus,
  ]
);
export var DomainEndpointOptions = struct(n0, _DEO, 0, [_EHTTPS, _TLSSP, _CEE, _CEu, _CECA], [2, 0, 2, 0, 0]);
export var DomainEndpointOptionsStatus = struct(
  n0,
  _DEOS,
  0,
  [_O, _S],
  [() => DomainEndpointOptions, () => OptionStatus]
);
export var DomainStatus = struct(
  n0,
  _DSo,
  0,
  [
    _DIo,
    _DN,
    _ARN,
    _Cr,
    _De,
    _En,
    _EVn,
    _End,
    _DEVHZI,
    _Pro,
    _UP,
    _EV,
    _CC,
    _EBSO,
    _APc,
    _IPAT,
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
    _ICO,
    _ATO,
    _CPD,
    _OPWO,
    _SUO,
    _DPSo,
    _MP,
    _AIMLO,
  ],
  [
    0,
    0,
    0,
    2,
    2,
    0,
    0,
    128 | 0,
    0,
    2,
    2,
    0,
    () => ClusterConfig,
    () => EBSOptions,
    0,
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
    () => IdentityCenterOptions,
    () => AutoTuneOptionsOutput,
    () => ChangeProgressDetails,
    () => OffPeakWindowOptions,
    () => SoftwareUpdateOptions,
    0,
    () => ModifyingPropertiesList,
    () => AIMLOptionsOutput,
  ]
);
export var DryRunProgressStatus = struct(
  n0,
  _DRPS,
  0,
  [_DRI, _DRS, _CD, _UD, _VF],
  [0, 0, 0, 0, () => ValidationFailures]
);
export var DryRunResults = struct(n0, _DRR, 0, [_DT, _M], [0, 0]);
export var Duration = struct(n0, _Du, 0, [_V, _Un], [1, 0]);
export var EBSOptions = struct(n0, _EBSO, 0, [_EBSE, _VT, _VS, _I, _T], [2, 0, 1, 1, 1]);
export var EBSOptionsStatus = struct(n0, _EBSOS, 0, [_O, _S], [() => EBSOptions, () => OptionStatus]);
export var EncryptionAtRestOptions = struct(n0, _EARO, 0, [_E, _KKI], [2, 0]);
export var EncryptionAtRestOptionsStatus = struct(
  n0,
  _EAROS,
  0,
  [_O, _S],
  [() => EncryptionAtRestOptions, () => OptionStatus]
);
export var IAMFederationOptionsInput = struct(n0, _IAMFOI, 0, [_E, _SK, _RK], [2, 0, 0]);
export var IAMFederationOptionsOutput = struct(n0, _IAMFOO, 0, [_E, _SK, _RK], [2, 0, 0]);
export var IdentityCenterOptions = struct(n0, _ICO, 0, [_EAPIA, _ICIARN, _SK, _RK, _ICAARN, _ISI], [2, 0, 0, 0, 0, 0]);
export var IdentityCenterOptionsInput = struct(n0, _ICOI, 0, [_EAPIA, _ICIARN, _SK, _RK], [2, 0, 0, 0]);
export var IdentityCenterOptionsStatus = struct(
  n0,
  _ICOS,
  0,
  [_O, _S],
  [() => IdentityCenterOptions, () => OptionStatus]
);
export var IPAddressTypeStatus = struct(n0, _IPATS, 0, [_O, _S], [0, () => OptionStatus]);
export var JWTOptionsInput = struct(n0, _JWTOI, 0, [_E, _SK, _RK, _PK], [2, 0, 0, 0]);
export var JWTOptionsOutput = struct(n0, _JWTOO, 0, [_E, _SK, _RK, _PK], [2, 0, 0, 0]);
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
export var NaturalLanguageQueryGenerationOptionsInput = struct(n0, _NLQGOI, 0, [_DS], [0]);
export var NaturalLanguageQueryGenerationOptionsOutput = struct(n0, _NLQGOO, 0, [_DS, _CSu], [0, 0]);
export var NodeConfig = struct(n0, _NC, 0, [_E, _Ty, _Cou], [2, 0, 1]);
export var NodeOption = struct(n0, _NOo, 0, [_NTo, _NC], [0, () => NodeConfig]);
export var NodeToNodeEncryptionOptions = struct(n0, _NTNEO, 0, [_E], [2]);
export var NodeToNodeEncryptionOptionsStatus = struct(
  n0,
  _NTNEOS,
  0,
  [_O, _S],
  [() => NodeToNodeEncryptionOptions, () => OptionStatus]
);
export var OffPeakWindow = struct(n0, _OPW, 0, [_WST], [() => WindowStartTime]);
export var OffPeakWindowOptions = struct(n0, _OPWO, 0, [_E, _OPW], [2, () => OffPeakWindow]);
export var OffPeakWindowOptionsStatus = struct(
  n0,
  _OPWOS,
  0,
  [_O, _S],
  [() => OffPeakWindowOptions, () => OptionStatus]
);
export var OptionStatus = struct(n0, _OS, 0, [_CD, _UD, _UV, _St, _PD], [4, 4, 1, 0, 2]);
export var PackageDetails = struct(
  n0,
  _PDac,
  0,
  [_PID, _PNa, _PTa, _PDa, _PSa, _CAr, _LUA, _APV, _ED, _EV, _APP, _APC, _ALUL, _PO, _PVO, _PEO],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    () => ErrorDetails,
    0,
    () => PluginProperties,
    () => PackageConfiguration,
    64 | 0,
    0,
    () => PackageVendingOptions,
    () => PackageEncryptionOptions,
  ]
);
export var PackageEncryptionOptions = struct(n0, _PEO, 0, [_KKIm, _EE], [0, 2]);
export var PackageSource = struct(n0, _PS, 0, [_SBN, _SKe], [0, 0]);
export var PackageVendingOptions = struct(n0, _PVO, 0, [_VEe], [2]);
export var S3VectorsEngine = struct(n0, _SVE, 0, [_E], [2]);
export var SAMLIdp = struct(n0, _SAMLI, 0, [_MC, _EInt], [0, 0]);
export var SAMLOptionsInput = struct(
  n0,
  _SAMLOI,
  0,
  [_E, _Id, _MUN, _MBR, _SK, _RK, _STM],
  [2, () => SAMLIdp, [() => Username, 0], 0, 0, 0, 1]
);
export var SAMLOptionsOutput = struct(n0, _SAMLOO, 0, [_E, _Id, _SK, _RK, _STM], [2, () => SAMLIdp, 0, 0, 1]);
export var SnapshotOptions = struct(n0, _SO, 0, [_ASSH], [1]);
export var SnapshotOptionsStatus = struct(n0, _SOS, 0, [_O, _S], [() => SnapshotOptions, () => OptionStatus]);
export var SoftwareUpdateOptions = struct(n0, _SUO, 0, [_ASUE], [2]);
export var SoftwareUpdateOptionsStatus = struct(
  n0,
  _SUOS,
  0,
  [_O, _S],
  [() => SoftwareUpdateOptions, () => OptionStatus]
);
export var UpdateDomainConfigRequest = struct(
  n0,
  _UDCR,
  0,
  [
    _DN,
    _CC,
    _EBSO,
    _SO,
    _VPCO,
    _CO,
    _AO,
    _APc,
    _IPAT,
    _LPO,
    _EARO,
    _DEO,
    _NTNEO,
    _ASO,
    _ICO,
    _ATO,
    _DR,
    _DRM,
    _OPWO,
    _SUO,
    _AIMLO,
  ],
  [
    [0, 1],
    () => ClusterConfig,
    () => EBSOptions,
    () => SnapshotOptions,
    () => VPCOptions,
    () => CognitoOptions,
    128 | 0,
    0,
    0,
    () => LogPublishingOptions,
    () => EncryptionAtRestOptions,
    () => DomainEndpointOptions,
    () => NodeToNodeEncryptionOptions,
    [() => AdvancedSecurityOptionsInput, 0],
    () => IdentityCenterOptionsInput,
    () => AutoTuneOptions,
    2,
    0,
    () => OffPeakWindowOptions,
    () => SoftwareUpdateOptions,
    () => AIMLOptionsInput,
  ]
);
export var UpdateDomainConfigResponse = struct(
  n0,
  _UDCRp,
  0,
  [_DC, _DRR, _DRPS],
  [() => DomainConfig, () => DryRunResults, () => DryRunProgressStatus]
);
export var UpdatePackageRequest = struct(
  n0,
  _UPR,
  0,
  [_PID, _PS, _PDa, _CMo, _PC, _PEO],
  [0, () => PackageSource, 0, 0, () => PackageConfiguration, () => PackageEncryptionOptions]
);
export var UpdatePackageResponse = struct(n0, _UPRp, 0, [_PDac], [() => PackageDetails]);
export var ValidationFailure = struct(n0, _VFa, 0, [_Cod, _M], [0, 0]);
export var VersionStatus = struct(n0, _VSe, 0, [_O, _S], [0, () => OptionStatus]);
export var VPCDerivedInfoStatus = struct(n0, _VPCDIS, 0, [_O, _S], [() => VPCDerivedInfo, () => OptionStatus]);
export var WindowStartTime = struct(n0, _WST, 0, [_H, _Mi], [1, 1]);
export var ZoneAwarenessConfig = struct(n0, _ZAC, 0, [_AZC], [1]);
export var AutoTuneMaintenanceScheduleList = list(n0, _ATMSL, 0, () => AutoTuneMaintenanceSchedule);
export var DescribePackagesFilterList = list(n0, _DPFL, 0, () => DescribePackagesFilter);
export var DescribePackagesFilterValues = 64 | 0;

export var DomainNameList = 64 | 0;

export var DomainStatusList = list(n0, _DSL, 0, () => DomainStatus);
export var ModifyingPropertiesList = list(n0, _MPL, 0, () => ModifyingProperties);
export var NodeOptionsList = list(n0, _NOL, 0, () => NodeOption);
export var PackageDetailsList = list(n0, _PDL, 0, () => PackageDetails);
export var ValidationFailures = list(n0, _VF, 0, () => ValidationFailure);
export var EndpointsMap = 128 | 0;

export var LogPublishingOptions = map(n0, _LPO, 0, 0, () => LogPublishingOption);
export var CreateDomain = op(
  n0,
  _CDr,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/domain", 200],
  },
  () => CreateDomainRequest,
  () => CreateDomainResponse
);
export var CreatePackage = op(
  n0,
  _CPr,
  {
    [_h]: ["POST", "/2021-01-01/packages", 200],
  },
  () => CreatePackageRequest,
  () => CreatePackageResponse
);
export var DeleteDomain = op(
  n0,
  _DD,
  {
    [_h]: ["DELETE", "/2021-01-01/opensearch/domain/{DomainName}", 200],
  },
  () => DeleteDomainRequest,
  () => DeleteDomainResponse
);
export var DeletePackage = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/2021-01-01/packages/{PackageID}", 200],
  },
  () => DeletePackageRequest,
  () => DeletePackageResponse
);
export var DescribeDomain = op(
  n0,
  _DDe,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}", 200],
  },
  () => DescribeDomainRequest,
  () => DescribeDomainResponse
);
export var DescribeDomainConfig = op(
  n0,
  _DDC,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}/config", 200],
  },
  () => DescribeDomainConfigRequest,
  () => DescribeDomainConfigResponse
);
export var DescribeDomains = op(
  n0,
  _DDes,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/domain-info", 200],
  },
  () => DescribeDomainsRequest,
  () => DescribeDomainsResponse
);
export var DescribeDryRunProgress = op(
  n0,
  _DDRP,
  {
    [_h]: ["GET", "/2021-01-01/opensearch/domain/{DomainName}/dryRun", 200],
  },
  () => DescribeDryRunProgressRequest,
  () => DescribeDryRunProgressResponse
);
export var DescribePackages = op(
  n0,
  _DPe,
  {
    [_h]: ["POST", "/2021-01-01/packages/describe", 200],
  },
  () => DescribePackagesRequest,
  () => DescribePackagesResponse
);
export var UpdateDomainConfig = op(
  n0,
  _UDC,
  {
    [_h]: ["POST", "/2021-01-01/opensearch/domain/{DomainName}/config", 200],
  },
  () => UpdateDomainConfigRequest,
  () => UpdateDomainConfigResponse
);
export var UpdatePackage = op(
  n0,
  _UPp,
  {
    [_h]: ["POST", "/2021-01-01/packages/update", 200],
  },
  () => UpdatePackageRequest,
  () => UpdatePackageResponse
);
