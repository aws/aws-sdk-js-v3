// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _AAl,
  _Acc,
  _ADl,
  _ADpp,
  _ADr,
  _AEc,
  _AIS,
  _AMLJAu,
  _ANlg,
  _ANt,
  _AP,
  _APu,
  _Arc,
  _ASD,
  _ASDS,
  _ASI,
  _ASIL,
  _ASl,
  _ASlgo,
  _ASll,
  _ASp,
  _Au,
  _AVP,
  _AVPl,
  _AVS,
  _BONI,
  _BS,
  _BTI,
  _BTIS,
  _BTJ,
  _C,
  _CA,
  _CAFO,
  _CAI,
  _CAO,
  _CAreat,
  _CB,
  _CCh,
  _CCJ,
  _CCJR,
  _CCJRr,
  _CCol,
  _CColl,
  _CDo,
  _CDT,
  _CE,
  _CET,
  _CFM,
  _Ch,
  _CHPTJ,
  _CHPTJR,
  _CHPTJRr,
  _CJAo,
  _CJN,
  _CJSo,
  _CMP,
  _CN,
  _CNo,
  _COC,
  _COJ,
  _COJR,
  _COJRr,
  _Con,
  _COo,
  _CPo,
  _CPR,
  _CPRa,
  _CPRo,
  _CPRon,
  _CPRS,
  _CPRSo,
  _CRons,
  _CSh,
  _CSha,
  _CSTo,
  _CT,
  _CTJ,
  _CTJR,
  _CTJRr,
  _CTo,
  _CTon,
  _D,
  _DAesc,
  _DAIe,
  _DAO,
  _DCB,
  _DCC,
  _DCJe,
  _DCJRe,
  _DCJRes,
  _DDIC,
  _DHC,
  _DHPTJe,
  _DHPTJRe,
  _DHPTJRes,
  _DICa,
  _DIer,
  _DIT,
  _DNef,
  _DNi,
  _Do,
  _DOJe,
  _DOJRe,
  _DOJRes,
  _DP,
  _DPi,
  _DPis,
  _DR,
  _DRC,
  _DRCe,
  _DRES,
  _DRESe,
  _DS,
  _DTJ,
  _DTJR,
  _DTJRe,
  _DV,
  _E,
  _EA,
  _EAx,
  _ECN,
  _ECxp,
  _EICn,
  _EICTE,
  _EMJ,
  _EMST,
  _EMx,
  _EN,
  _En,
  _End,
  _ENI,
  _ENx,
  _ERA,
  _ERD,
  _ES,
  _ESMMTS,
  _ESTC,
  _ETFN,
  _ETn,
  _Exp,
  _FD,
  _FG,
  _FGA,
  _FGN,
  _FGS,
  _Fi,
  _Fil,
  _FL,
  _FMDL,
  _FMe,
  _FN,
  _FR,
  _Fr,
  _FSAM,
  _FSDS,
  _FSI,
  _FST,
  _FTe,
  _FV,
  _HAC,
  _HCA,
  _HP,
  _HPAS,
  _HPo,
  _HPR,
  _HPS,
  _HPSy,
  _HPTET,
  _HPTIC,
  _HPTICy,
  _HPTJ,
  _HPTJA,
  _HPTJC,
  _HPTJCD,
  _HPTJCR,
  _HPTJD,
  _HPTJDy,
  _HPTJN,
  _HPTJO,
  _HPTJOy,
  _HPTJS,
  _HPTJSC,
  _HPTJSE,
  _HPTJWSC,
  _HPTRC,
  _HSC,
  _I,
  _IAn,
  _ICC,
  _ICnp,
  _ICns,
  _ICnst,
  _IDC,
  _IEC,
  _IG,
  _IGN,
  _IGn,
  _IGNn,
  _IIn,
  _IM,
  _IPCn,
  _IPR,
  _IPRn,
  _IPRS,
  _IR,
  _ISn,
  _ISS,
  _IT,
  _ITs,
  _K,
  _KAPIS,
  _KKI,
  _LBTJ,
  _LEPEA,
  _LEPEDN,
  _LEPES,
  _LGA,
  _LJA,
  _LMB,
  _LMES,
  _LMT,
  _LP,
  _LRT,
  _LUS,
  _M,
  _MA,
  _MAC,
  _MAo,
  _MAS,
  _MASo,
  _MCA,
  _MCCo,
  _MCCod,
  _MCN,
  _MCod,
  _MCS,
  _MCT,
  _MCV,
  _MD,
  _MDE,
  _MDEo,
  _MDet,
  _MDetri,
  _MDLe,
  _MDM,
  _MDMC,
  _MDMS,
  _MDMSo,
  _MDo,
  _Met,
  _MIo,
  _MLC,
  _MM,
  _MN,
  _MNo,
  _MNOTJNI,
  _Mod,
  _MP,
  _MPA,
  _MPD,
  _MPG,
  _MPGA,
  _MPGD,
  _MPGN,
  _MPGS,
  _MPIMB,
  _MPN,
  _MPod,
  _MPSD,
  _MPSo,
  _MPTIS,
  _MPV,
  _MPVA,
  _MQC,
  _MR,
  _MRa,
  _MRAa,
  _MRi,
  _MRIS,
  _MS,
  _MSA,
  _MSC,
  _MSCo,
  _MSLo,
  _MSN,
  _MSon,
  _MSoni,
  _MSS,
  _MTo,
  _MV,
  _MVa,
  _MWTIS,
  _N,
  _NCe,
  _NF,
  _NFL,
  _NOTJONI,
  _NPN,
  _NT,
  _NVC,
  _OA,
  _OBTJ,
  _OC,
  _OCp,
  _OCpti,
  _ODC,
  _OE,
  _OET,
  _OEv,
  _OJA,
  _OJMS,
  _OJMSS,
  _OJN,
  _OJOC,
  _OJS,
  _OMAC,
  _OO,
  _Op,
  _Os,
  _OSC,
  _OSCb,
  _OSCf,
  _OSS,
  _OST,
  _OVCp,
  _P,
  _PAi,
  _PAr,
  _Pare,
  _Paren,
  _PC,
  _PCa,
  _PCr,
  _PDi,
  _PDN,
  _PDr,
  _PE,
  _PEA,
  _PEC,
  _PED,
  _PEDN,
  _PES,
  _PET,
  _PHPTJ,
  _PHPTJa,
  _Pi,
  _PIIM,
  _PIr,
  _PIro,
  _PIrod,
  _PJ,
  _PJA,
  _PJN,
  _PJS,
  _PN,
  _PNi,
  _PNr,
  _POC,
  _PP,
  _PPr,
  _PR,
  _PRa,
  _PRar,
  _PRC,
  _PRES,
  _PRESr,
  _Proj,
  _PS,
  _PSl,
  _PSla,
  _PSr,
  _PSro,
  _PST,
  _PV,
  _PVD,
  _PVDN,
  _PVI,
  _PVi,
  _Ra,
  _RAo,
  _RCe,
  _RCN,
  _RDC,
  _Reg,
  _REI,
  _REJA,
  _Rel,
  _RES,
  _Res,
  _Resu,
  _RIFN,
  _RII,
  _RIS,
  _RL,
  _RNu,
  _RP,
  _RR,
  _RSa,
  _RSe,
  _RWT,
  _S,
  _S_,
  _SA,
  _SAS,
  _SBo,
  _SC,
  _SCC,
  _SCh,
  _SCPD,
  _SCPPD,
  _SCT,
  _SCt,
  _SCtr,
  _SCTu,
  _SDDT,
  _SDo,
  _SDS,
  _SDT,
  _SDt,
  _SDTu,
  _Se,
  _Sea,
  _SEC,
  _SEe,
  _SEL,
  _SEu,
  _SGI,
  _SHP,
  _SHPu,
  _SIMu,
  _SM,
  _SMA,
  _SMV,
  _SO,
  _SOL,
  _SOP,
  _SPU,
  _SPV,
  _SRe,
  _SRea,
  _SRear,
  _SRL,
  _SSe,
  _SST,
  _SSTe,
  _St,
  _STc,
  _STITu,
  _STJOM,
  _Str,
  _STt,
  _SU,
  _Sub,
  _SUr,
  _T,
  _TA,
  _Ta,
  _TBOC,
  _TCA,
  _TCN,
  _TCr,
  _TCra,
  _TCS,
  _TCSD,
  _TCSr,
  _TCSS,
  _TCSSr,
  _TDa,
  _TET,
  _TETr,
  _TH,
  _TI,
  _TIC,
  _TID,
  _TIM,
  _Tim,
  _TIr,
  _TJ,
  _TJA,
  _TJAr,
  _TJAu,
  _TJCC,
  _TJCD,
  _TJD,
  _TJDr,
  _TJDra,
  _TJEST,
  _TJN,
  _TJNr,
  _TJr,
  _TJS,
  _TJSC,
  _TJSr,
  _TN,
  _TO,
  _TOMV,
  _TOu,
  _TPA,
  _TPa,
  _TPD,
  _TR,
  _Tr,
  _TRAC,
  _TRAM,
  _TRCPA,
  _TS,
  _TST,
  _TSTr,
  _TTIS,
  _Ty,
  _USIl,
  _Va,
  _Val,
  _VC,
  _VCi,
  _VCL,
  _VH,
  _VKKI,
  _VP,
  _VR,
  _VS,
  _VSa,
  _VSIGB,
  _WPS,
  _WSC,
  _WST,
  ModelAccessConfig,
  n0,
  TagList,
  UserContext,
  VpcConfig,
} from "./schemas_0";
import {
  AdditionalInferenceSpecifications,
  DriftCheckBaselines,
  ModelLifeCycle,
  ModelMetrics,
  ModelPackageModelCard,
  ModelPackageSecurityConfig,
  ModelPackageStatusDetails,
  ModelPackageValidationSpecification,
  SourceAlgorithmSpecification,
} from "./schemas_9_Model";
import {
  AdditionalS3DataSource,
  ContainerDefinition,
  ContainerDefinitionList,
  DeploymentRecommendation,
  InferenceExecutionConfig,
  InferenceSpecification,
} from "./schemas_17_Model";
import {
  FeatureDefinitions,
  FeatureParameters,
  LastUpdateStatus,
  OfflineStoreConfig,
  OfflineStoreStatus,
  OnlineStoreConfig,
} from "./schemas_19_Feature";
import {
  AppSpecification,
  MonitoringScheduleConfig,
  NetworkConfig,
  ProcessingInputs,
  ProcessingOutputConfig,
  ProcessingResources,
  ProcessingStoppingCondition,
} from "./schemas_21_Job";
import { MonitoringAlertSummaryList } from "./schemas_30_Monitoring";
import { ParameterList } from "./schemas_33_Execution";
import { BatchTransformInput } from "./schemas_34_Job";
import {
  BatchDataCaptureConfig,
  DataProcessing,
  ModelClientConfig,
  TransformInput,
  TransformJobDefinition,
  TransformOutput,
  TransformResources,
} from "./schemas_42_Job";
import { TrialSource } from "./schemas_43_Trial";
import { ParallelismConfiguration, SelectiveExecutionConfig } from "./schemas_45_Pipeline";
import { HyperParameterTrainingJobSummary, ProfilerRuleConfigurations, WarmPoolStatus } from "./schemas_48_Job";
import {
  ServiceCatalogProvisionedProductDetails,
  ServiceCatalogProvisioningDetails,
  TemplateProviderDetailList,
} from "./schemas_53_Project";
import { DataCaptureConfigSummary, ProductionVariantSummaryList } from "./schemas_54_Endpoint";
import { MetadataProperties, TrialComponentMetricSummaries } from "./schemas_58_Describe";
import { PipelineExperimentConfig } from "./schemas_59_Pipeline";
import { MonitoringExecutionSummary } from "./schemas_68_Job";
import { ExperimentSource } from "./schemas_72_Trial";
import { ObjectiveStatusCounters, ResourceLimits, TrainingJobStatusCounters } from "./schemas_80_HyperParameterTuning";
import { ModelCardContent, ModelCardSecurityConfig } from "./schemas_89_Model";
import {
  TrialComponentArtifacts,
  TrialComponentParameters,
  TrialComponentSource,
  TrialComponentStatus,
} from "./schemas_91_Trial";
import { ExperimentConfig } from "./schemas_147_Job";

