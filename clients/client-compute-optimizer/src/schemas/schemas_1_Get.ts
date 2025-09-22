// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AES,
  _aES,
  _AESc,
  _aI,
  _aIc,
  _aS,
  _aSC,
  _aSGA,
  _aSGAu,
  _ASGC,
  _ASGEMS,
  _aSGN,
  _ASGR,
  _aSGR,
  _ASGRO,
  _ASGROu,
  _ASGRu,
  _ASGSOAD,
  _aSl,
  _aSO,
  _CC,
  _cC,
  _CCo,
  _cCo,
  _cDBIC,
  _cIGI,
  _cIPR,
  _cIT,
  _cLC,
  _cMS,
  _cN,
  _co,
  _cod,
  _cp,
  _cPR,
  _CPRR,
  _cPRR,
  _CR,
  _cR,
  _CRo,
  _cSC,
  _cSCu,
  _cSEMVIOPCV,
  _cT,
  _cu,
  _cVA,
  _DBSC,
  _dC,
  _dCI,
  _de,
  _dIC,
  _DREJ,
  _DREJR,
  _DREJRe,
  _EBSEMS,
  _EBSERP,
  _EBSSEM,
  _EBSSOAD,
  _EBSUM,
  _EBSUMt,
  _ECSEMS,
  _ECSERP,
  _ECSSEM,
  _ECSSOAD,
  _ECSSPUM,
  _ECSSPUMe,
  _ECSSR,
  _ECSSRe,
  _ECSSRO,
  _ECSSROe,
  _ECSSUM,
  _ECSSUMe,
  _ED,
  _EF,
  _EFn,
  _eIHRP,
  _eIM,
  _eMP,
  _EMS,
  _eMS,
  _EMSx,
  _eMSx,
  _eMVIOPCV,
  _en,
  _er,
  _ERP,
  _eRP,
  _eSR,
  _eV,
  _f,
  _fA,
  _fAu,
  _fi,
  _fR,
  _fRC,
  _fV,
  _G,
  _g,
  _GASGR,
  _GASGRR,
  _GASGRRe,
  _gC,
  _GEBSVR,
  _GEBSVRR,
  _GEBSVRRe,
  _GECIR,
  _GECIRR,
  _GECIRRe,
  _GECSSR,
  _GECSSRR,
  _GECSSRRe,
  _GESFO,
  _GESFOR,
  _GESFORe,
  _GI,
  _GLFR,
  _GLFRR,
  _GLFRRe,
  _GLR,
  _GLRR,
  _GLRRe,
  _gMSIMB,
  _Gp,
  _GRDSDR,
  _GRDSDRR,
  _GRDSDRRe,
  _GRE,
  _GREe,
  _GRP,
  _GRPR,
  _GRPRe,
  _GRS,
  _GRSR,
  _GRSRe,
  _h,
  _i,
  _iA,
  _iAn,
  _id,
  _idl,
  _IEMSn,
  _iF,
  _iFRC,
  _iGI,
  _iN,
  _iR,
  _IRn,
  _IRns,
  _IRO,
  _iRO,
  _IS,
  _iS,
  _ISd,
  _iSd,
  _ISEM,
  _iSO,
  _ISOADn,
  _iT,
  _IWS,
  _iWS,
  _IWSn,
  _iWT,
  _JF,
  _JFo,
  _jI,
  _jIo,
  _l,
  _lBP,
  _lBPID,
  _lBVo,
  _LC,
  _lE,
  _LEMS,
  _LERP,
  _LFMPM,
  _LFMPMa,
  _LFMRO,
  _LFMROa,
  _LFR,
  _lFR,
  _LFRa,
  _LFUM,
  _LFUMa,
  _lM,
  _lN,
  _lPID,
  _LR,
  _lR,
  _LRi,
  _LRO,
  _lRO,
  _LROi,
  _lRT,
  _LSEM,
  _LSOAD,
  _lT,
  _lUT,
  _lV,
  _m,
  _mAS,
  _mE,
  _me,
  _mem,
  _mIT,
  _mR,
  _mRe,
  _MS,
  _mS,
  _mSa,
  _MSC,
  _mSC,
  _MSe,
  _mSe,
  _mSet,
  _mSRO,
  _n,
  _nOC,
  _nOI,
  _nT,
  _oS,
  _pA,
  _pD,
  _pR,
  _pr,
  _pRr,
  _pT,
  _PUM,
  _pUM,
  _r,
  _rA,
  _rAe,
  _RCS,
  _rCS,
  _RCSe,
  _rDBR,
  _RDSDBIRO,
  _RDSDBIROn,
  _RDSDBPUM,
  _RDSDBR,
  _RDSDBRe,
  _RDSDBSRO,
  _RDSDBSROt,
  _RDSDBUM,
  _RDSDBUMt,
  _RDSERP,
  _RDSIEMS,
  _RDSISOAD,
  _RDSSEM,
  _RDSSEMS,
  _RDSSSOAD,
  _REJ,
  _rEJ,
  _REJe,
  _RO,
  _rO,
  _rP,
  _RPD,
  _rPD,
  _RPDe,
  _rRT,
  _RS,
  _rS,
  _rSA,
  _RSe,
  _rSe,
  _RSec,
  _RSeco,
  _rST,
  _rT,
  _rV,
  _s,
  _s_,
  _sA,
  _sAe,
  _SC,
  _sC,
  _sc,
  _sCt,
  _sEM,
  _sF,
  _sFRC,
  _SO,
  _sO,
  _so,
  _sOAD,
  _sOP,
  _sR,
  _sRO,
  _sROt,
  _sT,
  _st,
  _sTt,
  _Su,
  _su,
  _Sum,
  _t,
  _ta,
  _tDA,
  _uBVp,
  _UM,
  _uM,
  _UMt,
  _uP,
  _v,
  _vA,
  _va,
  _vAo,
  _vBIOPS,
  _vBIOPSo,
  _vBT,
  _vBTo,
  _VC,
  _vL,
  _VR,
  _vR,
  _VRO,
  _VRo,
  _vRO,
  _VROo,
  _vS,
  _vT,
  n0,
} from "./schemas_0";
import { EffectivePreferredResources, ExternalMetricsPreference, UtilizationPreferences } from "./schemas_2_Get";
import { EBSFilters } from "./schemas_3_Recommendations";
import { S3Destination } from "./schemas_4_Export";
import { ECSServiceRecommendationFilters } from "./schemas_5_Recommendations";
import { Tags } from "./schemas_8_Get";
import { LicenseRecommendationFilters } from "./schemas_9_Recommendations";
import { Scope } from "./schemas_11_Recommendation";
import { LambdaFunctionRecommendationFilters } from "./schemas_12_Recommendations";
import { Filters, RDSDBRecommendationFilters, RecommendationPreferences } from "./schemas_13_Recommendations";

