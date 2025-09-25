// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _aAn,
  _AEC,
  _AECM,
  _AECMC,
  _AECMS,
  _aMRF,
  _aT,
  _au,
  _bC,
  _BCB,
  _BCD,
  _BEM,
  _bEM,
  _BEMe,
  _bM,
  _bRC,
  _CEJ,
  _CEJR,
  _CEJRr,
  _cEKI,
  _cM,
  _CMBEM,
  _CMBEMu,
  _cMC,
  _CMD,
  _cMD,
  _CMEMC,
  _cRT,
  _cTo,
  _d,
  _da,
  _dat,
  _de,
  _dL,
  _dMC,
  _EBM,
  _eC,
  _ECv,
  _ED,
  _EDL,
  _EDMC,
  _EDMCv,
  _EDN,
  _EIC,
  _EJD,
  _EMC,
  _eMC,
  _EMCv,
  _EMCva,
  _EMD,
  _EMIP,
  _EMN,
  _EMNv,
  _EODC,
  _EPIS,
  _EPRAGSC,
  _EPRSC,
  _EPRSCv,
  _eq,
  _eSC,
  _ESGC,
  _ESRAGC,
  _ESx,
  _ESxt,
  _FA,
  _fDA,
  _FFR,
  _FFRi,
  _fil,
  _fN,
  _fTE,
  _fTI,
  _fV,
  _GC,
  _gCe,
  _GCu,
  _gCu,
  _gI,
  _gT,
  _gTOE,
  _gV,
  _h,
  _HEC,
  _HECM,
  _HECMu,
  _ht,
  _HTI,
  _HWC,
  _hWC,
  _I,
  _iC,
  _id,
  _IFC,
  _iFC,
  _in,
  _in_,
  _iP,
  _iSI,
  _jA,
  _jD,
  _jN,
  _jT,
  _k,
  _KBC,
  _kBC,
  _kBCn,
  _kBI,
  _KBRAGC,
  _KBRC,
  _kBRC,
  _KBVSC,
  _KIC,
  _kIC,
  _la,
  _lCi,
  _lTe,
  _lTOE,
  _mA,
  _mAe,
  _MAS,
  _MASL,
  _mC,
  _mCe,
  _MCFR,
  _mI,
  _MN,
  _mNe,
  _mo,
  _mTa,
  _n,
  _nE,
  _nI,
  _nOR,
  _nORR,
  _oAr,
  _OC,
  _oC,
  _oDC,
  _oST,
  _PC,
  _pC,
  _pIS,
  _pRSC,
  _pT,
  _PTr,
  _QTC,
  _qTC,
  _rA,
  _RAGC,
  _rAGC,
  _RAGCo,
  _rAGSC,
  _RC,
  _RCa,
  _rCag,
  _rCer,
  _rCet,
  _rCetr,
  _RF,
  _RFL,
  _rM,
  _RMSMC,
  _RS,
  _rS,
  _rSC,
  _RSI,
  _rSI,
  _RSIV,
  _sCt,
  _sL,
  _sMC,
  _sMe,
  _so,
  _SOD,
  _sS,
  _sT,
  _sU,
  _sV,
  _sW,
  _tem,
  _TIC,
  _tIC,
  _tPo,
  _TPT,
  _tPT,
  _tT,
  _ty,
  _uri,
  _va,
  _VSBRC,
  _VSBRMC,
  _vSC,
  _VSRC,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ByteContentBlob = sim(n0, _BCB, 21, 8);