/* eslint no-var: 0 */

export var AlgorithmSpecification = struct(
  n0,
  _ASl,
  0,
  [_TI, _ANlg, _TIM, _MD, _ESMMTS, _CE, _CA, _TIC],
  [0, 0, 0, () => MetricDefinitionList, 2, 64 | 0, 64 | 0, () => TrainingImageConfig]
);
export var AlgorithmStatusDetails = struct(
  n0,
  _ASD,
  0,
  [_VS, _ISS],
  [() => AlgorithmStatusItemList, () => AlgorithmStatusItemList]
);
export var AlgorithmStatusItem = struct(n0, _ASI, 0, [_N, _St, _FR], [0, 0, 0]);
export var AlgorithmValidationProfile = struct(
  n0,
  _AVP,
  0,
  [_PN, _TJD, _TJDr],
  [0, () => TrainingJobDefinition, () => TransformJobDefinition]
);
export var AlgorithmValidationSpecification = struct(n0, _AVS, 0, [_VR, _VP], [0, () => AlgorithmValidationProfiles]);
export var AutoParameter = struct(n0, _AP, 0, [_N, _VH], [0, 0]);
export var Autotune = struct(n0, _Au, 0, [_M], [0]);
export var BestObjectiveNotImproving = struct(n0, _BONI, 0, [_MNOTJNI], [1]);
export var CategoricalParameterRange = struct(n0, _CPR, 0, [_N, _Val], [0, 64 | 0]);
export var CategoricalParameterRangeSpecification = struct(n0, _CPRS, 0, [_Val], [64 | 0]);
export var Channel = struct(
  n0,
  _Ch,
  0,
  [_CN, _DS, _CTon, _CTo, _RWT, _IM, _SCh],
  [0, () => DataSource, 0, 0, 0, 0, () => ShuffleConfig]
);
export var ChannelSpecification = struct(
  n0,
  _CSh,
  0,
  [_N, _D, _IR, _SCT, _SCTu, _SIMu],
  [0, 0, 2, 64 | 0, 64 | 0, 64 | 0]
);
export var CheckpointConfig = struct(n0, _CCh, 0, [_SUr, _LP], [0, 0]);
export var CollectionConfiguration = struct(n0, _CCol, 0, [_CNo, _CPo], [0, 128 | 0]);
export var ContinuousParameterRange = struct(n0, _CPRo, 0, [_N, _MV, _MVa, _STc], [0, 0, 0, 0]);
export var ContinuousParameterRangeSpecification = struct(n0, _CPRSo, 0, [_MV, _MVa], [0, 0]);
export var ConvergenceDetected = struct(n0, _CDo, 0, [_COC], [0]);
export var CreateAlgorithmInput = struct(
  n0,
  _CAI,
  0,
  [_ANlg, _ADl, _TS, _ISn, _VSa, _CFM, _T],
  [
    0,
    0,
    () => TrainingSpecification,
    () => InferenceSpecification,
    () => AlgorithmValidationSpecification,
    2,
    () => TagList,
  ]
);
export var CreateAlgorithmOutput = struct(n0, _CAO, 0, [_AAl], [0]);
export var CreateCompilationJobRequest = struct(
  n0,
  _CCJR,
  0,
  [_CJN, _RAo, _MPVA, _ICnp, _OC, _VC, _SCt, _T],
  [0, 0, 0, () => InputConfig, () => OutputConfig, () => NeoVpcConfig, () => StoppingCondition, () => TagList]
);
export var CreateCompilationJobResponse = struct(n0, _CCJRr, 0, [_CJAo], [0]);
export var CreateHyperParameterTuningJobRequest = struct(
  n0,
  _CHPTJR,
  0,
  [_HPTJN, _HPTJC, _TJD, _TJDra, _WSC, _T, _Au],
  [
    0,
    () => HyperParameterTuningJobConfig,
    () => HyperParameterTrainingJobDefinition,
    () => HyperParameterTrainingJobDefinitions,
    () => HyperParameterTuningJobWarmStartConfig,
    () => TagList,
    () => Autotune,
  ]
);
export var CreateHyperParameterTuningJobResponse = struct(n0, _CHPTJRr, 0, [_HPTJA], [0]);
export var CreateOptimizationJobRequest = struct(
  n0,
  _COJR,
  0,
  [_OJN, _RAo, _MS, _DIT, _OE, _OCp, _OC, _SCt, _T, _VC],
  [
    0,
    0,
    () => OptimizationJobModelSource,
    0,
    128 | 0,
    () => OptimizationConfigs,
    () => OptimizationJobOutputConfig,
    () => StoppingCondition,
    () => TagList,
    () => OptimizationVpcConfig,
  ]
);
export var CreateOptimizationJobResponse = struct(n0, _COJRr, 0, [_OJA], [0]);
export var CreateTrainingJobRequest = struct(
  n0,
  _CTJR,
  0,
  [
    _TJN,
    _HP,
    _ASl,
    _RAo,
    _IDC,
    _ODC,
    _RCe,
    _VC,
    _SCt,
    _T,
    _ENI,
    _EICTE,
    _EMST,
    _CCh,
    _DHC,
    _DRC,
    _TBOC,
    _ECxp,
    _PCr,
    _PRC,
    _E,
    _RSe,
    _RDC,
    _ICC,
    _SCC,
  ],
  [
    0,
    128 | 0,
    () => AlgorithmSpecification,
    0,
    () => InputDataConfig,
    () => OutputDataConfig,
    () => ResourceConfig,
    () => VpcConfig,
    () => StoppingCondition,
    () => TagList,
    2,
    2,
    2,
    () => CheckpointConfig,
    () => DebugHookConfig,
    () => DebugRuleConfigurations,
    () => TensorBoardOutputConfig,
    () => ExperimentConfig,
    () => ProfilerConfig,
    () => ProfilerRuleConfigurations,
    128 | 0,
    () => RetryStrategy,
    () => RemoteDebugConfig,
    () => InfraCheckConfig,
    () => SessionChainingConfig,
  ]
);
export var CreateTrainingJobResponse = struct(n0, _CTJRr, 0, [_TJA], [0]);
export var DataSource = struct(n0, _DS, 0, [_SDS, _FSDS], [() => S3DataSource, () => FileSystemDataSource]);
export var DebugHookConfig = struct(
  n0,
  _DHC,
  0,
  [_LP, _SOP, _HPo, _CColl],
  [0, 0, 128 | 0, () => CollectionConfigurations]
);
export var DebugRuleConfiguration = struct(
  n0,
  _DRCe,
  0,
  [_RCN, _LP, _SOP, _REI, _IT, _VSIGB, _RP],
  [0, 0, 0, 0, 0, 1, 128 | 0]
);
export var DebugRuleEvaluationStatus = struct(n0, _DRES, 0, [_RCN, _REJA, _RES, _SDt, _LMT], [0, 0, 0, 0, 4]);
export var DerivedInformation = struct(n0, _DIer, 0, [_DDIC], [0]);
export var DescribeAlgorithmInput = struct(n0, _DAIe, 0, [_ANlg], [0]);
export var DescribeAlgorithmOutput = struct(
  n0,
  _DAO,
  0,
  [_ANlg, _AAl, _ADl, _CT, _TS, _ISn, _VSa, _ASlgo, _ASD, _PIrod, _CFM],
  [
    0,
    0,
    0,
    4,
    () => TrainingSpecification,
    () => InferenceSpecification,
    () => AlgorithmValidationSpecification,
    0,
    () => AlgorithmStatusDetails,
    0,
    2,
  ]
);
export var DescribeCompilationJobRequest = struct(n0, _DCJRe, 0, [_CJN], [0]);
export var DescribeCompilationJobResponse = struct(
  n0,
  _DCJRes,
  0,
  [_CJN, _CJAo, _CJSo, _CSTo, _CET, _SCt, _IIn, _MPVA, _CT, _LMT, _FR, _MAo, _MDo, _RAo, _ICnp, _OC, _VC, _DIer],
  [
    0,
    0,
    0,
    4,
    4,
    () => StoppingCondition,
    0,
    0,
    4,
    4,
    0,
    () => ModelArtifacts,
    () => ModelDigests,
    0,
    () => InputConfig,
    () => OutputConfig,
    () => NeoVpcConfig,
    () => DerivedInformation,
  ]
);
export var DescribeHyperParameterTuningJobRequest = struct(n0, _DHPTJRe, 0, [_HPTJN], [0]);
export var DescribeHyperParameterTuningJobResponse = struct(
  n0,
  _DHPTJRes,
  0,
  [
    _HPTJN,
    _HPTJA,
    _HPTJC,
    _TJD,
    _TJDra,
    _HPTJS,
    _CT,
    _HPTET,
    _LMT,
    _TJSC,
    _OSCb,
    _BTJ,
    _OBTJ,
    _WSC,
    _Au,
    _FR,
    _TJCD,
    _CRons,
  ],
  [
    0,
    0,
    () => HyperParameterTuningJobConfig,
    () => HyperParameterTrainingJobDefinition,
    () => HyperParameterTrainingJobDefinitions,
    0,
    4,
    4,
    4,
    () => TrainingJobStatusCounters,
    () => ObjectiveStatusCounters,
    () => HyperParameterTrainingJobSummary,
    () => HyperParameterTrainingJobSummary,
    () => HyperParameterTuningJobWarmStartConfig,
    () => Autotune,
    0,
    () => HyperParameterTuningJobCompletionDetails,
    () => HyperParameterTuningJobConsumedResources,
  ]
);
export var DescribeOptimizationJobRequest = struct(n0, _DOJRe, 0, [_OJN], [0]);
export var DescribeOptimizationJobResponse = struct(
  n0,
  _DOJRes,
  0,
  [_OJA, _OJS, _OST, _OET, _CT, _LMT, _FR, _OJN, _MS, _OE, _DIT, _OCp, _OC, _OO, _RAo, _SCt, _VC],
  [
    0,
    0,
    4,
    4,
    4,
    4,
    0,
    0,
    () => OptimizationJobModelSource,
    128 | 0,
    0,
    () => OptimizationConfigs,
    () => OptimizationJobOutputConfig,
    () => OptimizationOutput,
    0,
    () => StoppingCondition,
    () => OptimizationVpcConfig,
  ]
);
export var DescribeTrainingJobRequest = struct(n0, _DTJR, 0, [_TJN], [0]);
export var DescribeTrainingJobResponse = struct(
  n0,
  _DTJRe,
  0,
  [
    _TJN,
    _TJA,
    _TJAu,
    _LJA,
    _AMLJAu,
    _MAo,
    _TJS,
    _SSe,
    _FR,
    _HP,
    _ASl,
    _RAo,
    _IDC,
    _ODC,
    _RCe,
    _WPS,
    _VC,
    _SCt,
    _CT,
    _TST,
    _TET,
    _LMT,
    _SST,
    _FMDL,
    _ENI,
    _EICTE,
    _EMST,
    _CCh,
    _TTIS,
    _BTIS,
    _DHC,
    _ECxp,
    _DRC,
    _TBOC,
    _DRESe,
    _PCr,
    _PRC,
    _PRES,
    _PSro,
    _E,
    _RSe,
    _RDC,
    _ICC,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    () => ModelArtifacts,
    0,
    0,
    0,
    128 | 0,
    () => AlgorithmSpecification,
    0,
    () => InputDataConfig,
    () => OutputDataConfig,
    () => ResourceConfig,
    () => WarmPoolStatus,
    () => VpcConfig,
    () => StoppingCondition,
    4,
    4,
    4,
    4,
    () => SecondaryStatusTransitions,
    () => FinalMetricDataList,
    2,
    2,
    2,
    () => CheckpointConfig,
    1,
    1,
    () => DebugHookConfig,
    () => ExperimentConfig,
    () => DebugRuleConfigurations,
    () => TensorBoardOutputConfig,
    () => DebugRuleEvaluationStatuses,
    () => ProfilerConfig,
    () => ProfilerRuleConfigurations,
    () => ProfilerRuleEvaluationStatuses,
    0,
    128 | 0,
    () => RetryStrategy,
    () => RemoteDebugConfig,
    () => InfraCheckConfig,
  ]
);
export var Endpoint = struct(
  n0,
  _En,
  0,
  [_EN, _EA, _ECN, _PV, _DCC, _ES, _FR, _CT, _LMT, _MSon, _T, _SPV],
  [
    0,
    0,
    0,
    () => ProductionVariantSummaryList,
    () => DataCaptureConfigSummary,
    0,
    0,
    4,
    4,
    () => MonitoringScheduleList,
    () => TagList,
    () => ProductionVariantSummaryList,
  ]
);
export var Experiment = struct(
  n0,
  _Exp,
  0,
  [_ENx, _EAx, _DNi, _S, _D, _CT, _CB, _LMT, _LMB, _T],
  [0, 0, 0, () => ExperimentSource, 0, 4, () => UserContext, 4, () => UserContext, () => TagList]
);
export var FeatureGroup = struct(
  n0,
  _FG,
  0,
  [_FGA, _FGN, _RIFN, _ETFN, _FD, _CT, _LMT, _OSC, _OSCf, _RAo, _FGS, _OSS, _LUS, _FR, _D, _T],
  [
    0,
    0,
    0,
    0,
    () => FeatureDefinitions,
    4,
    4,
    () => OnlineStoreConfig,
    () => OfflineStoreConfig,
    0,
    0,
    () => OfflineStoreStatus,
    () => LastUpdateStatus,
    0,
    0,
    () => TagList,
  ]
);
export var FeatureMetadata = struct(
  n0,
  _FMe,
  0,
  [_FGA, _FGN, _FN, _FTe, _CT, _LMT, _D, _P],
  [0, 0, 0, 0, 4, 4, 0, () => FeatureParameters]
);
export var FileSystemDataSource = struct(n0, _FSDS, 0, [_FSI, _FSAM, _FST, _DPi], [0, 0, 0, 0]);
export var Filter = struct(n0, _Fi, 0, [_N, _Op, _Va], [0, 0, 0]);
export var HubAccessConfig = struct(n0, _HAC, 0, [_HCA], [0]);
export var HyperbandStrategyConfig = struct(n0, _HSC, 0, [_MRi, _MRa], [1, 1]);
export var HyperParameterAlgorithmSpecification = struct(
  n0,
  _HPAS,
  0,
  [_TI, _TIM, _ANlg, _MD],
  [0, 0, 0, () => MetricDefinitionList]
);
export var HyperParameterSpecification = struct(
  n0,
  _HPS,
  0,
  [_N, _D, _Ty, _Ra, _ITs, _IR, _DV],
  [0, 0, 0, () => ParameterRange, 2, 2, 0]
);
export var HyperParameterTrainingJobDefinition = struct(
  n0,
  _HPTJD,
  0,
  [_DNef, _TOu, _HPR, _SHP, _ASl, _RAo, _IDC, _VC, _ODC, _RCe, _HPTRC, _SCt, _ENI, _EICTE, _EMST, _CCh, _RSe, _E],
  [
    0,
    () => HyperParameterTuningJobObjective,
    () => ParameterRanges,
    128 | 0,
    () => HyperParameterAlgorithmSpecification,
    0,
    () => InputDataConfig,
    () => VpcConfig,
    () => OutputDataConfig,
    () => ResourceConfig,
    () => HyperParameterTuningResourceConfig,
    () => StoppingCondition,
    2,
    2,
    2,
    () => CheckpointConfig,
    () => RetryStrategy,
    128 | 0,
  ]
);
export var HyperParameterTuningInstanceConfig = struct(n0, _HPTIC, 0, [_IT, _ICns, _VSIGB], [0, 1, 1]);
export var HyperParameterTuningJobCompletionDetails = struct(n0, _HPTJCD, 0, [_NOTJONI, _CDT], [1, 4]);
export var HyperParameterTuningJobConfig = struct(
  n0,
  _HPTJC,
  0,
  [_Str, _SCtr, _HPTJO, _RL, _PRa, _TJEST, _TJCC, _RSa],
  [
    0,
    () => HyperParameterTuningJobStrategyConfig,
    () => HyperParameterTuningJobObjective,
    () => ResourceLimits,
    () => ParameterRanges,
    0,
    () => TuningJobCompletionCriteria,
    1,
  ]
);
export var HyperParameterTuningJobConsumedResources = struct(n0, _HPTJCR, 0, [_RIS], [1]);
export var HyperParameterTuningJobObjective = struct(n0, _HPTJO, 0, [_Ty, _MN], [0, 0]);
export var HyperParameterTuningJobSearchEntity = struct(
  n0,
  _HPTJSE,
  0,
  [
    _HPTJN,
    _HPTJA,
    _HPTJC,
    _TJD,
    _TJDra,
    _HPTJS,
    _CT,
    _HPTET,
    _LMT,
    _TJSC,
    _OSCb,
    _BTJ,
    _OBTJ,
    _WSC,
    _FR,
    _TJCD,
    _CRons,
    _T,
  ],
  [
    0,
    0,
    () => HyperParameterTuningJobConfig,
    () => HyperParameterTrainingJobDefinition,
    () => HyperParameterTrainingJobDefinitions,
    0,
    4,
    4,
    4,
    () => TrainingJobStatusCounters,
    () => ObjectiveStatusCounters,
    () => HyperParameterTrainingJobSummary,
    () => HyperParameterTrainingJobSummary,
    () => HyperParameterTuningJobWarmStartConfig,
    0,
    () => HyperParameterTuningJobCompletionDetails,
    () => HyperParameterTuningJobConsumedResources,
    () => TagList,
  ]
);
export var HyperParameterTuningJobStrategyConfig = struct(n0, _HPTJSC, 0, [_HSC], [() => HyperbandStrategyConfig]);
export var HyperParameterTuningJobWarmStartConfig = struct(
  n0,
  _HPTJWSC,
  0,
  [_PHPTJ, _WST],
  [() => ParentHyperParameterTuningJobs, 0]
);
export var HyperParameterTuningResourceConfig = struct(
  n0,
  _HPTRC,
  0,
  [_IT, _ICns, _VSIGB, _VKKI, _ASll, _ICnst],
  [0, 1, 1, 0, 0, () => HyperParameterTuningInstanceConfigs]
);
export var InfraCheckConfig = struct(n0, _ICC, 0, [_EICn], [2]);
export var InputConfig = struct(n0, _ICnp, 0, [_SUr, _DICa, _Fr, _FV], [0, 0, 0, 0]);
export var InstanceGroup = struct(n0, _IGn, 0, [_IT, _ICns, _IGN], [0, 1, 0]);
export var InstancePlacementConfig = struct(n0, _IPCn, 0, [_EMJ, _PSl], [2, () => PlacementSpecifications]);
export var IntegerParameterRange = struct(n0, _IPR, 0, [_N, _MV, _MVa, _STc], [0, 0, 0, 0]);
export var IntegerParameterRangeSpecification = struct(n0, _IPRS, 0, [_MV, _MVa], [0, 0]);
export var MetricData = struct(n0, _MDet, 0, [_MN, _Va, _Tim], [0, 1, 4]);
export var MetricDefinition = struct(n0, _MDetri, 0, [_N, _Reg], [0, 0]);
export var Model = struct(
  n0,
  _Mod,
  0,
  [_MNo, _PC, _C, _IEC, _ERA, _VC, _CT, _MA, _ENI, _T, _DR],
  [
    0,
    () => ContainerDefinition,
    () => ContainerDefinitionList,
    () => InferenceExecutionConfig,
    0,
    () => VpcConfig,
    4,
    0,
    2,
    () => TagList,
    () => DeploymentRecommendation,
  ]
);
export var ModelArtifacts = struct(n0, _MAo, 0, [_SMA], [0]);
export var ModelCard = struct(
  n0,
  _MCod,
  0,
  [_MCA, _MCN, _MCV, _Con, _MCS, _SC, _CT, _CB, _LMT, _LMB, _T, _MIo, _RR, _MPGN],
  [
    0,
    0,
    1,
    [() => ModelCardContent, 0],
    0,
    () => ModelCardSecurityConfig,
    4,
    () => UserContext,
    4,
    () => UserContext,
    () => TagList,
    0,
    0,
    0,
  ]
);
export var ModelCompilationConfig = struct(n0, _MCCod, 0, [_I, _OEv], [0, 128 | 0]);
export var ModelDashboardEndpoint = struct(n0, _MDE, 0, [_EN, _EA, _CT, _LMT, _ES], [0, 0, 4, 4, 0]);
export var ModelDashboardModel = struct(
  n0,
  _MDM,
  0,
  [_Mod, _End, _LBTJ, _MSon, _MCod],
  [
    () => Model,
    () => ModelDashboardEndpoints,
    () => TransformJob,
    () => ModelDashboardMonitoringSchedules,
    () => ModelDashboardModelCard,
  ]
);
export var ModelDashboardModelCard = struct(
  n0,
  _MDMC,
  0,
  [_MCA, _MCN, _MCV, _MCS, _SC, _CT, _CB, _LMT, _LMB, _T, _MIo, _RR],
  [0, 0, 1, 0, () => ModelCardSecurityConfig, 4, () => UserContext, 4, () => UserContext, () => TagList, 0, 0]
);
export var ModelDashboardMonitoringSchedule = struct(
  n0,
  _MDMS,
  0,
  [_MSA, _MSN, _MSS, _MTo, _FR, _CT, _LMT, _MSC, _EN, _MASo, _LMES, _BTI],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    () => MonitoringScheduleConfig,
    0,
    () => MonitoringAlertSummaryList,
    () => MonitoringExecutionSummary,
    () => BatchTransformInput,
  ]
);
export var ModelDigests = struct(n0, _MDo, 0, [_ADr], [0]);
export var ModelPackage = struct(
  n0,
  _MPod,
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
    _AIS,
    _SU,
    _SC,
    _MCod,
    _MLC,
    _T,
    _CMP,
    _DCB,
    _SMV,
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
    () => AdditionalInferenceSpecifications,
    0,
    () => ModelPackageSecurityConfig,
    [() => ModelPackageModelCard, 0],
    () => ModelLifeCycle,
    () => TagList,
    128 | 0,
    () => DriftCheckBaselines,
    0,
  ]
);
export var ModelPackageGroup = struct(
  n0,
  _MPG,
  0,
  [_MPGN, _MPGA, _MPGD, _CT, _CB, _MPGS, _T],
  [0, 0, 0, 4, () => UserContext, 0, () => TagList]
);
export var ModelQuantizationConfig = struct(n0, _MQC, 0, [_I, _OEv], [0, 128 | 0]);
export var ModelShardingConfig = struct(n0, _MSCo, 0, [_I, _OEv], [0, 128 | 0]);
export var MonitoringSchedule = struct(
  n0,
  _MSoni,
  0,
  [_MSA, _MSN, _MSS, _MTo, _FR, _CT, _LMT, _MSC, _EN, _LMES, _T],
  [0, 0, 0, 0, 0, 4, 4, () => MonitoringScheduleConfig, 0, () => MonitoringExecutionSummary, () => TagList]
);
export var NeoVpcConfig = struct(n0, _NVC, 0, [_SGI, _Sub], [64 | 0, 64 | 0]);
export var NestedFilters = struct(n0, _NF, 0, [_NPN, _Fil], [0, () => FilterList]);
export var OptimizationJobModelSource = struct(n0, _OJMS, 0, [_S_], [() => OptimizationJobModelSourceS3]);
export var OptimizationJobModelSourceS3 = struct(n0, _OJMSS, 0, [_SUr, _MAC], [0, () => OptimizationModelAccessConfig]);
export var OptimizationJobOutputConfig = struct(n0, _OJOC, 0, [_KKI, _SOL], [0, 0]);
export var OptimizationModelAccessConfig = struct(n0, _OMAC, 0, [_AEc], [2]);
export var OptimizationOutput = struct(n0, _OO, 0, [_RII], [0]);
export var OptimizationVpcConfig = struct(n0, _OVCp, 0, [_SGI, _Sub], [64 | 0, 64 | 0]);
export var OutputConfig = struct(n0, _OC, 0, [_SOL, _TDa, _TPa, _COo, _KKI], [0, 0, () => TargetPlatform, 0, 0]);
export var OutputDataConfig = struct(n0, _ODC, 0, [_KKI, _SOP, _CTo], [0, 0, 0]);
export var ParameterRange = struct(
  n0,
  _PRar,
  0,
  [_IPRS, _CPRSo, _CPRS],
  [
    () => IntegerParameterRangeSpecification,
    () => ContinuousParameterRangeSpecification,
    () => CategoricalParameterRangeSpecification,
  ]
);
export var ParameterRanges = struct(
  n0,
  _PRa,
  0,
  [_IPRn, _CPRon, _CPRa, _APu],
  [
    () => IntegerParameterRanges,
    () => ContinuousParameterRanges,
    () => CategoricalParameterRanges,
    () => AutoParameters,
  ]
);
export var Parent = struct(n0, _Pare, 0, [_TN, _ENx], [0, 0]);
export var ParentHyperParameterTuningJob = struct(n0, _PHPTJa, 0, [_HPTJN], [0]);
export var Pipeline = struct(
  n0,
  _Pi,
  0,
  [_PAi, _PNi, _PDN, _PDi, _RAo, _PS, _CT, _LMT, _LRT, _CB, _LMB, _PCa, _T],
  [0, 0, 0, 0, 0, 0, 4, 4, 4, () => UserContext, () => UserContext, () => ParallelismConfiguration, () => TagList]
);
export var PipelineExecution = struct(
  n0,
  _PE,
  0,
  [_PAi, _PEA, _PEDN, _PES, _PED, _PEC, _FR, _CT, _LMT, _CB, _LMB, _PCa, _SEC, _PP, _PVI, _PVDN],
  [
    0,
    0,
    0,
    0,
    0,
    () => PipelineExperimentConfig,
    0,
    4,
    4,
    () => UserContext,
    () => UserContext,
    () => ParallelismConfiguration,
    () => SelectiveExecutionConfig,
    () => ParameterList,
    1,
    0,
  ]
);
export var PipelineVersion = struct(
  n0,
  _PVi,
  0,
  [_PAi, _PVI, _PVDN, _PVD, _CT, _LMT, _CB, _LMB, _LEPEA, _LEPEDN, _LEPES],
  [0, 1, 0, 0, 4, 4, () => UserContext, () => UserContext, 0, 0, 0]
);
export var PlacementSpecification = struct(n0, _PSla, 0, [_USIl, _ICns], [0, 1]);
export var ProcessingJob = struct(
  n0,
  _PJ,
  0,
  [
    _PIr,
    _POC,
    _PJN,
    _PR,
    _SCt,
    _ASp,
    _E,
    _NCe,
    _RAo,
    _ECxp,
    _PJA,
    _PJS,
    _EMx,
    _FR,
    _PET,
    _PST,
    _LMT,
    _CT,
    _MSA,
    _AMLJAu,
    _TJA,
    _T,
  ],
  [
    () => ProcessingInputs,
    () => ProcessingOutputConfig,
    0,
    () => ProcessingResources,
    () => ProcessingStoppingCondition,
    () => AppSpecification,
    128 | 0,
    () => NetworkConfig,
    0,
    () => ExperimentConfig,
    0,
    0,
    0,
    0,
    4,
    4,
    4,
    4,
    0,
    0,
    0,
    () => TagList,
  ]
);
export var ProfilerConfig = struct(n0, _PCr, 0, [_SOP, _PIIM, _PPr, _DPis], [0, 1, 128 | 0, 2]);
export var ProfilerRuleEvaluationStatus = struct(n0, _PRESr, 0, [_RCN, _REJA, _RES, _SDt, _LMT], [0, 0, 0, 0, 4]);
export var Project = struct(
  n0,
  _Proj,
  0,
  [_PAr, _PNr, _PIro, _PDr, _SCPD, _SCPPD, _PSr, _CB, _CT, _TPD, _T, _LMT, _LMB],
  [
    0,
    0,
    0,
    0,
    () => ServiceCatalogProvisioningDetails,
    () => ServiceCatalogProvisionedProductDetails,
    0,
    () => UserContext,
    4,
    () => TemplateProviderDetailList,
    () => TagList,
    4,
    () => UserContext,
  ]
);
export var RemoteDebugConfig = struct(n0, _RDC, 0, [_ERD], [2]);
export var ResourceConfig = struct(
  n0,
  _RCe,
  0,
  [_IT, _ICns, _VSIGB, _VKKI, _KAPIS, _IG, _TPA, _IPCn],
  [0, 1, 1, 0, 1, () => InstanceGroups, 0, () => InstancePlacementConfig]
);
export var RetryStrategy = struct(n0, _RSe, 0, [_MRAa], [1]);
export var S3DataSource = struct(
  n0,
  _SDS,
  0,
  [_SDT, _SUr, _SDDT, _ANt, _IGNn, _MAC, _HAC],
  [0, 0, 0, 64 | 0, 64 | 0, () => ModelAccessConfig, () => HubAccessConfig]
);
export var SearchExpression = struct(
  n0,
  _SEe,
  0,
  [_Fil, _NF, _SEu, _Op],
  [() => FilterList, () => NestedFiltersList, () => SearchExpressionList, 0]
);
export var SearchRecord = struct(
  n0,
  _SRe,
  0,
  [_TJ, _Exp, _Tr, _TCr, _En, _MPod, _MPG, _Pi, _PE, _PVi, _FG, _FMe, _Proj, _HPTJ, _MCod, _Mod],
  [
    () => TrainingJob,
    () => Experiment,
    () => Trial,
    () => TrialComponent,
    () => Endpoint,
    [() => ModelPackage, 0],
    () => ModelPackageGroup,
    () => Pipeline,
    () => PipelineExecution,
    () => PipelineVersion,
    () => FeatureGroup,
    () => FeatureMetadata,
    () => Project,
    () => HyperParameterTuningJobSearchEntity,
    [() => ModelCard, 0],
    () => ModelDashboardModel,
  ]
);
export var SearchRequest = struct(
  n0,
  _SRea,
  0,
  [_Res, _SEe, _SBo, _SO, _NT, _MR, _CAFO, _VCi],
  [0, () => SearchExpression, 0, 0, 0, 1, 0, () => VisibilityConditionsList]
);
export var SearchResponse = struct(
  n0,
  _SRear,
  0,
  [_Resu, _NT, _TH],
  [[() => SearchResultsList, 0], 0, () => TotalHits]
);
export var SecondaryStatusTransition = struct(n0, _SSTe, 0, [_St, _STt, _ETn, _SM], [0, 4, 4, 0]);
export var SessionChainingConfig = struct(n0, _SCC, 0, [_ESTC], [2]);
export var ShuffleConfig = struct(n0, _SCh, 0, [_Se], [1]);
export var StoppingCondition = struct(n0, _SCt, 0, [_MRIS, _MWTIS, _MPTIS], [1, 1, 1]);
export var TargetPlatform = struct(n0, _TPa, 0, [_Os, _Arc, _Acc], [0, 0, 0]);
export var TensorBoardOutputConfig = struct(n0, _TBOC, 0, [_LP, _SOP], [0, 0]);
export var TotalHits = struct(n0, _TH, 0, [_Va, _Rel], [1, 0]);
export var TrainingImageConfig = struct(n0, _TIC, 0, [_TRAM, _TRAC], [0, () => TrainingRepositoryAuthConfig]);
export var TrainingJob = struct(
  n0,
  _TJ,
  0,
  [
    _TJN,
    _TJA,
    _TJAu,
    _LJA,
    _AMLJAu,
    _MAo,
    _TJS,
    _SSe,
    _FR,
    _HP,
    _ASl,
    _RAo,
    _IDC,
    _ODC,
    _RCe,
    _VC,
    _SCt,
    _CT,
    _TST,
    _TET,
    _LMT,
    _SST,
    _FMDL,
    _ENI,
    _EICTE,
    _EMST,
    _CCh,
    _TTIS,
    _BTIS,
    _DHC,
    _ECxp,
    _DRC,
    _TBOC,
    _DRESe,
    _PCr,
    _E,
    _RSe,
    _T,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    () => ModelArtifacts,
    0,
    0,
    0,
    128 | 0,
    () => AlgorithmSpecification,
    0,
    () => InputDataConfig,
    () => OutputDataConfig,
    () => ResourceConfig,
    () => VpcConfig,
    () => StoppingCondition,
    4,
    4,
    4,
    4,
    () => SecondaryStatusTransitions,
    () => FinalMetricDataList,
    2,
    2,
    2,
    () => CheckpointConfig,
    1,
    1,
    () => DebugHookConfig,
    () => ExperimentConfig,
    () => DebugRuleConfigurations,
    () => TensorBoardOutputConfig,
    () => DebugRuleEvaluationStatuses,
    () => ProfilerConfig,
    128 | 0,
    () => RetryStrategy,
    () => TagList,
  ]
);
export var TrainingJobDefinition = struct(
  n0,
  _TJD,
  0,
  [_TIM, _HP, _IDC, _ODC, _RCe, _SCt],
  [0, 128 | 0, () => InputDataConfig, () => OutputDataConfig, () => ResourceConfig, () => StoppingCondition]
);
export var TrainingRepositoryAuthConfig = struct(n0, _TRAC, 0, [_TRCPA], [0]);
export var TrainingSpecification = struct(
  n0,
  _TS,
  0,
  [_TI, _TID, _SHPu, _STITu, _SDTu, _MD, _TCra, _STJOM, _ASDS],
  [
    0,
    0,
    () => HyperParameterSpecifications,
    64 | 0,
    2,
    () => MetricDefinitionList,
    () => ChannelSpecifications,
    () => HyperParameterTuningJobObjectives,
    () => AdditionalS3DataSource,
  ]
);
export var TransformJob = struct(
  n0,
  _TJr,
  0,
  [
    _TJNr,
    _TJAr,
    _TJSr,
    _FR,
    _MNo,
    _MCT,
    _MCCo,
    _MPIMB,
    _BS,
    _E,
    _TIr,
    _TO,
    _DCC,
    _TR,
    _CT,
    _TSTr,
    _TETr,
    _LJA,
    _AMLJAu,
    _DP,
    _ECxp,
    _T,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    1,
    () => ModelClientConfig,
    1,
    0,
    128 | 0,
    () => TransformInput,
    () => TransformOutput,
    () => BatchDataCaptureConfig,
    () => TransformResources,
    4,
    4,
    4,
    0,
    0,
    () => DataProcessing,
    () => ExperimentConfig,
    () => TagList,
  ]
);
export var Trial = struct(
  n0,
  _Tr,
  0,
  [_TN, _TA, _DNi, _ENx, _S, _CT, _CB, _LMT, _LMB, _MP, _T, _TCS],
  [
    0,
    0,
    0,
    0,
    () => TrialSource,
    4,
    () => UserContext,
    4,
    () => UserContext,
    () => MetadataProperties,
    () => TagList,
    () => TrialComponentSimpleSummaries,
  ]
);
export var TrialComponent = struct(
  n0,
  _TCr,
  0,
  [_TCN, _DNi, _TCA, _S, _St, _STt, _ETn, _CT, _CB, _LMT, _LMB, _P, _IAn, _OA, _Met, _MP, _SDo, _LGA, _T, _Paren, _RNu],
  [
    0,
    0,
    0,
    () => TrialComponentSource,
    () => TrialComponentStatus,
    4,
    4,
    4,
    () => UserContext,
    4,
    () => UserContext,
    () => TrialComponentParameters,
    () => TrialComponentArtifacts,
    () => TrialComponentArtifacts,
    () => TrialComponentMetricSummaries,
    () => MetadataProperties,
    () => TrialComponentSourceDetail,
    0,
    () => TagList,
    () => Parents,
    0,
  ]
);
export var TrialComponentSimpleSummary = struct(
  n0,
  _TCSS,
  0,
  [_TCN, _TCA, _TCSr, _CT, _CB],
  [0, 0, () => TrialComponentSource, 4, () => UserContext]
);
export var TrialComponentSourceDetail = struct(
  n0,
  _TCSD,
  0,
  [_SA, _TJ, _PJ, _TJr],
  [0, () => TrainingJob, () => ProcessingJob, () => TransformJob]
);
export var TuningJobCompletionCriteria = struct(
  n0,
  _TJCC,
  0,
  [_TOMV, _BONI, _CDo],
  [1, () => BestObjectiveNotImproving, () => ConvergenceDetected]
);
export var VisibilityConditions = struct(n0, _VCi, 0, [_K, _Va], [0, 0]);
export var AlgorithmStatusItemList = list(n0, _ASIL, 0, () => AlgorithmStatusItem);
export var AlgorithmValidationProfiles = list(n0, _AVPl, 0, () => AlgorithmValidationProfile);
export var AttributeNames = 64 | 0;