/* eslint no-var: 0 */

export var AccountEnrollmentStatus = struct(n0, _AES, 0, [_aI, _s, _sR, _lUT], [0, 0, 0, 4]);
export var AutoScalingGroupConfiguration = struct(
  n0,
  _ASGC,
  0,
  [_dC, _mS, _mSa, _iT, _aS, _eIHRP, _t, _mIT],
  [1, 1, 1, 0, 0, 1, 0, 64 | 0]
);
export var AutoScalingGroupEstimatedMonthlySavings = struct(n0, _ASGEMS, 0, [_cu, _v], [0, 1]);
export var AutoScalingGroupRecommendation = struct(
  n0,
  _ASGR,
  0,
  [_aI, _aSGA, _aSGN, _f, _uM, _lBPID, _cC, _cIGI, _rO, _lRT, _cPR, _eRP, _iWT],
  [
    0,
    0,
    0,
    0,
    () => UtilizationMetrics,
    1,
    () => AutoScalingGroupConfiguration,
    () => GpuInfo,
    () => AutoScalingGroupRecommendationOptions,
    4,
    0,
    () => EffectiveRecommendationPreferences,
    64 | 0,
  ]
);
export var AutoScalingGroupRecommendationOption = struct(
  n0,
  _ASGRO,
  0,
  [_co, _iGI, _pUM, _pR, _r, _sO, _sOAD, _mE],
  [
    () => AutoScalingGroupConfiguration,
    () => GpuInfo,
    () => ProjectedUtilizationMetrics,
    1,
    1,
    () => SavingsOpportunity,
    () => AutoScalingGroupSavingsOpportunityAfterDiscounts,
    0,
  ]
);
export var AutoScalingGroupSavingsOpportunityAfterDiscounts = struct(
  n0,
  _ASGSOAD,
  0,
  [_sOP, _eMS],
  [1, () => AutoScalingGroupEstimatedMonthlySavings]
);
export var ContainerConfiguration = struct(n0, _CC, 0, [_cN, _mSC, _cp], [0, () => MemorySizeConfiguration, 1]);
export var ContainerRecommendation = struct(n0, _CR, 0, [_cN, _mSC, _cp], [0, () => MemorySizeConfiguration, 1]);
export var CurrentPerformanceRiskRatings = struct(n0, _CPRR, 0, [_h, _me, _l, _vL], [1, 1, 1, 1]);
export var DBStorageConfiguration = struct(n0, _DBSC, 0, [_sT, _aSl, _i, _mAS, _sTt], [0, 1, 1, 1, 1]);
export var DescribeRecommendationExportJobsRequest = struct(
  n0,
  _DREJR,
  0,
  [_jI, _fi, _nT, _mR],
  [64 | 0, () => JobFilters, 0, 1]
);
export var DescribeRecommendationExportJobsResponse = struct(
  n0,
  _DREJRe,
  0,
  [_rEJ, _nT],
  [() => RecommendationExportJobs, 0]
);
export var EBSEffectiveRecommendationPreferences = struct(n0, _EBSERP, 0, [_sEM], [() => EBSSavingsEstimationMode]);
export var EBSEstimatedMonthlySavings = struct(n0, _EBSEMS, 0, [_cu, _v], [0, 1]);
export var EBSSavingsEstimationMode = struct(n0, _EBSSEM, 0, [_so], [0]);
export var EBSSavingsOpportunityAfterDiscounts = struct(
  n0,
  _EBSSOAD,
  0,
  [_sOP, _eMS],
  [1, () => EBSEstimatedMonthlySavings]
);
export var EBSUtilizationMetric = struct(n0, _EBSUM, 0, [_n, _st, _v], [0, 0, 1]);
export var ECSEffectiveRecommendationPreferences = struct(n0, _ECSERP, 0, [_sEM], [() => ECSSavingsEstimationMode]);
export var ECSEstimatedMonthlySavings = struct(n0, _ECSEMS, 0, [_cu, _v], [0, 1]);
export var ECSSavingsEstimationMode = struct(n0, _ECSSEM, 0, [_so], [0]);
export var ECSSavingsOpportunityAfterDiscounts = struct(
  n0,
  _ECSSOAD,
  0,
  [_sOP, _eMS],
  [1, () => ECSEstimatedMonthlySavings]
);
export var ECSServiceProjectedUtilizationMetric = struct(n0, _ECSSPUM, 0, [_n, _st, _lBVo, _uBVp], [0, 0, 1, 1]);
export var ECSServiceRecommendation = struct(
  n0,
  _ECSSR,
  0,
  [_sA, _aI, _cSC, _uM, _lPID, _lT, _lRT, _f, _fRC, _sRO, _cPR, _eRP, _ta],
  [
    0,
    0,
    () => ServiceConfiguration,
    () => ECSServiceUtilizationMetrics,
    1,
    0,
    4,
    0,
    64 | 0,
    () => ECSServiceRecommendationOptions,
    0,
    () => ECSEffectiveRecommendationPreferences,
    () => Tags,
  ]
);
export var ECSServiceRecommendationOption = struct(
  n0,
  _ECSSRO,
  0,
  [_mem, _cp, _sO, _sOAD, _pUM, _cR],
  [
    1,
    1,
    () => SavingsOpportunity,
    () => ECSSavingsOpportunityAfterDiscounts,
    () => ECSServiceProjectedUtilizationMetrics,
    () => ContainerRecommendations,
  ]
);
export var ECSServiceUtilizationMetric = struct(n0, _ECSSUM, 0, [_n, _st, _v], [0, 0, 1]);
export var EffectiveRecommendationPreferences = struct(
  n0,
  _ERP,
  0,
  [_cVA, _eIM, _iWT, _eMP, _lBP, _uP, _pRr, _sEM],
  [
    64 | 0,
    0,
    0,
    () => ExternalMetricsPreference,
    0,
    () => UtilizationPreferences,
    () => EffectivePreferredResources,
    () => InstanceSavingsEstimationMode,
  ]
);
export var EnrollmentFilter = struct(n0, _EF, 0, [_n, _va], [0, 64 | 0]);
export var EstimatedMonthlySavings = struct(n0, _EMS, 0, [_cu, _v], [0, 1]);
export var ExportDestination = struct(n0, _ED, 0, [_s_], [() => S3Destination]);
export var ExternalMetricStatus = struct(n0, _EMSx, 0, [_sC, _sR], [0, 0]);
export var GetAutoScalingGroupRecommendationsRequest = struct(
  n0,
  _GASGRR,
  0,
  [_aIc, _aSGAu, _nT, _mR, _fi, _rP],
  [64 | 0, 64 | 0, 0, 1, () => Filters, () => RecommendationPreferences]
);
export var GetAutoScalingGroupRecommendationsResponse = struct(
  n0,
  _GASGRRe,
  0,
  [_nT, _aSGR, _er],
  [0, () => AutoScalingGroupRecommendations, () => GetRecommendationErrors]
);
export var GetEBSVolumeRecommendationsRequest = struct(
  n0,
  _GEBSVRR,
  0,
  [_vA, _nT, _mR, _fi, _aIc],
  [64 | 0, 0, 1, () => EBSFilters, 64 | 0]
);
export var GetEBSVolumeRecommendationsResponse = struct(
  n0,
  _GEBSVRRe,
  0,
  [_nT, _vR, _er],
  [0, () => VolumeRecommendations, () => GetRecommendationErrors]
);
export var GetEC2InstanceRecommendationsRequest = struct(
  n0,
  _GECIRR,
  0,
  [_iA, _nT, _mR, _fi, _aIc, _rP],
  [64 | 0, 0, 1, () => Filters, 64 | 0, () => RecommendationPreferences]
);
export var GetEC2InstanceRecommendationsResponse = struct(
  n0,
  _GECIRRe,
  0,
  [_nT, _iR, _er],
  [0, () => InstanceRecommendations, () => GetRecommendationErrors]
);
export var GetECSServiceRecommendationsRequest = struct(
  n0,
  _GECSSRR,
  0,
  [_sAe, _nT, _mR, _fi, _aIc],
  [64 | 0, 0, 1, () => ECSServiceRecommendationFilters, 64 | 0]
);
export var GetECSServiceRecommendationsResponse = struct(
  n0,
  _GECSSRRe,
  0,
  [_nT, _eSR, _er],
  [0, () => ECSServiceRecommendations, () => GetRecommendationErrors]
);
export var GetEnrollmentStatusesForOrganizationRequest = struct(
  n0,
  _GESFOR,
  0,
  [_fi, _nT, _mR],
  [() => EnrollmentFilters, 0, 1]
);
export var GetEnrollmentStatusesForOrganizationResponse = struct(
  n0,
  _GESFORe,
  0,
  [_aES, _nT],
  [() => AccountEnrollmentStatuses, 0]
);
export var GetLambdaFunctionRecommendationsRequest = struct(
  n0,
  _GLFRR,
  0,
  [_fA, _aIc, _fi, _nT, _mR],
  [64 | 0, 64 | 0, () => LambdaFunctionRecommendationFilters, 0, 1]
);
export var GetLambdaFunctionRecommendationsResponse = struct(
  n0,
  _GLFRRe,
  0,
  [_nT, _lFR],
  [0, () => LambdaFunctionRecommendations]
);
export var GetLicenseRecommendationsRequest = struct(
  n0,
  _GLRR,
  0,
  [_rAe, _nT, _mR, _fi, _aIc],
  [64 | 0, 0, 1, () => LicenseRecommendationFilters, 64 | 0]
);
export var GetLicenseRecommendationsResponse = struct(
  n0,
  _GLRRe,
  0,
  [_nT, _lR, _er],
  [0, () => LicenseRecommendations, () => GetRecommendationErrors]
);
export var GetRDSDatabaseRecommendationsRequest = struct(
  n0,
  _GRDSDRR,
  0,
  [_rAe, _nT, _mR, _fi, _aIc, _rP],
  [64 | 0, 0, 1, () => RDSDBRecommendationFilters, 64 | 0, () => RecommendationPreferences]
);
export var GetRDSDatabaseRecommendationsResponse = struct(
  n0,
  _GRDSDRRe,
  0,
  [_nT, _rDBR, _er],
  [0, () => RDSDBRecommendations, () => GetRecommendationErrors]
);
export var GetRecommendationError = struct(n0, _GRE, 0, [_id, _cod, _m], [0, 0, 0]);
export var GetRecommendationPreferencesRequest = struct(n0, _GRPR, 0, [_rT, _sc, _nT, _mR], [0, () => Scope, 0, 1]);
export var GetRecommendationPreferencesResponse = struct(
  n0,
  _GRPRe,
  0,
  [_nT, _rPD],
  [0, () => RecommendationPreferencesDetails]
);
export var GetRecommendationSummariesRequest = struct(n0, _GRSR, 0, [_aIc, _nT, _mR], [64 | 0, 0, 1]);
export var GetRecommendationSummariesResponse = struct(n0, _GRSRe, 0, [_nT, _rS], [0, () => RecommendationSummaries]);
export var Gpu = struct(n0, _G, 0, [_gC, _gMSIMB], [1, 1]);
export var GpuInfo = struct(n0, _GI, 0, [_g], [() => Gpus]);
export var IdleSummary = struct(n0, _IS, 0, [_n, _v], [0, 1]);
export var InferredWorkloadSaving = struct(n0, _IWS, 0, [_iWT, _eMS], [64 | 0, () => EstimatedMonthlySavings]);
export var InstanceEstimatedMonthlySavings = struct(n0, _IEMSn, 0, [_cu, _v], [0, 1]);
export var InstanceRecommendation = struct(
  n0,
  _IRn,
  0,
  [_iAn, _aI, _iN, _cIT, _f, _fRC, _uM, _lBPID, _rO, _rSe, _lRT, _cPR, _eRP, _iWT, _iS, _ta, _eMSx, _cIGI, _idl],
  [
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    () => UtilizationMetrics,
    1,
    () => RecommendationOptions,
    () => RecommendationSources,
    4,
    0,
    () => EffectiveRecommendationPreferences,
    64 | 0,
    0,
    () => Tags,
    () => ExternalMetricStatus,
    () => GpuInfo,
    0,
  ]
);
export var InstanceRecommendationOption = struct(
  n0,
  _IRO,
  0,
  [_iT, _iGI, _pUM, _pD, _pR, _r, _sO, _sOAD, _mE],
  [
    0,
    () => GpuInfo,
    () => ProjectedUtilizationMetrics,
    64 | 0,
    1,
    1,
    () => SavingsOpportunity,
    () => InstanceSavingsOpportunityAfterDiscounts,
    0,
  ]
);
export var InstanceSavingsEstimationMode = struct(n0, _ISEM, 0, [_so], [0]);
export var InstanceSavingsOpportunityAfterDiscounts = struct(
  n0,
  _ISOADn,
  0,
  [_sOP, _eMS],
  [1, () => InstanceEstimatedMonthlySavings]
);
export var JobFilter = struct(n0, _JF, 0, [_n, _va], [0, 64 | 0]);
export var LambdaEffectiveRecommendationPreferences = struct(n0, _LERP, 0, [_sEM], [() => LambdaSavingsEstimationMode]);
export var LambdaEstimatedMonthlySavings = struct(n0, _LEMS, 0, [_cu, _v], [0, 1]);
export var LambdaFunctionMemoryProjectedMetric = struct(n0, _LFMPM, 0, [_n, _st, _v], [0, 0, 1]);
export var LambdaFunctionMemoryRecommendationOption = struct(
  n0,
  _LFMRO,
  0,
  [_r, _mSe, _pUM, _sO, _sOAD],
  [
    1,
    1,
    () => LambdaFunctionMemoryProjectedMetrics,
    () => SavingsOpportunity,
    () => LambdaSavingsOpportunityAfterDiscounts,
  ]
);
export var LambdaFunctionRecommendation = struct(
  n0,
  _LFR,
  0,
  [_fAu, _fV, _aI, _cMS, _nOI, _uM, _lPID, _lRT, _f, _fRC, _mSRO, _cPR, _eRP, _ta],
  [
    0,
    0,
    0,
    1,
    1,
    () => LambdaFunctionUtilizationMetrics,
    1,
    4,
    0,
    64 | 0,
    () => LambdaFunctionMemoryRecommendationOptions,
    0,
    () => LambdaEffectiveRecommendationPreferences,
    () => Tags,
  ]
);
export var LambdaFunctionUtilizationMetric = struct(n0, _LFUM, 0, [_n, _st, _v], [0, 0, 1]);
export var LambdaSavingsEstimationMode = struct(n0, _LSEM, 0, [_so], [0]);
export var LambdaSavingsOpportunityAfterDiscounts = struct(
  n0,
  _LSOAD,
  0,
  [_sOP, _eMS],
  [1, () => LambdaEstimatedMonthlySavings]
);
export var LicenseConfiguration = struct(
  n0,
  _LC,
  0,
  [_nOC, _iT, _oS, _lE, _lN, _lM, _lV, _mSet],
  [1, 0, 0, 0, 0, 0, 0, () => MetricsSource]
);
export var LicenseRecommendation = struct(
  n0,
  _LR,
  0,
  [_rA, _aI, _cLC, _lPID, _lRT, _f, _fRC, _lRO, _ta],
  [0, 0, () => LicenseConfiguration, 1, 4, 0, 64 | 0, () => LicenseRecommendationOptions, () => Tags]
);
export var LicenseRecommendationOption = struct(
  n0,
  _LRO,
  0,
  [_r, _oS, _lE, _lM, _sO],
  [1, 0, 0, 0, () => SavingsOpportunity]
);
export var MemorySizeConfiguration = struct(n0, _MSC, 0, [_mem, _mRe], [1, 1]);
export var MetricSource = struct(n0, _MS, 0, [_pr, _pA], [0, 0]);
export var RDSDBInstanceRecommendationOption = struct(
  n0,
  _RDSDBIRO,
  0,
  [_dIC, _pUM, _pR, _r, _sO, _sOAD],
  [
    0,
    () => RDSDBProjectedUtilizationMetrics,
    1,
    1,
    () => SavingsOpportunity,
    () => RDSInstanceSavingsOpportunityAfterDiscounts,
  ]
);
export var RDSDBRecommendation = struct(
  n0,
  _RDSDBR,
  0,
  [
    _rA,
    _aI,
    _en,
    _eV,
    _pT,
    _cDBIC,
    _cSCu,
    _dCI,
    _idl,
    _iF,
    _sF,
    _iFRC,
    _cIPR,
    _cSEMVIOPCV,
    _sFRC,
    _iRO,
    _sROt,
    _uM,
    _eRP,
    _lPID,
    _lRT,
    _ta,
  ],
  [
    0,
    0,
    0,
    0,
    1,
    0,
    () => DBStorageConfiguration,
    0,
    0,
    0,
    0,
    64 | 0,
    0,
    0,
    64 | 0,
    () => RDSDBInstanceRecommendationOptions,
    () => RDSDBStorageRecommendationOptions,
    () => RDSDBUtilizationMetrics,
    () => RDSEffectiveRecommendationPreferences,
    1,
    4,
    () => Tags,
  ]
);
export var RDSDBStorageRecommendationOption = struct(
  n0,
  _RDSDBSRO,
  0,
  [_sCt, _r, _sO, _sOAD, _eMVIOPCV],
  [() => DBStorageConfiguration, 1, () => SavingsOpportunity, () => RDSStorageSavingsOpportunityAfterDiscounts, 0]
);
export var RDSDBUtilizationMetric = struct(n0, _RDSDBUM, 0, [_n, _st, _v], [0, 0, 1]);
export var RDSEffectiveRecommendationPreferences = struct(
  n0,
  _RDSERP,
  0,
  [_cVA, _eIM, _lBP, _sEM],
  [64 | 0, 0, 0, () => RDSSavingsEstimationMode]
);
export var RDSInstanceEstimatedMonthlySavings = struct(n0, _RDSIEMS, 0, [_cu, _v], [0, 1]);
export var RDSInstanceSavingsOpportunityAfterDiscounts = struct(
  n0,
  _RDSISOAD,
  0,
  [_sOP, _eMS],
  [1, () => RDSInstanceEstimatedMonthlySavings]
);
export var RDSSavingsEstimationMode = struct(n0, _RDSSEM, 0, [_so], [0]);
export var RDSStorageEstimatedMonthlySavings = struct(n0, _RDSSEMS, 0, [_cu, _v], [0, 1]);
export var RDSStorageSavingsOpportunityAfterDiscounts = struct(
  n0,
  _RDSSSOAD,
  0,
  [_sOP, _eMS],
  [1, () => RDSStorageEstimatedMonthlySavings]
);
export var ReasonCodeSummary = struct(n0, _RCS, 0, [_n, _v], [0, 1]);
export var RecommendationExportJob = struct(
  n0,
  _REJ,
  0,
  [_jIo, _de, _rT, _s, _cT, _lUT, _fR],
  [0, () => ExportDestination, 0, 0, 4, 4, 0]
);
export var RecommendationPreferencesDetail = struct(
  n0,
  _RPD,
  0,
  [_sc, _rT, _eIM, _iWT, _eMP, _lBP, _uP, _pRr, _sEM],
  [
    () => Scope,
    0,
    0,
    0,
    () => ExternalMetricsPreference,
    0,
    () => UtilizationPreferences,
    () => EffectivePreferredResources,
    0,
  ]
);
export var RecommendationSource = struct(n0, _RS, 0, [_rSA, _rST], [0, 0]);
export var RecommendationSummary = struct(
  n0,
  _RSe,
  0,
  [_su, _iSd, _rRT, _aI, _sO, _iSO, _aSO, _cPRR, _iWS],
  [
    () => Summaries,
    () => IdleSummaries,
    0,
    0,
    () => SavingsOpportunity,
    () => SavingsOpportunity,
    () => SavingsOpportunity,
    () => CurrentPerformanceRiskRatings,
    () => InferredWorkloadSavings,
  ]
);
export var SavingsOpportunity = struct(n0, _SO, 0, [_sOP, _eMS], [1, () => EstimatedMonthlySavings]);
export var ServiceConfiguration = struct(
  n0,
  _SC,
  0,
  [_mem, _cp, _cCo, _aSC, _tDA],
  [1, 1, () => ContainerConfigurations, 0, 0]
);
export var Summary = struct(n0, _Su, 0, [_n, _v, _rCS], [0, 1, () => ReasonCodeSummaries]);
export var UtilizationMetric = struct(n0, _UM, 0, [_n, _st, _v], [0, 0, 1]);
export var VolumeConfiguration = struct(
  n0,
  _VC,
  0,
  [_vT, _vS, _vBIOPS, _vBIOPSo, _vBT, _vBTo, _rV],
  [0, 1, 1, 1, 1, 1, 2]
);
export var VolumeRecommendation = struct(
  n0,
  _VR,
  0,
  [_vAo, _aI, _cC, _f, _uM, _lBPID, _vRO, _lRT, _cPR, _eRP, _ta],
  [
    0,
    0,
    () => VolumeConfiguration,
    0,
    () => EBSUtilizationMetrics,
    1,
    () => VolumeRecommendationOptions,
    4,
    0,
    () => EBSEffectiveRecommendationPreferences,
    () => Tags,
  ]
);
export var VolumeRecommendationOption = struct(
  n0,
  _VRO,
  0,
  [_co, _pR, _r, _sO, _sOAD],
  [() => VolumeConfiguration, 1, 1, () => SavingsOpportunity, () => EBSSavingsOpportunityAfterDiscounts]
);
export var AccountEnrollmentStatuses = list(n0, _AESc, 0, () => AccountEnrollmentStatus);
export var AutoScalingGroupArns = 64 | 0;

