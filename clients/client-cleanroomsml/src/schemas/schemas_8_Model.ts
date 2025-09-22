// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aMA,
  _CC,
  _cEP,
  _cIo,
  _cMAA,
  _cMAAA,
  _cNh,
  _cT,
  _d,
  _dC,
  _dS,
  _en,
  _env,
  _GAM,
  _GAMR,
  _GAMRe,
  _GCMA,
  _GCMAR,
  _GCMARe,
  _GTM,
  _GTMIJ,
  _GTMIJR,
  _GTMIJRe,
  _GTMR,
  _GTMRe,
  _h,
  _hQ,
  _ht,
  _ICC,
  _iCC,
  _ICEP,
  _iCID,
  _iCns,
  _IRC,
  _iT,
  _iTDC,
  _iU,
  _kKA,
  _lS,
  _lSD,
  _MD,
  _mD,
  _MDL,
  _mI,
  _mICA,
  _MIDS,
  _mPIMB,
  _mS,
  _mSD,
  _MTDC,
  _MTDCo,
  _n,
  _oC,
  _r,
  _rA,
  _rC,
  _s,
  _sC,
  _sDDT,
  _sDt,
  _ta,
  _tCC,
  _tCID,
  _tDA,
  _tDET,
  _tDST,
  _tIM,
  _tMA,
  _tMIJA,
  _tMVI,
  _uT,
  _vI,
  n0,
} from "./schemas_0";
import { IncrementalTrainingDataChannelsOutput } from "./schemas_3_Trained";
import { InferenceOutputConfiguration } from "./schemas_14_ModelInference";
import { ResourceConfig, StoppingCondition } from "./schemas_17_Get";
import { StatusDetails } from "./schemas_20_Get";

/* eslint no-var: 0 */

export var ContainerConfig = struct(n0, _CC, 0, [_iU, _en, _a, _mD], [0, 64 | 0, 64 | 0, () => MetricDefinitionList]);
export var GetAudienceModelRequest = struct(n0, _GAMR, 0, [_aMA], [[0, 1]]);
export var GetAudienceModelResponse = struct(
  n0,
  _GAMRe,
  0,
  [_cT, _uT, _tDST, _tDET, _aMA, _n, _tDA, _s, _sDt, _kKA, _ta, _d],
  [5, 5, 5, 5, 0, 0, 0, 0, () => StatusDetails, 0, 128 | 0, 0]
);
export var GetConfiguredModelAlgorithmRequest = struct(n0, _GCMAR, 0, [_cMAA], [[0, 1]]);
export var GetConfiguredModelAlgorithmResponse = struct(
  n0,
  _GCMARe,
  0,
  [_cT, _uT, _cMAA, _n, _tCC, _iCC, _rA, _d, _ta, _kKA],
  [5, 5, 0, 0, () => ContainerConfig, () => InferenceContainerConfig, 0, 0, 128 | 0, 0]
);
export var GetTrainedModelInferenceJobRequest = struct(
  n0,
  _GTMIJR,
  0,
  [_mI, _tMIJA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetTrainedModelInferenceJobResponse = struct(
  n0,
  _GTMIJRe,
  0,
  [
    _cT,
    _uT,
    _tMIJA,
    _cMAAA,
    _n,
    _s,
    _tMA,
    _tMVI,
    _rC,
    _oC,
    _mI,
    _dS,
    _cEP,
    _sDt,
    _d,
    _iCID,
    _env,
    _kKA,
    _mS,
    _mSD,
    _lS,
    _lSD,
    _ta,
  ],
  [
    5,
    5,
    0,
    0,
    0,
    0,
    0,
    0,
    () => InferenceResourceConfig,
    () => InferenceOutputConfiguration,
    0,
    () => ModelInferenceDataSource,
    () => InferenceContainerExecutionParameters,
    () => StatusDetails,
    0,
    0,
    128 | 0,
    0,
    0,
    0,
    0,
    0,
    128 | 0,
  ]
);
export var GetTrainedModelRequest = struct(
  n0,
  _GTMR,
  0,
  [_tMA, _mI, _vI],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _vI,
      },
    ],
  ]
);
export var GetTrainedModelResponse = struct(
  n0,
  _GTMRe,
  0,
  [
    _mI,
    _cIo,
    _tMA,
    _vI,
    _iTDC,
    _n,
    _d,
    _s,
    _sDt,
    _cMAAA,
    _rC,
    _tIM,
    _sC,
    _mS,
    _mSD,
    _lS,
    _lSD,
    _tCID,
    _cT,
    _uT,
    _h,
    _env,
    _kKA,
    _ta,
    _dC,
  ],
  [
    0,
    0,
    0,
    0,
    () => IncrementalTrainingDataChannelsOutput,
    0,
    0,
    0,
    () => StatusDetails,
    0,
    () => ResourceConfig,
    0,
    () => StoppingCondition,
    0,
    0,
    0,
    0,
    0,
    5,
    5,
    128 | 0,
    128 | 0,
    0,
    128 | 0,
    () => ModelTrainingDataChannels,
  ]
);
export var InferenceContainerConfig = struct(n0, _ICC, 0, [_iU], [0]);
export var InferenceContainerExecutionParameters = struct(n0, _ICEP, 0, [_mPIMB], [1]);
export var InferenceResourceConfig = struct(n0, _IRC, 0, [_iT, _iCns], [0, 1]);
export var MetricDefinition = struct(n0, _MD, 0, [_n, _r], [0, 0]);
export var ModelInferenceDataSource = struct(n0, _MIDS, 0, [_mICA], [0]);
export var ModelTrainingDataChannel = struct(n0, _MTDC, 0, [_mICA, _cNh, _sDDT], [0, 0, 0]);
export var ContainerArguments = 64 | 0;

export var ContainerEntrypoint = 64 | 0;

export var MetricDefinitionList = list(n0, _MDL, 0, () => MetricDefinition);
export var ModelTrainingDataChannels = list(n0, _MTDCo, 0, () => ModelTrainingDataChannel);
export var Environment = 128 | 0;

export var HyperParameters = 128 | 0;

export var InferenceEnvironmentMap = 128 | 0;

export var GetAudienceModel = op(
  n0,
  _GAM,
  {
    [_ht]: ["GET", "/audience-model/{audienceModelArn}", 200],
  },
  () => GetAudienceModelRequest,
  () => GetAudienceModelResponse
);
export var GetConfiguredModelAlgorithm = op(
  n0,
  _GCMA,
  {
    [_ht]: ["GET", "/configured-model-algorithms/{configuredModelAlgorithmArn}", 200],
  },
  () => GetConfiguredModelAlgorithmRequest,
  () => GetConfiguredModelAlgorithmResponse
);
export var GetTrainedModel = op(
  n0,
  _GTM,
  {
    [_ht]: ["GET", "/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}", 200],
  },
  () => GetTrainedModelRequest,
  () => GetTrainedModelResponse
);
export var GetTrainedModelInferenceJob = op(
  n0,
  _GTMIJ,
  {
    [_ht]: [
      "GET",
      "/memberships/{membershipIdentifier}/trained-model-inference-jobs/{trainedModelInferenceJobArn}",
      200,
    ],
  },
  () => GetTrainedModelInferenceJobRequest,
  () => GetTrainedModelInferenceJobResponse
);
