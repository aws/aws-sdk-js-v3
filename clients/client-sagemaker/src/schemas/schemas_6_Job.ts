// smithy-typescript generated code
import { list, map, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _ACl,
  _ACt,
  _Ag,
  _AGEN,
  _AMLA,
  _AMLAC,
  _AMLACu,
  _AMLCC,
  _AMLCGC,
  _AMLCu,
  _AMLDS,
  _AMLDSC,
  _AMLIDC,
  _AMLJ,
  _AMLJA,
  _AMLJAu,
  _AMLJC,
  _AMLJCC,
  _AMLJCu,
  _AMLJIDC,
  _AMLJN,
  _AMLJO,
  _AMLJS,
  _AMLJSM,
  _AMLJSS,
  _AMLJSu,
  _AMLJSut,
  _AMLODC,
  _AMLPFR,
  _AMLPFRu,
  _AMLPTC,
  _AMLPTCN,
  _AMLPTRA,
  _AMLRA,
  _AMLSC,
  _AMLSDS,
  _Ar,
  _BC,
  _BMN,
  _BUFDCC,
  _BUFDCS,
  _Cal,
  _CAMLJ,
  _CAMLJR,
  _CAMLJRr,
  _CAMLJV,
  _CAMLJVR,
  _CAMLJVRr,
  _CBC,
  _CBS,
  _CCla,
  _CCo,
  _CConte,
  _CCou,
  _CCSM,
  _CDNL,
  _CGC,
  _CHR,
  _CIlu,
  _CJA,
  _Cond,
  _CSM,
  _CSMo,
  _CT,
  _CTA,
  _CTa,
  _CTB,
  _CTh,
  _CThe,
  _CTo,
  _CTon,
  _DAMLJ,
  _DAMLJR,
  _DAMLJRe,
  _DAMLJV,
  _DAMLJVR,
  _DAMLJVRe,
  _DENL,
  _DS,
  _DSC,
  _ECndpo,
  _ECSM,
  _EICTE,
  _EMR,
  _EMr,
  _EMRSM,
  _EN,
  _En,
  _ERARN,
  _ESCC,
  _ESM,
  _ETn,
  _Fa,
  _FF,
  _FHo,
  _Fill,
  _FQ,
  _FR,
  _FSM,
  _FSSU,
  _FTi,
  _GAN,
  _GCDO,
  _HC,
  _HCAo,
  _ICJC,
  _IDC,
  _IIAN,
  _KKI,
  _La,
  _LAMLJ,
  _LAMLJR,
  _LAMLJRi,
  _LFP,
  _LMT,
  _LMTA,
  _LMTB,
  _LPES,
  _LPESR,
  _LPESRi,
  _LSM,
  _M,
  _MAC,
  _MAMLJRIS,
  _MC,
  _MDC,
  _MDR,
  _Meta,
  _MN,
  _Mod,
  _MPGN,
  _MR,
  _MRPTJIS,
  _MSM,
  _NCa,
  _NT,
  _O,
  _ODC,
  _OP,
  _PEA,
  _PESip,
  _PESipe,
  _PESL,
  _PESM,
  _PFM,
  _PFR,
  _PJ,
  _PJSM,
  _PT,
  _QC,
  _QCSM,
  _RAe,
  _RAo,
  _RMe,
  _RMSM,
  _RNB,
  _SBo,
  _SC,
  _SCk,
  _SDNt,
  _SDS,
  _SDT,
  _SDte,
  _SE,
  _SER,
  _SIt,
  _SNte,
  _SO,
  _SOP,
  _SPEA,
  _SQU,
  _SSte,
  _STt,
  _SUr,
  _SWAN,
  _T,
  _TAN,
  _TANi,
  _TCJC,
  _TGHP,
  _TGJC,
  _TGRA,
  _TJ,
  _TJC,
  _TJr,
  _TJSM,
  _TJSMD,
  _TJSMr,
  _TJu,
  _TLC,
  _TRA,
  _Tra,
  _TSCi,
  _TSFJC,
  _TSTi,
  _VC,
  _VF,
  _VKKI,
  _VRi,
  ModelAccessConfig,
  n0,
  TagList,
  VpcConfig,
} from "./schemas_0";
import { AutoMLCandidate } from "./schemas_29_Auto";
import { OutputParameterList } from "./schemas_162_Execution";