export var AutoParameters = list(n0, _APu, 0, () => AutoParameter);
export var CategoricalParameterRanges = list(n0, _CPRa, 0, () => CategoricalParameterRange);
export var ChannelSpecifications = list(n0, _CSha, 0, () => ChannelSpecification);
export var CollectionConfigurations = list(n0, _CColl, 0, () => CollectionConfiguration);
export var CompressionTypes = 64 | 0;

export var ContinuousParameterRanges = list(n0, _CPRon, 0, () => ContinuousParameterRange);
export var DebugRuleConfigurations = list(n0, _DRC, 0, () => DebugRuleConfiguration);
export var DebugRuleEvaluationStatuses = list(n0, _DRESe, 0, () => DebugRuleEvaluationStatus);
export var FilterList = list(n0, _FL, 0, () => Filter);
export var FinalMetricDataList = list(n0, _FMDL, 0, () => MetricData);
export var HyperParameterSpecifications = list(n0, _HPSy, 0, () => HyperParameterSpecification);
export var HyperParameterTrainingJobDefinitions = list(n0, _HPTJDy, 0, () => HyperParameterTrainingJobDefinition);
export var HyperParameterTuningInstanceConfigs = list(n0, _HPTICy, 0, () => HyperParameterTuningInstanceConfig);
export var HyperParameterTuningJobObjectives = list(n0, _HPTJOy, 0, () => HyperParameterTuningJobObjective);
export var InputDataConfig = list(n0, _IDC, 0, () => Channel);
export var InputModes = 64 | 0;

