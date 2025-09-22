// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AC,
  _aC,
  _acti,
  _Actio,
  _aD,
  _ADd,
  _aDd,
  _ADg,
  _AIc,
  _aIc,
  _AIcc,
  _aIcc,
  _AL,
  _aL,
  _AN,
  _aN,
  _Ar,
  _ar,
  _aS,
  _ASd,
  _AV,
  _aV,
  _CA,
  _cA,
  _CAr,
  _cAr,
  _CCI,
  _cCI,
  _CCIo,
  _cCIo,
  _CECD,
  _CECDo,
  _CEID,
  _CID,
  _cID,
  _CNl,
  _cNl,
  _CNom,
  _cNom,
  _CNov,
  _cNov,
  _Cod,
  _cod,
  _CRD,
  _CRo,
  _CRov,
  _CS,
  _cS,
  _CSC,
  _CTCR,
  _CTlo,
  _cTlo,
  _DACR,
  _DACRe,
  _DFCR,
  _DFCRe,
  _DI,
  _dI,
  _dL,
  _DNSL,
  _DNSLCR,
  _DS,
  _dS,
  _DSCR,
  _EBO,
  _eBO,
  _ECD,
  _eCD,
  _ECDc,
  _eCDc,
  _ED,
  _eD,
  _EID,
  _eID,
  _F,
  _f,
  _FCil,
  _fCil,
  _FD,
  _fD,
  _FL,
  _fL,
  _FLCR,
  _Fo,
  _fo,
  _FPF,
  _fPF,
  _GD,
  _GDR,
  _GDRe,
  _GMD,
  _GMDR,
  _GMDRe,
  _GMPP,
  _GMPPR,
  _GMPPRe,
  _GTES,
  _GTESe,
  _GTESR,
  _GTESRe,
  _GTESRet,
  _GTESRetr,
  _hL,
  _ht,
  _IIn,
  _iIn,
  _Is,
  _is,
  _Iss,
  _iss,
  _IT,
  _iT,
  _jN,
  _K,
  _k,
  _KALCR,
  _KCR,
  _LC,
  _LCR,
  _LCRi,
  _Lo,
  _lo,
  _M,
  _m,
  _MACR,
  _MACRe,
  _MDSC,
  _MDSCe,
  _me,
  _MFCR,
  _MFCRe,
  _MP,
  _mP,
  _MPPI,
  _mPPI,
  _MPPSR,
  _MPPSRL,
  _MR,
  _mR,
  _MT,
  _mT,
  _N,
  _n,
  _NT,
  _nT,
  _OB,
  _oB,
  _PR,
  _pR,
  _RD,
  _rD,
  _Reso,
  _reso,
  _RI,
  _rI,
  _Ro,
  _ro,
  _RT,
  _rT,
  _SCo,
  _sCo,
  _SL,
  _sL,
  _SLCR,
  _SR,
  _sR,
  _SRt,
  _sRt,
  _St,
  _st,
  _Ta,
  _ta,
  _TESI,
  _tESI,
  _TESIr,
  _tESIr,
  _UAn,
  _uAn,
  _UAp,
  _uAp,
  _V,
  _v,
  n0,
} from "./schemas_0";
import { MalwareProtectionConfigurationResult } from "./schemas_1_Detector";
import { CreateProtectedResource, MalwareProtectionPlanActions } from "./schemas_10_ProtectionPlan";
import { CoverageFilterCriteria } from "./schemas_11_Filter";
import { UnprocessedAccounts } from "./schemas_16_Members";

/* eslint no-var: 0 */

