// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _ADpp,
  _AIS,
  _AISD,
  _AISTA,
  _ANlg,
  _B,
  _BDMP,
  _BDMPE,
  _BDMPEM,
  _BDMPI,
  _BDMPO,
  _BDMPS,
  _C,
  _CB,
  _CCon,
  _CDon,
  _CF,
  _CFM,
  _CIRJ,
  _CIRJR,
  _CIRJRr,
  _CMP,
  _CMPI,
  _CMPO,
  _CMPr,
  _CMPTR,
  _COCo,
  _Cons,
  _CPa,
  _CPat,
  _CPRa,
  _CT,
  _CTA,
  _CTB,
  _CTl,
  _CTom,
  _CTon,
  _D,
  _DCB,
  _DCBr,
  _DCE,
  _DCMDQ,
  _DCMQ,
  _DICa,
  _DIRJ,
  _DIRJR,
  _DIRJRe,
  _DIS,
  _DMPe,
  _DMPIe,
  _DMPO,
  _Do,
  _EC,
  _ECnd,
  _ECndpoi,
  _EIC,
  _EICnd,
  _EInd,
  _EN,
  _End,
  _EP,
  _EPn,
  _EPR,
  _ER,
  _Ex,
  _FI,
  _FR,
  _Fr,
  _FS,
  _FV,
  _ICnp,
  _IET,
  _INOU,
  _IRJ,
  _IRJn,
  _IRn,
  _IRnf,
  _ISN,
  _ISn,
  _ISS,
  _IST,
  _IT,
  _JA,
  _JD,
  _JDIS,
  _JN,
  _JT,
  _KKI,
  _LIRJ,
  _LIRJR,
  _LIRJRi,
  _LMB,
  _LMP,
  _LMPI,
  _LMPO,
  _LMT,
  _LMTA,
  _LMTB,
  _MAS,
  _MCC,
  _MCod,
  _MCode,
  _MCS,
  _MDET,
  _MDQ,
  _MDS,
  _MDU,
  _Met,
  _MIa,
  _MLC,
  _MLT,
  _MLTo,
  _MM,
  _MNE,
  _MNo,
  _MNOT,
  _MP,
  _MPA,
  _MPAL,
  _MPD,
  _MPGN,
  _MPMC,
  _MPN,
  _MPOT,
  _MPS,
  _MPSC,
  _MPSD,
  _MPSI,
  _MPSIL,
  _MPSL,
  _MPSo,
  _MPSod,
  _MPT,
  _MPV,
  _MPVA,
  _MPVAE,
  _MPVP,
  _MPVPo,
  _MPVS,
  _MQ,
  _MR,
  _MSe,
  _N,
  _NCa,
  _NMN,
  _NOSu,
  _NT,
  _OC,
  _PCay,
  _Per,
  _Ph,
  _Pha,
  _PN,
  _PTC,
  _PTCo,
  _PTR,
  _PTRo,
  _R,
  _RAo,
  _RIe,
  _RJCC,
  _RJCOC,
  _RJIC,
  _RJOC,
  _RJPC,
  _RJRL,
  _RJSC,
  _RJVC,
  _RLe,
  _SAL,
  _SAo,
  _SAou,
  _SAS,
  _SBo,
  _SC,
  _SCe,
  _SCT,
  _SCto,
  _SDta,
  _SE,
  _SET,
  _SGI,
  _SITu,
  _SMV,
  _SO,
  _SOU,
  _SPU,
  _SRIIT,
  _SRMIMET,
  _SRp,
  _SSt,
  _St,
  _Stag,
  _Stai,
  _Stati,
  _STIT,
  _SU,
  _Sub,
  _SUr,
  _T,
  _Ta,
  _TJDr,
  _TPr,
  _TTr,
  _UMP,
  _UMPI,
  _UMPO,
  _UPS,
  _Va,
  _VC,
  _VIM,
  _VKKI,
  _VP,
  _VR,
  _VS,
  _VSa,
  n0,
  TagList,
  UserContext,
} from "./schemas_0";
import {
  EndpointOutputConfiguration,
  InferenceMetrics,
  ModelConfiguration,
  ProductionVariantServerlessConfig,
  RecommendationMetrics,
} from "./schemas_12_Endpoint";
import { InferenceSpecification, ModelDataSource, ModelPackageContainerDefinitionList } from "./schemas_17_Model";
import { TransformJobDefinition } from "./schemas_42_Job";
import { MetadataProperties } from "./schemas_58_Describe";
import { ModelCardContent } from "./schemas_89_Model";