export var AutoScalingGroupRecommendationOptions = list(n0, _ASGROu, 0, () => AutoScalingGroupRecommendationOption);
export var AutoScalingGroupRecommendations = list(n0, _ASGRu, 0, () => AutoScalingGroupRecommendation);
export var ContainerConfigurations = list(n0, _CCo, 0, () => ContainerConfiguration);
export var ContainerRecommendations = list(n0, _CRo, 0, () => ContainerRecommendation);
export var EBSUtilizationMetrics = list(n0, _EBSUMt, 0, () => EBSUtilizationMetric);
export var ECSServiceProjectedUtilizationMetrics = list(n0, _ECSSPUMe, 0, () => ECSServiceProjectedUtilizationMetric);
export var ECSServiceRecommendationFindingReasonCodes = 64 | 0;

export var ECSServiceRecommendationOptions = list(n0, _ECSSROe, 0, () => ECSServiceRecommendationOption);
export var ECSServiceRecommendations = list(n0, _ECSSRe, 0, () => ECSServiceRecommendation);
export var ECSServiceUtilizationMetrics = list(n0, _ECSSUMe, 0, () => ECSServiceUtilizationMetric);
export var EnrollmentFilters = list(n0, _EFn, 0, () => EnrollmentFilter);
export var FunctionArns = 64 | 0;