export var AddonDetails = struct(
  n0,
  _ADd,
  0,
  [_AV, _ASd],
  [
    [
      0,
      {
        [_jN]: _aV,
      },
    ],
    [
      0,
      {
        [_jN]: _aS,
      },
    ],
  ]
);
export var AgentDetails = struct(
  n0,
  _ADg,
  0,
  [_V],
  [
    [
      0,
      {
        [_jN]: _v,
      },
    ],
  ]
);
export var CloudTrailConfigurationResult = struct(
  n0,
  _CTCR,
  0,
  [_St],
  [
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var ContainerInstanceDetails = struct(
  n0,
  _CID,
  0,
  [_CCI, _CCIo],
  [
    [
      1,
      {
        [_jN]: _cCI,
      },
    ],
    [
      1,
      {
        [_jN]: _cCIo,
      },
    ],
  ]
);
export var CoverageEc2InstanceDetails = struct(
  n0,
  _CEID,
  0,
  [_IIn, _IT, _CA, _ADg, _MT],
  [
    [
      0,
      {
        [_jN]: _iIn,
      },
    ],
    [
      0,
      {
        [_jN]: _iT,
      },
    ],
    [
      0,
      {
        [_jN]: _cA,
      },
    ],
    [
      () => AgentDetails,
      {
        [_jN]: _aD,
      },
    ],
    [
      0,
      {
        [_jN]: _mT,
      },
    ],
  ]
);
export var CoverageEcsClusterDetails = struct(
  n0,
  _CECD,
  0,
  [_CNl, _FD, _CID],
  [
    [
      0,
      {
        [_jN]: _cNl,
      },
    ],
    [
      () => FargateDetails,
      {
        [_jN]: _fD,
      },
    ],
    [
      () => ContainerInstanceDetails,
      {
        [_jN]: _cID,
      },
    ],
  ]
);
export var CoverageEksClusterDetails = struct(
  n0,
  _CECDo,
  0,
  [_CNl, _CNov, _CNom, _ADd, _MT],
  [
    [
      0,
      {
        [_jN]: _cNl,
      },
    ],
    [
      1,
      {
        [_jN]: _cNov,
      },
    ],
    [
      1,
      {
        [_jN]: _cNom,
      },
    ],
    [
      () => AddonDetails,
      {
        [_jN]: _aDd,
      },
    ],
    [
      0,
      {
        [_jN]: _mT,
      },
    ],
  ]
);
export var CoverageResource = struct(
  n0,
  _CRo,
  0,
  [_RI, _DI, _AIc, _RD, _CS, _Is, _UAp],
  [
    [
      0,
      {
        [_jN]: _rI,
      },
    ],
    [
      0,
      {
        [_jN]: _dI,
      },
    ],
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      () => CoverageResourceDetails,
      {
        [_jN]: _rD,
      },
    ],
    [
      0,
      {
        [_jN]: _cS,
      },
    ],
    [
      0,
      {
        [_jN]: _is,
      },
    ],
    [
      4,
      {
        [_jN]: _uAp,
      },
    ],
  ]
);
export var CoverageResourceDetails = struct(
  n0,
  _CRD,
  0,
  [_ECD, _RT, _ECDc, _EID],
  [
    [
      () => CoverageEksClusterDetails,
      {
        [_jN]: _eCD,
      },
    ],
    [
      0,
      {
        [_jN]: _rT,
      },
    ],
    [
      () => CoverageEcsClusterDetails,
      {
        [_jN]: _eCDc,
      },
    ],
    [
      () => CoverageEc2InstanceDetails,
      {
        [_jN]: _eID,
      },
    ],
  ]
);
export var CoverageSortCriteria = struct(
  n0,
  _CSC,
  0,
  [_AN, _OB],
  [
    [
      0,
      {
        [_jN]: _aN,
      },
    ],
    [
      0,
      {
        [_jN]: _oB,
      },
    ],
  ]
);
export var DataSourceConfigurationsResult = struct(
  n0,
  _DSCR,
  0,
  [_CTlo, _DNSL, _FL, _SL, _K, _MP],
  [
    [
      () => CloudTrailConfigurationResult,
      {
        [_jN]: _cTlo,
      },
    ],
    [
      () => DNSLogsConfigurationResult,
      {
        [_jN]: _dL,
      },
    ],
    [
      () => FlowLogsConfigurationResult,
      {
        [_jN]: _fL,
      },
    ],
    [
      () => S3LogsConfigurationResult,
      {
        [_jN]: _sL,
      },
    ],
    [
      () => KubernetesConfigurationResult,
      {
        [_jN]: _k,
      },
    ],
    [
      () => MalwareProtectionConfigurationResult,
      {
        [_jN]: _mP,
      },
    ],
  ]
);
export var DetectorAdditionalConfigurationResult = struct(
  n0,
  _DACR,
  0,
  [_N, _St, _UAp],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      4,
      {
        [_jN]: _uAp,
      },
    ],
  ]
);
export var DetectorFeatureConfigurationResult = struct(
  n0,
  _DFCR,
  0,
  [_N, _St, _UAp, _AC],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      4,
      {
        [_jN]: _uAp,
      },
    ],
    [
      () => DetectorAdditionalConfigurationResults,
      {
        [_jN]: _aC,
      },
    ],
  ]
);
export var DNSLogsConfigurationResult = struct(
  n0,
  _DNSLCR,
  0,
  [_St],
  [
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var FargateDetails = struct(
  n0,
  _FD,
  0,
  [_Iss, _MT],
  [
    [
      64 | 0,
      {
        [_jN]: _iss,
      },
    ],
    [
      0,
      {
        [_jN]: _mT,
      },
    ],
  ]
);
export var FlowLogsConfigurationResult = struct(
  n0,
  _FLCR,
  0,
  [_St],
  [
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var GetDetectorRequest = struct(
  n0,
  _GDR,
  0,
  [_DI],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
  ]
);
export var GetDetectorResponse = struct(
  n0,
  _GDRe,
  0,
  [_CAr, _FPF, _SR, _St, _UAp, _DS, _Ta, _F],
  [
    [
      0,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _fPF,
      },
    ],
    [
      0,
      {
        [_jN]: _sR,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      0,
      {
        [_jN]: _uAp,
      },
    ],
    [
      () => DataSourceConfigurationsResult,
      {
        [_jN]: _dS,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      () => DetectorFeatureConfigurationsResults,
      {
        [_jN]: _f,
      },
    ],
  ]
);
export var GetMalwareProtectionPlanRequest = struct(
  n0,
  _GMPPR,
  0,
  [_MPPI],
  [
    [
      0,
      {
        [_jN]: _mPPI,
        [_hL]: 1,
      },
    ],
  ]
);
export var GetMalwareProtectionPlanResponse = struct(
  n0,
  _GMPPRe,
  0,
  [_Ar, _Ro, _PR, _Actio, _CAr, _St, _SRt, _Ta],
  [
    [
      0,
      {
        [_jN]: _ar,
      },
    ],
    [
      0,
      {
        [_jN]: _ro,
      },
    ],
    [
      () => CreateProtectedResource,
      {
        [_jN]: _pR,
      },
    ],
    [
      () => MalwareProtectionPlanActions,
      {
        [_jN]: _acti,
      },
    ],
    [
      4,
      {
        [_jN]: _cAr,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      () => MalwareProtectionPlanStatusReasonsList,
      {
        [_jN]: _sRt,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var GetMemberDetectorsRequest = struct(
  n0,
  _GMDR,
  0,
  [_DI, _AIcc],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aIcc,
      },
    ],
  ]
);
export var GetMemberDetectorsResponse = struct(
  n0,
  _GMDRe,
  0,
  [_MDSC, _UAn],
  [
    [
      () => MemberDataSourceConfigurations,
      {
        [_jN]: _me,
      },
    ],
    [
      () => UnprocessedAccounts,
      {
        [_jN]: _uAn,
      },
    ],
  ]
);
export var GetThreatEntitySetRequest = struct(
  n0,
  _GTESR,
  0,
  [_DI, _TESI],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _tESI,
        [_hL]: 1,
      },
    ],
  ]
);
export var GetThreatEntitySetResponse = struct(
  n0,
  _GTESRe,
  0,
  [_N, _Fo, _Lo, _EBO, _St, _Ta, _CAr, _UAp, _ED],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _fo,
      },
    ],
    [
      0,
      {
        [_jN]: _lo,
      },
    ],
    [
      0,
      {
        [_jN]: _eBO,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      4,
      {
        [_jN]: _cAr,
      },
    ],
    [
      4,
      {
        [_jN]: _uAp,
      },
    ],
    [
      0,
      {
        [_jN]: _eD,
      },
    ],
  ]
);
export var GetTrustedEntitySetRequest = struct(
  n0,
  _GTESRet,
  0,
  [_DI, _TESIr],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _tESIr,
        [_hL]: 1,
      },
    ],
  ]
);
export var GetTrustedEntitySetResponse = struct(
  n0,
  _GTESRetr,
  0,
  [_N, _Fo, _Lo, _EBO, _St, _Ta, _CAr, _UAp, _ED],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _fo,
      },
    ],
    [
      0,
      {
        [_jN]: _lo,
      },
    ],
    [
      0,
      {
        [_jN]: _eBO,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _ta,
      },
    ],
    [
      4,
      {
        [_jN]: _cAr,
      },
    ],
    [
      4,
      {
        [_jN]: _uAp,
      },
    ],
    [
      0,
      {
        [_jN]: _eD,
      },
    ],
  ]
);
export var KubernetesAuditLogsConfigurationResult = struct(
  n0,
  _KALCR,
  0,
  [_St],
  [
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var KubernetesConfigurationResult = struct(
  n0,
  _KCR,
  0,
  [_AL],
  [
    [
      () => KubernetesAuditLogsConfigurationResult,
      {
        [_jN]: _aL,
      },
    ],
  ]
);
export var ListCoverageRequest = struct(
  n0,
  _LCR,
  0,
  [_DI, _NT, _MR, _FCil, _SCo],
  [
    [
      0,
      {
        [_jN]: _dI,
        [_hL]: 1,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
    [
      1,
      {
        [_jN]: _mR,
      },
    ],
    [
      () => CoverageFilterCriteria,
      {
        [_jN]: _fCil,
      },
    ],
    [
      () => CoverageSortCriteria,
      {
        [_jN]: _sCo,
      },
    ],
  ]
);
export var ListCoverageResponse = struct(
  n0,
  _LCRi,
  0,
  [_Reso, _NT],
  [
    [
      () => CoverageResources,
      {
        [_jN]: _reso,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var MalwareProtectionPlanStatusReason = struct(
  n0,
  _MPPSR,
  0,
  [_Cod, _M],
  [
    [
      0,
      {
        [_jN]: _cod,
      },
    ],
    [
      0,
      {
        [_jN]: _m,
      },
    ],
  ]
);
export var MemberAdditionalConfigurationResult = struct(
  n0,
  _MACR,
  0,
  [_N, _St, _UAp],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      4,
      {
        [_jN]: _uAp,
      },
    ],
  ]
);
export var MemberDataSourceConfiguration = struct(
  n0,
  _MDSCe,
  0,
  [_AIc, _DS, _F],
  [
    [
      0,
      {
        [_jN]: _aIc,
      },
    ],
    [
      () => DataSourceConfigurationsResult,
      {
        [_jN]: _dS,
      },
    ],
    [
      () => MemberFeaturesConfigurationsResults,
      {
        [_jN]: _f,
      },
    ],
  ]
);
export var MemberFeaturesConfigurationResult = struct(
  n0,
  _MFCR,
  0,
  [_N, _St, _UAp, _AC],
  [
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _st,
      },
    ],
    [
      4,
      {
        [_jN]: _uAp,
      },
    ],
    [
      () => MemberAdditionalConfigurationResults,
      {
        [_jN]: _aC,
      },
    ],
  ]
);
export var S3LogsConfigurationResult = struct(
  n0,
  _SLCR,
  0,
  [_St],
  [
    [
      0,
      {
        [_jN]: _st,
      },
    ],
  ]
);
export var CoverageResources = list(n0, _CRov, 0, [() => CoverageResource, 0]);
export var DetectorAdditionalConfigurationResults = list(n0, _DACRe, 0, [
  () => DetectorAdditionalConfigurationResult,
  0,
]);
export var DetectorFeatureConfigurationsResults = list(n0, _DFCRe, 0, [() => DetectorFeatureConfigurationResult, 0]);
export var Issues = 64 | 0;

export var MalwareProtectionPlanStatusReasonsList = list(n0, _MPPSRL, 0, [() => MalwareProtectionPlanStatusReason, 0]);
export var MemberAdditionalConfigurationResults = list(n0, _MACRe, 0, [() => MemberAdditionalConfigurationResult, 0]);
export var MemberDataSourceConfigurations = list(n0, _MDSC, 0, [() => MemberDataSourceConfiguration, 0]);
export var MemberFeaturesConfigurationsResults = list(n0, _MFCRe, 0, [() => MemberFeaturesConfigurationResult, 0]);
export var GetDetector = op(
  n0,
  _GD,
  {
    [_ht]: ["GET", "/detector/{DetectorId}", 200],
  },
  () => GetDetectorRequest,
  () => GetDetectorResponse
);
export var GetMalwareProtectionPlan = op(
  n0,
  _GMPP,
  {
    [_ht]: ["GET", "/malware-protection-plan/{MalwareProtectionPlanId}", 200],
  },
  () => GetMalwareProtectionPlanRequest,
  () => GetMalwareProtectionPlanResponse
);
export var GetMemberDetectors = op(
  n0,
  _GMD,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/member/detector/get", 200],
  },
  () => GetMemberDetectorsRequest,
  () => GetMemberDetectorsResponse
);
export var GetThreatEntitySet = op(
  n0,
  _GTES,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/threatentityset/{ThreatEntitySetId}", 200],
  },
  () => GetThreatEntitySetRequest,
  () => GetThreatEntitySetResponse
);
export var GetTrustedEntitySet = op(
  n0,
  _GTESe,
  {
    [_ht]: ["GET", "/detector/{DetectorId}/trustedentityset/{TrustedEntitySetId}", 200],
  },
  () => GetTrustedEntitySetRequest,
  () => GetTrustedEntitySetResponse
);
export var ListCoverage = op(
  n0,
  _LC,
  {
    [_ht]: ["POST", "/detector/{DetectorId}/coverage", 200],
  },
  () => ListCoverageRequest,
  () => ListCoverageResponse
);