/* eslint no-var: 0 */

export var AdditionalInferenceSpecificationDefinition = struct(
  n0,
  _AISD,
  0,
  [_N, _D, _C, _STIT, _SRIIT, _SCT, _SRMIMET],
  [0, 0, () => ModelPackageContainerDefinitionList, 64 | 0, 64 | 0, 64 | 0, 64 | 0]
);
export var BatchDescribeModelPackageError = struct(n0, _BDMPE, 0, [_EC, _ER], [0, 0]);
export var BatchDescribeModelPackageInput = struct(n0, _BDMPI, 0, [_MPAL], [64 | 0]);
export var BatchDescribeModelPackageOutput = struct(
  n0,
  _BDMPO,
  0,
  [_MPS, _BDMPEM],
  [() => ModelPackageSummaries, () => BatchDescribeModelPackageErrorMap]
);
export var BatchDescribeModelPackageSummary = struct(
  n0,
  _BDMPS,
  0,
  [_MPGN, _MPV, _MPA, _MPD, _CT, _ISn, _MPSo, _MAS],
  [0, 1, 0, 0, 4, () => InferenceSpecification, 0, 0]
);
export var Bias = struct(n0, _B, 0, [_R, _PTR, _PTRo], [() => MetricsSource, () => MetricsSource, () => MetricsSource]);
export var CategoricalParameter = struct(n0, _CPa, 0, [_N, _Va], [0, 64 | 0]);
export var CreateInferenceRecommendationsJobRequest = struct(
  n0,
  _CIRJR,
  0,
  [_JN, _JT, _RAo, _ICnp, _JD, _SCto, _OC, _T],
  [
    0,
    0,
    0,
    () => RecommendationJobInputConfig,
    0,
    () => RecommendationJobStoppingConditions,
    () => RecommendationJobOutputConfig,
    () => TagList,
  ]
);
export var CreateInferenceRecommendationsJobResponse = struct(n0, _CIRJRr, 0, [_JA], [0]);
export var CreateModelPackageInput = struct(
  n0,
  _CMPI,
  0,
  [
    _MPN,
    _MPGN,
    _MPD,
    _ISn,
    _VSa,
    _SAS,
    _CFM,
    _T,
    _MAS,
    _MP,
    _MM,
    _CTl,
    _Do,
    _Ta,
    _SPU,
    _CMP,
    _DCB,
    _AIS,
    _SMV,
    _SU,
    _SC,
    _MCod,
    _MLC,
  ],
  [
    0,
    0,
    0,
    () => InferenceSpecification,
    () => ModelPackageValidationSpecification,
    () => SourceAlgorithmSpecification,
    2,
    () => TagList,
    0,
    () => MetadataProperties,
    () => ModelMetrics,
    [0, 4],
    0,
    0,
    0,
    128 | 0,
    () => DriftCheckBaselines,
    () => AdditionalInferenceSpecifications,
    0,
    0,
    () => ModelPackageSecurityConfig,
    [() => ModelPackageModelCard, 0],
    () => ModelLifeCycle,
  ]
);
export var CreateModelPackageOutput = struct(n0, _CMPO, 0, [_MPA], [0]);
export var DescribeInferenceRecommendationsJobRequest = struct(n0, _DIRJR, 0, [_JN], [0]);
export var DescribeInferenceRecommendationsJobResponse = struct(
  n0,
  _DIRJRe,
  0,
  [_JN, _JD, _JT, _JA, _RAo, _St, _CT, _CTom, _LMT, _FR, _ICnp, _SCto, _IRn, _EP],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    4,
    0,
    () => RecommendationJobInputConfig,
    () => RecommendationJobStoppingConditions,
    () => InferenceRecommendations,
    () => EndpointPerformances,
  ]
);
export var DescribeModelPackageInput = struct(n0, _DMPIe, 0, [_MPN], [0]);
export var DescribeModelPackageOutput = struct(
  n0,
  _DMPO,
  0,
  [
    _MPN,
    _MPGN,
    _MPV,
    _MPA,
    _MPD,
    _CT,
    _ISn,
    _SAS,
    _VSa,
    _MPSo,
    _MPSD,
    _CFM,
    _MAS,
    _CB,
    _MP,
    _MM,
    _LMT,
    _LMB,
    _ADpp,
    _Do,
    _Ta,
    _SPU,
    _CMP,
    _DCB,
    _AIS,
    _SMV,
    _SU,
    _SC,
    _MCod,
    _MLC,
  ],
  [
    0,
    0,
    1,
    0,
    0,
    4,
    () => InferenceSpecification,
    () => SourceAlgorithmSpecification,
    () => ModelPackageValidationSpecification,
    0,
    () => ModelPackageStatusDetails,
    2,
    0,
    () => UserContext,
    () => MetadataProperties,
    () => ModelMetrics,
    4,
    () => UserContext,
    0,
    0,
    0,
    0,
    128 | 0,
    () => DriftCheckBaselines,
    () => AdditionalInferenceSpecifications,
    0,
    0,
    () => ModelPackageSecurityConfig,
    [() => ModelPackageModelCard, 0],
    () => ModelLifeCycle,
  ]
);
export var DriftCheckBaselines = struct(
  n0,
  _DCB,
  0,
  [_B, _Ex, _MQ, _MDQ],
  [() => DriftCheckBias, () => DriftCheckExplainability, () => DriftCheckModelQuality, () => DriftCheckModelDataQuality]
);
export var DriftCheckBias = struct(
  n0,
  _DCBr,
  0,
  [_CF, _PTC, _PTCo],
  [() => FileSource, () => MetricsSource, () => MetricsSource]
);
export var DriftCheckExplainability = struct(n0, _DCE, 0, [_Cons, _CF], [() => MetricsSource, () => FileSource]);
export var DriftCheckModelDataQuality = struct(
  n0,
  _DCMDQ,
  0,
  [_Stati, _Cons],
  [() => MetricsSource, () => MetricsSource]
);
export var DriftCheckModelQuality = struct(n0, _DCMQ, 0, [_Stati, _Cons], [() => MetricsSource, () => MetricsSource]);
export var EndpointInfo = struct(n0, _EInd, 0, [_EN], [0]);
export var EndpointInputConfiguration = struct(
  n0,
  _EIC,
  0,
  [_IT, _SCe, _ISN, _EPR],
  [0, () => ProductionVariantServerlessConfig, 0, () => EnvironmentParameterRanges]
);
export var EndpointPerformance = struct(n0, _EPn, 0, [_Met, _EInd], [() => InferenceMetrics, () => EndpointInfo]);
export var EnvironmentParameterRanges = struct(n0, _EPR, 0, [_CPRa], [() => CategoricalParameters]);
export var Explainability = struct(n0, _Ex, 0, [_R], [() => MetricsSource]);
export var FileSource = struct(n0, _FS, 0, [_CTon, _CDon, _SUr], [0, 0, 0]);
export var InferenceRecommendation = struct(
  n0,
  _IRnf,
  0,
  [_RIe, _Met, _ECnd, _MCode, _IET, _IST],
  [0, () => RecommendationMetrics, () => EndpointOutputConfiguration, () => ModelConfiguration, 4, 4]
);
export var InferenceRecommendationsJob = struct(
  n0,
  _IRJ,
  0,
  [_JN, _JD, _JT, _JA, _St, _CT, _CTom, _RAo, _LMT, _FR, _MNo, _SPU, _MPVA],
  [0, 0, 0, 0, 0, 4, 4, 0, 4, 0, 0, 0, 0]
);
export var ListInferenceRecommendationsJobsRequest = struct(
  n0,
  _LIRJR,
  0,
  [_CTA, _CTB, _LMTA, _LMTB, _NCa, _SE, _SBo, _SO, _NT, _MR, _MNE, _MPVAE],
  [4, 4, 4, 4, 0, 0, 0, 0, 0, 1, 0, 0]
);
export var ListInferenceRecommendationsJobsResponse = struct(
  n0,
  _LIRJRi,
  0,
  [_IRJn, _NT],
  [() => InferenceRecommendationsJobs, 0]
);
export var ListModelPackagesInput = struct(
  n0,
  _LMPI,
  0,
  [_CTA, _CTB, _MR, _NCa, _MAS, _MPGN, _MPT, _NT, _SBo, _SO],
  [4, 4, 1, 0, 0, 0, 0, 0, 0, 0]
);
export var ListModelPackagesOutput = struct(n0, _LMPO, 0, [_MPSL, _NT], [() => ModelPackageSummaryList, 0]);
export var MetricsSource = struct(n0, _MSe, 0, [_CTon, _CDon, _SUr], [0, 0, 0]);
export var ModelDataQuality = struct(n0, _MDQ, 0, [_Stati, _Cons], [() => MetricsSource, () => MetricsSource]);
export var ModelLatencyThreshold = struct(n0, _MLT, 0, [_Per, _VIM], [0, 1]);
export var ModelLifeCycle = struct(n0, _MLC, 0, [_Stag, _SSt, _SDta], [0, 0, 0]);
export var ModelMetrics = struct(
  n0,
  _MM,
  0,
  [_MQ, _MDQ, _B, _Ex],
  [() => ModelQuality, () => ModelDataQuality, () => Bias, () => Explainability]
);
export var ModelPackageModelCard = struct(n0, _MPMC, 0, [_MCC, _MCS], [[() => ModelCardContent, 0], 0]);
export var ModelPackageSecurityConfig = struct(n0, _MPSC, 0, [_KKI], [0]);
export var ModelPackageStatusDetails = struct(
  n0,
  _MPSD,
  0,
  [_VS, _ISS],
  [() => ModelPackageStatusItemList, () => ModelPackageStatusItemList]
);
export var ModelPackageStatusItem = struct(n0, _MPSI, 0, [_N, _St, _FR], [0, 0, 0]);
export var ModelPackageSummary = struct(
  n0,
  _MPSod,
  0,
  [_MPN, _MPGN, _MPV, _MPA, _MPD, _CT, _MPSo, _MAS, _MLC],
  [0, 0, 1, 0, 0, 4, 0, 0, () => ModelLifeCycle]
);
export var ModelPackageValidationProfile = struct(n0, _MPVP, 0, [_PN, _TJDr], [0, () => TransformJobDefinition]);
export var ModelPackageValidationSpecification = struct(
  n0,
  _MPVS,
  0,
  [_VR, _VP],
  [0, () => ModelPackageValidationProfiles]
);
export var ModelQuality = struct(n0, _MQ, 0, [_Stati, _Cons], [() => MetricsSource, () => MetricsSource]);
export var Phase = struct(n0, _Ph, 0, [_INOU, _SRp, _DIS], [1, 1, 1]);
export var RecommendationJobCompiledOutputConfig = struct(n0, _RJCOC, 0, [_SOU], [0]);
export var RecommendationJobContainerConfig = struct(
  n0,
  _RJCC,
  0,
  [_Do, _Ta, _Fr, _FV, _PCay, _NMN, _SITu, _SET, _DICa, _SRMIMET],
  [0, 0, 0, 0, () => RecommendationJobPayloadConfig, 0, 64 | 0, 0, 0, 64 | 0]
);
export var RecommendationJobInputConfig = struct(
  n0,
  _RJIC,
  0,
  [_MPVA, _MNo, _JDIS, _TPr, _RLe, _ECndpoi, _VKKI, _CCon, _End, _VC],
  [
    0,
    0,
    1,
    () => TrafficPattern,
    () => RecommendationJobResourceLimit,
    () => EndpointInputConfigurations,
    0,
    () => RecommendationJobContainerConfig,
    () => Endpoints,
    () => RecommendationJobVpcConfig,
  ]
);
export var RecommendationJobOutputConfig = struct(
  n0,
  _RJOC,
  0,
  [_KKI, _COCo],
  [0, () => RecommendationJobCompiledOutputConfig]
);
export var RecommendationJobPayloadConfig = struct(n0, _RJPC, 0, [_SPU, _SCT], [0, 64 | 0]);
export var RecommendationJobResourceLimit = struct(n0, _RJRL, 0, [_MNOT, _MPOT], [1, 1]);
export var RecommendationJobStoppingConditions = struct(
  n0,
  _RJSC,
  0,
  [_MIa, _MLTo, _FI],
  [1, () => ModelLatencyThresholds, 0]
);
export var RecommendationJobVpcConfig = struct(n0, _RJVC, 0, [_SGI, _Sub], [64 | 0, 64 | 0]);
export var SourceAlgorithm = struct(n0, _SAo, 0, [_MDU, _MDS, _MDET, _ANlg], [0, () => ModelDataSource, 0, 0]);
export var SourceAlgorithmSpecification = struct(n0, _SAS, 0, [_SAou], [() => SourceAlgorithmList]);
export var Stairs = struct(n0, _Stai, 0, [_DIS, _NOSu, _UPS], [1, 1, 1]);
export var TrafficPattern = struct(n0, _TPr, 0, [_TTr, _Pha, _Stai], [0, () => Phases, () => Stairs]);
export var UpdateModelPackageInput = struct(
  n0,
  _UMPI,
  0,
  [_MPA, _MAS, _ADpp, _CMP, _CMPTR, _AISTA, _ISn, _SU, _MCod, _MLC, _CTl],
  [
    0,
    0,
    0,
    128 | 0,
    64 | 0,
    () => AdditionalInferenceSpecifications,
    () => InferenceSpecification,
    0,
    [() => ModelPackageModelCard, 0],
    () => ModelLifeCycle,
    0,
  ]
);
export var UpdateModelPackageOutput = struct(n0, _UMPO, 0, [_MPA], [0]);
export var AdditionalInferenceSpecifications = list(n0, _AIS, 0, () => AdditionalInferenceSpecificationDefinition);
export var CategoricalParameterRangeValues = 64 | 0;