export var GetRecommendationErrors = list(n0, _GREe, 0, () => GetRecommendationError);
export var Gpus = list(n0, _Gp, 0, () => Gpu);
export var IdleSummaries = list(n0, _ISd, 0, () => IdleSummary);
export var InferredWorkloadSavings = list(n0, _IWSn, 0, () => InferredWorkloadSaving);
export var InferredWorkloadTypes = 64 | 0;

export var InstanceArns = 64 | 0;

export var InstanceRecommendationFindingReasonCodes = 64 | 0;

export var InstanceRecommendations = list(n0, _IRns, 0, () => InstanceRecommendation);
export var JobFilters = list(n0, _JFo, 0, () => JobFilter);
export var JobIds = 64 | 0;

export var LambdaFunctionMemoryProjectedMetrics = list(n0, _LFMPMa, 0, () => LambdaFunctionMemoryProjectedMetric);
export var LambdaFunctionMemoryRecommendationOptions = list(
  n0,
  _LFMROa,
  0,
  () => LambdaFunctionMemoryRecommendationOption
);
export var LambdaFunctionRecommendationFindingReasonCodes = 64 | 0;

export var LambdaFunctionRecommendations = list(n0, _LFRa, 0, () => LambdaFunctionRecommendation);
export var LambdaFunctionUtilizationMetrics = list(n0, _LFUMa, 0, () => LambdaFunctionUtilizationMetric);
export var LicenseFindingReasonCodes = 64 | 0;