export var EvaluationDatasetName = sim(n0, _EDN, 0, 8);
export var EvaluationJobDescription = sim(n0, _EJD, 0, 8);
export var EvaluationMetricDescription = sim(n0, _EMD, 0, 8);
export var EvaluationMetricName = sim(n0, _EMN, 0, 8);
export var EvaluationModelInferenceParams = sim(n0, _EMIP, 0, 8);
export var HumanTaskInstructions = sim(n0, _HTI, 0, 8);
export var Identifier = sim(n0, _I, 0, 8);
export var MetricName = sim(n0, _MN, 0, 8);
export var TextPromptTemplate = sim(n0, _TPT, 0, 8);
export var AutomatedEvaluationConfig = struct(
  n0,
  _AEC,
  0,
  [_dMC, _eMC, _cMC],
  [
    [() => EvaluationDatasetMetricConfigs, 0],
    () => EvaluatorModelConfig,
    [() => AutomatedEvaluationCustomMetricConfig, 0],
  ]
);
export var AutomatedEvaluationCustomMetricConfig = struct(
  n0,
  _AECMC,
  0,
  [_cM, _eMC],
  [[() => AutomatedEvaluationCustomMetrics, 0], () => CustomMetricEvaluatorModelConfig]
);
export var BedrockEvaluatorModel = struct(n0, _BEM, 0, [_mI], [0]);
export var ByteContentDoc = struct(
  n0,
  _BCD,
  0,
  [_id, _cTo, _da],
  [[() => Identifier, 0], 0, [() => ByteContentBlob, 0]]
);
export var CreateEvaluationJobRequest = struct(
  n0,
  _CEJR,
  0,
  [_jN, _jD, _cRT, _rA, _cEKI, _jT, _aT, _eC, _iC, _oDC],
  [
    0,
    [() => EvaluationJobDescription, 0],
    [0, 4],
    0,
    0,
    () => TagList,
    0,
    [() => EvaluationConfig, 0],
    [() => EvaluationInferenceConfig, 0],
    () => EvaluationOutputDataConfig,
  ]
);
export var CreateEvaluationJobResponse = struct(n0, _CEJRr, 0, [_jA], [0]);
export var CustomMetricBedrockEvaluatorModel = struct(n0, _CMBEM, 0, [_mI], [0]);
export var CustomMetricDefinition = struct(n0, _CMD, 8, [_n, _in, _rS], [[() => MetricName, 0], 0, () => RatingScale]);
export var CustomMetricEvaluatorModelConfig = struct(n0, _CMEMC, 0, [_bEM], [() => CustomMetricBedrockEvaluatorModels]);
export var EvaluationBedrockModel = struct(
  n0,
  _EBM,
  0,
  [_mI, _iP, _pC],
  [0, [() => EvaluationModelInferenceParams, 0], () => PerformanceConfiguration]
);
export var EvaluationDataset = struct(
  n0,
  _ED,
  0,
  [_n, _dL],
  [[() => EvaluationDatasetName, 0], () => EvaluationDatasetLocation]
);
export var EvaluationDatasetMetricConfig = struct(
  n0,
  _EDMC,
  0,
  [_tT, _dat, _mNe],
  [0, [() => EvaluationDataset, 0], [() => EvaluationMetricNames, 0]]
);
export var EvaluationOutputDataConfig = struct(n0, _EODC, 0, [_sU], [0]);
export var EvaluationPrecomputedInferenceSource = struct(n0, _EPIS, 0, [_iSI], [0]);
export var EvaluationPrecomputedRetrieveAndGenerateSourceConfig = struct(n0, _EPRAGSC, 0, [_rSI], [0]);
export var EvaluationPrecomputedRetrieveSourceConfig = struct(n0, _EPRSC, 0, [_rSI], [0]);
export var ExternalSource = struct(n0, _ESx, 0, [_sT, _sL, _bC], [0, () => S3ObjectDoc, [() => ByteContentDoc, 0]]);
export var ExternalSourcesGenerationConfiguration = struct(
  n0,
  _ESGC,
  0,
  [_pT, _gCu, _kIC, _aMRF],
  [[() => PromptTemplate, 0], () => GuardrailConfiguration, () => KbInferenceConfig, 128 | 15]
);
export var ExternalSourcesRetrieveAndGenerateConfiguration = struct(
  n0,
  _ESRAGC,
  0,
  [_mA, _so, _gCe],
  [0, [() => ExternalSources, 0], [() => ExternalSourcesGenerationConfiguration, 0]]
);
export var FieldForReranking = struct(n0, _FFR, 0, [_fN], [0]);
export var FilterAttribute = struct(n0, _FA, 0, [_k, _va], [0, 15]);
export var GenerationConfiguration = struct(
  n0,
  _GC,
  0,
  [_pT, _gCu, _kIC, _aMRF],
  [[() => PromptTemplate, 0], () => GuardrailConfiguration, () => KbInferenceConfig, 128 | 15]
);
export var GuardrailConfiguration = struct(n0, _GCu, 0, [_gI, _gV], [0, 0]);
export var HumanEvaluationConfig = struct(
  n0,
  _HEC,
  0,
  [_hWC, _cM, _dMC],
  [
    [() => HumanWorkflowConfig, 0],
    [() => HumanEvaluationCustomMetrics, 0],
    [() => EvaluationDatasetMetricConfigs, 0],
  ]
);
export var HumanEvaluationCustomMetric = struct(
  n0,
  _HECM,
  0,
  [_n, _d, _rM],
  [[() => EvaluationMetricName, 0], [() => EvaluationMetricDescription, 0], 0]
);
export var HumanWorkflowConfig = struct(n0, _HWC, 0, [_fDA, _in], [0, [() => HumanTaskInstructions, 0]]);
export var ImplicitFilterConfiguration = struct(n0, _IFC, 0, [_mAe, _mA], [[() => MetadataAttributeSchemaList, 0], 0]);
export var KbInferenceConfig = struct(n0, _KIC, 0, [_tIC], [() => TextInferenceConfig]);
export var KnowledgeBaseRetrievalConfiguration = struct(
  n0,
  _KBRC,
  0,
  [_vSC],
  [[() => KnowledgeBaseVectorSearchConfiguration, 0]]
);
export var KnowledgeBaseRetrieveAndGenerateConfiguration = struct(
  n0,
  _KBRAGC,
  0,
  [_kBI, _mA, _rCet, _gCe, _oC],
  [
    0,
    0,
    [() => KnowledgeBaseRetrievalConfiguration, 0],
    [() => GenerationConfiguration, 0],
    () => OrchestrationConfiguration,
  ]
);
export var KnowledgeBaseVectorSearchConfiguration = struct(
  n0,
  _KBVSC,
  0,
  [_nOR, _oST, _fil, _iFC, _rCer],
  [
    1,
    0,
    [() => RetrievalFilter, 0],
    [() => ImplicitFilterConfiguration, 0],
    [() => VectorSearchRerankingConfiguration, 0],
  ]
);
export var MetadataAttributeSchema = struct(n0, _MAS, 8, [_k, _ty, _d], [0, 0, 0]);
export var MetadataConfigurationForReranking = struct(
  n0,
  _MCFR,
  0,
  [_sMe, _sMC],
  [0, [() => RerankingMetadataSelectiveModeConfiguration, 0]]
);
export var OrchestrationConfiguration = struct(n0, _OC, 0, [_qTC], [() => QueryTransformationConfiguration]);
export var PerformanceConfiguration = struct(n0, _PC, 0, [_la], [0]);
export var PromptTemplate = struct(n0, _PTr, 0, [_tPT], [[() => TextPromptTemplate, 0]]);
export var QueryTransformationConfiguration = struct(n0, _QTC, 0, [_ty], [0]);
export var RatingScaleItem = struct(n0, _RSI, 0, [_de, _va], [0, () => RatingScaleItemValue]);
export var RetrieveAndGenerateConfiguration = struct(
  n0,
  _RAGC,
  0,
  [_ty, _kBC, _eSC],
  [
    0,
    [() => KnowledgeBaseRetrieveAndGenerateConfiguration, 0],
    [() => ExternalSourcesRetrieveAndGenerateConfiguration, 0],
  ]
);
export var RetrieveConfig = struct(n0, _RC, 0, [_kBI, _kBRC], [0, [() => KnowledgeBaseRetrievalConfiguration, 0]]);
export var S3ObjectDoc = struct(n0, _SOD, 0, [_uri], [0]);
export var TextInferenceConfig = struct(n0, _TIC, 0, [_tem, _tPo, _mTa, _sS], [1, 1, 1, 64 | 0]);
export var VectorSearchBedrockRerankingConfiguration = struct(
  n0,
  _VSBRC,
  0,
  [_mC, _nORR, _mCe],
  [() => VectorSearchBedrockRerankingModelConfiguration, 1, [() => MetadataConfigurationForReranking, 0]]
);
export var VectorSearchBedrockRerankingModelConfiguration = struct(n0, _VSBRMC, 0, [_mA, _aMRF], [0, 128 | 15]);
export var VectorSearchRerankingConfiguration = struct(
  n0,
  _VSRC,
  0,
  [_ty, _bRC],
  [0, [() => VectorSearchBedrockRerankingConfiguration, 0]]
);
export var AutomatedEvaluationCustomMetrics = list(n0, _AECM, 0, [() => AutomatedEvaluationCustomMetricSource, 0]);
export var BedrockEvaluatorModels = list(n0, _BEMe, 0, () => BedrockEvaluatorModel);
export var CustomMetricBedrockEvaluatorModels = list(n0, _CMBEMu, 0, () => CustomMetricBedrockEvaluatorModel);
export var EvaluationDatasetMetricConfigs = list(n0, _EDMCv, 0, [() => EvaluationDatasetMetricConfig, 0]);
export var EvaluationMetricNames = list(n0, _EMNv, 0, [() => EvaluationMetricName, 0]);
export var EvaluationModelConfigs = list(n0, _EMC, 0, [() => EvaluationModelConfig, 0]);
export var ExternalSources = list(n0, _ESxt, 0, [() => ExternalSource, 0]);
export var FieldsForReranking = list(n0, _FFRi, 8, () => FieldForReranking);
export var HumanEvaluationCustomMetrics = list(n0, _HECMu, 0, [() => HumanEvaluationCustomMetric, 0]);
export var MetadataAttributeSchemaList = list(n0, _MASL, 0, [() => MetadataAttributeSchema, 0]);
export var RagConfigs = list(n0, _RCa, 0, [() => RAGConfig, 0]);
export var RAGStopSequences = 64 | 0;