export var CategoricalParameters = list(n0, _CPat, 0, () => CategoricalParameter);
export var CustomerMetadataKeyList = 64 | 0;

export var EndpointInputConfigurations = list(n0, _EICnd, 0, () => EndpointInputConfiguration);
export var EndpointPerformances = list(n0, _EP, 0, () => EndpointPerformance);
export var Endpoints = list(n0, _End, 0, () => EndpointInfo);
export var InferenceRecommendations = list(n0, _IRn, 0, () => InferenceRecommendation);
export var InferenceRecommendationsJobs = list(n0, _IRJn, 0, () => InferenceRecommendationsJob);
export var ModelLatencyThresholds = list(n0, _MLTo, 0, () => ModelLatencyThreshold);
export var ModelPackageArnList = 64 | 0;

export var ModelPackageStatusItemList = list(n0, _MPSIL, 0, () => ModelPackageStatusItem);
export var ModelPackageSummaryList = list(n0, _MPSL, 0, () => ModelPackageSummary);
export var ModelPackageValidationProfiles = list(n0, _MPVPo, 0, () => ModelPackageValidationProfile);
export var Phases = list(n0, _Pha, 0, () => Phase);
export var RecommendationJobSupportedContentTypes = 64 | 0;

export var RecommendationJobSupportedInstanceTypes = 64 | 0;