export var InstanceGroupNames = 64 | 0;

export var InstanceGroups = list(n0, _IG, 0, () => InstanceGroup);
export var IntegerParameterRanges = list(n0, _IPRn, 0, () => IntegerParameterRange);
export var MetricDefinitionList = list(n0, _MDLe, 0, () => MetricDefinition);
export var ModelDashboardEndpoints = list(n0, _MDEo, 0, () => ModelDashboardEndpoint);
export var ModelDashboardMonitoringSchedules = list(n0, _MDMSo, 0, () => ModelDashboardMonitoringSchedule);
export var MonitoringScheduleList = list(n0, _MSLo, 0, () => MonitoringSchedule);
export var NeoVpcSecurityGroupIds = 64 | 0;

export var NeoVpcSubnets = 64 | 0;

export var NestedFiltersList = list(n0, _NFL, 0, () => NestedFilters);
export var OptimizationConfigs = list(n0, _OCp, 0, () => OptimizationConfig);
export var OptimizationVpcSecurityGroupIds = 64 | 0;

export var OptimizationVpcSubnets = 64 | 0;

export var ParameterValues = 64 | 0;

export var ParentHyperParameterTuningJobs = list(n0, _PHPTJ, 0, () => ParentHyperParameterTuningJob);
export var Parents = list(n0, _Paren, 0, () => Parent);
export var PlacementSpecifications = list(n0, _PSl, 0, () => PlacementSpecification);
export var ProfilerRuleEvaluationStatuses = list(n0, _PRES, 0, () => ProfilerRuleEvaluationStatus);
export var SearchExpressionList = list(n0, _SEL, 0, () => SearchExpression);
export var SearchResultsList = list(n0, _SRL, 0, [() => SearchRecord, 0]);
export var SecondaryStatusTransitions = list(n0, _SST, 0, () => SecondaryStatusTransition);
export var TrainingContainerArguments = 64 | 0;

