// smithy-typescript generated code
import { error, list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  InternalServiceException as __InternalServiceException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _aGJA,
  _AGJDS,
  _aMA,
  _AQM,
  _aS,
  _aSC,
  _aTA,
  _c,
  _CAM,
  _cAMA,
  _CAMR,
  _CAMRr,
  _cC,
  _CCAM,
  _CCAMR,
  _CCAMRr,
  _CCMA,
  _CCMAA,
  _CCMAAR,
  _CCMAARr,
  _CCMAR,
  _CCMARr,
  _CCo,
  _cEP,
  _cI,
  _cIo,
  _cMAA,
  _cMAAA,
  _cMAAo,
  _CMLIC,
  _CMLICR,
  _CMLICRr,
  _cNh,
  _cRTOCP,
  _cT,
  _CTMr,
  _CTMRr,
  _CTMRre,
  _d,
  _dC,
  _dS,
  _e,
  _env,
  _GAGJ,
  _GAGJR,
  _GAGJRe,
  _GMLIC,
  _GMLICR,
  _GMLICRe,
  _h,
  _hE,
  _ht,
  _IC,
  _iC,
  _iCC,
  _ICDS,
  _ISE,
  _iSIO,
  _ITDC,
  _iTDC,
  _ITDCn,
  _kKA,
  _m,
  _me,
  _mI,
  _mICA,
  _mMSS,
  _n,
  _nOF,
  _nOR,
  _nu,
  _oC,
  _oCu,
  _pa,
  _pC,
  _pQI,
  _PQIP,
  _pQIP,
  _PQSQLP,
  _qN,
  _qS,
  _qV,
  _rA,
  _rC,
  _rF,
  _rID,
  _RM,
  _rM,
  _RMe,
  _rMe,
  _s,
  _sA,
  _SAEJ,
  _SAEJR,
  _SAGJ,
  _SAGJR,
  _SAGJRt,
  _sAM,
  _sB,
  _sC,
  _sCC,
  _sco,
  _sDt,
  _se,
  _sIG,
  _sP,
  _SQEE,
  _STMIJ,
  _STMIJR,
  _STMIJRt,
  _t,
  _ta,
  _tCC,
  _tDA,
  _tDET,
  _tDST,
  _tIM,
  _tMA,
  _tMIJA,
  _tMVI,
  _uT,
  _vI,
  _w,
  _WCC,
  n0,
  Unit,
} from "./schemas_0";
import { AudienceSizeConfig, ConfiguredAudienceModelOutputConfig } from "./schemas_4_Audience";
import { AudienceSize } from "./schemas_7_Audience";
import {
  ContainerConfig,
  InferenceContainerConfig,
  InferenceContainerExecutionParameters,
  InferenceResourceConfig,
  ModelInferenceDataSource,
  ModelTrainingDataChannels,
} from "./schemas_8_Model";
import { S3ConfigMap } from "./schemas_10_Audience";
import { PrivacyConfiguration } from "./schemas_12_ConfiguredModel";
import { InferenceOutputConfiguration } from "./schemas_14_ModelInference";
import { ResourceConfig, StoppingCondition } from "./schemas_17_Get";
import { StatusDetails } from "./schemas_20_Get";

/* eslint no-var: 0 */