export var RecommendationJobSupportedResponseMIMETypes = 64 | 0;

export var RecommendationJobVpcSecurityGroupIds = 64 | 0;

export var RecommendationJobVpcSubnets = 64 | 0;

export var SourceAlgorithmList = list(n0, _SAL, 0, () => SourceAlgorithm);
export var BatchDescribeModelPackageErrorMap = map(n0, _BDMPEM, 0, 0, () => BatchDescribeModelPackageError);
export var CustomerMetadataMap = 128 | 0;

export var ModelPackageSummaries = map(n0, _MPS, 0, 0, () => BatchDescribeModelPackageSummary);
export var BatchDescribeModelPackage = op(
  n0,
  _BDMP,
  0,
  () => BatchDescribeModelPackageInput,
  () => BatchDescribeModelPackageOutput
);
export var CreateInferenceRecommendationsJob = op(
  n0,
  _CIRJ,
  0,
  () => CreateInferenceRecommendationsJobRequest,
  () => CreateInferenceRecommendationsJobResponse
);
export var CreateModelPackage = op(
  n0,
  _CMPr,
  0,
  () => CreateModelPackageInput,
  () => CreateModelPackageOutput
);
export var DescribeInferenceRecommendationsJob = op(
  n0,
  _DIRJ,
  0,
  () => DescribeInferenceRecommendationsJobRequest,
  () => DescribeInferenceRecommendationsJobResponse
);
export var DescribeModelPackage = op(
  n0,
  _DMPe,
  0,
  () => DescribeModelPackageInput,
  () => DescribeModelPackageOutput
);
export var ListInferenceRecommendationsJobs = op(
  n0,
  _LIRJ,
  0,
  () => ListInferenceRecommendationsJobsRequest,
  () => ListInferenceRecommendationsJobsResponse
);
export var ListModelPackages = op(
  n0,
  _LMP,
  0,
  () => ListModelPackagesInput,
  () => ListModelPackagesOutput
);
export var UpdateModelPackage = op(
  n0,
  _UMP,
  0,
  () => UpdateModelPackageInput,
  () => UpdateModelPackageOutput
);