/* eslint no-var: 0 */

export var AutoMLAlgorithmConfig = struct(n0, _AMLAC, 0, [_AMLA], [64 | 0]);
export var AutoMLCandidateGenerationConfig = struct(n0, _AMLCGC, 0, [_FSSU, _ACl], [0, () => AutoMLAlgorithmsConfig]);
export var AutoMLChannel = struct(
  n0,
  _AMLCu,
  0,
  [_DS, _CTo, _TAN, _CTon, _CTh, _SWAN],
  [() => AutoMLDataSource, 0, 0, 0, 0, 0]
);
export var AutoMLComputeConfig = struct(n0, _AMLCC, 0, [_ESCC], [() => EmrServerlessComputeConfig]);
export var AutoMLDataSource = struct(n0, _AMLDS, 0, [_SDS], [() => AutoMLS3DataSource]);
export var AutoMLDataSplitConfig = struct(n0, _AMLDSC, 0, [_VF], [1]);
export var AutoMLJobArtifacts = struct(n0, _AMLJA, 0, [_CDNL, _DENL], [0, 0]);
export var AutoMLJobChannel = struct(n0, _AMLJC, 0, [_CTh, _CTon, _CTo, _DS], [0, 0, 0, () => AutoMLDataSource]);
export var AutoMLJobCompletionCriteria = struct(n0, _AMLJCC, 0, [_MC, _MRPTJIS, _MAMLJRIS], [1, 1, 1]);
export var AutoMLJobConfig = struct(
  n0,
  _AMLJCu,
  0,
  [_CCo, _SC, _CGC, _DSC, _M],
  [
    () => AutoMLJobCompletionCriteria,
    () => AutoMLSecurityConfig,
    () => AutoMLCandidateGenerationConfig,
    () => AutoMLDataSplitConfig,
    0,
  ]
);
export var AutoMLJobObjective = struct(n0, _AMLJO, 0, [_MN], [0]);
export var AutoMLJobStepMetadata = struct(n0, _AMLJSM, 0, [_Ar], [0]);
export var AutoMLJobSummary = struct(
  n0,
  _AMLJS,
  0,
  [_AMLJN, _AMLJAu, _AMLJSu, _AMLJSS, _CT, _ETn, _LMT, _FR, _PFR],
  [0, 0, 0, 0, 4, 4, 4, 0, () => AutoMLPartialFailureReasons]
);
export var AutoMLOutputDataConfig = struct(n0, _AMLODC, 0, [_KKI, _SOP], [0, 0]);
export var AutoMLPartialFailureReason = struct(n0, _AMLPFR, 0, [_PFM], [0]);
export var AutoMLResolvedAttributes = struct(
  n0,
  _AMLRA,
  0,
  [_AMLJO, _CCo, _AMLPTRA],
  [() => AutoMLJobObjective, () => AutoMLJobCompletionCriteria, () => AutoMLProblemTypeResolvedAttributes]
);
export var AutoMLS3DataSource = struct(n0, _AMLSDS, 0, [_SDT, _SUr], [0, 0]);
export var AutoMLSecurityConfig = struct(n0, _AMLSC, 0, [_VKKI, _EICTE, _VC], [0, 2, () => VpcConfig]);
export var CacheHitResult = struct(n0, _CHR, 0, [_SPEA], [0]);
export var CallbackStepMetadata = struct(n0, _CSM, 0, [_CTa, _SQU, _OP], [0, 0, () => OutputParameterList]);
export var CandidateGenerationConfig = struct(n0, _CGC, 0, [_ACl], [() => AutoMLAlgorithmsConfig]);
export var ClarifyCheckStepMetadata = struct(
  n0,
  _CCSM,
  0,
  [_CThe, _BUFDCC, _CBC, _MPGN, _VRi, _CJA, _SCk, _RNB],
  [0, 0, 0, 0, 0, 0, 2, 2]
);
export var ConditionStepMetadata = struct(n0, _CSMo, 0, [_O], [0]);
export var CreateAutoMLJobRequest = struct(
  n0,
  _CAMLJR,
  0,
  [_AMLJN, _IDC, _ODC, _PT, _AMLJO, _AMLJCu, _RAo, _GCDO, _T, _MDC],
  [
    0,
    () => AutoMLInputDataConfig,
    () => AutoMLOutputDataConfig,
    0,
    () => AutoMLJobObjective,
    () => AutoMLJobConfig,
    0,
    2,
    () => TagList,
    () => ModelDeployConfig,
  ]
);
export var CreateAutoMLJobResponse = struct(n0, _CAMLJRr, 0, [_AMLJAu], [0]);
export var CreateAutoMLJobV2Request = struct(
  n0,
  _CAMLJVR,
  0,
  [_AMLJN, _AMLJIDC, _ODC, _AMLPTC, _RAo, _T, _SC, _AMLJO, _MDC, _DSC, _AMLCC],
  [
    0,
    () => AutoMLJobInputDataConfig,
    () => AutoMLOutputDataConfig,
    () => AutoMLProblemTypeConfig,
    0,
    () => TagList,
    () => AutoMLSecurityConfig,
    () => AutoMLJobObjective,
    () => ModelDeployConfig,
    () => AutoMLDataSplitConfig,
    () => AutoMLComputeConfig,
  ]
);
export var CreateAutoMLJobV2Response = struct(n0, _CAMLJVRr, 0, [_AMLJAu], [0]);
export var DescribeAutoMLJobRequest = struct(n0, _DAMLJR, 0, [_AMLJN], [0]);
export var DescribeAutoMLJobResponse = struct(
  n0,
  _DAMLJRe,
  0,
  [
    _AMLJN,
    _AMLJAu,
    _IDC,
    _ODC,
    _RAo,
    _AMLJO,
    _PT,
    _AMLJCu,
    _CT,
    _ETn,
    _LMT,
    _FR,
    _PFR,
    _BC,
    _AMLJSu,
    _AMLJSS,
    _GCDO,
    _AMLJA,
    _RAe,
    _MDC,
    _MDR,
  ],
  [
    0,
    0,
    () => AutoMLInputDataConfig,
    () => AutoMLOutputDataConfig,
    0,
    () => AutoMLJobObjective,
    0,
    () => AutoMLJobConfig,
    4,
    4,
    4,
    0,
    () => AutoMLPartialFailureReasons,
    () => AutoMLCandidate,
    0,
    0,
    2,
    () => AutoMLJobArtifacts,
    () => ResolvedAttributes,
    () => ModelDeployConfig,
    () => ModelDeployResult,
  ]
);
export var DescribeAutoMLJobV2Request = struct(n0, _DAMLJVR, 0, [_AMLJN], [0]);
export var DescribeAutoMLJobV2Response = struct(
  n0,
  _DAMLJVRe,
  0,
  [
    _AMLJN,
    _AMLJAu,
    _AMLJIDC,
    _ODC,
    _RAo,
    _AMLJO,
    _AMLPTC,
    _AMLPTCN,
    _CT,
    _ETn,
    _LMT,
    _FR,
    _PFR,
    _BC,
    _AMLJSu,
    _AMLJSS,
    _AMLJA,
    _RAe,
    _MDC,
    _MDR,
    _DSC,
    _SC,
    _AMLCC,
  ],
  [
    0,
    0,
    () => AutoMLJobInputDataConfig,
    () => AutoMLOutputDataConfig,
    0,
    () => AutoMLJobObjective,
    () => AutoMLProblemTypeConfig,
    0,
    4,
    4,
    4,
    0,
    () => AutoMLPartialFailureReasons,
    () => AutoMLCandidate,
    0,
    0,
    () => AutoMLJobArtifacts,
    () => AutoMLResolvedAttributes,
    () => ModelDeployConfig,
    () => ModelDeployResult,
    () => AutoMLDataSplitConfig,
    () => AutoMLSecurityConfig,
    () => AutoMLComputeConfig,
  ]
);
export var EmrServerlessComputeConfig = struct(n0, _ESCC, 0, [_ERARN], [0]);
export var EMRStepMetadata = struct(n0, _EMRSM, 0, [_CIlu, _SIt, _SNte, _LFP], [0, 0, 0, 0]);
export var EndpointConfigStepMetadata = struct(n0, _ECSM, 0, [_Ar], [0]);
export var EndpointStepMetadata = struct(n0, _ESM, 0, [_Ar], [0]);
export var FailStepMetadata = struct(n0, _FSM, 0, [_EMr], [0]);
export var HolidayConfigAttributes = struct(n0, _HCAo, 0, [_CCou], [0]);
export var ImageClassificationJobConfig = struct(n0, _ICJC, 0, [_CCo], [() => AutoMLJobCompletionCriteria]);
export var LambdaStepMetadata = struct(n0, _LSM, 0, [_Ar, _OP], [0, () => OutputParameterList]);
export var ListAutoMLJobsRequest = struct(
  n0,
  _LAMLJR,
  0,
  [_CTA, _CTB, _LMTA, _LMTB, _NCa, _SE, _SO, _SBo, _MR, _NT],
  [4, 4, 4, 4, 0, 0, 0, 0, 1, 0]
);
export var ListAutoMLJobsResponse = struct(n0, _LAMLJRi, 0, [_AMLJSut, _NT], [() => AutoMLJobSummaries, 0]);
export var ListPipelineExecutionStepsRequest = struct(n0, _LPESR, 0, [_PEA, _NT, _MR, _SO], [0, 0, 1, 0]);
export var ListPipelineExecutionStepsResponse = struct(
  n0,
  _LPESRi,
  0,
  [_PESip, _NT],
  [() => PipelineExecutionStepList, 0]
);
export var ModelDeployConfig = struct(n0, _MDC, 0, [_AGEN, _EN], [2, 0]);
export var ModelDeployResult = struct(n0, _MDR, 0, [_EN], [0]);
export var ModelStepMetadata = struct(n0, _MSM, 0, [_Ar], [0]);
export var PipelineExecutionStep = struct(
  n0,
  _PESipe,
  0,
  [_SNte, _SDNt, _SDte, _STt, _ETn, _SSte, _CHR, _FR, _Meta, _ACt, _SER],
  [0, 0, 0, 4, 4, 0, () => CacheHitResult, 0, () => PipelineExecutionStepMetadata, 1, () => SelectiveExecutionResult]
);
export var PipelineExecutionStepMetadata = struct(
  n0,
  _PESM,
  0,
  [_TJ, _PJ, _TJr, _TJu, _Mod, _RMe, _Cond, _Cal, _La, _EMR, _QC, _CCla, _Fa, _AMLJ, _En, _ECndpo],
  [
    () => TrainingJobStepMetadata,
    () => ProcessingJobStepMetadata,
    () => TransformJobStepMetadata,
    () => TuningJobStepMetaData,
    () => ModelStepMetadata,
    () => RegisterModelStepMetadata,
    () => ConditionStepMetadata,
    () => CallbackStepMetadata,
    () => LambdaStepMetadata,
    () => EMRStepMetadata,
    () => QualityCheckStepMetadata,
    () => ClarifyCheckStepMetadata,
    () => FailStepMetadata,
    () => AutoMLJobStepMetadata,
    () => EndpointStepMetadata,
    () => EndpointConfigStepMetadata,
  ]
);
export var ProcessingJobStepMetadata = struct(n0, _PJSM, 0, [_Ar], [0]);
export var QualityCheckStepMetadata = struct(
  n0,
  _QCSM,
  0,
  [_CThe, _BUFDCS, _BUFDCC, _CBS, _CBC, _MPGN, _VRi, _CJA, _SCk, _RNB],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 2]
);
export var RegisterModelStepMetadata = struct(n0, _RMSM, 0, [_Ar], [0]);
export var ResolvedAttributes = struct(
  n0,
  _RAe,
  0,
  [_AMLJO, _PT, _CCo],
  [() => AutoMLJobObjective, 0, () => AutoMLJobCompletionCriteria]
);
export var SelectiveExecutionResult = struct(n0, _SER, 0, [_SPEA], [0]);
export var TabularJobConfig = struct(
  n0,
  _TJC,
  0,
  [_CGC, _CCo, _FSSU, _M, _GCDO, _PT, _TAN, _SWAN],
  [() => CandidateGenerationConfig, () => AutoMLJobCompletionCriteria, 0, 0, 2, 0, 0, 0]
);
export var TabularResolvedAttributes = struct(n0, _TRA, 0, [_PT], [0]);
export var TextClassificationJobConfig = struct(
  n0,
  _TCJC,
  0,
  [_CCo, _CConte, _TLC],
  [() => AutoMLJobCompletionCriteria, 0, 0]
);
export var TextGenerationJobConfig = struct(
  n0,
  _TGJC,
  0,
  [_CCo, _BMN, _TGHP, _MAC],
  [() => AutoMLJobCompletionCriteria, 0, 128 | 0, () => ModelAccessConfig]
);
export var TextGenerationResolvedAttributes = struct(n0, _TGRA, 0, [_BMN], [0]);
export var TimeSeriesConfig = struct(n0, _TSCi, 0, [_TAN, _TANi, _IIAN, _GAN], [0, 0, 0, 64 | 0]);
export var TimeSeriesForecastingJobConfig = struct(
  n0,
  _TSFJC,
  0,
  [_FSSU, _CCo, _FF, _FHo, _FQ, _Tra, _TSCi, _HC, _CGC],
  [
    0,
    () => AutoMLJobCompletionCriteria,
    0,
    1,
    64 | 0,
    () => TimeSeriesTransformations,
    () => TimeSeriesConfig,
    () => HolidayConfig,
    () => CandidateGenerationConfig,
  ]
);
export var TimeSeriesTransformations = struct(n0, _TSTi, 0, [_Fill, _Ag], [map(n0, _FTi, 0, 0, 128 | 0), 128 | 0]);
export var TrainingJobStepMetadata = struct(n0, _TJSM, 0, [_Ar], [0]);
export var TransformJobStepMetadata = struct(n0, _TJSMr, 0, [_Ar], [0]);
export var TuningJobStepMetaData = struct(n0, _TJSMD, 0, [_Ar], [0]);
export var AutoMLAlgorithms = 64 | 0;