export var AudienceGenerationJobDataSource = struct(
  n0,
  _AGJDS,
  0,
  [_dS, _rA, _sP, _sCC],
  [() => S3ConfigMap, 0, [() => ProtectedQuerySQLParameters, 0], () => ComputeConfiguration]
);
export var AudienceQualityMetrics = struct(n0, _AQM, 0, [_rM, _rMe], [() => RelevanceMetrics, 1]);
export var CreateAudienceModelRequest = struct(
  n0,
  _CAMR,
  0,
  [_tDST, _tDET, _n, _tDA, _kKA, _ta, _d],
  [5, 5, 0, 0, 0, 128 | 0, 0]
);
export var CreateAudienceModelResponse = struct(n0, _CAMRr, 0, [_aMA], [0]);
export var CreateConfiguredAudienceModelRequest = struct(
  n0,
  _CCAMR,
  0,
  [_n, _aMA, _oCu, _d, _sAM, _mMSS, _aSC, _ta, _cRTOCP],
  [0, 0, () => ConfiguredAudienceModelOutputConfig, 0, 64 | 0, 1, () => AudienceSizeConfig, 128 | 0, 0]
);
export var CreateConfiguredAudienceModelResponse = struct(n0, _CCAMRr, 0, [_cAMA], [0]);
export var CreateConfiguredModelAlgorithmAssociationRequest = struct(
  n0,
  _CCMAAR,
  0,
  [_mI, _cMAA, _n, _d, _pC, _ta],
  [[0, 1], 0, 0, 0, () => PrivacyConfiguration, 128 | 0]
);
export var CreateConfiguredModelAlgorithmAssociationResponse = struct(n0, _CCMAARr, 0, [_cMAAA], [0]);
export var CreateConfiguredModelAlgorithmRequest = struct(
  n0,
  _CCMAR,
  0,
  [_n, _d, _rA, _tCC, _iCC, _ta, _kKA],
  [0, 0, 0, () => ContainerConfig, () => InferenceContainerConfig, 128 | 0, 0]
);
export var CreateConfiguredModelAlgorithmResponse = struct(n0, _CCMARr, 0, [_cMAA], [0]);
export var CreateMLInputChannelRequest = struct(
  n0,
  _CMLICR,
  0,
  [_mI, _cMAAo, _iC, _n, _rID, _d, _kKA, _ta],
  [[0, 1], 64 | 0, [() => InputChannel, 0], 0, 1, 0, 0, 128 | 0]
);
export var CreateMLInputChannelResponse = struct(n0, _CMLICRr, 0, [_mICA], [0]);
export var CreateTrainedModelRequest = struct(
  n0,
  _CTMRr,
  0,
  [_mI, _n, _cMAAA, _h, _env, _rC, _sC, _iTDC, _dC, _tIM, _d, _kKA, _ta],
  [
    [0, 1],
    0,
    0,
    128 | 0,
    128 | 0,
    () => ResourceConfig,
    () => StoppingCondition,
    () => IncrementalTrainingDataChannels,
    () => ModelTrainingDataChannels,
    0,
    0,
    0,
    128 | 0,
  ]
);
export var CreateTrainedModelResponse = struct(n0, _CTMRre, 0, [_tMA, _vI], [0, 0]);
export var GetAudienceGenerationJobRequest = struct(n0, _GAGJR, 0, [_aGJA], [[0, 1]]);
export var GetAudienceGenerationJobResponse = struct(
  n0,
  _GAGJRe,
  0,
  [_cT, _uT, _aGJA, _n, _d, _s, _sDt, _cAMA, _sA, _iSIO, _cI, _me, _sB, _ta, _pQI],
  [
    5,
    5,
    0,
    0,
    0,
    0,
    () => StatusDetails,
    0,
    [() => AudienceGenerationJobDataSource, 0],
    2,
    0,
    () => AudienceQualityMetrics,
    0,
    128 | 0,
    0,
  ]
);
export var GetMLInputChannelRequest = struct(
  n0,
  _GMLICR,
  0,
  [_mICA, _mI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetMLInputChannelResponse = struct(
  n0,
  _GMLICRe,
  0,
  [_mI, _cIo, _mICA, _n, _cMAAo, _s, _sDt, _rID, _nOR, _d, _cT, _uT, _iC, _pQI, _nOF, _sIG, _kKA, _ta],
  [0, 0, 0, 0, 64 | 0, 0, () => StatusDetails, 1, 1, 0, 5, 5, [() => InputChannel, 0], 0, 1, 1, 0, 128 | 0]
);
export var IncrementalTrainingDataChannel = struct(n0, _ITDC, 0, [_tMA, _vI, _cNh], [0, 0, 0]);
export var InputChannel = struct(n0, _IC, 0, [_dS, _rA], [[() => InputChannelDataSource, 0], 0]);
export var InternalServiceException = error(
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],

  __InternalServiceException
);
export var ProtectedQueryInputParameters = struct(
  n0,
  _PQIP,
  0,
  [_sP, _cC, _rF],
  [[() => ProtectedQuerySQLParameters, 0], () => ComputeConfiguration, 0]
);
export var ProtectedQuerySQLParameters = struct(n0, _PQSQLP, 8, [_qS, _aTA, _pa], [0, 0, 128 | 0]);
export var RelevanceMetric = struct(n0, _RM, 0, [_aS, _sco], [() => AudienceSize, 1]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m, _qN, _qV],
  [0, 0, 1],

  __ServiceQuotaExceededException
);
export var StartAudienceExportJobRequest = struct(n0, _SAEJR, 0, [_n, _aGJA, _aS, _d], [0, 0, () => AudienceSize, 0]);
export var StartAudienceGenerationJobRequest = struct(
  n0,
  _SAGJR,
  0,
  [_n, _cAMA, _sA, _iSIO, _cI, _d, _ta],
  [0, 0, [() => AudienceGenerationJobDataSource, 0], 2, 0, 0, 128 | 0]
);
export var StartAudienceGenerationJobResponse = struct(n0, _SAGJRt, 0, [_aGJA], [0]);
export var StartTrainedModelInferenceJobRequest = struct(
  n0,
  _STMIJR,
  0,
  [_mI, _n, _tMA, _tMVI, _cMAAA, _rC, _oC, _dS, _d, _cEP, _env, _kKA, _ta],
  [
    [0, 1],
    0,
    0,
    0,
    0,
    () => InferenceResourceConfig,
    () => InferenceOutputConfiguration,
    () => ModelInferenceDataSource,
    0,
    () => InferenceContainerExecutionParameters,
    128 | 0,
    0,
    128 | 0,
  ]
);
export var StartTrainedModelInferenceJobResponse = struct(n0, _STMIJRt, 0, [_tMIJA], [0]);
export var WorkerComputeConfiguration = struct(n0, _WCC, 0, [_t, _nu], [0, 1]);
export var IncrementalTrainingDataChannels = list(n0, _ITDCn, 0, () => IncrementalTrainingDataChannel);
export var RelevanceMetrics = list(n0, _RMe, 0, () => RelevanceMetric);
export var ParameterMap = 128 | 0;