export var LicenseRecommendationOptions = list(n0, _LROi, 0, () => LicenseRecommendationOption);
export var LicenseRecommendations = list(n0, _LRi, 0, () => LicenseRecommendation);
export var MetricsSource = list(n0, _MSe, 0, () => MetricSource);
export var MixedInstanceTypes = 64 | 0;

export var PlatformDifferences = 64 | 0;

export var ProjectedUtilizationMetrics = list(n0, _PUM, 0, () => UtilizationMetric);
export var RDSDBInstanceRecommendationOptions = list(n0, _RDSDBIROn, 0, () => RDSDBInstanceRecommendationOption);
export var RDSDBProjectedUtilizationMetrics = list(n0, _RDSDBPUM, 0, () => RDSDBUtilizationMetric);
export var RDSDBRecommendations = list(n0, _RDSDBRe, 0, () => RDSDBRecommendation);
export var RDSDBStorageRecommendationOptions = list(n0, _RDSDBSROt, 0, () => RDSDBStorageRecommendationOption);
export var RDSDBUtilizationMetrics = list(n0, _RDSDBUMt, 0, () => RDSDBUtilizationMetric);
export var RDSInstanceFindingReasonCodes = 64 | 0;

export var RDSStorageFindingReasonCodes = 64 | 0;