export var AutoMLAlgorithmsConfig = list(n0, _AMLACu, 0, () => AutoMLAlgorithmConfig);
export var AutoMLInputDataConfig = list(n0, _AMLIDC, 0, () => AutoMLChannel);
export var AutoMLJobInputDataConfig = list(n0, _AMLJIDC, 0, () => AutoMLJobChannel);
export var AutoMLJobSummaries = list(n0, _AMLJSut, 0, () => AutoMLJobSummary);
export var AutoMLPartialFailureReasons = list(n0, _AMLPFRu, 0, () => AutoMLPartialFailureReason);
export var ForecastQuantiles = 64 | 0;

export var GroupingAttributeNames = 64 | 0;

export var HolidayConfig = list(n0, _HC, 0, () => HolidayConfigAttributes);
export var PipelineExecutionStepList = list(n0, _PESL, 0, () => PipelineExecutionStep);
export var AggregationTransformations = 128 | 0;

export var FillingTransformationMap = 128 | 0;

export var FillingTransformations = map(n0, _FTi, 0, 0, 128 | 0);
export var TextGenerationHyperParameters = 128 | 0;

export var AutoMLProblemTypeConfig = uni(
  n0,
  _AMLPTC,
  0,
  [_ICJC, _TCJC, _TSFJC, _TJC, _TGJC],
  [
    () => ImageClassificationJobConfig,
    () => TextClassificationJobConfig,
    () => TimeSeriesForecastingJobConfig,
    () => TabularJobConfig,
    () => TextGenerationJobConfig,
  ]
);
export var AutoMLProblemTypeResolvedAttributes = uni(
  n0,
  _AMLPTRA,
  0,
  [_TRA, _TGRA],
  [() => TabularResolvedAttributes, () => TextGenerationResolvedAttributes]
);
export var CreateAutoMLJob = op(
  n0,
  _CAMLJ,
  0,
  () => CreateAutoMLJobRequest,
  () => CreateAutoMLJobResponse
);
export var CreateAutoMLJobV2 = op(
  n0,
  _CAMLJV,
  0,
  () => CreateAutoMLJobV2Request,
  () => CreateAutoMLJobV2Response
);
export var DescribeAutoMLJob = op(
  n0,
  _DAMLJ,
  0,
  () => DescribeAutoMLJobRequest,
  () => DescribeAutoMLJobResponse
);
export var DescribeAutoMLJobV2 = op(
  n0,
  _DAMLJV,
  0,
  () => DescribeAutoMLJobV2Request,
  () => DescribeAutoMLJobV2Response
);
export var ListAutoMLJobs = op(
  n0,
  _LAMLJ,
  0,
  () => ListAutoMLJobsRequest,
  () => ListAutoMLJobsResponse
);
export var ListPipelineExecutionSteps = op(
  n0,
  _LPES,
  0,
  () => ListPipelineExecutionStepsRequest,
  () => ListPipelineExecutionStepsResponse
);