export var ComputeConfiguration = uni(n0, _CCo, 0, [_w], [() => WorkerComputeConfiguration]);
export var InputChannelDataSource = uni(n0, _ICDS, 0, [_pQIP], [[() => ProtectedQueryInputParameters, 0]]);
export var CreateAudienceModel = op(
  n0,
  _CAM,
  {
    [_ht]: ["POST", "/audience-model", 200],
  },
  () => CreateAudienceModelRequest,
  () => CreateAudienceModelResponse
);
export var CreateConfiguredAudienceModel = op(
  n0,
  _CCAM,
  {
    [_ht]: ["POST", "/configured-audience-model", 200],
  },
  () => CreateConfiguredAudienceModelRequest,
  () => CreateConfiguredAudienceModelResponse
);
export var CreateConfiguredModelAlgorithm = op(
  n0,
  _CCMA,
  {
    [_ht]: ["POST", "/configured-model-algorithms", 200],
  },
  () => CreateConfiguredModelAlgorithmRequest,
  () => CreateConfiguredModelAlgorithmResponse
);
export var CreateConfiguredModelAlgorithmAssociation = op(
  n0,
  _CCMAA,
  {
    [_ht]: ["POST", "/memberships/{membershipIdentifier}/configured-model-algorithm-associations", 200],
  },
  () => CreateConfiguredModelAlgorithmAssociationRequest,
  () => CreateConfiguredModelAlgorithmAssociationResponse
);
export var CreateMLInputChannel = op(
  n0,
  _CMLIC,
  {
    [_ht]: ["POST", "/memberships/{membershipIdentifier}/ml-input-channels", 200],
  },
  () => CreateMLInputChannelRequest,
  () => CreateMLInputChannelResponse
);
export var CreateTrainedModel = op(
  n0,
  _CTMr,
  {
    [_ht]: ["POST", "/memberships/{membershipIdentifier}/trained-models", 200],
  },
  () => CreateTrainedModelRequest,
  () => CreateTrainedModelResponse
);
export var GetAudienceGenerationJob = op(
  n0,
  _GAGJ,
  {
    [_ht]: ["GET", "/audience-generation-job/{audienceGenerationJobArn}", 200],
  },
  () => GetAudienceGenerationJobRequest,
  () => GetAudienceGenerationJobResponse
);
export var GetMLInputChannel = op(
  n0,
  _GMLIC,
  {
    [_ht]: ["GET", "/memberships/{membershipIdentifier}/ml-input-channels/{mlInputChannelArn}", 200],
  },
  () => GetMLInputChannelRequest,
  () => GetMLInputChannelResponse
);
export var StartAudienceExportJob = op(
  n0,
  _SAEJ,
  {
    [_ht]: ["POST", "/audience-export-job", 200],
  },
  () => StartAudienceExportJobRequest,
  () => Unit
);
export var StartAudienceGenerationJob = op(
  n0,
  _SAGJ,
  {
    [_ht]: ["POST", "/audience-generation-job", 200],
  },
  () => StartAudienceGenerationJobRequest,
  () => StartAudienceGenerationJobResponse
);
export var StartTrainedModelInferenceJob = op(
  n0,
  _STMIJ,
  {
    [_ht]: ["POST", "/memberships/{membershipIdentifier}/trained-model-inference-jobs", 200],
  },
  () => StartTrainedModelInferenceJobRequest,
  () => StartTrainedModelInferenceJobResponse
);
