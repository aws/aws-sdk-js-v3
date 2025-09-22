// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cAI,
  _cIo,
  _cMAAA,
  _cNh,
  _cT,
  _cTM,
  _CTML,
  _CTMS,
  _d,
  _hQ,
  _ht,
  _iTDC,
  _ITDCO,
  _ITDCOn,
  _LCTM,
  _LCTMR,
  _LCTMRi,
  _LTM,
  _LTMR,
  _LTMRi,
  _LTMV,
  _LTMVR,
  _LTMVRi,
  _mI,
  _mN,
  _mR,
  _n,
  _nT,
  _s,
  _tM,
  _tMA,
  _TML,
  _TMS,
  _uT,
  _vI,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CollaborationTrainedModelSummary = struct(
  n0,
  _CTMS,
  0,
  [_cT, _uT, _tMA, _n, _vI, _iTDC, _d, _mI, _cIo, _s, _cMAAA, _cAI],
  [5, 5, 0, 0, 0, () => IncrementalTrainingDataChannelsOutput, 0, 0, 0, 0, 0, 0]
);
export var IncrementalTrainingDataChannelOutput = struct(n0, _ITDCO, 0, [_cNh, _vI, _mN], [0, 0, 0]);
export var ListCollaborationTrainedModelsRequest = struct(
  n0,
  _LCTMR,
  0,
  [_nT, _mR, _cIo],
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
  ]
);
export var ListCollaborationTrainedModelsResponse = struct(
  n0,
  _LCTMRi,
  0,
  [_nT, _cTM],
  [0, () => CollaborationTrainedModelList]
);
export var ListTrainedModelsRequest = struct(
  n0,
  _LTMR,
  0,
  [_nT, _mR, _mI],
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
  ]
);
export var ListTrainedModelsResponse = struct(n0, _LTMRi, 0, [_nT, _tM], [0, () => TrainedModelList]);
export var ListTrainedModelVersionsRequest = struct(
  n0,
  _LTMVR,
  0,
  [_nT, _mR, _mI, _tMA, _s],
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
    [0, 1],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
  ]
);
export var ListTrainedModelVersionsResponse = struct(n0, _LTMVRi, 0, [_nT, _tM], [0, () => TrainedModelList]);
export var TrainedModelSummary = struct(
  n0,
  _TMS,
  0,
  [_cT, _uT, _tMA, _vI, _iTDC, _n, _d, _mI, _cIo, _s, _cMAAA],
  [5, 5, 0, 0, () => IncrementalTrainingDataChannelsOutput, 0, 0, 0, 0, 0, 0]
);
export var CollaborationTrainedModelList = list(n0, _CTML, 0, () => CollaborationTrainedModelSummary);
export var IncrementalTrainingDataChannelsOutput = list(n0, _ITDCOn, 0, () => IncrementalTrainingDataChannelOutput);
export var TrainedModelList = list(n0, _TML, 0, () => TrainedModelSummary);
export var ListCollaborationTrainedModels = op(
  n0,
  _LCTM,
  {
    [_ht]: ["GET", "/collaborations/{collaborationIdentifier}/trained-models", 200],
  },
  () => ListCollaborationTrainedModelsRequest,
  () => ListCollaborationTrainedModelsResponse
);
export var ListTrainedModels = op(
  n0,
  _LTM,
  {
    [_ht]: ["GET", "/memberships/{membershipIdentifier}/trained-models", 200],
  },
  () => ListTrainedModelsRequest,
  () => ListTrainedModelsResponse
);
export var ListTrainedModelVersions = op(
  n0,
  _LTMV,
  {
    [_ht]: ["GET", "/memberships/{membershipIdentifier}/trained-models/{trainedModelArn}/versions", 200],
  },
  () => ListTrainedModelVersionsRequest,
  () => ListTrainedModelVersionsResponse
);