export var TrainingContainerEntrypoint = 64 | 0;

export var TrainingInstanceTypes = 64 | 0;

export var TrialComponentSimpleSummaries = list(n0, _TCSSr, 0, () => TrialComponentSimpleSummary);
export var VisibilityConditionsList = list(n0, _VCL, 0, () => VisibilityConditions);
export var CollectionParameters = 128 | 0;

export var HookParameters = 128 | 0;

export var HyperParameterTrainingJobEnvironmentMap = 128 | 0;

export var OptimizationJobEnvironmentVariables = 128 | 0;

export var TrainingEnvironmentMap = 128 | 0;

export var OptimizationConfig = uni(
  n0,
  _OCpti,
  0,
  [_MQC, _MCCod, _MSCo],
  [() => ModelQuantizationConfig, () => ModelCompilationConfig, () => ModelShardingConfig]
);
export var CreateAlgorithm = op(
  n0,
  _CAreat,
  0,
  () => CreateAlgorithmInput,
  () => CreateAlgorithmOutput
);
export var CreateCompilationJob = op(
  n0,
  _CCJ,
  0,
  () => CreateCompilationJobRequest,
  () => CreateCompilationJobResponse
);
export var CreateHyperParameterTuningJob = op(
  n0,
  _CHPTJ,
  0,
  () => CreateHyperParameterTuningJobRequest,
  () => CreateHyperParameterTuningJobResponse
);
export var CreateOptimizationJob = op(
  n0,
  _COJ,
  0,
  () => CreateOptimizationJobRequest,
  () => CreateOptimizationJobResponse
);
export var CreateTrainingJob = op(
  n0,
  _CTJ,
  0,
  () => CreateTrainingJobRequest,
  () => CreateTrainingJobResponse
);
export var DescribeAlgorithm = op(
  n0,
  _DAesc,
  0,
  () => DescribeAlgorithmInput,
  () => DescribeAlgorithmOutput
);
export var DescribeCompilationJob = op(
  n0,
  _DCJe,
  0,
  () => DescribeCompilationJobRequest,
  () => DescribeCompilationJobResponse
);
export var DescribeHyperParameterTuningJob = op(
  n0,
  _DHPTJe,
  0,
  () => DescribeHyperParameterTuningJobRequest,
  () => DescribeHyperParameterTuningJobResponse
);
export var DescribeOptimizationJob = op(
  n0,
  _DOJe,
  0,
  () => DescribeOptimizationJobRequest,
  () => DescribeOptimizationJobResponse
);
export var DescribeTrainingJob = op(
  n0,
  _DTJ,
  0,
  () => DescribeTrainingJobRequest,
  () => DescribeTrainingJobResponse
);
export var Search = op(
  n0,
  _Sea,
  0,
  () => SearchRequest,
  () => SearchResponse
);