export var ReasonCodeSummaries = list(n0, _RCSe, 0, () => ReasonCodeSummary);
export var RecommendationExportJobs = list(n0, _REJe, 0, () => RecommendationExportJob);
export var RecommendationOptions = list(n0, _RO, 0, () => InstanceRecommendationOption);
export var RecommendationPreferencesDetails = list(n0, _RPDe, 0, () => RecommendationPreferencesDetail);
export var RecommendationSources = list(n0, _RSec, 0, () => RecommendationSource);
export var RecommendationSummaries = list(n0, _RSeco, 0, () => RecommendationSummary);
export var ServiceArns = 64 | 0;

export var Summaries = list(n0, _Sum, 0, () => Summary);
export var UtilizationMetrics = list(n0, _UMt, 0, () => UtilizationMetric);
export var VolumeArns = 64 | 0;

export var VolumeRecommendationOptions = list(n0, _VROo, 0, () => VolumeRecommendationOption);
export var VolumeRecommendations = list(n0, _VRo, 0, () => VolumeRecommendation);
export var DescribeRecommendationExportJobs = op(
  n0,
  _DREJ,
  0,
  () => DescribeRecommendationExportJobsRequest,
  () => DescribeRecommendationExportJobsResponse
);
export var GetAutoScalingGroupRecommendations = op(
  n0,
  _GASGR,
  0,
  () => GetAutoScalingGroupRecommendationsRequest,
  () => GetAutoScalingGroupRecommendationsResponse
);
export var GetEBSVolumeRecommendations = op(
  n0,
  _GEBSVR,
  0,
  () => GetEBSVolumeRecommendationsRequest,
  () => GetEBSVolumeRecommendationsResponse
);
export var GetEC2InstanceRecommendations = op(
  n0,
  _GECIR,
  0,
  () => GetEC2InstanceRecommendationsRequest,
  () => GetEC2InstanceRecommendationsResponse
);
export var GetECSServiceRecommendations = op(
  n0,
  _GECSSR,
  0,
  () => GetECSServiceRecommendationsRequest,
  () => GetECSServiceRecommendationsResponse
);
export var GetEnrollmentStatusesForOrganization = op(
  n0,
  _GESFO,
  0,
  () => GetEnrollmentStatusesForOrganizationRequest,
  () => GetEnrollmentStatusesForOrganizationResponse
);
export var GetLambdaFunctionRecommendations = op(
  n0,
  _GLFR,
  0,
  () => GetLambdaFunctionRecommendationsRequest,
  () => GetLambdaFunctionRecommendationsResponse
);
export var GetLicenseRecommendations = op(
  n0,
  _GLR,
  0,
  () => GetLicenseRecommendationsRequest,
  () => GetLicenseRecommendationsResponse
);
export var GetRDSDatabaseRecommendations = op(
  n0,
  _GRDSDR,
  0,
  () => GetRDSDatabaseRecommendationsRequest,
  () => GetRDSDatabaseRecommendationsResponse
);
export var GetRecommendationPreferences = op(
  n0,
  _GRP,
  0,
  () => GetRecommendationPreferencesRequest,
  () => GetRecommendationPreferencesResponse
);
export var GetRecommendationSummaries = op(
  n0,
  _GRS,
  0,
  () => GetRecommendationSummariesRequest,
  () => GetRecommendationSummariesResponse
);