export var RatingScale = list(n0, _RS, 0, () => RatingScaleItem);
export var RetrievalFilterList = list(n0, _RFL, 0, [() => RetrievalFilter, 0]);
export var AdditionalModelRequestFields = 128 | 15;

export var AutomatedEvaluationCustomMetricSource = uni(n0, _AECMS, 0, [_cMD], [[() => CustomMetricDefinition, 0]]);
export var EvaluationConfig = uni(
  n0,
  _ECv,
  0,
  [_au, _h],
  [
    [() => AutomatedEvaluationConfig, 0],
    [() => HumanEvaluationConfig, 0],
  ]
);
export var EvaluationDatasetLocation = uni(n0, _EDL, 0, [_sU], [0]);
export var EvaluationInferenceConfig = uni(
  n0,
  _EIC,
  0,
  [_mo, _rCag],
  [
    [() => EvaluationModelConfigs, 0],
    [() => RagConfigs, 0],
  ]
);
export var EvaluationModelConfig = uni(
  n0,
  _EMCv,
  0,
  [_bM, _pIS],
  [[() => EvaluationBedrockModel, 0], () => EvaluationPrecomputedInferenceSource]
);
export var EvaluationPrecomputedRagSourceConfig = uni(
  n0,
  _EPRSCv,
  0,
  [_rSC, _rAGSC],
  [() => EvaluationPrecomputedRetrieveSourceConfig, () => EvaluationPrecomputedRetrieveAndGenerateSourceConfig]
);
export var EvaluatorModelConfig = uni(n0, _EMCva, 0, [_bEM], [() => BedrockEvaluatorModels]);
export var KnowledgeBaseConfig = uni(
  n0,
  _KBC,
  0,
  [_rCetr, _rAGC],
  [
    [() => RetrieveConfig, 0],
    [() => RetrieveAndGenerateConfiguration, 0],
  ]
);
export var RAGConfig = uni(
  n0,
  _RAGCo,
  0,
  [_kBCn, _pRSC],
  [[() => KnowledgeBaseConfig, 0], () => EvaluationPrecomputedRagSourceConfig]
);
export var RatingScaleItemValue = uni(n0, _RSIV, 0, [_sV, _fV], [0, 1]);
export var RerankingMetadataSelectiveModeConfiguration = uni(
  n0,
  _RMSMC,
  0,
  [_fTI, _fTE],
  [
    [() => FieldsForReranking, 0],
    [() => FieldsForReranking, 0],
  ]
);
export var RetrievalFilter = uni(
  n0,
  _RF,
  8,
  [_eq, _nE, _gT, _gTOE, _lTe, _lTOE, _in_, _nI, _sW, _lCi, _sCt, _aAn, _oAr],
  [
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    () => FilterAttribute,
    [() => RetrievalFilterList, 0],
    [() => RetrievalFilterList, 0],
  ]
);
export var CreateEvaluationJob = op(
  n0,
  _CEJ,
  {
    [_ht]: ["POST", "/evaluation-jobs", 202],
  },
  () => CreateEvaluationJobRequest,
  () => CreateEvaluationJobResponse
);
