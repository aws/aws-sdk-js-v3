// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cAI,
  _cIo,
  _cMAAA,
  _cT,
  _cTMIJ,
  _CTMIJL,
  _CTMIJS,
  _d,
  _hQ,
  _ht,
  _LCTMIJ,
  _LCTMIJR,
  _LCTMIJRi,
  _lS,
  _lSD,
  _LTMIJ,
  _LTMIJR,
  _LTMIJRi,
  _mI,
  _mR,
  _mS,
  _mSD,
  _n,
  _nT,
  _oC,
  _s,
  _tMA,
  _tMIJ,
  _tMIJA,
  _TMIJL,
  _TMIJS,
  _tMVI,
  _uT,
  n0,
} from "./schemas_0";
import { InferenceOutputConfiguration } from "./schemas_14_ModelInference";

/* eslint no-var: 0 */

export var CollaborationTrainedModelInferenceJobSummary = struct(
  n0,
  _CTMIJS,
  0,
  [_tMIJA, _cMAAA, _mI, _tMA, _tMVI, _cIo, _s, _oC, _n, _d, _mS, _mSD, _lS, _lSD, _cT, _uT, _cAI],
  [0, 0, 0, 0, 0, 0, 0, () => InferenceOutputConfiguration, 0, 0, 0, 0, 0, 0, 5, 5, 0]
);
export var ListCollaborationTrainedModelInferenceJobsRequest = struct(
  n0,
  _LCTMIJR,
  0,
  [_nT, _mR, _cIo, _tMA, _tMVI],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _tMA,
      },
    ],
    [
      0,
      {
        [_hQ]: _tMVI,
      },
    ],
  ]
);
export var ListCollaborationTrainedModelInferenceJobsResponse = struct(
  n0,
  _LCTMIJRi,
  0,
  [_nT, _cTMIJ],
  [0, () => CollaborationTrainedModelInferenceJobList]
);
export var ListTrainedModelInferenceJobsRequest = struct(
  n0,
  _LTMIJR,
  0,
  [_nT, _mR, _mI, _tMA, _tMVI],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _tMA,
      },
    ],
    [
      0,
      {
        [_hQ]: _tMVI,
      },
    ],
  ]
);
export var ListTrainedModelInferenceJobsResponse = struct(
  n0,
  _LTMIJRi,
  0,
  [_nT, _tMIJ],
  [0, () => TrainedModelInferenceJobList]
);
export var TrainedModelInferenceJobSummary = struct(
  n0,
  _TMIJS,
  0,
  [_tMIJA, _cMAAA, _mI, _tMA, _tMVI, _cIo, _s, _oC, _n, _d, _mS, _mSD, _lS, _lSD, _cT, _uT],
  [0, 0, 0, 0, 0, 0, 0, () => InferenceOutputConfiguration, 0, 0, 0, 0, 0, 0, 5, 5]
);
export var CollaborationTrainedModelInferenceJobList = list(
  n0,
  _CTMIJL,
  0,
  () => CollaborationTrainedModelInferenceJobSummary
);
export var TrainedModelInferenceJobList = list(n0, _TMIJL, 0, () => TrainedModelInferenceJobSummary);
export var ListCollaborationTrainedModelInferenceJobs = op(
  n0,
  _LCTMIJ,
  {
    [_ht]: ["GET", "/collaborations/{collaborationIdentifier}/trained-model-inference-jobs", 200],
  },
  () => ListCollaborationTrainedModelInferenceJobsRequest,
  () => ListCollaborationTrainedModelInferenceJobsResponse
);
export var ListTrainedModelInferenceJobs = op(
  n0,
  _LTMIJ,
  {
    [_ht]: ["GET", "/memberships/{membershipIdentifier}/trained-model-inference-jobs", 200],
  },
  () => ListTrainedModelInferenceJobsRequest,
  () => ListTrainedModelInferenceJobsResponse
);
